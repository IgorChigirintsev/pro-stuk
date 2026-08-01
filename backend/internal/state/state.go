// Пакет state — счётчики дневного лимита отчётов по device_id.
// Хранение в памяти с периодическим сбросом в data/state.json,
// чтобы лимиты переживали перезапуск сервера.
package state

import (
	"encoding/json"
	"log/slog"
	"os"
	"path/filepath"
	"sync"
	"time"
)

type Store struct {
	mu     sync.Mutex
	path   string
	date   string
	counts map[string]int
	dirty  bool
	seq    uint64 // растёт при каждом изменении: Save не съест параллельный инкремент
}

type snapshot struct {
	Date   string         `json:"date"`
	Counts map[string]int `json:"counts"`
}

func today() string { return time.Now().Format("2006-01-02") }

// Open загружает состояние из dataDir/state.json (если файл есть и за сегодня).
func Open(dataDir string) (*Store, error) {
	if err := os.MkdirAll(dataDir, 0o755); err != nil {
		return nil, err
	}
	s := &Store{
		path:   filepath.Join(dataDir, "state.json"),
		date:   today(),
		counts: map[string]int{},
	}
	raw, err := os.ReadFile(s.path)
	if err == nil {
		var snap snapshot
		if json.Unmarshal(raw, &snap) == nil && snap.Date == s.date && snap.Counts != nil {
			s.counts = snap.Counts
		}
	}
	return s, nil
}

// Allow возвращает true и увеличивает счётчик, если дневной лимит не исчерпан.
// Счётчик двигается до анализа: попытка = использование лимита.
func (s *Store) Allow(deviceID string, limit int) bool {
	s.mu.Lock()
	defer s.mu.Unlock()
	s.rollover()
	if s.counts[deviceID] >= limit {
		return false
	}
	s.counts[deviceID]++
	s.dirty = true
	s.seq++
	return true
}

// Refund возвращает попытку: вызывается, если отчёт не получился по вине сервера.
func (s *Store) Refund(deviceID string) {
	s.mu.Lock()
	defer s.mu.Unlock()
	s.rollover()
	if s.counts[deviceID] > 0 {
		s.counts[deviceID]--
		s.dirty = true
		s.seq++
	}
}

func (s *Store) rollover() {
	if d := today(); d != s.date {
		s.date = d
		s.counts = map[string]int{}
		s.dirty = true
		s.seq++
	}
}

// Save сбрасывает состояние на диск, если были изменения.
// dirty снимается только после успешной записи: при ошибке диска
// следующий тик автосейва повторит попытку.
func (s *Store) Save() {
	s.mu.Lock()
	if !s.dirty {
		s.mu.Unlock()
		return
	}
	// Marshal под мьютексом: counts — живая map, снаружи её меняют хендлеры.
	snap := snapshot{Date: s.date, Counts: s.counts}
	seq := s.seq
	raw, err := json.Marshal(snap)
	s.mu.Unlock()
	if err != nil {
		return
	}
	tmp := s.path + ".tmp"
	if err := os.WriteFile(tmp, raw, 0o644); err != nil {
		slog.Error("не удалось сохранить состояние", "err", err)
		return
	}
	if err := os.Rename(tmp, s.path); err != nil {
		slog.Error("не удалось сохранить состояние", "err", err)
		return
	}
	s.mu.Lock()
	if s.seq == seq {
		s.dirty = false
	}
	s.mu.Unlock()
}

// RunAutosave периодически сохраняет состояние, пока не закроется stop.
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
