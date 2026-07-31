package dsp

import (
	"math"
	"math/rand"
)

// Генераторы синтетических сигналов: используются юнит-тестами
// и командой cmd/genwav для интеграционной проверки через curl.

// GenSine — чистый синус.
func GenSine(freqHz, durationSec, amp float64) []float64 {
	n := int(durationSec * SampleRate)
	out := make([]float64, n)
	for i := range out {
		out[i] = amp * math.Sin(2*math.Pi*freqHz*float64(i)/SampleRate)
	}
	return out
}

// GenImpulseTrain — гребёнка коротких затухающих ударов поверх шума.
// Каждый удар — затухающий тон 1200 Гц длиной ~8 мс.
func GenImpulseTrain(hitHz, durationSec, noiseAmp float64, seed int64) []float64 {
	rng := rand.New(rand.NewSource(seed))
	n := int(durationSec * SampleRate)
	out := make([]float64, n)
	for i := range out {
		out[i] = noiseAmp * (2*rng.Float64() - 1)
	}
	period := int(SampleRate / hitHz)
	hitLen := SampleRate * 8 / 1000
	for start := 0; start < n; start += period {
		for j := 0; j < hitLen && start+j < n; j++ {
			t := float64(j) / SampleRate
			out[start+j] += 0.8 * math.Exp(-t*400) * math.Sin(2*math.Pi*1200*t)
		}
	}
	return out
}

// GenEngineIdle — имитация двигателя на холостых: вспышки fireHz в полосе
// 30–300 Гц плюс стук с частотой hitHz (0 — без стука).
func GenEngineIdle(fireHz, hitHz, durationSec float64, seed int64) []float64 {
	rng := rand.New(rand.NewSource(seed))
	n := int(durationSec * SampleRate)
	out := make([]float64, n)
	for i := range out {
		out[i] = 0.01 * (2*rng.Float64() - 1)
	}
	// Вспышки: затухающий низкочастотный «пых» на каждый период fireHz.
	// Амплитуда умеренная, чтобы в огибающей доминировал стук, а не вспышки.
	period := int(SampleRate / fireHz)
	for start := 0; start < n; start += period {
		for j := 0; j < period && start+j < n; j++ {
			t := float64(j) / SampleRate
			out[start+j] += 0.35 * math.Exp(-t*250) * math.Sin(2*math.Pi*90*t)
		}
	}
	if hitHz > 0 {
		hitPeriod := int(SampleRate / hitHz)
		hitLen := SampleRate * 10 / 1000
		for start := 0; start < n; start += hitPeriod {
			for j := 0; j < hitLen && start+j < n; j++ {
				t := float64(j) / SampleRate
				out[start+j] += 0.9 * math.Exp(-t*250) * math.Sin(2*math.Pi*1500*t)
			}
		}
	}
	return out
}

// GenSilence — почти тишина: только слабый шум.
func GenSilence(durationSec, noiseAmp float64, seed int64) []float64 {
	rng := rand.New(rand.NewSource(seed))
	n := int(durationSec * SampleRate)
	out := make([]float64, n)
	for i := range out {
		out[i] = noiseAmp * (2*rng.Float64() - 1)
	}
	return out
}
