import type { SymptomTr } from '../types';

/** Разборы симптомов по-французски. Структура — из русских файлов рядом. */
export const pages: Record<string, SymptomTr> = {
  'stuk-v-dvigatele': {
    h1: 'Cognement dans le moteur',
    metaTitle: 'Le moteur cogne : causes, gravité, que faire | Pro-Stuk',
    description:
      'Pourquoi le moteur cogne : du cliquetis anodin des soupapes aux coussinets de vilebrequin usés. Comment reconnaître un cognement dangereux, si vous pouvez rouler et quoi vérifier vous-même.',
    intro: [
      'Le cognement moteur est le symptôme dont la gravité varie le plus : derrière le même mot se cachent aussi bien le claquement anodin des injecteurs que des coussinets de vilebrequin usés, avec lesquels chaque kilomètre rapproche la réfection. La bonne nouvelle, c’est que les différents cognements sonnent différemment et apparaissent dans des conditions différentes : ces indices resserrent vite le cercle des causes.',
      'Les questions par lesquelles commence tout motoriste : où ça cogne (en haut du moteur ou depuis les profondeurs), quand (à froid, à chaud, en charge) et si le bruit change avec le régime. Un cliquetis léger et rapide venu du haut, c’est en général la distribution des soupapes. Un cognement sourd venu du bas, qui s’accélère quand on donne un coup d’accélérateur et grossit en charge, voilà la variante inquiétante.',
    ],
    causes: [
      { name: 'Jeux aux soupapes trop grands ou poussoirs hydrauliques', likelihood: 'Très souvent — la cause typique du cliquetis venu du haut' },
      { name: 'Claquement normal des injecteurs (injection directe et diesel)', likelihood: 'Fréquent — et ce n’est pas une panne' },
      { name: 'Accessoires : poulies, supports, embrayage du compresseur de clim', likelihood: 'Fréquent quand le cognement ignore l’accélérateur' },
      { name: 'Cliquetis de détonation à l’accélération', likelihood: 'Fréquent après un plein d’essence à indice d’octane trop bas' },
      { name: 'Coussinets de vilebrequin et de bielle', likelihood: 'Plus rare, mais c’est le scénario dangereux' },
    ],
    canRide: [
      'Tout dépend du caractère du cognement. Avec un cliquetis régulier venu du haut, vous pouvez rouler : la distribution s’use en mois, pas en un trajet — mais prenez rendez-vous pour un réglage dans les deux semaines. Avec le claquement des injecteurs sur un moteur à injection directe, il n’y a rien à faire : c’est le fonctionnement normal du circuit de carburant.',
      'Un cognement sourd venu des profondeurs du moteur, qui s’accélère avec le régime et grossit en charge, est une raison de s’arrêter. Ainsi sonnent des coussinets usés — les paliers dans lesquels tourne le vilebrequin. Continuer peut se terminer par un coussinet tourné ou un moteur serré ; mieux vaut ne pas rejoindre le garage par ses propres moyens et appeler une dépanneuse.',
    ],
    checks: [
      'Vérifier le niveau d’huile à la jauge : un niveau bas accompagne et amplifie les cognements moteur, et un cognement de coussinets avec une pression d’huile faible progresse vite.',
      'Écouter d’où vient le son : placez-vous devant le capot ouvert — le cliquetis des soupapes s’entend en haut, le cognement de coussinets est sourd et vient d’en bas, des profondeurs.',
      'Donner doucement un coup d’accélérateur au point mort : un cognement qui s’accélère avec le régime et sonne plus fort en charge est plus grave que celui qui vit sa vie.',
      'Se rappeler le dernier plein : un tintement métallique à l’accélération après une essence douteuse ressemble à de la détonation et disparaît souvent après un plein de bon carburant.',
      'Regarder si le témoin de pression d’huile est allumé : la burette rouge accompagnée d’un cognement veut dire couper le moteur immédiatement.',
    ],
    appHelp:
      'L’application Pro-Stuk vous fait passer par les mêmes questions qu’un motoriste, enregistre le bruit et évalue son spectre et son rythme : à quelle fréquence arrivent les coups et comment cela se rapporte au régime — pour un cognement de soupapes et un cognement de vilebrequin, ce rapport diffère. Le rapport donne les causes probables avec des pourcentages, un feu d’urgence et des formulations pour la discussion au garage.',
    faq: [
      {
        q: 'Pourquoi le moteur cogne-t-il seulement à froid ?',
        a: 'Tant que le moteur n’est pas chaud, les jeux entre les pièces sont plus grands et l’huile épaisse n’a pas encore atteint tous les organes. Un cliquetis des poussoirs ou un cognement sourd des pistons pendant les premières minutes après un démarrage à froid, qui disparaît complètement à la montée en température, relève en général de l’observation et non de l’urgence.',
      },
      {
        q: 'À quoi ressemble le cognement moteur le plus dangereux ?',
        a: 'Sourd, grave, venu des profondeurs du moteur ; il s’accélère avec le régime et grossit en charge — à l’accélération ou en côte. Ainsi cognent les coussinets de bielle et de ligne d’arbre. Avec ce bruit, mieux vaut ne pas conduire soi-même et amener la voiture au mécanicien au plus vite.',
      },
      {
        q: 'Un cognement peut-il être normal ?',
        a: 'Oui. Les moteurs à injection directe (TSI, GDI) et les diesels claquent toujours des injecteurs — le bruit est identique à froid et à chaud et s’entend plus fort dehors que dans l’habitacle. C’est un fonctionnement normal, pas une panne.',
      },
    ],
  },

  'skrip-tormozov': {
    h1: 'Grincement des freins',
    metaTitle: 'Les freins grincent : dangereux ou non, causes et solutions | Pro-Stuk',
    description:
      'Pourquoi les freins grincent : la pellicule de rouille du matin, le témoin d’usure des plaquettes ou un problème de disques. Comment distinguer un grincement anodin d’un avertissement.',
    intro: [
      'Le grincement au freinage est ce cas rare où la cause la plus fréquente est aussi la plus anodine. Pendant la nuit, après la pluie ou un lavage, les disques se couvrent d’une fine pellicule de rouille ; les premiers freinages la raclent — d’où le grincement. Si au bout de deux minutes de route le bruit a disparu, il n’y a rien à faire : c’est la vie normale de toute voiture à freins à disque.',
      'Le grincement à chaque freinage, c’est autre chose. Beaucoup de plaquettes ont un témoin d’usure métallique : une languette qui vient exprès toucher le disque et couiner quand la garniture est usée jusqu’à sa limite. C’est un avertissement voulu : faites contrôler les plaquettes avant que le grincement ne devienne un frottement métal contre métal — celui-là signifie déjà des disques abîmés et une distance de freinage allongée.',
    ],
    causes: [
      { name: 'Pellicule de rouille après une nuit, la pluie ou un lavage', likelihood: 'Le plus souvent — si le grincement part aux premiers freinages' },
      { name: 'Témoin d’usure : plaquettes en fin de vie', likelihood: 'Fréquent — s’il couine à chaque freinage' },
      { name: 'Plaquettes durcies ou bas de gamme, poussière entre plaquette et disque', likelihood: 'Fréquent ; désagréable, mais pas dangereux' },
      { name: 'Plaquettes usées jusqu’au métal (frottement)', likelihood: 'Si l’avertissement a été ignoré' },
    ],
    canRide: [
      'Avec le grincement matinal qui disparaît après les premiers freinages, roulez sans restriction : quelques appuis doux sur la pédale nettoient les disques et l’affaire est close jusqu’à la prochaine pluie.',
      'Avec un couinement permanent, vous pouvez rouler aussi — les freins travaillent encore pleinement — mais prenez rendez-vous cette semaine et non « un jour » : si c’est le témoin d’usure, l’étape suivante est le frottement métallique, des plaquettes usées jusqu’au support et une facture qui inclut aussi les disques. Le métal contre métal est un signal d’arrêt : uniquement jusqu’au garage, en freinant tôt et doucement.',
    ],
    checks: [
      'Repérer la régularité : grincement seulement aux premiers freinages après l’arrêt ou par temps humide, c’est la rouille ; à chaque freinage, c’est un motif de contrôle.',
      'Regarder entre les rayons de la jante : sur beaucoup de voitures la plaquette extérieure est visible. Une garniture de moins de 3–4 mm demande un remplacement.',
      'Écouter si c’est un côté ou les deux : un couinement d’un seul côté oriente vers le témoin d’usure ou un étrier qui coince précisément là.',
      'Vérifier s’il y a un sifflement en roulant sans freiner, qui change quand on effleure la pédale — c’est le témoin d’usure qui touche le disque avant même l’appui.',
      'Surveiller la pédale et la trajectoire : une voiture qui tire d’un côté au freinage, une pédale qui pulse ou qui s’allonge sont plus graves qu’un grincement et signifient garage sans délai.',
    ],
    appHelp:
      'L’application Pro-Stuk sépare le scénario anodin de l’inquiétant avec les mêmes questions — quand ça grince et si le bruit disparaît — et l’enregistrement aide à distinguer le couinement aigu du témoin d’usure du frottement métallique. Le rapport donne les causes probables avec des pourcentages et un feu : vous pouvez rouler, au garage cette semaine ou arrêtez-vous.',
    faq: [
      {
        q: 'Pourquoi les freins grincent-ils le matin et sous la pluie ?',
        a: 'Sur des disques en fonte, une fine couche de rouille se forme en quelques heures d’air humide. Les premiers freinages la raclent — d’où le grincement et le léger raclement, qui disparaissent vite. C’est normal et n’exige aucune réparation.',
      },
      {
        q: 'Qu’est-ce que le témoin d’usure des plaquettes ?',
        a: 'Une languette métallique sur la plaquette qui se met à toucher le disque et à couiner fort dès que la garniture est usée jusqu’à sa limite. C’est un avertissement prévu par construction : si vous entendez un couinement permanent, prenez rendez-vous pour remplacer les plaquettes avant que le frottement métallique ne commence.',
      },
      {
        q: 'Quelle différence entre grincement et frottement métallique ?',
        a: 'Le grincement et le couinement sont des sons aigus alors que les freins travaillent encore pleinement. Le frottement est un bruit rêche de métal contre métal : la garniture est finie et le support en acier de la plaquette frotte le disque. Avec ce bruit, on ne roule pas — seulement prudemment jusqu’au garage.',
      },
    ],
  },

  'gul-pri-dvizhenii': {
    h1: 'Ronflement en roulant',
    metaTitle: 'Ronflement en roulant : roulement, pneus ou boîte | Pro-Stuk',
    description:
      'Ronflement régulier à une certaine vitesse : roulement de roue, pneus, boîte de vitesses ou pont. Des tests simples sans garage — le test au point mort et les virages doux — pour cerner la cause.',
    intro: [
      'Un ronflement régulier qui apparaît avec la vitesse et grandit avec elle vient le plus souvent de l’une de deux sources : le roulement de roue — le palier sur lequel la roue tourne — ou les pneus. On peut les distinguer sans garage. Un roulement ronfle pareil sur n’importe quel bitume, évoque un avion qui décolle au loin et change souvent dans les courbes douces. Les pneus, eux, réagissent au revêtement : plus discrets sur du bitume neuf, plus forts sur du rugueux ; les pneus hiver, tout-terrain et usés irrégulièrement sont les plus bruyants.',
      'Plus rarement la source est la transmission : boîte de vitesses, pont ou arbre de transmission sur les propulsions et les quatre roues motrices. Le test au point mort départage les hypothèses : atteignez la vitesse à laquelle vous entendez le ronflement, passez au point mort et laissez rouler. Si le ronflement reste, il est lié à la rotation des roues — roulements, pneus, revêtement. S’il disparaît avec le régime moteur, il faut chercher du côté du moteur et de ce qu’il entraîne.',
    ],
    causes: [
      { name: 'Roulement de roue', likelihood: 'Le plus souvent — ronflement régulier, croît avec la vitesse, revêtement indifférent' },
      { name: 'Bruit des pneus', likelihood: 'Fréquent — dépend du revêtement ; pneus hiver et usés plus bruyants' },
      { name: 'Boîte de vitesses ou pont', likelihood: 'Plus rare — le hurlement change selon le rapport ou à l’accélérateur' },
      { name: 'Arbre de transmission (propulsion et quatre roues motrices)', likelihood: 'Ronflement avec vibration dans le plancher sur une plage de vitesse étroite' },
      { name: 'Bruit aérodynamique : joints de portes, barres de toit', likelihood: 'Seulement au-dessus de 70–90 km/h' },
    ],
    canRide: [
      'Avec un roulement qui ronfle on peut rouler, mais ce n’est pas un bruit à traîner pendant des mois : un roulement usé prend du jeu — un débattement libre de la roue — et, dans un cas négligé, peut se bloquer. Le plan raisonnable : diagnostic dans la semaine, longs trajets rapides reportés jusque-là. Si le ronflement a brusquement grossi ou qu’une vibration s’y est ajoutée, ne tardez pas.',
      'Le bruit des pneus et le bruit aérodynamique sont une question de confort, pas de sécurité : roulez sans restriction. Un hurlement de boîte ou de pont n’oblige pas non plus à s’arrêter sur la bande d’arrêt d’urgence, mais ne doit pas traîner : pris tôt, une vidange suffit souvent, alors qu’une réparation tardive avec arbres et pignons coûte plusieurs fois plus cher.',
    ],
    checks: [
      'Test au point mort : atteignez la vitesse du ronflement, passez au point mort et laissez rouler. Le ronflement reste : roues et roulements ; il part avec le régime : moteur et transmission.',
      'Courbes larges sur une ligne droite sûre : si dans un arc doux d’un côté le ronflement faiblit et de l’autre grossit, cela ressemble à un roulement, et le côté vous dit lequel.',
      'Comparer les revêtements : parcourez une portion de bitume neuf et une portion rugueuse. Une différence nette de volume désigne les pneus.',
      'Regarder la bande de roulement et vérifier les pressions : une usure en dents de scie — des marches sur les bords des pavés — rend les pneus bruyants et suggère une géométrie faussée ou des amortisseurs fatigués.',
      'En boîte manuelle, vérifier si le hurlement change selon les rapports à vitesse égale ; en propulsion, si un tremblement dans le plancher accompagne le ronflement sur une plage de vitesse étroite.',
    ],
    appHelp:
      'L’application Pro-Stuk vous fait passer par les mêmes questions — le ronflement reste-t-il au point mort, change-t-il en courbe et selon le revêtement — et aide à enregistrer le bruit pour comparer son caractère avec des cas typiques. Le rapport donne les causes probables avec des pourcentages et une conclusion : roulez tranquillement, planifiez le garage ou faites vérifier sans délai.',
    faq: [
      {
        q: 'Comment distinguer un roulement du bruit des pneus ?',
        a: 'Par leur réaction à la route et aux courbes. Le bruit des pneus change avec le revêtement : plus discret sur bitume neuf, plus fort sur rugueux. Un roulement ronfle pareil partout, mais répond souvent aux courbes douces, quand la charge passe sur la roue extérieure. L’examen de la bande de roulement aide aussi : des pneus usés irrégulièrement ronflent d’eux-mêmes.',
      },
      {
        q: 'Est-il dangereux de rouler avec un roulement qui ronfle ?',
        a: 'Au début non, mais il ne faut pas traîner : avec le temps, du jeu apparaît, la roue se met à flotter et, dans le pire des cas, le roulement se bloque. Le contrôle est simple : sur un pont, le mécanicien fait tourner les roues et repère le moyeu bruyant en quelques minutes. Un délai raisonnable pour la visite : une semaine.',
      },
      {
        q: 'Pourquoi le ronflement change-t-il en virage ?',
        a: 'En virage, le poids de la voiture passe sur les roues extérieures. Si le roulement droit ronfle, un virage à gauche augmente sa charge et le ronflement grossit ; à droite, il s’atténue. Cette régularité permet de déterminer le côté avant même le garage : retenez-la et dites-la au mécanicien.',
      },
    ],
  },

  'stuk-v-podveske': {
    h1: 'Bruit de choc dans la suspension',
    metaTitle: 'Bruit dans la suspension : ce qui cogne et peut-on rouler | Pro-Stuk',
    description:
      'Ce qui cogne dans la suspension : biellettes de barre stabilisatrice, silentblocs, crémaillère de direction ou ressort cassé. Comment distinguer les bruits par leur caractère et quand aller au garage.',
    intro: [
      'La suspension d’une voiture, ce sont plusieurs dizaines d’articulations, de bagues en caoutchouc et de supports, et avec l’âge le jeu — le débattement libre — dans l’un d’eux devient presque inévitable. Une pièce fatiguée répond à chaque irrégularité par un choc : la suspension se comprime et se détend, et la pièce usée bat dans son logement. La bonne nouvelle : ce sont d’abord les pièces bon marché qui lâchent — les biellettes de barre stabilisatrice, de petites tiges à rotules qui s’usent avant tout le reste.',
      'Le caractère du bruit en dit long avant même le pont élévateur. Un martèlement sourd et fréquent sur les petites ondulations et les joints de chaussée, c’est la signature des biellettes. Des chocs isolés dans les nids-de-poule et sur les dos-d’âne désignent les silentblocs — les articulations en caoutchouc par lesquelles les bras sont fixés à la caisse — ou des amortisseurs fatigués. Un choc qui remonte droit dans le volant et se sent dans les paumes, c’est du jeu dans la crémaillère de direction. Et un grincement « de vieux lit » n’est pas un choc du tout, mais du caoutchouc sec dans les bagues : le plus anodin de la liste.',
    ],
    causes: [
      { name: 'Biellettes de barre stabilisatrice', likelihood: 'Le plus souvent — martèlement sourd et fréquent sur les petites bosses' },
      { name: 'Silentblocs de bras ou amortisseurs', likelihood: 'Fréquent — chocs sourds isolés dans les nids-de-poule' },
      { name: 'Jeu dans la crémaillère de direction', likelihood: 'Plus rare — le choc remonte dans le volant et se sent dans les mains' },
      { name: 'Bagues de barre stabilisatrice, silentblocs secs (grincement, pas choc)', likelihood: 'Fréquent — surtout par grand froid et par temps humide' },
      { name: 'Ressort de suspension cassé', likelihood: 'Rare — brutalement après un nid-de-poule, un coin de la voiture affaissé' },
    ],
    canRide: [
      'Avec la plupart des bruits de suspension on peut rouler : biellettes, silentblocs et bagues ne lâchent pas d’un coup. Il ne faut pourtant pas repousser le diagnostic de plusieurs mois : une pièce fatiguée transmet les chocs plus loin et accélère l’usure de ses voisines, et des choses plus sérieuses peuvent cogner de façon semblable à l’oreille. Raisonnable : un rendez-vous sous une à deux semaines et, d’ici là, passer lentement les grands trous.',
      'Deux cas demandent plus d’attention. Un choc qui remonte dans le volant concerne la direction, un organe de sécurité : contrôle dans les jours qui viennent, et si le volant est devenu flou au point milieu ou que la voiture flotte dans sa voie, sans délai. Un fracas apparu brutalement après un nid-de-poule, accompagné d’un coin de caisse affaissé, c’est le tableau typique d’un ressort cassé : roulez en douceur jusqu’au garage, car la spire cassée peut se déplacer et abîmer le pneu.',
    ],
    checks: [
      'Faire osciller la voiture à l’arrêt en poussant l’aile au-dessus de chaque roue : les grincements de bagues et de silentblocs se reproduisent souvent sur place.',
      'Repérer la régularité : ça cogne sur les petites ondulations, ce sont plutôt les biellettes ; sur les trous isolés, plutôt silentblocs et amortisseurs.',
      'Déterminer si le bruit vient de l’avant ou de l’arrière et s’il remonte dans le volant : un choc senti dans les paumes qui s’atténue quand on tient le volant légèrement en tension signale du jeu dans la crémaillère.',
      'Enfoncer chaque coin de la voiture et relâcher : la caisse doit revenir en place sans osciller. Si elle continue de balancer, l’amortisseur est fatigué.',
      'Regarder derrière la roue depuis le bas, sans rien démonter : une spire cassée se voit souvent à l’œil nu, et l’on remarque du même coup si un coin de la voiture est affaissé.',
    ],
    appHelp:
      'L’application Pro-Stuk suit les mêmes bifurcations qu’un mécanicien à la réception : quel bruit, sur quelles irrégularités, avant ou arrière, remonte-t-il dans le volant. L’enregistrement évite de perdre les détails avant la visite, et le rapport donne les causes probables avec des pourcentages et un feu clair : vous pouvez rouler, montrez-le cette semaine ou faites vérifier d’urgence.',
    faq: [
      {
        q: 'Est-il dangereux de rouler avec un bruit de suspension ?',
        a: 'La plupart du temps, un choc ne signifie pas une panne immédiate : biellettes et silentblocs s’usent progressivement. Mais le jeu grandit et achève les pièces voisines, donc un délai raisonnable de diagnostic est d’une à deux semaines. Les exceptions : un choc dans le volant et le fracas d’un ressort cassé — avec eux, garage dans les jours qui viennent.',
      },
      {
        q: 'Pourquoi ça cogne sur les petites bosses alors que les grands trous passent en silence ?',
        a: 'C’est la signature typique des biellettes : leurs petites rotules martèlent justement sur les ondulations, les pavés et les joints, là où la suspension travaille souvent et avec un faible débattement. Dans un grand trou, ce jeu ne s’entend pas toujours. À l’arrière, les biellettes arrière et les silentblocs de traverse cognent de la même manière.',
      },
      {
        q: 'Cela peut-il être autre chose que la suspension ?',
        a: 'Oui, et ce n’est pas rare. Un choc sourd à l’arrière vient d’un cric ou d’une roue de secours mal arrimés dans le coffre ; un toc à l’avant en haut, du jeu dans la serrure de capot ; un cliquetis en bas, des supports d’échappement. Un « boum » unique au premier démarrage après un long stationnement, ce sont les plaquettes collées aux disques, et c’est inoffensif.',
      },
    ],
  },

  'gul-podshipnika-stupitsy': {
    h1: 'Ronflement du roulement de roue',
    metaTitle: 'Roulement de roue qui ronfle : comment le reconnaître | Pro-Stuk',
    description:
      'Comment sonne un roulement de roue usé, comment le distinguer du bruit des pneus, quelle roue ronfle et combien de temps on peut rouler ainsi.',
    intro: [
      'Le roulement de roue est la pièce sur laquelle la roue tourne. Quand il s’use, un ronflement régulier apparaît et grandit avec la vitesse : beaucoup le comparent à un avion qui décolle ou au bourdonnement d’un transformateur. Il commence à peine perceptible vers 60–80 km/h, s’entend avec le temps à toutes les vitesses et finit par se transmettre en vibration.',
      'La difficulté est de le séparer du bruit des pneus : ils ronflent de façon voisine. Il existe deux tests fiables sans matériel. Le premier, le revêtement : le bruit des pneus change avec le type de bitume, le ronflement du roulement reste identique partout. Le second, les changements de file doux à vitesse : si le ronflement change dans un arc large, c’est presque à coup sûr un roulement — celui du côté chargé.',
    ],
    causes: [
      { name: 'Roulement de roue usé', likelihood: 'Le plus souvent, quand le ronflement est régulier et ignore le revêtement' },
      { name: 'Bruit des pneus (hiver, tout-terrain, usure irrégulière)', likelihood: 'Très fréquent — le grand sosie du roulement' },
      { name: 'Pont ou couple conique (propulsion et quatre roues motrices)', likelihood: 'Plus rare ; le ton de ce ronflement change à l’accélérateur' },
      { name: 'Palier central de l’arbre de transmission', likelihood: 'Rare, uniquement sur voitures à arbre de transmission' },
    ],
    canRide: [
      'Au début oui, mais avec des réserves. Un roulement usé ne se détruit pas d’un coup : du premier ronflement à l’état critique, il s’écoule en général des milliers de kilomètres. Le processus ne va toutefois que dans un sens, et sa fin est désagréable : du jeu dans la roue, une portée abîmée et, à l’extrême, un moyeu qui se bloque en roulant.',
      'La règle est donc simple : ronflement remarqué — voiture au garage sous une à deux semaines, longs trajets rapides reportés jusque-là. Si le ronflement a brusquement grossi, qu’une vibration est apparue, que la roue a du jeu ou que la voiture tire d’un côté, allez au diagnostic tout de suite, et pas par l’autoroute.',
    ],
    checks: [
      'Test du revêtement : parcourez la même portion sur des bitumes différents. Le ronflement n’a pas changé — plutôt le roulement ; il s’est atténué sur revêtement lisse — plutôt les pneus.',
      'Test du virage : sur une route vide à 60–80 km/h, changez de file en douceur. Le ronflement faiblit à droite et grossit à gauche — le côté droit se charge, le roulement droit est probable ; et inversement.',
      'Vérification au point mort : accélérez puis laissez rouler au point mort. Le ronflement reste — la source tourne avec les roues, pas avec le moteur.',
      'Examiner la bande de roulement : l’usure en dents de scie et les plaques d’usure irrégulière rendent les pneus bruyants et orientent vers la géométrie.',
      'Après le trajet, approcher prudemment la main des moyeux (sans toucher le disque de frein, qui est brûlant) : un moyeu nettement plus chaud d’un côté est un indice de plus.',
    ],
    appHelp:
      'L’application Pro-Stuk pose les mêmes questions de contrôle — sur le revêtement, les virages et la roue libre au point mort —, enregistre le ronflement et évalue son caractère : le bruit large bande des pneus et le ronflement d’un roulement n’ont pas la même allure dans le spectre. Le rapport donne les probabilités des causes, l’urgence et une indication sur le côté à annoncer au mécanicien.',
    faq: [
      {
        q: 'Pourquoi le ronflement change-t-il en virage ?',
        a: 'En virage, le poids passe sur les roues extérieures. Si le ronflement grossit en tournant à gauche, c’est le côté droit qui est chargé — et c’est donc probablement le roulement droit qui ronfle. En tournant à droite, l’inverse. Retenez cet indice et annoncez-le au garage : il divise la recherche par deux.',
      },
      {
        q: 'Combien de temps peut-on rouler avec un roulement qui ronfle ?',
        a: 'Il n’y a pas de chiffre unique : des premiers symptômes à un jeu dangereux, il s’écoule en général des milliers de kilomètres, mais la vitesse d’usure est imprévisible. Compromis raisonnable : prendre rendez-vous sous une à deux semaines et ne pas prévoir de longs trajets rapides d’ici là.',
      },
      {
        q: 'Peut-on confondre un roulement avec les pneus ?',
        a: 'Facilement — c’est l’erreur la plus courante. Deux indices les séparent : le bruit des pneus dépend du revêtement et ne change pas en virage, tandis que le ronflement d’un roulement est identique sur tout bitume et réagit au transfert de masse dans les courbes larges.',
      },
    ],
  },

  'stuk-na-nerovnostyah': {
    h1: 'Chocs sur les irrégularités',
    metaTitle: 'Chocs sur les bosses : causes et vérifications à faire soi-même | Pro-Stuk',
    description:
      'Chocs sur les bosses et les trous : martèlement fréquent sur les ondulations, chocs isolés dans les nids-de-poule ou choc dans le volant. Quelles pièces sont en cause et peut-on rouler.',
    intro: [
      'Un choc qui n’apparaît que sur les irrégularités — joints de chaussée, pavés, dos-d’âne — vient presque toujours du train roulant. En passant une bosse, la suspension se comprime et se détend, et si du jeu est apparu dans une articulation, la pièce bat dans son logement à chaque débattement. Sur les voitures de plus de cinq à sept ans, c’est banal, et ce sont le plus souvent des pièces d’usure bon marché qui sont en cause, pas de gros organes.',
      'Le dessin du choc réduit la liste des suspects. Un martèlement sourd et fréquent sur les petites ondulations à l’avant, c’est le classique des biellettes de barre stabilisatrice ; le même dessin à l’arrière, ce sont les biellettes arrière ou les silentblocs de traverse (les bagues en caoutchouc par lesquelles la traverse est fixée à la caisse). Des chocs isolés dans les trous, ce sont les silentblocs de bras ou des amortisseurs fatigués. Cas à part : un choc au rythme de la rotation de la roue apparu après un montage de pneus récent — il peut s’agir de boulons de roue mal serrés, et cette hypothèse se vérifie en premier.',
    ],
    causes: [
      { name: 'Biellettes de barre stabilisatrice', likelihood: 'Le plus souvent — martèlement fréquent à l’avant sur les petites bosses' },
      { name: 'Train arrière : biellettes arrière, silentblocs de traverse', likelihood: 'Fréquent — si le choc vient de l’arrière' },
      { name: 'Silentblocs de bras ou amortisseurs', likelihood: 'Fréquent — chocs isolés dans les trous' },
      { name: 'Jeu dans la crémaillère de direction', likelihood: 'Plus rare — le choc remonte droit dans le volant' },
      { name: 'Boulons de roue mal serrés', likelihood: 'Rare — mais c’est la première chose à vérifier après un montage de pneus' },
    ],
    canRide: [
      'Avec le choc typique des biellettes ou des silentblocs, vous pouvez rouler : ces pièces ne lâchent pas brutalement, et une à deux semaines avant le diagnostic ne changent rien si vous passez les grands trous lentement. Le diagnostic de la suspension lui-même est rapide : sur un pont, le mécanicien secoue les articulations et trouve le jeu en quelques minutes. Traîner des mois reste une mauvaise idée : une articulation usée transmet les chocs aux pièces voisines et accélère leur usure.',
      'Autre chose : un choc rythmé, au rythme de la rotation de la roue, dans les premiers jours après un montage de pneus. C’est une raison de s’arrêter dès que possible et de contrôler le serrage des boulons de toutes les roues à la clé. Une roue sur des boulons desserrés matraque les trous de la jante et, au pire, peut se détacher en roulant. Un choc qui remonte dans le volant n’attend pas non plus : la direction est un organe de sécurité, elle se contrôle dans les jours qui viennent.',
    ],
    checks: [
      'Si les roues ont été déposées ou permutées récemment, contrôlez d’abord le serrage des boulons de toutes les roues à la clé, avant toute autre hypothèse.',
      'Noter le dessin du choc : un martèlement fréquent sur les ondulations et des chocs isolés dans les trous, ce sont des pièces différentes, et ce détail raccourcit aussitôt la recherche du mécanicien.',
      'Déterminer si le choc est à l’avant ou à l’arrière : roulez lentement, vitres entrouvertes, le long d’un mur ou d’une clôture — le son réfléchi s’entend bien mieux.',
      'Tenir le volant légèrement en tension sur une route dégradée : si le choc ressenti dans les paumes s’atténue, cela ressemble à du jeu dans la crémaillère, et il faut le dire au garage.',
      'Éliminer le simple : sortir les objets libres du coffre, vérifier l’arrimage de la roue de secours et du cric, appuyer sur le capot fermé — une serrure avec du jeu tape comme la suspension.',
    ],
    appHelp:
      'L’application Pro-Stuk pose les mêmes questions que cette page, mais pas à pas : quel choc exactement, où on l’entend, comment il se comporte sur différentes irrégularités. À partir de vos réponses et de l’enregistrement, elle construit un rapport avec les causes probables et un feu d’urgence — de quoi trancher entre le garage demain et le garage à l’occasion.',
    faq: [
      {
        q: 'Pourquoi le choc ne s’entend-il que sur les irrégularités et pas sur route lisse ?',
        a: 'Le jeu d’une articulation ne se manifeste que lorsque la suspension travaille : sur la bosse, la pièce se déplace dans son logement et vient frapper. Sur bitume lisse, les débattements sont faibles et la pièce usée se tait. C’est pourquoi un choc sur les irrégularités parle presque toujours du train roulant et non du moteur.',
      },
      {
        q: 'J’ai fait monter des pneus récemment et un choc est apparu. Coïncidence ?',
        a: 'Probablement pas. Un choc rythmé ou un fracas au rythme de la rotation de la roue dans les premiers jours après la dépose des roues est le classique des boulons mal serrés. La vérification prend cinq minutes : reprendre les boulons de toutes les roues à la clé. Après tout montage, il est utile de refaire le serrage au bout de 50–100 kilomètres.',
      },
      {
        q: 'Ce sont les biellettes qui cognent. Est-ce urgent ?',
        a: 'Les biellettes en elles-mêmes ne sont pas dangereuses : ce sont de petites tiges qui s’usent les premières dans la suspension, et la voiture reste contrôlable. Mais des pièces plus sérieuses peuvent cogner de façon semblable, donc un diagnostic sous une à deux semaines s’impose : sur un pont, la source se trouve en quelques minutes.',
      },
    ],
  },

  'tikanie-dvigatelya': {
    h1: 'Moteur qui cliquette',
    metaTitle: 'Le moteur cliquette : normal ou usure, causes | Pro-Stuk',
    description:
      'D’où vient le cliquetis du moteur : jeux aux soupapes, poussoirs hydrauliques, claquement normal des injecteurs ou collecteur d’échappement. Comment distinguer le normal de l’usure.',
    intro: [
      'Un cliquetis régulier et rapide est le plus ordinaire des bruits moteur, et il est loin de signifier toujours une panne. Sur les moteurs à injection directe (TSI, GDI et semblables) et sur les diesels, les injecteurs et la pompe haute pression claquent en permanence — c’est leur conception. Le claquement normal a des signes reconnaissables : il est identique à froid et à chaud, s’entend plus fort dehors que dans l’habitacle, et ne change pas au fil des années.',
      'Ce qui doit alerter, c’est un cliquetis qui devient plus fort avec le temps et s’entend mieux qu’avant sur moteur chaud. Ainsi se manifestent des jeux aux soupapes trop grands : les intervalles entre les pièces de la distribution augmentent avec l’usure, et les soupapes se mettent à travailler avec choc. Cas particuliers : un cliquetis uniquement pendant les premières minutes après un démarrage à froid (en général les poussoirs hydrauliques, qui rattrapent le jeu grâce à la pression d’huile) et un claquement accompagné d’une odeur d’échappement, plus fort dehors — la signature d’un joint de collecteur d’échappement percé.',
    ],
    causes: [
      { name: 'Claquement normal des injecteurs (injection directe, diesel)', likelihood: 'Très fréquent — si le bruit est toujours identique' },
      { name: 'Jeux aux soupapes trop grands', likelihood: 'Fréquent — si le cliquetis s’est renforcé avec le temps' },
      { name: 'Poussoirs hydrauliques à froid', likelihood: 'Fréquent — s’il ne cliquette que les premières minutes après le démarrage' },
      { name: 'Joint ou fissure du collecteur d’échappement', likelihood: 'Si le claquement est plus fort dehors et que ça sent l’échappement' },
      { name: 'Chaîne de distribution ou son tendeur', likelihood: 'Plus rare — un bruissement ou un crécellement à l’avant du moteur' },
    ],
    canRide: [
      'Avec un cliquetis, on peut presque toujours rouler : parmi ses causes typiques, aucune n’exige de s’arrêter sur la bande d’arrêt d’urgence. Le claquement normal des injecteurs et le cliquetis matinal des poussoirs n’exigent aucune réparation : c’est le fonctionnement normal du moteur.',
      'Mais un cliquetis qui grandit ne partira pas tout seul. Des soupapes au jeu excessif travaillent avec choc et s’usent plus vite, il faut donc prévoir le réglage ou le contrôle des poussoirs dans les deux semaines qui viennent — vous pouvez rouler tranquillement d’ici là. Pour le collecteur d’échappement, la logique est voisine : une à deux semaines de marge, mais la fissure grandit et l’odeur d’échappement peut être aspirée dans l’habitacle par le chauffage — et cela devient nocif.',
    ],
    checks: [
      'Comparer moteur froid et moteur chaud : un cliquetis seulement les premières minutes après le démarrage, c’est le tableau des poussoirs ; un bruit mieux audible à chaud plaide pour les jeux aux soupapes.',
      'Juger l’évolution de mémoire : un cliquetis inchangé depuis des années est plutôt normal ; s’il était nettement plus discret il y a six mois, c’est de l’usure, et elle va continuer.',
      'Écouter depuis l’extérieur et depuis l’habitacle : le claquement normal des injecteurs est nettement plus fort dehors ; le cliquetis des soupapes s’entend bien aussi depuis le siège conducteur.',
      'Vérifier le niveau d’huile à la jauge : avec un niveau bas, le cliquetis des poussoirs et de la distribution augmente, et l’appoint jusqu’au repère s’entend parfois tout de suite.',
      'Renifler près du capot ouvert : une odeur d’échappement accompagnée d’un claquement fréquent est le signe du collecteur — garage sous une à deux semaines.',
    ],
    appHelp:
      'L’application Pro-Stuk précise l’essentiel — le cliquetis s’est-il renforcé avec le temps et comment se comporte-t-il à froid et à chaud — et l’enregistrement permet de le comparer à des exemples typiques. Le rapport donne les causes probables avec des pourcentages et une conclusion en forme de feu : normal, rendez-vous cette semaine ou diagnostic sans délai.',
    faq: [
      {
        q: 'Pourquoi les diesels et les moteurs à injection directe cliquettent-ils toujours ?',
        a: 'Chez eux le carburant arrive à très haute pression, et chaque injecteur émet un claquement bref en s’ouvrant, auquel s’ajoute le claquement de la pompe haute pression. C’est un fonctionnement normal : le bruit est identique par tous les temps, plus fort dehors que dedans, et n’exige aucune réparation.',
      },
      {
        q: 'Qu’est-ce que le réglage des jeux aux soupapes ?',
        a: 'Entre les pièces de la distribution, on laisse un petit jeu thermique ; l’usure l’agrandit et les soupapes se mettent à claquer. Le mécanicien ramène les jeux à la valeur voulue avec des pastilles ou des vis de réglage. Sur les moteurs à poussoirs hydrauliques, au lieu d’un réglage, on contrôle les poussoirs eux-mêmes et la pression d’huile.',
      },
      {
        q: 'Le cliquetis peut-il disparaître après une vidange ?',
        a: 'Oui, si l’huile usée, une viscosité inadaptée ou un niveau bas étaient en cause : les poussoirs hydrauliques sont très sensibles à l’état de l’huile. Mais une vidange ne corrige pas des jeux aux soupapes usés — si après elle le cliquetis persiste et continue de grandir, un réglage s’impose.',
      },
    ],
  },

  'svist-remnya': {
    h1: 'Sifflement de la courroie',
    metaTitle: 'La courroie siffle : causes, peut-on rouler et que faire | Pro-Stuk',
    description:
      'La courroie d’accessoires siffle : usure, tension faible, galets ou embrayage du compresseur de clim. Comment cerner la cause selon les circonstances.',
    intro: [
      'Un sifflement perçant sous le capot vient presque toujours de la courroie d’accessoires — la courroie qui, depuis le vilebrequin, entraîne l’alternateur, la pompe à eau et, sur beaucoup de voitures, le compresseur de climatisation et la pompe de direction assistée. Elle siffle dans un seul cas : quand elle patine sur les poulies au lieu de s’y accrocher.',
      'Les causes du patinage se divisent en deux groupes. Le premier, la courroie elle-même : le caoutchouc a vieilli et durci, la tension a baissé, ou de l’huile ou du liquide de refroidissement a atteint la surface de travail. Le second, les organes qu’elle entraîne : un galet qui coince, un embrayage de compresseur dur ou une pompe à eau au roulement usé chargent la courroie plus qu’elle ne peut transmettre. Le moment exact où le sifflement apparaît resserre nettement le cercle.',
    ],
    causes: [
      { name: 'Courroie usée ou mal tendue', likelihood: 'Le plus souvent' },
      { name: 'Patinage à froid ou par temps humide', likelihood: 'Fréquent — si le sifflement part une fois chaud' },
      { name: 'Galet tendeur ou galet enrouleur', likelihood: 'Assez fréquent — un ronflement ou un bruissement accompagne le sifflement' },
      { name: 'Embrayage du compresseur de climatisation', likelihood: 'Si le couinement coïncide avec l’enclenchement de la clim' },
      { name: 'Pompe à eau ou poulie débrayable d’alternateur', likelihood: 'Plus rare' },
    ],
    canRide: [
      'Si le sifflement est bref et ne vit que les premières secondes après un démarrage à froid, roulez tranquillement : c’est une raison de faire regarder la courroie à l’occasion, pas de changer vos plans de la journée.',
      'Avec un sifflement permanent ou sous charge, on peut encore rouler, mais prenez rendez-vous dans la semaine : une courroie qui patine chauffe et s’use en cascade, et si elle casse, l’alternateur s’arrête, ainsi que la pompe à eau sur beaucoup de moteurs. Deux signaux imposent de se ranger et de couper le moteur tout de suite : le témoin de batterie qui s’allume et l’aiguille de température qui monte — les deux signifient que la courroie n’entraîne plus ses organes.',
    ],
    checks: [
      'Retenir quand exactement ça siffle : les premières secondes après le démarrage, au moment où la clim s’enclenche, en tournant le volant, ou en permanence — c’est la clé principale.',
      'Enclencher la climatisation moteur tournant : un couinement pile au moment de l’enclenchement désigne un embrayage de compresseur qui patine.',
      'Moteur coupé, examiner la courroie : fissures transversales, bords effilochés et flancs « polis » brillants sont des signes d’usure.',
      'Vérifier s’il y a des traces d’huile ou de liquide de refroidissement sur la courroie et autour des poulies : une courroie huilée siffle même neuve, et des traces de liquide désignent la pompe à eau.',
      'Écouter si un ronflement ou un bruissement régulier accompagne le sifflement en suivant le régime moteur — c’est le roulement de l’un des galets.',
    ],
    appHelp:
      'L’application Pro-Stuk précise le caractère du bruit et les circonstances — sifflement ou ronflement, à froid ou en charge, lié ou non à la climatisation — et, grâce à l’enregistrement, aide à distinguer le couinement de la courroie du bruissement d’un galet. Le rapport donne les causes probables avec des pourcentages et un feu : vous pouvez rouler, au garage cette semaine ou arrêtez-vous.',
    faq: [
      {
        q: 'Que se passe-t-il si la courroie casse en route ?',
        a: 'La charge s’arrête aussitôt : l’alternateur s’immobilise et la voiture roule sur ce qui reste dans la batterie — en général quelques dizaines de minutes. Sur les moteurs où la courroie entraîne aussi la pompe à eau, la température grimpe vite et continuer devient impossible. C’est pourquoi une courroie qui siffle se remplace sur rendez-vous plutôt qu’après la rupture.',
      },
      {
        q: 'Pourquoi le sifflement apparaît-il à l’enclenchement de la climatisation ?',
        a: 'Le compresseur de clim est le consommateur le plus lourd sur la courroie. À l’enclenchement, son embrayage ajoute brutalement de la charge, et une courroie usée ou mal tendue part en patinage. Si c’est précisément la seconde de l’enclenchement qui couine, il faut aussi contrôler l’embrayage : son usure donne le même bruit.',
      },
      {
        q: 'Peut-on pulvériser un produit sur la courroie pour qu’elle ne siffle plus ?',
        a: 'Mieux vaut éviter. Les aérosols et remèdes maison comme le WD-40 donnent un ou deux jours de silence, mais le caoutchouc imprégné glisse et vieillit plus vite, alors que la cause — usure ou tension faible — reste entière. Plus fiable : remplacer la courroie avec le galet, l’un des travaux peu coûteux du garage.',
      },
    ],
  },

  'gremit-pod-mashinoy': {
    h1: 'Cliquetis sous la voiture',
    metaTitle: 'Cliquetis sous la voiture : ce qui vibre et est-ce grave | Pro-Stuk',
    description:
      'Ça cliquette et ça vibre sous la voiture : supports d’échappement, tôle pare-chaleur, protection sous moteur ou catalyseur. Comment trouver la source du bruit et quand c’est sérieux.',
    intro: [
      'Un cliquetis venu de sous la voiture sonne inquiétant, mais la source n’est en général ni le moteur ni la suspension : c’est de la tôle boulonnée — silentblocs d’échappement, vis desserrées de la protection sous moteur ou tôle pare-chaleur, cette fine feuille qui protège le plancher de la chaleur du pot. Tout cela cliquette fort et résonne dans la caisse, ce qui le fait paraître plus grave qu’il n’est : ces bruits n’affectent ni la conduite ni le fonctionnement de la voiture.',
      'Il y a aussi des leurres : ce qui cliquette « sous la voiture » est souvent le coffre — le cric, la clé de roue, une roue de secours mal arrimée — ou les plastiques de l’habitacle, dont le bruit est difficile à situer. Un seul scénario est vraiment inquiétant : un cliquetis clair plus près du moteur accompagné d’une perte de puissance ou d’une odeur d’échappement modifiée. Ainsi sonne un catalyseur détruit — le filtre céramique des gaz d’échappement, dont les morceaux s’entrechoquent dans leur propre carter — et avec cette hypothèse il ne faut pas traîner.',
    ],
    causes: [
      { name: 'Supports d’échappement ou protection sous moteur', likelihood: 'Le plus souvent — cliquetis métallique sur les bosses' },
      { name: 'Tôle pare-chaleur de la ligne d’échappement', likelihood: 'Fréquent — cliquetis clair à certains régimes' },
      { name: 'Cric, roue de secours ou chargement dans le coffre', likelihood: 'Fréquent — fracas sourd à l’arrière, « quelque chose roule »' },
      { name: 'Plastiques de l’habitacle : panneaux et grillons', likelihood: 'Fréquent — le bruit est plus proche qu’il n’y paraît' },
      { name: 'Catalyseur détruit', likelihood: 'Plus rare — si la puissance a chuté en même temps' },
    ],
    canRide: [
      'Dans la plupart des cas oui, et sans restriction particulière : une tôle pare-chaleur qui vibre, des supports d’échappement desserrés ou des vis de protection sous moteur relèvent du confort, pas de la sécurité. La réparation prend en général quelques minutes : resserrer ou fixer avec un collier. La seule chose à vérifier, c’est que l’échappement ne pende pas : un tuyau sur le point de racler le bitume ne s’ignore plus, sa fixation se rétablit tout de suite.',
      'Si le cliquetis s’accompagne d’une perte de puissance, d’une odeur d’échappement modifiée ou du voyant moteur, allez au diagnostic dans les jours qui viennent : des éclats de céramique d’un catalyseur détruit peuvent être aspirés dans le moteur, et c’est déjà une réparation coûteuse. En attendant le contrôle, évitez les hauts régimes.',
    ],
    checks: [
      'Vider le coffre, vérifier l’arrimage de la roue de secours et du cric, plaquer la tablette — puis refaire le même bout de route. Le bruit a disparu : affaire close.',
      'Voiture à l’arrêt, monter doucement en régime : le cliquetis d’une tôle pare-chaleur apparaît en général à certains régimes et s’entend sur place, sans la moindre bosse.',
      'Demander à un passager d’appuyer de la main sur les panneaux suspects de l’habitacle en roulant : si le bruit disparaît, ce sont des grillons d’habitacle et non le plancher.',
      'Surveiller la puissance et l’odeur d’échappement : si la voiture accélère moins bien ou que l’odeur a changé, c’est l’hypothèse du catalyseur — au mécanicien dans les jours qui viennent.',
      'Regarder sous la voiture sans se glisser dessous : un échappement qui pend, un bord de protection sous moteur qui ballotte ou une tôle repliée se voient souvent depuis la roue.',
    ],
    appHelp:
      'L’application Pro-Stuk aide à rattacher le cliquetis à sa source : d’où vient le bruit, suit-il le régime moteur ou les bosses, que devient la puissance. À partir de vos réponses et de l’enregistrement, elle affiche les causes probables avec des pourcentages et un feu d’urgence — pratique pour distinguer une tôle inoffensive du catalyseur avant même le garage.',
    faq: [
      {
        q: 'Est-il dangereux de rouler si quelque chose cliquette sous la voiture ?',
        a: 'Le plus souvent non : des supports d’échappement desserrés, la protection sous moteur et la tôle pare-chaleur n’affectent pas le fonctionnement de la voiture. Les exceptions : un échappement qui pend et va toucher le sol, et un cliquetis accompagné d’une perte de puissance — dans ce second cas, un catalyseur détruit est possible, et le contrôle ne doit pas attendre.',
      },
      {
        q: 'Qu’est-ce qu’une tôle pare-chaleur et peut-on simplement l’enlever ?',
        a: 'C’est une fine feuille métallique entre les parties chaudes de l’échappement et le plancher : elle protège de la chaleur la caisse, les faisceaux et tout ce qui se trouve au-dessus du tuyau. L’enlever est une mauvaise idée — mieux vaut la resserrer ou la fixer avec un collier : au garage, c’est l’affaire de quelques minutes.',
      },
      {
        q: 'Comment savoir que c’est bien le catalyseur qui cliquette ?',
        a: 'Par un cliquetis clair ou un bruissement venu du plancher, plus près du moteur, qui augmente aux coups d’accélérateur, plus une perte de puissance ou une odeur d’échappement modifiée. Au garage, on confirme l’hypothèse en tapotant le carter du catalyseur sur voiture froide : la céramique effritée y bruisse comme des cailloux.',
      },
    ],
  },

  'skrezhet-pri-tormozhenii': {
    h1: 'Frottement métallique au freinage',
    metaTitle: 'Frottement métallique au freinage : plaquettes finies | Pro-Stuk',
    description:
      'Le frottement métallique au freinage signifie le plus souvent des plaquettes usées jusqu’au métal : avec cela, on ne roule pas. Plus rarement, c’est un caillou derrière le déflecteur. Comment les distinguer.',
    intro: [
      'Le frottement métallique au freinage mérite plus d’attention que n’importe quel grincement. Le plus souvent, ainsi sonnent des plaquettes usées jusqu’au métal : la garniture qui frotte le disque est finie, et c’est le support en acier de la plaquette qui racle le disque. La distance de freinage s’allonge, le disque s’abîme à chaque arrêt et le mécanisme peut se bloquer.',
      'Il existe des variantes moins dramatiques. Un déflecteur de disque tordu ou un caillou coincé entre le déflecteur et le disque produisent un frottement très semblable, mais sans danger pour les freins. Et un bref raclement aux premiers freinages après une nuit dehors ou après la pluie n’est que la pellicule de rouille que les plaquettes enlèvent en deux minutes. L’ennui, c’est que ces scénarios se confondent facilement à l’oreille : un frottement permanent exige donc un contrôle et non des suppositions.',
    ],
    causes: [
      { name: 'Plaquettes usées jusqu’au métal', likelihood: 'Le plus souvent — si ça frotte à chaque freinage' },
      { name: 'Un caillou ou un déflecteur tordu touche le disque', likelihood: 'Fréquent ; le bruit est semblable, mais sans danger pour les freins' },
      { name: 'Étrier qui coince', likelihood: 'Si la roue chauffe et que la voiture tire d’un côté' },
      { name: 'Pellicule de rouille après un stationnement ou la pluie', likelihood: 'Si le bruit part aux premiers freinages' },
    ],
    canRide: [
      'Avec un frottement métal contre métal, il faut cesser les trajets ordinaires : seule une route prudente jusqu’au garage est admissible, avec de grandes distances et des freinages doux et anticipés. Repousser le remplacement n’est pas rentable non plus : chaque kilomètre passé à frotter ajoute à la facture le prix des disques, que le support en acier usine littéralement.',
      'Si le frottement est apparu après un stationnement et a disparu aux premiers freinages, roulez sans restriction : c’est de la rouille. Si le bruit ressemble plutôt à un raclement, s’entend même sans appuyer sur la pédale et que la roue ne chauffe pas après le trajet, le déflecteur ou un caillou sont probables : vous pouvez arriver tranquillement, mais montrez la voiture sous un à deux jours — seul un contrôle sépare avec certitude le cas anodin de plaquettes finies.',
    ],
    checks: [
      'Repérer la régularité : bruit uniquement à l’appui sur le frein, ce sont plutôt les plaquettes ; raclement permanent en roulant, plutôt le déflecteur, un caillou ou un étrier qui coince.',
      'Regarder entre les rayons de la jante : sur beaucoup de voitures la plaquette extérieure est visible sans démontage. Une garniture de moins de 3–4 mm, ou du métal brillant à sa place, veut dire remplacement immédiat.',
      'Après un court trajet, approcher la main des roues sans toucher le disque : si une roue est nettement plus chaude que les autres, cela ressemble à un étrier qui coince — la pièce qui plaque les plaquettes contre le disque.',
      'Observer le comportement de la voiture : tirer d’un côté au freinage ou une odeur de brûlé venue d’une roue sont des signes avec lesquels on ne roule pas — seulement prudemment jusqu’au garage.',
      'Examiner le disque à travers la jante : des sillons profonds et une teinte bleutée du métal disent que le frottement dure depuis longtemps et que les disques ont déjà souffert.',
    ],
    appHelp:
      'L’application Pro-Stuk parcourt les mêmes questions — le frottement est-il permanent, la roue chauffe-t-elle, le bruit part-il après les premiers freinages — et l’enregistrement aide à distinguer le frottement du couinement du témoin d’usure. Le rapport donne les causes probables et un feu : vous pouvez rouler, montrez-le cette semaine ou n’allez que jusqu’au garage.',
    faq: [
      {
        q: 'Quelle différence entre le frottement métallique et le couinement des freins ?',
        a: 'Le couinement est un son aigu alors que les freins travaillent encore pleinement : c’est le plus souvent le témoin d’usure, qui prévient à l’avance. Le frottement est un bruit rêche et grave de métal contre métal : la garniture est finie et le support en acier frotte le disque. Le couinement, c’est un rendez-vous cette semaine ; le frottement, la fin des trajets ordinaires.',
      },
      {
        q: 'Suffit-il de changer seulement les plaquettes s’il y a déjà eu du frottement ?',
        a: 'Cela dépend de l’état des disques : même rouler peu « sur le métal » y laisse des sillons. Les peu profonds se rectifient parfois, les profonds imposent des disques neufs. Des plaquettes neuves sur un disque sillonné freinent moins bien et s’usent vite, la décision se prend donc après contrôle.',
      },
      {
        q: 'Le frottement va et vient — est-ce dangereux aussi ?',
        a: 'Un frottement intermittent vient souvent d’un caillou entre le déflecteur et le disque, et il peut tomber tout seul. Il ne faut pas compter dessus : le même bruit intermittent apparaît au début de l’usure des plaquettes jusqu’au métal. Un contrôle sous un à deux jours tranche la question.',
      },
    ],
  },

  'stuk-pri-razgone': {
    h1: 'Choc à l’accélération',
    metaTitle: 'Choc à l’accélération et au lever de pied : causes | Pro-Stuk',
    description:
      'Pourquoi ça cogne quand on accélère ou qu’on lève le pied : supports moteur, cardan, jeu dans la transmission ou boîte automatique. Comment distinguer un jeu anodin d’un choc dans le moteur.',
    intro: [
      'Un choc qui apparaît pile au moment où l’on appuie sur l’accélérateur ou qu’on lève le pied naît le plus souvent non pas dans le moteur, mais dans la chaîne qui transmet la force aux roues. Avec les années, du jeu s’y accumule : les supports moteur en caoutchouc s’affaissent et laissent le moteur bouger au changement de charge, le cardan intérieur s’use (l’articulation de l’arbre allant de la boîte à la roue), les croisillons de l’arbre de transmission et les fixations du berceau prennent du mou. Chaque fois que la force change de sens, le jeu se rattrape avec un coup — d’où un choc ou un fracas isolé.',
      'Cas à part : la boîte automatique. Un à-coup avec fracas au passage du sélecteur entre D et R, ou pendant les changements de rapport, parle en général d’une huile vieillie ou d’une usure. Et un cas tout différent : un choc sourd venu des profondeurs du moteur, qui s’accélère avec le régime et grossit en charge — ainsi cognent les coussinets de vilebrequin. C’est rare, mais c’est la variante la plus sérieuse, et il ne faut pas la manquer.',
    ],
    causes: [
      { name: 'Supports moteur ou cardan intérieur', likelihood: 'Le plus souvent — choc isolé à l’appui et au lever de pied' },
      { name: 'Jeu dans la transmission : croisillons, fixations du berceau', likelihood: 'Fréquent en propulsion et quatre roues motrices — fracas sous le plancher au démarrage' },
      { name: 'Boîte automatique : huile vieillie ou usure', likelihood: 'Si l’à-coup et le fracas coïncident avec les passages de rapport' },
      { name: 'Cognement de coussinets venu des profondeurs du moteur', likelihood: 'Rare — s’accélère avec le régime, plus fort en charge' },
    ],
    canRide: [
      'Avec la plupart des causes du tableau, on peut rouler : le jeu dans les supports, les articulations ou la transmission n’immobilise pas la voiture d’un coup tant que le choc reste isolé et discret. Mais repousser le diagnostic de plusieurs mois n’est pas raisonnable : un croisillon fatigué ou un cardan usé finissent par se détruire, et cela arrive en roulant. Délai raisonnable pour le garage : une à deux semaines ; d’ici là, démarrer et doser l’accélérateur plus doucement.',
      'L’exception : un choc venu des profondeurs du moteur, qui s’accélère aux coups d’accélérateur et grossit en charge. Avec lui, il faut cesser les trajets ordinaires : des coussinets usés peuvent finir en moteur serré. D’abord vérifier le niveau d’huile ; ensuite, dépanneuse — ou, si le garage est tout proche, lentement et sans accélérer.',
    ],
    checks: [
      'Préciser le moment : un choc pile à l’appui et au lever de pied, et non sur les bosses, parle de la transmission de la force et non de la suspension. Ce détail raccourcit aussitôt la recherche du mécanicien.',
      'Vérifier le niveau d’huile moteur à la jauge. Devant tout bruit qui ressemble au moteur, c’est le premier geste : avec un niveau bas, les coussinets souffrent en premier.',
      'Si ça fracasse aux passages de rapport, vérifier le niveau et l’état de l’huile de boîte automatique : un fluide sombre à l’odeur de brûlé est une cause fréquente d’à-coups, et parfois la vidange règle l’affaire.',
      'Écouter d’où vient le son — de sous le capot, du milieu du plancher ou du côté d’une roue — et s’il se répète au changement de rapport. Ces observations méritent d’être notées pour le garage.',
      'Faire le test doux : si avec un appui et un lever de pied progressifs le choc disparaît et qu’il revient avec un geste brusque, c’est un jeu classique, et jusqu’à la réparation une conduite souple suffit.',
    ],
    appHelp:
      'L’application Pro-Stuk pose les mêmes questions de précision — quand exactement ça cogne, le bruit change-t-il avec le régime et les rapports — et, grâce à l’enregistrement, aide à distinguer le fracas d’un jeu d’un cognement profond du moteur. Le rapport donne les causes probables avec des pourcentages et une conclusion claire : vous pouvez rouler, planifiez le garage ou arrêtez-vous.',
    faq: [
      {
        q: 'Pourquoi ça cogne précisément à l’appui et au lever de pied ?',
        a: 'Au changement de charge, la force inverse son sens et tous les jeux des supports moteur, des articulations et de la transmission se rattrapent avec un coup. Tant que la voiture roule à allure stabilisée, les pièces restent en appui l’une contre l’autre et le jeu ne se trahit pas — d’où un choc audible seulement quand on travaille à l’accélérateur.',
      },
      {
        q: 'Comment savoir que c’est le moteur lui-même et que c’est sérieux ?',
        a: 'Le signe d’alerte est un choc sourd venu des profondeurs du moteur, qui s’accélère avec le régime et grossit en charge, par exemple en côte. Ainsi cognent les coussinets de vilebrequin. Dans ce cas, cessez de rouler, vérifiez le niveau d’huile et faites remorquer la voiture jusqu’au garage.',
      },
      {
        q: 'Une boîte automatique peut-elle provoquer un choc à l’accélération ?',
        a: 'Oui. Un à-coup ou un fracas au moment d’un passage de rapport, ou au passage du sélecteur entre D et R, est un signe typique d’huile vieillie ou d’usure de la boîte. Commencez par vérifier le niveau et l’état de l’huile ; jusqu’à la réparation, ne déplacez le sélecteur qu’à l’arrêt complet, frein appuyé.',
      },
    ],
  },

  'zvon-pri-razgone': {
    h1: 'Cliquetis à l’accélération',
    metaTitle: 'Cliquetis à l’accélération : détonation ou non, que faire | Pro-Stuk',
    description:
      'Un tintement métallique à l’accélération vient le plus souvent de la détonation liée au carburant. Comment le vérifier en changeant de station et quand ce n’est pas le moteur mais la tôle pare-chaleur ou le catalyseur.',
    intro: [
      'Le tintement métallique à l’accélération — ce que les conducteurs appellent le cliquetis — se révèle le plus souvent être de la détonation. Une partie du carburant dans les cylindres ne brûle pas régulièrement mais explose, et l’onde de choc résonne clair contre les parois du moteur. On l’entend surtout en charge : en côte, au dépassement, en accélérant à bas régime sur un rapport élevé. La cause la plus fréquente est prosaïque — de l’essence dont l’indice d’octane est inférieur à celui que recommande le constructeur, ou tout simplement un mauvais plein.',
      'Le tintement peut ne pas venir du moteur. Une tôle pare-chaleur mal fixée — la feuille au-dessus du pot — vibre à certains régimes, et la céramique effritée du catalyseur bruisse et tinte sous le plancher. La différence tient à ce dont cela dépend : la détonation suit la charge et disparaît en conduite souple, tandis qu’une tôle tinte à « ses » régimes même sur voiture à l’arrêt lors d’un coup d’accélérateur.',
    ],
    causes: [
      { name: 'Détonation : carburant à indice d’octane trop bas', likelihood: 'Le plus souvent — tintement en charge, surtout en côte' },
      { name: 'Calamine dans les chambres de combustion ou capteur de cliquetis', likelihood: 'Si changer de station n’a rien donné' },
      { name: 'Tôle pare-chaleur de la ligne d’échappement', likelihood: 'Fréquent — cliquetis à certains régimes, sans lien avec la charge' },
      { name: 'Catalyseur détruit', likelihood: 'Plus rare — tintement et bruissement sous le plancher, puissance en baisse' },
    ],
    canRide: [
      'Avec des épisodes rares de tintement, vous pouvez arriver, mais sans charger le moteur : accélérez doucement, montez les côtes sur un rapport plus court, ne tirez pas à bas régime sur un rapport élevé. Le premier geste : faire le plein avec un carburant dont l’indice d’octane n’est pas inférieur au recommandé, de préférence dans une autre enseigne — le tintement part souvent avec un seul plein.',
      'Une détonation permanente, ce sont des coups sur les pistons à chaque accélération, et elle détruit peu à peu le moteur : pistons, segments et joint de culasse en souffrent. Si après le changement de carburant le tintement persiste, ne repoussez pas le diagnostic. Le cliquetis d’une tôle, à l’inverse, est un désagrément purement sonore : on roule sans restriction et l’on fait fixer la tôle à la prochaine visite au garage.',
    ],
    checks: [
      'Faire un plein complet avec un indice d’octane au moins égal au recommandé, dans une autre station. Si en un ou deux pleins le tintement disparaît, la cause était le carburant.',
      'Vérifier le lien avec la charge : un tintement qui apparaît en côte, au dépassement et sous forte accélération mais s’atténue en accélération douce est la signature de la détonation.',
      'Donner un coup d’accélérateur au point mort, voiture à l’arrêt : si le tintement ou le cliquetis surgit à certains régimes même sans charge, la tôle pare-chaleur est plus probable.',
      'Vérifier dans le manuel ou sur la trappe à carburant quelle essence est recommandée : pour beaucoup de moteurs, un indice d’octane bas ne convient plus, même s’il est formellement admis.',
      'Prêter attention à la puissance et aux bruits sous le plancher : bruissement et tintement d’en bas accompagnés d’une accélération plus molle sont une raison de faire vérifier le catalyseur sans délai.',
    ],
    appHelp:
      'L’application Pro-Stuk aide avec les mêmes questions — quand ça tinte, le bruit suit-il la charge ou le régime — et l’enregistrement permet de distinguer le tintement clair de la détonation du cliquetis d’une tôle. Le rapport donne les causes probables avec des pourcentages et une conclusion : vous pouvez rouler, mieux vaut planifier le garage ou plutôt vous arrêter.',
    faq: [
      {
        q: 'Que signifie « le moteur cliquette » ?',
        a: 'C’est l’ancien nom du tintement de la détonation ; on l’attribuait autrefois aux axes de piston. En réalité, ce ne sont pas eux qui tintent : le bruit vient de l’onde de choc d’une combustion explosive renvoyée par les parois des cylindres. Le nom est resté, mais la cause est toujours la même : la détonation, et non des pièces de piston usées.',
      },
      {
        q: 'Peut-on rouler avec de la détonation ?',
        a: 'Brièvement et en ménageant : accélération douce, rapport plus court en côte, sans pleine charge ni remorque. Chaque épisode, ce sont des coups sur les pistons, et une détonation permanente finit par une réparation coûteuse du moteur. Si le changement de carburant n’a pas supprimé le tintement en un ou deux pleins, un diagnostic s’impose.',
      },
      {
        q: 'Une essence à indice d’octane plus élevé aide-t-elle ?',
        a: 'La règle principale : ne jamais faire le plein en dessous de la recommandation du constructeur. L’indice d’octane indique la résistance du carburant à l’auto-inflammation, donc passer à une qualité supérieure sur un moteur sensible supprime souvent le tintement. Si même cela ne suffit pas, la cause — calamine ou capteur de cliquetis — se cherche au garage.',
      },
    ],
  },

  'gul-pri-povorote': {
    h1: 'Ronflement en virage',
    metaTitle: 'Ronflement en virage : roulement de roue ou direction assistée | Pro-Stuk',
    description:
      'D’où vient le ronflement en virage : roulement de roue usé, pompe de direction assistée qui hurle ou bruit des pneus. Comment déterminer le côté et savoir si c’est dangereux.',
    intro: [
      'Avec le ronflement en virage, il faut d’emblée séparer deux scénarios : un ronflement à vitesse qui grossit dans un sens et faiblit dans l’autre, et un hurlement qui apparaît quand on tourne le volant à l’arrêt ou en manœuvrant. Ils sonnent de façon voisine, mais les sources sont totalement différentes : dans le premier cas la roue, dans le second la direction assistée.',
      'Un ronflement à vitesse qui dépend du sens du virage est la signature classique du roulement de roue — le palier sur lequel la roue tourne. En virage, le poids de la voiture passe sur les roues extérieures, et un roulement usé et chargé ronfle plus fort. Un hurlement en tournant le volant à basse vitesse vient le plus souvent de la pompe de direction assistée, en règle générale à cause d’un niveau de liquide trop bas. Et sur les voitures à direction électrique, un léger bourdonnement en tournant le volant est normal et non une panne.',
    ],
    causes: [
      { name: 'Roulement de roue', likelihood: 'Le plus souvent — si le ronflement vient avec la vitesse et change en virage' },
      { name: 'Pompe de direction assistée ou niveau de liquide bas', likelihood: 'Fréquent — s’il hurle en tournant le volant à l’arrêt' },
      { name: 'Bruit des pneus', likelihood: 'Fréquent ; le ronflement dépend du revêtement, pas du virage' },
      { name: 'Bourdonnement normal de la direction électrique', likelihood: 'Normal sur les voitures sans bocal de liquide de direction' },
      { name: 'Cardan usé', likelihood: 'Plus rare ; ajoute en général des claquements à fond de braquage' },
    ],
    canRide: [
      'Avec un roulement qui ronfle, on peut rouler, mais c’est un crédit à court terme : ne repoussez pas le contrôle au-delà d’une semaine et reportez les longs trajets rapides. Un roulement qui se détruit donne du jeu à la roue et, dans un cas négligé, peut se bloquer. Si le ronflement a brusquement grossi ou qu’une vibration s’y est ajoutée — au garage tout de suite.',
      'Avec une pompe de direction qui hurle, on vérifie d’abord le niveau de liquide dans le bocal : l’appoint règle souvent la question. On peut rouler, mais ne gardez pas le volant à fond de braquage plus de deux secondes — dans cette position la pompe travaille à la pression maximale. Si après l’appoint le hurlement persiste ou que le niveau baisse de nouveau, il y a une fuite — garage dans la semaine.',
    ],
    checks: [
      'Retenir dans quel sens de virage le ronflement est plus fort. Plus fort en tournant à gauche : c’est le côté droit qui est chargé, donc le roulement droit est probable, et inversement. Ce détail raccourcit nettement la recherche au garage.',
      'Vérifier le bruit à l’arrêt : si le hurlement apparaît en tournant le volant sur un parking, les roues n’y sont pour rien — la source est la direction assistée.',
      'Regarder sous le capot s’il y a un bocal de liquide de direction. S’il y en a un, vérifier le niveau et compléter jusqu’au repère si besoin ; s’il n’y en a pas, la direction est électrique et un bourdonnement doux et régulier lui est normal.',
      'Évaluer la dépendance à la route : un ronflement plus discret sur bitume neuf et plus fort sur revêtement rugueux vient en général des pneus, pas du roulement.',
      'Examiner la bande de roulement : une usure en dents de scie (marches sur les bords) ou par plaques amplifie le ronflement des pneus et suggère du même coup une géométrie faussée ou des amortisseurs fatigués.',
    ],
    appHelp:
      'L’application Pro-Stuk pose les mêmes questions que le mécanicien à la réception : où l’on entend le ronflement, s’il change en virage, s’il est lié au volant tourné à l’arrêt. L’enregistrement aide à comparer le bruit à des exemples typiques, et le rapport donne les causes probables et une recommandation claire : roulez tranquillement, prenez rendez-vous cette semaine ou faites vérifier sans délai.',
    faq: [
      {
        q: 'Pourquoi le ronflement grossit-il seulement dans un sens de virage ?',
        a: 'En virage, le poids de la voiture passe sur les roues extérieures. Si, par exemple, le roulement droit est usé, il ronfle plus fort en charge — c’est-à-dire en tournant à gauche. Cette propriété permet de savoir, avant même le garage, quel côté contrôler en premier.',
      },
      {
        q: 'Peut-on mettre n’importe quel liquide dans la direction assistée ?',
        a: 'Non. Le type de liquide est indiqué dans le manuel de la voiture et souvent directement sur le bouchon du bocal. Un appoint ponctuel avec le bon liquide est sans risque, mais si le niveau baisse régulièrement, il y a une fuite quelque part : la chercher et la réparer relève du garage, l’appoint ne règle rien.',
      },
      {
        q: 'Il n’y a pas de bocal de direction sous le capot et pourtant ça ronfle en virage — qu’est-ce que c’est ?',
        a: 'La direction est très probablement électrique : son moteur bourdonne doucement quand on tourne le volant, et c’est un fonctionnement normal. Ce qui doit alerter, ce sont d’autres signes : une direction devenue dure ou qui durcit par à-coups, un craquement, ou le témoin de direction allumé. Avec eux — garage dans les jours qui viennent.',
      },
    ],
  },

  'shchelchki-pri-povorote-rulya': {
    h1: 'Claquements en tournant le volant',
    metaTitle: 'Claquements au volant : cardan ou butée de suspension | Pro-Stuk',
    description:
      'Pourquoi ça claque quand on tourne le volant : cardan extérieur, butée d’amortisseur ou cardan de colonne. Comment les distinguer au bruit et quoi vérifier sans démonter.',
    intro: [
      'Les claquements en tournant le volant se départagent par une question simple : la voiture roule-t-elle à ce moment-là ou est-elle à l’arrêt ? Un craquement avec claquements en roulant braqué est la signature du cardan extérieur, l’articulation par laquelle la rotation atteint la roue qui, en plus, dirige. Plus le braquage est important et le démarrage brusque, plus le craquement est net. Tout commence en général par un soufflet déchiré : la protection en caoutchouc qui garde l’articulation à l’abri de la saleté.',
      'Si en revanche les claquements s’entendent en tournant le volant voiture à l’arrêt, le cardan est généralement hors de cause. Un craquement venu d’en haut, du passage de roue, vient de la butée d’amortisseur — la pièce sur laquelle le haut de la jambe de force tourne avec la roue. Des claquements dans le volant lui-même, au niveau des pieds du conducteur, viennent du cardan de colonne, la petite articulation entre le volant et la crémaillère. Aucune de ces options n’oblige à laisser la voiture sur place, mais aucune ne doit traîner des mois.',
    ],
    causes: [
      { name: 'Cardan extérieur', likelihood: 'Le plus souvent — s’il craque en roulant braqué' },
      { name: 'Butée d’amortisseur', likelihood: 'Fréquent — s’il craque à l’arrêt, en haut du passage de roue' },
      { name: 'Cardan de colonne de direction', likelihood: 'Si les claquements s’entendent et se sentent dans le volant lui-même' },
      { name: 'Rotules de direction ou crémaillère', likelihood: 'Plus rare ; donnent en général des chocs, pas des claquements' },
      { name: 'Cardan intérieur, biellettes de barre stabilisatrice', likelihood: 'Plus rare ; contrôlés lors du même diagnostic' },
    ],
    canRide: [
      'Avec un cardan qui craque, on peut rouler, mais ne repoussez pas le remplacement au-delà d’une à deux semaines : une articulation usée se bloque au pire, et ce n’est alors plus un bruit mais une voiture immobilisée. En attendant la réparation, un régime ménagé aide — ne pas démarrer sec avec les roues à fond de braquage.',
      'La butée d’amortisseur et le cardan de colonne donnent plus d’inconfort que de danger immédiat, mais la direction est un organe de sécurité : passez le diagnostic dans les jours qui viennent, sur un pont il prend quelques minutes. Raisons d’accélérer : le volant est devenu flou au point milieu, la voiture flotte dans sa voie, ou les claquements sont devenus bien plus fréquents.',
    ],
    checks: [
      'Séparer les scénarios sur un parking vide : le craquement apparaît-il en roulant en cercle braqué, ou les claquements s’entendent-ils en tournant le volant voiture à l’arrêt ?',
      'Examiner les soufflets de cardans — les protections en caoutchouc à soufflets du côté intérieur de chaque roue avant. Une déchirure avec de la graisse projetée autour vaut presque diagnostic confirmé.',
      'Demander à quelqu’un de tourner le volant moteur coupé et poser la paume sur la coupelle d’amortisseur sous le capot : les claquements d’une butée usée se sentent à la main.',
      'Faire bouger le volant à gauche et à droite moteur coupé et écouter au niveau des pieds : un claquement net dans la colonne trahit le cardan de colonne.',
      'Retenir de quelle roue vient le craquement en roulant et dans quel virage il est plus fort — ces détails raccourcissent nettement la recherche au garage.',
    ],
    appHelp:
      'Dans l’application Pro-Stuk, ces bifurcations sont réunies en un court arbre de questions : la voiture roule-t-elle ou est-elle à l’arrêt, d’où vient le bruit, dans quel état sont les soufflets. Le craquement peut être enregistré au téléphone et comparé à des exemples. Le rapport donne les causes probables avec leur évaluation et une recommandation de délai : sans panique, mais sans claquements oubliés pendant un mois.',
    faq: [
      {
        q: 'Qu’est-ce qu’un cardan et pourquoi claque-t-il ?',
        a: 'C’est le joint homocinétique, la pièce qui transmet la rotation à une roue qui dirige aussi. Quand la saleté entre par un soufflet déchiré, les billes et les pistes de l’articulation s’usent, et sous charge en braquage elle se met à craquer nettement.',
      },
      {
        q: 'Combien de temps peut-on rouler avec un cardan qui claque ?',
        a: 'Il n’y a pas de durée exacte : chez certains l’articulation tient des mois, chez d’autres elle se détruit en deux semaines. Repère raisonnable : ne pas repousser le remplacement au-delà d’une à deux semaines et, en attendant, ne pas démarrer sec braqué — la charge sur l’articulation reste alors minimale.',
      },
      {
        q: 'Pourquoi ça craque en tournant le volant voiture à l’arrêt ?',
        a: 'À l’arrêt, la roue ne tourne pas et le cardan ne travaille pas. Un craquement sur place vient en général de la butée d’amortisseur — le son vient d’en haut, du passage de roue — ou du cardan de colonne si le claquement est dans le volant lui-même. Les deux pièces se contrôlent au garage en quelques minutes.',
      },
    ],
  },

  'stuk-v-dvigatele-na-holodnuyu': {
    h1: 'Cognement du moteur à froid',
    metaTitle: 'Le moteur cogne à froid : causes et que faire | Pro-Stuk',
    description:
      'Pourquoi le moteur cogne à froid et se tait une fois chaud : poussoirs hydrauliques, attelage mobile, chaîne de distribution. Quand c’est normal et quand il faut aller au garage.',
    intro: [
      'Un cognement qui ne s’entend que les premières minutes après un démarrage à froid et disparaît à mesure que le moteur chauffe est l’une des plaintes les plus fréquentes sur les voitures qui ont du kilométrage. Bonne nouvelle : ici, la cause la plus répandue est aussi la plus anodine. Un cliquetis fréquent en haut du moteur vient en général des poussoirs hydrauliques, de petites pièces qui, grâce à la pression d’huile, rattrapent le jeu dans la distribution. Tant que le moteur est froid, l’huile est épaisse et ne leur parvient pas tout de suite : ils claquent donc une ou deux minutes. Une fois chaud, silence.',
      'Le caractère du bruit en dit long. Un cognement sourd venu des profondeurs vient plus souvent de l’usure de l’attelage mobile : à froid, le piston a un peu plus de liberté dans son cylindre et tape jusqu’à ce que la chaleur le dilate. Un bruissement ou un crécellement à l’avant, c’est la signature d’une chaîne de distribution détendue — la chaîne interne qui fait ouvrir les soupapes au bon moment — ou de son tendeur affaibli. Et un claquement plus fort dehors que dans l’habitacle, avec une odeur d’échappement sous le capot, est le signe d’un joint de collecteur percé : les gaz s’échappent par la fissure jusqu’à ce que le métal se dilate et la referme.',
    ],
    causes: [
      { name: 'Poussoirs hydrauliques : huile froide et épaisse', likelihood: 'Le plus souvent — s’il cliquette en haut et se tait en deux minutes' },
      { name: 'Usure de l’attelage mobile', likelihood: 'Fréquent à fort kilométrage — cognement sourd venu des profondeurs' },
      { name: 'Chaîne de distribution ou son tendeur', likelihood: 'Fréquent — s’il y a un bruissement ou un crécellement à l’avant' },
      { name: 'Joint ou fissure du collecteur d’échappement', likelihood: 'Si le claquement est plus fort dehors et que ça sent l’échappement' },
      { name: 'Courroie d’accessoires qui patine', likelihood: 'S’il s’agit d’un couinement ou d’un sifflement et non d’un cognement' },
    ],
    canRide: [
      'Avec le cliquetis des poussoirs qui disparaît complètement une fois chaud, roulez sans restriction — c’est la vie ordinaire d’un moteur qui a du kilométrage. Il en va de même pour le couinement de la courroie les premières secondes après le démarrage : désagréable, mais sans danger. Dans les deux cas, il suffit de vérifier le niveau et l’âge de l’huile et de montrer la voiture au mécanicien lors de la prochaine visite prévue.',
      'Le cognement sourd de l’attelage mobile relève de l’observation : on peut rouler, mais surveillez la consommation d’huile et parlez du bruit au mécanicien à la prochaine visite. Avec le bruissement de la chaîne, il ne faut pas traîner : diagnostic sous une à deux semaines, car une chaîne qui saute signifie une réparation coûteuse du moteur — et d’ici là, pas de démarrages brusques à froid. Principe général : si le cognement a cessé de disparaître à chaud ou s’entend en charge, le diagnostic ne se repousse plus.',
    ],
    checks: [
      'Chronométrer combien de minutes dure le bruit : une à deux minutes puis le silence, c’est typique des poussoirs ; plus le cognement vit longtemps, plus le contrôle s’impose.',
      'Vérifier à la jauge le niveau d’huile sur moteur froid et se rappeler la date de la vidange : niveau bas et huile vieillie amplifient tous les cognements à froid.',
      'Déterminer le caractère du bruit : cliquetis fréquent en haut, cognement sourd venu des profondeurs ou bruissement à l’avant du moteur sont trois histoires différentes, aux urgences différentes.',
      'Ouvrir le capot moteur froid tournant et renifler : une odeur d’échappement accompagnée d’un claquement désigne le collecteur.',
      'Couper le moteur chaud pendant dix minutes puis redémarrer : un vrai cognement « à froid » ne revient pas après une pause aussi courte.',
    ],
    appHelp:
      'L’application Pro-Stuk parcourt les mêmes bifurcations — cliquetis, cognement sourd ou bruissement, et à quelle vitesse le bruit disparaît — et l’enregistrement au téléphone aide à saisir un caractère difficile à décrire avec des mots. Le rapport donne les causes probables avec des pourcentages et une conclusion claire : roulez tranquillement, prenez rendez-vous cette semaine ou ne repoussez pas le garage.',
    faq: [
      {
        q: 'Le cognement disparaît une fois chaud — puis-je l’ignorer ?',
        a: 'Le plus souvent oui : le cliquetis des poussoirs à froid est banal et n’exige pas de réparation. Mais il est utile d’observer : si le bruit dure désormais plus de deux minutes, persiste moteur chaud ou apparaît en charge, c’est déjà un motif de diagnostic.',
      },
      {
        q: 'Les additifs « anti-cognement » servent-ils à quelque chose ?',
        a: 'Mieux vaut ne pas en verser : ils n’éliminent pas l’usure, ils masquent le symptôme, si bien que le problème est repéré plus tard. Ce qui aide vraiment est autre chose : une huile fraîche de la bonne viscosité, un niveau correct et, si le cognement persiste, un réglage ou une réparation chez le mécanicien.',
      },
      {
        q: 'Pourquoi le cognement à froid est-il plus fort en hiver ?',
        a: 'Par grand froid, l’huile est plus épaisse et met plus de temps à atteindre le haut du moteur : les poussoirs et la distribution claquent donc plus nettement, et les jeux des pièces froides sont un peu plus grands. Si tout se tait une fois chaud, c’est le même tableau qu’en été, simplement étiré dans le temps.',
      },
    ],
  },

  'svist-pri-zapuske': {
    h1: 'Sifflement au démarrage du moteur',
    metaTitle: 'Sifflement au démarrage du moteur : causes et solutions | Pro-Stuk',
    description:
      'Pourquoi le moteur siffle au démarrage : courroie d’accessoires qui patine, galets ou pompe à eau. Quand le sifflement est anodin et quand il faut prendre rendez-vous.',
    intro: [
      'Un couinement ou un sifflement dans les premières secondes après le démarrage du moteur vient presque toujours de la courroie d’accessoires — la courroie en caoutchouc qui, depuis le moteur, entraîne l’alternateur, la pompe à eau et le compresseur de climatisation. À froid ou par temps humide, la courroie patine sur les poulies et siffle, puis en quelques secondes elle chauffe, sèche et se tait.',
      'Ce scénario n’est pas dangereux dans l’immédiat, mais il ne faut pas le tenir pour normal : une courroie récente et correctement tendue ne siffle pas, même par temps froid. Un sifflement matinal régulier indique que la courroie a vieilli, que la tension a baissé ou que l’un des galets sur lesquels elle passe commence à s’user. Cas à part : les bruits du démarrage lui-même — un frottement ou un ronronnement pendant que le démarreur entraîne le moteur. Là, ce n’est plus la courroie mais le démarreur ou la couronne du volant moteur, et avec eux il ne faut pas traîner.',
    ],
    causes: [
      { name: 'Courroie d’accessoires qui patine à froid', likelihood: 'Le plus souvent — si le sifflement part dans les premières secondes' },
      { name: 'Courroie usée ou tension retombée', likelihood: 'Fréquent — si le sifflement persiste moteur chaud' },
      { name: 'Roulement du galet tendeur ou enrouleur', likelihood: 'Assez fréquent — un bruissement ou un ronflement s’ajoute au sifflement' },
      { name: 'Pompe à eau, s’il y a des traces de liquide près de la courroie', likelihood: 'Plus rare' },
      { name: 'Frottement pendant que le démarreur tourne : lanceur ou couronne', likelihood: 'Cas à part — le bruit arrive avant que le moteur ne démarre' },
    ],
    canRide: [
      'Avec un sifflement qui vit quelques secondes après un démarrage à froid puis disparaît complètement, on peut rouler : il n’y a pas de menace directe. Il reste utile de faire regarder la courroie à l’occasion — l’examen prend deux minutes, et remplacer la courroie avec le galet fait partie des travaux peu coûteux.',
      'Si le sifflement a cessé de partir à chaud, apparaît à l’enclenchement de la climatisation ou dure plus longtemps et plus fort à chaque démarrage, prenez rendez-vous dans la semaine : une courroie usée peut casser, et sans elle l’alternateur s’arrête, ainsi que la pompe à eau sur beaucoup de moteurs. Si le témoin de batterie s’allume ou que l’aiguille de température monte — arrêtez-vous et coupez le moteur.',
    ],
    checks: [
      'Chronométrer la durée du sifflement : quelques secondes après le démarrage, c’est du patinage à froid ; un bruit qui ne part pas à chaud, c’est l’usure de la courroie ou des galets.',
      'Chercher le lien avec la météo : un sifflement seulement après la pluie, un lavage ou par grand froid parle de patinage et non de la panne d’une pièce précise.',
      'Enclencher la climatisation ou le dégivrage moteur tournant : si le sifflement apparaît ou grossit, la courroie patine en charge.',
      'Moteur coupé, examiner la courroie à la lampe : fissures transversales, bords effilochés et flancs « polis » brillants sont des signes d’usure.',
      'Regarder s’il y a des coulures ou des traces blanchâtres de liquide de refroidissement près des poulies : elles désignent la pompe à eau, et alors mieux vaut ne pas repousser la visite au garage.',
    ],
    appHelp:
      'L’application Pro-Stuk pose les mêmes questions que le mécanicien à la réception : quand le sifflement apparaît, s’il part une fois chaud, ce que l’on entend pendant que le démarreur travaille. L’enregistrement aide à distinguer le couinement de la courroie du frottement du démarreur, et le rapport donne les causes probables avec des pourcentages et une conclusion claire : vous pouvez rouler, au garage cette semaine ou arrêtez-vous.',
    faq: [
      {
        q: 'Pourquoi le moteur siffle-t-il seulement à froid et par temps humide ?',
        a: 'Le caoutchouc froid et mouillé de la courroie accroche moins bien les poulies : dans les premières secondes après le démarrage, elle patine et siffle. En chauffant, l’adhérence revient et le bruit disparaît. Une courroie neuve avec un tendeur en bon état encaisse aussi ces conditions, donc un sifflement matinal régulier est un motif de contrôle.',
      },
      {
        q: 'Le sifflement apparaît maintenant aussi moteur chaud. Est-ce sérieux ?',
        a: 'C’est le signe que l’usure a atteint le stade où la courroie patine déjà dans des conditions normales. On peut encore rouler, mais prenez rendez-vous dans la semaine : une courroie cassée vous laisse sans alternateur et, sur beaucoup de voitures, sans pompe à eau, et le trajet se termine en dépanneuse.',
      },
      {
        q: 'Quelle différence entre le sifflement après le démarrage et le frottement pendant le démarrage ?',
        a: 'Le sifflement et le couinement apparaissent une fois le moteur lancé, et la courroie en est en général responsable. Le frottement métallique s’entend plus tôt — dans les secondes où le démarreur entraîne le moteur — et signale un mauvais engagement du lanceur avec la couronne du volant moteur. Pièces différentes, réparation différente.',
      },
    ],
  },

  'vibratsiya-na-holostyh': {
    h1: 'Vibrations au ralenti',
    metaTitle: 'Vibrations au ralenti : causes des tremblements et solutions | Pro-Stuk',
    description:
      'Pourquoi la voiture tremble au ralenti : supports moteur, ratés d’allumage, prise d’air ou papillon encrassé. Quoi vérifier et peut-on rouler.',
    intro: [
      'Un léger tremblement au ralenti, toute voiture en a, un diesel encore plus. Ici il s’agit d’autre chose : d’un tremblement que l’on sent dans le volant, le siège et le rétroviseur, et qui n’était pas là avant. Sa cause la plus fréquente, ce sont les supports moteur : les blocs en caoutchouc sur lesquels le moteur est fixé à la caisse et qui absorbent ses oscillations. Avec les années, le caoutchouc durcit et se fissure, et la vibration que les supports mangeaient auparavant part dans la caisse.',
      'Deuxième groupe de causes : le moteur lui-même tourne irrégulièrement. Les ratés d’allumage (quand un cylindre s’allume mal de temps à autre — en général à cause des bougies ou des bobines), une prise d’air par une durite fissurée ou un joint d’admission, un papillon ou des injecteurs encrassés rendent le ralenti instable. Distinguer ces cas des supports n’est pas difficile : alors l’aiguille du compte-tours tremble ou ondule et le voyant moteur s’allume souvent, tandis qu’avec des supports usés le moteur tourne rond — c’est la caisse qui tremble.',
    ],
    causes: [
      { name: 'Supports moteur', likelihood: 'Le plus souvent — surtout sur les voitures de plus de 8–10 ans' },
      { name: 'Ratés d’allumage : bougies, bobines', likelihood: 'Fréquent — si le régime tremble et que le voyant moteur est allumé' },
      { name: 'Prise d’air par une durite ou un joint d’admission', likelihood: 'Fréquent — si le régime ondule, parfois avec un sifflement' },
      { name: 'Papillon ou injecteurs encrassés', likelihood: 'Fréquent au-delà de cent mille kilomètres' },
    ],
    canRide: [
      'Dans la plupart des cas, on peut rouler : les vibrations au ralenti ne sont pas le symptôme pour lequel on laisse la voiture sur la bande d’arrêt d’urgence. Avec des supports usés, vous avez une à deux semaines pour prendre rendez-vous tranquillement ; traîner des mois n’est pas raisonnable — des supports détruits ajoutent des chocs au démarrage et aux passages de rapport et accélèrent l’usure des pièces voisines.',
      'Cas à part : un moteur qui rate franchement — tremblements par à-coups, voyant moteur clignotant ou allumé, puissance en baisse. Avec cela aussi on peut rouler, mais doucement et pas longtemps : le carburant non brûlé des ratés finit de brûler dans l’échappement et surchauffe le catalyseur, dont le remplacement coûte cher. Le diagnostic, dans ce cas, est pour les jours qui viennent et non « à l’occasion ».',
    ],
    checks: [
      'Test des supports : enclencher un rapport (D sur boîte automatique) et maintenir le frein. La vibration de supports usés augmente en général nettement dans cette position.',
      'Regarder le compte-tours : aiguille immobile et voiture qui tremble, c’est un argument pour les supports ; aiguille qui tremble ou ondule, le moteur tourne irrégulièrement.',
      'Enclencher la climatisation et noter si le tremblement change : sous charge supplémentaire, des supports faibles et un ralenti irrégulier se manifestent plus nettement, et ce détail servira au mécanicien.',
      'Examiner, sans rien démonter, les fines durites en caoutchouc sous le capot : fissures et durites déboîtées sont un lieu fréquent de prise d’air.',
      'Se rappeler quand les bougies ont été changées : un kilométrage bien au-delà de l’intervalle en fait le premier candidat en cas de ratés. Si le voyant moteur est allumé, commencer par la lecture des codes : ils resserrent la recherche.',
    ],
    appHelp:
      'L’application Pro-Stuk pose les mêmes questions — le tremblement augmente-t-il avec un rapport enclenché, le régime tient-il, le voyant moteur est-il allumé — et répartit les causes probables en pourcentages. Le rapport donne une conclusion claire : roulez tranquillement, prenez rendez-vous cette semaine ou montrez la voiture dans les jours qui viennent.',
    faq: [
      {
        q: 'Pourquoi ça tremble seulement au ralenti alors que la voiture roule bien ?',
        a: 'Au ralenti, le régime est minimal et le moteur se balance sur ses supports à une fréquence que la caisse transmet bien dans l’habitacle. Quand le régime monte, les oscillations deviennent plus fines et se sentent moins. C’est pourquoi des supports usés se trahissent au feu rouge et non sur l’autoroute.',
      },
      {
        q: 'Qu’est-ce qu’un raté d’allumage ?',
        a: 'C’est lorsque le mélange dans l’un des cylindres ne s’enflamme pas de temps en temps — le plus souvent à cause de bougies usées ou d’une bobine défaillante. Le moteur perd alors une partie de sa puissance et sursaute, tandis que le carburant non brûlé finit de brûler dans l’échappement et surchauffe le catalyseur.',
      },
      {
        q: 'Le nettoyage du papillon aide-t-il ?',
        a: 'Il aide si la cause est là : l’encrassement empêche de doser précisément l’air au ralenti, et le régime devient irrégulier. Mais le nettoyage n’est pas un remède universel : avec des supports usés ou des ratés d’allumage, la vibration restera identique après.',
      },
    ],
  },

  'hlopki-v-glushitele': {
    h1: 'Détonations dans l’échappement',
    metaTitle: 'Détonations dans l’échappement : causes et que faire | Pro-Stuk',
    description:
      'Pourquoi l’échappement pétarade : ratés d’allumage, ligne percée, mélange incorrect ou réglages du GPL. Ce que les détonations font au catalyseur et quand aller au garage.',
    intro: [
      'Des détonations ou des « coups de feu » dans l’échappement signifient qu’une partie du carburant ne brûle pas dans les cylindres, mais déjà dans la ligne d’échappement. Le plus souvent, les ratés d’allumage sont en cause : une bougie usée ou une bobine défaillante n’enflamme pas le mélange, l’essence non brûlée part dans l’échappement chaud et s’y enflamme avec la détonation caractéristique.',
      'Deuxième groupe de causes : la ligne d’échappement elle-même. Un silencieux, un tuyau ou un joint percés ajoutent aux détonations un rugissement qui grossit à l’accélérateur. Le mélange peut aussi être incorrect à cause de capteurs ou d’injecteurs, et sur les voitures au GPL, des détonations au gaz sont un signe typique de réglages déviés. Tous ces scénarios ont un dénominateur commun : le carburant non brûlé finit de brûler dans le catalyseur — l’organe qui achève de brûler les gaz nocifs —, le surchauffe et le détruit peu à peu, et le remplacement d’un catalyseur coûte cher.',
    ],
    causes: [
      { name: 'Ratés d’allumage : bougies ou bobines', likelihood: 'Le plus souvent' },
      { name: 'Silencieux, tuyau ou joint d’échappement percés', likelihood: 'Fréquent — les détonations viennent avec un rugissement' },
      { name: 'Mélange incorrect : capteurs ou injecteurs', likelihood: 'Assez fréquent' },
      { name: 'Réglages déviés de l’installation GPL', likelihood: 'Si les détonations n’apparaissent qu’au gaz' },
      { name: 'Rugissement à l’accélération sans puissance : l’embrayage patine', likelihood: 'Cas à part au bruit voisin' },
    ],
    canRide: [
      'Une détonation isolée au lever de pied n’oblige pas à s’arrêter : vous pouvez rentrer ou rejoindre le garage. Avec des détonations régulières, on peut rouler aussi, mais prévoyez le diagnostic dans les jours qui viennent et non dans les semaines : chaque détonation est une dose de carburant non brûlé qui finit de brûler dans le catalyseur, et la facture d’une réparation repoussée passe de bougies bon marché au prix d’un catalyseur.',
      'Cas particulier : le voyant moteur qui clignote. Le système prévient ainsi de ratés d’allumage actifs, dangereux pour le catalyseur en cet instant même. Avec un voyant clignotant, ne roulez que doucement et pas loin, sans charge, et allez au garage sans délai. Si l’on sent l’échappement dans l’habitacle, roulez fenêtre entrouverte jusqu’à la réparation et ne faites pas chauffer la voiture dans un garage fermé : le monoxyde de carbone est dangereux.',
    ],
    checks: [
      'Noter quand ça pétarade : en charge à l’accélération, au lever de pied ou au ralenti — ce détail raccourcit aussitôt la recherche du mécanicien.',
      'Regarder le voyant moteur : allumé fixe, c’est un diagnostic dans les jours qui viennent ; clignotant, les ratés ont lieu en ce moment même et la visite ne se repousse pas.',
      'Évaluer le fonctionnement du moteur : marche irrégulière, tremblements au ralenti et puissance en baisse accompagnant les détonations désignent bougies, bobines ou mélange.',
      'Écouter l’échappement : un rugissement qui grossit à l’accélérateur alors que la puissance reste normale est le signe d’un trou dans le silencieux ou le tuyau, et non d’un problème d’allumage.',
      'Sur une voiture au GPL, comparer le fonctionnement au gaz et à l’essence : des détonations uniquement au gaz sont une question pour l’installateur.',
    ],
    appHelp:
      'L’application Pro-Stuk précise les circonstances — détonations ou rugissement, au gaz ou à l’essence, avec ou sans perte de puissance — et aide à séparer les problèmes d’allumage, un trou dans la ligne et un embrayage qui patine, qui se ressemblent à l’oreille. Le rapport donne les causes probables avec des pourcentages et une recommandation claire sur l’urgence du garage.',
    faq: [
      {
        q: 'Pourquoi l’échappement pétarade-t-il si le problème est dans le moteur ?',
        a: 'Quand une bougie ou une bobine n’enflamme pas le mélange dans le cylindre, l’essence non brûlée est refoulée dans la ligne d’échappement. Elle y rencontre des pièces portées au rouge et finit de brûler dans un éclair — c’est ce bruit que l’on entend comme une détonation d’échappement. La source, elle, se trouve sous le capot et non dans le silencieux.',
      },
      {
        q: 'En quoi les détonations sont-elles dangereuses pour le catalyseur ?',
        a: 'Le catalyseur est conçu pour achever de brûler des restes de gaz d’échappement, et non des doses de carburant brut. L’essence qui y finit de brûler fait monter la température au-delà du prévu, et le nid d’abeilles céramique fond ou s’effrite. Résultat : perte de puissance, cliquetis sous le plancher et remplacement du catalyseur, l’un des travaux les plus coûteux de la ligne d’échappement.',
      },
      {
        q: 'Ma voiture au GPL pétarade au gaz. Est-ce dangereux ?',
        a: 'Oui, pour l’installation gaz les détonations sont plus dangereuses que pour le moteur essence : un retour de flamme dans l’admission peut endommager ses pièces en plastique et les capteurs. La cause habituelle, ce sont des réglages déviés ou des bougies usées. Le plus sage : passer à l’essence et prendre rendez-vous chez un spécialiste GPL.',
      },
    ],
  },
};
