import 'dart:async';
import 'dart:io';
import 'dart:math' as math;

import 'package:audioplayers/audioplayers.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:path_provider/path_provider.dart';
import 'package:record/record.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../models.dart';
import '../strings.dart';
import '../theme.dart';
import '../tree.dart';
import '../wav.dart';
import '../widgets.dart';
import 'analyze.dart';

const _channel = MethodChannel('kz.stuk.app/system');
const _maxSeconds = 30;
const _minSeconds = 5;

enum _Phase { intro, denied, recording, recorded }

class RecordScreen extends StatefulWidget {
  /// null — путь «сразу по звуку», без опросника.
  final TreeNode? leaf;
  final List<AnswerLog> answers;
  const RecordScreen({super.key, this.leaf, this.answers = const []});

  @override
  State<RecordScreen> createState() => _RecordScreenState();
}

class _RecordScreenState extends State<RecordScreen>
    with SingleTickerProviderStateMixin {
  final _recorder = AudioRecorder();
  final _player = AudioPlayer();

  _Phase _phase = _Phase.intro;
  bool _micExplained = false;
  int _elapsed = 0;
  Timer? _timer;
  StreamSubscription? _ampSub;
  StreamSubscription? _playDoneSub;
  final List<double> _wave = [];
  String? _wavPath;
  bool _playing = false;
  String? _hint;

  late final AnimationController _pulse = AnimationController(
    vsync: this,
    duration: const Duration(milliseconds: 900),
    lowerBound: 0,
    upperBound: 1,
  );

  @override
  void initState() {
    super.initState();
    _playDoneSub = _player.onPlayerComplete.listen((_) {
      if (mounted) setState(() => _playing = false);
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    _ampSub?.cancel();
    _playDoneSub?.cancel();
    _pulse.dispose();
    _recorder.dispose();
    _player.dispose();
    super.dispose();
  }

  Future<void> _askAndStart() async {
    // Объясняющий экран — до ПЕРВОГО системного диалога (§7 спеки).
    // Если разрешение уже спрашивали, повторно не показываем (флаг в prefs).
    final prefs = await SharedPreferences.getInstance();
    _micExplained = _micExplained || (prefs.getBool('mic_explained') ?? false);
    if (!mounted) return;
    if (!_micExplained) {
      final go = await showDialog<bool>(
        context: context,
        builder: (ctx) => AlertDialog(
          backgroundColor: T.bg,
          shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(T.rCard)),
          title: Text(S.recMicTitle),
          content: Text(S.recMicExplain),
          actions: [
            TextButton(
                onPressed: () => Navigator.of(ctx).pop(true),
                child: Text(S.recMicContinue)),
          ],
        ),
      );
      if (go != true) return;
      _micExplained = true;
      await prefs.setBool('mic_explained', true);
    }
    final allowed = await _recorder.hasPermission(); // системный диалог
    if (!allowed) {
      if (mounted) setState(() => _phase = _Phase.denied);
      return;
    }
    await _startRecording();
  }

  Future<void> _startRecording() async {
    final reduceMotion = MediaQuery.of(context).disableAnimations;
    final dir = await getTemporaryDirectory();
    final pcmPath = '${dir.path}/stuk_rec.pcm';
    _wave.clear();
    _elapsed = 0;
    _hint = null;

    try {
      await _recorder.start(
        const RecordConfig(
          encoder: AudioEncoder.pcm16bits,
          sampleRate: 16000,
          numChannels: 1,
        ),
        path: pcmPath,
      );
    } catch (_) {
      // Микрофон занят (звонок, другое приложение) или недоступен.
      if (mounted) {
        setState(() {
          _phase = _Phase.intro;
          _hint = 'Не удалось включить микрофон. Закройте другие приложения, '
              'использующие звук, и попробуйте ещё раз.';
        });
      }
      return;
    }

    _ampSub = _recorder
        .onAmplitudeChanged(const Duration(milliseconds: 120))
        .listen((amp) {
      // amp.current — дБFS (обычно -45…0): в 0..1 для отрисовки волны.
      final v = ((amp.current + 45) / 45).clamp(0.05, 1.0);
      setState(() {
        _wave.add(v);
        if (_wave.length > 64) _wave.removeAt(0);
      });
    });

    _timer = Timer.periodic(const Duration(seconds: 1), (t) {
      setState(() => _elapsed = t.tick);
      if (t.tick >= _maxSeconds) _stopRecording(); // автостоп на 30 сек
    });

    if (!reduceMotion) {
      _pulse.repeat(reverse: true); // мягкая пульсация кнопки
    }
    setState(() => _phase = _Phase.recording);
  }

  Future<void> _stopRecording() async {
    _timer?.cancel();
    _ampSub?.cancel();
    _pulse.stop();
    final pcmPath = await _recorder.stop();
    if (pcmPath == null) return;
    if (_elapsed < _minSeconds) {
      setState(() {
        _phase = _Phase.intro;
        _hint = S.recTooShort;
      });
      return;
    }
    final dir = await getTemporaryDirectory();
    final wav =
        await pcmToWav(File(pcmPath), '${dir.path}/stuk_rec.wav');
    setState(() {
      _wavPath = wav.path;
      _phase = _Phase.recorded;
    });
  }

  Future<void> _togglePlay() async {
    if (_playing) {
      await _player.stop();
      setState(() => _playing = false);
    } else {
      await _player.play(DeviceFileSource(_wavPath!));
      setState(() => _playing = true);
    }
  }

  void _send() {
    _player.stop();
    Navigator.of(context).push(MaterialPageRoute(
      builder: (_) => AnalyzeScreen(
        wavFile: File(_wavPath!),
        leaf: widget.leaf,
        answers: widget.answers,
      ),
    ));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(S.recTitle)),
      body: SafeArea(
        child: switch (_phase) {
          _Phase.intro => _buildIntro(),
          _Phase.denied => _buildDenied(),
          _Phase.recording => _buildRecording(),
          _Phase.recorded => _buildRecorded(),
        },
      ),
    );
  }

  Widget _buildIntro() {
    return ListView(
      padding: const EdgeInsets.all(20),
      children: [
        Text(S.recInstructionTitle,
            style: Theme.of(context).textTheme.headlineMedium),
        const SizedBox(height: 16),
        SurfaceCard(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              for (final line in S.recInstructions)
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 6),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Icon(Icons.check, size: 20, color: T.accent),
                      const SizedBox(width: 10),
                      Expanded(
                          child: Text(line,
                              style: Theme.of(context).textTheme.bodyMedium)),
                    ],
                  ),
                ),
            ],
          ),
        ),
        if (_hint != null) ...[
          const SizedBox(height: 12),
          Text(_hint!, style: Theme.of(context).textTheme.bodySmall),
        ],
        const SizedBox(height: 28),
        Center(child: _RecordButton(onTap: _askAndStart, pulse: _pulse)),
        const SizedBox(height: 12),
        Center(
            child:
                Text(S.recStart, style: Theme.of(context).textTheme.bodySmall)),
      ],
    );
  }

  Widget _buildDenied() {
    return Padding(
      padding: const EdgeInsets.all(20),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          const Icon(Icons.mic_off_outlined, size: 48, color: T.inkSoft),
          const SizedBox(height: 16),
          Text(S.recMicDeniedTitle,
              textAlign: TextAlign.center,
              style: Theme.of(context).textTheme.titleLarge),
          const SizedBox(height: 8),
          Text(S.recMicDenied,
              textAlign: TextAlign.center,
              style: Theme.of(context).textTheme.bodyMedium),
          const SizedBox(height: 24),
          ElevatedButton(
            onPressed: () => _channel.invokeMethod('openAppSettings'),
            child: Text(S.recOpenSettings),
          ),
          const SizedBox(height: 12),
          OutlinedButton(
            onPressed: () => setState(() => _phase = _Phase.intro),
            child: Text(S.anBack),
          ),
        ],
      ),
    );
  }

  Widget _buildRecording() {
    return Padding(
      padding: const EdgeInsets.all(20),
      child: Column(
        children: [
          const Spacer(),
          SizedBox(
            height: 72,
            child: _WaveView(values: List.of(_wave)),
          ),
          const SizedBox(height: 24),
          Text(
            '0:${_elapsed.toString().padLeft(2, '0')}',
            style: T.num_(T.fs28),
          ),
          const Spacer(),
          _RecordButton(onTap: _stopRecording, pulse: _pulse, recording: true),
          const SizedBox(height: 12),
          Text(S.recStop, style: Theme.of(context).textTheme.bodySmall),
          const SizedBox(height: 24),
        ],
      ),
    );
  }

  Widget _buildRecorded() {
    return Padding(
      padding: const EdgeInsets.all(20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          const Spacer(),
          Center(
            child: Text('0:${_elapsed.toString().padLeft(2, '0')}',
                style: T.num_(T.fs28)),
          ),
          const SizedBox(height: 8),
          Center(
              child: Text(S.recTitle,
                  style: Theme.of(context).textTheme.bodySmall)),
          const Spacer(),
          OutlinedButton.icon(
            icon: Icon(_playing ? Icons.pause : Icons.play_arrow),
            label: Text(_playing ? S.recStopListen : S.recListen),
            onPressed: _togglePlay,
          ),
          const SizedBox(height: 12),
          OutlinedButton.icon(
            icon: const Icon(Icons.refresh),
            label: Text(S.recAgain),
            onPressed: () async {
              await _player.stop();
              _playing = false;
              await _startRecording();
            },
          ),
          const SizedBox(height: 12),
          ElevatedButton.icon(
            icon: const Icon(Icons.arrow_forward),
            label: Text(S.recSend),
            onPressed: _send,
          ),
          const SizedBox(height: 8),
        ],
      ),
    );
  }
}

