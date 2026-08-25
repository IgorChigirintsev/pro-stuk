package main

import (
	"context"
	"errors"
	"log/slog"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"stuk/backend/internal/account"
	"stuk/backend/internal/billing"
	"stuk/backend/internal/config"
	"stuk/backend/internal/gemini"
	"stuk/backend/internal/httpapi"
	"stuk/backend/internal/report"
	"stuk/backend/internal/state"
	"stuk/backend/internal/stats"
)

func main() {
	slog.SetDefault(slog.New(slog.NewJSONHandler(os.Stdout, nil)))

	cfg, err := config.Load()
	if err != nil {
		slog.Error("конфигурация некорректна", "err", err)
		os.Exit(1)
	}

	store, err := state.Open(cfg.DataDir)
	if err != nil {
		slog.Error("не удалось открыть каталог данных", "err", err, "dir", cfg.DataDir)
		os.Exit(1)
	}

	if cfg.GeminiAPIKey == "" {
		slog.Error("GEMINI_API_KEY не задан — сервер не стартует. Заполните .env по образцу backend/.env.example")
		os.Exit(1)
	}
	var analyzer report.Analyzer = gemini.New(cfg.GeminiAPIKey, cfg.GeminiModel, cfg.GeminiFallback)

	statsStore, err := stats.Open(cfg.DataDir, os.Getenv("ANALYTICS_TZ"))
	if err != nil {
		slog.Error("не удалось открыть счётчики аналитики", "err", err)
		os.Exit(1)
	}

	// Учётные записи: пишутся на диск сразу, поэтому автосохранение им не нужно.
	// Повреждённый файл останавливает старт — молча обнулить всем баланс хуже,
	// чем не подняться и показать это в логе.
	accounts, err := account.Open(cfg.DataDir)
	if err != nil {
		slog.Error("не удалось открыть учётные записи", "err", err)
		os.Exit(1)
	}

	// Магазины. Нет ключа — покупок нет, но сервер работает: отказ честнее
	// начисления вслепую и не мешает всему остальному.
	stores := map[string]httpapi.StoreVerifier{}
	if play, err := billing.NewPlay(cfg.PlayServiceAccount, cfg.AndroidPackage); err != nil {
		slog.Warn("покупки Google Play отключены", "err", err)
	} else {
		stores["google"] = play
	}
	if apple, err := billing.NewApple(cfg.AppleBundleID); err != nil {
		slog.Warn("покупки App Store отключены", "err", err)
	} else {
		stores["apple"] = apple
	}

	stop := make(chan struct{})
	go store.RunAutosave(30*time.Second, stop)
	go statsStore.RunAutosave(30*time.Second, stop)

	srv := &http.Server{
		Addr:              ":" + cfg.Port,
		Handler:           httpapi.New(cfg, store, analyzer, statsStore, accounts, stores).Router(),
		ReadHeaderTimeout: 10 * time.Second,
		// Полный приём тела и ответ ограничены: медленный клиент (slow-loris)
		// не держит горутину и память бесконечно. 120с покрывают загрузку
		// 6 МБ на медленной сети + 75с анализа.
		ReadTimeout:  120 * time.Second,
		WriteTimeout: 120 * time.Second,
		IdleTimeout:  60 * time.Second,
	}

	go func() {
		slog.Info("сервер запущен", "port", cfg.Port, "daily_free_limit", cfg.DailyFreeLimit)
		if err := srv.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			slog.Error("сервер остановился с ошибкой", "err", err)
			os.Exit(1)
		}
	}()

	sig := make(chan os.Signal, 1)
	signal.Notify(sig, syscall.SIGINT, syscall.SIGTERM)
	<-sig

	shutdownCtx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	srv.Shutdown(shutdownCtx)
	close(stop)
	store.Save()
	statsStore.Save()
	slog.Info("сервер остановлен")
}
