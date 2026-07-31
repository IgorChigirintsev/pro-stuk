import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:http/http.dart' as http;

import 'models.dart';

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

class ApiClient {
  final _client = http.Client();

  /// Полный цикл: аудио + анкета → отчёт. Ожидание до 80 секунд.
  Future<ReportData> sendReport({
    required File wavFile,
    required String deviceId,
    required Car car,
    required List<AnswerLog> answers,
    required String leafId,
  }) async {
    final uri = Uri.parse('$apiBaseUrl/api/v1/report');
    final req = http.MultipartRequest('POST', uri)
      ..fields['meta'] = jsonEncode({
        'device_id': deviceId,
        'car': car.toJson(),
        'answers': answers.map((a) => a.toJson()).toList(),
        'leaf_id': leafId,
      })
      ..files.add(await http.MultipartFile.fromPath('audio', wavFile.path,
          filename: 'record.wav'));

    http.StreamedResponse streamed;
    try {
      streamed = await _client.send(req).timeout(const Duration(seconds: 80));
    } on TimeoutException {
      throw const ApiException(
          'Сервер отвечает слишком долго. Попробуйте ещё раз.');
    } on SocketException {
      throw const ApiException(
          'Нет связи с сервером. Проверьте интернет и попробуйте ещё раз.');
    }
    final body = await streamed.stream.bytesToString();

    if (streamed.statusCode == 200) {
      return ReportData.fromJson(jsonDecode(body) as Map<String, dynamic>);
    }
    // Сервер присылает {"error": "текст"} — показываем его как есть.
    String message = 'Не получилось проанализировать, попробуйте ещё раз.';
    try {
      final err = jsonDecode(body) as Map<String, dynamic>;
      if (err['error'] is String && (err['error'] as String).isNotEmpty) {
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
      throw const ApiException('Сервер недоступен', retryable: true);
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
