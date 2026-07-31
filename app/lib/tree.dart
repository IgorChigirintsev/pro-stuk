import 'dart:convert';

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

  const TreeNode.question(this.id, this.text, this.options)
      : isLeaf = false,
        topCause = '',
        altCauses = const [],
        urgency = '',
        explanation = '',
        advice = '';

  const TreeNode.leaf(
    this.id, {
    required this.topCause,
    required this.altCauses,
    required this.urgency,
    required this.explanation,
    required this.advice,
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
    final nodes = <String, TreeNode>{};
    nodesJson.forEach((id, v) {
      final n = v as Map<String, dynamic>;
      if (n['type'] == 'leaf') {
        nodes[id] = TreeNode.leaf(
          id,
          topCause: n['top_cause'] as String,
          altCauses: (n['alt_causes'] as List).cast<String>(),
          urgency: n['urgency'] as String,
          explanation: n['explanation'] as String,
          advice: n['advice'] as String,
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
