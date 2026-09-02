# Магазины: что заведено руками

Данные, которые живут только в консолях и которые неоткуда достать из кода.
Отпечатки сертификатов не секрет — их извлекает из APK кто угодно, поэтому
хранить их в репозитории безопасно, а искать по консолям каждый раз — нет.

## Отпечатки сертификатов (Google Play)

| Ключ | SHA-1 | Чем подписано |
|---|---|---|
| Подписи приложения | `35:C0:E6:DF:F3:97:A1:24:3C:CE:24:46:63:EA:C2:97:B9:8C:04:D6` | то, что раздаёт Google Play |
| Загрузки | `C9:B9:9E:95:6E:3E:89:34:1A:5A:77:BB:71:41:D2:02:B8:C5:10:CE` | `key.jks`: сборки отсюда и APK на сайте |
| Раздачи из Play | `87:13:4E:EC:6E:07:C7:D0:AD:F8:A1:72:BA:B4:AE:32:81:19:CC:3D` | то, что реально стоит на телефоне после установки из Play |

Регистрировать в Google Cloud нужно **все**: иначе вход через Google
сломается у той половины пользователей, чей отпечаток пропущен. Один
Android-клиент принимает один отпечаток, поэтому клиентов столько же.

Третья строка появилась не сразу: копия из Play оказалась подписана не тем
ключом, что записан в первой строке, и вход отказывал с `[16] Account reauth
failed`. Настоящую причину видно только в системном логе телефона:

    adb logcat | grep "GetTokenResponseHandler"
    → This android application is not registered to use OAuth2.0…

Отпечаток той копии, что стоит на устройстве, берётся так:

    adb pull "$(adb shell pm path <пакет> | grep base | cut -d: -f2)" /tmp/x.apk
    $ANDROID_HOME/build-tools/36.0.0/apksigner verify --print-certs /tmp/x.apk

Сверять надо именно его, а не то, что написано в консоли: консоль показывает
три сертификата (подписи, загрузки, внутреннего обмена), и перепутать их
легко.

## Подпись iOS (Codemagic)

Сертификат распространения Apple выдаёт **на закрытый ключ**, а не вместо
него: у Apple остаётся только публичная часть. Ключ создан один раз командой
`openssl genrsa -out prostuk-ios-cert-key.pem 2048` и лежит вне репозитория,
у Игоря в домашней папке; в Codemagic он хранится как переменная
`CERTIFICATE_PRIVATE_KEY` группы `appstore_credentials` (Secure).

Без него `app-store-connect fetch-signing-files` отвечает «Cannot save Signing
Certificates without certificate private key», молча ничего не создаёт, и
сборка падает уже в Xcode — жалобой на отсутствующий Apple ID, по которой
причину не угадать.

Потерять ключ не смертельно: сертификат отзывается на developer.apple.com,
создаётся новый ключ, и всё выпускается заново. Но пока он жив, менять его
незачем — Apple разрешает всего три сертификата распространения на команду.

## Картинки для консолей

Собираются одной командой: `node store/gen-store-shots.mjs`. Исходники —
настоящие снимки экрана в `store/cards/screens/`, обрамление рисуется вектором.

| Куда | Файлы | Размер | Штук |
|---|---|---|---|
| App Store, iPhone | `store/cards/png/apple/iphone-6.9/` | 1290×2796 | 9 |
| App Store, iPad | `store/cards/png/apple/ipad-13/` | 2048×2732 | 9 |
| Play, телефон | `store/cards/png/play/phone/` | 1080×1920 | 8 |
| Play, планшет 7″ | `store/cards/png/play/tablet-7/` | 1200×1920 | 8 |
| Play, планшет 10″ | `store/cards/png/play/tablet-10/` | 1600×2560 | 8 |
| Play, Chromebook | `store/cards/png/play/chromebook/` | 2560×1440 | 8 |
| Play, баннер | `store/play/feature-1024x500.png` | 1024×500 | 1 |
| Play, значок | `store/play/icon-512.png` | 512×512 | 1 |

Значок для App Store отдельно не заливается — он берётся из сборки.

Требования, из-за которых форматов столько:

- Apple с 2024 года требует 6,9″; 6,5″ принимается, только пока нет 6,9″.
  iPad 13″ обязателен, раз приложение заявлено и для iPad.
- Google ограничивает соотношение сторон: **большая сторона не длиннее
  меньшей более чем вдвое**. Карточки Apple (1290×2796 — это 2,17) Play не
  примет, поэтому у него свои размеры. И карточек у Play не больше восьми на
  каждый вид устройства.
- Альфа-канала не должно быть нигде. Chrome отдаёт RGB, но при правке
  вручную это легко потерять.

Фон — одно полотно на весь набор: карточки, разложенные по порядку,
складываются в непрерывную ленту. **Порядок в консоли обязан совпадать с
нумерацией файлов**, иначе панорама рассыплется. Проверить склейку целиком —
`store/cards/panorama/`.

## OAuth-клиенты (console.cloud.google.com)

1. Экран согласия: External.
2. Android-клиент №1: пакет `chigirintsevandco.prostuk`, SHA-1 подписи приложения.
3. Android-клиент №2: тот же пакет, SHA-1 ключа загрузки.
3a. Android-клиент №3: тот же пакет, SHA-1 раздачи из Play.
4. Web-клиент: его идентификатор передаётся приложением как `serverClientId`
   и проверяется бэкендом. Без него вход в приложении работает, а сервер
   не может убедиться, что токен выдан именно нам.

## Товары

Идентификаторы заданы в `backend/internal/billing/products.go` и закреплены
тестом. В консолях заводятся руками и **переименованию не подлежат**.

Google Play: Монетизация → Товары → Контент для однократных покупок.
App Store Connect: Monetization → In-App Purchases, тип **Consumable**.

Проверки привязаны к месту гаража, а не к аккаунту: пакет проверок
покупается для конкретной машины, новое место приходит со своим комплектом.

Названия и описания на всех четырнадцати языках, включая английский и
русский, — ниже в разделе «Google Play: локализации товаров». Держать их
ещё и здесь значит однажды поправить одну таблицу и забыть вторую.

