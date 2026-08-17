// Пакет stats — обезличенный счётчик просмотров страниц сайта.
// Без cookies и идентификаторов: только «страница → число просмотров за день».
// Хранение in-memory со сбросом в data/analytics.json (как state).
package stats

import (
	"encoding/json"
	"log/slog"
	"os"
	"path/filepath"
	"sort"
	"sync"
	"time"
	_ "time/tzdata" // в distroless нет tzdata — встраиваем
)

const keepDays = 35 // хранить чуть больше 28 дней отчётного окна

type dayCounts struct {
	Total int            `json:"total"`
	Pages map[string]int `json:"pages"`
	Bots  int            `json:"bots,omitempty"` // отфильтрованные заходы ботов
	// Скачивания приложения: сколько и с каких страниц нажали кнопку.
	Downloads     int            `json:"downloads,omitempty"`
	DownloadPages map[string]int `json:"download_pages,omitempty"`
	// Анализы звука и их себестоимость: тариф Gemini зависит от модели,
	// а модель задана как «latest» и меняется без нашего участия. Считаем
	// токены по типам — звук тарифицируется отдельно и дороже текста.
	Analyses     int `json:"analyses,omitempty"`
	PromptTokens int `json:"prompt_tokens,omitempty"`
	AudioTokens  int `json:"audio_tokens,omitempty"`
	OutputTokens int `json:"output_tokens,omitempty"`
}

type Store struct {
	mu    sync.Mutex
	path  string
	days  map[string]*dayCounts // ключ — YYYY-MM-DD в часовом поясе loc
	dirty bool
	loc   *time.Location
}

// Open загружает счётчики из dataDir/analytics.json.
// Дни считаются в поясе tz (пустая строка — Asia/Almaty).
func Open(dataDir, tz string) (*Store, error) {
	if tz == "" {
		tz = "Asia/Almaty"
	}
	loc, err := time.LoadLocation(tz)
	if err != nil {
		return nil, err
	}
	s := &Store{
		path: filepath.Join(dataDir, "analytics.json"),
		days: map[string]*dayCounts{},
		loc:  loc,
	}
	if raw, err := os.ReadFile(s.path); err == nil {
		_ = json.Unmarshal(raw, &s.days)
	}
	return s, nil
}

func (s *Store) today() string { return time.Now().In(s.loc).Format("2006-01-02") }

// Hit фиксирует один просмотр страницы.
// day возвращает счётчики текущего дня (вызывается под мьютексом).
func (s *Store) day() *dayCounts {
	key := s.today()
	d := s.days[key]
	if d == nil {
		d = &dayCounts{Pages: map[string]int{}}
		s.days[key] = d
		s.prune()
	}
	return d
}

func (s *Store) Hit(page string) {
	s.mu.Lock()
	defer s.mu.Unlock()
	d := s.day()
	d.Total++
	d.Pages[page]++
	s.dirty = true
}

// HitDownload фиксирует клик по ссылке скачивания APK и страницу-источник.
func (s *Store) HitDownload(page string) {
	s.mu.Lock()
	defer s.mu.Unlock()
	d := s.day()
	if d.DownloadPages == nil {
		d.DownloadPages = map[string]int{}
	}
	d.Downloads++
	d.DownloadPages[page]++
	s.dirty = true
}

// HitBot фиксирует отфильтрованный заход бота (без страницы — только счёт).
// Analysis учитывает один разбор звука и его расход токенов.
func (s *Store) Analysis(promptTokens, audioTokens, outputTokens int) {
	s.mu.Lock()
	defer s.mu.Unlock()
	d := s.day()
	d.Analyses++
	d.PromptTokens += promptTokens
	d.AudioTokens += audioTokens
	d.OutputTokens += outputTokens
	s.dirty = true
}

func (s *Store) HitBot() {
	s.mu.Lock()
	defer s.mu.Unlock()
	d := s.day()
	d.Bots++
	s.dirty = true
}

// prune удаляет дни старше keepDays (вызывается под мьютексом).
func (s *Store) prune() {
	cutoff := time.Now().In(s.loc).AddDate(0, 0, -keepDays).Format("2006-01-02")
	for k := range s.days {
		if k < cutoff {
			delete(s.days, k)
		}
	}
}

