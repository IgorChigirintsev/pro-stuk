import type { Dict } from './types';

export const it: Dict = {
  brand: 'Pro-Stuk',
  nav: {
    symptoms: 'Sintomi',
    how: 'Come funziona',
    articles: 'Articoli',
    analytics: 'Statistiche',
    lang: 'Lingua',
  },
  footer: {
    disclaimer:
      'Pro-Stuk fornisce una stima di probabilità basata sulle tue risposte e sul rumore, non ' +
      'una diagnosi. La decisione finale sulla riparazione spetta al meccanico dopo aver ' +
      'controllato l’auto.',
    how: 'Come funziona',
    privacy: 'Informativa sulla privacy',
    ruArticles: 'Articoli (in russo)',
    ruOnly: 'Guide per sintomo e articoli (in russo)',
  },
  home: {
    title: 'Pro-Stuk — diagnosi dell’auto dal rumore',
    description:
      'Registra il rumore e scopri che cos’ha l’auto. Un questionario breve, l’analisi ' +
      'della registrazione e un report: cause probabili con le percentuali, semaforo ' +
      'dell’urgenza e cosa dire in officina.',
    schemaDescription:
      'Diagnosi dei guasti dell’auto per sintomi e rumore: questionario, registrazione ' +
      'del suono e report con le cause probabili.',
    h1: 'Registra il rumore e scopri che cos’ha l’auto',
    sub:
      'Un questionario breve e una registrazione di 15–30 secondi. In cambio: cause ' +
      'probabili con le percentuali, semaforo dell’urgenza e le parole giuste per parlare ' +
      'in officina.',
    cta: 'Scarica l’app',
    ctaNote: 'Android · per ora gratis',
    howH2: 'Come funziona',
    steps: [
      {
        title: '1. Domande',
        text: 'Quando si sente il rumore e a cosa assomiglia: l’albero delle domande restringe la causa.',
      },
      {
        title: '2. Rumore',
        text: 'Registrazione di 15–30 secondi: lo spettro, il ritmo dei colpi e il regime del motore vengono calcolati sul server.',
      },
      {
        title: '3. Report',
        text: 'Cause con le percentuali, semaforo dell’urgenza e cosa dire in officina.',
      },
    ],
    faqH2: 'Domande frequenti',
    faq: [
      {
        q: 'È una diagnosi precisa?',
        a: 'No. Pro-Stuk dà una stima di probabilità: l’elenco delle cause possibili con le percentuali e il livello di urgenza. La diagnosi precisa la fa il meccanico dopo il controllo — il report serve ad arrivarci preparati.',
      },
      {
        q: 'Quanto costa?',
        a: 'Per ora è gratis: fino a 3 report completi sul rumore al giorno per dispositivo. Il verdetto preliminare dal questionario non ha limiti.',
      },
      {
        q: 'Quali auto sono supportate?',
        a: 'Autovetture con motore a benzina o diesel, con cambio manuale o automatico. Marca, anno e chilometraggio entrano nell’analisi.',
      },
      {
        q: 'Che fine fa la mia registrazione?',
        a: 'L’audio viene inviato al server, analizzato e non conservato dopo l’analisi. Non ci sono account né tracciatori pubblicitari.',
      },
      {
        q: 'E se non riesco a registrare il rumore?',
        a: 'Il report si basa prima di tutto sulle risposte, come il meccanico che comincia facendo domande. Se la registrazione non dice nulla, l’app lo ammette apertamente.',
      },
    ],
  },
  quiz: {
    h2: 'Prova subito',
    sub: 'Poche domande e vedrai la causa probabile e quanto è urgente.',
    urgOk: 'Puoi guidare',
    urgWarn: 'In officina questa settimana',
    urgStop: 'Fermati',
    back: 'Indietro',
    restart: 'Ricomincia',
    cta: 'Rapporto completo sul suono — nell’app',
    schemaMarked: 'Il cerchio indica dove portano le tue risposte: un’ipotesi, non una diagnosi.',
    schemaWhole: 'L’insieme completo.',
  },
  symptoms: {
    indexTitle: 'Rumori e sintomi dell’auto spiegati | Pro-Stuk',
    indexDescription: 'Colpi, ronzii, fischi, stridii: che cosa significa ogni rumore dell’auto, quanto è pericoloso e che cosa puoi controllare da solo. Guide per sintomo con albero diagnostico.',
    h1: 'Sintomi dal rumore',
    sub: 'Scegli il rumore più simile al tuo. In ogni guida: cause probabili, semaforo del pericolo, controlli sicuri da fare da soli e un albero diagnostico interattivo.',
    gDvigatel: 'Motore',
    gDvizhenie: 'In marcia',
    gTormozaRul: 'Freni e sterzo',
    gPodveska: 'Sospensioni',
    causesH2: 'Cause possibili',
    thCause: 'Causa',
    thLikelihood: 'Quanto è probabile',
    thDanger: 'Pericolo',
    canRideH2: 'Si può continuare a guidare',
    checksH2: 'Che cosa controllare da soli',
    quizH2: 'Restringere la causa con qualche domanda',
    quizSub: 'Rispondi a poche domande: l’albero diagnostico accorcerà l’elenco delle cause per il tuo caso.',
    appHelpH2: 'Come aiuta l’app',
    faqH2: 'Domande frequenti',
    lightOk: 'puoi guidare',
    lightWarn: 'in officina questa settimana',
    lightStop: 'fermati',
    mapTitle: 'Da dove viene il rumore',
    mapOk: 'Puoi raggiungere l’officina con calma',
    mapWarn: 'Non rimandare: controlla nei prossimi giorni',
    mapStop: 'In officina senza rinviare',
    zoneDvigatel: 'il vano motore',
    zoneDvizhenie: 'le ruote e tutto ciò che gira con loro',
    zoneTormoza: 'freni e sterzo, zona della ruota',
    zonePodveska: 'sospensioni, zona della ruota',
  },
  download: {
    h2: 'L’app per Android',
    sub: 'Il questionario, la registrazione del rumore e il report completo con le probabilità sono nell’app Pro-Stuk.',
    btn: 'Scarica per Android',
    meta: 'Versione {version} · APK {size} MB · aggiornato il {date}',
    installH: 'Come installare l’APK',
    steps: [
      'Scarica il file con il pulsante qui sopra.',
      'Aprilo dalla notifica o da «Download».',
      'Consenti l’installazione da questa origine quando il telefono lo chiede.',
      'Installa l’app e aprila.',
    ],
    playNote: 'Quando l’app arriverà su Google Play, questa pagina verrà aggiornata.',
  },
  how: {
    title: 'Come funziona la diagnosi dal rumore | Pro-Stuk',
    description:
      'Senza giri di parole: il questionario come strumento principale, l’analisi spettrale ' +
      'della registrazione, un modello linguistico e i difetti tipici di ogni modello. ' +
      'Perché il risultato resta una probabilità.',
    schemaName: 'Come funziona la diagnosi dal rumore',
    h1: 'Come funziona',
    formH2: 'Il questionario è lo strumento principale',
    formP:
      'Ogni diagnosi comincia con delle domande: quando è comparso il rumore, a cosa ' +
      'assomiglia, se dipende dalla velocità, dal regime del motore, dalla frenata, dalle ' +
      'curve. Le risposte escludono interi gruppi di cause e valgono più di qualsiasi ' +
      'algoritmo applicato a una registrazione scadente. Per questo in Pro-Stuk il questionario ' +
      'viene prima, e la sua logica è un albero decisionale: ogni risposta porta alla domanda ' +
      'successiva, più precisa.',
    recH2: 'Che cosa succede alla registrazione',
    recP: [
      'La registrazione di 15–30 secondi arriva al server. Prima la elabora la matematica ' +
        'ordinaria, senza reti neurali: lo spettro del suono, il suo colore (fischio tonale o ' +
        'rumore a banda larga), il ritmo dei colpi e la loro frequenza, una stima del regime ' +
        'del motore dalla banda delle basse frequenze. Ogni indizio riceve un voto di ' +
        'affidabilità: se la registrazione è debole o disturbata, gli indizi vengono segnalati ' +
        'onestamente come poco affidabili.',
      'Poi un modello linguistico mette insieme tutto: le risposte del questionario, gli ' +
        'indizi della registrazione, l’audio stesso e i dati dell’auto — marca, anno, ' +
        'chilometraggio e i difetti tipici di quel modello. In uscita: 2–4 cause probabili ' +
        'con le percentuali, un livello di urgenza e indicazioni per l’officina.',
    ],
    probH2: 'Perché il risultato è una probabilità',
    probP: [
      'Guasti diversi fanno lo stesso rumore: il ronzio di un cuscinetto ruota si confonde ' +
        'facilmente con il rumore delle gomme, e il battito dei tiranti della barra ' +
        'stabilizzatrice con parti della sospensione ben più serie. Distinguerli con certezza ' +
        'si può solo sul ponte sollevatore. Per questo Pro-Stuk non fa diagnosi e non promette ' +
        'precisione: distribuisce onestamente le probabilità e dice cosa controllare per primo.',
      'Una buona registrazione migliora la stima, ma non sostituisce il meccanico. Prendi il ' +
        'report come un secondo parere prima di andare in officina: il discorso con il ' +
        'meccanico diventa concreto e diventa più difficile vendere una riparazione inutile.',
    ],
    dataH2: 'Dati',
    dataP:
      'L’audio viene analizzato sul server e non viene conservato dopo l’analisi. Non ci ' +
      'sono account, né strumenti di analisi, né tracciatori pubblicitari. Maggiori dettagli ' +
      'nell’',
    dataLink: 'informativa sulla privacy',
    dataTail: '.',
  },
  privacy: {
    title: 'Informativa sulla privacy | Pro-Stuk',
    description:
      'Che cosa succede ai tuoi dati nell’app Pro-Stuk: l’audio è elaborato sul server e non conservato, l’accesso avviene con Google o Apple, nessuna analitica.',
    h1: 'Informativa sulla privacy',
    updatedLabel: 'Aggiornato',
    intro:
      'L’app Pro-Stuk raccoglie il minimo indispensabile: esattamente quello che serve alla diagnosi, niente di più.',
    items: [
      {
        strong: 'La registrazione',
        text: 'parte verso il server solo quando premi il pulsante. Serve all’analisi e non viene conservata una volta pronto il referto, né sul server né in alcun file.',
      },
      {
        strong: 'Il suono lo analizza Google.',
        text: 'La registrazione viene inviata all’API Google Gemini, il servizio che la analizza per nostro conto. Insieme non viaggia nulla che permetta di identificarti.',
      },
      {
        strong: 'I dati dell’auto',
        text: '(marca, modello, anno, chilometraggio) e le tue risposte partono con la registrazione: è su questi che vengono pesate le cause.',
      },
      {
        strong: 'Accesso con Google o Apple.',
        text: 'L’app non crea account propri e non chiede alcuna password. Dallo store riceve solo il tuo numero utente permanente: a esso sono legati il garage e il saldo dei controlli. Nome, foto ed e-mail non vengono richiesti né conservati.',
      },
      {
        strong: 'Gli acquisti li gestisce lo store.',
        text: 'Il pagamento lo incassa Google Play o l’App Store; i dati della carta non arrivano mai a noi. Il nostro server riceve solo la conferma dello store e accredita i controlli; la ricevuta viene conservata per non accreditare due volte.',
      },
      {
        strong: 'L’indirizzo IP',
        text: 'è visibile al server, come in qualsiasi visita in rete, e serve soltanto a evitare il sovraccarico. Resta in memoria per qualche minuto, non finisce in alcun database e non viene collegato ai referti.',
      },
      {
        strong: 'Non ci sono tracker di terzi né pubblicità.',
        text: 'Il sito conta visualizzazioni anonime sul proprio server: senza cookie, senza identificatori e senza cedere dati a nessuno. Nell’app non c’è alcuna analitica.',
      },
      {
        strong: 'Lo storico dei referti',
        text: 'resta solo sul tuo dispositivo e si cancella insieme all’app.',
      },
      {
        strong: 'La trasmissione è cifrata.',
        text: 'L’app parla con il server in HTTPS.',
      },
      {
        strong: 'Come cancellare i dati.',
        text:
          'Disinstallare l’app basta per cancellare lo storico dei referti sul telefono. L’account, insieme al garage e ai controlli rimasti, si elimina dentro l’app: «Impostazioni» → «Elimina account». La cancellazione è definitiva e i controlli non usati non vengono rimborsati.',
      },
      {
        strong: 'L’app non è pensata per i bambini.',
        text: 'È rivolta agli automobilisti.',
      },
    ],
    outro:
      'Il microfono si attiva solo durante la registrazione e solo su tua richiesta. Il referto è una stima di probabilità, non una diagnosi; la decisione di riparare spetta al meccanico dopo il controllo.',
    contactTitle: 'Come contattarci',
    contactText:
      'L’app e il sito Pro-Stuk sono gestiti da {operator}. Domande sui dati, reclami e richieste di cancellazione:',
    changes:
      'Se questa informativa cambia, cambia con essa la data di aggiornamento in cima alla pagina.',
  },
  og: {
    tagline: 'Trova il guasto dal rumore',
  },
  notFound: {
    title: 'Pagina non trovata — Pro-Stuk',
    description:
      'Questa pagina non esiste sul sito. Torna alla home o apri le guide ai sintomi per rumore.',
    h1: 'Pagina non trovata',
    text:
      'L’indirizzo contiene un errore di battitura oppure la pagina è stata spostata. Il rumore che ti ha portato qui c’è ancora: riparti dalla home o apri le guide ai sintomi.',
    home: 'Vai alla home',
  },
  deleteAccount: {
    title:
      'Eliminare l’account | Pro-Stuk',
    h1:
      'Eliminare l’account',
    description:
      'Come eliminare l’account Pro-Stuk insieme al garage e ai controlli rimasti: con un pulsante nell’app oppure via e-mail se l’app è già disinstallata.',
    intro:
      'L’account viene eliminato per intero: garage, auto, storico degli acquisti e tutti i controlli rimasti. Nulla può essere recuperato e i controlli non usati non vengono rimborsati.',
    appT:
      'Dall’app, il modo più rapido',
    app:
      'Apri «Impostazioni» e tocca «Elimina account». L’app chiede conferma e rimuove subito il record: non c’è nulla da attendere.',
    mailT:
      'Via e-mail, se l’app è già disinstallata',
    mail:
      'Scrivici dall’indirizzo del tuo account Google o Apple indicando con quale dei due accedevi. Eliminiamo entro 30 giorni e rispondiamo a cose fatte.',
    whatT:
      'Che cosa viene eliminato',
    what:
      'Dall’account spariscono i posti in garage, le auto, il saldo dei controlli e l’elenco degli acquisti elaborati. Le registrazioni non vengono conservate affatto: si scartano dopo l’analisi. Lo storico dei referti sta sul telefono e se ne va con l’app.',
  },
};
