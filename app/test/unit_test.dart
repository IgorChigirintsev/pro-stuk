import 'dart:io';

import 'package:flutter_test/flutter_test.dart';
import 'package:stuk/api.dart';
import 'package:stuk/tree.dart';
import 'package:stuk/wav.dart';

import 'package:stuk/data/service.dart';
import 'package:stuk/data/units.dart';
import 'package:stuk/l10n/ar.dart';
import 'package:stuk/l10n/en.dart';
import 'package:stuk/l10n/l10n.dart';
import 'package:stuk/l10n/ru.dart';

import 'package:stuk/models.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  test('дерево загружается из ассета и корректно устроено', () async {
    final tree = await DecisionTree.load();
    expect(tree.nodes.length, greaterThan(100));
    final root = tree.node(tree.rootId);
    expect(root.isLeaf, isFalse);
    expect(root.options.length, inInclusiveRange(2, 4));
    // Все next-ссылки существуют, листья заполнены.
    var leaves = 0;
    for (final n in tree.nodes.values) {
      if (n.isLeaf) {
        leaves++;
        expect(n.topCause, isNotEmpty);
        expect(['ok', 'warn', 'stop'], contains(n.urgency));
        expect(n.explanation, isNotEmpty);
        expect(n.advice, isNotEmpty);
      } else {
        for (final o in n.options) {
          expect(tree.nodes.containsKey(o.next), isTrue,
              reason: 'битая ссылка ${n.id} -> ${o.next}');
        }
      }
    }
    expect(leaves, greaterThanOrEqualTo(16));
    // Прогресс-бар: глубина от корня в допустимых пределах.
    expect(tree.maxDepthFrom(tree.rootId), inInclusiveRange(2, 8));
  });

  test('pcmToWav пишет корректный заголовок', () async {
    final dir = await Directory.systemTemp.createTemp('stuk_test');
    final pcm = File('${dir.path}/a.pcm');
    await pcm.writeAsBytes(List<int>.filled(32000, 0)); // 1 сек PCM16 16кГц
    final wav = await pcmToWav(pcm, '${dir.path}/a.wav');
    final bytes = await wav.readAsBytes();
    expect(bytes.length, 44 + 32000);
    expect(String.fromCharCodes(bytes.sublist(0, 4)), 'RIFF');
    expect(String.fromCharCodes(bytes.sublist(8, 12)), 'WAVE');
    expect(bytes[22], 1); // mono
    expect(bytes[24] | (bytes[25] << 8) | (bytes[26] << 16), 16000);
    expect(bytes[34], 16); // бит на сэмпл
    await dir.delete(recursive: true);
  });

  test('сравнение версий', () {
    expect(isNewerVersion('1.0.1', '1.0.0'), isTrue);
    expect(isNewerVersion('2.0.0', '1.9.9'), isTrue);
    expect(isNewerVersion('1.0.0', '1.0.0'), isFalse);
    expect(isNewerVersion('1.0.0', '1.2.0'), isFalse);
  });


  test('статус расходника считается по диапазону', () {
    final oil = consumables.firstWhere((c) => c.key == 'oil'); // 7000–10000
    expect(statusFor(oil, null).unknown, isTrue);
    expect(statusFor(oil, 3000).due, isFalse);
    expect(statusFor(oil, 3000).label, 'ещё 4000 км');
    expect(statusFor(oil, 8000).due, isTrue); // вошли в интервал
    expect(statusFor(oil, 8000).overdue, isFalse);
    expect(statusFor(oil, 12000).overdue, isTrue); // прошли верхнюю границу
  });

  test('позиции без пробега не обещают остаток', () {
    final fluid = consumables.firstWhere((c) => c.key == 'brake_fluid');
    expect(fluid.kmMin, isNull); // только срок
    expect(statusFor(fluid, 50000).unknown, isTrue);
  });

  test('на сервер не уходят сервисный журнал и идентификатор', () {
    const car = Car(
      id: 'local-id',
      make: 'Hyundai',
      model: 'Sonata',
      year: 2015,
      mileageKm: 120000,
      generation: 'VII (LF)',
      service: {'oil': 110000},
    );
    final api = car.toApiJson();
    expect(api.containsKey('service'), isFalse);
    expect(api.containsKey('id'), isFalse);
    expect(api['generation'], 'VII (LF)');
    // а в хранилище телефона — сохраняется всё
    expect(car.toJson()['service'], {'oil': 110000});
  });

  test('таблицы языков не разъезжаются по ключам', () {
    for (final entry in L.tables.entries) {
      expect(entry.value.keys.toSet(), ru.keys.toSet(),
          reason: 'язык ${entry.key}: набор ключей отличается от русского');
    }
  });

  test('поиск строки падает на английский, а не на ключ', () {
    expect(en.containsKey('diagnose'), isTrue);
    expect(ru['diagnose'], isNotEmpty);
    // ключ, которого нет ни в одной таблице, возвращается как есть — заметно на глаз
    expect(L.t('нет_такого_ключа'), 'нет_такого_ключа');
  });

  test('арабский полон и помечен как rtl', () {
    expect(ar.keys.toSet(), ru.keys.toSet());
    expect(L.rtl.contains('ar'), isTrue);
    expect(L.rtl.contains('en'), isFalse);
  });

  test('мили и километры конвертируются без потери исходного значения', () {
    Units.miles.value = false;
    expect(Units.display(150000), 150000);
    expect(Units.store(150000), 150000);

    Units.miles.value = true;
    expect(Units.display(160934), 100000); // 160934 км ≈ 100000 миль
    expect(Units.store(100000), 160934);   // и обратно, без накопления ошибки
    Units.miles.value = false;
  });
}
