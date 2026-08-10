import 'dart:io';
import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:path_provider/path_provider.dart';
import 'package:share_plus/share_plus.dart';

import '../models.dart';
import '../strings.dart';
import '../theme.dart';
import '../widgets.dart';

/// Шеримая карточка: рендер через RepaintBoundary → PNG → share_plus.
/// Выглядит как результат прибора: логотип, машина, светофор, топ-3 причины.
class ShareCardScreen extends StatefulWidget {
  final ReportData report;
  final String carLabel;
  const ShareCardScreen(
      {super.key, required this.report, required this.carLabel});

  @override
  State<ShareCardScreen> createState() => _ShareCardScreenState();
}

class _ShareCardScreenState extends State<ShareCardScreen> {
  final _boundaryKey = GlobalKey();
  bool _sharing = false;

  Future<void> _share() async {
    setState(() => _sharing = true);
    final messenger = ScaffoldMessenger.of(context);
    final ratio = MediaQuery.of(context).devicePixelRatio.clamp(1.0, 2.0);
    final anchorBox = context.findRenderObject() as RenderBox?;
    final anchor = anchorBox == null
        ? null
        : anchorBox.localToGlobal(Offset.zero) & anchorBox.size;
    try {
      final boundary = _boundaryKey.currentContext!.findRenderObject()
          as RenderRepaintBoundary;
      // pixelRatio 3 на длинной карточке даёт картинку в десятки мегапикселей:
      // на слабых устройствах toImage падает по памяти, и шторка не открывается.
      final image = await boundary.toImage(pixelRatio: ratio);
      final bytes = await image.toByteData(format: ui.ImageByteFormat.png);
      image.dispose();
      if (bytes == null) throw StateError('не удалось получить изображение');

      final dir = await getTemporaryDirectory();
      final file = File('${dir.path}/stuk_report.png');
      await file.writeAsBytes(bytes.buffer.asUint8List(), flush: true);

      await SharePlus.instance.share(
        ShareParams(
          files: [XFile(file.path, mimeType: 'image/png')],
          text: S.shareText,
          // Нужно для планшетов: без якоря шторка не знает, откуда выезжать.
          sharePositionOrigin: anchor,
        ),
      );
    } catch (e) {
      // Раньше ошибка уходила в пустоту и выглядела как «кнопка не работает».
      messenger.showSnackBar(
        SnackBar(content: Text('Не удалось поделиться: $e')),
      );
    } finally {
      if (mounted) setState(() => _sharing = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text(S.repShare)),
      body: SafeArea(
        child: Column(
          children: [
            Expanded(
              child: Center(
                child: SingleChildScrollView(
                  padding: const EdgeInsets.all(20),
                  child: RepaintBoundary(
                    key: _boundaryKey,
                    child: _ShareCard(
                        report: widget.report, carLabel: widget.carLabel),
                  ),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(20, 0, 20, 20),
              child: ElevatedButton.icon(
                icon: const Icon(Icons.share),
                label: const Text(S.repShare),
                onPressed: _sharing ? null : _share,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _ShareCard extends StatelessWidget {
  final ReportData report;
  final String carLabel;
  const _ShareCard({required this.report, required this.carLabel});

  @override
  Widget build(BuildContext context) {
    final top3 = report.causes.take(3).toList();
    return Container(
      width: 340,
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: T.bg,
        borderRadius: BorderRadius.circular(T.rCard),
        border: Border.all(color: T.border),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              const _Logo(),
              const SizedBox(width: 10),
              Text(S.appName,
                  style: Theme.of(context).textTheme.titleLarge),
              const Spacer(),
              Text(carLabel, style: Theme.of(context).textTheme.bodySmall),
            ],
          ),
          const SizedBox(height: 16),
          TrafficLightPlaque(
              urgency: report.urgency, reason: report.urgencyReason),
          const SizedBox(height: 16),
          for (final c in top3) ...[
            Row(
              children: [
                Expanded(
                  child: Text(c.title,
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                      style: Theme.of(context).textTheme.bodyMedium!.copyWith(
                          fontWeight: FontWeight.w600)),
                ),
                const SizedBox(width: 10),
                Text('${c.probabilityPct}%', style: T.num_(T.fs16)),
              ],
            ),
            const SizedBox(height: 6),
            PctBar(pct: c.probabilityPct),
            const SizedBox(height: 12),
          ],
          const SizedBox(height: 4),
          Center(
            child: Text(
              'stuk — ${S.appTagline}',
              style: Theme.of(context).textTheme.bodySmall,
            ),
          ),
        ],
      ),
    );
  }
}

/// Логотип: квадрат акцентного цвета с упрощённой звуковой волной
/// и одним «выбросом»-стуком.
class _Logo extends StatelessWidget {
  const _Logo();

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 36,
      height: 36,
      decoration: BoxDecoration(
        color: T.accent,
        borderRadius: BorderRadius.circular(10),
      ),
      child: const CustomPaint(painter: _LogoWavePainter()),
    );
  }
}

class _LogoWavePainter extends CustomPainter {
  const _LogoWavePainter();

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = Colors.white
      ..strokeWidth = 2.6
      ..strokeCap = StrokeCap.round;
    // Ровная волна с одним высоким «стуком» в центре.
    final heights = [0.28, 0.42, 0.3, 0.82, 0.34, 0.44, 0.26];
    final step = size.width / (heights.length + 1);
    for (var i = 0; i < heights.length; i++) {
      final x = step * (i + 1);
      final h = math.max(3.0, heights[i] * size.height * 0.8);
      canvas.drawLine(
        Offset(x, size.height / 2 - h / 2),
        Offset(x, size.height / 2 + h / 2),
        paint,
      );
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter old) => false;
}
