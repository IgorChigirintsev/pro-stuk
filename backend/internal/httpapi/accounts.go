package httpapi

import (
	"crypto/rand"
	"encoding/base64"
	"encoding/json"
	"errors"
	"net/http"
	"strconv"
	"time"

	"stuk/backend/internal/account"
)

// Ручки учётной записи.
//
// Приложение входит один раз и получает токен сессии. Дальше он идёт в
// заголовке Authorization: токен Google живёт около часа, и гонять его на
// каждый запрос значило бы проверять подпись по сети постоянно.
//
// Состояние отдаётся с версией. Приложение держит копию у себя и показывает
// её мгновенно, а при запуске спрашивает «версия всё ещё такая?» — если да,
// ответ пустой и ничего не качается. Устаревших данных при этом не бывает:
// всё, что стоит денег, решает сервер, а не копия в телефоне.

func newSessionToken() (string, error) {
	b := make([]byte, 32)
	if _, err := rand.Read(b); err != nil {
		return "", err
	}
	return base64.RawURLEncoding.EncodeToString(b), nil
}

type authRequest struct {
	Provider string `json:"provider"`
	Token    string `json:"token"`
}

func (s *Server) handleAuth(w http.ResponseWriter, r *http.Request) {
	var req authRequest
	if err := json.NewDecoder(http.MaxBytesReader(w, r.Body, 16<<10)).Decode(&req); err != nil {
		writeCodedError(w, http.StatusUnprocessableEntity, "bad_request", "Запрос повреждён.")
		return
	}

	var (
		subject string
		err     error
	)
	switch req.Provider {
	case "google":
		subject, err = s.verifier.Google(r.Context(), req.Token)
	case "apple":
		subject, err = s.verifier.Apple(r.Context(), req.Token)
	default:
		writeCodedError(w, http.StatusUnprocessableEntity, "bad_provider", "Неизвестный способ входа.")
		return
	}
	if err != nil {
		// Причину наружу не раскрываем: подсказывать, какая именно проверка
		// не прошла, значит помогать подбирать токен.
		writeCodedError(w, http.StatusUnauthorized, "bad_token", "Вход не подтверждён, попробуйте ещё раз.")
		return
	}

	acc, err := s.accounts.EnsureAccount(req.Provider, subject, time.Now())
	if err != nil {
		writeCodedError(w, http.StatusInternalServerError, "storage", "Не удалось открыть учётную запись.")
		return
	}
	token, err := newSessionToken()
	if err != nil {
		writeCodedError(w, http.StatusInternalServerError, "storage", "Не удалось открыть сессию.")
		return
	}
	if err := s.accounts.NewSession(acc.ID, token); err != nil {
		writeCodedError(w, http.StatusInternalServerError, "storage", "Не удалось открыть сессию.")
		return
	}
	writeJSON(w, http.StatusOK, map[string]any{"session": token, "account": acc})
}

// session достаёт запись по заголовку Authorization.
func (s *Server) session(r *http.Request) (string, account.Account, bool) {
	h := r.Header.Get("Authorization")
	const prefix = "Bearer "
	if len(h) <= len(prefix) || h[:len(prefix)] != prefix {
		return "", account.Account{}, false
	}
	token := h[len(prefix):]
	acc, err := s.accounts.BySession(token)
	if err != nil {
		return "", account.Account{}, false
	}
	return token, acc, true
}

func (s *Server) withAccount(w http.ResponseWriter, r *http.Request) (account.Account, bool) {
	_, acc, ok := s.session(r)
	if !ok {
		writeCodedError(w, http.StatusUnauthorized, "no_session", "Нужно войти заново.")
		return account.Account{}, false
	}
	return acc, true
}

// handleAccount отдаёт состояние. Параметр v — версия, которая уже есть у
// приложения: совпала, значит качать нечего.
func (s *Server) handleAccount(w http.ResponseWriter, r *http.Request) {
	acc, ok := s.withAccount(w, r)
	if !ok {
		return
	}
	if v := r.URL.Query().Get("v"); v != "" {
		if have, err := strconv.ParseInt(v, 10, 64); err == nil && have == acc.Version {
			w.WriteHeader(http.StatusNotModified)
			return
		}
	}
	writeJSON(w, http.StatusOK, acc)
}

func (s *Server) handleLogout(w http.ResponseWriter, r *http.Request) {
	token, _, ok := s.session(r)
	if !ok {
		writeCodedError(w, http.StatusUnauthorized, "no_session", "Нужно войти заново.")
		return
	}
	if err := s.accounts.DropSession(token); err != nil {
		writeCodedError(w, http.StatusInternalServerError, "storage", "Не удалось закрыть сессию.")
		return
	}
	w.WriteHeader(http.StatusNoContent)
}

