import type { Dict } from './types';

export const pl: Dict = {
  brand: 'Pro-Stuk',
  nav: {
    symptoms: 'Objawy',
    how: 'Jak to działa',
    articles: 'Artykuły',
    analytics: 'Statystyki',
    lang: 'Język',
  },
  footer: {
    disclaimer:
      'Pro-Stuk podaje ocenę prawdopodobieństwa na podstawie odpowiedzi i dźwięku, a nie ' +
      'diagnozę. O naprawie decyduje mechanik po obejrzeniu samochodu.',
    how: 'Jak to działa',
    privacy: 'Polityka prywatności',
    ruArticles: 'Artykuły (po rosyjsku)',
    ruOnly: 'Poradniki według objawów i artykuły (po rosyjsku)',
  },
  home: {
    title: 'Pro-Stuk — diagnoza samochodu po dźwięku',
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
        a: 'Nie. Pro-Stuk daje ocenę prawdopodobieństwa: listę możliwych przyczyn z procentami i poziom pilności. Dokładną diagnozę stawia mechanik po oględzinach — raport sprawia tylko, że przyjeżdżasz przygotowany.',
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
  quiz: {
    h2: 'Sprawdź od razu',
    sub: 'Kilka pytań i zobaczysz prawdopodobną przyczynę oraz to, jak pilna jest sprawa.',
    urgOk: 'Można jechać',
    urgWarn: 'Do warsztatu w tym tygodniu',
    urgStop: 'Zatrzymaj się',
    back: 'Wstecz',
    restart: 'Zacznij od nowa',
    cta: 'Pełny raport z dźwięku — w aplikacji',
    schemaMarked: 'Zakreślone jest to, na co wskazują twoje odpowiedzi — to wersja, a nie diagnoza.',
    schemaWhole: 'Cały układ.',
  },
  symptoms: {
    indexTitle: 'Dźwięki i objawy usterek samochodu — poradniki | Pro-Stuk',
    indexDescription: 'Stukanie, buczenie, pisk, zgrzyt: co oznacza każdy dźwięk samochodu, jak bardzo jest groźny i co sprawdzisz samodzielnie. Poradniki według objawów z drzewem diagnostycznym.',
    h1: 'Objawy według dźwięku',
    sub: 'Wybierz dźwięk najbliższy twojemu. W każdym poradniku: prawdopodobne przyczyny, sygnalizacja zagrożenia, bezpieczne samodzielne sprawdzenia i interaktywne drzewo diagnostyczne.',
    gDvigatel: 'Silnik',
    gDvizhenie: 'W ruchu',
    gTormozaRul: 'Hamulce i układ kierowniczy',
    gPodveska: 'Zawieszenie',
    causesH2: 'Możliwe przyczyny',
    thCause: 'Przyczyna',
    thLikelihood: 'Jak prawdopodobne',
    thDanger: 'Zagrożenie',
    canRideH2: 'Czy można jechać dalej',
    checksH2: 'Co sprawdzić samemu',
    quizH2: 'Zawęź przyczynę pytaniami',
    quizSub: 'Odpowiedz na kilka pytań — drzewo diagnostyczne skróci listę przyczyn dla twojego przypadku.',
    appHelpH2: 'W czym pomoże aplikacja',
    faqH2: 'Częste pytania',
    lightOk: 'można jechać',
    lightWarn: 'do warsztatu w tym tygodniu',
    lightStop: 'zatrzymaj się',
    mapTitle: 'Skąd dochodzi dźwięk',
    mapOk: 'Spokojnie dojedziesz do warsztatu',
    mapWarn: 'Nie odkładaj: sprawdź w najbliższych dniach',
    mapStop: 'Do warsztatu bez zwłoki',
    zoneDvigatel: 'komora silnika',
    zoneDvizhenie: 'koła i wszystko, co kręci się razem z nimi',
    zoneTormoza: 'hamulce i układ kierowniczy, okolica koła',
    zonePodveska: 'zawieszenie, okolica koła',
  },
  download: {
    h2: 'Aplikacja na Androida',
    sub: 'Ankieta, nagranie dźwięku i pełny raport z prawdopodobieństwami są w aplikacji Pro-Stuk.',
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
    title: 'Jak działa diagnoza po dźwięku | Pro-Stuk',
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
      'nagranie. Dlatego w Pro-Stuku ankieta jest pierwsza, a jej logika to drzewo decyzyjne: ' +
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
        'zawieszenia. Na pewno rozróżnia je dopiero oględziny na podnośniku. Dlatego Pro-Stuk nie ' +
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
    title: 'Polityka prywatności | Pro-Stuk',
    description:
      'Co dzieje się z danymi w aplikacji Pro-Stuk: dźwięk jest analizowany na serwerze i nie jest przechowywany, logowanie przez Google lub Apple, brak analityki.',
    h1: 'Polityka prywatności',
    updatedLabel: 'Zaktualizowano',
    intro:
      'Aplikacja Pro-Stuk zbiera minimum danych — dokładnie tyle, ile potrzeba do diagnozy, i nic ponadto.',
    items: [
      {
        strong: 'Nagranie',
        text: 'trafia na serwer dopiero po naciśnięciu przycisku. Służy do analizy i po wydaniu raportu nie jest przechowywane — ani na serwerze, ani w plikach.',
      },
      {
        strong: 'Dźwięk analizuje Google.',
        text: 'Nagranie trafia do Google Gemini API — usługi, która wykonuje analizę na nasze zlecenie. Nie towarzyszy mu nic, co pozwala Cię rozpoznać.',
      },
      {
        strong: 'Dane samochodu',
        text: '(marka, model, rocznik, przebieg) i odpowiedzi z ankiety idą razem z nagraniem — na ich podstawie ważone są przyczyny.',
      },
      {
        strong: 'Logowanie przez Google lub Apple.',
        text: 'Aplikacja nie zakłada własnych kont i nie pyta o hasło. Ze sklepu dostaje tylko stały numer użytkownika; przy nim trzymamy garaż i saldo sprawdzeń. Imienia, zdjęcia ani adresu e-mail nie pytamy i nie przechowujemy.',
      },
      {
        strong: 'Zakupy prowadzi sklep.',
        text: 'Płatność pobiera Google Play albo App Store; dane karty nigdy do nas nie trafiają. Nasz serwer dostaje wyłącznie potwierdzenie ze sklepu i dopisuje sprawdzenia; paragon zostaje, żeby nie dopisać dwa razy.',
      },
      {
        strong: 'Adres IP',
        text: 'jest widoczny dla serwera, jak przy każdym połączeniu z internetem, i służy wyłącznie ochronie przed przeciążeniem. Zostaje w pamięci na kilka minut, nie trafia do bazy i nie jest wiązany z raportami.',
      },
      {
        strong: 'Nie ma zewnętrznych trackerów ani reklam.',
        text: 'Strona liczy anonimowe odsłony na własnym serwerze — bez ciasteczek, bez identyfikatorów i bez przekazywania danych komukolwiek. W aplikacji nie ma żadnej analityki.',
      },
      {
        strong: 'Historia raportów',
        text: 'zostaje wyłącznie na Twoim urządzeniu i znika razem z aplikacją.',
      },
      {
        strong: 'Transmisja jest szyfrowana.',
        text: 'Aplikacja łączy się z serwerem przez HTTPS.',
      },
      {
        strong: 'Jak usunąć dane.',
        text:
          'Odinstalowanie aplikacji wystarczy, by skasować historię raportów w telefonie. Samo konto — razem z garażem i pozostałymi sprawdzeniami — usuwa się w aplikacji: «Ustawienia» → «Usuń konto». Usunięcie jest ostateczne, za niewykorzystane sprawdzenia nie ma zwrotu.',
      },
      {
        strong: 'Aplikacja nie jest dla dzieci.',
        text: 'Jest przeznaczona dla kierowców.',
      },
    ],
    outro:
      'Mikrofon włącza się tylko na czas nagrania i tylko na Twoje polecenie. Raport to ocena prawdopodobieństwa, a nie diagnoza; decyzję o naprawie podejmuje mechanik po oględzinach.',
    contactTitle: 'Kontakt',
    contactText:
      'Aplikację i stronę Pro-Stuk prowadzi {operator}. Pytania o dane, skargi i wnioski o usunięcie:',
    changes:
      'Jeśli polityka się zmieni, zmieni się też data aktualizacji na górze strony.',
  },
  og: {
    tagline: 'Znajdź usterkę po dźwięku',
  },
  notFound: {
    title: 'Nie znaleziono strony — Pro-Stuk',
    description:
      'Takiej strony tu nie ma. Wróć na stronę główną albo otwórz poradniki objawów po dźwięku.',
    h1: 'Nie znaleziono strony',
    text:
      'W adresie jest literówka albo strona została przeniesiona. Dźwięk, przez który tu trafiłeś, nie zniknął — zacznij od strony głównej lub otwórz poradniki objawów.',
    home: 'Na stronę główną',
  },
};
