import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'data/units.dart';
import 'l10n/l10n.dart';
import 'l10n/locale_scope.dart';
import 'l10n/locale_service.dart';

import 'screens/home.dart';
import 'data/account_service.dart';
import 'screens/onboarding.dart';
import 'screens/sign_in.dart';
import 'state.dart';
import 'strings.dart';
import 'theme.dart';
import 'tree.dart';

/// Подписка живёт всё время работы приложения — отписываться не от чего.
void watchLocaleForTree() => LocaleService.current.addListener(reloadTree);

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  // Manrope забандлен в assets/google_fonts — работаем офлайн, без догрузки.
  GoogleFonts.config.allowRuntimeFetching = false;
  // Названия месяцев для DateFormat: без этого доступен только en_US.
  await initializeDateFormatting();
  final state = AppState();
  // Учётная запись поднимается до первого экрана: гараж должен появиться
  // сразу из локальной копии, а не после круга по сети.
  state.accounts = AccountService();
  await LocaleService.init();
  await Units.init();
  await state.init();
  await state.accounts.init();
  if (!state.accounts.signedIn) {
    // Разрешение на этом устройстве человек мог дать раньше — тогда системного
    // окна не будет вовсе.
    await state.accounts.signInSilently();
  }
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
        listenable: localeSignal,
        builder: (context, child) => LocaleScope(
            child: MaterialApp(
          builder: (context, home) => Directionality(
            textDirection: L.isRtl ? TextDirection.rtl : TextDirection.ltr,
            child: home ?? const SizedBox.shrink(),
          ),
        title: S.appName,
        theme: buildTheme(),
        debugShowCheckedModeBanner: false,
        home: ListenableBuilder(
          listenable: state.accounts,
          builder: (context, _) {
            if (!state.accounts.signedIn) return const SignInScreen();
            return state.car == null
                ? const OnboardingCarScreen(firstRun: true)
                : const HomeScreen();
          },
        ),
      ))),
    );
  }
}
