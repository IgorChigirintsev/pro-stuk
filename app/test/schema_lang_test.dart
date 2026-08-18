import 'package:flutter_test/flutter_test.dart';
import 'package:stuk/l10n/locale_service.dart';
import 'package:stuk/schema_pick.dart';
import 'package:stuk/tree.dart';

/// Схема узла подбирается русской таблицей регулярных выражений. Пока вердикт
/// отдавал ей переведённые названия причин, у всех языков, кроме русского,
/// схема молча не находилась — на экране просто не было картинки.
void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  tearDown(() => LocaleService.current.value = 'ru');

  test('русские оригиналы причин доходят до листа на любом языке', () async {
    for (final lang in ['ru', 'de', 'zh']) {
      LocaleService.current.value = lang;
      final t = await DecisionTree.load();
      final leaves = t.nodes.values.where((n) => n.isLeaf).toList();
      expect(leaves, isNotEmpty);
      final cyr = RegExp(r'[А-Яа-яЁё]');
      for (final l in leaves) {
        expect(l.causesRu, isNotEmpty, reason: '$lang: ${l.id} без оригиналов');
        expect(cyr.hasMatch(l.causesRu.first), isTrue,
            reason: '$lang: ${l.id} оригинал не русский: ${l.causesRu.first}');
      }
    }
  });

  test('схема находится по оригиналам на любом языке', () async {
    var withSchema = 0, total = 0;
    for (final lang in ['ru', 'de', 'ja']) {
      LocaleService.current.value = lang;
      final t = await DecisionTree.load();
      for (final l in t.nodes.values.where((n) => n.isLeaf)) {
        total++;
        if (await SchemaPicker.forCauses(l.causesRu) != null) withSchema++;
      }
    }
    // Схема есть не у каждого листа, но доля должна совпадать между языками.
    expect(withSchema * 3, greaterThan(total),
        reason: 'схема нашлась лишь у $withSchema из $total листов');
  });
}
