import { partsOf, VIEWBOX, type PartMark } from '../data/schemaHighlight';

/**
 * Схема с подсветкой узлов, на которые указывает диагноз.
 *
 * Подсветка — накладка поверх картинки, а не отдельный файл на каждый случай:
 * координаты деталей берём из карты, которую посчитал генератор схем.
 */
function Layer({
  src,
  parts,
  vb,
  marks,
}: {
  src: string;
  parts: PartMark[];
  vb: readonly [number, number];
  marks: Set<number>;
}) {
  return (
    <div className="relative">
      <img src={src} alt="" width={vb[0]} height={vb[1]} className="w-full rounded-card" />
      {marks.size > 0 && (
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
        </svg>
      )}
    </div>
  );
}

export default function SchemaHighlight({
  schemaKey,
  marks,
}: {
  schemaKey: string;
  marks: number[];
}) {
  const [sub, slug] = schemaKey.split('/');
  const set = new Set(marks);

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
