// Пакет billing — товары и то, что они дают.
//
// Таблица здесь главная: сколько проверок и мест начислить, решает сервер по
// идентификатору покупки. Клиент присылает только чек магазина; доверять его
// словам о содержимом пакета нельзя — это первое, что подделывают.
//
// Идентификаторы одинаковы в Google Play и App Store. Разные наборы на
// платформах означали бы две таблицы, два прайса и расхождение при первой же
// правке.
package billing

// Grant — что начисляется за покупку.
type Grant struct {
	// Проверки звука. Расходуются по одной за разбор.
	Checks int
	// Места в гараже. Остаются навсегда.
	Slots int
}

// Product — позиция в магазине.
type Product struct {
	ID string
	Grant
	// Расходуемый: в магазинах такие покупки «потребляются» и их можно
	// купить снова. Места в гараже тоже расходуемые — иначе второй раз
	// то же место не продать.
	Consumable bool
}

// Бесплатный старт. Ровно столько получает человек, ничего не покупая.
const (
	FreeSlots  = 1
	FreeChecks = 5
)

// Проверки звука пакетами.
var CheckPacks = []Product{
	{ID: "checks_5", Grant: Grant{Checks: 5}, Consumable: true},
	{ID: "checks_10", Grant: Grant{Checks: 10}, Consumable: true},
	{ID: "checks_20", Grant: Grant{Checks: 20}, Consumable: true},
	{ID: "checks_40", Grant: Grant{Checks: 40}, Consumable: true},
}

// Места в гараже. В каждом месте едут 5 проверок: место без проверок
// бесполезно, а отдельная покупка сразу после первой раздражает.
var GaragePacks = []Product{
	{ID: "garage_1", Grant: Grant{Slots: 1, Checks: 5}, Consumable: true},
	{ID: "garage_2", Grant: Grant{Slots: 2, Checks: 10}, Consumable: true},
	{ID: "garage_4", Grant: Grant{Slots: 4, Checks: 20}, Consumable: true},
	{ID: "garage_8", Grant: Grant{Slots: 8, Checks: 40}, Consumable: true},
}

var byID = func() map[string]Product {
	m := make(map[string]Product, len(CheckPacks)+len(GaragePacks))
	for _, p := range append(append([]Product{}, CheckPacks...), GaragePacks...) {
		m[p.ID] = p
	}
	return m
}()

// ByID возвращает товар и признак того, что он вообще существует.
// Неизвестный идентификатор — либо старый клиент, либо подделка; и в том,
// и в другом случае начислять нечего.
func ByID(id string) (Product, bool) {
	p, ok := byID[id]
	return p, ok
}

// All — все товары, в порядке показа на экране покупки.
func All() []Product {
	return append(append([]Product{}, CheckPacks...), GaragePacks...)
}
