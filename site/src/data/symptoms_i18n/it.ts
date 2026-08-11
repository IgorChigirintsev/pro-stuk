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
};
