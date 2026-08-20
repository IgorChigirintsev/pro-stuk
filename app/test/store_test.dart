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
  test('у магазина спрашиваем имена, под которыми товары заведены', () {
    expect(Products.storeIds.contains('checks_10_2'), isTrue);
    expect(Products.storeIds.contains('checks_10'), isFalse);
    expect(Products.storeIds.length, 8);
  });

  test('остальные идентификаторы не переименованы', () {
    for (final id in [...Products.checks, ...Products.garage]) {
      if (id == 'checks_10') continue;
      expect(Products.storeIds.contains(id), isTrue, reason: id);
    }
  });
}
