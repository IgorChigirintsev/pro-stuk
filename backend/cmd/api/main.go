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

	"stuk/backend/internal/config"
	"stuk/backend/internal/httpapi"
	"stuk/backend/internal/report"
	"stuk/backend/internal/state"
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

	// Фаза 1: анализатор — мок. В фазе 2 при наличии GEMINI_API_KEY
	// сюда встанет клиент Gemini, а пустой ключ станет фатальной ошибкой.
	var analyzer report.Analyzer = report.Mock{}
	if cfg.GeminiAPIKey == "" {
		slog.Warn("GEMINI_API_KEY не задан: /report работает в мок-режиме (фаза 1)")
	}

	stop := make(chan struct{})
	go store.RunAutosave(30*time.Second, stop)

	srv := &http.Server{
		Addr:              ":" + cfg.Port,
		Handler:           httpapi.New(cfg, store, analyzer).Router(),
		ReadHeaderTimeout: 10 * time.Second,
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
	slog.Info("сервер остановлен")
}
