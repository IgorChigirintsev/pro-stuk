// Скриншоты для App Store и Google Play из настоящих снимков экрана.
//
// Что здесь происходит: снимок с телефона кладётся в нарисованную рамку
// устройства, сверху — подпись. Магазины принимают такие макеты: показывать
// голый снимок экрана можно, но подпись объясняет, зачем эта картинка, а
// человек в списке приложений читает именно её.
//
// Результат пишется в двух видах:
//   svg/ — вектор со слоями, открывается в Figma и правится там же;
//   png/ — то, что заливается в консоль магазина.
//
// Снимок обрезается прямо в SVG маской, а не заранее: в Figma это остаётся
// обычной маской, границу кадра можно подвинуть, ничего не пересобирая.
//
// Запуск: node store/gen-store-shots.mjs
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const CHROME = process.env.CHROME ?? 'google-chrome';
const here = dirname(fileURLToPath(import.meta.url));
const shotsDir = join(here, 'appstore', 'screens');
const svgDir = join(here, 'appstore', 'svg');
const pngDir = join(here, 'appstore', 'png');
const tmpDir = join(here, '.tmp-shots');

// Размер под iPhone 6,5″ — его просит App Store Connect. Google Play берёт
// любой от 320 до 3840 по стороне, так что эти же файлы годятся и туда.
const W = 1242, H = 2688;

// Исходный снимок: Pixel 9a. Сверху строка состояния, снизу полоса жестов —
// в кадр они не идут: чужая система на карточке приложения только сбивает.
const SRC_W = 1080, SRC_H = 2424;
const CROP_TOP = 118, CROP_BOTTOM = 60;

// Телефон уходит за нижний край. Целиком он смотрится как предмет на витрине,
// а срезанный снизу — как экран, который продолжается: взгляд идёт по нему
// вверх, к подписи, а не утыкается в пустое поле.
const SCREEN_W = 1060;
const SCREEN_X = Math.round((W - SCREEN_W) / 2);
const SCREEN_Y = 640;
const BEZEL = 22;
const RADIUS = 78;
const SCALE = SCREEN_W / SRC_W;

// Фон — одно полотно на весь набор, а карточка вырезает из него свой кусок.
// Разложенные по порядку, они складываются в непрерывную ленту без стыков:
// цвет течёт слева направо, а пятна света переходят с одной на другую.
//
// Отсюда единственное правило, которое здесь легко нарушить: всё, что тянется
// поперёк, задаётся в координатах ленты и сдвигается на -i*W. Всё, что
// повторяется на каждой карточке, должно быть либо симметричным, либо
// вертикальным — иначе на стыке появится ступенька.
const TOTAL = () => W * shots.length;

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
  { x: 1.15, y: 300, r: 520, o: 0.10 },
  { x: 2.90, y: 2180, r: 720, o: 0.08 },
  { x: 4.05, y: 200, r: 460, o: 0.10 },
  { x: 5.80, y: 2400, r: 820, o: 0.07 },
  { x: 7.10, y: 350, r: 560, o: 0.09 },
];

/** Знак: та же звуковая волна, что в иконке приложения. Ставится над
 *  подписью — карточка сразу говорит, что приложение про звук, ещё до
 *  того, как человек прочтёт текст. */
function waveMark(y) {
  const hs = [44, 76, 52, 124, 66, 94, 38];
  const gap = 22, w = 14;
  const total = hs.length * w + (hs.length - 1) * gap;
  let x = Math.round((W - total) / 2);
  let out = '';
  for (const h of hs) {
    out += `<rect x="${x}" y="${y - h / 2}" width="${w}" height="${h}" rx="${w / 2}"
              fill="#fff" opacity="0.9"/>`;
    x += w + gap;
  }
  return out;
}


/** Силуэт машины — тот же, что на значках товаров: набор должен выглядеть
 *  одной рукой сделанным. */
function carShape(cx, cy, sc) {
  return `<g transform="translate(${cx} ${cy}) scale(${sc})">
      <path d="M-150 20 q6-58 40-64 l30-46 q10-16 30-16 h100 q20 0 30 16 l30 46
               q34 6 40 64 v24 q0 14-14 14 h-272 q-14 0-14-14 z" fill="#fff"/>
      <path d="M-72 -44 h144 l22 34 h-188 z" fill="#0A3B37"/>
      <circle cx="-92" cy="58" r="30" fill="#fff"/>
      <circle cx="92" cy="58" r="30" fill="#fff"/>
    </g>`;
}

/** Звук расходится от машины в обе стороны. Дуги открыты сверху и снизу,
 *  поэтому рисунок остаётся читаемым и не превращается в мишень. */
