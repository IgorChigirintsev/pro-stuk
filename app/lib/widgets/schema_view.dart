import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart' show rootBundle;

import '../theme.dart';

/// Схема узла с номерами деталей, легендой и подсветкой проблемных мест.
///
/// Картинка идёт без подписей, а номера и легенда рисуются кодом. Так перевод
/// схемы — это словарь, а не перерисовка 32 картинок на каждый язык:
/// иначе к сборке пришлось бы добавить сотни файлов.
class SchemaView extends StatefulWidget {
  final String schemaKey; // например shemy/tsep-grm
  final List<int> marks;

  const SchemaView({super.key, required this.schemaKey, required this.marks});

  @override
  State<SchemaView> createState() => _SchemaViewState();
}

class _SchemaViewState extends State<SchemaView> {
  /// Система координат исходного рисунка.
  static const double _vbW = 400, _vbH = 240;
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
                e['label'] as String? ?? '',
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
    final marked = widget.marks.toSet();

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
                if (_parts.isNotEmpty)
                  CustomPaint(painter: _Overlay(_parts, marked, _vbW, _vbH)),
              ],
            ),
          ),
        ),
        const SizedBox(height: 10),
        // Легенда: номер и подпись. Текст берётся из словаря, а не из картинки.
        Wrap(
          spacing: 14,
          runSpacing: 6,
          children: [
            for (final p in _parts)
              SizedBox(
                width: 150,
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      width: 18,
                      height: 18,
                      alignment: Alignment.center,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        color: marked.contains(p.n)
                            ? const Color(0xFFC2410C)
                            : T.accent,
                      ),
                      child: Text('${p.n}',
                          style: const TextStyle(
                              fontSize: 11,
                              fontWeight: FontWeight.w700,
                              color: Colors.white)),
                    ),
                    const SizedBox(width: 6),
                    Expanded(
                      child: Text(p.label,
                          style: TextStyle(
                              fontSize: 12,
                              color: marked.contains(p.n)
                                  ? const Color(0xFFC2410C)
                                  : T.inkSoft,
                              fontWeight: marked.contains(p.n)
                                  ? FontWeight.w700
                                  : FontWeight.w400)),
                    ),
                  ],
                ),
              ),
          ],
        ),
      ],
    );
  }
}

class _Part {
  final int n;
  final String label;
  final double x, y, r;
  const _Part(this.n, this.label, this.x, this.y, this.r);
}

class _Overlay extends CustomPainter {
  final List<_Part> parts;
  final Set<int> marked;
  final double vbW, vbH;

  _Overlay(this.parts, this.marked, this.vbW, this.vbH);

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
    final ring = Paint()
      ..color = const Color(0xFFC2410C)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2.4 * k;

    for (final p in parts) {
      final c = Offset(dx + p.x * k, dy + p.y * k);

      if (marked.contains(p.n)) {
        canvas.drawCircle(c, (p.r + 8) * k, halo);
        canvas.drawCircle(c, p.r * k, fill);
        canvas.drawCircle(c, p.r * k, ring);
      }

      // Номер сидит на самой детали: подписи в кадре нет, вести линию некуда.
      final badge = marked.contains(p.n)
          ? const Color(0xFFC2410C)
          : const Color(0xFF0E7C7B);
      canvas.drawCircle(c, 9 * k, Paint()..color = Colors.white);
      canvas.drawCircle(c, 9 * k, Paint()..color = badge);

      final tp = TextPainter(
        text: TextSpan(
          text: '${p.n}',
          style: TextStyle(
            fontSize: 11 * k,
            fontWeight: FontWeight.w700,
            color: Colors.white,
          ),
        ),
        textDirection: TextDirection.ltr,
      )..layout();
      tp.paint(canvas, c - Offset(tp.width / 2, tp.height / 2));
    }
  }

  @override
  bool shouldRepaint(covariant _Overlay old) =>
      old.parts != parts || old.marked != marked;
}
