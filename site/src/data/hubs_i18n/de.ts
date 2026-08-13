import type { HubText } from './index';

/**
 * Разделы по узлам по-немецки. Ключ — слаг русского раздела: он же ключ
 * классификации статей. Адрес страницы берётся из английского хаба —
 * латинский слаг у всех нерусских языков общий.
 */
export const de: Record<string, HubText> = {
  dvigatel: {
    h1: 'Motorgeräusche und Klopfen',
    short: 'Motor',
    metaTitle: 'Motorgeräusche und Klopfen: Ratgeber | Stuk',
    description:
      'Alle Motorgeräusche an einem Ort: Klopfen, Ticken, Klappern, Klingeln, Pfeifen. Wie Sie Harmloses von Gefährlichem trennen und was Sie selbst prüfen können.',
    intro: [
      'Der Motor ist das gesprächigste Bauteil im Auto und zugleich das vieldeutigste: Unter dem Wort „Klopfen“ steckt sowohl das harmlose Klackern der Injektoren als auch verschlissene Kurbelwellenlager, bei denen jeder Kilometer die Revision näher bringt. Unterschieden werden sie nicht über die Lautstärke, sondern darüber, woher das Geräusch kommt, wann es auftritt und wie es auf Gas und Betriebstemperatur reagiert.',
      'Dieser Bereich sammelt einen Beitrag zu jeder Geräuschart: vom Ventilticken und dem Rascheln der Steuerkette bis zum Klingeln und dem Klopfen der Pleuellager. Zu jedem gehören der Höreindruck, gefahrlose Prüfungen ohne Demontage und eine ehrliche Einschätzung der Dringlichkeit.',
      'Wenn Sie nicht sicher sind, welches Geräusch Ihres ist, beginnen Sie mit dem interaktiven Fragebaum auf den Symptomseiten weiter unten: Ein paar Fragen grenzen den Kreis schneller ein als das Lesen aller Artikel nacheinander.',
    ],
  },
  podveska: {
    h1: 'Klopfen und Knarzen im Fahrwerk',
    short: 'Fahrwerk und Lenkung',
    metaTitle: 'Klopfen und Knarzen im Fahrwerk: Ratgeber | Stuk',
    description:
      'Klopfen auf Unebenheiten, Knarzen, Spiel in der Lenkung: wie Sie die Quelle im Fahrwerk und in der Lenkung bestimmen und was Sie selbst prüfen können.',
    intro: [
      'Das Fahrwerk verschleißt allmählich und meldet sich fast immer mit einem Geräusch, lange bevor es gefährlich wird. Das Problem ist ein anderes: Dasselbe Klopfen auf Unebenheiten erzeugen sowohl die günstigen Koppelstangen als auch das Traggelenk, dessen Bruch bei Tempo bereits eine Frage der Sicherheit ist.',
      'Der Bereich sammelt Beiträge nach Charakter des Geräuschs und nach den Bedingungen: schnelles Klopfen auf feinen Wellen, einzelne Schläge in Schlaglöchern, Knarzen beim Wippen, Klopfen im Lenkrad. Dazu die Verschleißzeichen jedes Bauteils und Prüfungen, die ohne Hebebühne gelingen.',
      'Praktische Reihenfolge: Bestimmen Sie den Charakter des Geräuschs auf der Symptomseite mit dem Diagnosebaum und öffnen Sie dann den Artikel zum konkreten Bauteil.',
    ],
  },
  tormoza: {
    h1: 'Quietschen und Schleifen der Bremsen',
    short: 'Bremsen und Räder',
    metaTitle: 'Quietschen und Schleifen der Bremsen: Ratgeber | Stuk',
    description:
      'Quietschen, Pfeifen, Schleifen und Rubbeln beim Bremsen: was jedes Geräusch bedeutet, wann Sie nicht weiterfahren dürfen und wie Sie Beläge selbst prüfen.',
    intro: [
      'Die Bremsen sind das einzige System, bei dem man Geräusche wörtlich nehmen sollte: Die meisten Signale sind vom Hersteller so gewollt. Der metallische Verschleißanzeiger beginnt absichtlich zu pfeifen, wenn die Beläge zur Neige gehen, und Metall auf Metall bedeutet, dass die Reserve bereits aufgebraucht ist.',
      'Dabei ist die häufigste Ursache für Quietschen harmlos: der nächtliche Rostfilm auf den Scheiben, den die ersten Bremsungen abtragen. Der Bereich erklärt, wie Sie Normales von einer Warnung unterscheiden und eine Warnung von einem Grund, die Fahrt zu beenden.',
      'Hierher gehören auch Rad- und Radlagergeräusche: das Brummen des Lagers, Vibration bei Tempo, Klicken und Lenkradschlagen — sie werden oft für Bremsengeräusche gehalten.',
    ],
  },
  transmissiya: {
    h1: 'Geräusche von Getriebe und Antrieb',
    short: 'Antriebsstrang',
    metaTitle: 'Geräusche von Getriebe und Antrieb: Ratgeber | Stuk',
    description:
      'Heulen des Getriebes, Knacken der Gelenkwellen, Schläge beim Gangwechsel und Brummen der Kupplung: wie Sie die Quelle unter dem Boden bestimmen.',
    intro: [
      'Der Antriebsstrang meldet sich anders als Motor und Fahrwerk: Seine Geräusche hängen daran, ob Kraft übertragen wird. Ein Ton, der beim Gaswegnehmen verschwindet und unter Last wiederkommt, gehört fast immer hierher.',
      'Der Bereich sammelt Beiträge zu Getriebe, Kupplung, Gelenkwellen und Achsantrieb: wie jedes Bauteil klingt, welche Prüfung ohne Demontage etwas zeigt und ab wann Weiterfahren teuer wird.',
      'Zwei Handgriffe trennen den Antrieb vom Rest schneller als jede Beschreibung: den Leerlauf einlegen und die Kupplung treten. Wie man beides richtig macht, steht in den Beiträgen dieses Bereichs.',
    ],
  },
  vyhlop: {
    h1: 'Geräusche der Abgasanlage',
    short: 'Abgasanlage',
    metaTitle: 'Geräusche der Abgasanlage: Ratgeber | Stuk',
    description:
      'Dröhnen, Knallen aus dem Auspuff, Klappern unter dem Boden und ein klingelndes Hitzeschild: was Abgasgeräusche bedeuten und warum sie wichtig sind.',
    intro: [
      'Die Abgasanlage macht die wiedererkennbarsten Geräusche überhaupt: das Dröhnen eines durchgerosteten Topfs, Knallen beim Gaswegnehmen, metallisches Klappern in einem bestimmten Drehzahlbereich. Die meisten davon ändern nichts am Fahrverhalten, ignorieren sollte man sie trotzdem nicht — hinter einem harmlos klingenden Klappern steckt manchmal ein zerfallender Katalysator, dessen Bruchstücke in den Motor gelangen können.',
      'Der Bereich deckt den ganzen Weg ab: vom günstigen Hitzeschild und einem gerissenen Flexrohr bis zur durchgebrannten Krümmerdichtung und einem verstopften Katalysator, samt Höreindruck und dem Risiko, dass Abgase in den Innenraum ziehen.',
    ],
  },
  salon: {
    h1: 'Knarzen und Klappern im Innenraum',
    short: 'Innenraum und Karosserie',
    metaTitle: 'Knarzen und Klappern im Innenraum: Suche | Stuk',
    description:
      'Grillen im Innenraum, knarzendes Armaturenbrett, klappernde Türen: wie Sie die Quelle selbst finden und sie von einem Fahrwerksfehler unterscheiden.',
    intro: [
      'Innenraumgeräusche sind die lästigsten und meist die billigsten: Häufiger steckt eine gelöste Klammer, ein loser Gegenstand im Kofferraum oder eine trockene Dichtung dahinter als ein Defekt. Wichtig ist, sie vom Klopfen des Fahrwerks zu trennen, damit knarzender Kunststoff nicht in einer Rechnung für die Fahrwerksdiagnose endet.',
      'Der Bereich zeigt einfache Wege, das Geräusch festzunageln: die Verkleidung während der Fahrt mit der Hand andrücken, den Kofferraum leeren, die Karosserie verwinden, indem ein Rad auf den Bordstein fährt. Und ein ehrliches Merkmal dafür, wann das Geräusch doch von unten kommt und der Weg in die Werkstatt führt.',
    ],
  },
};
