import type { Dict } from './types';

export const pt: Dict = {
  brand: 'Stuk',
  nav: {
    symptoms: 'Sintomas',
    how: 'Como funciona',
    articles: 'Artigos',
    analytics: 'Estatísticas',
    lang: 'Idioma',
  },
  footer: {
    disclaimer:
      'O Stuk dá uma estimativa de probabilidades a partir das suas respostas e do ruído, ' +
      'não um diagnóstico. A decisão final sobre o reparo é do mecânico, depois de ver o carro.',
    how: 'Como funciona',
    privacy: 'Política de privacidade',
    ruOnly: 'Guias por sintoma e artigos (em russo)',
  },
  home: {
    title: 'Stuk — diagnóstico do carro pelo som',
    description:
      'Grave o ruído e descubra o que o carro tem. Um questionário curto, análise da ' +
      'gravação e um relatório: causas prováveis com percentuais, semáforo de urgência ' +
      'e o que dizer na oficina.',
    schemaDescription:
      'Diagnóstico de falhas do carro por sintomas e som: questionário, gravação do ruído ' +
      'e relatório com as causas prováveis.',
    h1: 'Grave o ruído e descubra o que o carro tem',
    sub:
      'Um questionário curto e uma gravação de 15 a 30 segundos. Em troca: causas prováveis ' +
      'com percentuais, semáforo de urgência e as palavras certas para a conversa na oficina.',
    cta: 'Baixar o aplicativo',
    ctaNote: 'Android · de graça por enquanto',
    howH2: 'Como funciona',
    steps: [
      {
        title: '1. Perguntas',
        text: 'Quando o ruído aparece e com o que se parece — a árvore de perguntas vai estreitando a causa.',
      },
      {
        title: '2. Som',
        text: 'Gravação de 15 a 30 segundos: o espectro, o ritmo das batidas e a rotação do motor são calculados no servidor.',
      },
      {
        title: '3. Relatório',
        text: 'Causas com percentuais, semáforo de urgência e o que dizer na oficina.',
      },
    ],
    faqH2: 'Perguntas frequentes',
    faq: [
      {
        q: 'Isso é um diagnóstico exato?',
        a: 'Não. O Stuk dá uma estimativa de probabilidades: uma lista de causas possíveis com percentuais e o nível de urgência. O diagnóstico exato quem faz é o mecânico depois de examinar o carro — o relatório serve para você chegar preparado.',
      },
      {
        q: 'Quanto custa?',
        a: 'Por enquanto é de graça: até 3 relatórios completos de som por dia em cada aparelho. O veredito preliminar do questionário não tem limite.',
      },
      {
        q: 'Quais carros são atendidos?',
        a: 'Carros de passeio com motor a gasolina ou diesel e câmbio manual ou automático. Marca, ano e quilometragem entram na análise.',
      },
      {
        q: 'O que acontece com a minha gravação?',
        a: 'O áudio vai para o servidor, é analisado e não fica guardado depois. Não há contas nem rastreadores de publicidade.',
      },
      {
        q: 'E se eu não conseguir gravar o ruído?',
        a: 'O relatório se apoia antes de tudo nas respostas do questionário — como um mecânico que primeiro pergunta. Se a gravação não disser nada, o aplicativo avisa com franqueza.',
      },
    ],
  },
  download: {
    h2: 'O aplicativo para Android',
    sub: 'O questionário, a gravação do ruído e o relatório completo com probabilidades estão no aplicativo Stuk.',
    btn: 'Baixar para Android',
    meta: 'Versão {version} · APK {size} MB · atualizado em {date}',
    installH: 'Como instalar o APK',
    steps: [
      'Baixe o arquivo pelo botão acima.',
      'Abra-o pela notificação ou em «Downloads».',
      'Permita a instalação desta origem quando o telefone perguntar.',
      'Instale o aplicativo e abra-o.',
    ],
    playNote: 'Quando o aplicativo chegar à Google Play, esta página será atualizada.',
  },
  how: {
    title: 'Como funciona o diagnóstico pelo som | Stuk',
    description:
      'Sem enfeites: o questionário como ferramenta principal, a análise espectral da ' +
      'gravação, um modelo de linguagem e os defeitos típicos de cada modelo. Por que o ' +
      'resultado é uma probabilidade.',
    schemaName: 'Como funciona o diagnóstico pelo som',
    h1: 'Como funciona',
    formH2: 'O questionário é a ferramenta principal',
    formP:
      'Todo diagnóstico começa com perguntas: quando o ruído apareceu, com o que se parece, ' +
      'se depende da velocidade, da rotação, da frenagem, das curvas. As respostas eliminam ' +
      'grupos inteiros de causas — isso vale mais do que qualquer algoritmo aplicado a uma ' +
      'gravação ruim. Por isso o questionário vem primeiro no Stuk, e sua lógica é uma árvore ' +
      'de decisão: cada resposta leva à pergunta seguinte, mais precisa.',
    recH2: 'O que acontece com a gravação',
    recP: [
      'A gravação de 15 a 30 segundos vai para o servidor. Primeiro é processada por ' +
        'matemática comum, sem redes neurais: o espectro do som, sua cor (um chiado tonal ou ' +
        'ruído de banda larga), o ritmo das batidas e sua frequência, uma estimativa da ' +
        'rotação do motor pela faixa de baixa frequência. Cada indício recebe uma marca de ' +
        'confiabilidade: se a gravação estiver baixa ou cheia de ruído, os indícios são ' +
        'marcados honestamente como pouco confiáveis.',
      'Depois um modelo de linguagem junta tudo: as respostas do questionário, os indícios da ' +
        'gravação, o próprio áudio e os dados do carro — marca, ano, quilometragem e os ' +
        'defeitos típicos daquele modelo. O resultado são de 2 a 4 causas prováveis com ' +
        'percentuais, um nível de urgência e dicas para a oficina.',
    ],
    probH2: 'Por que o resultado é uma probabilidade',
    probP: [
      'Falhas diferentes soam igual: o zumbido de um rolamento de roda se confunde facilmente ' +
        'com o barulho dos pneus, e a batida das bieletas da barra estabilizadora, com peças ' +
        'bem mais sérias da suspensão. Separar uma coisa da outra com certeza só no elevador. ' +
        'Por isso o Stuk não dá diagnóstico nem promete exatidão — ele distribui as ' +
        'probabilidades com honestidade e diz o que verificar primeiro.',
      'Uma boa gravação melhora a estimativa, mas não substitui o mecânico. Encare o relatório ' +
        'como uma segunda opinião antes da oficina: a conversa fica objetiva e fica mais ' +
        'difícil empurrarem um serviço desnecessário.',
    ],
    dataH2: 'Dados',
    dataP:
      'O áudio é analisado no servidor e não fica guardado depois. Não há contas, nem ' +
      'ferramentas de análise, nem rastreadores de publicidade. Mais detalhes na ',
    dataLink: 'política de privacidade',
    dataTail: '.',
  },
  privacy: {
    title: 'Política de privacidade | Stuk',
    description:
      'O que acontece com os seus dados no aplicativo Stuk: o áudio é processado no servidor ' +
      'e não fica guardado após a análise, não há contas nem ferramentas de análise.',
    h1: 'Política de privacidade',
    intro:
      'O aplicativo Stuk coleta o mínimo de dados — exatamente o que o diagnóstico exige.',
    items: [
      {
        strong: 'A gravação',
        text: 'só vai para o servidor quando você aperta o botão, serve para a análise e não fica guardada depois.',
      },
      {
        strong: 'Os dados do carro',
        text: '(marca, modelo, ano, quilometragem) e as respostas do questionário são enviados junto com a gravação — são necessários para avaliar as causas.',
      },
      {
        strong: 'Não há contas.',
        text: 'O aplicativo funciona sem cadastro; o aparelho recebe um identificador aleatório para o limite diário de relatórios.',
      },
      {
        strong: 'Não há rastreadores de terceiros.',
        text: 'O site conta visitas anônimas no próprio servidor — sem cookies, sem identificadores e sem repassar nada a ninguém. No aplicativo não há análise alguma.',
      },
      {
        strong: 'O histórico de relatórios',
        text: 'fica apenas no seu aparelho e é apagado junto com o aplicativo.',
      },
    ],
    outro:
      'O microfone é usado somente no momento da gravação e apenas por uma ação sua. O ' +
      'relatório é uma estimativa de probabilidades, não um diagnóstico; a decisão de ' +
      'consertar é do mecânico, depois de examinar o carro.',
  },
};
