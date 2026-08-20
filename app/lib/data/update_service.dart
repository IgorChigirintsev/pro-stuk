import 'dart:io' show Platform;

import 'package:flutter/foundation.dart';
import 'package:in_app_update/in_app_update.dart';

import '../api.dart';

/// Обновление приложения.
///
/// Путей два, и это не прихоть. Установленное из Google Play обновляется
/// средствами самого Play: человек не уходит из приложения, скачивание идёт
/// в фоне. Установленное с сайта так обновить нельзя — Play про такую копию
/// ничего не знает и отказывает. Для неё остаётся ссылка на APK.
///
/// Поэтому сначала спрашиваем Play, и только если он не при делах —
/// сверяемся со своим сервером.
class UpdateService extends ChangeNotifier {
  /// Обновление скачано и ждёт перезапуска.
  bool downloaded = false;

  /// Ссылка на APK: заполняется, когда обновление есть, а Play недоступен.
  String? apkUrl;

  /// Версия, до которой стоит обновиться. Нужна для текста человеку.
  String? newVersion;

  bool _checked = false;

  /// Проверка при запуске. Делается один раз за сеанс: назойливость здесь
  /// раздражает сильнее, чем польза от повторов.
  Future<void> checkOnStart(String currentVersion) async {
    if (_checked) return;
    _checked = true;

    if (Platform.isAndroid && await _tryPlay()) return;
    await _trySite(currentVersion);
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

  Future<void> _trySite(String currentVersion) async {
    try {
      final v = await ApiClient().getVersion();
      if (currentVersion.isEmpty || !isNewerVersion(v.latestVersion, currentVersion)) {
        return;
      }
      newVersion = v.latestVersion;
      apkUrl = v.apkUrl;
      notifyListeners();
    } catch (_) {
      // Нет сети — молчим: обновление не то, ради чего стоит показывать ошибку.
    }
  }
}
