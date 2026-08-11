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
};
