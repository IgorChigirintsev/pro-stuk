package billing

import (
	"context"
	"crypto/rand"
	"crypto/rsa"
	"crypto/x509"
	"encoding/json"
	"encoding/pem"
	"errors"
	"net/http"
	"net/http/httptest"
	"os"
	"path/filepath"
	"strings"
	"sync/atomic"
	"testing"
)

// Поддельный Google: проверяется наша логика, а не доступность сети.
type fakePlay struct {
	srv *httptest.Server
	// Что отдавать на запрос покупки.
	state        int
	acknowledged int
	notFound     bool

	tokenCalls atomic.Int32
	ackCalls   atomic.Int32
}

func newFakePlay(t *testing.T) *fakePlay {
	t.Helper()
	f := &fakePlay{}
	mux := http.NewServeMux()
	mux.HandleFunc("/token", func(w http.ResponseWriter, r *http.Request) {
		f.tokenCalls.Add(1)
		json.NewEncoder(w).Encode(map[string]any{
			"access_token": "ya29.тест", "expires_in": 3600,
		})
	})
	mux.HandleFunc("/androidpublisher/", func(w http.ResponseWriter, r *http.Request) {
		if strings.HasSuffix(r.URL.Path, ":acknowledge") {
			f.ackCalls.Add(1)
			w.WriteHeader(http.StatusOK)
			return
		}
		if f.notFound {
			w.WriteHeader(http.StatusNotFound)
			return
		}
		json.NewEncoder(w).Encode(playPurchase{
			PurchaseState:        f.state,
			AcknowledgementState: f.acknowledged,
			OrderID:              "GPA.1234",
		})
	})
	f.srv = httptest.NewServer(mux)
	t.Cleanup(f.srv.Close)
	return f
}

func credsFile(t *testing.T) string {
	t.Helper()
	key, err := rsa.GenerateKey(rand.Reader, 2048)
	if err != nil {
		t.Fatal(err)
	}
	pemKey := pem.EncodeToMemory(&pem.Block{
		Type:  "PRIVATE KEY",
		Bytes: func() []byte { b, _ := x509.MarshalPKCS8PrivateKey(key); return b }(),
	})
	path := filepath.Join(t.TempDir(), "sa.json")
	raw, _ := json.Marshal(map[string]string{
		"type":         "service_account",
		"client_email": "prostuk-billing@pro-stuk.iam.gserviceaccount.com",
		"private_key":  string(pemKey),
	})
	if err := os.WriteFile(path, raw, 0o600); err != nil {
		t.Fatal(err)
	}
	return path
}

func newPlay(t *testing.T, f *fakePlay) *Play {
	t.Helper()
	p, err := NewPlay(credsFile(t), "chigirintsevandco.prostuk")
	if err != nil {
		t.Fatal(err)
	}
	p.tokenURL = f.srv.URL + "/token"
	p.apiBase = f.srv.URL
	return p
}

func TestVerifyAcceptsPaidPurchase(t *testing.T) {
	f := newFakePlay(t)
	p := newPlay(t, f)
	if _, err := p.Verify(context.Background(), "checks_20", "чек-1"); err != nil {
		t.Fatalf("оплаченная покупка не прошла: %v", err)
	}
	// Неподтверждённую покупку Google возвращает покупателю через три дня.
	if f.ackCalls.Load() != 1 {
		t.Fatalf("подтверждений %d, ожидалось одно", f.ackCalls.Load())
	}
}

// Отменённая покупка и покупка в ожидании оплаты не начисляются.
func TestVerifyRejectsUnpaid(t *testing.T) {
	for _, state := range []int{1, 2} {
		f := newFakePlay(t)
		f.state = state
		p := newPlay(t, f)
		if _, err := p.Verify(context.Background(), "checks_20", "чек-1"); !errors.Is(err, ErrNotPurchased) {
			t.Fatalf("состояние %d принято: %v", state, err)
		}
		if f.ackCalls.Load() != 0 {
			t.Fatalf("состояние %d: неоплаченную покупку подтвердили", state)
		}
	}
}

// Выдуманный чек и подмена товара выглядят для Google одинаково: такой пары
// не существует. Это и закрывает подмену «купил пять — говорю сорок».
func TestVerifyRejectsUnknownPurchase(t *testing.T) {
	f := newFakePlay(t)
	f.notFound = true
	p := newPlay(t, f)
	if _, err := p.Verify(context.Background(), "checks_40", "выдуманный-чек"); !errors.Is(err, ErrNotPurchased) {
		t.Fatalf("несуществующая покупка принята: %v", err)
	}
}

// Уже подтверждённую покупку второй раз не подтверждаем.
func TestVerifySkipsSecondAcknowledge(t *testing.T) {
	f := newFakePlay(t)
	f.acknowledged = 1
	p := newPlay(t, f)
	if _, err := p.Verify(context.Background(), "checks_5", "чек-1"); err != nil {
		t.Fatal(err)
	}
	if f.ackCalls.Load() != 0 {
		t.Fatal("подтвердили покупку повторно")
	}
}

// Токен доступа живёт час: просить новый на каждую покупку — лишний круг
// по сети в самый неудачный момент, сразу после оплаты.
func TestAccessTokenIsCached(t *testing.T) {
	f := newFakePlay(t)
	p := newPlay(t, f)
	for i := 0; i < 4; i++ {
		if _, err := p.Verify(context.Background(), "checks_5", "чек-1"); err != nil {
			t.Fatal(err)
		}
	}
	if f.tokenCalls.Load() != 1 {
		t.Fatalf("токен запрошен %d раз вместо одного", f.tokenCalls.Load())
	}
}

// Без ключа сервер не начисляет вслепую, а честно отказывает.
func TestMissingCredentials(t *testing.T) {
	if _, err := NewPlay("", "pkg"); !errors.Is(err, ErrNoCredentials) {
		t.Fatalf("пустой путь принят: %v", err)
	}
	if _, err := NewPlay("/нет/такого/файла.json", "pkg"); !errors.Is(err, ErrNoCredentials) {
		t.Fatalf("отсутствующий файл принят: %v", err)
	}
	bad := filepath.Join(t.TempDir(), "bad.json")
	os.WriteFile(bad, []byte(`{"type":"user"}`), 0o600)
	if _, err := NewPlay(bad, "pkg"); !errors.Is(err, ErrNoCredentials) {
		t.Fatalf("чужой файл принят за ключ сервисного аккаунта: %v", err)
	}
}
