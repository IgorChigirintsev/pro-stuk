import { useEffect, useState } from 'react';
// Единое дерево решений: импорт на этапе сборки из shared/.
import treeData from '../../../shared/tree.json';

type TreeOption = { id: string; label: string; next: string };
type TreeNode = {
  type: 'question' | 'leaf';
  text?: string;
  options?: TreeOption[];
  top_cause?: string;
  alt_causes?: string[];
  urgency?: 'ok' | 'warn' | 'stop';
  explanation?: string;
};

/** Перевод одного узла: та же форма, что в приложении. */
type NodeTr = {
  text?: string;
  options?: Record<string, string>;
  top_cause?: string;
  alt_causes?: string[];
  explanation?: string;
};

const NODES = (treeData as { nodes: Record<string, TreeNode> }).nodes;

/**
 * Переводы дерева грузятся отдельным куском и только для нужного языка:
 * один язык — около 80 КБ, тащить все тринадцать в каждую страницу незачем.
 */
const TR_FILES = import.meta.glob<{ default: Record<string, NodeTr> }>(
  '../../../shared/tree_i18n/*.json'
);

/** Подписи вокруг дерева приходят со страницы — они уже на нужном языке. */
export type QuizUi = {
  urgOk: string;
  urgWarn: string;
  urgStop: string;
  back: string;
  restart: string;
  cta: string;
  schemaMarked: string;
  schemaWhole: string;
};

/**
 * Интерактивное дерево диагностики. startNode — узел, с которого стартует
 * страница (релевантная ветка симптома, не корень).
 */
import SchemaHighlight from './SchemaHighlight';
import { highlightFor } from '../data/schemaHighlight';

/** Единственный язык сайта справа налево: там «назад» показывает вправо. */
const RTL = ['ar'];

export default function TreeWidget({
  startNode,
  lang = 'ru',
  ui,
}: {
  startNode: string;
  lang?: string;
  ui: QuizUi;
}) {
  const [path, setPath] = useState<string[]>([startNode]);
  // null — перевод ещё не дочитан; на русском ждать нечего.
  const [tr, setTr] = useState<Record<string, NodeTr> | null>(lang === 'ru' ? {} : null);

  useEffect(() => {
    if (lang === 'ru') return;
    const load = TR_FILES[`../../../shared/tree_i18n/${lang}.json`];
    if (!load) {
      setTr({});
      return;
    }
    let alive = true;
    // Языка без перевода не бывает по сборке, но упасть в русский текст
    // всё равно честнее, чем показать пустой экран.
    load().then((m) => alive && setTr(m.default)).catch(() => alive && setTr({}));
    return () => {
      alive = false;
    };
  }, [lang]);

  const nodeId = path[path.length - 1]!;
  const node = NODES[nodeId];

  if (!node) return null;

  // Пока перевод в пути, показываем место под вопрос: подставлять русский
  // текст на японской странице нельзя, а прыгающая вёрстка раздражает.
  if (!tr) {
    return (
      <div className="min-h-56 animate-pulse rounded-card border border-line bg-surface p-5 sm:p-6" />
    );
  }

  const t = tr[nodeId] ?? {};
  const URGENCY = {
    ok: { verb: ui.urgOk, bg: 'bg-ok' },
    warn: { verb: ui.urgWarn, bg: 'bg-warn' },
    stop: { verb: ui.urgStop, bg: 'bg-stop' },
  } as const;

  const reset = () => setPath([startNode]);
  const back = () => setPath((p) => (p.length > 1 ? p.slice(0, -1) : p));

  return (
    <div
      className="rounded-card border border-line bg-surface p-5 sm:p-6"
      aria-live="polite"
    >
      {node.type === 'question' ? (
        <>
          <p className="text-l font-bold">{t.text ?? node.text}</p>
          <div className="mt-4 flex flex-col gap-3">
            {node.options!.map((o) => (
              <button
                key={o.id}
                type="button"
                onClick={() => setPath((p) => [...p, o.next])}
                className="min-h-14 cursor-pointer rounded-card border border-line bg-bg px-4 py-3 text-start text-base hover:border-accent"
              >
                {t.options?.[o.id] ?? o.label}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Текст на цветной плашке — только чистый белый и полужирный:
              на warn/ok обычный текст не проходит контраст WCAG. */}
          <div className={`rounded-card p-5 text-white ${URGENCY[node.urgency!].bg}`}>
            <p className="text-xl font-bold">{URGENCY[node.urgency!].verb}</p>
            <p className="mt-1 text-l font-bold">{t.top_cause ?? node.top_cause}</p>
          </div>
          {(t.explanation ?? node.explanation) && (
            <p className="mt-4 text-ink-soft">{t.explanation ?? node.explanation}</p>
          )}
          {(() => {
            // Схему подбираем по русскому тексту причин, даже когда на экране
            // перевод: правила сопоставления написаны по-русски, и переводить
            // их на тринадцать языков значило бы держать тринадцать копий.
            const hl = highlightFor([node.top_cause ?? '', ...(node.alt_causes ?? [])]);
            return hl ? (
              <SchemaHighlight schemaKey={hl.key} marks={hl.marks} lang={lang} ui={ui} />
            ) : null;
          })()}
          <a
            href="#skachat"
            className="mt-5 inline-block rounded-btn bg-accent px-6 py-3.5 font-semibold text-white no-underline hover:opacity-90"
          >
            {ui.cta}
          </a>
        </>
      )}

      <div className="mt-4 flex gap-4 text-s">
        {path.length > 1 && (
          <button type="button" onClick={back} className="cursor-pointer text-accent hover:underline">
            <span aria-hidden="true">{RTL.includes(lang) ? '→' : '←'}&nbsp;</span>
            {ui.back}
          </button>
        )}
        {path.length > 1 && (
          <button type="button" onClick={reset} className="cursor-pointer text-ink-soft hover:underline">
            {ui.restart}
          </button>
        )}
      </div>
    </div>
  );
}
