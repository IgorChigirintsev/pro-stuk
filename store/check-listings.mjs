// Проверка длин в store/listings.md.
//
// Магазины считают не байты, а знаки, и обрезают молча: слишком длинное
// название просто не сохранится, а понять почему — отдельное приключение.
// Поэтому счёт здесь по кодовым точкам, а не по length: у эмодзи и части
// иероглифов length врёт вдвое.
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const LIMITS = {
  'Название': 30,
  'Подзаголовок (App Store)': 30,
  'Короткое описание': 80,
  'Промотекст (App Store)': 170,
  'Ключевые слова (App Store)': 100,
  'Полное описание': 4000,
};

const file = join(dirname(fileURLToPath(import.meta.url)), 'listings.md');
const text = readFileSync(file, 'utf8');

let lang = '';
let field = '';
let bad = 0, seen = 0;
const rows = [];

const lines = text.split('\n');
for (let i = 0; i < lines.length; i++) {
  const l = lines[i];
  const h = l.match(/^## (.+?) — `(.+?)`$/);
  if (h) { lang = `${h[1]} (${h[2]})`; continue; }
  const f = l.match(/^\*\*(.+?)\*\*$/);
  if (f && LIMITS[f[1]] !== undefined) { field = f[1]; continue; }
  if (l === '```' && field) {
    const body = [];
    for (i++; i < lines.length && lines[i] !== '```'; i++) body.push(lines[i]);
    const n = [...body.join('\n')].length;
    const limit = LIMITS[field];
    seen++;
    if (n > limit) bad++;
    rows.push({ lang, field, n, limit, over: n > limit });
    field = '';
  }
}

const width = Math.max(...rows.map(r => r.lang.length));
let cur = '';
for (const r of rows) {
  if (r.lang !== cur) { cur = r.lang; console.log(`\n${r.lang}`); }
  const mark = r.over ? '  ← ДЛИННО' : '';
  console.log(`   ${r.field.padEnd(26)} ${String(r.n).padStart(4)} / ${r.limit}${mark}`);
}
console.log(`\nпроверено полей: ${seen}, с превышением: ${bad}`);
process.exit(bad ? 1 : 0);
