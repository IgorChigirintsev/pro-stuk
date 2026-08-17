// Пакет httpapi — HTTP-слой сервера: маршруты, валидация, коды ошибок.
package httpapi

import (
	"context"
	"crypto/subtle"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"log/slog"
	"net/http"
	"strings"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"

	"stuk/backend/internal/config"
	"stuk/backend/internal/dsp"
	"stuk/backend/internal/gemini"
	"stuk/backend/internal/report"
	"stuk/backend/internal/schema"
	"stuk/backend/internal/state"
	"stuk/backend/internal/stats"
	"stuk/backend/internal/wavio"
)

const (
	maxBodyBytes   = 6 << 20 // 6 МБ
	minDurationSec = 5.0
	maxDurationSec = 35.0
	reportTimeout  = 75 * time.Second
	ipRateLimit    = 10 // запросов в минуту на IP
)

type Server struct {
	cfg        config.Config
	store      *state.Store
	analyzer   report.Analyzer
	limiter    *ipLimiter
	stats      *stats.Store
	hitLimiter *ipLimiter
}

func New(cfg config.Config, store *state.Store, analyzer report.Analyzer, st *stats.Store) *Server {
	return &Server{
		cfg:        cfg,
		store:      store,
		analyzer:   analyzer,
		limiter:    newIPLimiter(ipRateLimit, time.Minute),
		stats:      st,
		hitLimiter: newIPLimiter(60, time.Minute),
	}
}

func (s *Server) Router() http.Handler {
	r := chi.NewRouter()
	r.Use(middleware.Recoverer)
	r.Use(s.logRequests)

	r.Get("/healthz", func(w http.ResponseWriter, _ *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("ok"))
	})

	r.Get("/api/v1/version", func(w http.ResponseWriter, _ *http.Request) {
		writeJSON(w, http.StatusOK, map[string]string{
			"latest_version": s.cfg.LatestVersion,
			"apk_url":        s.cfg.PublicSiteURL + "/app/stuk.apk",
		})
	})

	r.Post("/api/v1/report", s.handleReport)
	r.Post("/api/v1/hit", s.handleHit)
	r.Get("/api/v1/stats", s.handleStats)
	return r
}

func (s *Server) handleReport(w http.ResponseWriter, r *http.Request) {
	ctx, cancel := context.WithTimeout(r.Context(), reportTimeout)
	defer cancel()
	r = r.WithContext(ctx)

	if !s.limiter.allow(clientIP(r, s.cfg.TrustProxy)) {
		writeError(w, http.StatusTooManyRequests, "Слишком много запросов, подождите минуту.")
		return
	}

	r.Body = http.MaxBytesReader(w, r.Body, maxBodyBytes)
	if err := r.ParseMultipartForm(maxBodyBytes); err != nil {
		var maxErr *http.MaxBytesError
		if errors.As(err, &maxErr) {
			writeError(w, http.StatusUnprocessableEntity, "Файл больше 6 МБ. Запишите звук заново: 15–30 секунд достаточно.")
			return
		}
		writeError(w, http.StatusUnprocessableEntity, "Запрос повреждён: ожидается multipart с полями audio и meta.")
		return
	}

	var meta report.Meta
	metaRaw := r.FormValue("meta")
	if metaRaw == "" || json.Unmarshal([]byte(metaRaw), &meta) != nil {
		writeError(w, http.StatusUnprocessableEntity, "Поле meta отсутствует или содержит некорректный JSON.")
		return
	}
	if meta.DeviceID == "" {
		writeError(w, http.StatusUnprocessableEntity, "В meta не заполнен device_id.")
		return
	}

	file, _, err := r.FormFile("audio")
	if err != nil {
		writeError(w, http.StatusUnprocessableEntity, "В запросе нет аудиофайла (поле audio).")
		return
	}
	defer file.Close()
	audio := make([]byte, 0, 1<<20)
	buf := make([]byte, 64<<10)
	for {
		n, readErr := file.Read(buf)
		audio = append(audio, buf[:n]...)
		if readErr != nil {
			break
		}
	}

	samples, err := wavio.Decode(audio)
	if err != nil {
		writeError(w, http.StatusUnprocessableEntity, fmt.Sprintf("Не удалось обработать запись: %v. Запишите звук в приложении ещё раз.", err))
		return
	}
	duration := float64(len(samples)) / wavio.RequiredSampleRate
	if duration < minDurationSec {
		writeError(w, http.StatusUnprocessableEntity, fmt.Sprintf("Запись слишком короткая (%.1f сек). Нужно от 5 секунд, лучше 15–30.", duration))
		return
	}
	if duration > maxDurationSec {
		writeError(w, http.StatusUnprocessableEntity, fmt.Sprintf("Запись слишком длинная (%.1f сек). Максимум 35 секунд.", duration))
		return
	}

	// Дневной лимит: попытка списывается до анализа и возвращается,
	// если отчёт не получился по вине сервера.
	if !s.store.Allow(meta.DeviceID, s.cfg.DailyFreeLimit) {
		writeError(w, http.StatusTooManyRequests, "Лимит на сегодня исчерпан, возвращайтесь завтра.")
		return
	}

	features := dsp.Analyze(samples)

	rep, usage, err := s.analyzer.Analyze(ctx, meta, features, audio)
	if err != nil {
		s.store.Refund(meta.DeviceID)
		var notCar *gemini.ErrAudioNotCar
		if errors.As(err, &notCar) {
			slog.Info("запись не про автомобиль", "device_id", meta.DeviceID, "note", notCar.Note)
			writeError(w, http.StatusUnprocessableEntity,
				"Запись не похожа на звук автомобиля. Подойдите ближе к работающему двигателю или источнику звука и запишите ещё раз — попытка не потрачена.")
			return
		}
		slog.Error("анализ не удался", "err", err, "device_id", meta.DeviceID)
		writeJSON(w, http.StatusBadGateway, map[string]any{
			"error": "Не получилось проанализировать, попробуйте ещё раз.",
			"retry": true,
		})
		return
	}

	// Расход токенов: по нему считается себестоимость одного разбора.
	s.stats.Analysis(usage.PromptTokens, usage.AudioTokens, usage.OutputTokens)

	// Схема узла для подсветки в клиенте: берём по названиям причин отчёта.
	causes := make([]string, 0, len(rep.Causes))
	for _, c := range rep.Causes {
		causes = append(causes, c.Title)
	}
	rep.SchemaKey, rep.SchemaMarks = schema.For(causes)

	writeJSON(w, http.StatusOK, struct {
		report.Report
		DspSummary dsp.Features `json:"dsp_summary"`
	}{rep, features})
}

