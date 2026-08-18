import 'package:flutter_test/flutter_test.dart';
import 'package:stuk/data/cars.dart';
import 'package:stuk/l10n/cars_i18n.dart';
import 'package:stuk/l10n/locale_service.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  setUpAll(() async => CarsCatalog.ensureLoaded());
  tearDown(() => LocaleService.current.value = 'ru');

  test('русский интерфейс оставляет справочник как есть', () {
    LocaleService.current.value = 'ru';
    expect(carMake('УАЗ'), 'УАЗ');
    expect(carModel('3 серия'), '3 серия');
    expect(genLabel('I [2-й рестайлинг] (2010–н.в.)'), 'I [2-й рестайлинг] (2010–н.в.)');
  });

  test('нерусский интерфейс показывает латиницу', () {
    LocaleService.current.value = 'de';
    expect(carMake('УАЗ'), 'UAZ');
    expect(carModel('E-Класс'), 'E-Class');
    expect(carModel('ГАЗель NEXT'), 'GAZelle NEXT');
  });

  test('подпись поколения переводится по словам', () {
    LocaleService.current.value = 'en';
    expect(genLabel('I [2-й рестайлинг] (2010–н.в.)'), 'I [facelift 2] (2010–present)');
    expect(genLabel('1 рестайлинг (2020–н.в.)'), '1 facelift (2020–present)');
    expect(genLabel('VI [Европейский рынок] (2017–н.в.)'),
        'VI [European market] (2017–present)');
    // Подпись без русских слов не трогаем.
    expect(genLabel('W205 (2014–2018)'), 'W205 (2014–2018)');
  });

  test('в подписях поколений не остаётся кириллицы ни на одном языке', () {
    final cyr = RegExp(r'[А-Яа-яЁё]');
    for (final lang in ['en', 'de', 'es', 'fr', 'pt', 'it', 'pl', 'tr', 'nl',
      'zh', 'ja', 'ko', 'ar']) {
      LocaleService.current.value = lang;
      for (final make in CarsCatalog.searchMakes('', limit: 1000)) {
        expect(cyr.hasMatch(make), isFalse, reason: '$lang: марка $make');
        for (final model in CarsCatalog.modelsFor(make, '', limit: 1000)) {
          expect(cyr.hasMatch(model), isFalse, reason: '$lang: модель $model');
          for (final g in CarsCatalog.generationsFor(make, model)) {
            expect(cyr.hasMatch(g.display), isFalse,
                reason: '$lang: поколение ${g.display}');
          }
        }
      }
    }
  });

  test('поколения находятся и по латинской подписи марки', () {
    LocaleService.current.value = 'de';
    // Так марка приходит из профиля машины, заведённой на немецком.
    expect(CarsCatalog.generationsFor('UAZ', 'Patriot'), isNotEmpty);
    expect(CarsCatalog.modelsFor('Lada', '', limit: 5), isNotEmpty);
  });

  test('поиск марки работает и по латинице, и по кириллице', () {
    LocaleService.current.value = 'de';
    expect(CarsCatalog.searchMakes('lada'), contains('Lada'));
    expect(CarsCatalog.searchMakes('ваз'), contains('Lada'));
  });
}