| ID | Что даёт |
|---|---|
| `checks_5` | 5 проверок на выбранное место гаража |
| `checks_10` | 10 проверок на выбранное место |
| `checks_20` | 20 проверок на выбранное место |
| `checks_40` | 40 проверок на выбранное место |
| `garage_1` | 1 место, на нём 5 проверок |
| `garage_2` | 2 места, на каждом 5 проверок |
| `garage_4` | 4 места, на каждом 5 проверок |
| `garage_8` | 8 мест, на каждом 5 проверок |

Теги (необязательные, для группировки в консоли): `sound-checks` у пакетов
проверок, `garage-slots` у мест.



### App Store Connect: локализации товаров

У Apple пределы жёстче, чем в Google Play: **Display Name 30 знаков,
Description 45**. Описания из таблиц выше туда не влезают — они писались под
Play, где восемьдесят. Здесь свои, короткие, на все четырнадцать языков.

Проверено: самое длинное имя 29 знаков, самое длинное описание 40.

Значок товара (поле Image, 1024×1024) — из `store/products/<id>.png`.


#### `checks_5`

| Язык | Display Name | Description |
|---|---|---|
| English (U.S.) | 5 sound checks | 5 more recordings to analyse. |
| Russian | 5 проверок звука | Ещё 5 записей на разбор. |
| German | 5 Tonprüfungen | 5 weitere Aufnahmen zur Analyse. |
| Spanish (Spain) | 5 análisis de sonido | 5 grabaciones más para analizar. |
| French | 5 analyses sonores | 5 enregistrements de plus à analyser. |
| Italian | 5 analisi del suono | 5 registrazioni in più da analizzare. |
| Portuguese (Brazil) | 5 análises de som | 5 gravações a mais para analisar. |
| Polish | 5 analiz dźwięku | Jeszcze 5 nagrań do analizy. |
| Turkish | 5 ses analizi | Analiz için 5 kayıt daha. |
| Dutch | 5 geluidschecks | 5 opnames extra om te analyseren. |
| Chinese (Simplified) | 5 次声音检测 | 再分析 5 段录音。 |
| Japanese | 音の診断5回 | 録音をあと5件分析できます。 |
| Korean | 소리 검사 5회 | 녹음 5건을 더 분석합니다. |
| Arabic | 5 فحوص صوتية | 5 تسجيلات إضافية للتحليل. |

#### `checks_10`

| Язык | Display Name | Description |
|---|---|---|
| English (U.S.) | 10 sound checks | 10 more recordings to analyse. |
| Russian | 10 проверок звука | Ещё 10 записей на разбор. |
| German | 10 Tonprüfungen | 10 weitere Aufnahmen zur Analyse. |
| Spanish (Spain) | 10 análisis de sonido | 10 grabaciones más para analizar. |
| French | 10 analyses sonores | 10 enregistrements de plus à analyser. |
| Italian | 10 analisi del suono | 10 registrazioni in più da analizzare. |
| Portuguese (Brazil) | 10 análises de som | 10 gravações a mais para analisar. |
| Polish | 10 analiz dźwięku | Jeszcze 10 nagrań do analizy. |
| Turkish | 10 ses analizi | Analiz için 10 kayıt daha. |
| Dutch | 10 geluidschecks | 10 opnames extra om te analyseren. |
| Chinese (Simplified) | 10 次声音检测 | 再分析 10 段录音。 |
| Japanese | 音の診断10回 | 録音をあと10件分析できます。 |
| Korean | 소리 검사 10회 | 녹음 10건을 더 분석합니다. |
| Arabic | 10 فحوص صوتية | 10 تسجيلات إضافية للتحليل. |

#### `checks_20`

| Язык | Display Name | Description |
|---|---|---|
| English (U.S.) | 20 sound checks | 20 more recordings to analyse. |
| Russian | 20 проверок звука | Ещё 20 записей на разбор. |
| German | 20 Tonprüfungen | 20 weitere Aufnahmen zur Analyse. |
| Spanish (Spain) | 20 análisis de sonido | 20 grabaciones más para analizar. |
| French | 20 analyses sonores | 20 enregistrements de plus à analyser. |
| Italian | 20 analisi del suono | 20 registrazioni in più da analizzare. |
| Portuguese (Brazil) | 20 análises de som | 20 gravações a mais para analisar. |
| Polish | 20 analiz dźwięku | Jeszcze 20 nagrań do analizy. |
| Turkish | 20 ses analizi | Analiz için 20 kayıt daha. |
| Dutch | 20 geluidschecks | 20 opnames extra om te analyseren. |
| Chinese (Simplified) | 20 次声音检测 | 再分析 20 段录音。 |
| Japanese | 音の診断20回 | 録音をあと20件分析できます。 |
| Korean | 소리 검사 20회 | 녹음 20건을 더 분석합니다. |
| Arabic | 20 فحصًا صوتيًا | 20 تسجيلًا إضافيًا للتحليل. |

#### `checks_40`

| Язык | Display Name | Description |
|---|---|---|
| English (U.S.) | 40 sound checks | 40 more recordings to analyse. |
| Russian | 40 проверок звука | Ещё 40 записей на разбор. |
| German | 40 Tonprüfungen | 40 weitere Aufnahmen zur Analyse. |
| Spanish (Spain) | 40 análisis de sonido | 40 grabaciones más para analizar. |
| French | 40 analyses sonores | 40 enregistrements de plus à analyser. |
| Italian | 40 analisi del suono | 40 registrazioni in più da analizzare. |
| Portuguese (Brazil) | 40 análises de som | 40 gravações a mais para analisar. |
| Polish | 40 analiz dźwięku | Jeszcze 40 nagrań do analizy. |
| Turkish | 40 ses analizi | Analiz için 40 kayıt daha. |
| Dutch | 40 geluidschecks | 40 opnames extra om te analyseren. |
| Chinese (Simplified) | 40 次声音检测 | 再分析 40 段录音。 |
| Japanese | 音の診断40回 | 録音をあと40件分析できます。 |
| Korean | 소리 검사 40회 | 녹음 40건을 더 분석합니다. |
| Arabic | 40 فحصًا صوتيًا | 40 تسجيلًا إضافيًا للتحليل. |

