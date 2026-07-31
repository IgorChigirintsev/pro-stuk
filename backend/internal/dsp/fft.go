package dsp

import "math"

// Собственный итеративный radix-2 FFT: без внешних зависимостей,
// корректность закреплена тестами (синус даёт пик в нужном бине,
// forward+inverse восстанавливает сигнал).

// fft выполняет преобразование на месте. len(x) должен быть степенью двойки.
func fft(x []complex128, inverse bool) {
	n := len(x)
	if n <= 1 {
		return
	}

	// Перестановка бит-реверсом.
	for i, j := 1, 0; i < n; i++ {
		bit := n >> 1
		for ; j&bit != 0; bit >>= 1 {
			j ^= bit
		}
		j ^= bit
		if i < j {
			x[i], x[j] = x[j], x[i]
		}
	}

	for length := 2; length <= n; length <<= 1 {
		angle := 2 * math.Pi / float64(length)
		if !inverse {
			angle = -angle
		}
		wl := complex(math.Cos(angle), math.Sin(angle))
		for start := 0; start < n; start += length {
			w := complex(1, 0)
			half := length / 2
			for k := 0; k < half; k++ {
				u := x[start+k]
				v := x[start+k+half] * w
				x[start+k] = u + v
				x[start+k+half] = u - v
				w *= wl
			}
		}
	}

	if inverse {
		inv := complex(1/float64(n), 0)
		for i := range x {
			x[i] *= inv
		}
	}
}

func nextPow2(n int) int {
	p := 1
	for p < n {
		p <<= 1
	}
	return p
}
