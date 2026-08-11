import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'data/units.dart';
import 'l10n/l10n.dart';
import 'l10n/locale_service.dart';

import 'screens/home.dart';
import 'screens/onboarding.dart';
import 'state.dart';
import 'strings.dart';
import 'theme.dart';
import 'tree.dart';

late DecisionTree tree;

/// Счётчик перезагрузок дерева: по нему приложение перерисовывается заново.
final treeReloaded = ValueNotifier<int>(0);

/// Дерево лежит в отдельном ассете на каждый язык, поэтому смена языка обязана
/// его перечитать. Иначе интерфейс переключится, а вопросы и вердикты останутся
/// на прежнем языке до перезапуска приложения.
Future<void> reloadTree() async {
  tree = await DecisionTree.load();
  treeReloaded.value++;
}

/// Подписка живёт всё время работы приложения — отписываться не от чего.
void watchLocaleForTree() => LocaleService.current.addListener(reloadTree);

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  // Manrope забандлен в assets/google_fonts — работаем офлайн, без догрузки.
  GoogleFonts.config.allowRuntimeFetching = false;
  final state = AppState();
  await LocaleService.init();
  await Units.init();
  await state.init();
  tree = await DecisionTree.load();
  watchLocaleForTree();
  runApp(StukApp(state: state));
}

class StukApp extends StatelessWidget {
  final AppState state;
  const StukApp({super.key, required this.state});

  @override
  Widget build(BuildContext context) {
    return AppScope(
      state: state,
      // Перерисовываем всё приложение при смене языка: тексты теперь читаются
      // из таблицы, а не зашиты в дерево виджетов. Второй сигнал — дочитанное
      // дерево: оно приходит асинхронно и позже самой смены языка.
      child: ListenableBuilder(
        listenable: Listenable.merge([LocaleService.current, treeReloaded]),
        builder: (context, child) => MaterialApp(
          builder: (context, home) => Directionality(
            textDirection: L.isRtl ? TextDirection.rtl : TextDirection.ltr,
            child: home ?? const SizedBox.shrink(),
          ),
        title: S.appName,
        theme: buildTheme(),
        debugShowCheckedModeBanner: false,
        home: state.car == null
            ? const OnboardingCarScreen(firstRun: true)
            : const HomeScreen(),
      )),
    );
  }
}
