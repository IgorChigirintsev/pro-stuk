import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart' show rootBundle;

import '../theme.dart';

/// Схема узла с подсветкой деталей, на которые указывает диагноз.
///
/// Картинка — заранее отрисованная схема с выносками, подсветка — накладка
/// поверх неё: координаты деталей лежат в assets/schemes/parts.json в системе
/// исходного SVG (400×438), поэтому масштабируются вместе с картинкой.
class SchemaView extends StatefulWidget {
  final String schemaKey; // например shemy/tsep-grm
  final List<int> marks;

  const SchemaView({super.key, required this.schemaKey, required this.marks});

  @override
  State<SchemaView> createState() => _SchemaViewState();
}

class _SchemaViewState extends State<SchemaView> {
  static const double _vbW = 400, _vbH = 438;
  static Map<String, dynamic>? _cache;

  List<_Part> _parts = const [];
  bool _missing = false;

  @override
  void initState() {
    super.initState();
    _load();
  }

  String get _asset => widget.schemaKey.replaceFirst('/', '-');

  Future<void> _load() async {
    try {
      _cache ??= jsonDecode(
        await rootBundle.loadString('assets/schemes/parts.json'),
      ) as Map<String, dynamic>;
      final entry = _cache![_asset] as Map<String, dynamic>?;
      if (entry == null) {
        if (mounted) setState(() => _missing = true);
        return;
      }
      final list = (entry['parts'] as List)
          .map((e) => _Part(
                (e['n'] as num).toInt(),
                (e['x'] as num).toDouble(),
                (e['y'] as num).toDouble(),
                (e['r'] as num).toDouble(),
              ))
          .toList();
      if (mounted) setState(() => _parts = list);
    } catch (_) {
      if (mounted) setState(() => _missing = true);
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_missing) return const SizedBox.shrink();
    final show = _parts.where((p) => widget.marks.contains(p.n)).toList();

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        ClipRRect(
          borderRadius: BorderRadius.circular(14),
          child: AspectRatio(
            aspectRatio: _vbW / _vbH,
            child: Stack(
              fit: StackFit.expand,
              children: [
                Image.asset('assets/schemes/$_asset.png', fit: BoxFit.contain),
                if (show.isNotEmpty)
                  CustomPaint(painter: _MarksPainter(show, _vbW, _vbH)),
              ],
            ),
          ),
        ),
        const SizedBox(height: 8),
        Text(
          show.isNotEmpty
              ? 'Обведено то, на что указывает разбор, — это версия, а не диагноз.'
              : 'Схема узла целиком.',
          style: const TextStyle(fontSize: 13, color: T.inkSoft),
        ),
      ],
    );
  }
}

class _Part {
  final int n;
  final double x, y, r;
  const _Part(this.n, this.x, this.y, this.r);
}

class _MarksPainter extends CustomPainter {
  final List<_Part> parts;
  final double vbW, vbH;

  _MarksPainter(this.parts, this.vbW, this.vbH);

  @override
  void paint(Canvas canvas, Size size) {
    // Картинка вписана по contain: масштаб общий, поля делим пополам.
    final k = (size.width / vbW) < (size.height / vbH)
        ? size.width / vbW
        : size.height / vbH;
    final dx = (size.width - vbW * k) / 2;
    final dy = (size.height - vbH * k) / 2;

    final halo = Paint()..color = const Color(0x17C2410C);
    final fill = Paint()..color = const Color(0x26C2410C);
    final stroke = Paint()
      ..color = const Color(0xFFC2410C)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2.6 * k;

    for (final p in parts) {
      final c = Offset(dx + p.x * k, dy + p.y * k);
      canvas.drawCircle(c, (p.r + 9) * k, halo);
      canvas.drawCircle(c, p.r * k, fill);
      canvas.drawCircle(c, p.r * k, stroke);
    }
  }

  @override
  bool shouldRepaint(covariant _MarksPainter old) => old.parts != parts;
}
