package httpapi

import (
	"context"
	"encoding/json"
	"errors"
	"net/http"
	"testing"

	"stuk/backend/internal/account"
	"stuk/backend/internal/billing"
	"stuk/backend/internal/config"
	"stuk/backend/internal/stats"
)

type fakeStore struct {
	err   error
	calls int
	// Что именно спросили у магазина: подмена товара должна доезжать до него,
	// а не приниматься на слово.
	product, token string
}

func (f *fakeStore) Verify(_ context.Context, productID, purchaseToken string) (string, error) {
	f.calls++
	f.product, f.token = productID, purchaseToken
	if f.err != nil {
		return "", f.err
	}
	// Настоящий магазин возвращает свой номер покупки; поддельному хватает
	// присланного чека.
	return purchaseToken, nil
}

func serverWithStore(t *testing.T, fs *fakeStore) (*Server, *account.Store) {
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
	stores := map[string]StoreVerifier{}
	if fs != nil {
		stores["google"] = fs
	}
	return New(config.Config{}, nil, nil, st, accs, stores), accs
}

func TestPurchaseGrantsAfterStoreConfirms(t *testing.T) {
	fs := &fakeStore{}
	s, accs := serverWithStore(t, fs)
	token, _ := login(t, accs, "u1")

	got := do(t, s, http.MethodPost, "/api/v1/account/purchase", token, purchaseRequest{
		Platform: "google", ProductID: "checks_20", PurchaseToken: "чек-1", SlotID: "s1",
	})
	if got.Code != http.StatusOK {
		t.Fatalf("покупка не прошла: %d %s", got.Code, got.Body)
	}
	var state account.Account
	if err := json.Unmarshal(got.Body.Bytes(), &state); err != nil {
		t.Fatal(err)
	}
	if want := billing.FreeChecks + 20; state.Slots[0].Checks != want {
		t.Fatalf("начислено до %d проверок, ожидалось %d", state.Slots[0].Checks, want)
	}
	if fs.product != "checks_20" || fs.token != "чек-1" {
		t.Fatalf("в магазин ушло %q / %q", fs.product, fs.token)
	}
}

// Магазин не подтвердил — не начисляем ничего.
func TestPurchaseRejectedByStore(t *testing.T) {
	fs := &fakeStore{err: billing.ErrNotPurchased}
	s, accs := serverWithStore(t, fs)
	token, acc := login(t, accs, "u1")

	got := do(t, s, http.MethodPost, "/api/v1/account/purchase", token, purchaseRequest{
		Platform: "google", ProductID: "checks_40", PurchaseToken: "выдумка", SlotID: "s1",
	})
	if got.Code != http.StatusPaymentRequired {
		t.Fatalf("неподтверждённая покупка дала %d", got.Code)
	}
	after, _ := accs.Get(acc.ID)
	if after.Slots[0].Checks != billing.FreeChecks {
		t.Fatalf("начислено по неподтверждённому чеку: %d", after.Slots[0].Checks)
	}
}

// Магазин недоступен — покупка не теряется: приложение повторит запрос.
func TestPurchaseStoreUnavailable(t *testing.T) {
	fs := &fakeStore{err: errors.New("сеть подвела")}
	s, accs := serverWithStore(t, fs)
	token, _ := login(t, accs, "u1")

	got := do(t, s, http.MethodPost, "/api/v1/account/purchase", token, purchaseRequest{
		Platform: "google", ProductID: "checks_5", PurchaseToken: "чек-1", SlotID: "s1",
	})
	if got.Code != http.StatusServiceUnavailable {
		t.Fatalf("недоступный магазин дал %d", got.Code)
	}
	if code := errCode(t, got.Body.Bytes()); code != "verify_later" {
		t.Fatalf("код %q, ожидался verify_later", code)
	}
}

// Ключа магазина нет — отказ, а не начисление на веру.
func TestPurchaseWithoutConfiguredStore(t *testing.T) {
	s, accs := serverWithStore(t, nil)
	token, acc := login(t, accs, "u1")

	got := do(t, s, http.MethodPost, "/api/v1/account/purchase", token, purchaseRequest{
		Platform: "google", ProductID: "checks_40", PurchaseToken: "чек-1", SlotID: "s1",
	})
	if got.Code != http.StatusServiceUnavailable {
		t.Fatalf("без настроенного магазина дало %d", got.Code)
	}
	after, _ := accs.Get(acc.ID)
	if after.Slots[0].Checks != billing.FreeChecks {
		t.Fatal("начислено без проверки в магазине")
	}
}

// Один чек начисляется один раз, сколько бы раз приложение его ни прислало.
func TestPurchaseIsIdempotent(t *testing.T) {
	fs := &fakeStore{}
	s, accs := serverWithStore(t, fs)
	token, _ := login(t, accs, "u1")

	for i := 0; i < 3; i++ {
		if got := do(t, s, http.MethodPost, "/api/v1/account/purchase", token, purchaseRequest{
			Platform: "google", ProductID: "checks_40", PurchaseToken: "чек-1", SlotID: "s1",
		}); got.Code != http.StatusOK {
			t.Fatalf("повтор %d: %d %s", i, got.Code, got.Body)
		}
	}
	acc, _ := accs.BySession(token)
	if want := billing.FreeChecks + 40; acc.Slots[0].Checks != want {
		t.Fatalf("начислено %d, ожидалось %d", acc.Slots[0].Checks, want)
	}
}

func TestPurchaseNeedsSession(t *testing.T) {
	s, _ := serverWithStore(t, &fakeStore{})
	got := do(t, s, http.MethodPost, "/api/v1/account/purchase", "", purchaseRequest{
		Platform: "google", ProductID: "checks_5", PurchaseToken: "чек-1",
	})
	if got.Code != http.StatusUnauthorized {
		t.Fatalf("покупка без сессии дала %d", got.Code)
	}
}
