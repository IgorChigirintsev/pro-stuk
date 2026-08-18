import 'dart:io';

import 'package:flutter_test/flutter_test.dart';
import 'package:stuk/api.dart';
import 'package:stuk/main.dart' show watchLocaleForTree;
import 'package:stuk/site_links.dart';
import 'package:stuk/tree.dart';
import 'package:stuk/wav.dart';

import 'package:stuk/data/cars.dart';
import 'package:stuk/data/service.dart';
import 'package:stuk/l10n/parts_i18n.dart';
import 'package:stuk/l10n/locale_service.dart';
import 'package:stuk/data/units.dart';
import 'dart:convert';
import 'dart:io' as io;
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
    Units.miles.value = false; // тест про сам расчёт, а не про единицы
    final oil = consumables.firstWhere((c) => c.key == 'oil'); // 7000–10000
    expect(statusFor(oil, null).unknown, isTrue);
    expect(statusFor(oil, 3000).due, isFalse);
    expect(statusFor(oil, 3000).label.contains('4000'), isTrue);
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

  test('словари схем покрывают все подписи во всех языках', () {
    const langs = ['en','de','es','fr','pt','it','pl','tr','nl','zh','ja','ko','ar'];
    final raw = io.File('assets/schemes/parts.json').readAsStringSync();
    final data = jsonDecode(raw) as Map<String, dynamic>;
    final labels = <String>{};
    final titles = <String>{};
    for (final v in data.values) {
      titles.add((v as Map)['title'] as String);
      for (final p in (v['parts'] as List)) {
        labels.add((p as Map)['label'] as String);
      }
    }
    final missing = <String>[];
    for (final lang in langs) {
      LocaleService.current.value = lang;
      for (final l in labels) {
        if (partLabel(l) == l) missing.add('$lang: $l');
      }
      for (final t in titles) {
        if (schemaTitle(t) == t) missing.add('$lang: $t');
      }
    }
    LocaleService.current.value = 'ru';
    // На русском подпись и есть перевод — проверяем на английском.
    expect(missing, isEmpty, reason: 'нет перевода: ${missing.take(5)}');
  });

  test('без файла перевода дерево остаётся русским', () async {
    LocaleService.current.value = 'ru';
    final ru = await DecisionTree.load();
    final ruText = ru.node(ru.rootId).text;

    // язык без файла перевода — дерево целиком остаётся русским.
    // Код заведомо несуществующий: реальные языки один за другим переводятся.
    LocaleService.current.value = 'zz';
    final zz = await DecisionTree.load();
    expect(zz.node(zz.rootId).text, ruText);
    LocaleService.current.value = 'ru';
  });

  // Смена языка обязана перечитать дерево: оно лежит в отдельном ассете,
  // и без этого вопросы с вердиктами остались бы на прежнем языке.
  test('смена языка перечитывает дерево, а не только интерфейс', () async {
    LocaleService.current.value = 'ru';
    await reloadTree();
    final ruRoot = tree.node(tree.rootId).text;

    watchLocaleForTree();
    addTearDown(() => LocaleService.current.removeListener(reloadTree));

    LocaleService.current.value = 'de';
    // Слушатель дочитывает ассет асинхронно — ждём результат, а не факт вызова.
    for (var i = 0; i < 100 && tree.node(tree.rootId).text == ruRoot; i++) {
      await Future<void>.delayed(const Duration(milliseconds: 10));
    }
    expect(tree.node(tree.rootId).text, isNot(ruRoot));

    LocaleService.current.value = 'ru';
  });

  // Языки, дерево которых объявлено готовым. Тест держит обещание:
  // ни одного русского поля не осталось ни в вопросах, ни в вердиктах.
  for (final lang in [
    'en', 'de', 'es', 'fr', 'pt', 'it', 'pl', 'tr', 'nl', 'zh', 'ja', 'ko', 'ar'
  ]) {
    test('дерево на $lang переведено полностью: вопросы и вердикты', () async {
      LocaleService.current.value = lang;
      final t = await DecisionTree.load();
      final cyrillic = RegExp(r'[А-Яа-яЁё]');
      final left = <String>[];
      for (final n in t.nodes.values) {
        if (cyrillic.hasMatch(n.text)) left.add(n.id);
        if (cyrillic.hasMatch(n.topCause)) left.add('${n.id}/cause');
        if (cyrillic.hasMatch(n.explanation)) left.add('${n.id}/why');
        if (cyrillic.hasMatch(n.advice)) left.add('${n.id}/advice');
        for (final a in n.altCauses) {
          if (cyrillic.hasMatch(a)) left.add('${n.id}/alt');
        }
        for (final o in n.options) {
          if (cyrillic.hasMatch(o.label)) left.add('${n.id}/${o.id}');
        }
      }
      LocaleService.current.value = 'ru';
      expect(left, isEmpty, reason: 'остались русскими: ${left.take(5)}');
    });
  }

  // Ссылка из вердикта ведёт на разбор симптома на языке приложения.
  // Карта слагов продублирована в Dart, поэтому её надо сверять с сайтом:
  // разойдутся молча — из приложения будут вести ссылки в 404.
  test('адреса разборов совпадают с сайтом и покрывают все листья', () async {
    final ts = await File('../site/src/data/types.ts').readAsString();
    final block = RegExp(r'SYMPTOM_SLUGS: Record<string, string> = \{(.*?)\};',
            dotAll: true)
        .firstMatch(ts)!
        .group(1)!;
    final site = {
      for (final m in RegExp(r"'([^']+)':\s*'([^']+)'").allMatches(block))
        m.group(1)!: m.group(2)!
    };
    expect(site.length, 18, reason: 'разборов на сайте стало другое число');

    // Каждый лист дерева ссылается на существующий разбор.
    LocaleService.current.value = 'ru';
    final t = await DecisionTree.load();
    final leaves = t.nodes.values.where((n) => n.isLeaf).toList();
    final missing = leaves
        .where((n) => n.siteSlug.isEmpty || !site.containsKey(n.siteSlug))
        .map((n) => '${n.id}:${n.siteSlug}')
        .toList();
    expect(missing, isEmpty, reason: 'листья без разбора на сайте: $missing');

    // Адрес строится по языку и совпадает с тем, что отдаёт сайт.
    const slug = 'svist-remnya';
    LocaleService.current.value = 'ru';
    expect(SiteLinks.symptom(slug), endsWith('/simptomy/$slug/'));
    LocaleService.current.value = 'zh';
    expect(SiteLinks.symptom(slug), endsWith('/zh/symptoms/belt-squeal/'));
    LocaleService.current.value = 'ru';
  });

  // Годы выпуска в форме добавления машины ограничиваются поколением, а сам
  // диапазон разбирается из названия: отдельного поля в справочнике нет.
  // Сменится формат названий — фильтр молча перестанет работать.
  test('годы поколения разбираются из названия', () async {
    expect(const Generation('1', 'V (N28) (2009–2013)').yearFrom, 2009);
    expect(const Generation('1', 'V (N28) (2009–2013)').yearTo, 2013);
    // «н.в.» — модель ещё выпускают, верхняя граница это текущий год.
    expect(const Generation('2', 'VI (2024–н.в.)').yearTo, DateTime.now().year);
    // Без диапазона в названии фильтровать нечем — тогда null и весь список.
    expect(const Generation('3', 'Просто поколение').yearFrom, isNull);
  });

  test('во всём справочнике годы распознаются', () async {
    final raw = jsonDecode(await File('../shared/cars-generations.json').readAsString())
        as Map<String, dynamic>;
    var total = 0, parsed = 0;
    for (final models in raw.values) {
      for (final gens in (models as Map).values) {
        for (final g in gens as List) {
          total++;
          final gen = Generation('', (g as Map)['label'] as String);
          if (gen.yearFrom != null && gen.yearTo != null) parsed++;
        }
      }
    }
    expect(total, greaterThan(5000));
    expect(parsed, total, reason: 'у ${total - parsed} поколений не разобрался диапазон');
  });
}
