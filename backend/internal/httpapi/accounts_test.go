package httpapi

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"strconv"
	"testing"
	"time"

	"stuk/backend/internal/account"
	"stuk/backend/internal/config"
	"stuk/backend/internal/stats"
)

// Вход подделать нельзя, поэтому в тестах сессию открываем напрямую через
// хранилище: проверяется не проверка токена (она в пакете auth), а то, что
// ручки без сессии не работают и что правила соблюдаются на сервере.
func testServer(t *testing.T) (*Server, *account.Store) {
	t.Helper()
	dir := t.TempDir()
	accs, err := account.Open(dir)
	if err != nil {
		t.Fatal(err)
	}
	st, err := stats.Open(dir, "")
	if err != nil {
		t.Fatal(err)
	}
	return New(config.Config{}, nil, nil, st, accs), accs
}

func login(t *testing.T, accs *account.Store, subject string) (string, account.Account) {
	t.Helper()
	acc, err := accs.EnsureAccount("google", subject, now())
	if err != nil {
		t.Fatal(err)
	}
	token := "sess-" + subject
	if err := accs.NewSession(acc.ID, token); err != nil {
		t.Fatal(err)
	}
	return token, acc
}

func do(t *testing.T, s *Server, method, path, token string, body any) *httptest.ResponseRecorder {
	t.Helper()
	var buf bytes.Buffer
	if body != nil {
		if err := json.NewEncoder(&buf).Encode(body); err != nil {
			t.Fatal(err)
		}
	}
	req := httptest.NewRequest(method, path, &buf)
	if token != "" {
		req.Header.Set("Authorization", "Bearer "+token)
	}
	w := httptest.NewRecorder()
	s.Router().ServeHTTP(w, req)
	return w
}

func car() account.Car {
	return account.Car{Make: "BMW", Model: "3 серия", Year: 2018, Mileage: 60000}
}

// Без сессии гараж недоступен: иначе состояние чужого аккаунта читал бы кто угодно.
func TestAccountNeedsSession(t *testing.T) {
	s, _ := testServer(t)
	for _, p := range []string{"/api/v1/account", "/api/v1/account/car"} {
		if got := do(t, s, http.MethodGet, p, "", nil); got.Code != http.StatusUnauthorized &&
			got.Code != http.StatusMethodNotAllowed {
			t.Errorf("%s без сессии дал %d", p, got.Code)
		}
	}
	if got := do(t, s, http.MethodPost, "/api/v1/account/car", "чужой-токен", carRequest{SlotID: "s1", Car: car()}); got.Code != http.StatusUnauthorized {
		t.Errorf("выдуманный токен принят: %d", got.Code)
	}
}

func TestAccountStateAndVersion(t *testing.T) {
	s, accs := testServer(t)
	token, acc := login(t, accs, "u1")

	got := do(t, s, http.MethodGet, "/api/v1/account", token, nil)
	if got.Code != http.StatusOK {
		t.Fatalf("состояние не отдалось: %d", got.Code)
	}
	var state account.Account
	if err := json.Unmarshal(got.Body.Bytes(), &state); err != nil {
		t.Fatal(err)
	}
	if len(state.Slots) != 1 || state.Slots[0].Checks != 5 {
		t.Fatalf("бесплатный старт разошёлся: %+v", state.Slots)
	}

	// Версия та же — сервер не гонит состояние заново.
	same := do(t, s, http.MethodGet, "/api/v1/account?v="+itoa(acc.Version), token, nil)
	if same.Code != http.StatusNotModified {
		t.Fatalf("при совпавшей версии пришло %d вместо 304", same.Code)
	}
	if same.Body.Len() != 0 {
		t.Fatalf("при 304 пришло тело в %d байт", same.Body.Len())
	}
}

// Машину ставим, правим и удаляем — пока её не разбирали.
func TestCarLifecycle(t *testing.T) {
	s, accs := testServer(t)
	token, _ := login(t, accs, "u1")

	if got := do(t, s, http.MethodPost, "/api/v1/account/car", token, carRequest{SlotID: "s1", Car: car()}); got.Code != http.StatusOK {
		t.Fatalf("машина не поставилась: %d %s", got.Code, got.Body)
	}
	c := car()
	c.Mileage = 71000
	if got := do(t, s, http.MethodPut, "/api/v1/account/car", token, carRequest{SlotID: "s1", Car: c}); got.Code != http.StatusOK {
		t.Fatalf("пробег не поправился: %d %s", got.Code, got.Body)
	}
	if got := do(t, s, http.MethodDelete, "/api/v1/account/car", token, carRequest{SlotID: "s1"}); got.Code != http.StatusOK {
		t.Fatalf("машина не удалилась: %d %s", got.Code, got.Body)
	}
}

