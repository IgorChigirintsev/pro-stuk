package billing

import (
	"bytes"
	"context"
	"crypto/rsa"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"os"
	"strings"
	"sync"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

// Проверка покупок в Google Play.
//
// Приложение присылает чек, но верить ему нельзя: подделать строку «я купил
// сорок проверок» — первое, что сделает желающий. Сервер спрашивает у Google
// по своему сервисному аккаунту, была ли покупка, и только потом начисляет.
//
// Отдельно важно: запрос идёт по паре «товар + чек». Если чек был от пакета
// на пять проверок, а клиент назвал сорок, Google не найдёт такую покупку и
// ответит отказом. То есть подменить товар в запросе тоже не выйдет.

var (
	ErrNotPurchased  = errors.New("покупка не подтверждена магазином")
	ErrNoCredentials = errors.New("ключ сервисного аккаунта не настроен")
)

const (
	tokenEndpoint = "https://oauth2.googleapis.com/token"
	playAPIBase   = "https://androidpublisher.googleapis.com"
	playScope     = "https://www.googleapis.com/auth/androidpublisher"
)

// Play обращается к Google Play Developer API.
type Play struct {
	packageName string
	email       string
	key         *rsa.PrivateKey

	// Адреса вынесены в поля ради тестов: настоящий Google в них не нужен.
	tokenURL string
	apiBase  string
	client   *http.Client

	mu      sync.Mutex
	token   string
	expires time.Time
}

// NewPlay читает ключ сервисного аккаунта. Пустой путь или отсутствующий
// файл — не ошибка запуска: сервер поднимется, но покупки будет отклонять,
// а не начислять вслепую.
func NewPlay(credentialsFile, packageName string) (*Play, error) {
	if credentialsFile == "" {
		return nil, ErrNoCredentials
	}
	raw, err := os.ReadFile(credentialsFile)
	if err != nil {
		return nil, fmt.Errorf("%w: %v", ErrNoCredentials, err)
	}
	var creds struct {
		Type        string `json:"type"`
		ClientEmail string `json:"client_email"`
		PrivateKey  string `json:"private_key"`
	}
	if err := json.Unmarshal(raw, &creds); err != nil {
		return nil, fmt.Errorf("%w: файл ключа не разобрался: %v", ErrNoCredentials, err)
	}
	if creds.Type != "service_account" || creds.ClientEmail == "" || creds.PrivateKey == "" {
		return nil, fmt.Errorf("%w: это не ключ сервисного аккаунта", ErrNoCredentials)
	}
	key, err := jwt.ParseRSAPrivateKeyFromPEM([]byte(creds.PrivateKey))
	if err != nil {
		return nil, fmt.Errorf("%w: приватный ключ не читается: %v", ErrNoCredentials, err)
	}
	return &Play{
		packageName: packageName,
		email:       creds.ClientEmail,
		key:         key,
		tokenURL:    tokenEndpoint,
		apiBase:     playAPIBase,
		client:      &http.Client{Timeout: 15 * time.Second},
	}, nil
}

// accessToken меняет подписанный JWT на токен доступа и держит его до
// истечения: у Google он живёт час, и просить новый на каждую покупку значит
// удваивать число сетевых обращений на ровном месте.
func (p *Play) accessToken(ctx context.Context) (string, error) {
	p.mu.Lock()
	if p.token != "" && time.Now().Before(p.expires) {
		t := p.token
		p.mu.Unlock()
		return t, nil
	}
	p.mu.Unlock()

	now := time.Now()
	claims := jwt.MapClaims{
		"iss":   p.email,
		"scope": playScope,
		"aud":   p.tokenURL,
		"iat":   now.Unix(),
		"exp":   now.Add(time.Hour).Unix(),
	}
	assertion, err := jwt.NewWithClaims(jwt.SigningMethodRS256, claims).SignedString(p.key)
	if err != nil {
		return "", err
	}
	form := url.Values{
		"grant_type": {"urn:ietf:params:oauth:grant-type:jwt-bearer"},
		"assertion":  {assertion},
	}
	req, err := http.NewRequestWithContext(ctx, http.MethodPost, p.tokenURL,
		strings.NewReader(form.Encode()))
	if err != nil {
		return "", err
	}
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
	resp, err := p.client.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()
	body, _ := io.ReadAll(io.LimitReader(resp.Body, 1<<20))
	if resp.StatusCode != http.StatusOK {
		return "", fmt.Errorf("Google не выдал токен доступа: %s: %s", resp.Status, body)
	}
	var out struct {
		AccessToken string `json:"access_token"`
		ExpiresIn   int    `json:"expires_in"`
	}
	if err := json.Unmarshal(body, &out); err != nil {
		return "", err
	}
	if out.AccessToken == "" {
		return "", errors.New("Google вернул пустой токен доступа")
	}
	p.mu.Lock()
	p.token = out.AccessToken
	// Минута запаса: токен не должен протухнуть в полёте запроса.
	p.expires = time.Now().Add(time.Duration(out.ExpiresIn)*time.Second - time.Minute)
	p.mu.Unlock()
	return out.AccessToken, nil
}

type playPurchase struct {
	PurchaseState        int    `json:"purchaseState"`
	ConsumptionState     int    `json:"consumptionState"`
	AcknowledgementState int    `json:"acknowledgementState"`
	OrderID              string `json:"orderId"`
}

// Verify проверяет покупку и подтверждает её получение.
//
// Подтверждение обязательно: неподтверждённую покупку Google возвращает
// покупателю через три дня. Человек заплатит, получит проверки, а деньги
// уйдут обратно — и это будет выглядеть как наша ошибка.
func (p *Play) Verify(ctx context.Context, productID, purchaseToken string) error {
	access, err := p.accessToken(ctx)
	if err != nil {
		return err
	}
	base := fmt.Sprintf("%s/androidpublisher/v3/applications/%s/purchases/products/%s/tokens/%s",
		p.apiBase, url.PathEscape(p.packageName), url.PathEscape(productID), url.PathEscape(purchaseToken))

	req, err := http.NewRequestWithContext(ctx, http.MethodGet, base, nil)
	if err != nil {
		return err
	}
	req.Header.Set("Authorization", "Bearer "+access)
	resp, err := p.client.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()
	body, _ := io.ReadAll(io.LimitReader(resp.Body, 1<<20))
	if resp.StatusCode == http.StatusNotFound {
		// Такой пары «товар + чек» у Google нет: чек выдуман или назван
		// чужой товар.
		return fmt.Errorf("%w: покупка не найдена", ErrNotPurchased)
	}
	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("Google не ответил по покупке: %s: %s", resp.Status, body)
	}
	var pur playPurchase
	if err := json.Unmarshal(body, &pur); err != nil {
		return err
	}
	// 0 — оплачено. 1 — отменено, 2 — ожидает оплаты (например, наличными
	// в терминале). Начислять в обоих последних случаях нельзя.
	if pur.PurchaseState != 0 {
		return fmt.Errorf("%w: состояние %d", ErrNotPurchased, pur.PurchaseState)
	}

	if pur.AcknowledgementState == 0 {
		if err := p.acknowledge(ctx, access, productID, purchaseToken); err != nil {
			return err
		}
	}
	return nil
}

func (p *Play) acknowledge(ctx context.Context, access, productID, purchaseToken string) error {
	u := fmt.Sprintf("%s/androidpublisher/v3/applications/%s/purchases/products/%s/tokens/%s:acknowledge",
		p.apiBase, url.PathEscape(p.packageName), url.PathEscape(productID), url.PathEscape(purchaseToken))
	req, err := http.NewRequestWithContext(ctx, http.MethodPost, u, bytes.NewReader([]byte("{}")))
	if err != nil {
		return err
	}
	req.Header.Set("Authorization", "Bearer "+access)
	req.Header.Set("Content-Type", "application/json")
	resp, err := p.client.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()
	body, _ := io.ReadAll(io.LimitReader(resp.Body, 1<<20))
	// 200 и 204 — подтверждено. Повторное подтверждение Google отвечает 400,
	// и это не беда: покупка уже наша.
	switch resp.StatusCode {
	case http.StatusOK, http.StatusNoContent, http.StatusBadRequest:
		return nil
	default:
		return fmt.Errorf("покупку не удалось подтвердить: %s: %s", resp.Status, body)
	}
}
