import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../l10n/cars_i18n.dart';
import '../l10n/dates.dart';
import '../l10n/locale_scope.dart';
import '../data/service.dart';
import '../data/units.dart';
import '../models.dart';
import '../state.dart';
import '../strings.dart';
import '../theme.dart';
import 'onboarding.dart';
import 'report.dart';
import 'settings.dart';
import 'verdict.dart';
import '../tree.dart';

/// Гараж: машины, история диагностик и сервисная книжка.
class GarageScreen extends StatefulWidget {
  const GarageScreen({super.key});

  @override
  State<GarageScreen> createState() => _GarageScreenState();
}

class _GarageScreenState extends State<GarageScreen> {
  final _mileageCtrl = TextEditingController();
  /// Какую машину и какой пробег сейчас показывает поле: при переключении
  /// машины в гараже значение должно смениться, а не остаться от прежней.
  String _shownCarId = '';
  int _shownKm = -1;

  void _syncMileageField(Car car) {
    if (_shownCarId == car.id && _shownKm == car.mileageKm) return;
    _shownCarId = car.id;
    _shownKm = car.mileageKm;
    _mileageCtrl.text = Units.display(car.mileageKm).toString();
  }

  @override
  void dispose() {
    _mileageCtrl.dispose();
    super.dispose();
  }

  Future<void> _askAgo(BuildContext context, Consumable c) async {
    final st = AppScope.of(context); // берём до await: контекст после диалога уже не наш
    final ctrl = TextEditingController();
    final km = await showDialog<int>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: Text(c.title),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(S.bookAskAgo),
            const SizedBox(height: 12),
            TextField(
              controller: ctrl,
              autofocus: true,
              keyboardType: TextInputType.number,
              inputFormatters: [FilteringTextInputFormatter.digitsOnly],
              decoration: InputDecoration(hintText: S.bookAskHint),
            ),
          ],
        ),
        actions: [
          TextButton(
              onPressed: () => Navigator.pop(ctx), child: Text(S.bookCancel)),
          TextButton(
            onPressed: () => Navigator.pop(ctx, int.tryParse(ctrl.text.trim())),
            child: Text(S.bookSave),
          ),
        ],
      ),
    );
    if (km != null) await st.setServiceAgo(c.key, Units.store(km));
  }

  @override
  Widget build(BuildContext context) {
    // Экран лежит в стеке Navigator и сам по себе не
    // перестраивается при смене языка — см. LocaleScope.
    LocaleScope.watch(context);
    final st = AppScope.of(context);
    final car = st.car;
    if (car != null) _syncMileageField(car);

    return Scaffold(
      appBar: AppBar(title: Text(S.garageTitle)),
      body: car == null
          ? Center(
              child: Padding(
                padding: const EdgeInsets.all(24),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(
                      S.garageEmpty,
                      textAlign: TextAlign.center,
                    ),
                    const SizedBox(height: 16),
                    FilledButton(
                      onPressed: () => Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (_) =>
                                const OnboardingCarScreen(addNew: true)),
                      ),
                      child: Text(S.garageAddCar),
                    ),
                  ],
                ),
              ),
            )
          : ListView(
              padding: const EdgeInsets.fromLTRB(20, 12, 20, 32),
              children: [
                Text(S.garageCars,
                    style: Theme.of(context).textTheme.titleMedium),
                const SizedBox(height: 8),
                for (final c in st.cars)
                  _CarTile(
                    car: c,
                    active: c.id == car.id,
                    onTap: () => st.selectCar(c.id),
                    onDelete: st.cars.length > 1
                        ? () => st.removeCar(c.id)
                        : null,
                  ),
                const SizedBox(height: 8),
                OutlinedButton(
                  onPressed: () => Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (_) => const OnboardingCarScreen(addNew: true)),
                  ),
                  child: Text(S.garageAddCar),
                ),

                const SizedBox(height: 28),
                Text(S.mileageNow,
                    style: Theme.of(context).textTheme.titleMedium),
                const SizedBox(height: 8),
                Row(children: [
                  Expanded(
                    child: TextField(
                      controller: _mileageCtrl,
                      keyboardType: TextInputType.number,
                      inputFormatters: [FilteringTextInputFormatter.digitsOnly],
                      decoration: InputDecoration(suffixText: Units.label),
                    ),
                  ),
                  const SizedBox(width: 12),
                  FilledButton(
                    onPressed: () {
                      final v = int.tryParse(_mileageCtrl.text.trim());
                      if (v != null) st.setMileage(Units.store(v));
                    },
                    child: Text(S.mileageUpdate),
                  ),
                ]),
                const SizedBox(height: 6),
                Text(
                  S.mileageHint,
                  style: TextStyle(fontSize: 13, color: T.inkSoft),
                ),

                const SizedBox(height: 20),
                Card(
                  clipBehavior: Clip.antiAlias,
                  child: ExpansionTile(
                    title: Text(S.bookTitle),
                    subtitle: Text(_bookSummary(car),
                        style: const TextStyle(fontSize: 13, color: T.inkSoft)),
                    childrenPadding: const EdgeInsets.fromLTRB(12, 0, 12, 12),
                    children: [
                      Padding(
                        padding: const EdgeInsets.only(bottom: 10),
                        child: Text(
                          S.bookNote,
                          style: TextStyle(fontSize: 13, color: T.inkSoft),
                        ),
                      ),
                      for (final c in consumables)
                        _ServiceTile(
                          status: statusFor(
                            c,
                            car.service[c.key] == null
                                ? null
                                : car.mileageKm - car.service[c.key]!,
                          ),
                          onTap: () => _askAgo(context, c),
                          onClear: car.service.containsKey(c.key)
                              ? () => st.clearService(c.key)
                              : null,
                        ),
                    ],
                  ),
                ),

                const SizedBox(height: 28),
                Text(S.historyTitle,
                    style: Theme.of(context).textTheme.titleMedium),
                const SizedBox(height: 8),
                if (st.historyForCar.isEmpty)
                  Text(S.histEmpty,
                      style: TextStyle(color: T.inkSoft))
                else
                  for (final h in st.historyForCar) _HistoryCard(entry: h),

                const SizedBox(height: 24),
                OutlinedButton.icon(
                  icon: const Icon(Icons.settings_outlined, size: 18),
                  label: Text(S.garageSettings),
                  onPressed: () => Navigator.push(context,
                      MaterialPageRoute(builder: (_) => const SettingsScreen())),
                ),
              ],
            ),
    );
  }
}

