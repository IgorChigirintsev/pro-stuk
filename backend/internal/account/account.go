// Пакет account — учётные записи, места в гараже и их баланс проверок.
//
// Устройство баланса. Проверки лежат не на аккаунте, а на месте гаража, то
// есть у конкретной машины: купленные для одной машины не тратятся на другую.
// Это решение продуктовое, но оно определяет всю модель, поэтому здесь нет
// общего счёта — только счёт места.
//
// Машина запирается на месте после первой потраченной проверки. До неё
// правки свободны: опечатка в годе выпуска не должна стоить человеку места.
// После — марку, модель, поколение и год менять нельзя, иначе одно место
// обслуживало бы сколько угодно машин по кругу. Пробег правится всегда:
// он растёт, и от него зависит разбор.
package account

import (
	"errors"
	"fmt"
	"time"

	"stuk/backend/internal/billing"
)

var (
	ErrNoSlot         = errors.New("места с таким номером нет")
	ErrSlotLocked     = errors.New("машину уже разбирали: менять и удалять её нельзя")
	ErrSlotTaken      = errors.New("место занято")
	ErrSlotEmpty      = errors.New("на месте нет машины")
	ErrNoChecks       = errors.New("на этой машине не осталось проверок")
	ErrUnknownProduct = errors.New("неизвестный товар")
)

// Car — машина на месте. Пробег отделён от остальных полей намеренно:
// он единственный меняется в течение жизни машины.
type Car struct {
	Make       string `json:"make"`
	Model      string `json:"model"`
	Generation string `json:"generation,omitempty"`
	Year       int    `json:"year"`
	Mileage    int    `json:"mileage"`
}

// SameIdentity сравнивает то, что делает место занятым именно этой машиной.
// Пробег в сравнение не входит.
func (c Car) SameIdentity(o Car) bool {
	return c.Make == o.Make && c.Model == o.Model &&
		c.Generation == o.Generation && c.Year == o.Year
}

// Slot — место в гараже со своим балансом.
type Slot struct {
	ID     string `json:"id"`
	Car    *Car   `json:"car,omitempty"`
	Checks int    `json:"checks"`
	// Сколько проверок на этом месте уже потрачено. Ненулевое значение
	// запирает машину: именно потраченная проверка, а не сам факт покупки.
	Used int `json:"used"`
}

// Locked — машину менять и удалять нельзя.
func (s Slot) Locked() bool { return s.Used > 0 }

// Pending — купленные проверки, которые ещё не легли на место.
//
// Покупка засчитывается сервером сразу, а привязка может не дойти: связь
// рвётся ровно в тот момент, когда деньги уже списаны. Такие проверки ждут
// здесь, и приложение привязывает их позже, ничего не потеряв.
type Pending struct {
	PurchaseID string `json:"purchase_id"`
	Checks     int    `json:"checks"`
	// Место, для которого покупали. Пустое — покупатель не выбрал или
	// место успели удалить.
	SlotID string `json:"slot_id,omitempty"`
}

// Account — учётная запись, привязанная к аккаунту Google или Apple.
type Account struct {
	ID       string `json:"id"`
	Provider string `json:"provider"`
	Subject  string `json:"subject"`
	Created  string `json:"created"`
	// Растёт при каждом изменении. Приложение держит копию состояния у себя
	// и по версии понимает, что она устарела, не выкачивая всё заново.
	Version int64 `json:"version"`

	Slots   []Slot    `json:"slots"`
	Pending []Pending `json:"pending,omitempty"`

	// Обработанные покупки: магазин присылает уведомление повторно, и без
	// этого списка один чек начислялся бы много раз.
	Done map[string]bool `json:"done,omitempty"`
}

// New создаёт запись с бесплатным местом и проверками на нём.
func New(id, provider, subject string, now time.Time) *Account {
	a := &Account{
		ID:       id,
		Provider: provider,
		Subject:  subject,
		Created:  now.UTC().Format(time.RFC3339),
		Done:     map[string]bool{},
	}
	for i := 0; i < billing.FreeSlots; i++ {
		a.Slots = append(a.Slots, Slot{
			ID:     fmt.Sprintf("s%d", i+1),
			Checks: billing.FreeChecks,
		})
	}
	return a
}

