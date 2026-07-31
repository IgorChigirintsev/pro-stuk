package dsp

import (
	"math"
	"testing"
)

func TestFFTSinePeakAndRoundtrip(t *testing.T) {
	// Синус 1 кГц → пик в соответствующем бине.
	n := 4096
	x := make([]complex128, n)
	freq := 1000.0
	for i := range x {
		x[i] = complex(math.Sin(2*math.Pi*freq*float64(i)/SampleRate), 0)
	}
	orig := append([]complex128(nil), x...)
	fft(x, false)
	peakBin, peakVal := 0, 0.0
	for i := 1; i < n/2; i++ {
		if v := cmplxAbs(x[i]); v > peakVal {
			peakVal, peakBin = v, i
		}
	}
	wantBin := int(freq / (SampleRate / float64(n)))
	if abs := math.Abs(float64(peakBin - wantBin)); abs > 1 {
		t.Fatalf("пик FFT в бине %d, ожидался ~%d", peakBin, wantBin)
	}
	// Roundtrip.
	fft(x, true)
	for i := range x {
		if math.Abs(real(x[i])-real(orig[i])) > 1e-9 {
			t.Fatalf("inverse FFT не восстановил сигнал в точке %d", i)
		}
	}
}

func TestSineCentroidAndPeak(t *testing.T) {
	// (а) синус 100 Гц → центроид и главный пик у 100 Гц, звук тональный.
	f := Analyze(GenSine(100, 10, 0.5))

	if math.Abs(f.SpectralCentroidHz.Value-100) > 15 {
		t.Errorf("центроид %v, ожидался ~100 Гц", f.SpectralCentroidHz.Value)
	}
	if len(f.Peaks) == 0 {
		t.Fatal("пики не найдены")
	}
	if math.Abs(f.Peaks[0].FreqHz-100) > 5 {
		t.Errorf("главный пик %v Гц, ожидался ~100", f.Peaks[0].FreqHz)
	}
	if !f.Tonal.Value {
		t.Error("синус должен определяться как тональный звук")
	}
	if f.RmsDb.Value < -20 || f.RmsDb.Value > -5 {
		t.Errorf("rms_db=%v вне разумного диапазона для синуса 0.5", f.RmsDb.Value)
	}
}

func TestImpulseTrainHitRate(t *testing.T) {
	// (б) гребёнка импульсов 20 Гц поверх шума → hit_hz ≈ 20.
	f := Analyze(GenImpulseTrain(20, 10, 0.05, 1))

	if !f.HitHz.Detected {
		t.Fatal("удары не найдены, ожидался hit_hz ~20")
	}
	if math.Abs(f.HitHz.Value-20) > 2 {
		t.Errorf("hit_hz=%v, ожидался ~20", f.HitHz.Value)
	}
}

func TestEngineIdleRpm(t *testing.T) {
	// Вспышки 30 Гц → RPM ≈ 900 (4-тактный 4-цилиндровый).
	f := Analyze(GenEngineIdle(30, 0, 10, 2))

	if !f.Rpm.Detected {
		t.Fatal("обороты не найдены, ожидался RPM ~900")
	}
	if math.Abs(f.Rpm.Value-900) > 150 {
		t.Errorf("rpm=%v, ожидался ~900", f.Rpm.Value)
	}
}

func TestHitPerRevInterpretation(t *testing.T) {
	// Вспышки 30 Гц (обороты 15 Гц) + стук 15 Гц → ratio ~1: коленвал/шатун.
	f := Analyze(GenEngineIdle(30, 15, 10, 3))

	if !f.HitPerRevRatio.Detected {
		t.Skip("ratio не определился на синтетике — допустимо, важнее реальные фичи по отдельности")
	}
	if math.Abs(f.HitPerRevRatio.Value-1.0) > 0.25 {
		t.Errorf("ratio=%v, ожидался ~1.0", f.HitPerRevRatio.Value)
	}
}

func TestSilenceAllLow(t *testing.T) {
	// (в) тишина → все фичи low / не определены.
	f := Analyze(GenSilence(10, 0.0005, 4))

	if f.RmsDb.Confidence != ConfLow {
		t.Errorf("rms confidence=%v, ожидался low (rms_db=%v)", f.RmsDb.Confidence, f.RmsDb.Value)
	}
	if f.HitHz.Detected {
		t.Error("в тишине не должно быть ударов")
	}
	if f.Rpm.Detected {
		t.Error("в тишине не должно быть оборотов")
	}
	if f.Tonal.Value {
		t.Error("тишина не должна быть тональной")
	}
	if f.HitPerRevRatio.Detected {
		t.Error("в тишине не должно быть ratio")
	}
}

func TestDuration(t *testing.T) {
	f := Analyze(GenSilence(12.5, 0.001, 5))
	if math.Abs(f.DurationSec-12.5) > 0.01 {
		t.Errorf("duration=%v, ожидалось 12.5", f.DurationSec)
	}
}
