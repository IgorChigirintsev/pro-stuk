# Тексты для магазинов

Название, короткое и полное описание на четырнадцати языках. Коды локалей —
как в Google Play; App Store Connect использует свои («Русский», «Deutsch»),
но соответствие однозначное.

Пределы: название 30 знаков, короткое описание 80, полное 4000. У App Store
вместо короткого описания подзаголовок, тоже 30 знаков — он вынесен
отдельной строкой там, где отличается.

Проверка длин: `node store/check-listings.mjs`

> **Что изменилось против прежнего английского текста.** Строка «Each day
> includes a limited number of sound checks» убрана: дневных лимитов больше
> нет. Вместо неё — настоящая модель: три бесплатные проверки на первую
> машину, дальше покупка. Добавлена строка про вход в аккаунт: Google Play
> требует предупреждать, что он нужен.

---

## English — `en-US`

**Название**
```
Pro-Stuk: Car Noise Diagnosis
```

**Подзаголовок (App Store)**
```
Know the noise before the shop
```

**Короткое описание**
```
Diagnose car noise by sound: record the knock, rattle or squeal and learn why
```

**Полное описание**
```
Something is knocking, rattling or squealing in your car, and you have no idea whether it is a five-minute fix or a reason to stop driving. Pro-Stuk listens to the noise and tells you what it most likely is.

Record the sound with your phone, answer a few questions about when it appears, and read a clear report a minute later.

HOW IT WORKS
1. Add your car: make, model, year and mileage. The garage holds several cars at once.
2. Answer a short questionnaire. Where the noise comes from, when it starts, whether it changes with speed, braking or engine load.
3. Record 15 to 30 seconds of the sound with the engine running or while driving.
4. Read the report.

WHAT IS IN THE REPORT
- Likely causes ranked by probability, so you see which version fits the sound best and how confident it is.
- Other noises heard in the same recording, when the car has more than one problem.
- How urgent it is: keep driving, book a garage visit, or stop now.
- What to tell the shop, in plain words, so the conversation starts from facts.
- Questions for the mechanic that separate a real diagnosis from guesswork.
- Red flags: the signs that mean stop immediately.
- A parts diagram with the suspect highlighted, where one exists.

NOISES IT KNOWS
Engine knock and rattle, valve tick, timing chain noise, detonation, piston slap, low oil pressure. Suspension knock over bumps, worn ball joints, tired shock absorbers, anti-roll bar links. Wheel bearing hum, CV joint clicking in turns, brake squeal, grinding and vibration under braking. Gearbox whine, clutch noise, driveshaft rumble. Exhaust roar, heat shield rattle, blown manifold gasket. Interior squeaks and rattles.

HONEST ABOUT WHAT IT IS
Pro-Stuk gives a probability estimate from a recording, not a verdict from a lift. It narrows the search, shows how urgent the noise looks and prepares you for the garage, while the repair decision stays with a mechanic who has seen the car. If the recording holds nothing unusual, the app says so instead of inventing a fault.

WHO IT IS FOR
Drivers who want to understand a car noise before paying for diagnostics. Buyers listening to a used car before the deal. Anyone who has been quoted a repair and wants a second opinion on what the sound actually means.

Sign in with your Google account so your garage, service book and reports come back after a reinstall or a new phone.

Your first car comes with three free sound checks. More can be bought when you need them, and checks never expire.
```

---

## Русский — `ru-RU`

**Название**
```
Pro-Stuk: диагностика по звуку
```

**Подзаголовок (App Store)**
```
Понять стук до автосервиса
```

**Короткое описание**
```
Диагностика по звуку: запишите стук, скрип или гул и узнайте причину
```

**Полное описание**
```
В машине что-то стучит, гремит или свистит, и непонятно: это работа на пять минут или повод не ехать дальше. Pro-Stuk слушает звук и говорит, что это скорее всего.

Запишите шум на телефон, ответьте на несколько вопросов о том, когда он появляется, и через минуту прочитайте разбор.

КАК ЭТО РАБОТАЕТ
1. Добавьте машину: марка, модель, год, пробег. В гараже помещается несколько.
2. Ответьте на короткий опросник. Откуда идёт звук, когда начинается, меняется ли от скорости, торможения или нагрузки на мотор.
3. Запишите 15–30 секунд шума на заведённом моторе или на ходу.
4. Прочитайте отчёт.

ЧТО В ОТЧЁТЕ
— Вероятные причины по убыванию: видно, какая версия лучше ложится на звук и насколько она уверенная.
— Другие звуки, услышанные в той же записи, — когда болячка не одна.
— Насколько срочно: можно ездить, записаться в сервис или остановиться сейчас.
— Что сказать в сервисе — обычными словами, чтобы разговор начался с фактов.
— Вопросы механику, которые отличают настоящую диагностику от гадания.
— Красные флаги: признаки, при которых надо встать немедленно.
— Схема узла с подсвеченной деталью, если для неё есть схема.

КАКИЕ ЗВУКИ РАЗБИРАЕТ
Стук и цокот в моторе, стук клапанов, шум цепи ГРМ, детонация, стук поршней, низкое давление масла. Стук подвески на неровностях, изношенные шаровые, уставшие амортизаторы, стойки стабилизатора. Гул ступичного подшипника, хруст ШРУСа в повороте, писк колодок, скрежет и вибрация при торможении. Вой коробки, шум сцепления, гул карданного вала. Рёв выпуска, дребезг теплозащиты, прогоревшая прокладка коллектора. Скрипы и сверчки в салоне.

ЧЕСТНО О ТОМ, ЧТО ЭТО
Pro-Stuk даёт вероятностную оценку по записи, а не приговор с подъёмника. Он сужает поиск, показывает, насколько звук срочный, и готовит вас к разговору в сервисе, а решение о ремонте остаётся за механиком, который видел машину. Если в записи нет ничего необычного, приложение так и скажет, а не придумает неисправность.

КОМУ ПРИГОДИТСЯ
Водителям, которые хотят понять звук до того, как платить за диагностику. Покупателям, слушающим машину перед сделкой. Всем, кому назвали цену ремонта и кто хочет второе мнение о том, что на самом деле означает этот шум.

Вход через аккаунт Google: гараж, сервисная книжка и отчёты вернутся после переустановки или на новом телефоне.

На первую машину даются три бесплатные проверки звука. Дальше их можно докупить, и они не сгорают.
```

