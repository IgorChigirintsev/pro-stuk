import 'package:flutter/material.dart';
import '../l10n/locale_scope.dart';
import '../widgets/schema_view.dart';
import '../schema_pick.dart';

import '../models.dart';
import '../strings.dart';
import '../theme.dart';
import '../widgets.dart';
import 'share_card.dart';

/// Полный отчёт по звуку.
class ReportScreen extends StatelessWidget {
  final ReportData report;
  final String carLabel;
  final bool justCreated;
  const ReportScreen({
    super.key,
    required this.report,
    required this.carLabel,
    this.justCreated = false,
  });

  @override
  Widget build(BuildContext context) {
    // Экран лежит в стеке Navigator и сам по себе не
    // перестраивается при смене языка — см. LocaleScope.
    LocaleScope.watch(context);
    return Scaffold(
      appBar: AppBar(
        title: Text(S.repTitle),
        leading: justCreated
            ? IconButton(
                icon: const Icon(Icons.close),
                onPressed: () =>
                    Navigator.of(context).popUntil((r) => r.isFirst),
              )
            : null,
        actions: [
          IconButton(
            icon: const Icon(Icons.share),
            tooltip: S.repShare,
            onPressed: () => Navigator.of(context).push(MaterialPageRoute(
              builder: (_) =>
                  ShareCardScreen(report: report, carLabel: carLabel),
            )),
          ),
        ],
      ),
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.all(20),
          children: [
            TrafficLightPlaque(
                urgency: report.urgency, reason: report.urgencyReason),
            // Отклонений не слышно — причин нет, и список показывать нечем.
            // Пишем прямо, что вердикт относится к записи: звук мог не попасть
            // в неё, и обещать исправную машину мы не вправе.
            if (report.noFault)
              SurfaceCard(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        const Icon(Icons.check_circle_outline,
                            color: T.ok, size: 22),
                        const SizedBox(width: 8),
                        Expanded(
                          child: Text(S.repNoFault,
                              style: Theme.of(context)
                                  .textTheme
                                  .titleMedium
                                  ?.copyWith(fontWeight: FontWeight.w700)),
                        ),
                      ],
                    ),
                    const SizedBox(height: 8),
                    Text(S.repNoFaultNote,
                        style: Theme.of(context).textTheme.bodyMedium),
                  ],
                ),
              )
            else ...[
              SectionTitle(S.repCauses),
              for (final c in report.causes)
                Padding(
                  padding: const EdgeInsets.only(bottom: 12),
                  child: _CauseCard(cause: c),
                ),
            ],
            // Второй звук в той же записи. Отдельным блоком, а не в списке
            // причин: причины делят сотню процентов как версии одного звука,
            // и независимая находка среди них читалась бы как конкурент.
            if (report.otherSounds.isNotEmpty) ...[
              SectionTitle(S.repOtherSounds),
              SurfaceCard(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    for (final snd in report.otherSounds)
                      Padding(
                        padding: EdgeInsets.only(
                            bottom: snd == report.otherSounds.last ? 0 : 10),
                        child: Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            const Icon(Icons.graphic_eq,
                                size: 20, color: T.inkSoft),
                            const SizedBox(width: 8),
                            Expanded(
                              child: Text(snd,
                                  style:
                                      Theme.of(context).textTheme.bodyMedium),
                            ),
                          ],
                        ),
                      ),
                  ],
                ),
              ),
            ],
            // Схема из ответа сервера, а для отчётов до этой версии —
            // подбираем локально по названиям причин, чтобы история не была пустой.
            if (report.schemaKey.isNotEmpty) ...[
              const SizedBox(height: 20),
              SchemaView(
                  schemaKey: report.schemaKey, marks: report.schemaMarks),
            ] else ...[
              FutureBuilder<SchemaPick?>(
                future: SchemaPicker.forCauses(
                    report.causes.map((c) => c.title).toList()),
                builder: (context, snap) {
                  final hit = snap.data;
                  if (hit == null) return const SizedBox.shrink();
                  return Padding(
                    padding: const EdgeInsets.only(top: 20),
                    child:
                        SchemaView(schemaKey: hit.key, marks: hit.marks),
                  );
                },
              ),
            ],
            if (report.mechanicBrief.isNotEmpty) ...[
              SectionTitle(S.repBrief),
              SurfaceCard(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    for (final (i, line) in report.mechanicBrief.indexed)
                      Padding(
                        padding: const EdgeInsets.symmetric(vertical: 6),
                        child: Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            SizedBox(
                                width: 24,
                                child: Text('${i + 1}.',
                                    style: T.num_(T.fs16, color: T.accent))),
                            Expanded(
                                child: Text(line,
                                    style: Theme.of(context)
                                        .textTheme
                                        .bodyMedium)),
                          ],
                        ),
                      ),
                  ],
                ),
              ),
            ],
            if (report.mechanicQuestions.isNotEmpty) ...[
              SectionTitle(S.repQuestions),
              SurfaceCard(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    for (final q in report.mechanicQuestions)
                      Padding(
                        padding: const EdgeInsets.symmetric(vertical: 6),
                        child: Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            const Padding(
                              padding: EdgeInsets.only(top: 7),
                              child: Icon(Icons.circle,
                                  size: 6, color: T.inkSoft),
                            ),
                            const SizedBox(width: 10),
                            Expanded(
                                child: Text(q,
                                    style: Theme.of(context)
                                        .textTheme
                                        .bodyMedium)),
                          ],
                        ),
                      ),
                  ],
                ),
              ),
            ],
            if (report.redFlags.isNotEmpty) ...[
              SectionTitle(S.repRedFlags),
              SurfaceCard(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    for (final f in report.redFlags)
                      Padding(
                        padding: const EdgeInsets.symmetric(vertical: 6),
                        child: Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            const Padding(
                              padding: EdgeInsets.only(top: 6),
                              child: Icon(Icons.circle,
                                  size: 8, color: T.stop),
                            ),
                            const SizedBox(width: 10),
                            Expanded(
                                child: Text(f,
                                    style: Theme.of(context)
                                        .textTheme
                                        .bodyMedium)),
                          ],
                        ),
                      ),
                  ],
                ),
              ),
            ],
            const SizedBox(height: 20),
            Text(
              report.disclaimer.isNotEmpty
                  ? report.disclaimer
                  : S.disclaimerShort,
              style: Theme.of(context).textTheme.bodySmall,
            ),
            const SizedBox(height: 20),
          ],
        ),
      ),
    );
  }
}

