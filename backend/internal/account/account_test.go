package account

import (
	"errors"
	"testing"
	"time"

	"stuk/backend/internal/billing"
)

var now = time.Date(2026, 8, 20, 12, 0, 0, 0, time.UTC)

func vaz() Car { return Car{Make: "ВАЗ (Lada)", Model: "Granta", Year: 2015, Mileage: 90000} }
func bmw() Car { return Car{Make: "BMW", Model: "3 серия", Year: 2018, Mileage: 60000} }

func newAcc(t *testing.T) *Account {
	t.Helper()
	a := New("a1", "google", "sub-1", now)
	if len(a.Slots) != 1 || a.Slots[0].Checks != billing.FreeChecks {
		t.Fatalf("бесплатный старт разошёлся: %+v", a.Slots)
	}
	return a
}

// Проверки принадлежат месту, а не аккаунту: купленное для одной машины
// не должно утекать на другую. Это ядро всей экономики.
func TestChecksBelongToSlot(t *testing.T) {
	a := newAcc(t)
	if err := a.SetCar("s1", vaz()); err != nil {
		t.Fatal(err)
	}
	// Купили место — оно приходит со своим комплектом.
	if err := a.Grant("p1", "garage_1", ""); err != nil {
		t.Fatal(err)
	}
	if len(a.Slots) != 2 {
		t.Fatalf("мест %d, ожидалось 2", len(a.Slots))
	}
	if a.Slots[1].Checks != 5 {
		t.Fatalf("на новом месте %d проверок, ожидалось 5", a.Slots[1].Checks)
	}
	if err := a.SetCar("s2", bmw()); err != nil {
		t.Fatal(err)
	}

	// Тратим всё на первой машине.
	for i := 0; i < billing.FreeChecks; i++ {
		if err := a.Spend("s1"); err != nil {
			t.Fatalf("проверка %d: %v", i+1, err)
		}
	}
	if err := a.Spend("s1"); !errors.Is(err, ErrNoChecks) {
		t.Fatalf("лишняя проверка прошла: %v", err)
	}
	// У второй машины свои пять — они не помогли первой и не потратились.
	if a.Slots[1].Checks != 5 {
		t.Fatalf("баланс второй машины изменился: %d", a.Slots[1].Checks)
	}
}

// Пакет проверок ложится на то место, для которого его покупали.
func TestCheckPackGoesToChosenSlot(t *testing.T) {
	a := newAcc(t)
	_ = a.SetCar("s1", vaz())
	_ = a.Grant("p1", "garage_1", "")
	_ = a.SetCar("s2", bmw())

	if err := a.Grant("p2", "checks_20", "s2"); err != nil {
		t.Fatal(err)
	}
	if a.Slots[0].Checks != billing.FreeChecks {
		t.Errorf("первой машине досталось лишнее: %d", a.Slots[0].Checks)
	}
	if a.Slots[1].Checks != 25 { // купленное место: 5 своих плюс пакет на 20
		t.Errorf("на второй машине %d проверок, ожидалось 25", a.Slots[1].Checks)
	}
}

// Связь могла оборваться после списания денег: покупка засчитывается, а
// проверки ждут привязки, ничего не теряя.
func TestPendingSurvivesLostSlot(t *testing.T) {
	a := newAcc(t)
	if err := a.Grant("p1", "checks_10", "нет-такого-места"); err != nil {
		t.Fatal(err)
	}
	if len(a.Pending) != 1 || a.Pending[0].Checks != 10 {
		t.Fatalf("покупка потерялась: %+v", a.Pending)
	}
	if a.Slots[0].Checks != billing.FreeChecks {
		t.Fatalf("проверки легли не туда: %d", a.Slots[0].Checks)
	}
	if err := a.Assign("p1", "s1"); err != nil {
		t.Fatal(err)
	}
	if want := billing.FreeChecks + 10; a.Slots[0].Checks != want {
		t.Fatalf("после привязки %d проверок, ожидалось %d", a.Slots[0].Checks, want)
	}
	if len(a.Pending) != 0 {
		t.Fatal("покупка осталась в неразнесённых после привязки")
	}
}