#### `garage_1`

| Язык | Display Name | Description |
|---|---|---|
| English (U.S.) | 1 garage slot, 5 checks | Room for 1 more car, 5 checks. |
| Russian | Место в гараже, 5 проверок | Место ещё для одной машины. |
| German | 1 Garagenplatz, 5 Prüfungen | Platz für 1 weiteres Auto, 5 Prüfungen. |
| Spanish (Spain) | 1 plaza de garaje, 5 análisis | Sitio para 1 coche más, 5 análisis. |
| French | 1 place de garage, 5 analyses | Place pour 1 voiture de plus. |
| Italian | 1 posto garage, 5 analisi | Spazio per 1 auto in più, 5 analisi. |
| Portuguese (Brazil) | 1 vaga na garagem, 5 análises | Espaço para mais 1 carro. |
| Polish | 1 miejsce w garażu, 5 analiz | Miejsce na 1 kolejne auto. |
| Turkish | 1 garaj yeri, 5 analiz | 1 araç daha için yer, 5 analiz. |
| Dutch | 1 garageplek, 5 checks | Plek voor 1 auto extra, 5 checks. |
| Chinese (Simplified) | 1 个车位，5 次检测 | 再停 1 台车，含 5 次检测。 |
| Japanese | ガレージ1台分・診断5回 | あと1台分の枠と診断5回。 |
| Korean | 차고 1칸, 검사 5회 | 차 1대를 더 넣을 수 있습니다. |
| Arabic | مكان في المرآب و5 فحوص | مكان لسيارة إضافية واحدة. |

#### `garage_2`

| Язык | Display Name | Description |
|---|---|---|
| English (U.S.) | 2 garage slots, 10 checks | Room for 2 more cars, 10 checks. |
| Russian | 2 места в гараже, 10 проверок | Места ещё для двух машин. |
| German | 2 Garagenplätze, 10 Prüfungen | Platz für 2 weitere Autos, 10 Prüfungen. |
| Spanish (Spain) | 2 plazas garaje, 10 análisis | Sitio para 2 coches más, 10 análisis. |
| French | 2 places garage, 10 analyses | Place pour 2 voitures de plus. |
| Italian | 2 posti garage, 10 analisi | Spazio per 2 auto in più, 10 analisi. |
| Portuguese (Brazil) | 2 vagas garagem, 10 análises | Espaço para mais 2 carros. |
| Polish | 2 miejsca w garażu, 10 analiz | Miejsce na 2 kolejne auta. |
| Turkish | 2 garaj yeri, 10 analiz | 2 araç daha için yer, 10 analiz. |
| Dutch | 2 garageplekken, 10 checks | Plek voor 2 auto's extra, 10 checks. |
| Chinese (Simplified) | 2 个车位，10 次检测 | 再停 2 台车，含 10 次检测。 |
| Japanese | ガレージ2台分・診断10回 | あと2台分の枠と診断10回。 |
| Korean | 차고 2칸, 검사 10회 | 차 2대를 더 넣을 수 있습니다. |
| Arabic | مكانان في المرآب و10 فحوص | مكان لسيارتين إضافيتين. |

#### `garage_4`

| Язык | Display Name | Description |
|---|---|---|
| English (U.S.) | 4 garage slots, 20 checks | Room for 4 more cars, 20 checks. |
| Russian | 4 места в гараже, 20 проверок | Места ещё для четырёх машин. |
| German | 4 Garagenplätze, 20 Prüfungen | Platz für 4 weitere Autos, 20 Prüfungen. |
| Spanish (Spain) | 4 plazas garaje, 20 análisis | Sitio para 4 coches más, 20 análisis. |
| French | 4 places garage, 20 analyses | Place pour 4 voitures de plus. |
| Italian | 4 posti garage, 20 analisi | Spazio per 4 auto in più, 20 analisi. |
| Portuguese (Brazil) | 4 vagas garagem, 20 análises | Espaço para mais 4 carros. |
| Polish | 4 miejsca w garażu, 20 analiz | Miejsce na 4 kolejne auta. |
| Turkish | 4 garaj yeri, 20 analiz | 4 araç daha için yer, 20 analiz. |
| Dutch | 4 garageplekken, 20 checks | Plek voor 4 auto's extra, 20 checks. |
| Chinese (Simplified) | 4 个车位，20 次检测 | 再停 4 台车，含 20 次检测。 |
| Japanese | ガレージ4台分・診断20回 | あと4台分の枠と診断20回。 |
| Korean | 차고 4칸, 검사 20회 | 차 4대를 더 넣을 수 있습니다. |
| Arabic | 4 أماكن في المرآب و20 فحصًا | مكان لأربع سيارات إضافية. |

#### `garage_8`

| Язык | Display Name | Description |
|---|---|---|
| English (U.S.) | 8 garage slots, 40 checks | Room for 8 more cars, 40 checks. |
| Russian | 8 мест в гараже, 40 проверок | Места ещё для восьми машин. |
| German | 8 Garagenplätze, 40 Prüfungen | Platz für 8 weitere Autos, 40 Prüfungen. |
| Spanish (Spain) | 8 plazas garaje, 40 análisis | Sitio para 8 coches más, 40 análisis. |
| French | 8 places garage, 40 analyses | Place pour 8 voitures de plus. |
| Italian | 8 posti garage, 40 analisi | Spazio per 8 auto in più, 40 analisi. |
| Portuguese (Brazil) | 8 vagas garagem, 40 análises | Espaço para mais 8 carros. |
| Polish | 8 miejsc w garażu, 40 analiz | Miejsce na 8 kolejnych aut. |
| Turkish | 8 garaj yeri, 40 analiz | 8 araç daha için yer, 40 analiz. |
| Dutch | 8 garageplekken, 40 checks | Plek voor 8 auto's extra, 40 checks. |
| Chinese (Simplified) | 8 个车位，40 次检测 | 再停 8 台车，含 40 次检测。 |
| Japanese | ガレージ8台分・診断40回 | あと8台分の枠と診断40回。 |
| Korean | 차고 8칸, 검사 40회 | 차 8대를 더 넣을 수 있습니다. |
| Arabic | 8 أماكن في المرآب و40 فحصًا | مكان لثماني سيارات إضافية. |

