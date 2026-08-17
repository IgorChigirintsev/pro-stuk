import 'api.dart';
import 'l10n/locale_service.dart';

/// Адреса сайта на языке приложения.
///
/// Интерфейс переведён на 14 языков, а ссылки вели на русские страницы —
/// человек с турецким интерфейсом попадал на русский текст. Сайт живёт по
/// тем же правилам, что и приложение: русский без префикса, остальные языки
/// с префиксом языка в пути.
class SiteLinks {
  /// Русские слаги разборов и их адреса на остальных языках.
  /// Источник — site/src/data/types.ts, SYMPTOM_SLUGS: слаг переводится
  /// вместе с текстом, поэтому адрес на каждом языке свой.
  static const _symptomEn = {
    'gremit-pod-mashinoy': 'rattling-under-car',
    'gul-podshipnika-stupitsy': 'wheel-bearing-hum',
    'gul-pri-dvizhenii': 'humming-while-driving',
    'gul-pri-povorote': 'humming-when-turning',
    'hlopki-v-glushitele': 'exhaust-backfire',
    'shchelchki-pri-povorote-rulya': 'clicking-when-steering',
    'skrezhet-pri-tormozhenii': 'grinding-when-braking',
    'skrip-tormozov': 'squealing-brakes',
    'stuk-na-nerovnostyah': 'knocking-over-bumps',
    'stuk-pri-razgone': 'knocking-when-accelerating',
    'stuk-v-dvigatele-na-holodnuyu': 'engine-knock-when-cold',
    'stuk-v-dvigatele': 'knocking-in-engine',
    'stuk-v-podveske': 'knocking-in-suspension',
    'svist-pri-zapuske': 'squeal-on-startup',
    'svist-remnya': 'belt-squeal',
    'tikanie-dvigatelya': 'ticking-engine',
    'vibratsiya-na-holostyh': 'vibration-at-idle',
    'zvon-pri-razgone': 'pinging-when-accelerating',
  };

  static String get _lang => LocaleService.current.value;

  /// Префикс языка в пути: у русского его нет — на нём написан оригинал.
  static String get _prefix => _lang == 'ru' ? '' : '/$_lang';

  /// Главная на языке приложения.
  static String get home => '$siteUrl$_prefix/';

  /// Политика конфиденциальности.
  static String get privacy =>
      _lang == 'ru' ? '$siteUrl/politika/' : '$siteUrl/$_lang/privacy/';

  /// Как это работает.
  static String get howItWorks => _lang == 'ru'
      ? '$siteUrl/kak-eto-rabotaet/'
      : '$siteUrl/$_lang/how-it-works/';

  /// Разбор симптома по русскому слагу из дерева (поле site_slug).
  /// Слага нет в списке — значит разбора на сайте не существует, и ссылку
  /// показывать нельзя: получится 404.
  static String? symptom(String? ruSlug) {
    if (ruSlug == null || ruSlug.isEmpty) return null;
    if (_lang == 'ru') return '$siteUrl/simptomy/$ruSlug/';
    final en = _symptomEn[ruSlug];
    if (en == null) return null;
    return '$siteUrl/$_lang/symptoms/$en/';
  }
}
