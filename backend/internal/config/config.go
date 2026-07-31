// Пакет config читает настройки сервера из переменных окружения.
// Для локальной разработки поддерживается файл .env рядом с бинарником
// (простые пары KEY=VALUE, не перекрывают уже установленное окружение).
package config

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

type Config struct {
	Port           string
	GeminiAPIKey   string
	GeminiModel    string
	DailyFreeLimit int
	PublicSiteURL  string
	LatestVersion  string
	DataDir        string
}

func Load() (Config, error) {
	loadDotEnv(".env")

	cfg := Config{
		Port:           getenv("PORT", "8080"),
		GeminiAPIKey:   os.Getenv("GEMINI_API_KEY"),
		GeminiModel:    getenv("GEMINI_MODEL", "gemini-2.5-flash"),
		PublicSiteURL:  getenv("PUBLIC_SITE_URL", "https://example.kz"),
		LatestVersion:  getenv("LATEST_APP_VERSION", "1.0.0"),
		DataDir:        getenv("DATA_DIR", "data"),
		DailyFreeLimit: 3,
	}

	if v := os.Getenv("DAILY_FREE_LIMIT"); v != "" {
		n, err := strconv.Atoi(v)
		if err != nil || n < 1 {
			return cfg, fmt.Errorf("DAILY_FREE_LIMIT: ожидается целое число >= 1, получено %q", v)
		}
		cfg.DailyFreeLimit = n
	}
	return cfg, nil
}

func getenv(key, def string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return def
}

func loadDotEnv(path string) {
	f, err := os.Open(path)
	if err != nil {
		return
	}
	defer f.Close()
	sc := bufio.NewScanner(f)
	for sc.Scan() {
		line := strings.TrimSpace(sc.Text())
		if line == "" || strings.HasPrefix(line, "#") {
			continue
		}
		key, val, ok := strings.Cut(line, "=")
		if !ok {
			continue
		}
		key = strings.TrimSpace(key)
		val = strings.Trim(strings.TrimSpace(val), `"`)
		if _, exists := os.LookupEnv(key); !exists {
			os.Setenv(key, val)
		}
	}
}
