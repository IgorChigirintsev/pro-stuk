import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../data/service.dart';
import '../data/units.dart';
import '../l10n/locale_scope.dart';
import '../state.dart';
import '../strings.dart';
import '../theme.dart';

/// Сервисная книжка активной машины.
///
/// Вынесена из гаража отдельным экраном: она нужна не при каждом заходе, а
/// когда что-то поменяли, и своей иконкой в шапке достаётся за одно касание
/// вместо трёх.
class ServiceBookScreen extends StatelessWidget {
  const ServiceBookScreen({super.key});

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

    return Scaffold(
      appBar: AppBar(title: Text(S.bookTitle)),
      body: car == null
          ? Center(
              child: Padding(
                padding: const EdgeInsets.all(24),
                child: Text(S.garageEmpty, textAlign: TextAlign.center),
              ),
            )
          : ListView(
              padding: const EdgeInsets.fromLTRB(20, 12, 20, 32),
              children: [
                Text(car.label, style: Theme.of(context).textTheme.titleMedium),
                const SizedBox(height: 2),
                Text('${S.mileageNow}: ${Units.fmt(car.mileageKm)}',
                    style: const TextStyle(fontSize: 13, color: T.inkSoft)),
                const SizedBox(height: 12),
                Text(S.bookNote,
                    style: const TextStyle(fontSize: 13, color: T.inkSoft)),
                const SizedBox(height: 8),
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
