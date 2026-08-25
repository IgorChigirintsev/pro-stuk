package billing

import (
	"context"
	"crypto/ecdsa"
	"crypto/elliptic"
	"crypto/rand"
	"crypto/sha256"
	"crypto/x509"
	"crypto/x509/pkix"
	"encoding/base64"
	"encoding/json"
	"encoding/pem"
	"errors"
	"math/big"
	"strings"
	"testing"
	"time"
)

// Своя маленькая Apple: корень, промежуточный и конечный сертификаты.
// Настоящим ключом Apple подписать нечего, поэтому проверяется механика —
// что подпись и цепочка вообще смотрятся, а не принимаются на веру.
type fakeApple struct {
	root      *x509.Certificate
	rootPool  *x509.CertPool
	interCert *x509.Certificate
	leafCert  *x509.Certificate
	leafKey   *ecdsa.PrivateKey
}

func newFakeApple(t *testing.T) *fakeApple {
	t.Helper()
	rootKey, rootCert := issue(t, nil, nil, "Тестовый корень", true)
	interKey, interCert := issue(t, rootCert, rootKey, "Тестовый промежуточный", true)
	leafKey, leafCert := issue(t, interCert, interKey, "Тестовый конечный", false)

	pool := x509.NewCertPool()
	pool.AddCert(rootCert)
	return &fakeApple{root: rootCert, rootPool: pool, interCert: interCert, leafCert: leafCert, leafKey: leafKey}
}

func issue(t *testing.T, parent *x509.Certificate, parentKey *ecdsa.PrivateKey, cn string, ca bool) (*ecdsa.PrivateKey, *x509.Certificate) {
	t.Helper()
	key, err := ecdsa.GenerateKey(elliptic.P256(), rand.Reader)
	if err != nil {
		t.Fatal(err)
	}
	tmpl := &x509.Certificate{
		SerialNumber:          big.NewInt(time.Now().UnixNano()),
		Subject:               pkix.Name{CommonName: cn},
		NotBefore:             time.Now().Add(-time.Hour),
		NotAfter:              time.Now().Add(24 * time.Hour),
		IsCA:                  ca,
		BasicConstraintsValid: true,
	}
	if ca {
		tmpl.KeyUsage = x509.KeyUsageCertSign | x509.KeyUsageDigitalSignature
	} else {
		tmpl.KeyUsage = x509.KeyUsageDigitalSignature
	}
	signer, signerKey := tmpl, key
	if parent != nil {
		signer, signerKey = parent, parentKey
	}
	der, err := x509.CreateCertificate(rand.Reader, tmpl, signer, &key.PublicKey, signerKey)
	if err != nil {
		t.Fatal(err)
	}
	cert, err := x509.ParseCertificate(der)
	if err != nil {
		t.Fatal(err)
	}
	return key, cert
}

// sign собирает подписанную транзакцию так же, как это делает Apple.
func (f *fakeApple) sign(t *testing.T, payload map[string]any) string {
	t.Helper()
	header := map[string]any{
		"alg": "ES256",
		"x5c": []string{
			base64.StdEncoding.EncodeToString(f.leafCert.Raw),
			base64.StdEncoding.EncodeToString(f.interCert.Raw),
			base64.StdEncoding.EncodeToString(f.root.Raw),
		},
	}
	h, _ := json.Marshal(header)
	p, _ := json.Marshal(payload)
	input := base64.RawURLEncoding.EncodeToString(h) + "." + base64.RawURLEncoding.EncodeToString(p)

	digest := sha256.Sum256([]byte(input))
	r, s, err := ecdsa.Sign(rand.Reader, f.leafKey, digest[:])
	if err != nil {
		t.Fatal(err)
	}
	sig := make([]byte, 64)
	r.FillBytes(sig[:32])
	s.FillBytes(sig[32:])
	return input + "." + base64.RawURLEncoding.EncodeToString(sig)
}

func (f *fakeApple) verifier() *Apple {
	return &Apple{bundleID: "chigirintsevandco.prostuk", roots: f.rootPool, now: time.Now}
}

