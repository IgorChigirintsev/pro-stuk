import type { HubText } from './index';

/** Разделы по узлам: французский. Слаг общий с английским, переводится только текст. */
export const fr: Record<string, HubText> = {
  dvigatel: {
    h1: 'Bruits et cognements du moteur',
    short: 'Moteur',
    metaTitle: 'Bruits et cognements du moteur : le guide | Stuk',
    description:
      'Tous les bruits du moteur au même endroit : cognement, tic-tac, cliquetis, sifflement. Comment séparer l’anodin du dangereux et ce que vous pouvez vérifier.',
    intro: [
      'Le moteur est l’organe le plus bavard de la voiture et le plus ambigu : sous le mot « cognement » se cachent aussi bien le cliquetis anodin des injecteurs que des coussinets de vilebrequin usés, où chaque kilomètre rapproche la réfection. Ce qui les distingue n’est pas le volume, mais l’endroit d’où vient le bruit, le moment où il apparaît et sa réaction à l’accélérateur et à la montée en température.',
      'Cette rubrique rassemble un guide par type de bruit : du tic-tac des soupapes et du bruissement de la chaîne de distribution au cliquetis de combustion et au cognement des coussinets de bielle. Chacun décrit le son, les vérifications sans démontage et une évaluation honnête de l’urgence.',
    ],
  },
  podveska: {
    h1: 'Bruits et grincements du train roulant',
    short: 'Train roulant et direction',
    metaTitle: 'Bruits et grincements du train roulant : guide | Stuk',
    description:
      'Cognement sur les bosses, grincement, jeu dans la direction : comment localiser la source dans le train roulant et la direction et que vérifier soi-même.',
    intro: [
      'Le train roulant s’use progressivement et prévient presque toujours par un bruit bien avant de devenir dangereux. Le problème est ailleurs : le même cognement sur les bosses est produit aussi bien par des biellettes bon marché que par une rotule, dont la rupture à vitesse relève déjà de la sécurité.',
      'La rubrique classe les guides par caractère du bruit et conditions d’apparition : cognement rapide sur tôle ondulée, chocs isolés dans les nids-de-poule, grincement quand on secoue la voiture, cognement dans le volant. À part, les signes d’usure de chaque pièce et les vérifications faisables sans pont.',
    ],
  },
  tormoza: {
    h1: 'Grincement et frottement des freins',
    short: 'Freins et roues',
    metaTitle: 'Grincement et frottement des freins : guide | Stuk',
    description:
      'Grincement, sifflement, frottement métallique et vibration au freinage : ce que signifie chaque bruit, quand il ne faut plus rouler et comment vérifier les plaquettes.',
    intro: [
      'Les freins sont le seul système où le bruit doit être pris au pied de la lettre : la plupart des signaux sont voulus par le constructeur. Le témoin métallique d’usure se met à siffler exprès quand les plaquettes s’épuisent, et le frottement métal contre métal signifie que la réserve est déjà consommée.',
      'Pourtant la cause la plus fréquente de grincement est anodine : la pellicule de rouille nocturne sur les disques, que les premiers freinages effacent. On y ajoute les bruits de roues et de moyeux : ronflement du roulement, vibration à vitesse, cliquetis, souvent confondus avec les freins.',
    ],
  },
  transmissiya: {
    h1: 'Bruits de boîte et de transmission',
    short: 'Transmission',
    metaTitle: 'Bruits de boîte et de transmission : guide | Stuk',
    description:
      'Hurlement de la boîte, claquements des cardans, à-coups au passage des rapports et ronflement de l’embrayage : comment localiser la source sous le plancher.',
    intro: [
      'La transmission se manifeste autrement que le moteur et le train roulant : ses bruits dépendent du fait qu’un couple soit transmis ou non. Un son qui disparaît en levant le pied et revient en charge appartient presque toujours à cette famille.',
      'La rubrique réunit les guides sur la boîte, l’embrayage, les transmissions et le pont : comment sonne chaque organe, quelle vérification montre quelque chose sans démontage et à partir de quand continuer coûte cher.',
    ],
  },
  vyhlop: {
    h1: 'Bruits de la ligne d’échappement',
    short: 'Échappement',
    metaTitle: 'Bruits de l’échappement : le guide | Stuk',
    description:
      'Grondement, détonations au silencieux, cliquetis sous le plancher et tôle thermique qui vibre : ce que signalent les bruits d’échappement et pourquoi ils comptent.',
    intro: [
      'L’échappement produit les bruits les plus reconnaissables : le grondement d’un silencieux percé, les détonations en levant le pied, le cliquetis métallique à un régime précis. La plupart ne changent rien au comportement de la voiture, mais mieux vaut ne pas les ignorer : derrière un cliquetis anodin se cache parfois un catalyseur qui se désagrège, dont les débris peuvent remonter vers le moteur.',
      'La rubrique couvre tout le trajet : de la tôle thermique à quelques euros et du flexible déchiré au joint de collecteur brûlé et au catalyseur bouché, avec le son de chaque défaut et le risque de gaz dans l’habitacle.',
    ],
  },
  salon: {
    h1: 'Grincements et bruits d’habitacle',
    short: 'Habitacle et carrosserie',
    metaTitle: 'Grincements d’habitacle : trouver la source | Stuk',
    description:
      'Grillons dans l’habitacle, planche de bord qui grince, portes qui claquent : comment trouver la source soi-même et la distinguer d’un défaut du train roulant.',
    intro: [
      'Les bruits d’habitacle sont les plus agaçants et généralement les moins coûteux : derrière se cachent le plus souvent un clip détaché, un objet non arrimé dans le coffre ou un joint sec, pas une panne. L’essentiel est de les distinguer d’un cognement de suspension, pour qu’un plastique qui grince ne se transforme pas en facture de diagnostic du train roulant.',
      'La rubrique montre des façons simples de cerner le bruit : appuyer sur la garniture pendant que la voiture roule, vider le coffre, gauchir la caisse en montant une roue sur le trottoir. Et un repère honnête pour savoir quand le bruit vient vraiment de dessous.',
    ],
  },
};
