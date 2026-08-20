import 'package:flutter/material.dart';
import 'garage.dart';

import '../l10n/dates.dart';
import '../l10n/locale_scope.dart';
import '../models.dart';
import '../state.dart';
import '../strings.dart';
import '../theme.dart';
import '../widgets.dart';
import '../widgets/car_card.dart';
import 'how_it_works.dart';
import 'quiz.dart';
import 'record.dart';
import 'package:package_info_plus/package_info_plus.dart';
import 'package:url_launcher/url_launcher.dart';

import 'report.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  void initState() {
    super.initState();
    // Обновление проверяем с домашнего экрана, а не при запуске: на старте
    // человек ждёт приложение, а не диалог. Проверка молчалива, если
    // обновляться не на что.
    WidgetsBinding.instance.addPostFrameCallback((_) async {
      final updates = AppScope.of(context).updates;
      final info = await PackageInfo.fromPlatform();
      await updates.checkOnStart(info.version);
    });
  }

  @override
  Widget build(BuildContext context) {
    // Экран лежит в стеке Navigator и сам по себе не
    // перестраивается при смене языка — см. LocaleScope.
    LocaleScope.watch(context);
    final state = AppScope.of(context);
    return Scaffold(
      appBar: AppBar(
        title: Text(S.appName),
        actions: [
          IconButton(
            tooltip: S.garageTitle,
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
            // Обновление: скачанное через Play ставится по кнопке, для
            // копии с сайта показывается ссылка на APK.
            ListenableBuilder(
              listenable: state.updates,
              builder: (context, _) {
                final u = state.updates;
                if (u.downloaded) {
                  return _UpdateBar(
                    text: S.updDownloaded,
                    action: S.updInstall,
                    onTap: u.installDownloaded,
                  );
                }
                if (u.apkUrl != null) {
                  return _UpdateBar(
                    text: '${S.setUpdateAvailable}: ${u.newVersion}',
                    action: S.setDownload,
                    onTap: () => launchUrl(Uri.parse(u.apkUrl!),
                        mode: LaunchMode.externalApplication),
                  );
                }
                return const SizedBox.shrink();
              },
            ),
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
                label: Text(S.diagnose),
                onPressed: () => Navigator.of(context).push(
                    MaterialPageRoute(builder: (_) => const QuizScreen())),
              ),
            ),
            const SizedBox(height: 12),
            OutlinedButton.icon(
              icon: const Icon(Icons.mic_none),
              label: Text(S.diagnoseBySound),
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
                child: Text(S.howItWorksLink),
              ),
            ),
            SectionTitle(S.historyTitle),
            if (state.historyForCar.isEmpty)
              SurfaceCard(
                child: Text(S.historyEmpty,
                    style: Theme.of(context).textTheme.bodySmall),
              )
            else
              for (final e in state.historyForCar) _HistoryCard(entry: e),
          ],
        ),
      ),
    );
  }
}

class _HistoryCard extends StatelessWidget {
  final HistoryEntry entry;
  const _HistoryCard({required this.entry});

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
                        '${formatDate(entry.date)} · ${entry.carLabel} · '
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

/// Полоса обновления над содержимым главного экрана.
class _UpdateBar extends StatelessWidget {
  const _UpdateBar({required this.text, required this.action, required this.onTap});

  final String text;
  final String action;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 16),
      child: SurfaceCard(
        child: Row(
          children: [
            Expanded(
              child: Text(text, style: Theme.of(context).textTheme.bodyMedium),
            ),
            const SizedBox(width: 12),
            FilledButton(onPressed: onTap, child: Text(action)),
          ],
        ),
      ),
    );
  }
}