func goodPayload() map[string]any {
	return map[string]any{
		"bundleId":      "chigirintsevandco.prostuk",
		"productId":     "checks_20",
		"transactionId": "2000000900000001",
		"environment":   "Production",
		"type":          "Consumable",
	}
}

func TestAppleAcceptsSignedTransaction(t *testing.T) {
	f := newFakeApple(t)
	id, err := f.verifier().Verify(context.Background(), "checks_20", f.sign(t, goodPayload()))
	if err != nil {
		t.Fatalf("настоящий чек отвергнут: %v", err)
	}
	if id != "2000000900000001" {
		t.Fatalf("вернулся номер %q, ожидался номер транзакции", id)
	}
}

// Номер покупки берётся из чека, а не из присланной строки: Apple
// подписывает одну и ту же покупку каждый раз заново.
func TestAppleSamePurchaseKeepsOneNumber(t *testing.T) {
	f := newFakeApple(t)
	a := f.verifier()
	first, err := a.Verify(context.Background(), "checks_20", f.sign(t, goodPayload()))
	if err != nil {
		t.Fatal(err)
	}
	second, err := a.Verify(context.Background(), "checks_20", f.sign(t, goodPayload()))
	if err != nil {
		t.Fatal(err)
	}
	if first != second {
		t.Fatalf("одна покупка получила номера %q и %q", first, second)
	}
}

func TestAppleRejects(t *testing.T) {
	f := newFakeApple(t)
	other := newFakeApple(t)

	revoked := goodPayload()
	revoked["revocationDate"] = 1756000000000

	foreignApp := goodPayload()
	foreignApp["bundleId"] = "com.example.other"

	cases := []struct {
		name    string
		product string
		signed  string
	}{
		{"подпись чужого корня", "checks_20", other.sign(t, goodPayload())},
		{"чек другого приложения", "checks_20", f.sign(t, foreignApp)},
		{"подменённый товар", "checks_40", f.sign(t, goodPayload())},
		{"покупка отозвана", "checks_20", f.sign(t, revoked)},
		{"не чек вовсе", "checks_20", "просто строка"},
		{"пустой чек", "checks_20", ""},
	}
	for _, c := range cases {
		t.Run(c.name, func(t *testing.T) {
			if _, err := f.verifier().Verify(context.Background(), c.product, c.signed); !errors.Is(err, ErrNotPurchased) {
				t.Fatalf("принято или ошибка не та: %v", err)
			}
		})
	}
}

// Подмена содержимого при сохранённой подписи — то, ради чего подпись и нужна.
func TestAppleRejectsTamperedPayload(t *testing.T) {
	f := newFakeApple(t)
	parts := strings.Split(f.sign(t, goodPayload()), ".")
	fake, _ := json.Marshal(map[string]any{
		"bundleId": "chigirintsevandco.prostuk", "productId": "checks_40",
		"transactionId": "2000000900000002", "environment": "Production",
	})
	parts[1] = base64.RawURLEncoding.EncodeToString(fake)

	if _, err := f.verifier().Verify(context.Background(), "checks_40", strings.Join(parts, ".")); !errors.Is(err, ErrNotPurchased) {
		t.Fatalf("подделка принята: %v", err)
	}
}

// Чек без подписи (alg none) не должен проходить дальше заголовка.
func TestAppleRejectsAlgNone(t *testing.T) {
	f := newFakeApple(t)
	h, _ := json.Marshal(map[string]any{"alg": "none"})
	p, _ := json.Marshal(goodPayload())
	signed := base64.RawURLEncoding.EncodeToString(h) + "." +
		base64.RawURLEncoding.EncodeToString(p) + "."

	if _, err := f.verifier().Verify(context.Background(), "checks_20", signed); !errors.Is(err, ErrNotPurchased) {
		t.Fatalf("чек без подписи принят: %v", err)
	}
}

