// Извлекает подписи деталей схем из приложения в JSON для сайта.
//
// Источник — app/lib/l10n/parts_i18n.dart: там словарь живёт рядом со схемами
// и проверяется тестами приложения. Сайту нужен тот же словарь, но по-своему:
// по одному файлу на язык, чтобы браузер грузил только нужный.
//
// Запуск после правки parts_i18n.dart:
//   node shared/gen-parts-i18n.mjs
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(join(HERE, '../app/lib/l10n/parts_i18n.dart'), 'utf8');

/** Разбор одной dart-константы вида `const _name = <String, Map<String, String>>{ … };` */
function parseMap(name) {
  const start = src.indexOf(`const ${name} = <String, Map<String, String>>{`);
  if (start < 0) throw new Error(`в parts_i18n.dart нет ${name}`);
  const end = src.indexOf('\n};', start);
  const body = src.slice(start, end);
  const out = {};
  const langRe = /^ {2}'(\w{2})': \{$/gm;
  const bounds = [...body.matchAll(langRe)];
  bounds.forEach((m, i) => {
    const chunk = body.slice(m.index, bounds[i + 1]?.index ?? body.length);
    const pairs = {};
    for (const p of chunk.matchAll(/^\s+'((?:[^'\\]|\\.)*)':\s*\n?\s*'((?:[^'\\]|\\.)*)',$/gm)) {
      pairs[p[1].replace(/\\'/g, "'")] = p[2].replace(/\\'/g, "'");
    }
    out[m[1]] = pairs;
  });
  return out;
}

const parts = parseMap('_parts');
const titles = parseMap('_titles');
const dir = join(HERE, 'parts_i18n');
mkdirSync(dir, { recursive: true });

for (const lang of Object.keys(parts)) {
  const data = { parts: parts[lang], titles: titles[lang] ?? {} };
  writeFileSync(join(dir, `${lang}.json`), JSON.stringify(data, null, 1) + '\n');
  console.log(`${lang}: ${Object.keys(data.parts).length} подписей, ${Object.keys(data.titles).length} названий схем`);
}