// После первой проверки подмена машины закрыта — и закрыта на сервере,
// а не в приложении: клиент может быть любым.
func TestServerRefusesToSwapUsedCar(t *testing.T) {
	s, accs := testServer(t)
	token, acc := login(t, accs, "u1")
	if _, err := accs.Update(acc.ID, func(a *account.Account) error {
		if err := a.SetCar("s1", car()); err != nil {
			return err
		}
		return a.Spend("s1")
	}); err != nil {
		t.Fatal(err)
	}

	other := account.Car{Make: "Toyota", Model: "Camry", Year: 2020, Mileage: 10000}
	got := do(t, s, http.MethodPut, "/api/v1/account/car", token, carRequest{SlotID: "s1", Car: other})
	if got.Code != http.StatusConflict {
		t.Fatalf("подмена машины прошла: %d %s", got.Code, got.Body)
	}
	if code := errCode(t, got.Body.Bytes()); code != "car_locked" {
		t.Fatalf("код ошибки %q, ожидался car_locked", code)
	}
	if got := do(t, s, http.MethodDelete, "/api/v1/account/car", token, carRequest{SlotID: "s1"}); got.Code != http.StatusConflict {
		t.Fatalf("запрет обошли удалением: %d", got.Code)
	}
}

// Сессия одного человека не должна открывать гараж другого.
func TestSessionsAreIsolated(t *testing.T) {
	s, accs := testServer(t)
	t1, _ := login(t, accs, "u1")
	_, acc2 := login(t, accs, "u2")

	if _, err := accs.Update(acc2.ID, func(a *account.Account) error {
		return a.Grant("p1", "checks_40", "s1")
	}); err != nil {
		t.Fatal(err)
	}
	got := do(t, s, http.MethodGet, "/api/v1/account", t1, nil)
	var state account.Account
	if err := json.Unmarshal(got.Body.Bytes(), &state); err != nil {
		t.Fatal(err)
	}
	if state.Slots[0].Checks != 5 {
		t.Fatalf("видны чужие проверки: %d", state.Slots[0].Checks)
	}
	if state.ID == acc2.ID {
		t.Fatal("сессия открыла чужую запись")
	}
}

// Выход закрывает сессию: после него токен не работает.
func TestLogoutClosesSession(t *testing.T) {
	s, accs := testServer(t)
	token, _ := login(t, accs, "u1")
	if got := do(t, s, http.MethodPost, "/api/v1/logout", token, nil); got.Code != http.StatusNoContent {
		t.Fatalf("выход не сработал: %d", got.Code)
	}
	if got := do(t, s, http.MethodGet, "/api/v1/account", token, nil); got.Code != http.StatusUnauthorized {
		t.Fatalf("токен работает после выхода: %d", got.Code)
	}
}

// Купленное без привязки не теряется и доносится до места позже.
func TestAssignPending(t *testing.T) {
	s, accs := testServer(t)
	token, acc := login(t, accs, "u1")
	if _, err := accs.Update(acc.ID, func(a *account.Account) error {
		return a.Grant("p9", "checks_20", "места-нет")
	}); err != nil {
		t.Fatal(err)
	}
	got := do(t, s, http.MethodPost, "/api/v1/account/assign", token,
		assignRequest{PurchaseID: "p9", SlotID: "s1"})
	if got.Code != http.StatusOK {
		t.Fatalf("привязка не прошла: %d %s", got.Code, got.Body)
	}
	var state account.Account
	if err := json.Unmarshal(got.Body.Bytes(), &state); err != nil {
		t.Fatal(err)
	}
	if state.Slots[0].Checks != 25 {
		t.Fatalf("после привязки %d проверок, ожидалось 25", state.Slots[0].Checks)
	}
}

func errCode(t *testing.T, body []byte) string {
	t.Helper()
	var e struct {
		Code string `json:"code"`
	}
	if err := json.Unmarshal(body, &e); err != nil {
		t.Fatalf("ответ не разобрался: %s", body)
	}
	return e.Code
}

func itoa(v int64) string { return strconv.FormatInt(v, 10) }

func now() time.Time { return time.Date(2026, 8, 20, 12, 0, 0, 0, time.UTC) }
