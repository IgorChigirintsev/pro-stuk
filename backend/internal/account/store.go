package account

import (
	"encoding/json"
	"errors"
	"fmt"
	"os"
	"path/filepath"
	"sync"
	"time"
)

// Store — хранилище учётных записей.
//
// Пишет на диск при каждом изменении, а не по таймеру, как дневные счётчики.
// Разница принципиальная: потерять пару минут статистики не страшно, потерять
// оплаченные проверки — значит списать деньги и ничего не дать.
//
// Формат — один JSON-файл. Учётных записей ожидаются тысячи, изменения редки
// (покупка, добавление машины, разбор), поэтому переписывать файл целиком
// дешевле, чем тащить в проект базу. Когда записей станут десятки тысяч,
// это место придётся менять — оно намеренно закрыто интерфейсом методов.
type Store struct {
	mu   sync.Mutex
	path string
	data fileData
}

type fileData struct {
	// id → запись.
	Accounts map[string]*Account `json:"accounts"`
	// «провайдер:субъект» → id. По этому ключу узнаётся вернувшийся человек,
	// в том числе после переустановки приложения.
	Index map[string]string `json:"index"`
	// Счётчик для новых идентификаторов.
	Seq int64 `json:"seq"`
	// Токен сессии → id записи. Приложение входит один раз и дальше живёт
	// с этим токеном: гонять токен Google на каждый запрос значило бы
	// проверять подпись по сети постоянно, а он ещё и живёт всего час.
	Sessions map[string]string `json:"sessions,omitempty"`
}

var ErrNotFound = errors.New("учётной записи нет")

func key(provider, subject string) string { return provider + ":" + subject }

// Open читает файл из dataDir. Отсутствие файла — обычное дело при первом
// запуске, а вот повреждённый файл останавливает старт: молча начать с нуля
// значит обнулить всем баланс.
func Open(dataDir string) (*Store, error) {
	if err := os.MkdirAll(dataDir, 0o755); err != nil {
		return nil, err
	}
	s := &Store{
		path: filepath.Join(dataDir, "accounts.json"),
		data: fileData{
			Accounts: map[string]*Account{},
			Index:    map[string]string{},
			Sessions: map[string]string{},
		},
	}
	raw, err := os.ReadFile(s.path)
	if errors.Is(err, os.ErrNotExist) {
		return s, nil
	}
	if err != nil {
		return nil, err
	}
	if err := json.Unmarshal(raw, &s.data); err != nil {
		return nil, fmt.Errorf("accounts.json повреждён: %w", err)
	}
	if s.data.Accounts == nil {
		s.data.Accounts = map[string]*Account{}
	}
	if s.data.Index == nil {
		s.data.Index = map[string]string{}
	}
	if s.data.Sessions == nil {
		s.data.Sessions = map[string]string{}
	}
	return s, nil
}

// save вызывается под замком. Запись через временный файл: обрыв питания
// посреди сохранения не должен оставить обрезанный accounts.json.
func (s *Store) save() error {
	raw, err := json.Marshal(s.data)
	if err != nil {
		return err
	}
	tmp := s.path + ".tmp"
	if err := os.WriteFile(tmp, raw, 0o600); err != nil {
		return err
	}
	return os.Rename(tmp, s.path)
}

// EnsureAccount находит запись по провайдеру и субъекту или заводит новую.
// Субъект — постоянный идентификатор пользователя у Google или Apple: именно
// он возвращает человеку гараж после переустановки.
func (s *Store) EnsureAccount(provider, subject string, now time.Time) (Account, error) {
	s.mu.Lock()
	defer s.mu.Unlock()

	if id, ok := s.data.Index[key(provider, subject)]; ok {
		if a, ok := s.data.Accounts[id]; ok {
			return a.clone(), nil
		}
	}
	s.data.Seq++
	id := fmt.Sprintf("a%d", s.data.Seq)
	a := New(id, provider, subject, now)
	a.Version = 1
	s.data.Accounts[id] = a
	s.data.Index[key(provider, subject)] = id
	if err := s.save(); err != nil {
		return Account{}, err
	}
	return a.clone(), nil
}

// Get возвращает копию записи.
func (s *Store) Get(id string) (Account, error) {
	s.mu.Lock()
	defer s.mu.Unlock()
	a, ok := s.data.Accounts[id]
	if !ok {
		return Account{}, ErrNotFound
	}
	return a.clone(), nil
}

// Update меняет запись под замком и сразу сохраняет.
//
// Версия растёт при каждом успешном изменении: по ней приложение понимает,
// что его копия устарела, не выкачивая состояние целиком.
func (s *Store) Update(id string, fn func(*Account) error) (Account, error) {
	s.mu.Lock()
	defer s.mu.Unlock()

	a, ok := s.data.Accounts[id]
	if !ok {
		return Account{}, ErrNotFound
	}
	// Правки применяются к копии: ошибка в середине не должна оставить
	// запись наполовину изменённой.
	work := a.clone()
	if err := fn(&work); err != nil {
		return Account{}, err
	}
	work.Version = a.Version + 1
	s.data.Accounts[id] = &work
	if err := s.save(); err != nil {
		// Файл не записался — откатываемся, чтобы память и диск не разошлись.
		s.data.Accounts[id] = a
		return Account{}, err
	}
	return work.clone(), nil
}

func (a *Account) clone() Account {
	c := *a
	c.Slots = append([]Slot(nil), a.Slots...)
	for i, s := range a.Slots {
		if s.Car != nil {
			car := *s.Car
			c.Slots[i].Car = &car
		}
	}
	c.Pending = append([]Pending(nil), a.Pending...)
	c.Done = make(map[string]bool, len(a.Done))
	for k, v := range a.Done {
		c.Done[k] = v
	}
	return c
}

// NewSession выдаёт токен сессии для записи.
func (s *Store) NewSession(accountID, token string) error {
	s.mu.Lock()
	defer s.mu.Unlock()
	if _, ok := s.data.Accounts[accountID]; !ok {
		return ErrNotFound
	}
	if s.data.Sessions == nil {
		s.data.Sessions = map[string]string{}
	}
	s.data.Sessions[token] = accountID
	return s.save()
}

// BySession находит запись по токену сессии.
func (s *Store) BySession(token string) (Account, error) {
	s.mu.Lock()
	id, ok := s.data.Sessions[token]
	s.mu.Unlock()
	if !ok {
		return Account{}, ErrNotFound
	}
	return s.Get(id)
}

// DropSession закрывает сессию. Нужен для выхода из аккаунта и для удаления
// данных по требованию: без этого выданный токен жил бы вечно.
func (s *Store) DropSession(token string) error {
	s.mu.Lock()
	defer s.mu.Unlock()
	delete(s.data.Sessions, token)
	return s.save()
}

// Delete стирает учётную запись целиком: места, баланс, историю покупок и
// все открытые сессии.
//
// Возврата нет и восстановления нет — так это и объяснено человеку в
// приложении до подтверждения. Оставлять «мягкое удаление» с возможностью
// вернуть было бы честнее по деньгам, но нечестно по обещанию: человек
// просил удалить.
func (s *Store) Delete(accountID string) error {
	s.mu.Lock()
	defer s.mu.Unlock()

	a, ok := s.data.Accounts[accountID]
	if !ok {
		return ErrNotFound
	}
	delete(s.data.Accounts, accountID)
	delete(s.data.Index, key(a.Provider, a.Subject))
	for token, id := range s.data.Sessions {
		if id == accountID {
			delete(s.data.Sessions, token)
		}
	}
	return s.save()
}
