/// Расходники и интервалы замены — основа сервисной книжки.
///
/// Интервалы заданы **диапазоном**, а не одной цифрой, и это принципиально:
/// для свечей 30 тысяч верно для обычных, но иридиевые ходят до 90;
/// ремень ГРМ на одних моторах меняют в 60 тысяч, на других в 120.
/// Одно число здесь было бы уверенной неправдой, поэтому показываем «от и до»
/// и прямо пишем, от чего зависит. Регламент производителя всегда главнее.
class Consumable {
  final String key;
  final String title;

  /// Нижняя и верхняя границы интервала по пробегу, км. null — только по сроку.
  final int? kmMin;
  final int? kmMax;

  /// Интервал по времени, месяцев. null — только по пробегу.
  final int? months;

  /// Меняется по состоянию, а не по пробегу: цифра — лишь грубый ориентир.
  final bool byCondition;

  /// От чего зависит разброс — чтобы цифра не выглядела универсальной.
  final String note;

  const Consumable(this.key, this.title,
      {this.kmMin,
      this.kmMax,
      this.months,
      this.byCondition = false,
      this.note = ''});
}

const consumables = <Consumable>[
  Consumable('oil', 'Моторное масло и масляный фильтр',
      kmMin: 7000,
      kmMax: 10000,
      months: 12,
      note: 'Короткие поездки, пробки и пыль сдвигают к нижней границе.'),
  Consumable('cabin_filter', 'Салонный фильтр',
      kmMin: 10000,
      kmMax: 15000,
      months: 12,
      note: 'Запах сырости из дефлекторов — повод менять, не дожидаясь пробега.'),
  Consumable('air_filter', 'Воздушный фильтр',
      kmMin: 15000,
      kmMax: 30000,
      note: 'На грунтовках забивается вдвое быстрее; смотреть на просвет.'),
  Consumable('fuel_filter', 'Топливный фильтр',
      kmMin: 25000,
      kmMax: 40000,
      note: 'Это про выносной фильтр. Погружной в баке часто идёт по регламенту '
          'как несменяемый — смотрите книгу по вашей машине.'),
  Consumable('spark_plugs', 'Свечи зажигания',
      kmMin: 30000,
      kmMax: 90000,
      note: 'Разброс огромный из-за типа: обычные — 30 тысяч, '
          'платиновые и иридиевые — 60–90.'),
  Consumable('brake_fluid', 'Тормозная жидкость',
      months: 24,
      note: 'Считается по сроку, а не по пробегу: она набирает влагу из воздуха '
          'даже у стоящей машины.'),
  Consumable('coolant', 'Антифриз',
      kmMin: 60000,
      kmMax: 150000,
      months: 60,
      note: 'Зависит от состава: обычный — ближе к нижней границе, '
          'заводские карбоксилатные ходят кратно дольше.'),
  Consumable('atf', 'Масло в АКПП',
      kmMin: 40000,
      kmMax: 60000,
      note: 'Даже для «необслуживаемых» коробок в жару и пробках замена имеет смысл.'),
  Consumable('gear_oil', 'Масло в МКПП или редукторе',
      kmMin: 60000, kmMax: 100000),
  Consumable('timing_belt', 'Ремень ГРМ с роликами',
      kmMin: 60000,
      kmMax: 120000,
      months: 60,
      note: 'Единственная позиция, где угадывать нельзя: интервал строго из '
          'регламента вашего мотора. Обрыв на многих гнёт клапаны.'),
  Consumable('aux_belt', 'Ремень навесных агрегатов',
      kmMin: 50000, kmMax: 90000, note: 'Трещины и осыпание рёбер — менять сразу.'),
  Consumable('brake_pads', 'Тормозные колодки',
      kmMin: 25000,
      kmMax: 50000,
      byCondition: true,
      note: 'Правильно смотреть на толщину накладки, а не на пробег: '
          'в городе с пробками стираются заметно раньше.'),
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
    if (unknown) return 'нет данных';
    if (overdue) return 'пора менять';
    if (due) return 'скоро';
    return 'ещё ${item.kmMin! - sinceKm!} км';
  }

  /// Подпись под цифрой: где мы внутри диапазона.
  String get detail {
    if (unknown) return '';
    if (overdue) return 'проехали $sinceKm км с замены';
    if (due) {
      return 'проехали $sinceKm км — интервал начался, крайний срок '
          '${item.kmMax} км';
    }
    return 'проехали $sinceKm км';
  }
}

ServiceStatus statusFor(Consumable c, int? sinceKm) => ServiceStatus(c, sinceKm);

/// Человеческая запись интервала: «7 000–10 000 км или раз в год».
String intervalText(Consumable c) {
  final parts = <String>[];
  if (c.kmMin != null) {
    parts.add(c.kmMax != null && c.kmMax != c.kmMin
        ? '${c.kmMin}–${c.kmMax} км'
        : '${c.kmMin} км');
  }
  if (c.months != null) {
    final y = c.months! ~/ 12;
    parts.add(y <= 1 ? 'раз в год' : 'раз в $y года');
  }
  return parts.join(' или ');
}
