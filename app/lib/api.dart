import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'l10n/locale_service.dart';

import 'package:http/http.dart' as http;

import 'models.dart';
import 'strings.dart';

/// Адрес API задаётся при сборке: --dart-define=API_BASE_URL=https://api.…
const apiBaseUrl = String.fromEnvironment(
  'API_BASE_URL',
  defaultValue: 'https://api.example.kz',
);

/// Адрес сайта (для ссылок в настройках).
const siteUrl = String.fromEnvironment(
  'SITE_URL',
  defaultValue: 'https://example.kz',
);

/// Ошибка API с человекочитаемым текстом для экрана.
class ApiException implements Exception {
  final String message;
  final bool retryable;
  const ApiException(this.message, {this.retryable = true});
}

class VersionInfo {
  final String latestVersion;
  final String apkUrl;
  const VersionInfo({required this.latestVersion, required this.apkUrl});
}

/// Коды ошибок сервера → строки интерфейса. Незнакомый код даёт null:
/// тогда показывается текст сервера, а не пустота.
String? _errorByCode(String? code) => switch (code) {
      'rate_limited' => S.errRateLimited,
      'no_session' => S.accSignInAgain,
      'too_large' => S.errTooLarge,
      'too_short' => S.errTooShort,
      'too_long' => S.errTooLong,
      'bad_audio' => S.errBadAudio,
      _ => null,
    };

class ApiClient {
  final _client = http.Client();

  /// Полный цикл: аудио + анкета → отчёт. Ожидание до 80 секунд.
  Future<ReportData> sendReport({
    required File wavFile,
    required String deviceId,
    /// Место гаража, с которого списывается проверка, и токен сессии.
    /// Без них сервер работает по старому дневному лимиту — так живут
    /// сборки, вышедшие до аккаунтов.
    String slotId = '',
    String? session,
    required Car car,
    required List<AnswerLog> answers,
    required String leafId,
  }) async {
    final uri = Uri.parse('$apiBaseUrl/api/v1/report');
    final req = http.MultipartRequest('POST', uri)
      ..headers.addAll({
        if (session != null) 'Authorization': 'Bearer $session',
      })
      ..fields['meta'] = jsonEncode({
        'device_id': deviceId,
        if (slotId.isNotEmpty) 'slot_id': slotId,
        'car': car.toApiJson(),
        'lang': LocaleService.current.value,
        'answers': answers.map((a) => a.toJson()).toList(),
        'leaf_id': leafId,
      })
      ..files.add(await http.MultipartFile.fromPath('audio', wavFile.path,
          filename: 'record.wav'));

    http.StreamedResponse streamed;
    try {
      streamed = await _client.send(req).timeout(const Duration(seconds: 95));
    } on TimeoutException {
      throw ApiException(S.anErrTimeout);
    } on SocketException {
      throw ApiException(S.anErrNetwork);
    }
    final body = await streamed.stream.bytesToString();

    if (streamed.statusCode == 200) {
      return ReportData.fromJson(jsonDecode(body) as Map<String, dynamic>);
    }
    // Сервер присылает {"code": "...", "error": "текст"}. Текст у него всегда
    // русский, поэтому показываем свой перевод по коду, а сам текст оставляем
    // запасным вариантом — на случай кода, которого это приложение ещё не знает.
    String message = S.anErrServer;
    try {
      final err = jsonDecode(body) as Map<String, dynamic>;
      final local = _errorByCode(err['code'] as String?);
      if (local != null) {
        message = local;
      } else if (err['error'] is String && (err['error'] as String).isNotEmpty) {
        message = err['error'] as String;
      }
    } catch (_) {}
    // 429 (лимит) и 422 (формат) повторять бессмысленно.
    final retryable =
        streamed.statusCode != 429 && streamed.statusCode != 422;
    throw ApiException(message, retryable: retryable);
  }

  Future<VersionInfo> getVersion() async {
    final uri = Uri.parse('$apiBaseUrl/api/v1/version');
    final resp = await _client.get(uri).timeout(const Duration(seconds: 10));
    if (resp.statusCode != 200) {
      throw ApiException(S.anErrServer, retryable: true);
    }
    final j = jsonDecode(resp.body) as Map<String, dynamic>;
    return VersionInfo(
      latestVersion: j['latest_version'] as String? ?? '',
      apkUrl: j['apk_url'] as String? ?? '',
    );
  }
}

/// Сравнение версий вида «1.2.3»: true, если remote новее local.
bool isNewerVersion(String remote, String local) {
  List<int> parse(String v) => v
      .split('.')
      .map((p) => int.tryParse(p.replaceAll(RegExp(r'[^0-9]'), '')) ?? 0)
      .toList();
  final r = parse(remote), l = parse(local);
  for (var i = 0; i < 3; i++) {
    final rv = i < r.length ? r[i] : 0;
    final lv = i < l.length ? l[i] : 0;
    if (rv != lv) return rv > lv;
  }
  return false;
}
