package httpapi

import (
	"bytes"
	"mime/multipart"
	"net/http"
	"net/http/httptest"
	"testing"

	"stuk/backend/internal/account"
	"stuk/backend/internal/billing"
)

// Разбор списывает проверку с указанного места, а не с общего счёта:
// у каждой машины свой баланс, и чужой он не касается.
func TestSpendTakesFromChosenSlot(t *testing.T) {
	_, accs := testServer(t)
	_, acc := login(t, accs, "u1")

	if _, err := accs.Update(acc.ID, func(a *account.Account) error {
		if err := a.SetCar("s1", car()); err != nil {
			return err
		}
		if err := a.Grant("p1", "garage_1", ""); err != nil {
			return err
		}
		return a.SetCar("s2", account.Car{Make: "Kia", Model: "Rio", Year: 2019})
	}); err != nil {
		t.Fatal(err)
	}

	if _, err := accs.Update(acc.ID, func(a *account.Account) error {
		return a.Spend("s2")
	}); err != nil {
		t.Fatal(err)
	}
	got, _ := accs.Get(acc.ID)
	if got.Slots[0].Checks != billing.FreeChecks {
		t.Fatalf("списали с чужой машины: у первой %d", got.Slots[0].Checks)
	}
	if got.Slots[1].Checks != 4 {
		t.Fatalf("у второй машины %d проверок, ожидалось 4", got.Slots[1].Checks)
	}
}

// Сорвавшийся разбор возвращает проверку, но замок с машины не снимает.
func TestRefundReturnsCheckKeepsLock(t *testing.T) {
	_, accs := testServer(t)
	_, acc := login(t, accs, "u1")
	if _, err := accs.Update(acc.ID, func(a *account.Account) error {
		if err := a.SetCar("s1", car()); err != nil {
			return err
		}
		return a.Spend("s1")
	}); err != nil {
		t.Fatal(err)
	}
	if _, err := accs.Update(acc.ID, func(a *account.Account) error {
		a.Refund("s1")
		return nil
	}); err != nil {
		t.Fatal(err)
	}
	got, _ := accs.Get(acc.ID)
	if got.Slots[0].Checks != billing.FreeChecks {
		t.Fatalf("проверка не вернулась: %d", got.Slots[0].Checks)
	}
	if !got.Slots[0].Locked() {
		t.Fatal("возврат отпер машину — так запрет обходился бы отменой")
	}
}

// postReport отправляет разбор так же, как приложение: multipart с meta и
// звуком. Звук здесь заведомо негодный — до него доходить и не должно.
func postReport(t *testing.T, s *Server, token, metaJSON string) *httptest.ResponseRecorder {
	t.Helper()
	var body bytes.Buffer
	mw := multipart.NewWriter(&body)
	if err := mw.WriteField("meta", metaJSON); err != nil {
		t.Fatal(err)
	}
	f, err := mw.CreateFormFile("audio", "record.wav")
	if err != nil {
		t.Fatal(err)
	}
	f.Write([]byte("не настоящий wav"))
	mw.Close()

	req := httptest.NewRequest(http.MethodPost, "/api/v1/report", &body)
	req.Header.Set("Content-Type", mw.FormDataContentType())
	if token != "" {
		req.Header.Set("Authorization", "Bearer "+token)
	}
	w := httptest.NewRecorder()
	s.Router().ServeHTTP(w, req)
	return w
}

// Без входа разбора нет. Раньше здесь работал дневной лимит по устройству, и
// новый device_id давал ещё три бесплатных разбора кому угодно.
func TestReportRequiresSignIn(t *testing.T) {
	s, _ := testServer(t)

	got := postReport(t, s, "", `{"device_id":"d1","slot_id":"s1","lang":"ru"}`)
	if got.Code != http.StatusUnauthorized {
		t.Fatalf("разбор без входа дал %d %s", got.Code, got.Body)
	}
	if code := errCode(t, got.Body.Bytes()); code != "no_session" {
		t.Fatalf("код ошибки %q, ожидался no_session", code)
	}
}

// Вошёл, но не сказал, какую машину разбираем: списывать не с чего.
func TestReportNeedsSlot(t *testing.T) {
	s, accs := testServer(t)
	token, _ := login(t, accs, "u1")

	got := postReport(t, s, token, `{"device_id":"d1","lang":"ru"}`)
	if got.Code != http.StatusUnprocessableEntity {
		t.Fatalf("разбор без машины дал %d %s", got.Code, got.Body)
	}
	if code := errCode(t, got.Body.Bytes()); code != "no_slot" {
		t.Fatalf("код ошибки %q, ожидался no_slot", code)
	}
}

// Отказ приходит до чтения аудио: незачем разбирать шесть мегабайт, чтобы
// потом сказать «войдите».
func TestReportChecksSessionBeforeAudio(t *testing.T) {
	s, _ := testServer(t)

	got := postReport(t, s, "", `{"device_id":"d1","slot_id":"s1","lang":"ru"}`)
	if code := errCode(t, got.Body.Bytes()); code == "bad_audio" {
		t.Fatal("сервер занялся негодным файлом раньше, чем проверил вход")
	}
}
