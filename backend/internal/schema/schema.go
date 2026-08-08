// Пакет schema подбирает схему узла и детали для подсветки по тексту причин.
//
// Таблица соответствий лежит в shared/schema-map.json и копируется сюда —
// один источник на бэкенд, сайт и приложение, чтобы подсветка везде совпадала.
package schema

import (
	_ "embed"
	"encoding/json"
	"regexp"
	"strings"
	"sync"
)

//go:embed schema-map.json
var mapRaw []byte

//go:embed parts.json
var partsRaw []byte

type pickRule struct {
	Re  string `json:"re"`
	Key string `json:"key"`
	Def string `json:"def"`
}

type part struct {
	N     int    `json:"n"`
	Label string `json:"label"`
}

type compiledPick struct {
	re  *regexp.Regexp
	key string
	def *regexp.Regexp
}

var (
	once   sync.Once
	picks  []compiledPick
	focus  [][2]*regexp.Regexp
	byKey  map[string][]part
	loadOK bool
)

func load() {
	var m struct {
		Pick  []pickRule  `json:"pick"`
		Focus [][2]string `json:"focus"`
	}
	if err := json.Unmarshal(mapRaw, &m); err != nil {
		return
	}
	if err := json.Unmarshal(partsRaw, &byKey); err != nil {
		return
	}
	for _, p := range m.Pick {
		re, err1 := regexp.Compile(p.Re)
		def, err2 := regexp.Compile(p.Def)
		if err1 != nil || err2 != nil {
			continue
		}
		picks = append(picks, compiledPick{re: re, key: p.Key, def: def})
	}
	for _, f := range m.Focus {
		a, err1 := regexp.Compile(f[0])
		b, err2 := regexp.Compile(f[1])
		if err1 != nil || err2 != nil {
			continue
		}
		focus = append(focus, [2]*regexp.Regexp{a, b})
	}
	loadOK = len(picks) > 0 && len(byKey) > 0
}

func norm(s string) string {
	return strings.ReplaceAll(strings.ToLower(s), "ё", "е")
}

// For возвращает ключ схемы и номера деталей для подсветки.
// Первая причина весит больше: по ней выбирается и схема, и акценты.
// Ничего не подошло — пустой ключ, клиент просто не покажет схему.
func For(causes []string) (string, []int) {
	once.Do(load)
	if !loadOK || len(causes) == 0 {
		return "", nil
	}

	first := norm(causes[0])
	all := norm(strings.Join(causes, " "))

	var hit *compiledPick
	for i := range picks {
		if picks[i].re.MatchString(first) {
			hit = &picks[i]
			break
		}
	}
	if hit == nil {
		for i := range picks {
			if picks[i].re.MatchString(all) {
				hit = &picks[i]
				break
			}
		}
	}
	if hit == nil {
		return "", nil
	}

	parts := byKey[hit.key]
	seen := map[int]bool{}
	var marks []int
	for _, f := range focus {
		if !f[0].MatchString(first) {
			continue
		}
		for _, p := range parts {
			if f[1].MatchString(norm(p.Label)) && !seen[p.N] {
				seen[p.N] = true
				marks = append(marks, p.N)
			}
		}
	}
	if len(marks) == 0 {
		for _, p := range parts {
			if hit.def.MatchString(norm(p.Label)) {
				marks = append(marks, p.N)
			}
		}
	}
	return hit.key, marks
}
