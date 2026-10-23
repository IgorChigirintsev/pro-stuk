import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'l10n/locale_service.dart';

import 'package:http/http.dart' as http;

import 'data/account_api.dart';
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


/// Коды ошибок сервера → строки интерфейса.
///
/// Текст сервера всегда русский, поэтому наружу он не идёт никогда: даже на
/// незнакомый код показываем свою строку. Раньше незнакомый код показывал
/// русский текст — и человек с английским интерфейсом получал ответ на чужом
/// языке. Так и вышло с самым частым отказом разбора, у которого кода не было
/// вовсе.
String _errorByCode(String? code) => switch (code) {
      'rate_limited' => S.errRateLimited,
      'no_session' => S.accSignInAgain,
      'no_checks' => S.accNoChecks,
      'no_slot' || 'slot_empty' => S.errNoCar,
      'too_large' => S.errTooLarge,
      'too_short' => S.errTooShort,
      'too_long' => S.errTooLong,
      'bad_audio' => S.errBadAudio,
      'not_car' => S.errNotCar,
      _ => S.anErrServer,
    };

class ApiClient {
  /// Клиент внедряется, чтобы разбор отказов можно было проверить тестом:
  /// именно здесь однажды потерялся тип ошибки про учётную запись.
  ApiClient({http.Client? client}) : _client = client ?? http.Client();

  final http.Client _client;

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
    String? code;
    try {
      final err = jsonDecode(body) as Map<String, dynamic>;
      code = err['code'] as String?;
      message = _errorByCode(code);
    } catch (_) {}

    // Отказы про учётную запись бросаем своим типом: по нему экран разбора
    // понимает, что надо не «Повторить», а предложить покупку. Раньше здесь
    // летел обычный ApiException, проверка `e is AccountException` никогда не
    // срабатывала, и человек с нулём проверок видел кнопку «Повторить», которая
    // вела в тот же отказ. Одиннадцать человек упёрлись в этот тупик, и ни один
    // не дошёл до оплаты — просто потому, что оплату ему не предложили.
    if (code == 'no_checks' || code == 'no_session' ||
        code == 'no_slot' || code == 'slot_empty') {
      throw AccountException(message, code: code, status: streamed.statusCode);
    }

    // 429 (лимит) и 422 (формат) повторять бессмысленно.
    final retryable =
        streamed.statusCode != 429 && streamed.statusCode != 422;
    throw ApiException(message, retryable: retryable);
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
