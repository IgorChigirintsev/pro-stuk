#!/usr/bin/env bash
# Сборка подписанного .aab для Google Play.
#
# Отличие от publish-apk.sh: тот собирает APK для прямого скачивания с сайта,
# этот — бандл для магазина. Общего у них подготовка ассетов и подпись.
#
# Значения берутся из deploy/build/stuk.env — он не в репозитории, поэтому
# адрес сервера и идентификатор клиента OAuth не попадают в публичный код.
# Переопределить можно переменными окружения:
#   API_BASE_URL=https://api.example.kz bash scripts/publish-aab.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ENV_FILE="${ENV_FILE:-$ROOT/deploy/build/stuk.env}"

# Значения из stuk.env читаем построчно, а не через source: файл писался для
# docker-compose, там нет кавычек, и sourcing ломается на значениях с пробелами.
envval() {
  [ -f "$ENV_FILE" ] || return 0
  sed -n "s/^$1=//p" "$ENV_FILE" | tail -n1 | tr -d '"'"'"'\r'
}

DOMAIN_API="$(envval DOMAIN_API)"
API_BASE_URL="${API_BASE_URL:-${DOMAIN_API:+https://$DOMAIN_API}}"
SITE_URL="${SITE_URL:-$(envval PUBLIC_SITE_URL)}"
GOOGLE_SERVER_CLIENT_ID="${GOOGLE_SERVER_CLIENT_ID:-$(envval GOOGLE_CLIENT_ID)}"

for v in API_BASE_URL SITE_URL GOOGLE_SERVER_CLIENT_ID; do
  if [ -z "${!v}" ]; then
    echo "ОШИБКА: не задан $v — ни в окружении, ни в $ENV_FILE." >&2
    echo "Сборка без него собралась бы, но приложение не достучалось бы до сервера." >&2
    exit 1
  fi
done

if [ ! -f "$ROOT/app/android/key.properties" ]; then
  echo "ОШИБКА: нет app/android/key.properties — сборка отменена." >&2
  echo "Без него бандл ушёл бы с debug-подписью, и Play его не примет." >&2
  exit 1
fi

echo "==> Проверка дерева решений"
node "$ROOT/shared/validate-tree.mjs"

echo "==> Копирование дерева в ассеты приложения (симлинки Flutter не поддерживает)"
cp "$ROOT/shared/tree.json" "$ROOT/app/assets/tree.json"
rm -rf "$ROOT/app/assets/tree_i18n"
cp -r "$ROOT/shared/tree_i18n" "$ROOT/app/assets/tree_i18n"
cp "$ROOT/shared/schemes-parts.json" "$ROOT/app/assets/schemes/parts.json"

# Сборка бандла упирается в /tmp: во многих сборках Ubuntu это tmpfs на
# несколько гигабайт, живущая в оперативной памяти. BundleTool пишет туда
# распакованный бандл, места не хватает, и Gradle падает с «Disk quota
# exceeded» — при том что на диске свободны сотни гигабайт.
#
# Поэтому на время сборки уводим временный каталог JVM на настоящий диск.
# Java берёт его из java.io.tmpdir, а не из TMPDIR, так что переменной
# окружения не обойтись — правим gradle.properties и возвращаем как было.
GRADLE_PROPS="$ROOT/app/android/gradle.properties"
BUILD_TMP="$ROOT/app/build/tmp"
PROPS_BAK="$(mktemp)"
mkdir -p "$BUILD_TMP"
cp "$GRADLE_PROPS" "$PROPS_BAK"
trap 'cp "$PROPS_BAK" "$GRADLE_PROPS"; rm -f "$PROPS_BAK"' EXIT

# Последнее присвоение в properties-файле побеждает, так что дописываем.
JVMARGS="-Xmx1536m -XX:MaxMetaspaceSize=512m -Djava.io.tmpdir=$BUILD_TMP"
printf '\norg.gradle.jvmargs=%s\norg.gradle.daemon=false\n' "$JVMARGS" >> "$GRADLE_PROPS"

VERSION_LINE="$(grep -oP '^version:\s*\K\S+' "$ROOT/app/pubspec.yaml")"
echo "==> Сборка .aab, версия $VERSION_LINE, API $API_BASE_URL"
(cd "$ROOT/app" && flutter build appbundle --release \
  --dart-define=API_BASE_URL="$API_BASE_URL" \
  --dart-define=SITE_URL="$SITE_URL" \
  --dart-define=GOOGLE_SERVER_CLIENT_ID="$GOOGLE_SERVER_CLIENT_ID")

AAB="$ROOT/app/build/app/outputs/bundle/release/app-release.aab"
SIZE_MB="$(LC_ALL=C awk "BEGIN {printf \"%.1f\", $(stat -c%s "$AAB") / 1048576}")"

echo "==> Готово: $AAB (${SIZE_MB} МБ), версия $VERSION_LINE"
echo "    Загружать в Play Console → Тестирование и выпуск → Рабочая версия."
echo "    Номер сборки (versionCode) должен быть больше предыдущего, иначе Play отклонит."
