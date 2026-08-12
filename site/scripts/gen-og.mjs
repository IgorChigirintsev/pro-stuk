/**
 * Картинки для соцсетей — по одной на язык. Превью ссылки человек видит
 * раньше самого сайта, и кириллица в нём для немца или японца выглядит как
 * чужая ссылка, поэтому надпись берётся из словаря того же языка.
 *
 * Рисуем разметкой и снимаем headless-браузером: тот же шрифт, что на сайте,
 * и системные Noto для иероглифов и арабицы — раскладку строк считает браузер,
 * а не мы.
 *
 *   node --experimental-strip-types scripts/gen-og.mjs [lang ...]
 *
 * Без аргументов — все языки. Результат: public/og/<lang>.png, 1200×630.
 * public/og/default.png остаётся копией русской: на него ссылаются уже
 * разошедшиеся по мессенджерам ссылки.
 */
import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { SITE_URL } from '../site.config.mjs';

// index.ts тянет за собой модули без расширений в импортах — Node такие не
// открывает. Списки языков читаем из его текста, словари грузим поштучно.
const indexSrc = readFileSync(new URL('../src/i18n/index.ts', import.meta.url), 'utf8');
const listOf = (name) =>
  (indexSrc.match(new RegExp(`export const ${name}(?::[^=]+)? = \\[([^\\]]*)\\]`))?.[1] ?? '')
    .match(/'([a-z]{2})'/g)
    ?.map((s) => s.slice(1, -1)) ?? [];
const LANGS = listOf('LANGS');
const RTL = listOf('RTL');
const dict = async (lang) =>
  (await import(new URL(`../src/i18n/${lang}.ts`, import.meta.url).href))[lang];

const CHROME = process.env.CHROME ?? 'google-chrome';
const publicDir = fileURLToPath(new URL('../public/', import.meta.url));
const fontsDir = fileURLToPath(new URL('../node_modules/@fontsource-variable/manrope/files/', import.meta.url));
const domain = SITE_URL.replace(/^https?:\/\//, '');

/** Схема двигателя с хаба — она же на нынешней картинке, и менять её незачем. */
const scheme = readFileSync(join(publicDir, 'uzly/dvigatel.svg'), 'utf8');

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Иероглифы и арабица шире латиницы: без этого длинная строка вылезает за поле. */
function headlineSize(text, lang) {
  const wide = ['zh', 'ja', 'ko'].includes(lang);
  const len = text.length * (wide ? 1.8 : 1);
  if (len > 46) return 52;
  if (len > 34) return 60;
  return 68;
}

function html(lang, d) {
  const rtl = RTL.includes(lang);
  const size = headlineSize(d.og.tagline, lang);
  return `<!doctype html>
<html lang="${lang}" dir="${rtl ? 'rtl' : 'ltr'}">
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
  @font-face {
    font-family: 'Manrope Variable';
    src: url('file://${fontsDir}manrope-cyrillic-wght-normal.woff2') format('woff2');
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    font-weight: 200 800;
  }
  * { margin: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; display: flex; align-items: center; gap: 56px;
    padding: 0 72px; background: #ffffff; color: #16232e;
    font-family: 'Manrope Variable', 'Noto Sans CJK JP', 'Noto Sans Arabic', sans-serif;
    font-feature-settings: normal;
  }
  .col { flex: 1 1 0; min-width: 0; }
  .brand { display: flex; align-items: center; gap: 16px; margin-bottom: 40px; }
  .mark { width: 44px; height: 44px; border-radius: 12px; background: #0e7c7b; }
  .name { font-size: 34px; font-weight: 800; letter-spacing: -0.01em; }
  h1 {
    font-size: ${size}px; line-height: 1.15; font-weight: 800; letter-spacing: -0.02em;
    text-wrap: balance;
  }
  .domain { margin-top: 36px; font-size: 26px; color: #5c6b78; }
  /* Звуковая волна нарисована в самой схеме — второй такой же мотив не нужен. */
  .art { flex: 0 0 468px; }
  .art > svg { width: 468px; height: 281px; display: block; ${rtl ? 'transform: scaleX(-1);' : ''} }
</style>
<div class="col">
  <div class="brand"><div class="mark"></div><div class="name">${esc(d.brand)}</div></div>
  <h1>${esc(d.og.tagline)}</h1>
  <div class="domain">${esc(domain)}</div>
</div>
<div class="art">${scheme}</div>
</html>`;
}

const targets = process.argv.slice(2).length ? process.argv.slice(2) : LANGS;
const unknown = targets.filter((l) => !LANGS.includes(l));
if (unknown.length) {
  console.error(`Неизвестный язык: ${unknown.join(', ')}`);
  process.exit(1);
}

const work = mkdtempSync(join(tmpdir(), 'stuk-og-'));
try {
  for (const lang of targets) {
    const page = join(work, `${lang}.html`);
    const shot = join(work, `${lang}.png`);
    writeFileSync(page, html(lang, await dict(lang)));
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
    copyFileSync(shot, join(publicDir, `og/${lang}.png`));
    console.log(`og/${lang}.png`);
  }
  // Старые ссылки в мессенджерах всё ещё просят default.png.
  if (targets.includes('ru')) {
    copyFileSync(join(publicDir, 'og/ru.png'), join(publicDir, 'og/default.png'));
    console.log('og/default.png ← og/ru.png');
  }
} finally {
  rmSync(work, { recursive: true, force: true });
}
