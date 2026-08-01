import { useState } from 'react';
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

const NODES = (treeData as { nodes: Record<string, TreeNode> }).nodes;

const URGENCY = {
  ok: { verb: 'Можно ехать', bg: 'bg-ok' },
  warn: { verb: 'В сервис на неделе', bg: 'bg-warn' },
  stop: { verb: 'Остановиться', bg: 'bg-stop' },
} as const;

/**
 * Интерактивное дерево диагностики. startNode — узел, с которого стартует
 * страница (релевантная ветка симптома, не корень).
 */
export default function TreeWidget({ startNode }: { startNode: string }) {
  const [path, setPath] = useState<string[]>([startNode]);
  const nodeId = path[path.length - 1]!;
  const node = NODES[nodeId];

  if (!node) return null;

  const reset = () => setPath([startNode]);
  const back = () => setPath((p) => (p.length > 1 ? p.slice(0, -1) : p));

  return (
    <div
      className="rounded-card border border-line bg-surface p-5 sm:p-6"
      aria-live="polite"
    >
      {node.type === 'question' ? (
        <>
          <p className="text-l font-bold">{node.text}</p>
          <div className="mt-4 flex flex-col gap-3">
            {node.options!.map((o) => (
              <button
                key={o.id}
                type="button"
                onClick={() => setPath((p) => [...p, o.next])}
                className="min-h-14 cursor-pointer rounded-card border border-line bg-bg px-4 py-3 text-left text-base hover:border-accent"
              >
                {o.label}
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
            <p className="mt-1 text-l font-bold">{node.top_cause}</p>
          </div>
          {node.explanation && <p className="mt-4 text-ink-soft">{node.explanation}</p>}
          <a
            href="#skachat"
            className="mt-5 inline-block rounded-btn bg-accent px-6 py-3.5 font-semibold text-white no-underline hover:opacity-90"
          >
            Полный отчёт по звуку — в приложении
          </a>
        </>
      )}

      <div className="mt-4 flex gap-4 text-s">
        {path.length > 1 && (
          <button type="button" onClick={back} className="cursor-pointer text-accent hover:underline">
            ← Назад
          </button>
        )}
        {path.length > 1 && (
          <button type="button" onClick={reset} className="cursor-pointer text-ink-soft hover:underline">
            Начать сначала
          </button>
        )}
      </div>
    </div>
  );
}
