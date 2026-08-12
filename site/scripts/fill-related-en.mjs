/**
 * Переносит related из русских статей в английские.
 *
 * Английская статья знает свой оригинал (поле ru), у оригинала есть список
 * related из русских слагов. Меняем каждый на английский по обратной карте
 * и оставляем только те, для которых перевод уже есть.
 *
 *   node scripts/fill-related-en.mjs
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ruDir = fileURLToPath(new URL('../src/content/articles/', import.meta.url));
const enDir = fileURLToPath(new URL('../src/content/articles_en/', import.meta.url));

const slugs = (dir) => readdirSync(dir).filter((f) => f.endsWith('.md'));

/** Список под ключом в YAML-шапке: строки вида «  - значение» до следующего ключа. */
function listField(src, key) {
  const m = src.match(new RegExp(`^${key}:[ \\t]*\\n((?:[ \\t]+-[^\\n]*\\n)*)`, 'm'));
  if (!m) return [];
  return [...m[1].matchAll(/^[ \t]+-[ \t]*(.+?)[ \t]*$/gm)].map((x) => x[1].replace(/^["']|["']$/g, ''));
}

const scalar = (src, key) =>
  src.match(new RegExp(`^${key}:[ \\t]*["']?(.+?)["']?[ \\t]*$`, 'm'))?.[1] ?? null;

const enFiles = slugs(enDir).map((f) => {
  const src = readFileSync(join(enDir, f), 'utf8');
  return { file: f, id: f.replace(/\.md$/, ''), ru: scalar(src, 'ru'), src };
});

const ruToEn = new Map(enFiles.map((a) => [a.ru, a.id]));

let changed = 0;
let links = 0;
for (const a of enFiles) {
  const ruSrc = readFileSync(join(ruDir, `${a.ru}.md`), 'utf8');
  const related = listField(ruSrc, 'related')
    .map((r) => ruToEn.get(r))
    .filter((r) => r && r !== a.id);

  const block = related.length
    ? `related:\n${related.map((r) => `  - ${r}\n`).join('')}`
    : 'related: []\n';

  // В английских статьях сейчас пустой related: [] — заменяем его целиком.
  const next = a.src.replace(/^related:[ \t]*(\[\][ \t]*\n|\n(?:[ \t]+-[^\n]*\n)*)/m, block);
  if (next !== a.src) {
    writeFileSync(join(enDir, a.file), next);
    changed += 1;
    links += related.length;
  }
}

console.log(`related заполнен: ${changed} статей, ${links} ссылок.`);
