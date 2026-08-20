import 'dart:convert';
import 'dart:io';

import 'package:flutter/widgets.dart';
import 'package:path_provider/path_provider.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:uuid/uuid.dart';

import 'data/account.dart' show Slot;
import 'data/account_service.dart';
import 'data/store_service.dart';
import 'data/service.dart';
import 'models.dart';

/// Состояние приложения: машина, device_id, история отчётов.
/// ChangeNotifier + setState — без сторонних менеджеров (§7 спеки).
class AppState extends ChangeNotifier {
  /// Учётная запись, гараж и баланс проверок. Заводится в main и живёт
  /// столько же, сколько приложение.
  late final AccountService accounts;

  /// Магазин: список товаров с ценами и проведение оплаты.
  late final StoreService store;

  /// Гараж: несколько машин, одна активная. `car` — активная, чтобы
  /// весь остальной код (анкета, отчёт, история) не менялся.
  List<Car> cars = [];
  Car? car;
  String deviceId = '';
  List<HistoryEntry> history = [];

  late SharedPreferences _prefs;
  Directory? _reportsDir;

  Future<void> init() async {
    // Баланс и места меняются в AccountService, а экраны слушают AppState.
    // Без этого проброса купленные проверки не появлялись бы на экране до
    // перезапуска приложения.
    accounts.addListener(notifyListeners);

    _prefs = await SharedPreferences.getInstance();

    deviceId = _prefs.getString('device_id') ?? '';
    if (deviceId.isEmpty) {
      deviceId = const Uuid().v4();
      await _prefs.setString('device_id', deviceId);
    }

    final garageRaw = _prefs.getString('garage');
    if (garageRaw != null) {
      try {
        cars = (jsonDecode(garageRaw) as List)
            .map((e) => Car.fromJson(e as Map<String, dynamic>))
            .toList();
      } catch (_) {}
    }
    final carRaw = _prefs.getString('car');
    if (carRaw != null) {
      try {
        car = Car.fromJson(jsonDecode(carRaw) as Map<String, dynamic>);
      } catch (_) {}
    }
    // Машина из старой версии приложения — переносим в гараж, чтобы не потерять.
    if (car != null && cars.every((c) => c.id != car!.id)) {
      cars = [car!, ...cars];
      await _saveGarage();
    }
    car ??= cars.isNotEmpty ? cars.first : null;

    final docs = await getApplicationDocumentsDirectory();
    _reportsDir = Directory('${docs.path}/reports');
    await _reportsDir!.create(recursive: true);
    await _loadHistory();
  }

  Future<void> _saveGarage() async =>
      _prefs.setString('garage', jsonEncode(cars.map((c) => c.toJson()).toList()));

  /// Приводит локальный гараж к тому, что на сервере: главный — он.
  ///
  /// Решает три случая, каждый из которых иначе ломает приложение:
  ///   - переустановка: локально пусто, а машины на сервере есть;
  ///   - вход под другим аккаунтом: остались машины с чужими местами;
  ///   - обновление с версии до аккаунтов: у машин нет места вовсе, и
  ///     разбор упёрся бы в отказ сервера.
  Future<void> syncGarage() async {
    final acc = accounts.state;
    if (acc == null) return;

    final slots = {for (final s in acc.slots) s.id: s};
    final next = <Car>[];

    // Машины, чьи места на сервере ещё существуют. Остальные ушли вместе
    // с чужим аккаунтом и показывать их нельзя.
    for (final c in cars) {
      if (c.slotId.isNotEmpty && slots.containsKey(c.slotId)) next.add(c);
    }

    // Машины с сервера, которых нет на телефоне. Так гараж возвращается
    // после переустановки — вместе с балансом.
    for (final s in acc.slots) {
      final car = s.car;
      if (car == null) continue;
      if (next.any((c) => c.slotId == s.id)) continue;
      next.add(Car(
        id: const Uuid().v4(),
        make: car.make,
        model: car.model,
        year: car.year,
        mileageKm: car.mileage,
        generation: car.generation,
        slotId: s.id,
      ));
    }

    // Машины без места: из сборки, вышедшей до аккаунтов. Ставим на
    // свободные, сколько влезет; остальные теряем — мест под них нет.
    final free = [for (final s in acc.slots) if (s.isEmpty) s.id];
    for (final c in cars.where((c) => c.slotId.isEmpty)) {
      if (free.isEmpty) break;
      final id = free.removeAt(0);
      try {
        await accounts.setCar(id, c.accountCar);
        next.add(c.copyWith(slotId: id));
      } catch (_) {
        // Сервер не принял — оставляем машину на следующий запуск.
        break;
      }
    }

    cars = next;
    if (car == null || next.every((c) => c.id != car!.id)) {
      car = next.isNotEmpty ? next.first : null;
    }
    await _saveGarage();
    if (car != null) {
      await _prefs.setString('car', jsonEncode(car!.toJson()));
    } else {
      await _prefs.remove('car');
    }
    notifyListeners();
  }