type PeriodStats struct {
	Total         int            `json:"total"`
	Pages         map[string]int `json:"pages"`
	Bots          int            `json:"bots"`
	Downloads     int            `json:"downloads"`
	DownloadPages map[string]int `json:"download_pages"`
	// Разборы звука и их себестоимость в долларах по тарифам Gemini Flash.
	Analyses int     `json:"analyses"`
	CostUSD  float64 `json:"cost_usd"`
}

type Summary struct {
	Today     PeriodStats `json:"today"`
	Yesterday PeriodStats `json:"yesterday"`
	Week      PeriodStats `json:"week"`   // последние 7 дней, включая сегодня
	Days28    PeriodStats `json:"days28"` // последние 28 дней, включая сегодня
}

// Тарифы Gemini Flash за миллион токенов. Звук дороже текста, поэтому
// считаем раздельно. Меняется тариф — меняются эти три числа.
const (
	priceTextInPerM  = 0.30
	priceAudioInPerM = 1.00
	priceOutPerM     = 2.50
)

func costUSD(promptTok, audioTok, outTok int) float64 {
	return (float64(promptTok)*priceTextInPerM +
		float64(audioTok)*priceAudioInPerM +
		float64(outTok)*priceOutPerM) / 1e6
}

func (s *Store) rangeStats(from, to time.Time) PeriodStats {
	out := PeriodStats{Pages: map[string]int{}, DownloadPages: map[string]int{}}
	for d := from; !d.After(to); d = d.AddDate(0, 0, 1) {
		if dc := s.days[d.Format("2006-01-02")]; dc != nil {
			out.Total += dc.Total
			out.Bots += dc.Bots
			out.Downloads += dc.Downloads
			out.Analyses += dc.Analyses
			out.CostUSD += costUSD(dc.PromptTokens, dc.AudioTokens, dc.OutputTokens)
			for p, n := range dc.Pages {
				out.Pages[p] += n
			}
			for p, n := range dc.DownloadPages {
				out.DownloadPages[p] += n
			}
		}
	}
	return out
}

// Summary — агрегаты для страницы аналитики.
func (s *Store) Summary() Summary {
	s.mu.Lock()
	defer s.mu.Unlock()
	now := time.Now().In(s.loc)
	day := func(offset int) time.Time { return now.AddDate(0, 0, offset) }
	return Summary{
		Today:     s.rangeStats(day(0), day(0)),
		Yesterday: s.rangeStats(day(-1), day(-1)),
		Week:      s.rangeStats(day(-6), day(0)),
		Days28:    s.rangeStats(day(-27), day(0)),
	}
}

// Save сбрасывает счётчики на диск (та же дисциплина, что у state.Store).
func (s *Store) Save() {
	s.mu.Lock()
	if !s.dirty {
		s.mu.Unlock()
		return
	}
	raw, err := json.Marshal(s.days)
	s.mu.Unlock()
	if err != nil {
		return
	}
	tmp := s.path + ".tmp"
	if err := os.WriteFile(tmp, raw, 0o644); err != nil {
		slog.Error("не удалось сохранить аналитику", "err", err)
		return
	}
	if err := os.Rename(tmp, s.path); err != nil {
		slog.Error("не удалось сохранить аналитику", "err", err)
		return
	}
	s.mu.Lock()
	s.dirty = false
	s.mu.Unlock()
}

// RunAutosave периодически сохраняет счётчики, пока не закроется stop.
func (s *Store) RunAutosave(interval time.Duration, stop <-chan struct{}) {
	t := time.NewTicker(interval)
	defer t.Stop()
	for {
		select {
		case <-t.C:
			s.Save()
		case <-stop:
			s.Save()
			return
		}
	}
}

// TopPages — страницы за 28 дней по убыванию (для сортировки на клиенте не обязательно,
// но удобно иметь стабильный порядок в JSON-массиве, если понадобится).
func (s *Store) TopPages(limit int) []string {
	sum := s.Summary()
	pages := make([]string, 0, len(sum.Days28.Pages))
	for p := range sum.Days28.Pages {
		pages = append(pages, p)
	}
	sort.Slice(pages, func(i, j int) bool {
		return sum.Days28.Pages[pages[i]] > sum.Days28.Pages[pages[j]]
	})
	if limit > 0 && len(pages) > limit {
		pages = pages[:limit]
	}
	return pages
}
