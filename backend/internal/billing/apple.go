package billing

import (
	"context"
	"crypto/ecdsa"
	"crypto/sha256"
	"crypto/x509"
	"encoding/base64"
	"encoding/json"
	"encoding/pem"
	"fmt"
	"math/big"
	"strings"
	"time"
)

// Проверка покупок в App Store.
//
// Устроена не так, как у Google, и это не прихоть. StoreKit 2 отдаёт
// приложению не «номер чека», по которому надо сходить в магазин, а саму
// транзакцию, подписанную Apple. Подпись проверяется здесь, без обращения к
// Apple: цепочка сертификатов ведёт к корневому Apple Root CA - G3, который
// лежит ниже в этом файле. Подделать такую бумагу без ключа Apple нельзя.
//
// Что это даёт помимо простоты: покупка подтверждается, даже когда серверы
// Apple недоступны, и для проверки не нужен ни один секрет. Ключей App Store
// Connect в конфигурации сервера нет и не требуется.
//
// Чего это не даёт: возврат, оформленный после покупки, здесь не виден. Apple
// сообщает о возвратах отдельным уведомлением на сервер; пока такого
// обработчика нет, отменённой покупкой можно один раз воспользоваться. Для
// расходуемых пакетов проверок цена вопроса — один пакет.

// Корневой сертификат Apple. Публичный: раздаётся с apple.com/certificateauthority
// и одинаков у всех. Прошит в код намеренно — файл на диске можно подменить,
// и тогда проверка подписи перестанет что-либо значить.
//
// Отпечаток SHA-256:
// 63:34:3A:BF:B8:9A:6A:03:EB:B5:7E:9B:3F:5F:A7:BE:7C:4F:5C:75:6F:30:17:B3:A8:C4:88:C3:65:3E:91:79
const appleRootCA = `-----BEGIN CERTIFICATE-----
MIICQzCCAcmgAwIBAgIILcX8iNLFS5UwCgYIKoZIzj0EAwMwZzEbMBkGA1UEAwwS
QXBwbGUgUm9vdCBDQSAtIEczMSYwJAYDVQQLDB1BcHBsZSBDZXJ0aWZpY2F0aW9u
IEF1dGhvcml0eTETMBEGA1UECgwKQXBwbGUgSW5jLjELMAkGA1UEBhMCVVMwHhcN
MTQwNDMwMTgxOTA2WhcNMzkwNDMwMTgxOTA2WjBnMRswGQYDVQQDDBJBcHBsZSBS
b290IENBIC0gRzMxJjAkBgNVBAsMHUFwcGxlIENlcnRpZmljYXRpb24gQXV0aG9y
aXR5MRMwEQYDVQQKDApBcHBsZSBJbmMuMQswCQYDVQQGEwJVUzB2MBAGByqGSM49
AgEGBSuBBAAiA2IABJjpLz1AcqTtkyJygRMc3RCV8cWjTnHcFBbZDuWmBSp3ZHtf
TjjTuxxEtX/1H7YyYl3J6YRbTzBPEVoA/VhYDKX1DyxNB0cTddqXl5dvMVztK517
IDvYuVTZXpmkOlEKMaNCMEAwHQYDVR0OBBYEFLuw3qFYM4iapIqZ3r6966/ayySr
MA8GA1UdEwEB/wQFMAMBAf8wDgYDVR0PAQH/BAQDAgEGMAoGCCqGSM49BAMDA2gA
MGUCMQCD6cHEFl4aXTQY2e3v9GwOAEZLuN+yRhHFD/3meoyhpmvOwgPUnPWTxnS4
at+qIxUCMG1mihDK1A3UT82NQz60imOlM27jbdoXt2QfyFMm+YhidDkLF1vLUagM
6BgD56KyKA==
-----END CERTIFICATE-----`

// Apple проверяет подписанные транзакции StoreKit 2.
type Apple struct {
	bundleID string
	roots    *x509.CertPool

	// Подменяются в тестах: настоящий корень Apple и настоящее время туда
	// не подставить.
	now func() time.Time
}

// NewApple готовит проверку покупок для одного приложения.
func NewApple(bundleID string) (*Apple, error) {
	if bundleID == "" {
		return nil, fmt.Errorf("%w: не задан bundle ID приложения", ErrNoCredentials)
	}
	block, _ := pem.Decode([]byte(appleRootCA))
	if block == nil {
		return nil, fmt.Errorf("корневой сертификат Apple не разбирается")
	}
	root, err := x509.ParseCertificate(block.Bytes)
	if err != nil {
		return nil, fmt.Errorf("корневой сертификат Apple не разбирается: %w", err)
	}
	pool := x509.NewCertPool()
	pool.AddCert(root)
	return &Apple{bundleID: bundleID, roots: pool, now: time.Now}, nil
}

// appleTransaction — те поля подписанной транзакции, которые нас касаются.
// Остальные (цена, страна, срок подписки) к начислению отношения не имеют.
type appleTransaction struct {
	BundleID      string `json:"bundleId"`
	ProductID     string `json:"productId"`
	TransactionID string `json:"transactionId"`
	// Дата отзыва: не ноль, если покупку вернули или отменили.
	RevocationDate int64 `json:"revocationDate"`
	// Production или Sandbox. Песочница разрешена намеренно, см. Verify.
	Environment string `json:"environment"`
}

