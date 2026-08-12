import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Статьи pSEO: markdown + структурированный frontmatter.
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),          // H1 = поисковый запрос
    metaTitle: z.string().max(70),
    description: z.string().min(100).max(180),
    pubDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    /** Слаги похожих статей для левой карточки и перелинковки. */
    related: z.array(z.string()).default([]),
    /** Частые вопросы в конце статьи + FAQPage schema. */
    faq: z.array(z.object({ q: z.string(), a: z.string() })).min(3),
    /** Внешние авторитетные источники. */
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).default([]),
  }),
});

// Английские версии тех же статей: собственные слаги (их читает поиск),
// ссылка на русский оригинал в поле ru — по ней строится hreflang и перелинковка.
const articlesEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles_en' }),
  schema: z.object({
    ru: z.string(),
    title: z.string(),
    metaTitle: z.string().max(70),
    description: z.string().min(100).max(180),
    pubDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    /** Слаги похожих английских статей. */
    related: z.array(z.string()).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).min(3),
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).default([]),
  }),
});

export const collections = { articles, articlesEn };
