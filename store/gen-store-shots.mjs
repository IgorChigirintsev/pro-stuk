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
const CROP_H = SRC_H - CROP_TOP - CROP_BOTTOM;

// Рамка устройства.
const SCREEN_W = 900;
const SCREEN_H = Math.round(SCREEN_W * CROP_H / SRC_W);
const SCREEN_X = Math.round((W - SCREEN_W) / 2);
const SCREEN_Y = 560;
const BEZEL = 20;
const RADIUS = 64;

const T = {
  deep: '#0B4F4A',   // фон, тёмная часть
  teal: '#0E7C7B',   // фон, светлая часть
  ink: '#FFFFFF',
  soft: 'rgba(255,255,255,0.72)',
};

/** Подписи. Первые три показываются в списке приложений — они важнее всех. */
const shots = [
  { file: '1-home.png',   title: 'Что там стучит —',   accent: 'понятным языком',
    en: ['Your car’s noise,', 'explained'] },
  { file: '2-record.png', title: '', accent: '',
    en: ['Record 15 seconds', 'of the noise'] },
  { file: '3-verdict.png', title: '', accent: '',
    en: ['A likely cause —', 'and how urgent it is'] },
  { file: '4-quiz.png',   title: '', accent: '',
    en: ['A few questions,', 'no guesswork'] },
  { file: '5-book.png',   title: '', accent: '',
    en: ['See what service', 'is due, and when'] },
  { file: '6-garage.png', title: '', accent: '',
    en: ['Every car you own,', 'in one garage'] },
];

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function svgFor(shot, i) {
  const b64 = readFileSync(join(shotsDir, shot.file)).toString('base64');
  // Снимок кладём во всю ширину экрана рамки и сдвигаем вверх на срезанную
  // строку состояния; лишнее отсекает маска.
  const scale = SCREEN_W / SRC_W;
  const imgH = Math.round(SRC_H * scale);
  const imgY = SCREEN_Y - Math.round(CROP_TOP * scale);

  const lines = shot.en.map((t, n) =>
    `      <text x="${W / 2}" y="${250 + n * 96}" text-anchor="middle"
        font-family="Manrope, Inter, -apple-system, sans-serif"
        font-size="76" font-weight="700" fill="${n === 0 ? T.ink : T.soft}"
        >${esc(t)}</text>`).join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
     width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${T.teal}"/>
      <stop offset="1" stop-color="${T.deep}"/>
    </linearGradient>
    <clipPath id="screenClip">
      <rect x="${SCREEN_X}" y="${SCREEN_Y}" width="${SCREEN_W}" height="${SCREEN_H}" rx="${RADIUS - BEZEL}"/>
    </clipPath>
  </defs>

  <g id="Фон">
    <rect width="${W}" height="${H}" fill="url(#bg)"/>
  </g>

  <g id="Подпись">
${lines}
  </g>

  <g id="Телефон">
    <rect x="${SCREEN_X - BEZEL}" y="${SCREEN_Y - BEZEL}"
          width="${SCREEN_W + BEZEL * 2}" height="${SCREEN_H + BEZEL * 2}"
          rx="${RADIUS}" fill="#0A0A0A"/>
    <g id="Экран" clip-path="url(#screenClip)">
      <image x="${SCREEN_X}" y="${imgY}" width="${SCREEN_W}" height="${imgH}"
             xlink:href="data:image/png;base64,${b64}"/>
    </g>
  </g>
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

rmSync(tmpDir, { recursive: true, force: true });
console.log(`\nSVG: ${svgDir}\nPNG: ${pngDir}`);
