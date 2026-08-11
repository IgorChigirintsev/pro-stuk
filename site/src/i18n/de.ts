import type { Dict } from './types';

export const de: Dict = {
  brand: 'Stuk',
  nav: {
    symptoms: 'Symptome',
    how: 'So funktioniert es',
    articles: 'Artikel',
    analytics: 'Statistik',
    lang: 'Sprache',
  },
  footer: {
    disclaimer:
      'Stuk liefert eine Wahrscheinlichkeitseinschätzung aus Ihren Antworten und dem ' +
      'Geräusch, keine Diagnose. Über die Reparatur entscheidet die Werkstatt, nachdem ' +
      'sie das Auto gesehen hat.',
    how: 'So funktioniert es',
    privacy: 'Datenschutzerklärung',
    ruOnly: 'Symptom-Ratgeber und Artikel (auf Russisch)',
  },
  home: {
    title: 'Stuk — Autodiagnose nach Gehör',
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
        a: 'Nein. Stuk gibt eine Wahrscheinlichkeitseinschätzung: mögliche Ursachen mit Prozentwerten und wie dringend die Sache ist. Die genaue Diagnose stellt die Werkstatt nach der Sichtprüfung — der Bericht sorgt nur dafür, dass Sie vorbereitet hinkommen.',
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
    title: 'Wie die Diagnose nach Gehör funktioniert | Stuk',
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
      'einer schlechten Aufnahme. Deshalb steht der Fragebogen bei Stuk an erster Stelle, und ' +
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
        'lässt sich das nur auf der Hebebühne. Deshalb stellt Stuk keine Diagnose und ' +
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
    title: 'Datenschutzerklärung | Stuk',
    description:
      'Was mit Ihren Daten in der Stuk-App geschieht: Audio wird auf dem Server verarbeitet ' +
      'und nach der Analyse nicht gespeichert, es gibt keine Konten und keine Analysedienste.',
    h1: 'Datenschutzerklärung',
    intro:
      'Die Stuk-App erhebt ein Minimum an Daten — genau so viel, wie die Diagnose braucht.',
    items: [
      {
        strong: 'Die Tonaufnahme',
        text: 'geht nur auf Knopfdruck an den Server, wird für die Analyse verwendet und danach nicht gespeichert.',
      },
      {
        strong: 'Die Fahrzeugdaten',
        text: '(Marke, Modell, Baujahr, Laufleistung) und Ihre Antworten werden zusammen mit der Aufnahme übertragen — sie werden für die Bewertung der Ursachen gebraucht.',
      },
      {
        strong: 'Es gibt keine Konten.',
        text: 'Die App läuft ohne Registrierung; das Gerät erhält eine zufällige Kennung für das Tageslimit an Berichten.',
      },
      {
        strong: 'Es gibt keine fremden Tracker.',
        text: 'Die Website zählt anonyme Seitenaufrufe auf dem eigenen Server — ohne Cookies, ohne Kennungen und ohne Weitergabe an Dritte. In der App gibt es überhaupt keine Analyse.',
      },
      {
        strong: 'Der Verlauf Ihrer Berichte',
        text: 'bleibt nur auf Ihrem Gerät und wird mit der App gelöscht.',
      },
    ],
    outro:
      'Das Mikrofon wird ausschließlich während der Aufnahme benutzt und nur, wenn Sie sie ' +
      'selbst starten. Der Bericht ist eine Wahrscheinlichkeitseinschätzung, keine Diagnose; ' +
      'über die Reparatur entscheidet die Werkstatt nach der Sichtprüfung.',
  },
};
