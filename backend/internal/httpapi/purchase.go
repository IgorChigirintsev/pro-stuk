package httpapi

import (
	"context"
	"encoding/json"
	"errors"
	"net/http"

	"stuk/backend/internal/account"
	"stuk/backend/internal/billing"
)

// StoreVerifier спрашивает у магазина, была ли покупка на самом деле.
// Интерфейс нужен, чтобы подставлять поддельный магазин в тестах и чтобы
// Apple встал рядом с Google без правки этой ручки.
type StoreVerifier interface {
	Verify(ctx context.Context, productID, purchaseToken string) error
}

type purchaseRequest struct {
	// Платформа: google или apple.
	Platform string `json:"platform"`
	// Идентификатор товара из магазина.
	ProductID string `json:"product_id"`
	// Чек: у Google это purchaseToken, у Apple — подписанная транзакция.
	PurchaseToken string `json:"purchase_token"`
	// Место, для которого покупали проверки. Для пакета мест не нужен.
	SlotID string `json:"slot_id,omitempty"`
}

// handlePurchase проверяет чек в магазине и начисляет купленное.
//
// Порядок именно такой: сначала магазин, потом начисление. Обратный порядок
// означал бы, что достаточно прислать выдуманный чек и успеть потратить
// проверки до сверки.
func (s *Server) handlePurchase(w http.ResponseWriter, r *http.Request) {
	acc, ok := s.withAccount(w, r)
	if !ok {
		return
	}
	var req purchaseRequest
	if err := json.NewDecoder(http.MaxBytesReader(w, r.Body, 64<<10)).Decode(&req); err != nil {
		writeCodedError(w, http.StatusUnprocessableEntity, "bad_request", "Запрос повреждён.")
		return
	}
	if req.ProductID == "" || req.PurchaseToken == "" {
		writeCodedError(w, http.StatusUnprocessableEntity, "bad_request", "В запросе нет товара или чека.")
		return
	}

	verifier := s.stores[req.Platform]
	if verifier == nil {
		// Магазин не настроен — отказываем, а не начисляем на веру.
		writeCodedError(w, http.StatusServiceUnavailable, "store_off",
			"Покупки временно недоступны, деньги не списаны.")
		return
	}
	if err := verifier.Verify(r.Context(), req.ProductID, req.PurchaseToken); err != nil {
		if errors.Is(err, billing.ErrNotPurchased) {
			writeCodedError(w, http.StatusPaymentRequired, "not_purchased",
				"Магазин не подтвердил покупку.")
			return
		}
		// Сеть или магазин подвели: покупка настоящая, но проверить сейчас
		// нечем. Приложение повторит запрос позже — чек у него сохранён.
		writeCodedError(w, http.StatusServiceUnavailable, "verify_later",
			"Не удалось проверить покупку, попробуем ещё раз чуть позже.")
		return
	}

	updated, err := s.accounts.Update(acc.ID, func(a *account.Account) error {
		return a.Grant(req.PurchaseToken, req.ProductID, req.SlotID)
	})
	if err != nil {
		writeAccountError(w, err)
		return
	}
	writeJSON(w, http.StatusOK, updated)
}