---

## Deutsch — `de-DE`

**Название**
```
Pro-Stuk: Geräusch-Diagnose
```

**Подзаголовок (App Store)**
```
Wissen, was klappert
```

**Короткое описание**
```
Autogeräusche per Ton bestimmen: Klopfen, Klappern oder Quietschen aufnehmen
```

**Полное описание**
```
Im Auto klopft, klappert oder quietscht etwas, und Sie wissen nicht, ob es eine Sache von fünf Minuten ist oder ein Grund, stehen zu bleiben. Pro-Stuk hört sich das Geräusch an und sagt Ihnen, was es am ehesten ist.

Nehmen Sie den Ton mit dem Handy auf, beantworten Sie ein paar Fragen dazu, wann er auftritt, und lesen Sie eine Minute später einen klaren Bericht.

SO FUNKTIONIERT ES
1. Auto anlegen: Marke, Modell, Baujahr, Kilometerstand. In die Garage passen mehrere.
2. Kurzen Fragebogen beantworten. Woher das Geräusch kommt, wann es einsetzt, ob es sich mit Geschwindigkeit, Bremsen oder Motorlast ändert.
3. 15 bis 30 Sekunden aufnehmen — bei laufendem Motor oder während der Fahrt.
4. Bericht lesen.

WAS IM BERICHT STEHT
- Wahrscheinliche Ursachen nach Wahrscheinlichkeit sortiert: Sie sehen, welche Version am besten zum Geräusch passt und wie sicher sie ist.
- Weitere Geräusche aus derselben Aufnahme, wenn das Auto mehr als ein Problem hat.
- Wie dringend es ist: weiterfahren, Werkstatttermin machen oder sofort anhalten.
- Was Sie der Werkstatt sagen — in normalen Worten, damit das Gespräch mit Fakten beginnt.
- Fragen an den Mechaniker, die echte Diagnose von Raten unterscheiden.
- Warnzeichen: die Anzeichen, bei denen Sie sofort stehen bleiben müssen.
- Eine Bauteil-Skizze mit markiertem Verdächtigen, sofern vorhanden.

WELCHE GERÄUSCHE ES KENNT
Motorklopfen und -rasseln, Ventilticken, Steuerkettengeräusch, Klingeln, Kolbenkipper, niedriger Öldruck. Poltern des Fahrwerks auf Unebenheiten, ausgeschlagene Traggelenke, müde Stoßdämpfer, Koppelstangen. Brummen des Radlagers, Knacken des Gleichlaufgelenks in Kurven, Bremsenquietschen, Schleifen und Rubbeln beim Bremsen. Getriebejaulen, Kupplungsgeräusch, Brummen der Kardanwelle. Auspuffdröhnen, klappernde Hitzeschutzbleche, durchgebrannte Krümmerdichtung. Knarzen und Klappern im Innenraum.

EHRLICH GESAGT
Pro-Stuk gibt eine Wahrscheinlichkeitseinschätzung aus einer Aufnahme, kein Urteil von der Hebebühne. Es grenzt die Suche ein, zeigt, wie dringend das Geräusch wirkt, und bereitet Sie auf die Werkstatt vor — die Reparaturentscheidung bleibt beim Mechaniker, der das Auto gesehen hat. Ist in der Aufnahme nichts Auffälliges, sagt die App das, statt einen Defekt zu erfinden.

FÜR WEN
Für Fahrer, die ein Geräusch verstehen wollen, bevor sie für eine Diagnose zahlen. Für Käufer, die einen Gebrauchten vor dem Kauf abhören. Für alle, denen ein Kostenvoranschlag vorliegt und die eine zweite Meinung dazu wollen, was der Ton wirklich bedeutet.

Anmeldung mit dem Google-Konto: Garage, Serviceheft und Berichte sind nach einer Neuinstallation oder auf einem neuen Handy wieder da.

Für das erste Auto sind drei Ton-Checks gratis. Weitere lassen sich bei Bedarf kaufen, und sie verfallen nicht.
```

---

## Español — `es-ES`

**Название**
```
Pro-Stuk: ruidos del coche
```

**Подзаголовок (App Store)**
```
Qué suena, antes del taller
```

**Короткое описание**
```
Diagnostica ruidos del coche por sonido: graba el golpeteo, traqueteo o chirrido
```

