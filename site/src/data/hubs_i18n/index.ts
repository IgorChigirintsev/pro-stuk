import { HUBS, type Hub } from '../hubs';
import { hubEn } from '../hubs_en';

/**
 * Тексты разделов на языках кроме русского и английского.
 *
 * Слаг страницы у всех нерусских языков общий — английский, как и у разборов
 * симптомов: одна карта адресов вместо двенадцати. Переводится только текст.
 */
export interface HubText {
  h1: string;
  short: string;
  metaTitle: string;
  description: string;
  intro: string[];
}

const files = import.meta.glob<Record<string, Record<string, HubText>>>('./*.ts', { eager: true });

export const HUBS_TR: Record<string, Record<string, HubText>> = {};
for (const [path, mod] of Object.entries(files)) {
  const lang = path.match(/([a-z]{2})\.ts$/)?.[1];
  if (!lang || lang === 'index') continue;
  const hubs = mod[lang];
  if (hubs) HUBS_TR[lang] = hubs;
}

/** Языки, на которых разделы уже названы: без них хаб собирать нечем. */
export const hasHubs = (lang: string) => lang === 'ru' || lang === 'en' || lang in HUBS_TR;

/** Текст раздела на языке страницы вместе с общим для всех языков слагом. */
export function hubText(lang: string, hub: Hub): HubText & { slug: string } {
  if (lang === 'ru') {
    const { h1, short, metaTitle, description, intro } = hub;
    return { slug: hub.slug, h1, short, metaTitle, description, intro };
  }
  const en = hubEn(hub);
  if (lang === 'en') return en;
  const tr = HUBS_TR[lang]?.[hub.slug];
  if (!tr) throw new Error(`Нет текста раздела «${hub.slug}» на языке «${lang}»`);
  return { ...tr, slug: en.slug };
}

/** Слаг раздела по языку: у русского свой, у остальных — английский. */
export const hubSlug = (lang: string, hub: Hub) =>
  lang === 'ru' ? hub.slug : hubEn(hub).slug;

/** Раздел по слагу страницы на этом языке. */
export const hubBySlug = (lang: string, slug: string): Hub | undefined =>
  HUBS.find((h) => hubSlug(lang, h) === slug);
