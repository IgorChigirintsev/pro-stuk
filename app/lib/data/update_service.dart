import 'dart:io' show Platform;

import 'package:flutter/foundation.dart';
import 'package:in_app_update/in_app_update.dart';


/// Обновление приложения силами Google Play.
///
/// Раньше был и второй путь: если Play не при делах, приложение спрашивало
/// наш сервер и предлагало скачать APK — так обновлялись копии, поставленные
/// файлом с сайта. Этой раздачи больше нет, приложение живёт в двух
/// магазинах. Мало того, путь стал вредным: Android не ставит файл,
/// подписанный нашим ключом, поверх установки из Play — подписи разные, и
/// человек получал бы отказ установщика вместо обновления.
class UpdateService extends ChangeNotifier {
  /// Обновление скачано и ждёт перезапуска.
  bool downloaded = false;

  bool _checked = false;

  /// Проверка при запуске. Делается один раз за сеанс: назойливость здесь
  /// раздражает сильнее, чем польза от повторов.
  Future<void> checkOnStart() async {
    if (_checked) return;
    _checked = true;

    // На iPhone обновляет App Store, и больше никто.
    if (!Platform.isAndroid) return;
    await _tryPlay();
  }

  /// Обновление через Play. Берём гибкое, а не немедленное: немедленное
  /// закрывает приложение до конца установки, и человек, который открыл его
  /// послушать стук в дороге, остаётся ни с чем.
  Future<bool> _tryPlay() async {
    try {
      final info = await InAppUpdate.checkForUpdate();
      if (info.updateAvailability != UpdateAvailability.updateAvailable) {
        return false;
      }
      if (info.flexibleUpdateAllowed) {
        final res = await InAppUpdate.startFlexibleUpdate();
        if (res == AppUpdateResult.success) {
          downloaded = true;
          notifyListeners();
        }
        return true;
      }
      if (info.immediateUpdateAllowed) {
        await InAppUpdate.performImmediateUpdate();
        return true;
      }
      return false;
    } catch (_) {
      // Приложение поставлено не из Play, либо сервисов Play нет вовсе.
      return false;
    }
  }

  /// Установка обновления, скачанного в фоне. Приложение при этом
  /// перезапускается, поэтому спрашиваем человека, а не делаем молча.
  Future<void> installDownloaded() async {
    try {
      await InAppUpdate.completeFlexibleUpdate();
    } catch (_) {
      // Не установилось — не беда, Play предложит снова при следующем запуске.
    }
  }

}