// Verify проверяет подпись Apple под транзакцией и возвращает её номер.
//
// Номер, а не присланную строку: Apple подписывает транзакцию заново при
// каждом обращении приложения, и одна и та же покупка приходит разными
// строками. Считать их разными покупками — значит начислить дважды.
func (a *Apple) Verify(_ context.Context, productID, signed string) (string, error) {
	parts := strings.Split(signed, ".")
	if len(parts) != 3 {
		return "", fmt.Errorf("%w: чек не похож на подписанную транзакцию", ErrNotPurchased)
	}

	rawHeader, err := base64.RawURLEncoding.DecodeString(parts[0])
	if err != nil {
		return "", fmt.Errorf("%w: заголовок чека не читается", ErrNotPurchased)
	}
	var header struct {
		Alg string   `json:"alg"`
		X5c []string `json:"x5c"`
	}
	if err := json.Unmarshal(rawHeader, &header); err != nil {
		return "", fmt.Errorf("%w: заголовок чека не читается", ErrNotPurchased)
	}
	// Только ES256. Без этой строки достаточно было бы прислать чек с alg:none
	// и любым содержимым — классическая подмена алгоритма.
	if header.Alg != "ES256" {
		return "", fmt.Errorf("%w: подпись алгоритмом %q", ErrNotPurchased, header.Alg)
	}
	if len(header.X5c) == 0 {
		return "", fmt.Errorf("%w: в чеке нет сертификатов", ErrNotPurchased)
	}

	certs := make([]*x509.Certificate, 0, len(header.X5c))
	for _, enc := range header.X5c {
		der, err := base64.StdEncoding.DecodeString(enc)
		if err != nil {
			return "", fmt.Errorf("%w: сертификат в чеке не читается", ErrNotPurchased)
		}
		c, err := x509.ParseCertificate(der)
		if err != nil {
			return "", fmt.Errorf("%w: сертификат в чеке не разбирается", ErrNotPurchased)
		}
		certs = append(certs, c)
	}

	// Промежуточные берём из чека, корень — только свой. Корень из чека
	// доверия не заслуживает: приложить туда самодельный может кто угодно.
	inter := x509.NewCertPool()
	for _, c := range certs[1:] {
		inter.AddCert(c)
	}
	leaf := certs[0]
	if _, err := leaf.Verify(x509.VerifyOptions{
		Roots:         a.roots,
		Intermediates: inter,
		CurrentTime:   a.now(),
		KeyUsages:     []x509.ExtKeyUsage{x509.ExtKeyUsageAny},
	}); err != nil {
		return "", fmt.Errorf("%w: сертификат чека не от Apple: %v", ErrNotPurchased, err)
	}

	pub, ok := leaf.PublicKey.(*ecdsa.PublicKey)
	if !ok {
		return "", fmt.Errorf("%w: неожиданный ключ в сертификате", ErrNotPurchased)
	}
	sig, err := base64.RawURLEncoding.DecodeString(parts[2])
	if err != nil || len(sig) != 64 {
		return "", fmt.Errorf("%w: подпись чека не читается", ErrNotPurchased)
	}
	digest := sha256.Sum256([]byte(parts[0] + "." + parts[1]))
	r := new(big.Int).SetBytes(sig[:32])
	s := new(big.Int).SetBytes(sig[32:])
	if !ecdsa.Verify(pub, digest[:], r, s) {
		return "", fmt.Errorf("%w: подпись под чеком не сходится", ErrNotPurchased)
	}

	rawPayload, err := base64.RawURLEncoding.DecodeString(parts[1])
	if err != nil {
		return "", fmt.Errorf("%w: содержимое чека не читается", ErrNotPurchased)
	}
	var tr appleTransaction
	if err := json.Unmarshal(rawPayload, &tr); err != nil {
		return "", fmt.Errorf("%w: содержимое чека не читается", ErrNotPurchased)
	}

	// Чек другого приложения подписан Apple ничуть не хуже нашего.
	if tr.BundleID != a.bundleID {
		return "", fmt.Errorf("%w: чек приложения %q", ErrNotPurchased, tr.BundleID)
	}
	// Товар сверяем с тем, что назвало приложение: иначе пакетом на пять
	// проверок можно было бы получить сорок.
	if tr.ProductID != productID {
		return "", fmt.Errorf("%w: в чеке товар %q, а просят %q", ErrNotPurchased, tr.ProductID, productID)
	}
	if tr.RevocationDate != 0 {
		return "", fmt.Errorf("%w: покупка отозвана", ErrNotPurchased)
	}
	if tr.TransactionID == "" {
		return "", fmt.Errorf("%w: в чеке нет номера покупки", ErrNotPurchased)
	}
	// Песочница разрешена сознательно. Учётные записи для неё заводит
	// разработчик в App Store Connect — посторонний такую не получит, а без
	// песочницы нечем проверить покупки в TestFlight до выпуска.
	return tr.TransactionID, nil
}
