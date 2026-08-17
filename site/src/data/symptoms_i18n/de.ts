import type { SymptomTr } from '../types';

/** Разборы симптомов по-немецки. Структура — из русских файлов рядом. */
export const pages: Record<string, SymptomTr> = {
  'stuk-v-dvigatele': {
    h1: 'Klopfen im Motor',
    metaTitle: 'Motor klopft: Ursachen, Gefahr, was zu tun ist | Pro-Stuk',
    description:
      'Warum der Motor klopft: vom harmlosen Ventilticken bis zu verschlissenen Kurbelwellenlagern. Wie Sie ein gefährliches Klopfen erkennen, ob Sie weiterfahren können und was Sie selbst prüfen.',
    intro: [
      'Klopfen im Motor deckt die größte Spannweite an Ernsthaftigkeit ab: Hinter demselben Wort stecken das harmlose Klackern der Injektoren ebenso wie verschlissene Kurbelwellenlager, bei denen jeder weitere Kilometer die Motorrevision näher bringt. Die gute Nachricht: Verschiedene Klopfgeräusche klingen verschieden und treten unter verschiedenen Bedingungen auf — daran lässt sich der Kreis der Ursachen schnell einengen.',
      'Die Fragen, mit denen jeder Motorenbauer beginnt: Wo klopft es (oben am Motor oder aus der Tiefe), wann (kalt, warm, unter Last) und ändert sich das Klopfen mit der Drehzahl? Ein leichtes, schnelles Ticken von oben ist meist der Ventiltrieb. Ein dumpfes Klopfen von unten, das beim Gasstoß schneller wird und unter Last lauter, ist die beunruhigende Variante.',
    ],
    causes: [
      { name: 'Zu große Ventilspiele oder Hydrostößel', likelihood: 'Sehr häufig — die typische Ursache für Ticken von oben' },
      { name: 'Normales Injektorklackern (Direkteinspritzer und Diesel)', likelihood: 'Häufig — und kein Defekt' },
      { name: 'Nebenaggregate: Riemenscheiben, Halter, Klimakompressor-Kupplung', likelihood: 'Häufig, wenn das Klopfen unabhängig vom Gas ist' },
      { name: 'Klopfende Verbrennung beim Beschleunigen (Klingeln)', likelihood: 'Häufig nach dem Tanken von Kraftstoff mit zu niedriger Oktanzahl' },
      { name: 'Kurbelwellen- und Pleuellager', likelihood: 'Seltener, aber das ist das gefährlichste Szenario' },
    ],
    canRide: [
      'Es kommt auf den Charakter des Klopfens an. Mit gleichmäßigem Ticken von oben können Sie fahren: Der Ventiltrieb verschleißt über Monate, nicht auf einer Fahrt — einen Termin zum Einstellen sollten Sie aber in den nächsten zwei Wochen machen. Beim Injektorklackern eines Direkteinspritzers ist gar nichts zu tun: Das ist die normale Arbeit des Einspritzsystems.',
      'Ein dumpfes Klopfen aus der Tiefe des Motors, das mit der Drehzahl schneller wird und unter Last lauter, ist ein Grund anzuhalten. So klingen verschlissene Lagerschalen — die Gleitlager, in denen sich die Kurbelwelle dreht. Weiterzufahren kann mit einem durchgedrehten Lager oder einem Kolbenfresser enden; fahren Sie möglichst nicht aus eigener Kraft in die Werkstatt, sondern rufen Sie den Abschleppdienst.',
    ],
    checks: [
      'Ölstand am Messstab prüfen: Ein niedriger Stand begleitet und verstärkt Motorgeräusche häufig, und ein Lagerklopfen bei niedrigem Öldruck verschlimmert sich schnell.',
      'Heraushören, woher der Ton kommt: Stellen Sie sich an die offene Motorhaube — Ventilticken hört man oben, ein Lagerklopfen ist dumpf und kommt aus der Tiefe.',
      'Im Leerlauf sanft Gas geben: Ein Klopfen, das mit der Drehzahl schneller wird und unter Last lauter klingt, ist ernster als eines, das sein eigenes Leben führt.',
      'An das letzte Tanken denken: Ein metallisches Klingeln beim Beschleunigen nach zweifelhaftem Benzin sieht nach klopfender Verbrennung aus und verschwindet oft nach einer Tankfüllung guten Kraftstoffs.',
      'Prüfen, ob die Öldruckleuchte an ist: Die rote Ölkanne zusammen mit einem Klopfen heißt, den Motor sofort abzustellen.',
    ],
    appHelp:
      'Die App Pro-Stuk führt Sie durch dieselben Fragen, die ein Motorenbauer stellt, nimmt das Geräusch auf und bewertet Spektrum und Rhythmus: wie oft die Schläge kommen und wie sich das zur Drehzahl verhält — bei Ventil- und Kurbelwellenklopfen ist dieses Verhältnis verschieden. Im Bericht stehen wahrscheinliche Ursachen mit Prozentwerten, eine Dringlichkeitsampel und Formulierungen für das Gespräch in der Werkstatt.',
    faq: [
      {
        q: 'Warum klopft der Motor nur im kalten Zustand?',
        a: 'Solange der Motor nicht warm ist, sind die Spiele zwischen den Bauteilen größer und das dickflüssige Öl hat noch nicht jede Stelle erreicht. Tickende Hydrostößel oder ein dumpfes Kolbenklopfen in den ersten Minuten nach dem Kaltstart, das mit der Erwärmung ganz verschwindet, ist meist eine Sache zum Beobachten und kein Notfall.',
      },
      {
        q: 'Wie klingt das gefährlichste Motorklopfen?',
        a: 'Dumpf, tief, aus der Tiefe des Motors; es wird mit der Drehzahl schneller und unter Last lauter — beim Beschleunigen oder am Berg. So klopfen Pleuel- und Hauptlager. Mit diesem Geräusch fahren Sie besser nicht selbst, sondern bringen das Auto so schnell wie möglich zu einer Werkstatt.',
      },
      {
        q: 'Kann ein Klopfen normal sein?',
        a: 'Ja. Direkteinspritzer (TSI, GDI) und Diesel klackern immer mit ihren Injektoren — das Geräusch ist kalt wie warm gleich und von außen lauter als im Innenraum. Das ist normaler Betrieb, kein Defekt.',
      },
    ],
  },

  'skrip-tormozov': {
    h1: 'Quietschende Bremsen',
    metaTitle: 'Bremsen quietschen: gefährlich oder nicht, Ursachen | Pro-Stuk',
    description:
      'Warum Bremsen quietschen: ein Rostfilm über Nacht, der Verschleißanzeiger der Beläge oder ein Problem mit den Scheiben. Wie Sie harmloses Quietschen von einer Warnung unterscheiden.',
    intro: [
      'Quietschen beim Bremsen ist der seltene Fall, in dem die häufigste Ursache auch die harmloseste ist. Über Nacht, nach Regen oder Wäsche legt sich ein dünner Rostfilm auf die Bremsscheiben; die ersten Bremsungen schaben ihn ab — mit Quietschen. Ist das Geräusch nach ein paar Minuten Fahrt weg, ist nichts zu tun: Das ist normales Leben für jedes Auto mit Scheibenbremsen.',
      'Quietschen bei jeder Bremsung ist etwas anderes. Viele Beläge tragen einen metallischen Verschleißanzeiger: ein Blech, das die Scheibe absichtlich berührt und quietscht, sobald der Belag bis zur Grenze abgenutzt ist. Das ist eine eingebaute Warnung: Lassen Sie die Beläge prüfen, bevor aus dem Quietschen Metall auf Metall wird — das bedeutet nämlich schon ruinierte Scheiben und einen längeren Bremsweg.',
    ],
    causes: [
      { name: 'Rostfilm nach dem Stehen, Regen oder der Wäsche', likelihood: 'Am häufigsten — wenn das Quietschen nach den ersten Bremsungen verschwindet' },
      { name: 'Verschleißanzeiger: die Beläge sind am Ende', likelihood: 'Häufig — wenn es bei jeder Bremsung quietscht' },
      { name: 'Harte oder billige Beläge, Staub zwischen Belag und Scheibe', likelihood: 'Häufig; unangenehm, aber nicht gefährlich' },
      { name: 'Beläge bis aufs Metall abgefahren (Schleifen)', likelihood: 'Wenn die Warnung ignoriert wurde' },
    ],
    canRide: [
      'Mit dem Morgenquietschen, das nach den ersten Bremsungen verschwindet, fahren Sie ohne Einschränkung: Ein paar sanfte Bremsungen reinigen die Scheiben, und die Sache ist bis zum nächsten Regen erledigt.',
      'Mit dauerhaftem Quietschen können Sie ebenfalls fahren — die Bremsen arbeiten noch voll —, aber vereinbaren Sie den Termin für diese Woche und nicht für irgendwann: Ist es der Verschleißanzeiger, folgt als Nächstes Schleifen, bis auf die Trägerplatte abgefahrene Beläge und eine Rechnung für Beläge und Scheiben. Metall auf Metall ist ein Stoppsignal: nur noch vorsichtig bis zur Werkstatt, früh und sanft bremsen.',
    ],
    checks: [
      'Das Muster verfolgen: Quietschen nur bei den ersten Bremsungen nach dem Stehen oder bei Nässe ist Rost; Quietschen bei jeder Bremsung ist ein Grund für eine Kontrolle.',
      'Durch die Speichen der Felge schauen: Bei vielen Autos ist der äußere Belag sichtbar. Ist der Belag dünner als 3–4 mm, gehört er ersetzt.',
      'Heraushören, ob es eine Seite ist oder beide: Quietschen von einer Seite spricht eher für den Verschleißanzeiger oder einen klemmenden Sattel genau dort.',
      'Auf ein Pfeifen während der Fahrt ohne Bremsen achten, das sich bei leichtem Pedaldruck ändert — so streift der Verschleißanzeiger die Scheibe schon vor dem Bremsen.',
      'Auf Pedal und Fahrverhalten achten: Ziehen zur Seite beim Bremsen, Pulsieren oder ein langes Pedal sind ernster als Quietschen und bedeuten Werkstatt ohne Aufschub.',
    ],
    appHelp:
      'Die App Pro-Stuk trennt das harmlose vom beunruhigenden Szenario mit denselben Fragen — wann es quietscht und ob das Geräusch verschwindet —, und die Aufnahme hilft, das hohe Quietschen des Verschleißanzeigers vom Schleifen zu unterscheiden. Im Bericht stehen wahrscheinliche Ursachen mit Prozentwerten und eine Ampel: weiterfahren, diese Woche in die Werkstatt oder anhalten.',
    faq: [
      {
        q: 'Warum quietschen Bremsen morgens und bei Regen?',
        a: 'Auf gusseisernen Bremsscheiben bildet sich in feuchter Luft binnen weniger Stunden eine dünne Rostschicht. Die ersten Bremsungen schaben sie ab — daher das Quietschen und leichte Schaben, das schnell vergeht. Das ist normal und erfordert keine Reparatur.',
      },
      {
        q: 'Was ist ein Verschleißanzeiger am Bremsbelag?',
        a: 'Ein Metallblech am Belag, das die Scheibe zu berühren beginnt und laut quietscht, sobald der Belag bis zur Grenze abgenutzt ist. Es ist eine absichtliche Warnung: Hören Sie dauerhaftes Quietschen, vereinbaren Sie den Belagwechsel, bevor das Schleifen beginnt.',
      },
      {
        q: 'Was unterscheidet Quietschen vom Schleifen?',
        a: 'Quietschen und Pfeifen sind hohe Töne, bei denen die Bremsen noch voll arbeiten. Schleifen ist ein grobes Geräusch von Metall auf Metall: Der Belag ist verbraucht, und die stählerne Trägerplatte reibt an der Scheibe. Mit Schleifen darf man nicht fahren — nur vorsichtig bis zur Werkstatt.',
      },
    ],
  },

  'gul-pri-dvizhenii': {
    h1: 'Brummen während der Fahrt',
    metaTitle: 'Brummen während der Fahrt: Radlager, Reifen oder Getriebe | Pro-Stuk',
    description:
      'Gleichmäßiges Brummen bei Tempo: Radlager, Reifen, Getriebe oder Differenzial. Einfache Tests ohne Werkstatt — Leerlauftest und sanfte Kurven — grenzen die Ursache ein.',
    intro: [
      'Ein gleichmäßiges Brummen, das mit dem Tempo auftaucht und mit ihm wächst, kommt meist aus einer von zwei Quellen: dem Radlager — dem Lager, auf dem sich das Rad dreht — oder den Reifen. Unterscheiden lassen sie sich ohne Werkstatt. Ein Lager brummt auf jedem Asphalt gleich, klingt wie ein startendes Flugzeug in der Ferne und ändert sich oft in sanften Kurven. Reifen reagieren auf den Belag: auf frischem Asphalt leiser, auf grobem lauter; besonders laut sind Winter-, Gelände- und ungleichmäßig abgefahrene Reifen.',
      'Seltener ist der Antriebsstrang die Quelle: Getriebe, Differenzial oder Kardanwelle bei Heck- und Allradantrieb. Der Leerlauftest sortiert die Versionen: auf die Geschwindigkeit beschleunigen, bei der das Brummen zu hören ist, den Leerlauf einlegen und rollen. Bleibt das Brummen, hängt es an der Drehung der Räder — Lager, Reifen, Fahrbahn. Verschwindet es zusammen mit der Motordrehzahl, ist im Motor und in dem zu suchen, was er antreibt.',
    ],
    causes: [
      { name: 'Radlager', likelihood: 'Am häufigsten — gleichmäßiges Brummen, wächst mit dem Tempo, Belag egal' },
      { name: 'Reifengeräusch', likelihood: 'Häufig — hängt vom Belag ab; Winterreifen und abgefahrene Reifen sind lauter' },
      { name: 'Getriebe oder Differenzial', likelihood: 'Seltener — das Heulen ändert sich mit dem Gang oder beim Gasgeben' },
      { name: 'Kardanwelle (Heck- und Allradantrieb)', likelihood: 'Brummen mit Vibration im Boden in einem engen Geschwindigkeitsbereich' },
      { name: 'Windgeräusche: Dichtungen, Dachträger', likelihood: 'Erst oberhalb von 70–90 km/h' },
    ],
    canRide: [
      'Mit einem brummenden Lager können Sie fahren, aber das ist kein Geräusch für Monate: Ein verschlissenes Radlager bekommt allmählich Spiel — freies Spiel des Rades — und kann im vernachlässigten Fall festgehen. Vernünftig ist eine Diagnose innerhalb einer Woche, lange schnelle Fahrten bis dahin verschoben. Wurde das Brummen plötzlich lauter oder kam eine Vibration dazu, warten Sie nicht.',
      'Reifen- und Windgeräusche sind eine Frage des Komforts, nicht der Sicherheit: Damit fahren Sie ohne Einschränkung. Ein Heulen aus Getriebe oder Differenzial verlangt ebenfalls kein Anhalten am Seitenstreifen, sollte aber nicht hinausgezögert werden: Früh erkannt reicht oft ein Ölwechsel, eine späte Reparatur mit Wellen und Zahnrädern kostet ein Vielfaches.',
    ],
    checks: [
      'Leerlauftest: auf die brummende Geschwindigkeit beschleunigen, Leerlauf einlegen, rollen. Brummen bleibt — Räder und Lager; verschwindet mit der Drehzahl — Motor und Antriebsstrang.',
      'Flache Kurven auf sicherer Strecke: Wird das Brummen im weiten Bogen zur einen Seite leiser und zur anderen lauter, sieht es nach Radlager aus, und die Seite verrät welches.',
      'Beläge vergleichen: einen Abschnitt auf frischem und einen auf grobem Asphalt fahren. Ein deutlicher Lautstärkeunterschied spricht für die Reifen.',
      'Profil ansehen und Luftdruck prüfen: Sägezahnverschleiß — Stufen an den Kanten der Profilblöcke — macht Reifen laut und deutet auf falsche Spur oder müde Stoßdämpfer hin.',
      'Beim Schaltgetriebe prüfen, ob sich das Heulen bei gleicher Geschwindigkeit in verschiedenen Gängen ändert; beim Heckantrieb, ob mit dem Brummen ein Zittern im Boden in einem engen Geschwindigkeitsbereich auftritt.',
    ],
    appHelp:
      'Die App Pro-Stuk führt durch dieselben Fragen — bleibt das Brummen im Leerlauf, ändert es sich in Kurven und mit dem Belag — und hilft, das Geräusch aufzunehmen, um seinen Charakter mit typischen Fällen zu vergleichen. Im Bericht stehen wahrscheinliche Ursachen mit Prozentwerten und ein Fazit: ruhig weiterfahren, Werkstatt planen oder ohne Aufschub prüfen lassen.',
    faq: [
      {
        q: 'Wie unterscheide ich ein Lagerbrummen vom Reifengeräusch?',
        a: 'An der Reaktion auf Fahrbahn und Kurven. Reifengeräusch ändert sich mit dem Belag: auf neuem Asphalt leiser, auf grobem lauter. Ein Lager brummt überall gleich, reagiert dafür oft auf sanfte Kurven, wenn die Last auf das kurvenäußere Rad wandert. Auch ein Blick aufs Profil hilft: ungleichmäßig abgefahrene Reifen brummen von selbst.',
      },
      {
        q: 'Ist es gefährlich, mit einem brummenden Radlager zu fahren?',
        a: 'Am Anfang nicht, aber hinauszögern sollte man es nicht: Mit der Zeit entsteht Spiel im Lager, das Rad beginnt zu flattern, im Extremfall geht das Lager fest. Die Prüfung ist einfach: Auf der Hebebühne dreht der Mechaniker die Räder und findet die laute Nabe in wenigen Minuten. Ein vernünftiger Termin liegt innerhalb einer Woche.',
      },
      {
        q: 'Warum ändert sich das Brummen in Kurven?',
        a: 'In der Kurve wandert das Gewicht des Autos auf die äußeren Räder. Brummt das rechte Lager, steigt beim Linksabbiegen die Last darauf und das Brummen wird lauter, beim Rechtsabbiegen leiser. Diese Regelmäßigkeit hilft, die Seite schon vor der Werkstatt zu bestimmen: merken und dem Mechaniker sagen.',
      },
    ],
  },

  'stuk-v-podveske': {
    h1: 'Klopfen im Fahrwerk',
    metaTitle: 'Klopfen im Fahrwerk: was klopft, Ursachen, weiterfahren? | Pro-Stuk',
    description:
      'Was im Fahrwerk klopft: Koppelstangen, Gummilager, die Lenkung oder eine gebrochene Feder. Wie Sie die Geräusche nach ihrem Charakter unterscheiden und wann die Werkstatt dran ist.',
    intro: [
      'Das Fahrwerk eines Pkw besteht aus einigen Dutzend Gelenken, Gummilagern und Stützen, und mit den Jahren ist Spiel — freies Spiel — in einem davon fast unvermeidlich. Ein ausgeschlagenes Teil antwortet auf jede Unebenheit mit einem Klopfen: Das Fahrwerk federt ein und aus, und das verschlissene Teil schlägt in seiner Aufnahme. Die gute Nachricht ist, dass zuerst meist billige Teile aufgeben — die Koppelstangen, kleine Stangen mit Gelenken, die im Fahrwerk vor allem anderen verschleißen.',
      'Der Charakter des Geräusches verrät die Quelle schon vor der Hebebühne. Häufiges dumpfes Klopfen auf kleinen Wellen und Fugen ist die Handschrift der Koppelstangen. Einzelne Schläge in Schlaglöchern und über Schwellen deuten auf Gummilager — die Buchsen, mit denen die Lenker an der Karosserie sitzen — oder auf müde Stoßdämpfer. Ein Klopfen, das direkt ins Lenkrad geht und in den Handflächen zu spüren ist, ist Spiel im Lenkgetriebe. Und ein Knarzen wie ein altes Bett ist gar kein Klopfen, sondern trockenes Gummi in den Buchsen: das Harmloseste von allem.',
    ],
    causes: [
      { name: 'Koppelstangen', likelihood: 'Am häufigsten — häufiges dumpfes Klopfen auf kleinen Unebenheiten' },
      { name: 'Lenkerlager oder Stoßdämpfer', likelihood: 'Häufig — einzelne dumpfe Schläge in Schlaglöchern' },
      { name: 'Spiel im Lenkgetriebe', likelihood: 'Seltener — das Klopfen geht ins Lenkrad und ist in den Händen zu spüren' },
      { name: 'Stabilisatorlager, trockene Gummilager (Knarzen statt Klopfen)', likelihood: 'Häufig — besonders bei Frost und Nässe' },
      { name: 'Gebrochene Fahrwerksfeder', likelihood: 'Selten — plötzlich nach einem Schlagloch, eine Ecke steht tiefer' },
    ],
    canRide: [
      'Mit den meisten Fahrwerksgeräuschen können Sie fahren: Koppelstangen, Gummilager und Stützen fallen nicht schlagartig aus. Monatelang aufschieben sollten Sie die Diagnose trotzdem nicht — ein ausgeschlagenes Teil gibt die Schläge weiter und beschleunigt den Verschleiß der Nachbarn, und ähnlich klingen auch ernstere Dinge. Vernünftig ist ein Termin innerhalb von ein bis zwei Wochen und bis dahin langsam über große Löcher.',
      'Zwei Fälle verdienen mehr Aufmerksamkeit. Ein Klopfen, das ins Lenkrad geht, betrifft die Lenkung — ein Sicherheitsbauteil: Prüfung in den nächsten Tagen, und wenn das Lenkrad um die Mittellage gefühllos geworden ist oder das Auto in der Spur schwimmt, ohne Aufschub. Ein Scheppern, das plötzlich nach einem Schlagloch auftaucht, zusammen mit einer tiefer stehenden Ecke, ist das typische Bild einer gebrochenen Feder: sanft bis zur Werkstatt fahren, denn die gebrochene Windung kann sich verschieben und den Reifen beschädigen.',
    ],
    checks: [
      'Das stehende Auto am Kotflügel über jedem Rad wippen lassen: Knarzende Buchsen und Lager melden sich oft schon im Stand.',
      'Das Muster verfolgen: Klopfen auf kleinen Wellen spricht für Koppelstangen; einzelne Schläge in Schlaglöchern für Gummilager und Stoßdämpfer.',
      'Feststellen, ob das Geräusch vorn oder hinten sitzt und ob es ins Lenkrad geht: Ein in den Handflächen spürbares Klopfen, das leiser wird, wenn Sie das Lenkrad leicht unter Spannung halten, deutet auf Spiel im Lenkgetriebe.',
      'Jede Ecke des Autos nach unten drücken und loslassen: Die Karosserie sollte ohne Nachschwingen zurückkommen. Wippt sie weiter, ist der Stoßdämpfer müde.',
      'Ohne etwas zu zerlegen von unten hinter das Rad schauen: Eine gebrochene Windung sieht man oft mit bloßem Auge, und man erkennt zugleich, ob eine Ecke tiefer steht.',
    ],
    appHelp:
      'Die App Pro-Stuk geht dieselben Verzweigungen durch wie ein Mechaniker bei der ersten Sichtprüfung: welches Geräusch, auf welchen Unebenheiten, vorn oder hinten, geht es ins Lenkrad. Die Aufnahme bewahrt die Details bis zum Werkstattbesuch, und im Bericht stehen wahrscheinliche Ursachen mit Prozentwerten und eine klare Ampel: weiterfahren, diese Woche zeigen oder dringend prüfen lassen.',
    faq: [
      {
        q: 'Ist es gefährlich, mit einem Klopfen im Fahrwerk zu fahren?',
        a: 'Meistens bedeutet ein Klopfen keinen sofortigen Ausfall: Koppelstangen und Gummilager verschleißen allmählich. Aber das Spiel wächst und ruiniert die Nachbarteile, deshalb ist ein Termin innerhalb von ein bis zwei Wochen vernünftig. Ausnahmen sind ein Klopfen im Lenkrad und das Scheppern einer gebrochenen Feder: damit in den nächsten Tagen in die Werkstatt.',
      },
      {
        q: 'Warum klopft es auf kleinen Unebenheiten, während große Löcher leise bleiben?',
        a: 'Das ist die typische Handschrift der Koppelstangen: Ihre kleinen Gelenke hämmern genau auf Wellen, Kopfsteinpflaster und Fugen, wo das Fahrwerk oft und mit kleinem Weg arbeitet. Im großen Schlagloch ist solches Spiel nicht immer hörbar. Hinten klopfen die hinteren Koppelstangen und die Achslager auf dieselbe Art.',
      },
      {
        q: 'Kann es etwas anderes sein als das Fahrwerk?',
        a: 'Ja, und gar nicht selten. Ein dumpfes Klopfen hinten kommt vom nicht befestigten Wagenheber oder Reserverad im Kofferraum, ein Tacken vorn oben vom Spiel im Haubenschloss, ein Klappern von unten von den Auspuffhaltern. Ein einzelner Schlag beim ersten Anfahren nach langem Stehen sind an den Scheiben klebende Bremsbeläge, und das ist harmlos.',
      },
    ],
  },

  'gul-podshipnika-stupitsy': {
    h1: 'Brummen des Radlagers',
    metaTitle: 'Radlager brummt: woran Sie es erkennen | Pro-Stuk',
    description:
      'Wie ein verschlissenes Radlager klingt, wie Sie es vom Reifengeräusch unterscheiden, welches Rad brummt und wie lange Sie damit fahren können.',
    intro: [
      'Das Radlager ist das Bauteil, auf dem sich das Rad dreht. Verschleißt es, entsteht ein gleichmäßiges Brummen, das mit dem Tempo wächst: Viele vergleichen es mit einem startenden Flugzeug oder dem Brummen eines Transformators. Es beginnt kaum merklich ab 60–80 km/h, ist mit der Zeit bei jedem Tempo zu hören und kommt schließlich als Vibration an.',
      'Die Schwierigkeit ist, das Lager vom Reifengeräusch zu trennen: Sie brummen ähnlich. Es gibt zwei verlässliche Alltagstests. Der erste ist der Belag: Reifengeräusch ändert sich mit der Asphaltart, das Lagerbrummen bleibt überall gleich. Der zweite sind sanfte Spurwechsel bei Tempo: Ändert sich das Brummen im flachen Bogen, ist fast sicher ein Lager schuld — und zwar das der belasteten Seite.',
    ],
    causes: [
      { name: 'Verschlissenes Radlager', likelihood: 'Am häufigsten, wenn das Brummen gleichmäßig ist und den Belag ignoriert' },
      { name: 'Reifengeräusch (Winter-, Geländereifen, ungleichmäßiger Verschleiß)', likelihood: 'Sehr häufig — der große Doppelgänger des Lagers' },
      { name: 'Differenzial oder Achsantrieb (Heck- und Allradantrieb)', likelihood: 'Seltener; der Ton dieses Brummens ändert sich mit dem Gas' },
      { name: 'Mittellager der Kardanwelle', likelihood: 'Selten, nur bei Autos mit Kardanwelle' },
    ],
    canRide: [
      'In der Anfangsphase ja, aber mit Vorbehalt. Ein verschlissenes Lager zerfällt nicht schlagartig: Vom ersten Brummen bis zum kritischen Zustand vergehen meist Tausende Kilometer. Der Vorgang läuft aber nur in eine Richtung, und das Ende ist unangenehm: Spiel im Rad, ein ausgeschlagener Sitz, im Extremfall ein festgehendes Lager während der Fahrt.',
      'Die Regel ist deshalb einfach: Brummen bemerkt — innerhalb von ein bis zwei Wochen in die Werkstatt, lange schnelle Fahrten bis dahin verschieben. Wurde das Brummen plötzlich lauter, kam Vibration dazu, hat das Rad Spiel oder zieht das Auto zur Seite — sofort zur Diagnose, und nicht über die Autobahn.',
    ],
    checks: [
      'Belagtest: dieselbe Strecke auf unterschiedlichem Asphalt fahren. Das Brummen bleibt gleich — eher das Lager; auf glattem Belag leiser — eher die Reifen.',
      'Kurventest: auf leerer Straße bei 60–80 km/h sanft die Spur wechseln. Wird es beim Rechtsbogen leiser und beim Linksbogen lauter, ist die rechte Seite belastet und das rechte Lager wahrscheinlich; und umgekehrt.',
      'Leerlaufprobe: beschleunigen und im Leerlauf rollen. Das Brummen bleibt — die Quelle dreht sich mit den Rädern, nicht mit dem Motor.',
      'Profil ansehen: Sägezahn und Flecken ungleichmäßigen Verschleißes machen Reifen laut und deuten auf die Achsvermessung hin.',
      'Nach der Fahrt vorsichtig die Hand an die Naben halten (ohne die heiße Bremsscheibe zu berühren): eine deutlich wärmere Nabe auf einer Seite ist ein zusätzliches Indiz.',
    ],
    appHelp:
      'Die App Pro-Stuk stellt dieselben Kontrollfragen — zum Belag, zu Kurven und zum Rollen im Leerlauf —, nimmt das Brummen auf und bewertet seinen Charakter: das gleichmäßige Breitbandrauschen der Reifen und ein Lagerbrummen sehen im Spektrum verschieden aus. Im Bericht stehen die Wahrscheinlichkeiten der Ursachen, die Dringlichkeit und ein Hinweis, welche Seite Sie dem Mechaniker nennen sollten.',
    faq: [
      {
        q: 'Warum ändert sich das Brummen in Kurven?',
        a: 'In der Kurve wandert das Gewicht auf die äußeren Räder. Wird das Brummen beim Linksabbiegen lauter, ist die rechte Seite belastet — dann brummt wahrscheinlich das rechte Lager. Beim Rechtsabbiegen umgekehrt. Dieses Merkmal sollten Sie sich merken und in der Werkstatt nennen: Es halbiert die Suche.',
      },
      {
        q: 'Wie lange kann man mit einem brummenden Lager fahren?',
        a: 'Eine feste Zahl gibt es nicht: Von den ersten Anzeichen bis zu gefährlichem Spiel vergehen meist Tausende Kilometer, aber das Tempo des Verschleißes ist unvorhersehbar. Ein vernünftiger Kompromiss: Termin innerhalb von ein bis zwei Wochen und bis dahin keine langen schnellen Fahrten planen.',
      },
      {
        q: 'Kann man ein Lager mit den Reifen verwechseln?',
        a: 'Leicht — das ist der häufigste Irrtum. Zwei Merkmale trennen sie: Reifengeräusch hängt vom Belag ab und ändert sich nicht in Kurven, ein Lagerbrummen ist auf jedem Asphalt gleich und reagiert auf die Gewichtsverlagerung in flachen Bögen.',
      },
    ],
  },

  'stuk-na-nerovnostyah': {
    h1: 'Klopfen auf Unebenheiten',
    metaTitle: 'Klopfen auf Unebenheiten: Ursachen, selbst prüfen | Pro-Stuk',
    description:
      'Klopfen auf Unebenheiten: häufig auf kleinen Wellen, einzelne Schläge in Löchern oder ein Klopfen im Lenkrad. Welche Teile schuld sind, was Sie selbst prüfen und ob Sie fahren können.',
    intro: [
      'Ein Klopfen, das nur auf Unebenheiten auftritt — Fugen, Kopfsteinpflaster, Schwellen —, kommt fast immer aus dem Fahrwerk. Beim Überfahren federt das Fahrwerk ein und aus, und wenn in einem Gelenk Spiel entstanden ist, schlägt das Teil bei jeder Bewegung in seiner Aufnahme. Bei Autos ab fünf bis sieben Jahren ist das eine gewöhnliche Geschichte, und schuld sind meist billige Verschleißteile, nicht große Baugruppen.',
      'Das Muster des Klopfens engt den Kreis der Verdächtigen ein. Häufiges dumpfes Tacken auf kleinen Wellen vorn ist der Klassiker der Koppelstangen; dasselbe Muster hinten sind die hinteren Koppelstangen oder die Achslager — die Gummibuchsen, mit denen die Achse an der Karosserie sitzt. Einzelne Schläge in Schlaglöchern sind Lenkerlager oder müde Stoßdämpfer. Ein Sonderfall ist ein Klopfen im Takt der Raddrehung nach einem Reifenwechsel: Das können lose Radschrauben sein, und diese Version prüft man zuerst.',
    ],
    causes: [
      { name: 'Koppelstangen', likelihood: 'Am häufigsten — häufiges Klopfen vorn auf kleinen Unebenheiten' },
      { name: 'Hinterachse: hintere Koppelstangen, Achslager', likelihood: 'Häufig — wenn es hinten klopft' },
      { name: 'Lenkerlager oder Stoßdämpfer', likelihood: 'Häufig — einzelne Schläge in Schlaglöchern' },
      { name: 'Spiel im Lenkgetriebe', likelihood: 'Seltener — das Klopfen geht direkt ins Lenkrad' },
      { name: 'Lose Radschrauben', likelihood: 'Selten — aber nach einem Reifenwechsel als Erstes zu prüfen' },
    ],
    canRide: [
      'Mit dem typischen Klopfen von Koppelstangen oder Gummilagern können Sie fahren: Diese Teile fallen nicht plötzlich aus, und ein bis zwei Wochen bis zur Diagnose ändern nichts, solange Sie große Löcher langsam nehmen. Die Fahrwerksdiagnose selbst geht schnell: Der Mechaniker wackelt die Gelenke auf der Hebebühne durch und findet das Spiel in wenigen Minuten. Monatelang hinauszögern sollte man es trotzdem nicht: Ein verschlissenes Gelenk gibt Schläge an die Nachbarteile weiter.',
      'Anders sieht ein rhythmisches Klopfen im Takt der Raddrehung in den ersten Tagen nach einem Reifenwechsel aus: Das ist ein Grund, bei nächster Gelegenheit anzuhalten und die Schrauben aller Räder mit dem Radkreuz zu prüfen. Ein Rad auf losen Schrauben schlägt die Löcher der Felge aus und kann sich im schlimmsten Fall während der Fahrt lösen. Auch ein Klopfen, das ins Lenkrad geht, ist nichts zum Aufschieben: Die Lenkung ist ein Sicherheitsbauteil und wird in den nächsten Tagen geprüft.',
    ],
    checks: [
      'Wurden die Räder kürzlich abgenommen oder getauscht, zuerst die Schrauben aller Räder mit dem Radkreuz prüfen, noch vor jeder anderen Version.',
      'Das Muster merken: häufiges Tacken auf kleinen Wellen oder einzelne Schläge in Löchern — das sind verschiedene Teile, und dieses Detail verkürzt dem Mechaniker die Suche.',
      'Feststellen, ob es vorn oder hinten klopft: langsam mit halb geöffneten Fenstern an einer Wand oder einem Zaun entlangfahren — der reflektierte Schall ist deutlich besser zu hören.',
      'Das Lenkrad auf unebener Straße leicht unter Spannung halten: Wird das in den Händen spürbare Klopfen leiser, sieht es nach Spiel im Lenkgetriebe aus, und das sollten Sie in der Werkstatt erwähnen.',
      'Das Einfache ausschließen: lose Gegenstände aus dem Kofferraum nehmen, Reserverad und Wagenheber auf festen Sitz prüfen, auf die geschlossene Motorhaube drücken — ein spielendes Haubenschloss tackt ähnlich wie das Fahrwerk.',
    ],
    appHelp:
      'Die App Pro-Stuk stellt dieselben Fragen wie diese Seite, nur Schritt für Schritt: welches Klopfen genau, wo es zu hören ist, wie es sich auf verschiedenen Unebenheiten verhält. Aus den Antworten und der Aufnahme entsteht ein Bericht mit wahrscheinlichen Ursachen und einer Dringlichkeitsampel — damit fällt die Entscheidung leichter, ob es morgen in die Werkstatt geht oder bei Gelegenheit.',
    faq: [
      {
        q: 'Warum ist das Klopfen nur auf Unebenheiten zu hören und auf glatter Straße nicht?',
        a: 'Spiel in einem Fahrwerksgelenk zeigt sich nur, wenn das Fahrwerk arbeitet: Auf der Unebenheit verschiebt sich das Teil in seiner Aufnahme und schlägt an. Auf glattem Asphalt sind die Federwege klein, und das verschlissene Teil bleibt still. Deshalb geht es beim Klopfen auf Unebenheiten fast immer um das Fahrwerk und nicht um den Motor.',
      },
      {
        q: 'Nach dem Reifenwechsel klopft es. Zufall?',
        a: 'Eher nicht. Ein rhythmisches Klopfen oder Scheppern im Takt der Raddrehung in den ersten Tagen nach dem Abnehmen der Räder ist der Klassiker loser Schrauben. Die Prüfung dauert fünf Minuten: die Schrauben aller Räder mit dem Radkreuz nachziehen. Nach jedem Reifenwechsel lohnt sich das Nachziehen noch einmal nach 50–100 Kilometern.',
      },
      {
        q: 'Die Koppelstangen klopfen. Ist das dringend?',
        a: 'Die Stangen selbst sind nicht gefährlich — es sind kleine Teile, die im Fahrwerk zuerst verschleißen, und das Auto bleibt beherrschbar. Aber ernstere Teile können ähnlich klopfen, deshalb ist eine Diagnose innerhalb von ein bis zwei Wochen nötig: Auf der Hebebühne ist die Quelle in Minuten gefunden.',
      },
    ],
  },

  'tikanie-dvigatelya': {
    h1: 'Tickender Motor',
    metaTitle: 'Motor tickt: normal oder Verschleiß, Ursachen | Pro-Stuk',
    description:
      'Woher das Ticken im Motor kommt: Ventilspiele, Hydrostößel, normales Injektorklackern oder der Abgaskrümmer. Wie Sie normalen Betrieb von Verschleiß unterscheiden.',
    intro: [
      'Ein gleichmäßiges, schnelles Ticken ist das gewöhnlichste Motorgeräusch, und längst nicht immer bedeutet es einen Defekt. Direkteinspritzer (TSI, GDI und ähnliche) und Diesel klackern immer mit Injektoren und Hochdruckpumpe — so sind sie gebaut. Das normale Klackern hat erkennbare Merkmale: Es ist kalt wie warm gleich, von außen lauter als im Innenraum, und es ändert sich über Jahre nicht.',
      'Aufmerksam werden sollten Sie bei einem Ticken, das mit der Zeit lauter wird und am warmen Motor besser zu hören ist als früher. So zeigen sich zu große Ventilspiele: Die Abstände im Ventiltrieb wachsen durch Verschleiß, und die Ventile arbeiten mit Schlag. Sonderfälle sind ein Ticken nur in den ersten Minuten nach dem Kaltstart (meist die Hydrostößel — Bauteile, die mit Öldruck das überschüssige Spiel ausgleichen) und ein Klackern mit Abgasgeruch, das von außen lauter ist: die Handschrift einer durchgebrannten Krümmerdichtung.',
    ],
    causes: [
      { name: 'Normales Injektorklackern (Direkteinspritzer, Diesel)', likelihood: 'Sehr häufig — wenn das Geräusch immer gleich ist' },
      { name: 'Zu große Ventilspiele', likelihood: 'Häufig — wenn das Ticken mit der Zeit lauter geworden ist' },
      { name: 'Hydrostößel im kalten Zustand', likelihood: 'Häufig — wenn es nur die ersten Minuten nach dem Start tickt' },
      { name: 'Krümmerdichtung oder ein Riss im Abgaskrümmer', likelihood: 'Wenn das Klackern von außen lauter ist und es nach Abgas riecht' },
      { name: 'Steuerkette oder ihr Spanner', likelihood: 'Seltener — ein Rascheln oder Schnarren vorn am Motor' },
    ],
    canRide: [
      'Mit einem Ticken können Sie fast immer fahren: Unter seinen typischen Ursachen ist keine, die ein Anhalten am Seitenstreifen verlangt. Normales Injektorklackern und morgendliches Hydrostößelticken brauchen überhaupt keine Reparatur — das ist der normale Betrieb des Motors.',
      'Ein wachsendes Ticken geht aber nicht von selbst weg. Ventile mit zu großem Spiel arbeiten mit Schlag und verschleißen schneller, deshalb sollten Sie das Einstellen oder die Prüfung der Hydrostößel für die nächsten zwei Wochen einplanen — fahren können Sie in dieser Zeit in Ruhe. Beim Abgaskrümmer ist die Logik ähnlich: ein bis zwei Wochen Spielraum, aber der Spalt wächst, und Abgasgeruch kann über die Heizung in den Innenraum gelangen — das ist bereits schädlich.',
    ],
    checks: [
      'Kalten und warmen Motor vergleichen: Ticken nur in den ersten Minuten nach dem Start ist das Bild der Hydrostößel; ein Geräusch, das am warmen Motor besser zu hören ist, spricht für die Ventilspiele.',
      'Die Entwicklung aus dem Gedächtnis beurteilen: Ein Ticken, das sich über Jahre nicht verändert hat, ist eher normal; war es vor einem halben Jahr deutlich leiser, ist es Verschleiß, und er wächst weiter.',
      'Von außen und aus dem Innenraum hören: Normales Injektorklackern ist außen deutlich lauter; Ventilticken hört man auch vom Fahrersitz gut.',
      'Ölstand am Messstab prüfen: Bei niedrigem Stand wird das Ticken von Hydrostößeln und Ventiltrieb stärker, und das Auffüllen ist manchmal sofort zu hören.',
      'An der offenen Motorhaube schnuppern: Abgasgeruch zusammen mit häufigem Klackern ist ein Zeichen für den Abgaskrümmer — damit innerhalb von ein bis zwei Wochen in die Werkstatt.',
    ],
    appHelp:
      'Die App Pro-Stuk klärt das Wichtigste — ob das Ticken mit der Zeit lauter geworden ist und wie es sich kalt und warm verhält — und die Aufnahme erlaubt den Vergleich mit typischen Beispielen. Im Bericht stehen wahrscheinliche Ursachen mit Prozentwerten und ein Ampelfazit: normal, Termin in dieser Woche oder Diagnose ohne Aufschub.',
    faq: [
      {
        q: 'Warum ticken Diesel und Direkteinspritzer immer?',
        a: 'Bei ihnen wird der Kraftstoff mit sehr hohem Druck eingespritzt, und jeder Injektor gibt beim Öffnen ein kurzes Klicken ab, dazu kommt das Klackern der Hochdruckpumpe. Das ist normaler Betrieb: Das Geräusch ist bei jedem Wetter gleich, außen lauter als innen, und braucht keine Reparatur.',
      },
      {
        q: 'Was ist eine Ventilspieleinstellung?',
        a: 'Zwischen den Teilen des Ventiltriebs bleibt ein kleines Wärmespiel; durch Verschleiß wächst es, und die Ventile beginnen zu klackern. Der Mechaniker bringt die Spiele mit Einstellplättchen oder Schrauben auf Sollmaß. Bei Motoren mit Hydrostößeln werden statt einer Einstellung die Stößel selbst und der Öldruck geprüft.',
      },
      {
        q: 'Kann das Ticken nach einem Ölwechsel verschwinden?',
        a: 'Ja, wenn altes Öl, die falsche Viskosität oder ein niedriger Stand schuld sind: Hydrostößel reagieren sehr empfindlich auf den Zustand des Öls. Verschlissene Ventilspiele behebt ein Ölwechsel jedoch nicht — bleibt das Ticken danach und wächst weiter, ist eine Einstellung nötig.',
      },
    ],
  },

  'svist-remnya': {
    h1: 'Quietschender Riemen',
    metaTitle: 'Riemen quietscht: Ursachen, weiterfahren, was tun | Pro-Stuk',
    description:
      'Der Keilrippenriemen quietscht: Verschleiß, zu wenig Spannung, Rollen oder die Klimakompressor-Kupplung. Wie Sie die Ursache nach den Umständen eingrenzen und wann die Werkstatt dran ist.',
    intro: [
      'Ein durchdringendes Pfeifen unter der Motorhaube kommt fast immer vom Keilrippenriemen — dem Riemen, der von der Kurbelwelle Lichtmaschine, Wasserpumpe und bei vielen Autos auch Klimakompressor und Servopumpe antreibt. Er quietscht in genau einem Fall: wenn er auf den Riemenscheiben rutscht, statt sicher zu greifen.',
      'Die Gründe fürs Rutschen teilen sich in zwei Gruppen. Die erste ist der Riemen selbst: Das Gummi ist gealtert und hart geworden, die Spannung ist gefallen, oder Öl beziehungsweise Kühlmittel sind auf die Lauffläche gelangt. Die zweite sind die angetriebenen Aggregate: eine klemmende Rolle, eine schwergängige Klimakompressor-Kupplung oder eine Wasserpumpe mit verschlissenem Lager belasten den Riemen stärker, als er übertragen kann. Wann genau das Pfeifen auftritt, engt den Kreis deutlich ein.',
    ],
    causes: [
      { name: 'Verschlissener oder zu locker gespannter Riemen', likelihood: 'Am häufigsten' },
      { name: 'Rutschen im kalten Zustand oder bei Nässe', likelihood: 'Häufig — wenn das Pfeifen nach dem Warmwerden verschwindet' },
      { name: 'Spannrolle oder Umlenkrolle', likelihood: 'Nicht selten — zum Pfeifen kommt ein Brummen oder Rascheln' },
      { name: 'Kupplung des Klimakompressors', likelihood: 'Wenn das Quietschen mit dem Einschalten der Klimaanlage zusammenfällt' },
      { name: 'Wasserpumpe oder Freilauf der Lichtmaschine', likelihood: 'Seltener' },
    ],
    canRide: [
      'Ist das Pfeifen kurz und lebt nur die ersten Sekunden nach dem Kaltstart, können Sie in Ruhe fahren: Das ist ein Grund, den Riemen bei Gelegenheit zeigen zu lassen, und keiner, den Tagesplan zu ändern.',
      'Mit dauerhaftem Pfeifen oder Pfeifen unter Last können Sie vorerst ebenfalls fahren, sollten aber innerhalb einer Woche einen Termin machen: Ein rutschender Riemen überhitzt und verschleißt lawinenartig, und reißt er, steht die Lichtmaschine und bei vielen Autos auch die Wasserpumpe. Zwei Signale bedeuten sofort rechts ranfahren und abstellen: die aufleuchtende Batterieleuchte und eine steigende Temperaturanzeige — beide heißen, dass der Riemen seine Aggregate nicht mehr antreibt.',
    ],
    checks: [
      'Merken, wann genau es pfeift: die ersten Sekunden nach dem Start, im Moment des Klimastarts, beim Lenken oder ständig — das ist der wichtigste Schlüssel zur Ursache.',
      'Bei laufendem Motor die Klimaanlage einschalten: Ein Quietschen genau im Moment des Zuschaltens deutet auf eine rutschende Kompressorkupplung.',
      'Bei abgestelltem Motor den Riemen ansehen: Querrisse, ausgefranste Kanten und glänzend polierte Flanken sind Verschleißzeichen.',
      'Prüfen, ob am Riemen und um die Scheiben Öl- oder Kühlmittelspuren sind: Ein öliger Riemen quietscht auch neu, und Kühlmittelspuren deuten auf die Wasserpumpe.',
      'Darauf achten, ob neben dem Pfeifen ein gleichmäßiges Brummen oder Rascheln mit der Drehzahl mitgeht — so klingt das Lager einer der Rollen.',
    ],
    appHelp:
      'Die App Pro-Stuk klärt Charakter und Umstände des Geräusches — Pfeifen oder Brummen, kalt oder unter Last, mit der Klimaanlage verbunden oder nicht — und hilft anhand der Aufnahme, das Quietschen des Riemens vom Rascheln einer Rolle zu trennen. Im Bericht stehen wahrscheinliche Ursachen mit Prozentwerten und eine Ampel: weiterfahren, diese Woche in die Werkstatt oder anhalten.',
    faq: [
      {
        q: 'Was passiert, wenn der Riemen unterwegs reißt?',
        a: 'Die Ladung fällt sofort aus: Die Lichtmaschine steht, und das Auto fährt auf dem Rest der Batterie — meist einige Zehnminuten. Bei Motoren, bei denen der Riemen auch die Wasserpumpe antreibt, steigt die Temperatur schnell, und Weiterfahren ist ausgeschlossen. Deshalb wechselt man einen quietschenden Riemen besser nach Termin als nach dem Riss.',
      },
      {
        q: 'Warum pfeift es beim Einschalten der Klimaanlage?',
        a: 'Der Klimakompressor ist der schwerste Verbraucher am Riemen. Beim Zuschalten legt seine Kupplung die Last schlagartig auf, und ein verschlissener oder locker gespannter Riemen rutscht durch. Pfeift genau die Sekunde des Zuschaltens, lohnt auch ein Blick auf die Kupplung selbst: Ihr Verschleiß klingt genauso.',
      },
      {
        q: 'Kann man den Riemen mit einem Spray behandeln, damit er nicht pfeift?',
        a: 'Besser nicht. Sprays und Hausmittel wie WD-40 bringen ein bis zwei Tage Ruhe, aber getränktes Gummi rutscht und altert schneller, während die Ursache — Verschleiß oder zu wenig Spannung — bleibt. Zuverlässiger ist der Wechsel von Riemen und Rolle: eine der günstigeren Arbeiten in der Werkstatt.',
      },
    ],
  },

  'gremit-pod-mashinoy': {
    h1: 'Klappern unter dem Auto',
    metaTitle: 'Klappern unter dem Auto: was scheppert und ist es gefährlich | Pro-Stuk',
    description:
      'Es klappert und scheppert unter dem Auto: Auspuffhalter, Hitzeschild, Unterfahrschutz oder Katalysator. Wie Sie die Quelle finden und wann es ernst wird.',
    intro: [
      'Klappern und Scheppern von unten klingt beunruhigend, doch die Quelle ist meist weder Motor noch Fahrwerk, sondern angeschraubtes Blech: Auspuffgummis, lockere Schrauben des Unterfahrschutzes oder ein Hitzeschild — das dünne Blech, das den Unterboden vor der Hitze des Auspuffs schützt. All das klappert laut und überträgt sich auf die Karosserie und wirkt deshalb schlimmer, als es ist: Auf Fahrverhalten und Motor haben solche Geräusche keinen Einfluss.',
      'Es gibt auch Täuschungen: Was „unter dem Auto“ scheppert, ist oft der Kofferraum — Wagenheber, Radkreuz, ein schlecht befestigtes Reserverad — oder Innenraumverkleidung, deren Geräusch sich schwer verorten lässt. Wirklich beunruhigend ist nur ein Szenario: ein helles Scheppern näher am Motor zusammen mit Leistungsverlust oder verändertem Abgasgeruch. So klingt ein zerfallener Katalysator — der keramische Filter für Abgase, dessen Bruchstücke im eigenen Gehäuse klappern —, und mit dieser Version sollte man nicht warten.',
    ],
    causes: [
      { name: 'Auspuffhalter oder Unterfahrschutz', likelihood: 'Am häufigsten — metallisches Scheppern auf Unebenheiten' },
      { name: 'Hitzeschild der Abgasanlage', likelihood: 'Häufig — helles Scheppern bei bestimmten Drehzahlen' },
      { name: 'Wagenheber, Reserverad oder Ladung im Kofferraum', likelihood: 'Häufig — dumpfes Poltern hinten, „da rollt etwas“' },
      { name: 'Innenraumverkleidung: Blenden und Grillen', likelihood: 'Häufig — das Geräusch ist näher, als es scheint' },
      { name: 'Zerfallener Katalysator', likelihood: 'Seltener — wenn mit dem Scheppern die Leistung gefallen ist' },
    ],
    canRide: [
      'In den meisten Fällen ja, und ohne besondere Einschränkungen: ein klapperndes Hitzeschild, lockere Auspuffhalter oder Schrauben des Unterfahrschutzes sind eine Frage des Komforts, nicht der Sicherheit. Die Reparatur dauert meist Minuten: nachziehen oder mit einer Schelle sichern. Vergewissern sollten Sie sich nur, dass der Auspuff nicht durchhängt: Ein Rohr, das gleich den Asphalt berührt, darf man nicht ignorieren, seine Aufhängung wird sofort wiederhergestellt.',
      'Kommt das Scheppern mit Leistungsverlust, verändertem Abgasgeruch oder der Motorkontrollleuchte, fahren Sie in den nächsten Tagen zur Diagnose: Keramiksplitter eines zerfallenen Katalysators können in den Motor gesogen werden, und das ist eine teure Reparatur. Bis zur Prüfung den Motor nicht hoch drehen.',
    ],
    checks: [
      'Alles aus dem Kofferraum nehmen, Reserverad und Wagenheber auf festen Sitz prüfen, die Hutablage andrücken — und dieselbe Strecke noch einmal fahren. Geräusch weg, Frage erledigt.',
      'Am stehenden Auto die Drehzahl langsam anheben: Das Scheppern eines Hitzeschilds tritt meist bei bestimmten Drehzahlen auf und ist im Stand zu hören, ganz ohne Unebenheiten.',
      'Einen Mitfahrer bitten, verdächtige Verkleidungen während der Fahrt mit der Hand anzudrücken: Verschwindet das Geräusch, sind es Grillen im Innenraum und nicht der Unterboden.',
      'Auf Leistung und Abgasgeruch achten: Beschleunigt das Auto schlechter oder hat sich der Geruch verändert, ist das die Katalysator-Version — damit in den nächsten Tagen zum Mechaniker.',
      'Unter das Auto schauen, ohne darunter zu kriechen: ein durchhängender Auspuff, eine lose Kante des Unterfahrschutzes oder ein verbogenes Schild sind oft schon vom Rad aus zu sehen.',
    ],
    appHelp:
      'Die App Pro-Stuk hilft, das Scheppern seiner Quelle zuzuordnen: woher das Geräusch kommt, ob es an der Drehzahl oder an Unebenheiten hängt, was mit der Leistung passiert. Aus Antworten und Aufnahme zeigt sie wahrscheinliche Ursachen mit Prozentwerten und eine Dringlichkeitsampel — praktisch, um harmloses Blech schon vor der Werkstatt vom Katalysator zu unterscheiden.',
    faq: [
      {
        q: 'Ist es gefährlich zu fahren, wenn unter dem Auto etwas scheppert?',
        a: 'Meistens nicht: lockere Auspuffhalter, Unterfahrschutz und Hitzeschild beeinflussen den Betrieb des Autos nicht. Ausnahmen sind ein durchhängender Auspuff, der gleich den Asphalt berührt, und Scheppern zusammen mit Leistungsverlust: Im zweiten Fall ist ein zerfallener Katalysator möglich, und mit der Prüfung sollte man nicht warten.',
      },
      {
        q: 'Was ist ein Hitzeschild und kann man es einfach abnehmen?',
        a: 'Es ist ein dünnes Blech zwischen den heißen Teilen der Abgasanlage und dem Unterboden: Es schützt Karosserie, Leitungen und alles über dem Rohr vor der Hitze. Abnehmen sollte man es nicht — richtiger ist nachziehen oder mit einer Schelle sichern: In der Werkstatt eine Arbeit von wenigen Minuten.',
      },
      {
        q: 'Woran erkenne ich, dass es der Katalysator ist?',
        a: 'An einem hellen Scheppern oder Rascheln von unten näher am Motor, das beim Gasstoß stärker wird, dazu Leistungsverlust oder veränderter Abgasgeruch. In der Werkstatt bestätigt man die Version, indem man am kalten Auto leicht gegen das Katalysatorgehäuse klopft: zerfallene Keramik raschelt darin wie Kieselsteine.',
      },
    ],
  },

  'skrezhet-pri-tormozhenii': {
    h1: 'Schleifen beim Bremsen',
    metaTitle: 'Schleifen beim Bremsen: Beläge am Ende, was tun | Pro-Stuk',
    description:
      'Schleifen beim Bremsen heißt meist bis aufs Metall abgefahrene Beläge — damit fährt man nicht. Seltener ist ein Steinchen hinter dem Schutzblech schuld. Wie Sie das unterscheiden.',
    intro: [
      'Schleifen beim Bremsen sollten Sie ernster nehmen als jedes Quietschen. Meistens klingen so bis aufs Metall abgefahrene Beläge: Der Belag, der an der Scheibe reibt, ist verbraucht, und die stählerne Trägerplatte kratzt über die Scheibe. Der Bremsweg wird länger, die Scheibe leidet bei jeder Bremsung, und der Mechanismus kann festgehen.',
      'Es gibt auch weniger dramatische Varianten. Ein verbogenes Schutzblech der Scheibe oder ein Steinchen zwischen Blech und Scheibe erzeugen ein sehr ähnliches Schleifen, schaden den Bremsen aber nicht. Und ein kurzes Kratzen bei den ersten Bremsungen nach einer Nacht im Freien oder nach Regen ist nur Rost, den die Beläge in ein paar Minuten abtragen. Das Problem ist, dass sich diese Szenarien nach Gehör leicht verwechseln lassen — deshalb verlangt dauerhaftes Schleifen eine Sichtprüfung und keine Vermutungen.',
    ],
    causes: [
      { name: 'Beläge bis aufs Metall abgefahren', likelihood: 'Am häufigsten — wenn es bei jeder Bremsung schleift' },
      { name: 'Ein Steinchen oder ein verbogenes Schutzblech berührt die Scheibe', likelihood: 'Häufig; klingt ähnlich, schadet den Bremsen aber nicht' },
      { name: 'Klemmender Bremssattel', likelihood: 'Wenn ein Rad heiß wird und das Auto zur Seite zieht' },
      { name: 'Rostfilm nach dem Stehen oder Regen', likelihood: 'Wenn das Geräusch nach den ersten Bremsungen verschwindet' },
    ],
    canRide: [
      'Bei Metall auf Metall müssen gewöhnliche Fahrten aufhören: Zulässig ist nur noch eine vorsichtige Fahrt zur Werkstatt mit großem Abstand und frühen, sanften Bremsungen. Den Wechsel aufzuschieben lohnt auch finanziell nicht: Jeder Kilometer mit Schleifen addiert den Preis der Bremsscheiben zur Rechnung, die die stählerne Trägerplatte buchstäblich abdreht.',
      'Trat das Schleifen nach dem Stehen auf und verschwand bei den ersten Bremsungen, können Sie ohne Einschränkung fahren — das ist Rost. Klingt es eher wie Schaben, ist auch ohne Bremsen zu hören und wird kein Rad heiß, sind Schutzblech oder Steinchen wahrscheinlich: Sie kommen in Ruhe an, sollten das Auto aber in ein bis zwei Tagen zeigen — zuverlässig trennt nur eine Sichtprüfung den harmlosen Fall von abgefahrenen Belägen.',
    ],
    checks: [
      'Das Muster verfolgen: ein Geräusch nur beim Treten der Bremse spricht für die Beläge; ständiges Schaben während der Fahrt eher für Schutzblech, Steinchen oder einen klemmenden Sattel.',
      'Durch die Speichen der Felge schauen: Bei vielen Autos ist der äußere Belag ohne Demontage sichtbar. Belag dünner als 3–4 mm oder blankes Metall statt Belag heißt sofortiger Wechsel.',
      'Nach einer kurzen Fahrt die Hand an die Räder halten, ohne die Bremsscheibe zu berühren: Ist ein Rad deutlich heißer als die anderen, sieht das nach klemmendem Sattel aus — dem Teil, das die Beläge an die Scheibe drückt.',
      'Auf das Verhalten des Autos achten: Ziehen zur Seite beim Bremsen oder Brandgeruch an einem Rad sind Zeichen, mit denen man nicht fahren darf — nur vorsichtig bis zur Werkstatt.',
      'Die Bremsscheibe durch das Rad ansehen: tiefe Riefen und ein bläulicher Schimmer im Metall sagen, dass das Schleifen schon lange läuft und die Scheiben gelitten haben.',
    ],
    appHelp:
      'Die App Pro-Stuk führt durch dieselben Fragen — ist das Schleifen dauerhaft, wird ein Rad heiß, verschwindet das Geräusch nach den ersten Bremsungen — und hilft anhand der Aufnahme, Schleifen vom Quietschen des Verschleißanzeigers zu unterscheiden. Im Bericht stehen wahrscheinliche Ursachen und eine Ampel: weiterfahren, diese Woche zeigen oder nur noch bis zur Werkstatt fahren.',
    faq: [
      {
        q: 'Was unterscheidet Schleifen vom Bremsenquietschen?',
        a: 'Quietschen ist ein hoher Ton, bei dem die Bremsen noch voll arbeiten: meist der Verschleißanzeiger, der rechtzeitig warnt. Schleifen ist ein grober, tiefer Ton von Metall auf Metall: Der Belag ist verbraucht, und die stählerne Trägerplatte reibt an der Scheibe. Quietschen heißt Termin in dieser Woche, Schleifen heißt Ende der gewöhnlichen Fahrten.',
      },
      {
        q: 'Reicht es, nur die Beläge zu wechseln, wenn es schon geschliffen hat?',
        a: 'Das hängt vom Zustand der Scheiben ab: Selbst kurzes Fahren „auf Metall“ hinterlässt Riefen. Flache lassen sich manchmal abdrehen, tiefe bedeuten neue Scheiben. Neue Beläge auf einer riefigen Scheibe bremsen schlechter und verschleißen schnell, deshalb entscheidet man nach der Sichtprüfung.',
      },
      {
        q: 'Das Schleifen kommt und geht — ist das auch gefährlich?',
        a: 'Unregelmäßiges Schleifen kommt oft von einem Steinchen zwischen Schutzblech und Scheibe, das auch von selbst herausfallen kann. Darauf verlassen sollte man sich nicht: Dasselbe wandernde Geräusch gibt es in der Frühphase, wenn Beläge bis aufs Metall durchgehen. Eine Sichtprüfung in den nächsten ein bis zwei Tagen klärt die Sache.',
      },
    ],
  },

  'stuk-pri-razgone': {
    h1: 'Klopfen beim Beschleunigen',
    metaTitle: 'Klopfen bei Gas geben und Gas wegnehmen: Ursachen | Pro-Stuk',
    description:
      'Warum es beim Gasgeben oder Gaswegnehmen klopft: Motorlager, Gleichlaufgelenk, Spiel im Antriebsstrang oder das Getriebe. Wie Sie harmloses Spiel von einem Klopfen im Motor unterscheiden.',
    intro: [
      'Ein Klopfen, das genau im Moment des Gasgebens oder Gaswegnehmens auftritt, entsteht meist nicht im Motor selbst, sondern in der Kette, die die Kraft zu den Rädern bringt. Mit den Jahren sammelt sich dort Spiel — freies Spiel: Die Gummilager des Motors sacken ab und lassen ihn beim Lastwechsel rucken, das innere Gleichlaufgelenk der Antriebswelle verschleißt, Kreuzgelenke der Kardanwelle und Hilfsrahmenbefestigungen werden locker. Jedes Mal, wenn die Kraft die Richtung wechselt, wird das Spiel mit einem Schlag aufgenommen — daher ein einzelnes Klopfen oder Scheppern.',
      'Eine eigene Geschichte ist das Automatikgetriebe: ein Ruck mit Scheppern beim Wechsel zwischen D und R oder beim Schalten deutet meist auf altes Öl oder Verschleiß. Und ein ganz anderer Fall ist ein dumpfes Klopfen aus der Tiefe des Motors, das mit der Drehzahl schneller wird und unter Last lauter: So klopfen die Lagerschalen der Kurbelwelle. Das ist selten, aber die ernsteste Variante, und sie darf nicht übersehen werden.',
    ],
    causes: [
      { name: 'Motorlager oder inneres Gleichlaufgelenk', likelihood: 'Am häufigsten — einzelnes Klopfen beim Gasgeben und Gaswegnehmen' },
      { name: 'Spiel im Antriebsstrang: Kreuzgelenke, Hilfsrahmen', likelihood: 'Häufig bei Heck- und Allradantrieb — Scheppern unter dem Boden beim Anfahren' },
      { name: 'Automatikgetriebe: altes Öl oder Verschleiß', likelihood: 'Wenn Ruck und Scheppern mit den Schaltvorgängen zusammenfallen' },
      { name: 'Lagerklopfen aus der Tiefe des Motors', likelihood: 'Selten — wird mit der Drehzahl schneller, unter Last lauter' },
    ],
    canRide: [
      'Mit den meisten Ursachen aus der Tabelle können Sie fahren: Spiel in Lagern, Gelenken oder im Antriebsstrang legt das Auto nicht plötzlich lahm, solange das Klopfen einzeln und leise bleibt. Die Diagnose monatelang aufzuschieben ist trotzdem keine gute Idee: Ein ausgeschlagenes Kreuzgelenk oder ein verschlissenes Gleichlaufgelenk zerfällt irgendwann, und zwar während der Fahrt. Vernünftig ist ein Werkstatttermin in ein bis zwei Wochen; bis dahin sanfter anfahren und das Gaspedal ruhiger bedienen.',
      'Die Ausnahme ist ein Klopfen aus der Tiefe des Motors, das beim Gasstoß schneller und unter Last lauter wird. Damit müssen gewöhnliche Fahrten aufhören: Verschlissene Lagerschalen können in einem Motorschaden enden. Zuerst den Ölstand prüfen; danach Abschleppdienst — oder, wenn die Werkstatt ganz nah ist, langsam und ohne Gas.',
    ],
    checks: [
      'Den Moment genau bestimmen: Ein Klopfen exakt beim Gasgeben und Gaswegnehmen statt auf Unebenheiten betrifft die Kraftübertragung, nicht das Fahrwerk. Dieses Detail verkürzt dem Mechaniker die Suche sofort.',
      'Motorölstand am Messstab prüfen. Bei jedem Geräusch, das nach Motor klingt, ist das der erste Schritt: Bei niedrigem Stand leiden die Lagerschalen zuerst.',
      'Scheppert es beim Schalten, Stand und Zustand des Automatikgetriebeöls prüfen: dunkles Öl mit Brandgeruch ist eine häufige Ursache für Rucke, und manchmal löst ein Ölwechsel die Sache.',
      'Heraushören, woher der Ton kommt — unter der Motorhaube, aus der Mitte des Unterbodens oder von einem Rad — und ob er sich beim Gangwechsel wiederholt. Diese Beobachtungen für die Werkstatt notieren.',
      'Den sanften Test machen: Bleibt das Klopfen bei weichem Gasgeben und -wegnehmen aus und kommt bei ruppigem zurück, ist es klassisches Spiel, und bis zur Reparatur reicht ruhiges Fahren.',
    ],
    appHelp:
      'Die App Pro-Stuk stellt dieselben Rückfragen — wann genau es klopft, ob sich das Geräusch mit Drehzahl und Gängen ändert — und hilft anhand der Aufnahme, das Scheppern von Spiel von einem tiefen Motorklopfen zu trennen. Im Bericht stehen wahrscheinliche Ursachen mit Prozentwerten und ein klares Fazit: weiterfahren, Werkstatt planen oder anhalten.',
    faq: [
      {
        q: 'Warum klopft es genau beim Gasgeben und Gaswegnehmen?',
        a: 'Beim Lastwechsel dreht die Kraft ihre Richtung um, und alle Spiele in Motorlagern, Gelenken und Antriebsstrang werden mit einem Schlag aufgenommen. Solange das Auto gleichmäßig rollt, liegen die Teile aneinander und das Spiel verrät sich nicht — deshalb hört man das Klopfen nur bei der Arbeit am Gaspedal.',
      },
      {
        q: 'Woran erkenne ich, dass der Motor selbst klopft und es ernst ist?',
        a: 'Das Alarmzeichen ist ein dumpfes Klopfen aus der Tiefe des Motors, das mit der Drehzahl schneller und unter Last lauter wird, etwa am Berg. So klopfen die Lagerschalen der Kurbelwelle. Dann sollten Sie die Fahrten einstellen, den Ölstand prüfen und das Auto auf dem Abschleppwagen in die Werkstatt bringen.',
      },
      {
        q: 'Kann ein Automatikgetriebe für Klopfen beim Beschleunigen sorgen?',
        a: 'Ja. Ein Ruck oder Scheppern im Moment eines Schaltvorgangs oder beim Wechsel zwischen D und R ist ein typisches Zeichen für altes Öl oder Verschleiß. Beginnen Sie mit Stand und Zustand des Getriebeöls; bis zur Reparatur den Wählhebel nur im Stand mit getretener Bremse bewegen.',
      },
    ],
  },

  'zvon-pri-razgone': {
    h1: 'Klingeln beim Beschleunigen',
    metaTitle: 'Klingeln beim Beschleunigen: Klopfen oder nicht, was tun | Pro-Stuk',
    description:
      'Metallisches Klingeln beim Beschleunigen ist meist klopfende Verbrennung wegen des Kraftstoffs. Wie Sie das mit einem Tankstellenwechsel prüfen und wann nicht der Motor, sondern Hitzeschild oder Katalysator schuld ist.',
    intro: [
      'Metallisches Klingeln beim Beschleunigen — das, was Fahrer „Klingeln“ oder „Nageln“ nennen — ist meist klopfende Verbrennung. Ein Teil des Kraftstoffs verbrennt nicht gleichmäßig, sondern explodiert, und die Druckwelle klingt hell an den Wänden des Motors. Am besten hört man sie unter Last: am Berg, beim Überholen, beim Beschleunigen aus niedrigen Drehzahlen im hohen Gang. Die häufigste Ursache ist banal — Benzin mit niedrigerer Oktanzahl als vom Hersteller empfohlen oder schlicht eine schlechte Tankfüllung.',
      'Klingeln muss nicht aus dem Motor kommen. Ein loses Hitzeschild — das dünne Blech über dem Auspuff — scheppert bei bestimmten Drehzahlen, und zerfallene Katalysatorkeramik raschelt und klingelt unter dem Boden. Der Unterschied liegt in der Bindung: Klopfende Verbrennung hängt an der Last und verschwindet bei sanfter Fahrt, ein Schild klingelt bei „seinen“ Drehzahlen auch am stehenden Auto beim Gasstoß.',
    ],
    causes: [
      { name: 'Klopfende Verbrennung: Kraftstoff mit zu niedriger Oktanzahl', likelihood: 'Am häufigsten — Klingeln unter Last, besonders am Berg' },
      { name: 'Ablagerungen im Brennraum oder der Klopfsensor', likelihood: 'Wenn ein Tankstellenwechsel nicht geholfen hat' },
      { name: 'Hitzeschild der Abgasanlage', likelihood: 'Häufig — Scheppern bei bestimmten Drehzahlen, unabhängig von der Last' },
      { name: 'Zerfallener Katalysator', likelihood: 'Seltener — Klingeln und Rascheln von unten, die Leistung lässt nach' },
    ],
    canRide: [
      'Mit seltenen Episoden von Klingeln kommen Sie an, sollten den Motor dabei aber nicht belasten: sanft beschleunigen, am Berg einen Gang tiefer, nicht aus niedrigen Drehzahlen im hohen Gang ziehen. Der erste Schritt ist eine Tankfüllung mit mindestens der empfohlenen Oktanzahl, am besten bei einer anderen Kette: Oft verschwindet das Klingeln mit einer Tankfüllung.',
      'Dauerhaft klopfende Verbrennung bedeutet Schläge auf die Kolben bei jeder Beschleunigung und zerstört den Motor allmählich: Kolben, Ringe und Zylinderkopfdichtung leiden. Ist das Klingeln nach dem Kraftstoffwechsel geblieben, sollten Sie mit der Diagnose nicht warten. Ein scheppendes Hitzeschild ist dagegen ein rein akustisches Ärgernis: Damit fahren Sie ohne Einschränkung und lassen das Blech beim nächsten Werkstattbesuch sichern.',
    ],
    checks: [
      'Einen vollen Tank mit mindestens der empfohlenen Oktanzahl an einer anderen Tankstelle fahren. Verschwindet das Klingeln nach ein bis zwei Tankfüllungen, lag es am Kraftstoff.',
      'Den Bezug zur Last prüfen: Klingeln am Berg, beim Überholen und bei kräftigem Gas, das bei sanfter Beschleunigung nachlässt, ist die Handschrift klopfender Verbrennung.',
      'Am stehenden Auto im Leerlauf einen Gasstoß geben: Tritt Klingeln oder Scheppern auch ohne Last bei bestimmten Drehzahlen auf, ist das Hitzeschild wahrscheinlicher.',
      'In der Betriebsanleitung oder an der Tankklappe nachsehen, welcher Kraftstoff empfohlen ist: Für viele Motoren ist niedrig oktaniges Benzin nicht mehr geeignet, auch wenn es formal zulässig ist.',
      'Auf Leistung und Geräusche unter dem Boden achten: Rascheln und Klingeln von unten zusammen mit schwächerer Beschleunigung ist ein Grund, den Katalysator ohne Aufschub prüfen zu lassen.',
    ],
    appHelp:
      'Die App Pro-Stuk hilft mit denselben Fragen weiter — wann es klingelt, hängt das Geräusch an der Last oder an der Drehzahl — und die Aufnahme erlaubt, das helle Klingeln der Verbrennung vom Scheppern eines Blechs zu unterscheiden. Im Bericht stehen wahrscheinliche Ursachen mit Prozentwerten und ein Fazit: weiterfahren, Werkstatt planen oder besser anhalten.',
    faq: [
      {
        q: 'Was heißt „der Motor nagelt“?',
        a: 'Es ist die alte Bezeichnung für das Klingeln bei klopfender Verbrennung; früher schrieb man es den Kolbenbolzen zu. Tatsächlich klingeln nicht sie — das Geräusch entsteht durch die Druckwelle der explosionsartigen Verbrennung, die von den Zylinderwänden zurückgeworfen wird. Der Name blieb, die Ursache ist immer dieselbe: klopfende Verbrennung, keine verschlissenen Kolbenteile.',
      },
      {
        q: 'Kann man mit klopfender Verbrennung fahren?',
        a: 'Kurz und schonend: sanft beschleunigen, am Berg einen Gang tiefer, ohne volle Beladung und Anhänger. Jede Episode sind Schläge auf die Kolben, und dauerhaftes Klopfen endet in einer teuren Motorreparatur. Hat ein Kraftstoffwechsel das Klingeln nach ein bis zwei Tankfüllungen nicht beseitigt, ist eine Diagnose nötig.',
      },
      {
        q: 'Hilft Benzin mit höherer Oktanzahl?',
        a: 'Die Hauptregel: nie unter der Herstellerempfehlung tanken. Die Oktanzahl zeigt die Widerstandsfähigkeit gegen Selbstentzündung, deshalb beseitigt der Wechsel auf eine höhere Sorte bei einem klopfanfälligen Motor das Klingeln oft. Hilft auch das nicht, sucht man die Ursache — Ablagerungen oder Klopfsensor — in der Werkstatt.',
      },
    ],
  },

  'gul-pri-povorote': {
    h1: 'Brummen in der Kurve',
    metaTitle: 'Brummen in der Kurve: Radlager oder Servopumpe | Pro-Stuk',
    description:
      'Woher das Brummen in der Kurve kommt: verschlissenes Radlager, heulende Servopumpe oder Reifengeräusch. Wie Sie die Seite bestimmen und ob es gefährlich ist.',
    intro: [
      'Beim Brummen in der Kurve sind zwei Szenarien sofort zu trennen: ein Brummen bei Tempo, das in der einen Kurve lauter und in der anderen leiser wird, und ein Heulen, das beim Lenken im Stand oder beim Einparken auftritt. Sie klingen ähnlich, doch die Quellen sind völlig verschieden: im ersten Fall das Rad, im zweiten die Lenkhilfe.',
      'Ein Brummen bei Tempo, das von der Kurvenrichtung abhängt, ist die klassische Handschrift des Radlagers — des Lagers, auf dem sich das Rad dreht. In der Kurve wandert das Gewicht auf die äußeren Räder, und ein belastetes verschlissenes Lager brummt lauter. Ein Heulen beim Lenken bei niedrigem Tempo kommt meist von der Servopumpe, in der Regel wegen zu geringen Flüssigkeitsstands. Und bei Autos mit elektrischer Lenkhilfe ist ein leises Surren beim Lenken normal und kein Defekt.',
    ],
    causes: [
      { name: 'Radlager', likelihood: 'Am häufigsten — wenn das Brummen bei Tempo auftritt und sich in Kurven ändert' },
      { name: 'Servopumpe oder zu wenig Hydraulikflüssigkeit', likelihood: 'Häufig — wenn es beim Lenken im Stand heult' },
      { name: 'Reifengeräusch', likelihood: 'Häufig; das Brummen hängt am Belag, nicht an der Kurve' },
      { name: 'Normales Surren der elektrischen Lenkhilfe', likelihood: 'Normal bei Autos ohne Behälter für Servoflüssigkeit' },
      { name: 'Verschlissenes Gleichlaufgelenk', likelihood: 'Seltener; bringt meist Klicken bei vollem Lenkeinschlag mit' },
    ],
    canRide: [
      'Mit einem brummenden Radlager können Sie fahren, aber das ist ein Kredit mit kurzer Laufzeit: Schieben Sie die Prüfung nicht über eine Woche hinaus und verlegen Sie lange schnelle Fahrten auf die Zeit danach. Ein zerfallendes Lager gibt dem Rad Spiel und kann im vernachlässigten Fall festgehen. Wurde das Brummen plötzlich lauter oder kam Vibration dazu — sofort in die Werkstatt.',
      'Bei heulender Servopumpe prüfen Sie zuerst den Flüssigkeitsstand im Behälter: Nachfüllen erledigt die Frage oft. Fahren können Sie, sollten das Lenkrad aber nicht länger als ein paar Sekunden am Anschlag halten — in dieser Stellung arbeitet die Pumpe mit maximalem Druck. Bleibt das Heulen nach dem Nachfüllen oder sinkt der Stand erneut, gibt es ein Leck — dann innerhalb einer Woche in die Werkstatt.',
    ],
    checks: [
      'Merken, in welche Kurvenrichtung das Brummen lauter ist. Lauter beim Linksabbiegen heißt: die rechte Seite ist belastet, das rechte Lager ist wahrscheinlicher — und umgekehrt. Dieses Detail verkürzt die Suche in der Werkstatt deutlich.',
      'Das Geräusch im Stand prüfen: Tritt das Heulen beim Lenken auf dem Parkplatz auf, haben die Räder nichts damit zu tun — die Quelle ist die Lenkhilfe.',
      'Unter die Motorhaube schauen: Gibt es einen Behälter für Servoflüssigkeit? Wenn ja, Stand prüfen und bei Bedarf bis zur Markierung auffüllen; wenn nein, ist die Lenkhilfe elektrisch, und ein leises gleichmäßiges Surren ist für sie normal.',
      'Die Abhängigkeit von der Fahrbahn beurteilen: Ein Brummen, das auf frischem Asphalt leiser und auf grobem lauter ist, kommt meist von den Reifen, nicht vom Lager.',
      'Das Profil ansehen: Sägezahnverschleiß (Stufen an den Kanten) oder fleckiger Verschleiß verstärkt das Reifenbrummen und deutet zugleich auf falsche Spur oder müde Stoßdämpfer hin.',
    ],
    appHelp:
      'Die App Pro-Stuk stellt dieselben Fragen wie der Meister bei der Annahme: wo das Brummen zu hören ist, ob es sich in Kurven ändert, ob es mit dem Lenken im Stand zusammenhängt. Die Aufnahme hilft beim Vergleich mit typischen Beispielen, und im Bericht stehen wahrscheinliche Ursachen und eine klare Empfehlung: ruhig weiterfahren, Termin in dieser Woche oder ohne Aufschub prüfen lassen.',
    faq: [
      {
        q: 'Warum wird das Brummen nur in eine Kurvenrichtung lauter?',
        a: 'In der Kurve wandert das Gewicht des Autos auf die äußeren Räder. Ist etwa das rechte Radlager verschlissen, brummt es unter Last lauter — also beim Linksabbiegen. Diese Eigenschaft verrät schon vor der Werkstatt, welche Seite zuerst zu prüfen ist.',
      },
      {
        q: 'Darf man beliebige Flüssigkeit in die Servolenkung füllen?',
        a: 'Nein. Der Flüssigkeitstyp steht in der Betriebsanleitung und oft direkt auf dem Behälterdeckel. Einmaliges Nachfüllen mit der passenden Flüssigkeit ist unbedenklich, aber wenn der Stand regelmäßig fällt, gibt es irgendwo ein Leck — es muss in der Werkstatt gesucht und behoben werden, Nachfüllen löst das nicht.',
      },
      {
        q: 'Unter der Haube ist kein Servobehälter, beim Lenken brummt es trotzdem — was ist das?',
        a: 'Höchstwahrscheinlich ist die Lenkhilfe elektrisch: Ihr Motor surrt beim Lenken leise, und das ist normaler Betrieb. Aufmerksam werden sollten Sie bei anderen Zeichen: Die Lenkung ist schwer geworden oder wird ruckweise schwer, es knirscht, oder die Lenkungs-Warnleuchte ist an. Damit in den nächsten Tagen in die Werkstatt.',
      },
    ],
  },

  'shchelchki-pri-povorote-rulya': {
    h1: 'Klicken beim Lenken',
    metaTitle: 'Klicken beim Lenken: Gleichlaufgelenk oder Domlager | Pro-Stuk',
    description:
      'Warum es beim Lenken klickt: äußeres Gleichlaufgelenk, Domlager der Federbeine oder das Lenkzwischengelenk. Wie Sie sie am Geräusch unterscheiden und was Sie ohne Demontage prüfen.',
    intro: [
      'Klicken beim Lenken klärt sich mit einer einfachen Frage: Fährt das Auto in diesem Moment oder steht es? Knacken und Klicken bei Fahrt mit eingeschlagenem Lenkrad ist die Handschrift des äußeren Gleichlaufgelenks, des Gelenks, über das die Drehung an das lenkende Rad geht. Je größer der Einschlag und je ruppiger das Anfahren, desto deutlicher das Knacken. Alles beginnt meist mit einer gerissenen Manschette — der Gummihülle, die das Gelenk vor Schmutz schützt.',
      'Sind die Klicks dagegen beim Lenken am stehenden Auto zu hören, ist das Gleichlaufgelenk meist unschuldig. Ein Knirschen von oben, aus dem Radhaus, kommt vom Domlager des Federbeins — dem Lager, auf dem sich das Federbein mit dem Rad mitdreht. Klicks im Lenkrad selbst, unten bei den Füßen, sind das Lenkzwischengelenk zwischen Lenkrad und Lenkgetriebe. Keine dieser Varianten heißt, das Auto stehen zu lassen, aber monatelang aufschieben sollte man sie ebenso wenig.',
    ],
    causes: [
      { name: 'Äußeres Gleichlaufgelenk', likelihood: 'Am häufigsten — wenn es bei Fahrt mit Einschlag knackt' },
      { name: 'Domlager des Federbeins', likelihood: 'Häufig — wenn es im Stand knirscht, von oben aus dem Radhaus' },
      { name: 'Lenkzwischengelenk (Kreuzgelenk der Lenksäule)', likelihood: 'Wenn die Klicks im Lenkrad selbst zu hören und zu spüren sind' },
      { name: 'Spurstangenköpfe oder Lenkgetriebe', likelihood: 'Seltener; meist Klopfen statt Klicken' },
      { name: 'Inneres Gleichlaufgelenk, Koppelstangen', likelihood: 'Seltener; werden bei derselben Diagnose mitgeprüft' },
    ],
    canRide: [
      'Mit einem knackenden Gleichlaufgelenk können Sie fahren, den Wechsel aber nicht länger als ein bis zwei Wochen hinausschieben: Im schlimmsten Fall geht ein verschlissenes Gelenk fest, und das ist kein Geräusch mehr, sondern ein liegengebliebenes Auto. Bis zur Reparatur hilft ein schonender Umgang — nicht mit vollem Einschlag ruppig anfahren.',
      'Domlager und Lenkzwischengelenk bringen mehr Unbehagen als unmittelbare Gefahr, doch die Lenkung ist ein Sicherheitsbauteil, deshalb sollten Sie die Diagnose in den nächsten Tagen machen: Auf der Hebebühne dauert sie wenige Minuten. Grund zur Eile: Das Lenkrad ist um die Mittellage gefühllos geworden, das Auto schwimmt in der Spur, oder die Klicks sind plötzlich viel häufiger.',
    ],
    checks: [
      'Die Szenarien auf einem leeren Parkplatz trennen: Tritt das Knacken bei der Fahrt im Kreis mit Einschlag auf — oder sind die Klicks beim Lenken am stehenden Auto zu hören?',
      'Die Manschetten der Gleichlaufgelenke ansehen — die Gummifaltenbälge an der Innenseite jedes Vorderrads. Ein Riss mit herumgeschleuderter Fettschmiere ist eine fast bestätigte Diagnose.',
      'Jemanden bitten, bei abgestelltem Motor zu lenken, und dabei die Hand auf das Federbeinlager unter der Haube legen: Die Klicks eines verschlissenen Domlagers sind mit der Hand zu spüren.',
      'Bei abgestelltem Motor das Lenkrad hin und her bewegen und unten bei den Füßen lauschen: Ein deutliches Klicken in der Säule verrät das Lenkzwischengelenk.',
      'Sich merken, von welchem Rad das Knacken bei der Fahrt kommt und in welcher Kurve es lauter ist — diese Details verkürzen die Suche in der Werkstatt deutlich.',
    ],
    appHelp:
      'In der App Pro-Stuk sind diese Verzweigungen zu einem kurzen Fragebaum zusammengefasst: fährt das Auto oder steht es, woher kommt das Geräusch, wie sehen die Manschetten aus. Das Knacken lässt sich mit dem Telefon aufnehmen und mit Beispielen vergleichen. Im Bericht stehen wahrscheinliche Ursachen mit Einschätzung und eine Empfehlung zum Zeitrahmen: ohne Panik, aber auch ohne einen Monat vergessene Klicks.',
    faq: [
      {
        q: 'Was ist ein Gleichlaufgelenk und warum klickt es?',
        a: 'Es ist das Gelenk, das die Drehung an ein Rad überträgt, das zugleich lenkt. Gelangt durch eine gerissene Manschette Schmutz hinein, verschleißen Kugeln und Laufbahnen, und unter Last mit Einschlag beginnt es deutlich zu knacken.',
      },
      {
        q: 'Wie lange kann man mit einem klickenden Gleichlaufgelenk fahren?',
        a: 'Eine feste Lebensdauer gibt es nicht: Bei den einen hält das Gelenk Monate, bei den anderen ist es in zwei Wochen erledigt. Ein vernünftiger Richtwert: den Wechsel nicht über ein bis zwei Wochen hinausschieben und bis dahin nicht mit vollem Einschlag ruppig anfahren — so ist die Belastung am geringsten.',
      },
      {
        q: 'Warum knirscht es beim Lenken am stehenden Auto?',
        a: 'Im Stand dreht sich das Rad nicht, und das Gleichlaufgelenk arbeitet nicht. Ein Knirschen auf der Stelle kommt meist vom Domlager des Federbeins — der Ton kommt von oben aus dem Radhaus — oder vom Lenkzwischengelenk, wenn es im Lenkrad selbst klickt. Beide Teile prüft die Werkstatt in wenigen Minuten.',
      },
    ],
  },

  'stuk-v-dvigatele-na-holodnuyu': {
    h1: 'Motorklopfen im kalten Zustand',
    metaTitle: 'Motor klopft kalt: Ursachen und was zu tun ist | Pro-Stuk',
    description:
      'Warum der Motor kalt klopft und nach dem Warmwerden verstummt: Hydrostößel, Kolben, Steuerkette. Wann das normal ist und wann die Werkstatt dran ist.',
    intro: [
      'Ein Klopfen, das nur in den ersten Minuten nach dem Kaltstart zu hören ist und mit der Erwärmung verschwindet, ist eine der häufigsten Klagen bei Autos mit Laufleistung. Die gute Nachricht: Die häufigste Ursache ist hier auch die harmloseste. Häufiges Ticken oben am Motor kommt meist von den Hydrostößeln — kleinen Bauteilen, die mit Öldruck das überschüssige Spiel im Ventiltrieb ausgleichen. Solange der Motor kalt ist, ist das Öl dick und erreicht sie nicht sofort, deshalb klackern sie ein bis zwei Minuten. Warm geworden — still.',
      'Der Charakter des Geräusches sagt viel. Ein dumpfes Klopfen aus der Tiefe kommt eher von verschlissenen Kolben: Ein kalter Kolben hat etwas mehr Spiel im Zylinder und tackt, bis ihn die Wärme ausdehnt. Rascheln oder Rasseln vorn ist die Handschrift einer gelängten Steuerkette — der Kette im Motor, die die Ventile rechtzeitig öffnen lässt — oder ihres erschlafften Spanners. Und ein Klackern, das von außen lauter ist als im Innenraum, dazu Abgasgeruch unter der Haube, ist ein Zeichen für eine durchgebrannte Krümmerdichtung: Die Gase entweichen durch den Spalt, bis das Metall sich ausdehnt und ihn schließt.',
    ],
    causes: [
      { name: 'Hydrostößel: dickes kaltes Öl', likelihood: 'Am häufigsten — wenn es oben tickt und nach ein paar Minuten aufhört' },
      { name: 'Verschlissene Kolben', likelihood: 'Häufig bei hoher Laufleistung — dumpfes Klopfen aus der Tiefe' },
      { name: 'Steuerkette oder ihr Spanner', likelihood: 'Häufig — wenn es vorn raschelt oder rasselt' },
      { name: 'Krümmerdichtung oder ein Riss im Abgaskrümmer', likelihood: 'Wenn das Klackern außen lauter ist und es nach Abgas riecht' },
      { name: 'Rutschender Keilrippenriemen', likelihood: 'Wenn es ein Quietschen oder Pfeifen ist und kein Klopfen' },
    ],
    canRide: [
      'Mit dem Ticken der Hydrostößel, das nach dem Warmwerden ganz verschwindet, fahren Sie ohne Einschränkung — das ist das normale Leben eines Motors mit Laufleistung. Dasselbe gilt für ein Riemenquietschen in den ersten Sekunden nach dem Start: unangenehm, aber ungefährlich. In beiden Fällen reicht es, Stand und Alter des Öls zu prüfen und das Auto beim nächsten regulären Termin zu zeigen.',
      'Ein dumpfes Kolbenklopfen ist eine Sache der Beobachtung: Fahren können Sie, sollten aber den Ölverbrauch im Auge behalten und dem Mechaniker beim nächsten Besuch davon erzählen. Ein Rascheln der Steuerkette darf man nicht hinauszögern: Diagnose innerhalb von ein bis zwei Wochen, denn eine übergesprungene Kette bedeutet eine teure Motorreparatur — bis dahin kalt nicht ruppig anfahren. Und generell gilt: Verschwindet das Klopfen nicht mehr mit der Erwärmung oder ist es unter Last zu hören, kann die Diagnose nicht mehr warten.',
    ],
    checks: [
      'Die Dauer stoppen: ein bis zwei Minuten und dann Ruhe ist typisch für Hydrostößel; je länger das Klopfen lebt, desto nötiger die Kontrolle.',
      'Am kalten Motor den Ölstand prüfen und sich erinnern, wann zuletzt gewechselt wurde: Niedriger Stand und altes Öl verstärken jedes kalte Klopfen.',
      'Den Charakter bestimmen: häufiges Ticken oben, dumpfes Klopfen aus der Tiefe oder Rascheln vorn am Motor sind drei verschiedene Geschichten mit verschiedener Dringlichkeit.',
      'Die Haube bei laufendem kaltem Motor öffnen und schnuppern: Abgasgeruch zusammen mit Klackern deutet auf den Abgaskrümmer.',
      'Den warmen Motor zehn Minuten abstellen und wieder starten: Ein echtes Kaltklopfen kommt nach so kurzer Pause nicht zurück.',
    ],
    appHelp:
      'Die App Pro-Stuk geht dieselben Verzweigungen durch — Ticken, dumpfes Klopfen oder Rascheln und wie schnell das Geräusch verschwindet — und die Telefonaufnahme fängt den Charakter eines Geräusches ein, das sich schwer in Worte fassen lässt. Im Bericht stehen wahrscheinliche Ursachen mit Prozentwerten und ein klares Fazit: ruhig weiterfahren, Termin in dieser Woche oder die Werkstatt nicht hinauszögern.',
    faq: [
      {
        q: 'Das Klopfen verschwindet nach dem Warmwerden — kann ich es ignorieren?',
        a: 'Meistens ja: Ticken der Hydrostößel im kalten Zustand ist gewöhnlich und braucht keine Reparatur. Beobachten lohnt sich trotzdem: Hält das Geräusch länger als ein paar Minuten an, bleibt es am warmen Motor oder tritt es unter Last auf, ist das ein Grund für eine Diagnose.',
      },
      {
        q: 'Helfen Additive „gegen Klopfen“?',
        a: 'Einfüllen sollte man sie nicht: Verschleiß beseitigen sie nicht, sie überdecken das Symptom, sodass das Problem später auffällt. Wirklich hilft anderes — frisches Öl passender Viskosität, korrekter Stand und, wenn das Klopfen bleibt, Einstellung oder Reparatur beim Mechaniker.',
      },
      {
        q: 'Warum klopft es im Winter kalt stärker?',
        a: 'Bei Frost ist das Öl dicker und braucht länger bis in den oberen Teil des Motors, deshalb klackern Hydrostößel und Ventiltrieb deutlicher, und die Spiele der kalten Bauteile sind etwas größer. Wird nach dem Warmwerden alles still, ist das dasselbe Bild wie im Sommer, nur zeitlich gestreckt.',
      },
    ],
  },

  'svist-pri-zapuske': {
    h1: 'Pfeifen beim Motorstart',
    metaTitle: 'Pfeifen beim Starten: Ursachen und was zu tun ist | Pro-Stuk',
    description:
      'Warum der Motor beim Starten pfeift: rutschender Keilrippenriemen, Rollen oder die Wasserpumpe. Wann das Pfeifen harmlos ist und wann ein Termin fällig wird.',
    intro: [
      'Ein Quietschen oder Pfeifen in den ersten Sekunden, nachdem der Motor angesprungen ist, kommt fast immer vom Keilrippenriemen — dem Gummiriemen, der vom Motor Lichtmaschine, Wasserpumpe und Klimakompressor antreibt. Kalt oder bei feuchtem Wetter rutscht er auf den Scheiben und pfeift, nach ein paar Sekunden ist er warm, trocken und still.',
      'Gefährlich ist das im Moment nicht, aber als normal sollte man es auch nicht abtun: Ein frischer, richtig gespannter Riemen pfeift selbst bei Frost nicht. Regelmäßiges Pfeifen am Morgen zeigt, dass der Riemen gealtert ist, die Spannung nachgelassen hat oder eine der Rollen zu verschleißen beginnt. Eine eigene Geschichte sind die Geräusche des Startvorgangs selbst: Schleifen oder Surren, solange der Anlasser den Motor dreht. Das ist nicht der Riemen, sondern der Anlasser oder der Anlasserzahnkranz — und damit sollte man nicht warten.',
    ],
    causes: [
      { name: 'Rutschender Keilrippenriemen im kalten Zustand', likelihood: 'Am häufigsten — wenn das Pfeifen in den ersten Sekunden verschwindet' },
      { name: 'Verschlissener Riemen oder nachgelassene Spannung', likelihood: 'Häufig — wenn das Pfeifen auch am warmen Motor bleibt' },
      { name: 'Lager der Spann- oder Umlenkrolle', likelihood: 'Nicht selten — zum Pfeifen kommt Rascheln oder Brummen' },
      { name: 'Wasserpumpe — wenn am Riemen Kühlmittelspuren sind', likelihood: 'Seltener' },
      { name: 'Schleifen während des Anlasserlaufs: Ritzel oder Zahnkranz', likelihood: 'Sonderfall — das Geräusch kommt, bevor der Motor läuft' },
    ],
    canRide: [
      'Mit einem Pfeifen, das ein paar Sekunden nach dem Kaltstart lebt und dann ganz verschwindet, können Sie fahren: Eine unmittelbare Gefahr besteht nicht. Den Riemen bei Gelegenheit zeigen zu lassen lohnt sich trotzdem — die Sichtprüfung dauert zwei Minuten, und der Wechsel von Riemen und Rolle gehört zu den günstigen Arbeiten.',
      'Verschwindet das Pfeifen nicht mehr mit der Wärme, tritt beim Einschalten der Klimaanlage auf oder wird es mit jedem Start länger und lauter, machen Sie besser innerhalb einer Woche einen Termin: Ein verschlissener Riemen kann reißen, und ohne ihn stehen Lichtmaschine und bei vielen Motoren die Wasserpumpe. Leuchtet die Batterieleuchte auf oder steigt die Temperaturanzeige — anhalten und Motor abstellen.',
    ],
    checks: [
      'Die Dauer des Pfeifens stoppen: ein paar Sekunden nach dem Start ist Rutschen im kalten Zustand; ein Geräusch, das nach dem Warmwerden bleibt, ist Verschleiß von Riemen oder Rollen.',
      'Den Bezug zum Wetter verfolgen: Pfeifen nur nach Regen, Wäsche oder bei Frost spricht für Rutschen und nicht für den Defekt eines bestimmten Bauteils.',
      'Bei laufendem Motor Klimaanlage oder Heckscheibenheizung einschalten: Tritt das Pfeifen auf oder wird es lauter, rutscht der Riemen unter Last.',
      'Bei abgestelltem Motor den Riemen mit einer Lampe ansehen: Querrisse, ausgefranste Kanten und glänzend polierte Flanken sind Verschleißzeichen.',
      'Nachsehen, ob es um die Scheiben Tropfen oder weißliche Kühlmittelspuren gibt: Sie deuten auf die Wasserpumpe, und dann sollte der Werkstattbesuch nicht warten.',
    ],
    appHelp:
      'Die App Pro-Stuk stellt dieselben Fragen wie der Meister bei der Annahme: wann das Pfeifen auftritt, ob es nach dem Warmwerden verschwindet, was während des Anlasserlaufs zu hören ist. Die Aufnahme hilft, das Quietschen des Riemens vom Schleifen des Anlassers zu trennen, und im Bericht stehen wahrscheinliche Ursachen mit Prozentwerten und ein klares Fazit: weiterfahren, diese Woche in die Werkstatt oder anhalten.',
    faq: [
      {
        q: 'Warum pfeift der Motor nur kalt und bei Nässe?',
        a: 'Kaltes, feuchtes Riemengummi greift schlechter auf den Scheiben, deshalb rutscht der Riemen in den ersten Sekunden nach dem Start und pfeift. Mit der Erwärmung kehrt der Grip zurück und das Geräusch verschwindet. Ein neuer Riemen mit intaktem Spanner kommt auch damit zurecht, ein regelmäßiges Morgenpfeifen ist also ein Grund für eine Kontrolle.',
      },
      {
        q: 'Das Pfeifen tritt jetzt auch am warmen Motor auf. Ist das ernst?',
        a: 'Es ist ein Zeichen, dass der Verschleiß die Stufe erreicht hat, auf der der Riemen schon unter gewöhnlichen Bedingungen rutscht. Fahren können Sie noch, aber machen Sie innerhalb einer Woche einen Termin: Ein gerissener Riemen lässt Sie ohne Lichtmaschine und bei vielen Autos ohne Wasserpumpe stehen, und die Fahrt endet auf dem Abschleppwagen.',
      },
      {
        q: 'Was unterscheidet Pfeifen nach dem Start vom Schleifen beim Starten?',
        a: 'Pfeifen und Quietschen treten auf, nachdem der Motor schon läuft, und daran ist meist der Riemen schuld. Metallisches Schleifen ist früher zu hören — in den Sekunden, in denen der Anlasser den Motor dreht — und deutet auf schlechtes Eingreifen des Ritzels in den Zahnkranz. Andere Bauteile, andere Reparatur.',
      },
    ],
  },

  'vibratsiya-na-holostyh': {
    h1: 'Vibration im Leerlauf',
    metaTitle: 'Vibration im Leerlauf: Ursachen des Zitterns und was tun | Pro-Stuk',
    description:
      'Warum das Auto im Leerlauf zittert: Motorlager, Zündaussetzer, Falschluft oder eine verschmutzte Drosselklappe. Was Sie prüfen und ob Sie fahren können.',
    intro: [
      'Ein leichtes Zittern im Leerlauf hat jedes Auto, ein Diesel besonders. Hier geht es um etwas anderes — um ein Zittern, das in Lenkrad, Sitz und Rückspiegel ankommt und das vorher nicht da war. Die häufigste Ursache sind die Motorlager: Gummiblöcke, mit denen der Motor in der Karosserie sitzt und die seine Bewegungen dämpfen. Über die Jahre wird das Gummi hart und rissig, und die Vibration, die früher die Lager schluckten, geht in die Karosserie.',
      'Die zweite Gruppe von Ursachen: Der Motor selbst läuft unrund. Zündaussetzer (wenn ein Zylinder immer wieder nicht zündet — meist wegen Kerzen oder Zündspulen), Falschluft durch einen rissigen Schlauch oder eine Ansaugdichtung, eine verschmutzte Drosselklappe oder verschmutzte Injektoren machen den Leerlauf unruhig. Diese Fälle von den Lagern zu trennen ist nicht schwer: Dann zittert oder pendelt die Drehzahlnadel und oft leuchtet die Motorkontrollleuchte, während bei verschlissenen Lagern der Motor rund läuft — es zittert die Karosserie.',
    ],
    causes: [
      { name: 'Motorlager', likelihood: 'Am häufigsten — besonders bei Autos älter als 8–10 Jahre' },
      { name: 'Zündaussetzer: Kerzen, Zündspulen', likelihood: 'Häufig — wenn die Drehzahl zittert und die Motorkontrollleuchte an ist' },
      { name: 'Falschluft durch Schlauch oder Ansaugdichtung', likelihood: 'Häufig — wenn die Drehzahl pendelt, manchmal mit Zischen' },
      { name: 'Verschmutzte Drosselklappe oder Injektoren', likelihood: 'Häufig jenseits von hunderttausend Kilometern' },
    ],
    canRide: [
      'In den meisten Fällen können Sie fahren: Vibration im Leerlauf ist nicht das Symptom, wegen dem man ein Auto am Seitenstreifen stehen lässt. Mit verschlissenen Lagern haben Sie ein bis zwei Wochen für einen ruhigen Termin; monatelang hinauszögern sollte man es nicht — ausgeschlagene Lager bringen zusätzlich Klopfen beim Anfahren und Schalten und beschleunigen den Verschleiß der Nachbarteile.',
      'Eine eigene Geschichte ist ein Motor, der deutlich stottert: ruckartiges Zittern, blinkende oder leuchtende Motorkontrollleuchte, gefallene Leistung. Auch damit können Sie fahren, aber vorsichtig und nicht lange: Unverbrannter Kraftstoff aus den Aussetzern brennt im Abgastrakt nach und überhitzt den Katalysator, dessen Austausch teuer ist. Die Diagnose ist dann in den nächsten Tagen fällig, nicht bei Gelegenheit.',
    ],
    checks: [
      'Lagertest: Gang einlegen (bei Automatik D) und die Bremse halten. Die Vibration verschlissener Lager wird in dieser Stellung meist deutlich stärker.',
      'Auf den Drehzahlmesser sehen: Nadel steht ruhig, das Auto zittert — Argument für die Lager; Nadel zittert oder pendelt — der Motor läuft unrund.',
      'Die Klimaanlage einschalten und beobachten, ob sich das Zittern ändert: Unter zusätzlicher Last zeigen sich schwache Lager und ein unruhiger Leerlauf deutlicher, und dieses Detail nützt dem Mechaniker.',
      'Ohne etwas abzunehmen die dünnen Gummischläuche unter der Haube ansehen: Risse und abgerutschte Stutzen sind eine häufige Stelle für Falschluft.',
      'Sich erinnern, wann die Zündkerzen gewechselt wurden: Laufleistung weit über dem Intervall macht sie zum ersten Verdächtigen bei Aussetzern. Leuchtet die Motorkontrollleuchte, mit dem Auslesen der Fehlercodes beginnen: Sie engen die Suche ein.',
    ],
    appHelp:
      'Die App Pro-Stuk stellt dieselben Fragen — wird das Zittern mit eingelegtem Gang stärker, hält die Drehzahl ruhig, leuchtet die Motorkontrollleuchte — und verteilt daraus die wahrscheinlichen Ursachen auf Prozentwerte. Im Bericht steht ein klares Fazit: ruhig weiterfahren, Termin in dieser Woche oder das Auto in den nächsten Tagen zeigen.',
    faq: [
      {
        q: 'Warum zittert es nur im Leerlauf, während das Auto während der Fahrt ruhig läuft?',
        a: 'Im Leerlauf ist die Drehzahl am niedrigsten, und der Motor schwingt auf seinen Lagern mit einer Frequenz, die die Karosserie gut in den Innenraum weitergibt. Mit steigender Drehzahl werden die Bewegungen kleiner und weniger spürbar. Deshalb verraten sich verschlissene Lager an der Ampel und nicht auf der Autobahn.',
      },
      {
        q: 'Was sind Zündaussetzer?',
        a: 'Das Gemisch in einem der Zylinder entzündet sich zeitweise nicht — meist wegen verschlissener Kerzen oder einer defekten Zündspule. Der Motor verliert in diesem Moment einen Teil seiner Leistung und zuckt, während der unverbrannte Kraftstoff im Abgastrakt nachbrennt und den Katalysator überhitzt.',
      },
      {
        q: 'Hilft eine Reinigung der Drosselklappe?',
        a: 'Sie hilft, wenn die Ursache dort liegt: Ablagerungen stören die genaue Luftdosierung im Leerlauf, und die Drehzahl wird unruhig. Ein Allheilmittel ist die Reinigung aber nicht: Bei verschlissenen Lagern oder Zündaussetzern bleibt die Vibration danach genauso.',
      },
    ],
  },

  'hlopki-v-glushitele': {
    h1: 'Knallen im Auspuff',
    metaTitle: 'Knallen im Auspuff: Ursachen und was zu tun ist | Pro-Stuk',
    description:
      'Warum es aus dem Auspuff knallt: Zündaussetzer, durchgebrannte Abgasanlage, Gemischbildung oder Einstellungen der Gasanlage. Was Knallen dem Katalysator antut.',
    intro: [
      'Knallen oder „Schüsse“ aus dem Auspuff bedeuten, dass ein Teil des Kraftstoffs nicht in den Zylindern verbrennt, sondern erst in der Abgasanlage. Meist sind Zündaussetzer schuld: Eine verschlissene Kerze oder eine defekte Zündspule zündet das Gemisch nicht, das unverbrannte Benzin gelangt in den heißen Abgastrakt und entflammt dort mit dem charakteristischen Knall.',
      'Die zweite Gruppe von Ursachen ist die Abgasanlage selbst: ein durchgebrannter Endtopf, ein Rohr oder eine Dichtung fügt dem Knallen ein Röhren hinzu, das beim Gasgeben lauter wird. Auch das Gemisch kann wegen Sensoren oder Injektoren falsch sein, und bei Autos mit Gasanlage ist Knallen im Gasbetrieb ein typisches Zeichen verstellter Einstellungen. Alle Szenarien haben einen gemeinsamen Nenner: Der unverbrannte Kraftstoff brennt im Katalysator nach — dem Bauteil, das schädliche Gase nachverbrennt —, überhitzt ihn und macht ihn allmählich kaputt, und ein Katalysatorwechsel ist teuer.',
    ],
    causes: [
      { name: 'Zündaussetzer: Kerzen oder Zündspulen', likelihood: 'Am häufigsten' },
      { name: 'Durchgebrannter Endtopf, Rohr oder Abgasdichtung', likelihood: 'Häufig — das Knallen kommt mit einem Röhren' },
      { name: 'Falsches Gemisch: Sensoren oder Injektoren', likelihood: 'Nicht selten' },
      { name: 'Verstellte Einstellungen der Gasanlage', likelihood: 'Wenn es nur im Gasbetrieb knallt' },
      { name: 'Röhren beim Beschleunigen ohne Vortrieb: die Kupplung rutscht', likelihood: 'Sonderfall, klingt ähnlich' },
    ],
    canRide: [
      'Ein einzelner Knall beim Gaswegnehmen ist kein Grund anzuhalten: Bis nach Hause oder in die Werkstatt kommen Sie. Auch mit regelmäßigem Knallen können Sie fahren, planen Sie die Diagnose aber für die nächsten Tage und nicht Wochen: Jeder Knall ist eine Portion unverbrannten Kraftstoffs, die im Katalysator nachbrennt, und die Rechnung für eine verschleppte Reparatur wächst von günstigen Kerzen auf den Preis eines Katalysators.',
      'Ein Sonderfall ist eine blinkende Motorkontrollleuchte: So warnt das System vor aktiven Zündaussetzern, die dem Katalysator gerade jetzt schaden. Mit blinkender Leuchte nur ruhig und nicht weit fahren, ohne Last, und ohne Aufschub in die Werkstatt. Riecht es im Innenraum nach Abgas, bis zur Reparatur mit leicht geöffnetem Fenster fahren und den Wagen nicht in einer geschlossenen Garage warmlaufen lassen: Kohlenmonoxid ist gefährlich.',
    ],
    checks: [
      'Merken, wann es knallt: unter Last beim Beschleunigen, beim Gaswegnehmen oder im Leerlauf — dieses Detail verkürzt dem Mechaniker die Suche sofort.',
      'Auf die Motorkontrollleuchte sehen: leuchtet sie dauerhaft, Diagnose in den nächsten Tagen; blinkt sie, laufen die Aussetzer gerade jetzt, und der Besuch darf nicht warten.',
      'Den Motorlauf beurteilen: unrunder Lauf, Zittern im Leerlauf und gefallene Leistung zusammen mit Knallen deuten auf Kerzen, Spulen oder das Gemisch.',
      'Dem Auspuff zuhören: Ein Röhren, das beim Gasgeben lauter wird, während die Leistung normal bleibt, spricht für ein Loch im Endtopf oder Rohr und nicht für die Zündung.',
      'Bei einem Auto mit Gasanlage Gas- und Benzinbetrieb vergleichen: Knallen nur im Gasbetrieb ist eine Frage an die Einstellung der Anlage.',
    ],
    appHelp:
      'Die App Pro-Stuk klärt die Umstände — Knallen oder Röhren, im Gas- oder Benzinbetrieb, mit oder ohne Leistungsverlust — und hilft, Zündprobleme, ein Loch im Abgastrakt und eine rutschende Kupplung zu trennen, die nach Gehör ähnlich sind. Im Bericht stehen wahrscheinliche Ursachen mit Prozentwerten und eine klare Empfehlung, wie dringend die Werkstatt ist.',
    faq: [
      {
        q: 'Warum knallt es im Auspuff, wenn das Problem im Motor liegt?',
        a: 'Zündet Kerze oder Spule das Gemisch im Zylinder nicht, wird das unverbrannte Benzin in die Abgasanlage geschoben. Dort trifft es auf glühend heiße Teile und brennt mit einer Stichflamme nach — dieses Geräusch hört man als Knall aus dem Auspuff. Die Quelle sitzt dabei unter der Haube, nicht im Endtopf.',
      },
      {
        q: 'Warum ist Knallen für den Katalysator gefährlich?',
        a: 'Ein Katalysator ist dafür ausgelegt, Reste von Abgasen nachzuverbrennen, nicht Portionen rohen Kraftstoffs. Das darin nachbrennende Benzin treibt die Temperatur über den vorgesehenen Wert, und die keramischen Waben schmelzen oder zerfallen. Das Ergebnis: Leistungsverlust, Scheppern von unten und ein Katalysatorwechsel, eine der teuersten Arbeiten am Abgastrakt.',
      },
      {
        q: 'Meine Gasanlage knallt im Gasbetrieb. Ist das gefährlich?',
        a: 'Ja, für die Gasanlage ist Knallen gefährlicher als für den Benzinmotor: Eine Rückzündung im Ansaugtrakt kann Kunststoffteile und Sensoren beschädigen. Die übliche Ursache sind verstellte Einstellungen oder verschlissene Kerzen. Sinnvoll ist, auf Benzin umzuschalten und einen Termin bei einem Gasanlagen-Spezialisten zu machen.',
      },
    ],
  },
};
