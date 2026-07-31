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

Без `GEMINI_API_KEY` сервер работает в **мок-режиме** (фаза 1): `/report`
возвращает тестовый отчёт по боевой схеме + реальный `dsp_summary`.

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

### Деплой на VPS

> Дополняется в фазе 2 (Gemini + Docker + Caddy). Кратко: Ubuntu VPS →
> установить docker → `git clone` → `.env` по образцу `backend/.env.example` →
> `docker compose up -d`. API работает за Caddy с автоматическим TLS.

Переменные окружения — см. `backend/.env.example`. Ключи только через env,
в репозитории ключей нет. `GEMINI_MODEL` по умолчанию `gemini-2.5-flash` —
перед запуском проверить актуальное имя flash-модели.

## Приложение: сборка и подпись APK

> Заполняется в фазах 3–4. Кратко: `keytool` → создать ключ → `key.properties` →
> `bash scripts/publish-apk.sh` (копирует дерево в ассеты, собирает release APK
> с `--dart-define=API_BASE_URL=...`, кладёт APK и version.json в `site/public/app/`).

`applicationId`: `kz.stuk.app` (как сменить — будет описано здесь).
`*.jks` и `key.properties` не коммитить — уже в `.gitignore`.

## Сайт

> Заполняется в фазе 5. Кратко: `cd site && npm install && npm run build` → статика
> в `site/dist/`, APK раздаётся из `site/public/app/`.

## Дисклеймер

«Стук» даёт вероятностную оценку по косвенным признакам и звуку, а не диагноз.
Итоговое решение о ремонте принимает механик после осмотра автомобиля.
