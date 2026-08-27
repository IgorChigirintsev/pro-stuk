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
//
// Проверки не общие: они лежат на конкретном месте гаража, то есть у
// конкретной машины. Пакет проверок покупается для выбранного места, новое
// место приходит со своими проверками. Поэтому в отчёт списывается баланс
// той машины, которую разбирают, а не общий счёт.
type Grant struct {
	// Проверки на одно место — то, которое выбрано при покупке.
	Checks int
	// Новые места гаража.
	Slots int
	// Сколько проверок кладётся на каждое новое место.
	ChecksPerSlot int
}

// Бесплатный старт: одно место и проверки на нём. Дальше — только покупкой.
//
// Три, а не пять: этого хватает, чтобы разобрать свой стук и понять, чего
// приложение стоит, но не хватает, чтобы обслужить машину целиком и уйти.
const (
	FreeSlots  = 1
	FreeChecks = 3
)

// checksPerSlot — комплект проверок, идущий с каждым купленным местом.
// Место без проверок бесполезно, а отдельная покупка сразу после первой
// раздражает.
const checksPerSlot = 5

// Проверки звука пакетами. Начисляются на место, выбранное при покупке.
var CheckPacks = []Product{
	{ID: "checks_5", Grant: Grant{Checks: 5}},
	{ID: "checks_10", Grant: Grant{Checks: 10}},
	{ID: "checks_20", Grant: Grant{Checks: 20}},
	{ID: "checks_40", Grant: Grant{Checks: 40}},
}

// Места в гараже, каждое со своим комплектом проверок.
var GaragePacks = []Product{
	{ID: "garage_1", Grant: Grant{Slots: 1, ChecksPerSlot: checksPerSlot}},
	{ID: "garage_2", Grant: Grant{Slots: 2, ChecksPerSlot: checksPerSlot}},
	{ID: "garage_4", Grant: Grant{Slots: 4, ChecksPerSlot: checksPerSlot}},
	{ID: "garage_8", Grant: Grant{Slots: 8, ChecksPerSlot: checksPerSlot}},
}

// Product — позиция в магазине.
type Product struct {
	ID string
	Grant
}

// TotalChecks — сколько всего проверок приносит покупка. Для пакета мест это
// комплекты всех мест сразу.
func (p Product) TotalChecks() int {
	return p.Checks + p.Slots*p.ChecksPerSlot
}

// aliases — идентификаторы, заведённые в консоли с опечаткой.
//
// Переименовать товар в Google Play нельзя, а удалённый идентификатор не
// выдаётся повторно. Пока `checks_10` не пересоздан, покупка приходит под
// именем `checks_10_2`, и не знать его означало бы списать деньги и ничего
// не начислить.
var aliases = map[string]string{
	"checks_10_2": "checks_10",
}

var byID = func() map[string]Product {
	m := make(map[string]Product, len(CheckPacks)+len(GaragePacks))
	for _, p := range All() {
		m[p.ID] = p
	}
	return m
}()

// ByID возвращает товар и признак того, что он вообще существует.
// Неизвестный идентификатор — либо старый клиент, либо подделка; и в том,
// и в другом случае начислять нечего.
func ByID(id string) (Product, bool) {
	if real, ok := aliases[id]; ok {
		id = real
	}
	p, ok := byID[id]
	return p, ok
}

// All — все товары, в порядке показа на экране покупки.
func All() []Product {
	return append(append([]Product{}, CheckPacks...), GaragePacks...)
}
