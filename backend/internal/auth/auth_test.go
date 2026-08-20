package auth

import (
	"context"
	"crypto/rand"
	"crypto/rsa"
	"encoding/base64"
	"encoding/json"
	"errors"
	"math/big"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

const kid = "test-key"

// Издателя подменяем локальным сервером: проверять надо свою логику, а не
// доступность Google из тестов.
func setup(t *testing.T) (*Verifier, *rsa.PrivateKey, *httptest.Server) {
	t.Helper()
	key, err := rsa.GenerateKey(rand.Reader, 2048)
	if err != nil {
		t.Fatal(err)
	}
	srv := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		json.NewEncoder(w).Encode(map[string]any{"keys": []map[string]string{{
			"kid": kid,
			"kty": "RSA",
			"n":   base64.RawURLEncoding.EncodeToString(key.N.Bytes()),
			"e":   base64.RawURLEncoding.EncodeToString(big.NewInt(int64(key.E)).Bytes()),
		}}})
	}))
	t.Cleanup(srv.Close)

	v := New("web-client-id", "chigirintsevandco.prostuk")
	v.google = &jwks{url: srv.URL}
	v.apple = &jwks{url: srv.URL}
	return v, key, srv
}

func sign(t *testing.T, key *rsa.PrivateKey, claims jwt.MapClaims) string {
	t.Helper()
	tok := jwt.NewWithClaims(jwt.SigningMethodRS256, claims)
	tok.Header["kid"] = kid
	s, err := tok.SignedString(key)
	if err != nil {
		t.Fatal(err)
	}
	return s
}

func googleClaims() jwt.MapClaims {
	return jwt.MapClaims{
		"iss": "https://accounts.google.com",
		"aud": "web-client-id",
		"sub": "google-user-42",
		"exp": time.Now().Add(time.Hour).Unix(),
	}
}

func TestGoogleAcceptsValidToken(t *testing.T) {
	v, key, _ := setup(t)
	sub, err := v.Google(context.Background(), sign(t, key, googleClaims()))
	if err != nil {
		t.Fatal(err)
	}
	if sub != "google-user-42" {
		t.Fatalf("получен субъект %q", sub)
	}
}

func TestAppleAcceptsValidToken(t *testing.T) {
	v, key, _ := setup(t)
	sub, err := v.Apple(context.Background(), sign(t, key, jwt.MapClaims{
		"iss": "https://appleid.apple.com",
		"aud": "chigirintsevandco.prostuk",
		"sub": "apple-user-7",
		"exp": time.Now().Add(time.Hour).Unix(),
	}))
	if err != nil {
		t.Fatal(err)
	}
	if sub != "apple-user-7" {
		t.Fatalf("получен субъект %q", sub)
	}
}

// Токен, выданный другому приложению, открыл бы чужой гараж тому же человеку.
func TestRejectsForeignAudience(t *testing.T) {
	v, key, _ := setup(t)
	c := googleClaims()
	c["aud"] = "чужое-приложение"
	if _, err := v.Google(context.Background(), sign(t, key, c)); !errors.Is(err, ErrToken) {
		t.Fatalf("принят токен для чужого получателя: %v", err)
	}
}

func TestRejectsForeignIssuer(t *testing.T) {
	v, key, _ := setup(t)
	c := googleClaims()
	c["iss"] = "https://зло.example"
	if _, err := v.Google(context.Background(), sign(t, key, c)); !errors.Is(err, ErrToken) {
		t.Fatalf("принят токен чужого издателя: %v", err)
	}
}

func TestRejectsExpired(t *testing.T) {
	v, key, _ := setup(t)
	c := googleClaims()
	c["exp"] = time.Now().Add(-time.Minute).Unix()
	if _, err := v.Google(context.Background(), sign(t, key, c)); !errors.Is(err, ErrToken) {
		t.Fatalf("принят просроченный токен: %v", err)
	}
}

// Токен без срока живёт вечно — украденный однажды работал бы всегда.
func TestRejectsWithoutExpiry(t *testing.T) {
	v, key, _ := setup(t)
	c := googleClaims()
	delete(c, "exp")
	if _, err := v.Google(context.Background(), sign(t, key, c)); !errors.Is(err, ErrToken) {
		t.Fatalf("принят бессрочный токен: %v", err)
	}
}

func TestRejectsForeignKey(t *testing.T) {
	v, _, _ := setup(t)
	other, err := rsa.GenerateKey(rand.Reader, 2048)
	if err != nil {
		t.Fatal(err)
	}
	if _, err := v.Google(context.Background(), sign(t, other, googleClaims())); !errors.Is(err, ErrToken) {
		t.Fatalf("принят токен, подписанный чужим ключом: %v", err)
	}
}

// Классическая подмена алгоритма: подписать HS256, выдав публичный ключ
// издателя за общий секрет. Без списка разрешённых методов проходит.
func TestRejectsAlgorithmSwap(t *testing.T) {
	v, key, _ := setup(t)
	tok := jwt.NewWithClaims(jwt.SigningMethodHS256, googleClaims())
	tok.Header["kid"] = kid
	s, err := tok.SignedString(key.N.Bytes())
	if err != nil {
		t.Fatal(err)
	}
	if _, err := v.Google(context.Background(), s); !errors.Is(err, ErrToken) {
		t.Fatalf("принята подмена алгоритма: %v", err)
	}
}

func TestRejectsGarbage(t *testing.T) {
	v, _, _ := setup(t)
	for _, s := range []string{"", "не токен", strings.Repeat("a.", 3)} {
		if _, err := v.Google(context.Background(), s); err == nil {
			t.Fatalf("мусор %q принят за токен", s)
		}
	}
}

// Без настроенного получателя вход должен отказывать, а не пропускать всех.
func TestRefusesWithoutAudience(t *testing.T) {
	v := New("", "")
	if _, err := v.Google(context.Background(), "x"); !errors.Is(err, ErrToken) {
		t.Fatal("вход работает без настроенного веб-клиента")
	}
	if _, err := v.Apple(context.Background(), "x"); !errors.Is(err, ErrToken) {
		t.Fatal("вход работает без настроенного bundle id")
	}
}

// Ключи издателя тянутся один раз, а не на каждый вход.
func TestKeysAreCached(t *testing.T) {
	key, err := rsa.GenerateKey(rand.Reader, 2048)
	if err != nil {
		t.Fatal(err)
	}
	hits := 0
	srv := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		hits++
		json.NewEncoder(w).Encode(map[string]any{"keys": []map[string]string{{
			"kid": kid, "kty": "RSA",
			"n": base64.RawURLEncoding.EncodeToString(key.N.Bytes()),
			"e": base64.RawURLEncoding.EncodeToString(big.NewInt(int64(key.E)).Bytes()),
		}}})
	}))
	defer srv.Close()

	v := New("web-client-id", "b")
	v.google = &jwks{url: srv.URL}
	for i := 0; i < 5; i++ {
		if _, err := v.Google(context.Background(), sign(t, key, googleClaims())); err != nil {
			t.Fatal(err)
		}
	}
	if hits != 1 {
		t.Fatalf("ключи запрошены %d раз вместо одного", hits)
	}
}
