package httpapi

import (
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

// Пустой User-Agent сервер считает ботом — для живых событий нужен настоящий.
const browserUA = "Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 Chrome/126 Mobile Safari/537.36"

// hit отправляет одно событие счётчика и возвращает код ответа.
func hit(t *testing.T, s *Server, body, ua string) int {
	t.Helper()
	r := httptest.NewRequest(http.MethodPost, "/api/v1/hit", strings.NewReader(body))
	if ua != "" {
		r.Header.Set("User-Agent", ua)
	}
	w := httptest.NewRecorder()
	s.handleHit(w, r)
	return w.Code
}

// Три события с префиксами легко перепутать местами, и ошибка будет молчаливой:
// счётчик просто вырастет не тот. Поэтому проверяем каждый по отдельности.
func TestHitCountsEachEventInItsOwnBucket(t *testing.T) {
	s, _ := testServer(t)

	hit(t, s, "/stati/stuk-v-podveske", browserUA)
	hit(t, s, "/stati/stuk-v-podveske", browserUA)
	hit(t, s, "visit:/stati/stuk-v-podveske", browserUA)
	hit(t, s, "download:/", browserUA)
	hit(t, s, "play:/en/articles/knocking-over-bumps", browserUA)
	hit(t, s, "play:/en/articles/knocking-over-bumps", browserUA)

	d := s.stats.Summary().Today
	if d.Total != 2 {
		t.Errorf("просмотров %d, ждали 2", d.Total)
	}
	if d.Visits != 1 {
		t.Errorf("визитов %d, ждали 1", d.Visits)
	}
	if d.Downloads != 1 {
		t.Errorf("скачиваний %d, ждали 1", d.Downloads)
	}
	if d.Play != 2 {
		t.Errorf("переходов в Play %d, ждали 2", d.Play)
	}
	if got := d.PlayPages["/en/articles/knocking-over-bumps"]; got != 2 {
		t.Errorf("страница-источник Play посчитана %d раз, ждали 2", got)
	}
	// Событие не должно попадать в обычные просмотры страниц.
	if _, ok := d.Pages["play:/en/articles/knocking-over-bumps"]; ok {
		t.Error("переход в Play посчитан ещё и как просмотр страницы")
	}
}

// Боты раздували бы конверсию: у них есть и просмотры, и клики по ссылкам.
func TestHitIgnoresBotsInEveryEvent(t *testing.T) {
	const bot = "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
	s, _ := testServer(t)

	for _, body := range []string{"/", "visit:/", "download:/", "play:/"} {
		if code := hit(t, s, body, bot); code != http.StatusNoContent {
			t.Errorf("%q: код %d, ждали 204", body, code)
		}
	}

	d := s.stats.Summary().Today
	if d.Total != 0 || d.Visits != 0 || d.Downloads != 0 || d.Play != 0 {
		t.Errorf("бот попал в счётчики: просмотры %d, визиты %d, скачивания %d, Play %d",
			d.Total, d.Visits, d.Downloads, d.Play)
	}
	if d.Bots == 0 {
		t.Error("заход бота не отмечен")
	}
}

// Путь события проверяется так же строго, как обычная страница: иначе через
// счётчик можно набить в аналитику произвольный текст.
func TestHitRejectsBadEventPaths(t *testing.T) {
	s, _ := testServer(t)
	bad := []string{
		"play:наружу",
		"play:../../etc",
		"download:" + strings.Repeat("/x", 100),
		"visit:",
	}
	for _, body := range bad {
		if code := hit(t, s, body, browserUA); code != http.StatusBadRequest {
			t.Errorf("%q: код %d, ждали 400", body, code)
		}
	}
	if d := s.stats.Summary().Today; d.Play != 0 || d.Downloads != 0 || d.Visits != 0 {
		t.Error("мусорное событие всё-таки посчиталось")
	}
}
