import parts from './schemaParts.json';

/**
 * Подбор схемы и деталей для подсветки по тексту причины.
 *
 * Сопоставление явное, а не по совпадению слов: «изношенные колодки» должны
 * подсветить накладку, а не тормозной диск, чьё название тоже содержит «тормоз».
 * Если причина названа общо, подсвечиваем изнашиваемые детали выбранного узла.
 */
export interface PartMark {
  n: number;
  label: string;
  x: number;
  y: number;
  r: number;
}

interface SchemaEntry {
  title: string;
  parts: PartMark[];
  partsMobile: PartMark[];
}

const TABLE = parts as unknown as Record<string, SchemaEntry>;

/** Причина → схема + детали, которые изнашиваются в этом узле. */
const PICK: { re: RegExp; key: string; def: RegExp }[] = [
  { re: /цеп[ьи]\s*грм|растяну|успокоител|башмак/, key: 'shemy/tsep-grm', def: /цепь|натяжител/ },
  { re: /гидрокомпенсатор|компенсатор|зазор.*клапан|клапан.*зазор|тика/, key: 'shemy/gidrokompensator', def: /гидрокомпенсатор/ },
  { re: /шатунн|вкладыш|детонац|порш/, key: 'shemy/porshen', def: /вкладыш/ },
  { re: /маховик|демпфер/, key: 'shemy/mahovik', def: /демпферные/ },
  { re: /ремен|ролик|натяжн/, key: 'shemy/remen', def: /ремень|ролик/ },
  { re: /помп|охлажд/, key: 'shemy/pompa', def: /вал с подшипником/ },
  { re: /генератор|обгонн/, key: 'shemy/generator', def: /подшипник|шкив/ },
  { re: /стартер|бендикс|втягива/, key: 'shemy/starter', def: /бендикс/ },
  { re: /турбин|наддув/, key: 'shemy/turbina', def: /подшипник вала/ },
  { re: /опор[аы]\s*двигател|подушк/, key: 'shemy/opora-dvigatelya', def: /резиновая/ },
  { re: /ступичн|ступиц/, key: 'shemy/stupica', def: /тела качения/ },
  { re: /шаров/, key: 'shemy/sharovaya', def: /шар пальца|пыльник/ },
  { re: /сайлентблок/, key: 'shemy/sajlentblok', def: /резиновая вставка/ },
  { re: /стабилизатор/, key: 'shemy/stabilizator', def: /стойка стабилизатора|втулка/ },
  { re: /амортизатор|стойк[аи]|отбойник/, key: 'shemy/amortizator', def: /поршень с клапанами/ },
  { re: /рейк|рулев[ао]|наконечник/, key: 'shemy/rejka', def: /зубчатая рейка|наконечник/ },
  { re: /колодк|скрежет.*тормоз|тормоз.*колодк/, key: 'shemy/kolodki', def: /накладка/ },
  { re: /суппорт|направляющ.*палец|тормозн.*шланг/, key: 'shemy/support', def: /поршень суппорта|направляющий/ },
  { re: /сцеплени|корзин|ведом.*диск/, key: 'shemy/stseplenie', def: /ведомый диск|диафрагменная/ },
  { re: /выжимн/, key: 'shemy/vyzhimnoj', def: /выжимной/ },
  { re: /шрус|привод/, key: 'shemy/shrus', def: /обойма с шариками|пыльник/ },
  { re: /кардан|крестовин|подвесн/, key: 'shemy/kardan', def: /крестовина|подвесной/ },
  { re: /редуктор|главн.*пар|полуос/, key: 'shemy/reduktor', def: /главная пара/ },
  { re: /коробк|синхронизатор|передач/, key: 'shemy/korobka', def: /синхронизатор|шестерня/ },
  { re: /катализатор|сот/, key: 'shemy/katalizator', def: /соты/ },
  { re: /глушител|гофр|резонатор|выхлоп/, key: 'shemy/glushitel', def: /корпус глушителя|гофра/ },
  { re: /коленвал|шейк/, key: 'shemy/porshen', def: /шейка коленвала/ },
];

/** Уточнения: слово в причине → какие подписи подсветить дополнительно. */
const FOCUS: [RegExp, RegExp][] = [
  [/цеп/, /цепь/],
  [/успокоител/, /успокоител/],
  [/натяжител|башмак/, /натяжител|башмак/],
  [/звезд|распредвал/, /звезда/],
  [/кольц/, /кольца/],
  [/палец|пальц/, /палец/],
  [/вкладыш/, /вкладыш/],
  [/шейк|коленвал/, /коленвал/],
  [/накладк|колодк/, /накладка|колодка/],
  [/диск/, /диск/],
  [/шланг/, /шланг/],
  [/пыльник/, /пыльник/],
  [/пружин/, /пружина|пружины/],
  [/втулк/, /втулка/],
  [/сот/, /соты/],
  [/гофр/, /гофра/],
  [/клапан/, /клапан|тарелка/],
  [/кулач|распредвал/, /кулачок|распредвал/],
  [/шестерн/, /шестерня|шестерни/],
  [/подшипник/, /подшипник|тела качения/],
];

const norm = (s: string) => s.toLowerCase().replace(/ё/g, 'е');

export interface Highlight {
  key: string;
  title: string;
  /** Номера деталей для подсветки. Пусто не бывает: есть запасной набор узла. */
  marks: number[];
}

export function highlightFor(causes: string[]): Highlight | null {
  const text = norm(causes.filter(Boolean).join(' '));
  // главная причина весит больше: ищем схему сначала по ней
  const first = norm(causes[0] ?? '');
  const hit = PICK.find((p) => p.re.test(first)) ?? PICK.find((p) => p.re.test(text));
  if (!hit) return null;

  const entry = TABLE[hit.key];
  if (!entry) return null;

  const byFocus = new Set<number>();
  for (const [causeRe, partRe] of FOCUS) {
    if (!causeRe.test(first)) continue;
    for (const p of entry.parts) if (partRe.test(norm(p.label))) byFocus.add(p.n);
  }
  const marks = byFocus.size
    ? [...byFocus]
    : entry.parts.filter((p) => hit.def.test(norm(p.label))).map((p) => p.n);

  return { key: hit.key, title: entry.title, marks };
}

export function partsOf(key: string, mobile = false): PartMark[] {
  const e = TABLE[key];
  if (!e) return [];
  return mobile ? e.partsMobile : e.parts;
}

export const VIEWBOX = { desktop: [790, 384], mobile: [400, 438] } as const;
