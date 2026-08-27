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
	"log/slog"
	"net/http"
	"strings"
	"sync"
	"time"

	"stuk/backend/internal/dsp"
	"stuk/backend/internal/report"
)

const endpoint = "https://generativelanguage.googleapis.com/v1beta/models/%s:generateContent"

// ErrAudioNotCar: модель уверена, что в записи нет автомобиля,
// а анкеты, на которую можно опереться, нет.
type ErrAudioNotCar struct{ Note string }

func (e *ErrAudioNotCar) Error() string {
	return "запись не про автомобиль: " + e.Note
}

const (
	// Сколько ждать одну модель. Верхний предел ставит не наш сервер, а
	// Cloudflare: он рвёт соединение к origin на сотой секунде, и дальше
	// человек увидит чужую ошибку вместо нашей.
	attemptTimeout = 50 * time.Second

	// Фора основной модели. Не дождавшись за это время, к ней подключается
	// запасная, и берётся тот ответ, который придёт первым.
	//
	// Не ноль, хотя параллельный запуск был бы проще. Звук в токенах дорог,
	// и спрашивать две модели на каждом разборе — значит платить вдвое всегда
	// ради выигрыша, который нужен изредка. С форой двойная плата случается
	// только тогда, когда основная и правда задумалась.
	hedgeDelay = 12 * time.Second
)

type Client struct {
	apiKey string
	model  string
	// Запасная модель. Спрос на модели Gemini скачет, и перегруженная отвечает
	// отказом 503 за считанные секунды — этого хватает, чтобы успеть спросить
	// другую и всё-таки выдать человеку разбор.
	fallback string
	httpc    *http.Client

	// Адрес и фора вынесены в поля ради тестов: настоящий Gemini в них не
	// нужен, а ждать двенадцать секунд в тесте незачем.
	endpoint string
	hedge    time.Duration
}

func New(apiKey, model, fallback string) *Client {
	return &Client{
		apiKey:   apiKey,
		model:    model,
		fallback: fallback,
		// Срок держим на попытке, а не на клиенте: у клиента он один на всё.
		httpc:    &http.Client{},
		endpoint: endpoint,
		hedge:    hedgeDelay,
	}
}

type askResult struct {
	model string
	body  []byte
	err   error
}

// ask спрашивает основную модель, а если та не отвечает — подключает к ней
// запасную и берёт ответ, пришедший первым.
//
// Раньше модели опрашивались по очереди, и запасная вступала только после
// отказа основной. Но у Gemini бывает не отказ, а молчание: обе попытки
// упирались в свой срок, человек ждал восемьдесят секунд и не получал ничего.
// Здесь молчание больше не стоит целой попытки — запасная уже в пути.
func (c *Client) ask(ctx context.Context, raw []byte) ([]byte, error) {
	models := []string{c.model}
	if c.fallback != "" && c.fallback != c.model {
		models = append(models, c.fallback)
	}

	// Отмена по выходу гасит проигравший запрос: ответ, который уже не нужен,
	// не должен занимать соединение и тратить квоту.
	ctx, cancel := context.WithCancel(ctx)
	defer cancel()

	out := make(chan askResult, len(models))
	// Закрывается, когда основная отвалилась раньше форы. Ждать оставшееся
	// время после её отказа незачем — запасную можно спрашивать сразу.
	boost := make(chan struct{})
	var boostOnce sync.Once

	for i, m := range models {
		go func(i int, m string) {
			if i > 0 {
				select {
				case <-time.After(c.hedge):
				case <-boost:
				case <-ctx.Done():
					// Основная успела ответить: запасную не спрашиваем вовсе.
					out <- askResult{model: m, err: ctx.Err()}
					return
				}
			}
			body, status, err := c.askOnce(ctx, m, raw)
			var res askResult
			switch {
			case err != nil:
				res = askResult{m, nil, fmt.Errorf("запрос к Gemini (%s): %w", m, err)}
			case status == http.StatusOK:
				res = askResult{m, body, nil}
			default:
				res = askResult{m, nil, fmt.Errorf("Gemini (%s) ответил %d: %s",
					m, status, truncate(string(body), 400))}
			}
			if i == 0 && res.err != nil {
				boostOnce.Do(func() { close(boost) })
			}
			out <- res
		}(i, m)
	}

	var last error
	for range models {
		r := <-out
		if r.err == nil {
			slog.Info("разбор получен", "model", r.model)
			return r.body, nil
		}
		last = r.err
		slog.Warn("модель не ответила", "model", r.model, "err", r.err)
	}
	return nil, last
}

