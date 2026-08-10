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

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  // Manrope забандлен в assets/google_fonts — работаем офлайн, без догрузки.
  GoogleFonts.config.allowRuntimeFetching = false;
  final state = AppState();
  await LocaleService.init();
  await Units.init();
  await state.init();
  tree = await DecisionTree.load();
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
      // из таблицы, а не зашиты в дерево виджетов.
      child: ValueListenableBuilder<String>(
        valueListenable: LocaleService.current,
        builder: (context, _, child) => MaterialApp(
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
