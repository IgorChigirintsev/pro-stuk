package gemini

import (
	"encoding/json"
	"strings"
	"testing"

	"stuk/backend/internal/report"
)

// Вердикт «в записи отклонений не слышно» — единственный отчёт без причин.
// Правило держим тестом: смешать его с найденной неисправностью значит
// показать человеку спокойный экран поверх настоящей проблемы.
func TestValidateNoFault(t *testing.T) {
	ok := report.Report{
		NoFault:       true,
		Urgency:       "ok",
		UrgencyReason: "В этой записи отклонений не слышно.",
	}
	if err := validate(ok); err != nil {
		t.Fatalf("корректный no_fault отклонён: %v", err)
	}

	cases := map[string]report.Report{
		"с причинами": {
			NoFault:       true,
			Urgency:       "ok",
			UrgencyReason: "текст",
			Causes:        []report.Cause{{Title: "Подшипник", ProbabilityPct: 40}},
		},
		"со срочностью stop": {
			NoFault:       true,
			Urgency:       "stop",
			UrgencyReason: "текст",
		},
		"без объяснения": {
			NoFault: true,
			Urgency: "ok",
		},
	}
	for name, r := range cases {
		if err := validate(r); err == nil {
			t.Errorf("%s: ожидалась ошибка, отчёт принят", name)
		}
	}
}

// Обычный отчёт по-прежнему обязан содержать хотя бы одну причину:
// пустой список без флага no_fault — признак сорвавшейся генерации.
func TestValidateRequiresCauses(t *testing.T) {
	if err := validate(report.Report{Urgency: "ok", UrgencyReason: "текст"}); err == nil {
		t.Error("отчёт без причин и без no_fault принят")
	}
	good := report.Report{
		Urgency:       "warn",
		UrgencyReason: "текст",
		Causes:        []report.Cause{{Title: "Подшипник", ProbabilityPct: 60}},
	}
	if err := validate(good); err != nil {
		t.Errorf("обычный отчёт отклонён: %v", err)
	}
}

// Посторонние звуки — отдельная находка, а не свалка для версий одного звука.
// Больше трёх означает, что модель ссыпала туда причины.
func TestValidateOtherSounds(t *testing.T) {
	base := report.Report{
		Urgency:       "warn",
		UrgencyReason: "текст",
		Causes:        []report.Cause{{Title: "Подшипник", ProbabilityPct: 60}},
	}
	base.OtherSounds = []string{"Фоном свистит ремень."}
	if err := validate(base); err != nil {
		t.Errorf("отчёт с одним посторонним звуком отклонён: %v", err)
	}
	base.OtherSounds = []string{"а", "б", "в", "г"}
	if err := validate(base); err == nil {
		t.Error("четыре посторонних звука приняты")
	}
}

// Русские названия причин — служебное поле: по ним подбирается схема узла,
// и клиенту они уезжать не должны.
func TestCausesRuNotSerialized(t *testing.T) {
	r := report.Report{
		Causes:   []report.Cause{{Title: "Wheel bearing", ProbabilityPct: 100, Why: "hum", CheckYourself: "spin"}},
		CausesRu: []string{"ступичный подшипник"},
		Urgency:  "warn",
	}
	raw, err := json.Marshal(r)
	if err != nil {
		t.Fatal(err)
	}
	if strings.Contains(string(raw), "causes_ru") || strings.Contains(string(raw), "ступичный") {
		t.Fatalf("служебное поле уехало клиенту: %s", raw)
	}
}
