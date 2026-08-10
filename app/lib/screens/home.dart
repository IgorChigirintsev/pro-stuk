import 'package:flutter/material.dart';
import 'garage.dart';

import '../models.dart';
import '../state.dart';
import '../strings.dart';
import '../theme.dart';
import '../widgets.dart';
import '../widgets/car_card.dart';
import 'how_it_works.dart';
import 'quiz.dart';
import 'record.dart';
import 'report.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final state = AppScope.of(context);
    return Scaffold(
      appBar: AppBar(
        title: const Text(S.appName),
        actions: [
          IconButton(
            tooltip: 'Профиль',
            icon: const Icon(Icons.directions_car_outlined),
            onPressed: () => Navigator.push(context,
                MaterialPageRoute(builder: (_) => const GarageScreen())),
          ),
        ],
      ),
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.all(20),
          children: [
            if (state.car != null) ...[
              CarCard(
                onOpenProfile: () => Navigator.push(context,
                    MaterialPageRoute(builder: (_) => const GarageScreen())),
              ),
              const SizedBox(height: 16),
            ],
            SizedBox(
              height: 64,
              child: ElevatedButton.icon(
                icon: const Icon(Icons.graphic_eq),
                label: const Text(S.diagnose),
                onPressed: () => Navigator.of(context).push(
                    MaterialPageRoute(builder: (_) => const QuizScreen())),
              ),
            ),
            const SizedBox(height: 12),
            OutlinedButton.icon(
              icon: const Icon(Icons.mic_none),
              label: const Text(S.diagnoseBySound),
              onPressed: () => Navigator.of(context).push(
                  MaterialPageRoute(builder: (_) => const RecordScreen())),
            ),
            const SizedBox(height: 4),
            Center(
              child: Text(S.diagnoseBySoundNote,
                  style: Theme.of(context).textTheme.bodySmall),
            ),
            const SizedBox(height: 8),
            Center(
              child: TextButton(
                onPressed: () => Navigator.of(context).push(MaterialPageRoute(
                    builder: (_) => const HowItWorksScreen())),
                child: const Text(S.howItWorksLink),
              ),
            ),
            const SectionTitle(S.historyTitle),
            if (state.history.isEmpty)
              SurfaceCard(
                child: Text(S.historyEmpty,
                    style: Theme.of(context).textTheme.bodySmall),
              )
            else
              for (final e in state.history) _HistoryCard(entry: e),
          ],
        ),
      ),
    );
  }
}

class _HistoryCard extends StatelessWidget {
  final HistoryEntry entry;
  const _HistoryCard({required this.entry});

  String _fmtDate(DateTime d) {
    const months = [
      'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
    ];
    return '${d.day} ${months[d.month - 1]} ${d.year}';
  }

  @override
  Widget build(BuildContext context) {
    final openable = entry.isFull && entry.report != null;
    return Padding(
      padding: const EdgeInsets.only(bottom: 12),
      child: Material(
        color: T.surface,
        borderRadius: BorderRadius.circular(T.rCard),
        child: InkWell(
          borderRadius: BorderRadius.circular(T.rCard),
          onTap: openable
              ? () => Navigator.of(context).push(MaterialPageRoute(
                  builder: (_) => ReportScreen(
                      report: entry.report!, carLabel: entry.carLabel)))
              : null,
          child: Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(T.rCard),
              border: Border.all(color: T.border),
            ),
            child: Row(
              children: [
                UrgencyDot(urgency: entry.urgency),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(entry.topCause,
                          style: Theme.of(context).textTheme.bodyLarge,
                          maxLines: 2,
                          overflow: TextOverflow.ellipsis),
                      const SizedBox(height: 4),
                      Text(
                        '${_fmtDate(entry.date)} · ${entry.carLabel} · '
                        '${entry.isFull ? S.fullReport : S.quickReport}',
                        style: Theme.of(context).textTheme.bodySmall,
                      ),
                    ],
                  ),
                ),
                if (openable)
                  const Icon(Icons.chevron_right, color: T.inkSoft),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
