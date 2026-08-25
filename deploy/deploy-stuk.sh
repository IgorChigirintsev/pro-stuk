#!/usr/bin/env bash
# Деплой «Стука» на сервер tugo (общий Caddy, общая docker-сеть).
#
# Использование:
#   bash deploy/deploy-stuk.sh <user@server> <домен-сайта> <домен-api>
# Пример:
#   bash deploy/deploy-stuk.sh chigirintsevigor@1.2.3.4 stuk.kz api.stuk.kz
#
# Переменные окружения:
#   SKIP_APK=1   — не пересобирать release APK (использовать уже лежащий)
#   SSH_KEY=...  — путь к ключу (default ~/.ssh/id_ed25519)
#
# Предварительные условия (разово, см. deploy/README.md):
#   - домен добавлен в Cloudflare, A-записи @, www и api → IP сервера (Proxied);
#   - origin-сертификат Cloudflare лежит на сервере в
#     /opt/tugo/deploy/certs/stuk-origin.crt и stuk-origin.key;
#   - backend/.env заполнен локально (GEMINI_API_KEY и т.д.).
set -euo pipefail

SERVER="${1:?user@server}"
STUK_DOMAIN="${2:?домен сайта, напр. stuk.kz}"
STUK_API_DOMAIN="${3:?домен api, напр. api.stuk.kz}"
SSH_KEY="${SSH_KEY:-$HOME/.ssh/id_ed25519}"
SSH="ssh -i $SSH_KEY $SERVER"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

echo "==> Проверки"
command -v envsubst >/dev/null || { echo "нужен envsubst (apt install gettext-base)"; exit 1; }
[ -f "$ROOT/backend/.env" ] || { echo "нет backend/.env — заполните по .env.example"; exit 1; }
$SSH "test -f /opt/tugo/deploy/certs/stuk-origin.crt" || {
  echo "ОШИБКА: на сервере нет /opt/tugo/deploy/certs/stuk-origin.crt" >&2
  echo "Выпустите origin-сертификат Cloudflare для $STUK_DOMAIN (deploy/README.md, шаг 3)." >&2
  exit 1
}

echo "==> Домен в site.config.mjs"
if grep -q "https://$STUK_DOMAIN" "$ROOT/site/site.config.mjs"; then
  echo "уже $STUK_DOMAIN"
elif grep -q "example.kz" "$ROOT/site/site.config.mjs"; then
  sed -i "s|https://example.kz|https://$STUK_DOMAIN|" "$ROOT/site/site.config.mjs"
  echo "плейсхолдер example.kz заменён на $STUK_DOMAIN"
else
  echo "ОШИБКА: в site/site.config.mjs другой домен — поправьте вручную" >&2
  exit 1
fi

if [ "${SKIP_APK:-0}" != "1" ]; then
  echo "==> Release APK (API_BASE_URL=https://$STUK_API_DOMAIN)"
  API_BASE_URL="https://$STUK_API_DOMAIN" SITE_URL="https://$STUK_DOMAIN" \
    bash "$ROOT/scripts/publish-apk.sh"
elif [ ! -f "$ROOT/site/public/app/stuk.apk" ]; then
  echo "ПРЕДУПРЕЖДЕНИЕ: SKIP_APK=1, а site/public/app/stuk.apk нет — сайт уедет без APK" >&2
fi

echo "==> Сборка сайта"
(cd "$ROOT/site" && npm run build)

echo "==> Caddy-блоки из шаблона"
mkdir -p "$ROOT/deploy/build"
STUK_DOMAIN="$STUK_DOMAIN" STUK_API_DOMAIN="$STUK_API_DOMAIN" \
  envsubst '${STUK_DOMAIN} ${STUK_API_DOMAIN}' \
  < "$ROOT/deploy/stuk.caddy.template" > "$ROOT/deploy/build/stuk.caddy"

echo "==> .env для сервера"
grep -vE '^(PUBLIC_SITE_URL|DOMAIN_API)=' "$ROOT/backend/.env" > "$ROOT/deploy/build/stuk.env"
{
  echo "PUBLIC_SITE_URL=https://$STUK_DOMAIN"
  echo "DOMAIN_API=$STUK_API_DOMAIN"
} >> "$ROOT/deploy/build/stuk.env"

