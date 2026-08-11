#!/usr/bin/env bash
# Сборка release APK и публикация на сайт.
# Использование:
#   API_BASE_URL=https://api.example.kz bash scripts/publish-apk.sh
# Шаги: копирует shared/tree.json и переводы дерева в ассеты приложения → собирает подписанный
# release APK → кладёт APK и version.json в site/public/app/.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
API_BASE_URL="${API_BASE_URL:-https://api.example.kz}"
SITE_URL="${SITE_URL:-https://example.kz}"
OUT_DIR="$ROOT/site/public/app"

echo "==> Проверка дерева решений"
node "$ROOT/shared/validate-tree.mjs"

echo "==> Копирование дерева в ассеты приложения (симлинки Flutter не поддерживает)"
cp "$ROOT/shared/tree.json" "$ROOT/app/assets/tree.json"
rm -rf "$ROOT/app/assets/tree_i18n"
cp -r "$ROOT/shared/tree_i18n" "$ROOT/app/assets/tree_i18n"
cp "$ROOT/shared/schemes-parts.json" "$ROOT/app/assets/schemes/parts.json"

if [ ! -f "$ROOT/app/android/key.properties" ]; then
  echo "ОШИБКА: нет app/android/key.properties — публикация отменена." >&2
  echo "Без него release-APK был бы с debug-подписью. Создайте ключ по README (раздел «Подпись release»)." >&2
  exit 1
fi

echo "==> Сборка release APK (API_BASE_URL=$API_BASE_URL)"
(cd "$ROOT/app" && flutter build apk --release \
  --dart-define=API_BASE_URL="$API_BASE_URL" \
  --dart-define=SITE_URL="$SITE_URL")

APK="$ROOT/app/build/app/outputs/flutter-apk/app-release.apk"
VERSION="$(grep -oP '^version:\s*\K[0-9]+\.[0-9]+\.[0-9]+' "$ROOT/app/pubspec.yaml")"
SIZE_MB="$(LC_ALL=C awk "BEGIN {printf \"%.1f\", $(stat -c%s "$APK") / 1048576}")"

mkdir -p "$OUT_DIR"
cp "$APK" "$OUT_DIR/stuk.apk"
cat > "$OUT_DIR/version.json" <<EOF
{"version":"$VERSION","size_mb":$SIZE_MB,"updated":"$(date +%F)"}
EOF

echo "==> Готово:"
ls -la "$OUT_DIR"
cat "$OUT_DIR/version.json"
