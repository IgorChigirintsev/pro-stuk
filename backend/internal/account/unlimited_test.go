package account

import (
	"errors"
	"testing"
)

// Безлимитное место: разборы идут, счётчик стоит. Нужно для съёмки карточек
// магазина, где число на экране должно быть одним и тем же на всех языках.
func TestUnlimitedSlotKeepsCount(t *testing.T) {
	a := newAcc(t)
	_ = a.SetCar("s1", vaz())
	a.Slots[0].Checks = 8
	a.Slots[0].Unlimited = true

	for i := 0; i < 20; i++ {
		if err := a.Spend("s1"); err != nil {
			t.Fatalf("разбор %d не прошёл: %v", i+1, err)
		}
	}
	if a.Slots[0].Checks != 8 {
		t.Fatalf("счётчик сдвинулся: %d", a.Slots[0].Checks)
	}
	if !a.Slots[0].Locked() {
		t.Fatal("машина не заперта, хотя разборы были")
	}
	// Возврат тоже не должен накручивать: иначе сорвавшийся разбор поднимал
	// бы число, и оно уплыло бы за съёмку.
	a.Refund("s1")
	if a.Slots[0].Checks != 8 {
		t.Fatalf("возврат накрутил счётчик: %d", a.Slots[0].Checks)
	}
}

// Обычное место работает как раньше: проверки кончаются.
func TestOrdinarySlotStillRunsOut(t *testing.T) {
	a := newAcc(t)
	_ = a.SetCar("s1", vaz())
	// Запоминаем до цикла: условие с убывающим счётчиком выполнилось бы
	// вдвое меньше раз, чем нужно.
	have := a.Slots[0].Checks
	for i := 0; i < have; i++ {
		if err := a.Spend("s1"); err != nil {
			t.Fatal(err)
		}
	}
	if err := a.Spend("s1"); !errors.Is(err, ErrNoChecks) {
		t.Fatalf("лишний разбор прошёл: %v", err)
	}
}
