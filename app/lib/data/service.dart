import '../l10n/consumables_i18n.dart';
import '../strings.dart';
import 'units.dart';

/// Расходники и интервалы замены — основа сервисной книжки.
///
/// Интервалы заданы **диапазоном**, а не одной цифрой, и это принципиально:
/// для свечей 30 тысяч верно для обычных, но иридиевые ходят до 90;
/// ремень ГРМ на одних моторах меняют в 60 тысяч, на других в 120.
/// Одно число здесь было бы уверенной неправдой, поэтому показываем «от и до»
/// и прямо пишем, от чего зависит. Регламент производителя всегда главнее.
class Consumable {
  final String key;

  /// Нижняя и верхняя границы интервала по пробегу, км. null — только по сроку.
  final int? kmMin;
  final int? kmMax;

  /// Интервал по времени, месяцев. null — только по пробегу.
  final int? months;

  /// Меняется по состоянию, а не по пробегу: цифра — лишь грубый ориентир.
  final bool byCondition;


  String get title => consumableTitle(key);
  String get note => consumableNote(key);

  const Consumable(this.key,
      {this.kmMin,
      this.kmMax,
      this.months,
      this.byCondition = false});
}

const consumables = <Consumable>[
  Consumable('oil',
      kmMin: 7000,
      kmMax: 10000,
      months: 12),
  Consumable('cabin_filter',
      kmMin: 10000,
      kmMax: 15000,
      months: 12),
  Consumable('air_filter',
      kmMin: 15000,
      kmMax: 30000),
  Consumable('fuel_filter',
      kmMin: 25000,
      kmMax: 40000),
  Consumable('spark_plugs',
      kmMin: 30000,
      kmMax: 90000),
  Consumable('brake_fluid',
      months: 24),
  Consumable('coolant',
      kmMin: 60000,
      kmMax: 150000,
      months: 60),
  Consumable('atf',
      kmMin: 40000,
      kmMax: 60000),
  Consumable('gear_oil',
      kmMin: 60000, kmMax: 100000),
  Consumable('timing_belt',
      kmMin: 60000,
      kmMax: 120000,
      months: 60),
  Consumable('aux_belt',
      kmMin: 50000, kmMax: 90000),
  Consumable('brake_pads',
      kmMin: 25000,
      kmMax: 50000,
      byCondition: true),
];

/// Состояние позиции: сколько проехали с замены и что это значит.
class ServiceStatus {
  final Consumable item;
  final int? sinceKm;

  const ServiceStatus(this.item, this.sinceKm);

  bool get unknown => sinceKm == null || item.kmMin == null;

  /// Прошли верхнюю границу — тянуть больше нечего.
  bool get overdue =>
      !unknown && item.kmMax != null && sinceKm! >= item.kmMax!;

  /// Вошли в интервал: пора проверять и планировать.
  bool get due => !unknown && !overdue && sinceKm! >= item.kmMin!;

  String get label {
    if (unknown) return S.statusNoData;
    if (overdue) return S.bookOverdue;
    if (due) return S.bookSoon;
    return '${S.statusLeft} ${Units.fmt(item.kmMin! - sinceKm!)}';
  }

  /// Подпись под цифрой: где мы внутри диапазона.
  String get detail {
    if (unknown) return '';
    final driven = '${S.statusDriven} ${Units.fmt(sinceKm!)}';
    if (due && item.kmMax != null) {
      return '$driven · ${S.statusLimit} ${Units.fmt(item.kmMax!)}';
    }
    return driven;
  }
}

ServiceStatus statusFor(Consumable c, int? sinceKm) => ServiceStatus(c, sinceKm);

/// Человеческая запись интервала: «7 000–10 000 км или раз в год».
String intervalText(Consumable c) {
  final parts = <String>[];
  if (c.kmMin != null) {
    parts.add(c.kmMax != null && c.kmMax != c.kmMin
        ? '${Units.display(c.kmMin!)}–${Units.fmt(c.kmMax!)}'
        : Units.fmt(c.kmMin!));
  }
  if (c.months != null) {
    // Числительное согласуется с существительным в русском, польском и
    // арабском, поэтому два встречающихся значения записаны словами целиком,
    // а шаблон остаётся на случай новых интервалов.
    final y = c.months! ~/ 12;
    parts.add(switch (y) {
      <= 1 => S.intervalYear,
      2 => S.interval2Years,
      5 => S.interval5Years,
      _ => S.intervalYears.replaceFirst('{n}', '$y'),
    });
  }
  return parts.join(' · ');
}
