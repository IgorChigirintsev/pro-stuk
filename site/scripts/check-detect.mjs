/**
 * Проверка автоопределения языка: скрипт берётся из собранной страницы, а не из
 * исходника — проверяем ровно тот код, который уедет в прод.
 *
 *   node scripts/check-detect.mjs
 */
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
const body = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)]
  .map((m) => m[1])
  .find((s) => s.includes("localStorage.getItem('stuk_lang')"));

if (!body) {
  console.error('На главной нет скрипта автоопределения языка.');
  process.exit(1);
}

/** Один прогон скрипта с подменёнными браузерными объектами. */
function run({ languages, saved = null, ua = 'Mozilla/5.0 (Linux; Android 13)' }) {
  let replaced = null;
  const sandbox = {
    localStorage: { getItem: () => saved, setItem: () => {} },
    navigator: { languages, language: languages[0], userAgent: ua },
    location: { replace: (url) => (replaced = url) },
  };
  new Function('localStorage', 'navigator', 'location', body)(
    sandbox.localStorage,
    sandbox.navigator,
    sandbox.location
  );
  return replaced;
}

// Ожидания: язык браузера → ближайший язык по стране → английский.
const cases = [
  { name: 'русский браузер остаётся на русской странице', langs: ['ru-RU'], want: null },
  { name: 'немецкий уходит на /de/', langs: ['de-DE'], want: '/de/' },
  { name: 'бразильский португальский → /pt/', langs: ['pt-BR'], want: '/pt/' },
  { name: 'тайваньский китайский → /zh/', langs: ['zh-TW'], want: '/zh/' },
  { name: 'украинский по стране → русская версия', langs: ['uk-UA'], want: null },
  { name: 'казахский по стране → русская версия', langs: ['kk-KZ'], want: null },
  { name: 'иврит из Израиля → английская версия', langs: ['he-IL'], want: '/en/' },
  { name: 'шведский без страны в таблице → английская', langs: ['sv-SE'], want: '/en/' },
  { name: 'второй язык списка тоже учитывается', langs: ['sv', 'ja-JP'], want: '/ja/' },
  { name: 'арабский → /ar/', langs: ['ar-SA'], want: '/ar/' },
  { name: 'сохранённый выбор сильнее браузера', langs: ['de-DE'], saved: 'ko', want: '/ko/' },
  { name: 'сохранённый русский остаётся русским', langs: ['de-DE'], saved: 'ru', want: null },
  {
    name: 'телефон Google-приложения переводим как обычный браузер',
    langs: ['de-DE'],
    ua: 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 GoogleApp/15.0',
    want: '/de/',
  },
  {
    name: 'Яндекс-робота не перебрасываем',
    langs: ['en-US'],
    ua: 'Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)',
    want: null,
  },
  {
    name: 'поискового робота не перебрасываем',
    langs: ['en-US'],
    ua: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    want: null,
  },
];

let bad = 0;
for (const c of cases) {
  const got = run({ languages: c.langs, saved: c.saved, ua: c.ua });
  const ok = got === c.want;
  if (!ok) bad++;
  console.log(`${ok ? '✓' : '✗'} ${c.name}${ok ? '' : ` — ожидали ${c.want}, вышло ${got}`}`);
}

if (bad) {
  console.error(`Автоопределение языка: ${bad} из ${cases.length} проверок не прошли.`);
  process.exit(1);
}
console.log(`Автоопределение языка: все ${cases.length} проверок прошли.`);