/// Причина: полоска процента, title, разворачиваемые «Почему» и «Проверить самому».
class _CauseCard extends StatefulWidget {
  final Cause cause;
  const _CauseCard({required this.cause});

  @override
  State<_CauseCard> createState() => _CauseCardState();
}

class _CauseCardState extends State<_CauseCard> {
  bool _open = false;

  @override
  Widget build(BuildContext context) {
    final c = widget.cause;
    return Material(
      color: T.surface,
      borderRadius: BorderRadius.circular(T.rCard),
      child: InkWell(
        borderRadius: BorderRadius.circular(T.rCard),
        onTap: () => setState(() => _open = !_open),
        child: Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(T.rCard),
            border: Border.all(color: T.border),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Expanded(
                    child: Text(c.title,
                        style: Theme.of(context).textTheme.titleMedium),
                  ),
                  const SizedBox(width: 12),
                  Text('${c.probabilityPct}%', style: T.num_(T.fs18)),
                ],
              ),
              const SizedBox(height: 10),
              PctBar(pct: c.probabilityPct),
              AnimatedCrossFade(
                duration: const Duration(milliseconds: 200),
                crossFadeState: _open
                    ? CrossFadeState.showSecond
                    : CrossFadeState.showFirst,
                firstChild: const SizedBox(width: double.infinity),
                secondChild: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const SizedBox(height: 14),
                    Text(S.repWhy,
                        style: Theme.of(context)
                            .textTheme
                            .bodySmall!
                            .copyWith(fontWeight: FontWeight.w600)),
                    const SizedBox(height: 4),
                    Text(c.why,
                        style: Theme.of(context).textTheme.bodyMedium),
                    const SizedBox(height: 12),
                    Text(S.repCheck,
                        style: Theme.of(context)
                            .textTheme
                            .bodySmall!
                            .copyWith(fontWeight: FontWeight.w600)),
                    const SizedBox(height: 4),
                    Text(c.checkYourself,
                        style: Theme.of(context).textTheme.bodyMedium),
                  ],
                ),
              ),
              const SizedBox(height: 4),
              Center(
                child: Icon(
                  _open ? Icons.expand_less : Icons.expand_more,
                  size: 20,
                  color: T.inkSoft,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