**Полное описание**
```
Algo golpetea, traquetea o chirría en el coche y no sabes si es cosa de cinco minutos o motivo para no seguir conduciendo. Pro-Stuk escucha el ruido y te dice qué es lo más probable.

Graba el sonido con el móvil, responde unas preguntas sobre cuándo aparece y lee un informe claro un minuto después.

CÓMO FUNCIONA
1. Añade tu coche: marca, modelo, año y kilometraje. En el garaje caben varios.
2. Responde un cuestionario corto. De dónde viene el ruido, cuándo empieza, si cambia con la velocidad, al frenar o con la carga del motor.
3. Graba de 15 a 30 segundos con el motor en marcha o en movimiento.
4. Lee el informe.

QUÉ CONTIENE EL INFORME
- Causas probables ordenadas por probabilidad: ves qué versión encaja mejor con el sonido y con cuánta seguridad.
- Otros ruidos oídos en la misma grabación, cuando el coche tiene más de un problema.
- Qué urgencia tiene: seguir conduciendo, pedir cita en el taller o parar ahora.
- Qué decir en el taller, en palabras normales, para que la conversación empiece con hechos.
- Preguntas para el mecánico que separan un diagnóstico real de una adivinanza.
- Señales de alarma: los síntomas que obligan a parar de inmediato.
- Un esquema de la pieza con el sospechoso resaltado, cuando existe.

QUÉ RUIDOS RECONOCE
Picado y golpeteo del motor, taqués, ruido de la cadena de distribución, detonación, golpeteo de pistón, presión de aceite baja. Golpes de la suspensión en baches, rótulas gastadas, amortiguadores cansados, bieletas de la barra estabilizadora. Zumbido del rodamiento de rueda, chasquido de la junta homocinética al girar, chirrido de frenos, roce y vibración al frenar. Zumbido de la caja de cambios, ruido del embrague, retumbo del árbol de transmisión. Rugido del escape, vibración del protector térmico, junta del colector quemada. Grillos y crujidos del interior.

HONESTO SOBRE LO QUE ES
Pro-Stuk da una estimación de probabilidad a partir de una grabación, no un veredicto desde el elevador. Reduce la búsqueda, muestra lo urgente que parece el ruido y te prepara para el taller; la decisión de reparar sigue siendo del mecánico que ha visto el coche. Si la grabación no tiene nada raro, la app lo dice en vez de inventar una avería.

PARA QUIÉN ES
Para conductores que quieren entender un ruido antes de pagar un diagnóstico. Para compradores que escuchan un coche de segunda mano antes del trato. Para quien ya tiene un presupuesto y quiere una segunda opinión sobre qué significa realmente ese sonido.

Inicia sesión con tu cuenta de Google: el garaje, el libro de mantenimiento y los informes vuelven tras reinstalar o al cambiar de móvil.

El primer coche incluye tres comprobaciones de sonido gratuitas. Después se pueden comprar más, y no caducan.
```

---

## Français — `fr-FR`

**Название**
```
Pro-Stuk : bruits de voiture
```

**Подзаголовок (App Store)**
```
Le bruit avant le garage
```

**Короткое описание**
```
Bruits de voiture diagnostiqués par le son : enregistrez, sachez pourquoi
```

**Полное описание**
```
Quelque chose cogne, cliquette ou siffle dans la voiture, et vous ne savez pas si c'est l'affaire de cinq minutes ou une raison de ne pas repartir. Pro-Stuk écoute le bruit et vous dit ce que c'est le plus probablement.

Enregistrez le son avec votre téléphone, répondez à quelques questions sur le moment où il apparaît, et lisez un rapport clair une minute plus tard.

COMMENT ÇA MARCHE
1. Ajoutez votre voiture : marque, modèle, année, kilométrage. Le garage en contient plusieurs.
2. Répondez à un court questionnaire. D'où vient le bruit, quand il commence, s'il change avec la vitesse, au freinage ou selon la charge moteur.
3. Enregistrez 15 à 30 secondes, moteur tournant ou en roulant.
4. Lisez le rapport.

CE QUE CONTIENT LE RAPPORT
- Les causes probables classées par probabilité : vous voyez quelle hypothèse colle le mieux au son et à quel point elle est sûre.
- Les autres bruits entendus dans le même enregistrement, quand la voiture a plus d'un problème.
- Le degré d'urgence : continuer à rouler, prendre rendez-vous, ou s'arrêter tout de suite.
- Quoi dire au garage, en mots simples, pour que la discussion parte de faits.
- Des questions au mécanicien qui distinguent un vrai diagnostic d'une supposition.
- Les signaux d'alerte : les signes qui imposent de s'arrêter immédiatement.
- Un schéma de l'organe avec la pièce suspecte mise en évidence, lorsqu'il existe.

LES BRUITS QU'IL CONNAÎT
Cognement et cliquetis moteur, bruit de soupapes, chaîne de distribution, cliquetis d'allumage, claquement de piston, pression d'huile basse. Bruits de suspension sur les bosses, rotules usées, amortisseurs fatigués, biellettes de barre stabilisatrice. Ronflement de roulement de roue, claquement de cardan en virage, crissement de freins, grincement et vibration au freinage. Sifflement de boîte, bruit d'embrayage, grondement d'arbre de transmission. Ronflement d'échappement, vibration de tôle pare-chaleur, joint de collecteur percé. Grincements et bruits de l'habitacle.

HONNÊTE SUR CE QUE C'EST
Pro-Stuk donne une estimation de probabilité à partir d'un enregistrement, pas un verdict depuis le pont. Il réduit le champ de recherche, montre à quel point le bruit paraît urgent et vous prépare au garage ; la décision de réparation reste au mécanicien qui a vu la voiture. Si l'enregistrement ne contient rien d'anormal, l'application le dit au lieu d'inventer une panne.

POUR QUI
Pour les conducteurs qui veulent comprendre un bruit avant de payer un diagnostic. Pour les acheteurs qui écoutent une occasion avant de conclure. Pour tous ceux à qui l'on a annoncé un prix de réparation et qui veulent un deuxième avis sur ce que ce son signifie vraiment.

Connexion avec votre compte Google : le garage, le carnet d'entretien et les rapports reviennent après une réinstallation ou sur un nouveau téléphone.

La première voiture comprend trois analyses sonores gratuites. D'autres s'achètent au besoin, et elles n'expirent pas.
```

---

## Italiano — `it-IT`

**Название**
```
Pro-Stuk: rumori dell'auto
```

**Подзаголовок (App Store)**
```
Il rumore prima dell'officina
```

**Короткое описание**
```
Diagnosi dei rumori auto dal suono: registra il battito, tintinnio o fischio
```

