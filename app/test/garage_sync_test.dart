import 'package:flutter_test/flutter_test.dart';
import 'package:stuk/data/account.dart' as acc;
import 'package:stuk/models.dart';

/// Приведение гаража к серверному — чистая логика, вынесенная сюда из
/// AppState.syncGarage. Три случая, каждый из которых иначе ломает приложение:
/// переустановка, вход под другим аккаунтом и обновление с версии до аккаунтов.
List<Car> merge(List<Car> local, acc.AccountState state) {
  final slots = {for (final s in state.slots) s.id: s};
  final next = <Car>[];
  for (final c in local) {
    if (c.slotId.isNotEmpty && slots.containsKey(c.slotId)) next.add(c);
  }
  for (final s in state.slots) {
    final car = s.car;
    if (car == null) continue;
    if (next.any((c) => c.slotId == s.id)) continue;
    next.add(Car(
      id: 'restored-${s.id}',
      make: car.make,
      model: car.model,
      year: car.year,
      mileageKm: car.mileage,
      generation: car.generation,
      slotId: s.id,
    ));
  }
  return next;
}

acc.AccountState server({List<acc.Slot> slots = const []}) =>
    acc.AccountState(id: 'a1', slots: slots, version: 1);

acc.Slot slotWith(String id, {String make = 'BMW', int checks = 5}) => acc.Slot(
      id: id,
      checks: checks,
      car: acc.Car(make: make, model: '3 серия', year: 2018, mileage: 60000),
    );

Car local(String slotId, {String make = 'BMW'}) => Car(
      id: 'l-$slotId',
      make: make,
      model: '3 серия',
      year: 2018,
      mileageKm: 60000,
      slotId: slotId,
    );

void main() {
  // Главное обещание входа: снёс приложение, вошёл — гараж на месте.
  test('переустановка возвращает гараж с сервера', () {
    final merged = merge(const [], server(slots: [slotWith('s1'), slotWith('s2', make: 'Kia')]));
    expect(merged.length, 2);
    expect(merged.map((c) => c.slotId), ['s1', 's2']);
    expect(merged.first.make, 'BMW');
  });

  // Вошли под другим аккаунтом: чужие машины показывать нельзя.
  test('машины прежнего аккаунта исчезают', () {
    final merged = merge([local('s9'), local('s8')], server(slots: [slotWith('s1')]));
    expect(merged.length, 1);
    expect(merged.single.slotId, 's1');
  });

  // Локальная машина главнее серверной копии: в ней сервисный журнал,
  // которого на сервере нет.
  test('локальная машина сохраняется, а не подменяется серверной', () {
    final mine = Car(
      id: 'мой',
      make: 'BMW',
      model: '3 серия',
      year: 2018,
      mileageKm: 60000,
      slotId: 's1',
      service: const {'oil': 55000},
    );
    final merged = merge([mine], server(slots: [slotWith('s1')]));
    expect(merged.single.id, 'мой');
    expect(merged.single.service['oil'], 55000, reason: 'журнал обслуживания не потерялся');
  });

  // Пустые места — ёмкость гаража, а не машины.
  test('пустые места не превращаются в машины', () {
    final merged = merge(const [], server(slots: [
      slotWith('s1'),
      const acc.Slot(id: 's2', checks: 5),
    ]));
    expect(merged.length, 1);
    expect(merged.single.slotId, 's1');
  });

  // Машина из сборки до аккаунтов не имеет места. Показывать её как обычную
  // нельзя: разбор упрётся в отказ сервера.
  test('машина без места не проходит в гараж сама по себе', () {
    final merged = merge([local('')], server(slots: [const acc.Slot(id: 's1', checks: 5)]));
    expect(merged, isEmpty,
        reason: 'привязка делается отдельно, через сервер, и может не пройти');
  });
}