/// Огромная круглая кнопка записи с мягкой пульсацией.
class _RecordButton extends StatelessWidget {
  final VoidCallback onTap;
  final AnimationController pulse;
  final bool recording;
  const _RecordButton(
      {required this.onTap, required this.pulse, this.recording = false});

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: pulse,
      builder: (_, child) {
        final scale = recording ? 1 + pulse.value * 0.06 : 1.0;
        return Transform.scale(scale: scale, child: child);
      },
      child: Material(
        color: recording ? T.stop : T.accent,
        shape: const CircleBorder(),
        child: InkWell(
          onTap: onTap,
          customBorder: const CircleBorder(),
          child: SizedBox(
            width: 96,
            height: 96,
            child: Icon(
              recording ? Icons.stop : Icons.mic,
              color: Colors.white,
              size: 40,
            ),
          ),
        ),
      ),
    );
  }
}

/// Живая волна амплитуды.
class _WaveView extends StatelessWidget {
  final List<double> values;
  const _WaveView({required this.values});

  @override
  Widget build(BuildContext context) =>
      CustomPaint(painter: _WavePainter(values), size: Size.infinite);
}

class _WavePainter extends CustomPainter {
  final List<double> values;
  _WavePainter(this.values);

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = T.accent
      ..strokeWidth = 4
      ..strokeCap = StrokeCap.round;
    const n = 64;
    final step = size.width / n;
    for (var i = 0; i < n; i++) {
      final idx = values.length - n + i;
      final v = idx >= 0 && idx < values.length ? values[idx] : 0.05;
      final h = math.max(4.0, v * size.height);
      final x = i * step + step / 2;
      canvas.drawLine(
        Offset(x, size.height / 2 - h / 2),
        Offset(x, size.height / 2 + h / 2),
        paint,
      );
    }
  }

  @override
  bool shouldRepaint(covariant _WavePainter old) => true;
}