echo "==> Копирование на сервер (/opt/stuk)"
$SSH "sudo mkdir -p /opt/stuk && sudo chown \$(whoami) /opt/stuk && mkdir -p /opt/stuk/caddy /opt/stuk/data"
RS="rsync -az --delete -e \"ssh -i $SSH_KEY\""
eval $RS "$ROOT/site/dist/" "$SERVER:/opt/stuk/site/"
eval $RS --exclude data --exclude .env "$ROOT/backend/" "$SERVER:/opt/stuk/backend/"
eval $RS "$ROOT/deploy/docker-compose.stuk.yml" "$SERVER:/opt/stuk/docker-compose.yml"
eval $RS "$ROOT/deploy/build/stuk.caddy" "$SERVER:/opt/stuk/caddy/stuk.caddy"
eval $RS "$ROOT/deploy/build/stuk.env" "$SERVER:/opt/stuk/.env"

echo "==> Обновление стека tugo (Caddyfile + compose с mount'ами Стука)"
eval $RS "/home/igor/work/bari/deploy/Caddyfile" "$SERVER:/opt/tugo/deploy/Caddyfile"
eval $RS "/home/igor/work/bari/deploy/docker-compose.prod.yml" "$SERVER:/opt/tugo/deploy/docker-compose.prod.yml"

echo "==> Запуск на сервере"
$SSH 'bash -s' <<'REMOTE'
set -euo pipefail
cd /opt/stuk
# --force-recreate обязателен: переменные из .env попадают в контейнер один раз,
# при создании. Без него правка .env не доезжает до работающего процесса, и
# сервер продолжает жить со старыми настройками. Так вход через Google молча
# отказывал всем — ключ в файле был, а контейнер о нём не знал.
docker compose up -d --build --force-recreate
cd /opt/tugo/deploy
# up -d пересоздаст caddy с новыми volume и перечитает Caddyfile
docker compose -f docker-compose.prod.yml up -d caddy
docker compose -f docker-compose.prod.yml exec -T caddy caddy validate --config /etc/caddy/Caddyfile
REMOTE

# Cloudflare держит HTML на edge (правило «HTML на edge», Edge TTL 2 часа).
# Без сброса свежая выкладка доезжала бы до посетителей эти два часа.
# Токен и зона берутся из backend/.env; нет их — просто предупреждаем, выкладка
# от этого не ломается.
echo "==> Сброс кэша Cloudflare"
CF_TOKEN="$(grep -E '^CF_CACHE_PURGE_TOKEN=' "$ROOT/backend/.env" | cut -d= -f2- | tr -d '"' || true)"
CF_ZONE="$(grep -E '^CF_ZONE_ID=' "$ROOT/backend/.env" | cut -d= -f2- | tr -d '"' || true)"
if [ -n "${CF_TOKEN:-}" ] && [ -n "${CF_ZONE:-}" ]; then
  CF_RESP="$(curl -s -X POST \
    "https://api.cloudflare.com/client/v4/zones/$CF_ZONE/purge_cache" \
    -H "Authorization: Bearer $CF_TOKEN" \
    -H "Content-Type: application/json" \
    --data '{"purge_everything":true}')"
  case "$CF_RESP" in
    *'"success":true'*) echo "кэш сброшен" ;;
    *) echo "ВНИМАНИЕ: сбросить кэш не вышло: $CF_RESP" ;;
  esac
else
  echo "пропущено: в backend/.env нет CF_CACHE_PURGE_TOKEN и CF_ZONE_ID"
  echo "  до сброса вручную (Caching → Configuration → Purge Everything)"
  echo "  правки будут видны посетителям с задержкой до двух часов"
fi

echo "==> Проверка"
sleep 3
curl -sI "https://$STUK_DOMAIN" | head -1
curl -s "https://$STUK_API_DOMAIN/healthz" && echo " ← healthz"
curl -s "https://$STUK_DOMAIN/app/version.json" && echo
echo "Готово: https://$STUK_DOMAIN"
