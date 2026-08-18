# Магазины: что заведено руками

Данные, которые живут только в консолях и которые неоткуда достать из кода.
Отпечатки сертификатов не секрет — их извлекает из APK кто угодно, поэтому
хранить их в репозитории безопасно, а искать по консолям каждый раз — нет.

## Отпечатки сертификатов (Google Play)

| Ключ | SHA-1 | Чем подписано |
|---|---|---|
| Подписи приложения | `35:C0:E6:DF:F3:97:A1:24:3C:CE:24:46:63:EA:C2:97:B9:8C:04:D6` | то, что раздаёт Google Play |
| Загрузки | `C9:B9:9E:95:6E:3E:89:34:1A:5A:77:BB:71:41:D2:02:B8:C5:10:CE` | `key.jks`: сборки отсюда и APK на сайте |

Регистрировать в Google Cloud нужно **оба**: иначе вход через Google
сломается у одной из двух половин пользователей. Один Android-клиент
принимает один отпечаток, поэтому клиентов два.

## OAuth-клиенты (console.cloud.google.com)

1. Экран согласия: External.
2. Android-клиент №1: пакет `chigirintsevandco.prostuk`, SHA-1 подписи приложения.
3. Android-клиент №2: тот же пакет, SHA-1 ключа загрузки.
4. Web-клиент: его идентификатор передаётся приложением как `serverClientId`
   и проверяется бэкендом. Без него вход в приложении работает, а сервер
   не может убедиться, что токен выдан именно нам.

## Товары

Идентификаторы заданы в `backend/internal/billing/products.go` и закреплены
тестом. В консолях заводятся руками и **переименованию не подлежат**.

Google Play: Монетизация → Товары → Контент для однократных покупок.
App Store Connect: Monetization → In-App Purchases, тип **Consumable**.

| ID | Name (en) | Description (en) |
|---|---|---|
| `checks_5` | 5 sound checks | Five more recordings to analyse. Checks never expire and one is used per report. |
| `checks_10` | 10 sound checks | Ten more recordings to analyse. Checks never expire and one is used per report. |
| `checks_20` | 20 sound checks | Twenty more recordings to analyse. Checks never expire and one is used per report. |
| `checks_40` | 40 sound checks | Forty more recordings to analyse. Checks never expire and one is used per report. |
| `garage_1` | 1 garage slot and 5 sound checks | Room for one more car in your garage, with five sound checks included. The slot stays with your account; checks are used one per report. |
| `garage_2` | 2 garage slots and 10 sound checks | Room for two more cars in your garage, with ten sound checks included. Slots stay with your account; checks are used one per report. |
| `garage_4` | 4 garage slots and 20 sound checks | Room for four more cars in your garage, with twenty sound checks included. Slots stay with your account; checks are used one per report. |
| `garage_8` | 8 garage slots and 40 sound checks | Room for eight more cars in your garage, with forty sound checks included. Slots stay with your account; checks are used one per report. |

Русские названия и описания добавляются в той же карточке кнопкой «Переводы»:

| ID | Имя | Описание |
|---|---|---|
| `checks_5` | 5 проверок звука | Ещё пять записей на разбор. Проверки не сгорают, за один отчёт тратится одна. |
| `checks_10` | 10 проверок звука | Ещё десять записей на разбор. Проверки не сгорают, за один отчёт тратится одна. |
| `checks_20` | 20 проверок звука | Ещё двадцать записей на разбор. Проверки не сгорают, за один отчёт тратится одна. |
| `checks_40` | 40 проверок звука | Ещё сорок записей на разбор. Проверки не сгорают, за один отчёт тратится одна. |
| `garage_1` | Место в гараже и 5 проверок | Место ещё для одной машины, вместе с ним пять проверок звука. Место остаётся за аккаунтом, проверки тратятся по одной за отчёт. |
| `garage_2` | 2 места в гараже и 10 проверок | Места ещё для двух машин, вместе с ними десять проверок звука. Места остаются за аккаунтом, проверки тратятся по одной за отчёт. |
| `garage_4` | 4 места в гараже и 20 проверок | Места ещё для четырёх машин, вместе с ними двадцать проверок звука. Места остаются за аккаунтом, проверки тратятся по одной за отчёт. |
| `garage_8` | 8 мест в гараже и 40 проверок | Места ещё для восьми машин, вместе с ними сорок проверок звука. Места остаются за аккаунтом, проверки тратятся по одной за отчёт. |

Теги (необязательные, для группировки в консоли): `sound-checks` у пакетов
проверок, `garage-slots` у мест.
