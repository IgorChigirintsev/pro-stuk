import type { Dict } from './types';

export const es: Dict = {
  brand: 'Pro-Stuk',
  nav: {
    symptoms: 'Síntomas',
    how: 'Cómo funciona',
    articles: 'Artículos',
    analytics: 'Estadísticas',
    lang: 'Idioma',
  },
  footer: {
    disclaimer:
      'Pro-Stuk da una estimación de probabilidades a partir de tus respuestas y del sonido, ' +
      'no un diagnóstico. La decisión final sobre la reparación la toma el mecánico ' +
      'después de revisar el coche.',
    how: 'Cómo funciona',
    privacy: 'Política de privacidad',
    ruArticles: 'Artículos (en ruso)',
    ruOnly: 'Guías por síntomas y artículos (en ruso)',
  },
  home: {
    title: 'Pro-Stuk — diagnóstico del coche por el sonido',
    description:
      'Graba el ruido y descubre qué le pasa al coche. Un cuestionario breve, análisis de ' +
      'la grabación y un informe: causas probables con porcentajes, semáforo de urgencia ' +
      'y qué decir en el taller.',
    schemaDescription:
      'Diagnóstico de averías del coche por síntomas y sonido: cuestionario, grabación ' +
      'del ruido e informe con las causas probables.',
    h1: 'Graba el ruido y descubre qué le pasa al coche',
    sub:
      'Un cuestionario breve y una grabación de 15–30 segundos. A cambio: causas probables ' +
      'con porcentajes, semáforo de urgencia y las palabras justas para hablar en el taller.',
    cta: 'Descargar la aplicación',
    ctaNote: 'Android · gratis por ahora',
    howH2: 'Cómo funciona',
    steps: [
      {
        title: '1. Preguntas',
        text: 'Cuándo se oye el ruido y a qué se parece: el árbol de preguntas va acotando la causa.',
      },
      {
        title: '2. Sonido',
        text: 'Grabación de 15–30 segundos: el espectro, el ritmo de los golpes y las revoluciones se calculan en el servidor.',
      },
      {
        title: '3. Informe',
        text: 'Causas con porcentajes, semáforo de urgencia y qué decir en el taller.',
      },
    ],
    faqH2: 'Preguntas frecuentes',
    faq: [
      {
        q: '¿Es un diagnóstico exacto?',
        a: 'No. Pro-Stuk da una estimación de probabilidades: una lista de causas posibles con porcentajes y el nivel de urgencia. El diagnóstico exacto lo hace el mecánico tras revisar el coche; el informe sirve para llegar preparado.',
      },
      {
        q: '¿Cuánto cuesta?',
        a: 'Por ahora es gratis: hasta 3 informes completos de sonido al día por dispositivo. El veredicto preliminar del cuestionario no tiene límite.',
      },
      {
        q: '¿Qué coches admite?',
        a: 'Turismos con motor de gasolina o diésel y caja manual o automática. La marca, el año y el kilometraje se tienen en cuenta en el análisis.',
      },
      {
        q: '¿Qué pasa con mi grabación?',
        a: 'El audio se envía al servidor, se analiza y no se guarda después. No hay cuentas ni rastreadores publicitarios.',
      },
      {
        q: '¿Y si no consigo grabar bien el ruido?',
        a: 'El informe se apoya sobre todo en las respuestas del cuestionario, igual que un mecánico que primero pregunta. Si la grabación no aporta nada, la aplicación lo dice claramente.',
      },
    ],
  },
  quiz: {
    h2: 'Pruébalo ahora mismo',
    sub: 'Unas cuantas preguntas y verás la causa probable y su urgencia.',
    urgOk: 'Puedes circular',
    urgWarn: 'Al taller esta semana',
    urgStop: 'Detente',
    back: 'Atrás',
    restart: 'Empezar de nuevo',
    cta: 'Informe completo por sonido: en la aplicación',
    schemaMarked: 'Lo rodeado es a lo que apuntan tus respuestas: una hipótesis, no un diagnóstico.',
    schemaWhole: 'El conjunto completo.',
  },
  symptoms: {
    indexTitle: 'Ruidos y síntomas del coche explicados | Pro-Stuk',
    indexDescription: 'Golpeteo, zumbido, chirrido, rechinar: qué significa cada ruido del coche, cuán peligroso es y qué puedes comprobar tú mismo. Guías por síntoma con árbol de diagnóstico.',
    h1: 'Síntomas por el sonido',
    sub: 'Elige el ruido más parecido al tuyo. En cada guía: causas probables, semáforo de peligro, comprobaciones seguras por tu cuenta y un árbol de diagnóstico interactivo.',
    gDvigatel: 'Motor',
    gDvizhenie: 'En marcha',
    gTormozaRul: 'Frenos y dirección',
    gPodveska: 'Suspensión',
    causesH2: 'Posibles causas',
    thCause: 'Causa',
    thLikelihood: 'Probabilidad',
    thDanger: 'Peligro',
    canRideH2: '¿Se puede seguir circulando?',
    checksH2: 'Qué comprobar tú mismo',
    quizH2: 'Acotar la causa con preguntas',
    quizSub: 'Responde a unas preguntas y el árbol de diagnóstico acortará la lista de causas para tu caso.',
    appHelpH2: 'En qué ayuda la aplicación',
    faqH2: 'Preguntas frecuentes',
    lightOk: 'puedes circular',
    lightWarn: 'al taller esta semana',
    lightStop: 'detente',
    mapTitle: 'De dónde viene el ruido',
    mapOk: 'Puedes llegar al taller con tranquilidad',
    mapWarn: 'No lo dejes: revísalo en los próximos días',
    mapStop: 'Al taller sin demora',
    zoneDvigatel: 'el vano motor',
    zoneDvizhenie: 'las ruedas y todo lo que gira con ellas',
    zoneTormoza: 'frenos y dirección, zona de la rueda',
    zonePodveska: 'suspensión, zona de la rueda',
  },
  download: {
    h2: 'La aplicación para Android',
    sub: 'El cuestionario, la grabación del ruido y el informe completo con probabilidades están en la aplicación Pro-Stuk.',
    btn: 'Descargar para Android',
    meta: 'Versión {version} · APK {size} MB · actualizado el {date}',
    installH: 'Cómo instalar el APK',
    steps: [
      'Descarga el archivo con el botón de arriba.',
      'Ábrelo desde la notificación o desde «Descargas».',
      'Permite la instalación desde este origen cuando el teléfono lo pregunte.',
      'Instala la aplicación y ábrela.',
    ],
    playNote: 'Cuando la aplicación esté en Google Play, esta página se actualizará.',
  },
  how: {
    title: 'Cómo funciona el diagnóstico por sonido | Pro-Stuk',
    description:
      'Sin adornos: el cuestionario como herramienta principal, el análisis espectral de la ' +
      'grabación, un modelo de lenguaje y los fallos típicos de cada modelo. Por qué el ' +
      'resultado es una probabilidad.',
    schemaName: 'Cómo funciona el diagnóstico por sonido',
    h1: 'Cómo funciona',
    formH2: 'El cuestionario es la herramienta principal',
    formP:
      'Cualquier diagnóstico empieza con preguntas: cuándo apareció el ruido, a qué se ' +
      'parece, si depende de la velocidad, de las revoluciones, del frenado o de los giros. ' +
      'Las respuestas descartan grupos enteros de causas y aportan más que cualquier ' +
      'algoritmo aplicado a una grabación mala. Por eso en Pro-Stuk el cuestionario va primero, ' +
      'y su lógica es un árbol de decisiones: cada respuesta lleva a la siguiente pregunta, ' +
      'más precisa.',
    recH2: 'Qué pasa con la grabación',
    recP: [
      'La grabación de 15–30 segundos se envía al servidor. Primero la procesa matemática ' +
        'corriente, sin redes neuronales: el espectro del sonido, su color (un chirrido tonal ' +
        'o un ruido de banda ancha), el ritmo de los golpes y su frecuencia, y una estimación ' +
        'de las revoluciones del motor a partir de la banda de baja frecuencia. Cada rasgo ' +
        'recibe una marca de fiabilidad: si la grabación es floja o está llena de ruido, los ' +
        'rasgos se marcan honestamente como poco fiables.',
      'Después, un modelo de lenguaje lo junta todo: las respuestas del cuestionario, los ' +
        'rasgos de la grabación, el propio audio y los datos del coche — marca, año, ' +
        'kilometraje y los fallos típicos de ese modelo. El resultado son 2–4 causas ' +
        'probables con porcentajes, un nivel de urgencia y pistas para el taller.',
    ],
    probH2: 'Por qué el resultado es una probabilidad',
    probP: [
      'Averías distintas suenan igual: el zumbido de un rodamiento de rueda se confunde ' +
        'fácilmente con el ruido de los neumáticos, y el golpeteo de las bieletas de la barra ' +
        'estabilizadora, con piezas de la suspensión mucho más serias. Distinguirlas con ' +
        'seguridad solo se puede en el elevador. Por eso Pro-Stuk no diagnostica ni promete ' +
        'precisión: reparte las probabilidades con honestidad y dice qué conviene comprobar ' +
        'primero.',
      'Una buena grabación mejora la estimación, pero no sustituye al mecánico. Toma el ' +
        'informe como una segunda opinión antes de ir al taller: la conversación se vuelve ' +
        'concreta y resulta más difícil que te vendan una reparación de más.',
    ],
    dataH2: 'Datos',
    dataP:
      'El audio se analiza en el servidor y no se guarda después. No hay cuentas, ni ' +
      'analíticas, ni rastreadores publicitarios. Más detalles en la ',
    dataLink: 'política de privacidad',
    dataTail: '.',
  },
  privacy: {
    title: 'Política de privacidad | Pro-Stuk',
    description:
      'Qué pasa con tus datos en la aplicación Pro-Stuk: el audio se procesa en el servidor y no se conserva, el acceso es con Google o Apple y no hay analítica.',
    h1: 'Política de privacidad',
    updatedLabel: 'Actualizado',
    intro:
      'La aplicación Pro-Stuk recoge lo mínimo: exactamente lo que necesita el diagnóstico y nada más.',
    items: [
      {
        strong: 'La grabación',
        text: 'se envía al servidor solo cuando pulsas el botón de grabar. Sirve para el análisis y no se conserva una vez listo el informe, ni en el servidor ni en ningún archivo.',
      },
      {
        strong: 'El sonido lo analiza Google.',
        text: 'La grabación se envía a la API de Google Gemini, el servicio que la analiza por encargo nuestro. No va acompañada de nada que permita identificarte.',
      },
      {
        strong: 'Los datos del coche',
        text: '(marca, modelo, año, kilometraje) y tus respuestas viajan junto con la grabación: con ellos se ponderan las causas.',
      },
      {
        strong: 'Acceso con Google o Apple.',
        text: 'La aplicación no crea cuentas propias ni pide contraseña. De la tienda recibe solo tu número de usuario permanente; a él se asocian tu garaje y tu saldo de comprobaciones. Nombre, foto y correo no se piden ni se guardan.',
      },
      {
        strong: 'Las compras las gestiona la tienda.',
        text: 'El pago lo cobra Google Play o la App Store; los datos de tu tarjeta nunca llegan a nosotros. Nuestro servidor recibe solo la confirmación de la tienda y acredita las comprobaciones; el recibo se guarda para no acreditar dos veces.',
      },
      {
        strong: 'La dirección IP',
        text: 'la ve el servidor, como en cualquier visita a internet, y se usa únicamente para evitar sobrecargas. Permanece unos minutos en memoria, no llega a ninguna base de datos y no se asocia a ningún informe.',
      },
      {
        strong: 'No hay rastreadores de terceros ni publicidad.',
        text: 'El sitio cuenta visitas anónimas en su propio servidor: sin cookies, sin identificadores y sin ceder datos a nadie. La aplicación no lleva analítica alguna.',
      },
      {
        strong: 'El historial de informes',
        text: 'se guarda solo en tu dispositivo y se borra junto con la aplicación.',
      },
      {
        strong: 'La transmisión va cifrada.',
        text: 'La aplicación habla con el servidor por HTTPS.',
      },
      {
        strong: 'Cómo borrar tus datos.',
        text:
          'Basta con desinstalar la aplicación para borrar el historial de informes del teléfono. La cuenta, junto con el garaje y las comprobaciones restantes, se elimina dentro de la aplicación: «Ajustes» → «Eliminar la cuenta». El borrado es definitivo y las comprobaciones no usadas no se reembolsan.',
      },
      {
        strong: 'La aplicación no es para niños.',
        text: 'Está pensada para conductores y no se dirige a menores.',
      },
    ],
    outro:
      'El micrófono se activa solo mientras se graba el sonido y solo cuando tú lo pides. El informe es una estimación de probabilidad, no un diagnóstico; la decisión de reparar la toma el mecánico tras revisar el coche.',
    contactTitle: 'Cómo contactarnos',
    contactText:
      'La aplicación y el sitio Pro-Stuk los lleva {operator}. Dudas sobre tus datos, quejas y solicitudes de borrado:',
    changes:
      'Si esta política cambia, cambiará con ella la fecha de actualización que aparece arriba.',
  },
  og: {
    tagline: 'Encuentra la avería por el sonido',
  },
  notFound: {
    title: 'Página no encontrada — Pro-Stuk',
    description:
      'Esta página no existe en el sitio. Vuelve al inicio o abre las guías de síntomas por sonido.',
    h1: 'Página no encontrada',
    text:
      'La dirección tiene una errata o la página se ha movido. El ruido que te trajo hasta aquí sigue ahí: empieza por el inicio o abre las guías de síntomas.',
    home: 'Ir al inicio',
  },
};
