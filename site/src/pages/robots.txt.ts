// robots.txt генерируется из SITE_URL — домен остаётся в одной константе.
import type { APIRoute } from 'astro';
import { SITE_URL } from '../../site.config.mjs';

export const GET: APIRoute = () =>
  new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL.replace(/\/$/, '')}/sitemap-index.xml\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
