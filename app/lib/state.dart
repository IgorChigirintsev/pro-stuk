import 'dart:convert';
import 'dart:io';

import 'package:flutter/widgets.dart';
import 'package:path_provider/path_provider.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:uuid/uuid.dart';

import 'models.dart';

/// Состояние приложения: машина, device_id, история отчётов.
/// ChangeNotifier + setState — без сторонних менеджеров (§7 спеки).
class AppState extends ChangeNotifier {
  /// Гараж: несколько машин, одна активная. `car` — активная, чтобы
  /// весь остальной код (анкета, отчёт, история) не менялся.
  List<Car> cars = [];
  Car? car;
  String deviceId = '';
  List<HistoryEntry> history = [];

  late SharedPreferences _prefs;
  Directory? _reportsDir;

  Future<void> init() async {
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

  Future<void> saveCar(Car c) async {
    final withId = c.id.isEmpty ? c.copyWithId(const Uuid().v4()) : c;
    final i = cars.indexWhere((x) => x.id == withId.id);
    if (i >= 0) {
      cars[i] = withId;
    } else {
      cars = [...cars, withId];
    }
    car = withId;
    await _saveGarage();
    await _prefs.setString('car', jsonEncode(withId.toJson()));
    notifyListeners();
  }

  Future<void> selectCar(String id) async {
    final c = cars.firstWhere((x) => x.id == id, orElse: () => car!);
    car = c;
    await _prefs.setString('car', jsonEncode(c.toJson()));
    notifyListeners();
  }

  Future<void> removeCar(String id) async {
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
  }) async {
    final now = DateTime.now();
    final entry = HistoryEntry(
      id: now.millisecondsSinceEpoch.toString(),
      date: now,
      carLabel: car?.label ?? '',
      urgency: urgency,
      topCause: topCause,
      isFull: isFull,
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
