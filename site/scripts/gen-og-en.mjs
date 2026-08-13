/**
 * Картинки для соцсетей английской версии: по одной на статью и на раздел.
 *
 * Макет тот же, что у русских og/stati/*.png и og/<раздел>.png — иначе один
 * сайт выглядел бы в мессенджерах как два разных. Схема берётся та же, что
 * стоит в самой статье: читатель видит в превью тот узел, о котором текст.
 *
 *   node --experimental-strip-types scripts/gen-og-en.mjs [slug ...] [--force]
 *
 * Без аргументов — все статьи и все разделы. Готовые файлы пропускаются,
 * если не передан --force. Результат: public/og/en/<slug>.png и
 * public/og/en/parts/<slug>.png, 1200×630.
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

// hubs_en.ts импортирует './hubs' без расширения — Node такой файл не откроет.
// Нужны только слаг и заголовок, поэтому читаем их из текста модуля.
const hubsEnSrc = readFileSync(new URL('../src/data/hubs_en.ts', import.meta.url), 'utf8');
const HUBS_EN = Object.fromEntries(
  [...hubsEnSrc.matchAll(/^ {2}([a-z-]+): \{\n\s*slug: '([^']+)',\n\s*h1: '([^']+)'/gm)].map(
    ([, ru, slug, h1]) => [ru, { slug, h1 }]
  )
);

const CHROME = process.env.CHROME ?? 'google-chrome';
const publicDir = fileURLToPath(new URL('../public/', import.meta.url));
const enDir = fileURLToPath(new URL('../src/content/articles_en/', import.meta.url));
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
<html lang="en" dir="ltr">
<meta charset="utf-8">
<style>
  @font-face {
    font-family: 'Manrope Variable';
    src: url('file://${fontsDir}manrope-latin-wght-normal.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+2000-206F, U+2122, U+2212;
    font-weight: 200 800;
  }
  @font-face {
    font-family: 'Manrope Variable';
    src: url('file://${fontsDir}manrope-latin-ext-wght-normal.woff2') format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+2C60-2C7F, U+A720-A7FF;
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
<div class="brand"><div class="mark"></div><div class="name">Stuk</div></div>
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
const schemaKey = (ruSlug) => {
  const hit = schemaForArticle(ruSlug);
  return hit ? `shemy/${hit.file}` : `uzly/${hubForArticle(ruSlug).slug}`;
};

const articles = readdirSync(enDir)
  .filter((f) => f.endsWith('.md'))
  .map((f) => {
    const src = readFileSync(join(enDir, f), 'utf8');
    const field = (k) => src.match(new RegExp(`^${k}:[ \\t]*["'](.+?)["'][ \\t]*$`, 'm'))?.[1] ?? '';
    return { id: f.replace(/\.md$/, ''), title: field('title'), ru: field('ru') };
  });

const jobs = [
  ...articles.map((a) => ({
    out: join(publicDir, 'og/en', `${a.id}.png`),
    id: a.id,
    title: a.title,
    kicker: domain,
    key: schemaKey(a.ru),
  })),
  ...HUBS.map((h) => ({
    out: join(publicDir, 'og/en/parts', `${HUBS_EN[h.slug].slug}.png`),
    id: HUBS_EN[h.slug].slug,
    title: HUBS_EN[h.slug].h1,
    kicker: `Section guide · ${domain}`,
    key: `uzly/${h.slug}`,
  })),
].filter((j) => (wanted.length ? wanted.includes(j.id) : true));

mkdirSync(join(publicDir, 'og/en/parts'), { recursive: true });

const work = mkdtempSync(join(tmpdir(), 'stuk-og-en-'));
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

console.log(`og/en: ${made} новых из ${jobs.length}.`);
