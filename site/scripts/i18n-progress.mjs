/**
 * Что переведено на сайте и в приложении — одной таблицей.
 *
 *   npm run progress
 *
 * Считает по файлам, а не по записям в журнале: если перевод есть на диске,
 * он попадёт в сборку, а если нет — никакая отметка о «готовности» не поможет.
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const shared = new URL('../../shared/', import.meta.url);

const LANGS = readFileSync(new URL('src/i18n/index.ts', root), 'utf8')
  .match(/export const LANGS = \[([^\]]+)\]/)[1]
  .match(/'([a-z]{2})'/g)
  .map((s) => s.slice(1, -1));

// Только из блока LANG_NAMES: рядом лежат og-локали и маршруты, и общий
// поиск по «xx: '…'» цеплял их вместо названий языков.
const NAMES = Object.fromEntries(
  [
    ...readFileSync(new URL('src/i18n/index.ts', root), 'utf8')
      .match(/LANG_NAMES: Record<Lang, string> = \{([\s\S]*?)\};/)[1]
      .matchAll(/(\w{2}): '([^']+)'/g),
  ].map((m) => [m[1], m[2]])
);

const treeNodes = Object.keys(
  JSON.parse(readFileSync(new URL('tree.json', shared), 'utf8')).nodes
).length;

const symptomsTotal = readdirSync(new URL('src/data/symptoms/', root)).filter((f) =>
  f.endsWith('.ts')
).length;

/** Ключи верхнего уровня в объекте `pages` файла перевода разборов. */
function countSymptoms(lang) {
  const p = new URL(`src/data/symptoms_i18n/${lang}.ts`, root);
  if (!existsSync(p)) return 0;
  return (readFileSync(p, 'utf8').match(/^ {2}'[a-z0-9-]+': \{$/gm) ?? []).length;
}

/** Ширина в знакоместах: иероглиф и хангыль занимают две колонки. */
const width = (s) =>
  [...s].reduce((n, ch) => n + (/[\u1100-\u115F\u2E80-\uA4CF\uAC00-\uD7A3\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFF60]/.test(ch) ? 2 : 1), 0);
const pad = (s, n) => s + ' '.repeat(Math.max(0, n - width(s)));

const bar = (done, total, width = 12) => {
  const filled = Math.round((done / total) * width);
  return '█'.repeat(filled) + '·'.repeat(width - filled);
};

const rows = LANGS.map((lang) => {
  const dict = existsSync(new URL(`src/i18n/${lang}.ts`, root));
  const tree =
    lang === 'ru'
      ? treeNodes
      : existsSync(new URL(`tree_i18n/${lang}.json`, shared))
        ? Object.keys(
            JSON.parse(readFileSync(new URL(`tree_i18n/${lang}.json`, shared), 'utf8'))
          ).length
        : 0;
  const sym = lang === 'ru' ? symptomsTotal : countSymptoms(lang);
  return { lang, dict, tree, sym };
});

console.log(
  `\n  язык            интерфейс   дерево (${treeNodes})   разборы (${symptomsTotal})`
);
console.log('  ' + '─'.repeat(58));
for (const r of rows) {
  const name = pad(`${NAMES[r.lang] ?? r.lang} (${r.lang})`, 16);
  const dict = (r.dict ? 'готов' : '—').padEnd(11);
  const tree = `${bar(r.tree, treeNodes)} ${String(r.tree).padStart(3)}`;
  const sym = `${bar(r.sym, symptomsTotal)} ${String(r.sym).padStart(2)}/${symptomsTotal}`;
  const live = r.sym === symptomsTotal ? '  ✓ на сайте' : '';
  console.log(`  ${name}${dict}${tree}   ${sym}${live}`);
}

const doneSym = rows.filter((r) => r.sym === symptomsTotal).length;
const totalSym = rows.reduce((n, r) => n + r.sym, 0);
console.log(
  `\n  Разборы: ${doneSym} из ${rows.length} языков целиком, ` +
    `${totalSym} из ${rows.length * symptomsTotal} страниц переведено.`
);

// Статьи pSEO: русский оригинал и английская версия под англоязычный поиск.
const count = (dir) => {
  try {
    return readdirSync(new URL(dir, import.meta.url)).filter((f) => f.endsWith('.md')).length;
  } catch {
    return 0;
  }
};
const ruArt = count('../src/content/articles/');
const enArt = count('../src/content/articles_en/');
console.log(
  `  Статьи: ${bar(enArt, ruArt)} ${enArt} из ${ruArt} переведено на английский.`
);

// Остальные языки: слаг общий с английским, файлы лежат по папке на язык.
let trLangs = [];
try {
  trLangs = readdirSync(new URL('../src/content/articles_i18n/', import.meta.url), {
    withFileTypes: true,
  })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();
} catch {}

let trTotal = 0;
for (const lang of trLangs) {
  const n = count(`../src/content/articles_i18n/${lang}/`);
  trTotal += n;
  const name = pad(`${NAMES[lang] ?? lang} (${lang})`, 16);
  console.log(`    ${name}${bar(n, ruArt)} ${String(n).padStart(3)}/${ruArt}`);
}
if (trLangs.length) {
  const target = ruArt * (LANGS.length - 2); // без русского оригинала и английского
  console.log(
    `  Остальные языки: ${trTotal} из ${target} страниц, ${trLangs.length} из ${LANGS.length - 2} языков начаты.`
  );
}
console.log('');
