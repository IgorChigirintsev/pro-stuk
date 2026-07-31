// Пакет dsp — чистая математика над аудиосигналом, без ML и без диагнозов.
// Его выводы уходят в LLM как подсказки с явной пометкой надёжности
// (low/med/high); при слабом сигнале фичи честно помечаются как ненадёжные.
package dsp

import (
	"math"
	"sort"
)

const SampleRate = 16000

type Confidence string

const (
	ConfLow  Confidence = "low"
	ConfMed  Confidence = "med"
	ConfHigh Confidence = "high"
)

type Feature struct {
	Value      float64    `json:"value"`
	Confidence Confidence `json:"confidence"`
}

type BoolFeature struct {
	Value      bool       `json:"value"`
	Confidence Confidence `json:"confidence"`
}

type Peak struct {
	FreqHz       float64 `json:"freq_hz"`
	ProminenceDb float64 `json:"prominence_db"`
}

type DetectedFeature struct {
	Detected   bool       `json:"detected"`
	Value      float64    `json:"value,omitempty"`
	Confidence Confidence `json:"confidence"`
}

type Ratio struct {
	Detected       bool       `json:"detected"`
	Value          float64    `json:"value,omitempty"`
	Interpretation string     `json:"interpretation,omitempty"`
	Confidence     Confidence `json:"confidence"`
}

// Features — сводка по записи, она же dsp_summary в ответе API.
type Features struct {
	DurationSec        float64         `json:"duration_sec"`
	RmsDb              Feature         `json:"rms_db"`
	SnrDb              Feature         `json:"snr_db"`
	SpectralCentroidHz Feature         `json:"spectral_centroid_hz"`
	Peaks              []Peak          `json:"peaks"`
	Tonal              BoolFeature     `json:"tonal"`
	HitHz              DetectedFeature `json:"hit_hz"`
	Rpm                DetectedFeature `json:"rpm"`
	HitPerRevRatio     Ratio           `json:"hit_per_rev_ratio"`
}

// Analyze считает все фичи по сэмплам [-1, 1] с частотой 16000 Гц.
func Analyze(samples []float64) Features {
	f := Features{DurationSec: round2(float64(len(samples)) / SampleRate)}
	if len(samples) == 0 {
		f.RmsDb = Feature{Value: -120, Confidence: ConfLow}
		f.SnrDb = Feature{Confidence: ConfLow}
		f.SpectralCentroidHz = Feature{Confidence: ConfLow}
		f.Tonal = BoolFeature{Confidence: ConfLow}
		f.HitHz = DetectedFeature{Confidence: ConfLow}
		f.Rpm = DetectedFeature{Confidence: ConfLow}
		f.HitPerRevRatio = Ratio{Confidence: ConfLow}
		return f
	}

	f.RmsDb = rmsDb(samples)

	env := envelope(samples, 100.0)
	envDs, envRate := downsample(env, 16) // ~1000 Гц
	f.SnrDb = snrDb(envDs)

	// «Слабый» сигнал — это тихая запись по уровню. Низкий SNR сам по себе
	// не порок: у ровного непрерывного звука нет пауз-эталонов тишины.
	weak := f.RmsDb.Value < -55

	spec, binHz := avgSpectrum(samples)
	f.SpectralCentroidHz, f.Peaks, f.Tonal = spectralFeatures(spec, binHz, weak)

	f.HitHz = hitRate(envDs, envRate, weak)
	f.Rpm = estimateRpm(samples, weak)
	f.HitPerRevRatio = hitPerRev(f.HitHz, f.Rpm)
	return f
}

func rmsDb(x []float64) Feature {
	var sum float64
	clipped := 0
	for _, v := range x {
		sum += v * v
		if math.Abs(v) > 0.985 {
			clipped++
		}
	}
	rms := math.Sqrt(sum / float64(len(x)))
	db := -120.0
	if rms > 1e-6 {
		db = 20 * math.Log10(rms)
	}
	conf := ConfHigh
	if float64(clipped)/float64(len(x)) > 0.001 {
		conf = ConfMed // запись с перегрузом — уровень оценён неточно
	}
	if db <= -60 {
		conf = ConfLow
	}
	return Feature{Value: round2(db), Confidence: conf}
}

// envelope: выпрямление + однополюсный ФНЧ.
func envelope(x []float64, cutoffHz float64) []float64 {
	alpha := 1 - math.Exp(-2*math.Pi*cutoffHz/SampleRate)
	env := make([]float64, len(x))
	var acc float64
	for i, v := range x {
		acc += alpha * (math.Abs(v) - acc)
		env[i] = acc
	}
	return env
}

func downsample(x []float64, factor int) ([]float64, float64) {
	n := len(x) / factor
	out := make([]float64, n)
	for i := 0; i < n; i++ {
		out[i] = x[i*factor]
	}
	return out, SampleRate / float64(factor)
}

