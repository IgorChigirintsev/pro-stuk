import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import '../l10n/locale_scope.dart';
import '../schema_pick.dart';
import '../site_links.dart';
import '../widgets/schema_view.dart';

import '../models.dart';
import '../state.dart';
import '../strings.dart';
import '../tree.dart';
import '../widgets.dart';
import 'record.dart';

/// Предварительный вердикт по листу дерева: бесплатный результат анкеты.
class VerdictScreen extends StatelessWidget {
  final TreeNode leaf;
  final List<AnswerLog> answers;
  const VerdictScreen({super.key, required this.leaf, required this.answers});

  @override
  Widget build(BuildContext context) {
    // Экран лежит в стеке Navigator и сам по себе не
    // перестраивается при смене языка — см. LocaleScope.
    LocaleScope.watch(context);
    return Scaffold(
      appBar: AppBar(title: Text(S.verdictTitle)),
      body: SafeArea(
        child: Column(
          children: [
            Expanded(
              child: ListView(
                padding: const EdgeInsets.all(20),
                children: [
                  TrafficLightPlaque(
                      urgency: leaf.urgency, reason: leaf.topCause),
                  SectionTitle(S.verdictWhat),
                  SurfaceCard(
                    child: Text(leaf.explanation,
                        style: Theme.of(context).textTheme.bodyMedium),
                  ),
                  SectionTitle(S.verdictAdvice),
                  SurfaceCard(
                    child: Text(leaf.advice,
                        style: Theme.of(context).textTheme.bodyMedium),
                  ),
                  if (leaf.altCauses.isNotEmpty) ...[
                    const SizedBox(height: 16),
                    Text(
                      S.verdictAlt + leaf.altCauses.join(', ').toLowerCase(),
                      style: Theme.of(context).textTheme.bodySmall,
                    ),
                  ],
                  const SizedBox(height: 16),
                  FutureBuilder<SchemaPick?>(
                    // По русским оригиналам: таблица подбора русская.
                    future: SchemaPicker.forCauses(leaf.causesRu),
                    builder: (context, snap) {
                      final hit = snap.data;
                      if (hit == null) return const SizedBox.shrink();
                      return Padding(
                        padding: const EdgeInsets.only(bottom: 16),
                        child: SchemaView(
                            schemaKey: hit.key, marks: hit.marks),
                      );
                    },
                  ),
                  // Подробный разбор на сайте — на языке приложения.
                  // Ссылки нет, если разбора на этом языке не существует.
                  if (SiteLinks.symptom(leaf.siteSlug) != null)
                    Align(
                      alignment: AlignmentDirectional.centerStart,
                      child: TextButton.icon(
                        onPressed: () => launchUrl(
                          Uri.parse(SiteLinks.symptom(leaf.siteSlug)!),
                          mode: LaunchMode.externalApplication,
                        ),
                        icon: const Icon(Icons.open_in_new, size: 18),
                        label: Text(S.verdictSite),
                      ),
                    ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(20, 0, 20, 20),
              child: Column(
                children: [
                  ElevatedButton(
                    onPressed: () => Navigator.of(context).push(
                      MaterialPageRoute(
                        builder: (_) =>
                            RecordScreen(leaf: leaf, answers: answers),
                      ),
                    ),
                    child: Text(S.verdictRefine),
                  ),
                  const SizedBox(height: 6),
                  // Остаток проверок на машине. Раньше здесь всем показывали
                  // «пока бесплатно, до трёх отчётов в день» — текст времён,
                  // когда аккаунтов не было и разбор считался по устройству.
                  // Дневных пределов больше нет: проверки лежат на месте
                  // гаража, не сгорают и докупаются.
                  Builder(builder: (context) {
                    final st = AppScope.of(context);
                    final slot = st.accounts.signedIn
                        ? st.accounts.state?.slot(st.car?.slotId ?? '')
                        : null;
                    if (slot == null) return const SizedBox.shrink();
                    return Text(
                      S.buyChecksLeft.replaceFirst('{n}', '${slot.checks}'),
                      style: Theme.of(context).textTheme.bodySmall,
                    );
                  }),
                  const SizedBox(height: 10),
                  OutlinedButton(
                    onPressed: () async {
                      final state = AppScope.of(context);
                      final nav = Navigator.of(context);
                      await state.addHistory(
                        urgency: leaf.urgency,
                        topCause: leaf.topCause,
                        isFull: false,
                        leafId: leaf.id,
                        answers: answers,
                      );
                      nav.popUntil((r) => r.isFirst);
                    },
                    child: Text(S.verdictEnough),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
