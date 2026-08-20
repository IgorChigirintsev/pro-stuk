import type { Dict } from './types';

export const de: Dict = {
  brand: 'Pro-Stuk',
  nav: {
    symptoms: 'Symptome',
    how: 'So funktioniert es',
    articles: 'Artikel',
    analytics: 'Statistik',
    lang: 'Sprache',
  },
  footer: {
    disclaimer:
      'Pro-Stuk liefert eine Wahrscheinlichkeitseinschätzung aus Ihren Antworten und dem ' +
      'Geräusch, keine Diagnose. Über die Reparatur entscheidet die Werkstatt, nachdem ' +
      'sie das Auto gesehen hat.',
    how: 'So funktioniert es',
    privacy: 'Datenschutzerklärung',
    ruArticles: 'Artikel (auf Russisch)',
    ruOnly: 'Symptom-Ratgeber und Artikel (auf Russisch)',
  },
  home: {
    title: 'Pro-Stuk — Autodiagnose nach Gehör',
    description:
      'Geräusch aufnehmen und erfahren, was mit dem Auto los ist. Kurzer Fragebogen, ' +
      'Analyse der Aufnahme und ein Bericht: wahrscheinliche Ursachen mit Prozentwerten, ' +
      'Dringlichkeitsampel und die richtigen Worte für die Werkstatt.',
    schemaDescription:
      'Fehlersuche am Auto nach Symptomen und Geräusch: Fragebogen, Tonaufnahme und ' +
      'Bericht mit wahrscheinlichen Ursachen.',
    h1: 'Geräusch aufnehmen — erfahren, was das Auto hat',
    sub:
      'Ein kurzer Fragebogen und eine Aufnahme von 15–30 Sekunden. Zurück kommen ' +
      'wahrscheinliche Ursachen mit Prozentwerten, eine Dringlichkeitsampel und ' +
      'Stichworte für das Gespräch in der Werkstatt.',
    cta: 'App herunterladen',
    ctaNote: 'Android · vorerst kostenlos',
    howH2: 'So funktioniert es',
    steps: [
      {
        title: '1. Fragen',
        text: 'Wann das Geräusch auftritt und wonach es klingt — der Fragebaum grenzt die Ursache ein.',
      },
      {
        title: '2. Geräusch',
        text: 'Aufnahme von 15–30 Sekunden: Spektrum, Schlagrhythmus und Drehzahl werden auf dem Server berechnet.',
      },
      {
        title: '3. Bericht',
        text: 'Ursachen mit Prozentwerten, Dringlichkeitsampel und was Sie in der Werkstatt sagen sollten.',
      },
    ],
    faqH2: 'Häufige Fragen',
    faq: [
      {
        q: 'Ist das eine genaue Diagnose?',
        a: 'Nein. Pro-Stuk gibt eine Wahrscheinlichkeitseinschätzung: mögliche Ursachen mit Prozentwerten und wie dringend die Sache ist. Die genaue Diagnose stellt die Werkstatt nach der Sichtprüfung — der Bericht sorgt nur dafür, dass Sie vorbereitet hinkommen.',
      },
      {
        q: 'Was kostet das?',
        a: 'Vorerst nichts: bis zu 3 vollständige Geräuschberichte pro Gerät und Tag. Die Voreinschätzung aus dem Fragebogen ist unbegrenzt.',
      },
      {
        q: 'Welche Autos werden unterstützt?',
        a: 'Pkw mit Benzin- oder Dieselmotor, mit Schalt- oder Automatikgetriebe. Marke, Baujahr und Laufleistung fließen in die Auswertung ein.',
      },
      {
        q: 'Was passiert mit meiner Aufnahme?',
        a: 'Die Audiodatei geht an den Server, wird ausgewertet und danach nicht gespeichert. Es gibt keine Konten und keine Werbetracker.',
      },
      {
        q: 'Und wenn die Aufnahme nicht gelingt?',
        a: 'Der Bericht stützt sich vor allem auf Ihre Antworten — so wie ein Meister, der erst einmal nachfragt. Wenn die Aufnahme nichts hergibt, sagt die App das offen.',
      },
    ],
  },
  quiz: {
    h2: 'Gleich ausprobieren',
    sub: 'Ein paar Fragen, und Sie sehen die wahrscheinliche Ursache und wie dringend es ist.',
    urgOk: 'Weiterfahren möglich',
    urgWarn: 'Diese Woche in die Werkstatt',
    urgStop: 'Anhalten',
    back: 'Zurück',
    restart: 'Von vorn beginnen',
    cta: 'Vollständiger Geräuschbericht — in der App',
    schemaMarked: 'Eingekreist ist, worauf Ihre Antworten deuten — eine Vermutung, keine Diagnose.',
    schemaWhole: 'Die Baugruppe im Ganzen.',
  },
  symptoms: {
    indexTitle: 'Geräusche und Symptome am Auto — Ratgeber | Pro-Stuk',
    indexDescription: 'Klopfen, Brummen, Quietschen, Schleifen: was jedes Geräusch am Auto bedeutet, wie gefährlich es ist und was Sie selbst prüfen können. Ratgeber nach Symptom mit Diagnosebaum.',
    h1: 'Symptome nach Geräusch',
    sub: 'Wählen Sie das Geräusch, das Ihrem am nächsten kommt. In jedem Ratgeber: wahrscheinliche Ursachen, eine Gefahrenampel, sichere Selbstprüfungen und ein Diagnosebaum zum Durchklicken.',
    gDvigatel: 'Motor',
    gDvizhenie: 'Während der Fahrt',
    gTormozaRul: 'Bremsen und Lenkung',
    gPodveska: 'Fahrwerk',
    causesH2: 'Mögliche Ursachen',
    thCause: 'Ursache',
    thLikelihood: 'Wie wahrscheinlich',
    thDanger: 'Gefahr',
    canRideH2: 'Können Sie weiterfahren',
    checksH2: 'Was Sie selbst prüfen können',
    quizH2: 'Die Ursache mit Fragen eingrenzen',
    quizSub: 'Beantworten Sie ein paar Fragen — der Diagnosebaum kürzt die Liste der Ursachen für Ihren Fall.',
    appHelpH2: 'Wobei die App hilft',
    faqH2: 'Häufige Fragen',
    lightOk: 'weiterfahren möglich',
    lightWarn: 'diese Woche in die Werkstatt',
    lightStop: 'anhalten',
    mapTitle: 'Woher das Geräusch kommt',
    mapOk: 'Sie können in Ruhe zur Werkstatt fahren',
    mapWarn: 'Nicht aufschieben: in den nächsten Tagen prüfen lassen',
    mapStop: 'Ohne Aufschub in die Werkstatt',
    zoneDvigatel: 'der Motorraum',
    zoneDvizhenie: 'die Räder und alles, was sich mit ihnen dreht',
    zoneTormoza: 'Bremsen und Lenkung, Bereich des Rades',
    zonePodveska: 'Fahrwerk, Bereich des Rades',
  },
  download: {
    h2: 'Die App für Android',
    sub: 'Fragebogen, Tonaufnahme und der vollständige Bericht mit Wahrscheinlichkeiten stecken in der Stuk-App.',
    btn: 'Für Android herunterladen',
    meta: 'Version {version} · APK {size} MB · aktualisiert {date}',
    installH: 'APK installieren',
    steps: [
      'Die Datei über die Schaltfläche oben herunterladen.',
      'Sie aus der Benachrichtigung oder aus den Downloads öffnen.',
      'Die Installation aus dieser Quelle erlauben, wenn das Telefon fragt.',
      'Die App installieren und öffnen.',
    ],
    playNote: 'Sobald die App bei Google Play ist, wird diese Seite aktualisiert.',
  },
  how: {
    title: 'Wie die Diagnose nach Gehör funktioniert | Pro-Stuk',
    description:
      'Ehrlich erklärt: der Fragebogen als wichtigstes Werkzeug, die Spektralanalyse der ' +
      'Aufnahme, ein Sprachmodell und die bekannten Schwachstellen der Modelle. Warum das ' +
      'Ergebnis eine Wahrscheinlichkeit bleibt.',
    schemaName: 'Wie die Diagnose nach Gehör funktioniert',
    h1: 'So funktioniert es',
    formH2: 'Der Fragebogen ist das wichtigste Werkzeug',
    formP:
      'Jede Fehlersuche beginnt mit Fragen: Wann ist das Geräusch aufgetreten, wonach klingt ' +
      'es, hängt es von Geschwindigkeit, Drehzahl, Bremsen oder Lenken ab? Die Antworten ' +
      'schließen ganze Gruppen von Ursachen aus — das bringt mehr als jeder Algorithmus über ' +
      'einer schlechten Aufnahme. Deshalb steht der Fragebogen bei Pro-Stuk an erster Stelle, und ' +
      'seine Logik ist ein Entscheidungsbaum: Jede Antwort führt zur nächsten, genaueren Frage.',
    recH2: 'Was mit der Aufnahme passiert',
    recP: [
      'Die Aufnahme von 15–30 Sekunden geht an den Server. Zuerst arbeitet ganz normale ' +
        'Mathematik daran, ohne neuronale Netze: das Spektrum des Geräuschs, seine Färbung ' +
        '(tonales Pfeifen oder breitbandiges Rauschen), der Rhythmus der Schläge und deren ' +
        'Frequenz, eine Schätzung der Drehzahl aus dem tiefen Frequenzband. Jedes Merkmal ' +
        'bekommt eine Zuverlässigkeitsmarke: Ist die Aufnahme zu leise oder zu verrauscht, ' +
        'werden die Merkmale offen als unsicher gekennzeichnet.',
      'Anschließend bringt ein Sprachmodell alles zusammen: Ihre Antworten, die Merkmale der ' +
        'Aufnahme, das Audio selbst und die Daten des Autos — Marke, Baujahr, Laufleistung und ' +
        'die typischen Schwachstellen dieses Modells. Heraus kommen 2–4 wahrscheinliche ' +
        'Ursachen mit Prozentwerten, eine Dringlichkeitsstufe und Hinweise für die Werkstatt.',
    ],
    probH2: 'Warum das Ergebnis eine Wahrscheinlichkeit ist',
    probP: [
      'Dieselben Geräusche entstehen bei ganz verschiedenen Schäden: Das Brummen eines ' +
        'Radlagers wird leicht mit Reifengeräuschen verwechselt, das Klackern der ' +
        'Koppelstangen mit deutlich ernsteren Teilen des Fahrwerks. Sicher unterscheiden ' +
        'lässt sich das nur auf der Hebebühne. Deshalb stellt Pro-Stuk keine Diagnose und ' +
        'verspricht keine Genauigkeit — es verteilt die Wahrscheinlichkeiten ehrlich und ' +
        'sagt, was zuerst zu prüfen ist.',
      'Eine gute Aufnahme verbessert die Einschätzung, ersetzt aber keine Werkstatt. Nehmen ' +
        'Sie den Bericht als Zweitmeinung vor dem Termin: Das Gespräch mit dem Meister wird ' +
        'konkret, und unnötige Arbeiten lassen sich schwerer verkaufen.',
    ],
    dataH2: 'Daten',
    dataP:
      'Das Audio wird auf dem Server ausgewertet und danach nicht gespeichert. Es gibt keine ' +
      'Konten, keine Analysedienste und keine Werbetracker. Mehr dazu in der ',
    dataLink: 'Datenschutzerklärung',
    dataTail: '.',
  },
  privacy: {
    title: 'Datenschutzerklärung | Pro-Stuk',
    description:
      'Was mit Ihren Daten in der App Pro-Stuk geschieht: Audio wird auf dem Server ausgewertet und danach nicht gespeichert, Anmeldung über Google oder Apple, keine Analytik.',
    h1: 'Datenschutzerklärung',
    updatedLabel: 'Aktualisiert',
    intro:
      'Die App Pro-Stuk erhebt das Nötigste — genau so viel, wie die Diagnose braucht, und nicht mehr.',
    items: [
      {
        strong: 'Die Aufnahme',
        text: 'geht erst dann an den Server, wenn Sie die Aufnahmetaste drücken. Sie dient der Analyse und wird nach dem Bericht nicht aufbewahrt — weder auf dem Server noch in einer Datei.',
      },
      {
        strong: 'Den Klang wertet Google aus.',
        text: 'Die Aufnahme wird an die Google-Gemini-API übergeben, den Dienst, der sie in unserem Auftrag analysiert. Nichts, was Sie identifiziert, geht mit.',
      },
      {
        strong: 'Fahrzeugdaten',
        text: '(Marke, Modell, Baujahr, Laufleistung) und Ihre Antworten gehen zusammen mit der Aufnahme mit — daran werden die Ursachen abgewogen.',
      },
      {
        strong: 'Anmeldung über Google oder Apple.',
        text: 'Die App legt keine eigenen Konten an und fragt kein Passwort ab. Vom Store erhält sie nur Ihre dauerhafte Nutzernummer; an ihr hängen Garage und Prüfungsguthaben. Name, Foto und E-Mail werden weder abgefragt noch gespeichert.',
      },
      {
        strong: 'Käufe wickelt der Store ab.',
        text: 'Die Zahlung nimmt Google Play oder der App Store entgegen, Kartendaten erreichen uns nie. Unser Server bekommt nur die Bestätigung des Stores und schreibt die Prüfungen gut; der Beleg wird aufbewahrt, damit nichts doppelt gutgeschrieben wird.',
      },
      {
        strong: 'Die IP-Adresse',
        text: 'ist für den Server sichtbar, wie bei jedem Aufruf im Internet, und dient allein dem Schutz vor Überlastung. Sie bleibt einige Minuten im Arbeitsspeicher, landet in keiner Datenbank und wird keinem Bericht zugeordnet.',
      },
      {
        strong: 'Fremde Tracker und Werbung gibt es nicht.',
        text: 'Die Website zählt anonyme Seitenaufrufe auf dem eigenen Server — ohne Cookies, ohne Kennungen, ohne Weitergabe an Dritte. In der App steckt überhaupt keine Analytik.',
      },
      {
        strong: 'Der Verlauf Ihrer Berichte',
        text: 'liegt nur auf Ihrem Gerät und wird mit der App gelöscht.',
      },
      {
        strong: 'Die Übertragung ist verschlüsselt.',
        text: 'Die App spricht über HTTPS mit dem Server.',
      },
      {
        strong: 'So löschen Sie Ihre Daten.',
        text:
          'Die App zu deinstallieren genügt, um den Berichtsverlauf auf dem Telefon zu löschen. Das Konto selbst — samt Garage und verbleibenden Prüfungen — löschen Sie in der App: „Einstellungen“ → „Konto löschen“. Die Löschung ist endgültig, ungenutzte Prüfungen werden nicht erstattet.',
      },
      {
        strong: 'Die App ist nicht für Kinder.',
        text: 'Sie richtet sich an Autofahrer und nicht an Kinder.',
      },
    ],
    outro:
      'Das Mikrofon läuft nur während der Aufnahme und nur auf Ihre Aktion hin. Der Bericht ist eine Wahrscheinlichkeitseinschätzung, keine Diagnose; über die Reparatur entscheidet die Werkstatt nach der Sichtprüfung.',
    contactTitle: 'Kontakt',
    contactText:
      'App und Website Pro-Stuk betreibt {operator}. Fragen zu Ihren Daten, Beschwerden und Löschanfragen an:',
    changes:
      'Ändert sich diese Erklärung, ändert sich das Datum oben auf der Seite mit.',
  },
  og: {
    tagline: 'Die Ursache am Geräusch erkennen',
  },
  notFound: {
    title: 'Seite nicht gefunden — Pro-Stuk',
    description:
      'Diese Seite gibt es hier nicht. Zurück zur Startseite oder direkt zu den Geräusch-Ratgebern.',
    h1: 'Seite nicht gefunden',
    text:
      'In der Adresse steckt ein Tippfehler, oder die Seite ist umgezogen. Das Geräusch, das Sie hergeführt hat, ist noch da — fangen Sie auf der Startseite an oder öffnen Sie die Ratgeber.',
    home: 'Zur Startseite',
  },
  deleteAccount: {
    title:
      'Konto löschen | Pro-Stuk',
    h1:
      'Konto löschen',
    description:
      'So löschen Sie Ihr Pro-Stuk-Konto samt Garage und verbleibenden Prüfungen: per Schaltfläche in der App oder per E-Mail, wenn die App schon deinstalliert ist.',
    intro:
      'Das Konto wird vollständig gelöscht: Garage, Autos, Kaufhistorie und alle verbleibenden Prüfungen. Wiederherstellen ist nicht möglich, ungenutzte Prüfungen werden nicht erstattet.',
    appT:
      'Aus der App — am schnellsten',
    app:
      'Öffnen Sie „Einstellungen“ und tippen Sie auf „Konto löschen“. Die App fragt einmal nach und entfernt den Eintrag sofort; warten müssen Sie auf nichts.',
    mailT:
      'Per E-Mail, wenn die App schon weg ist',
    mail:
      'Schreiben Sie uns von der Adresse Ihres Google- oder Apple-Kontos und nennen Sie, womit Sie sich angemeldet haben. Wir löschen innerhalb von 30 Tagen und antworten, sobald es erledigt ist.',
    whatT:
      'Was genau gelöscht wird',
    what:
      'Aus dem Konto verschwinden Stellplätze, Autos, das Prüfungsguthaben und die Liste verarbeiteter Käufe. Aufnahmen werden ohnehin nicht gespeichert — sie werden nach der Auswertung verworfen. Der Berichtsverlauf liegt auf Ihrem Telefon und geht mit der App.',
  },
};
