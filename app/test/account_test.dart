import 'dart:convert';

import 'package:flutter_test/flutter_test.dart';
import 'package:http/http.dart' as http;
import 'package:http/testing.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:stuk/data/account.dart';
import 'package:stuk/data/account_api.dart';

/// Поддельный сервер: проверяется договор приложения с ним, а не сеть.
class FakeServer {
  int version = 7;
  int checks = 5;
  int stateCalls = 0;
  int notModified = 0;
  Map<String, dynamic>? lastPurchaseBody;
  int errorStatus = 0;
  String errorCode = '';

  Map<String, dynamic> get account => {
        'id': 'a1',
        'provider': 'google',
        'version': version,
        'slots': [
          {
            'id': 's1',
            'checks': checks,
            'used': 1,
            'car': {'make': 'BMW', 'model': '3 серия', 'year': 2018, 'mileage': 60000},
          },
          {'id': 's2', 'checks': 5, 'used': 0},
        ],
        'pending': [
          {'purchase_id': 'p9', 'checks': 20, 'slot_id': 's1'}
        ],
      };

  http.Client client() => MockClient((req) async {
        if (errorStatus != 0) {
          return http.Response(
              jsonEncode({'code': errorCode, 'error': 'сервер сказал нет'}),
              errorStatus,
              headers: {'content-type': 'application/json; charset=utf-8'});
        }
        final path = req.url.path;
        if (path.endsWith('/auth')) {
          return _json({'session': 'сессия-1', 'account': account});
        }
        if (path.endsWith('/account') && req.method == 'GET') {
          stateCalls++;
          final v = req.url.queryParameters['v'];
          if (v == '$version') {
            notModified++;
            return http.Response('', 304);
          }
          return _json(account);
        }
        if (path.endsWith('/account/purchase')) {
          lastPurchaseBody = jsonDecode(req.body) as Map<String, dynamic>;
          checks += 20;
          version++;
          return _json(account);
        }
        if (path.endsWith('/account/assign')) {
          checks += 20;
          version++;
          return _json(account);
        }
        return _json(account);
      });

  http.Response _json(Object body) => http.Response(
        jsonEncode(body),
        200,
        headers: {'content-type': 'application/json; charset=utf-8'},
      );
}

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  setUp(() => SharedPreferences.setMockInitialValues({}));

  test('состояние разбирается целиком', () async {
    final srv = FakeServer();
    final api = AccountApi(client: srv.client());
    final res = await api.signIn(provider: 'google', token: 'токен');

    expect(res.session, 'сессия-1');
    final a = res.account;
    expect(a.version, 7);
    expect(a.slots.length, 2);
    expect(a.slots[0].checks, 5);
    expect(a.slots[0].car!.model, '3 серия');
    expect(a.occupied.length, 1, reason: 'пустое место — не машина');
    expect(a.hasFreeSlot, isTrue);
    expect(a.pending.single.checks, 20);
  });

  // Замок — то, по чему интерфейс решает, показывать ли правку машины.
  test('машина заперта после первой потраченной проверки', () async {
    final srv = FakeServer();
    final api = AccountApi(client: srv.client());
    final a = (await api.signIn(provider: 'google', token: 'т')).account;
    expect(a.slots[0].locked, isTrue, reason: 'used=1');
    expect(a.slots[1].locked, isFalse, reason: 'used=0');
  });

  // Совпала версия — сервер не гонит состояние, приложение живёт копией.
  test('свежая копия не выкачивается заново', () async {
    final srv = FakeServer();
    final api = AccountApi(client: srv.client());

    final first = await api.state('сессия-1');
    expect(first, isNotNull);
    final again = await api.state('сессия-1', knownVersion: first!.version);
    expect(again, isNull, reason: 'при совпавшей версии состояние не приходит');
    expect(srv.notModified, 1);
  });

  // Устаревшая копия обязана обновиться: баланс проверок нельзя показывать
  // старым, иначе человек увидит проверки, которых у него уже нет.
  test('устаревшая копия обновляется', () async {
    final srv = FakeServer();
    final api = AccountApi(client: srv.client());
    srv.checks = 2;
    final fresh = await api.state('сессия-1', knownVersion: 1);
    expect(fresh, isNotNull);
    expect(fresh!.slots[0].checks, 2);
  });

  // Покупка уходит с указанием машины: адресные проверки без этого легли бы
  // не туда, и человек потребовал бы возврат.
  test('покупка уходит вместе с машиной', () async {
    final srv = FakeServer();
    final api = AccountApi(client: srv.client());
    await api.purchase('сессия-1',
        platform: 'google',
        productId: 'checks_20',
        purchaseToken: 'чек-1',
        slotId: 's1');
    expect(srv.lastPurchaseBody!['product_id'], 'checks_20');
    expect(srv.lastPurchaseBody!['purchase_token'], 'чек-1');
    expect(srv.lastPurchaseBody!['slot_id'], 's1');
  });

  test('коды ошибок превращаются в понятные состояния', () async {
    final srv = FakeServer()
      ..errorStatus = 401
      ..errorCode = 'no_session';
    final api = AccountApi(client: srv.client());
    try {
      await api.state('протухшая');
      fail('ошибка не выброшена');
    } on AccountException catch (e) {
      expect(e.needsSignIn, isTrue);
      expect(e.message, isNot(contains('сервер сказал нет')),
          reason: 'показываем свой перевод, а не русский текст сервера');
    }
  });

  test('кончившиеся проверки распознаются отдельно', () async {
    final srv = FakeServer()
      ..errorStatus = 402
      ..errorCode = 'no_checks';
    final api = AccountApi(client: srv.client());
    try {
      await api.state('сессия-1');
      fail('ошибка не выброшена');
    } on AccountException catch (e) {
      expect(e.needsChecks, isTrue);
    }
  });

  // Незнакомый код не должен оставлять человека с пустым экраном.
  test('незнакомый код показывает текст сервера', () async {
    final srv = FakeServer()
      ..errorStatus = 500
      ..errorCode = 'что-то-новое';
    final api = AccountApi(client: srv.client());
    try {
      await api.state('сессия-1');
      fail('ошибка не выброшена');
    } on AccountException catch (e) {
      expect(e.message, 'сервер сказал нет');
    }
  });

  test('состояние переживает круг через json', () {
    final srv = FakeServer();
    final a = AccountState.fromJson(srv.account);
    final back = AccountState.fromJson(
        jsonDecode(jsonEncode(a.toJson())) as Map<String, dynamic>);
    expect(back.version, a.version);
    expect(back.slots.length, a.slots.length);
    expect(back.slots[0].car!.make, 'BMW');
    expect(back.pending.single.purchaseId, 'p9');
  });
}
