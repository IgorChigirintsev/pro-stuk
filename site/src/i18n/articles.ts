/**
 * Подписи вокруг статей и разделов по узлам. Отдельно от общего словаря сайта:
 * этот раздел существует только на двух языках — русском (оригинал) и
 * английском (pSEO), — и тащить его в остальные двенадцать незачем.
 */
export interface ArticleUi {
  /** Крошки и заголовки списков. */
  articles: string;
  sections: string;
  related: string;
  toc: string;
  faq: string;
  sources: string;
  scheme: string;
  updated: string;
  /** «Всё о разделе «Двигатель» →» — {hub} подставляется. */
  allInHub: string;
  allArticles: string;
  inThisSection: string;
  symptomsH2: string;
  /** Хаб раздела: счётчик и заголовки блоков. */
  hubCount: string;
  hubQuizH2: string;
  hubQuizSub: string;
  hubOther: string;
  /** Список статей раздела и страница со всеми статьями. */
  indexTitle: string;
  indexDescription: string;
  indexH1: string;
  indexSub: string;
  months: string[];
  /** Подпись к карте звука: где искать источник. Ключ — слаг раздела. */
  zones: Record<string, string>;
}

export const ARTICLE_UI: Record<string, ArticleUi> = {
  ru: {
    articles: 'Статьи',
    sections: 'Разделы',
    related: 'Похожие статьи',
    toc: 'Содержание',
    faq: 'Частые вопросы',
    sources: 'Источники',
    scheme: 'Схема',
    updated: 'Обновлено',
    allInHub: 'Все о разделе «{hub}» →',
    allArticles: 'Все статьи →',
    inThisSection: 'Все статьи раздела',
    symptomsH2: 'Симптомы по звуку',
    hubCount: '{n} разборов в разделе',
    hubQuizH2: 'Определить звук по вопросам',
    hubQuizSub: 'Интерактивное дерево диагностики: несколько вопросов — и круг причин сужается.',
    hubOther: 'Другие разделы',
    indexTitle: 'Статьи о звуках автомобиля | Стук',
    indexDescription:
      'Разборы автомобильных звуков: стук, скрип, гул, вой и дребезг. Признаки на слух, самопроверки и честная оценка срочности.',
    indexH1: 'Статьи',
    indexSub: 'Разборы по звукам и узлам: что означает звук, что проверить самому и насколько это срочно.',
    months: [
      'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
    ],
    zones: {
      dvigatel: 'моторный отсек',
      podveska: 'подвеска, зона колеса',
      tormoza: 'тормозной механизм колеса',
      transmissiya: 'трансмиссия, под днищем',
      vyhlop: 'выхлопная система, вдоль днища к корме',
      salon: 'салон',
    },
  },
  en: {
    articles: 'Articles',
    sections: 'Sections',
    related: 'Related articles',
    toc: 'Contents',
    faq: 'Common questions',
    sources: 'Sources',
    scheme: 'Diagram',
    updated: 'Updated',
    allInHub: 'Everything about {hub} →',
    allArticles: 'All articles →',
    inThisSection: 'All articles in this section',
    symptomsH2: 'Symptoms by sound',
    hubCount: '{n} guides in this section',
    hubQuizH2: 'Narrow the sound down by questions',
    hubQuizSub:
      'An interactive diagnosis tree: a few questions and the list of causes gets much shorter.',
    hubOther: 'Other sections',
    indexTitle: 'Articles about car noises | Stuk',
    indexDescription:
      'Guides to car noises: knocking, squealing, humming, whining and rattling. What each sound means, what you can check yourself and how urgent it is.',
    indexH1: 'Articles',
    indexSub:
      'Guides by sound and by part: what the noise means, what you can check yourself and how urgent it is.',
    months: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ],
    zones: {
      dvigatel: 'engine bay',
      podveska: 'suspension, around the wheel',
      tormoza: 'wheel brake assembly',
      transmissiya: 'transmission, under the floor',
      vyhlop: 'exhaust system, along the floor to the rear',
      salon: 'cabin',
    },
  },
};

/** Адреса раздела статей на каждом языке: русский живёт в корне, остальные под префиксом. */
export const articlesBase = (lang: string) => (lang === 'ru' ? '/stati' : `/${lang}/articles`);
export const hubsBase = (lang: string) => (lang === 'ru' ? '/uzly' : `/${lang}/parts`);

export function fmtDate(iso: string, lang: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  const month = ARTICLE_UI[lang]?.months[(m ?? 1) - 1] ?? '';
  return lang === 'ru' ? `${d} ${month} ${y}` : `${month} ${d}, ${y}`;
}
