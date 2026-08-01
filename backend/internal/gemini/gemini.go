// Пакет gemini — клиент Gemini API (REST v1beta generateContent)
// со structured output: модель обязана вернуть JSON по схеме отчёта §6.2.
package gemini

import (
	"bytes"
	"context"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strings"
	"time"

	"stuk/backend/internal/dsp"
	"stuk/backend/internal/report"
)

const endpoint = "https://generativelanguage.googleapis.com/v1beta/models/%s:generateContent"

type Client struct {
	apiKey string
	model  string
	httpc  *http.Client
}

func New(apiKey, model string) *Client {
	return &Client{
		apiKey: apiKey,
		model:  model,
		httpc:  &http.Client{Timeout: 70 * time.Second},
	}
}

// Системный промт — константа в коде, на русском (§6.2 спеки).
const systemPrompt = `Ты — механик-диагност с 20-летним опытом работы с легковыми автомобилями,
включая типовые болячки конкретных моделей и моторов. Твоя задача — по данным ниже составить
честный вероятностный отчёт о причине звука для встревоженного владельца машины без технического
образования.

Тебе передают:
1. Марку, модель, год выпуска и пробег автомобиля.
2. Ответы владельца на опросник-дерево (когда и какой звук слышен) и предварительную ветку диагноза.
3. Акустические признаки записи (DSP), каждый с пометкой надёжности low/med/high: уровень записи,
   отношение сигнал/шум, спектральный центроид, главные пики спектра, тональность, частота повторения
   ударов hit_hz, оценка оборотов rpm и отношение ударов к оборотам с черновой интерпретацией.
4. Само аудио (WAV). Прослушай его.

Правила:
- Назови от 2 до 4 вероятных причин. Вероятности честные, в сумме не больше 100. Не изображай
  уверенность, которой нет: если данных мало, вероятности должны быть скромными.
- Ответы анкеты — главный сигнал. Аудио и DSP-признаки — уточняющие. Признакам с пометкой low не
  доверяй, med используй осторожно.
- Если запись неинформативна (низкий SNR, тишина, разговор, ветер) — прямо скажи об этом в отчёте
  и опирайся на анкету.
- Если ответов анкеты нет (пользователь сразу записал звук, не проходя опросник) — опирайся на
  аудио, DSP-признаки и типовые болячки модели. Вероятности в этом случае делай заметно скромнее
  и в mechanic_brief предложи пройти опросник в приложении для уточнения.
- Учитывай типовые болезни этой модели, её возраста и пробега, если уверен в них. Не выдумывай.
- Никакого запугивания. Спокойный тон медицинского инструмента.
- Язык простой, разговорный русский. Каждый технический термин расшифруй в скобках простыми словами.
  Обращения на «ты» не использовать; лучше безличные формулировки.
- urgency выбирай консервативно, но честно: stop — только при реальных признаках опасности
  (тормоза, руль, стук из глубины двигателя под нагрузкой, риск заклинивания или потери управления).
  Сомнение между ok и warn решай в пользу warn. urgency_reason — одна короткая фраза.
- mechanic_brief: 3–5 пунктов, что сказать в сервисе, включая полезные наблюдения владельца.
- mechanic_questions: вопросы, которые механик, скорее всего, задаст — чтобы владелец подготовился.
- red_flags: признаки, при которых нужно немедленно остановиться и не продолжать движение.
- disclaimer: одна-две фразы о том, что это вероятностная оценка, а не диагноз, и решение о ремонте
  принимает механик после осмотра.`

// responseSchema — схема structured output (подмножество OpenAPI, как требует Gemini).
var responseSchema = map[string]any{
	"type": "object",
	"properties": map[string]any{
		"causes": map[string]any{
			"type": "array",
			"items": map[string]any{
				"type": "object",
				"properties": map[string]any{
					"title":           map[string]any{"type": "string"},
					"probability_pct": map[string]any{"type": "integer"},
					"why":             map[string]any{"type": "string"},
					"check_yourself":  map[string]any{"type": "string"},
				},
				"required": []string{"title", "probability_pct", "why", "check_yourself"},
			},
		},
		"urgency":            map[string]any{"type": "string", "enum": []string{"ok", "warn", "stop"}},
		"urgency_reason":     map[string]any{"type": "string"},
		"mechanic_brief":     map[string]any{"type": "array", "items": map[string]any{"type": "string"}},
		"mechanic_questions": map[string]any{"type": "array", "items": map[string]any{"type": "string"}},
		"red_flags":          map[string]any{"type": "array", "items": map[string]any{"type": "string"}},
		"disclaimer":         map[string]any{"type": "string"},
	},
	"required": []string{"causes", "urgency", "urgency_reason", "mechanic_brief", "mechanic_questions", "red_flags", "disclaimer"},
}