### Google Play: локализации товаров

Пределы Play шире эпловских — **название 55 знаков, описание 200**, — и это
место лучше потратить на то, что покупателю нужно знать до оплаты:

* сколько проверок он получит;
* что они лягут на **выбранную машину**, а не на аккаунт целиком
  (см. `Grant` в `backend/internal/billing/products.go`);
* что срока действия у них нет.

Формулировок вроде «не сгорают» здесь нет: это жаргон, из которого не
понять, идёт речь о сроке, о лимите или о чём-то ещё. Сказано прямо —
срока действия нет.

Проверено скриптом: самое длинное название 35 знаков, описание 164.

Готовая страница с копированием по клику — `store/play-products.html`.

Где вводить: Монетизация → Товары → Контент для однократных покупок →
товар → **Управление переводами**. Список языков берётся из карточки
приложения: если языка нет там, в товарах он не появится.


#### `checks_5` — 5 проверок звука

| Код | Язык | Название | Описание |
|---|---|---|---|
| `en-US` | English (United States) | 5 sound checks | 5 more checks for the car you choose. They have no expiry date, and one check is used per report. |
| `ru-RU` | Russian | 5 проверок звука | Ещё 5 проверок для выбранной машины. Срока действия у них нет, на один отчёт уходит одна. |
| `de-DE` | German (Germany) | 5 Tonprüfungen | 5 weitere Prüfungen für das gewählte Auto. Sie haben kein Ablaufdatum, pro Bericht wird eine verbraucht. |
| `es-ES` | Spanish (Spain) | 5 análisis de sonido | 5 análisis más para el coche que elijas. No caducan y se gasta uno por informe. |
| `fr-FR` | French (France) | 5 analyses sonores | 5 analyses de plus pour la voiture de votre choix. Elles n'ont pas de date limite et une est utilisée par rapport. |
| `it-IT` | Italian | 5 analisi del suono | 5 analisi in più per l'auto che scegli. Non hanno scadenza e se ne usa una per ogni report. |
| `pt-BR` | Portuguese (Brazil) | 5 análises de som | 5 análises a mais para o carro que você escolher. Não têm prazo de validade e uma é usada por relatório. |
| `pl-PL` | Polish | 5 analiz dźwięku | Jeszcze 5 analiz dla wybranego auta. Nie mają terminu ważności, a na jeden raport zużywa się jedną. |
| `tr-TR` | Turkish | 5 ses analizi | Seçtiğiniz araç için 5 analiz daha. Son kullanma tarihi yoktur, her rapor için bir tanesi kullanılır. |
| `nl-NL` | Dutch (Netherlands) | 5 geluidschecks | 5 checks extra voor de auto die je kiest. Ze verlopen niet en er gaat er één per rapport af. |
| `zh-CN` | Chinese (Simplified) | 5 次声音检测 | 为所选车辆增加 5 次检测。检测没有有效期限制，每份报告消耗一次。 |
| `ja-JP` | Japanese | 音の診断5回 | 選んだ車に診断5回を追加します。有効期限はなく、レポート1件につき1回消費します。 |
| `ko-KR` | Korean | 소리 검사 5회 | 선택한 차량에 검사 5회를 추가합니다. 유효기간이 없으며 보고서 1건당 1회 사용됩니다. |
| `ar` | Arabic | 5 فحوص صوتية | 5 فحوص إضافية للسيارة التي تختارها. الفحوص لا تنتهي صلاحيتها، ويُستهلك فحص واحد لكل تقرير. |


#### `checks_10_2` — 10 проверок звука — в Play заведён как `checks_10_2`

| Код | Язык | Название | Описание |
|---|---|---|---|
| `en-US` | English (United States) | 10 sound checks | 10 more checks for the car you choose. They have no expiry date, and one check is used per report. |
| `ru-RU` | Russian | 10 проверок звука | Ещё 10 проверок для выбранной машины. Срока действия у них нет, на один отчёт уходит одна. |
| `de-DE` | German (Germany) | 10 Tonprüfungen | 10 weitere Prüfungen für das gewählte Auto. Sie haben kein Ablaufdatum, pro Bericht wird eine verbraucht. |
| `es-ES` | Spanish (Spain) | 10 análisis de sonido | 10 análisis más para el coche que elijas. No caducan y se gasta uno por informe. |
| `fr-FR` | French (France) | 10 analyses sonores | 10 analyses de plus pour la voiture de votre choix. Elles n'ont pas de date limite et une est utilisée par rapport. |
| `it-IT` | Italian | 10 analisi del suono | 10 analisi in più per l'auto che scegli. Non hanno scadenza e se ne usa una per ogni report. |
| `pt-BR` | Portuguese (Brazil) | 10 análises de som | 10 análises a mais para o carro que você escolher. Não têm prazo de validade e uma é usada por relatório. |
| `pl-PL` | Polish | 10 analiz dźwięku | Jeszcze 10 analiz dla wybranego auta. Nie mają terminu ważności, a na jeden raport zużywa się jedną. |
| `tr-TR` | Turkish | 10 ses analizi | Seçtiğiniz araç için 10 analiz daha. Son kullanma tarihi yoktur, her rapor için bir tanesi kullanılır. |
| `nl-NL` | Dutch (Netherlands) | 10 geluidschecks | 10 checks extra voor de auto die je kiest. Ze verlopen niet en er gaat er één per rapport af. |
| `zh-CN` | Chinese (Simplified) | 10 次声音检测 | 为所选车辆增加 10 次检测。检测没有有效期限制，每份报告消耗一次。 |
| `ja-JP` | Japanese | 音の診断10回 | 選んだ車に診断10回を追加します。有効期限はなく、レポート1件につき1回消費します。 |
| `ko-KR` | Korean | 소리 검사 10회 | 선택한 차량에 검사 10회를 추가합니다. 유효기간이 없으며 보고서 1건당 1회 사용됩니다. |
| `ar` | Arabic | 10 فحوص صوتية | 10 فحوص إضافية للسيارة التي تختارها. الفحوص لا تنتهي صلاحيتها، ويُستهلك فحص واحد لكل تقرير. |