**Полное описание**
```
Qualcosa batte, tintinna o fischia nell'auto e non sai se è una cosa da cinque minuti o un motivo per non ripartire. Pro-Stuk ascolta il rumore e ti dice che cos'è più probabilmente.

Registra il suono con il telefono, rispondi a poche domande su quando compare e dopo un minuto leggi un rapporto chiaro.

COME FUNZIONA
1. Aggiungi l'auto: marca, modello, anno, chilometraggio. Nel garage ne stanno più di una.
2. Rispondi a un breve questionario. Da dove viene il rumore, quando inizia, se cambia con la velocità, in frenata o con il carico del motore.
3. Registra 15-30 secondi a motore acceso o in marcia.
4. Leggi il rapporto.

COSA C'È NEL RAPPORTO
- Cause probabili in ordine di probabilità: vedi quale ipotesi si adatta meglio al suono e quanto è sicura.
- Altri rumori sentiti nella stessa registrazione, quando i problemi sono più di uno.
- Quanto è urgente: continuare a guidare, prenotare l'officina o fermarsi subito.
- Cosa dire in officina, con parole normali, così il discorso parte dai fatti.
- Domande per il meccanico che distinguono una diagnosi vera da un'ipotesi.
- Campanelli d'allarme: i segnali che impongono di fermarsi immediatamente.
- Uno schema del gruppo con il componente sospetto evidenziato, dove esiste.

QUALI RUMORI RICONOSCE
Battito e ticchettio del motore, punterie, catena di distribuzione, detonazione, battito dei pistoni, pressione olio bassa. Colpi delle sospensioni sulle buche, sfere consumate, ammortizzatori stanchi, biellette della barra stabilizzatrice. Ronzio del cuscinetto ruota, scatto del giunto omocinetico in curva, fischio dei freni, raschiamento e vibrazione in frenata. Fischio del cambio, rumore della frizione, rombo dell'albero di trasmissione. Rombo dello scarico, vibrazione dello scudo termico, guarnizione del collettore bruciata. Scricchiolii e rumorini dell'abitacolo.

ONESTO SU COSA SIA
Pro-Stuk dà una stima di probabilità da una registrazione, non un verdetto dal ponte. Restringe la ricerca, mostra quanto il rumore sembri urgente e ti prepara all'officina; la decisione sulla riparazione resta al meccanico che ha visto l'auto. Se nella registrazione non c'è nulla di strano, l'app lo dice invece di inventare un guasto.

A CHI SERVE
A chi vuole capire un rumore prima di pagare una diagnosi. A chi ascolta un'auto usata prima dell'affare. A chi ha ricevuto un preventivo e vuole un secondo parere su cosa significhi davvero quel suono.

Accesso con l'account Google: garage, libretto di manutenzione e rapporti tornano dopo una reinstallazione o su un telefono nuovo.

La prima auto include tre controlli del suono gratuiti. Altri si possono acquistare all'occorrenza e non scadono.
```

---

## Português (Brasil) — `pt-BR`

**Название**
```
Pro-Stuk: ruídos do carro
```

**Подзаголовок (App Store)**
```
Saiba o que é o barulho
```

**Короткое описание**
```
Diagnóstico de ruídos do carro pelo som: grave a batida, chiado ou rangido
```

**Полное описание**
```
Alguma coisa bate, chacoalha ou range no carro, e você não sabe se é serviço de cinco minutos ou motivo para não seguir viagem. O Pro-Stuk escuta o ruído e diz o que ele mais provavelmente é.

Grave o som com o celular, responda algumas perguntas sobre quando ele aparece e leia um laudo claro um minuto depois.

COMO FUNCIONA
1. Cadastre o carro: marca, modelo, ano e quilometragem. A garagem guarda vários.
2. Responda a um questionário curto. De onde vem o ruído, quando começa, se muda com a velocidade, na frenagem ou com a carga do motor.
3. Grave de 15 a 30 segundos com o motor ligado ou em movimento.
4. Leia o laudo.

O QUE VEM NO LAUDO
- Causas prováveis em ordem de probabilidade: dá para ver qual hipótese combina melhor com o som e o quanto ela é segura.
- Outros ruídos ouvidos na mesma gravação, quando o carro tem mais de um problema.
- O quanto é urgente: pode rodar, marque a oficina ou pare agora.
- O que falar na oficina, em palavras simples, para a conversa começar pelos fatos.
- Perguntas para o mecânico que separam diagnóstico de chute.
- Sinais de alerta: os sintomas que exigem parar na hora.
- Um esquema da peça com o suspeito destacado, quando existe.

QUE RUÍDOS ELE CONHECE
Batida e tilintar do motor, ruído de válvulas, corrente de comando, detonação, batida de pistão, pressão de óleo baixa. Batidas da suspensão em buracos, pivôs gastos, amortecedores cansados, bieletas da barra estabilizadora. Zumbido do rolamento de roda, estalo da junta homocinética em curva, chiado dos freios, raspagem e trepidação ao frear. Zunido do câmbio, ruído da embreagem, ronco do cardã. Ronco do escapamento, chacoalho da proteção térmica, junta do coletor queimada. Rangidos e grilos do interior.

HONESTO SOBRE O QUE É
O Pro-Stuk dá uma estimativa de probabilidade a partir de uma gravação, não um veredito do elevador. Ele estreita a busca, mostra o quanto o ruído parece urgente e prepara você para a oficina; a decisão do reparo continua sendo do mecânico que viu o carro. Se a gravação não tiver nada estranho, o app diz isso em vez de inventar um defeito.

PARA QUEM É
Para quem quer entender um ruído antes de pagar por um diagnóstico. Para quem escuta um usado antes de fechar negócio. Para quem já recebeu um orçamento e quer uma segunda opinião sobre o que aquele som realmente significa.

Entre com a conta do Google: garagem, livro de revisões e laudos voltam depois de reinstalar ou em um celular novo.

O primeiro carro vem com três análises de som gratuitas. Outras podem ser compradas quando precisar, e elas não expiram.
```

---

## Polski — `pl-PL`

**Название**
```
Pro-Stuk: hałasy w aucie
```

**Подзаголовок (App Store)**
```
Poznaj hałas przed warsztatem
```

**Короткое описание**
```
Diagnoza hałasu auta po dźwięku: nagraj stukanie, grzechotanie lub pisk
```

