import { execSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE_URL } from './site.config.mjs';

// Даты статей для lastmod в sitemap: читаем frontmatter напрямую.
const artDates = Object.fromEntries(
  readdirSync('./src/content/articles')
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const src = readFileSync(`./src/content/articles/${f}`, 'utf8');
      const pub = src.match(/^pubDate:\s*"([\d-]+)"/m)?.[1];
      const upd = src.match(/^updated:\s*"([\d-]+)"/m)?.[1];
      return [`/stati/${f.replace('.md', '')}/`, upd ?? pub];
    })
);

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

const staticDates = {
  '/': gitDate('src/pages/index.astro'),
  '/stati/': gitDate('src/pages/stati/index.astro'),
  '/simptomy/': gitDate('src/pages/simptomy/index.astro'),
  '/kak-eto-rabotaet/': gitDate('src/pages/kak-eto-rabotaet.astro'),
  '/politika/': gitDate('src/pages/politika.astro'),
  ...Object.fromEntries(
    readdirSync('./src/data/symptoms')
      .filter((f) => f.endsWith('.ts'))
      .map((f) => [`/simptomy/${f.replace('.ts', '')}/`, gitDate(`src/data/symptoms/${f}`)])
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
