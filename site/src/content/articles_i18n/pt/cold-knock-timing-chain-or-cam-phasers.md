---
title: "Batida a frio: corrente de comando ou variador de fase"
metaTitle: "Batida a frio: corrente ou variador de fase | Stuk"
description: "O chocalho nos primeiros segundos após a partida fria vem tanto da corrente de comando esticada quanto do variador de fase. Como separar pela duração."
faq:
  - q: "Quantos segundos de batida a frio são normais?"
    a: "Um ou dois segundos logo depois da partida são considerados normais em muitos motores com variador de fase: o óleo ainda não chegou à parte de cima do motor. Um chocalho de mais de três a cinco segundos, e principalmente um que cresce de partida em partida, pede diagnóstico."
  - q: "A batida pode sumir depois da troca de óleo?"
    a: "Pode, se a causa for óleo que perdeu viscosidade ou que nunca foi o correto: o variador e o tensor da corrente trabalham com pressão de óleo e são sensíveis ao estado dele. Se óleo novo na viscosidade certa tirar o chocalho, o reparo pode esperar — mas continue ouvindo."
  - q: "Corrente esticada é perigosa?"
    a: "Um pulo de um ou dois dentes tira o ponto de comando: o motor perde força e pode nem pegar. No pior caso as válvulas encontram os pistões e o serviço vira retífica, então corrente esticada não é defeito para se conviver por anos."
sources:
  - title: "Schaeffler (INA): comando de válvulas, tensores e variadores de fase"
    url: "https://www.schaeffler.com"
  - title: "MANN-FILTER: filtragem de óleo e limpeza do sistema"
    url: "https://www.mann-filter.com"
---

Dois segundos de chocalho metálico logo depois de girar a chave numa manhã
fria assustam muito dono — nem sempre com razão. Esse som tem duas origens
típicas, e as duas dividem a mesma circunstância: enquanto o motor ficou
parado, o óleo escorreu para o cárter e os componentes que trabalham com
pressão de óleo ficaram sem ela. A primeira origem é a corrente de comando
com seu tensor hidráulico. A segunda é o variador de fase, o atuador que
gira o comando em relação à engrenagem usando pressão de óleo. Veja como
separar um caso do outro sem abrir o motor.

## Por que bate justamente a frio

O tensor hidráulico da corrente funciona como um pistão: uma mola empurra
sem parar e o óleo o trava na posição de trabalho. Durante a noite a
pressão cai, o tensor recua em parte e nas primeiras voltas a corrente
folga. O trecho frouxo bate nas sapatas e guias — e sai um chocalho curto,
tipo matraca.

O variador de fase é construído de forma parecida: as palhetas são seguras
por um pino de travamento e pela pressão de óleo. Sem pressão o rotor bate
dentro da própria folga contra a carcaça — um som mais seco e mais
individualizado, muitas vezes alguns estalos bem separados. Assim que a
bomba levanta pressão, os dois componentes assumem a posição de trabalho e
se calam.

## Como separar os dois

| Sinal | Corrente e tensor | Variador de fase |
|---|---|---|
| Duração | Chocalho estica por 3–10 segundos ou mais | Em geral 1–3 segundos, mais raro |
| Caráter | Matraca, como um punhado de pregos | Estalos secos e separados, tinido metálico |
| Tendência em meses | Vai ficando mais longo a cada partida | Estável por anos, acompanha o óleo |
| Com motor quente | Ruflar ao tirar o pé acima de 3.000 giros | Silêncio |
| Códigos de falha | Às vezes correlação do comando | Muitas vezes códigos do comando variável |

O grande divisor é a tendência. Corrente esticada não volta atrás: se seis
meses atrás o chocalho durava um segundo e hoje dura cinco, a tese da
corrente ganha força. O variador se comporta de forma mais constante e
reage mais ao estado do óleo. O retrato do variador está em
[chocalho do variador de fase a frio](/pt/articles/cam-phaser-rattle-when-cold/),
e o retrato sonoro geral das partidas frias está na página de sintoma
[batida no motor a frio](/pt/symptoms/engine-knock-when-cold/).

## O que checar antes da oficina

1. **O óleo.** Nível, idade, viscosidade. Óleo engrossado ou vencido
   alonga a pausa até a pressão chegar e provoca o som nos dois cenários.
2. **Uma gravação.** Comece a gravar antes de girar a chave e segure por
   vinte segundos. Isso captura a duração e o caráter do chocalho — os dois
   dados de que o mecânico precisa.
3. **Códigos de falha.** O scanner mostra se há códigos de comando variável
   ou de correlação do comando.
4. **Comportamento com o motor quente.** Um ruflar ou zumbido vindo do
   comando ao tirar o pé é argumento a favor da corrente.

## Como se decide o reparo

A diferença entre trocar uma corrente e retificar um motor é o melhor
argumento para não adiar o diagnóstico assim que o chocalho ficou
claramente mais longo.

Pergunte exatamente o que entra no orçamento da corrente: corrente sem
tensor, sapatas e guias raramente é trocada sozinha, porque guias gastas
esticam rápido também a corrente nova. Por isso os orçamentos falam em kit,
e não em uma peça só.

E do lado do variador, pergunte se a válvula de controle de óleo e a
telinha dela foram limpas antes de condenar o atuador — um variador
alimentado através de uma telinha entupida chocalha igualzinho a um
desgastado, e a limpeza custa uma fração da peça.

Se você não tem certeza se o seu ruído está dentro do normal, grave a
partida fria no aplicativo Stuk por vários dias seguidos. O app separa a
gravação por caráter e duração e mostra as causas prováveis com
porcentagens — e comparar as gravações entre si já mostra sozinho se o som
está estável ou crescendo.