function soundArcs(cx, cy) {
  const K = 0.643, S = 0.766; // cos и sin 50°
  let out = '';
  for (let n = 0; n < 3; n++) {
    const r = 300 + n * 78;
    const o = (0.75 - n * 0.22).toFixed(2);
    const y1 = cy - S * r, y2 = cy + S * r, dx = K * r;
    out += `<path d="M ${cx + dx} ${y1} A ${r} ${r} 0 0 1 ${cx + dx} ${y2}"
              fill="none" stroke="#fff" stroke-width="14" stroke-linecap="round" opacity="${o}"/>`;
    out += `<path d="M ${cx - dx} ${y1} A ${r} ${r} 0 0 0 ${cx - dx} ${y2}"
              fill="none" stroke="#fff" stroke-width="14" stroke-linecap="round" opacity="${o}"/>`;
  }
  return out;
}

/** Строка причины в карточке результата: название, доля и полоса. */
function causeRow(x, y, w, title, pct) {
  return `<text x="${x}" y="${y}" font-family="Manrope, Inter, sans-serif"
        font-size="46" font-weight="600" fill="#0F172A">${esc(title)}</text>
      <text x="${x + w}" y="${y}" text-anchor="end" font-family="Manrope, Inter, sans-serif"
        font-size="46" font-weight="700" fill="#0F172A">${pct}%</text>
      <rect x="${x}" y="${y + 28}" width="${w}" height="16" rx="8" fill="#D7EAE7"/>
      <rect x="${x}" y="${y + 28}" width="${Math.round(w * pct / 100)}" height="16" rx="8" fill="#0E7C7B"/>`;
}

/** Первая карточка: без телефона. Человек в магазине смотрит на неё секунду,
 *  и за эту секунду должен понять, зачем приложение — машина шумит, звук
 *  слушают, в ответ приходит причина с долей и оценкой срочности. */
function heroBody() {
  const cx = W / 2, carY = 1010;
  const cardX = 141, cardY = 1500, cardW = W - cardX * 2;
  return `  <g id="Машина">
${soundArcs(cx, carY)}
    ${carShape(cx, carY, 1.55)}
  </g>

  <g id="Результат">
    <rect x="${cardX}" y="${cardY}" width="${cardW}" height="660" rx="48" fill="#fff"/>
    <rect x="${cardX + 56}" y="${cardY + 56}" width="392" height="72" rx="36" fill="#D2790B"/>
    <text x="${cardX + 56 + 196}" y="${cardY + 105}" text-anchor="middle"
      font-family="Manrope, Inter, sans-serif" font-size="38" font-weight="700"
      fill="#fff">Shop this week</text>
    <text x="${cardX + 56}" y="${cardY + 200}" font-family="Manrope, Inter, sans-serif"
      font-size="34" font-weight="600" fill="#64748B">Likely causes</text>
${causeRow(cardX + 56, cardY + 290, cardW - 112, 'Worn alternator bearing', 45)}
${causeRow(cardX + 56, cardY + 430, cardW - 112, 'Drive belt tensioner', 30)}
${causeRow(cardX + 56, cardY + 570, cardW - 112, 'Water pump bearing', 15)}
  </g>

  <g id="Сноска">
    <text x="${cx}" y="2330" text-anchor="middle" font-family="Manrope, Inter, sans-serif"
      font-size="46" font-weight="600" fill="#fff" opacity="0.92">No scanner, no shop visit.</text>
    <text x="${cx}" y="2408" text-anchor="middle" font-family="Manrope, Inter, sans-serif"
      font-size="46" font-weight="600" fill="#fff" opacity="0.92">Just your phone.</text>
  </g>`;
}

/** Подписи. Первые три показываются в списке приложений — они важнее всех,
 *  поэтому набор начинается с результата, а не с главного экрана: человек
 *  листает карточку, чтобы понять, что он получит, а не как выглядит меню. */
