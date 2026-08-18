// Значки товаров для Google Play и App Store Connect.
//
// Требования консоли: PNG 32 бита, квадрат, сторона от 512 до 1080, до 8 МБ,
// «без текста, рекламы и элементов бренда». Поэтому количество показано
// не цифрой, а рисунком: у проверок растёт число звуковых дуг, у гаража —
// число мест. Логотипа приложения здесь тоже нет намеренно.
//
// Запуск: node store/gen-product-icons.mjs
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const CHROME = process.env.CHROME ?? 'google-chrome';
const here = dirname(fileURLToPath(import.meta.url));
const outDir = join(here, 'products');
const tmpDir = join(here, '.tmp-icons');
const SIZE = 1024;

/** Микрофон: понятен без подписи и не похож на значок приложения. */
const mic = `
  <rect x="452" y="300" width="120" height="230" rx="60" fill="#fff"/>
  <path d="M392 470 a132 132 0 0 0 240 0" fill="none" stroke="#fff"
        stroke-width="34" stroke-linecap="round" transform="translate(0,26)"/>
  <rect x="497" y="628" width="30" height="86" rx="15" fill="#fff"/>`;

/** Звук расходится в обе стороны: так рисунок остаётся по центру при любом
 *  размере пакета, а число дуг показывает, сколько проверок внутри. */
function arcs(n) {
  const K = 0.643, S = 0.766; // cos и sin 50°: дуга открыта сверху и снизу
  let out = '';
  for (let i = 0; i < n; i++) {
    const r = 210 + i * 68;
    const o = (0.85 - i * 0.17).toFixed(2);
    const y1 = 470 - S * r, y2 = 470 + S * r;
    const dx = K * r;
    out += `<path d="M ${512 + dx} ${y1} A ${r} ${r} 0 0 1 ${512 + dx} ${y2}"
              fill="none" stroke="#fff" stroke-width="30" stroke-linecap="round"
              opacity="${o}"/>`;
    out += `<path d="M ${512 - dx} ${y1} A ${r} ${r} 0 0 0 ${512 - dx} ${y2}"
              fill="none" stroke="#fff" stroke-width="30" stroke-linecap="round"
              opacity="${o}"/>`;
  }
  return out;
}

/** Силуэт машины: кузов, крыша и два колеса. */
function car(cx, cy, s, opacity = 1) {
  return `<g transform="translate(${cx} ${cy}) scale(${s})" opacity="${opacity}">
    <path d="M-150 20 q6-58 40-64 l30-46 q10-16 30-16 h100 q20 0 30 16 l30 46
             q34 6 40 64 v24 q0 14-14 14 h-272 q-14 0-14-14 z" fill="#fff"/>
    <path d="M-72 -44 h144 l22 34 h-188 z" fill="#1E3A5F"/>
    <circle cx="-92" cy="58" r="30" fill="#fff"/>
    <circle cx="92" cy="58" r="30" fill="#fff"/>
  </g>`;
}

/** Места гаража: сетка под нужное количество, машина стоит на первом. */
function bays(n) {
  const cols = n <= 2 ? n : n <= 4 ? 2 : 4;
  const rows = Math.ceil(n / cols);
  const pad = 90;
  const w = (SIZE - pad * 2) / cols;
  const h = (SIZE - pad * 2) / rows;
  const cell = Math.min(w, h);
  const gx = (SIZE - cell * cols) / 2;
  const gy = (SIZE - cell * rows) / 2;
  let out = '';
  for (let i = 0; i < n; i++) {
    const x = gx + (i % cols) * cell;
    const y = gy + Math.floor(i / cols) * cell;
    const inset = cell * 0.06;
    out += `<rect x="${x + inset}" y="${y + inset}" width="${cell - inset * 2}"
              height="${cell - inset * 2}" rx="${cell * 0.14}" fill="none"
              stroke="#fff" stroke-width="${Math.max(8, cell * 0.035)}"
              opacity="0.45"/>`;
    out += car(x + cell / 2, y + cell / 2, (cell / 420) * 0.9, i === 0 ? 1 : 0.62);
  }
  return out;
}

const ITEMS = [
  ...[5, 10, 20, 40].map((n, i) => ({
    id: `checks_${n}`,
    from: '#0E7C7B',
    to: '#14A8A6',
    body: mic + arcs(i + 1),
  })),
  ...[1, 2, 4, 8].map((n) => ({
    id: `garage_${n}`,
    from: '#1E3A5F',
    to: '#2F6BA8',
    body: bays(n),
  })),
];

function svg({ from, to, body }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}"
     viewBox="0 0 ${SIZE} ${SIZE}">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/>
  </linearGradient></defs>
  <rect width="${SIZE}" height="${SIZE}" fill="url(#g)"/>
  ${body}
</svg>`;
}

mkdirSync(outDir, { recursive: true });
mkdirSync(tmpDir, { recursive: true });

for (const item of ITEMS) {
  const file = join(tmpDir, `${item.id}.html`);
  writeFileSync(
    file,
    `<!doctype html><meta charset="utf-8">
<style>html,body{margin:0;padding:0;width:${SIZE}px;height:${SIZE}px;overflow:hidden}</style>
${svg(item)}`
  );
  const png = join(outDir, `${item.id}.png`);
  execFileSync(
    CHROME,
    [
      '--headless',
      '--disable-gpu',
      '--hide-scrollbars',
      `--screenshot=${png}`,
      `--window-size=${SIZE},${SIZE}`,
      `file://${file}`,
    ],
    { stdio: 'ignore' }
  );
  console.log(`${item.id}.png`);
}

rmSync(tmpDir, { recursive: true, force: true });
console.log(`Готово: ${ITEMS.length} значков в store/products/`);
