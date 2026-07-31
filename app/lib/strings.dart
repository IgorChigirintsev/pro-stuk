/// Все строки интерфейса — в одном файле (§10 спеки). Язык — только русский.
abstract final class S {
  static const appName = 'Стук';
  static const appTagline = 'диагностика по звуку';

  // Онбординг — машина
  static const carTitle = 'Какая у вас машина?';
  static const carSubtitle =
      'Марка, возраст и пробег помогают точнее оценить причину звука.';
  static const carMake = 'Марка';
  static const carMakeHint = 'Например, Toyota';
  static const carModel = 'Модель';
  static const carModelHint = 'Например, Camry';
  static const carYear = 'Год выпуска';
  static const carMileage = 'Пробег, км';
  static const carMileageHint = 'Например, 150000';
  static const carSave = 'Сохранить';
  static const carFillAll = 'Заполните все поля — это займёт полминуты.';

  // Главный экран
  static const diagnose = 'Диагностировать';
  static const howItWorksLink = 'Как это работает';
  static const historyTitle = 'История';
  static const historyEmpty =
      'Здесь появятся отчёты. Нажмите «Диагностировать», чтобы разобраться с первым звуком.';
  static const quickReport = 'Быстрый вердикт';
  static const fullReport = 'Отчёт по звуку';

  // Опросник
  static const quizTitle = 'Опросник';

  // Вердикт
  static const verdictTitle = 'Предварительный вердикт';
  static const verdictLikely = 'Вероятная причина';
  static const verdictAlt = 'Похожие причины: ';
  static const verdictWhat = 'Что это значит';
  static const verdictAdvice = 'Что делать';
  static const verdictRefine = 'Уточнить по звуку — точный отчёт';
  static const verdictRefineNote = 'Пока бесплатно, до 3 отчётов в день';
  static const verdictEnough = 'Достаточно';

  // Светофор
  static const urgOk = 'Можно ехать';
  static const urgWarn = 'В сервис на неделе';
  static const urgStop = 'Остановиться';

  // Запись
  static const recTitle = 'Запись звука';
  static const recInstructionTitle = 'Как записать';
  static const recInstructions = [
    'Двигатель заведён.',
    'Телефон ближе к источнику звука.',
    'Запись 15–30 секунд.',
    'Если звук зависит от газа — плавно перегазовать во время записи.',
    'Не разговаривать рядом с телефоном.',
  ];
  static const recStart = 'Записать звук';
  static const recStop = 'Остановить';
  static const recListen = 'Прослушать';
  static const recStopListen = 'Пауза';
  static const recAgain = 'Перезаписать';
  static const recSend = 'Отправить на анализ';
  static const recTooShort =
      'Запись короче 5 секунд. Запишите ещё раз — 15–30 секунд достаточно.';
  static const recMicTitle = 'Нужен доступ к микрофону';
  static const recMicExplain =
      'Диагностика строится на записи звука двигателя или подвески. Микрофон используется только в момент записи; аудио анализируется на сервере и не хранится после анализа.';
  static const recMicContinue = 'Продолжить';
  static const recMicDeniedTitle = 'Доступ к микрофону запрещён';
  static const recMicDenied =
      'Без микрофона записать звук не получится. Разрешение можно включить в настройках приложения.';
  static const recOpenSettings = 'Открыть настройки';

  // Анализ
  static const anTitle = 'Анализ';
  static const anStages = [
    'Слушаю запись…',
    'Считаю спектр…',
    'Сопоставляю с симптомами…',
  ];
  static const anWait = 'Обычно это занимает до минуты.';
  static const anRetry = 'Повторить';
  static const anBack = 'Вернуться';
  static const anErrNetwork =
      'Нет связи с сервером. Проверьте интернет и попробуйте ещё раз — запись сохранена.';
  static const anErrServer =
      'Не получилось проанализировать, попробуйте ещё раз.';

  // Отчёт
  static const repTitle = 'Отчёт';
  static const repCauses = 'Вероятные причины';
  static const repWhy = 'Почему';
  static const repCheck = 'Проверить самому';
  static const repBrief = 'Скажите в сервисе';
  static const repQuestions = 'Вопросы механика';
  static const repRedFlags = 'Когда остановиться немедленно';
  static const repShare = 'Поделиться';

  // Настройки
  static const setTitle = 'Настройки';
  static const setCar = 'Машина';
  static const setVersion = 'Версия приложения';
  static const setCheckUpdate = 'Проверить обновления';
  static const setUpToDate = 'У вас последняя версия.';
  static const setUpdateAvailable = 'Доступна новая версия';
  static const setDownload = 'Скачать обновление';
  static const setCheckFailed =
      'Не удалось проверить обновления. Попробуйте позже.';
  static const setSite = 'Сайт';
  static const setPolicy = 'Политика конфиденциальности';

  // Как это работает
  static const hiwTitle = 'Как это работает';
  static const hiwBody = '''
1. Вопросы. Короткий опросник сужает круг причин: когда слышен звук, на что похож, от чего зависит. Это главный источник диагноза — так же начинает и механик.

2. Звук. Запись 15–30 секунд уходит на сервер. Алгоритмы считают спектр, ритм ударов и обороты, а языковая модель сопоставляет всё с ответами опросника и типовыми болезнями конкретной модели.

3. Отчёт. Вероятные причины с процентами, светофор срочности и подсказки: что сказать в сервисе и что проверить самому.

Результат — вероятностная оценка, а не диагноз. Точность зависит от качества записи и честности ответов. Итоговое решение о ремонте принимает механик после осмотра.''';

  static const disclaimerShort =
      'Это вероятностная оценка, а не диагноз. Решение о ремонте принимает механик после осмотра.';

  // Популярные марки для подсказок
  static const makes = [
    'Toyota', 'Volkswagen', 'Skoda', 'Kia', 'Hyundai', 'Lada', 'Chevrolet',
    'Nissan', 'Mazda', 'Honda', 'Mitsubishi', 'BMW', 'Mercedes-Benz', 'Audi',
    'Ford', 'Renault', 'Lexus', 'Subaru', 'Daewoo', 'Opel', 'Peugeot',
    'Geely', 'Chery', 'Haval', 'УАЗ', 'ГАЗ',
  ];
}
