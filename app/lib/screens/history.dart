import 'package:flutter/material.dart';

import '../l10n/dates.dart';
import '../l10n/locale_scope.dart';
import '../models.dart';
import '../state.dart';
import '../strings.dart';
import '../theme.dart';
import '../tree.dart';
import 'report.dart';
import 'verdict.dart';

/// История проверок активной машины.
///
/// Раньше список жил внизу гаража, куда до него доскроллить удавалось не
/// каждому. Отдельная иконка в шапке делает его первым классом, а не
/// приложением к списку машин.
class HistoryScreen extends StatelessWidget {
  const HistoryScreen({super.key});

  @override
  Widget build(BuildContext context) {
    // Экран лежит в стеке Navigator и сам по себе не
    // перестраивается при смене языка — см. LocaleScope.
    LocaleScope.watch(context);
    final st = AppScope.of(context);
    final items = st.historyForCar;

    return Scaffold(
      appBar: AppBar(title: Text(S.historyTitle)),
      body: items.isEmpty
          ? Center(
              child: Padding(
                padding: const EdgeInsets.all(24),
                child: Text(S.histEmpty,
                    textAlign: TextAlign.center,
                    style: const TextStyle(color: T.inkSoft)),
              ),
            )
          : ListView(
              padding: const EdgeInsets.fromLTRB(20, 12, 20, 32),
              children: [for (final h in items) _HistoryCard(entry: h)],
            ),
    );
  }
}

class _HistoryCard extends StatelessWidget {
  final HistoryEntry entry;
  const _HistoryCard({required this.entry});

  @override
  Widget build(BuildContext context) {
    final d = entry.date;
    final rep = entry.report;
    return Card(
      margin: const EdgeInsets.only(bottom: 10),
      child: ListTile(
        onTap: () async {
          if (rep != null) {
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (_) =>
                    ReportScreen(report: rep, carLabel: entry.carLabel),
              ),
            );
            return;
          }
          // Быстрый вердикт восстанавливаем по узлу дерева и сохранённым ответам.
          if (entry.leafId.isEmpty) return;
          final nav = Navigator.of(context);
          final tree = await DecisionTree.load();
          final leaf = tree.nodes[entry.leafId];
          if (leaf == null) return;
          nav.push(MaterialPageRoute(
            builder: (_) => VerdictScreen(leaf: leaf, answers: entry.answers),
          ));
        },
        leading: Container(
          width: 12,
          height: 12,
          margin: const EdgeInsets.only(top: 6),
          decoration: BoxDecoration(
            color: T.urgencyColor(entry.urgency),
            shape: BoxShape.circle,
          ),
        ),
        title: Text(entry.topCause),
        subtitle: Text(
          '${formatDate(d)} · '
          '${entry.isFull ? S.histFull : S.histQuick}'
          '${entry.carLabel.isEmpty ? '' : ' · ${entry.carLabel}'}',
          style: const TextStyle(fontSize: 12, color: T.inkSoft),
        ),
        trailing: (rep != null || entry.leafId.isNotEmpty)
            ? const Icon(Icons.chevron_right, color: T.inkSoft)
            : null,
      ),
    );
  }
}
