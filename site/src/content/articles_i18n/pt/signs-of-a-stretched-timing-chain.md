---
title: "Sinais de corrente de comando esticada"
metaTitle: "Corrente de comando esticada: som e testes | Pro-Stuk"
description: "Como soa uma corrente de comando esticada, quais códigos ela gera, como o alongamento é medido sem abrir o motor e como o serviço é decidido."
faq:
  - q: "Qual é o primeiríssimo sinal de corrente de comando esticada?"
    a: "Um chocalho ou ruído metálico nos primeiros segundos depois da partida a frio, que some em seguida. Enquanto o tensionador não recebe pressão de óleo, a corrente folgada tem tempo de fazer barulho. Com o tempo esse som dura mais e passa a aparecer também com o motor quente."
  - q: "A corrente pode estar esticada e não fazer barulho nenhum?"
    a: "Pode. Em alguns motores o primeiro sinal não é som, e sim códigos de correlação de comando (P0016, P0017), marcha lenta irregular e aceleração fraca. Por isso, com esses códigos a corrente é checada mesmo sem ruído estranho."
  - q: "Quanto dura uma corrente de comando?"
    a: "Varia muito: em projetos bons, de 200.000 a 300.000 km; em motores problemáticos ela estica entre 80.000 e 120.000. A vida depende bastante do óleo: trocas espaçadas e nível baixo aceleram o desgaste várias vezes."
  - q: "A corrente estica mesmo, como um elástico?"
    a: "Não, o metal não estica. O que se gasta são os pinos e as buchas das centenas de articulações da corrente; cada folga cresce frações de milímetro e o comprimento total aumenta. Por isso o alongamento é irreversível — corrente se troca, nunca se «aperta»."
sources:
  - title: "Schaeffler (INA): componentes da distribuição"
    url: "https://www.schaeffler.com/"
  - title: "SAE International: pesquisa sobre comando de válvulas e distribuição"
    url: "https://www.sae.org/"
---

A corrente de comando sincroniza o virabrequim com os comandos de
válvulas: é ela que decide que as válvulas abram exatamente no compasso
dos pistões. Raramente falha de um dia para o outro — vai relatando o
próprio estado por som, códigos de falha e comportamento. Abaixo estão os
sinais de corrente esticada por fase, as checagens possíveis sem abrir o
motor e como o serviço é decidido.

## O que significa «a corrente esticou»

O metal não estica como elástico. A corrente é feita de centenas de elos
unidos por pinos e buchas, e cada articulação desenvolve uma folga
microscópica com o tempo. Multiplicada pelo número de elos, essa folga
soma comprimento: **0,5 a 1 % de alongamento** já é o limite para a maioria
dos motores.

A folga é absorvida primeiro pelo tensionador, um êmbolo hidráulico que
empurra a corrente por uma sapata plástica usando a pressão do óleo.
Enquanto sobra curso, o motor trabalha quieto. Quando o êmbolo está quase
todo para fora, a corrente começa a chicotear nas guias e o ponto de
válvulas começa a se deslocar. É por isso que os sinais aparecem aos
poucos, e não de uma vez.

Aceleram o desgaste: trocas de óleo espaçadas, nível baixo, muitas partidas
a frio e longos períodos parado no trânsito. A corrente é lubrificada pelo
mesmo óleo do resto do motor, e óleo sujo trabalha como abrasivo nas
articulações.

## Como soa uma corrente esticada

O quadro clássico é **um chocalho ou ruído metálico nos primeiros segundos
depois da partida a frio**, que some assim que o tensionador ganha pressão.
O som lembra o batido de um diesel ou argolas de metal se derramando umas
sobre as outras, e vem do lado da distribuição — normalmente a frente do
motor ou, num motor transversal, o lado que fica junto de uma das rodas.

Conforme o desgaste avança, o som muda:

- o chocalho depois da partida dura mais — não 1 ou 2 segundos, e sim 10,
  30 ou mais;
- o ruído aparece **com o motor quente**, em marcha lenta;
- ao tirar o pé de repente ou dar uma acelerada seca surge um
  **chacoalho** — a corrente folgada batendo nas sapatas;
- na fase adiantada o chocalho fica constante e alto.

A corrente tem um sósia: o tensionador gasto ou com ar. Ele produz os
mesmos sons com uma corrente sadia e é bem mais barato de resolver, então
as oficinas checam esse item primeiro. O contrário também acontece: depois
de um longo período parado ou de uma troca de óleo, mesmo um conjunto
sadio pode fazer barulho por instantes — a hora de se preocupar é quando o
som se repete em toda partida e vai ficando mais longo.

