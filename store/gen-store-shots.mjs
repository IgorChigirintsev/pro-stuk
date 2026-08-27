// Карточки для App Store и Google Play из настоящих снимков экрана.
//
// Что здесь происходит: снимок с телефона кладётся в нарисованную рамку
// устройства, сверху — подпись. Первая карточка особая: на ней телефона нет
// вовсе, только рисунок сути, потому что человек в магазине смотрит на неё
// секунду и за эту секунду должен понять, зачем приложение.
//
// Результат в двух видах:
//   svg/ — вектор со слоями, открывается в Figma и правится там же;
//   png/ — то, что заливается в консоль магазина.
//
// Форматы. Apple с 2024 года требует 6,9″; 6,5″ принимается, но только пока
// нет 6,9″. iPad 13″ обязателен, раз приложение заявлено и для него.
// Google Play берёт любой размер от 320 до 3840 по стороне — годится 6,9″.
//
// Запуск: node store/gen-store-shots.mjs
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync, readFileSync, rmSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { LOCALES } from './captions.mjs';

const CHROME = process.env.CHROME ?? 'google-chrome';
const here = dirname(fileURLToPath(import.meta.url));
const screensRoot = join(here, 'cards', 'screens');
const outRoot = join(here, 'cards');
const tmpDir = join(here, '.tmp-shots');

// Исходный снимок: Pixel 9a. Сверху строка состояния, снизу полоса жестов —
// в кадр они не идут: чужая система на карточке приложения только сбивает.
const SRC_W = 1080, SRC_H = 2424;
const CROP_TOP = 118;

// Размеры разложены по форматам поимённо, а не выведены формулой из ширины.
// Формула ломается на планшетах: они почти квадратные, и телефон, растянутый
// по их ширине, перестаёт быть телефоном.
//
// Apple задаёт точные размеры и соотношением сторон не ограничивает. Google
// ограничивает: «большая сторона не длиннее меньшей более чем вдвое». Высокие
// карточки Apple (1290×2796 — это 2,17) Play не примет, поэтому у него свои.
// И карточек у Play не больше восьми на каждый вид устройства.
const FORMATS = [
  {
    id: 'apple/iphone-6.9', W: 1290, H: 2796, note: 'App Store, iPhone — обязателен',
    markY: 197, markScale: 1.04, capY: 343, capStep: 116, capSize: 91,
    phoneW: 1100, phoneY: 665, carY: 1050, cardW: 1000, cardY: 1560,
  },
  {
    id: 'apple/iphone-6.5', W: 1242, H: 2688, note: 'App Store, iPhone — запасной',
    markY: 190, markScale: 1, capY: 330, capStep: 112, capSize: 88,
    phoneW: 1060, phoneY: 640, carY: 1010, cardW: 960, cardY: 1500,
  },
  {
    id: 'apple/ipad-13', W: 2048, H: 2732, note: 'App Store, iPad — обязателен',
    markY: 215, markScale: 1.15, capY: 375, capStep: 132, capSize: 104,
    phoneW: 1065, phoneY: 700, carY: 980, cardW: 1100, cardY: 1560,
  },
  {
    id: 'play/phone', W: 1080, H: 1920, max: 8, note: 'Google Play, телефон',
    markY: 130, markScale: 0.72, capY: 232, capStep: 80, capSize: 63,
    phoneW: 830, phoneY: 440, carY: 660, cardW: 820, cardY: 1060,
  },
  {
    id: 'play/tablet-7', W: 1200, H: 1920, max: 8, note: 'Google Play, планшет 7″',
    markY: 130, markScale: 0.75, capY: 236, capStep: 84, capSize: 66,
    phoneW: 720, phoneY: 430, carY: 660, cardW: 860, cardY: 1050,
  },
  {
    id: 'play/tablet-10', W: 1600, H: 2560, max: 8, note: 'Google Play, планшет 10″',
    markY: 175, markScale: 1, capY: 315, capStep: 112, capSize: 88,
    phoneW: 950, phoneY: 580, carY: 900, cardW: 1050, cardY: 1420,
  },
  {
    // Chromebook — ноутбук, и карточка лежачая. Раскладка другая: слева
    // столбец с текстом и разбором, справа машина со звуком; на остальных
    // карточках слева телефон, справа подпись.
    id: 'play/chromebook', W: 2560, H: 1440, max: 8, landscape: true,
    note: 'Google Play, Chromebook',
    markY: 480, markScale: 1.05, capY: 700, capStep: 120, capSize: 96,
    phoneW: 620, phoneX: 430, phoneY: 210,
    textX: 1240, carX: 1850, carY: 720, carScale: 1.4,
    cardX: 180, cardW: 800, cardY: 620, footY: 1300,
    heroCapY: 390, heroMarkY: 200,
  },
];

