import type { SymptomTr } from '../types';

/** Разборы симптомов по-итальянски. Структура — из русских файлов рядом. */
export const pages: Record<string, SymptomTr> = {
  'stuk-v-dvigatele': {
    h1: 'Battito nel motore',
    metaTitle: 'Il motore batte: cause, gravità e cosa fare | Stuk',
    description:
      'Perché il motore batte: dal ticchettio innocuo delle valvole alle bronzine usurate. Come riconoscere un battito pericoloso, se si può guidare e cosa controllare da soli.',
    intro: [
      'Il battito nel motore è il sintomo con la gamma di gravità più ampia: dietro la stessa parola si nascondono sia il ticchettio innocuo degli iniettori sia bronzine di banco usurate, con cui ogni chilometro avvicina la revisione. La buona notizia è che battiti diversi suonano in modo diverso e compaiono in condizioni diverse: da questi segni il cerchio delle cause si stringe in fretta.',
      'Le domande da cui parte qualunque motorista: dove batte (in alto sul motore o dal profondo), quando (a freddo, a caldo, sotto carico) e se il rumore cambia con i giri. Un ticchettio leggero e rapido dall’alto di solito è la distribuzione. Un battito sordo dal basso, che accelera quando si dà gas e cresce sotto carico, è la variante preoccupante.',
    ],
    causes: [
      { name: 'Gioco valvole eccessivo o punterie idrauliche', likelihood: 'Molto spesso — la causa tipica del ticchettio dall’alto' },
      { name: 'Ticchettio normale degli iniettori (iniezione diretta e diesel)', likelihood: 'Frequente — e non è un guasto' },
      { name: 'Organi accessori: pulegge, staffe, frizione del compressore del clima', likelihood: 'Frequente quando il battito non dipende dal gas' },
      { name: 'Detonazione in accelerazione (battito in testa)', likelihood: 'Frequente dopo un rifornimento con benzina a basso numero di ottano' },
      { name: 'Bronzine di banco e di biella', likelihood: 'Più raro, ma è lo scenario pericoloso' },
    ],
    canRide: [
      'Dipende dal carattere del battito. Con un ticchettio regolare dall’alto si può guidare: la distribuzione si consuma in mesi, non in un viaggio — ma fissa la registrazione entro un paio di settimane. Con il ticchettio degli iniettori su un motore a iniezione diretta non c’è nulla da fare: è il normale funzionamento dell’impianto di alimentazione.',
      'Un battito sordo dal profondo del motore, che accelera con i giri e diventa più forte sotto carico, è un motivo per fermarsi. Così suonano le bronzine usurate — i cuscinetti su cui gira l’albero motore. Continuare può finire con una bronzina girata o un motore grippato; meglio non raggiungere l’officina con le proprie forze e chiamare il carro attrezzi.',
    ],
    checks: [
      'Controllare il livello dell’olio con l’astina: un livello basso accompagna e amplifica i battiti del motore, e un battito di bronzine con pressione dell’olio bassa peggiora in fretta.',
      'Ascoltare da dove arriva il suono: mettiti davanti al cofano aperto — il ticchettio delle valvole si sente in alto, il battito delle bronzine è sordo e viene dal profondo, dal basso.',
      'Dare gas dolcemente in folle: un battito che accelera con i giri e suona più forte sotto carico è più serio di uno che vive per conto suo.',
      'Ripensare all’ultimo rifornimento: un tintinnio metallico in accelerazione dopo una benzina dubbia somiglia alla detonazione e spesso se ne va con un pieno di carburante buono.',
      'Guardare se è accesa la spia della pressione olio: l’oliatore rosso insieme al battito significa spegnere il motore subito.',
    ],
    appHelp:
      'L’app Stuk ti guida attraverso le stesse domande che pone un motorista, registra il suono e ne valuta spettro e ritmo: con quale frequenza arrivano i colpi e come questo si rapporta ai giri — per un battito di valvole e uno di albero motore il rapporto è diverso. Nel rapporto trovi cause probabili con percentuali, il semaforo dell’urgenza e frasi pronte per il dialogo in officina.',
    faq: [
      {
        q: 'Perché il motore batte solo a freddo?',
        a: 'Finché il motore non è caldo, i giochi tra i componenti sono maggiori e l’olio denso non ha ancora raggiunto tutti gli organi. Punterie che ticchettano o un battito sordo dei pistoni nei primi minuti dopo l’avviamento a freddo, che sparisce del tutto con il riscaldamento, di solito è cosa da osservare e non un’emergenza.',
      },
      {
        q: 'Com’è il battito più pericoloso del motore?',
        a: 'Sordo, basso, dal profondo del motore; accelera con i giri e cresce sotto carico — accelerando o in salita. Così battono le bronzine di biella e di banco. Con questo suono meglio non guidare e portare l’auto dal meccanico il prima possibile.',
      },
      {
        q: 'Un battito può essere normale?',
        a: 'Sì. I motori a iniezione diretta (TSI, GDI) e i diesel ticchettano sempre con gli iniettori: il suono è identico a freddo e a caldo e si sente più forte all’esterno che in abitacolo. È funzionamento normale, non un guasto.',
      },
    ],
  },

  'skrip-tormozov': {
    h1: 'Freni che fischiano',
    metaTitle: 'I freni fischiano: pericoloso o no, cause e rimedi | Stuk',
    description:
      'Perché i freni fischiano: la patina di ruggine del mattino, l’indicatore di usura delle pastiglie o un problema ai dischi. Come distinguere un fischio innocuo da un avvertimento.',
    intro: [
      'Il fischio in frenata è quel raro caso in cui la causa più comune è anche la più innocua. Durante la notte, dopo la pioggia o un lavaggio, i dischi si coprono di una sottile patina di ruggine; le prime frenate la raschiano via — da qui il fischio. Se dopo un paio di minuti di marcia il rumore è sparito, non c’è nulla da fare: è la vita normale di qualunque auto con freni a disco.',
      'Altra cosa è il fischio a ogni frenata. Molte pastiglie hanno un indicatore di usura metallico: una lamella che tocca il disco apposta e stride quando il materiale d’attrito si è consumato fino al limite. È un avvertimento voluto: fai controllare le pastiglie prima che il fischio diventi stridore di metallo contro metallo — quello significa già dischi rovinati e spazio di frenata più lungo.',
    ],
    causes: [
      { name: 'Patina di ruggine dopo la sosta, la pioggia o il lavaggio', likelihood: 'Il più delle volte — se il fischio sparisce nelle prime frenate' },
      { name: 'Indicatore di usura: pastiglie al limite', likelihood: 'Frequente — se stride a ogni frenata' },
      { name: 'Pastiglie indurite o economiche, polvere tra pastiglia e disco', likelihood: 'Frequente; fastidioso, ma non pericoloso' },
      { name: 'Pastiglie consumate fino al metallo (stridore)', likelihood: 'Se l’avvertimento è stato ignorato' },
    ],
    canRide: [
      'Con il fischio del mattino, che sparisce dopo le prime frenate, si guida senza limiti: qualche pressione dolce sul pedale pulisce i dischi e la questione è chiusa fino alla prossima pioggia.',
      'Con uno stridio costante si può ancora guidare — i freni lavorano ancora a pieno — ma fissa il controllo per questa settimana e non per «un giorno o l’altro»: se stride l’indicatore di usura, la tappa successiva è lo stridore, pastiglie consumate fino al supporto e un conto che comprende anche i dischi. Metallo contro metallo è un segnale di stop: solo con prudenza fino all’officina, frenando presto e dolcemente.',
    ],
    checks: [
      'Cercare la regolarità: fischio solo nelle prime frenate dopo la sosta o con l’umidità è ruggine; a ogni frenata è motivo di controllo.',
      'Guardare tra le razze del cerchio: su molte auto la pastiglia esterna è visibile. Materiale d’attrito sotto i 3–4 mm chiede la sostituzione.',
      'Ascoltare se è un lato o entrambi: uno stridio da un solo lato indica più spesso l’indicatore di usura o una pinza che si blocca proprio lì.',
      'Verificare se c’è un sibilo in marcia senza frenare, che cambia sfiorando il pedale — è l’indicatore di usura che tocca il disco ancora prima della frenata.',
      'Osservare pedale e traiettoria: l’auto che tira da un lato in frenata, il pedale che pulsa o «lungo» sono cose più serie di un fischio e significano officina senza rinvii.',
    ],
    appHelp:
      'L’app Stuk separa lo scenario innocuo da quello preoccupante con le stesse domande — quando fischia e se il suono sparisce — e la registrazione aiuta a distinguere lo stridio acuto dell’indicatore dallo stridore metallico. Nel rapporto trovi cause probabili con percentuali e un semaforo: puoi guidare, in officina questa settimana o fermati.',
    faq: [
      {
        q: 'Perché i freni fischiano al mattino e con la pioggia?',
        a: 'Sui dischi in ghisa, in poche ore di aria umida si forma un sottile strato di ruggine. Le prime frenate lo raschiano via — da qui il fischio e il leggero raschiare, che spariscono subito. È normale e non richiede riparazioni.',
      },
      {
        q: 'Che cos’è l’indicatore di usura delle pastiglie?',
        a: 'Una lamella metallica sulla pastiglia che inizia a toccare il disco e a stridere forte quando il materiale d’attrito è al limite. È un avvertimento previsto dal progetto: se senti uno stridio costante, prenota la sostituzione delle pastiglie prima che cominci lo stridore.',
      },
      {
        q: 'Che differenza c’è tra fischio e stridore?',
        a: 'Fischio e stridio sono suoni acuti mentre i freni lavorano ancora pienamente. Lo stridore è un rumore ruvido di metallo contro metallo: il materiale d’attrito è finito e il supporto in acciaio della pastiglia sfrega il disco. Con lo stridore non si guida — solo con prudenza fino all’officina.',
      },
    ],
  },

  'gul-pri-dvizhenii': {
    h1: 'Ronzio in marcia',
    metaTitle: 'Ronzio in marcia: cuscinetto, gomme o cambio | Stuk',
    description:
      'Ronzio costante a una certa velocità: cuscinetto ruota, gomme, cambio o differenziale. Prove semplici senza officina — il test in folle e le curve dolci — per restringere la causa.',
    intro: [
      'Un ronzio costante che compare con la velocità e cresce insieme a essa arriva quasi sempre da una di due fonti: dal cuscinetto ruota — il supporto su cui la ruota gira — o dalle gomme. Si possono distinguere senza officina. Il cuscinetto ronza uguale su qualunque asfalto, ricorda un aereo che decolla in lontananza e spesso cambia nelle curve dolci. Le gomme invece reagiscono al fondo: su asfalto nuovo sono più discrete, su fondo ruvido più forti; ronzano soprattutto le gomme invernali, quelle da fuoristrada e quelle consumate in modo irregolare.',
      'Più di rado la fonte è la trasmissione: cambio, differenziale o albero di trasmissione sulle auto a trazione posteriore e integrale. Il test in folle mette ordine tra le ipotesi: accelera fino alla velocità a cui senti il ronzio, metti in folle e lasciati andare. Se il ronzio resta, è legato alla rotazione delle ruote — cuscinetti, gomme, fondo stradale. Se sparisce insieme ai giri del motore, bisogna cercare nel motore e in ciò che esso muove.',
    ],
    causes: [
      { name: 'Cuscinetto ruota', likelihood: 'Il più delle volte — ronzio costante, cresce con la velocità, il fondo non conta' },
      { name: 'Rumore delle gomme', likelihood: 'Frequente — dipende dal fondo; invernali e consumate sono più rumorose' },
      { name: 'Cambio o differenziale', likelihood: 'Più raro — l’ululato cambia con la marcia o premendo il gas' },
      { name: 'Albero di trasmissione (trazione posteriore e integrale)', likelihood: 'Ronzio con vibrazione nel pianale in una fascia stretta di velocità' },
      { name: 'Fruscio aerodinamico: guarnizioni, barre sul tetto', likelihood: 'Solo sopra i 70–90 km/h' },
    ],
    canRide: [
      'Con un cuscinetto che ronza si può guidare, ma non è un suono da trascinare per mesi: un cuscinetto usurato prende gioco — movimento libero della ruota — e in un caso trascurato può bloccarsi. Il piano ragionevole è una diagnosi entro la settimana, rimandando fino ad allora i viaggi lunghi a velocità alta. Se il ronzio è cresciuto di colpo o si è aggiunta una vibrazione, non rimandare.',
      'Il rumore delle gomme e quello aerodinamico sono questione di comfort, non di sicurezza: con essi si viaggia senza limiti. Anche l’ululato di cambio o differenziale non obbliga a fermarsi in corsia d’emergenza, ma non va tirato per le lunghe: preso presto, spesso basta un cambio d’olio, mentre una riparazione tardiva con alberi e ingranaggi costa parecchie volte di più.',
    ],
    checks: [
      'Test in folle: accelera fino alla velocità del ronzio, metti in folle e lasciati andare. Il ronzio resta — ruote e cuscinetti; sparisce con i giri — motore e trasmissione.',
      'Curve ampie su un rettilineo sicuro: se in un arco dolce da un lato il ronzio cala e dall’altro cresce, somiglia a un cuscinetto, e il lato ti dice quale.',
      'Confrontare i fondi: percorri un tratto di asfalto nuovo e uno ruvido. Una differenza netta di volume indica le gomme.',
      'Guardare il battistrada e controllare le pressioni: l’usura «a sega» — gradini sui bordi dei tasselli — rende le gomme rumorose e suggerisce assetto sballato o ammortizzatori stanchi.',
      'Col cambio manuale, verificare se l’ululato cambia con marce diverse alla stessa velocità; sulla trazione posteriore, se insieme al ronzio compare un tremolio nel pianale in una fascia stretta di velocità.',
    ],
    appHelp:
      'L’app Stuk ti guida attraverso le stesse domande — il ronzio resta in folle, cambia in curva e con il fondo — e aiuta a registrare il suono per confrontarne il carattere con casi tipici. Nel rapporto trovi cause probabili con percentuali e una conclusione: viaggia tranquillo, pianifica l’officina o fai controllare senza rinvii.',
    faq: [
      {
        q: 'Come distinguere il ronzio del cuscinetto dal rumore delle gomme?',
        a: 'Dalla reazione alla strada e alle curve. Il rumore delle gomme cambia con il fondo: su asfalto nuovo è più discreto, su ruvido più forte. Il cuscinetto ronza uguale ovunque, ma spesso risponde alle curve dolci, quando il carico passa sulla ruota esterna. Aiuta anche guardare il battistrada: gomme consumate in modo irregolare ronzano da sole.',
      },
      {
        q: 'È pericoloso guidare con un cuscinetto che ronza?',
        a: 'All’inizio no, ma non conviene tirarla per le lunghe: col tempo compare gioco, la ruota inizia a ballare e, nel caso estremo, il cuscinetto si blocca. Il controllo è semplice: sul ponte il meccanico fa girare le ruote e trova il mozzo rumoroso in pochi minuti. Tempo ragionevole per la visita: entro una settimana.',
      },
      {
        q: 'Perché il ronzio cambia in curva?',
        a: 'In curva il peso dell’auto passa sulle ruote esterne. Se ronza il cuscinetto destro, girando a sinistra il carico su di esso aumenta e il ronzio cresce; girando a destra si attenua. Questa regolarità aiuta a capire il lato prima ancora dell’officina: ricordala e dillo al meccanico.',
      },
    ],
  },

  'stuk-v-podveske': {
    h1: 'Rumore di colpi nelle sospensioni',
    metaTitle: 'Colpi nelle sospensioni: cosa batte e si può guidare | Stuk',
    description:
      'Cosa batte nelle sospensioni: tiranti della barra stabilizzatrice, silent block, scatola dello sterzo o una molla rotta. Come distinguere i colpi dal carattere e quando andare in officina.',
    intro: [
      'La sospensione di un’auto sono alcune decine di snodi, boccole in gomma e supporti, e con l’età il gioco — il movimento libero — in uno di essi è quasi inevitabile. Un componente allentato risponde a ogni asperità con un colpo: la sospensione si comprime e si distende, e il pezzo usurato sbatte nella propria sede. La buona notizia è che a cedere per primi sono di solito i componenti economici — i tiranti della barra stabilizzatrice, piccole aste con snodi che si consumano prima di tutto il resto.',
      'Il carattere del suono dice molto ancor prima del ponte. Un martellare sordo e frequente sulle piccole ondulazioni e sui giunti è la firma dei tiranti della barra. Colpi isolati nelle buche e sui dossi indicano i silent block — gli snodi in gomma con cui i bracci sono fissati alla scocca — o ammortizzatori stanchi. Un colpo che arriva dritto nel volante e si sente nei palmi è gioco nella scatola dello sterzo. E un cigolio «da letto vecchio» non è affatto un colpo, ma gomma secca nelle boccole: la cosa più innocua dell’elenco.',
    ],
    causes: [
      { name: 'Tiranti della barra stabilizzatrice', likelihood: 'Il più delle volte — martellare sordo e frequente sulle piccole asperità' },
      { name: 'Silent block dei bracci o ammortizzatori', likelihood: 'Frequente — colpi sordi isolati nelle buche' },
      { name: 'Gioco nella scatola dello sterzo', likelihood: 'Più raro — il colpo arriva nel volante e si sente nelle mani' },
      { name: 'Boccole della barra, silent block secchi (cigolio, non colpo)', likelihood: 'Frequente — soprattutto con freddo e umidità' },
      { name: 'Molla della sospensione rotta', likelihood: 'Raro — di colpo dopo una buca, con un angolo dell’auto abbassato' },
    ],
    canRide: [
      'Con la maggior parte dei colpi nelle sospensioni si può guidare: tiranti, silent block e boccole non cedono all’improvviso. Rimandare la diagnosi di mesi però non conviene — un componente rotto trasmette gli urti oltre e accelera l’usura dei vicini, e all’orecchio possono battere in modo simile anche cose più serie. Il tempo ragionevole è fissare il controllo entro una o due settimane e, fino ad allora, passare piano sulle buche grandi.',
      'Due scenari richiedono più attenzione. Un colpo che arriva nel volante riguarda lo sterzo, un organo di sicurezza: controllo nei prossimi giorni e, se il volante è diventato «vuoto» al centro o l’auto vaga nella corsia, senza rinvii. Uno sferragliare comparso di colpo dopo una buca, insieme a un angolo della scocca abbassato, è il quadro tipico di una molla rotta: fino all’officina guida dolcemente, perché la spira spezzata può spostarsi e danneggiare il pneumatico.',
    ],
    checks: [
      'Far oscillare l’auto ferma spingendo il parafango sopra ogni ruota: i cigolii di boccole e silent block spesso si riproducono lì per lì.',
      'Cercare la regolarità: batte sulle piccole ondulazioni — più probabile i tiranti; su buche isolate — silent block e ammortizzatori.',
      'Capire se il rumore è davanti o dietro e se arriva nel volante: un colpo sentito nei palmi che si attenua tenendo il volante leggermente in tensione indica gioco nella scatola dello sterzo.',
      'Spingere ogni angolo dell’auto verso il basso e rilasciare: la scocca deve tornare in posizione senza oscillare. Se continua a ballare, l’ammortizzatore è stanco.',
      'Guardare dietro la ruota dal basso, senza smontare nulla: una spira rotta spesso si vede a occhio nudo, e di rimando si nota se un angolo dell’auto è più basso.',
    ],
    appHelp:
      'L’app Stuk percorre gli stessi bivi di un meccanico alla prima ispezione: che suono è, su quali asperità, davanti o dietro, se arriva nel volante. La registrazione evita di perdere i dettagli fino alla visita, e nel rapporto trovi cause probabili con percentuali e un semaforo chiaro: puoi guidare, mostralo questa settimana o fallo controllare con urgenza.',
    faq: [
      {
        q: 'È pericoloso guidare con un colpo nelle sospensioni?',
        a: 'Il più delle volte un colpo non significa un guasto immediato: tiranti e silent block si consumano gradualmente. Ma il gioco cresce e finisce per rovinare i componenti vicini, quindi un tempo ragionevole per la diagnosi è una o due settimane. Le eccezioni sono il colpo nel volante e lo sferragliare di una molla rotta: con quelli, officina nei prossimi giorni.',
      },
      {
        q: 'Perché batte sulle piccole asperità mentre le buche grandi passano in silenzio?',
        a: 'È la firma tipica dei tiranti della barra: i loro piccoli snodi martellano proprio sulle ondulazioni, sul pavé e sui giunti, dove la sospensione lavora spesso e con escursione ridotta. In una buca grande quel gioco non sempre si sente. Dietro, i tiranti posteriori e i silent block del ponte battono allo stesso modo.',
      },
      {
        q: 'Può battere qualcosa che non sia la sospensione?',
        a: 'Sì, e non di rado. Un colpo sordo dietro lo dà il cric o la ruota di scorta non fissati nel bagagliaio; un ticchettio davanti in alto, il gioco nella serratura del cofano; un tintinnio in basso, i supporti dello scarico. Un unico «tonfo» alla prima partenza dopo una lunga sosta sono le pastiglie incollate ai dischi, ed è innocuo.',
      },
    ],
  },

  'gul-podshipnika-stupitsy': {
    h1: 'Ronzio del cuscinetto ruota',
    metaTitle: 'Cuscinetto ruota che ronza: come riconoscerlo | Stuk',
    description:
      'Come suona un cuscinetto ruota usurato, come distinguerlo dal rumore delle gomme, quale ruota ronza e per quanto si può guidare così.',
    intro: [
      'Il cuscinetto ruota è il componente su cui la ruota gira. Quando si usura compare un ronzio costante che cresce con la velocità: molti lo paragonano a un aereo in decollo o al ronzio di un trasformatore. Inizia appena percettibile dai 60–80 km/h, col tempo si sente a qualunque velocità e comincia ad arrivare come vibrazione.',
      'La difficoltà è separarlo dal rumore delle gomme: ronzano in modo simile. Ci sono due prove casalinghe affidabili. La prima è il fondo: il rumore delle gomme cambia con il tipo di asfalto, il ronzio del cuscinetto resta uguale ovunque. La seconda sono i cambi di corsia dolci a velocità: se in un arco ampio il ronzio cambia, quasi sicuramente è un cuscinetto — quello del lato caricato.',
    ],
    causes: [
      { name: 'Cuscinetto ruota usurato', likelihood: 'Il più delle volte, quando il ronzio è costante e ignora il fondo' },
      { name: 'Rumore delle gomme (invernali, tassellate, usura irregolare)', likelihood: 'Molto frequente — il grande sosia del cuscinetto' },
      { name: 'Differenziale o coppia conica (trazione posteriore e integrale)', likelihood: 'Più raro; il tono di quel ronzio cambia con il gas' },
      { name: 'Supporto centrale dell’albero di trasmissione', likelihood: 'Raro, solo su auto con albero di trasmissione' },
    ],
    canRide: [
      'All’inizio sì, ma con riserve. Un cuscinetto usurato non si distrugge di colpo: dal primo ronzio allo stato critico passano di solito migliaia di chilometri. Il processo però va in una sola direzione, e il finale è sgradevole: gioco nella ruota, sede rovinata e, nel caso estremo, un mozzo che si blocca in marcia.',
      'La regola quindi è semplice: notato il ronzio — auto in officina entro una o due settimane, viaggi lunghi ad alta velocità rimandati fino ad allora. Se il ronzio è cresciuto di colpo, è comparsa una vibrazione, la ruota ha gioco o l’auto tira da un lato, vai subito alla diagnosi, e non in autostrada.',
    ],
    checks: [
      'Prova del fondo: percorri lo stesso tratto su asfalti diversi. Il ronzio non è cambiato — più probabile il cuscinetto; si è attenuato sul fondo liscio — più probabili le gomme.',
      'Prova della curva: su strada libera a 60–80 km/h cambia corsia dolcemente. Il ronzio cala girando a destra e cresce girando a sinistra — si carica il lato destro, probabile il cuscinetto destro; e viceversa.',
      'Verifica in folle: accelera e lasciati andare in folle. Il ronzio è rimasto — la fonte gira con le ruote, non con il motore.',
      'Guardare il battistrada: l’usura «a sega» e le chiazze di usura irregolare rendono le gomme rumorose e rimandano all’assetto.',
      'Dopo il viaggio, avvicinare con cautela la mano ai mozzi (senza toccare il disco freno, che è caldo): un mozzo nettamente più caldo da un lato è un indizio in più.',
    ],
    appHelp:
      'L’app Stuk pone le stesse domande di controllo — sul fondo, sulle curve e sul veleggiare in folle —, registra il ronzio e ne valuta il carattere: il rumore a banda larga delle gomme e il ronzio di un cuscinetto appaiono diversi nello spettro. Nel rapporto trovi le probabilità delle cause, l’urgenza e un suggerimento su quale lato indicare al meccanico.',
    faq: [
      {
        q: 'Perché il ronzio cambia in curva?',
        a: 'In curva il peso passa sulle ruote esterne. Se girando a sinistra il ronzio cresce, il lato caricato è il destro — quindi ronza probabilmente il cuscinetto destro. Girando a destra, il contrario. Vale la pena ricordare questo segno e riferirlo in officina: dimezza la ricerca.',
      },
      {
        q: 'Per quanto si può guidare con un cuscinetto che ronza?',
        a: 'Non c’è una cifra unica: dai primi sintomi a un gioco pericoloso passano di solito migliaia di chilometri, ma la velocità dell’usura è imprevedibile. Compromesso ragionevole: fissare la diagnosi entro una o due settimane e non programmare lunghi viaggi veloci prima.',
      },
      {
        q: 'Si può confondere il cuscinetto con le gomme?',
        a: 'Facilmente — è l’errore più comune. Due segni li separano: il rumore delle gomme dipende dal fondo e non cambia in curva, mentre il ronzio del cuscinetto è uguale su qualunque asfalto e reagisce al trasferimento di carico nelle curve ampie.',
      },
    ],
  },

  'stuk-na-nerovnostyah': {
    h1: 'Colpi sulle asperità',
    metaTitle: 'Colpi sulle buche: cause e cosa controllare da soli | Stuk',
    description:
      'Colpi sulle asperità: martellare frequente sulle ondulazioni, colpi isolati nelle buche o un colpo nel volante. Quali componenti sono in causa e se si può guidare.',
    intro: [
      'Un colpo che compare solo sulle asperità — giunti, pavé, dossi — arriva quasi sempre dal treno di rotolamento. Passando un dosso la sospensione si comprime e si distende, e se in qualche snodo è comparso gioco, il pezzo sbatte nella propria sede a ogni escursione. Su auto di più di cinque-sette anni è cosa ordinaria, e la colpa è di solito di componenti di consumo economici, non di gruppi costosi.',
      'Il disegno del colpo restringe la lista dei sospetti. Un martellare sordo e frequente sulle piccole ondulazioni davanti è il classico dei tiranti della barra stabilizzatrice; lo stesso disegno dietro sono i tiranti posteriori o i silent block del ponte (le boccole in gomma con cui il ponte è fissato alla scocca). Colpi isolati nelle buche sono i silent block dei bracci o ammortizzatori stanchi. Caso a parte: un colpo a tempo con la rotazione della ruota comparso dopo un recente cambio gomme — possono essere bulloni allentati, e questa ipotesi si verifica per prima.',
    ],
    causes: [
      { name: 'Tiranti della barra stabilizzatrice', likelihood: 'Il più delle volte — martellare frequente davanti sulle piccole asperità' },
      { name: 'Sospensione posteriore: tiranti posteriori, silent block del ponte', likelihood: 'Frequente — se il colpo viene da dietro' },
      { name: 'Silent block dei bracci o ammortizzatori', likelihood: 'Frequente — colpi isolati nelle buche' },
      { name: 'Gioco nella scatola dello sterzo', likelihood: 'Più raro — il colpo arriva dritto nel volante' },
      { name: 'Bulloni delle ruote allentati', likelihood: 'Raro — ma è la prima cosa da controllare dopo un cambio gomme' },
    ],
    canRide: [
      'Con il tipico colpo di tiranti o silent block si può guidare: questi componenti non cedono all’improvviso, e una o due settimane fino alla diagnosi non cambiano nulla se passi piano sulle buche grandi. La diagnosi delle sospensioni è rapida: sul ponte il meccanico scuote gli snodi e trova il gioco in pochi minuti. Tirarla per mesi resta comunque una cattiva idea: uno snodo usurato trasmette gli urti ai componenti vicini e ne accelera l’usura.',
      'Diverso è un colpo ritmico, a tempo con la rotazione della ruota, nei primi giorni dopo un cambio gomme: è un motivo per fermarsi alla prima occasione e controllare il serraggio dei bulloni di tutte le ruote con la chiave. Una ruota su bulloni allentati rovina i fori del cerchio e, nel peggiore dei casi, può staccarsi in marcia. Nemmeno un colpo che arriva nel volante può aspettare: lo sterzo è un organo di sicurezza e si controlla nei prossimi giorni.',
    ],
    checks: [
      'Se le ruote sono state smontate o ruotate di recente, controlla per prima cosa il serraggio dei bulloni di tutte con la chiave, prima di qualunque altra ipotesi.',
      'Notare il disegno del colpo: un martellare frequente sulle ondulazioni e colpi isolati nelle buche sono componenti diversi, e questo dettaglio accorcia subito la ricerca del meccanico.',
      'Capire se il colpo è davanti o dietro: procedi piano con i finestrini socchiusi lungo un muro o una recinzione — il suono riflesso si sente molto meglio.',
      'Tenere il volante leggermente in tensione su una strada sconnessa: se il colpo sentito nei palmi si attenua, somiglia a gioco nella scatola dello sterzo, e vale la pena dirlo in officina.',
      'Escludere il semplice: togliere gli oggetti sciolti dal bagagliaio, controllare il fissaggio di ruota di scorta e cric, premere sul cofano chiuso — una serratura con gioco ticchetta come la sospensione.',
    ],
    appHelp:
      'L’app Stuk pone le stesse domande di questa pagina, solo passo dopo passo: che colpo è esattamente, dove si sente, come si comporta su asperità diverse. Dalle risposte e dalla registrazione costruisce un rapporto con cause probabili e semaforo dell’urgenza — con esso è più facile decidere se andare in officina domani o quando capita.',
    faq: [
      {
        q: 'Perché il colpo si sente solo sulle asperità e su strada liscia no?',
        a: 'Il gioco di uno snodo si manifesta solo quando la sospensione lavora: sul dosso il pezzo si sposta nella sede e sbatte. Su asfalto liscio le escursioni sono piccole e il componente usurato tace. Per questo un colpo sulle asperità parla quasi sempre del treno di rotolamento e non del motore.',
      },
      {
        q: 'Ho cambiato le gomme di recente ed è comparso un colpo. Coincidenza?',
        a: 'Probabilmente no. Un colpo ritmico o uno sferragliare a tempo con la rotazione della ruota nei primi giorni dopo lo smontaggio è il classico dei bulloni allentati. La verifica richiede cinque minuti: ripassare i bulloni di tutte le ruote con la chiave. Dopo ogni cambio gomme conviene ripetere il serraggio dopo 50–100 chilometri.',
      },
      {
        q: 'Battono i tiranti della barra stabilizzatrice. È urgente?',
        a: 'I tiranti in sé non sono pericolosi: sono piccole aste che si consumano per prime nella sospensione, e l’auto resta guidabile. Ma componenti più seri possono battere in modo simile, quindi serve una diagnosi entro una o due settimane: sul ponte la fonte si trova in pochi minuti.',
      },
    ],
  },

  'tikanie-dvigatelya': {
    h1: 'Motore che ticchetta',
    metaTitle: 'Il motore ticchetta: normale o usura, cause | Stuk',
    description:
      'Da dove viene il ticchettio del motore: gioco valvole, punterie idrauliche, ticchettio normale degli iniettori o collettore di scarico. Come distinguere il normale dall’usura.',
    intro: [
      'Un ticchettio regolare e rapido è il più comune dei rumori del motore, e non significa affatto sempre un guasto. Sui motori a iniezione diretta (TSI, GDI e simili) e sui diesel, iniettori e pompa ad alta pressione ticchettano sempre: sono fatti così. Il ticchettio normale ha segni riconoscibili: è identico a freddo e a caldo, si sente più forte all’esterno che in abitacolo e non cambia negli anni.',
      'Deve mettere in allarme un ticchettio che col tempo diventa più forte e a motore caldo si sente meglio di prima. Così si manifesta un gioco valvole eccessivo: gli spazi tra i componenti della distribuzione crescono con l’usura e le valvole iniziano a lavorare con un colpo. Casi a parte: il ticchettio solo nei primi minuti dopo l’avviamento a freddo (di solito le punterie idrauliche, componenti che con la pressione dell’olio eliminano il gioco in eccesso) e un ticchettio con odore di scarico, più forte all’esterno — la firma di una guarnizione del collettore di scarico bruciata.',
    ],
    causes: [
      { name: 'Ticchettio normale degli iniettori (iniezione diretta, diesel)', likelihood: 'Molto frequente — se il suono è sempre uguale' },
      { name: 'Gioco valvole eccessivo', likelihood: 'Frequente — se il ticchettio è diventato più forte col tempo' },
      { name: 'Punterie idrauliche a freddo', likelihood: 'Frequente — se ticchetta solo nei primi minuti dopo l’avviamento' },
      { name: 'Guarnizione o crepa del collettore di scarico', likelihood: 'Se il ticchettio è più forte fuori e c’è odore di scarico' },
      { name: 'Catena di distribuzione o il suo tenditore', likelihood: 'Più raro — un fruscio o un raschiare davanti al motore' },
    ],
    canRide: [
      'Con un ticchettio si può guidare quasi sempre: tra le sue cause tipiche nessuna richiede di fermarsi in corsia d’emergenza. Il ticchettio normale degli iniettori e quello mattutino delle punterie non richiedono alcuna riparazione: è il funzionamento normale del motore.',
      'Ma un ticchettio che cresce non passa da solo. Valvole con gioco eccessivo lavorano con un colpo e si consumano più in fretta, quindi programma la registrazione o il controllo delle punterie nelle prossime due settimane — nel frattempo puoi guidare tranquillamente. Con il collettore di scarico la logica è simile: c’è un margine di una o due settimane, ma la fessura cresce e l’odore di scarico può essere aspirato in abitacolo dall’impianto di riscaldamento — e questo è già dannoso.',
    ],
    checks: [
      'Confrontare motore freddo e caldo: ticchettio solo nei primi minuti dopo l’avviamento è il quadro delle punterie; un suono che si sente meglio a caldo depone per il gioco valvole.',
      'Valutare l’andamento a memoria: un ticchettio immutato da anni è più probabilmente normale; se sei mesi fa era nettamente più discreto, è usura, e crescerà.',
      'Ascoltare da fuori e dall’abitacolo: il ticchettio normale degli iniettori è decisamente più forte fuori; quello delle valvole si sente bene anche dal posto di guida.',
      'Controllare con l’astina il livello dell’olio: con livello basso il ticchettio di punterie e distribuzione aumenta, e il rabbocco fino al segno a volte si sente subito.',
      'Annusare vicino al cofano aperto: odore di scarico insieme a un ticchettio frequente è segno del collettore — con questo, officina entro una o due settimane.',
    ],
    appHelp:
      'L’app Stuk chiarisce l’essenziale — se il ticchettio è diventato più forte col tempo e come si comporta a freddo e a caldo — e la registrazione permette di confrontarlo con esempi tipici. Nel rapporto trovi cause probabili con percentuali e una conclusione a semaforo: normale, appuntamento questa settimana o diagnosi senza rinvii.',
    faq: [
      {
        q: 'Perché diesel e motori a iniezione diretta ticchettano sempre?',
        a: 'In essi il carburante viene iniettato a pressione altissima, e ogni iniettore emette un clic breve aprendosi, a cui si somma il ticchettio della pompa ad alta pressione. È funzionamento normale: il suono è uguale con qualsiasi clima, più forte fuori che dentro, e non richiede riparazioni.',
      },
      {
        q: 'Che cos’è la registrazione del gioco valvole?',
        a: 'Tra i componenti della distribuzione si lascia un piccolo gioco termico; con l’usura cresce e le valvole iniziano a ticchettare. Il meccanico riporta i giochi a norma con spessori o viti di registro. Sui motori con punterie idrauliche, invece della registrazione si controllano le punterie stesse e la pressione dell’olio.',
      },
      {
        q: 'Il ticchettio può sparire dopo un cambio d’olio?',
        a: 'Sì, se la colpa era di olio vecchio, viscosità sbagliata o livello basso: le punterie idrauliche sono molto sensibili allo stato dell’olio. Ma il cambio d’olio non sistema un gioco valvole usurato — se dopo il ticchettio resta e continua a crescere, serve la registrazione.',
      },
    ],
  },

  'svist-remnya': {
    h1: 'Cinghia che fischia',
    metaTitle: 'La cinghia fischia: cause, si può guidare e cosa fare | Stuk',
    description:
      'La cinghia dei servizi fischia: usura, tensione bassa, rulli o frizione del compressore del clima. Come restringere la causa dalle circostanze e quando il fischio richiede l’officina.',
    intro: [
      'Un fischio acuto sotto il cofano viene quasi sempre dalla cinghia dei servizi — la cinghia che dall’albero motore muove l’alternatore, la pompa dell’acqua e, su molte auto, anche il compressore del clima e la pompa del servosterzo. Fischia in un solo caso: quando slitta sulle pulegge invece di far presa su di esse.',
      'Le cause dello slittamento si dividono in due gruppi. Il primo è la cinghia stessa: la gomma è invecchiata e indurita, la tensione è calata, oppure olio o liquido di raffreddamento sono finiti sulla superficie di lavoro. Il secondo sono i gruppi che essa muove: un rullo che si blocca, una frizione del compressore dura o una pompa dell’acqua con cuscinetto usurato caricano la cinghia più di quanto essa possa trasmettere. Da quando esattamente compare il fischio, il cerchio si restringe parecchio.',
    ],
    causes: [
      { name: 'Cinghia usurata o poco tesa', likelihood: 'Il più delle volte' },
      { name: 'Slittamento a freddo o con l’umidità', likelihood: 'Frequente — se il fischio se ne va dopo il riscaldamento' },
      { name: 'Rullo tenditore o rullo di rinvio', likelihood: 'Abbastanza frequente — al fischio si aggiunge un ronzio o un fruscio' },
      { name: 'Frizione del compressore del climatizzatore', likelihood: 'Se lo stridio coincide con l’accensione del clima' },
      { name: 'Pompa dell’acqua o puleggia libera dell’alternatore', likelihood: 'Più raro' },
    ],
    canRide: [
      'Se il fischio è breve e vive solo i primi secondi dopo un avviamento a freddo, guida tranquillo: è un motivo per far vedere la cinghia quando capita, non per cambiare i programmi della giornata.',
      'Con un fischio costante o sotto carico si può ancora guidare, ma fissa l’officina entro la settimana: una cinghia che slitta si surriscalda e si consuma a valanga, e se si rompe si fermano l’alternatore e, su molti motori, la pompa dell’acqua. Due segnali impongono di accostare e spegnere subito: la spia della batteria accesa e la lancetta della temperatura che sale — entrambi significano che la cinghia non muove più i suoi organi.',
    ],
    checks: [
      'Ricordare quando esattamente fischia: nei primi secondi dopo l’avviamento, nel momento in cui si accende il clima, girando il volante o di continuo — è la chiave principale.',
      'Accendere il climatizzatore a motore acceso: uno stridio proprio nell’attimo dell’innesto indica una frizione del compressore che slitta.',
      'A motore spento, esaminare la cinghia: crepe trasversali, bordi sfilacciati e fianchi «lucidati» sono segni di usura.',
      'Controllare se ci sono tracce di olio o liquido di raffreddamento sulla cinghia e attorno alle pulegge: una cinghia unta fischia anche nuova, e tracce di liquido indicano la pompa dell’acqua.',
      'Ascoltare se accanto al fischio c’è un ronzio o un fruscio regolare che cambia con i giri del motore — così suona il cuscinetto di uno dei rulli.',
    ],
    appHelp:
      'L’app Stuk chiarisce il carattere del suono e le circostanze — fischio o ronzio, a freddo o sotto carico, legato o meno al climatizzatore — e con la registrazione aiuta a distinguere lo stridio della cinghia dal fruscio di un rullo. Nel rapporto trovi cause probabili con percentuali e un semaforo: puoi guidare, in officina questa settimana o fermati.',
    faq: [
      {
        q: 'Cosa succede se la cinghia si rompe per strada?',
        a: 'La ricarica si interrompe subito: l’alternatore si ferma e l’auto viaggia con quel che resta nella batteria — di solito qualche decina di minuti. Sui motori in cui la cinghia muove anche la pompa dell’acqua, la temperatura sale in fretta e proseguire diventa impossibile. Per questo una cinghia che fischia si sostituisce su appuntamento e non dopo la rottura.',
      },
      {
        q: 'Perché il fischio compare accendendo il climatizzatore?',
        a: 'Il compressore del clima è il carico più pesante sulla cinghia. All’innesto la sua frizione aggiunge carico di colpo, e una cinghia usurata o poco tesa parte a slittare. Se stride proprio l’attimo dell’innesto, vale la pena controllare anche la frizione: la sua usura dà lo stesso suono.',
      },
      {
        q: 'Si può spruzzare qualcosa sulla cinghia perché non fischi?',
        a: 'Meglio di no. Spray e rimedi casalinghi come il WD-40 danno un giorno o due di silenzio, ma la gomma impregnata slitta e invecchia più in fretta, mentre la causa — usura o tensione bassa — resta lì. Più affidabile sostituire la cinghia insieme al rullo: è uno dei lavori economici dell’officina.',
      },
    ],
  },
};
