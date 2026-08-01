# Стук — диагностика неисправностей автомобиля по симптомам и звуку

MVP: сайт + Android-приложение + бэкенд. Пользователь проходит короткий опросник,
получает предварительный вердикт, записывает звук 15–30 секунд и получает отчёт:
вероятные причины с процентами, светофор срочности и «что сказать в сервисе».

Продукт даёт вероятностную оценку, не диагноз.

## Структура репозитория

```
├── shared/
│   ├── tree.json          # дерево решений — единый источник для сайта и приложения
│   ├── validate-tree.mjs  # валидатор дерева (node, без зависимостей)
│   └── outline-tree.mjs   # текстовый outline дерева для ревью
├── backend/               # Go API (chi, DSP, Gemini)
├── app/                   # Flutter (Android)
├── site/                  # Astro + Tailwind + React-остров
├── scripts/
│   └── publish-apk.sh     # сборка release APK → site/public/app/
└── Makefile               # backend-run, backend-test, apk, site-dev, site-build, tree-validate
```

## Быстрые команды

```sh
make tree-validate   # проверить дерево решений
make backend-run     # запустить API локально            (фаза 1)
make backend-test    # go test ./...                     (фаза 1)
make apk             # собрать release APK → site/public/app/  (фаза 4)
make site-dev        # dev-сервер сайта                  (фаза 5)
make site-build      # статическая сборка сайта          (фаза 5)
```

## Дерево решений (`shared/tree.json`)

Единый источник и для сайта (импорт на этапе билда), и для приложения (ассет).

Как обновить:

1. Отредактировать `shared/tree.json`.
2. Проверить: `node shared/validate-tree.mjs` — должно завершиться без ошибок.
3. Посмотреть глазами: `node shared/outline-tree.mjs` — печатает дерево в виде outline.
4. Для приложения дерево копируется в `app/assets/` шагом внутри
   `scripts/publish-apk.sh` (симлинки Flutter не поддерживает). После правки дерева
   пересобрать APK.
5. Сайт подхватывает дерево при следующем `npm run build`.

## Бэкенд

Go 1.22+, chi, без БД: состояние (дневные лимиты) — in-memory со сбросом в
`data/state.json`. Логи — slog (JSON). FFT — собственный radix-2 с тестами.

Локальный запуск:

```sh
make backend-run          # порт 8080; настройки — env или backend/.env
make backend-test         # go test ./... (DSP-тесты на синтетике)
```

`GEMINI_API_KEY` обязателен — без него сервер не стартует. Ключ кладётся
в `backend/.env` (файл в `.gitignore`, в репозиторий не попадает).

Эндпоинты:
- `GET /healthz` — 200.
- `GET /api/v1/version` — версия приложения и ссылка на APK.
- `POST /api/v1/report` — multipart: `audio` (WAV PCM16 mono 16 кГц, 5–35 сек,
  до 6 МБ) + `meta` (JSON: device_id, car, answers, leaf_id).
  Ошибки: 422 (формат/валидация, человекочитаемая причина), 429 (лимит
  `DAILY_FREE_LIMIT`/сутки на device_id, текст «Лимит на сегодня исчерпан…»;
  плюс 10 req/min на IP), 502 (ошибка анализа, можно повторить).

Проверка одной командой (сервер должен быть запущен):

```sh
cd backend && go run ./cmd/genwav /tmp/stukwav && curl -s \
  -F "audio=@/tmp/stukwav/knock.wav" \
  -F 'meta={"device_id":"dev1","car":{"make":"Skoda","model":"Rapid","year":2014,"mileage_km":150000},"answers":[],"leaf_id":"leaf_engine_knock_deep"}' \
  localhost:8080/api/v1/report
```

### Анализ (Gemini)

`/report` отправляет в Gemini (`v1beta generateContent`) анкету, DSP-фичи
с уровнями надёжности и само аудио (inline base64), температура 0.2,
structured output по схеме отчёта. Ошибки Gemini → 502 «Не получилось
проанализировать, попробуйте ещё раз» + `"retry": true`; попытка дневного
лимита при этом возвращается.

`GEMINI_MODEL` по умолчанию `gemini-flash-latest` — алиас актуальной
flash-модели. Перед запуском проверить имя: конкретные версии со временем
закрываются для новых ключей (например, `gemini-2.5-flash` для ключей
2026 года уже недоступна). Список доступных моделей:

```sh
curl -s -H "x-goog-api-key: $GEMINI_API_KEY" \
  "https://generativelanguage.googleapis.com/v1beta/models" | grep '"name"'
```

### Деплой на Ubuntu VPS с нуля

