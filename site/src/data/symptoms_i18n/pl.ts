import type { SymptomTr } from '../types';

/** Разборы симптомов по-польски. Структура — из русских файлов рядом. */
export const pages: Record<string, SymptomTr> = {
  'stuk-v-dvigatele': {
    h1: 'Stukanie w silniku',
    metaTitle: 'Silnik stuka: przyczyny, zagrożenie, co robić | Pro-Stuk',
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
      'Aplikacja Pro-Stuk przeprowadzi cię przez te same pytania, które zadaje mechanik silnikowy, nagra dźwięk i oceni jego widmo oraz rytm: jak często idą uderzenia i jak to się ma do obrotów — przy stuku zaworów i stuku wału ta zależność jest inna. W raporcie znajdziesz prawdopodobne przyczyny z procentami, sygnalizację pilności i zwroty przydatne w rozmowie w warsztacie.',
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
    metaTitle: 'Hamulce piszczą: groźne czy nie, przyczyny i co robić | Pro-Stuk',
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
      'Aplikacja Pro-Stuk oddziela scenariusz niegroźny od niepokojącego tymi samymi pytaniami — kiedy piszczy i czy dźwięk znika — a nagranie pomaga odróżnić wysoki pisk czujnika od zgrzytu. W raporcie znajdziesz prawdopodobne przyczyny z procentami i sygnalizację: można jechać, do warsztatu w tym tygodniu albo zatrzymaj się.',
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
    metaTitle: 'Buczenie podczas jazdy: łożysko, opony czy skrzynia | Pro-Stuk',
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
      'Aplikacja Pro-Stuk przeprowadzi cię przez te same pytania — czy buczenie zostaje na luzie, czy zmienia się w zakrętach i z nawierzchnią — i pomoże nagrać dźwięk, by porównać jego charakter z typowymi przypadkami. W raporcie znajdziesz prawdopodobne przyczyny z procentami i wniosek: jedź spokojnie, zaplanuj warsztat albo sprawdź bez zwłoki.',
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
    metaTitle: 'Pro-Stuk w zawieszeniu: co stuka i czy można jechać | Pro-Stuk',
    description:
      'Co stuka w zawieszeniu: łączniki stabilizatora, tuleje metalowo-gumowe, przekładnia kierownicza albo pęknięta sprężyna. Jak rozróżnić stuki po charakterze i kiedy do warsztatu.',
    intro: [
      'Zawieszenie samochodu osobowego to kilkadziesiąt przegubów, tulei gumowych i poduszek, a z wiekiem luz — swobodny ruch — w którymś z nich jest prawie nieunikniony. Poluzowany element odpowiada na każdą nierówność stukiem: zawieszenie ugina się i prostuje, a zużyta część bije w swoim mocowaniu. Dobra wiadomość jest taka, że pierwsze poddają się zwykle tanie części — łączniki stabilizatora, niewielkie drążki z przegubami, które w zawieszeniu zużywają się przed wszystkim innym.',
      'Charakter dźwięku mówi wiele jeszcze przed podnośnikiem. Częsty głuchy stukot na drobnych falach i szczelinach to podpis łączników stabilizatora. Pojedyncze uderzenia na dziurach i progach zwalniających wskazują na tuleje metalowo-gumowe — gumowe przeguby, przez które wahacze mocowane są do nadwozia — albo na zmęczone amortyzatory. Pro-Stuk, który przechodzi prosto na kierownicę i czuć go w dłoniach, to luz w przekładni kierowniczej. A skrzypienie „jak stare łóżko” to wcale nie stuk, tylko sucha guma tulei: najbardziej niegroźna historia z wymienionych.',
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
      'Dwa scenariusze wymagają więcej uwagi. Pro-Stuk przechodzący na kierownicę dotyczy układu kierowniczego, zespołu bezpieczeństwa: kontrola w najbliższych dniach, a jeśli kierownica zrobiła się „pusta” w położeniu centralnym albo auto pływa po pasie — bez zwłoki. Łomot, który pojawił się nagle po uderzeniu w dziurę, razem z osiadłym rogiem nadwozia, to typowy obraz pękniętej sprężyny: do warsztatu jedź łagodnie, bo ułamany zwój może się przesunąć i uszkodzić oponę.',
    ],
    checks: [
      'Pobujać stojące auto ręką za błotnik nad każdym kołem: skrzypienie gum i tulei często odtwarza się już na miejscu.',
      'Prześledzić prawidłowość: stuka na drobnych falach — bardziej prawdopodobne łączniki stabilizatora; na pojedynczych dziurach — tuleje i amortyzatory.',
      'Ustalić, czy dźwięk jest z przodu czy z tyłu i czy przechodzi na kierownicę: stuk czuć w dłoniach, a cichnie przy lekkim napięciu kierownicy — to oznaka luzu w przekładni kierowniczej.',
      'Nacisnąć każdy róg auta w dół i puścić: nadwozie powinno wrócić na miejsce bez kołysania. Jeśli dalej się buja — amortyzator jest zmęczony.',
      'Zajrzeć za koło od dołu, niczego nie rozbierając: ułamany zwój sprężyny często widać gołym okiem, a przy okazji widać, czy jeden róg auta nie osiadł.',
    ],
    appHelp:
      'Aplikacja Pro-Stuk prowadzi przez te same rozwidlenia co mechanik przy pierwszych oględzinach: jaki to dźwięk, na jakich nierównościach, z przodu czy z tyłu, czy przechodzi na kierownicę. Nagranie pozwala nie zgubić szczegółów do wizyty, a w raporcie są prawdopodobne przyczyny z procentami i czytelna sygnalizacja: można jechać, pokaż w tym tygodniu albo sprawdź pilnie.',
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
    metaTitle: 'Łożysko koła buczy: jak je rozpoznać | Pro-Stuk',
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
      'Aplikacja Pro-Stuk zada te same pytania kontrolne — o nawierzchnię, zakręty i toczenie na luzie — nagra buczenie i oceni jego charakter: równy szerokopasmowy szum opon i buczenie łożyska wyglądają w widmie inaczej. W raporcie będą prawdopodobieństwa przyczyn, pilność i podpowiedź, którą stronę wskazać mechanikowi.',
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
    metaTitle: 'Stuki na nierównościach: przyczyny i co sprawdzić samemu | Pro-Stuk',
    description:
      'Stukanie na nierównościach: częste na drobnych falach, pojedyncze uderzenia na dziurach albo stuk na kierownicę. Które elementy zawiniły i czy można jechać.',
    intro: [
      'Pro-Stuk, który pojawia się tylko na nierównościach — szczelinach, kostce, progach zwalniających — prawie zawsze pochodzi z podwozia. Przy pokonywaniu wyboju zawieszenie ugina się i prostuje, a jeśli w którymś przegubie pojawił się luz, element przy każdym skoku bije w swoim mocowaniu. W autach starszych niż pięć–siedem lat to zwyczajna sprawa, a winne są najczęściej tanie części eksploatacyjne, a nie duże zespoły.',
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
      'Inaczej wygląda rytmiczny stuk w takt obrotu koła w pierwszych dniach po wymianie opon: to powód, by zatrzymać się przy pierwszej okazji i sprawdzić dokręcenie śrub wszystkich kół kluczem. Koło na poluzowanych śrubach rozbija otwory felgi, a w najgorszym razie może się odkręcić w ruchu. Pro-Stuk przechodzący na kierownicę też nie znosi zwłoki: układ kierowniczy to zespół bezpieczeństwa, sprawdza się go w najbliższych dniach.',
    ],
    checks: [
      'Jeśli koła były niedawno zdejmowane albo przekładane — najpierw sprawdź dokręcenie śrub wszystkich kół kluczem, zanim rozważysz inne wersje.',
      'Zauważyć rysunek stuku: częsty stukot na drobnych falach i pojedyncze uderzenia na dziurach to różne elementy, a taki szczegół od razu skraca mechanikowi poszukiwania.',
      'Ustalić, czy stuk jest z przodu czy z tyłu: przejedź wolno z uchylonymi szybami wzdłuż muru albo płotu — odbity dźwięk słychać znacznie lepiej.',
      'Potrzymać kierownicę lekko napiętą na nierównej drodze: jeśli stuk czuć w dłoniach i cichnie, wygląda to na luz w przekładni kierowniczej, warto o tym powiedzieć w warsztacie.',
      'Wykluczyć proste rzeczy: wyjąć luźne przedmioty z bagażnika, sprawdzić mocowanie koła zapasowego i podnośnika, nacisnąć zamkniętą maskę — luźny zamek maski stuka podobnie do zawieszenia.',
    ],
    appHelp:
      'Aplikacja Pro-Stuk zadaje te same pytania co ta strona, tylko krok po kroku: jaki dokładnie stuk, gdzie go słychać, jak zachowuje się na różnych nierównościach. Z odpowiedzi i nagrania układa raport z prawdopodobnymi przyczynami i sygnalizacją pilności — z nim łatwiej zdecydować, czy jechać do warsztatu jutro, czy przy okazji.',
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
    metaTitle: 'Silnik tyka: norma czy zużycie, przyczyny | Pro-Stuk',
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
      'Aplikacja Pro-Stuk doprecyzuje najważniejsze — czy tykanie stało się z czasem głośniejsze i jak zachowuje się na zimno i na ciepło — a nagranie pozwoli porównać je z typowymi przykładami. W raporcie będą prawdopodobne przyczyny z procentami i wniosek w formie sygnalizacji: norma, wizyta w tym tygodniu albo diagnostyka bez zwłoki.',
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
    metaTitle: 'Pasek piszczy: przyczyny, czy można jechać i co robić | Pro-Stuk',
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
      'Aplikacja Pro-Stuk doprecyzuje charakter dźwięku i okoliczności — pisk czy buczenie, na zimno czy pod obciążeniem, czy dźwięk wiąże się z klimatyzacją — a po nagraniu pomoże odróżnić pisk paska od szelestu rolki. W raporcie będą prawdopodobne przyczyny z procentami i sygnalizacja: można jechać, do warsztatu w tym tygodniu albo zatrzymaj się.',
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

  'gremit-pod-mashinoy': {
    h1: 'Grzechot pod samochodem',
    metaTitle: 'Grzechot pod samochodem: co brzęczy i czy to groźne | Pro-Stuk',
    description:
      'Grzechot i brzęczenie pod samochodem: mocowania tłumika, osłona termiczna, osłona silnika albo katalizator. Jak znaleźć źródło dźwięku i kiedy sprawa jest poważna.',
    intro: [
      'Grzechot spod samochodu brzmi niepokojąco, ale źródłem najczęściej nie jest ani silnik, ani zawieszenie, tylko przykręcona blacha: gumy tłumika, poluzowane śruby osłony silnika albo osłona termiczna — cienka blaszka chroniąca podwozie przed żarem układu wydechowego. Wszystko to grzechocze głośno i rezonuje po nadwoziu, dlatego wydaje się poważniejsze, niż jest: na prowadzenie i pracę auta takie dźwięki nie wpływają.',
      'Są też mylące tropy: to, co grzechocze „pod samochodem”, bywa w rzeczywistości bagażnikiem — podnośnik, klucz do kół, źle zamocowane koło zapasowe — albo plastikami kabiny, których dźwięk trudno umiejscowić. Naprawdę niepokojący scenariusz jest jeden: dźwięczny grzechot bliżej silnika razem z utratą mocy albo zmienionym zapachem spalin. Tak hałasuje rozsypany katalizator — ceramiczny filtr spalin, którego odłamki grzechoczą we własnej obudowie — i z tą wersją nie warto zwlekać.',
    ],
    causes: [
      { name: 'Mocowania tłumika albo osłona silnika', likelihood: 'Najczęściej — metaliczny grzechot na nierównościach' },
      { name: 'Osłona termiczna układu wydechowego', likelihood: 'Często — dźwięczny grzechot przy określonych obrotach' },
      { name: 'Podnośnik, koło zapasowe albo bagaż w bagażniku', likelihood: 'Często — głuchy łomot z tyłu, „coś się przetacza”' },
      { name: 'Plastiki kabiny: panele i „świerszcze”', likelihood: 'Często — dźwięk jest bliżej, niż się wydaje' },
      { name: 'Rozsypany katalizator', likelihood: 'Rzadziej — jeśli razem z grzechotem spadła moc' },
    ],
    canRide: [
      'W większości przypadków tak i bez szczególnych ograniczeń: brzęcząca osłona termiczna, poluzowane mocowania tłumika albo śruby osłony silnika to kwestia komfortu, a nie bezpieczeństwa. Naprawa zwykle zajmuje minuty: dokręcić albo spiąć obejmą. Jedyne, co warto sprawdzić, to czy tłumik nie zwisa: rury szorującej po asfalcie nie wolno już ignorować, jej mocowanie odtwarza się od razu.',
      'Jeśli grzechotowi towarzyszy utrata mocy, zmieniony zapach spalin albo kontrolka silnika, jedź na diagnostykę w najbliższych dniach: odłamki ceramiki rozsypanego katalizatora mogą zostać zassane do silnika, a to już droga naprawa. Do czasu sprawdzenia lepiej nie kręcić silnika na wysokich obrotach.',
    ],
    checks: [
      'Wyjąć wszystko z bagażnika, sprawdzić mocowanie koła zapasowego i podnośnika, docisnąć półkę — i przejechać ten sam odcinek drogi. Dźwięk zniknął — sprawa zamknięta.',
      'Na stojącym aucie płynnie podnieść obroty: grzechot osłony termicznej zwykle pojawia się przy określonych obrotach i słychać go w miejscu, bez żadnych nierówności.',
      'Poprosić pasażera, żeby w jeździe przycisnął ręką podejrzane panele kabiny: jeśli dźwięk znika, to „świerszcze” wnętrza, a nie podwozie.',
      'Wsłuchać się w moc i zapach spalin: auto gorzej przyspiesza albo zapach się zmienił — to wersja katalizatora, z nią do mechanika w najbliższych dniach.',
      'Zajrzeć pod samochód, nie wchodząc pod niego: zwisający tłumik, obluzowana krawędź osłony silnika albo odgięta blacha często widać już od koła.',
    ],
    appHelp:
      'Aplikacja Pro-Stuk pomaga powiązać grzechot ze źródłem: skąd dźwięk, czy zależy od obrotów silnika czy od nierówności, co dzieje się z mocą. Z odpowiedzi i nagrania pokazuje prawdopodobne przyczyny z procentami i sygnalizację pilności — wygodnie, żeby odróżnić niegroźną blachę od katalizatora jeszcze przed warsztatem.',
    faq: [
      {
        q: 'Czy jazda jest groźna, jeśli coś grzechocze pod samochodem?',
        a: 'Najczęściej nie: poluzowane mocowania tłumika, osłona silnika i osłona termiczna nie wpływają na pracę auta. Wyjątki to zwisający tłumik, który zaraz dotknie asfaltu, i grzechot razem z utratą mocy: w drugim przypadku możliwy jest rozsypany katalizator i ze sprawdzeniem lepiej nie zwlekać.',
      },
      {
        q: 'Czym jest osłona termiczna i czy można ją po prostu zdjąć?',
        a: 'To cienka blacha między gorącymi częściami układu wydechowego a podwoziem: chroni nadwozie, wiązki i wszystko nad rurą przed żarem. Zdejmować jej nie warto — właściwiej dokręcić albo spiąć obejmą: w warsztacie to praca na kilka minut.',
      },
      {
        q: 'Jak poznać, że grzechocze właśnie katalizator?',
        a: 'Po dźwięcznym grzechocie albo szeleście spod podwozia bliżej silnika, który nasila się przy dodaniu gazu, plus utrata mocy albo zmieniony zapach spalin. W warsztacie potwierdzają wersję, lekko stukając w obudowę katalizatora na wystygniętym aucie: rozsypana ceramika szeleści w środku jak kamyki.',
      },
    ],
  },

  'skrezhet-pri-tormozhenii': {
    h1: 'Zgrzyt przy hamowaniu',
    metaTitle: 'Zgrzyt przy hamowaniu: klocki do metalu, co robić | Pro-Stuk',
    description:
      'Zgrzyt przy hamowaniu najczęściej oznacza klocki starte do metalu — z tym się nie jeździ. Rzadziej winny jest kamyk za osłoną tarczy. Jak to odróżnić i co robić.',
    intro: [
      'Zgrzyt przy hamowaniu zasługuje na większą uwagę niż jakikolwiek pisk. Najczęściej tak brzmią klocki starte do metalu: okładzina, która trze o tarczę, skończyła się i tarczę skrobie stalowa płytka nośna klocka. Droga hamowania rośnie, tarcza niszczy się przy każdym zatrzymaniu, a mechanizm może się zakleszczyć.',
      'Są też warianty mniej dramatyczne. Wygięta osłona tarczy albo kamyk zakleszczony między osłoną a tarczą dają bardzo podobny zgrzyt, ale hamulcom nie szkodzą. A krótkie skrobanie przy pierwszych hamowaniach po nocnym postoju albo deszczu to tylko warstewka rdzy, którą klocki zdzierają w dwie minuty. Kłopot w tym, że na słuch te scenariusze łatwo pomylić, dlatego stały zgrzyt wymaga oględzin, a nie domysłów.',
    ],
    causes: [
      { name: 'Klocki starte do metalu', likelihood: 'Najczęściej — jeśli zgrzyta przy każdym hamowaniu' },
      { name: 'Kamyk albo wygięta osłona dotyka tarczy', likelihood: 'Często; dźwięk podobny, ale hamulcom nie szkodzi' },
      { name: 'Zakleszczony zacisk', likelihood: 'Jeśli koło się nagrzewa i auto ściąga w bok' },
      { name: 'Warstewka rdzy po postoju albo deszczu', likelihood: 'Jeśli dźwięk znika po pierwszych hamowaniach' },
    ],
    canRide: [
      'Ze zgrzytem metalu o metal zwykłe jazdy trzeba przerwać: dopuszczalny jest tylko ostrożny przejazd do warsztatu z zapasem odległości i łagodnym, wcześniejszym hamowaniem. Odkładanie wymiany nie opłaca się też finansowo: każdy kilometr ze zgrzytem dokłada do rachunku koszt tarcz, które stalowa płytka nośna klocka dosłownie toczy.',
      'Jeśli zgrzyt pojawił się po postoju i zniknął po pierwszych hamowaniach — jedź bez ograniczeń, to rdza. Jeśli dźwięk jest raczej skrobiący, słychać go także bez naciskania pedału, a koło po jeździe się nie nagrzewa, prawdopodobna jest osłona albo kamyk: dojechać można spokojnie, ale auto warto pokazać w ciągu dnia–dwóch — pewnie odróżnić niegroźny scenariusz od startych klocków da się tylko przy oględzinach.',
    ],
    checks: [
      'Prześledzić prawidłowość: dźwięk tylko przy naciśnięciu hamulca — prawdopodobne klocki; stałe skrobanie w jeździe — raczej osłona, kamyk albo zakleszczony zacisk.',
      'Zajrzeć między szprychy felgi: w wielu autach zewnętrzny klocek widać bez demontażu. Okładzina cieńsza niż 3–4 mm albo błyszczący metal zamiast niej — wymiana natychmiast.',
      'Po krótkiej jeździe zbliżyć rękę do kół, nie dotykając tarczy: jeśli jedno koło jest wyraźnie gorętsze od pozostałych, wygląda to na zakleszczony zacisk — element, który dociska klocki do tarczy.',
      'Zwrócić uwagę na zachowanie auta: ściąganie w bok przy hamowaniu albo zapach spalenizny od koła to objawy, z którymi nie wolno jeździć — tylko ostrożnie do warsztatu.',
      'Obejrzeć tarczę przez felgę: głębokie rowki i niebieskawy odcień metalu mówią, że zgrzyt trwa od dawna i tarcze już ucierpiały.',
    ],
    appHelp:
      'Aplikacja Pro-Stuk przeprowadzi przez te same pytania — czy zgrzyt jest stały, czy koło się nagrzewa, czy dźwięk znika po pierwszych hamowaniach — a po nagraniu pomoże odróżnić zgrzyt od pisku czujnika zużycia. W raporcie będą prawdopodobne przyczyny i sygnalizacja: jechać można, pokazać w tym tygodniu albo dojechać tylko do warsztatu.',
    faq: [
      {
        q: 'Czym zgrzyt różni się od pisku hamulców?',
        a: 'Pisk to dźwięk wysoki, przy którym hamulce jeszcze pracują w pełni: najczęściej to czujnik zużycia, ostrzegający z wyprzedzeniem. Zgrzyt to szorstki, niski dźwięk metalu o metal: okładzina się skończyła i tarczę trze stalowa płytka nośna. Pisk to wizyta w tym tygodniu, zgrzyt — koniec zwykłych jazd.',
      },
      {
        q: 'Czy wystarczy wymienić same klocki, jeśli był już zgrzyt?',
        a: 'Zależy od stanu tarcz: nawet krótka jazda „na metalu” zostawia rowki. Płytkie czasem usuwa się toczeniem, głębokie oznaczają wymianę tarcz. Nowe klocki na porysowanej tarczy hamują gorzej i szybko się zużywają, dlatego decyzję podejmuje się po oględzinach.',
      },
      {
        q: 'Zgrzyt raz jest, raz go nie ma — to też groźne?',
        a: 'Niestały zgrzyt często daje kamyk między osłoną a tarczą: może wypaść sam. Nie warto na to liczyć: taki sam pływający dźwięk bywa we wczesnej fazie starcia klocków do metalu. Oględziny w ciągu dnia–dwóch rozstrzygną sprawę.',
      },
    ],
  },

  'stuk-pri-razgone': {
    h1: 'Pro-Stuk przy przyspieszaniu',
    metaTitle: 'Pro-Stuk przy dodaniu i puszczeniu gazu: przyczyny | Pro-Stuk',
    description:
      'Dlaczego stuka przy naciśnięciu albo puszczeniu gazu: poduszki silnika, przegub napędowy, luz w napędzie albo automatyczna skrzynia. Jak odróżnić niegroźny luz od stuku w samym silniku.',
    intro: [
      'Pro-Stuk, który pojawia się dokładnie w chwili naciśnięcia albo puszczenia gazu, rodzi się najczęściej nie w samym silniku, tylko w łańcuchu przekazującym napęd na koła. Z wiekiem w jego elementach narasta luz: gumowe poduszki silnika osiadają i pozwalają mu szarpać przy zmianie obciążenia, zużywa się wewnętrzny przegub napędowy (przegub półosi biegnącej od skrzyni do koła), rozklekotują się krzyżaki wału napędowego i mocowania wózka. Za każdym razem, gdy napęd zmienia kierunek, luz kasuje się z uderzeniem — stąd pojedynczy stuk albo łomot.',
      'Osobna historia to automatyczna skrzynia: szarpnięcie z łomotem przy przekładaniu wybieraka między D i R albo przy zmianach biegów zwykle mówi o starym oleju albo zużyciu. I zupełnie inny przypadek to głuchy stuk z głębi silnika, który przyspiesza wraz z obrotami i staje się głośniejszy pod obciążeniem: tak stukają panewki wału korbowego. To rzadki, ale najpoważniejszy wariant i ważne, żeby go nie przeoczyć.',
    ],
    causes: [
      { name: 'Poduszki silnika albo wewnętrzny przegub napędowy', likelihood: 'Najczęściej — pojedynczy stuk przy dodaniu i puszczeniu gazu' },
      { name: 'Luz w napędzie: krzyżaki wału, mocowania wózka', likelihood: 'Często przy napędzie na tył i na cztery koła — łomot pod podłogą przy ruszaniu' },
      { name: 'Automatyczna skrzynia: stary olej albo zużycie', likelihood: 'Jeśli szarpnięcie i łomot pokrywają się ze zmianami biegów' },
      { name: 'Pro-Stuk panewek z głębi silnika', likelihood: 'Rzadko — przyspiesza z obrotami, głośniejszy pod obciążeniem' },
    ],
    canRide: [
      'Z większością przyczyn z tabeli można jeździć: luz w poduszkach, przegubach albo napędzie nie unieruchomi auta nagle, dopóki stuk jest pojedynczy i cichy. Ale odkładanie diagnostyki na miesiące nie ma sensu: rozbity krzyżak albo zużyty przegub z czasem się rozsypują, a dzieje się to już w ruchu. Rozsądny termin wizyty to tydzień–dwa; do tego czasu ruszaj i operuj gazem łagodniej.',
      'Wyjątkiem jest stuk z głębi silnika, który przyspiesza przy dodaniu gazu i wzmaga się pod obciążeniem. Z nim zwykłe jazdy trzeba przerwać: zużyte panewki mogą skończyć się zatarciem silnika. Najpierw sprawdź poziom oleju; dalej — laweta albo, jeśli warsztat jest tuż obok, wolno i bez dodawania gazu.',
    ],
    checks: [
      'Doprecyzować moment: stuk dokładnie przy dodaniu i puszczeniu gazu, a nie na nierównościach, dotyczy przekazywania napędu, a nie zawieszenia. Taki szczegół od razu skróci mechanikowi poszukiwania.',
      'Sprawdzić bagnetem poziom oleju silnikowego. Przy każdym stuku brzmiącym jak silnikowy to pierwszy krok: przy niskim poziomie panewki cierpią w pierwszej kolejności.',
      'Jeśli łomocze przy zmianach biegów — sprawdzić poziom i stan oleju w automatycznej skrzyni: ciemny płyn z zapachem spalenizny to częsta przyczyna szarpnięć, a czasem sprawę rozwiązuje jego wymiana.',
      'Wsłuchać się, skąd dochodzi dźwięk — spod maski, ze środka podłogi czy od strony koła — i czy powtarza się przy zmianie biegu. Te obserwacje warto zapisać dla warsztatu.',
      'Zrobić łagodny test: jeśli przy miękkim dodaniu i puszczeniu gazu stuk znika, a przy gwałtownym wraca — to klasyczny luz, i do naprawy wystarczy spokojna jazda.',
    ],
    appHelp:
      'Aplikacja Pro-Stuk zada te same pytania uściślające — kiedy dokładnie stuka, czy dźwięk zmienia się z obrotami i biegami — a po nagraniu pomoże odróżnić łomot luzu od głębokiego stuku silnikowego. W raporcie będą prawdopodobne przyczyny z procentami i czytelny wniosek: można jechać, zaplanować warsztat albo zatrzymać się.',
    faq: [
      {
        q: 'Dlaczego stuka właśnie przy dodaniu i puszczeniu gazu?',
        a: 'W chwili zmiany obciążenia napęd zmienia kierunek i wszystkie luzy w poduszkach silnika, przegubach i napędzie kasują się z uderzeniem. Dopóki auto jedzie równomiernie, elementy są do siebie dociśnięte i luz się nie zdradza — dlatego stuk słychać tylko przy pracy pedałem gazu.',
      },
      {
        q: 'Jak poznać, że stuka sam silnik i że to poważne?',
        a: 'Niepokojąca cecha to głuchy stuk z głębi silnika, który przyspiesza wraz z obrotami i staje się głośniejszy pod obciążeniem, na przykład pod górę. Tak stukają panewki wału korbowego. W tym przypadku jazdy trzeba przerwać, sprawdzić poziom oleju i dostarczyć auto do warsztatu na lawecie.',
      },
      {
        q: 'Czy automatyczna skrzynia może powodować stuk przy przyspieszaniu?',
        a: 'Tak. Szarpnięcie albo łomot w chwili zmiany biegu bądź przy przekładaniu wybieraka między D i R to typowa oznaka starego oleju albo zużycia skrzyni. Zacząć warto od sprawdzenia poziomu i stanu oleju; do naprawy przekładaj wybierak tylko na całkowicie zatrzymanym aucie z wciśniętym hamulcem.',
      },
    ],
  },

  'zvon-pri-razgone': {
    h1: 'Dzwonienie przy przyspieszaniu',
    metaTitle: 'Dzwonienie przy przyspieszaniu: spalanie stukowe czy nie | Pro-Stuk',
    description:
      'Metaliczne dzwonienie przy przyspieszaniu to najczęściej spalanie stukowe przez paliwo. Jak sprawdzić to zmianą stacji i kiedy winny jest nie silnik, a osłona termiczna albo katalizator.',
    intro: [
      'Metaliczne dzwonienie przy przyspieszaniu — dźwięk, o którym kierowcy mówią „stukają sworznie” — najczęściej okazuje się spalaniem stukowym. Część paliwa w cylindrach nie spala się równomiernie, tylko wybucha, a fala uderzeniowa odzywa się dźwięcznym klekotem o ścianki silnika. Najlepiej słychać ją pod obciążeniem: pod górę, przy wyprzedzaniu, przy przyspieszaniu z niskich obrotów na wysokim biegu. Najczęstsza przyczyna jest prozaiczna — benzyna o liczbie oktanowej niższej niż zaleca producent albo po prostu nieudane tankowanie.',
      'Dzwonić może też nie silnik. Rozklekotana osłona termiczna — cienka blaszka nad tłumikiem — brzęczy przy określonych obrotach, a rozsypana ceramika katalizatora szeleści i pobrzękuje spod podwozia. Różnica tkwi w powiązaniu: spalanie stukowe zależy od obciążenia i znika przy spokojnej jeździe, a osłona dzwoni na „swoich” obrotach nawet na stojącym aucie przy dodaniu gazu.',
    ],
    causes: [
      { name: 'Spalanie stukowe: paliwo o niskiej liczbie oktanowej', likelihood: 'Najczęściej — dzwonienie pod obciążeniem, zwłaszcza pod górę' },
      { name: 'Nagar w komorach spalania albo czujnik spalania stukowego', likelihood: 'Jeśli zmiana stacji nie pomogła' },
      { name: 'Osłona termiczna układu wydechowego', likelihood: 'Często — brzęczenie przy określonych obrotach, bez związku z obciążeniem' },
      { name: 'Rozsypany katalizator', likelihood: 'Rzadziej — dzwonienie i szelest spod podwozia, moc słabnie' },
    ],
    canRide: [
      'Z rzadkimi epizodami dzwonienia dojechać można, ale silnika lepiej wtedy nie obciążać: przyspieszać łagodnie, pod górę jechać na niższym biegu, nie ciągnąć z niskich obrotów na wysokim biegu. Pierwszy krok to zatankować paliwo o liczbie oktanowej nie niższej niż zalecana, najlepiej na innej stacji: często dzwonienie znika razem z jednym bakiem.',
      'Stałe spalanie stukowe to uderzenia w tłoki przy każdym przyspieszaniu i stopniowo niszczy silnik: cierpią tłoki, pierścienie, uszczelka pod głowicą. Jeśli po zmianie paliwa dzwonienie nie ustąpiło, z diagnostyką nie warto zwlekać. Brzęczenie osłony to natomiast czysto akustyczna niedogodność: z nim można jeździć bez ograniczeń i przymocować blachę przy najbliższej wizycie w warsztacie.',
    ],
    checks: [
      'Zatankować pełny bak paliwa o liczbie oktanowej nie niższej niż zalecana, na innej stacji. Jeśli po baku–dwóch dzwonienie zniknęło, przyczyną było paliwo.',
      'Sprawdzić związek z obciążeniem: dzwonienie pojawia się pod górę, przy wyprzedzaniu i gwałtownym gazie, a przy łagodnym przyspieszaniu cichnie — to podpis spalania stukowego.',
      'Dodać gazu na luzie na stojącym aucie: jeśli dzwonienie albo brzęczenie pojawia się przy określonych obrotach nawet bez obciążenia — bardziej prawdopodobna jest osłona termiczna.',
      'Sprawdzić w instrukcji albo na klapce wlewu, jaka benzyna jest zalecana dla auta: wielu silnikom niska liczba oktanowa już nie odpowiada, choć formalnie jest dopuszczalna.',
      'Zwrócić uwagę na moc i dźwięki spod podwozia: szelest i pobrzękiwanie od dołu razem ze słabszym przyspieszaniem to powód, by sprawdzić katalizator bez zwłoki.',
    ],
    appHelp:
      'Aplikacja Pro-Stuk pomaga rozeznać się tymi samymi pytaniami — kiedy dzwoni, czy dźwięk wiąże się z obciążeniem czy z obrotami — a nagranie pozwala odróżnić dźwięczny klekot spalania stukowego od brzęczenia blaszanej osłony. W raporcie będą prawdopodobne przyczyny z procentami i wniosek: można jechać, warto zaplanować warsztat albo lepiej się zatrzymać.',
    faq: [
      {
        q: 'Co znaczy „stukają sworznie”?',
        a: 'To stara nazwa dzwonienia przy spalaniu stukowym: kiedyś wiązano je ze sworzniami tłokowymi. W rzeczywistości dzwonią nie one — klekot tworzy fala uderzeniowa wybuchowego spalania odbijająca się od ścianek cylindrów. Nazwa się przyjęła, ale przyczyna jest zawsze ta sama: spalanie stukowe, a nie zużyte elementy tłoka.',
      },
      {
        q: 'Czy można jeździć ze spalaniem stukowym?',
        a: 'Krótko i oszczędnie: łagodne przyspieszanie, niższy bieg pod górę, bez pełnego obciążenia i przyczepy. Każdy epizod dzwonienia to uderzenia w tłoki, a stałe spalanie stukowe kończy się drogą naprawą silnika. Jeśli zmiana paliwa nie usunęła dzwonienia po baku–dwóch, potrzebna jest diagnostyka.',
      },
      {
        q: 'Czy pomoże benzyna o wyższej liczbie oktanowej?',
        a: 'Główna zasada — nie tankować poniżej zalecenia producenta. Liczba oktanowa pokazuje odporność paliwa na samozapłon, dlatego przejście na wyższą u silnika skłonnego do spalania stukowego często usuwa dzwonienie. Jeśli i to nie pomaga, przyczyny — nagaru albo czujnika spalania stukowego — szuka się w warsztacie.',
      },
    ],
  },

  'gul-pri-povorote': {
    h1: 'Buczenie na zakręcie',
    metaTitle: 'Buczenie na zakręcie: łożysko koła czy wspomaganie | Pro-Stuk',
    description:
      'Skąd buczenie na zakręcie: zużyte łożysko koła, wyjąca pompa wspomagania albo hałas opon. Jak ustalić stronę i czy to groźne.',
    intro: [
      'W buczeniu na zakręcie trzeba od razu rozdzielić dwa scenariusze: buczenie przy prędkości, które w jednym zakręcie się wzmaga, a w drugim cichnie, oraz wycie pojawiające się przy kręceniu kierownicą w miejscu albo na parkingu. Brzmią podobnie, ale źródła są zupełnie inne: w pierwszym przypadku koło, w drugim — wspomaganie kierownicy.',
      'Buczenie przy prędkości zależne od kierunku skrętu to klasyczny podpis łożyska koła — łożyska, na którym obraca się koło. W zakręcie ciężar auta przechodzi na koła zewnętrzne i obciążone zużyte łożysko buczy głośniej. Wycie przy kręceniu kierownicą na małej prędkości wydaje najczęściej pompa wspomagania — z reguły przez niski poziom płynu. A w autach z elektrycznym wspomaganiem lekkie buczenie przy kręceniu kierownicą to w ogóle norma, a nie usterka.',
    ],
    causes: [
      { name: 'Łożysko koła', likelihood: 'Najczęściej — jeśli buczenie idzie z prędkością i zmienia się w zakrętach' },
      { name: 'Pompa wspomagania albo niski poziom płynu', likelihood: 'Często — jeśli wyje przy kręceniu kierownicą w miejscu' },
      { name: 'Hałas opon', likelihood: 'Często; buczenie zależy od nawierzchni, a nie od zakrętu' },
      { name: 'Normalne buczenie elektrycznego wspomagania', likelihood: 'Norma w autach bez zbiorniczka płynu wspomagania' },
      { name: 'Zużyty przegub napędowy', likelihood: 'Rzadziej; zwykle dokłada trzaski przy pełnym skręcie' },
    ],
    canRide: [
      'Z buczącym łożyskiem koła można jeździć, ale to kredyt na krótki termin: sprawdzenia nie odkładaj dłużej niż o tydzień, a dalekie szybkie trasy przenieś na czas po diagnostyce. Rozsypujące się łożysko daje luz koła, a w zaniedbanym przypadku może się zatrzeć. Jeśli buczenie nagle się wzmogło albo doszły drgania — do warsztatu od razu.',
      'Przy wyjącej pompie wspomagania najpierw sprawdza się poziom płynu w zbiorniczku: dolanie nierzadko zamyka sprawę. Jeździć można, ale nie trzymaj kierownicy skręconej do oporu dłużej niż parę sekund — w tym położeniu pompa pracuje pod maksymalnym ciśnieniem. Jeśli po dolaniu wycie zostało albo płyn znowu ubywa, jest wyciek — do warsztatu w ciągu tygodnia.',
    ],
    checks: [
      'Zapamiętać, w którą stronę zakrętu buczenie jest głośniejsze. Głośniej przy skręcie w lewo oznacza obciążoną prawą stronę, czyli prawdopodobne prawe łożysko, i odwrotnie. Ten szczegół zauważalnie skróci poszukiwania w warsztacie.',
      'Sprawdzić dźwięk w miejscu: jeśli wycie pojawia się przy kręceniu kierownicą na parkingu, koła nie mają z tym nic wspólnego — źródłem jest wspomaganie.',
      'Zajrzeć pod maskę: czy jest zbiorniczek płynu wspomagania. Jest — sprawdzić poziom i w razie potrzeby dolać do znaku; nie ma — wspomaganie jest elektryczne, a ciche równe buczenie jest dla niego normalne.',
      'Ocenić zależność od drogi: buczenie cichsze na świeżym asfalcie i głośniejsze na szorstkiej nawierzchni zwykle dają opony, a nie łożysko.',
      'Obejrzeć bieżnik: zużycie „piłokształtne” (stopnie na krawędziach) albo plamami wzmaga hałas opon i przy okazji wskazuje na rozregulowaną geometrię lub zmęczone amortyzatory.',
    ],
    appHelp:
      'Aplikacja Pro-Stuk zadaje te same pytania co mechanik przy przyjęciu auta: gdzie słychać buczenie, czy zmienia się w zakrętach, czy wiąże się z kręceniem kierownicą w miejscu. Nagranie pomoże porównać dźwięk z typowymi przykładami, a w raporcie będą prawdopodobne przyczyny i czytelne zalecenie: jedź spokojnie, umów wizytę w tym tygodniu albo sprawdź bez zwłoki.',
    faq: [
      {
        q: 'Dlaczego buczenie wzmaga się tylko w jedną stronę zakrętu?',
        a: 'W zakręcie ciężar auta przechodzi na koła zewnętrzne. Jeśli zużyte jest na przykład prawe łożysko, pod obciążeniem buczy głośniej — czyli przy skręcie w lewo. Ta cecha pozwala jeszcze przed warsztatem ustalić, którą stronę sprawdzić w pierwszej kolejności.',
      },
      {
        q: 'Czy do wspomagania można dolać dowolny płyn?',
        a: 'Nie. Rodzaj płynu podaje instrukcja auta, a często jest napisany wprost na korku zbiorniczka. Jednorazowe dolanie właściwego płynu jest bezpieczne, ale jeśli poziom spada regularnie, gdzieś jest wyciek — szukać go i usuwać trzeba w warsztacie, dolewaniem sprawy się nie załatwi.',
      },
      {
        q: 'Pod maską nie ma zbiorniczka wspomagania, a przy skręcaniu buczy — co to?',
        a: 'Najprawdopodobniej wspomaganie jest elektryczne: jego silniczek cicho buczy przy kręceniu kierownicą i jest to normalna praca. Zaniepokoić powinny inne objawy: kierownica zrobiła się ciężka albo ciężknie skokowo, pojawił się chrzęst, na desce świeci kontrolka wspomagania. Z nimi — do warsztatu w najbliższych dniach.',
      },
    ],
  },

  'shchelchki-pri-povorote-rulya': {
    h1: 'Trzaski przy kręceniu kierownicą',
    metaTitle: 'Trzaski przy skręcaniu: przegub czy łożysko amortyzatora | Pro-Stuk',
    description:
      'Dlaczego trzeszczy przy kręceniu kierownicą: zewnętrzny przegub napędowy, łożysko górnego mocowania amortyzatora albo krzyżak kolumny. Jak je odróżnić po dźwięku.',
    intro: [
      'Trzaski przy kręceniu kierownicą rozdziela jedno proste pytanie: auto w tej chwili jedzie czy stoi? Trzask i chrzęst w ruchu przy skręconej kierownicy to podpis zewnętrznego przegubu napędowego — przegubu, przez który obroty trafiają na koło, które jednocześnie skręca. Im mocniej skręcona kierownica i im gwałtowniejszy start, tym wyraźniejszy trzask. Wszystko zaczyna się zwykle od pękniętej osłony — gumowego mieszka chroniącego przegub przed brudem.',
      'Jeśli natomiast trzaski słychać przy kręceniu kierownicą na stojącym aucie, przegub zwykle nie ma z tym nic wspólnego. Chrzęst od góry, zza nadkola, daje łożysko górnego mocowania amortyzatora — element, na którym góra kolumny obraca się razem z kołem. Trzaski w samej kierownicy, przy nogach kierowcy, to krzyżak kolumny kierowniczej, mały przegub między kierownicą a przekładnią. Żaden z tych wariantów nie każe zostawiać auta na miejscu, ale i ciągnąć ich miesiącami nie warto.',
    ],
    causes: [
      { name: 'Zewnętrzny przegub napędowy', likelihood: 'Najczęściej — jeśli trzeszczy w ruchu przy skręconej kierownicy' },
      { name: 'Łożysko górnego mocowania amortyzatora', likelihood: 'Często — jeśli chrzęści w miejscu, od góry zza nadkola' },
      { name: 'Krzyżak kolumny kierowniczej', likelihood: 'Jeśli trzaski słychać i czuć w samej kierownicy' },
      { name: 'Końcówki drążków kierowniczych albo przekładnia', likelihood: 'Rzadziej; zwykle dają stuk, a nie trzaski' },
      { name: 'Wewnętrzny przegub napędowy, łączniki stabilizatora', likelihood: 'Rzadziej; sprawdza się je przy tej samej diagnostyce' },
    ],
    canRide: [
      'Z trzeszczącym przegubem napędowym można jeździć, ale z wymianą nie warto zwlekać dłużej niż tydzień–dwa: zużyty przegub w najgorszym razie się zakleszcza, a to już nie dźwięk, tylko unieruchomione auto. Do naprawy pomaga tryb oszczędny — nie ruszać gwałtownie z kołami skręconymi do oporu.',
      'Łożysko amortyzatora i krzyżak kolumny dają więcej dyskomfortu niż natychmiastowego zagrożenia, ale układ kierowniczy to zespół bezpieczeństwa, dlatego diagnostykę warto przejść w najbliższych dniach: na podnośniku zajmuje kilka minut. Powód, by przyspieszyć: kierownica zrobiła się „pusta” w położeniu centralnym, auto pływa po pasie albo trzaski wyraźnie się nasiliły.',
    ],
    checks: [
      'Rozdzielić scenariusze na pustym parkingu: czy trzask pojawia się przy jeździe w kółko ze skręconą kierownicą — czy trzaski słychać przy kręceniu kierownicą na stojącym aucie.',
      'Obejrzeć osłony przegubów — gumowe mieszki przy wewnętrznej stronie każdego przedniego koła. Pęknięcie i rozrzucony wokół smar to niemal potwierdzona diagnoza.',
      'Poprosić pomocnika, żeby pokręcił kierownicą przy zgaszonym silniku, i położyć dłoń na miseczce amortyzatora pod maską: trzaski zużytego łożyska czuć ręką.',
      'Poruszać kierownicą w lewo–prawo przy zgaszonym silniku i posłuchać przy nogach: wyraźny trzask w kolumnie zdradza krzyżak.',
      'Zapamiętać, od strony którego koła słychać trzask w ruchu i w którym zakręcie jest głośniejszy — te szczegóły zauważalnie skrócą poszukiwania w warsztacie.',
    ],
    appHelp:
      'W aplikacji Pro-Stuk te rozwidlenia zebrano w krótkie drzewo pytań: auto jedzie czy stoi, skąd dochodzi dźwięk, w jakim stanie są osłony. Trzask można nagrać telefonem i porównać z przykładami. W raporcie będą prawdopodobne przyczyny z oceną i zalecenie co do terminów: bez paniki, ale i bez trzasków zapomnianych na miesiąc.',
    faq: [
      {
        q: 'Czym jest przegub napędowy i dlaczego trzeszczy?',
        a: 'To przegub równych prędkości kątowych, element przekazujący obroty na koło, które jednocześnie skręca. Gdy przez pękniętą osłonę dostaje się brud, kulki i bieżnie przegubu zużywają się, a pod obciążeniem przy skręconej kierownicy zaczyna wyraźnie trzeszczeć.',
      },
      {
        q: 'Jak długo można jeździć z trzeszczącym przegubem?',
        a: 'Dokładnej żywotności nie ma: u jednych przegub wytrzymuje miesiące, u innych wykańcza się w dwa tygodnie. Rozsądny punkt odniesienia — nie odkładać wymiany dłużej niż o tydzień–dwa, a do naprawy nie ruszać gwałtownie ze skręconymi kołami: wtedy obciążenie przegubu jest najmniejsze.',
      },
      {
        q: 'Dlaczego chrzęści przy kręceniu kierownicą na stojącym aucie?',
        a: 'Gdy auto stoi, koło się nie obraca i przegub napędowy nie pracuje. Chrzęst w miejscu daje zwykle łożysko górnego mocowania amortyzatora — dźwięk idzie od góry, zza nadkola — albo krzyżak kolumny, jeśli trzaska w samej kierownicy. Oba elementy sprawdza się w warsztacie w kilka minut.',
      },
    ],
  },

  'stuk-v-dvigatele-na-holodnuyu': {
    h1: 'Stukanie silnika na zimno',
    metaTitle: 'Silnik stuka na zimno: przyczyny i co robić | Pro-Stuk',
    description:
      'Dlaczego silnik stuka na zimno i milknie po rozgrzaniu: hydrauliczne popychacze, grupa tłokowa, łańcuch rozrządu. Kiedy to norma, a kiedy pora do warsztatu.',
    intro: [
      'Pro-Stuk słyszalny tylko przez pierwsze minuty po zimnym rozruchu i znikający w miarę rozgrzewania to jedna z najczęstszych skarg w autach z przebiegiem. Dobra wiadomość: najpowszechniejsza przyczyna jest tu zarazem najbardziej niegroźna. Częste tykanie u góry silnika wydają zwykle hydrauliczne popychacze — małe elementy, które ciśnieniem oleju kasują nadmiarowy luz w układzie rozrządu. Dopóki silnik jest zimny, olej jest gęsty i nie dociera do nich od razu, więc przez parę minut klekoczą. Rozgrzał się — ucichły.',
      'Charakter dźwięku dużo podpowiada. Głuchy stuk z głębi silnika częściej daje zużycie grupy tłokowej: zimny tłok ma nieco więcej swobody w cylindrze i postukuje, dopóki nie rozszerzy się od ciepła. Szelest albo terkot z przodu to podpis rozciągniętego łańcucha rozrządu — łańcucha wewnątrz silnika, który każe zaworom otwierać się w porę — albo jego osłabionego napinacza. A klekot głośniejszy na zewnątrz niż w kabinie, do tego z zapachem spalin pod maską, to oznaka przepalonej uszczelki kolektora wydechowego: gazy uciekają szczeliną, dopóki metal się nie rozszerzy i jej nie zamknie.',
    ],
    causes: [
      { name: 'Hydrauliczne popychacze: gęsty zimny olej', likelihood: 'Najczęściej — jeśli tyka u góry i cichnie po paru minutach' },
      { name: 'Zużycie grupy tłokowej', likelihood: 'Często przy dużych przebiegach — głuchy stuk z głębi' },
      { name: 'Łańcuch rozrządu albo jego napinacz', likelihood: 'Często — jeśli z przodu słychać szelest albo terkot' },
      { name: 'Uszczelka albo pęknięcie kolektora wydechowego', likelihood: 'Jeśli klekot jest głośniejszy na zewnątrz i czuć spaliny' },
      { name: 'Ślizgający się pasek osprzętu', likelihood: 'Jeśli to pisk albo gwizd, a nie stuk' },
    ],
    canRide: [
      'Z tykaniem popychaczy, które po rozgrzaniu znika całkowicie, można jeździć bez ograniczeń — to zwyczajne życie silnika z przebiegiem. To samo dotyczy pisku paska przez pierwsze sekundy po rozruchu: nieprzyjemne, ale niegroźne. W obu przypadkach wystarczy sprawdzić poziom i wiek oleju oraz pokazać auto mechanikowi przy planowej wizycie.',
      'Głuchy stuk grupy tłokowej to historia do obserwacji: jeździć można, ale warto śledzić zużycie oleju i powiedzieć o dźwięku mechanikowi przy najbliższej wizycie. Z szelestem łańcucha rozrządu zwlekać nie wolno: diagnostyka w ciągu tygodnia–dwóch, bo przeskoczony łańcuch oznacza drogą naprawę silnika, a do warsztatu — bez gwałtownych startów na zimno. I zasada ogólna: jeśli stuk przestał znikać po rozgrzaniu albo słychać go pod obciążeniem, diagnostyki nie można już odkładać.',
    ],
    checks: [
      'Zmierzyć, ile minut trzyma się dźwięk: minuta–dwie i cisza to typowy obraz popychaczy; im dłużej stuk żyje, tym bardziej potrzebne są oględziny.',
      'Sprawdzić bagnetem poziom oleju na wystygniętym silniku i przypomnieć sobie, kiedy był wymieniany: niski poziom i stary olej wzmacniają wszystkie zimne stuki.',
      'Określić charakter dźwięku: częste tykanie u góry, głuchy stuk z głębi albo szelest z przodu silnika to trzy różne historie o różnej pilności.',
      'Otworzyć maskę przy pracującym zimnym silniku i powąchać: zapach spalin razem z klekotem wskazuje na kolektor wydechowy.',
      'Zgasić rozgrzany silnik na dziesięć minut i uruchomić ponownie: prawdziwy „zimny” stuk po tak krótkim postoju nie wraca.',
    ],
    appHelp:
      'Aplikacja Pro-Stuk przejdzie przez te same rozwidlenia — czy to tykanie, głuchy stuk czy szelest i jak szybko dźwięk znika — a nagranie z telefonu pomoże uchwycić charakter, który trudno opisać słowami. W raporcie będą prawdopodobne przyczyny z procentami i czytelny wniosek: można spokojnie jeździć, umówić wizytę w tym tygodniu albo nie zwlekać z warsztatem.',
    faq: [
      {
        q: 'Pro-Stuk znika po rozgrzaniu — można nie zwracać uwagi?',
        a: 'Najczęściej tak: tykanie popychaczy na zimno to zwykła sprawa i nie wymaga naprawy. Ale warto obserwować: jeśli dźwięk zaczął trzymać się dłużej niż parę minut, został na rozgrzanym silniku albo pojawił się pod obciążeniem — to już powód do diagnostyki.',
      },
      {
        q: 'Czy pomagają dodatki „na stukanie”?',
        a: 'Lepiej ich nie wlewać: zużycia nie usuwają, tylko maskują objaw, przez co problem zauważa się później. Naprawdę pomaga co innego — świeży olej o właściwej lepkości, prawidłowy poziom, a jeśli stuk zostaje, regulacja albo naprawa u mechanika.',
      },
      {
        q: 'Dlaczego zimą na zimno stuka mocniej?',
        a: 'Na mrozie olej jest gęstszy i dłużej dociera do górnej części silnika, dlatego popychacze i układ rozrządu klekoczą wyraźniej, a luzy zimnych części są nieco większe. Jeśli po rozgrzaniu wszystko cichnie, to ten sam obraz co latem, tylko rozciągnięty w czasie.',
      },
    ],
  },

  'svist-pri-zapuske': {
    h1: 'Pisk przy uruchamianiu silnika',
    metaTitle: 'Pisk przy uruchamianiu silnika: przyczyny i co robić | Pro-Stuk',
    description:
      'Dlaczego silnik piszczy przy uruchamianiu: ślizgający się pasek osprzętu, rolki albo pompa wody. Kiedy pisk jest niegroźny, a kiedy pora umówić warsztat.',
    intro: [
      'Pisk albo gwizd w pierwszych sekundach po odpaleniu silnika wydaje niemal zawsze pasek osprzętu — gumowy pasek, który od silnika napędza alternator, pompę wody i sprężarkę klimatyzacji. Na zimno albo przy wilgotnej pogodzie pasek ślizga się po kołach pasowych i piszczy, a po kilku sekundach nagrzewa się, obsycha i milknie.',
      'W tej chwili taki scenariusz nie jest groźny, ale i za normę uznawać go nie warto: świeży, prawidłowo napięty pasek nie piszczy nawet na mrozie. Regularny poranny pisk to znak, że pasek się zestarzał, napięcie osłabło albo zaczęła zużywać się jedna z rolek, po których biegnie. Osobna historia to dźwięki samego rozruchu: zgrzyt albo buczenie, gdy rozrusznik kręci silnikiem. To już nie pasek, tylko rozrusznik albo wieniec koła zamachowego, a z nimi nie warto zwlekać.',
    ],
    causes: [
      { name: 'Ślizganie się paska osprzętu na zimno', likelihood: 'Najczęściej — jeśli pisk znika w pierwszych sekundach' },
      { name: 'Zużyty pasek albo osłabione napięcie', likelihood: 'Często — jeśli pisk zostaje także na rozgrzanym silniku' },
      { name: 'Łożysko rolki napinacza albo prowadzącej', likelihood: 'Nierzadko — do pisku dochodzi szelest albo buczenie' },
      { name: 'Pompa wody — jeśli przy pasku są ślady płynu chłodzącego', likelihood: 'Rzadziej' },
      { name: 'Zgrzyt podczas pracy rozrusznika: bendiks albo wieniec koła zamachowego', likelihood: 'Osobny przypadek — dźwięk przed odpaleniem silnika' },
    ],
    canRide: [
      'Z piskiem, który żyje kilka sekund po zimnym rozruchu i całkowicie znika, jeździć można: bezpośredniego zagrożenia nie ma. Ale pasek warto pokazać w warsztacie przy okazji — oględziny zajmują parę minut, a wymiana paska z rolką należy do tanich prac.',
      'Jeśli pisk przestał znikać po rozgrzaniu, pojawia się przy włączeniu klimatyzacji albo z każdym rozruchem brzmi dłużej i głośniej, lepiej umówić warsztat w ciągu tygodnia: zużyty pasek może pęknąć, a bez niego zatrzymują się alternator i w wielu silnikach pompa wody. Zapaliła się kontrolka akumulatora albo wskazówka temperatury poszła w górę — zatrzymać się i zgasić silnik.',
    ],
    checks: [
      'Zmierzyć czas trwania pisku: kilka sekund po rozruchu to ślizganie na zimno; dźwięk, który nie znika po rozgrzaniu, to zużycie paska albo rolek.',
      'Prześledzić związek z pogodą: pisk tylko po deszczu, myjni albo na mrozie mówi o poślizgu, a nie o awarii konkretnego elementu.',
      'Włączyć klimatyzację albo ogrzewanie szyby przy pracującym silniku: jeśli pisk się pojawia albo nasila, pasek buksuje pod obciążeniem.',
      'Przy zgaszonym silniku obejrzeć pasek latarką: poprzeczne pęknięcia, postrzępione krawędzie i błyszczące „wypolerowane” boki to oznaki zużycia.',
      'Sprawdzić, czy przy kołach pasowych nie ma zacieków albo białawych śladów płynu chłodzącego: wskazują na pompę wody, a wtedy wizyty w warsztacie lepiej nie odkładać.',
    ],
    appHelp:
      'Aplikacja Pro-Stuk zada te same pytania co mechanik przy przyjęciu auta: kiedy pojawia się pisk, czy znika po rozgrzaniu, co słychać podczas pracy rozrusznika. Nagranie pomoże odróżnić pisk paska od zgrzytu rozrusznika, a w raporcie będą prawdopodobne przyczyny z procentami i czytelny wniosek: można jechać, do warsztatu w tym tygodniu albo zatrzymać się.',
    faq: [
      {
        q: 'Dlaczego silnik piszczy tylko na zimno i przy wilgoci?',
        a: 'Zimna i wilgotna guma paska gorzej trzyma się kół pasowych, dlatego w pierwszych sekundach po rozruchu ślizga się i piszczy. W miarę nagrzewania przyczepność wraca i dźwięk znika. Nowy pasek ze sprawnym napinaczem radzi sobie i w takich warunkach, więc regularny poranny pisk to powód do oględzin.',
      },
      {
        q: 'Pisk zaczął pojawiać się także na rozgrzanym silniku. To poważne?',
        a: 'To znak, że zużycie doszło do etapu, w którym pasek buksuje już w zwykłych warunkach. Jeździć na razie można, ale warto umówić warsztat w ciągu tygodnia: pęknięty pasek zostawi bez alternatora, a w wielu autach i bez pompy wody, a podróż skończy się na lawecie.',
      },
      {
        q: 'Czym pisk po rozruchu różni się od zgrzytu przy rozruchu?',
        a: 'Pisk i gwizd pojawiają się po tym, jak silnik już odpalił, i winny jest zwykle pasek. Metaliczny zgrzyt słychać wcześniej — w sekundach, gdy rozrusznik kręci silnikiem — i mówi o złym zazębieniu bendiksa z wieńcem koła zamachowego. To inne elementy i inna naprawa.',
      },
    ],
  },

  'vibratsiya-na-holostyh': {
    h1: 'Wibracje na biegu jałowym',
    metaTitle: 'Wibracje na biegu jałowym: przyczyny drgań i co robić | Pro-Stuk',
    description:
      'Dlaczego auto drży na biegu jałowym: poduszki silnika, wypadanie zapłonu, nieszczelność układu dolotowego albo brudna przepustnica. Co sprawdzić i czy można jeździć.',
    intro: [
      'Lekkie drżenie na biegu jałowym ma każde auto, zwłaszcza z silnikiem Diesla. Mowa o czymś innym — o drżeniu, które czuć na kierownicy, fotelu i lusterku wstecznym, a którego wcześniej nie było. Najczęstsza przyczyna to poduszki silnika: gumowe elementy, na których silnik jest zamocowany w nadwoziu i które tłumią jego drgania. Z latami guma twardnieje i pęka, a wibracja, którą wcześniej pochłaniały poduszki, przechodzi na nadwozie.',
      'Druga grupa przyczyn to nierówna praca samego silnika. Wypadanie zapłonu (gdy jeden z cylindrów raz po raz nie odpala — zwykle przez świece albo cewki), zasysanie nieuwzględnionego powietrza przez pęknięty przewód albo uszczelkę kolektora dolotowego, zabrudzona przepustnica lub wtryskiwacze — wszystko to czyni bieg jałowy niestabilnym. Odróżnić te przypadki od poduszek nietrudno: wtedy wskazówka obrotomierza drży albo pływa i często zapala się kontrolka silnika, a przy zużytych poduszkach silnik pracuje równo — trzęsie się właśnie nadwozie.',
    ],
    causes: [
      { name: 'Poduszki silnika', likelihood: 'Najczęściej — zwłaszcza w autach starszych niż 8–10 lat' },
      { name: 'Wypadanie zapłonu: świece, cewki', likelihood: 'Często — jeśli obroty drżą i świeci kontrolka silnika' },
      { name: 'Zasysanie powietrza przez przewód albo uszczelkę dolotu', likelihood: 'Często — jeśli obroty pływają, bywa syczenie' },
      { name: 'Zabrudzona przepustnica albo wtryskiwacze', likelihood: 'Często przy przebiegach powyżej stu tysięcy' },
    ],
    canRide: [
      'W większości scenariuszy jeździć można: wibracja na biegu jałowym to nie ten objaw, przez który zostawia się auto na poboczu. Przy zużytych poduszkach jest tydzień–dwa na spokojne umówienie warsztatu; ciągnąć miesiącami nie warto — rozbite poduszki dokładają stuki przy ruszaniu i zmianach biegów oraz przyspieszają zużycie sąsiednich elementów.',
      'Osobna historia to sytuacja, gdy silnik wyraźnie „trzyma na trzech”: trzęsie szarpnięciami, kontrolka silnika miga albo świeci, spadła moc. Z tym też można jechać, ale ostrożnie i niedługo: niespalone paliwo przy wypadaniu zapłonu dopala się w układzie wydechowym i przegrzewa katalizator, a jego wymiana jest droga. Diagnostyka w takim przypadku jest potrzebna w najbliższych dniach, a nie przy okazji.',
    ],
    checks: [
      'Test poduszek: włączyć bieg (w automacie D) i przytrzymać hamulec. Wibracja od zużytych poduszek zwykle zauważalnie się w tym położeniu nasila.',
      'Spojrzeć na obrotomierz: wskazówka stoi równo, a autem trzęsie — argument za poduszkami; wskazówka drży albo pływa — silnik pracuje z przerwami.',
      'Włączyć klimatyzację i zauważyć, czy drżenie się zmienia: pod dodatkowym obciążeniem słabe poduszki i nierówny bieg jałowy ujawniają się wyraźniej, a taki szczegół przyda się mechanikowi.',
      'Obejrzeć, niczego nie zdejmując, cienkie gumowe przewody pod maską: pęknięcia i zsunięte króćce to częste miejsce zasysania powietrza.',
      'Przypomnieć sobie, kiedy wymieniano świece: przebieg daleko poza zaleceniami czyni je pierwszym kandydatem przy wypadaniu zapłonu. Jeśli świeci kontrolka silnika, zacząć od diagnostyki komputerowej: kody błędów zawężą poszukiwania.',
    ],
    appHelp:
      'Aplikacja Pro-Stuk zada te same pytania — czy drżenie nasila się z włączonym biegiem, czy obroty trzymają się równo, czy świeci kontrolka silnika — i po odpowiedziach rozłoży prawdopodobne przyczyny na procenty. W raporcie będzie czytelny wniosek: jedź spokojnie, umów wizytę w tym tygodniu albo pokaż auto w najbliższych dniach.',
    faq: [
      {
        q: 'Dlaczego trzęsie tylko na biegu jałowym, a w jeździe auto idzie równo?',
        a: 'Na biegu jałowym obroty są najniższe i silnik kołysze się na poduszkach z częstotliwością, którą nadwozie dobrze przekazuje do kabiny. Wraz ze wzrostem obrotów drgania stają się drobniejsze i mniej wyczuwalne. Dlatego zużyte poduszki zdradzają się na światłach, a nie na trasie.',
      },
      {
        q: 'Czym jest wypadanie zapłonu?',
        a: 'To sytuacja, gdy mieszanka w jednym z cylindrów co jakiś czas się nie zapala — najczęściej przez zużyte świece albo uszkodzoną cewkę. Silnik traci w tym momencie część mocy i szarpie, a niespalone paliwo dopala się w układzie wydechowym i przegrzewa katalizator.',
      },
      {
        q: 'Czy pomoże czyszczenie przepustnicy?',
        a: 'Pomoże, jeśli przyczyna tkwi właśnie w niej: nagar przeszkadza precyzyjnie dawkować powietrze na biegu jałowym i obroty stają się nierówne. Ale czyszczenie nie jest lekarstwem uniwersalnym: przy zużytych poduszkach albo wypadaniu zapłonu wibracja po nim nie zniknie.',
      },
    ],
  },

  'hlopki-v-glushitele': {
    h1: 'Strzały w tłumiku',
    metaTitle: 'Strzały w tłumiku: przyczyny i co robić | Pro-Stuk',
    description:
      'Dlaczego z tłumika słychać strzały: wypadanie zapłonu, przepalony wydech, skład mieszanki albo ustawienia instalacji gazowej. Czym strzały grożą katalizatorowi.',
    intro: [
      'Strzały z tłumika oznaczają, że część paliwa spala się nie w cylindrach, tylko już w układzie wydechowym. Najczęściej winne jest wypadanie zapłonu: zużyta świeca albo uszkodzona cewka nie zapala mieszanki, niespalona benzyna trafia do gorącego wydechu i tam zapala się z charakterystycznym hukiem.',
      'Druga grupa przyczyn to sam układ wydechowy: przepalony tłumik, rura albo uszczelka dokładają do strzałów ryk, który nasila się przy dodaniu gazu. Mieszanka bywa też nieprawidłowa przez czujniki albo wtryskiwacze, a w autach z instalacją gazową strzały na gazie to typowy objaw rozregulowanych ustawień. Wszystkie scenariusze mają wspólny mianownik: niespalone paliwo dopala się w katalizatorze — elemencie wydechu dopalającym szkodliwe gazy — przegrzewa go i stopniowo niszczy, a wymiana katalizatora jest droga.',
    ],
    causes: [
      { name: 'Wypadanie zapłonu: świece albo cewki', likelihood: 'Najczęściej' },
      { name: 'Przepalony tłumik, rura albo uszczelka wydechu', likelihood: 'Często — strzałom towarzyszy ryk' },
      { name: 'Nieprawidłowa mieszanka: czujniki albo wtryskiwacze', likelihood: 'Nierzadko' },
      { name: 'Rozregulowane ustawienia instalacji gazowej', likelihood: 'Jeśli strzały są tylko na gazie' },
      { name: 'Ryk przy przyspieszaniu bez ciągu: ślizga się sprzęgło', likelihood: 'Osobny przypadek o podobnym brzmieniu' },
    ],
    canRide: [
      'Pojedynczy strzał przy puszczeniu gazu to nie powód, by się zatrzymywać: do domu albo do warsztatu dojedziesz. Z regularnymi strzałami też można jeździć, ale diagnostykę warto zaplanować na najbliższe dni, a nie tygodnie: każdy strzał to porcja niespalonego paliwa dopalająca się w katalizatorze, a rachunek za odłożoną naprawę rośnie od tanich świec do ceny katalizatora.',
      'Szczególny przypadek to migająca kontrolka silnika: tak system ostrzega o aktywnym wypadaniu zapłonu, groźnym dla katalizatora właśnie teraz. Z migającą kontrolką jedź tylko spokojnie i niedaleko, bez obciążenia, i do warsztatu bez zwłoki. Jeśli w kabinie czuć spaliny, do naprawy jeźdź z uchyloną szybą i nie nagrzewaj auta w zamkniętym garażu: tlenek węgla jest niebezpieczny.',
    ],
    checks: [
      'Zauważyć, kiedy strzela: pod obciążeniem przy przyspieszaniu, przy puszczeniu gazu czy na biegu jałowym — ten szczegół od razu zawęzi mechanikowi poszukiwania.',
      'Spojrzeć na kontrolkę silnika: świeci równo — na diagnostykę w najbliższych dniach; miga — wypadanie zapłonu trwa właśnie teraz i wizyty nie wolno odkładać.',
      'Ocenić pracę silnika: nierówna praca, drżenie na biegu jałowym i spadek mocy razem ze strzałami wskazują na świece, cewki albo mieszankę.',
      'Posłuchać wydechu: ryk nasilający się przy dodaniu gazu przy normalnym ciągu to oznaka dziury w tłumiku albo rurze, a nie problemu z zapłonem.',
      'W aucie z instalacją gazową porównać pracę na gazie i na benzynie: strzały tylko na gazie to pytanie do serwisu instalacji.',
    ],
    appHelp:
      'Aplikacja Pro-Stuk doprecyzuje okoliczności — strzały czy ryk, na gazie czy na benzynie, czy jest utrata mocy — i pomoże rozdzielić problemy zapłonu, dziurę w wydechu i ślizgające się sprzęgło, które na słuch są podobne. W raporcie będą prawdopodobne przyczyny z procentami i czytelne zalecenie, jak pilnie potrzebny jest warsztat.',
    faq: [
      {
        q: 'Dlaczego strzela w tłumiku, jeśli problem jest w silniku?',
        a: 'Gdy świeca albo cewka nie zapala mieszanki w cylindrze, niespalona benzyna zostaje wypchnięta do układu wydechowego. Tam trafia na rozgrzane elementy i dopala się z błyskiem — ten dźwięk słychać jako strzał z tłumika. Źródło jest jednak pod maską, a nie w samym tłumiku.',
      },
      {
        q: 'Czym strzały grożą katalizatorowi?',
        a: 'Katalizator jest przewidziany do dopalania resztek spalin, a nie porcji surowego paliwa. Dopalająca się w nim benzyna podnosi temperaturę powyżej wartości projektowej, a ceramiczne plastry topią się albo rozsypują. Efekt to utrata mocy, grzechot spod podwozia i wymiana katalizatora — jedna z najdroższych prac przy wydechu.',
      },
      {
        q: 'Auto z instalacją gazową strzela na gazie. To groźne?',
        a: 'Tak, dla instalacji gazowej strzały są groźniejsze niż dla silnika benzynowego: cofnięcie płomienia w dolocie potrafi uszkodzić jej plastikowe elementy i czujniki. Zwykła przyczyna to rozregulowane ustawienia albo zużyte świece. Rozsądnie jest przejść na benzynę i umówić się do specjalistów od instalacji gazowych.',
      },
    ],
  },
};
