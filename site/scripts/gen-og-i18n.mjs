/**
 * Картинки для соцсетей на остальных языках: по одной на статью и на раздел.
 *
 * Макет тот же, что у русских og/stati/*.png и английских og/en/*.png — иначе
 * один сайт выглядел бы в мессенджерах как несколько разных. Схема берётся та
 * же, что стоит в самой статье. Отличаются только шрифт под письменность и
 * направление текста у арабского.
 *
 *   node --experimental-strip-types scripts/gen-og-i18n.mjs [lang ...] [--force] [-j N]
 *
 * Без аргументов — все языки, все статьи и разделы. Готовые файлы
 * пропускаются, если не передан --force. Результат: public/og/<lang>/<slug>.png
 * и public/og/<lang>/parts/<slug>.png, 1200×630.
 */
import { execFile } from 'node:child_process';
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { cpus, tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

import sharp from 'sharp';

import { SITE_URL } from '../site.config.mjs';
import { HUBS, hubForArticle } from '../src/data/hubs.ts';
import { schemaForArticle } from '../src/data/schemas.ts';

const run = promisify(execFile);

const CHROME = process.env.CHROME ?? 'google-chrome';
const publicDir = fileURLToPath(new URL('../public/', import.meta.url));
const enDir = fileURLToPath(new URL('../src/content/articles_en/', import.meta.url));
const i18nDir = fileURLToPath(new URL('../src/content/articles_i18n/', import.meta.url));
const hubsTrDir = fileURLToPath(new URL('../src/data/hubs_i18n/', import.meta.url));
const fontsDir = fileURLToPath(
  new URL('../node_modules/@fontsource-variable/manrope/files/', import.meta.url)
);
const domain = SITE_URL.replace(/^https?:\/\//, '');

// Английский слаг раздела: адрес картинки раздела совпадает с адресом страницы.
const hubsEnSrc = readFileSync(new URL('../src/data/hubs_en.ts', import.meta.url), 'utf8');
const HUB_EN_SLUG = Object.fromEntries(
  [...hubsEnSrc.matchAll(/^ {2}([a-z-]+): \{\n\s*slug: '([^']+)'/gm)].map(([, ru, slug]) => [
    ru,
    slug,
  ])
);

/**
 * Шрифт под письменность. Manrope покрывает латиницу с расширением — этого
 * хватает польскому и турецкому. Для остальных письменностей берём Noto из
 * системы: другого начертания той же гарнитуры не существует.
 */
const FONT = {
  ar: "'Noto Sans Arabic UI', 'Noto Sans Arabic'",
  ja: "'Noto Sans CJK JP'",
  ko: "'Noto Sans CJK KR'",
  zh: "'Noto Sans CJK SC'",
};
const LATIN = "'Manrope Variable'";
/** Иероглиф несёт больше смысла, чем буква: тех же слов меньше, кегль крупнее. */
const DENSE = new Set(['ja', 'ko', 'zh']);

const svg = (key) => readFileSync(join(publicDir, `${key}.svg`), 'utf8');

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Ступени кегля: у плотных письменностей строка короче при том же смысле. */
function headlineSize(text, lang) {
  const len = text.length;
  if (DENSE.has(lang)) {
    if (len > 34) return 46;
    if (len > 26) return 52;
    if (len > 18) return 60;
    return 66;
  }
  if (len > 64) return 44;
  if (len > 50) return 50;
  if (len > 38) return 58;
  return 66;
}

function html({ title, kicker, scheme, lang }) {
  const rtl = lang === 'ar';
  const family = FONT[lang] ?? LATIN;
  // Manrope подключаем всегда: латинские вставки вроде «Stuk» и домена должны
  // выглядеть одинаково на всех языках.
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
  * { margin: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; padding: 48px 72px 0; background: #ffffff; color: #16232e;
    font-family: ${family}, ${LATIN}, sans-serif; font-feature-settings: normal;
    display: flex; flex-direction: column;
  }
  .brand { display: flex; align-items: center; gap: 22px; }
  .mark { width: 84px; height: 84px; border-radius: 22px; display: block; }
  .name { font-family: ${LATIN}, sans-serif; font-size: 34px; font-weight: 800; letter-spacing: -0.01em; }
  main { flex: 1 1 auto; display: flex; align-items: center; gap: 56px; padding-bottom: 60px; }
  .col { flex: 1 1 0; min-width: 0; }
  h1 {
    font-size: ${headlineSize(title, lang)}px; line-height: ${DENSE.has(lang) ? 1.28 : 1.14};
    font-weight: 800; letter-spacing: ${DENSE.has(lang) ? 'normal' : '-0.02em'}; text-wrap: balance;
  }
  .kicker {
    margin-top: 28px; font-size: 26px; color: #5c6b78;
    font-family: ${LATIN}, sans-serif; direction: ltr; ${rtl ? 'text-align: right;' : ''}
  }
  .art {
    flex: 0 0 400px; background: #f4f7f9; border-radius: 24px; padding: 24px 20px;
    display: flex; align-items: center; justify-content: center;
  }
  .art > svg { width: 360px; height: auto; display: block; }
  .bar { position: fixed; left: 0; right: 0; bottom: 0; height: 14px; background: #0e7c7b; }
</style>
<div class="brand"><img class="mark" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAYAAAB/HSuDAAAdQ0lEQVR4nO3dwVbbyBZAUectxuGDY0bww3xB3qCb7nQSgo1VqpLP3tNAXAMto3tKLn/5ev72/QQAAADctf/NXgAAAAAwngAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAwMPsBQAA470+v3z4M49P5x1WAgDM8uXr+dv32YsAAMa4ZPD/mRAAAPdJAACA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gAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQIAAAAAAAAECAAAAAAQIAAAAABAgAAAAAECAAAAAAAABAgAAAAAECAAAAAAQIAAAAABAgAAAAAAAAQIAAAAABAgAAAAAECAAAAAAQMD/ARw4JZ0oHYl4AAAAAElFTkSuQmCC" alt=""><div class="name">Pro-Stuk</div></div>
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
const jIdx = args.indexOf('-j');
const jobsN = jIdx >= 0 ? Number(args[jIdx + 1]) : Math.max(2, Math.min(8, cpus().length - 2));
const wanted = args.filter((a, i) => a !== '--force' && a !== '-j' && i !== jIdx + 1);

/** Схема статьи — та же, что на странице: узел, если он опознан, иначе раздел. */
const schemaKey = (ruSlug) => {
  const hit = schemaForArticle(ruSlug);
  return hit ? `shemy/${hit.file}` : `uzly/${hubForArticle(ruSlug).slug}`;
};

/** Русский слаг статьи по английскому: нужен для выбора схемы. */
const ruBySlug = Object.fromEntries(
  readdirSync(enDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const src = readFileSync(join(enDir, f), 'utf8');
      return [f.replace(/\.md$/, ''), src.match(/^ru:[ \t]*["'](.+?)["'][ \t]*$/m)?.[1] ?? ''];
    })
);

const langs = readdirSync(i18nDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .filter((l) => (wanted.length ? wanted.includes(l) : true));

/** Заголовки разделов на языке: берём h1 из модуля переводов. */
function hubTitles(lang) {
  const file = join(hubsTrDir, `${lang}.ts`);
  if (!existsSync(file)) return {};
  const src = readFileSync(file, 'utf8');
  return Object.fromEntries(
    [...src.matchAll(/^ {2}([a-z-]+): \{\n\s*h1: '((?:[^'\\]|\\.)*)'/gm)].map(([, ru, h1]) => [
      ru,
      h1.replace(/\\'/g, "'"),
    ])
  );
}

const jobs = [];
for (const lang of langs) {
  const dir = join(i18nDir, lang);
  for (const f of readdirSync(dir).filter((f) => f.endsWith('.md'))) {
    const slug = f.replace(/\.md$/, '');
    const title = readFileSync(join(dir, f), 'utf8').match(
      /^title:[ \t]*["'](.+?)["'][ \t]*$/m
    )?.[1];
    if (!title) continue;
    jobs.push({
      out: join(publicDir, 'og', lang, `${slug}.png`),
      lang,
      title,
      kicker: domain,
      key: schemaKey(ruBySlug[slug] ?? ''),
    });
  }
  const titles = hubTitles(lang);
  for (const hub of HUBS) {
    const h1 = titles[hub.slug];
    if (!h1) continue;
    jobs.push({
      out: join(publicDir, 'og', lang, 'parts', `${HUB_EN_SLUG[hub.slug]}.png`),
      lang,
      title: h1,
      kicker: domain,
      key: `uzly/${hub.slug}`,
    });
  }
}

for (const lang of langs) {
  mkdirSync(join(publicDir, 'og', lang, 'parts'), { recursive: true });
}

const todo = jobs.filter((j) => force || !existsSync(j.out));
console.log(`og i18n: к отрисовке ${todo.length} из ${jobs.length}, потоков ${jobsN}.`);

const work = mkdtempSync(join(tmpdir(), 'stuk-og-i18n-'));
let made = 0;
let failed = 0;

async function render(job, slot) {
  const page = join(work, `page-${slot}.html`);
  const shot = join(work, `shot-${slot}.png`);
  writeFileSync(page, html({ title: job.title, kicker: job.kicker, scheme: svg(job.key), lang: job.lang }));
  await run(
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
    { maxBuffer: 1 << 24 }
  );
  // Палитра вместо полного цвета: макет плоский, на глаз разницы нет,
  // а 2880 файлов иначе весят под 150 МБ.
  await sharp(shot).png({ palette: true, quality: 90, effort: 7 }).toFile(job.out);
}

try {
  let i = 0;
  await Promise.all(
    Array.from({ length: jobsN }, async (_, slot) => {
      for (;;) {
        const job = todo[i++];
        if (!job) return;
        try {
          await render(job, slot);
          made += 1;
          if (made % 100 === 0) console.log(`  ${made}/${todo.length}`);
        } catch (e) {
          failed += 1;
          console.error(`  ошибка: ${job.out}: ${String(e).slice(0, 120)}`);
        }
      }
    })
  );
} finally {
  rmSync(work, { recursive: true, force: true });
}

console.log(`og i18n: ${made} новых, ошибок ${failed}.`);
if (failed) process.exit(1);
