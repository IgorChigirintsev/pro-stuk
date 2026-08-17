#!/usr/bin/env bash
# Сброс кэша Cloudflare.
#
# Нужен после быстрой выкладки сайта одним rsync — полный deploy-stuk.sh
# сбрасывает кэш сам. Без сброса HTML живёт на edge до двух часов (правило
# «HTML на edge»), и свежие правки посетитель увидит с задержкой.
#
#   bash deploy/purge-cache.sh
#
# Токен и зона берутся из backend/.env:
#   CF_CACHE_PURGE_TOKEN — токен с правом Zone / Cache Purge / Purge
#   CF_ZONE_ID           — Zone ID со страницы Overview домена
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ENV="$ROOT/backend/.env"

[ -f "$ENV" ] || { echo "нет $ENV"; exit 1; }

TOKEN="$(grep -E '^CF_CACHE_PURGE_TOKEN=' "$ENV" | cut -d= -f2- | tr -d '"' || true)"
ZONE="$(grep -E '^CF_ZONE_ID=' "$ENV" | cut -d= -f2- | tr -d '"' || true)"

if [ -z "${TOKEN:-}" ] || [ -z "${ZONE:-}" ]; then
  echo "в $ENV нет CF_CACHE_PURGE_TOKEN и/или CF_ZONE_ID"
  exit 1
fi

RESP="$(curl -s -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE/purge_cache" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  --data '{"purge_everything":true}')"

case "$RESP" in
  *'"success":true'*) echo "кэш сброшен" ;;
  *) echo "не вышло: $RESP"; exit 1 ;;
esac
