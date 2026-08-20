// Проверка доступа к Google Play Developer API.
//
// Права сервисному аккаунту выдаются в Play Console и доезжают не мгновенно.
// Эта команда отвечает на вопрос «уже можно?» без ожидания первой покупки:
// читает ключ, меняет его на токен доступа и спрашивает про заведомо
// несуществующий чек. Отказ «покупка не найдена» означает, что всё готово.
//
// Запуск из каталога backend: go run ./cmd/playcheck
package main

import (
	"context"
	"errors"
	"fmt"
	"os"

	"stuk/backend/internal/billing"
	"stuk/backend/internal/config"
)

func main() {
	cfg, err := config.Load()
	if err != nil {
		fmt.Println("настройки не прочитались:", err)
		os.Exit(1)
	}
	p, err := billing.NewPlay(cfg.PlayServiceAccount, cfg.AndroidPackage)
	if err != nil {
		fmt.Println("ключ не прочитался:", err)
		os.Exit(1)
	}
	fmt.Println("ключ прочитан:", cfg.PlayServiceAccount)
	fmt.Println("пакет:", cfg.AndroidPackage)

	err = p.Verify(context.Background(), "checks_5", "заведомо-несуществующий-чек")
	switch {
	case errors.Is(err, billing.ErrNotPurchased):
		fmt.Println("доступ есть: Google ответил, что такой покупки нет — это правильный ответ")
	case err == nil:
		fmt.Println("неожиданно: выдуманный чек признан покупкой")
	default:
		fmt.Println("доступа пока нет:", err)
	}
}
