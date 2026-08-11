import type { Dict } from './types';

export const pl: Dict = {
  brand: 'Stuk',
  nav: {
    symptoms: 'Objawy',
    how: 'Jak to działa',
    articles: 'Artykuły',
    analytics: 'Statystyki',
    lang: 'Język',
  },
  footer: {
    disclaimer:
      'Stuk podaje ocenę prawdopodobieństwa na podstawie odpowiedzi i dźwięku, a nie ' +
      'diagnozę. O naprawie decyduje mechanik po obejrzeniu samochodu.',
    how: 'Jak to działa',
    privacy: 'Polityka prywatności',
    ruOnly: 'Poradniki według objawów i artykuły (po rosyjsku)',
  },
  home: {
    title: 'Stuk — diagnoza samochodu po dźwięku',
    description:
      'Nagraj dźwięk i dowiedz się, co dzieje się z autem. Krótka ankieta, analiza ' +
      'nagrania i raport: prawdopodobne przyczyny z procentami, sygnalizacja pilności ' +
      'i co powiedzieć w warsztacie.',
    schemaDescription:
      'Diagnostyka usterek samochodu po objawach i dźwięku: ankieta, nagranie dźwięku ' +
      'i raport z prawdopodobnymi przyczynami.',
    h1: 'Nagraj dźwięk — dowiedz się, co dzieje się z autem',
    sub:
      'Krótka ankieta i nagranie 15–30 sekund. W odpowiedzi: prawdopodobne przyczyny ' +
      'z procentami, sygnalizacja pilności i podpowiedzi na rozmowę w warsztacie.',
    cta: 'Pobierz aplikację',
    ctaNote: 'Android · na razie bezpłatnie',
    howH2: 'Jak to działa',
    steps: [
      {
        title: '1. Pytania',
        text: 'Kiedy słychać dźwięk i do czego jest podobny — drzewo pytań zawęża przyczynę.',
      },
      {
        title: '2. Dźwięk',
        text: 'Nagranie 15–30 sekund: widmo, rytm uderzeń i obroty silnika liczone są na serwerze.',
      },
      {
        title: '3. Raport',
        text: 'Przyczyny z procentami, sygnalizacja pilności i co powiedzieć w warsztacie.',
      },
    ],
    faqH2: 'Częste pytania',
    faq: [
      {
        q: 'Czy to dokładna diagnoza?',
        a: 'Nie. Stuk daje ocenę prawdopodobieństwa: listę możliwych przyczyn z procentami i poziom pilności. Dokładną diagnozę stawia mechanik po oględzinach — raport sprawia tylko, że przyjeżdżasz przygotowany.',
      },
      {
        q: 'Ile to kosztuje?',
        a: 'Na razie nic: do 3 pełnych raportów dźwiękowych dziennie na urządzenie. Wstępny werdykt z ankiety jest bez ograniczeń.',
      },
      {
        q: 'Jakie samochody są obsługiwane?',
        a: 'Samochody osobowe z silnikiem benzynowym lub wysokoprężnym, ze skrzynią manualną lub automatyczną. Marka, rocznik i przebieg są brane pod uwagę w analizie.',
      },
      {
        q: 'Co dzieje się z moim nagraniem?',
        a: 'Dźwięk trafia na serwer, zostaje przeanalizowany i nie jest przechowywany po analizie. Nie ma kont ani reklamowych trackerów.',
      },
      {
        q: 'A jeśli nie uda się nagrać dźwięku?',
        a: 'Raport opiera się przede wszystkim na odpowiedziach z ankiety — tak jak mechanik, który najpierw wypytuje. Jeśli nagranie nic nie wnosi, aplikacja mówi o tym wprost.',
      },
    ],
  },
  download: {
    h2: 'Aplikacja na Androida',
    sub: 'Ankieta, nagranie dźwięku i pełny raport z prawdopodobieństwami są w aplikacji Stuk.',
    btn: 'Pobierz na Androida',
    meta: 'Wersja {version} · APK {size} MB · zaktualizowano {date}',
    installH: 'Jak zainstalować APK',
    steps: [
      'Pobierz plik przyciskiem powyżej.',
      'Otwórz go z powiadomienia albo z folderu „Pobrane”.',
      'Zezwól na instalację z tego źródła, gdy telefon zapyta.',
      'Zainstaluj aplikację i otwórz ją.',
    ],
    playNote: 'Gdy aplikacja trafi do Google Play, ta strona zostanie zaktualizowana.',
  },
  how: {
    title: 'Jak działa diagnoza po dźwięku | Stuk',
    description:
      'Bez upiększeń: ankieta jako główne narzędzie, analiza widmowa nagrania, model ' +
      'językowy i typowe bolączki poszczególnych modeli. Dlaczego wynik jest ' +
      'prawdopodobieństwem.',
    schemaName: 'Jak działa diagnoza po dźwięku',
    h1: 'Jak to działa',
    formH2: 'Ankieta to główne narzędzie',
    formP:
      'Każda diagnostyka zaczyna się od pytań: kiedy pojawił się dźwięk, do czego jest ' +
      'podobny, czy zależy od prędkości, obrotów, hamowania, skręcania. Odpowiedzi odcinają ' +
      'całe grupy przyczyn — to daje więcej niż jakikolwiek algorytm nałożony na kiepskie ' +
      'nagranie. Dlatego w Stuku ankieta jest pierwsza, a jej logika to drzewo decyzyjne: ' +
      'każda odpowiedź prowadzi do kolejnego, węższego pytania.',
    recH2: 'Co dzieje się z nagraniem',
    recP: [
      'Nagranie 15–30 sekund trafia na serwer. Najpierw zajmuje się nim zwykła matematyka, ' +
        'bez sieci neuronowych: widmo dźwięku, jego barwa (tonalny pisk albo szerokopasmowy ' +
        'szum), rytm uderzeń i ich częstotliwość, ocena obrotów silnika z pasma niskich ' +
        'częstotliwości. Każda cecha dostaje ocenę wiarygodności: jeśli nagranie jest ciche ' +
        'albo zaszumione, cechy są uczciwie oznaczane jako niepewne.',
      'Następnie model językowy zestawia wszystko razem: odpowiedzi z ankiety, cechy ' +
        'nagrania, samo audio oraz dane auta — markę, rocznik, przebieg i typowe bolączki ' +
        'tego modelu. Na wyjściu są 2–4 prawdopodobne przyczyny z procentami, poziom ' +
        'pilności i podpowiedzi dla warsztatu.',
    ],
    probH2: 'Dlaczego wynik jest prawdopodobieństwem',
    probP: [
      'Te same dźwięki wydają różne usterki: buczenie łożyska koła łatwo pomylić z szumem ' +
        'opon, a stukot łączników stabilizatora — z dużo poważniejszymi elementami ' +
        'zawieszenia. Na pewno rozróżnia je dopiero oględziny na podnośniku. Dlatego Stuk nie ' +
        'stawia diagnozy i nie obiecuje dokładności — uczciwie rozkłada prawdopodobieństwa ' +
        'i mówi, co sprawdzić w pierwszej kolejności.',
      'Dobre nagranie poprawia ocenę, ale nie zastępuje mechanika. Traktuj raport jak drugą ' +
        'opinię przed wizytą: rozmowa z warsztatem staje się konkretna, a wcisnąć zbędną ' +
        'naprawę jest trudniej.',
    ],
    dataH2: 'Dane',
    dataP:
      'Dźwięk jest analizowany na serwerze i nie jest przechowywany po analizie. Nie ma ' +
      'kont, statystyk ani reklamowych trackerów. Szczegóły w ',
    dataLink: 'polityce prywatności',
    dataTail: '.',
  },
  privacy: {
    title: 'Polityka prywatności | Stuk',
    description:
      'Co dzieje się z danymi w aplikacji Stuk: dźwięk jest przetwarzany na serwerze i nie ' +
      'jest przechowywany po analizie, nie ma kont ani statystyk.',
    h1: 'Polityka prywatności',
    intro:
      'Aplikacja Stuk zbiera minimum danych — dokładnie tyle, ile potrzeba do diagnozy.',
    items: [
      {
        strong: 'Nagranie',
        text: 'trafia na serwer wyłącznie po naciśnięciu przycisku, służy do analizy i nie jest przechowywane po niej.',
      },
      {
        strong: 'Dane auta',
        text: '(marka, model, rocznik, przebieg) i odpowiedzi z ankiety są przesyłane razem z nagraniem — są potrzebne do oceny przyczyn.',
      },
      {
        strong: 'Nie ma kont.',
        text: 'Aplikacja działa bez rejestracji; urządzenie dostaje losowy identyfikator na potrzeby dziennego limitu raportów.',
      },
      {
        strong: 'Nie ma trackerów firm trzecich.',
        text: 'Strona liczy anonimowe odsłony na własnym serwerze — bez plików cookie, bez identyfikatorów i bez przekazywania czegokolwiek komukolwiek. W aplikacji nie ma żadnych statystyk.',
      },
      {
        strong: 'Historia raportów',
        text: 'zostaje wyłącznie na twoim urządzeniu i znika razem z aplikacją.',
      },
    ],
    outro:
      'Mikrofon jest używany tylko w chwili nagrywania i wyłącznie na twoje wyraźne ' +
      'działanie. Raport to ocena prawdopodobieństwa, a nie diagnoza; decyzję o naprawie ' +
      'podejmuje mechanik po oględzinach.',
  },
};
