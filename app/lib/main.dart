import 'package:flutter/material.dart';

import 'screens/home.dart';
import 'screens/onboarding.dart';
import 'state.dart';
import 'strings.dart';
import 'theme.dart';
import 'tree.dart';

late DecisionTree tree;

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  final state = AppState();
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
      child: MaterialApp(
        title: S.appName,
        theme: buildTheme(),
        debugShowCheckedModeBanner: false,
        home: state.car == null
            ? const OnboardingCarScreen(firstRun: true)
            : const HomeScreen(),
      ),
    );
  }
}
