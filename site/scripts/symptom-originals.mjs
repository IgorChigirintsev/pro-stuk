// Длины списков русских разборов: по ним сверяются переводы.
// Читаем сами файлы, а не их копию, — копия рано или поздно отстанет.
import { readFileSync, readdirSync } from 'node:fs';

const dir = new URL('../src/data/symptoms/', import.meta.url);

/** Сколько элементов в списке `name: [...]` у объекта страницы. */
function countItems(src, key) {
  const start = src.indexOf(`  ${key}: [`);
  if (start < 0) return 0;
  let depth = 0;
  let items = 0;
  for (let i = src.indexOf('[', start); i < src.length; i++) {
    const ch = src[i];
    if (ch === '[' || ch === '{') depth++;
    else if (ch === ']' || ch === '}') {
      depth--;
      if (depth === 0) break;
    } else if (ch === "'" || ch === '"' || ch === '`') {
      // строка целиком пропускается: внутри бывают и скобки, и запятые
      const quote = ch;
      i++;
      while (i < src.length && src[i] !== quote) i += src[i] === '\\' ? 2 : 1;
    } else if (ch === ',' && depth === 1) items++;
  }
  return items; // висячая запятая в конце списка даёт ровно число элементов
}

export const SYMPTOMS_ORIGINALS = Object.fromEntries(
  readdirSync(dir)
    .filter((f) => f.endsWith('.ts'))
    .map((f) => {
      const src = readFileSync(new URL(f, dir), 'utf8');
      return [
        f.replace('.ts', ''),
        {
          intro: countItems(src, 'intro'),
          causes: countItems(src, 'causes'),
          canRide: countItems(src, 'canRide'),
          checks: countItems(src, 'checks'),
          faq: countItems(src, 'faq'),
        },
      ];
    })
);
