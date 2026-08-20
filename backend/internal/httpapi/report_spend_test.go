package httpapi

import (
	"testing"

	"stuk/backend/internal/account"
)

// Разбор со входом списывает проверку с указанного места, а не с общего счёта.
// Проверяется здесь, потому что путь списания в handleReport переходно
// двоится: со входом — баланс места, без входа — старый дневной лимит.
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
	if got.Slots[0].Checks != 5 {
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
	if got.Slots[0].Checks != 5 {
		t.Fatalf("проверка не вернулась: %d", got.Slots[0].Checks)
	}
	if !got.Slots[0].Locked() {
		t.Fatal("возврат отпер машину — так запрет обходился бы отменой")
	}
}
