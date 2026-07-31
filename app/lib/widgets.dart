import 'package:flutter/material.dart';

import 'strings.dart';
import 'theme.dart';

String urgencyVerb(String u) => switch (u) {
      'ok' => S.urgOk,
      'warn' => S.urgWarn,
      'stop' => S.urgStop,
      _ => '',
    };

/// Сигнатурный компонент: плашка вердикта-светофора.
/// Крупный цветной блок с коротким глаголом + одна строка причины.
class TrafficLightPlaque extends StatelessWidget {
  final String urgency;
  final String? reason;
  const TrafficLightPlaque({super.key, required this.urgency, this.reason});

  @override
  Widget build(BuildContext context) {
    final color = T.urgencyColor(urgency);
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: color,
        borderRadius: BorderRadius.circular(T.rCard),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            urgencyVerb(urgency),
            style: Theme.of(context)
                .textTheme
                .headlineMedium!
                .copyWith(color: Colors.white),
          ),
          if (reason != null && reason!.isNotEmpty) ...[
            const SizedBox(height: 4),
            Text(
              reason!,
              style: Theme.of(context)
                  .textTheme
                  .bodyMedium!
                  .copyWith(color: Colors.white.withValues(alpha: 0.92)),
            ),
          ],
        ],
      ),
    );
  }
}

/// Точка-светофор для карточек истории.
class UrgencyDot extends StatelessWidget {
  final String urgency;
  const UrgencyDot({super.key, required this.urgency});

  @override
  Widget build(BuildContext context) => Container(
        width: 12,
        height: 12,
        decoration: BoxDecoration(
          color: T.urgencyColor(urgency),
          shape: BoxShape.circle,
        ),
      );
}

/// Карточка на surface с рамкой 1px — базовый контейнер интерфейса.
class SurfaceCard extends StatelessWidget {
  final Widget child;
  final EdgeInsets padding;
  const SurfaceCard({
    super.key,
    required this.child,
    this.padding = const EdgeInsets.all(16),
  });

  @override
  Widget build(BuildContext context) => Container(
        width: double.infinity,
        padding: padding,
        decoration: BoxDecoration(
          color: T.surface,
          borderRadius: BorderRadius.circular(T.rCard),
          border: Border.all(color: T.border),
        ),
        child: child,
      );
}

/// Крупная карточка-вариант ответа опросника (min 56dp).
class OptionCard extends StatelessWidget {
  final String label;
  final VoidCallback onTap;
  const OptionCard({super.key, required this.label, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return Material(
      color: T.surface,
      borderRadius: BorderRadius.circular(T.rCard),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(T.rCard),
        child: Container(
          width: double.infinity,
          constraints: const BoxConstraints(minHeight: T.tap),
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(T.rCard),
            border: Border.all(color: T.border),
          ),
          alignment: Alignment.centerLeft,
          child: Text(label, style: Theme.of(context).textTheme.bodyLarge),
        ),
      ),
    );
  }
}

/// Полоска процента причины (tabular-nums по токенам — в вызывающем коде).
class PctBar extends StatelessWidget {
  final int pct;
  const PctBar({super.key, required this.pct});

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(4),
      child: SizedBox(
        height: 8,
        child: LinearProgressIndicator(
          value: (pct.clamp(0, 100)) / 100,
          backgroundColor: T.accentSoft,
          valueColor: const AlwaysStoppedAnimation(T.accent),
        ),
      ),
    );
  }
}

/// Заголовок раздела.
class SectionTitle extends StatelessWidget {
  final String text;
  const SectionTitle(this.text, {super.key});

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.only(top: 24, bottom: 12),
        child: Text(text, style: Theme.of(context).textTheme.titleMedium),
      );
}