func (a *Account) slot(id string) *Slot {
	for i := range a.Slots {
		if a.Slots[i].ID == id {
			return &a.Slots[i]
		}
	}
	return nil
}

// SetCar ставит машину на пустое место.
func (a *Account) SetCar(slotID string, car Car) error {
	s := a.slot(slotID)
	if s == nil {
		return ErrNoSlot
	}
	if s.Car != nil {
		return ErrSlotTaken
	}
	s.Car = &car
	return nil
}

// EditCar меняет машину на месте. После первой проверки проходит только
// правка пробега — остальное запёрто.
func (a *Account) EditCar(slotID string, car Car) error {
	s := a.slot(slotID)
	if s == nil {
		return ErrNoSlot
	}
	if s.Car == nil {
		return ErrSlotEmpty
	}
	if s.Locked() && !s.Car.SameIdentity(car) {
		return ErrSlotLocked
	}
	s.Car = &car
	return nil
}

// RemoveCar освобождает место. Запертое место не освобождается: иначе запрет
// на смену машины обходился бы удалением и добавлением заново.
func (a *Account) RemoveCar(slotID string) error {
	s := a.slot(slotID)
	if s == nil {
		return ErrNoSlot
	}
	if s.Locked() {
		return ErrSlotLocked
	}
	s.Car = nil
	return nil
}

// Spend списывает проверку с места. Возвращает ошибку, если проверок нет —
// в этом случае разбор не начинается и деньги не тратятся.
func (a *Account) Spend(slotID string) error {
	s := a.slot(slotID)
	if s == nil {
		return ErrNoSlot
	}
	if s.Car == nil {
		return ErrSlotEmpty
	}
	if s.Checks <= 0 {
		return ErrNoChecks
	}
	s.Checks--
	s.Used++
	return nil
}

// Refund возвращает проверку, если разбор сорвался не по вине человека.
// Счётчик потраченных не откатывается: машина уже отправлялась в разбор,
// и отпирать её обратно нельзя — иначе отмена станет способом обхода.
func (a *Account) Refund(slotID string) {
	if s := a.slot(slotID); s != nil {
		s.Checks++
	}
}

// Grant начисляет покупку. Повторный вызов с тем же чеком ничего не меняет:
// магазины присылают уведомления не по одному разу.
//
// slotID — место, для которого покупали проверки. Если места нет или оно
// не указано, проверки уходят в Pending и ждут привязки.
func (a *Account) Grant(purchaseID, productID, slotID string) error {
	p, ok := billing.ByID(productID)
	if !ok {
		return ErrUnknownProduct
	}
	if a.Done == nil {
		a.Done = map[string]bool{}
	}
	if a.Done[purchaseID] {
		return nil
	}
	a.Done[purchaseID] = true

	for i := 0; i < p.Slots; i++ {
		a.Slots = append(a.Slots, Slot{
			ID:     fmt.Sprintf("s%d", len(a.Slots)+1),
			Checks: p.ChecksPerSlot,
		})
	}
	if p.Checks > 0 {
		if s := a.slot(slotID); s != nil {
			s.Checks += p.Checks
		} else {
			a.Pending = append(a.Pending, Pending{
				PurchaseID: purchaseID, Checks: p.Checks, SlotID: slotID,
			})
		}
	}
	return nil
}

// Assign кладёт отложенные проверки на место.
func (a *Account) Assign(purchaseID, slotID string) error {
	s := a.slot(slotID)
	if s == nil {
		return ErrNoSlot
	}
	for i, p := range a.Pending {
		if p.PurchaseID != purchaseID {
			continue
		}
		s.Checks += p.Checks
		a.Pending = append(a.Pending[:i], a.Pending[i+1:]...)
		return nil
	}
	return fmt.Errorf("покупка %q не найдена среди неразнесённых", purchaseID)
}
