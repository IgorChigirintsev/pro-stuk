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
