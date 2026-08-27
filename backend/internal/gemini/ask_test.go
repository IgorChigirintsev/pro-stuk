package gemini

import (
	"context"
	"fmt"
	"net/http"
	"net/http/httptest"
	"strings"
	"sync/atomic"
	"testing"
	"time"
)

// Поддельный Gemini: отвечает по-разному в зависимости от модели в адресе
// и считает, к кому обращались.
type fakeGemini struct {
	srv   *httptest.Server
	hits  map[string]*int32
	reply map[string]func() (int, string)
}

func newFakeGemini(t *testing.T, reply map[string]func() (int, string)) *fakeGemini {
	t.Helper()
	f := &fakeGemini{hits: map[string]*int32{}, reply: reply}
	for m := range reply {
		var n int32
		f.hits[m] = &n
	}
	f.srv = httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Путь вида /v1beta/models/<модель>:generateContent
		part := strings.TrimPrefix(r.URL.Path, "/v1beta/models/")
		model := strings.TrimSuffix(part, ":generateContent")
		fn, ok := f.reply[model]
		if !ok {
			w.WriteHeader(http.StatusNotFound)
			return
		}
		atomic.AddInt32(f.hits[model], 1)

		// Ответ может быть отложенным; если клиент за это время передумал,
		// уважаем отмену — настоящий сервер поведёт себя так же.
		done := make(chan struct{})
		var status int
		var body string
		go func() { status, body = fn(); close(done) }()
		select {
		case <-done:
		case <-r.Context().Done():
			return
		}
		w.WriteHeader(status)
		fmt.Fprint(w, body)
	}))
	t.Cleanup(f.srv.Close)
	return f
}

func (f *fakeGemini) client(model, fallback string, hedge time.Duration) *Client {
	return &Client{
		apiKey:   "тест",
		model:    model,
		fallback: fallback,
		httpc:    &http.Client{},
		endpoint: f.srv.URL + "/v1beta/models/%s:generateContent",
		hedge:    hedge,
	}
}

func (f *fakeGemini) count(model string) int32 { return atomic.LoadInt32(f.hits[model]) }

func ok(body string) func() (int, string) {
	return func() (int, string) { return http.StatusOK, body }
}

func slowOK(d time.Duration, body string) func() (int, string) {
	return func() (int, string) { time.Sleep(d); return http.StatusOK, body }
}

func fail(status int, body string) func() (int, string) {
	return func() (int, string) { return status, body }
}

// Основная ответила быстро — запасную не трогаем вовсе. Это главное, ради
// чего у форы вообще есть длительность: звук в токенах дорог.
func TestAskFastPrimaryLeavesFallbackAlone(t *testing.T) {
	f := newFakeGemini(t, map[string]func() (int, string){
		"main":  ok(`{"из":"основной"}`),
		"spare": ok(`{"из":"запасной"}`),
	})
	c := f.client("main", "spare", 200*time.Millisecond)

	body, err := c.ask(context.Background(), []byte("{}"))
	if err != nil {
		t.Fatal(err)
	}
	if string(body) != `{"из":"основной"}` {
		t.Fatalf("взят не тот ответ: %s", body)
	}
	// Даём форе истечь: если бы запасная всё-таки ушла, счётчик вырос бы.
	time.Sleep(400 * time.Millisecond)
	if n := f.count("spare"); n != 0 {
		t.Fatalf("запасную спросили %d раз, а она была не нужна", n)
	}
}

// Основная молчит — запасная подключается по форе, и ответ приходит от неё,
// не дожидаясь, пока основная упрётся в свой срок.
func TestAskSlowPrimaryYieldsToFallback(t *testing.T) {
	f := newFakeGemini(t, map[string]func() (int, string){
		"main":  slowOK(3*time.Second, `{"из":"основной"}`),
		"spare": ok(`{"из":"запасной"}`),
	})
	c := f.client("main", "spare", 100*time.Millisecond)

	start := time.Now()
	body, err := c.ask(context.Background(), []byte("{}"))
	took := time.Since(start)
	if err != nil {
		t.Fatal(err)
	}
	if string(body) != `{"из":"запасной"}` {
		t.Fatalf("взят не тот ответ: %s", body)
	}
	if took > time.Second {
		t.Fatalf("ждали %v — значит дожидались основную, а не взяли первый ответ", took)
	}
}

// Быстрый отказ основной не должен стоить целой форы: запасная уходит сразу.
func TestAskPrimaryRefusalStartsFallbackAtOnce(t *testing.T) {
	f := newFakeGemini(t, map[string]func() (int, string){
		"main":  fail(http.StatusServiceUnavailable, `{"error":"перегружена"}`),
		"spare": ok(`{"из":"запасной"}`),
	})
	c := f.client("main", "spare", 10*time.Second)

	start := time.Now()
	body, err := c.ask(context.Background(), []byte("{}"))
	took := time.Since(start)
	if err != nil {
		t.Fatal(err)
	}
	if string(body) != `{"из":"запасной"}` {
		t.Fatalf("взят не тот ответ: %s", body)
	}
	if took > 2*time.Second {
		t.Fatalf("ждали %v — фора не была прервана отказом основной", took)
	}
}

// Обе отказали — наружу уходит ошибка, а не пустой отчёт.
func TestAskBothFail(t *testing.T) {
	f := newFakeGemini(t, map[string]func() (int, string){
		"main":  fail(http.StatusServiceUnavailable, `{"error":"перегружена"}`),
		"spare": fail(http.StatusServiceUnavailable, `{"error":"тоже"}`),
	})
	c := f.client("main", "spare", 50*time.Millisecond)

	if _, err := c.ask(context.Background(), []byte("{}")); err == nil {
		t.Fatal("отказ обеих моделей выдан за успех")
	}
}

// Без запасной модели поведение прежнее: одна попытка, одна ошибка.
func TestAskWithoutFallback(t *testing.T) {
	f := newFakeGemini(t, map[string]func() (int, string){
		"main": ok(`{"из":"основной"}`),
	})
	c := f.client("main", "", time.Second)

	body, err := c.ask(context.Background(), []byte("{}"))
	if err != nil || string(body) != `{"из":"основной"}` {
		t.Fatalf("ответ %s, ошибка %v", body, err)
	}
}
