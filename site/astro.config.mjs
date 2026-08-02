import { readFileSync, readdirSync } from 'node:fs';
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
