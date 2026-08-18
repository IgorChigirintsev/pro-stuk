import 'package:flutter/material.dart';

import '../l10n/locale_scope.dart';
import '../strings.dart';
import '../widgets.dart';

class HowItWorksScreen extends StatelessWidget {
  const HowItWorksScreen({super.key});

  @override
  Widget build(BuildContext context) {
    // Экран лежит в стеке Navigator и сам по себе не
    // перестраивается при смене языка — см. LocaleScope.
    LocaleScope.watch(context);
    return Scaffold(
      appBar: AppBar(title: Text(S.hiwTitle)),
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.all(20),
          children: [
            SurfaceCard(
              child: Text(S.hiwBody,
                  style: Theme.of(context).textTheme.bodyMedium),
            ),
          ],
        ),
      ),
    );
  }
}
