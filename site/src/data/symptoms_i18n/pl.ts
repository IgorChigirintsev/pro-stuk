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
};