const T = {
  ink: '#FFFFFF',
  accent: '#FFD166', // один на весь набор: фон меняется, ударение — нет
  bezel: '#0C1113',
};

// Путь цвета по ленте: от яркой бирюзы через зелень к синеве и обратно.
const JOURNEY = ['#1BB3A6', '#19A57F', '#149A9B', '#1183A6', '#0F8F86', '#17AD97'];

// Пятна света. Посажены на границы карточек: половина такого пятна на одной,
// половина на следующей — именно это и читается как непрерывность.
const BLOBS = [
  { x: 1.15, y: 0.11, r: 0.42, o: 0.10 },
  { x: 2.90, y: 0.81, r: 0.58, o: 0.08 },
  { x: 4.05, y: 0.07, r: 0.37, o: 0.10 },
  { x: 5.80, y: 0.89, r: 0.66, o: 0.07 },
  { x: 7.10, y: 0.13, r: 0.45, o: 0.09 },
];

/** Карточки. Порядок важен вдвойне: он же порядок в консоли магазина, и по
 *  нему складывается панорама. Первые три показываются в списке приложений,
 *  поэтому набор начинается с сути, а не с главного экрана.
 *
 *  Подписи здесь не лежат — они в captions.mjs, по одной на каждый язык. */
const shots = [
  { hero: true },
  { file: '1-report.png' },
  { file: '2-diagram.png' },
  { file: '3-record.png' },
  { file: '4-detail.png' },
  { file: '5-home.png' },
  { file: '6-book.png' },
  { file: '7-garage.png' },
  { file: '8-quiz.png' },
];

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Знак: та же звуковая волна, что в иконке приложения. Ставится над
 *  подписью — карточка сразу говорит, что приложение про звук, ещё до
 *  того, как человек прочтёт текст. */
function waveMark(cx, y, sc) {
  const hs = [44, 76, 52, 124, 66, 94, 38].map(h => h * sc);
  const gap = 22 * sc, w = 14 * sc;
  const total = hs.length * w + (hs.length - 1) * gap;
  let x = cx - total / 2;
  let out = '';
  for (const h of hs) {
    out += `<rect x="${Math.round(x)}" y="${Math.round(y - h / 2)}" width="${Math.round(w)}"
              height="${Math.round(h)}" rx="${Math.round(w / 2)}" fill="#fff" opacity="0.9"/>`;
    x += w + gap;
  }
  return out;
}

/** Силуэт машины. Сплошной, без лобового стекла: тёмная трапеция посреди
 *  белого пятна читалась как дыра, а не как окно, и спорила со звуковыми
 *  дугами за внимание. Силуэт узнаётся и без неё. */
function carShape(cx, cy, sc) {
  return `<g transform="translate(${cx} ${cy}) scale(${sc})">
      <path d="M-150 20 q6-58 40-64 l30-46 q10-16 30-16 h100 q20 0 30 16 l30 46
               q34 6 40 64 v24 q0 14-14 14 h-272 q-14 0-14-14 z" fill="#fff"/>
      <circle cx="-92" cy="58" r="30" fill="#fff"/>
      <circle cx="92" cy="58" r="30" fill="#fff"/>
    </g>`;
}

/** Звук расходится от машины в обе стороны. Дуги открыты сверху и снизу,
 *  поэтому рисунок остаётся читаемым и не превращается в мишень. */
