/** Набор строк сайта. Один и тот же на каждом языке — полноту стережёт
 *  scripts/check-i18n.mjs: пропущенный ключ роняет сборку, а не выходит
 *  к человеку пустым местом. */
export interface Dict {
  /** Название приложения на этом языке: кириллическое «Стук» узнаётся не всюду. */
  brand: string;
  nav: {
    symptoms: string;
    how: string;
    articles: string;
    analytics: string;
    lang: string;
  };
  footer: {
    disclaimer: string;
    how: string;
    privacy: string;
    ruOnly: string;
  };
  home: {
    title: string;
    description: string;
    schemaDescription: string;
    h1: string;
    sub: string;
    cta: string;
    ctaNote: string;
    howH2: string;
    steps: { title: string; text: string }[];
    faqH2: string;
    faq: { q: string; a: string }[];
  };
  download: {
    h2: string;
    sub: string;
    btn: string;
    /** Подпись под кнопкой: {version}, {size}, {date}. */
    meta: string;
    installH: string;
    steps: string[];
    playNote: string;
  };
  how: {
    title: string;
    description: string;
    schemaName: string;
    h1: string;
    formH2: string;
    formP: string;
    recH2: string;
    recP: string[];
    probH2: string;
    probP: string[];
    dataH2: string;
    dataP: string;
    dataLink: string;
    dataTail: string;
  };
  privacy: {
    title: string;
    description: string;
    h1: string;
    intro: string;
    items: { strong: string; text: string }[];
    outro: string;
  };
}
