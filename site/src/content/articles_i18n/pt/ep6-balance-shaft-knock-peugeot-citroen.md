---
title: "Batida dos eixos balanceadores no EP6 da Peugeot e da Citroën"
metaTitle: "Batida no EP6: o que realmente bate no motor | Pro-Stuk"
description: "O que de fato bate num motor EP6 quando os donos falam em eixos balanceadores: corrente, tensor, variadores de fase e o óleo. As verificações."
faq:
  - q: "O EP6 tem eixos balanceadores?"
    a: "A expressão «batida dos eixos balanceadores» nesses motores é mais popular do que técnica: é como os donos descrevem uma batida vibrante vinda da parte de baixo e da frente do motor. Antes de caçar o exótico, checam-se o sincronismo e o óleo — nessa família eles produzem um som parecido com muito mais frequência."
  - q: "Por que a batida some depois do aquecimento?"
    a: "O óleo frio enche o tensor e os variadores de fase mais devagar, então nos primeiros segundos sobra folga no sincronismo. Depois de aquecer, a pressão estabiliza, as folgas são tomadas e o som desaparece. Isso é estágio inicial, não pane."
  - q: "Com que urgência devo ir à oficina?"
    a: "Se a batida é curta e só a frio, há uma margem de algumas semanas. Se ela persiste com o motor quente, apareceram códigos de falha ou a força caiu, não demore: corrente que pula um dente nesses motores sai caro."
sources:
  - title: "Schaeffler (INA): sincronismo, correntes e tensores"
    url: "https://www.schaeffler.com"
  - title: "SAE International: pesquisa sobre comando de válvulas e sincronismo"
    url: "https://www.sae.org/"
---

O motor 1.6 EP6 equipou uma enorme quantidade de modelos da Peugeot e da
Citroën, e tem um conjunto reconhecível de reclamações. Uma delas vem
formulada como "os eixos balanceadores estão batendo": o dono ouve uma
batida grave e vibrante na parte de baixo e da frente do motor,
normalmente a frio, e sai atrás de uma explicação. Abaixo vai uma análise
honesta: o que realmente produz esse som nessa família de motores e em que
ordem se verifica.

## O que está por trás da expressão

O nome do componente aqui é secundário: o que importa é que o som é
descrito como uma matraca surda, levemente vibrante, vinda da parte de
baixo e da frente do motor, durando os primeiros segundos ou minutos
depois da partida. No EP6 várias coisas bem concretas batem com essa
descrição, e um mecanismo de balanceamento está longe de ser a primeira da
lista.

- **A corrente de comando e o tensor dela.** A resposta mais comum. O
  tensor trabalha com óleo e, até a pressão subir, a corrente bate nas
  guias.
- **Os variadores de fase.** Os atuadores dos comandos dão uma matraca
  curta nos primeiros segundos se o pino de travamento estiver gasto —
  [matraca do variador de fase a frio](/pt/articles/cam-phaser-rattle-when-cold/).
- **Galerias de óleo sujas.** O motor é sensível à qualidade do óleo e ao
  intervalo de troca; galerias carbonizadas atrasam a alimentação.
- **Componentes de acessórios.** Polias e o esticador da correia
  acrescentam os próprios harmônicos, que se misturam aos do motor.
- **Coxins do motor.** Um coxim afundado transforma vibração normal em uma
  batida nítida pela carroceria —
  [como testar os coxins do motor sob carga](/pt/articles/checking-engine-mounts-under-load/).

O retrato sonoro geral desse grupo está na página de sintoma
[batida no motor a frio](/pt/symptoms/engine-knock-when-cold/), e a dúvida
mais comum entre as duas primeiras causas em
[batida a frio: corrente ou variador de fase](/pt/articles/cold-knock-timing-chain-or-cam-phasers/).

## Por que o sincronismo é verificado primeiro

Porque nesse motor ele realmente se desgasta, e porque o custo de errar é
alto. Uma corrente esticada primeiro faz barulho só na partida, depois por
mais tempo, depois em marcha lenta com o motor quente, e por fim pode
pular um dente — com todas as consequências para as válvulas.

O segundo argumento é o quanto a verificação é acessível. Tirar a tampa de
válvulas e inspecionar o tensor dá resposta na hora, enquanto caçar causas
raras exige muito mais desmontagem.

Existe um terceiro argumento, puramente prático. O EP6 tem fama de motor
sensível à manutenção: lida mal com intervalos de troca de óleo esticados,
óleo barato fora da especificação e trajetos curtos constantes, nos quais
ele nunca chega à temperatura de trabalho. Tudo isso atinge primeiro os
componentes que vivem de pressão de óleo — o tensor da corrente e os
variadores de fase. Por isso uma conversa sobre o som quase sempre começa
com "quando o óleo foi trocado, e com qual", e isso não é enrolação, é o
caminho mais curto até a resposta.

## Como a oficina verifica

| Etapa | O que se faz | O que dá |
|---|---|---|
| Entrevista | Quando o óleo foi trocado e qual | Elimina metade das teorias |
| Scanner | Códigos de correlação de comando e de falha de combustão | Mostra indiretamente sincronismo fora do lugar |
| Estetoscópio | Escuta de pontos, a frio e quente | Localiza a origem |
| Correia de acessórios fora | Uma partida curta | Separa o motor do alternador e das polias |
| Tampa de válvulas | Inspeção de corrente, sapatas e tensor | Avaliação direta do desgaste |
| Coxins | Balançar o motor sob carga | Revela coxim afundado |

Vale também confirmar que o som vem mesmo do motor. Zunidos e zumbidos do
cofre costumam vir do alternador — como isso se apresenta está em
[Chevrolet Cruze: zunido do rolamento do alternador](/pt/articles/chevrolet-cruze-alternator-bearing-whine/),
e a separação completa entre motor e acessórios em
[batida do motor ou dos acessórios: como localizar](/pt/articles/engine-or-accessory-knock-how-to-localise/).

## Como se decide o conserto

O conselho prático para esse motor: não corra atrás de um diagnóstico
exótico enquanto as teorias básicas não estiverem fechadas. Óleo novo na
especificação correta, intervalo de troca honesto e sincronismo renovado
na hora certa resolvem a esmagadora maioria das reclamações de batida, e
custam menos que qualquer investigação profunda.

Duas coisas que vale perguntar quando o serviço de sincronismo for
orçado. Se o kit completo está incluído — corrente, tensor, guias e
engrenagens — já que corrente nova sobre guias gastas traz o problema de
volta rápido. E se as telas das válvulas de controle de óleo foram
limpas: num motor com histórico de manutenção descuidado são elas o
motivo de os variadores matraquearem, e um atuador novo alimentado por uma
tela entupida se comporta exatamente como o velho.

Se quiser registrar o som antes que ele mude, grave com o aplicativo Pro-Stuk
nos primeiros segundos depois de uma partida a frio. O aplicativo cruza a
gravação com as suas respostas a algumas perguntas e mostra as causas
prováveis com percentuais — e a gravação guardada é útil um mês depois
para saber se a coisa piorou.