**Полное описание**
```
Coś stuka, grzechocze albo piszczy w aucie, a Ty nie wiesz, czy to robota na pięć minut, czy powód, żeby nie jechać dalej. Pro-Stuk słucha dźwięku i mówi, czym najprawdopodobniej jest.

Nagraj dźwięk telefonem, odpowiedz na kilka pytań o to, kiedy się pojawia, i po minucie przeczytaj czytelny raport.

JAK TO DZIAŁA
1. Dodaj auto: marka, model, rocznik, przebieg. W garażu mieści się kilka.
2. Odpowiedz na krótką ankietę. Skąd dochodzi hałas, kiedy się zaczyna, czy zmienia się z prędkością, przy hamowaniu albo pod obciążeniem silnika.
3. Nagraj 15–30 sekund przy pracującym silniku albo w czasie jazdy.
4. Przeczytaj raport.

CO JEST W RAPORCIE
- Prawdopodobne przyczyny uszeregowane według prawdopodobieństwa: widać, która wersja najlepiej pasuje do dźwięku i jak jest pewna.
- Inne dźwięki usłyszane w tym samym nagraniu, gdy usterka nie jest jedna.
- Jak pilne: można jeździć, umów warsztat albo zatrzymaj się teraz.
- Co powiedzieć w warsztacie, zwykłymi słowami, żeby rozmowa zaczęła się od faktów.
- Pytania do mechanika, które odróżniają prawdziwą diagnozę od zgadywania.
- Czerwone flagi: objawy, przy których trzeba stanąć natychmiast.
- Schemat podzespołu z zaznaczonym podejrzanym elementem, jeśli istnieje.

JAKIE DŹWIĘKI ZNA
Stuk i klekot silnika, stukanie zaworów, hałas łańcucha rozrządu, spalanie stukowe, stuk tłoków, niskie ciśnienie oleju. Stuki zawieszenia na nierównościach, zużyte sworznie wahaczy, zmęczone amortyzatory, łączniki stabilizatora. Buczenie łożyska koła, kłapanie półosi na zakręcie, pisk klocków, zgrzyt i drgania przy hamowaniu. Wycie skrzyni, hałas sprzęgła, dudnienie wału napędowego. Ryk wydechu, grzechotanie osłony termicznej, przepalona uszczelka kolektora. Skrzypienie i świerszcze we wnętrzu.

UCZCIWIE O TYM, CZYM TO JEST
Pro-Stuk daje ocenę prawdopodobieństwa z nagrania, a nie wyrok z podnośnika. Zawęża poszukiwania, pokazuje, jak pilny wydaje się dźwięk, i przygotowuje Cię do rozmowy w warsztacie; decyzja o naprawie zostaje przy mechaniku, który widział auto. Jeśli w nagraniu nie ma nic nietypowego, aplikacja tak powie, zamiast wymyślać usterkę.

DLA KOGO
Dla kierowców, którzy chcą zrozumieć hałas, zanim zapłacą za diagnostykę. Dla kupujących, którzy słuchają używanego auta przed transakcją. Dla wszystkich, którym podano cenę naprawy i którzy chcą drugiej opinii o tym, co ten dźwięk naprawdę znaczy.

Logowanie kontem Google: garaż, książka serwisowa i raporty wracają po ponownej instalacji albo na nowym telefonie.

Pierwsze auto dostaje trzy darmowe analizy dźwięku. Kolejne można dokupić w razie potrzeby i nie tracą ważności.
```

---

## Türkçe — `tr-TR`

**Название**
```
Pro-Stuk: araç sesi teşhisi
```

**Подзаголовок (App Store)**
```
Servise gitmeden sesi anlayın
```

**Короткое описание**
```
Araç seslerini sesten teşhis edin: tıkırtı, takırtı veya gıcırtıyı kaydedin
```

**Полное описание**
```
Arabada bir şey tıkırdıyor, takırdıyor ya da gıcırdıyor ve bunun beş dakikalık bir iş mi yoksa yola devam etmemek için bir sebep mi olduğunu bilmiyorsunuz. Pro-Stuk sesi dinler ve bunun büyük olasılıkla ne olduğunu söyler.

Sesi telefonunuzla kaydedin, ne zaman ortaya çıktığına dair birkaç soruyu yanıtlayın ve bir dakika sonra anlaşılır bir rapor okuyun.

NASIL ÇALIŞIR
1. Aracınızı ekleyin: marka, model, yıl, kilometre. Garaja birden fazla araç sığar.
2. Kısa anketi yanıtlayın. Ses nereden geliyor, ne zaman başlıyor, hızla, frenle veya motor yüküyle değişiyor mu.
3. Motor çalışırken ya da giderken 15-30 saniye kaydedin.
4. Raporu okuyun.

RAPORDA NE VAR
- Olası nedenler olasılığa göre sıralı: hangi ihtimalin sese en iyi oturduğunu ve ne kadar emin olduğunu görürsünüz.
- Aynı kayıtta duyulan diğer sesler — arıza bir taneden fazlaysa.
- Ne kadar acil: kullanmaya devam edin, servise randevu alın ya da hemen durun.
- Serviste ne söyleyeceğiniz, sade sözlerle, ki konuşma gerçeklerle başlasın.
- Ustaya sorulacak, gerçek teşhisi tahminden ayıran sorular.
- Kırmızı bayraklar: derhal durmayı gerektiren belirtiler.
- Varsa, şüpheli parçanın işaretlendiği bir parça şeması.

HANGİ SESLERİ TANIR
Motor vuruntusu ve tıkırtısı, supap tıkırtısı, triger zinciri sesi, vuruntulu yanma, piston vuruntusu, düşük yağ basıncı. Tümseklerde süspansiyon takırtısı, aşınmış rotiller, yorulmuş amortisörler, viraj demiri z-rotları. Teker rulmanı uğultusu, virajda aks patlaması sesi, fren gıcırtısı, frende sürtme ve titreşim. Şanzıman uğultusu, debriyaj sesi, şaft gümbürtüsü. Egzoz gürültüsü, ısı kalkanı takırtısı, yanmış manifold contası. İç mekân gıcırtıları ve takırtıları.

NE OLDUĞU KONUSUNDA DÜRÜST
Pro-Stuk bir kayıttan olasılık tahmini verir, liftteki bir hüküm değil. Aramayı daraltır, sesin ne kadar acil göründüğünü gösterir ve sizi servise hazırlar; onarım kararı arabayı görmüş ustaya kalır. Kayıtta olağan dışı bir şey yoksa uygulama arıza uydurmak yerine bunu söyler.

KİMLER İÇİN
Teşhis için para ödemeden önce sesi anlamak isteyen sürücüler için. Alışverişten önce ikinci el aracı dinleyen alıcılar için. Kendisine onarım fiyatı verilmiş ve bu sesin gerçekte ne anlama geldiğine dair ikinci görüş isteyen herkes için.

Google hesabıyla giriş: garaj, bakım defteri ve raporlar yeniden kurulumdan sonra ya da yeni telefonda geri gelir.

İlk araca üç ücretsiz ses kontrolü verilir. Gerektiğinde daha fazlası satın alınabilir ve süreleri dolmaz.
```

