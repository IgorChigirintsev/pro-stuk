---
title: "Sinais de tensor da corrente de comando com defeito"
metaTitle: "Tensor da corrente de comando: sinais de falha | Stuk"
description: "Como perceber que o tensor da corrente enfraqueceu: matraquear na partida fria, chiado em marcha lenta, batida na acelerada e o risco de pular dente."
faq:
  - q: "Por que a corrente chocalha só na partida fria?"
    a: "Enquanto o carro fica parado, o óleo escoa do tensor hidráulico, e nos primeiros segundos depois da partida a corrente trabalha com tensão reduzida e chicoteia nas guias. Assim que a pressão de óleo sobe, o êmbolo se estende e o som some. Quanto mais gasto o tensor, mais tempo dura o matraquear."
  - q: "Dá para trocar o tensor sem trocar a corrente?"
    a: "Se a corrente não alongou e as guias estão inteiras, dá, e sai bem mais barato. Mas passando dos 150.000 km normalmente tudo gastou junto, e tensor novo só mascara corrente esticada por um tempo. A decisão vem depois de medir o alongamento da corrente."
  - q: "Como o óleo do motor afeta o tensor da corrente?"
    a: "O tensor hidráulico trabalha com pressão de óleo, então ele é sensível a nível, viscosidade e limpeza. Óleo velho com abrasivo come o êmbolo e a válvula; nível baixo deixa o tensor sem apoio. Trocas regulares de óleo são a prevenção principal de todo o conjunto de corrente."
sources:
  - title: "Schaeffler (INA): tensores e componentes do acionamento por corrente"
    url: "https://www.schaeffler.com"
  - title: "SAE International: pesquisa sobre trem de válvulas e sincronismo"
    url: "https://www.sae.org/"
---

O tensor da corrente de comando é um pequeno cilindro hidráulico que
mantém esticada a corrente do trem de válvulas. Enquanto ele funciona, a
corrente trabalha silenciosa e precisa; quando enfraquece, aparecem
ruídos que muito dono confunde com «batida de motor» e já se prepara para
o pior. Na prática o tensor é um dos motivos mais comuns e relativamente
baratos de um acionamento barulhento, e vale reconhecer os sintomas dele.

## Como o tensor funciona e por que depende do óleo

Dentro do tensor existe um êmbolo que a pressão do óleo do motor empurra
para fora, pressionando a corrente por meio de uma sapata. Uma válvula de
retenção segura o óleo lá dentro, e muitos projetos têm ainda uma catraca
mecânica que impede o êmbolo de recuar por completo quando o motor para.

Daí saem dois pontos fracos. Primeiro, qualidade e nível do óleo: óleo
sujo gasta o êmbolo e a válvula, nível baixo deixa o tensor sem apoio.
Segundo, o carro parado: durante a noite parte do óleo escoa do corpo, e
nos primeiros segundos depois da partida a tensão vem só da mola e da
catraca. Em peça nova isso basta; em peça gasta, não.

## O sinal principal: ruído nos primeiros segundos da partida fria

O quadro clássico é matraquear metálico, chocalho ou tique logo depois da
partida fria, que morre em um a cinco segundos. É a corrente frouxa
chicoteando as guias até o êmbolo criar pressão. Um ou dois segundos em
certos motores é característica de projeto; cinco ou mais, a cada partida,
com tendência a ficar mais longo, é desgaste típico do tensor.

Importa separar esse som dos vizinhos. Assobio agudo com o motor frio é a
correia dos acessórios. O panorama geral das batidas de motor frio está na
página de sintoma
[batida no motor frio](/pt/symptoms/engine-knock-when-cold/), e o método de
escuta em
[conferir a tensão da corrente de ouvido](/pt/articles/checking-timing-chain-tension-by-ear/).

## Outros sinais de falha

- **Chiado e tique em marcha lenta.** Corrente com tensão insuficiente
  oscila e roça as guias mesmo com o motor quente — estágio bem mais
  sério, com som próprio de corrente esticada.
- **Batida metálica na acelerada rápida e no alívio.** Quando a carga
  muda, a folga da corrente se desloca e o ramo bate na sapata.
- **Códigos de falha de ponto de comando.** A central percebe virabrequim e
  comandos fora de compasso (códigos como P0016, P0017), a luz de injeção
  acende, e podem vir marcha lenta instável e perda de força. Os mesmos
  códigos saem de um variador de fase com defeito.
- **Ruído que acompanha a pressão de óleo.** O som cresce com o motor
  quente em marcha lenta (quando a pressão é mais baixa) e some com
  rotação — assinatura de hidráulica, não de mecânica.

Se o som estranho é constante e ignora a temperatura, o espectro completo
de causas está na página de sintoma
[batida no motor](/pt/symptoms/knocking-in-engine/).

## Os estágios: da característica de projeto à emergência

| Estágio | O que se ouve | O que fazer |
|---|---|---|
| Normal de projeto | Tique por 1–2 segundos a frio, sem piorar | Cuidar do óleo |
| Desgaste inicial | Matraquear por 3–5 segundos a cada partida fria | Diagnóstico na próxima revisão |
| Desgaste acentuado | Chiado em marcha lenta, batida na acelerada | Medir o alongamento em semanas |
| Crítico | Matraquear constante, códigos de ponto, perda de força | Oficina já, risco de pular dente |

## Como se decide o reparo

O perigo do tensor gasto não é o ruído e sim o fato de ele não segurar
mais a corrente contra um pulo de dente. Corrente que pula um dente joga o
ponto fora, e na maioria dos motores modernos o que vem depois é válvula
encontrando pistão e reparo com o cabeçote fora — os cenários estão
descritos no capítulo sobre as consequências de a corrente arrebentar por
tipo de motor. Diante disso, trocar tensor é serviço pequeno.

Duas coisas definem o trabalho. Primeira, a medição: se o alongamento da
corrente foi de fato medido — pelo comprimento estendido do tensor, pela
posição da catraca ou pelo desvio de ponto de comando no scanner — em vez
de chutado. Tensor novo em corrente esticada compra meses, não anos.
Segunda, o óleo: se o óleo velho estava preto e vencido, a causa do
desgaste continua dentro do motor, e o tensor novo vai encontrar o mesmo
abrasivo.

Em quilometragem alta se troca o kit inteiro: corrente, tensor, guias e
engrenagens, porque a mão de obra é compartilhada e guia gasta destrói
corrente nova rapidinho.

O jeito mais fácil de mostrar o problema à oficina é pelo som. Grave uma
partida fria no aplicativo Stuk — ele cruza a gravação com os sons típicos
de defeito, leva em conta as suas respostas e avalia com que urgência o
mecânico é necessário.
