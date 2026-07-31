package httpapi

import (
	"net"
	"net/http"
	"strings"
	"sync"
	"time"
)

// ipLimiter — скользящее окно: не больше limit запросов за window с одного IP.
type ipLimiter struct {
	mu     sync.Mutex
	hits   map[string][]time.Time
	limit  int
	window time.Duration
}

func newIPLimiter(limit int, window time.Duration) *ipLimiter {
	l := &ipLimiter{hits: map[string][]time.Time{}, limit: limit, window: window}
	go func() {
		for range time.Tick(time.Minute) {
			l.gc()
		}
	}()
	return l
}

func (l *ipLimiter) allow(ip string) bool {
	now := time.Now()
	l.mu.Lock()
	defer l.mu.Unlock()
	kept := l.hits[ip][:0]
	for _, t := range l.hits[ip] {
		if now.Sub(t) < l.window {
			kept = append(kept, t)
		}
	}
	if len(kept) >= l.limit {
		l.hits[ip] = kept
		return false
	}
	l.hits[ip] = append(kept, now)
	return true
}

func (l *ipLimiter) gc() {
	now := time.Now()
	l.mu.Lock()
	defer l.mu.Unlock()
	for ip, times := range l.hits {
		kept := times[:0]
		for _, t := range times {
			if now.Sub(t) < l.window {
				kept = append(kept, t)
			}
		}
		if len(kept) == 0 {
			delete(l.hits, ip)
		} else {
			l.hits[ip] = kept
		}
	}
}

// clientIP: за Caddy реальный адрес приходит в X-Forwarded-For.
func clientIP(r *http.Request) string {
	if xff := r.Header.Get("X-Forwarded-For"); xff != "" {
		if first, _, ok := strings.Cut(xff, ","); ok {
			return strings.TrimSpace(first)
		}
		return strings.TrimSpace(xff)
	}
	host, _, err := net.SplitHostPort(r.RemoteAddr)
	if err != nil {
		return r.RemoteAddr
	}
	return host
}
