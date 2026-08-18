import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:stuk/l10n/l10n.dart';
import 'package:stuk/l10n/locale_scope.dart';
import 'package:stuk/l10n/locale_service.dart';

/// Экран, какие лежат в стеке Navigator: текст читает статически, как весь
/// остальной интерфейс.
class _Page extends StatelessWidget {
  const _Page();

  @override
  Widget build(BuildContext context) {
    LocaleScope.watch(context);
    return Scaffold(body: Text(L.t('carSave')));
  }
}

void main() {
  setUp(() => LocaleService.current.value = 'ru');
  tearDown(() => LocaleService.current.value = 'ru');

  testWidgets('открытый экран переключает язык вместе с приложением',
      (tester) async {
    final nav = GlobalKey<NavigatorState>();
    await tester.pumpWidget(
      ListenableBuilder(
        listenable: localeSignal,
        builder: (context, _) => LocaleScope(
          child: MaterialApp(
            navigatorKey: nav,
            home: const Scaffold(body: Text('дом')),
          ),
        ),
      ),
    );

    // Уходим со стартового экрана: именно так теряется перевод — страница
    // в стеке кэшируется и не перестраивается вслед за MaterialApp.
    nav.currentState!.push(MaterialPageRoute(builder: (_) => const _Page()));
    await tester.pumpAndSettle();
    expect(find.text('Сохранить'), findsOneWidget);

    LocaleService.current.value = 'de';
    await tester.pumpAndSettle();

    expect(find.text('Speichern'), findsOneWidget);
    expect(find.text('Сохранить'), findsNothing);
  });

  testWidgets('язык без перевода ключа падает на английский', (tester) async {
    LocaleService.current.value = 'en';
    await tester.pumpWidget(
      LocaleScope(child: const MaterialApp(home: _Page())),
    );
    expect(find.text('Save'), findsOneWidget);
  });
}
