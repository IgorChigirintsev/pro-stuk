package httpapi

import (
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
	"time"
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
	hit(t, s, "appstore:/en/articles/knocking-over-bumps", browserUA)

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
	// Магазины должны считаться врозь: иначе не видно, какая платформа даёт установки.
	if d.AppStore != 1 {
		t.Errorf("переходов в App Store %d, ждали 1", d.AppStore)
	}
	if d.Play == d.AppStore {
		t.Error("магазины смешались в один счётчик")
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

	for _, body := range []string{"/", "visit:/", "download:/", "play:/", "appstore:/"} {
		if code := hit(t, s, body, bot); code != http.StatusNoContent {
			t.Errorf("%q: код %d, ждали 204", body, code)
		}
	}

	d := s.stats.Summary().Today
	if d.Total != 0 || d.Visits != 0 || d.Downloads != 0 || d.Play != 0 || d.AppStore != 0 {
		t.Errorf("бот попал в счётчики: просмотры %d, визиты %d, скачивания %d, Play %d, App Store %d",
			d.Total, d.Visits, d.Downloads, d.Play, d.AppStore)
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
		"appstore:наружу",
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

// Семнадцатого сентября счётчик раздул медленный обход: 3716 просмотров при
// обычных восьмидесяти, и каждая загрузка считалась новым визитом, потому что
// память вкладки у клиента была пуста всякий раз. В минутный лимит он не
// упирался — шёл слишком неспешно. Отсюда часовые бюджеты на один адрес.
func TestHitStopsSlowFloodOfVisits(t *testing.T) {
	s, _ := testServer(t)

	// Визитов у сайта около сорока в сутки со всего мира; тридцать с одного
	// адреса за час — это уже не человек.
	for i := 0; i < 40; i++ {
		if code := hit(t, s, "visit:/stati/stuk-v-podveske", browserUA); code != http.StatusNoContent {
			t.Fatalf("визит %d отвергнут кодом %d: до бюджета дело не дошло", i, code)
		}
	}
	d := s.stats.Summary().Today
	if d.Visits != 30 {
		t.Errorf("засчитано визитов %d, ждали 30 — часовой бюджет не сработал", d.Visits)
	}
	if d.Bots != 10 {
		t.Errorf("сверх бюджета отмечено ботами %d, ждали 10", d.Bots)
	}
}

// Бюджет просмотров в бою равен 120 за час; в тесте его не достать — на 60-м
// запросе в минуту раньше срабатывает защита от наплыва и отвечает 429, ничего
// не считая. Поэтому проверяем саму сцепку на уменьшенном бюджете.
func TestHitStopsSlowFloodOfViews(t *testing.T) {
	s, _ := testServer(t)
	s.viewBudget = newIPLimiter(5, time.Hour)

	for i := 0; i < 10; i++ {
		if code := hit(t, s, "/stati/stuk-v-podveske", browserUA); code != http.StatusNoContent {
			t.Fatalf("просмотр %d отвергнут кодом %d", i, code)
		}
	}
	d := s.stats.Summary().Today
	if d.Total != 5 {
		t.Errorf("засчитано просмотров %d, ждали 5", d.Total)
	}
	if d.Bots != 5 {
		t.Errorf("сверх бюджета отмечено ботами %d, ждали 5", d.Bots)
	}
}

// Бюджет не должен задевать обычное чтение: человек открывает десяток статей
// подряд и остаётся живым посетителем.
func TestHitKeepsNormalReadingIntact(t *testing.T) {
	s, _ := testServer(t)
	hit(t, s, "visit:/stati/stuk-v-podveske", browserUA)
	for i := 0; i < 12; i++ {
		hit(t, s, "/stati/stuk-v-podveske", browserUA)
	}
	d := s.stats.Summary().Today
	if d.Visits != 1 || d.Total != 12 {
		t.Errorf("живое чтение посчитано неверно: визитов %d, просмотров %d", d.Visits, d.Total)
	}
	if d.Bots != 0 {
		t.Errorf("живое чтение отмечено как бот: %d", d.Bots)
	}
}
