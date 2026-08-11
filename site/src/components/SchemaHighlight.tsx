import { useEffect, useState } from 'react';

import { partsOf, VIEWBOX, type PartMark } from '../data/schemaHighlight';
import plainParts from '../../../shared/schemes-parts.json';
import type { QuizUi } from './TreeWidget';

/**
 * Схема с подсветкой узлов, на которые указывает диагноз.
 *
 * Подсветка — накладка поверх картинки, а не отдельный файл на каждый случай:
 * координаты деталей берём из карты, которую посчитал генератор схем.
 *
 * По-русски берём картинку с готовыми подписями. На других языках подписи на
 * картинке были бы русскими, поэтому там идёт та же схема без надписей: номера
 * рисуются поверх, а расшифровка — списком под ней, как в приложении.
 */
function Layer({
  src,
  parts,
  vb,
  marks,
  numbered = false,
}: {
  src: string;
  parts: PartMark[];
  vb: readonly [number, number];
  marks: Set<number>;
  numbered?: boolean;
}) {
  return (
    <div className="relative">
      <img src={src} alt="" width={vb[0]} height={vb[1]} className="w-full rounded-card" />
      {(marks.size > 0 || numbered) && (
        <svg
          viewBox={`0 0 ${vb[0]} ${vb[1]}`}
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          {parts
            .filter((p) => marks.has(p.n))
            .map((p) => (
              <g key={p.n}>
                <circle cx={p.x} cy={p.y} r={p.r + 9} fill="rgba(194,65,12,0.09)" />
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={p.r}
                  fill="rgba(194,65,12,0.15)"
                  stroke="#C2410C"
                  strokeWidth="2.6"
                />
              </g>
            ))}
          {numbered &&
            parts.map((p) => (
              <g key={`n${p.n}`}>
                <circle cx={p.x} cy={p.y} r="9" fill="#fff" />
                <circle cx={p.x} cy={p.y} r="9" fill={marks.has(p.n) ? '#C2410C' : '#0E7C7B'} />
                <text
                  x={p.x}
                  y={p.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize="11"
                  fontWeight="700"
                  fill="#fff"
                >
                  {p.n}
                </text>
              </g>
            ))}
        </svg>
      )}
    </div>
  );
}

/** Схемы без подписей: та же система координат, что в приложении. */
const PLAIN = plainParts as unknown as Record<
  string,
  { title: string; parts: { n: number; label: string; x: number; y: number; r: number }[] }
>;
const PLAIN_VIEWBOX = [400, 240] as const;

/** Подписи деталей на языке страницы — свой файл на язык, грузится по месту. */
const LABEL_FILES = import.meta.glob<{
  default: { parts: Record<string, string>; titles: Record<string, string> };
}>('../../../shared/parts_i18n/*.json');

export default function SchemaHighlight({
  schemaKey,
  marks,
  lang = 'ru',
  ui,
}: {
  schemaKey: string;
  marks: number[];
  lang?: string;
  ui?: QuizUi;
}) {
  const [sub, slug] = schemaKey.split('/');
  const set = new Set(marks);
  const caption = set.size > 0 ? ui?.schemaMarked : ui?.schemaWhole;

  const [labels, setLabels] = useState<Record<string, string> | null>(null);
  useEffect(() => {
    if (lang === 'ru') return;
    const load = LABEL_FILES[`../../../shared/parts_i18n/${lang}.json`];
    if (!load) return;
    let alive = true;
    load().then((m) => alive && setLabels(m.default.parts)).catch(() => {});
    return () => {
      alive = false;
    };
  }, [lang]);

  if (lang !== 'ru') {
    const plain = PLAIN[`${sub}-${slug}`];
    // Схемы без подписей есть не под каждый узел — тогда честнее не показывать
    // ничего, чем показать русские надписи на японской странице.
    if (!plain) return null;
    return (
      <figure className="mt-5">
        <Layer
          src={`/${sub}/${slug}.svg`}
          parts={plain.parts}
          vb={PLAIN_VIEWBOX}
          marks={set}
          numbered
        />
        <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-s sm:grid-cols-3">
          {plain.parts.map((p) => (
            <li
              key={p.n}
              className={set.has(p.n) ? 'font-bold text-[#C2410C]' : 'text-ink-soft'}
            >
              {/* Пока словарь подписей в пути, показываем один номер:
                  русское название на чужой странице хуже, чем его отсутствие. */}
              {p.n}.{labels ? ` ${labels[p.label] ?? p.label}` : ''}
            </li>
          ))}
        </ul>
        {caption && <figcaption className="mt-2 text-s text-ink-soft">{caption}</figcaption>}
      </figure>
    );
  }

  return (
    <figure className="mt-5">
      <div className="sm:hidden">
        <Layer
          src={`/${sub}/podpisi-m/${slug}.svg`}
          parts={partsOf(schemaKey, true)}
          vb={VIEWBOX.mobile}
          marks={set}
        />
      </div>
      <div className="hidden sm:block">
        <Layer
          src={`/${sub}/podpisi/${slug}.svg`}
          parts={partsOf(schemaKey, false)}
          vb={VIEWBOX.desktop}
          marks={set}
        />
      </div>
      <figcaption className="mt-2 text-s text-ink-soft">
        {set.size > 0
          ? 'Обведено то, на что указывает ваш ответ, — это версия, а не диагноз.'
          : 'Схема узла целиком.'}
      </figcaption>
    </figure>
  );
}
