import 'dart:async';
import 'dart:io';

import 'package:flutter/material.dart';

import '../api.dart';
import '../models.dart';
import '../state.dart';
import '../strings.dart';
import '../tree.dart';
import 'report.dart';

/// Анализ: реальное ожидание ответа API (до 75 сек) со сменой статусов.
/// При ошибке аудио не перезаписывается — «Повторить» шлёт тот же файл.
class AnalyzeScreen extends StatefulWidget {
  final File wavFile;
  final TreeNode leaf;
  final List<AnswerLog> answers;
  const AnalyzeScreen({
    super.key,
    required this.wavFile,
    required this.leaf,
    required this.answers,
  });

  @override
  State<AnalyzeScreen> createState() => _AnalyzeScreenState();
}

class _AnalyzeScreenState extends State<AnalyzeScreen> {
  final _api = ApiClient();
  int _stage = 0;
  Timer? _stageTimer;
  String? _error;
  bool _retryable = true;

  @override
  void initState() {
    super.initState();
    _run();
  }

  @override
  void dispose() {
    _stageTimer?.cancel();
    super.dispose();
  }

  Future<void> _run() async {
    setState(() {
      _error = null;
      _stage = 0;
    });
    _stageTimer?.cancel();
    _stageTimer = Timer.periodic(const Duration(seconds: 7), (t) {
      if (_stage < S.anStages.length - 1) {
        setState(() => _stage++);
      }
    });

    final state = AppScope.of(context);
    try {
      final report = await _api.sendReport(
        wavFile: widget.wavFile,
        deviceId: state.deviceId,
        car: state.car!,
        answers: widget.answers,
        leafId: widget.leaf.id,
      );
      _stageTimer?.cancel();
      final topCause =
          report.causes.isNotEmpty ? report.causes.first.title : '';
      await state.addHistory(
        urgency: report.urgency,
        topCause: topCause,
        isFull: true,
        report: report,
      );
      if (!mounted) return;
      Navigator.of(context).pushReplacement(MaterialPageRoute(
        builder: (_) => ReportScreen(
          report: report,
          carLabel: state.car!.label,
          justCreated: true,
        ),
      ));
    } on ApiException catch (e) {
      _stageTimer?.cancel();
      if (!mounted) return;
      setState(() {
        _error = e.message;
        _retryable = e.retryable;
      });
    } catch (_) {
      _stageTimer?.cancel();
      if (!mounted) return;
      setState(() {
        _error = S.anErrServer;
        _retryable = true;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text(S.anTitle), automaticallyImplyLeading: _error != null),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(20),
          child: _error == null ? _buildProgress() : _buildError(),
        ),
      ),
    );
  }

  Widget _buildProgress() {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        const Center(
          child: SizedBox(
            width: 56,
            height: 56,
            child: CircularProgressIndicator(strokeWidth: 4),
          ),
        ),
        const SizedBox(height: 32),
        AnimatedSwitcher(
          duration: const Duration(milliseconds: 300),
          child: Text(
            S.anStages[_stage],
            key: ValueKey(_stage),
            textAlign: TextAlign.center,
            style: Theme.of(context).textTheme.titleLarge,
          ),
        ),
        const SizedBox(height: 8),
        Text(S.anWait,
            textAlign: TextAlign.center,
            style: Theme.of(context).textTheme.bodySmall),
      ],
    );
  }

  Widget _buildError() {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Text(_error!,
            textAlign: TextAlign.center,
            style: Theme.of(context).textTheme.titleMedium),
        const SizedBox(height: 24),
        if (_retryable)
          ElevatedButton(onPressed: _run, child: const Text(S.anRetry)),
        const SizedBox(height: 12),
        OutlinedButton(
          onPressed: () => Navigator.of(context).pop(),
          child: const Text(S.anBack),
        ),
      ],
    );
  }
}