type carRequest struct {
	SlotID string      `json:"slot_id"`
	Car    account.Car `json:"car"`
}

// handleCar ставит или меняет машину на месте.
//
// Правила живут в пакете account, а не здесь: сервер обязан быть единственным
// местом, где решается, можно ли подменить машину. Клиент может быть любым.
func (s *Server) handleCar(w http.ResponseWriter, r *http.Request) {
	acc, ok := s.withAccount(w, r)
	if !ok {
		return
	}
	var req carRequest
	if err := json.NewDecoder(http.MaxBytesReader(w, r.Body, 16<<10)).Decode(&req); err != nil {
		writeCodedError(w, http.StatusUnprocessableEntity, "bad_request", "Запрос повреждён.")
		return
	}
	updated, err := s.accounts.Update(acc.ID, func(a *account.Account) error {
		if r.Method == http.MethodPost {
			return a.SetCar(req.SlotID, req.Car)
		}
		return a.EditCar(req.SlotID, req.Car)
	})
	if err != nil {
		writeAccountError(w, err)
		return
	}
	writeJSON(w, http.StatusOK, updated)
}

func (s *Server) handleCarDelete(w http.ResponseWriter, r *http.Request) {
	acc, ok := s.withAccount(w, r)
	if !ok {
		return
	}
	var req carRequest
	if err := json.NewDecoder(http.MaxBytesReader(w, r.Body, 16<<10)).Decode(&req); err != nil {
		writeCodedError(w, http.StatusUnprocessableEntity, "bad_request", "Запрос повреждён.")
		return
	}
	updated, err := s.accounts.Update(acc.ID, func(a *account.Account) error {
		return a.RemoveCar(req.SlotID)
	})
	if err != nil {
		writeAccountError(w, err)
		return
	}
	writeJSON(w, http.StatusOK, updated)
}

type assignRequest struct {
	PurchaseID string `json:"purchase_id"`
	SlotID     string `json:"slot_id"`
}

// handleAssign кладёт на место проверки, купленные, но не разнесённые:
// связь могла оборваться сразу после оплаты.
func (s *Server) handleAssign(w http.ResponseWriter, r *http.Request) {
	acc, ok := s.withAccount(w, r)
	if !ok {
		return
	}
	var req assignRequest
	if err := json.NewDecoder(http.MaxBytesReader(w, r.Body, 16<<10)).Decode(&req); err != nil {
		writeCodedError(w, http.StatusUnprocessableEntity, "bad_request", "Запрос повреждён.")
		return
	}
	updated, err := s.accounts.Update(acc.ID, func(a *account.Account) error {
		return a.Assign(req.PurchaseID, req.SlotID)
	})
	if err != nil {
		writeAccountError(w, err)
		return
	}
	writeJSON(w, http.StatusOK, updated)
}

// writeAccountError переводит правила пакета account в коды, понятные
// приложению: оно показывает по ним свой текст на языке пользователя.
func writeAccountError(w http.ResponseWriter, err error) {
	switch {
	case errors.Is(err, account.ErrNoSlot):
		writeCodedError(w, http.StatusUnprocessableEntity, "no_slot", "Места с таким номером нет.")
	case errors.Is(err, account.ErrSlotLocked):
		writeCodedError(w, http.StatusConflict, "car_locked", "Эту машину уже разбирали: менять и удалять её нельзя.")
	case errors.Is(err, account.ErrSlotTaken):
		writeCodedError(w, http.StatusConflict, "slot_taken", "Место занято другой машиной.")
	case errors.Is(err, account.ErrSlotEmpty):
		writeCodedError(w, http.StatusUnprocessableEntity, "slot_empty", "На этом месте нет машины.")
	case errors.Is(err, account.ErrNoChecks):
		writeCodedError(w, http.StatusPaymentRequired, "no_checks", "На этой машине не осталось проверок.")
	case errors.Is(err, account.ErrUnknownProduct):
		writeCodedError(w, http.StatusUnprocessableEntity, "bad_product", "Неизвестный товар.")
	case errors.Is(err, account.ErrNotFound):
		writeCodedError(w, http.StatusUnauthorized, "no_session", "Нужно войти заново.")
	default:
		writeCodedError(w, http.StatusInternalServerError, "storage", "Не удалось сохранить изменения.")
	}
}
