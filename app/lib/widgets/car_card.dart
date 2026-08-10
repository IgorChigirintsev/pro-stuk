import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../data/units.dart';
import '../state.dart';
import '../strings.dart';
import '../theme.dart';

/// Карточка активной машины на главной: пробег и ближайшие замены.
///
/// Пробег правится прямо здесь — это единственное число, которое пользователь
/// меняет часто, и от него считается вся сервисная книжка.
class CarCard extends StatefulWidget {
  final VoidCallback onOpenProfile;

  const CarCard({super.key, required this.onOpenProfile});

  @override
  State<CarCard> createState() => _CarCardState();
}

class _CarCardState extends State<CarCard> {
  final _ctrl = TextEditingController();
  String _shownCarId = '';
  int _shownKm = -1;

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final st = AppScope.of(context);
    final car = st.car;
    if (car == null) return const SizedBox.shrink();

    // Поле обновляем при смене машины или пробега извне, но не перебиваем ввод.
    // Сверяем и машину: у двух машин пробег может совпасть.
    if (_shownCarId != car.id || _shownKm != car.mileageKm) {
      _shownCarId = car.id;
      _shownKm = car.mileageKm;
      _ctrl.text = Units.display(car.mileageKm).toString();
    }

    final upcoming = st.upcomingService();

    return Container(
      decoration: BoxDecoration(
        color: T.surface,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: T.border),
      ),
      padding: const EdgeInsets.fromLTRB(16, 14, 16, 16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              const Icon(Icons.directions_car_outlined, size: 20, color: T.accent),
              const SizedBox(width: 8),
              Expanded(
                child: Text(car.label,
                    style: const TextStyle(fontWeight: FontWeight.w700)),
              ),
              GestureDetector(
                onTap: widget.onOpenProfile,
                child: Text(S.garageLink,
                    style: TextStyle(fontSize: 13, color: T.accent)),
              ),
            ],
          ),
          if (car.generation.isNotEmpty)
            Padding(
              padding: const EdgeInsets.only(top: 2),
              child: Text(car.generation,
                  style: const TextStyle(fontSize: 12, color: T.inkSoft)),
            ),
          const SizedBox(height: 12),
          Row(children: [
            Expanded(
              child: TextField(
                controller: _ctrl,
                keyboardType: TextInputType.number,
                inputFormatters: [FilteringTextInputFormatter.digitsOnly],
                decoration: InputDecoration(
                  isDense: true,
                  labelText: S.mileageNow,
                  suffixText: Units.label,
                ),
              ),
            ),
            const SizedBox(width: 10),
            FilledButton(
              onPressed: () {
                final v = int.tryParse(_ctrl.text.trim());
                if (v != null) st.setMileage(Units.store(v));
                FocusScope.of(context).unfocus();
              },
              child: Text(S.mileageOk),
            ),
          ]),
          if (upcoming.isNotEmpty) ...[
            const SizedBox(height: 14),
            Text(S.upcomingTitle,
                style: TextStyle(fontSize: 13, color: T.inkSoft)),
            const SizedBox(height: 6),
            for (final s in upcoming)
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 3),
                child: Row(children: [
                  Container(
                    width: 8,
                    height: 8,
                    decoration: BoxDecoration(
                      color: s.overdue
                          ? const Color(0xFFC2410C)
                          : s.due
                              ? const Color(0xFFB45309)
                              : const Color(0xFF15803D),
                      shape: BoxShape.circle,
                    ),
                  ),
                  const SizedBox(width: 8),
                  Expanded(
                      child: Text(s.item.title,
                          style: const TextStyle(fontSize: 14),
                          overflow: TextOverflow.ellipsis)),
                  Text(s.label,
                      style: const TextStyle(
                          fontSize: 13, fontWeight: FontWeight.w600)),
                ]),
              ),
          ] else ...[
            const SizedBox(height: 10),
            GestureDetector(
              onTap: widget.onOpenProfile,
              child: Text(
                S.upcomingEmpty,
                style: TextStyle(fontSize: 13, color: T.accent),
              ),
            ),
          ],
        ],
      ),
    );
  }
}
