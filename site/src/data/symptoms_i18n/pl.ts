import type { SymptomTr } from '../types';

/** Разборы симптомов по-польски. Структура — из русских файлов рядом. */
export const pages: Record<string, SymptomTr> = {
  'stuk-v-dvigatele': {
    h1: 'Stukanie w silniku',
    metaTitle: 'Silnik stuka: przyczyny, zagrożenie, co robić | Stuk',
    description:
      'Dlaczego silnik stuka: od niegroźnego tykania zaworów po zużyte panewki wału. Jak rozpoznać groźne stukanie, czy można jechać i co sprawdzić samemu.',
    intro: [
      'Stukanie w silniku to objaw o najszerszym rozrzucie powagi: za tym samym słowem kryje się i niegroźne klekotanie wtryskiwaczy, i zużyte panewki wału korbowego, przy których każdy kilometr przybliża remont. Dobra wiadomość jest taka, że różne stuki brzmią inaczej i pojawiają się w różnych warunkach — po tych cechach krąg przyczyn zawęża się szybko.',
      'Pytania, od których zaczyna każdy mechanik silnikowy: gdzie stuka (u góry silnika czy z głębi), kiedy (na zimno, na ciepło, pod obciążeniem) i czy dźwięk zmienia się z obrotami. Lekkie, częste tykanie z góry to zwykle układ rozrządu. Głuchy stuk z dołu, który przyspiesza przy dodaniu gazu i rośnie pod obciążeniem, to wariant niepokojący.',
    ],
    causes: [
      { name: 'Za duży luz zaworowy albo hydrauliczne popychacze', likelihood: 'Bardzo często — typowa przyczyna tykania z góry' },
      { name: 'Normalne klekotanie wtryskiwaczy (bezpośredni wtrysk i diesle)', likelihood: 'Często — i to nie jest usterka' },
      { name: 'Osprzęt: koła pasowe, wsporniki, sprzęgło sprężarki klimatyzacji', likelihood: 'Często, gdy stuk nie zależy od gazu' },
      { name: 'Spalanie stukowe przy przyspieszaniu (detonacja)', likelihood: 'Często po zatankowaniu benzyny o zbyt niskiej liczbie oktanowej' },
      { name: 'Panewki główne i korbowodowe', likelihood: 'Rzadziej, ale to najgroźniejszy scenariusz' },
    ],
    canRide: [
      'Zależy od charakteru stuku. Z równym tykaniem z góry można jeździć: rozrząd zużywa się miesiącami, a nie w jednej podróży — ale umów regulację w ciągu najbliższych dwóch tygodni. Przy klekotaniu wtryskiwaczy w silniku z bezpośrednim wtryskiem nie trzeba robić nic: tak właśnie pracuje układ paliwowy.',
      'Głuchy stuk z głębi silnika, który przyspiesza z obrotami i staje się głośniejszy pod obciążeniem, to powód, żeby się zatrzymać. Tak brzmią zużyte panewki — łożyska ślizgowe, w których obraca się wał korbowy. Dalsza jazda może skończyć się przekręceniem panewki albo zatarciem silnika; lepiej nie jechać do warsztatu o własnych siłach, tylko wezwać lawetę.',
    ],
    checks: [
      'Sprawdzić poziom oleju bagnetem: niski poziom towarzyszy stukom silnika i je wzmacnia, a stuk panewek przy niskim ciśnieniu oleju postępuje szybko.',
      'Wsłuchać się, skąd dochodzi dźwięk: stań przy otwartej masce — tykanie zaworów słychać u góry, stuk panewek jest głuchy i dochodzi z głębi, od dołu.',
      'Delikatnie dodać gazu na luzie: stuk, który przyspiesza wraz z obrotami i brzmi głośniej pod obciążeniem, jest poważniejszy niż taki, który żyje własnym życiem.',
      'Przypomnieć sobie ostatnie tankowanie: metaliczny dzwoniący dźwięk przy przyspieszaniu po wątpliwej benzynie wygląda na spalanie stukowe i często znika po jednym baku dobrego paliwa.',
      'Sprawdzić, czy nie świeci kontrolka ciśnienia oleju: czerwona oliwiarka razem ze stukiem oznacza natychmiastowe zgaszenie silnika.',
    ],
    appHelp:
      'Aplikacja Stuk przeprowadzi cię przez te same pytania, które zadaje mechanik silnikowy, nagra dźwięk i oceni jego widmo oraz rytm: jak często idą uderzenia i jak to się ma do obrotów — przy stuku zaworów i stuku wału ta zależność jest inna. W raporcie znajdziesz prawdopodobne przyczyny z procentami, sygnalizację pilności i zwroty przydatne w rozmowie w warsztacie.',
    faq: [
      {
        q: 'Dlaczego silnik stuka tylko na zimno?',
        a: 'Dopóki silnik nie jest rozgrzany, luzy między częściami są większe, a gęsty olej nie dotarł jeszcze wszędzie. Tykanie popychaczy albo głuchy stuk tłoków przez pierwsze minuty po zimnym rozruchu, który całkowicie znika po rozgrzaniu, to zwykle sprawa do obserwacji, a nie awaria.',
      },
      {
        q: 'Jak brzmi najgroźniejsze stukanie silnika?',
        a: 'Głucho, nisko, „z głębi” silnika; przyspiesza z obrotami i rośnie pod obciążeniem — przy przyspieszaniu albo pod górę. Tak stukają panewki korbowodowe i główne. Z takim dźwiękiem lepiej nie jechać samemu, tylko jak najszybciej dostarczyć auto do mechanika.',
      },
      {
        q: 'Czy stukanie może być normą?',
        a: 'Tak. Silniki z bezpośrednim wtryskiem (TSI, GDI) i diesle zawsze klekoczą wtryskiwaczami — dźwięk jest taki sam na zimno i na ciepło, a na zewnątrz głośniejszy niż w kabinie. To normalna praca, nie usterka.',
      },
    ],
  },

  'skrip-tormozov': {
    h1: 'Piszczenie hamulców',
    metaTitle: 'Hamulce piszczą: groźne czy nie, przyczyny i co robić | Stuk',
    description:
      'Dlaczego hamulce piszczą: poranna warstewka rdzy, czujnik zużycia klocków albo problem z tarczami. Jak odróżnić niegroźny pisk od ostrzeżenia.',
    intro: [
      'Pisk przy hamowaniu to ten rzadki przypadek, w którym najczęstsza przyczyna jest zarazem najbardziej niegroźna. Przez noc, po deszczu albo po myjni tarcze pokrywają się cienką warstewką rdzy; pierwsze hamowania ją zdzierają — stąd pisk. Jeśli po paru minutach jazdy dźwięk zniknął, nie trzeba nic robić: to normalne życie każdego auta z hamulcami tarczowymi.',
      'Co innego pisk przy każdym hamowaniu. Wiele klocków ma metalowy czujnik zużycia: blaszkę, która celowo zaczyna dotykać tarczy i piszczeć, gdy okładzina zużyje się do granicy. To zamierzone ostrzeżenie: sprawdź klocki, zanim pisk zamieni się w zgrzyt metalu o metal — a ten oznacza już zniszczone tarcze i dłuższą drogę hamowania.',
    ],
    causes: [
      { name: 'Warstewka rdzy po postoju, deszczu albo myjni', likelihood: 'Najczęściej — jeśli pisk znika po pierwszych hamowaniach' },
      { name: 'Czujnik zużycia: klocki na wykończeniu', likelihood: 'Często — jeśli piszczy przy każdym hamowaniu' },
      { name: 'Stwardniałe albo tanie klocki, pył między klockiem a tarczą', likelihood: 'Często; nieprzyjemne, ale niegroźne' },
      { name: 'Klocki starte do metalu (zgrzyt)', likelihood: 'Jeśli ostrzeżenie zostało zignorowane' },
    ],
    canRide: [
      'Z porannym piskiem, który znika po pierwszych hamowaniach, jeździsz bez ograniczeń: kilka łagodnych naciśnięć pedału czyści tarcze i sprawa jest zamknięta do następnego deszczu.',
      'Ze stałym piszczeniem też można jeździć — hamulce wciąż pracują w pełni — ale umów przegląd na ten tydzień, a nie „kiedyś”: jeśli piszczy czujnik zużycia, następnym etapem jest zgrzyt, klocki starte do płytki nośnej i rachunek obejmujący również tarcze. Metal o metal to sygnał stop: tylko ostrożnie do warsztatu, hamując wcześnie i łagodnie.',
    ],
    checks: [
      'Prześledzić prawidłowość: pisk tylko przy pierwszych hamowaniach po postoju albo przy wilgoci to rdza; przy każdym hamowaniu to powód do przeglądu.',
      'Zajrzeć między szprychy felgi: w wielu autach widać zewnętrzny klocek. Okładzina cieńsza niż 3–4 mm kwalifikuje się do wymiany.',
      'Posłuchać, czy to jedna strona, czy obie: pisk z jednej strony częściej wskazuje na czujnik zużycia albo zakleszczający się zacisk właśnie tam.',
      'Sprawdzić, czy nie ma pisku w jeździe bez hamowania, który zmienia się przy lekkim dotknięciu pedału — tak czujnik zużycia ociera tarczę jeszcze przed naciśnięciem.',
      'Zwrócić uwagę na pedał i tor jazdy: ściąganie na bok przy hamowaniu, pulsujący albo „długi” pedał są poważniejsze niż pisk i oznaczają warsztat bez zwłoki.',
    ],
    appHelp:
      'Aplikacja Stuk oddziela scenariusz niegroźny od niepokojącego tymi samymi pytaniami — kiedy piszczy i czy dźwięk znika — a nagranie pomaga odróżnić wysoki pisk czujnika od zgrzytu. W raporcie znajdziesz prawdopodobne przyczyny z procentami i sygnalizację: można jechać, do warsztatu w tym tygodniu albo zatrzymaj się.',
    faq: [
      {
        q: 'Dlaczego hamulce piszczą rano i w deszczu?',
        a: 'Na żeliwnych tarczach w wilgotnym powietrzu w kilka godzin tworzy się cienka warstwa rdzy. Pierwsze hamowania ją zdzierają — stąd pisk i lekkie skrobanie, które szybko znikają. To normalne i nie wymaga naprawy.',
      },
      {
        q: 'Czym jest czujnik zużycia klocków?',
        a: 'To metalowa blaszka na klocku, która zaczyna dotykać tarczy i głośno piszczeć, gdy okładzina zużyje się do granicy. To ostrzeżenie zaplanowane przez konstruktorów: słyszysz stały pisk — umów wymianę klocków, zanim zacznie się zgrzyt.',
      },
      {
        q: 'Czym pisk różni się od zgrzytu?',
        a: 'Pisk to dźwięk wysoki, przy którym hamulce nadal pracują w pełni. Zgrzyt to szorstki dźwięk metalu o metal: okładzina się skończyła i tarczę trze stalowa płytka nośna klocka. Ze zgrzytem nie wolno jeździć — tylko ostrożnie do warsztatu.',
      },
    ],
  },

  'gul-pri-dvizhenii': {
    h1: 'Buczenie podczas jazdy',
    metaTitle: 'Buczenie podczas jazdy: łożysko, opony czy skrzynia | Stuk',
    description:
      'Równe buczenie przy prędkości: łożysko koła, opony, skrzynia biegów albo dyferencjał. Proste testy bez warsztatu — test na luzie i łagodne zakręty — zawężają przyczynę.',
    intro: [
      'Równe buczenie, które pojawia się wraz z prędkością i rośnie razem z nią, pochodzi najczęściej z jednego z dwóch źródeł: z łożyska koła — łożyska, na którym obraca się koło — albo z opon. Da się je rozróżnić bez warsztatu. Łożysko buczy tak samo na każdym asfalcie, przypomina startujący w oddali samolot i często zmienia się w łagodnych zakrętach. Opony reagują na nawierzchnię: na świeżym asfalcie są cichsze, na szorstkim głośniejsze; szczególnie buczą opony zimowe, terenowe i nierównomiernie zużyte.',
      'Rzadziej źródłem jest układ napędowy: skrzynia biegów, dyferencjał albo wał napędowy w autach z napędem na tył i na cztery koła. Test na luzie porządkuje wersje: rozpędź się do prędkości, przy której słychać buczenie, włącz luz i toczyć się. Jeśli buczenie zostało, jest związane z obracaniem się kół — łożyska, opony, nawierzchnia. Jeśli zniknęło razem z obrotami silnika, szukać trzeba w silniku i w tym, co on napędza.',
    ],
    causes: [
      { name: 'Łożysko koła', likelihood: 'Najczęściej — równe buczenie, rośnie z prędkością, nawierzchnia bez znaczenia' },
      { name: 'Hałas opon', likelihood: 'Często — zależy od nawierzchni; zimowe i zużyte są głośniejsze' },
      { name: 'Skrzynia biegów albo dyferencjał', likelihood: 'Rzadziej — wycie zmienia się z biegiem albo przy dodaniu gazu' },
      { name: 'Wał napędowy (napęd na tył i na cztery koła)', likelihood: 'Buczenie z drganiem w podłodze w wąskim zakresie prędkości' },
      { name: 'Szum aerodynamiczny: uszczelki, bagażnik dachowy', likelihood: 'Dopiero powyżej 70–90 km/h' },
    ],
    canRide: [
      'Z buczącym łożyskiem można jeździć, ale nie jest to dźwięk, który wolno ciągnąć miesiącami: zużyte łożysko stopniowo dostaje luz — swobodny ruch koła — a w zaniedbanym przypadku może się zatrzeć. Rozsądny plan to diagnostyka w ciągu tygodnia, a dalekie szybkie trasy przełożone na potem. Jeśli buczenie nagle się wzmogło albo doszły drgania, nie zwlekaj.',
      'Hałas opon i szum aerodynamiczny to kwestia komfortu, nie bezpieczeństwa: z nimi jeździsz bez ograniczeń. Wycie skrzyni albo dyferencjału też nie zmusza do zjazdu na pobocze, ale nie powinno się ciągnąć: wcześnie często wystarcza wymiana oleju, a późna naprawa z wałkami i kołami zębatymi kosztuje kilka razy więcej.',
    ],
    checks: [
      'Test na luzie: rozpędź się do „buczącej” prędkości, włącz luz i toczyć się. Buczenie zostało — koła i łożyska; zniknęło razem z obrotami — silnik i napęd.',
      'Łagodne łuki na bezpiecznej prostej: jeśli w płynnym łuku w jedną stronę buczenie cichnie, a w drugą się wzmaga, wygląda to na łożysko koła, a strona podpowiada które.',
      'Porównać nawierzchnie: przejedź odcinek po świeżym asfalcie i odcinek po szorstkim. Wyraźna różnica głośności wskazuje na opony.',
      'Obejrzeć bieżnik i sprawdzić ciśnienie: zużycie „piłokształtne” — stopnie na krawędziach klocków — czyni opony głośnymi i sugeruje rozregulowaną geometrię albo zmęczone amortyzatory.',
      'W skrzyni manualnej sprawdzić, czy wycie zmienia się na różnych biegach przy tej samej prędkości; przy napędzie na tył — czy razem z buczeniem pojawia się drżenie podłogi w wąskim zakresie prędkości.',
    ],
    appHelp:
      'Aplikacja Stuk przeprowadzi cię przez te same pytania — czy buczenie zostaje na luzie, czy zmienia się w zakrętach i z nawierzchnią — i pomoże nagrać dźwięk, by porównać jego charakter z typowymi przypadkami. W raporcie znajdziesz prawdopodobne przyczyny z procentami i wniosek: jedź spokojnie, zaplanuj warsztat albo sprawdź bez zwłoki.',
    faq: [
      {
        q: 'Jak odróżnić buczenie łożyska od hałasu opon?',
        a: 'Po reakcji na drogę i zakręty. Hałas opon zmienia się wraz z nawierzchnią: na nowym asfalcie jest cichszy, na szorstkim głośniejszy. Łożysko buczy wszędzie tak samo, za to często reaguje na łagodne zakręty, gdy obciążenie przechodzi na koło zewnętrzne. Pomaga też obejrzenie bieżnika: nierównomiernie zużyte opony buczą same z siebie.',
      },
      {
        q: 'Czy jazda z buczącym łożyskiem jest groźna?',
        a: 'Na początku nie, ale nie wolno ciągnąć: z czasem pojawia się luz, koło zaczyna bić, a w skrajnym przypadku łożysko się zatrze. Sprawdzenie jest proste: na podnośniku mechanik zakręci kołami i znajdzie hałaśliwą piastę w kilka minut. Rozsądny termin wizyty to tydzień.',
      },
      {
        q: 'Dlaczego buczenie zmienia się w zakrętach?',
        a: 'W zakręcie ciężar auta przechodzi na koła zewnętrzne. Jeśli buczy prawe łożysko, przy skręcie w lewo obciążenie na nie rośnie i buczenie się wzmaga, a przy skręcie w prawo słabnie. Ta prawidłowość pozwala ustalić stronę jeszcze przed warsztatem: zapamiętaj ją i powiedz mechanikowi.',
      },
    ],
  },

  'stuk-v-podveske': {
    h1: 'Stukanie w zawieszeniu',
    metaTitle: 'Stuk w zawieszeniu: co stuka i czy można jechać | Stuk',
    description:
      'Co stuka w zawieszeniu: łączniki stabilizatora, tuleje metalowo-gumowe, przekładnia kierownicza albo pęknięta sprężyna. Jak rozróżnić stuki po charakterze i kiedy do warsztatu.',
    intro: [
      'Zawieszenie samochodu osobowego to kilkadziesiąt przegubów, tulei gumowych i poduszek, a z wiekiem luz — swobodny ruch — w którymś z nich jest prawie nieunikniony. Poluzowany element odpowiada na każdą nierówność stukiem: zawieszenie ugina się i prostuje, a zużyta część bije w swoim mocowaniu. Dobra wiadomość jest taka, że pierwsze poddają się zwykle tanie części — łączniki stabilizatora, niewielkie drążki z przegubami, które w zawieszeniu zużywają się przed wszystkim innym.',
      'Charakter dźwięku mówi wiele jeszcze przed podnośnikiem. Częsty głuchy stukot na drobnych falach i szczelinach to podpis łączników stabilizatora. Pojedyncze uderzenia na dziurach i progach zwalniających wskazują na tuleje metalowo-gumowe — gumowe przeguby, przez które wahacze mocowane są do nadwozia — albo na zmęczone amortyzatory. Stuk, który przechodzi prosto na kierownicę i czuć go w dłoniach, to luz w przekładni kierowniczej. A skrzypienie „jak stare łóżko” to wcale nie stuk, tylko sucha guma tulei: najbardziej niegroźna historia z wymienionych.',
    ],
    causes: [
      { name: 'Łączniki stabilizatora', likelihood: 'Najczęściej — częsty głuchy stukot na drobnych nierównościach' },
      { name: 'Tuleje wahaczy albo amortyzatory', likelihood: 'Często — pojedyncze głuche uderzenia na dziurach' },
      { name: 'Luz w przekładni kierowniczej', likelihood: 'Rzadziej — stuk przechodzi na kierownicę, czuć go w dłoniach' },
      { name: 'Gumy stabilizatora, wyschnięte tuleje (skrzypienie, nie stuk)', likelihood: 'Często — zwłaszcza na mrozie i przy wilgoci' },
      { name: 'Pęknięta sprężyna zawieszenia', likelihood: 'Rzadko — nagle po uderzeniu w dziurę, róg auta osiadł' },
    ],
    canRide: [
      'Z większością stuków w zawieszeniu można jeździć: łączniki stabilizatora, tuleje i gumy nie odmawiają nagle. Odkładać diagnostyki na miesiące jednak nie warto — rozbity element przekazuje uderzenia dalej i przyspiesza zużycie sąsiadów, a podobnie na słuch mogą stukać rzeczy poważniejsze. Rozsądny termin to przegląd w ciągu tygodnia–dwóch, a do tego czasu wolniejsze pokonywanie dużych dziur.',
      'Dwa scenariusze wymagają więcej uwagi. Stuk przechodzący na kierownicę dotyczy układu kierowniczego, zespołu bezpieczeństwa: kontrola w najbliższych dniach, a jeśli kierownica zrobiła się „pusta” w położeniu centralnym albo auto pływa po pasie — bez zwłoki. Łomot, który pojawił się nagle po uderzeniu w dziurę, razem z osiadłym rogiem nadwozia, to typowy obraz pękniętej sprężyny: do warsztatu jedź łagodnie, bo ułamany zwój może się przesunąć i uszkodzić oponę.',
    ],
    checks: [
      'Pobujać stojące auto ręką za błotnik nad każdym kołem: skrzypienie gum i tulei często odtwarza się już na miejscu.',
      'Prześledzić prawidłowość: stuka na drobnych falach — bardziej prawdopodobne łączniki stabilizatora; na pojedynczych dziurach — tuleje i amortyzatory.',
      'Ustalić, czy dźwięk jest z przodu czy z tyłu i czy przechodzi na kierownicę: stuk czuć w dłoniach, a cichnie przy lekkim napięciu kierownicy — to oznaka luzu w przekładni kierowniczej.',
      'Nacisnąć każdy róg auta w dół i puścić: nadwozie powinno wrócić na miejsce bez kołysania. Jeśli dalej się buja — amortyzator jest zmęczony.',
      'Zajrzeć za koło od dołu, niczego nie rozbierając: ułamany zwój sprężyny często widać gołym okiem, a przy okazji widać, czy jeden róg auta nie osiadł.',
    ],
    appHelp:
      'Aplikacja Stuk prowadzi przez te same rozwidlenia co mechanik przy pierwszych oględzinach: jaki to dźwięk, na jakich nierównościach, z przodu czy z tyłu, czy przechodzi na kierownicę. Nagranie pozwala nie zgubić szczegółów do wizyty, a w raporcie są prawdopodobne przyczyny z procentami i czytelna sygnalizacja: można jechać, pokaż w tym tygodniu albo sprawdź pilnie.',
    faq: [
      {
        q: 'Czy jazda ze stukiem w zawieszeniu jest groźna?',
        a: 'Najczęściej stuk nie oznacza natychmiastowej awarii: łączniki stabilizatora i tuleje zużywają się stopniowo. Ale luz z czasem rośnie i wykańcza sąsiednie elementy, więc rozsądny termin diagnostyki to tydzień–dwa. Wyjątki to stuk na kierownicę i łomot pękniętej sprężyny: z nimi do warsztatu w najbliższych dniach.',
      },
      {
        q: 'Dlaczego stuka na drobnych nierównościach, a duże dziury auto pokonuje cicho?',
        a: 'To typowy podpis łączników stabilizatora: ich małe przeguby „młotkują” właśnie na drobnych falach, kostce i szczelinach, gdzie zawieszenie pracuje często i z niewielkim skokiem. Na dużej dziurze takiego luzu nie zawsze słychać. Z tyłu podobnie stukają łączniki tylnego stabilizatora i tuleje belki.',
      },
      {
        q: 'Czy może stukać coś innego niż zawieszenie?',
        a: 'Tak, i to nierzadko. Głuchy stuk z tyłu daje niezamocowany podnośnik albo koło zapasowe w bagażniku, stukot z przodu u góry — luz zamka maski, grzechot od dołu — mocowania tłumika. Pojedynczy „buch” przy pierwszym ruszeniu po długim postoju to przyklejone do tarcz klocki hamulcowe i jest to niegroźne.',
      },
    ],
  },

  'gul-podshipnika-stupitsy': {
    h1: 'Buczenie łożyska koła',
    metaTitle: 'Łożysko koła buczy: jak je rozpoznać | Stuk',
    description:
      'Jak brzmi zużyte łożysko koła, jak odróżnić je od hałasu opon, które koło buczy i jak długo można tak jeździć.',
    intro: [
      'Łożysko koła to element, na którym obraca się koło. Gdy się zużywa, pojawia się równe buczenie rosnące z prędkością: wielu porównuje je do startującego samolotu albo buczenia transformatora. Zaczyna się ledwo słyszalnie od 60–80 km/h, z czasem słychać je przy każdej prędkości i zaczyna dochodzić jako drganie.',
      'Największa trudność to oddzielić łożysko od hałasu opon: buczą podobnie. Są dwa pewne domowe testy. Pierwszy to nawierzchnia: hałas opon zmienia się z rodzajem asfaltu, buczenie łożyska jest wszędzie takie samo. Drugi to łagodne zmiany pasa przy prędkości: jeśli w szerokim łuku buczenie się zmienia, to prawie na pewno łożysko — i to obciążonej strony.',
    ],
    causes: [
      { name: 'Zużyte łożysko koła', likelihood: 'Najczęściej, gdy buczenie jest równe i nie zależy od nawierzchni' },
      { name: 'Hałas opon (zimowe, terenowe, nierównomierne zużycie)', likelihood: 'Bardzo często — główny sobowtór łożyska' },
      { name: 'Dyferencjał albo przekładnia główna (napęd na tył i na cztery koła)', likelihood: 'Rzadziej; ton takiego buczenia zmienia się przy dodaniu gazu' },
      { name: 'Łożysko podporowe wału napędowego', likelihood: 'Rzadko, tylko w autach z wałem napędowym' },
    ],
    canRide: [
      'Na wczesnym etapie tak, ale z zastrzeżeniami. Zużyte łożysko nie rozsypuje się natychmiast: od pierwszego buczenia do stanu krytycznego mijają zwykle tysiące kilometrów. Proces idzie jednak tylko w jedną stronę, a finał ma nieprzyjemny: luz koła, rozbite gniazdo, w skrajnym przypadku zatarcie piasty w ruchu.',
      'Dlatego zasada jest prosta: zauważyłeś buczenie — pokaż auto w warsztacie w ciągu tygodnia–dwóch, a dalekie szybkie trasy przełóż na później. Jeśli buczenie nagle się wzmogło, pojawiły się drgania, koło ma luz albo auto ściąga w bok — jedź na diagnostykę od razu i nie autostradą.',
    ],
    checks: [
      'Test nawierzchni: przejedź ten sam odcinek po różnym asfalcie. Buczenie się nie zmieniło — raczej łożysko; ucichło na gładkiej nawierzchni — raczej opony.',
      'Test zakrętu: na pustej drodze przy 60–80 km/h płynnie zmień pas. Buczenie ucichło przy skręcie w prawo i wzmogło się przy skręcie w lewo — obciążana jest prawa strona, prawdopodobne prawe łożysko; i odwrotnie.',
      'Sprawdzenie luzem: rozpędź się i toczyć na luzie. Buczenie zostało — źródło kręci się razem z kołami, a nie z silnikiem.',
      'Obejrzeć bieżnik: „piła” i plamy nierównomiernego zużycia czynią opony głośnymi i wskazują na geometrię.',
      'Po jeździe ostrożnie zbliżyć rękę do piast (nie dotykając tarczy hamulcowej — jest gorąca): wyraźnie cieplejsza piasta z jednej strony to dodatkowa poszlaka.',
    ],
    appHelp:
      'Aplikacja Stuk zada te same pytania kontrolne — o nawierzchnię, zakręty i toczenie na luzie — nagra buczenie i oceni jego charakter: równy szerokopasmowy szum opon i buczenie łożyska wyglądają w widmie inaczej. W raporcie będą prawdopodobieństwa przyczyn, pilność i podpowiedź, którą stronę wskazać mechanikowi.',
    faq: [
      {
        q: 'Dlaczego buczenie zmienia się w zakrętach?',
        a: 'W zakręcie ciężar przechodzi na koła zewnętrzne. Jeśli przy skręcie w lewo buczenie rośnie, obciążona jest prawa strona — więc buczy najpewniej prawe łożysko. Przy skręcie w prawo odwrotnie. Warto zapamiętać tę cechę i powiedzieć o niej w warsztacie: skraca poszukiwania o połowę.',
      },
      {
        q: 'Jak długo można jeździć z buczącym łożyskiem?',
        a: 'Nie ma jednej liczby: od pierwszych objawów do groźnego luzu mijają zwykle tysiące kilometrów, ale tempo zużycia jest nieprzewidywalne. Rozsądny kompromis: umówić diagnostykę w ciągu tygodnia–dwóch i do tego czasu nie planować dalekich szybkich tras.',
      },
      {
        q: 'Czy można pomylić łożysko z oponami?',
        a: 'Łatwo — to najczęstszy błąd. Odróżniają je dwie cechy: hałas opon zależy od nawierzchni i nie zmienia się w zakrętach, a buczenie łożyska jest takie samo na każdym asfalcie i reaguje na przeniesienie ciężaru w szerokich łukach.',
      },
    ],
  },

  'stuk-na-nerovnostyah': {
    h1: 'Stukanie na nierównościach',
    metaTitle: 'Stuki na nierównościach: przyczyny i co sprawdzić samemu | Stuk',
    description:
      'Stukanie na nierównościach: częste na drobnych falach, pojedyncze uderzenia na dziurach albo stuk na kierownicę. Które elementy zawiniły i czy można jechać.',
    intro: [
      'Stuk, który pojawia się tylko na nierównościach — szczelinach, kostce, progach zwalniających — prawie zawsze pochodzi z podwozia. Przy pokonywaniu wyboju zawieszenie ugina się i prostuje, a jeśli w którymś przegubie pojawił się luz, element przy każdym skoku bije w swoim mocowaniu. W autach starszych niż pięć–siedem lat to zwyczajna sprawa, a winne są najczęściej tanie części eksploatacyjne, a nie duże zespoły.',
      'Rysunek stuku zawęża listę podejrzanych. Częsty głuchy stukot na drobnych falach z przodu to klasyk łączników stabilizatora; ten sam rysunek z tyłu to łączniki tylnego stabilizatora albo tuleje belki (gumowe tuleje, przez które belka mocowana jest do nadwozia). Pojedyncze uderzenia na dziurach to tuleje wahaczy albo zmęczone amortyzatory. Osobny przypadek — stuk w takt obrotu koła, który pojawił się po niedawnej wymianie opon: to mogą być niedokręcone śruby koła i tę wersję sprawdza się pierwszą.',
    ],
    causes: [
      { name: 'Łączniki stabilizatora', likelihood: 'Najczęściej — częsty stukot z przodu na drobnych nierównościach' },
      { name: 'Tylne zawieszenie: łączniki stabilizatora, tuleje belki', likelihood: 'Często — jeśli stuk jest z tyłu' },
      { name: 'Tuleje wahaczy albo amortyzatory', likelihood: 'Często — pojedyncze uderzenia na dziurach' },
      { name: 'Luz w przekładni kierowniczej', likelihood: 'Rzadziej — stuk przechodzi prosto na kierownicę' },
      { name: 'Niedokręcone śruby koła', likelihood: 'Rzadko — ale to pierwsza rzecz do sprawdzenia po wymianie opon' },
    ],
    canRide: [
      'Z typowym stukiem łączników stabilizatora albo tulei można jeździć: te elementy nie odmawiają nagle, a tydzień–dwa do diagnostyki niczego nie zmienią, jeśli duże dziury pokonujesz wolno. Sama diagnostyka zawieszenia jest szybka: mechanik poruszy przegubami na podnośniku i znajdzie luz w kilka minut. Ciągnąć miesiącami mimo wszystko nie warto: zużyty przegub przekazuje uderzenia sąsiednim częściom i przyspiesza ich zużycie.',
      'Inaczej wygląda rytmiczny stuk w takt obrotu koła w pierwszych dniach po wymianie opon: to powód, by zatrzymać się przy pierwszej okazji i sprawdzić dokręcenie śrub wszystkich kół kluczem. Koło na poluzowanych śrubach rozbija otwory felgi, a w najgorszym razie może się odkręcić w ruchu. Stuk przechodzący na kierownicę też nie znosi zwłoki: układ kierowniczy to zespół bezpieczeństwa, sprawdza się go w najbliższych dniach.',
    ],
    checks: [
      'Jeśli koła były niedawno zdejmowane albo przekładane — najpierw sprawdź dokręcenie śrub wszystkich kół kluczem, zanim rozważysz inne wersje.',
      'Zauważyć rysunek stuku: częsty stukot na drobnych falach i pojedyncze uderzenia na dziurach to różne elementy, a taki szczegół od razu skraca mechanikowi poszukiwania.',
      'Ustalić, czy stuk jest z przodu czy z tyłu: przejedź wolno z uchylonymi szybami wzdłuż muru albo płotu — odbity dźwięk słychać znacznie lepiej.',
      'Potrzymać kierownicę lekko napiętą na nierównej drodze: jeśli stuk czuć w dłoniach i cichnie, wygląda to na luz w przekładni kierowniczej, warto o tym powiedzieć w warsztacie.',
      'Wykluczyć proste rzeczy: wyjąć luźne przedmioty z bagażnika, sprawdzić mocowanie koła zapasowego i podnośnika, nacisnąć zamkniętą maskę — luźny zamek maski stuka podobnie do zawieszenia.',
    ],
    appHelp:
      'Aplikacja Stuk zadaje te same pytania co ta strona, tylko krok po kroku: jaki dokładnie stuk, gdzie go słychać, jak zachowuje się na różnych nierównościach. Z odpowiedzi i nagrania układa raport z prawdopodobnymi przyczynami i sygnalizacją pilności — z nim łatwiej zdecydować, czy jechać do warsztatu jutro, czy przy okazji.',
    faq: [
      {
        q: 'Dlaczego stuk słychać tylko na nierównościach, a na gładkiej drodze jest cicho?',
        a: 'Luz w przegubie zawieszenia ujawnia się tylko wtedy, gdy zawieszenie pracuje: na wyboju element przesuwa się w mocowaniu i uderza. Na gładkim asfalcie skoki są małe i zużyty element milczy. Dlatego stuk na nierównościach prawie zawsze dotyczy podwozia, a nie silnika.',
      },
      {
        q: 'Niedawno była wymiana opon i pojawił się stuk. Przypadek?',
        a: 'Raczej nie. Rytmiczny stuk albo łomot w takt obrotu koła w pierwszych dniach po zdjęciu kół to klasyka niedokręconych śrub. Sprawdzenie zajmuje pięć minut: przejść kluczem po śrubach wszystkich kół. Po każdej wymianie warto powtórzyć dokręcanie po 50–100 kilometrach.',
      },
      {
        q: 'Stukają łączniki stabilizatora. To pilne?',
        a: 'Same łączniki nie są groźne — to niewielkie drążki, które w zawieszeniu zużywają się pierwsze, a auto pozostaje sterowne. Ale podobnie mogą stukać poważniejsze elementy, dlatego diagnostyka w ciągu tygodnia–dwóch jest potrzebna: na podnośniku źródło znajduje się w minuty.',
      },
    ],
  },

  'tikanie-dvigatelya': {
    h1: 'Tykanie silnika',
    metaTitle: 'Silnik tyka: norma czy zużycie, przyczyny | Stuk',
    description:
      'Skąd bierze się tykanie silnika: luzy zaworowe, hydrauliczne popychacze, normalne klekotanie wtryskiwaczy albo kolektor wydechowy. Jak odróżnić normę od zużycia.',
    intro: [
      'Równe, częste tykanie to najzwyklejszy z dźwięków silnika i wcale nie zawsze oznacza usterkę. W silnikach z bezpośrednim wtryskiem (TSI, GDI i podobnych) oraz w dieslach zawsze klekoczą wtryskiwacze i pompa wysokiego ciśnienia — tak są zbudowane. Normalne klekotanie ma rozpoznawalne cechy: jest takie samo na zimno i na ciepło, na zewnątrz głośniejsze niż w kabinie i nie zmienia się latami.',
      'Zaniepokoić powinno tykanie, które z czasem staje się głośniejsze i na rozgrzanym silniku słychać je lepiej niż wcześniej. Tak objawiają się zwiększone luzy zaworowe: odstępy między częściami układu rozrządu rosną wraz ze zużyciem i zawory zaczynają pracować z uderzeniem. Osobne przypadki to tykanie tylko przez pierwsze minuty po zimnym rozruchu (zwykle hydrauliczne popychacze, które ciśnieniem oleju kasują nadmiarowy luz) i klekot z zapachem spalin, głośniejszy na zewnątrz — podpis przepalonej uszczelki kolektora wydechowego.',
    ],
    causes: [
      { name: 'Normalne klekotanie wtryskiwaczy (bezpośredni wtrysk, diesel)', likelihood: 'Bardzo często — jeśli dźwięk jest zawsze taki sam' },
      { name: 'Zwiększone luzy zaworowe', likelihood: 'Często — jeśli tykanie z czasem stało się głośniejsze' },
      { name: 'Hydrauliczne popychacze na zimno', likelihood: 'Często — jeśli tyka tylko przez pierwsze minuty po rozruchu' },
      { name: 'Uszczelka albo pęknięcie kolektora wydechowego', likelihood: 'Jeśli klekot jest głośniejszy na zewnątrz i czuć spaliny' },
      { name: 'Łańcuch rozrządu albo jego napinacz', likelihood: 'Rzadziej — szelest albo terkot z przodu silnika' },
    ],
    canRide: [
      'Z tykaniem można jeździć niemal zawsze: wśród jego typowych przyczyn nie ma takiej, która wymagałaby zjazdu na pobocze. Normalne klekotanie wtryskiwaczy i poranne tykanie popychaczy w ogóle nie wymagają naprawy — tak pracuje silnik.',
      'Ale rosnące tykanie samo nie przejdzie. Zawory ze zwiększonym luzem pracują z uderzeniem i zużywają się szybciej, dlatego regulację albo sprawdzenie popychaczy warto zaplanować na najbliższe dwa tygodnie — w tym czasie można spokojnie jeździć. Z kolektorem wydechowym logika jest podobna: tydzień–dwa zapasu jest, ale szczelina rośnie, a zapach spalin może być zasysany do kabiny przez nawiew — a to już szkodzi.',
    ],
    checks: [
      'Porównać silnik zimny i rozgrzany: tykanie tylko przez pierwsze minuty po rozruchu to obraz popychaczy; dźwięk lepiej słyszalny na ciepło przemawia za luzami zaworowymi.',
      'Ocenić z pamięci zmianę w czasie: tykanie niezmienione od lat jest raczej normą; jeśli pół roku temu było wyraźnie cichsze, to zużycie i będzie rosło.',
      'Posłuchać z zewnątrz i z kabiny: normalne klekotanie wtryskiwaczy na zewnątrz jest wyraźnie głośniejsze; tykanie zaworów dobrze słychać także z fotela kierowcy.',
      'Sprawdzić bagnetem poziom oleju: przy niskim poziomie tykanie popychaczy i rozrządu się nasila, a dolanie do normy bywa słychać od razu.',
      'Powąchać przy otwartej masce: zapach spalin razem z częstym klekotem to znak kolektora — z tym do warsztatu w ciągu tygodnia–dwóch.',
    ],
    appHelp:
      'Aplikacja Stuk doprecyzuje najważniejsze — czy tykanie stało się z czasem głośniejsze i jak zachowuje się na zimno i na ciepło — a nagranie pozwoli porównać je z typowymi przykładami. W raporcie będą prawdopodobne przyczyny z procentami i wniosek w formie sygnalizacji: norma, wizyta w tym tygodniu albo diagnostyka bez zwłoki.',
    faq: [
      {
        q: 'Dlaczego diesle i silniki z bezpośrednim wtryskiem zawsze tykają?',
        a: 'Paliwo podawane jest w nich pod bardzo wysokim ciśnieniem, a każdy wtryskiwacz przy otwarciu wydaje krótkie kliknięcie, do tego dochodzi klekot pompy wysokiego ciśnienia. To normalna praca: dźwięk jest taki sam przy każdej pogodzie, na zewnątrz głośniejszy niż w środku, i nie wymaga naprawy.',
      },
      {
        q: 'Czym jest regulacja luzów zaworowych?',
        a: 'Między częściami układu rozrządu zostawia się niewielki luz cieplny; ze zużyciem rośnie i zawory zaczynają klekotać. Mechanik przywraca luzy do normy płytkami regulacyjnymi albo śrubami. W silnikach z hydraulicznymi popychaczami zamiast regulacji sprawdza się same popychacze i ciśnienie oleju.',
      },
      {
        q: 'Czy tykanie może zniknąć po wymianie oleju?',
        a: 'Tak, jeśli winne były stary olej, nieodpowiednia lepkość albo niski poziom: hydrauliczne popychacze są bardzo wrażliwe na stan oleju. Ale wymiana oleju nie naprawi zużytych luzów zaworowych — jeśli po niej tykanie zostało i dalej rośnie, potrzebna jest regulacja.',
      },
    ],
  },

  'svist-remnya': {
    h1: 'Pisk paska',
    metaTitle: 'Pasek piszczy: przyczyny, czy można jechać i co robić | Stuk',
    description:
      'Pasek osprzętu piszczy: zużycie, słabe napięcie, rolki albo sprzęgło sprężarki klimatyzacji. Jak zawęzić przyczynę po okolicznościach i kiedy pisk wymaga warsztatu.',
    intro: [
      'Przenikliwy pisk spod maski wydaje niemal zawsze pasek osprzętu — pasek, który od wału korbowego napędza alternator, pompę wody, a w wielu autach także sprężarkę klimatyzacji i pompę wspomagania. Piszczy w jednym jedynym przypadku: gdy ślizga się po kołach pasowych zamiast pewnie się ich trzymać.',
      'Przyczyny poślizgu dzielą się na dwie grupy. Pierwsza to sam pasek: guma zestarzała się i stwardniała, napięcie spadło, na powierzchnię roboczą trafił olej albo płyn chłodzący. Druga to zespoły, które on napędza: zakleszczająca się rolka, ciężko chodzące sprzęgło sprężarki klimatyzacji albo pompa wody ze zużytym łożyskiem obciążają pasek bardziej, niż jest on w stanie przenieść. Po tym, kiedy dokładnie pojawia się pisk, krąg przyczyn zawęża się wyraźnie.',
    ],
    causes: [
      { name: 'Zużyty albo słabo napięty pasek', likelihood: 'Najczęściej' },
      { name: 'Poślizg na zimno albo przy wilgoci', likelihood: 'Często — jeśli pisk znika po rozgrzaniu' },
      { name: 'Rolka napinacza albo rolka prowadząca', likelihood: 'Nierzadko — do pisku dochodzi buczenie albo szelest' },
      { name: 'Sprzęgło sprężarki klimatyzacji', likelihood: 'Jeśli pisk pokrywa się z włączeniem klimatyzacji' },
      { name: 'Pompa wody albo sprzęgło jednokierunkowe alternatora', likelihood: 'Rzadziej' },
    ],
    canRide: [
      'Jeśli pisk jest krótki i żyje tylko przez pierwsze sekundy po zimnym rozruchu, jedź spokojnie: to powód, by pokazać pasek przy okazji, a nie zmieniać plany dnia.',
      'Ze stałym piskiem albo piskiem pod obciążeniem na razie też można jeździć, ale warto umówić warsztat w ciągu tygodnia: ślizgający się pasek przegrzewa się i zużywa lawinowo, a jego zerwanie zatrzymuje alternator i w wielu autach pompę wody. Dwa sygnały wymagają zjechania na pobocze i natychmiastowego zgaszenia silnika: zapalona kontrolka akumulatora i rosnąca wskazówka temperatury — oba oznaczają, że pasek już nie napędza swoich urządzeń.',
    ],
    checks: [
      'Zapamiętać, kiedy dokładnie piszczy: przez pierwsze sekundy po rozruchu, w chwili włączenia klimatyzacji, przy kręceniu kierownicą czy stale — to główny klucz do przyczyny.',
      'Włączyć klimatyzację przy pracującym silniku: pisk dokładnie w chwili włączenia wskazuje na ślizgające się sprzęgło sprężarki.',
      'Przy zgaszonym silniku obejrzeć pasek: poprzeczne pęknięcia, postrzępione krawędzie i błyszczące, „wypolerowane” boki to oznaki zużycia.',
      'Sprawdzić, czy na pasku i wokół kół pasowych nie ma śladów oleju albo płynu chłodzącego: zaolejony pasek piszczy nawet nowy, a ślady płynu wskazują na pompę wody.',
      'Wsłuchać się, czy obok pisku nie ma równego buczenia albo szelestu zmieniającego się z obrotami silnika — tak brzmi łożysko jednej z rolek.',
    ],
    appHelp:
      'Aplikacja Stuk doprecyzuje charakter dźwięku i okoliczności — pisk czy buczenie, na zimno czy pod obciążeniem, czy dźwięk wiąże się z klimatyzacją — a po nagraniu pomoże odróżnić pisk paska od szelestu rolki. W raporcie będą prawdopodobne przyczyny z procentami i sygnalizacja: można jechać, do warsztatu w tym tygodniu albo zatrzymaj się.',
    faq: [
      {
        q: 'Co się stanie, jeśli pasek zerwie się w drodze?',
        a: 'Od razu zniknie ładowanie: alternator się zatrzyma i auto pojedzie na resztce akumulatora — zwykle to kilkadziesiąt minut. W silnikach, w których pasek napędza też pompę wody, temperatura szybko zacznie rosnąć i dalsza jazda będzie niemożliwa. Dlatego piszczący pasek lepiej wymienić na umówiony termin, a nie po zerwaniu.',
      },
      {
        q: 'Dlaczego pisk pojawia się przy włączeniu klimatyzacji?',
        a: 'Sprężarka klimatyzacji to najcięższy odbiornik na pasku. W chwili włączenia jej sprzęgło gwałtownie dokłada obciążenia, a zużyty albo słabo napięty pasek wpada w poślizg. Jeśli piszczy właśnie sekunda włączenia, warto sprawdzić także samo sprzęgło: jego zużycie daje taki sam dźwięk.',
      },
      {
        q: 'Czy można spryskać pasek czymś, żeby nie piszczał?',
        a: 'Lepiej nie. Spraye i domowe sposoby w rodzaju WD-40 dają dzień–dwa ciszy, ale nasączona guma ślizga się i starzeje szybciej, a przyczyna — zużycie albo słabe napięcie — pozostaje. Pewniejsza jest wymiana paska razem z rolką: to jedna z tańszych prac w warsztacie.',
      },
    ],
  },
};