---

## Nederlands — `nl-NL`

**Название**
```
Pro-Stuk: autogeluiden
```

**Подзаголовок (App Store)**
```
Weet wat er tikt of piept
```

**Короткое описание**
```
Autogeluiden op gehoor bepalen: neem het getik, geratel of gepiep op
```

**Полное описание**
```
Er tikt, ratelt of piept iets in de auto en je weet niet of het een klusje van vijf minuten is of een reden om niet verder te rijden. Pro-Stuk luistert naar het geluid en vertelt je wat het waarschijnlijk is.

Neem het geluid op met je telefoon, beantwoord een paar vragen over wanneer het optreedt en lees een minuut later een helder rapport.

ZO WERKT HET
1. Voeg je auto toe: merk, model, bouwjaar en kilometerstand. In de garage passen er meerdere.
2. Beantwoord een korte vragenlijst. Waar het geluid vandaan komt, wanneer het begint, of het verandert met snelheid, bij remmen of met motorbelasting.
3. Neem 15 tot 30 seconden op met draaiende motor of tijdens het rijden.
4. Lees het rapport.

WAT ER IN HET RAPPORT STAAT
- Waarschijnlijke oorzaken op volgorde van waarschijnlijkheid: je ziet welke versie het best bij het geluid past en hoe zeker die is.
- Andere geluiden uit dezelfde opname, als er meer dan één probleem is.
- Hoe dringend het is: doorrijden, garage inplannen of nu stoppen.
- Wat je in de garage moet zeggen, in gewone woorden, zodat het gesprek met feiten begint.
- Vragen voor de monteur die een echte diagnose van gokwerk scheiden.
- Alarmsignalen: de tekenen waarbij je onmiddellijk moet stoppen.
- Een onderdeelschema met het verdachte deel gemarkeerd, waar dat bestaat.

WELKE GELUIDEN HET KENT
Motorgeklop en geratel, kleppengetik, distributiekettinggeluid, pingelen, zuigerslag, lage oliedruk. Geklop van de ophanging over drempels, versleten fuseekogels, vermoeide schokdempers, stabilisatorstangen. Gebrom van het wiellager, klikkend homokineet in de bocht, piepende remmen, schuren en trillen bij het remmen. Gejank van de versnellingsbak, koppelingsgeluid, gedreun van de aandrijfas. Uitlaatgebrul, rammelend hitteschild, doorgebrande spruitstukpakking. Piepjes en rammels in het interieur.

EERLIJK OVER WAT HET IS
Pro-Stuk geeft een kansinschatting op basis van een opname, geen oordeel vanaf de brug. Het versmalt de zoektocht, laat zien hoe dringend het geluid lijkt en bereidt je voor op de garage; de reparatiebeslissing blijft bij de monteur die de auto heeft gezien. Zit er niets bijzonders in de opname, dan zegt de app dat, in plaats van een defect te verzinnen.

VOOR WIE
Voor rijders die een geluid willen begrijpen voordat ze voor diagnose betalen. Voor kopers die een occasion beluisteren voor de koop. Voor iedereen die een reparatieprijs heeft gekregen en een tweede mening wil over wat dat geluid werkelijk betekent.

Inloggen met je Google-account: garage, onderhoudsboekje en rapporten komen terug na een herinstallatie of op een nieuwe telefoon.

Bij de eerste auto horen drie gratis geluidschecks. Meer zijn bij te kopen wanneer je ze nodig hebt, en ze verlopen niet.
```

---

## 中文（简体）— `zh-CN`

**Название**
```
Pro-Stuk：汽车异响诊断
```

**Подзаголовок (App Store)**
```
进厂之前先弄清异响
```

**Короткое описание**
```
按声音诊断汽车异响：录下敲击、咔哒或尖叫，弄清原因
```

