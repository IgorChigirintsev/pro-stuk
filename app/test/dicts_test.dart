import 'package:flutter_test/flutter_test.dart';
import 'package:stuk/l10n/l10n.dart';

/// Страж от пропущенных строк: любой новый ключ, забытый в переводе, оставляет
/// в чужом словаре кириллицу — и этот тест на неё указывает.
void main() {
  final cyr = RegExp(r'[А-Яа-яЁё]');

  test('во всех языках одинаковый набор ключей', () {
    final ru = L.tables['ru']!.keys.toSet();
    for (final e in L.tables.entries) {
      expect(e.value.keys.toSet(), ru, reason: 'словарь ${e.key} разошёлся');
    }
  });

  test('в нерусских словарях не осталось русского текста', () {
    for (final e in L.tables.entries) {
      if (e.key == 'ru') continue;
      for (final kv in e.value.entries) {
        expect(cyr.hasMatch(kv.value), isFalse,
            reason: '${e.key}/${kv.key}: «${kv.value}»');
      }
    }
  });

  test('пустых строк нет ни в одном языке', () {
    for (final e in L.tables.entries) {
      for (final kv in e.value.entries) {
        expect(kv.value.trim(), isNotEmpty, reason: '${e.key}/${kv.key}');
      }
    }
  });
}
