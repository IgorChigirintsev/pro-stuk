// Пакет report — схема отчёта (§6.2 спеки) и анализаторы.
// В фазе 1 работает мок-анализатор; клиент Gemini добавится в фазе 2
// с тем же интерфейсом.
package report

import (
	"context"
	"fmt"

	"stuk/backend/internal/dsp"
)

// Cause — одна вероятная причина в отчёте.
type Cause struct {
	Title          string `json:"title"`
	ProbabilityPct int    `json:"probability_pct"`
	Why            string `json:"why"`
	CheckYourself  string `json:"check_yourself"`
}

// Report — схема ответа, единая для мока и Gemini.
type Report struct {
	// NoFault — в записи не слышно отклонений. Вердикт про запись, а не про
	// машину: звук может проявляться в других условиях. Ставится только при
	// внятной записи; при плохой отчёт объясняет, что разобрать не удалось.
	// Вместе с ним Causes пуст, а Urgency всегда "ok".
	NoFault           bool     `json:"no_fault"`
	Causes            []Cause  `json:"causes"`
	Urgency           string   `json:"urgency"`
	UrgencyReason     string   `json:"urgency_reason"`
	MechanicBrief     []string `json:"mechanic_brief"`
	MechanicQuestions []string `json:"mechanic_questions"`
	RedFlags          []string `json:"red_flags"`
	Disclaimer        string   `json:"disclaimer"`
	// Схема узла и номера деталей для подсветки в клиенте.
	// Пустой ключ означает «схемы для такой причины нет» — это нормально.
	SchemaKey   string `json:"schema_key,omitempty"`
	SchemaMarks []int  `json:"schema_marks,omitempty"`
}

// Car — данные автомобиля из анкеты.
type Car struct {
	Make      string `json:"make"`
	Model     string `json:"model"`
	Year      int    `json:"year"`
	MileageKm int    `json:"mileage_km"`
}

// Answer — один ответ анкеты (текст дублируется, чтобы LLM видел формулировки).
type Answer struct {
	QuestionID   string `json:"question_id"`
	OptionID     string `json:"option_id"`
	QuestionText string `json:"question_text"`
	OptionLabel  string `json:"option_label"`
}

// Meta — поле meta из multipart-запроса /report.
type Meta struct {
	DeviceID string   `json:"device_id"`
	Car      Car      `json:"car"`
	Answers  []Answer `json:"answers"`
	LeafID   string   `json:"leaf_id"`
	// Язык интерфейса пользователя: на нём модель пишет отчёт.
	Lang string `json:"lang"`
}

const Disclaimer = "Это вероятностная оценка по звуку и симптомам, а не диагноз. " +
	"Итоговое решение о ремонте принимает механик после осмотра автомобиля."

// Usage — расход токенов на один запрос. Нужен, чтобы себестоимость анализа
// была измеренной, а не оценённой: тариф зависит от модели, а модель задана
// как «latest» и меняется без нашего участия.
type Usage struct {
	PromptTokens int // текст промпта и метаданные
	AudioTokens  int // звук: тарифицируется отдельно и дороже текста
	OutputTokens int
	Total        int
}

// Analyzer строит отчёт по анкете, DSP-фичам и аудио и сообщает,
// во сколько токенов обошёлся запрос.
type Analyzer interface {
	Analyze(ctx context.Context, meta Meta, features dsp.Features, audioWav []byte) (Report, Usage, error)
}

// Mock — анализатор фазы 1: возвращает правдоподобный отчёт по схеме,
// не обращаясь к LLM. Нужен для разработки приложения и интеграционных тестов.
type Mock struct{}

func (Mock) Analyze(_ context.Context, meta Meta, f dsp.Features, _ []byte) (Report, Usage, error) {
	carLine := "автомобиль не указан"
	if meta.Car.Make != "" {
		carLine = fmt.Sprintf("%s %s %d, пробег %d км", meta.Car.Make, meta.Car.Model, meta.Car.Year, meta.Car.MileageKm)
	}
	audioLine := "запись тихая или неинформативная — оценка построена в основном на анкете"
	if f.SnrDb.Value >= 10 {
		audioLine = fmt.Sprintf("в записи различим сигнал (SNR %.0f дБ)", f.SnrDb.Value)
	}

	return Report{
		Causes: []Cause{
			{
				Title:          "Мок-причина №1 (по ветке анкеты)",
				ProbabilityPct: 55,
				Why: fmt.Sprintf("Тестовый отчёт без LLM: %s; лист анкеты «%s»; %s.",
					carLine, meta.LeafID, audioLine),
				CheckYourself: "Это мок-ответ фазы 1: реальный анализ подключается в фазе 2.",
			},
			{
				Title:          "Мок-причина №2",
				ProbabilityPct: 25,
				Why:            "Вторая вероятная причина для проверки вёрстки списка причин.",
				CheckYourself:  "Проверить ничего не нужно — это тестовые данные.",
			},
			{
				Title:          "Мок-причина №3",
				ProbabilityPct: 10,
				Why:            "Третья причина с небольшой вероятностью.",
				CheckYourself:  "—",
			},
		},
		Urgency:       "warn",
		UrgencyReason: "Мок-оценка: показаться в сервисе на неделе.",
		MechanicBrief: []string{
			"Звук записан приложением «Стук», отчёт тестовый.",
			fmt.Sprintf("Ветка опросника: %s.", meta.LeafID),
			"Попросить проверить узлы из списка причин.",
		},
		MechanicQuestions: []string{
			"Когда звук появился впервые?",
			"Меняется ли звук с прогревом?",
		},
		RedFlags: []string{
			"Загорелись лампы давления масла или температуры — остановиться.",
			"Звук резко усилился или машина потеряла управляемость — остановиться.",
		},
		Disclaimer: Disclaimer,
	}, Usage{}, nil
}