func (c *Client) Analyze(ctx context.Context, meta report.Meta, features dsp.Features, audioWav []byte) (report.Report, error) {
	userText, err := buildUserText(meta, features)
	if err != nil {
		return report.Report{}, fmt.Errorf("сборка запроса: %w", err)
	}

	body := map[string]any{
		"system_instruction": map[string]any{
			"parts": []any{map[string]any{"text": systemPrompt}},
		},
		"contents": []any{map[string]any{
			"role": "user",
			"parts": []any{
				map[string]any{"text": userText},
				map[string]any{"inline_data": map[string]any{
					"mime_type": "audio/wav",
					"data":      base64.StdEncoding.EncodeToString(audioWav),
				}},
			},
		}},
		"generationConfig": map[string]any{
			"temperature":        0.2,
			"response_mime_type": "application/json",
			"response_schema":    responseSchema,
		},
	}
	raw, err := json.Marshal(body)
	if err != nil {
		return report.Report{}, err
	}

	req, err := http.NewRequestWithContext(ctx, http.MethodPost, fmt.Sprintf(endpoint, c.model), bytes.NewReader(raw))
	if err != nil {
		return report.Report{}, err
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("x-goog-api-key", c.apiKey)

	resp, err := c.httpc.Do(req)
	if err != nil {
		return report.Report{}, fmt.Errorf("запрос к Gemini: %w", err)
	}
	defer resp.Body.Close()
	respBody, _ := io.ReadAll(io.LimitReader(resp.Body, 1<<20))
	if resp.StatusCode != http.StatusOK {
		return report.Report{}, fmt.Errorf("Gemini ответил %d: %s", resp.StatusCode, truncate(string(respBody), 400))
	}

	var parsed struct {
		Candidates []struct {
			Content struct {
				Parts []struct {
					Text string `json:"text"`
				} `json:"parts"`
			} `json:"content"`
			FinishReason string `json:"finishReason"`
		} `json:"candidates"`
	}
	if err := json.Unmarshal(respBody, &parsed); err != nil {
		return report.Report{}, fmt.Errorf("ответ Gemini не разобрался: %w", err)
	}
	if len(parsed.Candidates) == 0 || len(parsed.Candidates[0].Content.Parts) == 0 {
		return report.Report{}, fmt.Errorf("в ответе Gemini нет кандидатов: %s", truncate(string(respBody), 400))
	}

	var rep report.Report
	text := parsed.Candidates[0].Content.Parts[0].Text
	if err := json.Unmarshal([]byte(text), &rep); err != nil {
		return report.Report{}, fmt.Errorf("отчёт не соответствует схеме: %w", err)
	}
	if err := validate(rep); err != nil {
		return report.Report{}, err
	}
	if rep.Disclaimer == "" {
		rep.Disclaimer = report.Disclaimer
	}
	return rep, nil
}

func validate(r report.Report) error {
	if len(r.Causes) < 1 || len(r.Causes) > 6 {
		return fmt.Errorf("в отчёте %d причин", len(r.Causes))
	}
	switch r.Urgency {
	case "ok", "warn", "stop":
	default:
		return fmt.Errorf("недопустимый urgency %q", r.Urgency)
	}
	sum := 0
	for _, c := range r.Causes {
		if c.ProbabilityPct < 0 || c.ProbabilityPct > 100 {
			return fmt.Errorf("вероятность вне диапазона: %d", c.ProbabilityPct)
		}
		sum += c.ProbabilityPct
	}
	if sum > 110 { // небольшой допуск на округления модели
		return fmt.Errorf("сумма вероятностей %d > 100", sum)
	}
	return nil
}

func buildUserText(meta report.Meta, features dsp.Features) (string, error) {
	var b strings.Builder

	fmt.Fprintf(&b, "Автомобиль: %s %s, %d год, пробег %d км.\n\n",
		orDash(meta.Car.Make), orDash(meta.Car.Model), meta.Car.Year, meta.Car.MileageKm)

	b.WriteString("Ответы владельца на опросник:\n")
	if len(meta.Answers) == 0 {
		b.WriteString("- (ответов нет)\n")
	}
	for _, a := range meta.Answers {
		fmt.Fprintf(&b, "- %s → %s\n", a.QuestionText, a.OptionLabel)
	}
	fmt.Fprintf(&b, "\nПредварительная ветка опросника (id листа дерева): %s\n\n", orDash(meta.LeafID))

	dspJSON, err := json.MarshalIndent(features, "", " ")
	if err != nil {
		return "", err
	}
	b.WriteString("DSP-признаки записи (confidence: low — не доверять, med — осторожно, high — надёжно):\n")
	b.Write(dspJSON)
	b.WriteString("\n\nАудиозапись приложена следующей частью сообщения. Составь отчёт по схеме.")
	return b.String(), nil
}

func orDash(s string) string {
	if strings.TrimSpace(s) == "" {
		return "—"
	}
	return s
}

func truncate(s string, n int) string {
	if len(s) <= n {
		return s
	}
	return s[:n] + "…"
}
