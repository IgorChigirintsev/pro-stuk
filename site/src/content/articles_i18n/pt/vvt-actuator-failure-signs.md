---
title: "Sinais de variador de fase (VVT) com defeito"
metaTitle: "Variador de fase com defeito: som e sintomas | Stuk"
description: "Sinais de variador de fase VVT com defeito: chocalho após a partida, marcha lenta irregular, consumo alto, códigos P0010–P0017 e como separar de outros ruídos."
faq:
  - q: "O que é o variador de fase, em linguagem simples?"
    a: "É um mecanismo hidráulico no comando de válvulas que usa a pressão do óleo para girar o eixo e mudar o momento de abertura das válvulas. Isso dá ao motor força embaixo e potência em cima ao mesmo tempo."
  - q: "Quais códigos de falha apontam para o variador de fase?"
    a: "Quase sempre a família P0010–P0017: correlação entre comando e virabrequim ou falha no circuito de controle do variador. Mas corrente de comando esticada e válvula solenoide travada dão os mesmos códigos, então o avanço real precisa ser conferido no scanner."
  - q: "O variador é trocado sozinho ou junto com a corrente?"
    a: "Tecnicamente sozinho, mas na prática a troca quase sempre é combinada com a corrente: as peças são vizinhas e boa parte da desmontagem é a mesma. Sai mais barato do que abrir a frente do motor duas vezes."
sources:
  - title: "Schaeffler (INA): sistemas de comando de válvulas variável"
    url: "https://www.schaeffler.com"
  - title: "SAE International: pesquisa sobre trem de válvulas e sincronismo"
    url: "https://www.sae.org/"
---

VVT — comando de válvulas variável — é o sistema que desloca o momento de
abertura das válvulas. O ator principal dele é o variador de fase montado
no comando, que usa a pressão do óleo para girar o eixo e mover os eventos
das válvulas conforme o regime do motor. Quando o variador ou a válvula de
controle dele se desgasta, o motor avisa com um conjunto inteiro de sinais,
de um chocalho depois da partida ao consumo de combustível subindo. Aqui
estão todos juntos, para você comparar com o seu carro.

## O som: chocalho depois da partida a frio

O sintoma mais precoce e mais reconhecível é um chocalho seco, parecido com
diesel, no primeiro a terceiro segundo depois que o motor frio pega.
Enquanto a pressão de óleo não subiu, um variador gasto não fica travado e
as paletas dele batem nas câmaras. O som vem da parte de cima do motor, de
baixo da tampa de válvulas, e some assim que o óleo chega ao variador.

Conforme o desgaste avança, o chocalho fica mais longo, passa a se repetir
em toda partida e, em casos adiantados, se ouve também com o motor quente.
Para situá-lo entre sons parecidos, veja a página de sintoma
[batida no motor a frio](/pt/symptoms/engine-knock-when-cold/).

## Como o motor se comporta

O sincronismo das válvulas comanda o enchimento dos cilindros, então um
variador com defeito estraga o caráter do motor:

- **marcha lenta irregular** — o giro oscila e o carro treme; as causas
  relacionadas estão em
  [vibração em marcha lenta](/pt/symptoms/vibration-at-idle/);
- **perda de potência** — embaixo ou em cima, dependendo de onde o variador
  travou;
- **resposta preguiçosa ao acelerador**, buracos na aceleração;
- **consumo de combustível maior** — a mistura queima nos momentos errados;
- em casos ruins o motor **morre em marcha lenta** ou custa a pegar.

Nenhum desses aponta VVT sozinho, mas junto com o chocalho a frio o quadro
fica característico.

## A eletrônica: códigos de falha

A central compara o tempo todo a posição comandada e a posição real do
comando, lida pelos sensores. Quando o variador não acompanha ou trava,
aparece a família P0010–P0017 (correlação entre comando e virabrequim,
circuito de controle do variador) e a luz de injeção acende. O motor
costuma entrar em modo de emergência com o sistema VVT desligado: a
potência cai e o consumo sobe, mas ele anda.

Um detalhe importante: os mesmos códigos aparecem com corrente de comando
esticada e com a válvula solenoide travada — a válvula que dosa o óleo
para o variador. Por isso nunca se troca peça só por código: primeiro se
confere o avanço real no scanner, junto com a válvula.

## Com o que o variador de fase se confunde

| Sinal | Combina com VVT? | O que mais checar |
|---|---|---|
| Chocalho de 1 a 3 segundos após a partida | Sim, o clássico | Tensor da corrente de comando |
| Tique-taque uniforme em todo regime | Não | Bicos injetores, tuchos hidráulicos |
| Marcha lenta irregular com luz de injeção | Sim | Bobinas, entrada de ar falsa |
| Estouro na admissão | Com sincronismo muito fora | Mistura, ignição |

Um tique-taque constante que ignora o aquecimento é mais provável ser
sistema de combustível. E se o sincronismo estiver bem fora, a mistura pode
acender no coletor de admissão — o porquê está em
[estouro na admissão: as causas](/pt/articles/intake-backfire-causes/).
O chocalho do próprio comando de válvulas está em
[avaliar a tensão da corrente de comando de ouvido](/pt/articles/checking-timing-chain-tension-by-ear/)
e no texto sobre como soa uma corrente de comando esticada; e a batida de
detonação sob carga é outra história —
[sinais de detonação no motor](/pt/articles/signs-of-engine-detonation/).

## Como se decide o conserto

Comece pelo lado barato: nível e estado do óleo, depois um escaneamento de
diagnóstico. O scanner mostra o quanto o avanço real fica atrás do valor
comandado e separa o variador da válvula solenoide. Óleo novo na
especificação correta muitas vezes remove parte dos sintomas se o variador
ainda estiver vivo — e isso não é coincidência. O VVT funciona com pressão
de óleo por galerias finas, então intervalos de troca esticados e
especificação errada estão entre os motivos mais comuns de um variador
travar.

Um variador gasto é trocado, em regra junto com a corrente de comando,
porque a mão de obra é a mesma. Duas coisas para perguntar. Se a válvula
solenoide e a tela dela foram limpas ou trocadas — um variador novo
alimentado por uma tela entupida se comporta igualzinho ao velho. E se as
galerias de óleo do comando foram checadas quanto a borra, que é o que a
oficina encontra num motor com histórico de manutenção descuidado.

Adiar fica cada vez mais caro: um variador gasto acelera o desgaste da
corrente, e sincronismo muito fora vira risco para válvulas e pistões.

Se você não tem certeza de que os barulhos do seu motor são o variador,
grave uma partida a frio no aplicativo Stuk: o algoritmo cruza a gravação
com suas respostas e devolve as causas prováveis com porcentagens e um
nível de urgência — um bom ponto de partida para a conversa com a oficina.
