import type { SymptomTr } from '../types';

/** Разборы симптомов по-французски. Структура — из русских файлов рядом. */
export const pages: Record<string, SymptomTr> = {
  'stuk-v-dvigatele': {
    h1: 'Cognement dans le moteur',
    metaTitle: 'Le moteur cogne : causes, gravité, que faire | Stuk',
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
      'L’application Stuk vous fait passer par les mêmes questions qu’un motoriste, enregistre le bruit et évalue son spectre et son rythme : à quelle fréquence arrivent les coups et comment cela se rapporte au régime — pour un cognement de soupapes et un cognement de vilebrequin, ce rapport diffère. Le rapport donne les causes probables avec des pourcentages, un feu d’urgence et des formulations pour la discussion au garage.',
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
    metaTitle: 'Les freins grincent : dangereux ou non, causes et solutions | Stuk',
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
      'L’application Stuk sépare le scénario anodin de l’inquiétant avec les mêmes questions — quand ça grince et si le bruit disparaît — et l’enregistrement aide à distinguer le couinement aigu du témoin d’usure du frottement métallique. Le rapport donne les causes probables avec des pourcentages et un feu : vous pouvez rouler, au garage cette semaine ou arrêtez-vous.',
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
    metaTitle: 'Ronflement en roulant : roulement, pneus ou boîte | Stuk',
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
      'L’application Stuk vous fait passer par les mêmes questions — le ronflement reste-t-il au point mort, change-t-il en courbe et selon le revêtement — et aide à enregistrer le bruit pour comparer son caractère avec des cas typiques. Le rapport donne les causes probables avec des pourcentages et une conclusion : roulez tranquillement, planifiez le garage ou faites vérifier sans délai.',
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
    metaTitle: 'Bruit dans la suspension : ce qui cogne et peut-on rouler | Stuk',
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
      'L’application Stuk suit les mêmes bifurcations qu’un mécanicien à la réception : quel bruit, sur quelles irrégularités, avant ou arrière, remonte-t-il dans le volant. L’enregistrement évite de perdre les détails avant la visite, et le rapport donne les causes probables avec des pourcentages et un feu clair : vous pouvez rouler, montrez-le cette semaine ou faites vérifier d’urgence.',
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
    metaTitle: 'Roulement de roue qui ronfle : comment le reconnaître | Stuk',
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
      'L’application Stuk pose les mêmes questions de contrôle — sur le revêtement, les virages et la roue libre au point mort —, enregistre le ronflement et évalue son caractère : le bruit large bande des pneus et le ronflement d’un roulement n’ont pas la même allure dans le spectre. Le rapport donne les probabilités des causes, l’urgence et une indication sur le côté à annoncer au mécanicien.',
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
    metaTitle: 'Chocs sur les bosses : causes et vérifications à faire soi-même | Stuk',
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
      'L’application Stuk pose les mêmes questions que cette page, mais pas à pas : quel choc exactement, où on l’entend, comment il se comporte sur différentes irrégularités. À partir de vos réponses et de l’enregistrement, elle construit un rapport avec les causes probables et un feu d’urgence — de quoi trancher entre le garage demain et le garage à l’occasion.',
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
    metaTitle: 'Le moteur cliquette : normal ou usure, causes | Stuk',
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
      'L’application Stuk précise l’essentiel — le cliquetis s’est-il renforcé avec le temps et comment se comporte-t-il à froid et à chaud — et l’enregistrement permet de le comparer à des exemples typiques. Le rapport donne les causes probables avec des pourcentages et une conclusion en forme de feu : normal, rendez-vous cette semaine ou diagnostic sans délai.',
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
    metaTitle: 'La courroie siffle : causes, peut-on rouler et que faire | Stuk',
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
      'L’application Stuk précise le caractère du bruit et les circonstances — sifflement ou ronflement, à froid ou en charge, lié ou non à la climatisation — et, grâce à l’enregistrement, aide à distinguer le couinement de la courroie du bruissement d’un galet. Le rapport donne les causes probables avec des pourcentages et un feu : vous pouvez rouler, au garage cette semaine ou arrêtez-vous.',
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
};