// handleHit — обезличенный счётчик просмотров: тело запроса = путь страницы.
// Отправляется сайтом через sendBeacon; ни cookies, ни идентификаторов нет.
func (s *Server) handleHit(w http.ResponseWriter, r *http.Request) {
	if !s.hitLimiter.allow(clientIP(r, s.cfg.TrustProxy)) {
		w.WriteHeader(http.StatusTooManyRequests)
		return
	}
	body, err := io.ReadAll(io.LimitReader(r.Body, 512))
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	page := strings.TrimSpace(string(body))

	// Событие скачивания приложения: тело вида "download:/страница".
	if after, ok := strings.CutPrefix(page, "download:"); ok {
		if strings.HasPrefix(after, "/") && len(after) <= 160 && !strings.Contains(after, "..") {
			if !isBotUA(r.Header.Get("User-Agent")) {
				s.stats.HitDownload(after)
			}
			w.WriteHeader(http.StatusNoContent)
			return
		}
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	if !strings.HasPrefix(page, "/") || len(page) > 160 ||
		strings.Contains(page, "..") || strings.HasPrefix(page, "/analitika") {
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	if isBotUA(r.Header.Get("User-Agent")) {
		s.stats.HitBot()
	} else {
		s.stats.Hit(page)
	}
	w.WriteHeader(http.StatusNoContent)
}

// isBotUA — грубый, но честный фильтр: краулеры, headless-браузеры и
// http-клиенты без браузерного User-Agent людьми не считаются.
func isBotUA(ua string) bool {
	if ua == "" {
		return true
	}
	l := strings.ToLower(ua)
	for _, m := range []string{
		"bot", "crawler", "spider", "headless", "scrape", "lighthouse",
		"python", "curl", "wget", "go-http-client", "java/", "libwww",
		"httpclient", "okhttp", "phantom", "selenium", "playwright",
		"puppeteer", "monitor", "uptime", "preview", "facebookexternalhit",
	} {
		if strings.Contains(l, m) {
			return true
		}
	}
	return false
}

// handleStats — сводка для страницы аналитики; доступ по токену.
func (s *Server) handleStats(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", s.cfg.PublicSiteURL)
	token := r.URL.Query().Get("token")
	if s.cfg.AnalyticsToken == "" || token == "" ||
		subtle.ConstantTimeCompare([]byte(token), []byte(s.cfg.AnalyticsToken)) != 1 {
		writeError(w, http.StatusForbidden, "Нет доступа.")
		return
	}
	writeJSON(w, http.StatusOK, s.stats.Summary())
}

func writeJSON(w http.ResponseWriter, status int, v any) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(status)
	json.NewEncoder(w).Encode(v)
}

func writeError(w http.ResponseWriter, status int, msg string) {
	writeJSON(w, status, map[string]string{"error": msg})
}

func (s *Server) logRequests(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		ww := middleware.NewWrapResponseWriter(w, r.ProtoMajor)
		next.ServeHTTP(ww, r)
		slog.Info("request",
			"method", r.Method,
			"path", r.URL.Path,
			"status", ww.Status(),
			"ms", time.Since(start).Milliseconds(),
			"ip", clientIP(r, s.cfg.TrustProxy),
		)
	})
}
