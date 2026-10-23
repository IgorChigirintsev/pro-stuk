import 'dart:convert';
import 'dart:io';

import 'package:flutter_test/flutter_test.dart';
import 'package:http/http.dart' as http;
import 'package:http/testing.dart';
import 'package:stuk/api.dart';
import 'package:stuk/data/account_api.dart';
import 'package:stuk/models.dart';

/// Отдаёт заданный отказ на запрос разбора — проверяется разбор ответа,
/// а не сеть.
http.Client failing(int status, String code) => MockClient((req) async {
      return http.Response(
        jsonEncode({'code': code, 'error': 'текст сервера'}),
        status,
        headers: {'content-type': 'application/json'},
      );
    });

Future<Object?> sendAndCatch(int status, String code) async {
  final api = ApiClient(client: failing(status, code));
  try {
    final wav = File('${Directory.systemTemp.path}/probe.wav')
      ..writeAsBytesSync(List<int>.filled(64, 0));
    await api.sendReport(
      wavFile: wav,
      deviceId: 'd1',
      slotId: 's1',
      session: 'сессия',
      car: const Car(make: 'Skoda', model: 'Rapid', year: 2014, mileageKm: 120000),
      answers: const [],
      leafId: '',
    );
    return null;
  } catch (e) {
    return e;
  }
}

void main() {
  // Без своего типа экран разбора не узнаёт отказ про учётную запись и
  // показывает кнопку «Повторить» вместо предложения купить. Так и было:
  // сервер отдавал 402 с кодом no_checks, приложение бросало обычный
  // ApiException, проверка `e is AccountException` не срабатывала никогда,
  // и человек с нулём проверок упирался в кнопку, ведущую в тот же отказ.
  test('нет проверок — отказ приходит своим типом и зовёт в магазин', () async {
    final e = await sendAndCatch(402, 'no_checks');
    expect(e, isA<AccountException>());
    expect((e as AccountException).needsChecks, isTrue,
        reason: 'без этого флага кнопка покупки не появится');
    expect(e.retryable, isFalse,
        reason: 'повторять нечего: проверок не прибавится');
  });

  test('протухшая сессия тоже приходит своим типом', () async {
    final e = await sendAndCatch(401, 'no_session');
    expect(e, isA<AccountException>());
    expect((e as AccountException).needsSignIn, isTrue);
  });

  // Сбои разбора к учётной записи отношения не имеют: их как раз надо
  // предлагать повторить.
  test('сорвавшийся разбор остаётся обычной ошибкой и повторяем', () async {
    final e = await sendAndCatch(502, 'analyze_failed');
    expect(e, isA<ApiException>());
    expect(e, isNot(isA<AccountException>()));
    expect((e as ApiException).retryable, isTrue);
  });

  test('запись не про автомобиль — повторять тем же файлом бессмысленно',
      () async {
    final e = await sendAndCatch(422, 'not_car');
    expect(e, isA<ApiException>());
    expect((e as ApiException).retryable, isFalse);
  });
}
