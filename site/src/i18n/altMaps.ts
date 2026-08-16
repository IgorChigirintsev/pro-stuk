/**
 * Карты «язык → адрес» для статей, списков статей и разделов по узлам.
 *
 * Hreflang работает только при взаимном подтверждении: если китайская статья
 * ссылается на английскую, а английская на китайскую — нет, Google отбрасывает
 * связку целиком. Поэтому карту переводов строит одна функция, а все шаблоны
 * (русский, английский и остальные языки) берут её отсюда, а не собирают
 * каждый свою.
 */
import { getCollection } from 'astro:content';

import { HUBS, hubForArticle, type Hub } from '../data/hubs';
import { hubEn } from '../data/hubs_en';
import { articlesBase, hubsBase } from './articles';

/** Языки статей кроме русского и английского: у тех свои маршруты. */
function otherLangs(langs: string[]): string[] {
  return langs.filter((l) => l !== 'ru' && l !== 'en');
}

/**
 * Какие языки есть у каждого английского слага.
 * Читает коллекцию один раз на страницу — вызывать в getStaticPaths или в
 * теле шаблона, результат кэшировать не нужно: Astro собирает статически.
 */
export async function langsBySlug(): Promise<Map<string, string[]>> {
  const tr = await getCollection('articlesI18n');
  const m = new Map<string, string[]>();
  for (const a of tr) {
    const [lang, slug] = a.id.split('/');
    if (!lang || !slug) continue;
    m.set(slug, [...(m.get(slug) ?? []), lang]);
  }
  return m;
}

/** Все языки, на которых есть хоть одна переведённая статья. */
export async function langsWithArticles(): Promise<string[]> {
  const tr = await getCollection('articlesI18n');
  const s = new Set<string>();
  for (const a of tr) {
    const lang = a.id.split('/')[0];
    if (lang) s.add(lang);
  }
  return [...s].sort();
}

/**
 * Карта переводов одной статьи.
 * @param enSlug общий английский слаг — он же слаг всех переводов
 * @param ruSlug слаг русского оригинала, он отличается
 * @param langs языки, на которые статья переведена
 */
export function articleAlts(
  enSlug: string,
  ruSlug: string | undefined,
  langs: string[]
): Record<string, string> {
  const alts: Record<string, string> = {};
  if (ruSlug) alts.ru = `/stati/${ruSlug}/`;
  alts.en = `/en/articles/${enSlug}/`;
  for (const l of otherLangs(langs)) alts[l] = `${articlesBase(l)}/${enSlug}/`;
  return alts;
}

/** Карта переводов списка статей. */
export function articleIndexAlts(langs: string[]): Record<string, string> {
  const alts: Record<string, string> = { ru: '/stati/', en: '/en/articles/' };
  for (const l of otherLangs(langs)) alts[l] = `${articlesBase(l)}/`;
  return alts;
}

/**
 * Карта переводов раздела по узлу. Слаг раздела переводится вместе с текстом,
 * поэтому адрес на каждом языке свой.
 * @param ruSlug слаг раздела по-русски — общий ключ
 * @param langs языки, на которых раздел непустой
 */
export function hubAlts(ruSlug: string, langs: string[]): Record<string, string> {
  const hub = HUBS.find((h) => h.slug === ruSlug) as Hub | undefined;
  if (!hub) return {};
  const slug = hubEn(hub).slug;
  const alts: Record<string, string> = {
    ru: `${hubsBase('ru')}/${ruSlug}/`,
    en: `${hubsBase('en')}/${slug}/`,
  };
  for (const l of otherLangs(langs)) alts[l] = `${hubsBase(l)}/${slug}/`;
  return alts;
}

/**
 * Языки, на которых раздел по узлу непустой. Раздел без статей не собирается,
 * и ссылаться на него нельзя — будет битый hreflang.
 */
export async function hubLangsBySlug(): Promise<Map<string, string[]>> {
  const tr = await getCollection('articlesI18n');
  const en = await getCollection('articlesEn');
  const ruOf = new Map(en.map((a) => [a.id, a.data.ru]));
  const m = new Map<string, Set<string>>();
  for (const a of tr) {
    const [lang, slug] = a.id.split('/');
    if (!lang || !slug) continue;
    const ru = ruOf.get(slug);
    if (!ru) continue;
    const hubSlugRu = hubForArticle(ru).slug;
    if (!m.has(hubSlugRu)) m.set(hubSlugRu, new Set());
    m.get(hubSlugRu)!.add(lang);
  }
  return new Map([...m].map(([k, v]) => [k, [...v].sort()]));
}
