---
title: "Señales de un desfasador VVT averiado"
metaTitle: "Desfasador VVT averiado: sonido y síntomas | Pro-Stuk"
description: "Señales de un desfasador VVT averiado: traqueteo al arrancar, ralentí inestable, más consumo, códigos P0010–P0017. Cómo separarlo de otros ruidos del motor."
faq:
  - q: "¿Qué es un desfasador VVT en palabras sencillas?"
    a: "Es un mecanismo hidráulico montado en el árbol de levas que, con la presión del aceite, gira el árbol y cambia el momento en que se abren las válvulas. Gracias a eso el motor tiene empuje abajo y potencia arriba al mismo tiempo."
  - q: "¿Qué códigos de avería apuntan a un desfasador VVT?"
    a: "Sobre todo la familia P0010–P0017: correlación entre árbol de levas y cigüeñal, o fallo en el circuito de mando del desfasador. Pero una cadena de distribución estirada y una electroválvula de aceite agarrotada dan los mismos códigos, así que hay que comprobar el desfase real con la máquina de diagnosis."
  - q: "¿El desfasador se cambia solo o junto con la cadena de distribución?"
    a: "Técnicamente por separado, pero en la práctica la sustitución casi siempre se junta con la cadena: son piezas vecinas y la mayor parte del desmontaje es común. Sale más barato que abrir la parte delantera del motor dos veces."
sources:
  - title: "Schaeffler (INA): sistemas de distribución variable"
    url: "https://www.schaeffler.com"
  - title: "SAE International: investigación sobre distribución y tren de válvulas"
    url: "https://www.sae.org/"
---

VVT —distribución variable— es el sistema que desplaza el momento de
apertura de las válvulas. Su actor principal es el desfasador montado en el
árbol de levas, que con la presión del aceite gira el árbol y mueve los
tiempos de las válvulas según el régimen en que esté trabajando el motor.
Cuando el desfasador o su electroválvula de mando se desgastan, el motor lo
avisa con todo un conjunto de señales, desde un traqueteo al arrancar hasta
un consumo que sube. Aquí las tiene reunidas, para comparar el cuadro con el
de su coche.

## El sonido: traqueteo al arrancar en frío

El síntoma más temprano y más reconocible es un traqueteo seco, de sonido
casi diésel, durante el primer segundo a tres segundos después de arrancar
el motor frío. Mientras la presión de aceite no ha subido, un desfasador
gastado no queda bloqueado y sus paletas golpean dentro de sus cámaras. El
sonido viene de la parte alta del motor, de debajo de la tapa de balancines,
y desaparece en cuanto el aceite llega al desfasador.

Según avanza el desgaste, el traqueteo se alarga, empieza a repetirse en
cada arranque y, en casos avanzados, se oye también con el motor caliente.
Para situarlo entre sonidos parecidos, vea la página de síntoma
[golpeteo del motor en frío](/es/symptoms/engine-knock-when-cold/).

## Cómo se comporta el motor

La distribución gobierna el llenado de los cilindros, así que un desfasador
averiado estropea el carácter del motor:

- **ralentí inestable**: las vueltas vagan y el coche vibra; las causas
  relacionadas están en
  [vibración al ralentí](/es/symptoms/vibration-at-idle/);
- **pérdida de potencia**, abajo o arriba, según dónde se haya quedado
  atascado el desfasador;
- **respuesta perezosa al acelerador**, con huecos al acelerar;
- **más consumo de combustible**: la mezcla arde en momentos equivocados;
- en casos malos el motor **se cala al ralentí** o arranca a regañadientes.

Nada de esto apunta al VVT por sí solo, pero combinado con un traqueteo en
frío el cuadro se vuelve característico.

## La electrónica: códigos de avería

La centralita compara constantemente la posición ordenada y la posición real
del árbol de levas que leen los sensores. Cuando el desfasador no consigue
seguirla o se atasca, aparece la familia P0010–P0017 (correlación entre
árbol de levas y cigüeñal, circuito de mando del desfasador) y se enciende
el testigo de avería del motor. El motor entra a menudo en modo de
emergencia con el sistema VVT desactivado: baja la potencia y sube el
consumo, pero el coche circula.

Un matiz importante: los mismos códigos salen con una cadena de distribución
estirada y con la electroválvula de aceite agarrotada, que es la que dosifica
el aceite hacia el desfasador. Por eso nunca se cambia una pieza solo por un
código: primero se comprueba el desfase real con la máquina de diagnosis, y
la electroválvula con él.

## Con qué se confunde un desfasador VVT

| Señal | ¿Encaja con VVT? | Qué más revisar |
|---|---|---|
| Traqueteo 1–3 segundos tras arrancar | Sí, el caso clásico | El tensor de la cadena de distribución |
| Tictac uniforme en todos los regímenes | No | Inyectores, taqués hidráulicos |
| Ralentí inestable con testigo de motor | Sí | Bobinas, entrada de aire falsa |
| Petardeo hacia la admisión | Con el desfase muy desviado | Mezcla, encendido |

Un tictac constante que ignora el calentamiento apunta más bien al sistema
de combustible. Y si el desfase está muy desviado, la mezcla puede
encenderse en el colector de admisión; por qué ocurre eso se explica en
[petardeo por la admisión: las causas](/es/articles/intake-backfire-causes/).
El traqueteo procedente de la propia distribución se trata en
[comprobar de oído la tensión de la cadena de distribución](/es/articles/checking-timing-chain-tension-by-ear/)
y en el artículo sobre cómo suena una cadena de distribución estirada; el
picado bajo carga es otra historia distinta,
[señales de detonación en el motor](/es/articles/signs-of-engine-detonation/).

## Cómo se decide la reparación

Empiece por lo barato: el nivel de aceite y su estado, y después una
diagnosis. La máquina muestra cuánto se retrasa el desfase real respecto al
ordenado y separa el desfasador de la electroválvula. Un aceite nuevo de la
especificación correcta a menudo quita parte de los síntomas si el
desfasador todavía está vivo, y eso no es casualidad: el VVT funciona con
presión de aceite a través de conductos finos, así que los intervalos de
cambio alargados y la especificación equivocada están entre los motivos más
comunes de que un desfasador se agarrote.

Un desfasador gastado se sustituye, por norma junto con la cadena de
distribución, porque la mano de obra es común. Dos cosas que preguntar. Si
se limpió o se cambió la electroválvula de aceite con su filtro-rejilla: un
desfasador nuevo alimentado a través de una rejilla obstruida se comporta
exactamente igual que el viejo. Y si se revisaron los conductos de engrase
del árbol de levas por si tienen lodos, que es lo que un taller encuentra en
un motor con historial de mantenimiento descuidado.

Dejarlo para más adelante sale cada vez más caro: un desfasador gastado
acelera el desgaste de la cadena, y un desfase muy desviado se convierte en
un riesgo para válvulas y pistones.

Si no tiene claro que los ruidos de su motor sean el desfasador, grabe un
arranque en frío con la aplicación Pro-Stuk: el algoritmo cruza la grabación con
sus respuestas y devuelve las causas probables con porcentajes y un nivel de
urgencia, un buen punto de partida para hablar con el taller.
