import type { Dict } from './types';

export const fr: Dict = {
  brand: 'Pro-Stuk',
  nav: {
    symptoms: 'Symptômes',
    how: 'Comment ça marche',
    articles: 'Articles',
    analytics: 'Statistiques',
    lang: 'Langue',
  },
  footer: {
    disclaimer:
      'Pro-Stuk donne une estimation de probabilités à partir de vos réponses et du bruit, ' +
      'pas un diagnostic. La décision finale sur la réparation revient au mécanicien ' +
      'après examen de la voiture.',
    how: 'Comment ça marche',
    privacy: 'Politique de confidentialité',
    ruArticles: 'Articles (en russe)',
    ruOnly: 'Guides par symptôme et articles (en russe)',
  },
  home: {
    title: 'Pro-Stuk — diagnostic auto à l’oreille',
    description:
      'Enregistrez le bruit et sachez ce qu’a votre voiture. Un questionnaire court, ' +
      'l’analyse de l’enregistrement et un rapport : causes probables avec pourcentages, ' +
      'feu tricolore d’urgence et quoi dire au garage.',
    schemaDescription:
      'Diagnostic des pannes automobiles par les symptômes et le bruit : questionnaire, ' +
      'enregistrement sonore et rapport avec les causes probables.',
    h1: 'Enregistrez le bruit — sachez ce qu’a votre voiture',
    sub:
      'Un questionnaire court et un enregistrement de 15 à 30 secondes. En retour : les ' +
      'causes probables avec leurs pourcentages, un feu tricolore d’urgence et les mots ' +
      'justes pour le garage.',
    cta: 'Télécharger l’application',
    ctaNote: 'Android · gratuit pour l’instant',
    howH2: 'Comment ça marche',
    steps: [
      {
        title: '1. Questions',
        text: 'Quand le bruit se fait entendre et à quoi il ressemble : l’arbre de questions resserre la cause.',
      },
      {
        title: '2. Bruit',
        text: 'Enregistrement de 15 à 30 secondes : le spectre, le rythme des coups et le régime moteur sont calculés sur le serveur.',
      },
      {
        title: '3. Rapport',
        text: 'Les causes avec leurs pourcentages, le feu tricolore d’urgence et quoi dire au garage.',
      },
    ],
    faqH2: 'Questions fréquentes',
    faq: [
      {
        q: 'Est-ce un diagnostic exact ?',
        a: 'Non. Pro-Stuk donne une estimation de probabilités : une liste de causes possibles avec des pourcentages et un niveau d’urgence. Le diagnostic exact, c’est le mécanicien qui le pose après examen — le rapport sert à arriver préparé.',
      },
      {
        q: 'Combien ça coûte ?',
        a: 'Gratuit pour l’instant : jusqu’à 3 rapports sonores complets par jour et par appareil. Le verdict préliminaire issu du questionnaire est sans limite.',
      },
      {
        q: 'Quelles voitures sont prises en charge ?',
        a: 'Les voitures particulières à moteur essence ou diesel, avec boîte manuelle ou automatique. La marque, l’année et le kilométrage entrent dans l’analyse.',
      },
      {
        q: 'Que devient mon enregistrement ?',
        a: 'L’audio part vers le serveur, il est analysé et n’est pas conservé ensuite. Il n’y a ni comptes ni traceurs publicitaires.',
      },
      {
        q: 'Et si je n’arrive pas à enregistrer le bruit ?',
        a: 'Le rapport s’appuie d’abord sur vos réponses, comme un mécanicien qui commence par poser des questions. Si l’enregistrement n’apprend rien, l’application le dit franchement.',
      },
    ],
  },
  quiz: {
    h2: 'Essayez tout de suite',
    sub: 'Quelques questions et vous verrez la cause probable et son degré d’urgence.',
    urgOk: 'Vous pouvez rouler',
    urgWarn: 'Au garage cette semaine',
    urgStop: 'Arrêtez-vous',
    back: 'Retour',
    restart: 'Recommencer',
    cta: 'Rapport sonore complet — dans l’application',
    schemaMarked: 'Ce qui est entouré correspond à vos réponses : une hypothèse, pas un diagnostic.',
    schemaWhole: 'L’ensemble au complet.',
  },
  symptoms: {
    indexTitle: 'Bruits et symptômes de la voiture expliqués | Pro-Stuk',
    indexDescription: 'Cognement, ronflement, sifflement, grincement : ce que signifie chaque bruit de voiture, à quel point c’est grave et ce que vous pouvez vérifier vous-même. Guides par symptôme avec arbre de diagnostic.',
    h1: 'Symptômes par le bruit',
    sub: 'Choisissez le bruit le plus proche du vôtre. Dans chaque guide : causes probables, feu de danger, vérifications sans risque et arbre de diagnostic interactif.',
    gDvigatel: 'Moteur',
    gDvizhenie: 'En roulant',
    gTormozaRul: 'Freins et direction',
    gPodveska: 'Suspension',
    causesH2: 'Causes possibles',
    thCause: 'Cause',
    thLikelihood: 'Probabilité',
    thDanger: 'Danger',
    canRideH2: 'Peut-on continuer à rouler',
    checksH2: 'Ce que vous pouvez vérifier vous-même',
    quizH2: 'Affiner la cause par des questions',
    quizSub: 'Répondez à quelques questions : l’arbre de diagnostic réduira la liste des causes pour votre cas.',
    appHelpH2: 'En quoi l’application aide',
    faqH2: 'Questions fréquentes',
    lightOk: 'vous pouvez rouler',
    lightWarn: 'au garage cette semaine',
    lightStop: 'arrêtez-vous',
    mapTitle: 'D’où vient le bruit',
    mapOk: 'Vous pouvez rejoindre le garage tranquillement',
    mapWarn: 'Ne tardez pas : à vérifier dans les prochains jours',
    mapStop: 'Au garage sans attendre',
    zoneDvigatel: 'le compartiment moteur',
    zoneDvizhenie: 'les roues et tout ce qui tourne avec elles',
    zoneTormoza: 'freins et direction, zone de la roue',
    zonePodveska: 'suspension, zone de la roue',
  },
  download: {
    h2: 'L’application Android',
    sub: 'Le questionnaire, l’enregistrement du bruit et le rapport complet avec les probabilités sont dans l’application Pro-Stuk.',
    btn: 'Télécharger pour Android',
    meta: 'Version {version} · APK {size} Mo · mis à jour le {date}',
    installH: 'Installer l’APK',
    steps: [
      'Téléchargez le fichier avec le bouton ci-dessus.',
      'Ouvrez-le depuis la notification ou depuis « Téléchargements ».',
      'Autorisez l’installation depuis cette source quand le téléphone le demande.',
      'Installez l’application et ouvrez-la.',
    ],
    playNote: 'Dès que l’application sera sur Google Play, cette page sera mise à jour.',
  },
  how: {
    title: 'Comment fonctionne le diagnostic à l’oreille | Pro-Stuk',
    description:
      'Sans enjolivures : le questionnaire comme outil principal, l’analyse spectrale de ' +
      'l’enregistrement, un modèle de langage et les faiblesses connues de chaque modèle. ' +
      'Pourquoi le résultat reste une probabilité.',
    schemaName: 'Comment fonctionne le diagnostic à l’oreille',
    h1: 'Comment ça marche',
    formH2: 'Le questionnaire est l’outil principal',
    formP:
      'Tout diagnostic commence par des questions : quand le bruit est apparu, à quoi il ' +
      'ressemble, s’il dépend de la vitesse, du régime, du freinage, des virages. Les ' +
      'réponses éliminent des familles entières de causes — cela apporte plus que n’importe ' +
      'quel algorithme appliqué à un mauvais enregistrement. Le questionnaire passe donc en ' +
      'premier dans Pro-Stuk, et sa logique est un arbre de décision : chaque réponse mène à la ' +
      'question suivante, plus précise.',
    recH2: 'Ce qui arrive à l’enregistrement',
    recP: [
      'L’enregistrement de 15 à 30 secondes part vers le serveur. Il est d’abord traité par ' +
        'des mathématiques ordinaires, sans réseaux de neurones : le spectre du son, sa ' +
        'couleur (sifflement tonal ou bruit large bande), le rythme des coups et leur ' +
        'fréquence, une estimation du régime moteur à partir des basses fréquences. Chaque ' +
        'indice reçoit une note de fiabilité : si l’enregistrement est faible ou bruité, les ' +
        'indices sont honnêtement signalés comme peu fiables.',
      'Un modèle de langage rassemble ensuite le tout : vos réponses, les indices de ' +
        'l’enregistrement, l’audio lui-même et les données de la voiture — marque, année, ' +
        'kilométrage et faiblesses connues du modèle. En sortie : 2 à 4 causes probables avec ' +
        'leurs pourcentages, un niveau d’urgence et des pistes pour le garage.',
    ],
    probH2: 'Pourquoi le résultat est une probabilité',
    probP: [
      'Des pannes différentes font le même bruit : le ronflement d’un roulement de roue se ' +
        'confond aisément avec le bruit des pneus, et le claquement des biellettes de barre ' +
        'stabilisatrice avec des pièces de suspension bien plus sérieuses. Pour trancher, il ' +
        'faut passer la voiture sur un pont. C’est pourquoi Pro-Stuk ne pose pas de diagnostic et ' +
        'ne promet pas d’exactitude : il répartit honnêtement les probabilités et dit quoi ' +
        'vérifier en premier.',
      'Un bon enregistrement améliore l’estimation, mais ne remplace pas le mécanicien. ' +
        'Prenez le rapport comme un deuxième avis avant le rendez-vous : la discussion devient ' +
        'concrète, et il devient plus difficile de vous vendre une réparation inutile.',
    ],
    dataH2: 'Données',
    dataP:
      'L’audio est analysé sur le serveur et n’est pas conservé ensuite. Il n’y a ni comptes, ' +
      'ni outils de mesure d’audience, ni traceurs publicitaires. Plus de détails dans la ',
    dataLink: 'politique de confidentialité',
    dataTail: '.',
  },
  privacy: {
    title: 'Politique de confidentialité | Pro-Stuk',
    description:
      'Ce que deviennent vos données dans l’application Pro-Stuk : l’audio est traité sur le ' +
      'serveur et n’est pas conservé après l’analyse, il n’y a ni comptes ni mesure d’audience.',
    h1: 'Politique de confidentialité',
    updatedLabel: 'Mise à jour',
    intro:
      'L’application Pro-Stuk collecte le strict minimum — exactement ce dont le diagnostic a besoin, rien de plus.',
    items: [
      {
        strong: 'L’enregistrement',
        text: 'part vers le serveur uniquement quand vous appuyez sur le bouton. Il sert à l’analyse et n’est pas conservé une fois le rapport rendu, ni sur le serveur ni dans un fichier.',
      },
      {
        strong: 'C’est Google qui analyse le son.',
        text: 'L’enregistrement est transmis à l’API Google Gemini, le service qui l’analyse pour notre compte. Rien qui permette de vous identifier ne l’accompagne.',
      },
      {
        strong: 'Les données du véhicule',
        text: '(marque, modèle, année, kilométrage) et vos réponses partent avec l’enregistrement : c’est sur elles que les causes sont pesées.',
      },
      {
        strong: 'Il n’y a pas de comptes.',
        text: 'Aucune inscription n’est nécessaire. L’application crée elle-même un numéro d’appareil aléatoire, sans lien avec votre téléphone, votre e-mail ou votre compte Google ; sur le serveur, il ne sert qu’à compter les vérifications de la journée.',
      },
      {
        strong: 'L’adresse IP',
        text: 'est visible du serveur, comme lors de toute visite sur internet, et ne sert qu’à éviter la surcharge. Elle reste quelques minutes en mémoire, n’entre dans aucune base et n’est rattachée à aucun rapport.',
      },
      {
        strong: 'Pas de traqueurs tiers ni de publicité.',
        text: 'Le site compte des vues anonymes sur son propre serveur : sans cookies, sans identifiants et sans rien transmettre à personne. L’application ne contient aucune analytique.',
      },
      {
        strong: 'L’historique des rapports',
        text: 'reste uniquement sur votre appareil et disparaît avec l’application.',
      },
      {
        strong: 'La transmission est chiffrée.',
        text: 'L’application dialogue avec le serveur en HTTPS.',
      },
      {
        strong: 'Comment supprimer vos données.',
        text: 'Il suffit de désinstaller l’application : l’historique et le numéro d’appareil s’en vont avec elle. Le compteur du serveur se remet à zéro chaque jour. Écrivez-nous s’il vous faut une confirmation.',
      },
      {
        strong: 'L’application n’est pas destinée aux enfants.',
        text: 'Elle s’adresse aux conducteurs.',
      },
    ],
    outro:
      'Le micro ne s’allume que pendant l’enregistrement et seulement à votre demande. Le rapport est une estimation de probabilité, pas un diagnostic ; la décision de réparer revient au mécanicien après examen.',
    contactTitle: 'Nous contacter',
    contactText:
      'L’application et le site Pro-Stuk sont tenus par {operator}. Questions sur vos données, réclamations et demandes de suppression :',
    changes:
      'Si cette politique change, la date de mise à jour en haut de page change avec elle.',
  },
  og: {
    tagline: 'Trouver la panne au bruit',
  },
  notFound: {
    title: 'Page introuvable — Pro-Stuk',
    description:
      'Cette page n’existe pas sur le site. Revenez à l’accueil ou ouvrez les guides par symptôme.',
    h1: 'Page introuvable',
    text:
      'L’adresse comporte une faute de frappe, ou la page a été déplacée. Le bruit qui vous a amené ici n’a pas disparu : repartez de l’accueil ou ouvrez les guides par symptôme.',
    home: 'Retour à l’accueil',
  },
};
