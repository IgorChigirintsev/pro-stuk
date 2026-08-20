// Пакет auth — проверка токенов входа Google и Apple.
//
// Приложение получает токен у системы и присылает его сюда. Сервер обязан
// проверить подпись сам: клиент мог быть подменён, а «я вошёл как такой-то»
// без проверки — это просто строка, которую печатает кто угодно.
//
// Проверяется четыре вещи, и каждая закрывает свою дыру:
//   - подпись ключом магазина — токен не выдуман;
//   - издатель (iss) — токен выдан Google или Apple, а не третьей стороной;
//   - получатель (aud) — токен выдан нашему приложению, а не чужому,
//     иначе любое приложение с тем же пользователем открывало бы его гараж;
//   - срок (exp) — токен не украден когда-то давно.
package auth

import (
	"context"
	"crypto/rsa"
	"encoding/base64"
	"encoding/json"
	"errors"
	"fmt"
	"math/big"
	"net/http"
	"sync"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

const (
	googleJWKS  = "https://www.googleapis.com/oauth2/v3/certs"
	appleJWKS   = "https://appleid.apple.com/auth/keys"
	appleIssuer = "https://appleid.apple.com"
)

// Google выдаёт издателя в двух написаниях исторически.
var googleIssuers = []string{"https://accounts.google.com", "accounts.google.com"}

var ErrToken = errors.New("токен входа не принят")

// Verifier проверяет токены обоих магазинов.
type Verifier struct {
	// Идентификатор веб-клиента OAuth. Именно он стоит в aud токена,
	// который приложение получает с serverClientId.
	GoogleAudience string
	// Bundle ID приложения: для входа через Apple получателем выступает он.
	AppleAudience string

	google *jwks
	apple  *jwks
}

func New(googleAudience, appleAudience string) *Verifier {
	return &Verifier{
		GoogleAudience: googleAudience,
		AppleAudience:  appleAudience,
		google:         &jwks{url: googleJWKS},
		apple:          &jwks{url: appleJWKS},
	}
}

// Google возвращает постоянный идентификатор пользователя (sub).
func (v *Verifier) Google(ctx context.Context, token string) (string, error) {
	if v.GoogleAudience == "" {
		return "", fmt.Errorf("%w: не задан идентификатор веб-клиента", ErrToken)
	}
	return v.verify(ctx, v.google, token, v.GoogleAudience, googleIssuers)
}

// Apple возвращает постоянный идентификатор пользователя (sub).
func (v *Verifier) Apple(ctx context.Context, token string) (string, error) {
	if v.AppleAudience == "" {
		return "", fmt.Errorf("%w: не задан bundle id", ErrToken)
	}
	return v.verify(ctx, v.apple, token, v.AppleAudience, []string{appleIssuer})
}

func (v *Verifier) verify(ctx context.Context, keys *jwks, token, audience string, issuers []string) (string, error) {
	parsed, err := jwt.Parse(token,
		func(t *jwt.Token) (any, error) {
			kid, _ := t.Header["kid"].(string)
			return keys.key(ctx, kid)
		},
		// Только RSA с подписью. Без этого списка сработала бы классическая
		// подмена алгоритма: токен с alg=none или HS256, где «секретом»
		// объявлен публичный ключ.
		jwt.WithValidMethods([]string{"RS256"}),
		jwt.WithAudience(audience),
		jwt.WithExpirationRequired(),
	)
	if err != nil {
		return "", fmt.Errorf("%w: %v", ErrToken, err)
	}
	claims, ok := parsed.Claims.(jwt.MapClaims)
	if !ok {
		return "", fmt.Errorf("%w: неожиданный состав токена", ErrToken)
	}
	iss, _ := claims["iss"].(string)
	if !contains(issuers, iss) {
		return "", fmt.Errorf("%w: чужой издатель %q", ErrToken, iss)
	}
	sub, _ := claims["sub"].(string)
	if sub == "" {
		return "", fmt.Errorf("%w: в токене нет идентификатора пользователя", ErrToken)
	}
	return sub, nil
}

func contains(list []string, v string) bool {
	for _, x := range list {
		if x == v {
			return true
		}
	}
	return false
}

// jwks — публичные ключи магазина с кэшем.
//
// Ключи меняются раз в несколько недель, поэтому кэш обязателен: тянуть их
// на каждый вход значит поставить свой вход в зависимость от чужой задержки.
// Незнакомый kid обновляет кэш немедленно — так подхватывается ротация.
type jwks struct {
	url string

	mu      sync.Mutex
	keys    map[string]*rsa.PublicKey
	fetched time.Time
	client  *http.Client
}

const jwksTTL = 6 * time.Hour

func (j *jwks) key(ctx context.Context, kid string) (*rsa.PublicKey, error) {
	j.mu.Lock()
	k, ok := j.keys[kid]
	fresh := time.Since(j.fetched) < jwksTTL
	j.mu.Unlock()
	if ok && fresh {
		return k, nil
	}
	if err := j.refresh(ctx); err != nil {
		// Ключ есть, но кэш просрочен, а обновиться не вышло: лучше пустить
		// по старому ключу, чем закрыть вход всем из-за сбоя сети.
		if ok {
			return k, nil
		}
		return nil, err
	}
	j.mu.Lock()
	defer j.mu.Unlock()
	if k, ok := j.keys[kid]; ok {
		return k, nil
	}
	return nil, fmt.Errorf("ключ %q не найден у издателя", kid)
}

func (j *jwks) refresh(ctx context.Context) error {
	cl := j.client
	if cl == nil {
		cl = &http.Client{Timeout: 10 * time.Second}
	}
	req, err := http.NewRequestWithContext(ctx, http.MethodGet, j.url, nil)
	if err != nil {
		return err
	}
	resp, err := cl.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()
	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("ключи не отдались: %s", resp.Status)
	}
	var body struct {
		Keys []struct {
			Kid string `json:"kid"`
			Kty string `json:"kty"`
			N   string `json:"n"`
			E   string `json:"e"`
		} `json:"keys"`
	}
	if err := json.NewDecoder(resp.Body).Decode(&body); err != nil {
		return err
	}
	keys := map[string]*rsa.PublicKey{}
	for _, k := range body.Keys {
		if k.Kty != "RSA" {
			continue
		}
		n, err := base64.RawURLEncoding.DecodeString(k.N)
		if err != nil {
			continue
		}
		e, err := base64.RawURLEncoding.DecodeString(k.E)
		if err != nil {
			continue
		}
		keys[k.Kid] = &rsa.PublicKey{
			N: new(big.Int).SetBytes(n),
			E: int(new(big.Int).SetBytes(e).Int64()),
		}
	}
	if len(keys) == 0 {
		return errors.New("издатель не отдал ни одного ключа")
	}
	j.mu.Lock()
	j.keys = keys
	j.fetched = time.Now()
	j.mu.Unlock()
	return nil
}
