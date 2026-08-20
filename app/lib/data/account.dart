/// Учётная запись и её гараж — так, как их видит сервер.
///
/// Сервер здесь главный: баланс проверок и замок на машине решает он.
/// Приложение держит копию, чтобы показывать гараж мгновенно и без сети,
/// но ничего по ней не разрешает: попытка разбора всё равно уйдёт на сервер
/// и там будет принята или отклонена.
library;

class Car {
  final String make;
  final String model;
  final String generation;
  final int year;
  final int mileage;

  const Car({
    required this.make,
    required this.model,
    this.generation = '',
    required this.year,
    required this.mileage,
  });

  /// Пробег в сравнение не входит: он меняется всю жизнь машины, а остальное
  /// после первого разбора заперто.
  bool sameIdentity(Car o) =>
      make == o.make &&
      model == o.model &&
      generation == o.generation &&
      year == o.year;

  factory Car.fromJson(Map<String, dynamic> j) => Car(
        make: j['make'] as String? ?? '',
        model: j['model'] as String? ?? '',
        generation: j['generation'] as String? ?? '',
        year: (j['year'] as num?)?.toInt() ?? 0,
        mileage: (j['mileage'] as num?)?.toInt() ?? 0,
      );

  Map<String, dynamic> toJson() => {
        'make': make,
        'model': model,
        if (generation.isNotEmpty) 'generation': generation,
        'year': year,
        'mileage': mileage,
      };
}

/// Место в гараже со своим балансом проверок.
class Slot {
  final String id;
  final Car? car;
  final int checks;

  /// Сколько проверок уже потрачено. Ненулевое значение запирает машину:
  /// менять и удалять её нельзя.
  final int used;

  const Slot({required this.id, this.car, required this.checks, this.used = 0});

  bool get locked => used > 0;
  bool get isEmpty => car == null;

  factory Slot.fromJson(Map<String, dynamic> j) => Slot(
        id: j['id'] as String? ?? '',
        car: j['car'] == null
            ? null
            : Car.fromJson((j['car'] as Map).cast<String, dynamic>()),
        checks: (j['checks'] as num?)?.toInt() ?? 0,
        used: (j['used'] as num?)?.toInt() ?? 0,
      );

  Map<String, dynamic> toJson() => {
        'id': id,
        if (car != null) 'car': car!.toJson(),
        'checks': checks,
        'used': used,
      };
}

/// Купленные проверки, которые ещё не легли на место: связь могла оборваться
/// сразу после оплаты. Приложение доносит их до машины позже.
class PendingChecks {
  final String purchaseId;
  final int checks;
  final String slotId;

  const PendingChecks({
    required this.purchaseId,
    required this.checks,
    this.slotId = '',
  });

  factory PendingChecks.fromJson(Map<String, dynamic> j) => PendingChecks(
        purchaseId: j['purchase_id'] as String? ?? '',
        checks: (j['checks'] as num?)?.toInt() ?? 0,
        slotId: j['slot_id'] as String? ?? '',
      );

  Map<String, dynamic> toJson() => {
        'purchase_id': purchaseId,
        'checks': checks,
        if (slotId.isNotEmpty) 'slot_id': slotId,
      };
}

class AccountState {
  final String id;
  final String provider;
  final List<Slot> slots;
  final List<PendingChecks> pending;

  /// Растёт при каждом изменении на сервере. По нему приложение спрашивает
  /// «у меня всё ещё свежее?» одним коротким запросом вместо выкачивания.
  final int version;

  const AccountState({
    required this.id,
    this.provider = '',
    this.slots = const [],
    this.pending = const [],
    this.version = 0,
  });

  Slot? slot(String id) {
    for (final s in slots) {
      if (s.id == id) return s;
    }
    return null;
  }

  /// Машины, стоящие на местах. Пустые места — это ёмкость гаража, а не машины.
  List<Slot> get occupied => [for (final s in slots) if (!s.isEmpty) s];

  bool get hasFreeSlot => slots.any((s) => s.isEmpty);

  factory AccountState.fromJson(Map<String, dynamic> j) => AccountState(
        id: j['id'] as String? ?? '',
        provider: j['provider'] as String? ?? '',
        slots: [
          for (final s in (j['slots'] as List? ?? []))
            Slot.fromJson((s as Map).cast<String, dynamic>())
        ],
        pending: [
          for (final p in (j['pending'] as List? ?? []))
            PendingChecks.fromJson((p as Map).cast<String, dynamic>())
        ],
        version: (j['version'] as num?)?.toInt() ?? 0,
      );

  Map<String, dynamic> toJson() => {
        'id': id,
        'provider': provider,
        'slots': [for (final s in slots) s.toJson()],
        'pending': [for (final p in pending) p.toJson()],
        'version': version,
      };
}