// Настоящий корневой сертификат Apple должен разбираться: строка в коде
// портится незаметно, а сломается это только в день первой покупки.
func TestAppleRootParses(t *testing.T) {
	a, err := NewApple("chigirintsevandco.prostuk")
	if err != nil {
		t.Fatalf("корень Apple не прочитан: %v", err)
	}
	if a.roots == nil {
		t.Fatal("пустой набор корневых сертификатов")
	}
	if _, err := NewApple(""); err == nil {
		t.Fatal("проверка без bundle ID не должна создаваться")
	}
}

// Настоящий промежуточный сертификат Apple, которым подписаны сертификаты
// транзакций. Здесь он затем, чтобы проверить не только разбор строки, но и
// то, что цепочка Apple вообще проходит проверку Go: Go строже openssl и
// умеет отказать из-за расширения, которого не понимает. Сломайся это —
// узнали бы в день первой покупки, а не на сборке.
const appleWWDRG6 = `-----BEGIN CERTIFICATE-----
MIIDFjCCApygAwIBAgIUIsGhRwp0c2nvU4YSycafPTjzbNcwCgYIKoZIzj0EAwMw
ZzEbMBkGA1UEAwwSQXBwbGUgUm9vdCBDQSAtIEczMSYwJAYDVQQLDB1BcHBsZSBD
ZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTETMBEGA1UECgwKQXBwbGUgSW5jLjELMAkG
A1UEBhMCVVMwHhcNMjEwMzE3MjAzNzEwWhcNMzYwMzE5MDAwMDAwWjB1MUQwQgYD
VQQDDDtBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9ucyBDZXJ0aWZp
Y2F0aW9uIEF1dGhvcml0eTELMAkGA1UECwwCRzYxEzARBgNVBAoMCkFwcGxlIElu
Yy4xCzAJBgNVBAYTAlVTMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEbsQKC94PrlWm
ZXnXgtxzdVJL8T0SGYngDRGpngn3N6PT8JMEb7FDi4bBmPhCnZ3/sq6PF/cGcKXW
sL5vOteRhyJ45x3ASP7cOB+aao90fcpxSv/EZFbniAbNgZGhIhpIo4H6MIH3MBIG
A1UdEwEB/wQIMAYBAf8CAQAwHwYDVR0jBBgwFoAUu7DeoVgziJqkipnevr3rr9rL
JKswRgYIKwYBBQUHAQEEOjA4MDYGCCsGAQUFBzABhipodHRwOi8vb2NzcC5hcHBs
ZS5jb20vb2NzcDAzLWFwcGxlcm9vdGNhZzMwNwYDVR0fBDAwLjAsoCqgKIYmaHR0
cDovL2NybC5hcHBsZS5jb20vYXBwbGVyb290Y2FnMy5jcmwwHQYDVR0OBBYEFD8v
lCNR01DJmig97bB85c+lkGKZMA4GA1UdDwEB/wQEAwIBBjAQBgoqhkiG92NkBgIB
BAIFADAKBggqhkjOPQQDAwNoADBlAjBAXhSq5IyKogMCPtw490BaB677CaEGJXuf
QB/EqZGd6CSjiCtOnuMTbXVXmxxcxfkCMQDTSPxarZXvNrkxU3TkUMI33yzvFVVR
T4wxWJC994OsdcZ4+RGNsYDyR5gmdr0nDGg=
-----END CERTIFICATE-----`

func TestAppleRealChainVerifies(t *testing.T) {
	a, err := NewApple("chigirintsevandco.prostuk")
	if err != nil {
		t.Fatal(err)
	}
	block, _ := pem.Decode([]byte(appleWWDRG6))
	if block == nil {
		t.Fatal("промежуточный сертификат Apple не разбирается")
	}
	inter, err := x509.ParseCertificate(block.Bytes)
	if err != nil {
		t.Fatal(err)
	}
	if _, err := inter.Verify(x509.VerifyOptions{
		Roots:     a.roots,
		KeyUsages: []x509.ExtKeyUsage{x509.ExtKeyUsageAny},
	}); err != nil {
		t.Fatalf("настоящая цепочка Apple не проходит проверку: %v", err)
	}
}
