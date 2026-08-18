/** Набор строк сайта. Один и тот же на каждом языке — полноту стережёт
 *  scripts/check-i18n.mjs: пропущенный ключ роняет сборку, а не выходит
 *  к человеку пустым местом. */
export interface Dict {
  /** Название приложения на этом языке: кириллическое «Pro-Stuk» узнаётся не всюду. */
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
    /** Когда разборы уже переведены, а статьи ещё нет. */
    ruArticles: string;
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
  /** Опросник на странице: подписи вокруг самого дерева вопросов. */
  quiz: {
    h2: string;
    sub: string;
    urgOk: string;
    urgWarn: string;
    urgStop: string;
    back: string;
    restart: string;
    cta: string;
    schemaMarked: string;
    schemaWhole: string;
  };
  /** Раздел «Симптомы по звуку»: заголовки и подписи вокруг разборов.
   *  Сами разборы лежат отдельно — в src/data/symptoms_i18n/. */
  symptoms: {
    indexTitle: string;
    indexDescription: string;
    h1: string;
    sub: string;
    gDvigatel: string;
    gDvizhenie: string;
    gTormozaRul: string;
    gPodveska: string;
    causesH2: string;
    thCause: string;
    thLikelihood: string;
    thDanger: string;
    canRideH2: string;
    checksH2: string;
    quizH2: string;
    quizSub: string;
    appHelpH2: string;
    faqH2: string;
    lightOk: string;
    lightWarn: string;
    lightStop: string;
    mapTitle: string;
    mapOk: string;
    mapWarn: string;
    mapStop: string;
    zoneDvigatel: string;
    zoneDvizhenie: string;
    zoneTormoza: string;
    zonePodveska: string;
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
    /** «Обновлено» — подпись к дате из PRIVACY_UPDATED. */
    updatedLabel: string;
    intro: string;
    items: { strong: string; text: string }[];
    outro: string;
    contactTitle: string;
    /** Заканчивается двоеточием: следом подставляется ссылка на почту. */
    contactText: string;
    changes: string;
  };
  /** Надпись на картинке для соцсетей: её видят до перехода на сайт.
   *  Короткая — длинная не влезает в 1200×630 (см. scripts/gen-og.mjs). */
  og: {
    tagline: string;
  };
  /** Страница 404. Единственная страница сайта, которую собираем сразу на всех
   *  языках: сервер отдаёт её по любому несуществующему адресу, и заранее
   *  неизвестно, на каком языке был бы этот адрес. */
  notFound: {
    title: string;
    description: string;
    h1: string;
    text: string;
    /** Кнопка на главную. Ссылку на разборы подписываем symptoms.h1. */
    home: string;
  };
}
