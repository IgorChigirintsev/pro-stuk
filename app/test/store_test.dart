import 'package:flutter_test/flutter_test.dart';
import 'package:stuk/data/store_service.dart';

/// Идентификаторы товаров живут в трёх местах: в консолях магазинов, в
/// таблице начислений на сервере и здесь. Разойдутся — человек заплатит,
/// а не получит ничего.
void main() {
  test('набор товаров совпадает с серверным', () {
    expect(Products.checks, ['checks_5', 'checks_10', 'checks_20', 'checks_40']);
    expect(Products.garage, ['garage_1', 'garage_2', 'garage_4', 'garage_8']);
    expect(Products.all.length, 8);
  });

  // В Google Play пакет на десять проверок заведён с опечаткой, переименовать
  // товар нельзя. Приложение обязано спрашивать магазин под тем именем,
  // под которым товар там заведён.
  test('у Google Play спрашиваем имена, под которыми товары заведены', () {
    final ids = Products.storeIds(android: true);
    expect(ids.contains('checks_10_2'), isTrue);
    expect(ids.contains('checks_10'), isFalse);
    expect(ids.length, 8);
  });

  // А в App Store опечатки нет, и подставлять её туда нельзя: такого товара
  // магазин не найдёт, и покупать на iPhone станет нечего.
  test('у App Store спрашиваем имена без опечатки', () {
    final ids = Products.storeIds(android: false);
    expect(ids.contains('checks_10'), isTrue);
    expect(ids.contains('checks_10_2'), isFalse);
    expect(ids.length, 8);
  });

  test('остальные идентификаторы не переименованы', () {
    for (final id in [...Products.checks, ...Products.garage]) {
      if (id == 'checks_10') continue;
      expect(Products.storeIds(android: true).contains(id), isTrue, reason: id);
      expect(Products.storeIds(android: false).contains(id), isTrue, reason: id);
    }
  });
}