**Полное описание**
```
车里有东西在敲、在响、在尖叫，你却不知道这是五分钟就能修好的小事，还是不该再开下去的理由。Pro-Stuk 听这段声音，告诉你它最可能是什么。

用手机录下声音，回答几个关于它何时出现的问题，一分钟后读一份清楚的报告。

使用方法
1. 添加车辆：品牌、车型、年份、里程。车库里可以放多台车。
2. 回答一份简短问卷。声音从哪里来、什么时候开始、是否随车速、刹车或发动机负荷变化。
3. 在发动机运转或行驶中录制 15 到 30 秒。
4. 阅读报告。

报告里有什么
- 按可能性排序的原因：看得出哪个判断最贴合这段声音，以及把握有多大。
- 同一段录音中听到的其他声音——车上的毛病不止一处时。
- 紧急程度：可以继续开、该预约修理厂，还是现在就停车。
- 到店该怎么说，用平常话讲清楚，让对话从事实开始。
- 问技师的问题，能把真正的诊断和猜测区分开。
- 危险信号：出现这些就必须立刻停车。
- 部件示意图，可疑零件被标出来（有图的部件）。

它认识哪些声音
发动机敲缸与异响、气门响、正时链条噪音、爆震、活塞敲击、机油压力低。过坎时悬挂异响、球头磨损、减振器疲软、平衡杆连杆。轮毂轴承嗡鸣、转弯时等速万向节咔哒、刹车尖叫、制动时摩擦与抖动。变速箱啸叫、离合器异响、传动轴轰鸣。排气轰鸣、隔热板抖动、排气歧管垫烧穿。车内异响与吱嘎声。

关于它是什么，说实话
Pro-Stuk 依据一段录音给出概率判断，而不是举升机上的定论。它缩小排查范围，显示这个声音看起来有多紧急，让你有备而去；是否维修，仍由亲眼看过车的技师决定。如果录音里没有异常，应用会直说，而不是编一个故障出来。

适合谁
适合想在花钱做检测之前先搞清楚异响的车主。适合成交前听一听二手车的买家。适合已经拿到维修报价、想对这个声音究竟意味着什么再听一个意见的人。

用 Google 账号登录：重装或换新手机后，车库、保养记录和报告都会回来。

第一台车附带三次免费声音检测。之后可以按需购买，且不会过期。
```

---

## 日本語 — `ja-JP`

**Название**
```
Pro-Stuk：車の異音診断
```

**Подзаголовок (App Store)**
```
入庫前に異音の正体を知る
```

**Короткое описание**
```
音で車の異音を診断。カタカタ、コトコト、キーッを録音して原因を知る
```

**Полное описание**
```
車で何かがコトコト鳴る、カタカタする、キーッと鳴く。五分で直る話なのか、それ以上走らないほうがいい話なのか分からない。Pro-Stuk はその音を聴いて、最も可能性の高い正体を伝えます。

スマートフォンで音を録音し、いつ出るかについていくつかの質問に答えると、一分後に分かりやすいレポートが読めます。

使いかた
1. 車を登録：メーカー、車種、年式、走行距離。ガレージには複数台入ります。
2. 短い質問に答える。音の出どころ、鳴り始めるタイミング、速度・ブレーキ・エンジン負荷で変わるかどうか。
3. エンジンをかけた状態か走行中に 15〜30 秒録音する。
4. レポートを読む。

レポートの中身
- 可能性の高い順に並んだ原因。どの見立てが音に最も合っているか、どれくらい確からしいかが分かります。
- 同じ録音から聞き取れた別の音。不具合がひとつとは限らないときに。
- 緊急度：このまま乗ってよい／入庫を予約する／今すぐ止める。
- 整備工場での伝えかたを普通の言葉で。会話が事実から始まります。
- 整備士への質問。本当の診断と当て推量を切り分けます。
- レッドフラッグ：すぐ止まるべき兆候。
- 部品図があるものは、疑わしい部品を色分けして表示します。

分かる音
エンジンのノッキングと打音、タペット音、タイミングチェーンの音、異常燃焼、ピストンスラップ、油圧低下。段差でのサスペンションの打音、ボールジョイントの摩耗、へたったダンパー、スタビリンク。ハブベアリングのうなり、旋回時のドライブシャフトのカタカタ、ブレーキの鳴き、制動時の擦れとジャダー。ミッションのうなり、クラッチの異音、プロペラシャフトの唸り。排気音の増大、遮熱板のビビリ、マニホールドガスケット抜け。内装のきしみ音。

正直に言うと
Pro-Stuk は録音からの確率的な見立てであって、リフトの上での断定ではありません。探す範囲を狭め、その音がどれだけ急ぎに見えるかを示し、入庫の準備を整えます。修理の判断は、車を実際に見た整備士のものです。録音に変わったところがなければ、故障をでっち上げず、そう伝えます。

こんな人に
検査代を払う前に異音の正体を知りたいドライバー。契約前に中古車の音を聴く買い手。修理費を提示され、その音が本当は何を意味するのか、もうひとつ意見が欲しい人。

Google アカウントでログイン。再インストール後や新しい端末でも、ガレージ・整備記録・レポートが戻ります。

最初の一台には無料の音チェックが三回付きます。足りなくなれば追加購入でき、有効期限はありません。
```

---

## 한국어 — `ko-KR`

**Название**
```
Pro-Stuk: 자동차 소음 진단
```

**Подзаголовок (App Store)**
```
정비소 가기 전에 소음 파악
```

**Короткое описание**
```
소리로 자동차 소음 진단: 딱딱거림, 덜컹거림, 끼익 소리를 녹음하고 원인 확인
```

