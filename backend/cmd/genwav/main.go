// genwav пишет синтетические WAV-файлы для интеграционной проверки API через curl.
// Запуск: go run ./cmd/genwav [каталог]  (по умолчанию testdata/)
package main

import (
	"fmt"
	"os"
	"path/filepath"

	"stuk/backend/internal/dsp"
	"stuk/backend/internal/wavio"
)

func main() {
	dir := "testdata"
	if len(os.Args) > 1 {
		dir = os.Args[1]
	}
	if err := os.MkdirAll(dir, 0o755); err != nil {
		fmt.Fprintln(os.Stderr, "ошибка:", err)
		os.Exit(1)
	}

	files := map[string][]float64{
		"sine100.wav":   dsp.GenSine(100, 12, 0.5),
		"knock.wav":     dsp.GenEngineIdle(30, 15, 15, 42),
		"silence.wav":   dsp.GenSilence(10, 0.0005, 42),
		"too_short.wav": dsp.GenSine(200, 2, 0.5),
	}
	for name, samples := range files {
		path := filepath.Join(dir, name)
		if err := wavio.WriteFile(path, samples); err != nil {
			fmt.Fprintln(os.Stderr, "ошибка записи", path, ":", err)
			os.Exit(1)
		}
		fmt.Println("записан", path)
	}
}
