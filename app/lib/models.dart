/// Модели данных: машина, ответы опросника, отчёт, запись истории.
library;

class Car {
  final String id;
  final String make;
  final String model;
  final int year;
  final int mileageKm;
  /// Поколение из справочника: пустая строка, если не выбрано.
  final String generation;
  /// Расходник → пробег на момент замены. Храним одометр, а не «сколько назад»:
  /// иначе при обновлении текущего пробега остаток пришлось бы пересчитывать руками.
  final Map<String, int> service;

  const Car({
    required this.make,
    required this.model,
    required this.year,
    required this.mileageKm,
    this.id = '',
    this.generation = '',
    this.service = const {},
  });

  String get label => '$make $model, $year';

  Car copyWithId(String newId) => Car(
        id: newId,
        make: make,
        model: model,
        year: year,
        mileageKm: mileageKm,
        generation: generation,
        service: service,
      );

  Car copyWith({int? mileageKm, String? generation, Map<String, int>? service}) => Car(
        id: id,
        make: make,
        model: model,
        year: year,
        mileageKm: mileageKm ?? this.mileageKm,
        generation: generation ?? this.generation,
        service: service ?? this.service,
      );

  Map<String, dynamic> toJson() => {
        'make': make,
        'model': model,
        'year': year,
        'mileage_km': mileageKm,
        'id': id,
        'generation': generation,
        'service': service,
      };

  factory Car.fromJson(Map<String, dynamic> j) => Car(
        make: j['make'] as String? ?? '',
        model: j['model'] as String? ?? '',
        year: j['year'] as int? ?? 0,
        mileageKm: j['mileage_km'] as int? ?? 0,
        id: j['id'] as String? ?? '',
        generation: j['generation'] as String? ?? '',
        service: ((j['service'] as Map?) ?? const {})
            .map((k, v) => MapEntry(k as String, (v as num).toInt())),
      );
}

/// Ответ на один вопрос опросника: тексты дублируются для сервера.
class AnswerLog {
  final String questionId;
  final String optionId;
  final String questionText;
  final String optionLabel;

  const AnswerLog({
    required this.questionId,
    required this.optionId,
    required this.questionText,
    required this.optionLabel,
  });

  Map<String, dynamic> toJson() => {
        'question_id': questionId,
        'option_id': optionId,
        'question_text': questionText,
        'option_label': optionLabel,
      };

  factory AnswerLog.fromJson(Map<String, dynamic> j) => AnswerLog(
        questionId: j['question_id'] as String? ?? '',
        optionId: j['option_id'] as String? ?? '',
        questionText: j['question_text'] as String? ?? '',
        optionLabel: j['option_label'] as String? ?? '',
      );
}

class Cause {
  final String title;
  final int probabilityPct;
  final String why;
  final String checkYourself;

  const Cause({
    required this.title,
    required this.probabilityPct,
    required this.why,
    required this.checkYourself,
  });

  factory Cause.fromJson(Map<String, dynamic> j) => Cause(
        title: j['title'] as String? ?? '',
        probabilityPct: (j['probability_pct'] as num?)?.toInt() ?? 0,
        why: j['why'] as String? ?? '',
        checkYourself: j['check_yourself'] as String? ?? '',
      );

  Map<String, dynamic> toJson() => {
        'title': title,
        'probability_pct': probabilityPct,
        'why': why,
        'check_yourself': checkYourself,
      };
}

class ReportData {
  final List<Cause> causes;
  final String urgency;
  final String urgencyReason;
  final List<String> mechanicBrief;
  final List<String> mechanicQuestions;
  final List<String> redFlags;
  final String disclaimer;
  /// Схема узла и номера деталей для подсветки. Пусто — схемы нет, это нормально.
  final String schemaKey;
  final List<int> schemaMarks;

  const ReportData({
    required this.causes,
    required this.urgency,
    required this.urgencyReason,
    required this.mechanicBrief,
    required this.mechanicQuestions,
    required this.redFlags,
    required this.disclaimer,
    this.schemaKey = '',
    this.schemaMarks = const [],
  });

  factory ReportData.fromJson(Map<String, dynamic> j) => ReportData(
        causes: (j['causes'] as List? ?? [])
            .map((e) => Cause.fromJson(e as Map<String, dynamic>))
            .toList(),
        urgency: j['urgency'] as String? ?? 'warn',
        urgencyReason: j['urgency_reason'] as String? ?? '',
        mechanicBrief:
            (j['mechanic_brief'] as List? ?? []).cast<String>(),
        mechanicQuestions:
            (j['mechanic_questions'] as List? ?? []).cast<String>(),
        redFlags: (j['red_flags'] as List? ?? []).cast<String>(),
        disclaimer: j['disclaimer'] as String? ?? '',
        schemaKey: j['schema_key'] as String? ?? '',
        schemaMarks: (j['schema_marks'] as List? ?? [])
            .map((e) => (e as num).toInt())
            .toList(),
      );

  Map<String, dynamic> toJson() => {
        'causes': causes.map((c) => c.toJson()).toList(),
        'urgency': urgency,
        'urgency_reason': urgencyReason,
        'mechanic_brief': mechanicBrief,
        'mechanic_questions': mechanicQuestions,
        'red_flags': redFlags,
        'disclaimer': disclaimer,
        'schema_key': schemaKey,
        'schema_marks': schemaMarks,
      };
}

/// Запись истории: быстрый вердикт по анкете или полный отчёт по звуку.
class HistoryEntry {
  final String id; // имя файла
  final DateTime date;
  final String carLabel;
  final String urgency;
  final String topCause;
  final bool isFull;
  final ReportData? report;
  /// Лист дерева и ответы: без них быстрый вердикт нельзя показать повторно.
  final String leafId;
  final List<AnswerLog> answers;

  const HistoryEntry({
    required this.id,
    required this.date,
    required this.carLabel,
    required this.urgency,
    required this.topCause,
    required this.isFull,
    this.report,
    this.leafId = '',
    this.answers = const [],
  });

  Map<String, dynamic> toJson() => {
        'id': id,
        'date': date.toIso8601String(),
        'car_label': carLabel,
        'urgency': urgency,
        'top_cause': topCause,
        'is_full': isFull,
        if (report != null) 'report': report!.toJson(),
        'leaf_id': leafId,
        'answers': answers.map((a) => a.toJson()).toList(),
      };

  factory HistoryEntry.fromJson(Map<String, dynamic> j) => HistoryEntry(
        id: j['id'] as String? ?? '',
        date: DateTime.tryParse(j['date'] as String? ?? '') ?? DateTime.now(),
        carLabel: j['car_label'] as String? ?? '',
        urgency: j['urgency'] as String? ?? 'warn',
        topCause: j['top_cause'] as String? ?? '',
        isFull: j['is_full'] as bool? ?? false,
        report: j['report'] == null
            ? null
            : ReportData.fromJson(j['report'] as Map<String, dynamic>),
        leafId: j['leaf_id'] as String? ?? '',
        answers: ((j['answers'] as List?) ?? const [])
            .map((e) => AnswerLog.fromJson(e as Map<String, dynamic>))
            .toList(),
      );
}
