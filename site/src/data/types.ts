/** Контент одной симптом-страницы (§8.2 спеки). */
export interface SymptomPage {
  slug: string;
  /** H1 — поисковый запрос. */
  h1: string;
  metaTitle: string;
  description: string;
  group: 'dvigatel' | 'dvizhenie' | 'tormoza-rul' | 'podveska';
  /** Узел shared/tree.json, с которого стартует интерактивное дерево. */
  startNode: string;
  /** «Что это может быть» — вводные абзацы. */
  intro: string[];
  /** Таблица «Причина / Насколько вероятно / Опасность». */
  causes: { name: string; likelihood: string; urgency: 'ok' | 'warn' | 'stop' }[];
  /** «Можно ли ехать» — абзацы. */
  canRide: string[];
  /** «Что проверить самому» — безопасные проверки без разборки. */
  checks: string[];
  /** «Как поможет приложение» — один абзац без давления. */
  appHelp: string;
  /** Ровно 3 вопроса-ответа для Schema.org FAQPage. */
  faq: { q: string; a: string }[];
}

/** Перевод симптом-страницы: всё, кроме структуры — группа, слаг, узел дерева
 *  и уровни опасности берутся из русского оригинала и не переводятся. */
export interface SymptomTr {
  h1: string;
  metaTitle: string;
  description: string;
  intro: string[];
  /** Строки в том же порядке, что в оригинале: опасность подставляется по нему. */
  causes: { name: string; likelihood: string }[];
  canRide: string[];
  checks: string[];
  appHelp: string;
  faq: { q: string; a: string }[];
}

export const GROUPS: Record<SymptomPage['group'], string> = {
  dvigatel: 'Двигатель',
  dvizhenie: 'Движение',
  'tormoza-rul': 'Тормоза и руль',
  podveska: 'Подвеска',
};

/** Реестр всех симптом-страниц. */
const modules = import.meta.glob<{ page: SymptomPage }>('./symptoms/*.ts', {
  eager: true,
});

export const SYMPTOMS: SymptomPage[] = Object.values(modules)
  .map((m) => m.page)
  .sort((a, b) => a.h1.localeCompare(b.h1, 'ru'));

/** Английские слаги для нерусских адресов: /de/symptoms/knocking-in-engine/.
 *  Транслит русского слага в немецком адресе не читается никем. */
export const SYMPTOM_SLUGS: Record<string, string> = {
  'gremit-pod-mashinoy': 'rattling-under-car',
  'gul-podshipnika-stupitsy': 'wheel-bearing-hum',
  'gul-pri-dvizhenii': 'humming-while-driving',
  'gul-pri-povorote': 'humming-when-turning',
  'hlopki-v-glushitele': 'exhaust-backfire',
  'shchelchki-pri-povorote-rulya': 'clicking-when-steering',
  'skrezhet-pri-tormozhenii': 'grinding-when-braking',
  'skrip-tormozov': 'squealing-brakes',
  'stuk-na-nerovnostyah': 'knocking-over-bumps',
  'stuk-pri-razgone': 'knocking-when-accelerating',
  'stuk-v-dvigatele-na-holodnuyu': 'engine-knock-when-cold',
  'stuk-v-dvigatele': 'knocking-in-engine',
  'stuk-v-podveske': 'knocking-in-suspension',
  'svist-pri-zapuske': 'squeal-on-startup',
  'svist-remnya': 'belt-squeal',
  'tikanie-dvigatelya': 'ticking-engine',
  'vibratsiya-na-holostyh': 'vibration-at-idle',
  'zvon-pri-razgone': 'pinging-when-accelerating',
};

/** Переводы симптом-страниц: по файлу на язык, слаг → перевод. */
const trModules = import.meta.glob<{ pages: Record<string, SymptomTr> }>(
  './symptoms_i18n/*.ts',
  { eager: true }
);

export const SYMPTOMS_TR: Record<string, Record<string, SymptomTr>> = Object.fromEntries(
  Object.entries(trModules).map(([path, m]) => [
    path.replace('./symptoms_i18n/', '').replace('.ts', ''),
    m.pages,
  ])
);

/** Язык получает раздел симптомов, только когда переведены все страницы:
 *  наполовину русский раздел хуже, чем его отсутствие. */
export function hasSymptoms(lang: string): boolean {
  if (lang === 'ru') return true;
  const tr = SYMPTOMS_TR[lang];
  return !!tr && SYMPTOMS.every((s) => tr[s.slug]);
}
