/**
 * Проверка словарей сайта: структура совпадает с русской, ничего не пропущено,
 * ничего не осталось на чужом языке. Запускается перед сборкой — пустая надпись
 * на живом сайте дороже упавшей сборки.
 *
 *   node --experimental-strip-types scripts/check-i18n.mjs
 */
import { readFileSync } from 'node:fs';

import { ru } from '../src/i18n/ru.ts';

// Список языков берём из самого index.ts: Node требует расширений в импортах,
// а Astro их не пишет, поэтому модуль целиком сюда не затащить.
const LANGS = readFileSync(new URL('../src/i18n/index.ts', import.meta.url), 'utf8')
  .match(/export const LANGS = \[([^\]]+)\]/)[1]
  .match(/'([a-z]{2})'/g)
  .map((s) => s.slice(1, -1));

const errors = [];
const fail = (msg) => errors.push(msg);

/** Ключи и формы значений должны совпадать с русским словарём до последнего листа. */
function compare(path, a, b, lang) {
  if (Array.isArray(a)) {
    if (!Array.isArray(b)) return fail(`${lang}: ${path} — ожидался список`);
    if (a.length !== b.length) {
      return fail(`${lang}: ${path} — ${b.length} элементов вместо ${a.length}`);
    }
    a.forEach((v, i) => compare(`${path}[${i}]`, v, b[i], lang));
    return;
  }
  if (a && typeof a === 'object') {
    if (!b || typeof b !== 'object') return fail(`${lang}: ${path} — ожидался объект`);
    for (const k of Object.keys(a)) {
      if (!(k in b)) fail(`${lang}: нет ключа ${path ? `${path}.` : ''}${k}`);
      else compare(path ? `${path}.${k}` : k, a[k], b[k], lang);
    }
    for (const k of Object.keys(b)) {
      if (!(k in a)) fail(`${lang}: лишний ключ ${path ? `${path}.` : ''}${k}`);
    }
    return;
  }
  if (typeof b !== 'string' || !b.trim()) fail(`${lang}: ${path} — пустая строка`);
}

for (const lang of LANGS) {
  let dict;
  try {
    dict = (await import(new URL(`../src/i18n/${lang}.ts`, import.meta.url).href))[lang];
  } catch {
    fail(`${lang}: нет словаря src/i18n/${lang}.ts`);
    continue;
  }
  compare('', ru, dict, lang);

  // Кириллица за пределами русского словаря — след недоперевода.
  if (lang !== 'ru') {
    const walk = (path, v) => {
      if (typeof v === 'string') {
        if (/[А-Яа-яЁё]/.test(v)) fail(`${lang}: ${path} — осталась кириллица: ${v.slice(0, 60)}`);
        return;
      }
      if (v && typeof v === 'object') {
        for (const [k, x] of Object.entries(v)) walk(path ? `${path}.${k}` : k, x);
      }
    };
    walk('', dict);
  }

  // Подпись под кнопкой скачивания подставляет три значения — без них выйдет обрубок.
  for (const ph of ['{version}', '{size}', '{date}']) {
    if (!dict?.download?.meta?.includes(ph)) fail(`${lang}: download.meta без ${ph}`);
  }
}

// Опросник на сайте берёт те же переводы дерева, что и приложение. Если файл
// отстал от структуры дерева, вопрос выйдет к человеку наполовину русским.
const tree = JSON.parse(
  readFileSync(new URL('../../shared/tree.json', import.meta.url), 'utf8')
).nodes;

for (const lang of LANGS) {
  if (lang === 'ru') continue;
  let tr;
  try {
    tr = JSON.parse(
      readFileSync(new URL(`../../shared/tree_i18n/${lang}.json`, import.meta.url), 'utf8')
    );
  } catch {
    fail(`${lang}: нет перевода дерева shared/tree_i18n/${lang}.json`);
    continue;
  }
  const missing = Object.keys(tree).filter((id) => !tr[id]);
  if (missing.length) {
    fail(`${lang}: дерево переведено не полностью — нет ${missing.length} узлов`);
  }
  for (const [id, node] of Object.entries(tree)) {
    const t = tr[id];
    if (!t) continue;
    if (node.type === 'leaf') {
      if (!t.top_cause) fail(`${lang}: узел ${id} без перевода причины`);
      continue;
    }
    const ids = node.options.map((o) => o.id).sort();
    const got = Object.keys(t.options ?? {}).sort();
    if (ids.join() !== got.join()) fail(`${lang}: узел ${id} — ответы разошлись с деревом`);
  }
}

// Разборы симптомов: перевод обязан повторять структуру русского оригинала.
// Разошлись длины — и на странице пропадёт причина или проверка.
const { SYMPTOMS_ORIGINALS } = await import(new URL('./symptom-originals.mjs', import.meta.url).href);

for (const lang of LANGS) {
  if (lang === 'ru') continue;
  let pages;
  try {
    pages = (await import(new URL(`../src/data/symptoms_i18n/${lang}.ts`, import.meta.url).href)).pages;
  } catch {
    continue; // язык ещё без разборов — раздел ему просто не показывается
  }
  for (const [slug, tr] of Object.entries(pages)) {
    const ru = SYMPTOMS_ORIGINALS[slug];
    if (!ru) {
      fail(`${lang}: разбор «${slug}» — нет такого симптома в src/data/symptoms/`);
      continue;
    }
    for (const key of ['intro', 'causes', 'canRide', 'checks', 'faq']) {
      if (tr[key]?.length !== ru[key]) {
        fail(`${lang}/${slug}: ${key} — ${tr[key]?.length} элементов вместо ${ru[key]}`);
      }
    }
    for (const f of ['h1', 'metaTitle', 'description', 'appHelp']) {
      if (!tr[f]?.trim()) fail(`${lang}/${slug}: пустое поле ${f}`);
    }
    const flat = JSON.stringify(tr);
    if (/[А-Яа-яЁё]/.test(flat)) fail(`${lang}/${slug}: осталась кириллица`);
  }
}

if (errors.length) {
  console.error(`Словари сайта: ${errors.length} проблем`);
  for (const e of errors) console.error(' -', e);
  process.exit(1);
}
console.log(`Словари сайта: ${LANGS.length} языков, структура совпадает.`);