// snrDb: грубая оценка «тишина vs сигнал» по перцентилям огибающей.
func snrDb(env []float64) Feature {
	if len(env) < 10 {
		return Feature{Confidence: ConfLow}
	}
	sorted := append([]float64(nil), env...)
	sort.Float64s(sorted)
	noise := sorted[len(sorted)*10/100]
	signal := sorted[len(sorted)*95/100]
	if noise < 1e-6 {
		noise = 1e-6
	}
	if signal < 1e-6 {
		return Feature{Value: 0, Confidence: ConfLow}
	}
	snr := 20 * math.Log10(signal/noise)
	conf := ConfMed
	if snr > 20 {
		conf = ConfHigh
	}
	if snr < 6 {
		conf = ConfLow
	}
	return Feature{Value: round2(snr), Confidence: conf}
}

// avgSpectrum: усреднённый амплитудный спектр по окнам Ханна ~1 с.
func avgSpectrum(x []float64) ([]float64, float64) {
	frame := 16384
	hop := frame / 2
	if len(x) < frame {
		frame = nextPow2(len(x))
		hop = frame
	}
	win := make([]float64, frame)
	for i := range win {
		win[i] = 0.5 - 0.5*math.Cos(2*math.Pi*float64(i)/float64(frame-1))
	}
	spec := make([]float64, frame/2)
	frames := 0
	buf := make([]complex128, frame)
	for start := 0; start+1 <= len(x); start += hop {
		end := start + frame
		for i := 0; i < frame; i++ {
			v := 0.0
			if start+i < len(x) {
				v = x[start+i] * win[i]
			}
			buf[i] = complex(v, 0)
		}
		fft(buf, false)
		for i := 0; i < frame/2; i++ {
			spec[i] += cmplxAbs(buf[i])
		}
		frames++
		if end >= len(x) {
			break
		}
	}
	for i := range spec {
		spec[i] /= float64(frames)
	}
	return spec, SampleRate / float64(frame)
}

func spectralFeatures(spec []float64, binHz float64, weak bool) (Feature, []Peak, BoolFeature) {
	loBin := int(20 / binHz)
	hiBin := int(7900 / binHz)
	if hiBin > len(spec) {
		hiBin = len(spec)
	}

	// Центроид.
	var num, den float64
	for i := loBin; i < hiBin; i++ {
		f := float64(i) * binHz
		num += f * spec[i]
		den += spec[i]
	}
	centroid := Feature{Confidence: ConfLow}
	if den > 1e-9 {
		conf := ConfHigh
		if weak {
			conf = ConfLow
		}
		centroid = Feature{Value: round2(num / den), Confidence: conf}
	}

	// Спектр в дБ для поиска пиков.
	db := make([]float64, len(spec))
	for i, v := range spec {
		if v < 1e-12 {
			v = 1e-12
		}
		db[i] = 20 * math.Log10(v)
	}

	type cand struct {
		bin  int
		prom float64
	}
	var cands []cand
	for i := loBin + 2; i < hiBin-2; i++ {
		if db[i] <= db[i-1] || db[i] < db[i+1] || db[i] <= db[i-2] || db[i] < db[i+2] {
			continue
		}
		// Прominence: насколько пик выше окружающих впадин,
		// пока не встретится точка выше самого пика.
		left := db[i]
		for j := i - 1; j >= loBin && db[j] < db[i]; j-- {
			if db[j] < left {
				left = db[j]
			}
		}
		right := db[i]
		for j := i + 1; j < hiBin && db[j] < db[i]; j++ {
			if db[j] < right {
				right = db[j]
			}
		}
		prom := db[i] - math.Max(left, right)
		if prom > 3 {
			cands = append(cands, cand{i, prom})
		}
	}
	sort.Slice(cands, func(a, b int) bool { return cands[a].prom > cands[b].prom })

	var peaks []Peak
	for _, c := range cands {
		if len(peaks) == 3 {
			break
		}
		tooClose := false
		for _, p := range peaks {
			if math.Abs(p.FreqHz-float64(c.bin)*binHz) < 15 {
				tooClose = true
				break
			}
		}
		if !tooClose {
			peaks = append(peaks, Peak{FreqHz: round2(float64(c.bin) * binHz), ProminenceDb: round2(c.prom)})
		}
	}

	tonal := BoolFeature{Confidence: ConfLow}
	if !weak && len(peaks) > 0 {
		tonal.Value = peaks[0].ProminenceDb > 12
		tonal.Confidence = ConfMed
		if peaks[0].ProminenceDb > 20 || peaks[0].ProminenceDb < 6 {
			tonal.Confidence = ConfHigh
		}
	}
	return centroid, peaks, tonal
}

