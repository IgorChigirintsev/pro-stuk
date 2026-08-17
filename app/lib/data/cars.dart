import 'dart:convert';

import 'package:flutter/services.dart' show rootBundle;

/// Справочник марок, моделей и поколений.
///
/// Дерево марка → модель → поколения лежит в assets/cars/generations.json
/// (общий источник — shared/cars-generations.json). Грузится один раз и
/// держится в памяти: 274 КБ, для подсказок этого достаточно.
class CarsCatalog {
  static Map<String, Map<String, List<Generation>>>? _tree;
  static List<String> _makes = const [];

  static Future<void> ensureLoaded() async {
    if (_tree != null) return;
    final raw = jsonDecode(
      await rootBundle.loadString('assets/cars/generations.json'),
    ) as Map<String, dynamic>;
    _tree = raw.map((make, models) => MapEntry(
          make,
          (models as Map<String, dynamic>).map((model, gens) => MapEntry(
                model,
                (gens as List)
                    .map((g) => Generation(
                          (g as Map)['v'] as String? ?? '',
                          g['label'] as String? ?? '',
                        ))
                    .toList(),
              )),
        ));
    _makes = _tree!.keys.toList()..sort();
  }

  static String _norm(String s) => s.toLowerCase().replaceAll('ё', 'е');

  /// Сначала совпадения с начала строки, потом вхождения внутри:
  /// на «bm» ждёшь BMW первым, а не «Great Wall BMW-подобный».
  static List<String> searchMakes(String query, {int limit = 30}) {
    final q = _norm(query.trim());
    if (q.isEmpty) return _makes.take(limit).toList();
    final starts = <String>[], contains = <String>[];
    for (final m in _makes) {
      final n = _norm(m);
      if (n.startsWith(q)) {
        starts.add(m);
      } else if (n.contains(q)) {
        contains.add(m);
      }
    }
    return [...starts, ...contains].take(limit).toList();
  }

  static List<String> modelsFor(String make, String query, {int limit = 30}) {
    final models = _tree?[make];
    if (models == null) return const [];
    final all = models.keys.toList()..sort();
    final q = _norm(query.trim());
    if (q.isEmpty) return all.take(limit).toList();
    final starts = <String>[], contains = <String>[];
    for (final m in all) {
      final n = _norm(m);
      if (n.startsWith(q)) {
        starts.add(m);
      } else if (n.contains(q)) {
        contains.add(m);
      }
    }
    return [...starts, ...contains].take(limit).toList();
  }

  /// Поколения показываем списком целиком — их единицы, фильтровать нечего.
  static List<Generation> generationsFor(String make, String model) =>
      _tree?[make]?[model] ?? const [];

  static bool get isLoaded => _tree != null;
}

class Generation {
  /// Устойчивый идентификатор поколения из исходного справочника.
  final String v;
  final String label;
  const Generation(this.v, this.label);

  /// Годы выпуска зашиты в название: «V (N28) (2009–2013)» или «VI (2024–н.в.)».
  /// Отдельного поля в справочнике нет, поэтому достаём разбором — формат
  /// единый во всех 5121 поколении, проверено по файлу.
  static final _years = RegExp(r'\((\d{4})\s*[–—-]\s*(\d{4}|н\.в\.)\)');

  /// Первый год выпуска или null, если в названии диапазона нет.
  int? get yearFrom {
    final m = _years.firstMatch(label);
    return m == null ? null : int.tryParse(m.group(1)!);
  }

  /// Последний год выпуска. «н.в.» — модель ещё выпускается, значит текущий год.
  int? get yearTo {
    final m = _years.firstMatch(label);
    if (m == null) return null;
    final end = m.group(2)!;
    return end.startsWith('н') ? DateTime.now().year : int.tryParse(end);
  }
}
