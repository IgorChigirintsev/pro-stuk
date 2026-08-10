/// Расходники и типовые интервалы замены — основа сервисной книжки.
///
/// Цифры даны как распространённый ориентир для условий СНГ (пыль, короткие
/// поездки, качество топлива), а не как регламент конкретной машины.
/// Регламент производителя всегда главнее — об этом прямо сказано в интерфейсе.
class Consumable {
  final String key;
  final String title;

  /// Интервал по пробегу, км. null — меняется только по сроку.
  final int? km;

  /// Интервал по времени, месяцев. null — только по пробегу.
  final int? months;

  /// Короткое пояснение, откуда цифра и когда её надо уменьшать.
  final String note;

  const Consumable(this.key, this.title, this.km, this.months, this.note);
}

const consumables = <Consumable>[
  Consumable('oil', 'Моторное масло и масляный фильтр', 10000, 12,
      'При частых коротких поездках и пыли — ближе к 7–8 тысячам.'),
  Consumable('air_filter', 'Воздушный фильтр', 20000, 24,
      'На грунтовых дорогах забивается быстрее, смотреть на просвет.'),
  Consumable('cabin_filter', 'Салонный фильтр', 15000, 12,
      'Если из дефлекторов пахнет сыростью — менять, не дожидаясь пробега.'),
  Consumable('fuel_filter', 'Топливный фильтр', 30000, 24,
      'На дизеле и при заправках вне сетей — чаще.'),
  Consumable('spark_plugs', 'Свечи зажигания', 30000, null,
      'Иридиевые и платиновые ходят до 60–90 тысяч — смотреть тип свечи.'),
  Consumable('brake_fluid', 'Тормозная жидкость', null, 24,
      'Меняется по сроку, а не по пробегу: она набирает влагу из воздуха.'),
  Consumable('coolant', 'Антифриз', 60000, 48,
      'Ориентир для обычного состава; на некоторых заводских — дольше.'),
  Consumable('atf', 'Масло в АКПП', 60000, 48,
      'Для «необслуживаемых» коробок в жарком климате всё равно имеет смысл.'),
  Consumable('gear_oil', 'Масло в МКПП или редукторе', 80000, 60, ''),
  Consumable('timing_belt', 'Ремень ГРМ с роликами', 70000, 60,
      'Обрыв на многих моторах гнёт клапаны — это не та позиция, где стоит тянуть.'),
  Consumable('aux_belt', 'Ремень навесных агрегатов', 60000, 48, ''),
  Consumable('brake_pads', 'Тормозные колодки', 40000, null,
      'Сильно зависит от стиля езды: в городе с пробками — заметно раньше.'),
];

/// Состояние одной позиции: сколько проехали с замены и сколько осталось.
class ServiceStatus {
  final Consumable item;

  /// Пробег с момента замены, км. null — данных нет.
  final int? sinceKm;
  final int? remainKm;

  const ServiceStatus(this.item, this.sinceKm, this.remainKm);

  bool get unknown => remainKm == null;
  bool get overdue => remainKm != null && remainKm! <= 0;
  bool get soon => remainKm != null && remainKm! > 0 && remainKm! <= 1500;

  String get label {
    if (unknown) return 'нет данных';
    if (overdue) return 'просрочено на ${-remainKm!} км';
    return 'ещё $remainKm км';
  }
}

/// Считаем остаток по пробегу: сколько проехали с замены вычитаем из интервала.
ServiceStatus statusFor(Consumable c, int? sinceKm) {
  if (sinceKm == null || c.km == null) return ServiceStatus(c, sinceKm, null);
  return ServiceStatus(c, sinceKm, c.km! - sinceKm);
}
