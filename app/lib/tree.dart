import 'package:flutter/foundation.dart';
import 'dart:convert';
import 'l10n/locale_service.dart';

import 'package:flutter/services.dart' show rootBundle;

/// Дерево решений из assets/tree.json (копия shared/tree.json).
class TreeOption {
  final String id;
  final String label;
  final String next;
  const TreeOption({required this.id, required this.label, required this.next});
}

class TreeNode {
  final String id;
  final bool isLeaf;

  // Вопрос
  final String text;
  final List<TreeOption> options;

  // Лист
  final String topCause;
  final List<String> altCauses;
  final String urgency;
  final String explanation;
  final String advice;
  /// Русский слаг разбора на сайте: по нему строится ссылка на подробный
  /// текст на языке приложения. Не переводится — это ключ, а не текст.
  final String siteSlug;

  const TreeNode.question(this.id, this.text, this.options)
      : isLeaf = false,
        topCause = '',
        altCauses = const [],
        urgency = '',
        explanation = '',
        advice = '',
        siteSlug = '';

  const TreeNode.leaf(
    this.id, {
    required this.topCause,
    required this.altCauses,
    required this.urgency,
    required this.explanation,
    required this.advice,
    this.siteSlug = '',
  })  : isLeaf = true,
        text = '',
        options = const [];
}

class DecisionTree {
  final String rootId;
  final Map<String, TreeNode> nodes;
  final Map<String, int> _depthCache = {};

  DecisionTree._(this.rootId, this.nodes);

  static Future<DecisionTree> load() async {
    final raw = await rootBundle.loadString('assets/tree.json');
    final json = jsonDecode(raw) as Map<String, dynamic>;
    final nodesJson = json['nodes'] as Map<String, dynamic>;
    // Переводы лежат отдельным файлом на язык: структура дерева не дублируется,
    // а недостающий узел молча остаётся на русском, не ломая экран.
    final tr = await _translations(LocaleService.current.value);
    final nodes = <String, TreeNode>{};
    nodesJson.forEach((id, v) {
      final n = Map<String, dynamic>.from(v as Map<String, dynamic>);
      final t = tr[id] as Map<String, dynamic>?;
      if (t != null) {
        for (final k in ['text', 'top_cause', 'explanation', 'advice']) {
          if (t[k] != null) n[k] = t[k];
        }
        if (t['alt_causes'] != null) n['alt_causes'] = t['alt_causes'];
        if (t['options'] != null && n['options'] != null) {
          final labels = (t['options'] as Map).cast<String, dynamic>();
          n['options'] = (n['options'] as List).map((o) {
            final m = Map<String, dynamic>.from(o as Map);
            final lab = labels[m['id']];
            if (lab != null) m['label'] = lab;
            return m;
          }).toList();
        }
      }
      if (n['type'] == 'leaf') {
        nodes[id] = TreeNode.leaf(
          id,
          topCause: n['top_cause'] as String,
          altCauses: (n['alt_causes'] as List).cast<String>(),
          urgency: n['urgency'] as String,
          explanation: n['explanation'] as String,
          advice: n['advice'] as String,
          siteSlug: (n['site_slug'] as String?) ?? '',
        );
      } else {
        nodes[id] = TreeNode.question(
          id,
          n['text'] as String,
          (n['options'] as List)
              .map((o) => TreeOption(
                    id: o['id'] as String,
                    label: o['label'] as String,
                    next: o['next'] as String,
                  ))
              .toList(),
        );
      }
    });
    return DecisionTree._(json['root'] as String, nodes);
  }

  /// Пустая карта, если языка ещё нет: тогда всё дерево остаётся русским.
  static Future<Map<String, dynamic>> _translations(String lang) async {
    if (lang == 'ru') return const {};
    try {
      return jsonDecode(await rootBundle.loadString('assets/tree_i18n/$lang.json'))
          as Map<String, dynamic>;
    } catch (_) {
      return const {};
    }
  }

  TreeNode node(String id) => nodes[id]!;

  /// Максимальная глубина (в вопросах) от узла до листа — для прогресс-бара.
  int maxDepthFrom(String id) {
    final cached = _depthCache[id];
    if (cached != null) return cached;
    final n = nodes[id]!;
    var d = 0;
    if (!n.isLeaf) {
      var best = 0;
      for (final o in n.options) {
        final sub = maxDepthFrom(o.next);
        if (sub > best) best = sub;
      }
      d = 1 + best;
    }
    _depthCache[id] = d;
    return d;
  }
}

/// Загруженное дерево вопросов.
late DecisionTree tree;

/// Счётчик перезагрузок дерева: по нему приложение перерисовывается заново.
final treeReloaded = ValueNotifier<int>(0);

/// Дерево лежит в отдельном ассете на каждый язык, поэтому смена языка обязана
/// его перечитать. Иначе интерфейс переключится, а вопросы и вердикты останутся
/// на прежнем языке до перезапуска приложения.
Future<void> reloadTree() async {
  tree = await DecisionTree.load();
  treeReloaded.value++;
}