#### `checks_20` — 20 проверок звука

| Код | Язык | Название | Описание |
|---|---|---|---|
| `en-US` | English (United States) | 20 sound checks | 20 more checks for the car you choose. They have no expiry date, and one check is used per report. |
| `ru-RU` | Russian | 20 проверок звука | Ещё 20 проверок для выбранной машины. Срока действия у них нет, на один отчёт уходит одна. |
| `de-DE` | German (Germany) | 20 Tonprüfungen | 20 weitere Prüfungen für das gewählte Auto. Sie haben kein Ablaufdatum, pro Bericht wird eine verbraucht. |
| `es-ES` | Spanish (Spain) | 20 análisis de sonido | 20 análisis más para el coche que elijas. No caducan y se gasta uno por informe. |
| `fr-FR` | French (France) | 20 analyses sonores | 20 analyses de plus pour la voiture de votre choix. Elles n'ont pas de date limite et une est utilisée par rapport. |
| `it-IT` | Italian | 20 analisi del suono | 20 analisi in più per l'auto che scegli. Non hanno scadenza e se ne usa una per ogni report. |
| `pt-BR` | Portuguese (Brazil) | 20 análises de som | 20 análises a mais para o carro que você escolher. Não têm prazo de validade e uma é usada por relatório. |
| `pl-PL` | Polish | 20 analiz dźwięku | Jeszcze 20 analiz dla wybranego auta. Nie mają terminu ważności, a na jeden raport zużywa się jedną. |
| `tr-TR` | Turkish | 20 ses analizi | Seçtiğiniz araç için 20 analiz daha. Son kullanma tarihi yoktur, her rapor için bir tanesi kullanılır. |
| `nl-NL` | Dutch (Netherlands) | 20 geluidschecks | 20 checks extra voor de auto die je kiest. Ze verlopen niet en er gaat er één per rapport af. |
| `zh-CN` | Chinese (Simplified) | 20 次声音检测 | 为所选车辆增加 20 次检测。检测没有有效期限制，每份报告消耗一次。 |
| `ja-JP` | Japanese | 音の診断20回 | 選んだ車に診断20回を追加します。有効期限はなく、レポート1件につき1回消費します。 |
| `ko-KR` | Korean | 소리 검사 20회 | 선택한 차량에 검사 20회를 추가합니다. 유효기간이 없으며 보고서 1건당 1회 사용됩니다. |
| `ar` | Arabic | 20 فحصًا صوتيًا | 20 فحصًا إضافيًا للسيارة التي تختارها. الفحوص لا تنتهي صلاحيتها، ويُستهلك فحص واحد لكل تقرير. |


#### `checks_40` — 40 проверок звука

| Код | Язык | Название | Описание |
|---|---|---|---|
| `en-US` | English (United States) | 40 sound checks | 40 more checks for the car you choose. They have no expiry date, and one check is used per report. |
| `ru-RU` | Russian | 40 проверок звука | Ещё 40 проверок для выбранной машины. Срока действия у них нет, на один отчёт уходит одна. |
| `de-DE` | German (Germany) | 40 Tonprüfungen | 40 weitere Prüfungen für das gewählte Auto. Sie haben kein Ablaufdatum, pro Bericht wird eine verbraucht. |
| `es-ES` | Spanish (Spain) | 40 análisis de sonido | 40 análisis más para el coche que elijas. No caducan y se gasta uno por informe. |
| `fr-FR` | French (France) | 40 analyses sonores | 40 analyses de plus pour la voiture de votre choix. Elles n'ont pas de date limite et une est utilisée par rapport. |
| `it-IT` | Italian | 40 analisi del suono | 40 analisi in più per l'auto che scegli. Non hanno scadenza e se ne usa una per ogni report. |
| `pt-BR` | Portuguese (Brazil) | 40 análises de som | 40 análises a mais para o carro que você escolher. Não têm prazo de validade e uma é usada por relatório. |
| `pl-PL` | Polish | 40 analiz dźwięku | Jeszcze 40 analiz dla wybranego auta. Nie mają terminu ważności, a na jeden raport zużywa się jedną. |
| `tr-TR` | Turkish | 40 ses analizi | Seçtiğiniz araç için 40 analiz daha. Son kullanma tarihi yoktur, her rapor için bir tanesi kullanılır. |
| `nl-NL` | Dutch (Netherlands) | 40 geluidschecks | 40 checks extra voor de auto die je kiest. Ze verlopen niet en er gaat er één per rapport af. |
| `zh-CN` | Chinese (Simplified) | 40 次声音检测 | 为所选车辆增加 40 次检测。检测没有有效期限制，每份报告消耗一次。 |
| `ja-JP` | Japanese | 音の診断40回 | 選んだ車に診断40回を追加します。有効期限はなく、レポート1件につき1回消費します。 |
| `ko-KR` | Korean | 소리 검사 40회 | 선택한 차량에 검사 40회를 추가합니다. 유효기간이 없으며 보고서 1건당 1회 사용됩니다. |
| `ar` | Arabic | 40 فحصًا صوتيًا | 40 فحصًا إضافيًا للسيارة التي تختارها. الفحوص لا تنتهي صلاحيتها، ويُستهلك فحص واحد لكل تقرير. |


#### `garage_1` — 1 место в гараже

