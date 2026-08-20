package billing

import "testing"

// Идентификаторы заводятся руками в Google Play и App Store Connect.
// Опечатка там означает покупку, за которую ничего не начислится, поэтому
// список закреплён тестом: менять его можно только вместе с консолями.
func TestProductIDs(t *testing.T) {
	want := []string{
		"checks_5", "checks_10", "checks_20", "checks_40",
		"garage_1", "garage_2", "garage_4", "garage_8",
	}
	got := All()
	if len(got) != len(want) {
		t.Fatalf("товаров %d, ожидалось %d", len(got), len(want))
	}
	for i, id := range want {
		if got[i].ID != id {
			t.Errorf("товар %d: %q, ожидался %q", i, got[i].ID, id)
		}
	}
}

// Проверки лежат на конкретном месте гаража, а не общим счётом: пакет мест
// приносит комплект на каждое место, пакет проверок — на одно выбранное.
func TestGrants(t *testing.T) {
	for _, p := range GaragePacks {
		if p.ChecksPerSlot != 5 {
			t.Errorf("%s: на месте %d проверок, ожидалось 5", p.ID, p.ChecksPerSlot)
		}
		if p.Checks != 0 {
			t.Errorf("%s: пакет мест не начисляет проверки мимо мест", p.ID)
		}
		if want := p.Slots * 5; p.TotalChecks() != want {
			t.Errorf("%s: всего проверок %d, ожидалось %d", p.ID, p.TotalChecks(), want)
		}
	}
	for _, p := range CheckPacks {
		if p.Slots != 0 {
			t.Errorf("%s: пакет проверок не должен давать места", p.ID)
		}
		if p.TotalChecks() != p.Checks {
			t.Errorf("%s: проверки разошлись", p.ID)
		}
	}
}

// В консоли пакет на десять проверок заведён как checks_10_2. Пока это так,
// сервер обязан узнавать оба имени.
func TestAliasResolves(t *testing.T) {
	p, ok := ByID("checks_10_2")
	if !ok {
		t.Fatal("checks_10_2 не опознан — покупка не начислится")
	}
	if p.ID != "checks_10" || p.Checks != 10 {
		t.Fatalf("алиас ведёт не туда: %+v", p)
	}
}

func TestUnknownIDGrantsNothing(t *testing.T) {
	if _, ok := ByID("checks_9999"); ok {
		t.Fatal("несуществующий товар опознан как настоящий")
	}
}
