/**
 * Привязка схем узлов к статьям: по ключевым словам в слаге.
 * Порядок важен — берётся первое совпадение (от узкого к широкому).
 * Файлы схем лежат в public/shemy/<name>.svg.
 */
const RULES: [RegExp, string, string][] = [
  [/stupich|stupits|podshipnika-stupitsy|lyuft-stupits/, 'stupica', 'ступичный подшипник'],
  [/shrus|pylnik|granat/, 'shrus', 'ШРУС с пыльником'],
  [/stoek-stabilizatora|stojki-stabilizatora|stabilizator/, 'stabilizator', 'стойка стабилизатора'],
  [/amortizator|otbojnik|pruzhin|prosevsh|teleskop/, 'amortizator', 'амортизатор'],
  [/sharov/, 'sharovaya', 'шаровая опора'],
  [/sajlentblok/, 'sajlentblok', 'сайлентблок'],
  [/(^|-)tsep|grm|fazovrash|fazoregul|ep6/, 'tsep-grm', 'цепь ГРМ'],
  [/pomp/, 'pompa', 'помпа'],
  [/turbin/, 'turbina', 'турбина'],
  [/katalizator/, 'katalizator', 'катализатор'],
  [/glushitel|gofr|vyhlop|hlopki|teplozashchit|ryov|rychit|kollektor/, 'glushitel', 'выхлопная система'],
  [/remn|rolik|obgonnoj|natyazhitel|svist-remen/, 'remen', 'ремень навесных агрегатов'],
  [/generator/, 'generator', 'генератор'],
  [/starter|bendiks|vtyagivayushch|akb|akkumulyator|zapuske-dvigatelya|pri-zapuske/, 'starter', 'стартер'],
  [/benzonasos/, 'generator', 'узел электрооборудования'],
  [/vyzhimn/, 'vyzhimnoj', 'выжимной подшипник'],
  [/stseplen|probuksovka/, 'stseplenie', 'сцепление'],
  [/support|napravlyayushchih|bienie-rulya/, 'support', 'тормозной суппорт'],
  [/kolodok|kolodki|tormoz|skrezhet|indikator-iznosa/, 'kolodki', 'тормозные колодки и диск'],

  [/mahovik/, 'mahovik', 'двухмассовый маховик'],
  [/stseplen/, 'stseplenie', 'сцепление'],
  [/kardan|krestovin|podvesn/, 'kardan', 'карданный вал'],
  [/reduktor|glavnoj-pary|razdatk|polnogo-privoda|haldex/, 'reduktor', 'редуктор'],
  [/korobk|peredach|sinhroniz|akpp|variator|dsg|kpp|shlits/, 'korobka', 'коробка передач'],
  [/rejk|nakonechnik|rulevyh-tyag|gur|eur|rulya|rulevoj/, 'rejka', 'рулевая рейка'],
  [/opor-dvigatelya|opory-dvigatelya|podushka-dvigatelya|opornyh-podshipnikov|opornyj/, 'opora-dvigatelya', 'опора двигателя'],
  [/gidrokompensator|klapan|zazor|tikan|tsokot|tsokayut|dizelenie/, 'gidrokompensator', 'клапанный механизм'],
  [/shatun|vkladysh|porshn|zadir|palts|detonatsi|zvon|davleniya-masla|maslo/, 'porshen', 'поршень и вкладыши'],
];

export interface ArticleSchema {
  file: string;
  /** Подпись для alt и заголовка изображения. */
  label: string;
}

/** Схема для статьи или null, если подходящей нет. */
export function schemaForArticle(slug: string): ArticleSchema | null {
  for (const [re, file, label] of RULES) {
    if (re.test(slug)) return { file, label };
  }
  return null;
}
