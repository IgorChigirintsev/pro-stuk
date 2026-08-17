---
title: "Battito dei variatori di fase a freddo"
metaTitle: "Battito dei variatori di fase a freddo | Pro-Stuk"
description: "Perché i variatori di fase battono nei primi secondi dopo un avviamento a freddo: attuatore consumato, elettrovalvola OCV, olio. Come controllare e cosa segue."
faq:
  - q: "Quanti secondi di battito dopo l'avviamento sono normali?"
    a: "Uno o due secondi di crepitio leggero su un motore con molti chilometri sono comuni, e molti costruttori li considerano accettabili. Deve preoccuparla un battito più lungo di tre-cinque secondi, presente a ogni avviamento, e uno che compare a motore caldo."
  - q: "Un cambio d'olio può togliere il battito dei variatori di fase?"
    a: "Sì, se la causa è olio vecchio, viscosità sbagliata o un filtro a rete dell'elettrovalvola parzialmente otturato. Ma se il perno di bloccaggio dell'attuatore è consumato, l'olio fresco accorcia il battito senza eliminarlo."
  - q: "Cosa succede se guido con un variatore di fase che batte?"
    a: "Un battito breve non è un'emergenza, ma l'usura accelera: l'attuatore si degrada, la catena si allunga, compaiono codici sugli alberi a camme e il consumo sale. Più tardi si ripara, più lunga è la lista dei pezzi."
sources:
  - title: "Schaeffler (INA): sistemi di fasatura variabile"
    url: "https://www.schaeffler.com"
  - title: "SAE International: ricerca sulla distribuzione"
    url: "https://www.sae.org/"
---

Un variatore di fase è un attuatore montato sulla ruota dentata
dell'albero a camme che ruota l'albero rispetto alla catena e cambia così
la fasatura, cioè quando le valvole aprono e chiudono. Toyota chiama il
sistema VVT-i, Honda VTC, BMW VANOS, ma il principio è lo stesso:
l'attuatore è comandato dalla pressione dell'olio. È esattamente per
questo che un variatore consumato è più rumoroso a un avviamento a freddo,
ed è per questo che il suono se ne va dopo qualche secondo.

## Perché batte proprio a freddo

Mentre l'auto è ferma, l'olio scola dall'attuatore e dai suoi condotti
verso la coppa. Nei primi secondi dopo l'avviamento la pressione non c'è e
il rotore non è bloccato: le palette ballano nelle loro camere e battono
contro le pareti a ogni pulsazione delle molle valvole.

Per quel caso un attuatore sano ha un perno di bloccaggio che blocca
meccanicamente il rotore finché la pressione non sale. A consumarsi è
esattamente quello: il perno e la sua sede vengono martellati, il blocco
smette di tenere, e l'attuatore batte finché l'olio non arriva. Più
l'usura è avanzata e più l'impianto ci mette a raggiungere la pressione di
lavoro, più lungo è il battito.

## Come suona e con cosa si confonde

Il classico è un battito secco e duro nei primi uno-tre secondi
dall'accensione, che ricorda un diesel. La sorgente è la parte alta e
anteriore del motore, la zona del coperchio punterie. Dopodiché il motore
gira liscio, come se non fosse successo niente.

I vicini per suono:

- **le punterie idrauliche** ticchettano più piano, più uniformi e più a
  lungo, minuti invece che secondi;
- **la catena di distribuzione** con un tenditore stanco dà un fruscio e
  un crepitio dal carter anteriore, anch'esso breve;
- **gli iniettori** ticchettano sempre, a qualsiasi temperatura.

La mappa generale dei suoni simili è nella pagina sintomo
[battito del motore a freddo](/it/symptoms/engine-knock-when-cold/).

## Le cause: attuatore, valvola, olio

Il battito dei variatori di fase è sempre una storia di pressione
dell'olio nell'attuatore, e quella pressione è dosata da un'elettrovalvola
OCV, la valvola di controllo dell'olio. Quindi i colpevoli sono tre:

1. **L'attuatore stesso**: perno di bloccaggio martellato e palette
   consumate. Si risolve solo con la sostituzione.
2. **L'elettrovalvola OCV e il suo filtro a rete.** Una valvola incollata
   dai depositi o una rete otturata ritardano l'arrivo dell'olio, e
   l'attuatore resta sbloccato più a lungo. Pulire o sostituire la valvola
   pesa nettamente meno dell'attuatore.
3. **L'olio.** Livello basso, viscosità fuori dalla specifica del
   costruttore, intervallo di cambio allungato: tutto questo allunga i
   secondi a secco dopo l'avviamento. La causa più economica e la più
   frequente.

## Valutare lo stadio

| Come si manifesta | Causa probabile | Da dove partire |
|---|---|---|
| Battito di 1–2 secondi, non a ogni avviamento | Usura iniziale del perno di bloccaggio | Olio fresco a specifica |
| Battito a ogni avviamento, 3–5 secondi | Usura dell'attuatore, OCV parzialmente otturata | Diagnosi, pulizia dell'OCV |
| Battito più minimo irregolare più spia motore | L'attuatore non realizza la fasatura richiesta | Officina questa settimana |
| Battito udibile anche a caldo | Usura profonda dell'attuatore | Sostituzione, di solito con la catena |

Il suono è solo una parte del quadro: un attuatore consumato peggiora
gradualmente potenza, consumi e stabilità del minimo, fino ai codici
errore sulla fasatura.

## Come si decide la riparazione

Si procede dall'economico al costoso. Prima un cambio di olio e filtro
rigorosamente a specifica. Poi controllo e pulizia dell'elettrovalvola
OCV. Se il battito resta, una lettura diagnostica mostra di quanto la
fasatura reale è in ritardo rispetto al valore comandato.

La sostituzione dell'attuatore si abbina quasi sempre alla catena di
distribuzione: i pezzi sono vicini e gran parte della manodopera è in
comune. Chieda che il preventivo dica quale dei due viene sostituito e
perché, e se il filtro a rete dell'OCV è stato pulito: un attuatore nuovo
alimentato attraverso una rete otturata batte esattamente come il vecchio.

Trascinarla per anni non è sensato: un attuatore martellato accelera
l'usura della catena, il motore perde potenza e comincia a consumare di
più.

Non è sicura che a battere siano i variatori di fase? Registri un
avviamento a freddo con l'app Pro-Stuk: l'algoritmo confronta il suono con i
profili tipici, tiene conto delle sue risposte sul momento e sulla durata
del battito e mostra le cause probabili con un livello di urgenza.
