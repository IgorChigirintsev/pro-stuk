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

  'tikanie-dvigatelya': {
    h1: 'Tikkende motor',
    metaTitle: 'Motor tikt: normaal of slijtage, oorzaken | Stuk',
    description:
      'Waar het tikken van de motor vandaan komt: klepspeling, hydraulische stoters, normaal klepperen van injectoren of het uitlaatspruitstuk. Hoe u normaal van slijtage onderscheidt.',
    intro: [
      'Een gelijkmatig, snel tikken is het gewoonste motorgeluid dat er is, en het betekent lang niet altijd een defect. Bij motoren met directe inspuiting (TSI, GDI en dergelijke) en bij diesels klepperen de injectoren en de hogedrukpomp altijd — zo zijn ze gebouwd. Normaal klepperen heeft herkenbare kenmerken: het is koud en warm hetzelfde, buiten luider dan in het interieur, en het verandert door de jaren heen niet.',
      'Waakzaam moet u worden bij tikken dat na verloop van tijd luider wordt en op een warme motor beter hoorbaar is dan vroeger. Zo laat te grote klepspeling zich horen: de ruimtes tussen de delen van de klepaandrijving groeien door slijtage en de kleppen gaan met een slag werken. Aparte gevallen zijn tikken alleen in de eerste minuten na een koude start (meestal de hydraulische stoters, die met oliedruk de overtollige speling wegnemen) en klepperen met uitlaatgeur dat buiten luider is — de handtekening van een doorgebrande spruitstukpakking.',
    ],
    causes: [
      { name: 'Normaal klepperen van injectoren (directe inspuiting, diesel)', likelihood: 'Heel vaak — als het geluid altijd hetzelfde is' },
      { name: 'Te grote klepspeling', likelihood: 'Vaak — als het tikken met de tijd luider is geworden' },
      { name: 'Hydraulische stoters bij koude motor', likelihood: 'Vaak — als het alleen de eerste minuten na de start tikt' },
      { name: 'Pakking of scheur in het uitlaatspruitstuk', likelihood: 'Als het klepperen buiten luider is en het naar uitlaatgas ruikt' },
      { name: 'Distributieketting of de spanner ervan', likelihood: 'Zeldzamer — geritsel of geratel aan de voorkant van de motor' },
    ],
    canRide: [
      'Met tikken kunt u vrijwel altijd rijden: onder de typische oorzaken zit er geen die vraagt om stoppen op de vluchtstrook. Normaal injectorklepperen en het ochtendtikken van de stoters hebben helemaal geen reparatie nodig — zo werkt de motor.',
      'Maar groeiend tikken gaat niet vanzelf over. Kleppen met te grote speling werken met een slag en slijten sneller, dus plan het afstellen of het controleren van de stoters in de komende twee weken — in die tijd kunt u rustig rijden. Bij het uitlaatspruitstuk is de logica vergelijkbaar: u hebt één tot twee weken speling, maar de spleet groeit en de uitlaatgeur kan via de ventilatie het interieur in worden gezogen — en dat is wel schadelijk.',
    ],
    checks: [
      'Vergelijk de koude en de warme motor: tikken alleen in de eerste minuten na de start is het beeld van de stoters; een geluid dat warm beter hoorbaar is pleit voor klepspeling.',
      'Beoordeel het verloop uit uw geheugen: tikken dat al jaren onveranderd is, is eerder normaal; was het een half jaar geleden duidelijk zachter, dan is het slijtage en die groeit door.',
      'Luister van buiten en van binnen: normaal injectorklepperen is buiten duidelijk luider; kleptikken hoort u ook goed vanaf de bestuurdersstoel.',
      'Controleer het oliepeil met de peilstok: bij een laag peil neemt het tikken van stoters en klepaandrijving toe, en bijvullen tot het streepje is soms meteen te horen.',
      'Ruik bij de open motorkap: uitlaatgeur samen met frequent klepperen wijst op het spruitstuk — daarmee binnen één tot twee weken naar de garage.',
    ],
    appHelp:
      'De app Stuk verheldert het belangrijkste — is het tikken met de tijd luider geworden en hoe gedraagt het zich koud en warm — en met de opname vergelijkt u het met typische voorbeelden. Het rapport geeft waarschijnlijke oorzaken met percentages en een conclusie als stoplicht: normaal, een afspraak deze week of zonder uitstel een diagnose.',
    faq: [
      {
        q: 'Waarom tikken diesels en motoren met directe inspuiting altijd?',
        a: 'Bij hen wordt de brandstof onder zeer hoge druk ingespoten, en elke injector geeft bij het openen een korte klik, waar het klepperen van de hogedrukpomp bij komt. Dat is normale werking: het geluid is bij elk weer hetzelfde, buiten luider dan binnen, en vraagt geen reparatie.',
      },
      {
        q: 'Wat is het afstellen van de klepspeling?',
        a: 'Tussen de delen van de klepaandrijving zit een kleine warmtespeling; door slijtage groeit die en gaan de kleppen klepperen. De monteur brengt de spelingen met stelplaatjes of stelschroeven terug op maat. Bij motoren met hydraulische stoters worden in plaats daarvan de stoters zelf en de oliedruk gecontroleerd.',
      },
      {
        q: 'Kan het tikken na een olieverversing verdwijnen?',
        a: 'Ja, als oude olie, een verkeerde viscositeit of een laag peil de schuldige waren: hydraulische stoters zijn erg gevoelig voor de staat van de olie. Maar een olieverversing herstelt versleten klepspeling niet — blijft het tikken daarna en groeit het door, dan is afstellen nodig.',
      },
    ],
  },

  'svist-remnya': {
    h1: 'Piepende riem',
    metaTitle: 'Riem piept: oorzaken, kunt u rijden en wat te doen | Stuk',
    description:
      'De multiriem piept: slijtage, te lage spanning, rollen of de koppeling van de aircocompressor. Hoe u de oorzaak inperkt aan de omstandigheden en wanneer het piepen om een garage vraagt.',
    intro: [
      'Een doordringend gepiep onder de motorkap komt vrijwel altijd van de multiriem — de riem die vanaf de krukas de dynamo, de waterpomp en bij veel auto’s ook de aircocompressor en de stuurbekrachtigingspomp aandrijft. Hij piept in één geval: als hij over de poelies slipt in plaats van er stevig op te grijpen.',
      'De oorzaken van het slippen vallen in twee groepen. De eerste is de riem zelf: het rubber is verouderd en hard geworden, de spanning is gezakt, of er is olie of koelvloeistof op het loopvlak gekomen. De tweede zijn de onderdelen die hij aandrijft: een klemmende rol, een zware koppeling van de aircocompressor of een waterpomp met een versleten lager belasten de riem zwaarder dan hij kan overbrengen. Wanneer het piepen precies opkomt, perkt het rijtje oorzaken flink in.',
    ],
    causes: [
      { name: 'Versleten of te slap gespannen riem', likelihood: 'Het vaakst' },
      { name: 'Slippen bij koude motor of vochtig weer', likelihood: 'Vaak — als het piepen na het warmdraaien weg is' },
      { name: 'Spanrol of geleiderol', likelihood: 'Niet zelden — bij het piepen komt gebrom of geritsel' },
      { name: 'Koppeling van de aircocompressor', likelihood: 'Als het gillen samenvalt met het inschakelen van de airco' },
      { name: 'Waterpomp of vrijlooppoelie van de dynamo', likelihood: 'Zeldzamer' },
    ],
    canRide: [
      'Is het piepen kort en leeft het alleen de eerste seconden na een koude start, rijd dan rustig door: dat is een reden om de riem bij gelegenheid te laten bekijken, niet om uw dagplanning te wijzigen.',
      'Met aanhoudend piepen of piepen onder belasting kunt u voorlopig ook rijden, maar maak binnen een week een afspraak: een slippende riem raakt oververhit en slijt lawineachtig, en breekt hij, dan staat de dynamo stil en op veel motoren ook de waterpomp. Twee signalen vragen om direct uitwijken en de motor afzetten: het accu-lampje dat gaat branden en een oplopende temperatuurmeter — beide betekenen dat de riem zijn onderdelen niet meer aandrijft.',
    ],
    checks: [
      'Onthoud wanneer het precies piept: de eerste seconden na de start, op het moment dat de airco inschakelt, bij het draaien aan het stuur of continu — dat is de belangrijkste sleutel.',
      'Schakel met draaiende motor de airco in: gillen precies op het moment van inschakelen wijst op een slippende compressorkoppeling.',
      'Bekijk met stilstaande motor de riem: dwarsscheurtjes, gerafelde randen en glimmend «gepolijste» flanken zijn tekenen van slijtage.',
      'Controleer of er op de riem en rond de poelies sporen van olie of koelvloeistof zitten: een vette riem piept ook als hij nieuw is, en sporen van koelvloeistof wijzen op de waterpomp.',
      'Luister of er naast het piepen een gelijkmatig gebrom of geritsel meeloopt met het motortoerental — zo klinkt het lager van een van de rollen.',
    ],
    appHelp:
      'De app Stuk verheldert het karakter van het geluid en de omstandigheden — piepen of brommen, koud of onder belasting, wel of niet gekoppeld aan de airco — en helpt met de opname het gillen van de riem te onderscheiden van het geritsel van een rol. Het rapport geeft waarschijnlijke oorzaken met percentages en een stoplicht: u kunt rijden, deze week naar de garage of stop.',
    faq: [
      {
        q: 'Wat gebeurt er als de riem onderweg breekt?',
        a: 'Het laden valt meteen weg: de dynamo staat stil en de auto rijdt op wat er in de accu zit — meestal enkele tientallen minuten. Bij motoren waar de riem ook de waterpomp aandrijft loopt de temperatuur snel op en is doorrijden onmogelijk. Daarom vervangt u een piepende riem beter op afspraak dan na een breuk.',
      },
      {
        q: 'Waarom komt het piepen op als de airco inschakelt?',
        a: 'De aircocompressor is de zwaarste verbruiker aan de riem. Bij het inschakelen legt zijn koppeling abrupt belasting op, en een versleten of slap gespannen riem gaat slippen. Gilt precies die seconde van inschakelen, controleer dan ook de koppeling zelf: slijtage daarvan geeft hetzelfde geluid.',
      },
      {
        q: 'Kun je iets op de riem spuiten zodat hij niet piept?',
        a: 'Liever niet. Sprays en huismiddelen zoals WD-40 geven een dag of twee rust, maar doordrenkt rubber slipt en veroudert sneller, terwijl de oorzaak — slijtage of te lage spanning — blijft. Betrouwbaarder is de riem samen met de rol vervangen: dat is een van de goedkopere klussen in de garage.',
      },
    ],
  },

  'gremit-pod-mashinoy': {
    h1: 'Rammelen onder de auto',
    metaTitle: 'Rammelen onder de auto: wat rammelt en is het erg | Stuk',
    description:
      'Het rammelt en klettert onder de auto: uitlaatophanging, hitteschild, carterbeschermplaat of katalysator. Hoe u de bron van het geluid vindt en wanneer het ernstig wordt.',
    intro: [
      'Rammelen van onder de auto klinkt verontrustend, maar de bron is meestal noch de motor, noch het onderstel: het is vastgeschroefd plaatwerk — de rubbers van de uitlaat, losgeraakte bouten van de carterbeschermplaat of het hitteschild, het dunne plaatje dat de bodem tegen de hitte van de uitlaat beschermt. Dat alles rammelt hard en resoneert door de carrosserie, waardoor het ernstiger lijkt dan het is: op het rijden en de werking van de auto hebben zulke geluiden geen invloed.',
      'Er zijn ook valse sporen: wat «onder de auto» rammelt is vaak de bagageruimte — de krik, de wielsleutel, een slecht vastgezet reservewiel — of interieurplastic, waarvan het geluid lastig te plaatsen is. Slechts één scenario is echt verontrustend: een helder rammelen dichter bij de motor samen met vermogensverlies of een veranderde uitlaatgeur. Zo klinkt een uiteengevallen katalysator — het keramische filter voor uitlaatgassen waarvan de brokstukken in de eigen behuizing rammelen — en met die mogelijkheid moet u niet wachten.',
    ],
    causes: [
      { name: 'Uitlaatophanging of carterbeschermplaat', likelihood: 'Het vaakst — metalig rammelen op oneffenheden' },
      { name: 'Hitteschild van het uitlaatsysteem', likelihood: 'Vaak — helder rammelen bij bepaalde toerentallen' },
      { name: 'Krik, reservewiel of lading in de bagageruimte', likelihood: 'Vaak — dof gebonk achter, «er rolt iets»' },
      { name: 'Interieurplastic: panelen en piepjes', likelihood: 'Vaak — het geluid zit dichterbij dan het lijkt' },
      { name: 'Uiteengevallen katalysator', likelihood: 'Zeldzamer — als met het rammelen het vermogen wegviel' },
    ],
    canRide: [
      'In de meeste gevallen wel, en zonder bijzondere beperkingen: een rammelend hitteschild, losse uitlaatrubbers of bouten van de beschermplaat zijn een kwestie van comfort, niet van veiligheid. De reparatie duurt meestal minuten: aandraaien of met een beugel vastzetten. Het enige om zeker van te zijn is dat de uitlaat niet doorhangt: een pijp die bijna het asfalt raakt kunt u niet negeren, de ophanging daarvan wordt meteen hersteld.',
      'Gaat het rammelen samen met vermogensverlies, een veranderde uitlaatgeur of het motorstoringslampje, ga dan binnen enkele dagen naar de diagnose: keramiekbrokjes van een uiteengevallen katalysator kunnen de motor in worden gezogen, en dat is al een dure reparatie. Draai de motor tot de controle niet hoog op.',
    ],
    checks: [
      'Haal alles uit de bagageruimte, controleer de bevestiging van reservewiel en krik, druk de hoedenplank aan — en rijd hetzelfde stuk weg opnieuw. Is het geluid weg, dan is de zaak afgedaan.',
      'Breng bij stilstaande auto het toerental rustig omhoog: het rammelen van een hitteschild komt meestal bij bepaalde toerentallen en is ter plekke hoorbaar, zonder enige oneffenheid.',
      'Vraag een passagier om tijdens het rijden verdachte interieurpanelen met de hand aan te drukken: verdwijnt het geluid, dan zijn het piepjes van het interieur en niet de bodem.',
      'Let op het vermogen en de uitlaatgeur: trekt de auto slechter op of is de geur veranderd, dan is dat de katalysatorvariant — daarmee binnen enkele dagen naar de monteur.',
      'Kijk onder de auto zonder eronder te kruipen: een doorhangende uitlaat, een loshangende rand van de beschermplaat of een verbogen schild ziet u vaak al vanaf het wiel.',
    ],
    appHelp:
      'De app Stuk helpt het rammelen aan de bron te koppelen: waar komt het geluid vandaan, volgt het het motortoerental of de oneffenheden, wat gebeurt er met het vermogen. Uit de antwoorden en de opname toont hij waarschijnlijke oorzaken met percentages en een urgentiestoplicht — handig om onschuldig plaatwerk nog vóór de garage van de katalysator te onderscheiden.',
    faq: [
      {
        q: 'Is rijden gevaarlijk als er iets onder de auto rammelt?',
        a: 'Meestal niet: losse uitlaatrubbers, de carterbeschermplaat en het hitteschild hebben geen invloed op de werking van de auto. Uitzonderingen zijn een doorhangende uitlaat die bijna het asfalt raakt, en rammelen samen met vermogensverlies: in het tweede geval kan de katalysator uiteengevallen zijn, en de controle mag niet wachten.',
      },
      {
        q: 'Wat is een hitteschild en kun je het gewoon weghalen?',
        a: 'Het is een dun metalen plaatje tussen de hete delen van de uitlaat en de bodem: het beschermt carrosserie, bedrading en alles boven de pijp tegen de hitte. Weghalen is geen goed idee — beter is aandraaien of met een beugel vastzetten: in de garage is dat een klus van enkele minuten.',
      },
      {
        q: 'Hoe weet ik dat het juist de katalysator is die rammelt?',
        a: 'Aan een helder rammelen of ritselen van onder de bodem, dichter bij de motor, dat toeneemt als u gas geeft, plus vermogensverlies of een veranderde uitlaatgeur. In de garage bevestigen ze die theorie door bij koude auto zacht op de katalysatorbehuizing te tikken: verkruimeld keramiek ritselt binnenin als grind.',
      },
    ],
  },

  'skrezhet-pri-tormozhenii': {
    h1: 'Schurend geluid bij het remmen',
    metaTitle: 'Schuren bij het remmen: blokken tot op het metaal | Stuk',
    description:
      'Schuren bij het remmen betekent meestal remblokken die tot op het metaal versleten zijn — daarmee rijdt u niet. Minder vaak is een steentje achter het stofschild de boosdoener.',
    intro: [
      'Schuren bij het remmen verdient meer aandacht dan welk gepiep ook. Meestal klinken zo remblokken die tot op het metaal versleten zijn: het wrijvingsmateriaal dat over de schijf loopt is op, en de stalen drager van het blok schraapt over de schijf. De remweg wordt langer, de schijf raakt bij elke stop verder beschadigd en het mechanisme kan vastlopen.',
      'Er zijn minder dramatische varianten. Een verbogen stofschild van de schijf of een steentje dat tussen schild en schijf klem zit geeft een heel vergelijkbaar schuren, maar beschadigt de remmen niet. En kort geschraap bij de eerste remstoten na een nacht buiten of na regen is slechts het roestlaagje dat de blokken in een paar minuten wegpoetsen. Het lastige is dat deze scenario’s op het gehoor makkelijk te verwarren zijn, dus aanhoudend schuren vraagt om inspectie, niet om gissen.',
    ],
    causes: [
      { name: 'Blokken tot op het metaal versleten', likelihood: 'Het vaakst — als het bij elke remstoot schuurt' },
      { name: 'Een steentje of een verbogen stofschild raakt de schijf', likelihood: 'Vaak; het geluid lijkt erop, maar het schaadt de remmen niet' },
      { name: 'Klemmende remklauw', likelihood: 'Als het wiel warm wordt en de auto naar één kant trekt' },
      { name: 'Roestlaagje na stilstand of regen', likelihood: 'Als het geluid na de eerste remstoten weg is' },
    ],
    canRide: [
      'Bij metaal op metaal moeten gewone ritten stoppen: alleen een voorzichtige rit naar de garage is aanvaardbaar, met ruime afstand en vroeg, rustig remmen. De vervanging uitstellen loont ook financieel niet: elke kilometer met schuren voegt de prijs van remschijven aan de rekening toe, die de stalen drager van het blok letterlijk afdraait.',
      'Kwam het schuren na stilstand op en verdween het na de eerste remstoten, rijd dan zonder beperkingen: dat is roest. Klinkt het geluid meer als schrapen, hoort u het ook zonder het pedaal in te trappen en wordt het wiel na de rit niet warm, dan zijn een stofschild of een steentje waarschijnlijk: u komt rustig aan, maar laat de auto binnen een dag of twee zien — alleen inspectie scheidt het onschuldige geval betrouwbaar van versleten blokken.',
    ],
    checks: [
      'Let op het patroon: geluid alleen bij het intrappen van de rem wijst op de blokken; aanhoudend schrapen tijdens het rijden eerder op het stofschild, een steentje of een klemmende klauw.',
      'Kijk tussen de spaken van de velg door: bij veel auto’s is het buitenste blok zonder demonteren zichtbaar. Wrijvingsmateriaal dunner dan 3–4 mm, of blank metaal in plaats daarvan, betekent onmiddellijk vervangen.',
      'Houd na een korte rit uw hand bij de wielen zonder de remschijf aan te raken: is één wiel duidelijk warmer dan de rest, dan lijkt dat op een klemmende remklauw — het deel dat de blokken tegen de schijf drukt.',
      'Let op het gedrag van de auto: naar één kant trekken bij het remmen of een brandlucht bij een wiel zijn tekenen waarmee u niet mag rijden — alleen voorzichtig naar de garage.',
      'Bekijk de remschijf door de velg: diepe groeven en een blauwige tint van het metaal zeggen dat het schuren al lang aan de gang is en de schijven al geleden hebben.',
    ],
    appHelp:
      'De app Stuk loopt dezelfde vragen langs — is het schuren constant, wordt het wiel warm, verdwijnt het geluid na de eerste remstoten — en helpt met de opname schuren te onderscheiden van het gillen van de slijtage-indicator. Het rapport geeft waarschijnlijke oorzaken en een stoplicht: u kunt rijden, laat het deze week zien of rijd alleen nog naar de garage.',
    faq: [
      {
        q: 'Wat is het verschil tussen schuren en piepende remmen?',
        a: 'Piepen is een hoge toon waarbij de remmen nog volledig werken: meestal is het de slijtage-indicator die tijdig waarschuwt. Schuren is een grof, laag geluid van metaal op metaal: het wrijvingsmateriaal is op en de stalen drager schuurt over de schijf. Piepen betekent een afspraak deze week, schuren het einde van gewone ritten.',
      },
      {
        q: 'Is alleen de blokken vervangen genoeg als het al schuurde?',
        a: 'Dat hangt af van de staat van de schijven: zelfs kort «op het metaal» rijden laat groeven achter. Ondiepe kunnen soms worden afgedraaid, diepe betekenen nieuwe schijven. Nieuwe blokken op een gegroefde schijf remmen slechter en slijten snel, dus de beslissing valt na inspectie.',
      },
      {
        q: 'Het schuren komt en gaat — is dat ook gevaarlijk?',
        a: 'Wisselend schuren komt vaak van een steentje tussen stofschild en schijf, en dat kan er vanzelf uit vallen. Reken daar niet op: hetzelfde komende en gaande geluid hoort ook bij de vroege fase waarin blokken tot op het metaal doorslijten. Een inspectie binnen een dag of twee brengt duidelijkheid.',
      },
    ],
  },

  'stuk-pri-razgone': {
    h1: 'Klap bij optrekken',
    metaTitle: 'Klap bij gas geven en gas loslaten: oorzaken | Stuk',
    description:
      'Waarom het klapt als u gas geeft of het gas loslaat: motorsteunen, homokineet, speling in de aandrijflijn of de automaat. Hoe u onschuldige speling onderscheidt van een klop in de motor.',
    intro: [
      'Een klap die precies opkomt op het moment dat u gas geeft of het gas loslaat, ontstaat meestal niet in de motor zelf, maar in de keten die de kracht naar de wielen brengt. Met de jaren stapelt zich daar speling op: de rubberen motorsteunen zakken door en laten de motor bij belastingwisseling schokken, de binnenste homokineet slijt (het scharnier op de as van bak naar wiel), kruiskoppelingen van de cardanas en bevestigingen van het subframe raken los. Elke keer dat de kracht van richting wisselt, wordt de speling met een slag opgenomen — vandaar een losse klap of gerammel.',
      'Een verhaal apart is de automaat: een schok met gerammel bij het overhalen van de selector tussen D en R of tijdens het schakelen wijst meestal op oude olie of slijtage. En een heel ander geval is een dof kloppen uit de diepte van de motor dat sneller wordt met het toerental en luider onder belasting: zo kloppen de krukaslagers. Dat is zeldzaam, maar de ernstigste variant, en die mag u niet missen.',
    ],
    causes: [
      { name: 'Motorsteunen of de binnenste homokineet', likelihood: 'Het vaakst — losse klap bij gas geven en loslaten' },
      { name: 'Speling in de aandrijflijn: kruiskoppelingen, subframebevestigingen', likelihood: 'Vaak bij achterwiel- en vierwielaandrijving — gerammel onder de vloer bij wegrijden' },
      { name: 'Automaat: oude olie of slijtage', likelihood: 'Als schok en gerammel samenvallen met het schakelen' },
      { name: 'Lagerklop uit de diepte van de motor', likelihood: 'Zelden — wordt sneller met het toerental, luider onder belasting' },
    ],
    canRide: [
      'Met de meeste oorzaken uit de tabel kunt u rijden: speling in steunen, scharnieren of aandrijflijn legt de auto niet plots stil zolang de klap los en zacht blijft. Maar de diagnose maanden uitstellen is onverstandig: een kapotte kruiskoppeling of een versleten homokineet valt uiteindelijk uiteen, en dat gebeurt tijdens het rijden. Een verstandige termijn voor de garage is één tot twee weken; rijd tot die tijd rustiger weg en doseer het gas soepeler.',
      'De uitzondering is een klop uit de diepte van de motor die sneller wordt bij gas geven en groeit onder belasting. Daarmee moeten gewone ritten stoppen: versleten lagers kunnen eindigen in een vastgelopen motor. Controleer eerst het oliepeil; daarna een bergingsdienst — of, als de garage vlakbij is, langzaam en zonder gas.',
    ],
    checks: [
      'Bepaal het moment precies: een klap exact bij gas geven en loslaten, en niet op oneffenheden, gaat over de krachtoverbrenging en niet over het onderstel. Dat detail bekort de zoektocht van de monteur meteen.',
      'Controleer het motoroliepeil met de peilstok. Bij elk geluid dat naar de motor klinkt is dat de eerste stap: bij een laag peil lijden de lagers als eerste.',
      'Rammelt het bij het schakelen, controleer dan peil en staat van de automaatolie: donkere vloeistof met brandlucht is een veelvoorkomende oorzaak van schokken, en soms lost verversen het op.',
      'Luister waar het geluid vandaan komt — van onder de motorkap, uit het midden van de vloer of vanaf een wiel — en of het terugkomt bij het schakelen. Noteer die waarnemingen voor de garage.',
      'Doe de zachte test: blijft de klap uit bij zacht intrappen en loslaten van het gas en komt hij terug bij een abrupte beweging, dan is het klassieke speling, en tot de reparatie volstaat rustig rijden.',
    ],
    appHelp:
      'De app Stuk stelt dezelfde precieze vragen — wanneer klapt het precies, verandert het geluid met toerental en versnellingen — en helpt met de opname het gerammel van speling te scheiden van een diepe motorklop. Het rapport geeft waarschijnlijke oorzaken met percentages en een heldere conclusie: u kunt rijden, plan een garagebezoek of stop.',
    faq: [
      {
        q: 'Waarom klapt het juist bij gas geven en loslaten?',
        a: 'Bij een belastingwisseling keert de kracht van richting om en worden alle spelingen in motorsteunen, scharnieren en aandrijflijn met een slag opgenomen. Zolang de auto gelijkmatig rijdt liggen de delen tegen elkaar aan en verraadt de speling zich niet — daarom hoort u de klap alleen bij het werken met het gaspedaal.',
      },
      {
        q: 'Hoe weet ik dat het de motor zelf is en dat het ernstig is?',
        a: 'Het alarmsignaal is een dof kloppen uit de diepte van de motor dat sneller wordt met het toerental en luider onder belasting, bijvoorbeeld bergop. Zo kloppen de krukaslagers. Stop dan met rijden, controleer het oliepeil en laat de auto met een bergingsdienst naar de garage brengen.',
      },
      {
        q: 'Kan een automaat een klap bij optrekken veroorzaken?',
        a: 'Ja. Een schok of gerammel op het moment van schakelen, of bij het overhalen van de selector tussen D en R, is een typisch teken van oude olie of slijtage van de bak. Begin met het controleren van peil en staat van de olie; verzet de selector tot de reparatie alleen bij volledig stilstaande auto met ingetrapte rem.',
      },
    ],
  },

  'zvon-pri-razgone': {
    h1: 'Pingelen bij optrekken',
    metaTitle: 'Pingelen bij optrekken: detonatie of niet, wat te doen | Stuk',
    description:
      'Een metalige tik bij optrekken is meestal detonatie door de brandstof. Hoe u dat test met een andere tankstationketen en wanneer niet de motor maar het hitteschild of de katalysator de boosdoener is.',
    intro: [
      'De metalige tik bij optrekken — wat automobilisten pingelen noemen — blijkt meestal detonatie te zijn. Een deel van de brandstof in de cilinders verbrandt niet gelijkmatig maar explodeert, en de schokgolf klinkt als een heldere tik tegen de wanden van de motor. Het best hoorbaar is dat onder belasting: bergop, bij inhalen, bij optrekken vanuit lage toeren in een hoge versnelling. De meest voorkomende oorzaak is prozaïsch — benzine met een lager octaangetal dan de fabrikant voorschrijft, of simpelweg een slechte tankbeurt.',
      'Het tikken hoeft niet uit de motor te komen. Een losgeraakt hitteschild — het dunne plaatje boven de uitlaat — rammelt bij bepaalde toerentallen, en verkruimeld katalysatorkeramiek ritselt en tinkelt onder de bodem. Het verschil zit in de koppeling: detonatie hangt aan de belasting en verdwijnt bij rustig rijden, terwijl een schild bij «zijn» toerental zelfs op een stilstaande auto tinkelt als u gas geeft.',
    ],
    causes: [
      { name: 'Detonatie: brandstof met te laag octaangetal', likelihood: 'Het vaakst — tikken onder belasting, vooral bergop' },
      { name: 'Koolaanslag in de verbrandingskamers of de klopsensor', likelihood: 'Als een ander tankstation niet hielp' },
      { name: 'Hitteschild van het uitlaatsysteem', likelihood: 'Vaak — rammelen bij bepaalde toerentallen, los van de belasting' },
      { name: 'Uiteengevallen katalysator', likelihood: 'Zeldzamer — tinkelen en ritselen onder de bodem, het vermogen zakt' },
    ],
    canRide: [
      'Met zeldzame vlagen van pingelen komt u er wel, maar belast de motor ondertussen niet: trek rustig op, neem hellingen in een lagere versnelling, trek niet vanuit lage toeren in een hoge versnelling. De eerste stap is tanken met een octaangetal niet lager dan voorgeschreven, bij voorkeur bij een andere keten: het pingelen verdwijnt vaak met één tankbeurt.',
      'Aanhoudende detonatie zijn slagen op de zuigers bij elke acceleratie, en dat sloopt de motor geleidelijk: zuigers, veren en de koppakking lijden eronder. Is het pingelen na een andere brandstof niet weg, stel de diagnose dan niet uit. Het rammelen van een schild is daarentegen puur een akoestisch ongemak: daarmee rijdt u zonder beperkingen en laat u het plaatje bij het eerstvolgende garagebezoek vastzetten.',
    ],
    checks: [
      'Tank een volle tank met een octaangetal niet lager dan voorgeschreven, bij een ander tankstation. Verdwijnt het pingelen binnen één of twee tanks, dan lag het aan de brandstof.',
      'Controleer de koppeling met de belasting: pingelen dat opkomt bergop, bij inhalen en bij stevig gas maar afneemt bij rustig optrekken is de handtekening van detonatie.',
      'Geef gas in neutraal bij stilstaande auto: komt het tikken of rammelen bij bepaalde toerentallen ook zonder belasting op, dan is het hitteschild waarschijnlijker.',
      'Kijk in het instructieboekje of op de tankklep welke benzine wordt aanbevolen: voor veel motoren voldoet een laag octaangetal niet meer, ook al is het formeel toegestaan.',
      'Let op het vermogen en op geluiden onder de bodem: ritselen en tinkelen van onderen samen met slapper optrekken is een reden om de katalysator zonder uitstel te laten controleren.',
    ],
    appHelp:
      'De app Stuk helpt met dezelfde vragen — wanneer tikt het, volgt het geluid de belasting of het toerental — en met de opname onderscheidt u de heldere tik van detonatie van het rammelen van een blikken schild. Het rapport geeft waarschijnlijke oorzaken met percentages en een conclusie: u kunt rijden, plan een garagebezoek of stop liever.',
    faq: [
      {
        q: 'Wat betekent «pingelen»?',
        a: 'Het is de oude naam voor het tikken bij detonatie; vroeger werd het aan de zuigerpennen toegeschreven. In werkelijkheid tikken die niet — het geluid ontstaat door de schokgolf van explosieve verbranding die van de cilinderwanden terugkaatst. De naam bleef, maar de oorzaak is altijd dezelfde: detonatie, geen versleten zuigerdelen.',
      },
      {
        q: 'Kun je met detonatie rijden?',
        a: 'Kort en behoedzaam: rustig optrekken, een lagere versnelling bergop, zonder volle belading en aanhanger. Elke vlaag zijn slagen op de zuigers, en aanhoudende detonatie eindigt in een dure motorreparatie. Heeft een andere brandstof het tikken binnen één of twee tanks niet weggenomen, dan is een diagnose nodig.',
      },
      {
        q: 'Helpt benzine met een hoger octaangetal?',
        a: 'De hoofdregel is nooit lager tanken dan de fabrikant voorschrijft. Het octaangetal geeft de weerstand van de brandstof tegen zelfontbranding aan, dus overstappen op een hogere kwaliteit neemt bij een klopgevoelige motor het tikken vaak weg. Helpt zelfs dat niet, dan wordt de oorzaak — koolaanslag of de klopsensor — in de garage gezocht.',
      },
    ],
  },

  'gul-pri-povorote': {
    h1: 'Brommen in de bocht',
    metaTitle: 'Brommen in de bocht: wiellager of stuurbekrachtiging | Stuk',
    description:
      'Waar het brommen in de bocht vandaan komt: een versleten wiellager, een jankende stuurbekrachtigingspomp of bandengeluid. Hoe u de kant bepaalt en of het gevaarlijk is.',
    intro: [
      'Bij brommen in de bocht moet u meteen twee scenario’s scheiden: brommen bij snelheid dat in de ene bocht luider en in de andere zachter wordt, en janken dat opkomt als u aan het stuur draait terwijl u stilstaat of parkeert. Ze klinken op elkaar lijkend, maar de bronnen zijn totaal verschillend: in het eerste geval het wiel, in het tweede de stuurbekrachtiging.',
      'Brommen bij snelheid dat van de bochtrichting afhangt is de klassieke handtekening van het wiellager — het lager waarop het wiel draait. In een bocht verschuift het gewicht naar de buitenste wielen, en een belast versleten lager bromt luider. Janken bij het draaien aan het stuur op lage snelheid komt meestal van de stuurbekrachtigingspomp, in de regel door een te laag vloeistofpeil. En bij auto’s met elektrische stuurbekrachtiging is een licht zoemen tijdens het sturen normaal en geen defect.',
    ],
    causes: [
      { name: 'Wiellager', likelihood: 'Het vaakst — als het brommen bij snelheid komt en in bochten verandert' },
      { name: 'Stuurbekrachtigingspomp of laag vloeistofpeil', likelihood: 'Vaak — als het jankt bij sturen in stilstand' },
      { name: 'Bandengeluid', likelihood: 'Vaak; het brommen hangt af van het wegdek, niet van de bocht' },
      { name: 'Normaal zoemen van elektrische stuurbekrachtiging', likelihood: 'Normaal bij auto’s zonder reservoir voor stuurvloeistof' },
      { name: 'Versleten homokineet', likelihood: 'Zeldzamer; geeft meestal ook klikken bij vol stuur' },
    ],
    canRide: [
      'Met een brommend wiellager kunt u rijden, maar het is krediet op korte termijn: stel de controle niet langer dan een week uit en verplaats lange, snelle ritten naar de tijd erna. Een lager dat uiteenvalt geeft het wiel speling en kan in een verwaarloosd geval vastlopen. Werd het brommen ineens luider of kwam er trilling bij — meteen naar de garage.',
      'Bij een jankende stuurbekrachtigingspomp controleert u eerst het vloeistofpeil in het reservoir: bijvullen sluit de zaak vaak af. Rijden kan, maar houd het stuur niet langer dan een paar seconden tegen de aanslag — in die stand werkt de pomp op maximale druk. Blijft het janken na bijvullen of zakt het peil opnieuw, dan is er een lek — binnen een week naar de garage.',
    ],
    checks: [
      'Onthoud in welke bochtrichting het brommen luider is. Luider bij een bocht naar links betekent dat de rechterkant wordt belast, dus is het rechterlager waarschijnlijker; en omgekeerd. Dat detail bekort de zoektocht in de garage aanzienlijk.',
      'Controleer het geluid in stilstand: komt het janken op als u op een parkeerplaats aan het stuur draait, dan hebben de wielen er niets mee te maken — de bron is de stuurbekrachtiging.',
      'Kijk onder de motorkap of er een reservoir voor stuurvloeistof zit. Is dat er, controleer het peil en vul zo nodig bij tot het streepje; is het er niet, dan is de bekrachtiging elektrisch en is een zacht, gelijkmatig zoemen daarvoor normaal.',
      'Beoordeel de afhankelijkheid van de weg: brommen dat op vers asfalt zachter en op ruw wegdek luider is komt meestal van de banden, niet van het lager.',
      'Bekijk het loopvlak: zaagtandslijtage (trapjes op de randen) of vlekkerige slijtage versterkt het brommen van de banden en wijst tegelijk op een verstelde uitlijning of vermoeide schokdempers.',
    ],
    appHelp:
      'De app Stuk stelt dezelfde vragen als de monteur bij de aanname: waar hoort u het brommen, verandert het in bochten, hangt het samen met sturen in stilstand. De opname helpt het geluid met typische voorbeelden te vergelijken, en het rapport geeft waarschijnlijke oorzaken en een duidelijk advies: rustig doorrijden, deze week een afspraak maken of zonder uitstel laten controleren.',
    faq: [
      {
        q: 'Waarom wordt het brommen maar in één bochtrichting luider?',
        a: 'In een bocht verschuift het gewicht van de auto naar de buitenste wielen. Is bijvoorbeeld het rechter wiellager versleten, dan bromt het onder belasting luider — dus bij een bocht naar links. Die eigenschap laat al vóór de garage zien welke kant u als eerste moet laten nakijken.',
      },
      {
        q: 'Mag je elke vloeistof in de stuurbekrachtiging bijvullen?',
        a: 'Nee. Het type vloeistof staat in het instructieboekje en vaak op de dop van het reservoir zelf. Eenmalig bijvullen met de juiste vloeistof is veilig, maar zakt het peil regelmatig, dan zit er ergens een lek — dat moet in de garage worden opgespoord en verholpen, bijvullen lost het niet op.',
      },
      {
        q: 'Er zit geen stuurreservoir onder de kap en toch bromt het in de bocht — wat is dat?',
        a: 'Waarschijnlijk is de stuurbekrachtiging elektrisch: het motortje zoemt zacht bij het sturen, en dat is normale werking. Andere signalen moeten u wél alarmeren: het stuur is zwaar geworden of wordt schoksgewijs zwaar, er is geknars, of het waarschuwingslampje van de besturing brandt. Daarmee binnen enkele dagen naar de garage.',
      },
    ],
  },

  'shchelchki-pri-povorote-rulya': {
    h1: 'Klikken bij het sturen',
    metaTitle: 'Klikken bij het sturen: homokineet of veerpootlager | Stuk',
    description:
      'Waarom het klikt bij het draaien aan het stuur: de buitenste homokineet, het veerpootlager of het kruiskoppelstuk van de stuurkolom. Hoe u ze aan het geluid herkent.',
    intro: [
      'Klikken bij het sturen wordt door één simpele vraag gescheiden: rijdt de auto op dat moment of staat hij stil? Knappen en klikken tijdens het rijden met ingeslagen stuur is de handtekening van de buitenste homokineet, het scharnier waarlangs de aandrijving het meesturende wiel bereikt. Hoe verder het stuur is ingeslagen en hoe abrupter u wegrijdt, hoe duidelijker het knappen. Het begint meestal met een gescheurde hoes — de rubberen manchet die het scharnier tegen vuil beschermt.',
      'Hoort u de klikken juist bij het sturen op een stilstaande auto, dan treft de homokineet meestal geen schuld. Geknars van boven, uit de wielkast, komt van het veerpootlager — het deel waarop de bovenkant van de veerpoot met het wiel meedraait. Klikken in het stuur zelf, ter hoogte van de voeten van de bestuurder, is het kruiskoppelstuk van de stuurkolom, het kleine scharnier tussen stuur en stuurhuis. Geen van deze varianten betekent de auto laten staan, maar geen ervan mag ook maanden blijven liggen.',
    ],
    causes: [
      { name: 'Buitenste homokineet', likelihood: 'Het vaakst — als het knapt tijdens rijden met ingeslagen stuur' },
      { name: 'Veerpootlager', likelihood: 'Vaak — als het knarst in stilstand, van boven uit de wielkast' },
      { name: 'Kruiskoppelstuk van de stuurkolom', likelihood: 'Als de klikken in het stuur zelf hoorbaar en voelbaar zijn' },
      { name: 'Stuurkogels of het stuurhuis', likelihood: 'Zeldzamer; die geven meestal een klap, geen klik' },
      { name: 'Binnenste homokineet, stabilisatorstangen', likelihood: 'Zeldzamer; worden bij dezelfde controle nagekeken' },
    ],
    canRide: [
      'Met een knappende homokineet kunt u rijden, maar rek de vervanging niet langer dan één tot twee weken: een versleten scharnier loopt in het ergste geval vast, en dan is het geen geluid meer maar een stilstaande auto. Tot de reparatie helpt een zachte omgang — niet abrupt wegrijden met het stuur tegen de aanslag.',
      'Het veerpootlager en het kruiskoppelstuk geven meer ongemak dan direct gevaar, maar de besturing is een veiligheidsdeel, dus laat de diagnose binnen enkele dagen doen: op de brug kost die een paar minuten. Reden om haast te maken: het stuur is rond de middenstand vaag geworden, de auto zwabbert in zijn rijstrook of de klikken zijn veel frequenter geworden.',
    ],
    checks: [
      'Scheid de scenario’s op een leeg parkeerterrein: komt het knappen op tijdens het rijden in een cirkel met ingeslagen stuur — of hoort u de klikken bij het sturen op de stilstaande auto?',
      'Bekijk de hoezen van de homokineten — de rubberen balgen aan de binnenzijde van elk voorwiel. Een scheur met rondgeslingerd vet is een vrijwel bevestigde diagnose.',
      'Vraag iemand om met uitgezette motor aan het stuur te draaien en leg uw handpalm op de veerpootbevestiging onder de kap: de klikken van een versleten lager voelt u met de hand.',
      'Beweeg met uitgezette motor het stuur heen en weer en luister ter hoogte van uw voeten: een duidelijke klik in de kolom verraadt het kruiskoppelstuk.',
      'Onthoud van welk wiel het knappen tijdens het rijden komt en in welke bocht het luider is — die details bekorten de zoektocht in de garage aanzienlijk.',
    ],
    appHelp:
      'In de app Stuk zijn deze vertakkingen samengebracht in een korte vragenboom: rijdt de auto of staat hij, waar komt het geluid vandaan, in welke staat zijn de hoezen. Het knappen kunt u met de telefoon opnemen en met voorbeelden vergelijken. Het rapport geeft waarschijnlijke oorzaken met een inschatting en een advies over de termijn: geen paniek, maar ook geen klikken die een maand blijven liggen.',
    faq: [
      {
        q: 'Wat is een homokineet en waarom klikt hij?',
        a: 'Het is het homokinetische scharnier dat de aandrijving overbrengt naar een wiel dat tegelijk stuurt. Komt er via een gescheurde hoes vuil binnen, dan slijten de kogels en loopbanen van het scharnier, en onder belasting met ingeslagen stuur begint het duidelijk te knappen.',
      },
      {
        q: 'Hoe lang kun je rijden met een klikkende homokineet?',
        a: 'Een exacte levensduur is er niet: bij de een houdt het scharnier maanden vol, bij de ander is het in een paar weken op. Een verstandig richtpunt: de vervanging niet langer dan één tot twee weken uitstellen en tot de reparatie niet abrupt wegrijden met ingeslagen wielen — dan is de belasting op het scharnier minimaal.',
      },
      {
        q: 'Waarom knarst het bij sturen op een stilstaande auto?',
        a: 'Bij stilstand draait het wiel niet en werkt de homokineet niet. Geknars ter plekke komt meestal van het veerpootlager — het geluid komt van boven, uit de wielkast — of van het kruiskoppelstuk van de kolom als het in het stuur zelf klikt. Beide delen controleert de garage in een paar minuten.',
      },
    ],
  },

  'stuk-v-dvigatele-na-holodnuyu': {
    h1: 'Kloppen bij koude motor',
    metaTitle: 'Motor klopt koud: oorzaken en wat te doen | Stuk',
    description:
      'Waarom de motor koud klopt en na het warmdraaien zwijgt: hydraulische stoters, zuigergroep, distributieketting. Wanneer het normaal is en wanneer het tijd is voor de garage.',
    intro: [
      'Een klopgeluid dat alleen in de eerste minuten na een koude start hoorbaar is en verdwijnt naarmate de motor warm wordt, is een van de meest voorkomende klachten bij auto’s met kilometers. Het goede nieuws: de meest verbreide oorzaak is hier ook de onschuldigste. Frequent tikken bovenin de motor komt meestal van de hydraulische stoters — kleine onderdelen die met oliedruk de overtollige speling in de klepaandrijving wegnemen. Zolang de motor koud is, is de olie dik en bereikt hij ze niet meteen, dus tikken ze een minuut of twee. Eenmaal warm: stil.',
      'Het karakter van het geluid zegt veel. Een dof kloppen uit de diepte wijst vaker op slijtage van de zuigergroep: een koude zuiger heeft iets meer ruimte in de cilinder en tikt tot de warmte hem uitzet. Geritsel of geratel aan de voorkant is de handtekening van een uitgerekte distributieketting — de ketting in de motor die de kleppen op tijd laat openen — of van de verzwakte spanner. En klepperen dat buiten luider is dan in het interieur, met uitlaatgeur onder de kap, wijst op een doorgebrande spruitstukpakking: de gassen ontsnappen door de spleet tot het metaal uitzet en hem sluit.',
    ],
    causes: [
      { name: 'Hydraulische stoters: dikke koude olie', likelihood: 'Het vaakst — als het bovenin tikt en na een paar minuten zwijgt' },
      { name: 'Slijtage van de zuigergroep', likelihood: 'Vaak bij hoge kilometerstanden — dof kloppen uit de diepte' },
      { name: 'Distributieketting of de spanner ervan', likelihood: 'Vaak — als er vooraan geritsel of geratel klinkt' },
      { name: 'Pakking of scheur in het uitlaatspruitstuk', likelihood: 'Als het klepperen buiten luider is en het naar uitlaatgas ruikt' },
      { name: 'Slippende multiriem', likelihood: 'Als het piepen of gillen is en geen kloppen' },
    ],
    canRide: [
      'Met het tikken van de stoters dat na het warmdraaien volledig verdwijnt rijdt u zonder beperkingen — dat is het gewone leven van een motor met kilometers. Hetzelfde geldt voor het piepen van de riem in de eerste seconden na de start: vervelend, maar niet gevaarlijk. In beide gevallen volstaat het het peil en de leeftijd van de olie te controleren en de auto bij de volgende geplande beurt aan de monteur te tonen.',
      'Het doffe kloppen van de zuigergroep is een kwestie van observeren: rijden kan, maar houd het olieverbruik in de gaten en vertel de monteur bij het volgende bezoek over het geluid. Met het geritsel van de distributieketting mag u niet rekken: diagnose binnen één tot twee weken, want een overgeslagen ketting betekent een dure motorreparatie — en tot die tijd geen abrupte starts bij koude motor. Algemene regel: verdwijnt het kloppen niet meer bij het warmdraaien of is het onder belasting hoorbaar, dan kan de diagnose niet langer wachten.',
    ],
    checks: [
      'Klok hoeveel minuten het geluid aanhoudt: één tot twee minuten en dan stilte is typisch voor de stoters; hoe langer de klop leeft, hoe noodzakelijker de inspectie.',
      'Controleer het oliepeil met de peilstok bij koude motor en denk terug wanneer de olie is ververst: een laag peil en oude olie versterken alle koude klopgeluiden.',
      'Bepaal het karakter van het geluid: frequent tikken bovenin, dof kloppen uit de diepte of geritsel aan de voorkant zijn drie verschillende verhalen met verschillende urgentie.',
      'Open de kap bij een draaiende koude motor en ruik: uitlaatgeur samen met klepperen wijst op het uitlaatspruitstuk.',
      'Zet de warme motor tien minuten af en start opnieuw: een echte «koude» klop komt na zo’n korte pauze niet terug.',
    ],
    appHelp:
      'De app Stuk loopt dezelfde vertakkingen langs — is het tikken, dof kloppen of geritsel en hoe snel verdwijnt het geluid — en de opname met de telefoon helpt een karakter vast te leggen dat lastig in woorden te vangen is. Het rapport geeft waarschijnlijke oorzaken met percentages en een heldere conclusie: rustig doorrijden, deze week een afspraak of de garage niet uitstellen.',
    faq: [
      {
        q: 'Het kloppen verdwijnt na het warmdraaien — mag ik het negeren?',
        a: 'Meestal wel: tikken van de stoters bij koude motor is gewoon en vraagt geen reparatie. Observeren loont wel: duurt het geluid nu langer dan een paar minuten, blijft het bij warme motor of komt het onder belasting op, dan is dat al reden voor een diagnose.',
      },
      {
        q: 'Helpen additieven «tegen kloppen»?',
        a: 'Giet ze er niet in: ze verhelpen de slijtage niet, ze maskeren het symptoom, waardoor het probleem later wordt opgemerkt. Wat echt helpt is iets anders — verse olie met de juiste viscositeit, een correct peil en, blijft het kloppen, afstellen of reparatie bij de monteur.',
      },
      {
        q: 'Waarom klopt het ’s winters koud harder?',
        a: 'Bij vorst is de olie dikker en doet er langer over om het bovenste deel van de motor te bereiken, dus tikken stoters en klepaandrijving duidelijker, en de spelingen van koude delen zijn iets groter. Wordt alles na het warmdraaien stil, dan is het hetzelfde beeld als in de zomer, alleen uitgerekt in de tijd.',
      },
    ],
  },

  'svist-pri-zapuske': {
    h1: 'Piepen bij het starten',
    metaTitle: 'Piepen bij het starten van de motor: oorzaken | Stuk',
    description:
      'Waarom de motor piept bij het starten: een slippende multiriem, rollen of de waterpomp. Wanneer het piepen onschuldig is en wanneer het tijd is voor een afspraak.',
    intro: [
      'Gillen of piepen in de eerste seconden nadat de motor is aangeslagen komt vrijwel altijd van de multiriem — de rubberen riem die vanaf de motor de dynamo, de waterpomp en de aircocompressor aandrijft. Koud of bij vochtig weer slipt de riem over de poelies en piept hij, en na een paar seconden is hij warm, droog en stil.',
      'Op dit moment is dat scenario niet gevaarlijk, maar normaal moet u het ook niet noemen: een nieuwe, correct gespannen riem piept zelfs bij vorst niet. Regelmatig ochtendpiepen is een teken dat de riem verouderd is, de spanning is gezakt of een van de rollen waarover hij loopt begint te slijten. Een verhaal apart zijn de geluiden van het starten zelf: geschraap of gezoem terwijl de startmotor de motor rondslingert. Dat is niet de riem meer, maar de startmotor of de starterkrans, en daarmee moet u niet wachten.',
    ],
    causes: [
      { name: 'Slippende multiriem bij koude motor', likelihood: 'Het vaakst — als het piepen in de eerste seconden verdwijnt' },
      { name: 'Versleten riem of gezakte spanning', likelihood: 'Vaak — als het piepen ook bij warme motor blijft' },
      { name: 'Lager van de span- of geleiderol', likelihood: 'Niet zelden — bij het piepen komt geritsel of gebrom' },
      { name: 'Waterpomp — als er bij de riem koelvloeistofsporen zitten', likelihood: 'Zeldzamer' },
      { name: 'Geschraap terwijl de startmotor draait: startertandwiel of krans', likelihood: 'Apart geval — het geluid komt vóór de motor aanslaat' },
    ],
    canRide: [
      'Met piepen dat een paar seconden na een koude start leeft en dan volledig verdwijnt kunt u rijden: er is geen directe dreiging. Toch is het goed de riem bij gelegenheid in de garage te laten bekijken — de inspectie kost een paar minuten, en riem met rol vervangen hoort bij de goedkope klussen.',
      'Verdwijnt het piepen niet meer bij het warmdraaien, komt het op bij het inschakelen van de airco of duurt het bij elke start langer en luider, maak dan binnen een week een afspraak: een versleten riem kan breken, en zonder hem staan de dynamo en op veel motoren de waterpomp stil. Gaat het accu-lampje branden of loopt de temperatuurmeter op — stop en zet de motor af.',
    ],
    checks: [
      'Klok de duur van het piepen: een paar seconden na de start is slippen bij koude motor; een geluid dat na het warmdraaien blijft is slijtage van riem of rollen.',
      'Zoek het verband met het weer: piepen alleen na regen, de wasstraat of bij vorst wijst op slippen en niet op het defect van een concreet onderdeel.',
      'Schakel met draaiende motor de airco of de achterruitverwarming in: komt het piepen op of wordt het luider, dan slipt de riem onder belasting.',
      'Bekijk met uitgezette motor de riem met een lamp: dwarsscheurtjes, gerafelde randen en glimmend «gepolijste» flanken zijn tekenen van slijtage.',
      'Kijk of er bij de poelies druppels of witte koelvloeistofsporen zitten: die wijzen op de waterpomp, en dan stelt u het garagebezoek beter niet uit.',
    ],
    appHelp:
      'De app Stuk stelt dezelfde vragen als de monteur bij de aanname: wanneer komt het piepen op, verdwijnt het na het warmdraaien, wat hoort u terwijl de startmotor draait. De opname helpt het gillen van de riem te onderscheiden van geschraap van de startmotor, en het rapport geeft waarschijnlijke oorzaken met percentages en een heldere conclusie: u kunt rijden, deze week naar de garage of stop.',
    faq: [
      {
        q: 'Waarom piept de motor alleen koud en bij vocht?',
        a: 'Koud en nat rubber van de riem grijpt slechter op de poelies, dus slipt hij in de eerste seconden na de start en piept. Naarmate hij opwarmt keert de grip terug en verdwijnt het geluid. Een nieuwe riem met een goede spanner kan ook deze omstandigheden aan, dus regelmatig ochtendpiepen is een reden voor inspectie.',
      },
      {
        q: 'Het piepen komt nu ook bij warme motor op. Is dat ernstig?',
        a: 'Het is een teken dat de slijtage het stadium heeft bereikt waarin de riem al onder gewone omstandigheden slipt. Rijden kan voorlopig, maar maak binnen een week een afspraak: een gebroken riem laat u zonder dynamo achter en op veel auto’s zonder waterpomp, en de rit eindigt bij de bergingsdienst.',
      },
      {
        q: 'Wat is het verschil tussen piepen na de start en geschraap tijdens het starten?',
        a: 'Piepen en gillen komen op nadat de motor al draait, en meestal is de riem de schuldige. Metalig geschraap hoort u eerder — in de seconden waarin de startmotor de motor rondslingert — en dat wijst op slechte aangrijping van het startertandwiel met de krans. Andere onderdelen, andere reparatie.',
      },
    ],
  },

  'vibratsiya-na-holostyh': {
    h1: 'Trillen bij stationair draaien',
    metaTitle: 'Trillen bij stationair: oorzaken en wat te doen | Stuk',
    description:
      'Waarom de auto stationair trilt: motorsteunen, ontstekingsuitval, valse lucht of een vervuild gasklephuis. Wat u kunt nakijken en of u kunt rijden.',
    intro: [
      'Een lichte trilling bij stationair draaien heeft elke auto, een diesel nog het meest. Het gaat hier om iets anders: om trillen dat u voelt in het stuur, de stoel en de binnenspiegel en dat er eerder niet was. De meest voorkomende oorzaak zijn de motorsteunen: de rubberblokken waarmee de motor in de carrosserie hangt en die zijn bewegingen dempen. Door de jaren wordt het rubber hard en scheurt het, en de trilling die de steunen vroeger opnamen gaat de carrosserie in.',
      'De tweede groep oorzaken: de motor zelf loopt onregelmatig. Ontstekingsuitval (als een cilinder telkens niet aanslaat — meestal door bougies of bobines), valse lucht via een gescheurde slang of een inlaatpakking, een vervuild gasklephuis of vervuilde injectoren maken het stationair toerental onrustig. Deze gevallen van de steunen onderscheiden is niet moeilijk: dan trilt of zwerft de naald van de toerenteller en gaat vaak het motorstoringslampje branden, terwijl bij versleten steunen de motor rond loopt — het is de carrosserie die trilt.',
    ],
    causes: [
      { name: 'Motorsteunen', likelihood: 'Het vaakst — vooral bij auto’s ouder dan 8–10 jaar' },
      { name: 'Ontstekingsuitval: bougies, bobines', likelihood: 'Vaak — als het toerental trilt en het storingslampje brandt' },
      { name: 'Valse lucht via een slang of inlaatpakking', likelihood: 'Vaak — als het toerental zwerft, soms met gesis' },
      { name: 'Vervuild gasklephuis of vervuilde injectoren', likelihood: 'Vaak boven de honderdduizend kilometer' },
    ],
    canRide: [
      'In de meeste scenario’s kunt u rijden: trillen bij stationair is niet het symptoom waarvoor u de auto op de vluchtstrook laat staan. Met versleten steunen hebt u één tot twee weken voor een rustige afspraak; maanden rekken is onverstandig — kapotte steunen voegen klappen toe bij wegrijden en schakelen en versnellen de slijtage van de buurdelen.',
      'Een verhaal apart is een motor die duidelijk hapert: schokkend trillen, een knipperend of brandend storingslampje, weggevallen vermogen. Ook daarmee kunt u rijden, maar voorzichtig en niet lang: onverbrande brandstof uit de uitval brandt na in de uitlaat en oververhit de katalysator, en die vervangen is duur. De diagnose is dan nodig binnen enkele dagen, niet bij gelegenheid.',
    ],
    checks: [
      'Steuntest: zet hem in de versnelling (bij automaat D) en houd de rem ingetrapt. De trilling van versleten steunen neemt in die stand meestal duidelijk toe.',
      'Kijk naar de toerenteller: staat de naald stil terwijl de auto trilt, dan pleit dat voor de steunen; trilt of zwerft de naald, dan loopt de motor onregelmatig.',
      'Schakel de airco in en let of het trillen verandert: onder extra belasting laten zwakke steunen en een onrustig stationair toerental zich duidelijker zien, en dat detail helpt de monteur.',
      'Bekijk zonder iets te demonteren de dunne rubberslangen onder de kap: scheurtjes en losgeschoten slangetjes zijn een veelvoorkomende plek voor valse lucht.',
      'Denk terug wanneer de bougies zijn vervangen: een kilometerstand ver voorbij het interval maakt ze de eerste kandidaat bij uitval. Brandt het storingslampje, begin dan met het uitlezen van de foutcodes: die perken de zoektocht in.',
    ],
    appHelp:
      'De app Stuk stelt dezelfde vragen — neemt het trillen toe met een versnelling ingeschakeld, houdt het toerental stand, brandt het storingslampje — en verdeelt de waarschijnlijke oorzaken over percentages. Het rapport geeft een heldere conclusie: rustig doorrijden, deze week een afspraak of de auto binnen enkele dagen laten zien.',
    faq: [
      {
        q: 'Waarom trilt het alleen stationair terwijl de auto onderweg soepel loopt?',
        a: 'Bij stationair draaien is het toerental het laagst en schommelt de motor op zijn steunen met een frequentie die de carrosserie goed doorgeeft aan het interieur. Bij hoger toerental worden de bewegingen kleiner en minder voelbaar. Daarom verraden versleten steunen zich bij het stoplicht en niet op de snelweg.',
      },
      {
        q: 'Wat is ontstekingsuitval?',
        a: 'Dat is wanneer het mengsel in een van de cilinders af en toe niet ontsteekt — meestal door versleten bougies of een defecte bobine. De motor verliest op dat moment een deel van zijn vermogen en schokt, terwijl de onverbrande brandstof in de uitlaat nabrandt en de katalysator oververhit.',
      },
      {
        q: 'Helpt het reinigen van het gasklephuis?',
        a: 'Het helpt als de oorzaak daar ligt: aanslag verhindert het nauwkeurig doseren van lucht bij stationair draaien, en het toerental wordt onrustig. Maar reinigen is geen wondermiddel: bij versleten steunen of ontstekingsuitval blijft de trilling daarna precies hetzelfde.',
      },
    ],
  },

  'hlopki-v-glushitele': {
    h1: 'Knallen in de uitlaat',
    metaTitle: 'Knallen in de uitlaat: oorzaken en wat te doen | Stuk',
    description:
      'Waarom de uitlaat knalt: ontstekingsuitval, een doorgebrande uitlaat, het mengsel of de afstelling van de LPG-installatie. Wat knallen met de katalysator doet.',
    intro: [
      'Knallen of «schoten» uit de uitlaat betekenen dat een deel van de brandstof niet in de cilinders verbrandt, maar al in het uitlaatsysteem. Meestal is ontstekingsuitval de schuldige: een versleten bougie of een defecte bobine ontsteekt het mengsel niet, de onverbrande benzine komt in de hete uitlaat terecht en ontvlamt daar met de karakteristieke knal.',
      'De tweede groep oorzaken is het uitlaatsysteem zelf: een doorgebrande demper, pijp of pakking voegt aan de knallen een gebrul toe dat toeneemt als u gas geeft. Ook kan het mengsel verkeerd zijn door sensoren of injectoren, en bij auto’s met LPG zijn knallen op gas een typisch teken van een ontregelde afstelling. Alle scenario’s hebben één gemene deler: de onverbrande brandstof brandt na in de katalysator — het uitlaatdeel dat schadelijke gassen naverbrandt —, oververhit hem en maakt hem geleidelijk kapot, en een katalysator vervangen is duur.',
    ],
    causes: [
      { name: 'Ontstekingsuitval: bougies of bobines', likelihood: 'Het vaakst' },
      { name: 'Doorgebrande demper, pijp of uitlaatpakking', likelihood: 'Vaak — de knallen gaan samen met gebrul' },
      { name: 'Verkeerd mengsel: sensoren of injectoren', likelihood: 'Niet zelden' },
      { name: 'Ontregelde afstelling van de LPG-installatie', likelihood: 'Als de knallen alleen op gas optreden' },
      { name: 'Gebrul bij optrekken zonder trekkracht: de koppeling slipt', likelihood: 'Apart geval dat er qua geluid op lijkt' },
    ],
    canRide: [
      'Eén losse knal bij het loslaten van het gas is geen reden om te stoppen: naar huis of naar de garage komt u wel. Met regelmatige knallen kunt u ook rijden, maar plan de diagnose voor de komende dagen en niet voor over weken: elke knal is een portie onverbrande brandstof die in de katalysator nabrandt, en de rekening voor uitgesteld herstel groeit van goedkope bougies naar de prijs van een katalysator.',
      'Een bijzonder geval is een knipperend motorstoringslampje: zo waarschuwt het systeem voor actieve ontstekingsuitval, die juist nu gevaarlijk is voor de katalysator. Met een knipperend lampje rijdt u alleen rustig en niet ver, zonder belasting, en gaat u zonder uitstel naar de garage. Ruikt u uitlaatgas in het interieur, rijd dan tot de reparatie met een raam op een kier en laat de auto niet warmdraaien in een gesloten garage: koolmonoxide is gevaarlijk.',
    ],
    checks: [
      'Let op wanneer het knalt: onder belasting bij optrekken, bij het loslaten van het gas of stationair — dat detail bekort de zoektocht van de monteur meteen.',
      'Kijk naar het motorstoringslampje: brandt het constant, dan een diagnose binnen enkele dagen; knippert het, dan treedt de uitval juist nu op en kan het bezoek niet wachten.',
      'Beoordeel hoe de motor loopt: onregelmatig lopen, trillen bij stationair en weggevallen vermogen samen met knallen wijzen op bougies, bobines of het mengsel.',
      'Luister naar de uitlaat: gebrul dat toeneemt als u gas geeft terwijl het vermogen normaal is, wijst op een gat in de demper of de pijp, niet op ontstekingsproblemen.',
      'Vergelijk bij een auto met LPG de werking op gas en op benzine: knallen alleen op gas is een vraag voor degene die de installatie heeft afgesteld.',
    ],
    appHelp:
      'De app Stuk verheldert de omstandigheden — knallen of gebrul, op gas of op benzine, met of zonder vermogensverlies — en helpt ontstekingsproblemen, een gat in de uitlaat en een slippende koppeling te scheiden, die op het gehoor op elkaar lijken. Het rapport geeft waarschijnlijke oorzaken met percentages en een helder advies over hoe dringend de garage is.',
    faq: [
      {
        q: 'Waarom knalt het in de uitlaat als het probleem in de motor zit?',
        a: 'Als een bougie of bobine het mengsel in de cilinder niet ontsteekt, wordt de onverbrande benzine het uitlaatsysteem in geduwd. Daar treft ze roodgloeiende delen en brandt met een steekvlam na — dat geluid hoort u als een knal uit de uitlaat. De bron zit echter onder de motorkap, niet in de demper.',
      },
      {
        q: 'Waarom zijn knallen gevaarlijk voor de katalysator?',
        a: 'Een katalysator is bedoeld om restanten uitlaatgas na te verbranden, niet porties ruwe brandstof. De benzine die erin nabrandt jaagt de temperatuur boven de ontwerpwaarde, en de keramische honingraat smelt of verkruimelt. Het resultaat: vermogensverlies, rammelen onder de bodem en vervanging van de katalysator, een van de duurste klussen aan de uitlaat.',
      },
      {
        q: 'Mijn auto op LPG knalt op gas. Is dat gevaarlijk?',
        a: 'Ja, voor de gasinstallatie zijn knallen gevaarlijker dan voor de benzinemotor: een terugslag in het inlaatsysteem kan de kunststof delen en sensoren beschadigen. De gebruikelijke oorzaak is een ontregelde afstelling of versleten bougies. Verstandig is overschakelen op benzine en een afspraak maken bij een LPG-specialist.',
      },
    ],
  },
};
