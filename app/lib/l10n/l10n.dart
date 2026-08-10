import 'en.dart';
import 'ru.dart';
import 'locale_service.dart';

/// Поиск строки: текущий язык → английский → русский.
/// Пока переведён не весь интерфейс, недостающие ключи честно падают
/// на русский, а не показывают пустоту или сам ключ.
class L {
  static final Map<String, Map<String, String>> tables = {'ru': ru, 'en': en};

  static String t(String key) {
    final lang = LocaleService.current.value;
    return tables[lang]?[key] ?? tables['en']?[key] ?? ru[key] ?? key;
  }
}