function soundArcs(cx, cy, sc) {
  const K = 0.643, S = 0.766; // cos и sin 50°
  let out = '';
  for (let n = 0; n < 3; n++) {
    const r = (300 + n * 78) * sc;
    const o = (0.75 - n * 0.22).toFixed(2);
    const y1 = cy - S * r, y2 = cy + S * r, dx = K * r;
    out += `<path d="M ${Math.round(cx + dx)} ${Math.round(y1)} A ${Math.round(r)} ${Math.round(r)} 0 0 1 ${Math.round(cx + dx)} ${Math.round(y2)}"
              fill="none" stroke="#fff" stroke-width="${14 * sc}" stroke-linecap="round" opacity="${o}"/>`;
    out += `<path d="M ${Math.round(cx - dx)} ${Math.round(y1)} A ${Math.round(r)} ${Math.round(r)} 0 0 0 ${Math.round(cx - dx)} ${Math.round(y2)}"
              fill="none" stroke="#fff" stroke-width="${14 * sc}" stroke-linecap="round" opacity="${o}"/>`;
  }
  return out;
}

/** Строка причины в карточке результата: название, доля и полоса. */
function causeRow(x, y, w, title, pct, sc, rtl) {
  const nameX = rtl ? x + w : x, nameAnchor = rtl ? 'end' : 'start';
  const pctX = rtl ? x : x + w, pctAnchor = rtl ? 'start' : 'end';
  return `<text x="${nameX}" y="${y}" text-anchor="${nameAnchor}" font-family="Manrope, Inter, sans-serif"
        font-size="${Math.round(46 * sc)}" font-weight="600" fill="#0F172A">${esc(title)}</text>
      <text x="${pctX}" y="${y}" text-anchor="${pctAnchor}" font-family="Manrope, Inter, sans-serif"
        font-size="${Math.round(46 * sc)}" font-weight="700" fill="#0F172A">${pct}%</text>
      <rect x="${x}" y="${y + 28 * sc}" width="${w}" height="${16 * sc}" rx="${8 * sc}" fill="#D7EAE7"/>
      <rect x="${x}" y="${y + 28 * sc}" width="${Math.round(w * pct / 100)}" height="${16 * sc}"
        rx="${8 * sc}" fill="#0E7C7B"/>`;
}

/** Первая карточка: машина шумит, звук слушают, приходит причина с долей и
 *  оценкой срочности. Вся история без единого слова, которое надо читать. */
function heroBody(f, L) {
  const sc = f.cardW / 960;             // масштаб карточки результата
  const cardX = f.landscape ? f.cardX : Math.round((f.W - f.cardW) / 2);
  // Высота — под три строки причин, а не на глаз: последняя строка сидит на
  // 570, ей нужно место под полосу и нижнее поле.
  const cardH = Math.round(660 * sc);
  const footY = f.landscape ? f.footY : f.cardY + cardH + Math.round(180 * sc);
  const footX = f.landscape ? cardX + f.cardW / 2 : f.W / 2;
  const carX = f.landscape ? f.carX : f.W / 2;
  const carSc = (f.landscape ? f.carScale : 1.55) * (f.landscape ? 1 : sc);
  const pad = Math.round(56 * sc);
  const inner = f.cardW - pad * 2;
  return `  <g id="Машина">
${soundArcs(carX, f.carY, f.landscape ? f.carScale : sc)}
    ${carShape(carX, f.carY, carSc)}
  </g>

  <g id="Результат">
    <rect x="${cardX}" y="${f.cardY}" width="${f.cardW}" height="${cardH}" rx="${Math.round(48 * sc)}" fill="#fff"/>
    <rect x="${cardX + pad}" y="${f.cardY + Math.round(56 * sc)}" width="${Math.round(392 * sc)}"
      height="${Math.round(72 * sc)}" rx="${Math.round(36 * sc)}" fill="#D2790B"/>
    <text x="${cardX + pad + Math.round(196 * sc)}" y="${f.cardY + Math.round(105 * sc)}" text-anchor="middle"
      font-family="Manrope, Inter, sans-serif" font-size="${Math.round(38 * sc)}" font-weight="700"
      fill="#fff">${esc(L.hero.badge)}</text>
    <text x="${cardX + pad}" y="${f.cardY + Math.round(200 * sc)}" font-family="Manrope, Inter, sans-serif"
      font-size="${Math.round(34 * sc)}" font-weight="600" fill="#64748B">${esc(L.hero.causes)}</text>
${causeRow(cardX + pad, f.cardY + Math.round(290 * sc), inner, L.hero.rows[0], 45, sc, L.rtl)}
${causeRow(cardX + pad, f.cardY + Math.round(430 * sc), inner, L.hero.rows[1], 30, sc, L.rtl)}
${causeRow(cardX + pad, f.cardY + Math.round(570 * sc), inner, L.hero.rows[2], 15, sc, L.rtl)}
  </g>

  <g id="Сноска">
    <text x="${footX}" y="${footY}" text-anchor="middle" font-family="Manrope, Inter, sans-serif"
      font-size="${Math.round(46 * sc)}" font-weight="600" fill="#fff" opacity="0.92">${esc(L.hero.foot[0])}</text>
    <text x="${footX}" y="${footY + Math.round(78 * sc)}" text-anchor="middle" font-family="Manrope, Inter, sans-serif"
      font-size="${Math.round(46 * sc)}" font-weight="600" fill="#fff" opacity="0.92">${esc(L.hero.foot[1])}</text>
  </g>`;
}

