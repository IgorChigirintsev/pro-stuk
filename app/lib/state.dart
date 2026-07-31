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

    final carRaw = _prefs.getString('car');
    if (carRaw != null) {
      try {
        car = Car.fromJson(jsonDecode(carRaw) as Map<String, dynamic>);
      } catch (_) {}
    }

    final docs = await getApplicationDocumentsDirectory();
    _reportsDir = Directory('${docs.path}/reports');
    await _reportsDir!.create(recursive: true);
    await _loadHistory();
  }

  Future<void> saveCar(Car c) async {
    car = c;
    await _prefs.setString('car', jsonEncode(c.toJson()));
    notifyListeners();
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