const shots = [
  { hero: true, en: ['Diagnose car noises', 'by sound'] },
  { file: '1-report.png',  en: ['What that noise is —', 'and how likely'] },
  { file: '2-diagram.png', en: ['The exact part,', 'shown on a diagram'] },
  { file: '3-record.png',  en: ['Record 15 seconds', 'of the noise'] },
  { file: '4-detail.png',  en: ['Why it\u2019s that part \u2014', 'and how to check it'] },
  { file: '5-home.png',    en: ['Your car\u2019s noise,', 'explained'] },
  { file: '6-book.png',    en: ['See what service', 'is due, and when'] },
  { file: '7-garage.png',  en: ['Every car you own,', 'in one garage'] },
  { file: '8-quiz.png',    en: ['A few questions,', 'no guesswork'] },
];

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function svgFor(shot, i) {
  const b64 = shot.hero ? '' : readFileSync(join(shotsDir, shot.file)).toString('base64');
  const imgH = Math.round(SRC_H * SCALE);
  // Снимок сдвигается вверх на срезанную строку состояния; лишнее отсекает
  // маска. Двигать кадр дальше нельзя: телефон уходит за нижний край, и
  // окно ровно такой высоты, что снимка едва хватает. Нужен другой кусок —
  // снимайте экран заново с нужной прокруткой.
  const imgY = SCREEN_Y - Math.round(CROP_TOP * SCALE);
  const boxH = H - SCREEN_Y + 120;
  const total = TOTAL();

  const hueStops = JOURNEY.map((c, n) =>
    `      <stop offset="${(n / (JOURNEY.length - 1)).toFixed(4)}" stop-color="${c}"/>`).join('\n');

  const blobs = BLOBS.map(b =>
    `      <circle cx="${Math.round(b.x * W)}" cy="${b.y}" r="${b.r}"
              fill="url(#blob)" opacity="${b.o}"/>`).join('\n');

  const lines = shot.en.map((t, n) =>
    `      <text x="${W / 2}" y="${330 + n * 112}" text-anchor="middle"
        font-family="Manrope, Inter, -apple-system, sans-serif"
        font-size="88" font-weight="800" letter-spacing="-1.5"
        fill="${n === 0 ? T.ink : T.accent}"
        >${esc(t)}</text>`).join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
     width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
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
      <rect x="${SCREEN_X}" y="${SCREEN_Y}" width="${SCREEN_W}" height="${boxH}" rx="${RADIUS - BEZEL}"/>
    </clipPath>
  </defs>

  <g id="Фон">
    <g id="Лента" transform="translate(${-i * W},0)">
      <rect width="${total}" height="${H}" fill="url(#hue)"/>
${blobs}
    </g>
    <rect width="${W}" height="${H}" fill="url(#fade)"/>
  </g>

  <g id="Волна">
${waveMark(190)}
  </g>

  <g id="Подпись">
${lines}
  </g>

  ${shot.hero ? heroBody() : `<g id="Телефон">
    <g id="Корпус" filter="url(#shadow)">
      <rect x="${SCREEN_X - BEZEL}" y="${SCREEN_Y - BEZEL}"
            width="${SCREEN_W + BEZEL * 2}" height="${boxH + BEZEL}"
            rx="${RADIUS}" fill="${T.bezel}"/>
    </g>
    <g id="Экран" clip-path="url(#screenClip)">
      <image x="${SCREEN_X}" y="${imgY}" width="${SCREEN_W}" height="${imgH}"
             xlink:href="data:image/png;base64,${b64}"/>
    </g>
  </g>`}
</svg>`;
}

mkdirSync(svgDir, { recursive: true });
mkdirSync(pngDir, { recursive: true });
mkdirSync(tmpDir, { recursive: true });

for (const [i, shot] of shots.entries()) {
  const name = String(i + 1).padStart(2, '0');
  const svg = svgFor(shot, i);
  writeFileSync(join(svgDir, `${name}.svg`), svg);

  // Хром рисует SVG внутри пустой страницы: так размер пикселей задаётся
  // окном, а не догадками про то, как он масштабирует картинку.
  const html = `<!doctype html><meta charset="utf-8">
<style>html,body{margin:0;padding:0;width:${W}px;height:${H}px;overflow:hidden}</style>
${svg}`;
  const page = join(tmpDir, `${name}.html`);
  writeFileSync(page, html);
  execFileSync(CHROME, [
    '--headless', '--disable-gpu', '--hide-scrollbars',
    `--window-size=${W},${H}`,
    `--screenshot=${join(pngDir, `${name}.png`)}`,
    `file://${page}`,
  ], { stdio: 'ignore' });
  console.log(`готово ${name}: ${shot.en.join(' ')}`);
}

// Склейка всей ленты одной картинкой. Не для магазина — для глаза: только
// так видно, сошёлся ли фон на стыках. Порядок в консоли магазина обязан
// совпадать с нумерацией файлов, иначе панорама рассыплется.
const strip = shots.map((_, n) => {
  const f = join(pngDir, `${String(n + 1).padStart(2, '0')}.png`);
  return `<img src="data:image/png;base64,${readFileSync(f).toString('base64')}">`;
}).join('');
const stripPage = join(tmpDir, 'strip.html');
writeFileSync(stripPage, `<!doctype html><meta charset="utf-8">
<style>html,body{margin:0;padding:0;background:#111}
.s{display:flex;transform:scale(0.25);transform-origin:0 0}
img{display:block;width:${W}px;height:${H}px}</style>
<div class="s">${strip}</div>`);
execFileSync(CHROME, [
  '--headless', '--disable-gpu', '--hide-scrollbars',
  `--window-size=${Math.round(W * shots.length * 0.25)},${Math.round(H * 0.25)}`,
  `--screenshot=${join(here, 'appstore', 'panorama.png')}`,
  `file://${stripPage}`,
], { stdio: 'ignore' });

rmSync(tmpDir, { recursive: true, force: true });
console.log(`\nSVG: ${svgDir}\nPNG: ${pngDir}\nЛента целиком: ${join(here, 'appstore', 'panorama.png')}`);
