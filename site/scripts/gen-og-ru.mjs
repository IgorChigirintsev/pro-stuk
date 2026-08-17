/**
 * Картинки для соцсетей русской версии: по одной на статью и на раздел.
 *
 * Скрипта на них раньше не было — файлы og/stati/*.png и og/<раздел>.png
 * лежали в репозитории, а чем сделаны, история не сохранила. При смене
 * названия это вылезло: перерисовать было нечем. Макет тот же, что у
 * английских og/en/*.png, чтобы сайт не выглядел в мессенджерах как два
 * разных.
 *
 *   node --experimental-strip-types scripts/gen-og-ru.mjs [slug ...] [--force]
 *
 * Без аргументов — все статьи и все разделы. Готовые файлы пропускаются,
 * если не передан --force. Результат: public/og/stati/<slug>.png и
 * public/og/<раздел>.png, 1200×630.
 */
import { execFileSync } from 'node:child_process';
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { SITE_URL } from '../site.config.mjs';
import { HUBS, hubForArticle } from '../src/data/hubs.ts';
import { schemaForArticle } from '../src/data/schemas.ts';
import { ru } from '../src/i18n/ru.ts';

const CHROME = process.env.CHROME ?? 'google-chrome';
const publicDir = fileURLToPath(new URL('../public/', import.meta.url));
const artDir = fileURLToPath(new URL('../src/content/articles/', import.meta.url));
const fontsDir = fileURLToPath(
  new URL('../node_modules/@fontsource-variable/manrope/files/', import.meta.url)
);
const domain = SITE_URL.replace(/^https?:\/\//, '');

const svg = (key) => readFileSync(join(publicDir, `${key}.svg`), 'utf8');

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Заголовки статей длиннее слоганов, поэтому ступеней размера больше. */
function headlineSize(text) {
  const len = text.length;
  if (len > 64) return 44;
  if (len > 50) return 50;
  if (len > 38) return 58;
  return 66;
}

function html({ title, kicker, scheme }) {
  return `<!doctype html>
<html lang="ru" dir="ltr">
<meta charset="utf-8">
<style>
  @font-face {
    font-family: 'Manrope Variable';
    src: url('file://${fontsDir}manrope-cyrillic-wght-normal.woff2') format('woff2');
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    font-weight: 200 800;
  }
  @font-face {
    font-family: 'Manrope Variable';
    src: url('file://${fontsDir}manrope-latin-wght-normal.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+2000-206F, U+2122, U+2212;
    font-weight: 200 800;
  }
  * { margin: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; padding: 48px 72px 0; background: #ffffff; color: #16232e;
    font-family: 'Manrope Variable', sans-serif; font-feature-settings: normal;
    display: flex; flex-direction: column;
  }
  .brand { display: flex; align-items: center; gap: 16px; }
  .mark { width: 44px; height: 44px; border-radius: 12px; background: #0e7c7b; }
  .name { font-size: 34px; font-weight: 800; letter-spacing: -0.01em; }
  main { flex: 1 1 auto; display: flex; align-items: center; gap: 56px; padding-bottom: 60px; }
  .col { flex: 1 1 0; min-width: 0; }
  h1 {
    font-size: ${headlineSize(title)}px; line-height: 1.14; font-weight: 800;
    letter-spacing: -0.02em; text-wrap: balance;
  }
  .kicker { margin-top: 28px; font-size: 26px; color: #5c6b78; }
  .art {
    flex: 0 0 400px; background: #f4f7f9; border-radius: 24px; padding: 24px 20px;
    display: flex; align-items: center; justify-content: center;
  }
  .art > svg { width: 360px; height: auto; display: block; }
  .bar { position: fixed; left: 0; right: 0; bottom: 0; height: 14px; background: #0e7c7b; }
</style>
<div class="brand"><div class="mark"></div><div class="name">${esc(ru.brand)}</div></div>
<main>
  <div class="col">
    <h1>${esc(title)}</h1>
    <div class="kicker">${esc(kicker)}</div>
  </div>
  <div class="art">${scheme}</div>
</main>
<div class="bar"></div>
</html>`;
}

const args = process.argv.slice(2);
const force = args.includes('--force');
const wanted = args.filter((a) => a !== '--force');

/** Схема статьи — та же, что на странице: узел, если он опознан, иначе раздел. */
const schemaKey = (slug) => {
  const hit = schemaForArticle(slug);
  return hit ? `shemy/${hit.file}` : `uzly/${hubForArticle(slug).slug}`;
};

const articles = readdirSync(artDir)
  .filter((f) => f.endsWith('.md'))
  .map((f) => {
    const src = readFileSync(join(artDir, f), 'utf8');
    return {
      id: f.replace(/\.md$/, ''),
      title: src.match(/^title:[ \t]*["'](.+?)["'][ \t]*$/m)?.[1] ?? '',
    };
  });

const jobs = [
  ...articles.map((a) => ({
    out: join(publicDir, 'og/stati', `${a.id}.png`),
    id: a.id,
    title: a.title,
    kicker: domain,
    key: schemaKey(a.id),
  })),
  ...HUBS.map((h) => ({
    out: join(publicDir, 'og', `${h.slug}.png`),
    id: h.slug,
    title: h.h1,
    kicker: `Раздел · ${domain}`,
    key: `uzly/${h.slug}`,
  })),
].filter((j) => (wanted.length ? wanted.includes(j.id) : true));

mkdirSync(join(publicDir, 'og/stati'), { recursive: true });

const work = mkdtempSync(join(tmpdir(), 'stuk-og-ru-'));
let made = 0;
try {
  for (const job of jobs) {
    if (!force && existsSync(job.out)) continue;
    const page = join(work, 'page.html');
    const shot = join(work, 'shot.png');
    writeFileSync(page, html({ title: job.title, kicker: job.kicker, scheme: svg(job.key) }));
    execFileSync(
      CHROME,
      [
        '--headless',
        '--disable-gpu',
        '--hide-scrollbars',
        '--force-device-scale-factor=1',
        '--window-size=1200,630',
        `--screenshot=${shot}`,
        `file://${page}`,
      ],
      { stdio: ['ignore', 'ignore', 'pipe'] }
    );
    copyFileSync(shot, job.out);
    made += 1;
  }
} finally {
  rmSync(work, { recursive: true, force: true });
}

console.log(`og/stati и разделы: ${made} новых из ${jobs.length}.`);