| Код | Язык | Название | Описание |
|---|---|---|---|
| `en-US` | English (United States) | 1 garage slot and 5 sound checks | Room for one more car in your garage, with 5 checks included. The slot stays on your account and the checks have no expiry date. |
| `ru-RU` | Russian | Место в гараже и 5 проверок | Ещё одна машина в гараже и 5 проверок на неё. Место остаётся за аккаунтом, срока действия у проверок нет. |
| `de-DE` | German (Germany) | 1 Garagenplatz und 5 Tonprüfungen | Platz für ein weiteres Auto in der Garage, dazu 5 Prüfungen. Der Platz bleibt dem Konto erhalten, die Prüfungen haben kein Ablaufdatum. |
| `es-ES` | Spanish (Spain) | 1 plaza de garaje y 5 análisis | Sitio para un coche más en tu garaje, con 5 análisis incluidos. La plaza queda en tu cuenta y los análisis no caducan. |
| `fr-FR` | French (France) | 1 place de garage et 5 analyses | De la place pour une voiture de plus dans votre garage, avec 5 analyses incluses. La place reste sur votre compte et les analyses n'ont pas de date limite. |
| `it-IT` | Italian | 1 posto in garage e 5 analisi | Spazio per un'auto in più nel tuo garage, con 5 analisi incluse. Il posto resta sul tuo account e le analisi non hanno scadenza. |
| `pt-BR` | Portuguese (Brazil) | 1 vaga na garagem e 5 análises | Espaço para mais um carro na sua garagem, com 5 análises incluídas. A vaga fica na sua conta e as análises não têm prazo de validade. |
| `pl-PL` | Polish | 1 miejsce w garażu i 5 analiz | Miejsce na jedno kolejne auto w garażu i 5 analiz dźwięku. Miejsce zostaje na koncie, a analizy nie mają terminu ważności. |
| `tr-TR` | Turkish | 1 garaj yeri ve 5 ses analizi | Garajınızda 1 araç daha için yer ve 5 ses analizi. Yer hesabınızda kalır, analizlerin son kullanma tarihi yoktur. |
| `nl-NL` | Dutch (Netherlands) | 1 garageplek en 5 geluidschecks | Plek voor nog een auto in je garage, inclusief 5 checks. De plek blijft aan je account gekoppeld en de checks verlopen niet. |
| `zh-CN` | Chinese (Simplified) | 1 个车位和 5 次声音检测 | 车库中可再停放 1 台车，并附带 5 次检测。车位长期保留在账号中，检测没有有效期限制。 |
| `ja-JP` | Japanese | ガレージ1台分と音の診断5回 | ガレージにもう1台分の枠が増え、診断5回が付きます。枠はアカウントに残り、診断に有効期限はありません。 |
| `ko-KR` | Korean | 차고 1칸과 소리 검사 5회 | 차고에 차 1대를 더 넣을 수 있고 검사 5회가 함께 제공됩니다. 칸은 계정에 유지되고 검사에는 유효기간이 없습니다. |
| `ar` | Arabic | مكان في المرآب و5 فحوص صوتية | مكان لسيارة إضافية واحدة في مرآبك، مع 5 فحوص صوتية. المكان يبقى في حسابك، والفحوص لا تنتهي صلاحيتها. |


#### `garage_2` — 2 места в гараже

| Код | Язык | Название | Описание |
|---|---|---|---|
| `en-US` | English (United States) | 2 garage slots and 10 sound checks | Room for 2 more cars in your garage, with 10 checks included. The slots stay on your account and the checks have no expiry date. |
| `ru-RU` | Russian | 2 места в гараже и 10 проверок | Ещё две машины в гараже и 10 проверок на них. Места остаются за аккаунтом, срока действия у проверок нет. |
| `de-DE` | German (Germany) | 2 Garagenplätze und 10 Tonprüfungen | Platz für zwei weitere Autos in der Garage, dazu 10 Prüfungen. Die Plätze bleiben dem Konto erhalten, die Prüfungen haben kein Ablaufdatum. |
| `es-ES` | Spanish (Spain) | 2 plazas de garaje y 10 análisis | Sitio para dos coches más en tu garaje, con 10 análisis incluidos. Las plazas quedan en tu cuenta y los análisis no caducan. |
| `fr-FR` | French (France) | 2 places de garage et 10 analyses | De la place pour deux voitures de plus dans votre garage, avec 10 analyses incluses. Les places restent sur votre compte et les analyses n'ont pas de date limite. |
| `it-IT` | Italian | 2 posti in garage e 10 analisi | Spazio per due auto in più nel tuo garage, con 10 analisi incluse. I posti restano sul tuo account e le analisi non hanno scadenza. |
| `pt-BR` | Portuguese (Brazil) | 2 vagas na garagem e 10 análises | Espaço para mais dois carros na sua garagem, com 10 análises incluídas. As vagas ficam na sua conta e as análises não têm prazo de validade. |
| `pl-PL` | Polish | 2 miejsca w garażu i 10 analiz | Miejsce na dwa kolejne auta w garażu i 10 analiz dźwięku. Miejsca zostają na koncie, a analizy nie mają terminu ważności. |
| `tr-TR` | Turkish | 2 garaj yeri ve 10 ses analizi | Garajınızda 2 araç daha için yer ve 10 ses analizi. Yerler hesabınızda kalır, analizlerin son kullanma tarihi yoktur. |
| `nl-NL` | Dutch (Netherlands) | 2 garageplekken en 10 geluidschecks | Plek voor twee auto’s extra in je garage, inclusief 10 checks. De plekken blijven aan je account gekoppeld en de checks verlopen niet. |
| `zh-CN` | Chinese (Simplified) | 2 个车位和 10 次声音检测 | 车库中可再停放 2 台车，并附带 10 次检测。车位长期保留在账号中，检测没有有效期限制。 |
| `ja-JP` | Japanese | ガレージ2台分と音の診断10回 | ガレージにもう2台分の枠が増え、診断10回が付きます。枠はアカウントに残り、診断に有効期限はありません。 |
| `ko-KR` | Korean | 차고 2칸과 소리 검사 10회 | 차고에 차 2대를 더 넣을 수 있고 검사 10회가 함께 제공됩니다. 칸은 계정에 유지되고 검사에는 유효기간이 없습니다. |
| `ar` | Arabic | مكانان في المرآب و10 فحوص صوتية | مكان لسيارتين إضافيتين في مرآبك، مع 10 فحوص صوتية. الأماكن تبقى في حسابك، والفحوص لا تنتهي صلاحيتها. |


