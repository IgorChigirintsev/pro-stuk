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

  'gremit-pod-mashinoy': {
    h1: 'Sferragliare sotto l’auto',
    metaTitle: 'Sferragliare sotto l’auto: cosa vibra ed è pericoloso | Stuk',
    description:
      'Sferragliare e vibrare sotto l’auto: supporti dello scarico, schermo termico, paramotore o catalizzatore. Come trovare la fonte del rumore e quando la cosa è seria.',
    intro: [
      'Uno sferragliare da sotto l’auto suona allarmante, ma la fonte non è quasi mai il motore né la sospensione: è la lamiera imbullonata — i gommini dello scarico, i bulloni allentati del paramotore o lo schermo termico, quella lamiera sottile che protegge il pianale dal calore del tubo di scarico. Tutto questo sferraglia forte e risuona nella scocca, e per questo sembra più grave di quel che è: sulla guida e sul funzionamento dell’auto questi rumori non incidono.',
      'Ci sono anche gli inganni: ciò che sferraglia «sotto l’auto» spesso è il bagagliaio — il cric, la chiave a croce, una ruota di scorta mal fissata — o le plastiche dell’abitacolo, il cui suono è difficile da collocare. Solo uno scenario preoccupa davvero: uno sferragliare metallico più vicino al motore insieme a una perdita di potenza o a un odore di scarico diverso. Così suona un catalizzatore distrutto — il filtro ceramico dei gas di scarico, i cui frammenti sferragliano dentro il proprio involucro — e con questa ipotesi non conviene aspettare.',
    ],
    causes: [
      { name: 'Supporti dello scarico o paramotore', likelihood: 'Il più delle volte — sferragliare metallico sulle buche' },
      { name: 'Schermo termico dell’impianto di scarico', likelihood: 'Frequente — sferragliare metallico a certi regimi' },
      { name: 'Cric, ruota di scorta o carico nel bagagliaio', likelihood: 'Frequente — fragore sordo dietro, «qualcosa che rotola»' },
      { name: 'Plastiche dell’abitacolo: pannelli e grilli', likelihood: 'Frequente — il suono è più vicino di quanto sembri' },
      { name: 'Catalizzatore distrutto', likelihood: 'Più raro — se insieme allo sferragliare è calata la potenza' },
    ],
    canRide: [
      'Nella maggior parte dei casi sì, e senza limitazioni particolari: uno schermo termico che vibra, supporti dello scarico allentati o bulloni del paramotore sono questione di comfort, non di sicurezza. La riparazione dura di solito pochi minuti: stringere o fissare con una fascetta. L’unica cosa da accertare è che lo scarico non penzoli: un tubo che sta per toccare l’asfalto non si ignora più, il suo fissaggio si ripristina subito.',
      'Se lo sferragliare si accompagna a perdita di potenza, a un odore di scarico diverso o alla spia motore, vai alla diagnosi nei prossimi giorni: frammenti di ceramica di un catalizzatore distrutto possono essere risucchiati nel motore, e questa è già una riparazione costosa. Fino al controllo, evita i regimi alti.',
    ],
    checks: [
      'Svuotare il bagagliaio, controllare il fissaggio di ruota di scorta e cric, premere la cappelliera — e rifare lo stesso tratto di strada. Il rumore è sparito: questione chiusa.',
      'Ad auto ferma, alzare i giri dolcemente: lo sferragliare dello schermo termico compare di solito a certi regimi e si sente sul posto, senza alcuna buca.',
      'Chiedere a un passeggero di premere con la mano i pannelli sospetti dell’abitacolo in marcia: se il rumore sparisce, sono grilli dell’abitacolo e non il pianale.',
      'Fare attenzione alla potenza e all’odore di scarico: se l’auto accelera peggio o l’odore è cambiato, è l’ipotesi del catalizzatore — con essa dal meccanico nei prossimi giorni.',
      'Guardare sotto l’auto senza infilarsi sotto: uno scarico che penzola, un bordo staccato del paramotore o uno schermo piegato spesso si vedono già dalla ruota.',
    ],
    appHelp:
      'L’app Stuk aiuta a legare lo sferragliare alla sua fonte: da dove viene il suono, se segue i giri del motore o le buche, cosa succede alla potenza. Da risposte e registrazione mostra cause probabili con percentuali e un semaforo dell’urgenza — comodo per distinguere una lamiera innocua dal catalizzatore prima ancora dell’officina.',
    faq: [
      {
        q: 'È pericoloso guidare se sotto l’auto sferraglia qualcosa?',
        a: 'Il più delle volte no: supporti dello scarico allentati, paramotore e schermo termico non incidono sul funzionamento dell’auto. Le eccezioni sono uno scarico che penzola e sta per toccare l’asfalto e uno sferragliare insieme a perdita di potenza: nel secondo caso è possibile un catalizzatore distrutto, e il controllo non va rimandato.',
      },
      {
        q: 'Che cos’è lo schermo termico e si può semplicemente toglierlo?',
        a: 'È una sottile lamiera metallica tra le parti calde dello scarico e il pianale: protegge dal calore la scocca, i cablaggi e tutto ciò che sta sopra il tubo. Toglierlo non è una buona idea — meglio stringerlo o fissarlo con una fascetta: in officina è un lavoro di pochi minuti.',
      },
      {
        q: 'Come capire che a sferragliare è proprio il catalizzatore?',
        a: 'Da uno sferragliare metallico o un fruscio da sotto il pianale, più vicino al motore, che aumenta dando gas, più una perdita di potenza o un odore di scarico diverso. In officina confermano l’ipotesi battendo leggermente sull’involucro del catalizzatore ad auto fredda: la ceramica sbriciolata frusciando dentro sembra ghiaia.',
      },
    ],
  },

  'skrezhet-pri-tormozhenii': {
    h1: 'Stridore in frenata',
    metaTitle: 'Stridore in frenata: pastiglie fino al metallo, che fare | Stuk',
    description:
      'Lo stridore in frenata di solito significa pastiglie consumate fino al metallo: con questo non si guida. Più di rado la colpa è di un sassolino dietro il parapolvere. Come distinguerli.',
    intro: [
      'Lo stridore in frenata merita più attenzione di qualunque fischio. Il più delle volte così suonano pastiglie consumate fino al metallo: il materiale d’attrito che sfrega il disco è finito, e a raschiare il disco è il supporto in acciaio della pastiglia. Lo spazio di frenata cresce, il disco si rovina a ogni sosta e il meccanismo può bloccarsi.',
      'Ci sono varianti meno drammatiche. Un parapolvere del disco piegato o un sassolino incastrato tra parapolvere e disco producono uno stridore molto simile, ma non danneggiano i freni. E un breve raschiare nelle prime frenate dopo una notte all’aperto o dopo la pioggia è solo la patina di ruggine, che le pastiglie tolgono in un paio di minuti. Il guaio è che all’orecchio questi scenari si confondono facilmente, perciò uno stridore costante richiede un controllo e non congetture.',
    ],
    causes: [
      { name: 'Pastiglie consumate fino al metallo', likelihood: 'Il più delle volte — se stride a ogni frenata' },
      { name: 'Un sassolino o il parapolvere piegato che tocca il disco', likelihood: 'Frequente; il suono è simile, ma non danneggia i freni' },
      { name: 'Pinza che si blocca', likelihood: 'Se la ruota si scalda e l’auto tira da un lato' },
      { name: 'Patina di ruggine dopo la sosta o la pioggia', likelihood: 'Se il suono sparisce nelle prime frenate' },
    ],
    canRide: [
      'Con lo stridore metallo contro metallo bisogna interrompere i viaggi ordinari: è ammesso solo un tragitto prudente fino all’officina, con distanze abbondanti e frenate dolci e anticipate. Rimandare la sostituzione non conviene nemmeno economicamente: ogni chilometro passato a stridere aggiunge al conto il prezzo dei dischi, che il supporto in acciaio della pastiglia letteralmente asporta.',
      'Se lo stridore è comparso dopo la sosta ed è sparito nelle prime frenate, guida senza limitazioni: è ruggine. Se il suono somiglia più a un raschiare, si sente anche senza premere il pedale e la ruota non si scalda dopo il viaggio, sono probabili il parapolvere o un sassolino: puoi arrivare tranquillo, ma fai vedere l’auto entro un giorno o due — solo un controllo separa con certezza il caso innocuo da pastiglie finite.',
    ],
    checks: [
      'Cercare la regolarità: suono solo premendo il freno indica le pastiglie; un raschiare continuo in marcia, piuttosto il parapolvere, un sassolino o una pinza bloccata.',
      'Guardare tra le razze del cerchio: su molte auto la pastiglia esterna è visibile senza smontare. Materiale d’attrito sotto i 3–4 mm, o metallo lucido al suo posto, significa sostituzione immediata.',
      'Dopo un breve tragitto, avvicinare la mano alle ruote senza toccare il disco: se una ruota è nettamente più calda delle altre, somiglia a una pinza bloccata — il componente che preme le pastiglie sul disco.',
      'Osservare il comportamento dell’auto: tirare da un lato in frenata o odore di bruciato da una ruota sono segni con cui non si guida — solo con prudenza fino all’officina.',
      'Esaminare il disco attraverso il cerchio: solchi profondi e una tinta bluastra del metallo dicono che lo stridore dura da tempo e i dischi hanno già sofferto.',
    ],
    appHelp:
      'L’app Stuk percorre le stesse domande — lo stridore è costante, la ruota si scalda, il suono sparisce dopo le prime frenate — e con la registrazione aiuta a distinguere lo stridore dallo stridio dell’indicatore di usura. Nel rapporto trovi cause probabili e un semaforo: puoi guidare, mostralo questa settimana o vai solo fino all’officina.',
    faq: [
      {
        q: 'Che differenza c’è tra stridore e fischio dei freni?',
        a: 'Il fischio è un suono acuto mentre i freni lavorano ancora pienamente: quasi sempre è l’indicatore di usura, che avvisa in anticipo. Lo stridore è un rumore ruvido e grave di metallo contro metallo: il materiale d’attrito è finito e il supporto in acciaio sfrega il disco. Il fischio è un appuntamento questa settimana; lo stridore, la fine dei viaggi ordinari.',
      },
      {
        q: 'Basta sostituire solo le pastiglie se c’è già stato stridore?',
        a: 'Dipende dallo stato dei dischi: anche guidare poco «sul metallo» lascia solchi. Quelli superficiali a volte si rettificano, quelli profondi impongono dischi nuovi. Pastiglie nuove su un disco solcato frenano peggio e si consumano in fretta, quindi la decisione si prende dopo il controllo.',
      },
      {
        q: 'Lo stridore va e viene — anche questo è pericoloso?',
        a: 'Uno stridore intermittente viene spesso da un sassolino tra parapolvere e disco, e può cadere da solo. Non conviene contarci: lo stesso suono intermittente compare nella fase iniziale del consumo delle pastiglie fino al metallo. Un controllo entro un giorno o due chiarisce la faccenda.',
      },
    ],
  },

  'stuk-pri-razgone': {
    h1: 'Colpo in accelerazione',
    metaTitle: 'Colpo dando e rilasciando gas: cause e cosa fare | Stuk',
    description:
      'Perché batte premendo o rilasciando l’acceleratore: supporti motore, giunto omocinetico, gioco nella trasmissione o cambio automatico. Come distinguere un gioco innocuo da un colpo dentro il motore.',
    intro: [
      'Un colpo che compare esattamente nel momento in cui si preme o si rilascia l’acceleratore nasce quasi sempre non nel motore, ma nella catena che porta la coppia alle ruote. Con gli anni nei suoi componenti si accumula gioco: i supporti in gomma del motore cedono e gli permettono di scuotersi al cambio di carico, il giunto omocinetico interno si consuma (lo snodo del semiasse che va dal cambio alla ruota), le crociere dell’albero di trasmissione e i fissaggi del telaietto si allentano. Ogni volta che la coppia cambia direzione, il gioco si recupera con un urto — da qui il colpo o lo sferragliare isolato.',
      'Storia a parte è il cambio automatico: uno strappo con sferragliare passando il selettore tra D e R, o durante i cambi marcia, di solito indica olio vecchio o usura. E un caso del tutto diverso è un colpo sordo dal profondo del motore, che accelera con i giri e diventa più forte sotto carico: così battono le bronzine dell’albero motore. È raro, ma è la variante più seria, ed è importante non lasciarsela sfuggire.',
    ],
    causes: [
      { name: 'Supporti motore o giunto omocinetico interno', likelihood: 'Il più delle volte — colpo isolato dando e rilasciando gas' },
      { name: 'Gioco nella trasmissione: crociere, fissaggi del telaietto', likelihood: 'Frequente su trazione posteriore e integrale — sferragliare sotto il pianale in partenza' },
      { name: 'Cambio automatico: olio vecchio o usura', likelihood: 'Se strappo e sferragliare coincidono con i cambi marcia' },
      { name: 'Colpo di bronzine dal profondo del motore', likelihood: 'Raro — accelera con i giri, più forte sotto carico' },
    ],
    canRide: [
      'Con la maggior parte delle cause della tabella si può guidare: il gioco nei supporti, negli snodi o nella trasmissione non blocca l’auto all’improvviso finché il colpo resta isolato e discreto. Ma rimandare la diagnosi di mesi non è saggio: una crociera rovinata o un giunto omocinetico consumato prima o poi si distruggono, e succede in marcia. Tempo ragionevole per l’officina: una o due settimane; fino ad allora, parti e usa l’acceleratore con più dolcezza.',
      'L’eccezione è il colpo dal profondo del motore, che accelera dando gas e cresce sotto carico. Con esso vanno interrotti i viaggi ordinari: bronzine usurate possono finire con un motore grippato. Per prima cosa controlla il livello dell’olio; poi carro attrezzi — oppure, se l’officina è vicinissima, piano e senza dare gas.',
    ],
    checks: [
      'Precisare il momento: un colpo esattamente dando e rilasciando gas, e non sulle buche, parla della trasmissione della coppia e non della sospensione. Questo dettaglio accorcia subito la ricerca del meccanico.',
      'Controllare il livello dell’olio motore con l’astina. Davanti a qualunque colpo che suoni di motore, è il primo passo: con livello basso soffrono per prime le bronzine.',
      'Se sferraglia ai cambi marcia, controllare livello e stato dell’olio del cambio automatico: un fluido scuro con odore di bruciato è causa frequente di strappi, e a volte la sostituzione risolve.',
      'Ascoltare da dove viene il suono — da sotto il cofano, dal centro del pianale o dal lato di una ruota — e se si ripete cambiando marcia. Vale la pena annotare queste osservazioni per l’officina.',
      'Fare la prova dolce: se con pressione e rilascio dolci dell’acceleratore il colpo sparisce e con un gesto brusco ritorna, è gioco classico, e fino alla riparazione basta una guida morbida.',
    ],
    appHelp:
      'L’app Stuk pone le stesse domande di precisione — quando esattamente batte, se il suono cambia con giri e marce — e con la registrazione aiuta a separare lo sferragliare di un gioco da un colpo profondo del motore. Nel rapporto trovi cause probabili con percentuali e una conclusione chiara: puoi guidare, pianifica l’officina o fermati.',
    faq: [
      {
        q: 'Perché batte proprio dando e rilasciando gas?',
        a: 'Al cambio di carico la coppia inverte direzione, e tutti i giochi dei supporti motore, degli snodi e della trasmissione si recuperano con un urto. Finché l’auto viaggia a velocità costante i componenti restano a contatto e il gioco non si tradisce — per questo il colpo si sente solo lavorando con l’acceleratore.',
      },
      {
        q: 'Come capire che a battere è il motore stesso e che è grave?',
        a: 'Il segnale d’allarme è un colpo sordo dal profondo del motore che accelera con i giri e cresce sotto carico, per esempio in salita. Così battono le bronzine dell’albero motore. In questo caso interrompi i viaggi, controlla il livello dell’olio e porta l’auto in officina con il carro attrezzi.',
      },
      {
        q: 'Il cambio automatico può causare colpi in accelerazione?',
        a: 'Sì. Uno strappo o uno sferragliare nel momento di un cambio marcia, o passando il selettore tra D e R, è segno tipico di olio vecchio o di usura del cambio. Comincia dal controllo di livello e stato dell’olio; fino alla riparazione, sposta il selettore solo ad auto completamente ferma e con il freno premuto.',
      },
    ],
  },

  'zvon-pri-razgone': {
    h1: 'Tintinnio in accelerazione',
    metaTitle: 'Tintinnio in accelerazione: detonazione o no, che fare | Stuk',
    description:
      'Un tintinnio metallico in accelerazione è quasi sempre detonazione dovuta al carburante. Come verificarlo cambiando distributore e quando la colpa non è del motore ma dello schermo termico o del catalizzatore.',
    intro: [
      'Il tintinnio metallico in accelerazione — quello che gli automobilisti chiamano «battito in testa» — risulta quasi sempre essere detonazione. Una parte del carburante nei cilindri non brucia in modo regolare, ma esplode, e l’onda d’urto risuona metallica contro le pareti del motore. Si sente meglio sotto carico: in salita, nel sorpasso, accelerando da bassi regimi con una marcia alta. La causa più comune è prosaica — benzina con numero di ottano inferiore a quello raccomandato dal costruttore, o semplicemente un pieno sfortunato.',
      'A tintinnare può non essere il motore. Uno schermo termico allentato — la lamiera sopra lo scarico — vibra a certi regimi, e la ceramica sbriciolata del catalizzatore frusciando tintinna da sotto il pianale. La differenza sta in ciò che segue: la detonazione dipende dal carico e sparisce guidando dolcemente, mentre lo schermo tintinna ai «suoi» regimi anche ad auto ferma, dando gas.',
    ],
    causes: [
      { name: 'Detonazione: carburante con numero di ottano basso', likelihood: 'Il più delle volte — tintinnio sotto carico, soprattutto in salita' },
      { name: 'Depositi carboniosi nelle camere o il sensore di detonazione', likelihood: 'Se cambiare distributore non ha aiutato' },
      { name: 'Schermo termico dell’impianto di scarico', likelihood: 'Frequente — sferragliare a certi regimi, senza legame con il carico' },
      { name: 'Catalizzatore distrutto', likelihood: 'Più raro — tintinnio e fruscio da sotto il pianale, potenza in calo' },
    ],
    canRide: [
      'Con episodi rari di tintinnio puoi arrivare, ma senza caricare il motore: accelera dolcemente, affronta le salite con una marcia più corta, non tirare da bassi regimi con marcia alta. Il primo passo è fare il pieno con carburante di numero di ottano non inferiore a quello raccomandato, meglio in un’altra catena di distributori: spesso il tintinnio se ne va con un solo pieno.',
      'Una detonazione costante sono colpi sui pistoni a ogni accelerazione, e distrugge progressivamente il motore: soffrono pistoni, fasce e guarnizione della testata. Se dopo il cambio di carburante il tintinnio non se n’è andato, non rimandare la diagnosi. Lo sferragliare dello schermo, al contrario, è una seccatura puramente acustica: con esso si guida senza limitazioni e la lamiera si fissa alla prossima visita in officina.',
    ],
    checks: [
      'Fare un pieno completo con numero di ottano non inferiore a quello raccomandato, in un altro distributore. Se in uno o due pieni il tintinnio sparisce, la causa era il carburante.',
      'Verificare il legame con il carico: un tintinnio che compare in salita, nel sorpasso e con gas deciso, ma si attenua in accelerazione dolce, è la firma della detonazione.',
      'Dare gas in folle ad auto ferma: se il tintinnio o lo sferragliare compare a certi regimi anche senza carico, è più probabile lo schermo termico.',
      'Controllare sul libretto o sullo sportello del serbatoio quale benzina è raccomandata: per molti motori un numero di ottano basso non va più bene, anche se formalmente ammesso.',
      'Fare attenzione alla potenza e ai rumori sotto il pianale: fruscio e tintinnio dal basso insieme a un’accelerazione più fiacca sono un motivo per controllare il catalizzatore senza rinvii.',
    ],
    appHelp:
      'L’app Stuk aiuta con le stesse domande — quando tintinna, se il suono segue il carico o i giri — e la registrazione permette di distinguere il tintinnio metallico della detonazione dallo sferragliare di una lamiera. Nel rapporto trovi cause probabili con percentuali e una conclusione: puoi guidare, conviene pianificare l’officina o meglio fermarsi.',
    faq: [
      {
        q: 'Che cosa significa «battito in testa»?',
        a: 'È il vecchio nome del tintinnio della detonazione; un tempo lo si attribuiva agli spinotti dei pistoni. In realtà non sono loro a tintinnare: il suono nasce dall’onda d’urto di una combustione esplosiva riflessa dalle pareti dei cilindri. Il nome è rimasto, ma la causa è sempre la stessa: detonazione, non componenti del pistone usurati.',
      },
      {
        q: 'Si può guidare con la detonazione?',
        a: 'Per poco e con riguardo: accelerazione dolce, marcia più corta in salita, senza pieno carico né rimorchio. Ogni episodio sono colpi sui pistoni, e una detonazione costante finisce in una riparazione costosa del motore. Se il cambio di carburante non ha tolto il tintinnio in uno o due pieni, serve una diagnosi.',
      },
      {
        q: 'Una benzina con numero di ottano più alto aiuta?',
        a: 'La regola principale è non fare mai il pieno al di sotto di quanto raccomanda il costruttore. Il numero di ottano indica la resistenza del carburante all’autoaccensione, quindi passare a una qualità superiore su un motore incline alla detonazione spesso elimina il tintinnio. Se nemmeno così basta, la causa — depositi o sensore di detonazione — si cerca in officina.',
      },
    ],
  },

  'gul-pri-povorote': {
    h1: 'Ronzio in curva',
    metaTitle: 'Ronzio in curva: cuscinetto ruota o servosterzo | Stuk',
    description:
      'Da dove viene il ronzio in curva: cuscinetto ruota usurato, pompa del servosterzo che ulula o rumore delle gomme. Come capire il lato e se è pericoloso.',
    intro: [
      'Nel ronzio in curva vanno separati subito due scenari: un ronzio a velocità che in una curva cresce e nell’altra cala, e un ululato che compare girando il volante da fermi o in manovra. Suonano simili, ma le fonti sono del tutto diverse: nel primo caso la ruota, nel secondo il servosterzo.',
      'Un ronzio a velocità che dipende dal senso della curva è la firma classica del cuscinetto ruota — il supporto su cui la ruota gira. In curva il peso dell’auto passa sulle ruote esterne, e un cuscinetto usurato e caricato ronza più forte. L’ululato girando il volante a bassa velocità viene di solito dalla pompa del servosterzo, di regola per un livello basso del fluido. E sulle auto con servosterzo elettrico un leggero ronzio girando il volante è normale, non un guasto.',
    ],
    causes: [
      { name: 'Cuscinetto ruota', likelihood: 'Il più delle volte — se il ronzio arriva con la velocità e cambia in curva' },
      { name: 'Pompa del servosterzo o livello basso del fluido', likelihood: 'Frequente — se ulula girando il volante da fermi' },
      { name: 'Rumore delle gomme', likelihood: 'Frequente; il ronzio dipende dal fondo, non dalla curva' },
      { name: 'Ronzio normale del servosterzo elettrico', likelihood: 'Normale sulle auto senza serbatoio del fluido dello sterzo' },
      { name: 'Giunto omocinetico usurato', likelihood: 'Più raro; di solito aggiunge scatti a sterzo tutto girato' },
    ],
    canRide: [
      'Con un cuscinetto che ronza si può guidare, ma è un credito a breve termine: non rimandare il controllo oltre una settimana e sposta i viaggi lunghi ad alta velocità a dopo. Un cuscinetto che si sta distruggendo dà gioco alla ruota e, in un caso trascurato, può bloccarsi. Se il ronzio è cresciuto di colpo o si è aggiunta una vibrazione — in officina subito.',
      'Con la pompa del servosterzo che ulula, la prima cosa è controllare il livello del fluido nel serbatoio: il rabbocco spesso chiude la questione. Si può guidare, ma non tenere il volante a fondo corsa più di un paio di secondi — in quella posizione la pompa lavora alla pressione massima. Se dopo il rabbocco l’ululato resta o il livello cala di nuovo, c’è una perdita — officina entro la settimana.',
    ],
    checks: [
      'Ricordare in quale senso di curva il ronzio è più forte. Più forte girando a sinistra significa che si carica il lato destro, quindi è probabile il cuscinetto destro; e viceversa. Questo dettaglio accorcia molto la ricerca in officina.',
      'Verificare il suono da fermi: se l’ululato compare girando il volante nel parcheggio, le ruote non c’entrano — la fonte è il servosterzo.',
      'Guardare sotto il cofano se c’è un serbatoio del fluido dello sterzo. Se c’è, controllare il livello e rabboccare fino al segno se serve; se non c’è, il servosterzo è elettrico, e un ronzio basso e regolare per esso è normale.',
      'Valutare la dipendenza dal fondo: un ronzio più discreto su asfalto nuovo e più forte su fondo ruvido di solito viene dalle gomme, non dal cuscinetto.',
      'Guardare il battistrada: l’usura «a sega» (gradini sui bordi) o a chiazze aumenta il ronzio delle gomme e insieme suggerisce assetto sballato o ammortizzatori stanchi.',
    ],
    appHelp:
      'L’app Stuk pone le stesse domande del meccanico all’accettazione: dove si sente il ronzio, se cambia in curva, se è legato al volante girato da fermi. La registrazione aiuta a confrontare il suono con esempi tipici, e nel rapporto trovi cause probabili e una raccomandazione chiara: viaggia tranquillo, fissa un appuntamento questa settimana o fai controllare senza rinvii.',
    faq: [
      {
        q: 'Perché il ronzio cresce solo in un senso di curva?',
        a: 'In curva il peso dell’auto passa sulle ruote esterne. Se è usurato, per esempio, il cuscinetto destro, sotto carico ronza più forte — cioè girando a sinistra. Questa proprietà permette di capire, prima ancora dell’officina, quale lato controllare per primo.',
      },
      {
        q: 'Si può rabboccare il servosterzo con un fluido qualsiasi?',
        a: 'No. Il tipo di fluido è indicato nel libretto dell’auto e spesso sul tappo stesso del serbatoio. Un rabbocco occasionale con il fluido giusto è sicuro, ma se il livello cala con regolarità c’è una perdita da qualche parte: trovarla e ripararla spetta all’officina, il rabbocco non risolve.',
      },
      {
        q: 'Sotto il cofano non c’è il serbatoio dello sterzo eppure ronza in curva — che cos’è?',
        a: 'Molto probabilmente il servosterzo è elettrico: il suo motore ronza piano girando il volante, ed è funzionamento normale. Devono allarmare altri segnali: lo sterzo è diventato duro o si indurisce a scatti, è comparso un raschiare, o è accesa la spia dello sterzo. Con questi, officina nei prossimi giorni.',
      },
    ],
  },

  'shchelchki-pri-povorote-rulya': {
    h1: 'Scatti girando il volante',
    metaTitle: 'Scatti al volante: giunto omocinetico o cuscinetto | Stuk',
    description:
      'Perché scatta girando il volante: giunto omocinetico esterno, cuscinetto reggispinta dell’ammortizzatore o giunto del piantone. Come distinguerli dal suono e cosa controllare senza smontare.',
    intro: [
      'Gli scatti girando il volante si distinguono con una domanda semplice: in quel momento l’auto è in movimento o ferma? Un crepitio con scatti guidando a sterzo girato è la firma del giunto omocinetico esterno, lo snodo attraverso cui la rotazione arriva alla ruota che al tempo stesso sterza. Più lo sterzo è girato e più brusca è la partenza, più netto è il crepitio. Tutto inizia di solito con una cuffia rotta: la protezione in gomma che tiene lo sporco fuori dallo snodo.',
      'Se invece gli scatti si sentono girando il volante ad auto ferma, il giunto di solito non c’entra. Uno scricchiolio dall’alto, dal passaruota, viene dal cuscinetto reggispinta dell’ammortizzatore — il componente su cui la parte alta del montante ruota insieme alla ruota. Scatti nel volante stesso, all’altezza dei piedi del guidatore, sono il giunto del piantone, la piccola crociera tra volante e scatola dello sterzo. Nessuna di queste opzioni obbliga a lasciare l’auto dov’è, ma nessuna va trascinata per mesi.',
    ],
    causes: [
      { name: 'Giunto omocinetico esterno', likelihood: 'Il più delle volte — se crepita in marcia a sterzo girato' },
      { name: 'Cuscinetto reggispinta dell’ammortizzatore', likelihood: 'Frequente — se scricchiola da fermi, dall’alto del passaruota' },
      { name: 'Giunto del piantone dello sterzo', likelihood: 'Se gli scatti si sentono e si avvertono nel volante stesso' },
      { name: 'Testine dello sterzo o la scatola', likelihood: 'Più raro; di solito danno colpi, non scatti' },
      { name: 'Giunto omocinetico interno, tiranti della barra', likelihood: 'Più raro; si controllano nella stessa diagnosi' },
    ],
    canRide: [
      'Con un giunto omocinetico che crepita si può guidare, ma non rimandare la sostituzione oltre una o due settimane: uno snodo usurato nel peggiore dei casi si blocca, e allora non è più un suono ma un’auto ferma. Fino alla riparazione aiuta un regime di riguardo — non partire di scatto con le ruote a fondo corsa.',
      'Cuscinetto reggispinta e giunto del piantone danno più fastidio che pericolo immediato, ma lo sterzo è un organo di sicurezza, quindi fai la diagnosi nei prossimi giorni: sul ponte richiede pochi minuti. Motivi per accelerare: il volante è diventato «vuoto» al centro, l’auto vaga nella corsia o gli scatti sono diventati molto più frequenti.',
    ],
    checks: [
      'Separare gli scenari in un parcheggio vuoto: il crepitio compare guidando in cerchio a sterzo girato — oppure gli scatti si sentono girando il volante ad auto ferma?',
      'Esaminare le cuffie dei giunti omocinetici — le protezioni in gomma a soffietto sul lato interno di ogni ruota anteriore. Uno strappo con il grasso schizzato intorno è una diagnosi quasi confermata.',
      'Chiedere a qualcuno di girare il volante a motore spento e appoggiare il palmo sulla torretta dell’ammortizzatore sotto il cofano: gli scatti di un cuscinetto usurato si sentono con la mano.',
      'Muovere il volante a destra e sinistra a motore spento e ascoltare all’altezza dei piedi: uno scatto netto nel piantone tradisce il giunto.',
      'Ricordare da quale ruota arriva il crepitio in marcia e in quale curva è più forte — questi dettagli accorciano molto la ricerca in officina.',
    ],
    appHelp:
      'Nell’app Stuk questi bivi sono raccolti in un breve albero di domande: l’auto è in marcia o ferma, da dove viene il suono, in che stato sono le cuffie. Il crepitio si può registrare con il telefono e confrontarlo con esempi. Nel rapporto trovi cause probabili con la loro valutazione e una raccomandazione sui tempi: senza allarmismi, ma senza scatti dimenticati per un mese.',
    faq: [
      {
        q: 'Che cos’è il giunto omocinetico e perché scatta?',
        a: 'È lo snodo che trasmette la rotazione a una ruota che allo stesso tempo sterza. Quando lo sporco entra da una cuffia rotta, le sfere e le piste dello snodo si consumano, e sotto carico a sterzo girato inizia a crepitare in modo netto.',
      },
      {
        q: 'Per quanto si può guidare con un giunto omocinetico che scatta?',
        a: 'Non c’è una durata esatta: in alcuni lo snodo regge mesi, in altri si esaurisce in un paio di settimane. Riferimento ragionevole: non rimandare la sostituzione oltre una o due settimane e, fino alla riparazione, non partire di scatto a ruote girate — così il carico sullo snodo è minimo.',
      },
      {
        q: 'Perché scricchiola girando il volante ad auto ferma?',
        a: 'Ad auto ferma la ruota non gira e il giunto omocinetico non lavora. Uno scricchiolio sul posto viene di solito dal cuscinetto reggispinta dell’ammortizzatore — il suono arriva dall’alto, dal passaruota — o dal giunto del piantone, se lo scatto è nel volante stesso. Entrambi si controllano in officina in pochi minuti.',
      },
    ],
  },

  'stuk-v-dvigatele-na-holodnuyu': {
    h1: 'Battito del motore a freddo',
    metaTitle: 'Il motore batte a freddo: cause e cosa fare | Stuk',
    description:
      'Perché il motore batte a freddo e tace dopo il riscaldamento: punterie idrauliche, gruppo pistoni, catena di distribuzione. Quando è normale e quando è ora dell’officina.',
    intro: [
      'Un battito che si sente solo nei primi minuti dopo l’avviamento a freddo e sparisce man mano che il motore si scalda è una delle lamentele più frequenti sulle auto con chilometri. Buona notizia: qui la causa più diffusa è anche la più innocua. Un ticchettio frequente in alto sul motore viene di solito dalle punterie idrauliche — piccoli componenti che, grazie alla pressione dell’olio, eliminano il gioco in eccesso nella distribuzione. Finché il motore è freddo l’olio è denso e non le raggiunge subito, perciò ticchettano un paio di minuti. Scaldato — silenzio.',
      'Il carattere del suono dice molto. Un battito sordo dal profondo indica più spesso l’usura del gruppo pistoni: a freddo il pistone ha un po’ più di libertà nel cilindro e batte finché il calore non lo dilata. Un fruscio o un raschiare davanti è la firma di una catena di distribuzione allungata — la catena interna che fa aprire le valvole al momento giusto — o del suo tenditore indebolito. E un ticchettio più forte all’esterno che in abitacolo, per giunta con odore di scarico sotto il cofano, è segno di una guarnizione del collettore bruciata: i gas escono dalla fessura finché il metallo non si dilata e la chiude.',
    ],
    causes: [
      { name: 'Punterie idrauliche: olio freddo e denso', likelihood: 'Il più delle volte — se ticchetta in alto e tace in un paio di minuti' },
      { name: 'Usura del gruppo pistoni', likelihood: 'Frequente ad alto chilometraggio — battito sordo dal profondo' },
      { name: 'Catena di distribuzione o il suo tenditore', likelihood: 'Frequente — se davanti c’è un fruscio o un raschiare' },
      { name: 'Guarnizione o crepa del collettore di scarico', likelihood: 'Se il ticchettio è più forte fuori e c’è odore di scarico' },
      { name: 'Cinghia dei servizi che slitta', likelihood: 'Se è uno stridio o un fischio e non un battito' },
    ],
    canRide: [
      'Con il ticchettio delle punterie, che sparisce del tutto dopo il riscaldamento, si guida senza limitazioni — è la vita ordinaria di un motore con chilometri. Lo stesso vale per lo stridio della cinghia nei primi secondi dopo l’avviamento: fastidioso, ma non pericoloso. In entrambi i casi basta controllare livello ed età dell’olio e mostrare l’auto al meccanico alla prossima visita programmata.',
      'Il battito sordo del gruppo pistoni è materia di osservazione: si può guidare, ma tieni d’occhio il consumo d’olio e parlane al meccanico alla prossima visita. Con il fruscio della catena non si può tirare: diagnosi entro una o due settimane, perché una catena che salta significa una riparazione costosa del motore — e fino ad allora niente partenze brusche a freddo. E un principio generale: se il battito ha smesso di sparire con il riscaldamento o si sente sotto carico, la diagnosi non si rimanda più.',
    ],
    checks: [
      'Cronometrare quanti minuti dura il suono: uno o due e poi silenzio è tipico delle punterie; più a lungo vive il battito, più serve il controllo.',
      'Controllare con l’astina il livello dell’olio a motore freddo e ricordare quando è stato cambiato: livello basso e olio vecchio amplificano tutti i battiti a freddo.',
      'Definire il carattere del suono: ticchettio frequente in alto, battito sordo dal profondo o fruscio davanti al motore sono tre storie diverse, con urgenze diverse.',
      'Aprire il cofano a motore freddo acceso e annusare: odore di scarico insieme al ticchettio indica il collettore.',
      'Spegnere il motore caldo per dieci minuti e riavviare: un vero battito «a freddo» non torna dopo una sosta così breve.',
    ],
    appHelp:
      'L’app Stuk percorre gli stessi bivi — è ticchettio, battito sordo o fruscio e quanto in fretta il suono sparisce — e la registrazione dal telefono aiuta a cogliere un carattere difficile da descrivere a parole. Nel rapporto trovi cause probabili con percentuali e una conclusione chiara: guida tranquillo, fissa un appuntamento questa settimana o non rimandare l’officina.',
    faq: [
      {
        q: 'Il battito sparisce dopo il riscaldamento — posso ignorarlo?',
        a: 'Il più delle volte sì: il ticchettio delle punterie a freddo è cosa comune e non richiede riparazioni. Ma vale la pena osservare: se il suono ha iniziato a durare più di un paio di minuti, è rimasto a motore caldo o è comparso sotto carico, è già motivo di diagnosi.',
      },
      {
        q: 'Servono gli additivi «anti-battito»?',
        a: 'Meglio non versarli: non eliminano l’usura, mascherano il sintomo, e per questo il problema si nota più tardi. Ciò che aiuta davvero è altro: olio fresco della viscosità giusta, livello corretto e, se il battito resta, registrazione o riparazione dal meccanico.',
      },
      {
        q: 'Perché d’inverno batte di più a freddo?',
        a: 'Col freddo l’olio è più denso e impiega più tempo ad arrivare nella parte alta del motore, perciò punterie e distribuzione ticchettano in modo più marcato, e i giochi dei componenti freddi sono un po’ maggiori. Se dopo il riscaldamento tutto tace, è lo stesso quadro dell’estate, solo dilatato nel tempo.',
      },
    ],
  },

  'svist-pri-zapuske': {
    h1: 'Fischio all’avviamento del motore',
    metaTitle: 'Fischio all’avviamento del motore: cause e rimedi | Stuk',
    description:
      'Perché il motore fischia all’avviamento: cinghia dei servizi che slitta, rulli o pompa dell’acqua. Quando il fischio è innocuo e quando è ora di fissare l’officina.',
    intro: [
      'Uno stridio o un fischio nei primi secondi dopo che il motore è partito viene quasi sempre dalla cinghia dei servizi — la cinghia in gomma che dal motore muove alternatore, pompa dell’acqua e compressore del climatizzatore. A freddo o con tempo umido la cinghia slitta sulle pulegge e fischia, e dopo qualche secondo si scalda, si asciuga e tace.',
      'In questo momento lo scenario non è pericoloso, ma non va nemmeno considerato normale: una cinghia recente e ben tesa non fischia nemmeno col gelo. Un fischio mattutino regolare indica che la cinghia è invecchiata, che la tensione è calata o che uno dei rulli su cui scorre ha iniziato a consumarsi. Storia a parte sono i rumori dell’avviamento stesso: uno stridore o un ronzio mentre il motorino gira il motore. Lì non è più la cinghia, ma il motorino o la corona del volano — e con quelli non conviene aspettare.',
    ],
    causes: [
      { name: 'Cinghia dei servizi che slitta a freddo', likelihood: 'Il più delle volte — se il fischio sparisce nei primi secondi' },
      { name: 'Cinghia usurata o tensione calata', likelihood: 'Frequente — se il fischio resta anche a motore caldo' },
      { name: 'Cuscinetto del rullo tenditore o di rinvio', likelihood: 'Abbastanza frequente — al fischio si aggiunge un fruscio o un ronzio' },
      { name: 'Pompa dell’acqua, se vicino alla cinghia ci sono tracce di liquido', likelihood: 'Più raro' },
      { name: 'Stridore mentre gira il motorino: pignone o corona del volano', likelihood: 'Caso a parte — il suono arriva prima che il motore parta' },
    ],
    canRide: [
      'Con un fischio che vive qualche secondo dopo l’avviamento a freddo e poi sparisce del tutto si può guidare: non c’è una minaccia diretta. Vale comunque la pena far vedere la cinghia in officina quando capita — l’esame richiede un paio di minuti, e sostituire cinghia e rullo è tra i lavori economici.',
      'Se il fischio ha smesso di sparire con il riscaldamento, compare accendendo il climatizzatore o a ogni avviamento dura di più e più forte, fissa l’officina entro la settimana: una cinghia usurata può rompersi, e senza di essa si fermano l’alternatore e, su molti motori, la pompa dell’acqua. Se si accende la spia della batteria o la lancetta della temperatura sale — fermati e spegni il motore.',
    ],
    checks: [
      'Cronometrare la durata del fischio: qualche secondo dopo l’avviamento è slittamento a freddo; un suono che non sparisce con il riscaldamento è usura di cinghia o rulli.',
      'Cercare il legame con il meteo: fischio solo dopo la pioggia, il lavaggio o col gelo parla di slittamento e non del guasto di un componente preciso.',
      'Accendere il climatizzatore o lo sbrinatore a motore acceso: se il fischio compare o cresce, la cinghia slitta sotto carico.',
      'A motore spento, esaminare la cinghia con una torcia: crepe trasversali, bordi sfilacciati e fianchi «lucidati» sono segni di usura.',
      'Guardare se ci sono gocce o tracce biancastre di liquido di raffreddamento vicino alle pulegge: indicano la pompa dell’acqua, e allora meglio non rimandare l’officina.',
    ],
    appHelp:
      'L’app Stuk pone le stesse domande del meccanico all’accettazione: quando compare il fischio, se sparisce dopo il riscaldamento, cosa si sente mentre lavora il motorino d’avviamento. La registrazione aiuta a distinguere lo stridio della cinghia dallo stridore del motorino, e nel rapporto trovi cause probabili con percentuali e una conclusione chiara: puoi guidare, in officina questa settimana o fermati.',
    faq: [
      {
        q: 'Perché il motore fischia solo a freddo e con l’umidità?',
        a: 'La gomma fredda e bagnata della cinghia fa meno presa sulle pulegge, perciò nei primi secondi dopo l’avviamento slitta e fischia. Con il riscaldamento l’aderenza torna e il suono sparisce. Una cinghia nuova con un tenditore integro regge anche queste condizioni, quindi un fischio mattutino regolare è motivo di controllo.',
      },
      {
        q: 'Il fischio ora compare anche a motore caldo. È grave?',
        a: 'È il segno che l’usura ha raggiunto lo stadio in cui la cinghia slitta già in condizioni ordinarie. Per ora si può guidare, ma fissa l’officina entro la settimana: una cinghia rotta ti lascia senza alternatore e, su molte auto, senza pompa dell’acqua, e il viaggio finisce sul carro attrezzi.',
      },
      {
        q: 'Che differenza c’è tra il fischio dopo l’avviamento e lo stridore durante l’avviamento?',
        a: 'Fischio e stridio compaiono dopo che il motore è già in moto, e la colpa di solito è della cinghia. Lo stridore metallico si sente prima — nei secondi in cui il motorino gira il motore — e indica un cattivo innesto del pignone con la corona del volano. Componenti diversi e riparazione diversa.',
      },
    ],
  },

  'vibratsiya-na-holostyh': {
    h1: 'Vibrazione al minimo',
    metaTitle: 'Vibrazione al minimo: cause del tremolio e cosa fare | Stuk',
    description:
      'Perché l’auto trema al minimo: supporti motore, mancate accensioni, presa d’aria falsa o corpo farfallato sporco. Cosa controllare e se si può guidare.',
    intro: [
      'Un leggero tremolio al minimo ce l’ha qualunque auto, un diesel ancora di più. Qui si parla d’altro: di un tremolio che si sente nel volante, nel sedile e nello specchietto retrovisore e che prima non c’era. La causa più frequente sono i supporti motore: i tasselli in gomma su cui il motore è fissato alla scocca e che smorzano le sue oscillazioni. Con gli anni la gomma indurisce e si crepa, e la vibrazione che prima i tasselli assorbivano finisce nella scocca.',
      'Il secondo gruppo di cause: è il motore stesso a girare irregolare. Le mancate accensioni (quando un cilindro ogni tanto non scoppia — di solito per candele o bobine), una presa d’aria falsa da un manicotto crepato o dalla guarnizione dell’aspirazione, un corpo farfallato o iniettori sporchi rendono instabile il minimo. Distinguere questi casi dai supporti non è difficile: con essi la lancetta del contagiri trema o oscilla e spesso si accende la spia motore, mentre con supporti usurati il motore gira rotondo — a tremare è la scocca.',
    ],
    causes: [
      { name: 'Supporti motore', likelihood: 'Il più delle volte — soprattutto su auto di oltre 8–10 anni' },
      { name: 'Mancate accensioni: candele, bobine', likelihood: 'Frequente — se i giri tremano ed è accesa la spia motore' },
      { name: 'Presa d’aria falsa da un manicotto o dalla guarnizione dell’aspirazione', likelihood: 'Frequente — se i giri oscillano, a volte con un sibilo' },
      { name: 'Corpo farfallato o iniettori sporchi', likelihood: 'Frequente oltre i centomila chilometri' },
    ],
    canRide: [
      'Nella maggior parte degli scenari si può guidare: la vibrazione al minimo non è il sintomo per cui si lascia l’auto in corsia d’emergenza. Con supporti usurati ci sono una o due settimane per fissare con calma l’appuntamento; tirarla per mesi non conviene — supporti rovinati aggiungono colpi in partenza e nei cambi marcia e accelerano l’usura dei componenti vicini.',
      'Storia a parte è quando il motore chiaramente perde colpi: trema a scatti, la spia motore lampeggia o è accesa fissa, la potenza è calata. Anche con questo si può guidare, ma con prudenza e non a lungo: il carburante incombusto delle mancate accensioni finisce di bruciare nello scarico e surriscalda il catalizzatore, la cui sostituzione è costosa. La diagnosi, in quel caso, serve nei prossimi giorni e non quando capita.',
    ],
    checks: [
      'Prova dei supporti: inserire una marcia (D sull’automatico) e tenere il freno. La vibrazione di supporti usurati di solito aumenta nettamente in questa posizione.',
      'Guardare il contagiri: lancetta ferma e auto che trema depone per i supporti; lancetta che trema o oscilla significa motore irregolare.',
      'Accendere il climatizzatore e notare se il tremolio cambia: sotto carico aggiuntivo supporti deboli e minimo irregolare si manifestano di più, e questo dettaglio servirà al meccanico.',
      'Esaminare, senza smontare nulla, i sottili manicotti in gomma sotto il cofano: crepe e tubi sfilati sono un punto frequente di presa d’aria falsa.',
      'Ricordare quando sono state cambiate le candele: un chilometraggio ben oltre l’intervallo le rende il primo sospettato per le mancate accensioni. Se la spia motore è accesa, comincia dalla lettura degli errori: i codici restringono la ricerca.',
    ],
    appHelp:
      'L’app Stuk pone le stesse domande — il tremolio aumenta con la marcia inserita, i giri restano stabili, è accesa la spia motore — e dalle risposte distribuisce le cause probabili in percentuali. Nel rapporto trovi una conclusione chiara: viaggia tranquillo, fissa un appuntamento questa settimana o mostra l’auto nei prossimi giorni.',
    faq: [
      {
        q: 'Perché trema solo al minimo mentre in marcia l’auto va liscia?',
        a: 'Al minimo i giri sono minimi e il motore oscilla sui supporti a una frequenza che la scocca trasmette bene in abitacolo. Salendo di giri le oscillazioni diventano più piccole e si sentono meno. Per questo i supporti usurati si tradiscono al semaforo e non in autostrada.',
      },
      {
        q: 'Che cosa sono le mancate accensioni?',
        a: 'È quando la miscela in uno dei cilindri di tanto in tanto non si accende — quasi sempre per candele usurate o una bobina difettosa. In quel momento il motore perde parte della potenza e sussulta, mentre il carburante incombusto finisce di bruciare nello scarico e surriscalda il catalizzatore.',
      },
      {
        q: 'La pulizia del corpo farfallato aiuta?',
        a: 'Aiuta se la causa è lì: lo sporco impedisce di dosare con precisione l’aria al minimo, e i giri diventano irregolari. Ma la pulizia non è una cura universale: con supporti usurati o mancate accensioni la vibrazione resterà identica anche dopo.',
      },
    ],
  },

  'hlopki-v-glushitele': {
    h1: 'Scoppi nello scarico',
    metaTitle: 'Scoppi nello scarico: cause e cosa fare | Stuk',
    description:
      'Perché lo scarico scoppietta: mancate accensioni, scarico forato, miscela sbagliata o taratura dell’impianto GPL. Cosa fanno gli scoppi al catalizzatore e quando andare in officina.',
    intro: [
      'Scoppi o «colpi di pistola» dallo scarico significano che una parte del carburante non brucia nei cilindri, ma già nell’impianto di scarico. Il più delle volte la colpa è delle mancate accensioni: una candela usurata o una bobina difettosa non accende la miscela, la benzina incombusta finisce nello scarico caldo e lì si infiamma con il tipico scoppio.',
      'Il secondo gruppo di cause è l’impianto di scarico stesso: silenziatore, tubo o guarnizione forati aggiungono agli scoppi un rombo che cresce premendo l’acceleratore. Anche la miscela può essere sbagliata per colpa di sensori o iniettori, e sulle auto a GPL gli scoppi a gas sono un segno tipico di taratura sballata. Tutti gli scenari hanno un denominatore comune: il carburante incombusto finisce di bruciare nel catalizzatore — il componente dello scarico che brucia i gas nocivi —, lo surriscalda e a poco a poco lo distrugge, e sostituire un catalizzatore costa caro.',
    ],
    causes: [
      { name: 'Mancate accensioni: candele o bobine', likelihood: 'Il più delle volte' },
      { name: 'Silenziatore, tubo o guarnizione dello scarico forati', likelihood: 'Frequente — gli scoppi arrivano insieme a un rombo' },
      { name: 'Miscela sbagliata: sensori o iniettori', likelihood: 'Abbastanza frequente' },
      { name: 'Taratura sballata dell’impianto GPL', likelihood: 'Se gli scoppi compaiono solo a gas' },
      { name: 'Rombo in accelerazione senza spinta: la frizione slitta', likelihood: 'Caso a parte, dal suono simile' },
    ],
    canRide: [
      'Uno scoppio isolato rilasciando il gas non è un motivo per fermarsi: puoi arrivare a casa o in officina. Anche con scoppi regolari si può guidare, ma programma la diagnosi per i prossimi giorni e non per le prossime settimane: ogni scoppio è una porzione di carburante incombusto che finisce di bruciare nel catalizzatore, e il conto di una riparazione rimandata cresce da candele economiche al prezzo di un catalizzatore.',
      'Caso particolare: la spia motore lampeggiante. Così il sistema avverte di mancate accensioni in corso, pericolose per il catalizzatore proprio adesso. Con la spia che lampeggia, guida solo con calma e per poco, senza carico, e vai in officina senza rinvii. Se in abitacolo si sente odore di scarico, fino alla riparazione viaggia con un finestrino socchiuso e non scaldare l’auto in un garage chiuso: il monossido di carbonio è pericoloso.',
    ],
    checks: [
      'Notare quando scoppietta: sotto carico in accelerazione, rilasciando il gas o al minimo — questo dettaglio accorcia subito la ricerca del meccanico.',
      'Guardare la spia motore: accesa fissa significa diagnosi nei prossimi giorni; lampeggiante significa che le mancate accensioni sono in corso adesso e la visita non si rimanda.',
      'Valutare il funzionamento del motore: andatura irregolare, tremolio al minimo e potenza calata insieme agli scoppi indicano candele, bobine o miscela.',
      'Ascoltare lo scarico: un rombo che cresce premendo l’acceleratore con potenza normale è segno di un foro nel silenziatore o nel tubo, e non di problemi di accensione.',
      'Su un’auto a GPL, confrontare il funzionamento a gas e a benzina: scoppi solo a gas sono una domanda per chi ha tarato l’impianto.',
    ],
    appHelp:
      'L’app Stuk chiarisce le circostanze — scoppi o rombo, a gas o a benzina, con o senza perdita di potenza — e aiuta a separare problemi di accensione, un foro nello scarico e una frizione che slitta, che all’orecchio si somigliano. Nel rapporto trovi cause probabili con percentuali e una raccomandazione chiara sull’urgenza dell’officina.',
    faq: [
      {
        q: 'Perché scoppietta nello scarico se il problema è nel motore?',
        a: 'Quando la candela o la bobina non accende la miscela nel cilindro, la benzina incombusta viene spinta nell’impianto di scarico. Lì incontra componenti roventi e finisce di bruciare con una fiammata — ed è questo suono che si sente come scoppio dallo scarico. La fonte però sta sotto il cofano, non nel silenziatore.',
      },
      {
        q: 'Perché gli scoppi sono pericolosi per il catalizzatore?',
        a: 'Il catalizzatore è progettato per bruciare i residui dei gas di scarico, non porzioni di carburante crudo. La benzina che vi finisce di bruciare porta la temperatura oltre il previsto, e il nido d’ape ceramico fonde o si sbriciola. Il risultato: perdita di potenza, sferragliare da sotto il pianale e sostituzione del catalizzatore, uno dei lavori più costosi dello scarico.',
      },
      {
        q: 'La mia auto a GPL scoppietta a gas. È pericoloso?',
        a: 'Sì, e per l’impianto a gas gli scoppi sono più pericolosi che per il motore a benzina: un ritorno di fiamma nell’aspirazione può danneggiarne le parti in plastica e i sensori. La causa abituale è una taratura sballata o candele usurate. La cosa sensata è passare a benzina e fissare un appuntamento con uno specialista GPL.',
      },
    ],
  },
};
