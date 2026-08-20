import 'l10n/l10n.dart';

/// Тексты интерфейса. Значения берутся из таблицы текущего языка,
/// поэтому это геттеры, а не константы: язык меняется на лету.
class S {
  static String get hiwBody => L.t('hiwBody');
  static String get appName => L.t('appName');
  static String get appTagline => L.t('appTagline');
  static String get carTitle => L.t('carTitle');
  static String get carSubtitle => L.t('carSubtitle');
  static String get carMake => L.t('carMake');
  static String get carMakeHint => L.t('carMakeHint');
  static String get carModel => L.t('carModel');
  static String get carModelHint => L.t('carModelHint');
  static String get carYear => L.t('carYear');
  static String get carMileage => L.t('carMileage');
  static String get carMileageHint => L.t('carMileageHint');
  static String get carSave => L.t('carSave');
  static String get carFillAll => L.t('carFillAll');
  static String get diagnose => L.t('diagnose');
  static String get diagnoseBySound => L.t('diagnoseBySound');
  static String get diagnoseBySoundNote => L.t('diagnoseBySoundNote');
  static String get howItWorksLink => L.t('howItWorksLink');
  static String get historyTitle => L.t('historyTitle');
  static String get historyEmpty => L.t('historyEmpty');
  static String get quickReport => L.t('quickReport');
  static String get fullReport => L.t('fullReport');
  static String get quizTitle => L.t('quizTitle');
  static String get verdictTitle => L.t('verdictTitle');
  static String get verdictLikely => L.t('verdictLikely');
  static String get verdictAlt => L.t('verdictAlt');
  static String get verdictWhat => L.t('verdictWhat');
  static String get verdictAdvice => L.t('verdictAdvice');
  static String get verdictRefine => L.t('verdictRefine');
  static String get verdictRefineNote => L.t('verdictRefineNote');
  static String get verdictEnough => L.t('verdictEnough');
  static String get verdictSite => L.t('verdictSite');
  static String get urgOk => L.t('urgOk');
  static String get urgWarn => L.t('urgWarn');
  static String get urgStop => L.t('urgStop');
  static String get recTitle => L.t('recTitle');
  static String get recInstructionTitle => L.t('recInstructionTitle');
  static String get recStart => L.t('recStart');
  static String get recStop => L.t('recStop');
  static String get recListen => L.t('recListen');
  static String get recStopListen => L.t('recStopListen');
  static String get recAgain => L.t('recAgain');
  static String get recSend => L.t('recSend');
  static String get recTooShort => L.t('recTooShort');
  static String get recMicTitle => L.t('recMicTitle');
  static String get recMicExplain => L.t('recMicExplain');
  static String get recMicContinue => L.t('recMicContinue');
  static String get recMicDeniedTitle => L.t('recMicDeniedTitle');
  static String get recMicDenied => L.t('recMicDenied');
  static String get recOpenSettings => L.t('recOpenSettings');
  static String get anTitle => L.t('anTitle');
  static String get anWait => L.t('anWait');
  static String get anRetry => L.t('anRetry');
  static String get anBack => L.t('anBack');
  static String get anErrNetwork => L.t('anErrNetwork');
  static String get anErrTimeout => L.t('anErrTimeout');
  static String get carGeneration => L.t('carGeneration');
  static String get carGenerationHint => L.t('carGenerationHint');
  static String get carMileageSaved => L.t('carMileageSaved');
  static String get recMicBusy => L.t('recMicBusy');
  static String get shareFailed => L.t('shareFailed');
  static String get errRateLimited => L.t('errRateLimited');
  static String get errDailyLimit => L.t('errDailyLimit');
  static String get errTooLarge => L.t('errTooLarge');
  static String get errTooShort => L.t('errTooShort');
  static String get errTooLong => L.t('errTooLong');
  static String get errBadAudio => L.t('errBadAudio');
  static String get anErrServer => L.t('anErrServer');
  static String get repTitle => L.t('repTitle');
  static String get repCauses => L.t('repCauses');
  static String get repNoFault => L.t('repNoFault');
  static String get repNoFaultNote => L.t('repNoFaultNote');
  static String get repOtherSounds => L.t('repOtherSounds');
  static String get repWhy => L.t('repWhy');
  static String get repCheck => L.t('repCheck');
  static String get repBrief => L.t('repBrief');
  static String get repQuestions => L.t('repQuestions');
  static String get repRedFlags => L.t('repRedFlags');
  static String get repShare => L.t('repShare');
  static String get setTitle => L.t('setTitle');
  static String get carFormTitle => L.t('carFormTitle');
  static String get setVersion => L.t('setVersion');
  static String get setCheckUpdate => L.t('setCheckUpdate');
  static String get setUpToDate => L.t('setUpToDate');
  static String get setUpdateAvailable => L.t('setUpdateAvailable');
  static String get setDownload => L.t('setDownload');
  static String get setCheckFailed => L.t('setCheckFailed');
  static String get setSite => L.t('setSite');
  static String get setPolicy => L.t('setPolicy');
  static String get hiwTitle => L.t('hiwTitle');
  static String get disclaimerShort => L.t('disclaimerShort');
  static String get garageTitle => L.t('garageTitle');
  static String get garageLink => L.t('garageLink');
  static String get garageCars => L.t('garageCars');
  static String get garageAddCar => L.t('garageAddCar');
  static String get garageEmpty => L.t('garageEmpty');
  static String get garageSettings => L.t('garageSettings');
  static String get mileageNow => L.t('mileageNow');
  static String get mileageUpdate => L.t('mileageUpdate');
  static String get mileageOk => L.t('mileageOk');
  static String get mileageHint => L.t('mileageHint');
  static String get bookTitle => L.t('bookTitle');
  static String get bookNote => L.t('bookNote');
  static String get bookEmptyHint => L.t('bookEmptyHint');
  static String get bookAllGood => L.t('bookAllGood');
  static String get bookOverdue => L.t('bookOverdue');
  static String get bookSoon => L.t('bookSoon');
  static String get bookAskAgo => L.t('bookAskAgo');
  static String get bookAskHint => L.t('bookAskHint');
  static String get bookCancel => L.t('bookCancel');
  static String get bookSave => L.t('bookSave');
  static String get bookReset => L.t('bookReset');
  static String get bookByCondition => L.t('bookByCondition');
  static String get upcomingTitle => L.t('upcomingTitle');
  static String get upcomingEmpty => L.t('upcomingEmpty');
  static String get histEmpty => L.t('histEmpty');
  static String get histFull => L.t('histFull');
  static String get histQuick => L.t('histQuick');
  static String get shareText => L.t('shareText');

