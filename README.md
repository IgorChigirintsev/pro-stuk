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

## Бэкенд: деплой на VPS

> Заполняется в фазах 1–2. Кратко: Ubuntu VPS → установить docker → `git clone` →
> создать `.env` по образцу `backend/.env.example` → `docker compose up -d`.
> API работает за Caddy с автоматическим TLS.

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