function phoneBody(f, b64) {
  const scale = f.phoneW / SRC_W;
  const bezel = Math.round(22 * f.phoneW / 1060);
  const radius = Math.round(78 * f.phoneW / 1060);
  const x = f.landscape ? f.phoneX : Math.round((f.W - f.phoneW) / 2);
  const imgY = f.phoneY - Math.round(CROP_TOP * scale);
  const boxH = f.H - f.phoneY + 120;
  return `  <g id="Телефон">
    <g id="Корпус" filter="url(#shadow)">
      <rect x="${x - bezel}" y="${f.phoneY - bezel}" width="${f.phoneW + bezel * 2}"
            height="${boxH + bezel}" rx="${radius}" fill="${T.bezel}"/>
    </g>
    <g id="Экран" clip-path="url(#screenClip)">
      <image x="${x}" y="${imgY}" width="${f.phoneW}" height="${Math.round(SRC_H * scale)}"
             xlink:href="data:image/png;base64,${b64}"/>
    </g>
  </g>`;
}

// Фон — одно полотно на весь набор, а карточка вырезает из него свой кусок.
// Разложенные по порядку, они складываются в непрерывную ленту без стыков.
//
// Отсюда единственное правило, которое здесь легко нарушить: всё, что тянется
// поперёк, задаётся в координатах ленты и сдвигается на -i*W. Всё, что
// повторяется на каждой карточке, должно быть либо симметричным, либо
// вертикальным — иначе на стыке появится ступенька.
function svgFor(f, list, shot, i, L, shotsDir) {
  const total = f.W * list.length;
  const scale = f.phoneW / SRC_W;
  const bezel = Math.round(22 * f.phoneW / 1060);
  const radius = Math.round(78 * f.phoneW / 1060);
  const px = f.landscape ? f.phoneX : Math.round((f.W - f.phoneW) / 2);
  const boxH = f.H - f.phoneY + 120;

  const hueStops = JOURNEY.map((c, n) =>
    `      <stop offset="${(n / (JOURNEY.length - 1)).toFixed(4)}" stop-color="${c}"/>`).join('\n');

  const blobs = BLOBS.map(b =>
    `      <circle cx="${Math.round(b.x * f.W)}" cy="${Math.round(b.y * f.H)}"
              r="${Math.round(b.r * f.W)}" fill="url(#blob)" opacity="${b.o}"/>`).join('\n');

  // На лежачей карточке подпись прижата влево, к телефону; исключение —
  // первая, где слева стоит разбор, и подпись встаёт над ним.
  const wide = f.landscape && !shot.hero;
  const capX = wide ? f.textX : (f.landscape ? f.cardX : f.W / 2);
  const capY = f.landscape && shot.hero ? f.heroCapY : f.capY;
  const anchor = f.landscape ? 'start' : 'middle';
  const markX = f.landscape ? capX + 130 * f.markScale : f.W / 2;
  const markY = f.landscape && shot.hero ? f.heroMarkY : f.markY;

  const lines = L.caps[i].map((t, n) =>
    `      <text x="${capX}" y="${capY + n * f.capStep}" text-anchor="${anchor}"
        font-family="Manrope, Inter, -apple-system, sans-serif"
        font-size="${f.capSize}" font-weight="800" letter-spacing="-1.5"
        fill="${n === 0 ? T.ink : T.accent}"
        >${esc(t)}</text>`).join('\n');

  const body = shot.hero
    ? heroBody(f, L)
    : phoneBody(f, readFileSync(join(shotsDir, shot.file)).toString('base64'));

  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
     width="${f.W}" height="${f.H}" viewBox="0 0 ${f.W} ${f.H}">
  <defs>
    <linearGradient id="hue" x1="0" y1="0" x2="1" y2="0">
${hueStops}
    </linearGradient>
    <radialGradient id="blob">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity="1"/>
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.14"/>
      <stop offset="0.45" stop-color="#000000" stop-opacity="0"/>
      <stop offset="1" stop-color="#001A18" stop-opacity="0.55"/>
    </linearGradient>
    <filter id="shadow" x="-30%" y="-10%" width="160%" height="130%">
      <feDropShadow dx="0" dy="30" stdDeviation="46" flood-color="#00201E" flood-opacity="0.6"/>
    </filter>
    <clipPath id="screenClip">
      <rect x="${px}" y="${f.phoneY}" width="${f.phoneW}" height="${boxH}" rx="${radius - bezel}"/>
    </clipPath>
  </defs>

  <g id="Фон">
    <g id="Лента" transform="translate(${-i * f.W},0)">
      <rect width="${total}" height="${f.H}" fill="url(#hue)"/>
${blobs}
    </g>
    <rect width="${f.W}" height="${f.H}" fill="url(#fade)"/>
  </g>

  <g id="Волна">
${waveMark(markX, markY, f.markScale)}
  </g>

  <g id="Подпись">
${lines}
  </g>

${body}
</svg>`;
}

/** Баннер для Google Play: 1024×500, обязателен для карточки в магазине.
 *  Композиция другая — лежачая, и телефона в ней нет: Play показывает баннер
 *  над скриншотами, и повторять их незачем. */
function featureGraphic() {
  const W = 1024, H = 500;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1BB3A6"/>
      <stop offset="1" stop-color="#06403C"/>
    </linearGradient>
    <radialGradient id="blob">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity="1"/>
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <g id="Фон">
    <rect width="${W}" height="${H}" fill="url(#bg)"/>
    <circle cx="215" cy="250" r="280" fill="url(#blob)" opacity="0.12"/>
  </g>

  <g id="Машина">
${soundArcs(215, 250, 0.50)}
    ${carShape(215, 250, 0.50)}
  </g>

  <g id="Название">
    <text x="482" y="196" font-family="Manrope, Inter, sans-serif" font-size="76"
      font-weight="800" letter-spacing="-2" fill="#fff">Pro-Stuk</text>
    <text x="482" y="256" font-family="Manrope, Inter, sans-serif" font-size="32"
      font-weight="700" fill="${T.accent}">Diagnose car noises by sound</text>
    <text x="482" y="322" font-family="Manrope, Inter, sans-serif" font-size="25"
      font-weight="500" fill="#fff" opacity="0.88">Record 15 seconds — get a likely</text>
    <text x="482" y="358" font-family="Manrope, Inter, sans-serif" font-size="25"
      font-weight="500" fill="#fff" opacity="0.88">cause, how urgent it is, and what</text>
    <text x="482" y="394" font-family="Manrope, Inter, sans-serif" font-size="25"
      font-weight="500" fill="#fff" opacity="0.88">to tell the shop.</text>
  </g>

</svg>`;
}