/// Что показать в свёрнутом виде: сначала то, что просрочено.
String _bookSummary(Car car) {
  var overdue = 0, due = 0, filled = 0;
  for (final c in consumables) {
    final since = car.service[c.key] == null
        ? null
        : car.mileageKm - car.service[c.key]!;
    if (since == null) continue;
    filled++;
    final s = statusFor(c, since);
    if (s.overdue) {
      overdue++;
    } else if (s.due) {
      due++;
    }
  }
  if (filled == 0) return S.bookEmptyHint;
  if (overdue > 0) return '${S.bookOverdue}: $overdue';
  if (due > 0) return '${S.bookSoon}: $due';
  return S.bookAllGood;
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

class _CarTile extends StatelessWidget {
  final Car car;
  final bool active;
  final VoidCallback onTap;
  final VoidCallback? onDelete;

  const _CarTile(
      {required this.car,
      required this.active,
      required this.onTap,
      this.onDelete});

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.only(bottom: 8),
      child: ListTile(
        onTap: onTap,
        leading: Icon(active ? Icons.check_circle : Icons.circle_outlined,
            color: active ? T.accent : T.border),
        title: Text(car.label),
        subtitle: Text(
          [
            if (car.generation.isNotEmpty) genLabel(car.generation),
            Units.fmt(car.mileageKm),
          ].join(' · '),
          style: const TextStyle(fontSize: 13),
        ),
        trailing: onDelete == null
            ? null
            : IconButton(
                icon: const Icon(Icons.delete_outline),
                onPressed: onDelete,
              ),
      ),
    );
  }
}

class _ServiceTile extends StatelessWidget {
  final ServiceStatus status;
  final VoidCallback onTap;
  final VoidCallback? onClear;

  const _ServiceTile(
      {required this.status, required this.onTap, this.onClear});

  @override
  Widget build(BuildContext context) {
    final s = status;
    final color = s.unknown
        ? T.inkSoft
        : s.overdue
            ? const Color(0xFFC2410C)
            : s.due
                ? const Color(0xFFB45309)
                : const Color(0xFF15803D);

    return ListTile(
      contentPadding: EdgeInsets.zero,
      onTap: onTap,
      title: Text(s.item.title, style: const TextStyle(fontSize: 15)),
      subtitle: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            intervalText(s.item) +
                (s.item.byCondition ? ' · ${S.bookByCondition}' : ''),
            style: const TextStyle(fontSize: 12, color: T.inkSoft),
          ),
          if (s.detail.isNotEmpty)
            Text(s.detail,
                style: const TextStyle(fontSize: 12, color: T.inkSoft)),
          if (s.item.note.isNotEmpty)
            Padding(
              padding: const EdgeInsets.only(top: 2),
              child: Text(s.item.note,
                  style: const TextStyle(fontSize: 12, color: T.inkSoft)),
            ),
        ],
      ),
      trailing: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          Text(s.label,
              style: TextStyle(
                  fontSize: 13, fontWeight: FontWeight.w700, color: color)),
          if (onClear != null)
            GestureDetector(
              onTap: onClear,
              child: Text(S.bookReset,
                  style: TextStyle(fontSize: 11, color: T.inkSoft)),
            ),
        ],
      ),
    );
  }
}