```sh
# 1. Docker (официальный скрипт)
curl -fsSL https://get.docker.com | sh

# 2. Код
git clone <адрес-репозитория> stuk && cd stuk/backend

# 3. Конфигурация: заполнить GEMINI_API_KEY, DOMAIN_API, PUBLIC_SITE_URL
cp .env.example .env && nano .env

# 4. Запуск (api + Caddy с автоматическим TLS на DOMAIN_API)
docker compose up -d --build

# 5. Проверка
curl https://<DOMAIN_API>/healthz          # → ok
```

DNS-запись домена `DOMAIN_API` должна указывать на VPS до запуска — Caddy
сам получит TLS-сертификат. Счётчики лимитов живут в `backend/data/`
(volume), сертификаты — в volume `caddy_data`.

## Приложение (Flutter, Android)

Экраны: машина (первый запуск) → главный с историей → опросник по дереву →
предварительный вердикт → запись WAV 16 кГц (пакет `record`, encoder
pcm16bits + свой WAV-заголовок) → анализ через API → отчёт → шер-карточка
(RepaintBoundary → PNG → share_plus). Состояние — `ChangeNotifier`, история —
JSON-файлы в документах приложения. Все строки UI — в `app/lib/strings.dart`,
дизайн-токены §4 — в `app/lib/theme.dart`.

Сборка и локальная проверка:

```sh
cd app
flutter analyze && flutter test
# debug-сборка на эмулятор (10.0.2.2 = localhost хоста):
flutter build apk --debug --dart-define=API_BASE_URL=http://10.0.2.2:8080
# debug-сборка на реальный телефон в той же Wi-Fi-сети:
flutter build apk --debug --dart-define=API_BASE_URL=http://<IP-компьютера>:8080
adb install build/app/outputs/flutter-apk/app-debug.apk
```

Debug-сборка разрешает http (cleartext) для локального API; release — только
https. `API_BASE_URL` по умолчанию `https://api.example.kz` — задаётся через
`--dart-define` (см. `scripts/publish-apk.sh` в фазе 4).

`applicationId`: `kz.stuk.app`. Сменить: `android/app/build.gradle.kts`
(`applicationId`) и при желании `namespace` + пакет `MainActivity.kt`.

### Подпись release

Один раз создать ключ и файл с паролями (оба файла в `.gitignore`,
в репозиторий не попадают; ключ обязательно сохранить в надёжном месте —
без него не выпустить обновление под тем же именем):

```sh
cd app/android
keytool -genkeypair -v -keystore upload-keystore.jks -alias stuk \
  -keyalg RSA -keysize 2048 -validity 10000

cat > key.properties <<EOF
storePassword=<пароль-хранилища>
keyPassword=<пароль-ключа>
keyAlias=stuk
storeFile=upload-keystore.jks
EOF
```

`build.gradle.kts` подхватывает `key.properties` автоматически; без него
release собирается с debug-подписью (для разработки).

### Публикация APK на сайт

```sh
API_BASE_URL=https://api.<домен> SITE_URL=https://<домен> bash scripts/publish-apk.sh
```

Скрипт валидирует дерево, копирует `shared/tree.json` в ассеты, собирает
подписанный release APK и кладёт `stuk.apk` + `version.json` в
`site/public/app/`. Обновление приложения: поднять `version:` в
`app/pubspec.yaml`, прогнать скрипт заново и обновить `LATEST_APP_VERSION`
в `backend/.env` — кнопка «Проверить обновления» сравнивает именно её.

## Сайт

Astro (статика) + Tailwind + React-остров дерева диагностики. Токены §4 —
в `site/src/styles/global.css` (@theme), Manrope self-hosted через
`@fontsource-variable/manrope`. Домен задаётся в одном месте —
`site/site.config.mjs` (плейсхолдер `https://example.kz`, заменить при деплое;
он же попадает в sitemap и canonical; в `site/public/robots.txt` домен
поменять руками).

Страницы: главная (hero, 3 шага с CSS-мокапами, блок APK, FAQ),
`/simptomy/` (индекс по группам), 18 симптом-страниц с уникальными текстами
500–800 слов и интерактивным деревом (импортирует `shared/tree.json` на этапе
сборки, стартует с релевантной ветки), `/kak-eto-rabotaet/`, `/politika/`.
SEO: canonical, OG, sitemap, Schema.org (SoftwareApplication на главной,
FAQPage на симптом-страницах).

```sh
cd site && npm install
npm run dev     # разработка
npm run build   # статика в site/dist/ (22 страницы + sitemap)
```

APK раздаётся из `site/public/app/` — кладётся туда скриптом
`scripts/publish-apk.sh`. Контент симптом-страниц — структурированные файлы
`site/src/data/symptoms/*.ts`: правки текста делаются там, шаблон один —
`site/src/pages/simptomy/[slug].astro`.

## Дисклеймер

«Стук» даёт вероятностную оценку по косвенным признакам и звуку, а не диагноз.
Итоговое решение о ремонте принимает механик после осмотра автомобиля.
