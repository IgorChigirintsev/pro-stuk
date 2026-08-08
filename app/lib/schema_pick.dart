import 'dart:convert';

import 'package:flutter/services.dart' show rootBundle;

/// Подбор схемы узла и деталей по тексту причин — для предварительного
/// вердикта, который считается на телефоне без обращения к серверу.
///
/// Таблица та же, что у сервера и сайта: shared/schema-map.json.
class SchemaPick {
  final String key;
  final List<int> marks;
  const SchemaPick(this.key, this.marks);
}

class SchemaPicker {
  static List<_Rule>? _pick;
  static List<List<RegExp>>? _focus;
  static Map<String, List<Map<String, dynamic>>>? _parts;

  static String _norm(String s) => s.toLowerCase().replaceAll('ё', 'е');

  static Future<void> _load() async {
    if (_pick != null) return;
    final m = jsonDecode(
      await rootBundle.loadString('assets/schemes/schema-map.json'),
    ) as Map<String, dynamic>;
    _pick = (m['pick'] as List)
        .map((e) => _Rule(
              RegExp(e['re'] as String),
              e['key'] as String,
              RegExp(e['def'] as String),
            ))
        .toList();
    _focus = (m['focus'] as List)
        .map((e) => [RegExp((e as List)[0] as String), RegExp(e[1] as String)])
        .toList();
    final p = jsonDecode(
      await rootBundle.loadString('assets/schemes/parts.json'),
    ) as Map<String, dynamic>;
    _parts = p.map((k, v) => MapEntry(
        k, ((v as Map)['parts'] as List).cast<Map<String, dynamic>>()));
  }

  /// Первая причина весит больше: по ней выбирается и схема, и акценты.
  static Future<SchemaPick?> forCauses(List<String> causes) async {
    if (causes.isEmpty) return null;
    await _load();
    final first = _norm(causes.first);
    final all = _norm(causes.join(' '));

    _Rule? hit;
    for (final r in _pick!) {
      if (r.re.hasMatch(first)) { hit = r; break; }
    }
    hit ??= _pick!.cast<_Rule?>().firstWhere(
          (r) => r!.re.hasMatch(all),
          orElse: () => null,
        );
    if (hit == null) return null;

    final asset = hit.key.replaceFirst('/', '-');
    final parts = _parts![asset] ?? const [];
    final marks = <int>{};
    for (final f in _focus!) {
      if (!f[0].hasMatch(first)) continue;
      for (final p in parts) {
        if (f[1].hasMatch(_norm(p['label'] as String))) {
          marks.add((p['n'] as num).toInt());
        }
      }
    }
    if (marks.isEmpty) {
      for (final p in parts) {
        if (hit.def.hasMatch(_norm(p['label'] as String))) {
          marks.add((p['n'] as num).toInt());
        }
      }
    }
    return SchemaPick(hit.key, marks.toList()..sort());
  }
}

class _Rule {
  final RegExp re;
  final String key;
  final RegExp def;
  const _Rule(this.re, this.key, this.def);
}
