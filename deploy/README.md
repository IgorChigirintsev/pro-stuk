# Деплой «Стука» на сервер tugo

«Стук» встаёт **параллельно с tugo.kz на тот же VPS**: порты 80/443 держит
Caddy стека tugo, он же обслуживает домены «Стука» (статика сайта + прокси
на контейнер `stuk-api` через общую docker-сеть `tugo_default`). Своего
Caddy у «Стука» на этом сервере нет — `backend/docker-compose.yml` с Caddy
нужен только для отдельного VPS.

Файлы:
- `stuk.caddy.template` — site-блоки Caddy (домены подставляются при деплое);
- `docker-compose.stuk.yml` — контейнер API, подключается к сети tugo;
- `deploy-stuk.sh` — весь деплой одной командой с этой машины.

Правки в стеке tugo уже сделаны в `~/work/bari/deploy/` (import в Caddyfile +
два mount'а в compose) — скрипт довозит их на сервер сам.

## Разовая подготовка

### 1. Купить домен

Например `stuk.kz` на [ps.kz](https://www.ps.kz) (KYC как ИП уже пройден
для tugo.kz). Дальше в примерах — `stuk.kz`, замените на свой.

### 2. Cloudflare: зона и DNS

1. Cloudflare → **Add a site** → `stuk.kz` (Free-план).
2. Cloudflare выдаст два **nameserver** — прописать их у регистратора
   (ps.kz → домен → NS). Подождать активацию зоны (минуты–часы).
3. Cloudflare → **DNS → Records** (все **Proxied**, оранжевое облако):
   - `A  stuk.kz     → <IP сервера>`
   - `A  www         → <IP сервера>`
   - `A  api         → <IP сервера>`
4. **SSL/TLS → Overview** → режим **Full (strict)**.

### 3. Origin-сертификат для нового домена

Cloudflare (зона stuk.kz) → **SSL/TLS → Origin Server → Create Certificate**
(15 лет, hostnames: `stuk.kz, *.stuk.kz`). Сохранить два блока **на сервере**:

```sh
# на сервере
nano /opt/tugo/deploy/certs/stuk-origin.crt   # сертификат
nano /opt/tugo/deploy/certs/stuk-origin.key   # приватный ключ
```

### 4. Firewall

`firewall.sh` tugo уже пускает 80/443 только с Cloudflare — новые домены
идут через те же порты, ничего открывать не нужно.

## Деплой (и любое обновление)

```sh
bash deploy/deploy-stuk.sh chigirintsevigor@<IP сервера> stuk.kz api.stuk.kz
```

Скрипт: подставит домен в `site/site.config.mjs` → соберёт release APK
(`SKIP_APK=1` — пропустить) → соберёт сайт → сгенерирует Caddy-блоки и
серверный `.env` (из `backend/.env` + домены) → зальёт всё в `/opt/stuk`
→ обновит Caddyfile/compose tugo → запустит `stuk-api` и пересоздаст Caddy
→ проверит `https://stuk.kz` и `/healthz`.

## Проверка после деплоя

```sh
curl -sI https://stuk.kz                     # 200
curl -s  https://api.stuk.kz/healthz         # ok
curl -s  https://stuk.kz/app/version.json    # версия APK
```

И полный путь в приложении с телефона (APK теперь собран под боевой API).

## Как это устроено на сервере

```
/opt/tugo/…               # стек tugo: caddy (80/443), app, db, photon
/opt/stuk/site/           # статика сайта Стука  → caddy: /srv/stuk
/opt/stuk/caddy/stuk.caddy# site-блоки Стука     → caddy: import
/opt/stuk/backend/        # исходники Go API (build на сервере)
/opt/stuk/.env            # ключ Gemini и настройки API
/opt/stuk/data/           # счётчики дневных лимитов
```

Контейнер `stuk-api` подключён к внешней сети `tugo_default`, Caddy ходит
в него по имени. Ресурсы: API лёгкий (in-memory + вызовы Gemini), Postgres
не нужен — соседству с tugo не мешает.
