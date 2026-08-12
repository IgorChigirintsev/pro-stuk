import type { SymptomTr } from '../types';

/** Разборы симптомов по-нидерландски. Структура — из русских файлов рядом. */
export const pages: Record<string, SymptomTr> = {
  'stuk-v-dvigatele': {
    h1: 'Tikken of kloppen in de motor',
    metaTitle: 'Motor klopt: oorzaken, hoe ernstig en wat te doen | Stuk',
    description:
      'Waarom een motor klopt: van onschuldig kleptikken tot versleten krukaslagers. Hoe u een gevaarlijk klopgeluid herkent, of u kunt doorrijden en wat u zelf kunt nakijken.',
    intro: [
      'Kloppen in de motor is het symptoom met de grootste spreiding in ernst: achter hetzelfde woord gaan zowel het onschuldige klepperen van injectoren schuil als versleten krukaslagers, waarbij elke kilometer een revisie dichterbij brengt. Het goede nieuws: verschillende klopgeluiden klinken verschillend en komen onder verschillende omstandigheden op — die kenmerken versmallen het rijtje oorzaken snel.',
      'De vragen waarmee elke motorspecialist begint: waar klopt het (bovenin de motor of uit de diepte), wanneer (koud, warm, onder belasting) en verandert het geluid met het toerental. Een licht, snel tikken van bovenaf is meestal de klepaandrijving. Een dof kloppen van onderen dat sneller wordt als u gas geeft en luider onder belasting is de verontrustende variant.',
    ],
    causes: [
      { name: 'Te grote klepspeling of hydraulische stoters', likelihood: 'Heel vaak — de klassieke oorzaak van tikken van bovenaf' },
      { name: 'Normaal klepperen van injectoren (directe inspuiting en diesels)', likelihood: 'Vaak — en het is geen defect' },
      { name: 'Hulpaandrijving: poelies, steunen, koppeling van de aircocompressor', likelihood: 'Vaak als het kloppen los staat van het gas' },
      { name: 'Detonatie bij optrekken (pingelen)', likelihood: 'Vaak na tanken van benzine met een te laag octaangetal' },
      { name: 'Hoofd- en drijfstanglagers', likelihood: 'Zeldzamer, maar dit is het gevaarlijke scenario' },
    ],
    canRide: [
      'Het hangt af van het karakter van het geluid. Met een gelijkmatig tikken van bovenaf kunt u rijden: de klepaandrijving slijt in maanden, niet in één rit — maak wel binnen twee weken een afspraak voor afstellen. Bij het klepperen van injectoren op een motor met directe inspuiting hoeft u niets te doen: zo werkt het brandstofsysteem nu eenmaal.',
      'Een dof kloppen uit de diepte van de motor dat sneller wordt met het toerental en luider onder belasting is een reden om te stoppen. Zo klinken versleten lagerschalen — de glijlagers waarin de krukas draait. Doorrijden kan eindigen met een doorgedraaid lager of een vastgelopen motor; rijd bij voorkeur niet op eigen kracht naar de garage, maar bel een bergingsdienst.',
    ],
    checks: [
      'Controleer het oliepeil met de peilstok: een laag peil begeleidt en versterkt motorgeluiden, en een lagerklop bij lage oliedruk verergert snel.',
      'Luister waar het geluid vandaan komt: ga bij de open motorkap staan — kleptikken hoort u bovenin, een lagerklop is dof en komt uit de diepte, van onderen.',
      'Geef rustig gas in neutraal: een klop die sneller wordt met het toerental en luider klinkt onder belasting is ernstiger dan een die zijn eigen gang gaat.',
      'Denk terug aan de laatste tankbeurt: een metalige tik bij optrekken na twijfelachtige benzine lijkt op detonatie en verdwijnt vaak na één tank goede brandstof.',
      'Kijk of het oliedruklampje brandt: het rode oliekannetje samen met een klopgeluid betekent de motor onmiddellijk afzetten.',
    ],
    appHelp:
      'De app Stuk loopt met u dezelfde vragen langs die een motorspecialist stelt, neemt het geluid op en beoordeelt spectrum en ritme: hoe vaak de slagen komen en hoe zich dat verhoudt tot het toerental — bij een klepklop en een krukasklop is die verhouding anders. Het rapport geeft waarschijnlijke oorzaken met percentages, een urgentiestoplicht en zinnen voor het gesprek in de garage.',
    faq: [
      {
        q: 'Waarom klopt de motor alleen koud?',
        a: 'Zolang de motor niet warm is, zijn de spelingen tussen de onderdelen groter en heeft dikke olie nog niet alles bereikt. Tikkende stoters of een doffe zuigerklop in de eerste minuten na een koude start die volledig verdwijnt bij het warmdraaien is meestal iets om in de gaten te houden, geen noodgeval.',
      },
      {
        q: 'Hoe klinkt het gevaarlijkste motorgeluid?',
        a: 'Dof, laag, uit de diepte van de motor; het wordt sneller met het toerental en groeit onder belasting — bij optrekken of bergop. Zo kloppen drijfstang- en hoofdlagers. Rijd met dat geluid niet zelf verder, maar breng de auto zo snel mogelijk naar een monteur.',
      },
      {
        q: 'Kan een klopgeluid normaal zijn?',
        a: 'Ja. Motoren met directe inspuiting (TSI, GDI) en diesels klepperen altijd met hun injectoren — het geluid is koud en warm hetzelfde en buiten luider dan in het interieur. Dat is normale werking, geen defect.',
      },
    ],
  },

  'skrip-tormozov': {
    h1: 'Piepende remmen',
    metaTitle: 'Remmen piepen: gevaarlijk of niet, oorzaken | Stuk',
    description:
      'Waarom remmen piepen: een roestlaagje in de ochtend, de slijtage-indicator van de remblokken of een probleem met de schijven. Hoe u onschuldig piepen van een waarschuwing onderscheidt.',
    intro: [
      'Piepen bij het remmen is het zeldzame geval waarin de meest voorkomende oorzaak ook de meest onschuldige is. ’s Nachts, na regen of na de wasstraat komt er een dun roestlaagje op de remschijven; de eerste remstoten schrapen dat eraf — vandaar het piepen. Is het geluid na een paar minuten rijden weg, dan hoeft er niets te gebeuren: dat is het normale leven van elke auto met schijfremmen.',
      'Piepen bij elke remstoot is iets anders. Veel remblokken hebben een metalen slijtage-indicator: een lipje dat de schijf expres raakt en gaat gillen zodra het wrijvingsmateriaal op is. Dat is een ingebouwde waarschuwing: laat de blokken nakijken voordat het piepen overgaat in metaal op metaal — dat betekent al beschadigde schijven en een langere remweg.',
    ],
    causes: [
      { name: 'Roestlaagje na stilstand, regen of de wasstraat', likelihood: 'Het vaakst — als het piepen na de eerste remstoten weg is' },
      { name: 'Slijtage-indicator: de blokken zijn bijna op', likelihood: 'Vaak — als het bij elke remstoot gilt' },
      { name: 'Verharde of goedkope blokken, stof tussen blok en schijf', likelihood: 'Vaak; vervelend, maar niet gevaarlijk' },
      { name: 'Blokken tot op het metaal versleten (schuren)', likelihood: 'Als de waarschuwing genegeerd is' },
    ],
    canRide: [
      'Met het ochtendpiepen dat na de eerste remstoten verdwijnt rijdt u zonder beperkingen: een paar rustige remstoten maken de schijven schoon en de zaak is afgedaan tot de volgende regenbui.',
      'Met aanhoudend gillen kunt u ook rijden — de remmen werken nog volledig — maar maak een afspraak voor deze week en niet voor «ooit»: gilt de slijtage-indicator, dan volgt als volgende stap schuren, blokken tot op de drager versleten en een rekening waar ook de schijven op staan. Metaal op metaal is een stopteken: alleen nog voorzichtig naar de garage, vroeg en rustig remmend.',
    ],
    checks: [
      'Let op het patroon: piepen alleen bij de eerste remstoten na stilstand of bij vocht is roest; bij elke remstoot is het een reden voor controle.',
      'Kijk tussen de spaken van de velg door: bij veel auto’s is het buitenste blok zichtbaar. Wrijvingsmateriaal dunner dan 3–4 mm moet vervangen worden.',
      'Luister of het één kant is of allebei: gillen aan één kant wijst vaker op de slijtage-indicator of een klemmende remklauw juist daar.',
      'Let op een fluittoon tijdens het rijden zonder te remmen die verandert als u het pedaal licht aanraakt — zo strijkt de slijtage-indicator langs de schijf nog vóór u remt.',
      'Let op het pedaal en de koers: naar één kant trekken bij het remmen, een pulserend of «lang» pedaal zijn ernstiger dan piepen en betekenen garage zonder uitstel.',
    ],
    appHelp:
      'De app Stuk scheidt het onschuldige scenario van het verontrustende met dezelfde vragen — wanneer piept het en verdwijnt het geluid — en de opname helpt het hoge gillen van de indicator te onderscheiden van schuren. Het rapport geeft waarschijnlijke oorzaken met percentages en een stoplicht: u kunt rijden, deze week naar de garage of stop.',
    faq: [
      {
        q: 'Waarom piepen remmen ’s ochtends en in de regen?',
        a: 'Op gietijzeren remschijven vormt zich in vochtige lucht binnen enkele uren een dun laagje roest. De eerste remstoten schrapen het eraf — vandaar het piepen en lichte schuren, dat snel verdwijnt. Dat is normaal en vraagt geen reparatie.',
      },
      {
        q: 'Wat is de slijtage-indicator van remblokken?',
        a: 'Een metalen lipje op het blok dat de schijf gaat raken en hard gilt zodra het wrijvingsmateriaal op zijn grens is. Het is een bewust ingebouwde waarschuwing: hoort u aanhoudend gillen, maak dan een afspraak voor nieuwe blokken vóór het schuren begint.',
      },
      {
        q: 'Wat is het verschil tussen piepen en schuren?',
        a: 'Piepen en gillen zijn hoge tonen waarbij de remmen nog volledig werken. Schuren is een grof geluid van metaal op metaal: het wrijvingsmateriaal is op en de stalen drager van het blok schuurt over de schijf. Met schuren rijdt u niet — alleen voorzichtig naar de garage.',
      },
    ],
  },

  'gul-pri-dvizhenii': {
    h1: 'Brommen tijdens het rijden',
    metaTitle: 'Brommen tijdens het rijden: wiellager, banden of bak | Stuk',
    description:
      'Gelijkmatig brommen bij snelheid: wiellager, banden, versnellingsbak of differentieel. Eenvoudige tests zonder garage — de vrijlooptest en rustige bochten — perken de oorzaak in.',
    intro: [
      'Een gelijkmatig brommen dat met de snelheid opkomt en meegroeit komt meestal uit een van twee bronnen: het wiellager — het lager waarop het wiel draait — of de banden. U kunt ze zonder garage uit elkaar houden. Een lager bromt op elk asfalt hetzelfde, doet denken aan een opstijgend vliegtuig in de verte en verandert vaak in rustige bochten. Banden reageren juist op het wegdek: op vers asfalt zachter, op ruw wegdek luider; vooral winterbanden, terreinbanden en ongelijkmatig versleten banden brommen.',
      'Minder vaak zit de bron in de aandrijflijn: versnellingsbak, differentieel of cardanas bij achterwiel- en vierwielaandrijving. De vrijlooptest sorteert de mogelijkheden: rijd naar de snelheid waarbij u het brommen hoort, zet de bak in neutraal en laat uitrollen. Blijft het brommen, dan hangt het aan het draaien van de wielen — lagers, banden, wegdek. Verdwijnt het samen met het motortoerental, dan moet u in de motor zoeken en in wat hij aandrijft.',
    ],
    causes: [
      { name: 'Wiellager', likelihood: 'Het vaakst — gelijkmatig brommen, groeit met de snelheid, wegdek doet er niet toe' },
      { name: 'Bandengeluid', likelihood: 'Vaak — hangt af van het wegdek; winter- en versleten banden zijn luider' },
      { name: 'Versnellingsbak of differentieel', likelihood: 'Zeldzamer — het gehuil verandert met de versnelling of bij gas geven' },
      { name: 'Cardanas (achterwiel- en vierwielaandrijving)', likelihood: 'Brommen met trilling in de vloer in een smalle snelheidsband' },
      { name: 'Windgeruis: deurrubbers, dakdrager', likelihood: 'Pas boven 70–90 km/h' },
    ],
    canRide: [
      'Met een brommend lager kunt u rijden, maar het is geen geluid om maanden mee te slepen: een versleten wiellager krijgt geleidelijk speling — vrije beweging van het wiel — en kan in een verwaarloosd geval vastlopen. Het verstandige plan is een controle binnen een week en lange, snelle ritten tot die tijd uitstellen. Werd het brommen ineens luider of kwam er trilling bij, stel de controle dan niet uit.',
      'Bandengeluid en windgeruis zijn een kwestie van comfort, niet van veiligheid: daarmee rijdt u zonder beperkingen. Gehuil uit de bak of het differentieel vraagt evenmin om stoppen op de vluchtstrook, maar mag niet blijven liggen: vroeg ontdekt volstaat vaak een olieverversing, terwijl een late reparatie met assen en tandwielen een veelvoud kost.',
    ],
    checks: [
      'Vrijlooptest: rijd naar de brommende snelheid, zet in neutraal en laat uitrollen. Blijft het brommen — wielen en lagers; verdwijnt het met het toerental — motor en aandrijflijn.',
      'Ruime bochten op een veilig recht stuk: wordt het brommen in een flauwe boog naar de ene kant zachter en naar de andere luider, dan lijkt het op een wiellager, en de kant vertelt welke.',
      'Vergelijk wegdek: rijd een stuk over vers asfalt en een stuk over ruw asfalt. Een duidelijk verschil in geluidsniveau wijst op de banden.',
      'Bekijk het loopvlak en controleer de spanning: zaagtandslijtage — trapjes op de randen van de blokken — maakt banden luid en wijst op een verstelde uitlijning of vermoeide schokdempers.',
      'Kijk bij een handbak of het gehuil verandert in verschillende versnellingen bij dezelfde snelheid; bij achterwielaandrijving of er samen met het brommen een trilling in de vloer optreedt in een smalle snelheidsband.',
    ],
    appHelp:
      'De app Stuk loopt met u dezelfde vragen langs — blijft het brommen in vrijloop, verandert het in bochten en met het wegdek — en helpt het geluid op te nemen om het karakter met typische gevallen te vergelijken. Het rapport geeft waarschijnlijke oorzaken met percentages en een conclusie: rustig doorrijden, een garagebezoek plannen of zonder uitstel laten controleren.',
    faq: [
      {
        q: 'Hoe onderscheid ik een lagerbrom van bandengeluid?',
        a: 'Aan de reactie op de weg en op bochten. Bandengeluid verandert met het wegdek: op nieuw asfalt zachter, op ruw luider. Een lager bromt overal hetzelfde, maar reageert vaak op rustige bochten, wanneer de belasting naar het buitenste wiel verschuift. Het loopvlak bekijken helpt ook: ongelijkmatig versleten banden brommen uit zichzelf.',
      },
      {
        q: 'Is rijden met een brommend wiellager gevaarlijk?',
        a: 'In het begin niet, maar rek het niet: na verloop van tijd ontstaat speling, het wiel gaat trillen en in het uiterste geval loopt het lager vast. De controle is simpel: op de brug draait de monteur de wielen rond en vindt de lawaaiige naaf in een paar minuten. Een verstandige termijn voor het bezoek is binnen een week.',
      },
      {
        q: 'Waarom verandert het brommen in bochten?',
        a: 'In een bocht verschuift het gewicht van de auto naar de buitenste wielen. Bromt het rechter lager, dan neemt bij een bocht naar links de belasting erop toe en wordt het brommen luider; bij een bocht naar rechts zwakt het af. Dit patroon helpt de kant al vóór de garage te bepalen: onthoud het en vertel het de monteur.',
      },
    ],
  },

  'stuk-v-podveske': {
    h1: 'Kloppen in het onderstel',
    metaTitle: 'Kloppen in het onderstel: wat tikt en kunt u rijden | Stuk',
    description:
      'Wat klopt in het onderstel: stabilisatorstangen, rubberbussen, het stuurhuis of een gebroken veer. Hoe u de geluiden aan hun karakter herkent en wanneer u naar de garage moet.',
    intro: [
      'Het onderstel van een personenauto bestaat uit tientallen scharnieren, rubberbussen en steunen, en met de jaren is speling — vrije beweging — in een daarvan bijna onvermijdelijk. Een losgeraakt onderdeel antwoordt op elke oneffenheid met een klap: het onderstel veert in en uit, en het versleten deel slaat in zijn bevestiging. Het goede nieuws: als eerste geven meestal de goedkope delen het op — de stabilisatorstangen, kleine staafjes met kogelgewrichten die in het onderstel vóór al het andere slijten.',
      'Het karakter van het geluid zegt veel, nog vóór de brug. Frequent dof kloppen op kleine golvingen en voegen is de handtekening van de stabilisatorstangen. Losse klappen in kuilen en over drempels wijzen op de rubberbussen — de rubberen scharnieren waarmee de draagarmen aan de carrosserie zitten — of op vermoeide schokdempers. Een klap die recht in het stuur komt en in uw handpalmen voelbaar is, is speling in het stuurhuis. En een gepiep «als een oud bed» is helemaal geen klap, maar droog rubber in de bussen: het onschuldigste van het rijtje.',
    ],
    causes: [
      { name: 'Stabilisatorstangen', likelihood: 'Het vaakst — frequent dof kloppen op kleine oneffenheden' },
      { name: 'Draagarmbussen of schokdempers', likelihood: 'Vaak — losse doffe klappen in kuilen' },
      { name: 'Speling in het stuurhuis', likelihood: 'Zeldzamer — de klap komt in het stuur en is in de handen voelbaar' },
      { name: 'Stabilisatorbussen, uitgedroogde bussen (piepen, geen klap)', likelihood: 'Vaak — vooral bij vorst en vocht' },
      { name: 'Gebroken onderstelveer', likelihood: 'Zelden — plots na een kuil, met een hoek van de auto lager' },
    ],
    canRide: [
      'Met de meeste onderstelgeluiden kunt u rijden: stabilisatorstangen, bussen en steunen begeven het niet ineens. Toch is het niet verstandig de diagnose maanden uit te stellen — een kapot onderdeel geeft de klappen door en versnelt de slijtage van zijn buren, en ernstiger dingen kunnen op het gehoor net zo klinken. Een redelijke termijn is een controle binnen één tot twee weken, en tot die tijd grote kuilen langzaam nemen.',
      'Twee situaties vragen meer aandacht. Een klap die in het stuur komt betreft de besturing, een veiligheidsdeel: controle binnen enkele dagen, en als het stuur rond de middenstand vaag is geworden of de auto in zijn rijstrook zwabbert, zonder uitstel. Gerammel dat plots opkomt na een kuil, samen met een verzakte hoek van de carrosserie, is het klassieke beeld van een gebroken veer: rijd rustig naar de garage, want de gebroken winding kan verschuiven en de band beschadigen.',
    ],
    checks: [
      'Wieg de stilstaande auto met de hand aan het spatbord boven elk wiel: piepen van bussen en steunen laat zich vaak ter plekke horen.',
      'Let op het patroon: klopt het op kleine golvingen — eerder de stabilisatorstangen; op losse kuilen — bussen en schokdempers.',
      'Bepaal of het geluid voor of achter zit en of het in het stuur komt: een klap die u in de handpalmen voelt en die zachter wordt als u het stuur licht op spanning houdt, wijst op speling in het stuurhuis.',
      'Druk elke hoek van de auto omlaag en laat los: de carrosserie moet zonder na te wippen terugkomen. Blijft hij deinen, dan is de schokdemper vermoeid.',
      'Kijk van onderaf achter het wiel zonder iets te demonteren: een gebroken veerwinding is vaak met het blote oog te zien, en u ziet meteen of één hoek van de auto lager staat.',
    ],
    appHelp:
      'De app Stuk volgt dezelfde vertakkingen als een monteur bij de eerste inspectie: wat voor geluid, op welke oneffenheden, voor of achter, komt het in het stuur. De opname zorgt dat details tot het bezoek niet verloren gaan, en het rapport geeft waarschijnlijke oorzaken met percentages en een helder stoplicht: u kunt rijden, laat het deze week zien of laat het met spoed nakijken.',
    faq: [
      {
        q: 'Is rijden met een klopgeluid in het onderstel gevaarlijk?',
        a: 'Meestal betekent een klop geen directe storing: stabilisatorstangen en bussen slijten geleidelijk. Maar de speling groeit en sloopt de aangrenzende delen, dus een verstandige termijn voor de diagnose is één tot twee weken. Uitzonderingen zijn een klap in het stuur en het gerammel van een gebroken veer: daarmee binnen enkele dagen naar de garage.',
      },
      {
        q: 'Waarom klopt het op kleine oneffenheden terwijl grote kuilen stil blijven?',
        a: 'Dat is de typische handtekening van de stabilisatorstangen: hun kleine kogelgewrichten hameren juist op golvingen, klinkers en voegen, waar het onderstel vaak en met korte slag werkt. In een grote kuil is die speling niet altijd hoorbaar. Achter kloppen de achterste stabilisatorstangen en de bussen van de achteras op dezelfde manier.',
      },
      {
        q: 'Kan het iets anders zijn dan het onderstel?',
        a: 'Ja, en niet zelden. Een doffe klap achter komt van een losse krik of reservewiel in de bagageruimte, getik voorin bovenin van speling in het motorkapslot, gerammel van onderen van de uitlaatophanging. Één enkele bons bij het eerste wegrijden na lang stilstaan zijn aan de schijven vastgeplakte remblokken, en dat is onschuldig.',
      },
    ],
  },

  'gul-podshipnika-stupitsy': {
    h1: 'Brommend wiellager',
    metaTitle: 'Wiellager bromt: hoe herkent u het | Stuk',
    description:
      'Hoe een versleten wiellager klinkt, hoe u het van bandengeluid onderscheidt, welk wiel bromt en hoe lang u er nog mee kunt rijden.',
    intro: [
      'Het wiellager is het onderdeel waarop het wiel draait. Als het slijt, ontstaat een gelijkmatig brommen dat meegroeit met de snelheid: velen vergelijken het met een opstijgend vliegtuig of het zoemen van een transformator. Het begint nauwelijks hoorbaar vanaf 60–80 km/h, is na verloop van tijd bij elke snelheid te horen en komt uiteindelijk als trilling binnen.',
      'De moeilijkheid is het lager van bandengeluid te scheiden: ze brommen op elkaar lijkend. Er zijn twee betrouwbare tests zonder gereedschap. De eerste is het wegdek: bandengeluid verandert met het soort asfalt, een lagerbrom blijft overal gelijk. De tweede zijn rustige rijstrookwisselingen bij snelheid: verandert het brommen in een flauwe boog, dan is het vrijwel zeker een lager — en wel dat van de belaste kant.',
    ],
    causes: [
      { name: 'Versleten wiellager', likelihood: 'Het vaakst, als het brommen gelijkmatig is en het wegdek negeert' },
      { name: 'Bandengeluid (winter, terrein, ongelijkmatige slijtage)', likelihood: 'Heel vaak — de grote dubbelganger van het lager' },
      { name: 'Differentieel of kroonwiel (achterwiel- en vierwielaandrijving)', likelihood: 'Zeldzamer; de toon van dat brommen verandert met het gas' },
      { name: 'Steunlager van de cardanas', likelihood: 'Zelden, alleen bij auto’s met cardanas' },
    ],
    canRide: [
      'In de beginfase wel, maar met voorbehoud. Een versleten lager valt niet ineens uit elkaar: van het eerste brommen tot een kritieke toestand gaan meestal duizenden kilometers voorbij. Het proces gaat echter maar één kant op, en het einde is onaangenaam: speling in het wiel, een uitgesleten zitting en in het uiterste geval een naaf die tijdens het rijden vastloopt.',
      'De regel is daarom simpel: hoort u het brommen, laat de auto dan binnen één tot twee weken in de garage zien en stel lange, snelle ritten tot die tijd uit. Werd het brommen ineens luider, kwam er trilling bij, heeft het wiel speling of trekt de auto naar één kant — ga meteen naar de diagnose, en niet over de snelweg.',
    ],
    checks: [
      'Wegdektest: rijd hetzelfde stuk over verschillend asfalt. Bleef het brommen gelijk — eerder het lager; werd het zachter op glad wegdek — eerder de banden.',
      'Bochtentest: wissel op een lege weg bij 60–80 km/h rustig van rijstrook. Werd het brommen zachter bij een bocht naar rechts en luider naar links, dan wordt de rechterkant belast en is het rechterlager waarschijnlijk; en omgekeerd.',
      'Vrijloopcontrole: rijd op snelheid en laat in neutraal uitrollen. Bleef het brommen, dan draait de bron mee met de wielen en niet met de motor.',
      'Bekijk het loopvlak: zaagtandslijtage en plekken van ongelijkmatige slijtage maken banden luid en wijzen op de uitlijning.',
      'Houd na de rit voorzichtig uw hand bij de naven (zonder de remschijf aan te raken — die is heet): een duidelijk warmere naaf aan één kant is een extra aanwijzing.',
    ],
    appHelp:
      'De app Stuk stelt dezelfde controlevragen — over wegdek, bochten en uitrollen in vrijloop —, neemt het brommen op en beoordeelt het karakter: het gelijkmatige breedbandige ruisen van banden en een lagerbrom zien er in het spectrum anders uit. Het rapport geeft de kansen per oorzaak, de urgentie en een hint welke kant u de monteur moet noemen.',
    faq: [
      {
        q: 'Waarom verandert het brommen in bochten?',
        a: 'In een bocht verschuift het gewicht naar de buitenste wielen. Groeit het brommen bij een bocht naar links, dan is de rechterkant belast — dus bromt waarschijnlijk het rechterlager. Bij een bocht naar rechts andersom. Onthoud dit kenmerk en noem het in de garage: het halveert de zoektocht.',
      },
      {
        q: 'Hoe lang kunt u rijden met een brommend lager?',
        a: 'Eén getal is er niet: van de eerste symptomen tot gevaarlijke speling gaan meestal duizenden kilometers voorbij, maar het tempo van de slijtage is onvoorspelbaar. Een verstandig compromis: binnen één tot twee weken een afspraak maken en tot die tijd geen lange, snelle ritten plannen.',
      },
      {
        q: 'Kun je een lager met de banden verwarren?',
        a: 'Gemakkelijk — het is de meest gemaakte fout. Twee kenmerken scheiden ze: bandengeluid hangt af van het wegdek en verandert niet in bochten, terwijl een lagerbrom op elk asfalt gelijk is en reageert op gewichtsoverdracht in flauwe bochten.',
      },
    ],
  },

  'stuk-na-nerovnostyah': {
    h1: 'Kloppen op oneffenheden',
    metaTitle: 'Kloppen op oneffenheden: oorzaken en eigen controles | Stuk',
    description:
      'Kloppen op oneffenheden en kuilen: frequent op kleine golvingen, losse klappen in kuilen of een klap in het stuur. Welke delen schuldig zijn en of u kunt rijden.',
    intro: [
      'Een klopgeluid dat alleen op oneffenheden komt — voegen, klinkers, drempels — komt bijna altijd uit het onderstel. Bij het nemen van een hobbel veert het onderstel in en uit, en als er in een scharnier speling is ontstaan, slaat het onderdeel bij elke slag in zijn bevestiging. Bij auto’s ouder dan vijf tot zeven jaar is dat een gewoon verhaal, en meestal zijn goedkope slijtdelen de boosdoener, geen dure componenten.',
      'Het patroon van de klap perkt de verdachten in. Frequent dof getik op kleine golvingen vóór is de klassieker van de stabilisatorstangen; hetzelfde patroon achter zijn de achterste stabilisatorstangen of de bussen van de achteras (de rubberbussen waarmee de as aan de carrosserie zit). Losse klappen in kuilen zijn draagarmbussen of vermoeide schokdempers. Een apart geval is een klap in het ritme van het draaiende wiel die opkwam na een recente bandenwissel: dat kunnen losse wielbouten zijn, en die mogelijkheid controleert u als eerste.',
    ],
    causes: [
      { name: 'Stabilisatorstangen', likelihood: 'Het vaakst — frequent getik vóór op kleine oneffenheden' },
      { name: 'Achteronderstel: achterste stabilisatorstangen, asbussen', likelihood: 'Vaak — als de klap van achteren komt' },
      { name: 'Draagarmbussen of schokdempers', likelihood: 'Vaak — losse klappen in kuilen' },
      { name: 'Speling in het stuurhuis', likelihood: 'Zeldzamer — de klap komt recht in het stuur' },
      { name: 'Losse wielbouten', likelihood: 'Zelden — maar dit controleert u als eerste na een bandenwissel' },
    ],
    canRide: [
      'Met het typische kloppen van stabilisatorstangen of bussen kunt u rijden: deze delen begeven het niet plots, en één tot twee weken tot de diagnose verandert niets zolang u grote kuilen langzaam neemt. De onderstelcontrole zelf gaat snel: op de brug beweegt de monteur de scharnieren en vindt de speling in een paar minuten. Maanden rekken blijft onverstandig: een versleten scharnier geeft de klappen door aan de buurdelen en versnelt hun slijtage.',
      'Anders ligt het bij een ritmische klap in het tempo van het draaiende wiel in de eerste dagen na een bandenwissel: dat is een reden om bij de eerste gelegenheid te stoppen en de bouten van alle wielen met de sleutel na te lopen. Een wiel op losse bouten slaat de gaten in de velg uit en kan in het ergste geval tijdens het rijden loskomen. Ook een klap die in het stuur komt kan niet wachten: de besturing is een veiligheidsdeel en wordt binnen enkele dagen gecontroleerd.',
    ],
    checks: [
      'Zijn de wielen recent afgeweest of gewisseld, controleer dan éérst met de sleutel de bouten van alle wielen, vóór welke andere theorie ook.',
      'Let op het patroon van de klap: frequent getik op kleine golvingen en losse klappen in kuilen zijn verschillende delen, en dat detail bekort de zoektocht van de monteur meteen.',
      'Bepaal of de klap voor of achter zit: rijd langzaam met de ramen op een kier langs een muur of hek — het weerkaatste geluid is veel beter te horen.',
      'Houd het stuur op een slechte weg licht op spanning: wordt de klap die u in de handpalmen voelt zachter, dan lijkt het op speling in het stuurhuis, en dat is het waard om in de garage te melden.',
      'Sluit het eenvoudige uit: haal losse spullen uit de bagageruimte, controleer de bevestiging van reservewiel en krik, druk op de gesloten motorkap — een slot met speling tikt net als het onderstel.',
    ],
    appHelp:
      'De app Stuk stelt dezelfde vragen als deze pagina, alleen stap voor stap: wat voor klap precies, waar u hem hoort, hoe hij zich gedraagt op verschillende oneffenheden. Uit de antwoorden en de opname stelt hij een rapport samen met waarschijnlijke oorzaken en een urgentiestoplicht — daarmee is de keuze tussen morgen naar de garage of bij gelegenheid eenvoudiger.',
    faq: [
      {
        q: 'Waarom hoor ik de klap alleen op oneffenheden en op een gladde weg niet?',
        a: 'Speling in een onderstelscharnier laat zich alleen zien als het onderstel werkt: op een hobbel verschuift het deel in zijn bevestiging en slaat aan. Op glad asfalt zijn de veerslagen klein en zwijgt het versleten deel. Daarom gaat kloppen op oneffenheden vrijwel altijd over het onderstel en niet over de motor.',
      },
      {
        q: 'Ik heb net banden laten wisselen en nu klopt het. Toeval?',
        a: 'Waarschijnlijk niet. Een ritmische klap of gerammel in het tempo van het draaiende wiel in de eerste dagen na het afnemen van de wielen is de klassieker van losse bouten. De controle kost vijf minuten: de bouten van alle wielen met de sleutel nalopen. Na elke bandenwissel is het verstandig na 50–100 kilometer opnieuw na te trekken.',
      },
      {
        q: 'De stabilisatorstangen kloppen. Is dat urgent?',
        a: 'De stangen zelf zijn niet gevaarlijk — het zijn kleine staafjes die in het onderstel als eerste slijten, en de auto blijft goed bestuurbaar. Maar ernstiger delen kunnen op dezelfde manier kloppen, dus een diagnose binnen één tot twee weken is nodig: op de brug is de bron in minuten gevonden.',
      },
    ],
  },
};