// autocorrPeak ищет период в диапазоне лагов; при близких по высоте пиках
// выбирает наименьший лаг (фундаментальный период, а не его кратные).
func autocorrPeak(x []float64, minLag, maxLag int) (lag int, strength float64) {
	n := len(x)
	if maxLag >= n {
		maxLag = n - 1
	}
	if minLag < 1 || minLag >= maxLag {
		return 0, 0
	}
	mean := 0.0
	for _, v := range x {
		mean += v
	}
	mean /= float64(n)
	var r0 float64
	for _, v := range x {
		d := v - mean
		r0 += d * d
	}
	if r0 < 1e-12 {
		return 0, 0
	}
	r := make([]float64, maxLag+1)
	for l := minLag; l <= maxLag; l++ {
		var s float64
		for i := 0; i+l < n; i++ {
			s += (x[i] - mean) * (x[i+l] - mean)
		}
		r[l] = s / r0
	}
	best := 0.0
	for l := minLag; l <= maxLag; l++ {
		if r[l] > best {
			best = r[l]
		}
	}
	if best <= 0 {
		return 0, 0
	}
	// Наименьший лаг среди локальных максимумов, сравнимых с лучшим.
	for l := minLag + 1; l < maxLag; l++ {
		if r[l] >= 0.85*best && r[l] >= r[l-1] && r[l] >= r[l+1] {
			return l, r[l]
		}
	}
	for l := minLag; l <= maxLag; l++ {
		if r[l] == best {
			return l, best
		}
	}
	return 0, 0
}

// hitRate: частота повторения ударов по автокорреляции огибающей (2–50 Гц).
func hitRate(env []float64, envRate float64, weak bool) DetectedFeature {
	minLag := int(envRate / 50)
	maxLag := int(envRate / 2)
	lag, strength := autocorrPeak(env, minLag, maxLag)
	if lag == 0 || strength < 0.25 || weak {
		return DetectedFeature{Confidence: ConfLow}
	}
	conf := ConfMed
	if strength > 0.5 {
		conf = ConfHigh
	}
	return DetectedFeature{Detected: true, Value: round2(envRate / float64(lag)), Confidence: conf}
}

// estimateRpm: полосовая энергия 30–300 Гц, автокорреляция → частота вспышек;
// для 4-тактного 4-цилиндрового RPM = fire_hz * 30.
func estimateRpm(x []float64, weak bool) DetectedFeature {
	n := nextPow2(len(x))
	buf := make([]complex128, n)
	for i, v := range x {
		buf[i] = complex(v, 0)
	}
	fft(buf, false)
	binHz := SampleRate / float64(n)
	lo, hi := int(30/binHz), int(300/binHz)
	for i := 0; i < n/2; i++ {
		if i < lo || i > hi {
			buf[i] = 0
			if i > 0 {
				buf[n-i] = 0
			}
		}
	}
	buf[0] = 0
	fft(buf, true)
	bp := make([]float64, len(x))
	for i := range bp {
		bp[i] = real(buf[i])
	}
	bpDs, rate := downsample(bp, 16) // ~1000 Гц, вспышки до 200 Гц различимы

	minLag := int(rate / 200) // 200 Гц → 12000 об/мин потолок
	maxLag := int(rate / 10)  // 10 Гц → 300 об/мин пол
	lag, strength := autocorrPeak(bpDs, minLag, maxLag)
	if lag == 0 || strength < 0.25 || weak {
		return DetectedFeature{Confidence: ConfLow}
	}
	fireHz := rate / float64(lag)
	rpm := fireHz * 30
	if rpm < 400 || rpm > 9000 {
		return DetectedFeature{Confidence: ConfLow}
	}
	conf := ConfMed
	if strength > 0.5 {
		conf = ConfHigh
	}
	return DetectedFeature{Detected: true, Value: math.Round(rpm), Confidence: conf}
}

func hitPerRev(hit, rpm DetectedFeature) Ratio {
	if !hit.Detected || !rpm.Detected {
		return Ratio{Confidence: ConfLow}
	}
	revHz := rpm.Value / 60
	if revHz < 1e-6 {
		return Ratio{Confidence: ConfLow}
	}
	ratio := hit.Value / revHz
	interp := "нет типовой интерпретации"
	switch {
	case math.Abs(ratio-0.5) < 0.15:
		interp = "~0.5 оборота: похоже на распредвал или клапанный механизм"
	case math.Abs(ratio-1.0) < 0.2:
		interp = "~1 оборот: похоже на коленвал или шатун"
	case math.Abs(ratio-2.0) < 0.3:
		interp = "~2 на оборот: похоже на частоту вспышек или выхлоп"
	}
	conf := hit.Confidence
	if rpm.Confidence == ConfMed && conf == ConfHigh {
		conf = ConfMed
	}
	// Интерпретация — всегда лишь гипотеза, выше med её не поднимаем.
	if conf == ConfHigh {
		conf = ConfMed
	}
	return Ratio{Detected: true, Value: round2(ratio), Interpretation: interp, Confidence: conf}
}

func cmplxAbs(c complex128) float64 {
	return math.Hypot(real(c), imag(c))
}

func round2(v float64) float64 {
	return math.Round(v*100) / 100
}
