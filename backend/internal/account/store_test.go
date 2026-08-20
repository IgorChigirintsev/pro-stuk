package account

import (
	"errors"
	"os"
	"path/filepath"
	"testing"
)

func newStore(t *testing.T) (*Store, string) {
	t.Helper()
	dir := t.TempDir()
	s, err := Open(dir)
	if err != nil {
		t.Fatal(err)
	}
	return s, dir
}

// Главное обещание входа: после переустановки приложения человек получает
// свой гараж и свои проверки обратно.
func TestReinstallRestoresEverything(t *testing.T) {
	s, dir := newStore(t)
	a, err := s.EnsureAccount("google", "sub-1", now)
	if err != nil {
		t.Fatal(err)
	}
	if _, err := s.Update(a.ID, func(x *Account) error {
		if err := x.SetCar("s1", vaz()); err != nil {
			return err
		}
		if err := x.Grant("p1", "checks_20", "s1"); err != nil {
			return err
		}
		return x.Spend("s1")
	}); err != nil {
		t.Fatal(err)
	}

	// Приложение снесли и поставили заново — сервер перезапустили заодно.
	s2, err := Open(dir)
	if err != nil {
		t.Fatal(err)
	}
	back, err := s2.EnsureAccount("google", "sub-1", now)
	if err != nil {
		t.Fatal(err)
	}
	if back.ID != a.ID {
		t.Fatalf("завели новую запись вместо прежней: %s против %s", back.ID, a.ID)
	}
	if len(back.Slots) != 1 || back.Slots[0].Car == nil {
		t.Fatalf("машина не вернулась: %+v", back.Slots)
	}
	if back.Slots[0].Checks != 24 {
		t.Fatalf("проверок %d, ожидалось 24", back.Slots[0].Checks)
	}
	if !back.Slots[0].Locked() {
		t.Fatal("замок машины не пережил перезапуск")
	}
}

// Разные люди не должны видеть чужой гараж.
func TestAccountsAreSeparate(t *testing.T) {
	s, _ := newStore(t)
	a, _ := s.EnsureAccount("google", "sub-1", now)
	b, _ := s.EnsureAccount("apple", "sub-1", now)
	if a.ID == b.ID {
		t.Fatal("совпадающий субъект у разных провайдеров слился в одну запись")
	}
	if _, err := s.Update(a.ID, func(x *Account) error { return x.Grant("p1", "checks_40", "s1") }); err != nil {
		t.Fatal(err)
	}
	got, _ := s.Get(b.ID)
	if got.Slots[0].Checks != 5 {
		t.Fatalf("чужая покупка досталась второй записи: %d", got.Slots[0].Checks)
	}
}

// Версия — то, по чему приложение понимает, что его копия устарела.
func TestVersionGrowsOnChange(t *testing.T) {
	s, _ := newStore(t)
	a, _ := s.EnsureAccount("google", "sub-1", now)
	first := a.Version
	up, err := s.Update(a.ID, func(x *Account) error { return x.SetCar("s1", vaz()) })
	if err != nil {
		t.Fatal(err)
	}
	if up.Version <= first {
		t.Fatalf("версия не выросла: было %d, стало %d", first, up.Version)
	}
}

// Неудачная правка не должна оставлять запись изменённой наполовину.
func TestFailedUpdateChangesNothing(t *testing.T) {
	s, _ := newStore(t)
	a, _ := s.EnsureAccount("google", "sub-1", now)
	boom := errors.New("сорвалось")
	_, err := s.Update(a.ID, func(x *Account) error {
		_ = x.Grant("p1", "checks_40", "s1")
		return boom
	})
	if !errors.Is(err, boom) {
		t.Fatalf("ожидалась ошибка правки, получено %v", err)
	}
	got, _ := s.Get(a.ID)
	if got.Slots[0].Checks != 5 || got.Version != a.Version {
		t.Fatalf("частичная правка сохранилась: %+v версия %d", got.Slots, got.Version)
	}
}

// Копия наружу: правка полученной записи не должна менять хранилище.
func TestGetReturnsCopy(t *testing.T) {
	s, _ := newStore(t)
	a, _ := s.EnsureAccount("google", "sub-1", now)
	got, _ := s.Get(a.ID)
	got.Slots[0].Checks = 999
	got.Done["взлом"] = true
	again, _ := s.Get(a.ID)
	if again.Slots[0].Checks != 5 || again.Done["взлом"] {
		t.Fatal("хранилище изменилось через выданную копию")
	}
}

// Повреждённый файл — повод остановиться, а не начать с чистого листа:
// молчаливый старт с нуля обнулил бы всем оплаченные проверки.
func TestBrokenFileRefusesToStart(t *testing.T) {
	dir := t.TempDir()
	if err := os.WriteFile(filepath.Join(dir, "accounts.json"), []byte("{не json"), 0o600); err != nil {
		t.Fatal(err)
	}
	if _, err := Open(dir); err == nil {
		t.Fatal("повреждённый файл принят молча")
	}
}

func TestGetUnknownAccount(t *testing.T) {
	s, _ := newStore(t)
	if _, err := s.Get("a404"); !errors.Is(err, ErrNotFound) {
		t.Fatalf("ожидалось ErrNotFound, получено %v", err)
	}
}
