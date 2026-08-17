import type { HubText } from './index';

/** Разделы по узлам: польский. Слаг общий с английским, переводится только текст. */
export const pl: Record<string, HubText> = {
  dvigatel: {
    h1: 'Hałasy i stukanie silnika',
    short: 'Silnik',
    metaTitle: 'Hałasy i stukanie silnika: przewodnik | Pro-Stuk',
    description:
      'Wszystkie dźwięki silnika w jednym miejscu: stukanie, tykanie, grzechotanie, dzwonienie, gwizd. Jak oddzielić nieszkodliwe od groźnego i co sprawdzisz sam.',
    intro: [
      'Silnik to najbardziej gadatliwy podzespół w samochodzie i zarazem najbardziej dwuznaczny: pod słowem „stukanie” kryje się zarówno nieszkodliwe klekotanie wtryskiwaczy, jak i zużyte panewki wału korbowego, przy których każdy kilometr przybliża remont. Rozróżnia je nie głośność, lecz miejsce, z którego dochodzi dźwięk, moment pojawienia się oraz reakcja na gaz i na rozgrzanie.',
      'Ten dział zbiera materiał o każdym rodzaju dźwięku: od tykania zaworów i szelestu łańcucha rozrządu po spalanie stukowe i stuk panewek korbowodowych. Przy każdym — opis brzmienia, bezpieczne testy bez rozbierania i uczciwa ocena pilności.',
    ],
  },
  podveska: {
    h1: 'Stuki i skrzypienie zawieszenia',
    short: 'Zawieszenie i układ kierowniczy',
    metaTitle: 'Stuki i skrzypienie zawieszenia: przewodnik | Pro-Stuk',
    description:
      'Pro-Stuk na nierównościach, skrzypienie, luz na kierownicy: jak ustalić źródło w zawieszeniu i układzie kierowniczym i co sprawdzisz sam.',
    intro: [
      'Zawieszenie zużywa się stopniowo i prawie zawsze ostrzega dźwiękiem na długo przed tym, jak stanie się groźne. Problem jest inny: identyczny stuk na nierównościach dają zarówno tanie łączniki stabilizatora, jak i sworzeń wahacza, którego urwanie przy prędkości to już kwestia bezpieczeństwa.',
      'Dział grupuje materiały według charakteru dźwięku i warunków: szybki stuk na drobnej „tarce”, pojedyncze uderzenia w dziurach, skrzypienie przy kołysaniu auta, stuk w kierownicę. Osobno — objawy zużycia każdego elementu i testy do wykonania bez podnośnika.',
    ],
  },
  tormoza: {
    h1: 'Piski i zgrzyt hamulców',
    short: 'Hamulce i koła',
    metaTitle: 'Piski i zgrzyt hamulców: przewodnik | Pro-Stuk',
    description:
      'Pisk, gwizd, zgrzyt i bicie przy hamowaniu: co oznacza każdy dźwięk, kiedy nie wolno jechać dalej i jak samemu sprawdzić klocki oraz zacisk.',
    intro: [
      'Hamulce to jedyny układ, w którym dźwięk należy brać dosłownie: większość sygnałów jest zamierzona przez producenta. Metalowy czujnik zużycia zaczyna piszczeć celowo, gdy klocki się kończą, a zgrzyt metalu o metal oznacza, że zapas już się wyczerpał.',
      'Jednocześnie najczęstsza przyczyna pisku jest niegroźna: nocny nalot rdzy na tarczach, który schodzi po kilku hamowaniach. Tu trafiają też dźwięki kół i piast: buczenie łożyska, wibracja przy prędkości i stuki, często mylone z hamulcami.',
    ],
  },
  transmissiya: {
    h1: 'Hałasy skrzyni i napędu',
    short: 'Napęd',
    metaTitle: 'Hałasy skrzyni i napędu: przewodnik | Pro-Stuk',
    description:
      'Wycie skrzyni, kliknięcia przegubów, szarpnięcia przy zmianie biegów i buczenie sprzęgła: jak ustalić źródło pod podłogą.',
    intro: [
      'Napęd odzywa się inaczej niż silnik i zawieszenie: jego dźwięki zależą od tego, czy przenoszony jest moment. Dźwięk, który znika po puszczeniu gazu i wraca pod obciążeniem, prawie zawsze należy do tej grupy.',
      'Dział zbiera materiały o skrzyni, sprzęgle, półosiach i przekładni głównej: jak brzmi każdy element, który test coś pokaże bez rozbierania i od kiedy dalsza jazda robi się kosztowna.',
    ],
  },
  vyhlop: {
    h1: 'Hałasy układu wydechowego',
    short: 'Wydech',
    metaTitle: 'Hałasy wydechu: pełny przewodnik | Pro-Stuk',
    description:
      'Ryk, strzały w tłumiku, grzechotanie pod podłogą i dzwoniąca osłona termiczna: co oznaczają dźwięki wydechu i dlaczego są ważne.',
    intro: [
      'Wydech wydaje najbardziej rozpoznawalne dźwięki ze wszystkich: ryk przepalonego tłumika, strzały przy puszczeniu gazu, metaliczne grzechotanie przy określonych obrotach. Większość nie zmienia zachowania auta, ale ignorować ich nie warto: za niewinnie brzmiącym grzechotem bywa rozsypujący się katalizator, którego okruchy mogą trafić do silnika.',
      'Dział obejmuje całą drogę: od groszowej osłony termicznej i rozerwanego elastycznego łącznika po przepaloną uszczelkę kolektora i zapchany katalizator, wraz z brzmieniem każdej usterki i ryzykiem spalin w kabinie.',
    ],
  },
  salon: {
    h1: 'Skrzypienie i stuki we wnętrzu',
    short: 'Wnętrze i nadwozie',
    metaTitle: 'Skrzypienie we wnętrzu: jak znaleźć źródło | Pro-Stuk',
    description:
      'Świerszcze w kabinie, skrzypiąca deska rozdzielcza, stukające drzwi: jak samemu znaleźć źródło i odróżnić je od usterki podwozia.',
    intro: [
      'Dźwięki wnętrza są najbardziej męczące i zwykle najtańsze w usunięciu: częściej stoi za nimi obluzowany klips, niezamocowany przedmiot w bagażniku albo wysuszona uszczelka niż awaria. Najważniejsze to odróżnić je od stuku zawieszenia, żeby skrzypiący plastik nie zamienił się w rachunek za diagnostykę podwozia.',
      'Dział pokazuje proste sposoby przyparcia dźwięku do muru: docisnąć poszycie dłonią w czasie jazdy, opróżnić bagażnik, skręcić nadwozie wjeżdżając kołem na krawężnik. I uczciwy znak, kiedy dźwięk naprawdę pochodzi z dołu.',
    ],
  },
};
