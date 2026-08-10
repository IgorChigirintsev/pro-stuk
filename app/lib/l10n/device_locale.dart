import 'dart:ui';

/// Подбор языка по устройству.
///
/// Логика перенесена из соседнего проекта и работает так: берём язык системы;
/// если его нет в списке — смотрим страну и подбираем ближайший подходящий
/// (Украина, Казахстан, Беларусь → русский); если и это не помогло — английский.
class DeviceLocale {
  static const supported = [
    'en', 'ru', 'zh', 'ja', 'es', 'de', 'fr', 'pt', 'ko', 'it',
    'tr', 'ar', 'pl', 'nl',
  ];

  /// Страна → самый близкий из поддерживаемых языков.
  static const _countryToLang = <String, String>{
    'RU': 'ru', 'KZ': 'ru', 'BY': 'ru', 'UA': 'ru', 'KG': 'ru',
    'TJ': 'ru', 'TM': 'ru', 'UZ': 'ru', 'MD': 'ru', 'AM': 'ru',
    'AZ': 'ru', 'GE': 'ru',
    'CN': 'zh', 'TW': 'zh', 'HK': 'zh', 'MO': 'zh', 'SG': 'zh',
    'JP': 'ja',
    'KR': 'ko', 'KP': 'ko',
    'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'CL': 'es',
    'PE': 'es', 'VE': 'es', 'EC': 'es', 'GT': 'es', 'CU': 'es',
    'BO': 'es', 'DO': 'es', 'HN': 'es', 'PY': 'es', 'SV': 'es',
    'NI': 'es', 'CR': 'es', 'PA': 'es', 'UY': 'es', 'PR': 'es',
    'BR': 'pt', 'PT': 'pt', 'AO': 'pt', 'MZ': 'pt',
    'DE': 'de', 'AT': 'de', 'LI': 'de', 'LU': 'de',
    'FR': 'fr', 'MC': 'fr', 'BJ': 'fr', 'BF': 'fr', 'CI': 'fr',
    'SN': 'fr', 'ML': 'fr', 'NE': 'fr', 'GN': 'fr', 'TG': 'fr',
    'IT': 'it', 'VA': 'it', 'SM': 'it',
    'TR': 'tr', 'CY': 'tr',
    'SA': 'ar', 'AE': 'ar', 'EG': 'ar', 'IQ': 'ar', 'DZ': 'ar',
    'SD': 'ar', 'MA': 'ar', 'YE': 'ar', 'SY': 'ar', 'LY': 'ar',
    'TN': 'ar', 'JO': 'ar', 'KW': 'ar', 'LB': 'ar', 'OM': 'ar',
    'QA': 'ar', 'BH': 'ar',
    'PL': 'pl',
    'NL': 'nl', 'SR': 'nl', 'AW': 'nl',
  };

  static String getLanguage() {
    final locale = PlatformDispatcher.instance.locale;
    if (supported.contains(locale.languageCode)) return locale.languageCode;
    final country = locale.countryCode?.toUpperCase();
    if (country != null && _countryToLang.containsKey(country)) {
      return _countryToLang[country]!;
    }
    return 'en';
  }
}
