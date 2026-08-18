import 'package:intl/intl.dart';

import 'locale_service.dart';

/// Дата на языке интерфейса.
///
/// Своя таблица месяцев означала бы 12 строк на каждый из 14 языков, причём
/// в славянских нужен родительный падеж («18 августа»), а в китайском и
/// японском порядок частей другой. intl знает это про все языки сразу.
String formatDate(DateTime d) =>
    DateFormat.yMMMd(LocaleService.current.value).format(d);
