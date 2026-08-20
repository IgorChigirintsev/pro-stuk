import type { Dict } from './types';
import { SYMPTOM_SLUGS, hasSymptoms } from '../data/types';
import { ru } from './ru';
import { en } from './en';
import { de } from './de';
import { es } from './es';
import { fr } from './fr';
import { pt } from './pt';
import { it } from './it';
import { pl } from './pl';
import { tr } from './tr';
import { nl } from './nl';
import { zh } from './zh';
import { ja } from './ja';
import { ko } from './ko';
import { ar } from './ar';

/**
 * Языки сайта. Русский живёт в корне (`/`, `/politika/`), остальные — в своём
 * префиксе (`/de/`, `/de/privacy/`): переносить 270 проиндексированных русских
 * адресов ради симметрии было бы дороже, чем оставить их на месте.
 */
export const DEFAULT_LANG = 'ru';

/** Порядок как в приложении: он же порядок в переключателе. */
export const LANGS = [
  'ru', 'en', 'de', 'es', 'fr', 'pt', 'it', 'pl', 'tr', 'nl', 'zh', 'ja', 'ko', 'ar',
] as const;

export type Lang = (typeof LANGS)[number];

/** Языки с собственным префиксом в адресе — все, кроме русского. */
export const PREFIXED = LANGS.filter((l) => l !== DEFAULT_LANG);

/** Названия на самих языках: так их узнают без флагов и без перевода. */
export const LANG_NAMES: Record<Lang, string> = {
  ru: 'Русский', en: 'English', de: 'Deutsch', es: 'Español', fr: 'Français',
  pt: 'Português', it: 'Italiano', pl: 'Polski', tr: 'Türkçe', nl: 'Nederlands',
  zh: '中文', ja: '日本語', ko: '한국어', ar: 'العربية',
};

/** Единственный язык сайта с письмом справа налево. */
export const RTL: readonly string[] = ['ar'];

/** Для og:locale — язык плюс основная страна, где на нём говорят. */
export const OG_LOCALE: Record<Lang, string> = {
  ru: 'ru_RU', en: 'en_US', de: 'de_DE', es: 'es_ES', fr: 'fr_FR',
  pt: 'pt_BR', it: 'it_IT', pl: 'pl_PL', tr: 'tr_TR', nl: 'nl_NL',
  zh: 'zh_CN', ja: 'ja_JP', ko: 'ko_KR', ar: 'ar_AR',
};

/**
 * Страна → ближайший поддерживаемый язык. Копия таблицы из приложения
 * (lib/l10n/device_locale.dart): язык на сайте и в приложении должен
 * определяться одинаково, иначе человек увидит две разные версии одного текста.
 */
export const COUNTRY_TO_LANG: Record<string, Lang> = {
  RU: 'ru', KZ: 'ru', BY: 'ru', UA: 'ru', KG: 'ru',
  TJ: 'ru', TM: 'ru', UZ: 'ru', MD: 'ru', AM: 'ru',
  AZ: 'ru', GE: 'ru',
  CN: 'zh', TW: 'zh', HK: 'zh', MO: 'zh', SG: 'zh',
  JP: 'ja',
  KR: 'ko', KP: 'ko',
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es',
  PE: 'es', VE: 'es', EC: 'es', GT: 'es', CU: 'es',
  BO: 'es', DO: 'es', HN: 'es', PY: 'es', SV: 'es',
  NI: 'es', CR: 'es', PA: 'es', UY: 'es', PR: 'es',
  BR: 'pt', PT: 'pt', AO: 'pt', MZ: 'pt',
  DE: 'de', AT: 'de', LI: 'de', LU: 'de',
  FR: 'fr', MC: 'fr', BJ: 'fr', BF: 'fr', CI: 'fr',
  SN: 'fr', ML: 'fr', NE: 'fr', GN: 'fr', TG: 'fr',
  IT: 'it', VA: 'it', SM: 'it',
  TR: 'tr', CY: 'tr',
  SA: 'ar', AE: 'ar', EG: 'ar', IQ: 'ar', DZ: 'ar',
  SD: 'ar', MA: 'ar', YE: 'ar', SY: 'ar', LY: 'ar',
  TN: 'ar', JO: 'ar', KW: 'ar', LB: 'ar', OM: 'ar',
  QA: 'ar', BH: 'ar',
  PL: 'pl',
  NL: 'nl', SR: 'nl', AW: 'nl',
};

/** Страницы, у которых есть версия на каждом языке. */
export type PageId = 'home' | 'how' | 'privacy' | 'symptoms' | 'deleteAccount';

/** Русские адреса исторические, у остальных языков — общие английские слаги. */
const ROUTES: Record<PageId, { ru: string; slug: string }> = {
  home: { ru: '/', slug: '' },
  how: { ru: '/kak-eto-rabotaet/', slug: 'how-it-works/' },
  privacy: { ru: '/politika/', slug: 'privacy/' },
  deleteAccount: { ru: '/udalenie-akkaunta/', slug: 'delete-account/' },
  symptoms: { ru: '/simptomy/', slug: 'symptoms/' },
};

export function pathFor(page: PageId, lang: string): string {
  if (lang === DEFAULT_LANG) return ROUTES[page].ru;
  return `/${lang}/${ROUTES[page].slug}`;
}

/** Карта «язык → адрес этой же страницы» для hreflang и переключателя. */
export function altsFor(page: PageId): Record<string, string> {
  const langs = page === 'symptoms' ? LANGS.filter(hasSymptoms) : LANGS;
  return Object.fromEntries(langs.map((l) => [l, pathFor(page, l)]));
}

/** Адрес разбора симптома: русский слаг в корне, английский — под префиксом.
 *  slug === null — сам раздел. */
export function symptomPath(slug: string | null, lang: string): string {
  if (!slug) return pathFor('symptoms', lang);
  if (lang === DEFAULT_LANG) return `/simptomy/${slug}/`;
  return `/${lang}/symptoms/${SYMPTOM_SLUGS[slug]}/`;
}

/** Альтернативы одного разбора — только языки, где он переведён целиком. */
export function symptomAlts(slug: string): Record<string, string> {
  return Object.fromEntries(
    LANGS.filter(hasSymptoms).map((l) => [l, symptomPath(slug, l)])
  );
}

const DICTS: Partial<Record<Lang, Dict>> = { ru, en, de, es, fr, pt, it, pl, tr, nl, zh, ja, ko, ar };

/**
 * Словарь языка. Цепочка та же, что в приложении: свой язык → английский →
 * русский. Недостающий ключ показывается на понятном большинству языке,
 * а не пустотой.
 */
export function t(lang: string): Dict {
  return DICTS[lang as Lang] ?? en;
}
