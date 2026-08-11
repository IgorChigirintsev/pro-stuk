import type { SymptomTr } from '../types';

/** Разборы симптомов по-португальски. Структура — из русских файлов рядом. */
export const pages: Record<string, SymptomTr> = {
  'stuk-v-dvigatele': {
    h1: 'Batida no motor',
    metaTitle: 'Motor batendo: causas, gravidade e o que fazer | Stuk',
    description:
      'Por que o motor bate: do tiquetaque inofensivo das válvulas às bronzinas gastas. Como reconhecer uma batida perigosa, se dá para rodar e o que conferir sozinho.',
    intro: [
      'A batida no motor é o sintoma com a maior variação de gravidade: atrás da mesma palavra se escondem tanto o estalido inofensivo dos bicos injetores quanto bronzinas de virabrequim gastas, com as quais cada quilômetro aproxima a retífica. A boa notícia é que batidas diferentes soam diferente e aparecem em condições diferentes — por esses sinais o círculo de causas se fecha rápido.',
      'As perguntas com que começa qualquer motorista de oficina: onde bate (em cima do motor ou lá do fundo), quando (frio, quente, sob carga) e se o som muda com a rotação. Um tiquetaque leve e rápido em cima costuma ser o comando de válvulas. Uma batida surda vinda de baixo, que acelera quando se dá um toque no acelerador e cresce sob carga, é a variante preocupante.',
    ],
    causes: [
      { name: 'Folga de válvulas grande ou tuchos hidráulicos', likelihood: 'Muito comum — a causa clássica do tiquetaque de cima' },
      { name: 'Estalido normal dos bicos (injeção direta e diesel)', likelihood: 'Comum — e não é defeito' },
      { name: 'Acessórios: polias, suportes, embreagem do compressor do ar', likelihood: 'Comum quando a batida não depende do acelerador' },
      { name: 'Detonação na aceleração (batida de pino)', likelihood: 'Comum depois de abastecer com gasolina de octanagem baixa' },
      { name: 'Bronzinas de mancal e de biela', likelihood: 'Mais raro, mas é o cenário perigoso' },
    ],
    canRide: [
      'Depende do caráter da batida. Com um tiquetaque uniforme em cima dá para rodar: o comando de válvulas se desgasta em meses, não em uma viagem — mas marque a regulagem para as próximas duas semanas. Com o estalido dos bicos num motor de injeção direta não há nada a fazer: é o funcionamento normal do sistema de combustível.',
      'Uma batida surda vinda do fundo do motor, que acelera com a rotação e fica mais forte sob carga, é motivo para parar. Assim soam bronzinas gastas — os mancais em que o virabrequim gira. Continuar rodando pode terminar em bronzina fundida ou motor travado; melhor não chegar à oficina por conta própria e chamar o guincho.',
    ],
    checks: [
      'Conferir o nível de óleo na vareta: nível baixo acompanha e amplifica as batidas do motor, e batida de bronzina com pressão de óleo baixa piora rápido.',
      'Ouvir de onde vem o som: fique junto ao capô aberto — o tiquetaque das válvulas se ouve em cima, a batida de bronzina é surda e vem lá do fundo, embaixo.',
      'Dar uma acelerada suave em ponto morto: uma batida que acelera junto com a rotação e soa mais forte sob carga é mais séria do que aquela que vive por conta própria.',
      'Lembrar do último abastecimento: um tinido metálico ao acelerar depois de uma gasolina duvidosa parece detonação e costuma sumir com um tanque de combustível bom.',
      'Verificar se a luz de pressão de óleo está acesa: a lanterninha vermelha junto com a batida significa desligar o motor imediatamente.',
    ],
    appHelp:
      'O aplicativo Stuk conduz pelas mesmas perguntas que um motorista de oficina faz, grava o som e avalia seu espectro e ritmo: com que frequência vêm as batidas e como isso se relaciona com a rotação — nas válvulas e no virabrequim essa relação é diferente. No relatório vêm causas prováveis com percentuais, o semáforo de urgência e frases para a conversa na oficina.',
    faq: [
      {
        q: 'Por que o motor bate só frio?',
        a: 'Enquanto o motor não aquece, as folgas entre as peças são maiores e o óleo grosso ainda não chegou a todos os pontos. Tuchos tiquetaqueando ou uma batida surda dos pistões nos primeiros minutos após a partida a frio, que some por completo com o aquecimento, costuma ser assunto de observação e não de emergência.',
      },
      {
        q: 'Como soa a batida mais perigosa do motor?',
        a: 'Surda, grave, vinda do fundo do motor; acelera com a rotação e cresce sob carga — ao acelerar ou em subida. Assim batem as bronzinas de biela e de mancal. Com esse som, melhor não dirigir e levar o carro ao mecânico o quanto antes.',
      },
      {
        q: 'Uma batida pode ser normal?',
        a: 'Pode. Motores de injeção direta (TSI, GDI) e diesel sempre estalam os bicos — o som é igual frio e quente e se ouve mais forte do lado de fora do que dentro do carro. É funcionamento normal, não defeito.',
      },
    ],
  },

  'skrip-tormozov': {
    h1: 'Freio chiando',
    metaTitle: 'Freios chiando: é perigoso ou não, causas e o que fazer | Stuk',
    description:
      'Por que os freios chiam: a película de ferrugem da manhã, o sensor de desgaste das pastilhas ou um problema nos discos. Como distinguir um chiado inofensivo de um aviso.',
    intro: [
      'O chiado ao frear é aquele caso raro em que a causa mais comum é também a mais inofensiva. Durante a noite, depois da chuva ou da lavagem, os discos ficam cobertos por uma fina película de ferrugem; as primeiras freadas a raspam — daí o chiado. Se em dois minutos de rodagem o som sumiu, não há nada a fazer: é a vida normal de qualquer carro com freio a disco.',
      'Chiar a cada freada é outra história. Muitas pastilhas trazem um sensor metálico de desgaste: uma lâmina que encosta no disco de propósito e guincha quando o material de atrito chega ao limite. É um aviso de fábrica: mande conferir as pastilhas antes que o chiado vire rangido de metal contra metal — esse já significa discos estragados e distância de frenagem maior.',
    ],
    causes: [
      { name: 'Película de ferrugem após parada, chuva ou lavagem', likelihood: 'O mais comum — se o chiado some nas primeiras freadas' },
      { name: 'Sensor de desgaste: pastilhas no fim', likelihood: 'Comum — se guincha a cada freada' },
      { name: 'Pastilhas endurecidas ou baratas, pó entre pastilha e disco', likelihood: 'Comum; incômodo, mas não perigoso' },
      { name: 'Pastilhas gastas até o metal (rangido)', likelihood: 'Se o aviso foi ignorado' },
    ],
    canRide: [
      'Com o chiado da manhã, que some depois das primeiras freadas, dá para rodar sem restrições: algumas pisadas suaves no pedal limpam os discos e o assunto fica encerrado até a próxima chuva.',
      'Com guincho constante também dá para rodar — os freios ainda trabalham por inteiro —, mas marque a revisão para esta semana e não para «um dia desses»: se é o sensor de desgaste, o próximo estágio é o rangido, pastilhas gastas até a base e uma conta que já inclui discos. Metal contra metal é sinal de parada: só com cuidado até a oficina, freando cedo e com suavidade.',
    ],
    checks: [
      'Observar o padrão: chiado só nas primeiras freadas depois de parado ou com umidade é ferrugem; a cada freada é motivo de revisão.',
      'Olhar entre os raios da roda: em muitos carros a pastilha externa fica visível. Material de atrito com menos de 3–4 mm pede troca.',
      'Ouvir se é um lado ou os dois: guincho de um lado só aponta mais para o sensor de desgaste ou uma pinça travando ali.',
      'Verificar se há um apito rodando sem frear, que muda ao encostar no pedal — é o sensor de desgaste raspando o disco antes mesmo da pisada.',
      'Prestar atenção ao pedal e à trajetória: puxar para um lado ao frear, pedal pulsando ou «longo» são coisas mais sérias que o chiado e significam oficina sem adiar.',
    ],
    appHelp:
      'O aplicativo Stuk separa o cenário inofensivo do preocupante com as mesmas perguntas — quando chia e se o som some — e a gravação ajuda a distinguir o guincho agudo do sensor do rangido metálico. No relatório vêm causas prováveis com percentuais e um semáforo: pode circular, à oficina esta semana ou pare.',
    faq: [
      {
        q: 'Por que os freios chiam de manhã e na chuva?',
        a: 'Sobre discos de ferro fundido forma-se, em poucas horas de ar úmido, uma fina camada de ferrugem. As primeiras freadas a raspam — daí o chiado e o leve arranhado, que somem rápido. É normal e não exige reparo.',
      },
      {
        q: 'O que é o sensor de desgaste das pastilhas?',
        a: 'Uma lâmina metálica na pastilha que começa a encostar no disco e a guinchar alto quando o material de atrito chega ao limite. É um aviso proposital: se ouvir guincho constante, marque a troca das pastilhas antes que comece o rangido.',
      },
      {
        q: 'Qual a diferença entre chiado e rangido?',
        a: 'Chiado e guincho são sons agudos com os freios ainda trabalhando por inteiro. Rangido é um ruído áspero de metal contra metal: o material de atrito acabou e a base de aço da pastilha esfrega o disco. Com rangido não se roda — só com cuidado até a oficina.',
      },
    ],
  },

  'gul-pri-dvizhenii': {
    h1: 'Zumbido em movimento',
    metaTitle: 'Zumbido em movimento: rolamento, pneus ou câmbio | Stuk',
    description:
      'Zumbido constante em velocidade: rolamento de roda, pneus, câmbio ou diferencial. Testes simples sem oficina — o teste em ponto morto e curvas suaves — para estreitar a causa.',
    intro: [
      'Um zumbido constante que aparece com a velocidade e cresce junto com ela vem quase sempre de uma de duas fontes: do rolamento de roda — o mancal em que a roda gira — ou dos pneus. Dá para distinguir sem oficina. O rolamento zumba igual em qualquer asfalto, lembra um avião decolando ao longe e muda com frequência nas curvas suaves. Os pneus reagem ao piso: no asfalto novo ficam mais quietos, no áspero mais altos; zumbem especialmente os pneus de inverno, os de uso misto e os desgastados de forma irregular.',
      'Menos vezes a fonte é a transmissão: câmbio, diferencial ou cardã em carros de tração traseira e integral. O teste em ponto morto separa as versões: acelere até a velocidade em que se ouve o zumbido, ponha em ponto morto e deixe rolar. Se o zumbido continua, está ligado ao giro das rodas — rolamentos, pneus, piso. Se some junto com a rotação do motor, é no motor e no que ele gira que se deve procurar.',
    ],
    causes: [
      { name: 'Rolamento de roda', likelihood: 'O mais comum — zumbido constante, cresce com a velocidade, piso não importa' },
      { name: 'Ruído dos pneus', likelihood: 'Comum — depende do piso; pneus de inverno e gastos são mais altos' },
      { name: 'Câmbio ou diferencial', likelihood: 'Mais raro — o uivo muda com a marcha ou ao pisar no acelerador' },
      { name: 'Cardã (tração traseira e integral)', likelihood: 'Zumbido com vibração no assoalho numa faixa estreita de velocidade' },
      { name: 'Ruído aerodinâmico: borrachas das portas, bagageiro de teto', likelihood: 'Só acima de 70–90 km/h' },
    ],
    canRide: [
      'Com o rolamento zumbindo dá para rodar, mas não é um som para arrastar por meses: um rolamento gasto vai ganhando folga — jogo livre da roda — e, num caso descuidado, pode travar. O plano sensato é diagnóstico dentro de uma semana e adiar até lá as viagens longas em velocidade alta. Se o zumbido cresceu de repente ou veio acompanhado de vibração, não deixe para depois.',
      'Ruído de pneu e ruído aerodinâmico são questão de conforto, não de segurança: com eles dá para rodar sem restrições. Uivo de câmbio ou diferencial também não obriga a parar no acostamento, mas não deve se arrastar: cedo, muitas vezes basta trocar o óleo; tarde, o conserto com eixos e engrenagens custa várias vezes mais.',
    ],
    checks: [
      'Teste em ponto morto: acelere até a velocidade do zumbido, ponha em ponto morto e role. O zumbido ficou — rodas e rolamentos; sumiu junto com a rotação — motor e transmissão.',
      'Curvas abertas numa reta segura: se num arco suave para um lado o zumbido diminui e para o outro aumenta, parece rolamento, e o lado indica qual.',
      'Comparar pisos: percorra um trecho de asfalto novo e outro áspero. Uma diferença clara de volume aponta para os pneus.',
      'Olhar a banda de rodagem e conferir a pressão: desgaste «em serra» — degraus nas bordas dos blocos — deixa os pneus barulhentos e sugere alinhamento fora ou amortecedores cansados.',
      'No câmbio manual, verificar se o uivo muda em marchas diferentes na mesma velocidade; na tração traseira, se junto com o zumbido aparece um tremor no assoalho numa faixa estreita de velocidade.',
    ],
    appHelp:
      'O aplicativo Stuk conduz pelas mesmas perguntas — o zumbido continua em ponto morto, muda em curva e com o piso — e ajuda a gravar o som para comparar seu caráter com casos típicos. No relatório vêm causas prováveis com percentuais e uma conclusão: siga tranquilo, planeje a oficina ou verifique sem adiar.',
    faq: [
      {
        q: 'Como distinguir o zumbido do rolamento do ruído dos pneus?',
        a: 'Pela reação ao piso e às curvas. O ruído dos pneus muda com o asfalto: no novo é mais baixo, no áspero mais alto. O rolamento zumba igual em todo lugar, mas costuma responder às curvas suaves, quando a carga passa para a roda externa. Olhar a banda de rodagem também ajuda: pneus gastos de forma irregular zumbem sozinhos.',
      },
      {
        q: 'É perigoso rodar com o rolamento zumbindo?',
        a: 'No começo não, mas não convém arrastar: com o tempo aparece folga, a roda começa a balançar e, no caso extremo, o rolamento trava. A verificação é simples: no elevador o mecânico gira as rodas e acha o cubo barulhento em poucos minutos. Prazo sensato para a visita: dentro de uma semana.',
      },
      {
        q: 'Por que o zumbido muda nas curvas?',
        a: 'Na curva o peso do carro passa para as rodas externas. Se zumbe o rolamento direito, ao virar à esquerda a carga sobre ele aumenta e o zumbido cresce; ao virar à direita, diminui. Esse padrão ajuda a saber o lado antes mesmo da oficina: guarde e conte ao mecânico.',
      },
    ],
  },

  'stuk-v-podveske': {
    h1: 'Batida na suspensão',
    metaTitle: 'Batida na suspensão: o que bate e dá para rodar | Stuk',
    description:
      'O que bate na suspensão: bieletas da barra estabilizadora, buchas, caixa de direção ou mola quebrada. Como distinguir as batidas pelo caráter e quando ir à oficina.',
    intro: [
      'A suspensão de um carro de passeio são algumas dezenas de articulações, buchas de borracha e coxins, e com a idade a folga — o jogo livre — em alguma delas é quase inevitável. Uma peça frouxa responde a cada irregularidade com uma batida: a suspensão comprime e volta, e a peça gasta bate no seu encaixe. A boa notícia é que as primeiras a ceder costumam ser as peças baratas — as bieletas da barra estabilizadora, pequenas hastes com articulações que se desgastam antes de tudo.',
      'O caráter do som diz muito antes mesmo do elevador. Uma batida surda e frequente em piso ondulado e juntas é a assinatura das bieletas. Batidas isoladas em buracos e lombadas apontam para as buchas — as articulações de borracha por onde as bandejas se fixam à carroceria — ou para amortecedores cansados. Uma batida que sobe direto no volante e se sente nas palmas é folga na caixa de direção. E um rangido «de cama velha» não é batida nenhuma, e sim borracha ressecada nas buchas: o mais inofensivo da lista.',
    ],
    causes: [
      { name: 'Bieletas da barra estabilizadora', likelihood: 'O mais comum — batida surda e frequente em ondulações' },
      { name: 'Buchas das bandejas ou amortecedores', likelihood: 'Comum — batidas surdas isoladas nos buracos' },
      { name: 'Folga na caixa de direção', likelihood: 'Mais raro — a batida sobe no volante e se sente nas mãos' },
      { name: 'Buchas da barra estabilizadora, buchas ressecadas (rangido, não batida)', likelihood: 'Comum — sobretudo no frio e na umidade' },
      { name: 'Mola de suspensão quebrada', likelihood: 'Raro — de repente após um buraco, com um canto do carro baixo' },
    ],
    canRide: [
      'Com a maioria das batidas de suspensão dá para rodar: bieletas, buchas e coxins não falham de uma vez. Ainda assim, não convém adiar o diagnóstico por meses — uma peça arrebentada transmite os impactos adiante e acelera o desgaste das vizinhas, e coisas mais sérias podem bater de forma parecida ao ouvido. O prazo sensato é marcar a revisão em uma ou duas semanas e, até lá, passar devagar pelos buracos grandes.',
      'Dois cenários pedem mais atenção. Uma batida que sobe no volante é direção, item de segurança: revisão nos próximos dias e, se o volante ficou «vazio» na posição central ou o carro vagueia na faixa, sem adiar. Um estalo que apareceu de repente após um buraco, junto com um canto da carroceria baixo, é o quadro clássico de mola quebrada: até a oficina dirija com suavidade, pois a espira quebrada pode se deslocar e danificar o pneu.',
    ],
    checks: [
      'Balançar o carro parado pela lateral acima de cada roda: rangidos de buchas e coxins muitas vezes se reproduzem ali mesmo.',
      'Observar o padrão: bate em piso ondulado — mais provável as bieletas; em buracos isolados — buchas e amortecedores.',
      'Descobrir se o som é dianteiro ou traseiro e se sobe no volante: uma batida sentida nas palmas que diminui ao segurar o volante levemente tensionado indica folga na caixa de direção.',
      'Empurrar cada canto do carro para baixo e soltar: a carroceria deve voltar ao lugar sem balançar. Se continuar oscilando, o amortecedor está cansado.',
      'Olhar por trás da roda, de baixo, sem desmontar nada: uma espira quebrada muitas vezes se vê a olho nu, e de quebra dá para notar se um canto do carro está mais baixo.',
    ],
    appHelp:
      'O aplicativo Stuk percorre as mesmas bifurcações que um mecânico na primeira inspeção: que som é, em quais irregularidades, na frente ou atrás, se sobe no volante. A gravação evita perder detalhes até a visita, e no relatório vêm causas prováveis com percentuais e um semáforo claro: pode rodar, mostre esta semana ou verifique com urgência.',
    faq: [
      {
        q: 'É perigoso rodar com batida na suspensão?',
        a: 'Na maioria das vezes uma batida não significa quebra imediata: bieletas e buchas se desgastam aos poucos. Mas a folga cresce e acaba com as peças vizinhas, então um prazo sensato de diagnóstico é de uma a duas semanas. As exceções são a batida no volante e o estalo de mola quebrada: com elas, oficina nos próximos dias.',
      },
      {
        q: 'Por que bate em ondulações pequenas e os buracos grandes passam em silêncio?',
        a: 'É a assinatura típica das bieletas: suas pequenas articulações martelam justamente em piso ondulado, paralelepípedo e juntas, onde a suspensão trabalha muito e com curso pequeno. Num buraco grande essa folga nem sempre se ouve. Atrás, as bieletas traseiras e as buchas do eixo batem do mesmo jeito.',
      },
      {
        q: 'Pode ser outra coisa que não a suspensão?',
        a: 'Pode, e não é raro. Uma batida surda atrás vem do macaco ou do estepe soltos no porta-malas; uma batidinha na frente e em cima, da folga na trava do capô; um chacoalho embaixo, dos coxins do escapamento. Um «tump» único na primeira arrancada após muitos dias parado são as pastilhas grudadas nos discos, e isso é inofensivo.',
      },
    ],
  },
};
