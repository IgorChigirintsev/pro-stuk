import 'dart:convert';

import 'package:http/http.dart' as http;

import '../api.dart' show apiBaseUrl, ApiException;
import '../strings.dart';
import 'account.dart';

/// Обращения к серверу по учётной записи.
///
/// Все ошибки приводятся к коду: сервер шлёт `code`, приложение показывает по
/// нему свой текст на языке пользователя. Русский текст сервера остаётся
/// запасным вариантом на случай кода, которого эта сборка ещё не знает.
class AccountApi {
  AccountApi({http.Client? client}) : _client = client ?? http.Client();

  final http.Client _client;

  static const _timeout = Duration(seconds: 20);

  Uri _u(String path, [Map<String, String>? query]) =>
      Uri.parse('$apiBaseUrl/api/v1$path').replace(queryParameters: query);

  Map<String, String> _headers(String? session) => {
        'Content-Type': 'application/json',
        if (session != null) 'Authorization': 'Bearer $session',
      };

  /// Вход: токен от Google или Apple меняется на сессию.
  Future<({String session, AccountState account})> signIn({
    required String provider,
    required String token,
  }) async {
    final resp = await _client
        .post(_u('/auth'),
            headers: _headers(null),
            body: jsonEncode({'provider': provider, 'token': token}))
        .timeout(_timeout);
    final body = _decode(resp);
    return (
      session: body['session'] as String,
      account: AccountState.fromJson(
          (body['account'] as Map).cast<String, dynamic>()),
    );
  }

  /// Состояние гаража. `knownVersion` — версия, которая уже есть у приложения:
  /// сервер ответит пустотой, если ничего не изменилось.
  Future<AccountState?> state(String session, {int? knownVersion}) async {
    final resp = await _client
        .get(
          _u('/account', knownVersion == null ? null : {'v': '$knownVersion'}),
          headers: _headers(session),
        )
        .timeout(_timeout);
    if (resp.statusCode == 304) return null;
    return AccountState.fromJson(_decode(resp));
  }

  Future<AccountState> setCar(String session, String slotId, Car car) =>
      _car(session, 'POST', slotId, car);

  Future<AccountState> editCar(String session, String slotId, Car car) =>
      _car(session, 'PUT', slotId, car);

  Future<AccountState> _car(
      String session, String method, String slotId, Car car) async {
    final req = http.Request(method, _u('/account/car'))
      ..headers.addAll(_headers(session))
      ..body = jsonEncode({'slot_id': slotId, 'car': car.toJson()});
    final resp =
        await http.Response.fromStream(await _client.send(req)).timeout(_timeout);
    return AccountState.fromJson(_decode(resp));
  }

  Future<AccountState> removeCar(String session, String slotId) async {
    final req = http.Request('DELETE', _u('/account/car'))
      ..headers.addAll(_headers(session))
      ..body = jsonEncode({'slot_id': slotId});
    final resp =
        await http.Response.fromStream(await _client.send(req)).timeout(_timeout);
    return AccountState.fromJson(_decode(resp));
  }

  /// Покупка: сервер сам сходит в магазин и начислит, только если тот
  /// подтвердит. Приложению верить нельзя, и это правильно.
  Future<AccountState> purchase(
    String session, {
    required String platform,
    required String productId,
    required String purchaseToken,
    String slotId = '',
  }) async {
    final resp = await _client
        .post(_u('/account/purchase'),
            headers: _headers(session),
            body: jsonEncode({
              'platform': platform,
              'product_id': productId,
              'purchase_token': purchaseToken,
              if (slotId.isNotEmpty) 'slot_id': slotId,
            }))
        .timeout(_timeout);
    return AccountState.fromJson(_decode(resp));
  }

  /// Донести до машины проверки, купленные, но не разнесённые.
  Future<AccountState> assign(
      String session, String purchaseId, String slotId) async {
    final resp = await _client
        .post(_u('/account/assign'),
            headers: _headers(session),
            body: jsonEncode(
                {'purchase_id': purchaseId, 'slot_id': slotId}))
        .timeout(_timeout);
    return AccountState.fromJson(_decode(resp));
  }

  Future<void> logout(String session) async {
    await _client
        .post(_u('/logout'), headers: _headers(session))
        .timeout(_timeout);
  }

  Map<String, dynamic> _decode(http.Response resp) {
    if (resp.statusCode >= 200 && resp.statusCode < 300) {
      if (resp.bodyBytes.isEmpty) return {};
      return jsonDecode(utf8.decode(resp.bodyBytes)) as Map<String, dynamic>;
    }
    String? code;
    String message = S.anErrServer;
    try {
      final err =
          jsonDecode(utf8.decode(resp.bodyBytes)) as Map<String, dynamic>;
      code = err['code'] as String?;
      final local = accountErrorText(code);
      if (local != null) {
        message = local;
      } else if (err['error'] is String && (err['error'] as String).isNotEmpty) {
        message = err['error'] as String;
      }
    } catch (_) {}
    throw AccountException(message, code: code, status: resp.statusCode);
  }
}

class AccountException extends ApiException {
  final String? code;
  final int status;

  const AccountException(super.message, {this.code, this.status = 0})
      : super(retryable: false);

  /// Сессия протухла или закрыта — надо войти заново.
  bool get needsSignIn => code == 'no_session';

  /// Проверок на машине не осталось — самое место предложить покупку.
  bool get needsChecks => code == 'no_checks';
}

/// Коды сервера → строки интерфейса. Незнакомый код даёт null: тогда
/// показывается текст сервера, а не пустота.
String? accountErrorText(String? code) => switch (code) {
      'no_session' => S.accSignInAgain,
      'no_slot' => S.accNoSlot,
      'car_locked' => S.accCarLocked,
      'slot_taken' => S.accSlotTaken,
      'slot_empty' => S.accSlotEmpty,
      'no_checks' => S.accNoChecks,
      'not_purchased' => S.accNotPurchased,
      'store_off' || 'verify_later' => S.accVerifyLater,
      _ => null,
    };
