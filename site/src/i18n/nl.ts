import type { Dict } from './types';

export const nl: Dict = {
  brand: 'Pro-Stuk',
  nav: {
    symptoms: 'Symptomen',
    how: 'Hoe het werkt',
    articles: 'Artikelen',
    analytics: 'Statistieken',
    lang: 'Taal',
  },
  footer: {
    disclaimer:
      'Pro-Stuk geeft een kansinschatting op basis van uw antwoorden en het geluid, geen ' +
      'diagnose. De uiteindelijke beslissing over reparatie ligt bij de monteur die de ' +
      'auto heeft bekeken.',
    how: 'Hoe het werkt',
    privacy: 'Privacyverklaring',
    ruArticles: 'Artikelen (in het Russisch)',
    ruOnly: 'Symptoomgidsen en artikelen (in het Russisch)',
  },
  home: {
    title: 'Pro-Stuk — autodiagnose op het gehoor',
    description:
      'Neem het geluid op en ontdek wat er met de auto is. Een korte vragenlijst, analyse ' +
      'van de opname en een rapport: waarschijnlijke oorzaken met percentages, een ' +
      'stoplicht voor de urgentie en wat u in de garage zegt.',
    schemaDescription:
      'Autostoringen opsporen aan de hand van symptomen en geluid: vragenlijst, ' +
      'geluidsopname en een rapport met waarschijnlijke oorzaken.',
    h1: 'Neem het geluid op — ontdek wat er met de auto is',
    sub:
      'Een korte vragenlijst en een opname van 15–30 seconden. Terug krijgt u ' +
      'waarschijnlijke oorzaken met percentages, een stoplicht voor de urgentie en de ' +
      'juiste woorden voor de garage.',
    cta: 'App downloaden',
    ctaNote: 'Android · voorlopig gratis',
    howH2: 'Hoe het werkt',
    steps: [
      {
        title: '1. Vragen',
        text: 'Wanneer het geluid te horen is en waarop het lijkt — de vragenboom perkt de oorzaak in.',
      },
      {
        title: '2. Geluid',
        text: 'Opname van 15–30 seconden: het spectrum, het ritme van de tikken en het toerental worden op de server berekend.',
      },
      {
        title: '3. Rapport',
        text: 'Oorzaken met percentages, een stoplicht voor de urgentie en wat u in de garage zegt.',
      },
    ],
    faqH2: 'Veelgestelde vragen',
    faq: [
      {
        q: 'Is dit een exacte diagnose?',
        a: 'Nee. Pro-Stuk geeft een kansinschatting: een lijst mogelijke oorzaken met percentages en hoe dringend het is. De exacte diagnose stelt de monteur na inspectie — het rapport zorgt er alleen voor dat u voorbereid binnenkomt.',
      },
      {
        q: 'Wat kost het?',
        a: 'Voorlopig niets: tot 3 volledige geluidsrapporten per dag per apparaat. Het voorlopige oordeel uit de vragenlijst kent geen limiet.',
      },
      {
        q: 'Welke auto’s worden ondersteund?',
        a: 'Personenauto’s met benzine- of dieselmotor en handgeschakelde of automatische versnellingsbak. Merk, bouwjaar en kilometerstand tellen mee in de analyse.',
      },
      {
        q: 'Wat gebeurt er met mijn opname?',
        a: 'De audio gaat naar de server, wordt geanalyseerd en wordt daarna niet bewaard. Er zijn geen accounts en geen advertentietrackers.',
      },
      {
        q: 'En als het geluid niet goed op te nemen is?',
        a: 'Het rapport steunt in de eerste plaats op uw antwoorden — net als een monteur die eerst doorvraagt. Levert de opname niets op, dan zegt de app dat eerlijk.',
      },
    ],
  },
  quiz: {
    h2: 'Probeer het meteen',
    sub: 'Een paar vragen en u ziet de waarschijnlijke oorzaak en hoe dringend het is.',
    urgOk: 'Je kunt doorrijden',
    urgWarn: 'Deze week naar de garage',
    urgStop: 'Stop',
    back: 'Terug',
    restart: 'Opnieuw beginnen',
    cta: 'Volledig geluidsrapport — in de app',
    schemaMarked: 'Omcirkeld is waar uw antwoorden op wijzen — een vermoeden, geen diagnose.',
    schemaWhole: 'Het geheel.',
  },
  symptoms: {
    indexTitle: 'Autogeluiden en symptomen uitgelegd | Pro-Stuk',
    indexDescription: 'Tikken, brommen, piepen, schuren: wat elk autogeluid betekent, hoe gevaarlijk het is en wat u zelf kunt nakijken. Gidsen per symptoom met een diagnoseboom.',
    h1: 'Symptomen op geluid',
    sub: 'Kies het geluid dat het dichtst bij het uwe komt. In elke gids: waarschijnlijke oorzaken, een gevarenstoplicht, veilige eigen controles en een interactieve diagnoseboom.',
    gDvigatel: 'Motor',
    gDvizhenie: 'Tijdens het rijden',
    gTormozaRul: 'Remmen en besturing',
    gPodveska: 'Onderstel',
    causesH2: 'Mogelijke oorzaken',
    thCause: 'Oorzaak',
    thLikelihood: 'Hoe waarschijnlijk',
    thDanger: 'Gevaar',
    canRideH2: 'Kunt u doorrijden',
    checksH2: 'Wat u zelf kunt nakijken',
    quizH2: 'De oorzaak inperken met vragen',
    quizSub: 'Beantwoord een paar vragen — de diagnoseboom kort de lijst met oorzaken voor uw geval in.',
    appHelpH2: 'Waarbij de app helpt',
    faqH2: 'Veelgestelde vragen',
    lightOk: 'u kunt doorrijden',
    lightWarn: 'deze week naar de garage',
    lightStop: 'stop',
    mapTitle: 'Waar het geluid vandaan komt',
    mapOk: 'U kunt rustig naar de garage rijden',
    mapWarn: 'Stel het niet uit: laat het binnen enkele dagen nakijken',
    mapStop: 'Zonder uitstel naar de garage',
    zoneDvigatel: 'de motorruimte',
    zoneDvizhenie: 'de wielen en alles wat met ze meedraait',
    zoneTormoza: 'remmen en besturing, rond het wiel',
    zonePodveska: 'onderstel, rond het wiel',
  },
  download: {
    h2: 'De app voor Android',
    sub: 'De vragenlijst, de geluidsopname en het volledige rapport met kansen zitten in de app Pro-Stuk.',
    btn: 'Downloaden voor Android',
    meta: 'Versie {version} · APK {size} MB · bijgewerkt op {date}',
    installH: 'De APK installeren',
    steps: [
      'Download het bestand met de knop hierboven.',
      'Open het vanuit de melding of vanuit «Downloads».',
      'Sta installatie vanaf deze bron toe wanneer de telefoon erom vraagt.',
      'Installeer de app en open hem.',
    ],
    playNote: 'Zodra de app in Google Play staat, wordt deze pagina bijgewerkt.',
  },
  how: {
    title: 'Hoe diagnose op het gehoor werkt | Pro-Stuk',
    description:
      'Zonder opsmuk: de vragenlijst als belangrijkste instrument, spectraalanalyse van de ' +
      'opname, een taalmodel en de bekende zwakke plekken per model. Waarom de uitkomst ' +
      'een kans blijft.',
    schemaName: 'Hoe diagnose op het gehoor werkt',
    h1: 'Hoe het werkt',
    formH2: 'De vragenlijst is het belangrijkste instrument',
    formP:
      'Elke diagnose begint met vragen: wanneer is het geluid ontstaan, waarop lijkt het, ' +
      'hangt het samen met snelheid, toerental, remmen, sturen. De antwoorden schrappen hele ' +
      'groepen oorzaken — dat levert meer op dan welk algoritme ook boven op een slechte ' +
      'opname. Daarom komt de vragenlijst in Pro-Stuk eerst, en de logica erachter is een ' +
      'beslisboom: elk antwoord leidt naar de volgende, nauwere vraag.',
    recH2: 'Wat er met de opname gebeurt',
    recP: [
      'De opname van 15–30 seconden gaat naar de server. Eerst gaat gewone wiskunde ermee ' +
        'aan de slag, zonder neurale netwerken: het spectrum van het geluid, de kleur ervan ' +
        '(een tonaal gepiep of breedbandige ruis), het ritme van de tikken en hun frequentie, ' +
        'een schatting van het toerental uit de lage band. Elk kenmerk krijgt een ' +
        'betrouwbaarheidsmerk: is de opname zacht of ruizig, dan worden de kenmerken eerlijk ' +
        'als onbetrouwbaar gemarkeerd.',
      'Daarna legt een taalmodel alles naast elkaar: uw antwoorden, de kenmerken van de ' +
        'opname, de audio zelf en de gegevens van de auto — merk, bouwjaar, kilometerstand en ' +
        'de bekende kwalen van dat model. Eruit komen 2–4 waarschijnlijke oorzaken met ' +
        'percentages, een urgentieniveau en aanwijzingen voor de garage.',
    ],
    probH2: 'Waarom de uitkomst een kans is',
    probP: [
      'Verschillende storingen klinken hetzelfde: het brommen van een wiellager is zo ' +
        'verward met bandengeluid, en het tikken van de stabilisatorstangen met veel ' +
        'ernstiger delen van het onderstel. Zeker uit elkaar houden lukt alleen op de brug. ' +
        'Daarom stelt Pro-Stuk geen diagnose en belooft het geen nauwkeurigheid — het verdeelt de ' +
        'kansen eerlijk en zegt wat u als eerste laat nakijken.',
      'Een goede opname maakt de inschatting beter, maar vervangt de monteur niet. Zie het ' +
        'rapport als een second opinion voordat u binnenrijdt: het gesprek wordt concreet en ' +
        'een overbodige reparatie aansmeren wordt lastiger.',
    ],
    dataH2: 'Gegevens',
    dataP:
      'De audio wordt op de server geanalyseerd en daarna niet bewaard. Er zijn geen ' +
      'accounts, geen statistiekendiensten en geen advertentietrackers. Meer daarover in de ',
    dataLink: 'privacyverklaring',
    dataTail: '.',
  },
  privacy: {
    title: 'Privacyverklaring | Pro-Stuk',
    description:
      'Wat er met uw gegevens gebeurt in de app Pro-Stuk: audio wordt op de server verwerkt en niet bewaard, aanmelden gaat via Google of Apple, en er is geen analytics.',
    h1: 'Privacyverklaring',
    updatedLabel: 'Bijgewerkt',
    intro:
      'De app Pro-Stuk verzamelt een minimum aan gegevens — precies zoveel als de diagnose nodig heeft en niets meer.',
    items: [
      {
        strong: 'De geluidsopname',
        text: 'gaat pas naar de server als u op de opnameknop drukt. Ze dient voor de analyse en wordt na het rapport niet bewaard — niet op de server en niet in een bestand.',
      },
      {
        strong: 'Het geluid wordt door Google geanalyseerd.',
        text: 'De opname gaat naar de Google Gemini API, de dienst die de analyse in onze opdracht uitvoert. Er gaat niets mee waaraan u te herkennen bent.',
      },
      {
        strong: 'De autogegevens',
        text: '(merk, model, bouwjaar, kilometerstand) en uw antwoorden gaan met de opname mee — daarop worden de oorzaken afgewogen.',
      },
      {
        strong: 'Aanmelden met Google of Apple.',
        text: 'De app maakt geen eigen accounts aan en vraagt nooit om een wachtwoord. Van de store krijgt ze alleen uw vaste gebruikersnummer; daaraan hangen uw garage en uw controletegoed. Naam, foto en e-mail worden niet gevraagd en niet bewaard.',
      },
      {
        strong: 'Aankopen lopen via de store.',
        text: 'De betaling wordt geïnd door Google Play of de App Store; uw kaartgegevens bereiken ons nooit. Onze server krijgt alleen de bevestiging van de store en schrijft de controles bij; de bon blijft bewaard zodat niets dubbel wordt bijgeschreven.',
      },
      {
        strong: 'Het IP-adres',
        text: 'is zichtbaar voor de server, zoals bij elk bezoek op internet, en dient alleen om overbelasting te voorkomen. Het blijft een paar minuten in het geheugen, komt in geen database terecht en wordt aan geen enkel rapport gekoppeld.',
      },
      {
        strong: 'Er zijn geen trackers van derden en geen advertenties.',
        text: 'De site telt anonieme paginaweergaven op de eigen server — zonder cookies, zonder identificatoren en zonder iets aan derden door te geven. In de app zit helemaal geen analytics.',
      },
      {
        strong: 'De geschiedenis van uw rapporten',
        text: 'staat alleen op uw toestel en verdwijnt samen met de app.',
      },
      {
        strong: 'De verbinding is versleuteld.',
        text: 'De app praat via HTTPS met de server.',
      },
      {
        strong: 'Zo wist u uw gegevens.',
        text:
          'De app verwijderen is genoeg om de rapportgeschiedenis op het toestel te wissen. Het account zelf, met garage en resterende controles, verwijdert u in de app: «Instellingen» → «Account verwijderen». Verwijderen is definitief en ongebruikte controles worden niet vergoed.',
      },
      {
        strong: 'De app is niet voor kinderen.',
        text: 'Ze is bedoeld voor automobilisten.',
      },
    ],
    outro:
      'De microfoon staat alleen aan tijdens de opname en alleen op uw handeling. Het rapport is een kansinschatting, geen diagnose; de beslissing over reparatie neemt de monteur na inspectie.',
    contactTitle: 'Contact',
    contactText:
      'De app en de site Pro-Stuk worden beheerd door {operator}. Vragen over uw gegevens, klachten en verzoeken om verwijdering:',
    changes:
      'Verandert deze verklaring, dan verandert de datum bovenaan de pagina mee.',
  },
  og: {
    tagline: 'Vind het defect op het gehoor',
  },
  notFound: {
    title: 'Pagina niet gevonden — Pro-Stuk',
    description:
      'Deze pagina bestaat niet op de site. Ga terug naar de startpagina of open de symptoomgidsen.',
    h1: 'Pagina niet gevonden',
    text:
      'Er zit een typfout in het adres, of de pagina is verplaatst. Het geluid waarvoor u kwam is er nog steeds — begin op de startpagina of open de symptoomgidsen.',
    home: 'Naar de startpagina',
  },
  deleteAccount: {
    title:
      'Account verwijderen | Pro-Stuk',
    h1:
      'Account verwijderen',
    description:
      'Zo verwijdert u uw Pro-Stuk-account met garage en resterende controles: met een knop in de app, of per e-mail als de app al weg is.',
    intro:
      'Het account wordt volledig verwijderd: garage, auto’s, aankoopgeschiedenis en alle resterende controles. Herstellen kan niet en ongebruikte controles worden niet vergoed.',
    appT:
      'Vanuit de app — het snelst',
    app:
      'Open «Instellingen» en tik op «Account verwijderen». De app vraagt één keer om bevestiging en wist het account meteen; wachten hoeft niet.',
    mailT:
      'Per e-mail, als de app al verwijderd is',
    mail:
      'Schrijf ons vanaf het adres van uw Google- of Apple-account en vermeld met welke van de twee u aanmeldde. We verwijderen binnen 30 dagen en laten het weten zodra het klaar is.',
    whatT:
      'Wat er precies verdwijnt',
    what:
      'Uit het account verdwijnen de plekken in de garage, de auto’s, het controletegoed en de lijst met verwerkte aankopen. Opnamen worden sowieso niet bewaard: ze verdwijnen na de analyse. De rapportgeschiedenis staat op uw toestel en gaat mee met de app.',
  },
};
