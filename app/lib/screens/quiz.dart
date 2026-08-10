import 'package:flutter/material.dart';

import '../main.dart' show tree;
import '../models.dart';
import '../strings.dart';
import '../widgets.dart';
import 'verdict.dart';

/// Опросник: один вопрос на экран, крупные карточки, прогресс сверху,
/// «назад» возвращает к предыдущему вопросу.
class QuizScreen extends StatefulWidget {
  const QuizScreen({super.key});

  @override
  State<QuizScreen> createState() => _QuizScreenState();
}

class _QuizScreenState extends State<QuizScreen> {
  final List<String> _path = [];
  final List<AnswerLog> _answers = [];
  bool _navigating = false; // защита от двойного тапа по варианту

  String get _currentId => _path.isEmpty ? tree.rootId : _path.last;

  double get _progress {
    final done = _answers.length;
    final remaining = tree.maxDepthFrom(_currentId);
    if (done + remaining == 0) return 1;
    return done / (done + remaining);
  }

  void _choose(String questionId, String optionId) {
    if (_navigating) return;
    final node = tree.node(questionId);
    final option = node.options.firstWhere((o) => o.id == optionId);
    _answers.add(AnswerLog(
      questionId: questionId,
      optionId: optionId,
      questionText: node.text,
      optionLabel: option.label,
    ));
    final next = tree.node(option.next);
    if (next.isLeaf) {
      _navigating = true;
      Navigator.of(context)
          .push(MaterialPageRoute(
              builder: (_) =>
                  VerdictScreen(leaf: next, answers: List.of(_answers))))
          .then((_) {
        // Возврат с вердикта — шаг назад, чтобы можно было поправить ответ.
        _navigating = false;
        if (mounted) setState(() => _answers.removeLast());
      });
    } else {
      setState(() => _path.add(option.next));
    }
  }

  bool _goBack() {
    if (_path.isEmpty) return true;
    setState(() {
      _path.removeLast();
      _answers.removeLast();
    });
    return false;
  }

  @override
  Widget build(BuildContext context) {
    final node = tree.node(_currentId);
    return PopScope(
      canPop: _path.isEmpty,
      onPopInvokedWithResult: (didPop, _) {
        if (!didPop) _goBack();
      },
      child: Scaffold(
        appBar: AppBar(
          title: Text(S.quizTitle),
          leading: BackButton(onPressed: () {
            if (_goBack()) Navigator.of(context).pop();
          }),
          bottom: PreferredSize(
            preferredSize: const Size.fromHeight(4),
            child: TweenAnimationBuilder<double>(
              tween: Tween(end: _progress),
              duration: const Duration(milliseconds: 200),
              builder: (_, v, _) => LinearProgressIndicator(value: v),
            ),
          ),
        ),
        body: SafeArea(
          child: ListView(
            padding: const EdgeInsets.all(20),
            children: [
              const SizedBox(height: 8),
              Text(node.text,
                  style: Theme.of(context).textTheme.headlineMedium),
              const SizedBox(height: 24),
              for (final o in node.options)
                Padding(
                  padding: const EdgeInsets.only(bottom: 12),
                  child: OptionCard(
                    label: o.label,
                    onTap: () => _choose(node.id, o.id),
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }
}
