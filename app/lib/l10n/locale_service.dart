import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'device_locale.dart';

/// Текущий язык интерфейса: по устройству, если пользователь не выбрал свой.
class LocaleService {
  static const _key = 'lang';
  static final ValueNotifier<String> current =
      ValueNotifier(DeviceLocale.getLanguage());

  /// Пустая строка в настройках означает «как на устройстве».
  static Future<void> init() async {
    final prefs = await SharedPreferences.getInstance();
    final saved = prefs.getString(_key) ?? '';
    if (saved.isNotEmpty && DeviceLocale.supported.contains(saved)) {
      current.value = saved;
    }
  }

  static Future<void> set(String? lang) async {
    final prefs = await SharedPreferences.getInstance();
    if (lang == null || !DeviceLocale.supported.contains(lang)) {
      await prefs.remove(_key);
      current.value = DeviceLocale.getLanguage();
      return;
    }
    await prefs.setString(_key, lang);
    current.value = lang;
  }

  /// Названия на самих языках — так их узнают без флагов и без перевода.
  static const names = <String, String>{
    'en': 'English', 'ru': 'Русский', 'zh': '中文', 'ja': '日本語',
    'es': 'Español', 'de': 'Deutsch', 'fr': 'Français', 'pt': 'Português',
    'ko': '한국어', 'it': 'Italiano', 'tr': 'Türkçe', 'ar': 'العربية',
    'pl': 'Polski', 'nl': 'Nederlands',
  };
}
