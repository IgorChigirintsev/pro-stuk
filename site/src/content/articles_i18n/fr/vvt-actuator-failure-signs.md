---
title: "Les signes d'un déphaseur d'arbre à cames défaillant"
metaTitle: "Déphaseur VVT HS : bruit et symptômes | Pro-Stuk"
description: "Les signes d'un déphaseur VVT défaillant : un claquement après le démarrage, un ralenti instable, des codes P0010–P0017. Comment le distinguer des autres bruits."
faq:
  - q: "Qu'est-ce qu'un déphaseur VVT, en clair ?"
    a: "C'est un mécanisme hydraulique monté sur l'arbre à cames qui, grâce à la pression d'huile, fait tourner l'arbre et change le moment d'ouverture des soupapes. Ça donne au moteur à la fois du couple en bas et de la puissance en haut."
  - q: "Quels codes défaut désignent un déphaseur VVT ?"
    a: "Le plus souvent la famille P0010–P0017 : corrélation arbre à cames / vilebrequin, ou défaut du circuit de commande du déphaseur. Mais une chaîne de distribution détendue et une électrovanne grippée donnent les mêmes codes, il faut donc contrôler le calage réel à la valise."
  - q: "Le déphaseur se remplace-t-il séparément ou avec la chaîne de distribution ?"
    a: "Techniquement séparément, mais en pratique le remplacement est presque toujours combiné avec la chaîne : les pièces sont voisines et l'essentiel du démontage est commun. Ça revient moins cher que d'ouvrir deux fois la face avant du moteur."
sources:
  - title: "Schaeffler (INA) : systèmes de distribution variable"
    url: "https://www.schaeffler.com"
  - title: "SAE International : recherches sur la distribution et le calage"
    url: "https://www.sae.org/"
---

Le VVT — la distribution variable — est le système qui décale le moment
d'ouverture des soupapes. Son acteur principal est le déphaseur monté sur
l'arbre à cames, qui utilise la pression d'huile pour faire tourner
l'arbre et déplacer les événements de soupapes selon le régime du moment.
Quand le déphaseur ou son électrovanne s'usent, le moteur le signale par
tout un jeu d'indices, du claquement après le démarrage à la consommation
qui grimpe. Les voici rassemblés, pour que vous puissiez comparer le
tableau avec votre voiture.

## Le son : un claquement après un départ à froid

Le symptôme le plus précoce et le plus reconnaissable, c'est un
claquement sec, façon diesel, pendant une à trois secondes après le
démarrage d'un moteur froid. Tant que la pression d'huile n'est pas
établie, un déphaseur usé n'est pas verrouillé et ses palettes tapent dans
leurs chambres. Le bruit vient du haut du moteur, de sous le
cache-culbuteurs, et disparaît dès que l'huile atteint le déphaseur.

À mesure que l'usure avance, le claquement s'allonge, se répète à chaque
démarrage et, dans les cas avancés, s'entend aussi moteur chaud. Pour le
situer parmi les bruits voisins, voyez la page symptôme
[cognement moteur à froid](/fr/symptoms/engine-knock-when-cold/).

## Comment le moteur se comporte

Le calage des soupapes gouverne le remplissage des cylindres : un
déphaseur défaillant abîme donc le caractère du moteur :

- **un ralenti instable** — le régime flotte et la voiture tremble ; les
  causes voisines sont sur
  [vibrations au ralenti](/fr/symptoms/vibration-at-idle/) ;
- **une perte de puissance** — en bas ou en haut, selon l'endroit où le
  déphaseur est resté bloqué ;
- **une réponse molle à l'accélérateur**, des trous à la reprise ;
- **une consommation en hausse** — le mélange brûle aux mauvais moments ;
- dans les cas sévères, le moteur **cale au ralenti** ou démarre à
  contrecœur.

Aucun de ces points ne désigne le VVT à lui seul, mais associé à un
claquement à froid, le tableau devient caractéristique.

## L'électronique : les codes défaut

Le calculateur compare en permanence la position de l'arbre à cames
commandée et celle mesurée par les capteurs. Quand le déphaseur n'arrive
plus à suivre ou se bloque, la famille P0010–P0017 apparaît (corrélation
arbre à cames / vilebrequin, circuit de commande du déphaseur) et le
voyant moteur s'allume. Souvent le moteur bascule en mode dégradé avec le
système VVT désactivé : la puissance baisse et la consommation monte, mais
la voiture roule.

Une nuance importante : les mêmes codes apparaissent avec une chaîne de
distribution détendue et avec une électrovanne grippée — celle qui dose
l'huile envoyée au déphaseur. On ne remplace donc jamais une pièce sur la
foi d'un code : on contrôle d'abord le calage réel à la valise, ainsi que
l'électrovanne.

## Avec quoi on confond un déphaseur VVT

| Signe | Ça colle au VVT ? | Quoi vérifier d'autre |
|---|---|---|
| Claquement 1 à 3 secondes après le démarrage | Oui, le classique | Le tendeur de chaîne de distribution |
| Cliquetis régulier à tous les régimes | Non | Injecteurs, poussoirs hydrauliques |
| Ralenti instable plus voyant moteur | Oui | Bobines, prise d'air |
| Retour de flamme à l'admission | Avec un calage très décalé | Mélange, allumage |

Un cliquetis constant qui ignore la montée en température vient plutôt du
circuit de carburant. Et si le calage est vraiment décalé, le mélange peut
s'enflammer dans la tubulure d'admission — pourquoi, c'est expliqué dans
[les causes d'un retour de flamme à l'admission](/fr/articles/intake-backfire-causes/).
Un claquement venant de la distribution elle-même est traité dans
[contrôler la tension de la chaîne de distribution à l'oreille](/fr/articles/checking-timing-chain-tension-by-ear/)
et dans un article à part sur le bruit d'une chaîne détendue ; le cliquetis
sous charge est encore une autre histoire —
[les signes d'un cliquetis de détonation](/fr/articles/signs-of-engine-detonation/).

## Comment se décide la réparation

Commencez par ce qui ne coûte rien : le niveau d'huile et son état, puis
un passage à la valise. La valise montre de combien le calage réel est en
retard sur la consigne et sépare le déphaseur de l'électrovanne. Une huile
neuve à la bonne spécification enlève souvent une partie des symptômes si
le déphaseur est encore vivant — et ce n'est pas un hasard. Le VVT
fonctionne à la pression d'huile à travers des canaux fins : des
intervalles de vidange étirés et une mauvaise spécification sont parmi les
raisons les plus fréquentes pour lesquelles un déphaseur se grippe.

Un déphaseur usé se remplace, en règle générale avec la chaîne de
distribution, puisque la main-d'œuvre est commune. Deux choses à demander.
Si l'électrovanne et son tamis ont été nettoyés ou remplacés — un
déphaseur neuf alimenté par un tamis bouché se comporte exactement comme
l'ancien. Et si les canaux d'huile de l'arbre à cames ont été contrôlés
pour les dépôts, ce que l'atelier trouve sur un moteur à l'historique
d'entretien négligé.

Repousser l'échéance coûte de plus en plus cher : un déphaseur usé
accélère l'usure de la chaîne, et un calage très décalé devient un risque
pour les soupapes et les pistons.

Si vous n'êtes pas sûr que les bruits de votre moteur viennent du
déphaseur, enregistrez un départ à froid dans l'application Pro-Stuk :
l'algorithme confronte l'enregistrement à vos réponses et renvoie les
causes probables avec leur pourcentage et un niveau d'urgence — un point
de départ commode pour la conversation avec l'atelier.
