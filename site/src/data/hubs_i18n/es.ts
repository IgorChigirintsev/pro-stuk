import type { HubText } from './index';

/** Разделы по узлам: испанский. Слаг общий с английским, переводится только текст. */
export const es: Record<string, HubText> = {
  dvigatel: {
    h1: 'Ruidos y golpeteos del motor',
    short: 'Motor',
    metaTitle: 'Ruidos y golpeteos del motor: guía completa | Pro-Stuk',
    description:
      'Todos los sonidos del motor en un sitio: golpeteo, tictac, traqueteo, tintineo y silbido. Cómo separar lo inofensivo de lo peligroso y qué comprobar usted mismo.',
    intro: [
      'El motor es la pieza más habladora del coche y también la más ambigua: bajo la palabra «golpeteo» caben tanto el inofensivo tableteo de los inyectores como unos cojinetes de cigüeñal gastados, con los que cada kilómetro acerca una reparación mayor. Lo que los separa no es el volumen, sino de dónde viene el sonido, cuándo aparece y cómo reacciona al acelerador y a la temperatura.',
      'Esta sección reúne una guía por cada tipo de sonido: del tictac de las válvulas y el susurro de la cadena de distribución al picado y al golpeteo de las bielas. Cada una incluye cómo suena, comprobaciones seguras sin desmontar nada y una valoración honesta de la urgencia.',
    ],
  },
  podveska: {
    h1: 'Golpes y crujidos de la suspensión',
    short: 'Suspensión y dirección',
    metaTitle: 'Golpes y crujidos de la suspensión: guía | Pro-Stuk',
    description:
      'Golpes en los baches, crujidos, holgura en el volante: cómo localizar el origen en la suspensión y la dirección y qué puede comprobar usted mismo.',
    intro: [
      'La suspensión se desgasta poco a poco y casi siempre avisa con un ruido mucho antes de volverse peligrosa. El problema es otro: un mismo golpeteo sobre baches lo producen tanto unas bieletas baratas como una rótula, cuya rotura a velocidad ya es cuestión de seguridad.',
      'La sección agrupa las guías por carácter del sonido y condiciones: golpeteo rápido en firme rizado, impactos aislados en baches, crujido al balancear el coche, golpe en el volante. Aparte, las señales de desgaste de cada pieza y comprobaciones que se hacen sin elevador.',
    ],
  },
  tormoza: {
    h1: 'Chirridos y raspado de los frenos',
    short: 'Frenos y ruedas',
    metaTitle: 'Chirridos y raspado de los frenos: guía | Pro-Stuk',
    description:
      'Chirrido, pitido, raspado y vibración al frenar: qué significa cada sonido, cuándo no se debe seguir conduciendo y cómo revisar pastillas y pinza.',
    intro: [
      'Los frenos son el único sistema donde conviene tomar el sonido al pie de la letra: la mayoría de las señales están puestas por el fabricante. El testigo metálico de desgaste empieza a chillar a propósito cuando las pastillas se acaban, y el raspado de metal contra metal significa que la reserva ya se agotó.',
      'Al mismo tiempo, la causa más frecuente de chirrido es inofensiva: la capa de óxido nocturna sobre los discos, que desaparece en las primeras frenadas. Aquí también entran los ruidos de ruedas y bujes: zumbido del rodamiento, vibración a velocidad y golpeteos que suelen confundirse con los frenos.',
    ],
  },
  transmissiya: {
    h1: 'Ruidos de la caja y la transmisión',
    short: 'Transmisión',
    metaTitle: 'Ruidos de la caja y la transmisión: guía | Pro-Stuk',
    description:
      'Aullido de la caja, chasquidos de las juntas homocinéticas, golpes al cambiar de marcha y zumbido del embrague: cómo localizar el origen bajo el piso.',
    intro: [
      'La transmisión se manifiesta de forma distinta al motor y a la suspensión: sus ruidos dependen de si se transmite par. Un sonido que desaparece al levantar el pie y vuelve bajo carga pertenece casi siempre a este grupo.',
      'La sección reúne guías sobre caja, embrague, palieres y grupo final: cómo suena cada pieza, qué comprobación revela algo sin desmontar y a partir de cuándo seguir conduciendo sale caro.',
    ],
  },
  vyhlop: {
    h1: 'Ruidos del escape',
    short: 'Escape',
    metaTitle: 'Ruidos del escape: guía completa | Pro-Stuk',
    description:
      'Bramido, explosiones en el silenciador, traqueteo bajo el piso y una pantalla térmica que tintinea: qué significan los ruidos del escape y por qué importan.',
    intro: [
      'El escape produce los sonidos más reconocibles de todos: el bramido de un silenciador perforado, las explosiones al levantar el pie, el traqueteo metálico en un régimen concreto. La mayoría no cambia cómo anda el coche, pero tampoco conviene ignorarlos: tras un traqueteo aparentemente inocente a veces hay un catalizador deshecho, y sus fragmentos pueden acabar en el motor.',
      'La sección cubre todo el recorrido: de una pantalla térmica de céntimos y un tubo flexible roto a una junta de colector quemada y un catalizador obstruido, con el sonido de cada avería y el riesgo de que los gases entren en el habitáculo.',
    ],
  },
  salon: {
    h1: 'Crujidos y ruidos del habitáculo',
    short: 'Habitáculo y carrocería',
    metaTitle: 'Crujidos del habitáculo: cómo encontrar el origen | Pro-Stuk',
    description:
      'Grillos en el habitáculo, salpicadero que cruje, puertas que golpean: cómo encontrar el origen usted mismo y distinguirlo de un fallo del tren de rodaje.',
    intro: [
      'Los ruidos del habitáculo son los más molestos y normalmente los más baratos de resolver: detrás suele haber un clip suelto, un objeto sin sujetar en el maletero o una junta seca, no una avería. Lo importante es saber distinguirlos de un golpe de la suspensión, para que un plástico que cruje no acabe en una factura de diagnóstico del tren de rodaje.',
      'La sección muestra formas sencillas de acorralar el sonido: presionar el panel con la mano en marcha, vaciar el maletero, torcer la carrocería subiendo una rueda al bordillo. Y una señal honesta de cuándo el ruido sí viene de abajo y toca ir al taller.',
    ],
  },
};
