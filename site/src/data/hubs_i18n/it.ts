import type { HubText } from './index';

/** Разделы по узлам: итальянский. Слаг общий с английским, переводится только текст. */
export const it: Record<string, HubText> = {
  dvigatel: {
    h1: 'Rumori e battiti del motore',
    short: 'Motore',
    metaTitle: 'Rumori e battiti del motore: la guida | Pro-Stuk',
    description:
      'Tutti i rumori del motore in un solo posto: battiti, ticchettio, sferragliamento, tintinnio, fischi. Come separare l’innocuo dal pericoloso e cosa controllare da soli.',
    intro: [
      'Il motore è la parte più loquace dell’auto e anche la più ambigua: sotto la parola «battito» stanno sia l’innocuo ticchettio degli iniettori sia le bronzine dell’albero motore consumate, dove ogni chilometro avvicina la revisione. A distinguerli non è il volume, ma da dove arriva il suono, quando compare e come reagisce al gas e alla temperatura.',
      'Questa sezione raccoglie una guida per ogni tipo di rumore: dal ticchettio delle valvole e dal fruscio della catena di distribuzione alla detonazione e al battito delle bronzine di biella. Ognuna descrive il suono, i controlli sicuri senza smontare nulla e una valutazione onesta dell’urgenza.',
    ],
  },
  podveska: {
    h1: 'Colpi e cigolii delle sospensioni',
    short: 'Sospensioni e sterzo',
    metaTitle: 'Colpi e cigolii delle sospensioni: la guida | Pro-Stuk',
    description:
      'Colpi sulle asperità, cigolii, gioco nello sterzo: come individuare l’origine nelle sospensioni e nello sterzo e cosa potete controllare da soli.',
    intro: [
      'Le sospensioni si consumano gradualmente e quasi sempre avvisano con un rumore molto prima di diventare pericolose. Il problema è un altro: lo stesso colpo sulle buche lo producono sia i biscottini della barra, che costano poco, sia il giunto sferico, la cui rottura in velocità è già una questione di sicurezza.',
      'La sezione raccoglie le guide per carattere del suono e condizioni: colpi rapidi sull’asfalto ondulato, singoli impatti nelle buche, cigolio quando si fa oscillare l’auto, colpi nel volante. A parte, i segni di usura di ogni componente e i controlli che si fanno senza ponte.',
    ],
  },
  tormoza: {
    h1: 'Fischi e raschio dei freni',
    short: 'Freni e ruote',
    metaTitle: 'Fischi e raschio dei freni: la guida | Pro-Stuk',
    description:
      'Fischio, stridio, raschio e vibrazione in frenata: cosa significa ogni suono, quando non si deve proseguire e come controllare pastiglie e pinza da soli.',
    intro: [
      'I freni sono l’unico sistema in cui il suono va preso alla lettera: la maggior parte dei segnali è voluta dal costruttore. L’indicatore metallico di usura inizia a fischiare apposta quando le pastiglie stanno finendo, e il raschio metallo su metallo significa che la riserva è già esaurita.',
      'Allo stesso tempo la causa più frequente di fischio è innocua: la patina di ruggine notturna sui dischi, che sparisce nelle prime frenate. Qui rientrano anche i rumori di ruote e mozzi: ronzio del cuscinetto, vibrazione in velocità e battiti, spesso scambiati per rumori dei freni.',
    ],
  },
  transmissiya: {
    h1: 'Rumori del cambio e della trasmissione',
    short: 'Trasmissione',
    metaTitle: 'Rumori del cambio e della trasmissione: la guida | Pro-Stuk',
    description:
      'Ululato del cambio, scatti dei semiassi, colpi al cambio marcia e ronzio della frizione: come individuare l’origine sotto il pianale.',
    intro: [
      'La trasmissione si manifesta diversamente da motore e sospensioni: i suoi rumori dipendono dal fatto che venga trasmessa coppia. Un suono che sparisce rilasciando il gas e torna sotto carico appartiene quasi sempre a questa famiglia.',
      'La sezione riunisce le guide su cambio, frizione, semiassi e differenziale: come suona ogni organo, quale controllo mostra qualcosa senza smontare e da quando proseguire diventa costoso.',
    ],
  },
  vyhlop: {
    h1: 'Rumori dello scarico',
    short: 'Scarico',
    metaTitle: 'Rumori dello scarico: la guida completa | Pro-Stuk',
    description:
      'Rombo, scoppi nel silenziatore, sferragliamento sotto il pianale e lamiera termica che tintinna: cosa indicano i rumori dello scarico e perché contano.',
    intro: [
      'Lo scarico produce i suoni più riconoscibili in assoluto: il rombo di un silenziatore forato, gli scoppi al rilascio, il tintinnio metallico a un certo regime. Quasi nessuno cambia il comportamento dell’auto, ma ignorarli non conviene: dietro un tintinnio apparentemente innocuo a volte c’è un catalizzatore che si sbriciola, e i suoi frammenti possono finire nel motore.',
      'La sezione copre tutto il percorso: dalla lamiera termica da pochi euro e dal flessibile strappato alla guarnizione del collettore bruciata e al catalizzatore intasato, con il suono di ogni guasto e il rischio che i gas entrino in abitacolo.',
    ],
  },
  salon: {
    h1: 'Cigolii e rumori dell’abitacolo',
    short: 'Abitacolo e carrozzeria',
    metaTitle: 'Cigolii dell’abitacolo: trovare l’origine | Pro-Stuk',
    description:
      'Grilli in abitacolo, plancia che cigola, portiere che battono: come trovare l’origine da soli e distinguerla da un difetto del sottoscocca.',
    intro: [
      'I rumori dell’abitacolo sono i più fastidiosi e di solito i più economici da risolvere: dietro c’è più spesso una clip allentata, un oggetto non fissato nel bagagliaio o una guarnizione secca che un guasto. L’importante è saperli distinguere da un colpo delle sospensioni, perché una plastica che cigola non diventi una fattura di diagnosi del sottoscocca.',
      'La sezione mostra modi semplici per circoscrivere il suono: premere il pannello con la mano mentre l’auto va, svuotare il bagagliaio, torcere la scocca salendo con una ruota sul marciapiede. E un criterio onesto per capire quando il rumore viene davvero da sotto.',
    ],
  },
};
