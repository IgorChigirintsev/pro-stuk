import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../api.dart' show ApiException;
import '../data/account.dart' show Slot;
import '../l10n/cars_i18n.dart';
import '../l10n/locale_scope.dart';
import '../data/units.dart';
import '../models.dart';
import '../state.dart';
import '../strings.dart';
import '../theme.dart';
import 'buy.dart';
import 'onboarding.dart';

/// Гараж: машины и текущий пробег.
///
/// Сервисная книжка и история переехали на свои экраны — до них было не
/// доскроллить, а нужны они не реже, чем список машин.
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
                    slot: st.accounts.state?.slot(c.slotId),
                    onTap: () => st.selectCar(c.id),
                    onBuy: () => Navigator.push(context,
                        MaterialPageRoute(builder: (_) => BuyScreen(car: c))),
                    onDelete: st.cars.length > 1
                        ? () => _guard(context, () => st.removeCar(c.id))
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
                      if (v != null) {
                        _guard(context, () => st.setMileage(Units.store(v)));
                      }
                    },
                    child: Text(S.mileageUpdate),
                  ),
                ]),
                const SizedBox(height: 6),
                Text(
                  S.mileageHint,
                  style: TextStyle(fontSize: 13, color: T.inkSoft),
                ),

              ],
            ),
    );
  }
}



class _CarTile extends StatelessWidget {
  final Car car;
  final bool active;
  final VoidCallback onTap;
  final VoidCallback? onDelete;
  /// Место на сервере: сколько проверок осталось и заперта ли машина.
  final Slot? slot;
  final VoidCallback? onBuy;

  const _CarTile(
      {required this.car,
      required this.active,
      required this.onTap,
      this.onDelete,
      this.slot,
      this.onBuy});

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.only(bottom: 8),
      child: ListTile(
        onTap: onTap,
        leading: Icon(active ? Icons.check_circle : Icons.circle_outlined,
            color: active ? T.accent : T.border),
        title: Text(car.label),
        subtitle: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              [
                if (car.generation.isNotEmpty) genLabel(car.generation),
                Units.fmt(car.mileageKm),
              ].join(' · '),
              style: const TextStyle(fontSize: 13),
            ),
            if (slot != null)
              Padding(
                padding: const EdgeInsets.only(top: 4),
                child: Text(
                  S.buyChecksLeft.replaceFirst('{n}', '${slot!.checks}'),
                  style: TextStyle(
                    fontSize: 13,
                    fontWeight: FontWeight.w600,
                    // Ноль проверок — состояние, требующее действия.
                    color: slot!.checks == 0 ? T.warn : T.accent,
                  ),
                ),
              ),
          ],
        ),
        trailing: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            if (onBuy != null)
              IconButton(
                icon: const Icon(Icons.add_shopping_cart),
                tooltip: S.buyTitle,
                onPressed: onBuy,
              ),
            // Разобранную машину удалять нельзя: место закреплено за ней.
            if (onDelete != null && !(slot?.locked ?? false))
              IconButton(
                icon: const Icon(Icons.delete_outline),
                onPressed: onDelete,
              ),
          ],
        ),
      ),
    );
  }
}


/// Действия с гаражом идут через сервер и могут не пройти: машина заперта,
/// сети нет. Показываем причину, а не падаем молча.
Future<void> _guard(BuildContext context, Future<void> Function() action) async {
  final messenger = ScaffoldMessenger.of(context);
  try {
    await action();
  } on ApiException catch (e) {
    messenger.showSnackBar(SnackBar(content: Text(e.message)));
  } catch (_) {
    messenger.showSnackBar(SnackBar(content: Text(S.anErrServer)));
  }
}
