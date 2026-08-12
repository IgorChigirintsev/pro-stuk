/**
 * Картинки для соцсетей под каждую английскую статью.
 *
 * Тот же макет, что и у языковых og/<lang>.png, но вместо слогана — заголовок
 * статьи: превью ссылки в мессенджере тогда показывает, о чём именно материал.
 *
 *   node scripts/gen-og-articles-en.mjs [slug ...]
 *
 * Без аргументов — все статьи. Результат: public/og/en/<slug>.png, 1200×630.
 * Уже готовые картинки пропускаются, если не передан --force.
 */
import { execFileSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { SITE_URL } from '../site.config.mjs';

const CHROME = process.env.CHROME ?? 'google-chrome';
const publicDir = fileURLToPath(new URL('../public/', import.meta.url));
const outDir = join(publicDir, 'og/en');
const enDir = fileURLToPath(new URL('../src/content/articles_en/', import.meta.url));
const fontsDir = fileURLToPath(new URL('../node_modules/@fontsource-variable/manrope/files/', import.meta.url));
const domain = SITE_URL.replace(/^https?:\/\//, '');

const scheme = readFileSync(join(publicDir, 'uzly/dvigatel.svg'), 'utf8');

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Заголовки статей длиннее слогана, поэтому ступеней размера больше. */
function headlineSize(text) {
  const len = text.length;
  if (len > 62) return 42;
  if (len > 48) return 48;
  if (len > 36) return 56;
  return 64;
}

function html(title) {
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
    width: 1200px; height: 630px; display: flex; align-items: center; gap: 56px;
    padding: 0 72px; background: #ffffff; color: #16232e;
    font-family: 'Manrope Variable', sans-serif;
    font-feature-settings: normal;
  }
  .col { flex: 1 1 0; min-width: 0; }
  .brand { display: flex; align-items: center; gap: 16px; margin-bottom: 40px; }
  .mark { width: 44px; height: 44px; border-radius: 12px; background: #0e7c7b; }
  .name { font-size: 34px; font-weight: 800; letter-spacing: -0.01em; }
  h1 {
    font-size: ${headlineSize(title)}px; line-height: 1.15; font-weight: 800;
    letter-spacing: -0.02em; text-wrap: balance;
  }
  .domain { margin-top: 36px; font-size: 26px; color: #5c6b78; }
  .art { flex: 0 0 468px; }
  .art > svg { width: 468px; height: 281px; display: block; }
</style>
<div class="col">
  <div class="brand"><div class="mark"></div><div class="name">Stuk</div></div>
  <h1>${esc(title)}</h1>
  <div class="domain">${esc(domain)}</div>
</div>
<div class="art">${scheme}</div>
</html>`;
}

const args = process.argv.slice(2);
const force = args.includes('--force');
const wanted = args.filter((a) => a !== '--force');

const articles = readdirSync(enDir)
  .filter((f) => f.endsWith('.md'))
  .map((f) => {
    const src = readFileSync(join(enDir, f), 'utf8');
    return {
      id: f.replace(/\.md$/, ''),
      title: src.match(/^title:[ \t]*["'](.+?)["'][ \t]*$/m)?.[1] ?? '',
    };
  })
  .filter((a) => (wanted.length ? wanted.includes(a.id) : true));

mkdirSync(outDir, { recursive: true });

const work = mkdtempSync(join(tmpdir(), 'stuk-og-en-'));
let made = 0;
try {
  for (const a of articles) {
    const target = join(outDir, `${a.id}.png`);
    if (!force && existsSync(target)) continue;
    const page = join(work, 'page.html');
    const shot = join(work, 'shot.png');
    writeFileSync(page, html(a.title));
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
    copyFileSync(shot, target);
    made += 1;
  }
} finally {
  rmSync(work, { recursive: true, force: true });
}

console.log(`og/en: ${made} новых из ${articles.length}.`);
