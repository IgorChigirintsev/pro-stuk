// Тексты карточек для магазинов на четырнадцати языках.
//
// Отдельным файлом, потому что генератор и без того длинный, а править тут
// будут именно эти строки. Порядок caps совпадает с порядком карточек.
//
// hero — надписи на первой карточке: она нарисована вектором, а не снята с
// экрана, поэтому переводится вся целиком, включая названия причин.
//
// rtl помечает языки с письмом справа налево: у них в карточке результата
// название и доля меняются местами, иначе строка читается наизнанку.

export const LOCALES = {
  en: {
    caps: [
      ['Diagnose car noises', 'by sound'],
      ['What that noise is —', 'and how likely'],
      ['The exact part,', 'shown on a diagram'],
      ['Record 15 seconds', 'of the noise'],
      ['Why it’s that part —', 'and how to check it'],
      ['Your car’s noise,', 'explained'],
      ['See what service', 'is due, and when'],
      ['Every car you own,', 'in one garage'],
      ['A few questions,', 'no guesswork'],
    ],
    hero: {
      badge: 'Shop this week', causes: 'Likely causes',
      rows: ['Worn alternator bearing', 'Drive belt tensioner', 'Water pump bearing'],
      foot: ['No scanner, no shop visit.', 'Just your phone.'],
    },
  },

  ru: {
    caps: [
      ['Диагностика по звуку', 'без сканера'],
      ['Что это за звук —', 'и насколько вероятно'],
      ['Какая именно деталь —', 'показано на схеме'],
      ['Запишите 15 секунд', 'этого звука'],
      ['Почему именно она —', 'и как проверить самому'],
      ['Звук вашей машины,', 'объяснённый'],
      ['Что пора менять', 'и когда'],
      ['Все ваши машины', 'в одном гараже'],
      ['Пара вопросов —', 'и никаких догадок'],
    ],
    hero: {
      badge: 'В сервис на неделе', causes: 'Вероятные причины',
      rows: ['Подшипник генератора', 'Ролик натяжителя', 'Подшипник помпы'],
      foot: ['Без сканера и без сервиса.', 'Только телефон.'],
    },
  },

  de: {
    caps: [
      ['Autogeräusche erkennen', 'am Klang'],
      ['Was da klappert —', 'und wie wahrscheinlich'],
      ['Welches Teil genau —', 'auf einer Skizze'],
      ['15 Sekunden aufnehmen', 'vom Geräusch'],
      ['Warum dieses Teil —', 'und wie Sie es prüfen'],
      ['Das Geräusch Ihres Autos,', 'erklärt'],
      ['Was fällig ist', 'und wann'],
      ['Alle Ihre Autos', 'in einer Garage'],
      ['Ein paar Fragen —', 'kein Raten'],
    ],
    hero: {
      badge: 'Diese Woche in die Werkstatt', causes: 'Wahrscheinliche Ursachen',
      rows: ['Lichtmaschinenlager', 'Riemenspanner', 'Wasserpumpenlager'],
      foot: ['Kein Diagnosegerät, keine Werkstatt.', 'Nur Ihr Handy.'],
    },
  },

  es: {
    caps: [
      ['Diagnostica ruidos', 'por el sonido'],
      ['Qué es ese ruido —', 'y con qué probabilidad'],
      ['Qué pieza exactamente —', 'en un esquema'],
      ['Graba 15 segundos', 'del ruido'],
      ['Por qué esa pieza —', 'y cómo comprobarlo'],
      ['El ruido de tu coche,', 'explicado'],
      ['Qué toca cambiar', 'y cuándo'],
      ['Todos tus coches', 'en un garaje'],
      ['Unas preguntas —', 'sin adivinar'],
    ],
    hero: {
      badge: 'Al taller esta semana', causes: 'Causas probables',
      rows: ['Rodamiento del alternador', 'Tensor de la correa', 'Rodamiento de la bomba'],
      foot: ['Sin escáner, sin pasar por el taller.', 'Solo tu móvil.'],
    },
  },

  fr: {
    caps: [
      ['Diagnostiquer les bruits', 'par le son'],
      ['Ce que c’est —', 'et à quel point c’est probable'],
      ['Quelle pièce exactement —', 'sur un schéma'],
      ['Enregistrez 15 secondes', 'du bruit'],
      ['Pourquoi cette pièce —', 'et comment le vérifier'],
      ['Le bruit de votre voiture,', 'expliqué'],
      ['Ce qui arrive à échéance', 'et quand'],
      ['Toutes vos voitures', 'dans un seul garage'],
      ['Quelques questions —', 'aucune supposition'],
    ],
    hero: {
      badge: 'Au garage cette semaine', causes: 'Causes probables',
      rows: ['Roulement d’alternateur', 'Galet tendeur', 'Roulement de pompe à eau'],
      foot: ['Sans valise, sans passer au garage.', 'Juste votre téléphone.'],
    },
  },

  it: {
    caps: [
      ['Diagnosi dei rumori', 'dal suono'],
      ['Che rumore è —', 'e quanto è probabile'],
      ['Quale pezzo esattamente —', 'su uno schema'],
      ['Registra 15 secondi', 'del rumore'],
      ['Perché proprio quello —', 'e come verificarlo'],
      ['Il rumore della tua auto,', 'spiegato'],
      ['Cosa scade', 'e quando'],
      ['Tutte le tue auto', 'in un garage'],
      ['Poche domande —', 'niente supposizioni'],
    ],
    hero: {
      badge: 'In officina questa settimana', causes: 'Cause probabili',
      rows: ['Cuscinetto alternatore', 'Tenditore cinghia', 'Cuscinetto pompa acqua'],
      foot: ['Niente diagnosi, niente officina.', 'Solo il telefono.'],
    },
  },

  pt: {
    caps: [
      ['Diagnóstico de ruídos', 'pelo som'],
      ['Que barulho é esse —', 'e qual a chance'],
      ['Qual peça exatamente —', 'num esquema'],
      ['Grave 15 segundos', 'do ruído'],
      ['Por que essa peça —', 'e como conferir'],
      ['O ruído do seu carro,', 'explicado'],
      ['O que está vencendo', 'e quando'],
      ['Todos os seus carros', 'numa garagem'],
      ['Algumas perguntas —', 'nada de chute'],
    ],
    hero: {
      badge: 'Oficina esta semana', causes: 'Causas prováveis',
      rows: ['Rolamento do alternador', 'Tensor da correia', 'Rolamento da bomba'],
      foot: ['Sem scanner, sem ir à oficina.', 'Só o celular.'],
    },
  },

  pl: {
    caps: [
      ['Diagnoza hałasów', 'po dźwięku'],
      ['Co to za dźwięk —', 'i jak prawdopodobnie'],
      ['Która dokładnie część —', 'na schemacie'],
      ['Nagraj 15 sekund', 'tego dźwięku'],
      ['Dlaczego właśnie ta —', 'i jak to sprawdzić'],
      ['Hałas twojego auta,', 'wyjaśniony'],
      ['Co się kończy', 'i kiedy'],
      ['Wszystkie twoje auta', 'w jednym garażu'],
      ['Kilka pytań —', 'żadnego zgadywania'],
    ],
    hero: {
      badge: 'W tym tygodniu do warsztatu', causes: 'Prawdopodobne przyczyny',
      rows: ['Łożysko alternatora', 'Rolka napinacza', 'Łożysko pompy wody'],
      foot: ['Bez testera, bez warsztatu.', 'Tylko telefon.'],
    },
  },

  tr: {
    caps: [
      ['Araç seslerini teşhis', 'sesten'],
      ['Bu ses ne —', 've ne kadar olası'],
      ['Tam olarak hangi parça —', 'şema üzerinde'],
      ['15 saniye kaydedin', 'bu sesi'],
      ['Neden o parça —', 've nasıl kontrol edilir'],
      ['Aracınızın sesi,', 'açıklandı'],
      ['Neyin vakti geldi', 've ne zaman'],
      ['Tüm araçlarınız', 'tek garajda'],
      ['Birkaç soru —', 'tahmin yok'],
    ],
    hero: {
      badge: 'Bu hafta servise', causes: 'Olası nedenler',
      rows: ['Alternatör rulmanı', 'Gergi rulmanı', 'Devirdaim rulmanı'],
      foot: ['Cihaz yok, servise gitmek yok.', 'Sadece telefonunuz.'],
    },
  },

  nl: {
    caps: [
      ['Autogeluiden herkennen', 'op het gehoor'],
      ['Wat dat geluid is —', 'en hoe waarschijnlijk'],
      ['Welk onderdeel precies —', 'op een schema'],
      ['Neem 15 seconden op', 'van het geluid'],
      ['Waarom juist dat —', 'en hoe je het checkt'],
      ['Het geluid van je auto,', 'uitgelegd'],
      ['Wat aan de beurt is', 'en wanneer'],
      ['Al je auto’s', 'in één garage'],
      ['Een paar vragen —', 'geen giswerk'],
    ],
    hero: {
      badge: 'Deze week naar de garage', causes: 'Waarschijnlijke oorzaken',
      rows: ['Dynamolager', 'Spanrol', 'Waterpomplager'],
      foot: ['Geen uitleesapparaat, geen garage.', 'Alleen je telefoon.'],
    },
  },

  zh: {
    caps: [
      ['听声辨故障', '汽车异响诊断'],
      ['这是什么响声 —', '可能性有多大'],
      ['到底是哪个零件 —', '示意图上标出'],
      ['录下 15 秒', '这段异响'],
      ['为什么是它 —', '以及怎么自己验证'],
      ['你车上的异响，', '讲清楚了'],
      ['该换什么', '什么时候换'],
      ['你的每一台车', '都在一个车库里'],
      ['几个问题 —', '不用猜'],
    ],
    hero: {
      badge: '本周进厂', causes: '可能的原因',
      rows: ['发电机轴承磨损', '皮带张紧轮', '水泵轴承'],
      foot: ['不用解码器，不用进厂。', '一部手机就够。'],
    },
  },

  ja: {
    caps: [
      ['音で異音を診断', 'テスターなしで'],
      ['その音の正体 —', 'そして確からしさ'],
      ['どの部品なのか —', '図で示します'],
      ['15秒だけ録音', 'その異音を'],
      ['なぜその部品か —', '自分での確かめ方'],
      ['あなたの車の異音を', '言葉にします'],
      ['何が交換時期か', 'いつなのか'],
      ['所有する全車を', 'ひとつのガレージに'],
      ['いくつかの質問で', '当て推量はなし'],
    ],
    hero: {
      badge: '今週中に入庫', causes: '可能性の高い原因',
      rows: ['オルタネーターベアリング', 'テンショナープーリー', 'ウォーターポンプ軸受'],
      foot: ['テスターも入庫も不要。', 'スマホひとつで。'],
    },
  },

  ko: {
    caps: [
      ['소리로 소음 진단', '진단기 없이'],
      ['그 소리의 정체 —', '그리고 가능성'],
      ['정확히 어느 부품 —', '도면으로 표시'],
      ['15초만 녹음', '그 소리를'],
      ['왜 그 부품인지 —', '직접 확인하는 법'],
      ['내 차의 소음을', '설명해 드립니다'],
      ['무엇을 갈 때인지', '그리고 언제인지'],
      ['내 모든 차를', '하나의 차고에'],
      ['몇 가지 질문으로', '추측은 없이'],
    ],
    hero: {
      badge: '이번 주 정비소로', causes: '가능성 있는 원인',
      rows: ['발전기 베어링 마모', '벨트 텐셔너', '워터펌프 베어링'],
      foot: ['진단기도 정비소도 필요 없이.', '휴대폰 하나면 됩니다.'],
    },
  },

  ar: {
    rtl: true,
    caps: [
      ['تشخيص أصوات السيارة', 'بالصوت'],
      ['ما هذا الصوت —', 'وما احتماله'],
      ['أي قطعة بالضبط —', 'على مخطط'],
      ['سجّل ١٥ ثانية', 'من الصوت'],
      ['لماذا هذه القطعة —', 'وكيف تتحقق بنفسك'],
      ['صوت سيارتك،', 'مشروحًا'],
      ['ما حان موعده', 'ومتى'],
      ['كل سياراتك', 'في مرآب واحد'],
      ['بضعة أسئلة —', 'بلا تخمين'],
    ],
    hero: {
      badge: 'إلى الورشة هذا الأسبوع', causes: 'أسباب محتملة',
      rows: ['رمان بلي الدينامو', 'بكرة الشداد', 'رمان بلي طرمبة الماء'],
      foot: ['بلا جهاز فحص وبلا ورشة.', 'هاتفك يكفي.'],
    },
  },
};