func (c *Client) askOnce(ctx context.Context, model string, raw []byte) ([]byte, int, error) {
	ctx, cancel := context.WithTimeout(ctx, attemptTimeout)
	defer cancel()

	req, err := http.NewRequestWithContext(ctx, http.MethodPost,
		fmt.Sprintf(c.endpoint, model), bytes.NewReader(raw))
	if err != nil {
		return nil, 0, err
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("x-goog-api-key", c.apiKey)

	resp, err := c.httpc.Do(req)
	if err != nil {
		return nil, 0, err
	}
	defer resp.Body.Close()
	body, _ := io.ReadAll(io.LimitReader(resp.Body, 1<<20))
	return body, resp.StatusCode, nil
}

// Язык ответа: модель пишет отчёт на языке пользователя, а не на языке промта.
// Так переводить отчёты таблицей не нужно — они и так порождаются на нужном языке.
var langNames = map[string]string{
	"ru": "русском", "en": "English", "de": "German", "es": "Spanish",
	"fr": "French", "pt": "Portuguese", "it": "Italian", "pl": "Polish",
	"tr": "Turkish", "nl": "Dutch", "zh": "Chinese (Simplified)",
	"ja": "Japanese", "ko": "Korean", "ar": "Arabic",
}

func langInstruction(lang string) string {
	if lang == "" || lang == "ru" {
		return ""
	}
	name, ok := langNames[lang]
	if !ok {
		return ""
	}
	return "\n\nВЕСЬ текст отчёта (названия причин, объяснения, советы, вопросы механику) " +
		"пиши на языке: " + name + ". Термины поясняй так же просто, как в русском варианте. " +
		"Единственное исключение — служебное поле causes_ru: там названия причин " +
		"из causes продублируй по-русски, в том же порядке и количестве."
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
- Причины в causes — это ВЕРСИИ ОДНОГО звука, а не список разных неисправностей. Они исключают
  друг друга, поэтому вероятности и делят сотню: «либо изношен подшипник, либо шумит резина».
  Не складывай в этот список независимые дефекты — для них есть отдельное поле.
- Поле other_sounds — другие отчётливо слышные в записи звуки, не относящиеся к разбираемому.
  Заполняй, только если в записи РЕАЛЬНО слышен ещё один самостоятельный звук другой природы
  (например, разбирается стук подвески, а фоном отчётливо свистит ремень). Одна фраза на звук:
  что слышно и что это обычно значит. Не больше трёх. Не дублируй сюда версии из causes и не
  выдумывай: пустой список — нормальный и частый случай.
- Поле no_fault — отдельный вердикт «в записи отклонений не слышно». Ставь true ТОЛЬКО когда
  выполнено всё сразу:
  1) запись внятная: машина слышна отчётливо, уровень достаточный, посторонний шум не забивает звук;
  2) в звуке нет ни стуков, ни скрипов, ни гула, ни свиста, ни детонации, ни неровного ритма —
     работа агрегатов ровная и соответствует норме для этой модели, возраста и пробега;
  3) ответы анкеты не описывают явную неисправность, которую ты слышать не можешь (например,
     звук только на скорости, а запись сделана на месте).
  Во всех остальных случаях no_fault = false. Не используй его как способ уйти от неуверенности:
  когда запись плохая или данных мало — это НЕ «всё в порядке», а честное «разобрать не удалось»,
  так и напиши в отчёте обычными причинами и низкими вероятностями. Пропустить неисправность
  опаснее, чем назвать лишнюю версию.
- Если no_fault = true: causes оставь пустым, urgency = "ok", в urgency_reason объясни, что
  отклонений в этой записи не слышно, а звук мог не попасть в неё — и это вердикт про запись,
  а не заключение об исправности машины. В mechanic_brief подскажи, при каких условиях повторить
  запись, если звук появляется не всегда.
- Ответы анкеты — главный сигнал. Аудио и DSP-признаки — уточняющие. Признакам с пометкой low не
  доверяй, med используй осторожно.
- Если запись неинформативна (низкий SNR, тишина, разговор, ветер) — прямо скажи об этом в отчёте
  и опирайся на анкету.
- Если ответов анкеты нет (пользователь сразу записал звук, не проходя опросник) — опирайся на
  аудио, DSP-признаки и типовые болячки модели. Вероятности в этом случае делай заметно скромнее
  и в mechanic_brief предложи пройти опросник в приложении для уточнения.
- Поле audio_is_car заполняй честно: true, если в записи слышен автомобиль (двигатель, ходовая,
  тормоза — хотя бы фоном); false, если запись явно о другом (речь, музыка, помещение, улица без
  машины, тишина). В audio_note одной фразой опиши, что реально слышно. Диагноз по записи, где
  машины нет, не выдумывай: при отсутствии анкеты такой отчёт не будет показан пользователю,
  а при наличии анкеты строй выводы только по ней и прямо скажи об этом.
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
		"audio_is_car": map[string]any{"type": "boolean"},
		"audio_note":   map[string]any{"type": "string"},
		"no_fault":     map[string]any{"type": "boolean"},
		"other_sounds": map[string]any{
			"type":  "array",
			"items": map[string]any{"type": "string"},
		},
		// Названия причин по-русски. Пользователю не показываются: по ним
		// сервер подбирает схему узла, а таблица подбора — русская. Без этого
		// поля у всех нерусских языков схема просто не находилась.
		"causes_ru": map[string]any{
			"type":  "array",
			"items": map[string]any{"type": "string"},
		},
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
	"required": []string{"audio_is_car", "audio_note", "no_fault", "other_sounds", "causes", "causes_ru", "urgency", "urgency_reason", "mechanic_brief", "mechanic_questions", "red_flags", "disclaimer"},
}

