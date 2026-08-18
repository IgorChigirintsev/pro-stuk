import 'locale_service.dart';

/// Справочник машин собран для русского рынка: марки, модели и поколения в нём
/// написаны кириллицей. Показывать немцу «3 серия» или «I [2-й рестайлинг]»
/// нельзя, а переводить 1382 подписи поколений незачем — весь русский текст
/// в них сводится к нескольким словам.
///
/// Хранится в профиле машины всегда ключ справочника (русский), а латиница
/// только показывается. Иначе смена языка ломала бы поиск поколений у уже
/// сохранённой машины.

/// Марки: латиница одна на все нерусские языки — это имена собственные.
const _makes = <String, String>{
  'ВАЗ (Lada)': 'Lada',
  'ВИС': 'VIS',
  'ГАЗ': 'GAZ',
  'ЗАЗ': 'ZAZ',
  'ИЖ': 'IZH',
  'ЛуАЗ': 'LuAZ',
  'Москвич': 'Moskvich',
  'ТагАЗ': 'TagAZ',
  'УАЗ': 'UAZ',
};

const _models = <String, String>{
  // BMW и Mercedes: международные названия рядов.
  '1 серия': '1 Series',
  '2 серия': '2 Series',
  '2 серия Active Tourer': '2 Series Active Tourer',
  '3 серия': '3 Series',
  '4 серия': '4 Series',
  '5 серия': '5 Series',
  '6 серия': '6 Series',
  '7 серия': '7 Series',
  '8 серия': '8 Series',
  'A-Класс': 'A-Class',
  'B-Класс': 'B-Class',
  'C-Класс': 'C-Class',
  'CL-Класс': 'CL-Class',
  'CLA-Класс': 'CLA-Class',
  'CLC-Класс': 'CLC-Class',
  'CLE-Класс': 'CLE-Class',
  'CLK-Класс': 'CLK-Class',
  'CLS-Класс': 'CLS-Class',
  'E-Класс': 'E-Class',
  'G-Класс': 'G-Class',
  'GL-Класс': 'GL-Class',
  'GLA-Класс': 'GLA-Class',
  'GLB-Класс': 'GLB-Class',
  'GLC-Класс': 'GLC-Class',
  'GLE-Класс': 'GLE-Class',
  'GLK-Класс': 'GLK-Class',
  'GLS-Класс': 'GLS-Class',
  'ML-Класс': 'ML-Class',
  'R-Класс': 'R-Class',
  'S-Класс': 'S-Class',
  'SL-Класс': 'SL-Class',
  'SLC-Класс': 'SLC-Class',
  'SLK-Класс': 'SLK-Class',
  'V-Класс': 'V-Class',
  'X-Класс': 'X-Class',
  // Машины российского рынка: транслитерация собственных имён.
  '1103 (Славута)': '1103 (Slavuta)',
  '1105 (Дана)': '1105 (Dana)',
  '1302 (Волынь)': '1302 (Volyn)',
  '2120 Надежда': '2120 Nadezhda',
  '2126 (Ода)': '2126 (Oda)',
  '21261 (Фабула)': '21261 (Fabula)',
  '2330 (Тигр)': '2330 (Tigr)',
  '2345 (Жигули)': '2345 (Zhiguli)',
  '310221 (Волга)': '310221 (Volga)',
  '31029 Волга': '31029 Volga',
  '3110 Волга': '3110 Volga',
  '31105 Волга': '31105 Volga',
  '3111 (Волга)': '3111 (Volga)',
  'ГАЗель': 'GAZelle',
  'ГАЗель NEXT': 'GAZelle NEXT',
  'Профи': 'Profi',
  'С10': 'S10',
  'Святогор': 'Svyatogor',
  'Соболь': 'Sobol',
  'Фермер': 'Fermer',
  'Chana SC6350С': 'Chana SC6350C',
};

/// Слова, из которых состоит русский текст в подписях поколений.
const _genWords = <String, Map<String, String>>{
  'en': {'face': 'facelift', 'now': 'present', 'euro': 'European market', 'all': 'All'},
  'de': {'face': 'Facelift', 'now': 'heute', 'euro': 'europäischer Markt', 'all': 'Alle'},
  'es': {'face': 'restyling', 'now': 'actualidad', 'euro': 'mercado europeo', 'all': 'Todos'},
  'fr': {'face': 'restylage', 'now': 'aujourd’hui', 'euro': 'marché européen', 'all': 'Tous'},
  'it': {'face': 'restyling', 'now': 'oggi', 'euro': 'mercato europeo', 'all': 'Tutti'},
  'pt': {'face': 'reestilização', 'now': 'atual', 'euro': 'mercado europeu', 'all': 'Todos'},
  'pl': {'face': 'lifting', 'now': 'obecnie', 'euro': 'rynek europejski', 'all': 'Wszystkie'},
  'tr': {'face': 'makyaj', 'now': 'günümüz', 'euro': 'Avrupa pazarı', 'all': 'Tümü'},
  'nl': {'face': 'facelift', 'now': 'heden', 'euro': 'Europese markt', 'all': 'Alle'},
  'zh': {'face': '改款', 'now': '至今', 'euro': '欧洲市场', 'all': '全部'},
  'ja': {'face': 'マイナーチェンジ', 'now': '現行', 'euro': '欧州仕様', 'all': 'すべて'},
  'ko': {'face': '페이스리프트', 'now': '현재', 'euro': '유럽 시장', 'all': '전체'},
  'ar': {'face': 'تحديث', 'now': 'حتى الآن', 'euro': 'السوق الأوروبية', 'all': 'الكل'},
};

final _rawByLatin = <String, String>{
  for (final e in _makes.entries) e.value: e.key,
  for (final e in _models.entries) e.value: e.key,
};

bool get _ru => LocaleService.current.value == 'ru';

Map<String, String> get _words =>
    _genWords[LocaleService.current.value] ?? _genWords['en']!;

/// Марка для показа. Неизвестная — уже латиницей, отдаём как есть.
String carMake(String v) => _ru ? v : (_makes[v] ?? v);

String carModel(String v) => _ru ? v : (_models[v] ?? v);

/// Обратный перевод: в профиле могла остаться латиница, если машину заводили
/// на другом языке. Без него у такой машины не нашлись бы поколения.
String carRaw(String v) => _rawByLatin[v] ?? v;

final _facelift = RegExp(r'\[(\d+)-й рестайлинг( \d+)?\]');

/// Подпись поколения: «I [2-й рестайлинг] (2010–н.в.)» → «I [facelift 2] (2010–present)».
String genLabel(String v) {
  if (_ru) return v;
  final w = _words;
  return v
      .replaceAllMapped(_facelift,
          (m) => '[${w['face']} ${m[1]}${m[2] ?? ''}]')
      .replaceAll('Рестайлинг', w['face']!)
      .replaceAll('рестайлинг', w['face']!)
      .replaceAll('н.в.', w['now']!)
      .replaceAll('Европейский рынок', w['euro']!)
      .replaceAll('Все', w['all']!);
}
