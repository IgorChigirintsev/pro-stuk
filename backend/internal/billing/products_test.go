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

func TestGrants(t *testing.T) {
	// В каждом месте гаража едут 5 проверок.
	for _, p := range GaragePacks {
		if p.Checks != p.Slots*5 {
			t.Errorf("%s: мест %d, проверок %d — комплект разошёлся", p.ID, p.Slots, p.Checks)
		}
	}
	// Пакет проверок мест не добавляет.
	for _, p := range CheckPacks {
		if p.Slots != 0 {
			t.Errorf("%s: пакет проверок не должен давать места", p.ID)
		}
	}
}

func TestUnknownIDGrantsNothing(t *testing.T) {
	if _, ok := ByID("checks_9999"); ok {
		t.Fatal("несуществующий товар опознан как настоящий")
	}
}