  static String get langTitle => L.t('langTitle');
  static String get langHint => L.t('langHint');

  static String get unitKm => L.t('unitKm');
  static String get unitMi => L.t('unitMi');

  static String get statusNoData => L.t('statusNoData');

  static String get statusLeft => L.t('statusLeft');

  static String get statusDriven => L.t('statusDriven');

  static String get statusLimit => L.t('statusLimit');

  static String get intervalYear => L.t('intervalYear');

  static String get intervalYears => L.t('intervalYears');

  /// Порядок важен: это шаги памятки, а не набор фраз.
  static List<String> get recInstructions => [
        L.t('recInstr1'),
        L.t('recInstr2'),
        L.t('recInstr3'),
        L.t('recInstr4'),
        L.t('recInstr5'),
      ];

  static List<String> get anStages =>
      [L.t('anStage1'), L.t('anStage2'), L.t('anStage3')];

  static const makes = [
    'Toyota', 'Volkswagen', 'Skoda', 'Kia', 'Hyundai', 'Lada', 'Chevrolet',
    'Nissan', 'Mazda', 'Honda', 'Mitsubishi', 'BMW', 'Mercedes-Benz', 'Audi',
    'Ford', 'Renault', 'Lexus', 'Subaru', 'Daewoo', 'Opel', 'Peugeot',
    'Geely', 'Chery', 'Haval', 'УАЗ', 'ГАЗ',
  ];


  static String get accSignInAgain => L.t('accSignInAgain');
  static String get accNoSlot => L.t('accNoSlot');
  static String get accCarLocked => L.t('accCarLocked');
  static String get accSlotTaken => L.t('accSlotTaken');
  static String get accSlotEmpty => L.t('accSlotEmpty');
  static String get accNoChecks => L.t('accNoChecks');
  static String get accNotPurchased => L.t('accNotPurchased');
  static String get accVerifyLater => L.t('accVerifyLater');
  static String get authTitle => L.t('authTitle');
  static String get authSubtitle => L.t('authSubtitle');
  static String get authGoogle => L.t('authGoogle');
  static String get authApple => L.t('authApple');
  static String get authFailed => L.t('authFailed');
  static String get authSignOut => L.t('authSignOut');
  static String get buyTitle => L.t('buyTitle');
  static String get buyForCar => L.t('buyForCar');
  static String get buyChecksLeft => L.t('buyChecksLeft');
  static String get buySlots => L.t('buySlots');
  static String get buyBuy => L.t('buyBuy');
  static String get buyDone => L.t('buyDone');
  static String get buyRestore => L.t('buyRestore');
  static String get buyNoProducts => L.t('buyNoProducts');
}
