
import 'package:shared_preferences/shared_preferences.dart';
import 'package:flutter/foundation.dart';

import '../strings.dart';

/// Единицы пробега. Внутри всё хранится в километрах — это одна система
/// координат для сервисных интервалов и для сервера. Мили только на экране:
/// иначе при смене страны или единиц поехали бы все сохранённые записи.
class Units {
  static const _key = 'units';
  static const _mile = 1.609344;

  /// Страны, где дороги меряют милями.
  static const _imperial = {'US', 'GB', 'LR', 'MM'};

  static final ValueNotifier<bool> miles = ValueNotifier(_byCountry());

  static bool _byCountry() {
    final c = PlatformDispatcher.instance.locale.countryCode?.toUpperCase();
    return c != null && _imperial.contains(c);
  }

  static Future<void> init() async {
    final prefs = await SharedPreferences.getInstance();
    final saved = prefs.getString(_key) ?? '';
    if (saved == 'mi') {
      miles.value = true;
    } else if (saved == 'km') {
      miles.value = false;
    }
  }

  /// null — вернуться к определению по стране.
  static Future<void> set(bool? useMiles) async {
    final prefs = await SharedPreferences.getInstance();
    if (useMiles == null) {
      await prefs.remove(_key);
      miles.value = _byCountry();
      return;
    }
    await prefs.setString(_key, useMiles ? 'mi' : 'km');
    miles.value = useMiles;
  }

  static String get label => miles.value ? S.unitMi : S.unitKm;

  /// Километры → то, что показываем.
  static int display(int km) =>
      miles.value ? (km / _mile).round() : km;

  /// Введённое пользователем → километры для хранения.
  static int store(int shown) =>
      miles.value ? (shown * _mile).round() : shown;

  /// «150000 км» или «93206 mi».
  static String fmt(int km) => '${display(km)} $label';
}
