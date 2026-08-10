import 'package:flutter/material.dart';
import '../schema_pick.dart';
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
    return Scaffold(
      appBar: AppBar(title: const Text(S.verdictTitle)),
      body: SafeArea(
        child: Column(
          children: [
            Expanded(
              child: ListView(
                padding: const EdgeInsets.all(20),
                children: [
                  TrafficLightPlaque(
                      urgency: leaf.urgency, reason: leaf.topCause),
                  const SectionTitle(S.verdictWhat),
                  SurfaceCard(
                    child: Text(leaf.explanation,
                        style: Theme.of(context).textTheme.bodyMedium),
                  ),
                  const SectionTitle(S.verdictAdvice),
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
                    future: SchemaPicker.forCauses(
                        [leaf.topCause, ...leaf.altCauses]),
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
                    child: const Text(S.verdictRefine),
                  ),
                  const SizedBox(height: 6),
                  Text(S.verdictRefineNote,
                      style: Theme.of(context).textTheme.bodySmall),
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
                    child: const Text(S.verdictEnough),
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