function render(svg, w, h, out) {
  const page = join(tmpDir, 'page.html');
  writeFileSync(page, `<!doctype html><meta charset="utf-8">
<style>html,body{margin:0;padding:0;width:${w}px;height:${h}px;overflow:hidden}</style>
${svg}`);
  execFileSync(CHROME, [
    '--headless', '--disable-gpu', '--hide-scrollbars',
    `--window-size=${w},${h}`, `--screenshot=${out}`, `file://${page}`,
  ], { stdio: 'ignore' });
}

mkdirSync(tmpDir, { recursive: true });

// Какие языки собирать. По умолчанию английский: полный прогон — это почти
// восемьсот отрисовок и пара гигабайт, и делать его при каждой мелкой правке
// незачем. `all` собирает все.
const asked = process.argv.slice(2);
const locales = asked.length === 0 ? ['en']
  : asked[0] === 'all' ? Object.keys(LOCALES)
  : asked;
for (const loc of locales) {
  if (!LOCALES[loc]) {
    console.error(`нет такого языка: ${loc}. Есть: ${Object.keys(LOCALES).join(' ')}`);
    process.exit(1);
  }
}

for (const loc of locales) {
  const L = LOCALES[loc];
  // Снимки экрана берутся на языке набора, а пока их нет — английские.
  // Молча подставлять чужой язык нельзя, поэтому предупреждаем.
  let shotsDir = join(screensRoot, loc);
  if (!existsSync(shotsDir)) {
    shotsDir = join(screensRoot, 'en');
    console.log(`  ${loc}: снимков экрана нет, подставлены английские`);
  }

  for (const f of FORMATS) {
    const list = f.max ? shots.slice(0, f.max) : shots;
    const svgDir = join(outRoot, 'svg', loc, f.id);
    const pngDir = join(outRoot, 'png', loc, f.id);
    mkdirSync(svgDir, { recursive: true });
    mkdirSync(pngDir, { recursive: true });
    mkdirSync(join(outRoot, 'panorama', loc), { recursive: true });

    for (const [i, shot] of list.entries()) {
      const name = String(i + 1).padStart(2, '0');
      const svg = svgFor(f, list, shot, i, L, shotsDir);
      writeFileSync(join(svgDir, `${name}.svg`), svg);
      render(svg, f.W, f.H, join(pngDir, `${name}.png`));
    }

    // Склейка всей ленты одной картинкой. Не для магазина — для глаза: только
    // так видно, сошёлся ли фон на стыках. Порядок в консоли магазина обязан
    // совпадать с нумерацией файлов, иначе панорама рассыплется.
    const strip = list.map((_, n) => {
      const p = join(pngDir, `${String(n + 1).padStart(2, '0')}.png`);
      return `<img src="data:image/png;base64,${readFileSync(p).toString('base64')}">`;
    }).join('');
    const k = 0.25;
    writeFileSync(join(tmpDir, 'strip.html'), `<!doctype html><meta charset="utf-8">
<style>html,body{margin:0;padding:0;background:#111}
.s{display:flex;transform:scale(${k});transform-origin:0 0}
img{display:block;width:${f.W}px;height:${f.H}px}</style>
<div class="s">${strip}</div>`);
    execFileSync(CHROME, [
      '--headless', '--disable-gpu', '--hide-scrollbars',
      `--window-size=${Math.round(f.W * list.length * k)},${Math.round(f.H * k)}`,
      `--screenshot=${join(outRoot, 'panorama', loc, `${f.id.replace('/', '-')}.png`)}`,
      `file://${join(tmpDir, 'strip.html')}`,
    ], { stdio: 'ignore' });

    console.log(`${loc}  ${f.id.padEnd(20)} ${String(list.length).padStart(2)} × ${f.W}×${f.H}  ${f.note}`);
  }
}

// Баннер Play
const playDir = join(here, 'play');
mkdirSync(playDir, { recursive: true });
writeFileSync(join(playDir, 'feature.svg'), featureGraphic());
render(featureGraphic(), 1024, 500, join(playDir, 'feature-1024x500.png'));
console.log('play: баннер 1024×500');

rmSync(tmpDir, { recursive: true, force: true });
