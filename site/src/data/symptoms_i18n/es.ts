import type { SymptomTr } from '../types';

/** Разборы симптомов по-испански. Структура — из русских файлов рядом. */
export const pages: Record<string, SymptomTr> = {
  'stuk-v-dvigatele': {
    h1: 'Golpeteo en el motor',
    metaTitle: 'Golpeteo en el motor: causas, peligro y qué hacer | Stuk',
    description:
      'Por qué golpetea el motor: desde el inofensivo tictac de las válvulas hasta los cojinetes de cigüeñal gastados. Cómo distinguir un golpeteo peligroso, si puedes circular y qué comprobar tú mismo.',
    intro: [
      'El golpeteo del motor es el síntoma con mayor abanico de gravedad: tras la misma palabra se esconden tanto el inofensivo repiqueteo de los inyectores como unos cojinetes de cigüeñal gastados, con los que cada kilómetro acerca la reparación completa. La buena noticia es que los distintos golpeteos suenan distinto y aparecen en condiciones distintas: por esos rasgos el círculo de causas se estrecha rápido.',
      'Las preguntas con las que empieza cualquier motorista: dónde golpetea (arriba del motor o desde el fondo), cuándo (en frío, en caliente, con carga) y si el ruido cambia con las revoluciones. Un tictac ligero y rápido arriba suele ser el tren de válvulas. Un golpe sordo desde abajo, que se acelera al dar gas y se hace más fuerte con carga, es la variante preocupante.',
    ],
    causes: [
      { name: 'Holguras de válvulas grandes o taqués hidráulicos', likelihood: 'Muy a menudo: la causa típica del tictac de arriba' },
      { name: 'Repiqueteo normal de los inyectores (inyección directa y diésel)', likelihood: 'Frecuente, y no es una avería' },
      { name: 'Accesorios: poleas, soportes, embrague del compresor del aire', likelihood: 'Frecuente si el golpeteo no depende del acelerador' },
      { name: 'Detonación al acelerar (picado de biela)', likelihood: 'Frecuente tras repostar gasolina de octanaje bajo' },
      { name: 'Cojinetes de bancada y de biela', likelihood: 'Menos frecuente, pero es el escenario más peligroso' },
    ],
    canRide: [
      'Depende del carácter del golpeteo. Con un tictac uniforme arriba se puede circular: el tren de válvulas se desgasta en meses, no en un viaje, pero conviene pedir cita para el reglaje en un par de semanas. Con el repiqueteo de los inyectores en un motor de inyección directa no hay nada que hacer: es el funcionamiento normal del sistema de combustible.',
      'Un golpe sordo desde el fondo del motor, que se acelera con las revoluciones y suena más fuerte con carga, es motivo para detenerse. Así suenan los cojinetes gastados, los apoyos sobre los que gira el cigüeñal. Seguir circulando puede acabar en un cojinete girado o en un motor gripado; mejor no llegar al taller por medios propios y llamar a la grúa.',
    ],
    checks: [
      'Comprobar el nivel de aceite con la varilla: un nivel bajo acompaña y amplifica los golpeteos del motor, y el golpeteo de cojinetes con poca presión de aceite avanza rápido.',
      'Escuchar de dónde viene el sonido: colócate junto al capó abierto; el tictac de las válvulas se oye arriba, el golpe de cojinetes es sordo y viene del fondo.',
      'Dar gas suavemente en punto muerto: un golpeteo que se acelera con las revoluciones y suena más fuerte con carga es más serio que uno que va a su aire.',
      'Recordar el último repostaje: un tintineo metálico al acelerar tras una gasolina dudosa se parece a la detonación y suele irse con un depósito de combustible bueno.',
      'Mirar si está encendido el testigo de presión de aceite: la aceitera roja junto a un golpeteo significa apagar el motor de inmediato.',
    ],
    appHelp:
      'La aplicación Stuk te lleva por las mismas preguntas que hace un motorista, graba el sonido y evalúa su espectro y su ritmo: con qué frecuencia llegan los golpes y cómo se relaciona eso con las revoluciones, porque esa relación es distinta en un golpeteo de válvulas y en uno de cigüeñal. En el informe verás las causas probables con porcentajes, el semáforo de urgencia y frases para hablar en el taller.',
    faq: [
      {
        q: '¿Por qué el motor golpetea solo en frío?',
        a: 'Mientras el motor no está caliente, las holguras entre piezas son mayores y el aceite espeso aún no ha llegado a todos los puntos. Un tictac de taqués o un golpe sordo de los pistones durante los primeros minutos tras el arranque en frío, que desaparece del todo al calentar, suele ser algo que observar y no una urgencia.',
      },
      {
        q: '¿Cómo suena el golpeteo más peligroso del motor?',
        a: 'Sordo, grave, «desde el fondo» del motor; se acelera con las revoluciones y crece con la carga, al acelerar o en subida. Así golpetean los cojinetes de biela y de bancada. Con ese sonido mejor no conducir tú mismo y llevar el coche al mecánico lo antes posible.',
      },
      {
        q: '¿Puede ser normal un golpeteo?',
        a: 'Sí. Los motores de inyección directa (TSI, GDI) y los diésel repiquetean siempre con los inyectores: el sonido es igual en frío y en caliente y se oye más fuera que dentro del habitáculo. Es funcionamiento normal, no una avería.',
      },
    ],
  },

  'skrip-tormozov': {
    h1: 'Chirrido de frenos',
    metaTitle: 'Los frenos chirrían: peligroso o no, causas y qué hacer | Stuk',
    description:
      'Por qué chirrían los frenos: la capa de óxido de la mañana, el avisador de desgaste de las pastillas o un problema con los discos. Cómo distinguir un chirrido inofensivo de una advertencia.',
    intro: [
      'El chirrido al frenar es ese caso raro en que la causa más frecuente es también la más inofensiva. Por la noche, tras la lluvia o el lavado, los discos se cubren de una fina capa de óxido; las primeras frenadas la raspan, y de ahí el chirrido. Si a los dos minutos de marcha el ruido ha desaparecido, no hay nada que hacer: es la vida normal de cualquier coche con frenos de disco.',
      'Otra cosa es el chirrido en cada frenada. Muchas pastillas llevan un avisador metálico de desgaste: una lámina que roza el disco a propósito y chilla cuando el material de fricción llega a su límite. Es una advertencia de fábrica: toca revisar las pastillas antes de que el chirrido se convierta en un roce de metal contra metal, porque eso ya significa discos estropeados y una distancia de frenado más larga.',
    ],
    causes: [
      { name: 'Capa de óxido tras la parada, la lluvia o el lavado', likelihood: 'Lo más frecuente: si el chirrido se va en las primeras frenadas' },
      { name: 'Avisador de desgaste: las pastillas están al límite', likelihood: 'Frecuente: si chilla en cada frenada' },
      { name: 'Pastillas endurecidas o baratas, polvo entre pastilla y disco', likelihood: 'Frecuente; molesto, pero no peligroso' },
      { name: 'Pastillas gastadas hasta el metal (rechinar)', likelihood: 'Si se ignoró la advertencia' },
    ],
    canRide: [
      'Con el chirrido matutino que desaparece tras las primeras frenadas se puede circular sin limitaciones: unas cuantas pisadas suaves del pedal limpian los discos y el asunto queda cerrado hasta la próxima lluvia.',
      'Con un chirrido constante también se puede circular —los frenos siguen trabajando a pleno rendimiento—, pero conviene pedir cita esta semana y no «algún día»: si chilla el avisador de desgaste, la etapa siguiente es el rechinar, las pastillas gastadas hasta la base y una factura que ya incluye discos. El metal contra metal es una señal de alto: solo con cuidado hasta el taller, frenando pronto y con suavidad.',
    ],
    checks: [
      'Buscar el patrón: chirrido solo en las primeras frenadas tras estar parado o con humedad es óxido; chirrido en cada frenada es motivo de revisión.',
      'Mirar entre los radios de la llanta: en muchos coches se ve la pastilla exterior. Un material de fricción de menos de 3–4 mm pide sustitución.',
      'Escuchar si es un lado o los dos: un chirrido de un solo lado apunta más al avisador o a una pinza que se agarrota justo ahí.',
      'Comprobar si hay un pitido en marcha sin frenar que cambia al rozar el pedal: así es como el avisador toca el disco antes incluso de pisar.',
      'Fijarse en el pedal y en la trayectoria: que el coche tire hacia un lado al frenar, que el pedal vibre o quede «largo» es más serio que un chirrido y significa taller sin demora.',
    ],
    appHelp:
      'La aplicación Stuk separa el escenario inofensivo del preocupante con las mismas preguntas —cuándo chirría y si el sonido desaparece— y la grabación ayuda a distinguir el chillido agudo del avisador del rechinar. En el informe verás causas probables con porcentajes y un semáforo: puedes circular, al taller esta semana o detente.',
    faq: [
      {
        q: '¿Por qué chirrían los frenos por la mañana y con lluvia?',
        a: 'Sobre los discos de fundición se forma en pocas horas de aire húmedo una fina capa de óxido. Las primeras frenadas la raspan: de ahí el chirrido y el ligero roce, que desaparecen enseguida. Es normal y no requiere reparación.',
      },
      {
        q: '¿Qué es el avisador de desgaste de las pastillas?',
        a: 'Una lámina metálica en la pastilla que empieza a rozar el disco y a chillar con fuerza cuando el material de fricción llega a su límite. Es una advertencia pensada a propósito: si oyes un chirrido constante, pide cita para cambiar las pastillas antes de que empiece el rechinar.',
      },
      {
        q: '¿En qué se diferencia el chirrido del rechinar?',
        a: 'El chirrido y el chillido son sonidos agudos con los que los frenos aún trabajan del todo. El rechinar es un ruido áspero de metal contra metal: el material de fricción se ha acabado y la base de acero de la pastilla roza el disco. Con rechinar no se circula, solo con cuidado hasta el taller.',
      },
    ],
  },

  'gul-pri-dvizhenii': {
    h1: 'Zumbido en marcha',
    metaTitle: 'Zumbido en marcha: rodamiento, neumáticos o caja | Stuk',
    description:
      'Zumbido uniforme a cierta velocidad: rodamiento de rueda, neumáticos, caja de cambios o diferencial. Comprobaciones sencillas sin taller —la prueba en punto muerto y las curvas suaves— para acotar la causa.',
    intro: [
      'Un zumbido uniforme que aparece con la velocidad y crece con ella suele venir de uno de dos sitios: del rodamiento de la rueda —el apoyo sobre el que gira— o de los neumáticos. Se pueden distinguir sin taller. El rodamiento zumba igual sobre cualquier asfalto, recuerda a un avión despegando a lo lejos y a menudo cambia en las curvas suaves. La goma, en cambio, reacciona al firme: sobre asfalto nuevo suena menos, sobre firme rugoso más; zumban especialmente los neumáticos de invierno, los de campo y los desgastados de forma irregular.',
      'Menos veces la fuente está en la transmisión: caja de cambios, diferencial o árbol de transmisión en coches con propulsión trasera o total. La prueba en punto muerto ordena las versiones: acelera hasta la velocidad a la que se oye el zumbido, pon punto muerto y déjate rodar. Si el zumbido sigue, va ligado al giro de las ruedas: rodamientos, neumáticos, firme. Si desaparece junto con las revoluciones del motor, hay que buscar en el motor y en lo que él mueve.',
    ],
    causes: [
      { name: 'Rodamiento de rueda', likelihood: 'Lo más frecuente: zumbido uniforme, crece con la velocidad, el firme da igual' },
      { name: 'Ruido de los neumáticos', likelihood: 'Frecuente: depende del firme; los de invierno y los gastados suenan más' },
      { name: 'Caja de cambios o diferencial', likelihood: 'Menos frecuente: el aullido cambia con la marcha o al pisar el acelerador' },
      { name: 'Árbol de transmisión (propulsión trasera y total)', likelihood: 'Zumbido con vibración en el suelo en un rango estrecho de velocidad' },
      { name: 'Ruido aerodinámico: gomas de puertas, baca', likelihood: 'Solo por encima de 70–90 km/h' },
    ],
    canRide: [
      'Con un rodamiento que zumba se puede circular, pero no es un sonido para arrastrar durante meses: el rodamiento gastado va cogiendo holgura —juego libre de la rueda— y en un caso descuidado puede agarrotarse. El plan razonable es diagnóstico en una semana y aplazar hasta entonces los viajes largos a velocidad alta. Si el zumbido creció de golpe o se le sumó una vibración, no lo dejes.',
      'El ruido de los neumáticos y el aerodinámico son cuestión de confort, no de seguridad: con ellos se circula sin limitaciones. El aullido de la caja o del diferencial tampoco obliga a parar en el arcén, pero no conviene alargarlo: en fase temprana muchas veces basta con cambiar el aceite, mientras que una reparación tardía con ejes y engranajes cuesta varias veces más.',
    ],
    checks: [
      'Prueba en punto muerto: acelera hasta la velocidad del zumbido, pon punto muerto y rueda. El zumbido sigue: ruedas y rodamientos; desaparece con las revoluciones: motor y transmisión.',
      'Curvas amplias en una recta segura: si en un arco suave hacia un lado el zumbido baja y hacia el otro sube, se parece al rodamiento, y el lado te dice cuál.',
      'Comparar firmes: recorre un tramo de asfalto nuevo y otro rugoso. Una diferencia clara de volumen apunta a los neumáticos.',
      'Mirar el dibujo y comprobar las presiones: el desgaste «en sierra» —escalones en los bordes de los tacos— hace ruidosos los neumáticos y sugiere una alineación descuadrada o amortiguadores cansados.',
      'En caja manual, comprobar si el aullido cambia en distintas marchas a la misma velocidad; en propulsión trasera, si junto al zumbido aparece un temblor en el suelo en un rango estrecho de velocidad.',
    ],
    appHelp:
      'La aplicación Stuk te lleva por las mismas preguntas —si el zumbido sigue en punto muerto, si cambia en curva y con el firme— y ayuda a grabar el sonido para comparar su carácter con casos típicos. En el informe verás causas probables con porcentajes y una conclusión: circula tranquilo, planifica el taller o compruébalo sin demora.',
    faq: [
      {
        q: '¿Cómo distinguir el zumbido del rodamiento del ruido de los neumáticos?',
        a: 'Por cómo reaccionan al firme y a las curvas. El ruido de los neumáticos cambia con el asfalto: en el nuevo suena menos, en el rugoso más. El rodamiento zumba igual en todas partes, pero suele responder a las curvas suaves, cuando la carga pasa a la rueda exterior. También ayuda mirar el dibujo: unos neumáticos gastados de forma irregular zumban por sí solos.',
      },
      {
        q: '¿Es peligroso circular con un rodamiento que zumba?',
        a: 'En la fase inicial no, pero no conviene alargarlo: con el tiempo aparece holgura, la rueda empieza a bailar y, en el peor caso, el rodamiento se agarrota. La comprobación es sencilla: en el elevador el mecánico gira las ruedas y localiza el buje ruidoso en unos minutos. Un plazo razonable para la visita es una semana.',
      },
      {
        q: '¿Por qué el zumbido cambia en las curvas?',
        a: 'En una curva el peso del coche pasa a las ruedas exteriores. Si zumba el rodamiento derecho, al girar a la izquierda la carga sobre él aumenta y el zumbido crece; al girar a la derecha, baja. Esta regla ayuda a saber el lado antes del taller: recuérdala y cuéntasela al mecánico.',
      },
    ],
  },

  'stuk-v-podveske': {
    h1: 'Golpeteo en la suspensión',
    metaTitle: 'Golpeteo en la suspensión: qué golpea y si puedes circular | Stuk',
    description:
      'Qué golpea en la suspensión: bieletas de la barra estabilizadora, silentblocks, la cremallera de dirección o un muelle roto. Cómo distinguir los golpes por su carácter y cuándo ir al taller.',
    intro: [
      'La suspensión de un turismo son varias decenas de articulaciones, casquillos de goma y apoyos, y con los años la holgura —el juego libre— en alguno de ellos es casi inevitable. Una pieza floja responde a cada bache con un golpe: la suspensión comprime y extiende, y la pieza gastada baila en su anclaje. La buena noticia es que las primeras en rendirse suelen ser las piezas baratas: las bieletas de la barra estabilizadora, pequeños tirantes con rótulas que se desgastan antes que nada.',
      'El carácter del sonido dice mucho antes de subir el coche al elevador. Un golpeteo sordo y frecuente sobre firme picado y juntas es la firma de las bieletas. Golpes aislados en baches y badenes apuntan a los silentblocks —los casquillos de goma con los que los brazos se sujetan a la carrocería— o a unos amortiguadores cansados. Un golpe que llega directo al volante y se nota en las palmas es holgura en la cremallera de dirección. Y un crujido «de cama vieja» no es un golpe, sino goma seca en los casquillos: lo más inofensivo de la lista.',
    ],
    causes: [
      { name: 'Bieletas de la barra estabilizadora', likelihood: 'Lo más frecuente: golpeteo sordo y frecuente en baches pequeños' },
      { name: 'Silentblocks de los brazos o amortiguadores', likelihood: 'Frecuente: golpes sordos aislados en los baches' },
      { name: 'Holgura en la cremallera de dirección', likelihood: 'Menos frecuente: el golpe llega al volante y se nota en las manos' },
      { name: 'Casquillos de la barra, silentblocks secos (crujido, no golpe)', likelihood: 'Frecuente, sobre todo con frío y humedad' },
      { name: 'Muelle de suspensión roto', likelihood: 'Raro: de golpe tras un bache, con una esquina del coche hundida' },
    ],
    canRide: [
      'Con la mayoría de golpes de suspensión se puede circular: bieletas, silentblocks y casquillos no fallan de repente. Aun así, no conviene aplazar el diagnóstico meses: una pieza rota transmite los impactos a las vecinas y acelera su desgaste, y de oído pueden sonar igual cosas más serias. Lo razonable es pedir cita en una o dos semanas y, hasta entonces, pasar los baches grandes despacio.',
      'Dos escenarios piden más atención. Un golpe que llega al volante afecta a la dirección, un sistema de seguridad: revisión en los próximos días, y si el volante se ha quedado «vacío» en el centro o el coche baila dentro del carril, sin demora. Un chasquido que aparece de golpe tras un bache junto con una esquina de la carrocería hundida es el cuadro típico de un muelle roto: hasta el taller conduce con suavidad, porque la espira rota puede desplazarse y dañar el neumático.',
    ],
    checks: [
      'Mecer el coche parado con la mano por la aleta encima de cada rueda: los crujidos de casquillos y silentblocks se reproducen muchas veces ahí mismo.',
      'Buscar el patrón: si golpea sobre firme picado, apunta a las bieletas; si golpea en baches aislados, a silentblocks y amortiguadores.',
      'Averiguar si el ruido está delante o detrás y si llega al volante: un golpe que se nota en las palmas y baja al sujetar el volante ligeramente en tensión indica holgura en la cremallera.',
      'Empujar cada esquina del coche hacia abajo y soltar: la carrocería debe volver a su sitio sin balancearse. Si sigue oscilando, el amortiguador está cansado.',
      'Mirar detrás de la rueda desde abajo, sin desmontar nada: una espira rota se ve a menudo a simple vista, y de paso se aprecia si una esquina del coche está hundida.',
    ],
    appHelp:
      'La aplicación Stuk recorre las mismas bifurcaciones que un mecánico en la primera inspección: qué sonido es, sobre qué baches, delante o detrás, si llega al volante. La grabación evita perder detalles hasta la visita, y en el informe verás causas probables con porcentajes y un semáforo claro: puedes circular, enséñalo esta semana o revísalo urgentemente.',
    faq: [
      {
        q: '¿Es peligroso circular con un golpeteo en la suspensión?',
        a: 'La mayoría de las veces un golpeteo no significa una avería inmediata: bieletas y silentblocks se desgastan poco a poco. Pero la holgura crece con el tiempo y se lleva por delante a las piezas vecinas, así que un plazo razonable de diagnóstico es de una a dos semanas. Las excepciones son el golpe en el volante y el chasquido de un muelle roto: con ellos, al taller en los próximos días.',
      },
      {
        q: '¿Por qué golpea en baches pequeños y los grandes los pasa en silencio?',
        a: 'Es la firma típica de las bieletas: sus pequeñas rótulas martillean justo en el firme picado, los adoquines y las juntas, donde la suspensión trabaja mucho y con poco recorrido. En un bache grande esa holgura no siempre se oye. Detrás golpean igual las bieletas traseras y los silentblocks del eje.',
      },
      {
        q: '¿Puede golpear algo que no sea la suspensión?',
        a: 'Sí, y no es raro. Un golpe sordo detrás lo da el gato o la rueda de repuesto sueltos en el maletero; un toque delante y arriba, la holgura del cierre del capó; un traqueteo abajo, los soportes del escape. Un único «tump» al arrancar tras una larga parada son las pastillas pegadas a los discos, y eso es inofensivo.',
      },
    ],
  },

  'gul-podshipnika-stupitsy': {
    h1: 'Zumbido del rodamiento de rueda',
    metaTitle: 'Zumbido del rodamiento de rueda: cómo reconocerlo | Stuk',
    description:
      'Cómo suena un rodamiento de rueda gastado, cómo distinguirlo del ruido de los neumáticos, qué rueda zumba y cuánto se puede circular así.',
    intro: [
      'El rodamiento de rueda es la pieza sobre la que gira la rueda. Cuando se desgasta aparece un zumbido uniforme que crece con la velocidad: muchos lo comparan con un avión despegando o con el zumbido de un transformador. Empieza casi imperceptible a partir de 60–80 km/h, con el tiempo se oye a cualquier velocidad y acaba notándose como vibración.',
      'La dificultad está en separarlo del ruido de los neumáticos: zumban parecido. Hay dos pruebas caseras fiables. La primera es el firme: el ruido de la goma cambia con el tipo de asfalto, el zumbido del rodamiento es igual en todas partes. La segunda son los cambios de carril suaves a cierta velocidad: si en una curva amplia el zumbido cambia, casi seguro es un rodamiento, y el del lado cargado.',
    ],
    causes: [
      { name: 'Rodamiento de rueda gastado', likelihood: 'Lo más frecuente con un zumbido uniforme que no depende del firme' },
      { name: 'Ruido de los neumáticos (invierno, campo, desgaste irregular)', likelihood: 'Muy frecuente: el gran imitador del rodamiento' },
      { name: 'Diferencial o grupo cónico (propulsión trasera y total)', likelihood: 'Menos frecuente; el tono de ese zumbido cambia con el acelerador' },
      { name: 'Rodamiento de apoyo del árbol de transmisión', likelihood: 'Raro, solo en coches con árbol de transmisión' },
    ],
    canRide: [
      'En la fase inicial sí, pero con matices. Un rodamiento gastado no se destruye de golpe: entre el primer zumbido y el estado crítico suelen pasar miles de kilómetros. El proceso, eso sí, va en una sola dirección y su final es desagradable: holgura en la rueda, alojamiento estropeado y, en el peor caso, un buje que se agarrota en marcha.',
      'La regla es simple: si notas el zumbido, lleva el coche al taller en una o dos semanas y aplaza hasta entonces los viajes largos a velocidad alta. Si el zumbido creció de golpe, apareció vibración, la rueda tiene holgura o el coche tira hacia un lado, ve al diagnóstico enseguida y no por autopista.',
    ],
    checks: [
      'Prueba del firme: recorre el mismo tramo sobre asfaltos distintos. El zumbido no cambia: más bien el rodamiento; baja sobre firme liso: más bien los neumáticos.',
      'Prueba de curva: en una carretera vacía a 60–80 km/h cambia de carril con suavidad. El zumbido baja al girar a la derecha y sube al girar a la izquierda: se carga el lado derecho, y el rodamiento derecho es el candidato; y al revés.',
      'Comprobación en punto muerto: acelera y déjate rodar en punto muerto. El zumbido sigue: la fuente gira con las ruedas, no con el motor.',
      'Mirar el dibujo: el desgaste «en sierra» y las manchas de desgaste irregular hacen ruidosa la goma y apuntan a la alineación.',
      'Tras el viaje, acercar con cuidado la mano a los bujes (sin tocar el disco de freno, que está caliente): un buje notablemente más caliente en un lado es un indicio más.',
    ],
    appHelp:
      'La aplicación Stuk hace las mismas preguntas de control —sobre el firme, las curvas y el rodar en punto muerto—, graba el zumbido y evalúa su carácter: el ruido de banda ancha de los neumáticos y el zumbido de un rodamiento se ven distintos en el espectro. En el informe verás las probabilidades de cada causa, la urgencia y una pista sobre qué lado nombrar al mecánico.',
    faq: [
      {
        q: '¿Por qué el zumbido cambia en las curvas?',
        a: 'En una curva el peso pasa a las ruedas exteriores. Si al girar a la izquierda el zumbido crece, el lado cargado es el derecho, así que probablemente zumba el rodamiento derecho. Al girar a la derecha, al revés. Conviene recordar este detalle y decirlo en el taller: reduce la búsqueda a la mitad.',
      },
      {
        q: '¿Cuánto se puede circular con un rodamiento que zumba?',
        a: 'No hay una cifra única: entre los primeros síntomas y una holgura peligrosa suelen pasar miles de kilómetros, pero la velocidad del desgaste es imprevisible. Un término medio razonable: pedir cita en una o dos semanas y no planificar viajes largos a velocidad alta antes de eso.',
      },
      {
        q: '¿Se puede confundir el rodamiento con los neumáticos?',
        a: 'Con facilidad; es el error más común. Se distinguen por dos rasgos: el ruido de la goma depende del firme y no cambia en curva, mientras que el zumbido del rodamiento es igual sobre cualquier asfalto y reacciona al traspaso de peso en curvas amplias.',
      },
    ],
  },

  'stuk-na-nerovnostyah': {
    h1: 'Golpes en los baches',
    metaTitle: 'Golpes en los baches: causas y qué comprobar tú mismo | Stuk',
    description:
      'Golpes en baches y firme irregular: golpeteo frecuente sobre firme picado, golpes aislados en los hoyos o un golpe en el volante. Qué piezas tienen la culpa y si puedes circular.',
    intro: [
      'Un golpe que aparece solo en las irregularidades —juntas, adoquines, badenes— viene casi siempre del tren rodante. Al pasar un bache la suspensión comprime y extiende, y si en alguna articulación ha aparecido holgura, la pieza golpea en su anclaje en cada recorrido. En coches de más de cinco o siete años es algo habitual, y casi siempre la culpa es de consumibles baratos, no de conjuntos caros.',
      'El dibujo del golpe reduce la lista de sospechosos. Un golpeteo sordo y frecuente sobre firme picado, delante, es el clásico de las bieletas de la barra estabilizadora; el mismo patrón detrás son las bieletas traseras o los silentblocks del eje (los casquillos de goma con los que el eje se sujeta a la carrocería). Los golpes aislados en los hoyos son silentblocks de los brazos o amortiguadores cansados. Caso aparte: un golpe al ritmo del giro de la rueda que apareció tras un cambio de neumáticos reciente; pueden ser tornillos flojos, y esa versión se comprueba la primera.',
    ],
    causes: [
      { name: 'Bieletas de la barra estabilizadora', likelihood: 'Lo más frecuente: golpeteo delante en baches pequeños' },
      { name: 'Suspensión trasera: bieletas traseras, silentblocks del eje', likelihood: 'Frecuente si el golpe viene de atrás' },
      { name: 'Silentblocks de los brazos o amortiguadores', likelihood: 'Frecuente: golpes aislados en los hoyos' },
      { name: 'Holgura en la cremallera de dirección', likelihood: 'Menos frecuente: el golpe llega directo al volante' },
      { name: 'Tornillos de rueda flojos', likelihood: 'Raro, pero es lo primero que se comprueba tras un cambio de neumáticos' },
    ],
    canRide: [
      'Con el típico golpeteo de bieletas o silentblocks se puede circular: estas piezas no fallan de repente, y una o dos semanas hasta el diagnóstico no cambian nada si pasas los baches grandes despacio. El propio diagnóstico de la suspensión es rápido: el mecánico mueve las articulaciones en el elevador y localiza la holgura en unos minutos. Alargarlo meses tampoco conviene: una articulación gastada transmite los impactos a las piezas vecinas y acelera su desgaste.',
      'Distinto es un golpe rítmico, al compás del giro de la rueda, en los primeros días tras un cambio de neumáticos: eso obliga a parar en cuanto puedas y comprobar el apriete de los tornillos de todas las ruedas con la llave. Una rueda con tornillos flojos destroza los agujeros de la llanta y, en el peor caso, puede soltarse en marcha. Un golpe que llega al volante tampoco es para aplazar: la dirección es un sistema de seguridad y se revisa en los próximos días.',
    ],
    checks: [
      'Si has quitado o cambiado ruedas hace poco, comprueba primero el apriete de los tornillos de todas ellas con la llave, antes que cualquier otra versión.',
      'Fijarse en el dibujo del golpe: un golpeteo frecuente sobre firme picado y unos golpes aislados en los hoyos son piezas distintas, y ese detalle acorta la búsqueda del mecánico.',
      'Averiguar si el golpe está delante o detrás: circula despacio con las ventanillas entreabiertas junto a un muro o una valla; el sonido reflejado se oye mucho mejor.',
      'Sujetar el volante ligeramente en tensión en un tramo bacheado: si el golpe que llega a las palmas baja, se parece a la holgura de la cremallera, y conviene decirlo en el taller.',
      'Descartar lo sencillo: sacar los objetos sueltos del maletero, comprobar la sujeción de la rueda de repuesto y el gato, apretar el capó cerrado; un cierre con holgura golpetea de forma parecida a la suspensión.',
    ],
    appHelp:
      'La aplicación Stuk hace las mismas preguntas que esta página, solo que paso a paso: qué golpe es exactamente, dónde se oye, cómo se comporta en distintas irregularidades. Con tus respuestas y la grabación arma un informe con causas probables y un semáforo de urgencia: con él es más fácil decidir entre ir al taller mañana o cuando toque.',
    faq: [
      {
        q: '¿Por qué el golpe solo se oye en los baches y en asfalto liso no?',
        a: 'La holgura de una articulación se manifiesta solo cuando la suspensión trabaja: en el bache la pieza se desplaza en su anclaje y golpea. Sobre asfalto liso los recorridos son pequeños y la pieza gastada calla. Por eso un golpe en las irregularidades casi siempre habla del tren rodante y no del motor.',
      },
      {
        q: 'Cambié los neumáticos hace poco y apareció un golpe. ¿Casualidad?',
        a: 'Probablemente no. Un golpe rítmico o un chasquido al compás del giro de la rueda en los primeros días tras desmontarlas es el clásico de los tornillos flojos. La comprobación lleva cinco minutos: repasar los tornillos de todas las ruedas con la llave. Tras cualquier cambio conviene repetir el apriete a los 50–100 kilómetros.',
      },
      {
        q: 'Golpean las bieletas de la barra estabilizadora. ¿Es urgente?',
        a: 'Las bieletas en sí no son peligrosas: son tirantes pequeños que se desgastan los primeros y el coche sigue siendo manejable. Pero piezas más serias pueden sonar parecido, así que hace falta un diagnóstico en una o dos semanas: en el elevador la fuente se encuentra en minutos.',
      },
    ],
  },

  'tikanie-dvigatelya': {
    h1: 'Tictac del motor',
    metaTitle: 'El motor hace tictac: normal o desgaste, causas | Stuk',
    description:
      'De dónde viene el tictac del motor: holguras de válvulas, taqués hidráulicos, repiqueteo normal de los inyectores o el colector de escape. Cómo distinguir lo normal del desgaste.',
    intro: [
      'Un tictac uniforme y rápido es el más común de los sonidos del motor, y ni mucho menos significa siempre una avería. En los motores de inyección directa (TSI, GDI y similares) y en los diésel siempre repiquetean los inyectores y la bomba de alta presión: así están hechos. El repiqueteo normal tiene señas reconocibles: es igual en frío y en caliente, se oye más fuera que dentro y no cambia en años.',
      'Debe alertarte un tictac que con el tiempo suena más fuerte y se oye mejor con el motor caliente que antes. Así se manifiestan unas holguras de válvulas grandes: los huecos entre las piezas del tren de válvulas crecen con el desgaste y las válvulas empiezan a trabajar con golpe. Casos aparte: el tictac solo durante los primeros minutos tras el arranque en frío (normalmente los taqués hidráulicos, piezas que con la presión de aceite eliminan la holgura sobrante) y un repiqueteo con olor a escape, más fuerte fuera, que es la firma de una junta del colector de escape quemada.',
    ],
    causes: [
      { name: 'Repiqueteo normal de los inyectores (inyección directa, diésel)', likelihood: 'Muy frecuente si el sonido es siempre igual' },
      { name: 'Holguras de válvulas grandes', likelihood: 'Frecuente si el tictac ha ido a más con el tiempo' },
      { name: 'Taqués hidráulicos en frío', likelihood: 'Frecuente si solo suena los primeros minutos tras arrancar' },
      { name: 'Junta o grieta del colector de escape', likelihood: 'Si el repiqueteo es más fuerte fuera y huele a escape' },
      { name: 'Cadena de distribución o su tensor', likelihood: 'Menos frecuente: un susurro o traqueteo delante del motor' },
    ],
    canRide: [
      'Con un tictac se puede circular casi siempre: entre sus causas típicas no hay ninguna que obligue a parar en el arcén. El repiqueteo normal de los inyectores y el tictac matutino de los taqués no requieren reparación alguna: es el funcionamiento normal del motor.',
      'Pero un tictac que va a más no se irá solo. Unas válvulas con holgura excesiva trabajan con golpe y se desgastan más rápido, así que conviene programar el reglaje o la revisión de los taqués para las próximas dos semanas; mientras tanto puedes circular con tranquilidad. Con el colector de escape la lógica es parecida: hay una o dos semanas de margen, pero la fisura crece y el olor a escape puede entrar al habitáculo por la calefacción, y eso ya es nocivo.',
    ],
    checks: [
      'Comparar el motor frío y el caliente: tictac solo los primeros minutos tras arrancar es el cuadro de los taqués; un sonido que se oye mejor en caliente apunta a las holguras de válvulas.',
      'Valorar la evolución de memoria: un tictac que no ha cambiado en años es más bien normal; si hace medio año era claramente más suave, es desgaste y seguirá creciendo.',
      'Escuchar desde fuera y desde dentro: el repiqueteo normal de los inyectores es bastante más fuerte fuera; el tictac de las válvulas se oye bien también desde el asiento del conductor.',
      'Comprobar el nivel de aceite con la varilla: con nivel bajo el tictac de taqués y tren de válvulas aumenta, y a veces al rellenar hasta la marca se nota enseguida.',
      'Oler junto al capó abierto: olor a escape junto a un repiqueteo frecuente es señal del colector, y eso significa taller en una o dos semanas.',
    ],
    appHelp:
      'La aplicación Stuk precisa lo esencial —si el tictac ha ido a más con el tiempo y cómo se comporta en frío y en caliente— y la grabación permite compararlo con ejemplos típicos. En el informe verás causas probables con porcentajes y una conclusión de semáforo: normal, cita esta semana o diagnóstico sin demora.',
    faq: [
      {
        q: '¿Por qué los diésel y los motores de inyección directa hacen tictac siempre?',
        a: 'En ellos el combustible se inyecta a presión muy alta, y cada inyector produce un chasquido breve al abrir, al que se suma el repiqueteo de la bomba de alta presión. Es funcionamiento normal: el sonido es igual con cualquier tiempo, más fuerte fuera que dentro, y no requiere reparación.',
      },
      {
        q: '¿Qué es el reglaje de holguras de válvulas?',
        a: 'Entre las piezas del tren de válvulas se deja una pequeña holgura térmica; con el desgaste crece y las válvulas empiezan a repiquetear. El mecánico devuelve las holguras a su valor con pastillas o tornillos de reglaje. En motores con taqués hidráulicos, en lugar de reglaje se comprueban los propios taqués y la presión de aceite.',
      },
      {
        q: '¿Puede desaparecer el tictac tras un cambio de aceite?',
        a: 'Sí, si la culpa era del aceite viejo, de una viscosidad inadecuada o de un nivel bajo: los taqués hidráulicos son muy sensibles al estado del aceite. Pero un cambio de aceite no arregla unas holguras de válvulas desgastadas: si después el tictac sigue y va a más, hace falta reglaje.',
      },
    ],
  },

  'svist-remnya': {
    h1: 'Chirrido de la correa',
    metaTitle: 'La correa chirría: causas, si puedes circular y qué hacer | Stuk',
    description:
      'Chirría la correa de accesorios: desgaste, poca tensión, rodillos o el embrague del compresor del aire acondicionado. Cómo acotar la causa por las circunstancias.',
    intro: [
      'Un chirrido agudo bajo el capó viene casi siempre de la correa de accesorios: la correa que desde el cigüeñal mueve el alternador, la bomba de agua y, en muchos coches, el compresor del aire acondicionado y la bomba de la dirección asistida. Chirría en un único caso: cuando patina sobre las poleas en vez de agarrarse a ellas.',
      'Las causas del patinaje se dividen en dos grupos. El primero es la propia correa: la goma ha envejecido y se ha endurecido, la tensión ha caído, o han llegado aceite o refrigerante a la superficie de trabajo. El segundo son los conjuntos que mueve: un rodillo que se agarrota, un embrague del compresor duro o una bomba de agua con el rodamiento gastado cargan la correa más de lo que puede transmitir. Por cuándo aparece el chirrido, el círculo se estrecha bastante.',
    ],
    causes: [
      { name: 'Correa desgastada o poco tensada', likelihood: 'Lo más frecuente' },
      { name: 'Patinaje en frío o con humedad', likelihood: 'Frecuente si el chirrido se va al calentar' },
      { name: 'Rodillo tensor o rodillo guía', likelihood: 'Bastante frecuente: junto al chirrido se oye un zumbido o susurro' },
      { name: 'Embrague del compresor del aire acondicionado', likelihood: 'Si el chillido coincide con la conexión del aire' },
      { name: 'Bomba de agua o polea de rueda libre del alternador', likelihood: 'Menos frecuente' },
    ],
    canRide: [
      'Si el chirrido es corto y solo vive los primeros segundos tras un arranque en frío, puedes circular tranquilo: es motivo para enseñar la correa cuando toque, no para cambiar los planes del día.',
      'Con un chirrido constante o bajo carga también se puede circular de momento, pero conviene pedir cita en una semana: una correa que patina se recalienta y se desgasta en cascada, y si se rompe deja parado el alternador y, en muchos coches, la bomba de agua. Dos señales obligan a apartarse y apagar el motor de inmediato: el testigo de la batería encendido y la aguja de temperatura subiendo; ambas significan que la correa ya no mueve sus accesorios.',
    ],
    checks: [
      'Recordar cuándo chirría exactamente: los primeros segundos tras arrancar, al conectar el aire acondicionado, al girar el volante o de forma continua; esa es la pista principal.',
      'Conectar el aire acondicionado con el motor en marcha: un chillido justo en el momento de la conexión apunta a un embrague de compresor que patina.',
      'Con el motor parado, revisar la correa: grietas transversales, bordes deshilachados y flancos «pulidos» brillantes son signos de desgaste.',
      'Comprobar si hay restos de aceite o refrigerante en la correa y alrededor de las poleas: una correa engrasada chirría aunque sea nueva, y las marcas de refrigerante apuntan a la bomba de agua.',
      'Escuchar si junto al chirrido hay un zumbido o susurro uniforme que cambia con las revoluciones: así suena el rodamiento de uno de los rodillos.',
    ],
    appHelp:
      'La aplicación Stuk precisa el carácter del sonido y las circunstancias —chirrido o zumbido, en frío o bajo carga, ligado o no al aire acondicionado— y con la grabación ayuda a separar el chillido de la correa del susurro de un rodillo. En el informe verás causas probables con porcentajes y un semáforo: puedes circular, al taller esta semana o detente.',
    faq: [
      {
        q: '¿Qué pasa si la correa se rompe por el camino?',
        a: 'La carga se corta al instante: el alternador se para y el coche circula con lo que queda en la batería, normalmente unas decenas de minutos. En los motores donde la correa mueve también la bomba de agua, la temperatura sube rápido y seguir circulando deja de ser posible. Por eso una correa que chirría se cambia mejor con cita que tras la rotura.',
      },
      {
        q: '¿Por qué aparece el chirrido al conectar el aire acondicionado?',
        a: 'El compresor del aire es el consumidor más pesado de la correa. Al conectarse, su embrague añade carga de golpe, y una correa gastada o poco tensada se pone a patinar. Si chilla justo el segundo de la conexión, conviene revisar también el propio embrague: su desgaste da el mismo sonido.',
      },
      {
        q: '¿Se puede echar un espray a la correa para que no chirríe?',
        a: 'Mejor no. Los espráis y remedios caseros como el WD-40 dan silencio un día o dos, pero la goma impregnada patina y envejece más rápido, mientras que la causa —desgaste o poca tensión— sigue ahí. Es más fiable cambiar la correa junto con el rodillo: es uno de los trabajos baratos del taller.',
      },
    ],
  },
};
