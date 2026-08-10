import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../data/service.dart';
import '../models.dart';
import '../state.dart';
import '../theme.dart';
import 'onboarding.dart';
import 'report.dart';
import 'verdict.dart';
import '../tree.dart';

/// Профиль: гараж, история диагностик и сервисная книжка.
class GarageScreen extends StatefulWidget {
  const GarageScreen({super.key});

  @override
  State<GarageScreen> createState() => _GarageScreenState();
}

class _GarageScreenState extends State<GarageScreen> {
  final _mileageCtrl = TextEditingController();

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    final car = AppScope.of(context).car;
    if (car != null && _mileageCtrl.text.isEmpty) {
      _mileageCtrl.text = car.mileageKm.toString();
    }
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
            const Text('Сколько километров назад меняли?'),
            const SizedBox(height: 12),
            TextField(
              controller: ctrl,
              autofocus: true,
              keyboardType: TextInputType.number,
              inputFormatters: [FilteringTextInputFormatter.digitsOnly],
              decoration: const InputDecoration(hintText: 'например, 3000'),
            ),
          ],
        ),
        actions: [
          TextButton(
              onPressed: () => Navigator.pop(ctx), child: const Text('Отмена')),
          TextButton(
            onPressed: () => Navigator.pop(ctx, int.tryParse(ctrl.text.trim())),
            child: const Text('Сохранить'),
          ),
        ],
      ),
    );
    if (km != null) await st.setServiceAgo(c.key, km);
  }

  @override
  Widget build(BuildContext context) {
    final st = AppScope.of(context);
    final car = st.car;

    return Scaffold(
      appBar: AppBar(title: const Text('Профиль')),
      body: car == null
          ? const Center(child: Padding(
              padding: EdgeInsets.all(24),
              child: Text('Добавьте машину, чтобы вести сервисную книжку.')))
          : ListView(
              padding: const EdgeInsets.fromLTRB(20, 12, 20, 32),
              children: [
                Text('Мои машины',
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
                        builder: (_) => const OnboardingCarScreen()),
                  ),
                  child: const Text('Добавить машину'),
                ),

                const SizedBox(height: 28),
                Text('Текущий пробег',
                    style: Theme.of(context).textTheme.titleMedium),
                const SizedBox(height: 8),
                Row(children: [
                  Expanded(
                    child: TextField(
                      controller: _mileageCtrl,
                      keyboardType: TextInputType.number,
                      inputFormatters: [FilteringTextInputFormatter.digitsOnly],
                      decoration: const InputDecoration(suffixText: 'км'),
                    ),
                  ),
                  const SizedBox(width: 12),
                  FilledButton(
                    onPressed: () {
                      final v = int.tryParse(_mileageCtrl.text.trim());
                      if (v != null) st.setMileage(v);
                    },
                    child: const Text('Обновить'),
                  ),
                ]),
                const SizedBox(height: 6),
                const Text(
                  'От него считаются остатки по расходникам — и он же подставляется в анкету.',
                  style: TextStyle(fontSize: 13, color: T.inkSoft),
                ),

                const SizedBox(height: 20),
                Card(
                  clipBehavior: Clip.antiAlias,
                  child: ExpansionTile(
                    title: const Text('Сервисная книжка'),
                    subtitle: Text(_bookSummary(car),
                        style: const TextStyle(fontSize: 13, color: T.inkSoft)),
                    childrenPadding: const EdgeInsets.fromLTRB(12, 0, 12, 12),
                    children: [
                      const Padding(
                        padding: EdgeInsets.only(bottom: 10),
                        child: Text(
                          'Интервалы даны диапазоном: разброс зависит от типа детали '
                          'и условий. Регламент производителя для вашей машины главнее.',
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
                Text('История диагностик',
                    style: Theme.of(context).textTheme.titleMedium),
                const SizedBox(height: 8),
                if (st.history.isEmpty)
                  const Text('Пока пусто — первый разбор появится здесь.',
                      style: TextStyle(color: T.inkSoft))
                else
                  for (final h in st.history) _HistoryCard(entry: h),
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
  if (filled == 0) return 'Отметьте, что и когда меняли';
  if (overdue > 0) return 'Пора менять: $overdue';
  if (due > 0) return 'Скоро: $due';
  return 'Всё в пределах интервала';
}

class _HistoryCard extends StatelessWidget {
  final HistoryEntry entry;
  const _HistoryCard({required this.entry});

  static const _months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
  ];

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
          '${d.day} ${_months[d.month - 1]} ${d.year} · '
          '${entry.isFull ? 'разбор звука' : 'быстрый вердикт'}'
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
            if (car.generation.isNotEmpty) car.generation,
            '${car.mileageKm} км',
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
                (s.item.byCondition ? ' · смотреть по состоянию' : ''),
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
              child: const Text('сбросить',
                  style: TextStyle(fontSize: 11, color: T.inkSoft)),
            ),
        ],
      ),
    );
  }
}