Não confunda a corrente com outros sons de motor frio:
[tuchos hidráulicos tiquetaqueando a frio](/pt/articles/hydraulic-lifters-ticking-when-cold/)
soam mais agudos e mais regulares que o chocalho da corrente. A referência
rápida de sintoma está em
[batida no motor a frio](/pt/symptoms/engine-knock-when-cold/).

## Sinais sem som: códigos e comportamento

Uma corrente esticada desloca a posição relativa dos eixos, e a eletrônica
enxerga isso antes de o ouvido perceber qualquer coisa:

- **Luz de injeção com códigos de correlação** — mais frequentemente
  P0016/P0017 (divergência entre as posições do virabrequim e do comando),
  às vezes P0008;
- **marcha lenta irregular**, com falhas leves;
- **aceleração fraca e consumo subindo** — o ponto se deslocou e o
  enchimento dos cilindros piorou;
- **partida difícil**, sobretudo a frio: o motor de arranque gira mais que
  o normal;
- em motores com variador de fase, falhas vindas dele também, porque os
  atuadores já não conseguem compensar o desvio.

Nada disso condena a corrente sozinho: sensores de fase, os próprios
variadores e um sistema de comando variável sujo dão um quadro parecido.
Por isso o passo seguinte é uma checagem.

## As fases do alongamento

| Fase | O que você ouve e vê | O que fazer |
|---|---|---|
| Inicial | Chocalho de 1 a 3 segundos na partida a frio, sem códigos | Acompanhar, checar a corrente na próxima revisão |
| Intermediária | Ruído de 10 a 20 segundos, chacoalho numa acelerada seca | Diagnóstico em duas semanas |
| Avançada | P0016/P0017, marcha lenta irregular, barulho também a quente | Medir o alongamento, programar a troca |
| Crítica | Batido constante, o motor morre ou nem pega | Não dirigir: a corrente pode pular dente |

O ritmo da evolução é difícil de prever: em alguns motores a corrente faz
barulho por dezenas de milhares de quilômetros, em outros passa menos de
uma temporada entre os primeiros códigos e o pulo de dente. O que se
arrisca com isso, e quando é aceitável ir dirigindo até a oficina, está em
[dá para andar com a corrente de comando esticada](/pt/articles/can-you-drive-with-a-stretched-timing-chain/).

## Como o alongamento é medido

A boa notícia: na maioria dos motores o veredito sai **sem abrir o motor**.

1. **Com scanner.** Os ângulos de correção dos variadores de fase e a
   correlação entre os sensores de virabrequim e de comando mostram o
   quanto o ponto se deslocou. Esse costuma ser o primeiro passo.
2. **Pela extensão do tensionador.** Retira-se o tensionador e mede-se
   quanto do curso ele já consumiu. Um êmbolo quase todo para fora é sinal
   seguro de corrente esticada.
3. **Pelas marcas de ponto.** Alinha-se a marca do virabrequim e se
   confere o quanto as marcas do comando ficaram atrasadas em relação à
   posição correta.
4. **Com endoscópio** — inspeciona-se o desgaste das sapatas e das guias
   sem tirar a tampa.

Como escutar você mesmo está descrito em
[checar a tensão da corrente de comando de ouvido](/pt/articles/checking-timing-chain-tension-by-ear/).

## Como se decide a troca

A mão de obra varia várias vezes: em alguns motores a corrente se troca em
meio dia, em outros é preciso tirar a tampa frontal, os acessórios e às
vezes o próprio motor. Peça o orçamento separado em peças e mão de obra —
assim fica mais fácil comparar oficinas e enxergar onde estão propondo
economia.

O kit é o padrão: corrente, tensionador, guias e engrenagens. Colocar
corrente nova em engrenagens gastas e tensionador velho significa voltar ao
mesmo problema em pouca quilometragem. Com tudo aberto, costuma-se
renovar também os retentores e juntas já alcançados e, em motores onde a
bomba d'água ou a bomba de óleo trabalha na mesma corrente, essas peças
também.

Duas coisas que as oficinas nem sempre comentam. Alguns parafusos do
virabrequim e do comando são de deformação plástica, de uso único, e
reaproveitá-los é uma causa conhecida de falha repetida. E, depois da
montagem, o motor deve ser girado à mão por duas voltas completas com as
marcas conferidas de novo antes da primeira partida — é o passo que pega o
erro enquanto ele ainda sai de graça.

Terminado o serviço, peça para ver a corrente velha ao lado da nova — num
conjunto gasto a diferença de comprimento se vê a olho nu.

Se você não tem certeza se é a corrente ou outra coisa, comece por uma
gravação: o aplicativo Pro-Stuk analisa o motor em funcionamento junto com as
suas respostas e mostra as causas prováveis com porcentagens.
