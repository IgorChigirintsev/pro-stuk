import type { HubText } from './index';

/** Разделы по узлам: португальский. Слаг общий с английским, переводится только текст. */
export const pt: Record<string, HubText> = {
  dvigatel: {
    h1: 'Ruídos e batidas do motor',
    short: 'Motor',
    metaTitle: 'Ruídos e batidas do motor: guia completo | Pro-Stuk',
    description:
      'Todos os sons do motor num só lugar: batidas, tiquetaque, chocalho, tilintar e assobio. Como separar o inofensivo do perigoso e o que verificar sozinho.',
    intro: [
      'O motor é a peça mais faladora do carro e também a mais ambígua: sob a palavra «batida» cabem tanto o inofensivo estalar dos injetores como as chumaceiras da cambota gastas, em que cada quilómetro aproxima uma retificação. O que os separa não é o volume, mas de onde vem o som, quando aparece e como reage ao acelerador e à temperatura.',
      'Esta secção reúne um guia por cada tipo de som: do tiquetaque das válvulas e do sussurro da corrente de distribuição à detonação e à batida das chumaceiras da biela. Cada um traz o retrato sonoro, verificações seguras sem desmontar nada e uma avaliação honesta da urgência.',
    ],
  },
  podveska: {
    h1: 'Batidas e rangidos da suspensão',
    short: 'Suspensão e direção',
    metaTitle: 'Batidas e rangidos da suspensão: guia | Pro-Stuk',
    description:
      'Batidas em lombas, rangidos, folga na direção: como localizar a origem na suspensão e na direção e o que pode verificar sozinho.',
    intro: [
      'A suspensão desgasta-se aos poucos e quase sempre avisa com um ruído muito antes de se tornar perigosa. O problema é outro: a mesma batida em piso irregular vem tanto das bieletas baratas como da rótula, cuja rutura em andamento já é uma questão de segurança.',
      'A secção agrupa os guias por carácter do som e condições: batidas rápidas em piso ondulado, impactos isolados em buracos, rangido ao abanar o carro, batida no volante. À parte, os sinais de desgaste de cada peça e verificações que se fazem sem elevador.',
    ],
  },
  tormoza: {
    h1: 'Chiadeira e raspagem dos travões',
    short: 'Travões e rodas',
    metaTitle: 'Chiadeira e raspagem dos travões: guia | Pro-Stuk',
    description:
      'Chiadeira, assobio, raspagem e trepidação ao travar: o que significa cada som, quando não se deve seguir viagem e como verificar pastilhas e pinça.',
    intro: [
      'Os travões são o único sistema em que o som deve ser levado à letra: a maioria dos sinais é intencional do fabricante. O indicador metálico de desgaste começa a assobiar de propósito quando as pastilhas estão a acabar, e a raspagem de metal contra metal significa que a reserva já terminou.',
      'Ao mesmo tempo, a causa mais frequente de chiadeira é inofensiva: a camada de ferrugem da noite nos discos, que sai nas primeiras travagens. Entram aqui também os ruídos de rodas e cubos: zumbido do rolamento, vibração a velocidade e batidas, muitas vezes confundidos com os travões.',
    ],
  },
  transmissiya: {
    h1: 'Ruídos da caixa e da transmissão',
    short: 'Transmissão',
    metaTitle: 'Ruídos da caixa e da transmissão: guia | Pro-Stuk',
    description:
      'Uivo da caixa, estalidos dos semieixos, solavancos na mudança e zumbido da embraiagem: como localizar a origem por baixo do piso.',
    intro: [
      'A transmissão manifesta-se de forma diferente do motor e da suspensão: os seus ruídos dependem de estar ou não a transmitir binário. Um som que desaparece ao tirar o pé e volta em carga pertence quase sempre a esta família.',
      'A secção reúne guias sobre caixa, embraiagem, semieixos e diferencial: como soa cada órgão, que verificação mostra algo sem desmontar e a partir de quando continuar sai caro.',
    ],
  },
  vyhlop: {
    h1: 'Ruídos do escape',
    short: 'Escape',
    metaTitle: 'Ruídos do escape: guia completo | Pro-Stuk',
    description:
      'Ronco, estouros no silenciador, chocalho sob o piso e chapa térmica a tilintar: o que significam os ruídos do escape e porque importam.',
    intro: [
      'O escape produz os sons mais reconhecíveis de todos: o ronco de um silenciador furado, os estouros ao tirar o pé, o chocalho metálico a um regime específico. A maioria não altera o andamento do carro, mas também não convém ignorá-los: por trás de um chocalho aparentemente inocente está por vezes um catalisador a desfazer-se, cujos fragmentos podem chegar ao motor.',
      'A secção cobre todo o percurso: da chapa térmica barata e do tubo flexível rasgado à junta do coletor queimada e ao catalisador entupido, com o som de cada avaria e o risco de gases entrarem no habitáculo.',
    ],
  },
  salon: {
    h1: 'Rangidos e ruídos do habitáculo',
    short: 'Habitáculo e carroçaria',
    metaTitle: 'Rangidos do habitáculo: encontrar a origem | Pro-Stuk',
    description:
      'Grilos no habitáculo, tablier a ranger, portas a bater: como encontrar a origem sozinho e distingui-la de uma avaria do trem rodante.',
    intro: [
      'Os ruídos do habitáculo são os mais irritantes e normalmente os mais baratos de resolver: por trás está mais vezes um clipe solto, um objeto sem fixação na bagageira ou uma borracha seca do que uma avaria. O essencial é distingui-los de uma batida da suspensão, para que um plástico a ranger não acabe numa fatura de diagnóstico do trem rodante.',
      'A secção mostra formas simples de cercar o som: pressionar o painel com a mão em andamento, esvaziar a bagageira, torcer a carroçaria subindo uma roda ao passeio. E um sinal honesto de quando o ruído vem mesmo de baixo.',
    ],
  },
};
