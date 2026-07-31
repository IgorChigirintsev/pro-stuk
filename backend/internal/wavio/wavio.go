// Пакет wavio читает и пишет WAV PCM16 mono 16000 Гц — единственный формат,
// который принимает сервер. Ошибки формата возвращаются человекочитаемым
// текстом: он уходит клиенту в ответе 422.
package wavio

import (
	"encoding/binary"
	"errors"
	"fmt"
	"math"
	"os"
)

const (
	RequiredSampleRate = 16000
	RequiredChannels   = 1
	RequiredBits       = 16
)

var ErrFormat = errors.New("неверный формат аудио")

// Decode разбирает WAV и возвращает сэмплы в диапазоне [-1, 1].
// Формат строго PCM16 mono 16000 Гц — иначе ошибка с понятной причиной.
func Decode(data []byte) ([]float64, error) {
	if len(data) < 44 || string(data[0:4]) != "RIFF" || string(data[8:12]) != "WAVE" {
		return nil, fmt.Errorf("%w: файл не похож на WAV", ErrFormat)
	}

	var (
		fmtFound              bool
		audioFormat, channels uint16
		sampleRate            uint32
		bitsPerSample         uint16
		samples               []float64
	)

	pos := 12
	for pos+8 <= len(data) {
		chunkID := string(data[pos : pos+4])
		chunkSize := int(binary.LittleEndian.Uint32(data[pos+4 : pos+8]))
		body := pos + 8
		if chunkSize < 0 || body+chunkSize > len(data) {
			return nil, fmt.Errorf("%w: WAV-файл повреждён или обрезан", ErrFormat)
		}
		switch chunkID {
		case "fmt ":
			if chunkSize < 16 {
				return nil, fmt.Errorf("%w: WAV-файл повреждён", ErrFormat)
			}
			fmtFound = true
			audioFormat = binary.LittleEndian.Uint16(data[body : body+2])
			channels = binary.LittleEndian.Uint16(data[body+2 : body+4])
			sampleRate = binary.LittleEndian.Uint32(data[body+4 : body+8])
			bitsPerSample = binary.LittleEndian.Uint16(data[body+14 : body+16])
		case "data":
			if !fmtFound {
				return nil, fmt.Errorf("%w: WAV-файл повреждён", ErrFormat)
			}
			if audioFormat != 1 {
				return nil, fmt.Errorf("%w: нужен несжатый PCM, а не формат %d", ErrFormat, audioFormat)
			}
			if bitsPerSample != RequiredBits {
				return nil, fmt.Errorf("%w: нужно 16 бит на сэмпл, а не %d", ErrFormat, bitsPerSample)
			}
			if channels != RequiredChannels {
				return nil, fmt.Errorf("%w: нужна одна дорожка (моно), а не %d", ErrFormat, channels)
			}
			if sampleRate != RequiredSampleRate {
				return nil, fmt.Errorf("%w: нужна частота 16000 Гц, а не %d", ErrFormat, sampleRate)
			}
			n := chunkSize / 2
			samples = make([]float64, n)
			for i := 0; i < n; i++ {
				v := int16(binary.LittleEndian.Uint16(data[body+2*i : body+2*i+2]))
				samples[i] = float64(v) / 32768.0
			}
			return samples, nil
		}
		// Чанки выравниваются по чётной границе.
		pos = body + chunkSize + (chunkSize & 1)
	}
	return nil, fmt.Errorf("%w: в WAV-файле нет аудиоданных", ErrFormat)
}

// Encode собирает WAV PCM16 mono 16000 Гц из сэмплов [-1, 1].
func Encode(samples []float64) []byte {
	n := len(samples)
	dataSize := n * 2
	buf := make([]byte, 44+dataSize)
	copy(buf[0:4], "RIFF")
	binary.LittleEndian.PutUint32(buf[4:8], uint32(36+dataSize))
	copy(buf[8:12], "WAVE")
	copy(buf[12:16], "fmt ")
	binary.LittleEndian.PutUint32(buf[16:20], 16)
	binary.LittleEndian.PutUint16(buf[20:22], 1) // PCM
	binary.LittleEndian.PutUint16(buf[22:24], RequiredChannels)
	binary.LittleEndian.PutUint32(buf[24:28], RequiredSampleRate)
	binary.LittleEndian.PutUint32(buf[28:32], RequiredSampleRate*RequiredChannels*RequiredBits/8)
	binary.LittleEndian.PutUint16(buf[32:34], RequiredChannels*RequiredBits/8)
	binary.LittleEndian.PutUint16(buf[34:36], RequiredBits)
	copy(buf[36:40], "data")
	binary.LittleEndian.PutUint32(buf[40:44], uint32(dataSize))
	for i, s := range samples {
		v := int16(math.Max(-1, math.Min(1, s)) * 32767)
		binary.LittleEndian.PutUint16(buf[44+2*i:44+2*i+2], uint16(v))
	}
	return buf
}

// WriteFile сохраняет сэмплы в WAV-файл (используется генератором тестовых данных).
func WriteFile(path string, samples []float64) error {
	return os.WriteFile(path, Encode(samples), 0o644)
}
