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

  'gul-podshipnika-stupitsy': {
    h1: 'Zumbido do rolamento de roda',
    metaTitle: 'Rolamento de roda zumbindo: como reconhecer | Stuk',
    description:
      'Como soa um rolamento de roda gasto, como distingui-lo do ruído dos pneus, qual roda está zumbindo e por quanto tempo dá para rodar assim.',
    intro: [
      'O rolamento de roda é a peça sobre a qual a roda gira. Quando ele se desgasta, surge um zumbido constante que cresce com a velocidade: muita gente compara com um avião decolando ou com o zumbido de um transformador. Começa quase imperceptível a partir de 60–80 km/h, com o tempo se ouve em qualquer velocidade e passa a chegar como vibração.',
      'A dificuldade é separá-lo do ruído dos pneus: zumbem de forma parecida. Há dois testes caseiros confiáveis. O primeiro é o piso: o ruído da borracha muda com o tipo de asfalto, o zumbido do rolamento é igual em toda parte. O segundo são as mudanças de faixa suaves em velocidade: se num arco aberto o zumbido muda, é quase certo que seja rolamento — o do lado carregado.',
    ],
    causes: [
      { name: 'Rolamento de roda gasto', likelihood: 'O mais comum, quando o zumbido é constante e ignora o piso' },
      { name: 'Ruído dos pneus (inverno, uso misto, desgaste irregular)', likelihood: 'Muito comum — o grande sósia do rolamento' },
      { name: 'Diferencial ou coroa e pinhão (tração traseira e integral)', likelihood: 'Mais raro; o tom desse zumbido muda com o acelerador' },
      { name: 'Rolamento central do cardã', likelihood: 'Raro, só em carros com cardã' },
    ],
    canRide: [
      'No começo dá, mas com ressalvas. Um rolamento gasto não se destrói de uma vez: do primeiro zumbido ao estado crítico costumam passar milhares de quilômetros. O processo, porém, só anda numa direção, e o final é desagradável: folga na roda, alojamento estragado e, no extremo, um cubo que trava em movimento.',
      'Por isso a regra é simples: notou o zumbido — leve o carro à oficina em uma ou duas semanas e adie até lá as viagens longas em velocidade alta. Se o zumbido cresceu de repente, apareceu vibração, a roda tem folga ou o carro puxa para um lado, vá ao diagnóstico já e não pela estrada.',
    ],
    checks: [
      'Teste do piso: percorra o mesmo trecho em asfaltos diferentes. O zumbido não mudou — mais provável o rolamento; ficou mais baixo no piso liso — mais provável os pneus.',
      'Teste da curva: numa via vazia, a 60–80 km/h, mude de faixa com suavidade. O zumbido caiu ao virar à direita e cresceu ao virar à esquerda — o lado direito está carregado, provável rolamento direito; e vice-versa.',
      'Verificação em ponto morto: acelere e role em ponto morto. O zumbido ficou — a fonte gira com as rodas, não com o motor.',
      'Olhar a banda de rodagem: desgaste «em serra» e manchas de desgaste irregular deixam a borracha barulhenta e apontam para o alinhamento.',
      'Depois da viagem, aproximar com cuidado a mão dos cubos (sem tocar no disco de freio, que está quente): um cubo bem mais quente de um lado é um indício a mais.',
    ],
    appHelp:
      'O aplicativo Stuk faz as mesmas perguntas de controle — sobre o piso, as curvas e o rolar em ponto morto —, grava o zumbido e avalia seu caráter: o ruído de banda larga dos pneus e o zumbido de um rolamento aparecem diferentes no espectro. No relatório vêm as probabilidades das causas, a urgência e uma dica de qual lado citar ao mecânico.',
    faq: [
      {
        q: 'Por que o zumbido muda nas curvas?',
        a: 'Na curva o peso passa para as rodas externas. Se ao virar à esquerda o zumbido cresce, o lado carregado é o direito — então provavelmente zumbe o rolamento direito. Ao virar à direita, o contrário. Vale guardar esse sinal e citá-lo na oficina: ele corta a busca pela metade.',
      },
      {
        q: 'Por quanto tempo dá para rodar com o rolamento zumbindo?',
        a: 'Não há número exato: dos primeiros sintomas a uma folga perigosa costumam passar milhares de quilômetros, mas a velocidade do desgaste é imprevisível. Meio-termo sensato: marcar o diagnóstico em uma ou duas semanas e não planejar viagens longas em velocidade alta antes disso.',
      },
      {
        q: 'Dá para confundir rolamento com pneu?',
        a: 'Com facilidade — é o erro mais comum. Dois sinais os separam: o ruído dos pneus depende do piso e não muda em curva, enquanto o zumbido do rolamento é igual em qualquer asfalto e reage à transferência de peso nas curvas abertas.',
      },
    ],
  },

  'stuk-na-nerovnostyah': {
    h1: 'Batidas em irregularidades',
    metaTitle: 'Batidas em buracos e ondulações: causas e o que conferir | Stuk',
    description:
      'Batidas em irregularidades: batida frequente em piso ondulado, batidas isoladas nos buracos ou batida no volante. Quais peças são culpadas e se dá para rodar.',
    intro: [
      'Uma batida que aparece só nas irregularidades — juntas, paralelepípedo, lombadas — vem quase sempre do trem de rodagem. Ao passar por um desnível a suspensão comprime e volta, e se em alguma articulação surgiu folga, a peça bate no seu encaixe a cada curso. Em carros com mais de cinco a sete anos isso é rotina, e a culpa costuma ser de peças de desgaste baratas, não de conjuntos caros.',
      'O desenho da batida reduz a lista de suspeitos. Uma batidinha surda e frequente em piso ondulado na frente é o clássico das bieletas da barra estabilizadora; o mesmo desenho atrás são as bieletas traseiras ou as buchas do eixo (as buchas de borracha por onde o eixo se prende à carroceria). Batidas isoladas nos buracos são buchas das bandejas ou amortecedores cansados. Caso à parte: uma batida no ritmo do giro da roda que apareceu depois de uma troca de pneus recente — podem ser parafusos frouxos, e essa hipótese se verifica primeiro.',
    ],
    causes: [
      { name: 'Bieletas da barra estabilizadora', likelihood: 'O mais comum — batida frequente na frente em ondulações' },
      { name: 'Suspensão traseira: bieletas traseiras, buchas do eixo', likelihood: 'Comum — se a batida vem de trás' },
      { name: 'Buchas das bandejas ou amortecedores', likelihood: 'Comum — batidas isoladas nos buracos' },
      { name: 'Folga na caixa de direção', likelihood: 'Mais raro — a batida sobe direto no volante' },
      { name: 'Parafusos de roda frouxos', likelihood: 'Raro — mas é a primeira coisa a conferir depois de trocar pneus' },
    ],
    canRide: [
      'Com a batida típica de bieletas ou buchas dá para rodar: essas peças não falham de repente, e uma ou duas semanas até o diagnóstico não mudam nada se você passar devagar pelos buracos grandes. O próprio diagnóstico da suspensão é rápido: no elevador o mecânico sacode as articulações e acha a folga em poucos minutos. Arrastar por meses continua sendo má ideia: uma articulação gasta repassa os impactos às peças vizinhas e acelera o desgaste delas.',
      'Diferente é uma batida ritmada, no compasso do giro da roda, nos primeiros dias após a troca de pneus: aí é motivo para parar na primeira oportunidade e conferir o aperto dos parafusos de todas as rodas com a chave. Uma roda com parafusos frouxos estraga os furos do aro e, no pior caso, pode se soltar em movimento. Uma batida que sobe no volante também não espera: a direção é item de segurança e se revisa nos próximos dias.',
    ],
    checks: [
      'Se as rodas foram removidas ou rodiziadas há pouco, confira primeiro o aperto dos parafusos de todas elas com a chave, antes de qualquer outra hipótese.',
      'Notar o desenho da batida: batidinha frequente em ondulações e batidas isoladas nos buracos são peças diferentes, e esse detalhe encurta na hora a busca do mecânico.',
      'Descobrir se a batida é da frente ou de trás: ande devagar com os vidros entreabertos ao lado de um muro ou cerca — o som refletido se ouve bem melhor.',
      'Segurar o volante levemente tensionado num trecho ruim: se a batida sentida nas palmas diminui, parece folga na caixa de direção, e vale contar isso na oficina.',
      'Descartar o simples: tirar os objetos soltos do porta-malas, conferir a fixação do estepe e do macaco, apertar o capô fechado — uma trava com folga bate parecido com a suspensão.',
    ],
    appHelp:
      'O aplicativo Stuk faz as mesmas perguntas desta página, só que passo a passo: que batida exatamente, onde se ouve, como se comporta em diferentes irregularidades. Com as respostas e a gravação monta um relatório com causas prováveis e semáforo de urgência — com ele fica mais fácil decidir entre ir à oficina amanhã ou quando der.',
    faq: [
      {
        q: 'Por que a batida só se ouve nas irregularidades e no asfalto liso não?',
        a: 'A folga de uma articulação só se manifesta quando a suspensão trabalha: no desnível a peça se desloca no encaixe e bate. No asfalto liso os cursos são pequenos e a peça gasta fica quieta. Por isso batida em irregularidades quase sempre fala do trem de rodagem, e não do motor.',
      },
      {
        q: 'Troquei os pneus há pouco e surgiu uma batida. Coincidência?',
        a: 'Provavelmente não. Uma batida ritmada ou um estalo no compasso do giro da roda nos primeiros dias após tirar as rodas é o clássico de parafusos frouxos. A conferência leva cinco minutos: repassar os parafusos de todas as rodas com a chave. Depois de qualquer troca, vale reapertar de novo em 50–100 quilômetros.',
      },
      {
        q: 'São as bieletas que batem. É urgente?',
        a: 'As bieletas em si não são perigosas: são hastes pequenas que se desgastam primeiro na suspensão, e o carro continua controlável. Mas peças mais sérias podem bater de forma parecida, então um diagnóstico em uma ou duas semanas é necessário: no elevador a fonte se acha em minutos.',
      },
    ],
  },

  'tikanie-dvigatelya': {
    h1: 'Motor tiquetaqueando',
    metaTitle: 'Motor tiquetaqueando: normal ou desgaste, causas | Stuk',
    description:
      'De onde vem o tiquetaque do motor: folga de válvulas, tuchos hidráulicos, estalido normal dos bicos ou coletor de escape. Como distinguir o normal do desgaste.',
    intro: [
      'Um tiquetaque uniforme e rápido é o mais comum dos sons do motor, e está longe de significar sempre um defeito. Em motores de injeção direta (TSI, GDI e similares) e em diesel, os bicos e a bomba de alta pressão estalam sempre — é assim que eles são feitos. O estalido normal tem marcas reconhecíveis: é igual frio e quente, se ouve mais forte do lado de fora do que dentro do carro e não muda com os anos.',
      'Deve preocupar um tiquetaque que fica mais forte com o tempo e se ouve melhor com o motor quente do que antes. Assim se manifestam folgas de válvula grandes: os espaços entre as peças do comando crescem com o desgaste e as válvulas passam a trabalhar com impacto. Casos à parte: tiquetaque só nos primeiros minutos depois da partida a frio (normalmente os tuchos hidráulicos, peças que com a pressão do óleo tiram a folga excedente) e um estalido com cheiro de escapamento, mais alto do lado de fora — a assinatura de uma junta do coletor de escape queimada.',
    ],
    causes: [
      { name: 'Estalido normal dos bicos (injeção direta, diesel)', likelihood: 'Muito comum — se o som é sempre igual' },
      { name: 'Folga de válvulas grande', likelihood: 'Comum — se o tiquetaque ficou mais alto com o tempo' },
      { name: 'Tuchos hidráulicos a frio', likelihood: 'Comum — se tiquetaqueia só nos primeiros minutos após a partida' },
      { name: 'Junta ou trinca do coletor de escape', likelihood: 'Se o estalido é mais alto do lado de fora e cheira a escapamento' },
      { name: 'Corrente de comando ou seu tensionador', likelihood: 'Mais raro — um sussurro ou matraqueado na frente do motor' },
    ],
    canRide: [
      'Com um tiquetaque dá para rodar quase sempre: entre suas causas típicas não há nenhuma que exija parar no acostamento. O estalido normal dos bicos e o tiquetaque matinal dos tuchos não pedem reparo algum — é o funcionamento normal do motor.',
      'Mas um tiquetaque que cresce não passa sozinho. Válvulas com folga excessiva trabalham com impacto e se desgastam mais rápido, então programe a regulagem ou a verificação dos tuchos para as próximas duas semanas — nesse período dá para rodar tranquilo. Com o coletor de escape a lógica é parecida: há uma ou duas semanas de margem, mas a fresta cresce e o cheiro de escapamento pode ser puxado para dentro do carro pelo sistema de ventilação — e isso já faz mal.',
    ],
    checks: [
      'Comparar motor frio e quente: tiquetaque só nos primeiros minutos após a partida é o quadro dos tuchos; um som que se ouve melhor com o motor quente pesa a favor da folga de válvulas.',
      'Avaliar a evolução de memória: um tiquetaque que não muda há anos é mais provavelmente normal; se meio ano atrás era bem mais baixo, é desgaste, e vai crescer.',
      'Ouvir de fora e de dentro do carro: o estalido normal dos bicos é bem mais alto do lado de fora; o tiquetaque das válvulas se ouve bem também do banco do motorista.',
      'Conferir o nível de óleo na vareta: com nível baixo o tiquetaque dos tuchos e do comando aumenta, e completar até a marca às vezes se nota na hora.',
      'Cheirar junto ao capô aberto: cheiro de escapamento junto com estalido frequente é sinal do coletor — com isso, oficina em uma ou duas semanas.',
    ],
    appHelp:
      'O aplicativo Stuk esclarece o essencial — se o tiquetaque ficou mais alto com o tempo e como se comporta frio e quente — e a gravação permite compará-lo com exemplos típicos. No relatório vêm causas prováveis com percentuais e uma conclusão em forma de semáforo: normal, agendar esta semana ou diagnóstico sem adiar.',
    faq: [
      {
        q: 'Por que diesel e motores de injeção direta tiquetaqueiam sempre?',
        a: 'Neles o combustível é injetado a pressão muito alta, e cada bico dá um clique curto ao abrir, somando-se o estalido da bomba de alta pressão. É funcionamento normal: o som é igual em qualquer clima, mais alto fora do que dentro, e não pede reparo.',
      },
      {
        q: 'O que é a regulagem de folga das válvulas?',
        a: 'Entre as peças do comando de válvulas deixa-se uma pequena folga térmica; com o desgaste ela cresce e as válvulas começam a estalar. O mecânico devolve as folgas ao valor certo com pastilhas ou parafusos de regulagem. Em motores com tuchos hidráulicos, em vez de regulagem verificam-se os próprios tuchos e a pressão do óleo.',
      },
      {
        q: 'O tiquetaque pode sumir depois de uma troca de óleo?',
        a: 'Pode, se a culpa era do óleo velho, de uma viscosidade inadequada ou de nível baixo: os tuchos hidráulicos são muito sensíveis ao estado do óleo. Mas a troca de óleo não corrige folgas de válvula desgastadas — se depois dela o tiquetaque continua e cresce, é preciso regulagem.',
      },
    ],
  },

  'svist-remnya': {
    h1: 'Correia chiando',
    metaTitle: 'Correia chiando: causas, dá para rodar e o que fazer | Stuk',
    description:
      'A correia de acessórios chia: desgaste, tensão baixa, roldanas ou embreagem do compressor do ar. Como estreitar a causa pelas circunstâncias e quando o chiado pede oficina.',
    intro: [
      'Um chiado agudo debaixo do capô vem quase sempre da correia de acessórios — a correia que, a partir do virabrequim, gira o alternador, a bomba d’água e, em muitos carros, o compressor do ar-condicionado e a bomba da direção hidráulica. Ela chia num único caso: quando patina nas polias em vez de agarrar nelas.',
      'As causas do patinamento se dividem em dois grupos. O primeiro é a própria correia: a borracha envelheceu e endureceu, a tensão caiu, ou óleo e líquido de arrefecimento chegaram à superfície de trabalho. O segundo são os conjuntos que ela gira: uma roldana travando, uma embreagem do compressor dura ou uma bomba d’água com rolamento gasto carregam a correia mais do que ela consegue transmitir. Pelo momento exato em que o chiado aparece, o círculo se fecha bastante.',
    ],
    causes: [
      { name: 'Correia gasta ou frouxa', likelihood: 'O mais comum' },
      { name: 'Patinamento a frio ou na umidade', likelihood: 'Comum — se o chiado some depois de aquecer' },
      { name: 'Roldana tensora ou roldana guia', likelihood: 'Bastante comum — junto do chiado vem um zumbido ou sussurro' },
      { name: 'Embreagem do compressor do ar-condicionado', likelihood: 'Se o guincho coincide com ligar o ar' },
      { name: 'Bomba d’água ou polia de roda livre do alternador', likelihood: 'Mais raro' },
    ],
    canRide: [
      'Se o chiado é curto e vive só nos primeiros segundos após a partida a frio, dá para rodar tranquilo: é motivo para mostrar a correia quando der, não para mudar os planos do dia.',
      'Com chiado constante ou sob carga também dá para rodar por enquanto, mas marque a oficina dentro de uma semana: uma correia que patina superaquece e se desgasta em avalanche, e se romper param o alternador e, em muitos motores, a bomba d’água. Dois sinais mandam encostar e desligar o motor na hora: a luz da bateria acesa e o ponteiro da temperatura subindo — os dois significam que a correia já não gira seus acessórios.',
    ],
    checks: [
      'Guardar quando exatamente chia: nos primeiros segundos após a partida, no momento de ligar o ar-condicionado, ao girar o volante ou o tempo todo — essa é a pista principal.',
      'Ligar o ar-condicionado com o motor funcionando: um guincho bem no momento em que ele engata aponta para a embreagem do compressor patinando.',
      'Com o motor desligado, examinar a correia: trincas transversais, bordas desfiadas e flancos «polidos» brilhantes são sinais de desgaste.',
      'Verificar se há vestígios de óleo ou líquido de arrefecimento na correia e ao redor das polias: uma correia engordurada chia mesmo nova, e marcas de líquido apontam para a bomba d’água.',
      'Ouvir se junto do chiado há um zumbido ou sussurro constante que muda com a rotação — assim soa o rolamento de uma das roldanas.',
    ],
    appHelp:
      'O aplicativo Stuk esclarece o caráter do som e as circunstâncias — chiado ou zumbido, a frio ou sob carga, ligado ou não ao ar-condicionado — e pela gravação ajuda a separar o guincho da correia do sussurro de uma roldana. No relatório vêm causas prováveis com percentuais e um semáforo: pode rodar, à oficina esta semana ou pare.',
    faq: [
      {
        q: 'O que acontece se a correia arrebentar na estrada?',
        a: 'A carga acaba na hora: o alternador para e o carro anda com o que restou na bateria — em geral algumas dezenas de minutos. Em motores em que a correia também gira a bomba d’água, a temperatura sobe rápido e seguir viagem deixa de ser possível. Por isso uma correia que chia se troca com hora marcada, não depois de romper.',
      },
      {
        q: 'Por que o chiado aparece ao ligar o ar-condicionado?',
        a: 'O compressor do ar é o consumidor mais pesado da correia. Ao engatar, sua embreagem soma carga de repente, e uma correia gasta ou frouxa entra em patinamento. Se guincha justamente no segundo do engate, vale conferir também a própria embreagem: o desgaste dela dá o mesmo som.',
      },
      {
        q: 'Dá para passar um spray na correia para não chiar?',
        a: 'Melhor não. Sprays e receitas caseiras como WD-40 dão um ou dois dias de silêncio, mas a borracha impregnada escorrega e envelhece mais rápido, enquanto a causa — desgaste ou tensão baixa — continua ali. Mais confiável é trocar a correia junto com a roldana: é um dos serviços baratos da oficina.',
      },
    ],
  },

  'gremit-pod-mashinoy': {
    h1: 'Chacoalho embaixo do carro',
    metaTitle: 'Chacoalho embaixo do carro: o que treme e é perigoso | Stuk',
    description:
      'Chacoalho e tremeliques embaixo do carro: coxins do escapamento, protetor térmico, protetor de cárter ou catalisador. Como achar a fonte do ruído e quando a coisa é séria.',
    intro: [
      'Um chacoalho vindo de baixo soa preocupante, mas a fonte quase nunca é o motor nem a suspensão: é a lataria aparafusada — coxins do escapamento, parafusos frouxos do protetor de cárter ou o protetor térmico, aquela chapa fina que protege o assoalho do calor do escapamento. Tudo isso chacoalha alto e ressoa pela carroceria, e por isso parece mais grave do que é: esses sons não afetam a dirigibilidade nem o funcionamento do carro.',
      'Também há enganos: o que chacoalha «embaixo do carro» muitas vezes é o porta-malas — o macaco, a chave de roda, um estepe mal preso — ou os plásticos do interior, cujo som é difícil de localizar. Um único cenário preocupa de verdade: um chacoalho metálico mais perto do motor junto com perda de força ou um cheiro diferente no escapamento. Assim soa um catalisador destruído — o filtro cerâmico dos gases de escape, cujos cacos chacoalham dentro da própria carcaça — e com essa hipótese não convém esperar.',
    ],
    causes: [
      { name: 'Coxins do escapamento ou protetor de cárter', likelihood: 'O mais comum — chacoalho metálico nos buracos' },
      { name: 'Protetor térmico do escapamento', likelihood: 'Comum — chacoalho metálico em certas rotações' },
      { name: 'Macaco, estepe ou carga no porta-malas', likelihood: 'Comum — estrondo surdo atrás, «algo rolando»' },
      { name: 'Plásticos do interior: painéis e grilos', likelihood: 'Comum — o som está mais perto do que parece' },
      { name: 'Catalisador destruído', likelihood: 'Mais raro — se junto com o chacoalho caiu a força' },
    ],
    canRide: [
      'Na maioria dos casos dá, e sem restrições especiais: um protetor térmico chacoalhando, coxins do escapamento soltos ou parafusos do protetor de cárter são questão de conforto, não de segurança. O conserto costuma levar minutos: apertar ou prender com abraçadeira. A única coisa a garantir é que o escapamento não esteja pendurado: um tubo prestes a raspar o asfalto já não se ignora, a fixação dele se refaz na hora.',
      'Se o chacoalho vem com perda de força, cheiro diferente no escapamento ou a luz de injeção acesa, vá ao diagnóstico nos próximos dias: cacos de cerâmica de um catalisador destruído podem ser puxados para dentro do motor, e isso já é conserto caro. Até a revisão, evite girar o motor em rotações altas.',
    ],
    checks: [
      'Esvaziar o porta-malas, conferir a fixação do estepe e do macaco, apertar a tampa traseira — e refazer o mesmo trecho. O som sumiu: assunto encerrado.',
      'Com o carro parado, subir a rotação com suavidade: o chacoalho do protetor térmico costuma aparecer em certas rotações e se ouve ali mesmo, sem buraco nenhum.',
      'Pedir a um passageiro que aperte com a mão os painéis suspeitos do interior em movimento: se o som some, são grilos do interior e não o assoalho.',
      'Prestar atenção à força e ao cheiro do escapamento: se o carro acelera pior ou o cheiro mudou, é a hipótese do catalisador — com ela, ao mecânico nos próximos dias.',
      'Olhar debaixo do carro sem se enfiar embaixo: um escapamento pendurado, uma borda solta do protetor de cárter ou uma chapa entortada muitas vezes se veem já pela roda.',
    ],
    appHelp:
      'O aplicativo Stuk ajuda a ligar o chacoalho à sua fonte: de onde vem o som, se acompanha a rotação do motor ou os buracos, o que acontece com a força. Com as respostas e a gravação mostra causas prováveis com percentuais e um semáforo de urgência — útil para separar uma lata inofensiva do catalisador antes mesmo da oficina.',
    faq: [
      {
        q: 'É perigoso rodar se algo chacoalha embaixo do carro?',
        a: 'Na maioria das vezes não: coxins do escapamento soltos, protetor de cárter e protetor térmico não afetam o funcionamento do carro. As exceções são um escapamento pendurado prestes a tocar o asfalto e um chacoalho junto com perda de força: no segundo caso pode haver catalisador destruído, e a verificação não deve esperar.',
      },
      {
        q: 'O que é o protetor térmico e dá para simplesmente tirá-lo?',
        a: 'É uma chapa metálica fina entre as partes quentes do escapamento e o assoalho: protege do calor a carroceria, os chicotes e tudo o que fica acima do tubo. Tirar não é boa ideia — o certo é apertar ou prender com abraçadeira: na oficina é trabalho de poucos minutos.',
      },
      {
        q: 'Como saber que é o catalisador que chacoalha?',
        a: 'Por um chacoalho metálico ou um chiado vindo de baixo, mais perto do motor, que aumenta nas aceleradas, somado a perda de força ou cheiro diferente no escapamento. Na oficina confirmam batendo de leve na carcaça do catalisador com o carro frio: a cerâmica esfarelada chacoalha lá dentro como pedrinhas.',
      },
    ],
  },

  'skrezhet-pri-tormozhenii': {
    h1: 'Rangido ao frear',
    metaTitle: 'Rangido ao frear: pastilhas no metal, o que fazer | Stuk',
    description:
      'O rangido ao frear quase sempre significa pastilhas gastas até o metal: com isso não se roda. Mais raramente a culpa é de uma pedrinha atrás da capa do disco. Como distinguir.',
    intro: [
      'O rangido ao frear merece mais atenção do que qualquer chiado. Na maioria das vezes assim soam pastilhas gastas até o metal: o material de atrito que esfrega o disco acabou, e é a base de aço da pastilha que raspa o disco. A distância de frenagem cresce, o disco se estraga a cada parada e o mecanismo pode travar.',
      'Há variantes menos dramáticas. Uma capa de proteção do disco entortada ou uma pedrinha presa entre a capa e o disco produzem um rangido muito parecido, mas não fazem mal aos freios. E um arranhado curto nas primeiras freadas depois de uma noite ao relento ou de chuva é apenas a película de ferrugem, que as pastilhas limpam em dois minutos. O problema é que de ouvido esses cenários se confundem com facilidade, então rangido constante exige inspeção e não palpite.',
    ],
    causes: [
      { name: 'Pastilhas gastas até o metal', likelihood: 'O mais comum — se range a cada freada' },
      { name: 'Uma pedrinha ou a capa entortada encostando no disco', likelihood: 'Comum; o som é parecido, mas não faz mal aos freios' },
      { name: 'Pinça travando', likelihood: 'Se a roda esquenta e o carro puxa para um lado' },
      { name: 'Película de ferrugem após parada ou chuva', likelihood: 'Se o som some nas primeiras freadas' },
    ],
    canRide: [
      'Com metal contra metal é preciso encerrar as viagens comuns: só se admite um trajeto cuidadoso até a oficina, com distância de sobra e freadas suaves e antecipadas. Adiar a troca também não compensa no bolso: cada quilômetro rangendo soma à conta o preço dos discos, que a base de aço da pastilha literalmente desbasta.',
      'Se o rangido apareceu depois de o carro ficar parado e sumiu nas primeiras freadas, rode sem restrições: é ferrugem. Se o som lembra mais um arranhado, se ouve mesmo sem pisar no pedal e a roda não esquenta depois da viagem, o provável é a capa ou uma pedrinha: dá para chegar tranquilo, mas mostre o carro em um ou dois dias — só a inspeção separa com segurança o caso inofensivo de pastilhas no fim.',
    ],
    checks: [
      'Observar o padrão: som só ao pisar no freio aponta para as pastilhas; arranhado constante em movimento, mais para a capa, uma pedrinha ou uma pinça travando.',
      'Olhar entre os raios da roda: em muitos carros a pastilha externa fica visível sem desmontar. Material de atrito com menos de 3–4 mm, ou metal brilhante no lugar dele, significa troca imediata.',
      'Depois de um trajeto curto, aproximar a mão das rodas sem tocar no disco: se uma roda está bem mais quente que as outras, parece pinça travando — a peça que aperta as pastilhas contra o disco.',
      'Reparar no comportamento do carro: puxar para um lado ao frear ou cheiro de queimado numa roda são sinais com os quais não se roda — só com cuidado até a oficina.',
      'Examinar o disco pela roda: sulcos profundos e um tom azulado no metal dizem que o rangido já dura e os discos sofreram.',
    ],
    appHelp:
      'O aplicativo Stuk percorre as mesmas perguntas — o rangido é constante, a roda esquenta, o som some depois das primeiras freadas — e pela gravação ajuda a distinguir o rangido do guincho do sensor de desgaste. No relatório vêm causas prováveis e um semáforo: pode rodar, mostre esta semana ou vá só até a oficina.',
    faq: [
      {
        q: 'Qual a diferença entre rangido e chiado dos freios?',
        a: 'O chiado é um som agudo com os freios ainda trabalhando por inteiro: quase sempre é o sensor de desgaste, avisando com antecedência. O rangido é um ruído áspero e grave de metal contra metal: o material de atrito acabou e a base de aço esfrega o disco. Chiado é agendamento nesta semana; rangido é fim das viagens comuns.',
      },
      {
        q: 'Basta trocar só as pastilhas se já houve rangido?',
        a: 'Depende do estado dos discos: mesmo rodar pouco «no metal» deixa sulcos. Os rasos às vezes se corrigem com retífica; os fundos pedem discos novos. Pastilhas novas num disco sulcado freiam pior e se gastam rápido, então a decisão se toma depois da inspeção.',
      },
      {
        q: 'O rangido vem e vai — isso também é perigoso?',
        a: 'Rangido intermitente costuma vir de uma pedrinha entre a capa e o disco, e ela pode cair sozinha. Não convém contar com isso: o mesmo som intermitente aparece no início do desgaste das pastilhas até o metal. Uma inspeção em um ou dois dias resolve a dúvida.',
      },
    ],
  },

  'stuk-pri-razgone': {
    h1: 'Batida ao acelerar',
    metaTitle: 'Batida ao acelerar e ao tirar o pé: causas e o que fazer | Stuk',
    description:
      'Por que bate ao pisar ou tirar o pé do acelerador: coxins do motor, junta homocinética, folga na transmissão ou câmbio automático. Como distinguir folga inofensiva de batida dentro do motor.',
    intro: [
      'Uma batida que aparece bem na hora de pisar no acelerador ou tirar o pé nasce quase sempre não no motor, e sim na corrente que leva a força às rodas. Com os anos acumula-se folga nas peças dela: os coxins de borracha do motor cedem e deixam o motor balançar na troca de carga, a junta homocinética interna se desgasta (a articulação do semieixo que vai do câmbio à roda), as cruzetas do cardã e as fixações do subchassi se soltam. Toda vez que a força muda de sentido, a folga se fecha com um impacto — daí a batida ou o estalo isolado.',
      'História à parte é o câmbio automático: um tranco com estalo ao passar a alavanca entre D e R, ou durante as trocas, costuma indicar óleo velho ou desgaste. E um caso bem diferente é uma batida surda vinda do fundo do motor, que acelera com a rotação e fica mais forte sob carga: assim batem as bronzinas do virabrequim. É raro, mas é a variante mais séria, e não se pode deixar passar.',
    ],
    causes: [
      { name: 'Coxins do motor ou junta homocinética interna', likelihood: 'O mais comum — batida isolada ao pisar e ao tirar o pé' },
      { name: 'Folga na transmissão: cruzetas do cardã, fixações do subchassi', likelihood: 'Comum na tração traseira e integral — estalo embaixo ao arrancar' },
      { name: 'Câmbio automático: óleo velho ou desgaste', likelihood: 'Se o tranco e o estalo coincidem com as trocas de marcha' },
      { name: 'Batida de bronzinas vinda do fundo do motor', likelihood: 'Raro — acelera com a rotação, mais forte sob carga' },
    ],
    canRide: [
      'Com a maioria das causas da tabela dá para rodar: folga em coxins, articulações ou transmissão não imobiliza o carro de repente enquanto a batida for isolada e discreta. Mas adiar o diagnóstico por meses não é sensato: uma cruzeta arrebentada ou uma junta homocinética gasta acabam se destruindo, e isso acontece em movimento. Prazo razoável para a oficina: uma ou duas semanas; até lá, arranque e use o acelerador com mais suavidade.',
      'A exceção é a batida vinda do fundo do motor, que acelera nas aceleradas e cresce sob carga. Com ela é preciso encerrar as viagens comuns: bronzinas gastas podem terminar em motor travado. Primeiro confira o nível de óleo; depois, guincho — ou, se a oficina for bem perto, devagar e sem acelerar.',
    ],
    checks: [
      'Precisar o momento: uma batida exatamente ao pisar e tirar o pé, e não nos buracos, fala da transmissão da força, e não da suspensão. Esse detalhe encurta na hora a busca do mecânico.',
      'Conferir o nível de óleo do motor na vareta. Diante de qualquer batida que soe a motor, esse é o primeiro passo: com nível baixo as bronzinas sofrem antes de tudo.',
      'Se estala nas trocas, conferir o nível e o estado do óleo do câmbio automático: fluido escuro com cheiro de queimado é causa frequente de trancos, e às vezes a troca resolve.',
      'Ouvir de onde vem o som — de baixo do capô, do meio do assoalho ou do lado de uma roda — e se ele se repete ao trocar de marcha. Vale anotar essas observações para a oficina.',
      'Fazer o teste suave: se com pisada e alívio suaves a batida some e com movimento brusco volta, é folga clássica, e até o conserto basta dirigir com suavidade.',
    ],
    appHelp:
      'O aplicativo Stuk faz as mesmas perguntas de precisão — quando exatamente bate, se o som muda com a rotação e as marchas — e pela gravação ajuda a separar o estalo de uma folga de uma batida profunda do motor. No relatório vêm causas prováveis com percentuais e uma conclusão clara: pode rodar, planeje a oficina ou pare.',
    faq: [
      {
        q: 'Por que bate justamente ao pisar e tirar o pé do acelerador?',
        a: 'Na troca de carga a força inverte o sentido, e todas as folgas dos coxins, articulações e transmissão se fecham com um impacto. Enquanto o carro anda em velocidade constante as peças ficam encostadas umas nas outras e a folga não se denuncia — por isso a batida só se ouve ao trabalhar com o acelerador.',
      },
      {
        q: 'Como saber que é o próprio motor e que é sério?',
        a: 'O sinal de alerta é uma batida surda vinda do fundo do motor que acelera com a rotação e cresce sob carga, por exemplo em subida. Assim batem as bronzinas do virabrequim. Nesse caso, encerre as viagens, confira o nível de óleo e leve o carro à oficina de guincho.',
      },
      {
        q: 'O câmbio automático pode causar batida ao acelerar?',
        a: 'Pode. Um tranco ou estalo no momento de uma troca, ou ao passar a alavanca entre D e R, é sinal típico de óleo velho ou desgaste do câmbio. Comece conferindo o nível e o estado do óleo; até o conserto, mova a alavanca só com o carro totalmente parado e o freio pisado.',
      },
    ],
  },

  'zvon-pri-razgone': {
    h1: 'Tinido ao acelerar',
    metaTitle: 'Tinido ao acelerar: detonação ou não, o que fazer | Stuk',
    description:
      'Tinido metálico ao acelerar quase sempre é detonação por causa do combustível. Como testar trocando de posto e quando a culpa não é do motor, e sim do protetor térmico ou do catalisador.',
    intro: [
      'O tinido metálico ao acelerar — aquilo que os motoristas chamam de «batida de pino» — quase sempre é detonação. Parte do combustível nos cilindros não queima de forma uniforme, e sim explode, e a onda de choque ressoa metálica nas paredes do motor. Ouve-se melhor sob carga: em subida, na ultrapassagem, ao acelerar em rotação baixa numa marcha alta. A causa mais comum é prosaica — gasolina com octanagem menor do que a recomendada pelo fabricante, ou simplesmente um abastecimento ruim.',
      'O tinido pode não vir do motor. Um protetor térmico solto — a chapa acima do escapamento — chacoalha em certas rotações, e a cerâmica esfarelada do catalisador chia e tine embaixo do assoalho. A diferença está no que ele acompanha: a detonação depende da carga e some com direção suave, enquanto a chapa tine nas «suas» rotações mesmo com o carro parado, numa acelerada.',
    ],
    causes: [
      { name: 'Detonação: combustível com octanagem baixa', likelihood: 'O mais comum — tinido sob carga, sobretudo em subida' },
      { name: 'Carvão nas câmaras de combustão ou o sensor de detonação', likelihood: 'Se trocar de posto não resolveu' },
      { name: 'Protetor térmico do escapamento', likelihood: 'Comum — chacoalho em certas rotações, sem relação com a carga' },
      { name: 'Catalisador destruído', likelihood: 'Mais raro — tinido e chiado embaixo, com a força caindo' },
    ],
    canRide: [
      'Com episódios raros de tinido dá para chegar, mas sem carregar o motor: acelere com suavidade, suba as ladeiras numa marcha mais curta, não puxe em rotação baixa com marcha alta. O primeiro passo é abastecer com combustível de octanagem não inferior à recomendada, de preferência em outra bandeira: muitas vezes o tinido some com um tanque só.',
      'Detonação constante são pancadas nos pistões a cada aceleração, e ela vai destruindo o motor: sofrem pistões, anéis e a junta do cabeçote. Se depois de trocar o combustível o tinido continuar, não adie o diagnóstico. Já o chacoalho da chapa é um incômodo puramente sonoro: com ele dá para rodar sem restrições e prender a chapa na próxima ida à oficina.',
    ],
    checks: [
      'Encher um tanque inteiro com octanagem não inferior à recomendada, em outro posto. Se em um ou dois tanques o tinido sumir, a causa era o combustível.',
      'Conferir a relação com a carga: tinido que aparece em subida, na ultrapassagem e com acelerada forte, mas diminui na aceleração suave, é a assinatura da detonação.',
      'Dar uma acelerada em ponto morto com o carro parado: se o tinido ou o chacoalho surge em certas rotações mesmo sem carga, o mais provável é o protetor térmico.',
      'Ver no manual ou na tampa do tanque qual combustível é recomendado: para muitos motores a octanagem baixa já não serve, ainda que formalmente permitida.',
      'Prestar atenção à força e aos sons embaixo: chiado e tinido vindos de baixo junto com aceleração mais fraca são motivo para checar o catalisador sem adiar.',
    ],
    appHelp:
      'O aplicativo Stuk ajuda com as mesmas perguntas — quando tine, se o som acompanha a carga ou a rotação — e a gravação permite separar o tinido metálico da detonação do chacoalho de uma chapa. No relatório vêm causas prováveis com percentuais e uma conclusão: pode rodar, vale planejar a oficina ou melhor parar.',
    faq: [
      {
        q: 'O que significa «bater pino»?',
        a: 'É o nome antigo do tinido da detonação; antigamente atribuíam-no aos pinos dos pistões. Na verdade não são eles que tinem: o som vem da onda de choque de uma queima explosiva refletida nas paredes dos cilindros. O nome ficou, mas a causa é sempre a mesma: detonação, e não peças do pistão gastas.',
      },
      {
        q: 'Dá para rodar com detonação?',
        a: 'Por pouco tempo e com cuidado: aceleração suave, marcha mais curta em subida, sem carga total nem reboque. Cada episódio são pancadas nos pistões, e a detonação constante termina em conserto caro do motor. Se a troca de combustível não tirou o tinido em um ou dois tanques, é preciso diagnóstico.',
      },
      {
        q: 'Gasolina de octanagem maior ajuda?',
        a: 'A regra principal é nunca abastecer abaixo do recomendado pelo fabricante. A octanagem mostra a resistência do combustível à autoignição, então subir de tipo num motor propenso à detonação costuma tirar o tinido. Se nem assim resolver, a causa — carvão ou o sensor de detonação — se procura na oficina.',
      },
    ],
  },

  'gul-pri-povorote': {
    h1: 'Zumbido nas curvas',
    metaTitle: 'Zumbido na curva: rolamento de roda ou direção hidráulica | Stuk',
    description:
      'De onde vem o zumbido nas curvas: rolamento de roda gasto, bomba da direção hidráulica uivando ou ruído dos pneus. Como descobrir o lado e se é perigoso.',
    intro: [
      'No zumbido em curva é preciso separar logo dois cenários: um zumbido em velocidade que cresce numa curva e diminui na outra, e um uivo que aparece ao girar o volante parado ou manobrando. Soam parecido, mas as fontes são completamente diferentes: no primeiro caso a roda, no segundo a direção.',
      'Um zumbido em velocidade que depende do sentido da curva é a assinatura clássica do rolamento de roda — o mancal sobre o qual a roda gira. Na curva o peso do carro passa para as rodas externas, e um rolamento gasto e carregado zumbe mais alto. O uivo ao girar o volante em baixa velocidade costuma vir da bomba da direção hidráulica, em geral por nível baixo de fluido. E em carros com direção elétrica um leve zumbido ao girar o volante é normal e não defeito.',
    ],
    causes: [
      { name: 'Rolamento de roda', likelihood: 'O mais comum — se o zumbido vem com a velocidade e muda em curva' },
      { name: 'Bomba da direção hidráulica ou nível baixo de fluido', likelihood: 'Comum — se uiva ao girar o volante parado' },
      { name: 'Ruído dos pneus', likelihood: 'Comum; o zumbido depende do piso, não da curva' },
      { name: 'Zumbido normal da direção elétrica', likelihood: 'Normal em carros sem reservatório de fluido de direção' },
      { name: 'Junta homocinética gasta', likelihood: 'Mais raro; costuma vir com estalos com o volante todo virado' },
    ],
    canRide: [
      'Com o rolamento zumbindo dá para rodar, mas é um crédito de prazo curto: não adie a revisão além de uma semana e deixe as viagens longas em velocidade alta para depois dela. Um rolamento se destruindo dá folga à roda e, num caso descuidado, pode travar. Se o zumbido cresceu de repente ou veio acompanhado de vibração — à oficina já.',
      'Com a bomba da direção uivando, o primeiro passo é conferir o nível de fluido no reservatório: completar costuma encerrar o assunto. Dá para rodar, mas não segure o volante no fim de curso por mais de dois segundos — nessa posição a bomba trabalha na pressão máxima. Se depois de completar o uivo continuar ou o nível cair de novo, há vazamento — oficina dentro de uma semana.',
    ],
    checks: [
      'Guardar em que sentido de curva o zumbido é mais forte. Mais forte ao virar à esquerda significa que o lado carregado é o direito, então o rolamento direito é o candidato; e vice-versa. Esse detalhe encurta bastante a busca na oficina.',
      'Conferir o som parado: se o uivo aparece ao girar o volante no estacionamento, as rodas não têm nada a ver — a fonte é a direção.',
      'Olhar sob o capô se há reservatório de fluido de direção. Se houver, conferir o nível e completar até a marca se preciso; se não houver, a direção é elétrica, e um zumbido baixo e constante nela é normal.',
      'Avaliar a dependência do piso: um zumbido mais baixo no asfalto novo e mais alto no áspero costuma vir dos pneus, não do rolamento.',
      'Olhar a banda de rodagem: desgaste «em serra» (degraus nas bordas) ou em manchas aumenta o zumbido dos pneus e sugere alinhamento fora ou amortecedores cansados.',
    ],
    appHelp:
      'O aplicativo Stuk faz as mesmas perguntas que o mecânico na recepção: onde se ouve o zumbido, se muda em curva, se está ligado a girar o volante parado. A gravação ajuda a comparar o som com exemplos típicos, e no relatório vêm causas prováveis e uma recomendação clara: siga tranquilo, agende para esta semana ou verifique sem adiar.',
    faq: [
      {
        q: 'Por que o zumbido cresce só para um lado da curva?',
        a: 'Na curva o peso do carro passa para as rodas externas. Se estiver gasto, por exemplo, o rolamento direito, sob carga ele zumbe mais alto — ou seja, ao virar à esquerda. Essa propriedade permite saber, antes mesmo da oficina, qual lado conferir primeiro.',
      },
      {
        q: 'Dá para completar a direção hidráulica com qualquer fluido?',
        a: 'Não. O tipo de fluido está no manual do carro e muitas vezes na própria tampa do reservatório. Completar uma vez com o fluido certo é seguro, mas se o nível cai com regularidade há um vazamento em algum lugar: achá-lo e repará-lo é serviço de oficina, completar não resolve.',
      },
      {
        q: 'Não há reservatório de direção sob o capô e mesmo assim zumbe na curva — o que é?',
        a: 'O mais provável é que a direção seja elétrica: o motor dela zumbe baixinho ao girar o volante, e isso é funcionamento normal. Devem preocupar outros sinais: a direção ficou pesada ou pesa aos trancos, apareceu um rangido, ou a luz da direção acendeu. Com eles, oficina nos próximos dias.',
      },
    ],
  },

  'shchelchki-pri-povorote-rulya': {
    h1: 'Estalos ao girar o volante',
    metaTitle: 'Estalos ao virar o volante: homocinética ou rolamento | Stuk',
    description:
      'Por que estala ao girar o volante: junta homocinética externa, rolamento do amortecedor ou cruzeta da coluna. Como distingui-los pelo som e o que conferir sem desmontar.',
    intro: [
      'Os estalos ao girar o volante se separam por uma pergunta simples: o carro está andando nesse momento ou parado? Um estalar seco andando com o volante virado é a assinatura da junta homocinética externa, a articulação pela qual o giro chega à roda que também esterça. Quanto mais virado o volante e mais brusca a arrancada, mais nítido o estalo. Tudo costuma começar com uma coifa rasgada: a capa de borracha que protege a junta da sujeira.',
      'Se, ao contrário, os estalos se ouvem ao girar o volante com o carro parado, a homocinética em geral não tem culpa. Um rangido vindo de cima, da caixa de roda, vem do rolamento do amortecedor — a peça sobre a qual o topo do amortecedor gira junto com a roda. Estalos no próprio volante, à altura dos pés do motorista, são a cruzeta da coluna, a pequena articulação entre o volante e a caixa de direção. Nenhuma dessas opções obriga a largar o carro onde está, mas nenhuma deve se arrastar por meses.',
    ],
    causes: [
      { name: 'Junta homocinética externa', likelihood: 'O mais comum — se estala andando com o volante virado' },
      { name: 'Rolamento do amortecedor', likelihood: 'Comum — se range parado, vindo de cima da caixa de roda' },
      { name: 'Cruzeta da coluna de direção', likelihood: 'Se os estalos se ouvem e se sentem no próprio volante' },
      { name: 'Terminais de direção ou a caixa', likelihood: 'Mais raro; costumam dar batidas, não estalos' },
      { name: 'Junta homocinética interna, bieletas', likelihood: 'Mais raro; verificam-se no mesmo diagnóstico' },
    ],
    canRide: [
      'Com uma homocinética estalando dá para rodar, mas não adie a troca além de uma ou duas semanas: uma junta gasta no pior caso trava, e aí já não é som, e sim carro parado. Até o conserto ajuda um regime mais suave — não arrancar bruscamente com as rodas no fim de curso.',
      'O rolamento do amortecedor e a cruzeta da coluna dão mais desconforto do que perigo imediato, mas a direção é item de segurança, então faça o diagnóstico nos próximos dias: no elevador leva poucos minutos. Motivos para apressar: o volante ficou «vazio» na posição central, o carro vagueia na faixa ou os estalos ficaram bem mais frequentes.',
    ],
    checks: [
      'Separar os cenários num estacionamento vazio: o estalo aparece andando em círculo com o volante virado — ou os estalos se ouvem ao girar o volante com o carro parado?',
      'Examinar as coifas das homocinéticas — as capas sanfonadas de borracha do lado interno de cada roda dianteira. Um rasgo com graxa espalhada em volta é diagnóstico quase confirmado.',
      'Pedir a alguém que gire o volante com o motor desligado e pôr a palma sobre a torre do amortecedor sob o capô: os estalos de um rolamento gasto se sentem com a mão.',
      'Balançar o volante para os lados com o motor desligado e ouvir à altura dos pés: um estalo nítido na coluna denuncia a cruzeta.',
      'Guardar de qual roda vem o estalo em movimento e em qual curva ele é mais forte — esses detalhes encurtam bastante a busca na oficina.',
    ],
    appHelp:
      'No aplicativo Stuk essas bifurcações estão reunidas numa árvore curta de perguntas: o carro anda ou está parado, de onde vem o som, como estão as coifas. O estalo pode ser gravado no celular e comparado com exemplos. No relatório vêm causas prováveis com avaliação e uma recomendação de prazo: sem pânico, mas sem estalos esquecidos por um mês.',
    faq: [
      {
        q: 'O que é a junta homocinética e por que ela estala?',
        a: 'É a articulação que transmite o giro a uma roda que também esterça. Quando entra sujeira por uma coifa rasgada, as esferas e as pistas da junta se desgastam, e sob carga com o volante virado ela começa a estalar com clareza.',
      },
      {
        q: 'Por quanto tempo dá para rodar com a homocinética estalando?',
        a: 'Não há vida útil exata: em uns a junta aguenta meses, em outros se acaba em duas semanas. Referência sensata: não adiar a troca além de uma ou duas semanas e, até o conserto, não arrancar bruscamente com as rodas viradas — assim a carga sobre a junta é mínima.',
      },
      {
        q: 'Por que range ao girar o volante com o carro parado?',
        a: 'Com o carro parado a roda não gira e a homocinética não trabalha. Um rangido no lugar costuma vir do rolamento do amortecedor — o som vem de cima, da caixa de roda — ou da cruzeta da coluna, se o estalo é no próprio volante. As duas peças se verificam na oficina em poucos minutos.',
      },
    ],
  },

  'stuk-v-dvigatele-na-holodnuyu': {
    h1: 'Batida no motor frio',
    metaTitle: 'Motor batendo a frio: causas e o que fazer | Stuk',
    description:
      'Por que o motor bate a frio e cala depois de aquecer: tuchos hidráulicos, conjunto de pistões, corrente de comando. Quando é normal e quando é hora da oficina.',
    intro: [
      'Uma batida que se ouve só nos primeiros minutos depois da partida a frio e some conforme o motor aquece é uma das queixas mais comuns em carros rodados. A boa notícia: aqui a causa mais frequente é também a mais inofensiva. Um tiquetaque rápido em cima do motor costuma vir dos tuchos hidráulicos — peças pequenas que, com a pressão do óleo, tiram a folga excedente do comando de válvulas. Enquanto o motor está frio, o óleo é grosso e não chega neles de imediato, por isso estalam um ou dois minutos. Aqueceu — silêncio.',
      'O caráter do som diz muito. Uma batida surda vinda do fundo costuma indicar desgaste do conjunto de pistões: a frio o pistão tem um pouco mais de folga no cilindro e bate até se dilatar com o calor. Um sussurro ou matraqueado na frente é a assinatura de uma corrente de comando esticada — a corrente interna que faz as válvulas abrirem na hora certa — ou do tensionador enfraquecido. E um estalido mais alto do lado de fora do que dentro do carro, ainda com cheiro de escapamento sob o capô, é sinal de junta do coletor de escape queimada: os gases escapam pela fresta até o metal se dilatar e fechá-la.',
    ],
    causes: [
      { name: 'Tuchos hidráulicos: óleo frio e grosso', likelihood: 'O mais comum — se tiquetaqueia em cima e cala em dois minutos' },
      { name: 'Desgaste do conjunto de pistões', likelihood: 'Comum em quilometragem alta — batida surda vinda do fundo' },
      { name: 'Corrente de comando ou seu tensionador', likelihood: 'Comum — se há sussurro ou matraqueado na frente' },
      { name: 'Junta ou trinca do coletor de escape', likelihood: 'Se o estalido é mais alto do lado de fora e cheira a escapamento' },
      { name: 'Correia de acessórios patinando', likelihood: 'Se for guincho ou chiado e não batida' },
    ],
    canRide: [
      'Com o tiquetaque dos tuchos, que some por completo depois de aquecer, dá para rodar sem restrições — é a vida comum de um motor rodado. O mesmo vale para o chiado da correia nos primeiros segundos após a partida: incômodo, mas não perigoso. Nos dois casos basta conferir o nível e a idade do óleo e mostrar o carro ao mecânico na próxima revisão programada.',
      'A batida surda do conjunto de pistões é assunto de observação: dá para rodar, mas acompanhe o consumo de óleo e conte do som ao mecânico na próxima visita. Com o sussurro da corrente não dá para arrastar: diagnóstico em uma ou duas semanas, porque uma corrente que pula significa conserto caro de motor — e até lá, sem arrancadas bruscas a frio. E um princípio geral: se a batida deixou de sumir com o aquecimento ou se ouve sob carga, o diagnóstico não se adia mais.',
    ],
    checks: [
      'Cronometrar quantos minutos o som dura: um ou dois e silêncio é típico dos tuchos; quanto mais tempo a batida vive, mais necessária a inspeção.',
      'Conferir na vareta o nível de óleo com o motor frio e lembrar quando foi trocado: nível baixo e óleo velho amplificam todas as batidas a frio.',
      'Definir o caráter do som: tiquetaque rápido em cima, batida surda do fundo ou sussurro na frente do motor são três histórias diferentes, com urgências diferentes.',
      'Abrir o capô com o motor frio funcionando e cheirar: cheiro de escapamento junto com estalido aponta para o coletor.',
      'Desligar o motor quente por dez minutos e dar partida de novo: uma batida «de frio» de verdade não volta depois de uma pausa tão curta.',
    ],
    appHelp:
      'O aplicativo Stuk percorre as mesmas bifurcações — é tiquetaque, batida surda ou sussurro e com que rapidez o som some — e a gravação do celular ajuda a captar um caráter difícil de descrever com palavras. No relatório vêm causas prováveis com percentuais e uma conclusão clara: rode tranquilo, agende esta semana ou não adie a oficina.',
    faq: [
      {
        q: 'A batida some depois de aquecer — dá para ignorar?',
        a: 'Na maioria das vezes sim: o tiquetaque dos tuchos a frio é comum e não pede reparo. Mas vale observar: se o som passou a durar mais de dois minutos, ficou com o motor quente ou apareceu sob carga, já é motivo de diagnóstico.',
      },
      {
        q: 'Aditivos «antibatida» ajudam?',
        a: 'Melhor não colocar: eles não eliminam o desgaste, mascaram o sintoma, e por isso o problema é percebido mais tarde. O que ajuda de verdade é outra coisa: óleo novo da viscosidade certa, nível correto e, se a batida continuar, regulagem ou conserto com o mecânico.',
      },
      {
        q: 'Por que no inverno bate mais a frio?',
        a: 'No frio o óleo é mais grosso e demora mais a chegar à parte alta do motor, então os tuchos e o comando de válvulas estalam mais e as folgas das peças frias são um pouco maiores. Se depois de aquecer tudo cala, é o mesmo quadro do verão, só que esticado no tempo.',
      },
    ],
  },

  'svist-pri-zapuske': {
    h1: 'Chiado ao dar partida',
    metaTitle: 'Chiado ao dar partida no motor: causas e o que fazer | Stuk',
    description:
      'Por que o motor chia ao dar partida: correia de acessórios patinando, roldanas ou bomba d’água. Quando o chiado é inofensivo e quando é hora de agendar a oficina.',
    intro: [
      'Um guincho ou chiado nos primeiros segundos depois de o motor pegar vem quase sempre da correia de acessórios — a correia de borracha que, a partir do motor, gira o alternador, a bomba d’água e o compressor do ar-condicionado. A frio ou com tempo úmido a correia patina nas polias e chia, e alguns segundos depois aquece, seca e cala.',
      'Agora mesmo esse cenário não é perigoso, mas também não deve ser tratado como normal: uma correia nova e bem tensionada não chia nem no frio. Um chiado matinal regular indica que a correia envelheceu, que a tensão caiu ou que uma das roldanas por onde ela passa começou a se desgastar. História à parte são os sons da própria partida: rangido ou zunido enquanto o motor de arranque gira o motor. Isso já não é a correia, e sim o arranque ou a cremalheira do volante — e com eles não convém esperar.',
    ],
    causes: [
      { name: 'Correia de acessórios patinando a frio', likelihood: 'O mais comum — se o chiado some nos primeiros segundos' },
      { name: 'Correia gasta ou tensão caída', likelihood: 'Comum — se o chiado continua com o motor quente' },
      { name: 'Rolamento da roldana tensora ou guia', likelihood: 'Bastante comum — ao chiado se soma um sussurro ou zumbido' },
      { name: 'Bomba d’água, se houver marcas de líquido perto da correia', likelihood: 'Mais raro' },
      { name: 'Rangido enquanto o arranque gira: impulsor ou cremalheira do volante', likelihood: 'Caso à parte — o som vem antes de o motor pegar' },
    ],
    canRide: [
      'Com um chiado que vive alguns segundos após a partida a frio e some por completo dá para rodar: não há ameaça direta. Ainda assim vale mostrar a correia na oficina quando der — o exame leva dois minutos, e trocar correia com roldana é dos serviços baratos.',
      'Se o chiado deixou de sumir com o aquecimento, aparece ao ligar o ar-condicionado ou a cada partida dura mais e mais alto, agende dentro de uma semana: uma correia gasta pode romper, e sem ela param o alternador e, em muitos motores, a bomba d’água. Se acender a luz da bateria ou o ponteiro da temperatura subir — pare e desligue o motor.',
    ],
    checks: [
      'Cronometrar a duração do chiado: alguns segundos após a partida é patinamento a frio; um som que não some com o aquecimento é desgaste da correia ou das roldanas.',
      'Buscar a relação com o clima: chiado só depois da chuva, da lavagem ou no frio fala de patinamento, e não de defeito de uma peça específica.',
      'Ligar o ar-condicionado ou o desembaçador com o motor funcionando: se o chiado aparece ou aumenta, a correia patina sob carga.',
      'Com o motor desligado, examinar a correia com uma lanterna: trincas transversais, bordas desfiadas e flancos «polidos» brilhantes são sinais de desgaste.',
      'Ver se há gotas ou marcas esbranquiçadas de líquido de arrefecimento perto das polias: apontam para a bomba d’água, e então é melhor não adiar a oficina.',
    ],
    appHelp:
      'O aplicativo Stuk faz as mesmas perguntas que o mecânico na recepção: quando o chiado aparece, se some depois de aquecer, o que se ouve enquanto o arranque trabalha. A gravação ajuda a separar o guincho da correia do rangido do arranque, e no relatório vêm causas prováveis com percentuais e uma conclusão clara: pode rodar, à oficina esta semana ou pare.',
    faq: [
      {
        q: 'Por que o motor chia só a frio e na umidade?',
        a: 'A borracha fria e úmida da correia agarra pior nas polias, então nos primeiros segundos após a partida ela patina e chia. Com o aquecimento a aderência volta e o som some. Uma correia nova com tensionador em ordem dá conta também dessas condições, então chiado matinal regular é motivo de inspeção.',
      },
      {
        q: 'O chiado passou a aparecer também com o motor quente. É sério?',
        a: 'É sinal de que o desgaste chegou ao estágio em que a correia patina já em condições normais. Por ora dá para rodar, mas agende dentro de uma semana: uma correia rompida deixa sem alternador e, em muitos carros, sem bomba d’água, e a viagem termina de guincho.',
      },
      {
        q: 'Qual a diferença entre chiado depois da partida e rangido durante a partida?',
        a: 'Chiado e guincho aparecem depois de o motor já estar funcionando, e a culpa costuma ser da correia. O rangido metálico se ouve antes — nos segundos em que o motor de arranque gira o motor — e indica engate ruim do impulsor com a cremalheira do volante. São peças diferentes e conserto diferente.',
      },
    ],
  },
};