**Полное описание**
```
차에서 무언가 딱딱거리거나 덜컹거리거나 끼익 소리가 나는데, 5분이면 끝날 일인지 더 몰지 말아야 할 일인지 알 수 없습니다. Pro-Stuk은 그 소리를 듣고 가장 가능성이 큰 원인을 알려 줍니다.

휴대폰으로 소리를 녹음하고, 언제 나는지에 대한 몇 가지 질문에 답하면 1분 뒤에 명확한 리포트를 읽을 수 있습니다.

사용 방법
1. 차량 등록: 제조사, 모델, 연식, 주행거리. 차고에는 여러 대가 들어갑니다.
2. 짧은 설문에 답하기. 소리가 어디서 나는지, 언제 시작되는지, 속도·제동·엔진 부하에 따라 달라지는지.
3. 시동을 건 상태나 주행 중에 15~30초를 녹음합니다.
4. 리포트를 읽습니다.

리포트에 담기는 것
- 가능성 순으로 정렬된 원인. 어떤 해석이 소리에 가장 잘 맞고 얼마나 확실한지 보입니다.
- 같은 녹음에서 들린 다른 소리. 문제가 하나가 아닐 때.
- 긴급도: 계속 운행 가능 / 정비소 예약 / 지금 정차.
- 정비소에서 할 말을 평범한 표현으로. 대화가 사실에서 시작됩니다.
- 정비사에게 할 질문. 진짜 진단과 추측을 갈라놓습니다.
- 위험 신호: 즉시 멈춰야 하는 증상.
- 도면이 있는 부품은 의심 부위를 표시해 보여 줍니다.

인식하는 소리
엔진 노킹과 타격음, 밸브 태핏 소리, 타이밍 체인 소음, 이상 연소, 피스톤 슬랩, 유압 저하. 요철에서의 서스펜션 소음, 마모된 볼조인트, 지친 쇼크업소버, 스태빌라이저 링크. 휠베어링 웅웅거림, 선회 시 등속조인트 딱딱거림, 브레이크 끼익 소리, 제동 시 긁힘과 진동. 변속기 소음, 클러치 소음, 드라이브샤프트 울림. 배기음 증가, 열차폐판 떨림, 매니폴드 개스킷 손상. 실내 잡소리와 삐걱거림.

무엇인지에 대해 솔직하게
Pro-Stuk은 녹음을 근거로 한 확률적 판단이지, 리프트 위의 결론이 아닙니다. 찾을 범위를 좁히고, 이 소리가 얼마나 급해 보이는지 알려 주며, 정비소 방문을 준비시켜 줍니다. 수리 결정은 차를 직접 본 정비사의 몫입니다. 녹음에 특별한 것이 없으면 앱은 고장을 지어내지 않고 그렇다고 말합니다.

이런 분께
진단 비용을 내기 전에 소음의 정체를 알고 싶은 운전자. 계약 전에 중고차 소리를 들어 보는 구매자. 수리 견적을 받고 그 소리가 실제로 무엇을 뜻하는지 다른 의견을 원하는 분.

Google 계정으로 로그인하면 재설치 후나 새 기기에서도 차고, 정비 기록, 리포트가 그대로 돌아옵니다.

첫 차량에는 무료 소리 검사 3회가 포함됩니다. 필요하면 추가로 구매할 수 있고 유효기간은 없습니다.
```

---

## العربية — `ar`

**Название**
```
Pro-Stuk: تشخيص أصوات السيارة
```

**Подзаголовок (App Store)**
```
اعرف الصوت قبل الورشة
```

**Короткое описание**
```
تشخيص أصوات السيارة بالصوت: سجّل الطقطقة أو الخشخشة أو الصرير واعرف السبب
```

**Полное описание**
```
هناك شيء يطقطق أو يخشخش أو يصرّ في سيارتك، ولا تعرف إن كان إصلاحًا لخمس دقائق أم سببًا لعدم متابعة القيادة. يستمع Pro-Stuk إلى الصوت ويخبرك بما هو على الأرجح.

سجّل الصوت بهاتفك، وأجب عن بضعة أسئلة حول وقت ظهوره، ثم اقرأ تقريرًا واضحًا بعد دقيقة.

كيف يعمل
١. أضف سيارتك: الصانع والطراز وسنة الصنع وعدد الكيلومترات. يتّسع المرآب لأكثر من سيارة.
٢. أجب عن استبيان قصير: من أين يأتي الصوت، ومتى يبدأ، وهل يتغيّر مع السرعة أو الكبح أو حِمل المحرك.
٣. سجّل من ١٥ إلى ٣٠ ثانية والمحرك يعمل أو أثناء القيادة.
٤. اقرأ التقرير.

ماذا في التقرير
- أسباب محتملة مرتّبة حسب الاحتمال: ترى أيّ تفسير ينطبق على الصوت أكثر، وبأي درجة ثقة.
- أصوات أخرى سُمعت في التسجيل نفسه، حين تكون المشكلة أكثر من واحدة.
- درجة الاستعجال: تابع القيادة، أو احجز موعدًا في الورشة، أو توقّف الآن.
- ما تقوله في الورشة بكلمات عادية، ليبدأ الحديث من الوقائع.
- أسئلة للفني تفصل التشخيص الحقيقي عن التخمين.
- إشارات خطر: العلامات التي توجب التوقف فورًا.
- مخطط للجزء مع تمييز القطعة المشتبه بها، حيثما وُجد.

الأصوات التي يعرفها
طرق المحرك وخشخشته، صوت الصمامات، ضجيج جنزير التوقيت، الفرقعة، طرق المكابس، انخفاض ضغط الزيت. طقطقة نظام التعليق على المطبّات، تآكل كرات المقصّات، مساعدين متعبين، وصلات مانع الميلان. أزيز رمان بلي العجلة، طقطقة عكس السرعة عند الانعطاف، صرير الفرامل، احتكاك واهتزاز عند الكبح. أنين علبة التروس، صوت الدبرياج، هدير عمود الإدارة. هدير العادم، اهتزاز درع الحرارة، احتراق جوان المشعّب. صرير وطقطقة داخل المقصورة.

بصراحة عمّا هو عليه
يعطي Pro-Stuk تقديرًا احتماليًا من تسجيل، لا حكمًا من فوق الرافعة. يضيّق دائرة البحث، ويبيّن مدى استعجال الصوت، ويهيّئك للورشة، بينما يبقى قرار الإصلاح للفني الذي عاين السيارة. وإذا لم يكن في التسجيل شيء غير معتاد، يقول التطبيق ذلك بدل اختلاق عطل.

لمن هذا التطبيق
لسائقين يريدون فهم الصوت قبل دفع تكلفة الفحص. لمشترين يستمعون إلى سيارة مستعملة قبل إتمام الصفقة. ولكل من تلقّى عرض سعر للإصلاح ويريد رأيًا ثانيًا في معنى هذا الصوت فعلًا.

سجّل الدخول بحساب Google: يعود المرآب ودفتر الصيانة والتقارير بعد إعادة التثبيت أو على هاتف جديد.

تحصل السيارة الأولى على ثلاث فحوص صوتية مجانية. ويمكن شراء المزيد عند الحاجة، وهي لا تنتهي صلاحيتها.
```