func (c *Client) Analyze(ctx context.Context, meta report.Meta, features dsp.Features, audioWav []byte) (report.Report, report.Usage, error) {
	userText, err := buildUserText(meta, features)
	if err != nil {
		return report.Report{}, report.Usage{}, fmt.Errorf("сборка запроса: %w", err)
	}

	body := map[string]any{
		"system_instruction": map[string]any{
			"parts": []any{map[string]any{"text": systemPrompt + langInstruction(meta.Lang)}},
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
		return report.Report{}, report.Usage{}, err
	}

	respBody, err := c.ask(ctx, raw)
	if err != nil {
		return report.Report{}, report.Usage{}, err
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
		UsageMetadata struct {
			PromptTokenCount     int `json:"promptTokenCount"`
			CandidatesTokenCount int `json:"candidatesTokenCount"`
			TotalTokenCount      int `json:"totalTokenCount"`
			// Разбивка по типам: звук тарифицируется отдельно от текста.
			PromptTokensDetails []struct {
				Modality   string `json:"modality"`
				TokenCount int    `json:"tokenCount"`
			} `json:"promptTokensDetails"`
		} `json:"usageMetadata"`
	}
	if err := json.Unmarshal(respBody, &parsed); err != nil {
		return report.Report{}, report.Usage{}, fmt.Errorf("ответ Gemini не разобрался: %w", err)
	}
	if len(parsed.Candidates) == 0 || len(parsed.Candidates[0].Content.Parts) == 0 {
		return report.Report{}, report.Usage{}, fmt.Errorf("в ответе Gemini нет кандидатов: %s", truncate(string(respBody), 400))
	}

	usage := report.Usage{
		PromptTokens: parsed.UsageMetadata.PromptTokenCount,
		OutputTokens: parsed.UsageMetadata.CandidatesTokenCount,
		Total:        parsed.UsageMetadata.TotalTokenCount,
	}
	for _, d := range parsed.UsageMetadata.PromptTokensDetails {
		if d.Modality == "AUDIO" {
			usage.AudioTokens = d.TokenCount
			usage.PromptTokens -= d.TokenCount // в promptTokenCount звук уже учтён
		}
	}

	var full struct {
		report.Report
		AudioIsCar *bool  `json:"audio_is_car"`
		AudioNote  string `json:"audio_note"`
		// В самой Report это поле помечено json:"-", чтобы не уезжать клиенту,
		// поэтому из ответа модели читаем его здесь.
		CausesRu []string `json:"causes_ru"`
	}
	text := parsed.Candidates[0].Content.Parts[0].Text
	if err := json.Unmarshal([]byte(text), &full); err != nil {
		return report.Report{}, report.Usage{}, fmt.Errorf("отчёт не соответствует схеме: %w", err)
	}
	rep := full.Report
	rep.CausesRu = full.CausesRu
	// Запись не про автомобиль и анкеты нет — честный отказ вместо
	// выдуманного диагноза; хендлер вернёт 422 и попытку лимита.
	if full.AudioIsCar != nil && !*full.AudioIsCar && len(meta.Answers) == 0 {
		return report.Report{}, report.Usage{}, &ErrAudioNotCar{Note: full.AudioNote}
	}
	if err := validate(rep); err != nil {
		return report.Report{}, report.Usage{}, err
	}
	if rep.Disclaimer == "" {
		rep.Disclaimer = report.Disclaimer
	}
	return rep, usage, nil
}

func validate(r report.Report) error {
	// Вердикт «отклонений не слышно» — единственный случай без причин.
	// Держим его строго: причины при нём быть не должно, срочность только "ok".
	// Иначе модель начнёт смешивать «всё хорошо» с найденной неисправностью,
	// и человек увидит спокойный экран поверх настоящей проблемы.
	if r.NoFault {
		if len(r.Causes) > 0 {
			return fmt.Errorf("no_fault вместе с %d причинами", len(r.Causes))
		}
		if r.Urgency != "ok" {
			return fmt.Errorf("no_fault при urgency %q", r.Urgency)
		}
		if r.UrgencyReason == "" {
			return fmt.Errorf("no_fault без объяснения")
		}
		if len(r.OtherSounds) > 3 {
			return fmt.Errorf("в отчёте %d посторонних звуков", len(r.OtherSounds))
		}
		return nil
	}
	if len(r.Causes) < 1 || len(r.Causes) > 6 {
		return fmt.Errorf("в отчёте %d причин", len(r.Causes))
	}
	// Больше трёх посторонних звуков — признак того, что модель ссыпала туда
	// версии вместо отдельных находок.
	if len(r.OtherSounds) > 3 {
		return fmt.Errorf("в отчёте %d посторонних звуков", len(r.OtherSounds))
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
