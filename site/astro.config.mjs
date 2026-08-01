import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE_URL } from './site.config.mjs';

export default defineConfig({
  site: SITE_URL,
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    // Дерево решений импортируется из ../shared за пределами корня сайта.
    server: { fs: { allow: ['..'] } },
  },
});
