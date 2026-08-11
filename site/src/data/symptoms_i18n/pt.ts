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
};
