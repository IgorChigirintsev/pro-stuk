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
	Port         string
	GeminiAPIKey string
	GeminiModel  string
	// Запасная модель на случай перегрузки основной.
	GeminiFallback string
	DailyFreeLimit int
	PublicSiteURL  string
	LatestVersion  string
	DataDir        string
	TrustProxy     bool
	AnalyticsToken string

	// Идентификатор веб-клиента OAuth. Именно он стоит в поле aud токена,
	// который приложение получает от Google, — по нему сервер убеждается,
	// что вошли в наше приложение, а не в чужое.
	GoogleClientID string
	// Bundle ID приложения: получатель токена при входе через Apple.
	AppleBundleID string
	// Имя пакета Android: по нему магазин ищет покупку. Совпадает с bundle id
	// Apple, но это совпадение, а не правило.
	AndroidPackage string

	// Файл сервисного аккаунта Google Play. По нему сервер спрашивает у
	// Google, была ли покупка на самом деле: словам приложения тут верить
	// нельзя, чек подделывается первым делом.
	PlayServiceAccount string
}

func Load() (Config, error) {
	loadDotEnv(".env")

	cfg := Config{
		Port:               getenv("PORT", "8080"),
		GeminiAPIKey:       os.Getenv("GEMINI_API_KEY"),
		GeminiModel:        getenv("GEMINI_MODEL", "gemini-3.5-flash"),
		GeminiFallback:     getenv("GEMINI_FALLBACK_MODEL", "gemini-3.6-flash"),
		PublicSiteURL:      getenv("PUBLIC_SITE_URL", "https://example.kz"),
		LatestVersion:      getenv("LATEST_APP_VERSION", "1.0.0"),
		DataDir:            getenv("DATA_DIR", "data"),
		TrustProxy:         os.Getenv("TRUST_PROXY") == "1",
		AnalyticsToken:     os.Getenv("ANALYTICS_TOKEN"),
		DailyFreeLimit:     3,
		GoogleClientID:     os.Getenv("GOOGLE_CLIENT_ID"),
		AppleBundleID:      getenv("APPLE_BUNDLE_ID", "chigirintsevandco.prostuk"),
		AndroidPackage:     getenv("ANDROID_PACKAGE", "chigirintsevandco.prostuk"),
		PlayServiceAccount: getenv("PLAY_SERVICE_ACCOUNT_FILE", "play-service-account.json"),
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