// Магазины присылают уведомление о покупке не один раз.
func TestGrantIsIdempotent(t *testing.T) {
	a := newAcc(t)
	for i := 0; i < 3; i++ {
		if err := a.Grant("p1", "checks_40", "s1"); err != nil {
			t.Fatal(err)
		}
	}
	if want := billing.FreeChecks + 40; a.Slots[0].Checks != want {
		t.Fatalf("начислено %d, ожидалось %d: один чек сработал несколько раз",
			a.Slots[0].Checks, want)
	}
}

func TestUnknownProductGrantsNothing(t *testing.T) {
	a := newAcc(t)
	if err := a.Grant("p1", "checks_999", "s1"); !errors.Is(err, ErrUnknownProduct) {
		t.Fatalf("ожидалась ошибка неизвестного товара, получено %v", err)
	}
	if a.Slots[0].Checks != billing.FreeChecks {
		t.Fatal("подделанный идентификатор что-то начислил")
	}
}

// До первой проверки машину правят свободно: опечатка не должна стоить места.
func TestCarEditableBeforeFirstCheck(t *testing.T) {
	a := newAcc(t)
	_ = a.SetCar("s1", vaz())
	fixed := vaz()
	fixed.Year = 2016
	if err := a.EditCar("s1", fixed); err != nil {
		t.Fatalf("правка до первой проверки не прошла: %v", err)
	}
	if err := a.RemoveCar("s1"); err != nil {
		t.Fatalf("удаление до первой проверки не прошло: %v", err)
	}
}

// После первой проверки место закреплено за машиной.
func TestCarLockedAfterFirstCheck(t *testing.T) {
	a := newAcc(t)
	_ = a.SetCar("s1", vaz())
	if err := a.Spend("s1"); err != nil {
		t.Fatal(err)
	}
	if err := a.EditCar("s1", bmw()); !errors.Is(err, ErrSlotLocked) {
		t.Fatalf("машину подменили после разбора: %v", err)
	}
	if err := a.RemoveCar("s1"); !errors.Is(err, ErrSlotLocked) {
		t.Fatalf("запрет обошли удалением: %v", err)
	}
}

// Пробег правится всегда: он растёт, и от него зависит качество разбора.
func TestMileageAlwaysEditable(t *testing.T) {
	a := newAcc(t)
	_ = a.SetCar("s1", vaz())
	_ = a.Spend("s1")
	c := vaz()
	c.Mileage = 130000
	if err := a.EditCar("s1", c); err != nil {
		t.Fatalf("пробег не дали поправить: %v", err)
	}
	if a.Slots[0].Car.Mileage != 130000 {
		t.Fatal("пробег не сохранился")
	}
}

// Возврат за сорванный разбор не отпирает машину: иначе отмена стала бы
// способом обхода запрета.
func TestRefundKeepsLock(t *testing.T) {
	a := newAcc(t)
	_ = a.SetCar("s1", vaz())
	_ = a.Spend("s1")
	a.Refund("s1")
	if a.Slots[0].Checks != billing.FreeChecks {
		t.Fatalf("возврат не вернул проверку: %d", a.Slots[0].Checks)
	}
	if !a.Slots[0].Locked() {
		t.Fatal("возврат отпер машину")
	}
}

func TestSpendNeedsCar(t *testing.T) {
	a := newAcc(t)
	if err := a.Spend("s1"); !errors.Is(err, ErrSlotEmpty) {
		t.Fatalf("списали проверку с пустого места: %v", err)
	}
}

func TestSetCarRefusesTakenSlot(t *testing.T) {
	a := newAcc(t)
	_ = a.SetCar("s1", vaz())
	if err := a.SetCar("s1", bmw()); !errors.Is(err, ErrSlotTaken) {
		t.Fatalf("на занятое место встала вторая машина: %v", err)
	}
}

// Идентификаторы мест не должны повторяться после покупки новых.
func TestSlotIDsUnique(t *testing.T) {
	a := newAcc(t)
	_ = a.Grant("p1", "garage_8", "")
	seen := map[string]bool{}
	for _, s := range a.Slots {
		if seen[s.ID] {
			t.Fatalf("номер места %q повторяется", s.ID)
		}
		seen[s.ID] = true
	}
	if len(a.Slots) != 9 {
		t.Fatalf("мест %d, ожидалось 9", len(a.Slots))
	}
}