  /// Сохранение машины идёт через сервер: он держит места, баланс проверок и
  /// запрет на подмену разобранной машины. Локальная копия — для показа и для
  /// сервисного журнала, которого на сервере нет.
  ///
  /// Ошибка сервера пробрасывается наружу: экран покажет её человеку. Молча
  /// сохранить у себя значило бы завести машину, которой на сервере нет, —
  /// и упереться в отказ уже при разборе.
  Future<void> saveCar(Car c) async {
    final withId = c.id.isEmpty ? c.copyWithId(const Uuid().v4()) : c;
    var bound = withId;

    if (accounts.signedIn) {
      if (bound.slotId.isEmpty) {
        final free = accounts.state?.slots
            .firstWhere((s) => s.isEmpty, orElse: () => const Slot(id: '', checks: 0));
        if (free == null || free.id.isEmpty) throw const GarageFull();
        await accounts.setCar(free.id, bound.accountCar);
        bound = bound.copyWith(slotId: free.id);
      } else {
        await accounts.editCar(bound.slotId, bound.accountCar);
      }
    }

    final i = cars.indexWhere((x) => x.id == bound.id);
    if (i >= 0) {
      cars[i] = bound;
    } else {
      cars = [...cars, bound];
    }
    car = bound;
    await _saveGarage();
    await _prefs.setString('car', jsonEncode(bound.toJson()));
    notifyListeners();
  }

  Future<void> selectCar(String id) async {
    final c = cars.firstWhere((x) => x.id == id, orElse: () => car!);
    car = c;
    await _prefs.setString('car', jsonEncode(c.toJson()));
    notifyListeners();
  }

  Future<void> removeCar(String id) async {
    final gone = cars.firstWhere((c) => c.id == id, orElse: () => cars.first);
    if (accounts.signedIn && gone.slotId.isNotEmpty) {
      // Сервер откажет, если машину уже разбирали, — и правильно сделает:
      // иначе запрет на подмену обходился бы удалением.
      await accounts.removeCar(gone.slotId);
    }
    cars = cars.where((c) => c.id != id).toList();
    if (car?.id == id) car = cars.isNotEmpty ? cars.first : null;
    await _saveGarage();
    if (car != null) await _prefs.setString('car', jsonEncode(car!.toJson()));
    notifyListeners();
  }

  /// Текущий пробег правится в одном месте и сразу влияет на остатки по расходникам.
  Future<void> setMileage(int km) async {
    if (car == null) return;
    await saveCar(car!.copyWith(mileageKm: km));
  }

  /// «Менял 3000 км назад» переводим в одометр на момент замены.
  Future<void> setServiceAgo(String key, int agoKm) async {
    if (car == null) return;
    final s = Map<String, int>.from(car!.service);
    s[key] = (car!.mileageKm - agoKm).clamp(0, 1 << 31);
    await saveCar(car!.copyWith(service: s));
  }

  Future<void> clearService(String key) async {
    if (car == null) return;
    final s = Map<String, int>.from(car!.service)..remove(key);
    await saveCar(car!.copyWith(service: s));
  }

  /// История активной машины. У записей до этой версии carId пустой —
  /// для них сверяем по названию, иначе старые разборы пропали бы из профиля.
  List<HistoryEntry> get historyForCar {
    final c = car;
    if (c == null) return history;
    return history
        .where((h) => h.carId.isNotEmpty ? h.carId == c.id : h.carLabel == c.label)
        .toList();
  }

  /// Ближайшие замены: сначала просроченные, потом самые близкие по остатку.
  List<ServiceStatus> upcomingService({int limit = 3}) {
    final c = car;
    if (c == null) return const [];
    final list = <ServiceStatus>[];
    for (final item in consumables) {
      final odo = c.service[item.key];
      if (odo == null || item.kmMin == null) continue;
      list.add(statusFor(item, c.mileageKm - odo));
    }
    list.sort((a, b) =>
        (a.item.kmMin! - a.sinceKm!).compareTo(b.item.kmMin! - b.sinceKm!));
    return list.take(limit).toList();
  }

  Future<void> _loadHistory() async {
    final entries = <HistoryEntry>[];
    await for (final f in _reportsDir!.list()) {
      if (f is File && f.path.endsWith('.json')) {
        try {
          entries.add(HistoryEntry.fromJson(
              jsonDecode(await f.readAsString()) as Map<String, dynamic>));
        } catch (_) {}
      }
    }
    entries.sort((a, b) => b.date.compareTo(a.date));
    history = entries;
    notifyListeners();
  }

  Future<void> addHistory({
    required String urgency,
    required String topCause,
    required bool isFull,
    ReportData? report,
    String leafId = '',
    List<AnswerLog> answers = const [],
  }) async {
    final now = DateTime.now();
    final entry = HistoryEntry(
      id: now.millisecondsSinceEpoch.toString(),
      date: now,
      carLabel: car?.label ?? '',
      carId: car?.id ?? '',
      urgency: urgency,
      topCause: topCause,
      isFull: isFull,
      leafId: leafId,
      answers: answers,
      report: report,
    );
    final file = File('${_reportsDir!.path}/${entry.id}.json');
    await file.writeAsString(jsonEncode(entry.toJson()));
    history = [entry, ...history];
    notifyListeners();
  }
}

/// Доступ к состоянию через InheritedNotifier — без сторонних библиотек.
class AppScope extends InheritedNotifier<AppState> {
  const AppScope({super.key, required AppState state, required super.child})
      : super(notifier: state);

  static AppState of(BuildContext context) =>
      context.dependOnInheritedWidgetOfExactType<AppScope>()!.notifier!;
}

/// Свободных мест в гараже нет — надо купить.
class GarageFull implements Exception {
  const GarageFull();
  @override
  String toString() => 'в гараже нет свободных мест';
}