#### `garage_4` — 4 места в гараже

| Код | Язык | Название | Описание |
|---|---|---|---|
| `en-US` | English (United States) | 4 garage slots and 20 sound checks | Room for 4 more cars in your garage, with 20 checks included. The slots stay on your account and the checks have no expiry date. |
| `ru-RU` | Russian | 4 места в гараже и 20 проверок | Ещё четыре машины в гараже и 20 проверок на них. Места остаются за аккаунтом, срока действия у проверок нет. |
| `de-DE` | German (Germany) | 4 Garagenplätze und 20 Tonprüfungen | Platz für vier weitere Autos in der Garage, dazu 20 Prüfungen. Die Plätze bleiben dem Konto erhalten, die Prüfungen haben kein Ablaufdatum. |
| `es-ES` | Spanish (Spain) | 4 plazas de garaje y 20 análisis | Sitio para cuatro coches más en tu garaje, con 20 análisis incluidos. Las plazas quedan en tu cuenta y los análisis no caducan. |
| `fr-FR` | French (France) | 4 places de garage et 20 analyses | De la place pour quatre voitures de plus dans votre garage, avec 20 analyses incluses. Les places restent sur votre compte et les analyses n'ont pas de date limite. |
| `it-IT` | Italian | 4 posti in garage e 20 analisi | Spazio per quattro auto in più nel tuo garage, con 20 analisi incluse. I posti restano sul tuo account e le analisi non hanno scadenza. |
| `pt-BR` | Portuguese (Brazil) | 4 vagas na garagem e 20 análises | Espaço para mais quatro carros na sua garagem, com 20 análises incluídas. As vagas ficam na sua conta e as análises não têm prazo de validade. |
| `pl-PL` | Polish | 4 miejsca w garażu i 20 analiz | Miejsce na cztery kolejne auta w garażu i 20 analiz dźwięku. Miejsca zostają na koncie, a analizy nie mają terminu ważności. |
| `tr-TR` | Turkish | 4 garaj yeri ve 20 ses analizi | Garajınızda 4 araç daha için yer ve 20 ses analizi. Yerler hesabınızda kalır, analizlerin son kullanma tarihi yoktur. |
| `nl-NL` | Dutch (Netherlands) | 4 garageplekken en 20 geluidschecks | Plek voor vier auto’s extra in je garage, inclusief 20 checks. De plekken blijven aan je account gekoppeld en de checks verlopen niet. |
| `zh-CN` | Chinese (Simplified) | 4 个车位和 20 次声音检测 | 车库中可再停放 4 台车，并附带 20 次检测。车位长期保留在账号中，检测没有有效期限制。 |
| `ja-JP` | Japanese | ガレージ4台分と音の診断20回 | ガレージにもう4台分の枠が増え、診断20回が付きます。枠はアカウントに残り、診断に有効期限はありません。 |
| `ko-KR` | Korean | 차고 4칸과 소리 검사 20회 | 차고에 차 4대를 더 넣을 수 있고 검사 20회가 함께 제공됩니다. 칸은 계정에 유지되고 검사에는 유효기간이 없습니다. |
| `ar` | Arabic | 4 أماكن في المرآب و20 فحصًا صوتيًا | مكان لأربع سيارات إضافية في مرآبك، مع 20 فحصًا صوتيًا. الأماكن تبقى في حسابك، والفحوص لا تنتهي صلاحيتها. |


#### `garage_8` — 8 мест в гараже

| Код | Язык | Название | Описание |
|---|---|---|---|
| `en-US` | English (United States) | 8 garage slots and 40 sound checks | Room for 8 more cars in your garage, with 40 checks included. The slots stay on your account and the checks have no expiry date. |
| `ru-RU` | Russian | 8 мест в гараже и 40 проверок | Ещё восемь машин в гараже и 40 проверок на них. Места остаются за аккаунтом, срока действия у проверок нет. |
| `de-DE` | German (Germany) | 8 Garagenplätze und 40 Tonprüfungen | Platz für acht weitere Autos in der Garage, dazu 40 Prüfungen. Die Plätze bleiben dem Konto erhalten, die Prüfungen haben kein Ablaufdatum. |
| `es-ES` | Spanish (Spain) | 8 plazas de garaje y 40 análisis | Sitio para ocho coches más en tu garaje, con 40 análisis incluidos. Las plazas quedan en tu cuenta y los análisis no caducan. |
| `fr-FR` | French (France) | 8 places de garage et 40 analyses | De la place pour huit voitures de plus dans votre garage, avec 40 analyses incluses. Les places restent sur votre compte et les analyses n'ont pas de date limite. |
| `it-IT` | Italian | 8 posti in garage e 40 analisi | Spazio per otto auto in più nel tuo garage, con 40 analisi incluse. I posti restano sul tuo account e le analisi non hanno scadenza. |
| `pt-BR` | Portuguese (Brazil) | 8 vagas na garagem e 40 análises | Espaço para mais oito carros na sua garagem, com 40 análises incluídas. As vagas ficam na sua conta e as análises não têm prazo de validade. |
| `pl-PL` | Polish | 8 miejsc w garażu i 40 analiz | Miejsce na osiem kolejnych aut w garażu i 40 analiz dźwięku. Miejsca zostają na koncie, a analizy nie mają terminu ważności. |
| `tr-TR` | Turkish | 8 garaj yeri ve 40 ses analizi | Garajınızda 8 araç daha için yer ve 40 ses analizi. Yerler hesabınızda kalır, analizlerin son kullanma tarihi yoktur. |
| `nl-NL` | Dutch (Netherlands) | 8 garageplekken en 40 geluidschecks | Plek voor acht auto’s extra in je garage, inclusief 40 checks. De plekken blijven aan je account gekoppeld en de checks verlopen niet. |
| `zh-CN` | Chinese (Simplified) | 8 个车位和 40 次声音检测 | 车库中可再停放 8 台车，并附带 40 次检测。车位长期保留在账号中，检测没有有效期限制。 |
| `ja-JP` | Japanese | ガレージ8台分と音の診断40回 | ガレージにもう8台分の枠が増え、診断40回が付きます。枠はアカウントに残り、診断に有効期限はありません。 |
| `ko-KR` | Korean | 차고 8칸과 소리 검사 40회 | 차고에 차 8대를 더 넣을 수 있고 검사 40회가 함께 제공됩니다. 칸은 계정에 유지되고 검사에는 유효기간이 없습니다. |
| `ar` | Arabic | 8 أماكن في المرآب و40 فحصًا صوتيًا | مكان لثماني سيارات إضافية في مرآبك، مع 40 فحصًا صوتيًا. الأماكن تبقى في حسابك، والفحوص لا تنتهي صلاحيتها. |


