import { execSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE_URL } from './site.config.mjs';

// Даты статей для lastmod в sitemap: читаем frontmatter напрямую.
// Дата у статьи одна на все языки — она лежит в оригинале (русском для /stati/,
// английском для остальных), в переводах полей с датами нет.
function frontDate(file) {
  const src = readFileSync(file, 'utf8');
  const pub = src.match(/^pubDate:\s*"([\d-]+)"/m)?.[1];
  const upd = src.match(/^updated:\s*"([\d-]+)"/m)?.[1];
  return upd ?? pub;
}

const artDates = {};

for (const f of readdirSync('./src/content/articles').filter((f) => f.endsWith('.md'))) {
  artDates[`/stati/${f.replace('.md', '')}/`] = frontDate(`./src/content/articles/${f}`);
}

// Английские статьи и все переводы: слаг общий, дата берётся из английского
// оригинала. Без этого 2880 страниц уходили в sitemap вообще без lastmod,
// и поисковик не понимал, что на них поменялось.
const i18nLangs = readdirSync('./src/content/articles_i18n', { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

for (const f of readdirSync('./src/content/articles_en').filter((f) => f.endsWith('.md'))) {
  const slug = f.replace('.md', '');
  const d = frontDate(`./src/content/articles_en/${f}`);
  artDates[`/en/articles/${slug}/`] = d;
  for (const lang of i18nLangs) {
    if (existsSync(`./src/content/articles_i18n/${lang}/${f}`)) {
      artDates[`/${lang}/articles/${slug}/`] = d;
    }
  }
}

/** Самая свежая дата среди статей — для списков статей. */
const newestArticle = Object.values(artDates)
  .filter(Boolean)
  .sort()
  .at(-1);

for (const lang of ['ru', 'en', ...i18nLangs]) {
  artDates[lang === 'ru' ? '/stati/' : `/${lang}/articles/`] = newestArticle;
}

// Раздел по узлу меняется вместе со своими статьями, поэтому дата у него —
// самая свежая в разделе, а не по сайту. Привязку статьи к разделу берём из
// того же модуля, что и страницы: дублировать правила в конфиге значит
// однажды разойтись с ними.
const { HUBS, hubForArticle } = await import('./src/data/hubs.ts');
const { hubEn } = await import('./src/data/hubs_en.ts');

const newestInHub = {};
for (const f of readdirSync('./src/content/articles').filter((f) => f.endsWith('.md'))) {
  const ru = f.replace('.md', '');
  const d = artDates[`/stati/${ru}/`];
  if (!d) continue;
  const h = hubForArticle(ru).slug;
  if (!newestInHub[h] || d > newestInHub[h]) newestInHub[h] = d;
}

for (const hub of HUBS) {
  const d = newestInHub[hub.slug];
  if (!d) continue;
  artDates[`/uzly/${hub.slug}/`] = d;
  for (const lang of ['en', ...i18nLangs]) {
    artDates[`/${lang}/parts/${hubEn(hub).slug}/`] = d;
  }
}

// Дата последнего изменения файла по git — честный lastmod
// для страниц вне коллекции статей.
function gitDate(file) {
  if (!existsSync(file)) return undefined;
  try {
    const out = execSync(`git log -1 --format=%cI -- "${file}"`, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return out || undefined;
  } catch {
    return undefined;
  }
}

const { SYMPTOM_SLUGS, hasSymptoms } = await import('./src/data/types.ts');
const { LANGS } = await import('./src/i18n/index.ts');
/** Языки, на которых разборы симптомов собираются (у русского свои адреса). */
const symptomLangs = LANGS.filter((l) => l !== 'ru' && hasSymptoms(l));

const staticDates = {
  '/': gitDate('src/pages/index.astro'),
  '/stati/': gitDate('src/pages/stati/index.astro'),
  '/simptomy/': gitDate('src/pages/simptomy/index.astro'),
  '/kak-eto-rabotaet/': gitDate('src/pages/kak-eto-rabotaet.astro'),
  '/politika/': gitDate('src/pages/politika.astro'),
  ...Object.fromEntries(
    readdirSync('./src/data/symptoms')
      .filter((f) => f.endsWith('.ts'))
      .flatMap((f) => {
        const ru = f.replace('.ts', '');
        // Разбор меняется вместе со своими данными — дата у всех языков общая.
        // Переводы живут по английскому слагу и до правки оставались без даты.
        const d = gitDate(`src/data/symptoms/${f}`);
        const en = SYMPTOM_SLUGS[ru];
        return [
          [`/simptomy/${ru}/`, d],
          ...(en ? symptomLangs.map((l) => [`/${l}/symptoms/${en}/`, d]) : []),
        ];
      })
  ),
  // Переводы служебных страниц: у русских дата есть, у остальных не было.
  ...Object.fromEntries(
    symptomLangs.flatMap((l) => [
      [`/${l}/`, gitDate('src/pages/[lang]/index.astro')],
      [`/${l}/how-it-works/`, gitDate('src/pages/[lang]/how-it-works.astro')],
      [`/${l}/privacy/`, gitDate('src/pages/[lang]/privacy.astro')],
      [`/${l}/symptoms/`, gitDate('src/pages/[lang]/symptoms/index.astro')],
    ])
  ),
};

export default defineConfig({
  site: SITE_URL,
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/analitika'),
      serialize: (item) => {
        const path = new URL(item.url).pathname;
        const d = artDates[path];
        if (d) item.lastmod = new Date(`${d}T12:00:00Z`).toISOString();
        else if (staticDates[path]) item.lastmod = new Date(staticDates[path]).toISOString();
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    // Дерево решений импортируется из ../shared за пределами корня сайта.
    server: { fs: { allow: ['..'] } },
  },
});
