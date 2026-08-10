import 'de.dart';
import 'en.dart';
import 'es.dart';
import 'fr.dart';
import 'it.dart';
import 'ja.dart';
import 'ko.dart';
import 'nl.dart';
import 'pl.dart';
import 'tr.dart';
import 'zh.dart';
import 'pt.dart';
import 'ru.dart';
import 'locale_service.dart';

/// Поиск строки: текущий язык → английский → русский.
/// Пока переведён не весь интерфейс, недостающие ключи честно падают
/// на русский, а не показывают пустоту или сам ключ.
class L {
  static final Map<String, Map<String, String>> tables = {'ru': ru, 'en': en, 'de': de, 'es': es, 'fr': fr, 'pt': pt, 'it': it, 'pl': pl, 'tr': tr, 'nl': nl, 'zh': zh, 'ja': ja, 'ko': ko};

  static String t(String key) {
    final lang = LocaleService.current.value;
    return tables[lang]?[key] ?? tables['en']?[key] ?? ru[key] ?? key;
  }
}
