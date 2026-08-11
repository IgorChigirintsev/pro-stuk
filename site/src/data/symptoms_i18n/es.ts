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
};
