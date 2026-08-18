import 'package:flutter/widgets.dart';

import '../tree.dart';
import 'locale_service.dart';

/// Один сигнал на всё приложение: смена языка и дочитанное дерево.
///
/// Объект создаётся один раз. Если пересобирать `Listenable.merge` на каждой
/// сборке, [LocaleScope] считал бы язык изменившимся при любой перерисовке.
final localeSignal = Listenable.merge([LocaleService.current, treeReloaded]);

/// Подписка экранов на смену языка.
///
/// Тексты читаются статически (`S.recTitle`), поэтому экран узнаёт о новом
/// языке только когда его перестроят. Перерисовки `MaterialApp` для этого мало:
/// `ModalRoute` кэширует собранную страницу, и экраны, уже лежащие в стеке
/// Navigator, остаются на прежнем языке. Заметнее всего это было на самих
/// настройках — там язык и переключают.
///
/// `InheritedNotifier` решает это иначе: он помечает подписчиков напрямую,
/// независимо от того, перестраивался ли их родитель.
class LocaleScope extends InheritedNotifier<Listenable> {
  LocaleScope({super.key, required super.child})
      : super(notifier: localeSignal);

  /// Вызывается первой строкой в `build` экрана.
  static void watch(BuildContext context) {
    context.dependOnInheritedWidgetOfExactType<LocaleScope>();
  }
}