### Опечатка в идентификаторе

Пакет на десять проверок заведён в Google Play как `checks_10_2`.
Переименовать товар нельзя, поэтому сервер знает оба имени —
см. `aliases` в `backend/internal/billing/products.go`.

Если `checks_10` окажется свободен, лучше завести его заново, отключить
`checks_10_2` и убрать алиас: два имени у одного товара путают при разборе
финансовых отчётов. В App Store Connect заводите сразу `checks_10`.

## Цены

Отправная точка — 500 ₸ за пять проверок в App Store, то есть 100 ₸ за
проверку. Дальше цена за проверку падает с размером пакета: без этого
большой пакет незачем брать. Место в гараже стоит ровно как два равных
пакета проверок — правило простое и не разъезжается при правке.

В Google Play всё примерно на пятую часть дешевле. Причина не в комиссии
(она одинаковая, 15% до миллиона долларов в год), а в аудитории: по данным
Search Console заметная часть спроса приходит из Египта, Бразилии, Алжира,
Турции, Индонезии, а на Android этот перекос сильнее, чем на iPhone.
Разницу мы платим из своей выручки — с каждой продажи на Android приходит
на пятую часть меньше.

Разные цены в разных магазинах правилами не запрещены: Apple ограничивает
только рассказ о сторонней оплате внутри приложения, а не цену в чужом
магазине.

### Казахстан и рынки с автопересчётом

| Товар | App Store | Google Play | За проверку, A / P |
|---|---|---|---|
| `checks_5` | 500 ₸ | 400 ₸ | 100 / 80 ₸ |
| `checks_10` | 900 ₸ | 700 ₸ | 90 / 70 ₸ |
| `checks_20` | 1 600 ₸ | 1 300 ₸ | 80 / 65 ₸ |
| `checks_40` | 2 800 ₸ | 2 200 ₸ | 70 / 55 ₸ |
| `garage_1` | 1 000 ₸ | 800 ₸ | — |
| `garage_2` | 1 800 ₸ | 1 400 ₸ | — |
| `garage_4` | 3 200 ₸ | 2 600 ₸ | — |
| `garage_8` | 5 600 ₸ | 4 400 ₸ | — |

### Богатые рынки — руками

Автопересчёт применяет только курс валют, а не покупательную способность.
Из 500 ₸ в США получится около доллара — это в разы дешевле того, что там
платят за подобное. Приложение переведено на 14 языков, и занижать цену на
половине рынков нет смысла.

| Товар | App Store | Google Play | Разница |
|---|---|---|---|
| `checks_5` | 2.99 | 2.49 | −17% |
| `checks_10` | 4.99 | 3.99 | −20% |
| `checks_20` | 8.99 | 6.99 | −22% |
| `checks_40` | 14.99 | 11.99 | −20% |
| `garage_1` | 5.99 | 4.99 | −17% |
| `garage_2` | 9.99 | 7.99 | −20% |
| `garage_4` | 17.99 | 13.99 | −22% |
| `garage_8` | 29.99 | 23.99 | −20% |

Проверено: в обеих колонках гараж стоит ровно вдвое дороже равного пакета
проверок. Правку цен начинайте с пакета, потом умножайте на два, иначе
лестница скидок поедет.

Пакеты — расходуемые товары, поэтому смена цены никого не задевает задним
числом: каждая покупка проходит по цене на момент нажатия.

## Проверка покупок

Сервер обязан спросить у магазина, была ли покупка. Приложение присылает чек,
но приложение может быть подменено, и «я купил сорок проверок» без проверки —
это просто строка.

### Google Play (нужно для Android)

1. **Play Console → Настройки → Доступ к API.** Связать с проектом Google
   Cloud — подойдёт тот же, где заведены OAuth-клиенты.
2. В Google Cloud включить **Google Play Android Developer API**
   (APIs & Services → Library → найти по названию → Enable).
3. Google Cloud → **IAM & Admin → Service Accounts → Create service account.**
   Имя любое, например `prostuk-billing`. Роли на уровне Cloud не нужны.
4. У созданного аккаунта: **Keys → Add key → Create new key → JSON.**
   Файл скачается один раз, второй раз его не выдадут.
5. Вернуться в **Play Console → Доступ к API**, найти этот сервисный аккаунт
   и выдать доступ. Достаточно двух прав:
   «Просмотр финансовых данных» и «Управление заказами и подписками» —
   первое читает покупку, второе подтверждает её получение.
6. Скачанный JSON положить в `backend/play-service-account.json`.
   Файл в `.gitignore`, в публичный репозиторий не уедет.

Подтверждать получение покупки обязательно: неподтверждённую Google
возвращает покупателю автоматически через три дня.

### App Store (понадобится для iOS)

Для проверки чека StoreKit 2 ключ не нужен — подпись проверяется корневыми
сертификатами Apple прямо на сервере. Ключ App Store Server API нужен только
для запроса истории и возвратов:

1. **App Store Connect → Users and Access → Integrations → In-App Purchase.**
2. Generate key, скачать файл `.p8` (тоже выдаётся один раз).
3. Запомнить **Key ID** и **Issuer ID** — они понадобятся рядом с файлом.
4. Файл положить в `backend/`, он тоже в `.gitignore`.
