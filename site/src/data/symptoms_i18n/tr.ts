import type { SymptomTr } from '../types';

/** Разборы симптомов по-турецки. Структура — из русских файлов рядом. */
export const pages: Record<string, SymptomTr> = {
  'stuk-v-dvigatele': {
    h1: 'Motorda vuruntu',
    metaTitle: 'Motor vuruyor: nedenleri, tehlikesi, ne yapmalı | Pro-Stuk',
    description:
      'Motor neden vurur: zararsız supap tıkırtısından aşınmış kol yataklarına kadar. Tehlikeli vuruntuyu nasıl ayırt edersiniz, yola devam edilir mi ve kendiniz neyi kontrol edebilirsiniz.',
    intro: [
      'Motordaki vuruntu, ciddiyet aralığı en geniş olan belirtidir: aynı kelimenin ardında hem enjektörlerin zararsız tıkırtısı hem de krank mili yataklarının aşınması saklıdır — ikincisinde her kilometre motor revizyonunu yaklaştırır. İyi haber şu: farklı vuruntular farklı duyulur ve farklı koşullarda ortaya çıkar; bu işaretlerle neden aralığı hızla daralır.',
      'Her motor ustasının başladığı sorular: nerede vuruyor (motorun üstünde mi, derinden mi), ne zaman (soğukken, ısındıktan sonra, yük altında) ve ses devirle değişiyor mu. Üstten gelen hafif ve sık tıkırtı genelde supap mekanizmasıdır. Alttan gelen boğuk vuruntu, gaz verildiğinde sıklaşıyor ve yük altında yükseliyorsa, işte endişe veren seçenek budur.',
    ],
    causes: [
      { name: 'Büyümüş supap boşluğu veya hidrolik supap kaldıracı', likelihood: 'Çok sık — üstten gelen tıkırtının tipik nedeni' },
      { name: 'Enjektörlerin normal tıkırtısı (direkt enjeksiyon ve dizeller)', likelihood: 'Sık — ve bu bir arıza değil' },
      { name: 'Yardımcı ekipman: kasnaklar, braketler, klima kompresörü kavraması', likelihood: 'Vuruntu gazdan bağımsızsa sık görülür' },
      { name: 'Hızlanırken vuruntulu yanma (detonasyon)', likelihood: 'Oktanı düşük benzin aldıktan sonra sık' },
      { name: 'Krank mili ve kol yatakları', likelihood: 'Daha seyrek, ama en tehlikeli senaryo bu' },
    ],
    canRide: [
      'Vuruntunun karakterine bağlı. Üstten gelen düzenli tıkırtıyla yola devam edilebilir: supap mekanizması bir yolculukta değil, aylar içinde aşınır — yine de önümüzdeki iki hafta içinde ayar için randevu alın. Direkt enjeksiyonlu bir motorda enjektör tıkırtısı için yapılacak bir şey yok: yakıt sisteminin normal çalışmasıdır.',
      'Motorun derinliğinden gelen, devirle sıklaşan ve yük altında yükselen boğuk vuruntu ise durmak için bir nedendir. Aşınmış yataklar böyle ses verir — krank milinin döndüğü kaymalı yataklar. Yola devam etmek yatağın dönmesi veya motorun sıkışmasıyla bitebilir; mümkünse servise kendi gücünüzle gitmeyin, çekici çağırın.',
    ],
    checks: [
      'Yağ çubuğuyla seviyeyi kontrol edin: düşük seviye motor vuruntularının hem yoldaşı hem güçlendiricisidir ve yağ basıncı düşükken yatak vuruntusu hızla ilerler.',
      'Sesin nereden geldiğini dinleyin: açık kaputun yanında durun — supap tıkırtısı üstten, yatak vuruntusu boğuk biçimde derinden ve alttan duyulur.',
      'Boşta yumuşakça gaz verin: devirle birlikte sıklaşan ve yük altında daha gür duyulan vuruntu, kendi başına yaşayandan daha ciddidir.',
      'Son yakıt alışınızı hatırlayın: şüpheli benzinden sonra hızlanırken duyulan metalik çınlama detonasyona benzer ve çoğu zaman bir depo iyi yakıtla geçer.',
      'Yağ basıncı lambasının yanıp yanmadığına bakın: kırmızı yağdanlık ile birlikte vuruntu, motoru derhal durdurmak demektir.',
    ],
    appHelp:
      'Pro-Stuk uygulaması sizi bir motor ustasının sorduğu soruların aynısından geçirir, sesi kaydeder ve spektrumu ile ritmini değerlendirir: darbeler hangi sıklıkta geliyor ve bu devirle nasıl ilişkileniyor — supap vuruntusunda ve krank vuruntusunda bu oran farklıdır. Raporda yüzdeleriyle olası nedenler, aciliyet ışığı ve serviste kullanacağınız ifadeler yer alır.',
    faq: [
      {
        q: 'Motor neden yalnızca soğukken vuruyor?',
        a: 'Motor ısınmadıkça parçalar arasındaki boşluklar daha büyüktür ve koyu yağ henüz her yere ulaşmamıştır. Soğuk çalıştırmadan sonraki ilk dakikalarda supap kaldıraçlarının tıkırtısı veya pistonların boğuk vuruntusu ısınmayla tamamen geçiyorsa, bu genelde izlenecek bir durumdur, acil değil.',
      },
      {
        q: 'En tehlikeli motor vuruntusu nasıl duyulur?',
        a: 'Boğuk, kalın, motorun derinliğinden; devirle sıklaşır ve yük altında — hızlanırken ya da yokuşta — yükselir. Kol ve ana yataklar böyle vurur. Bu sesle kendi başınıza gitmeyin, aracı en kısa sürede ustaya ulaştırın.',
      },
      {
        q: 'Vuruntu normal olabilir mi?',
        a: 'Olabilir. Direkt enjeksiyonlu motorlar (TSI, GDI) ve dizeller enjektörleriyle her zaman tıkırdar — ses soğukken de sıcakken de aynıdır ve dışarıdan kabin içinden daha gür duyulur. Bu normal çalışmadır, arıza değil.',
      },
    ],
  },

  'skrip-tormozov': {
    h1: 'Fren gıcırtısı',
    metaTitle: 'Frenler gıcırdıyor: tehlikeli mi, nedenleri ve çözümü | Pro-Stuk',
    description:
      'Frenler neden gıcırdar: sabahki pas tabakası, balata aşınma göstergesi ya da disklerdeki sorun. Zararsız gıcırtıyı uyarıdan nasıl ayırt edersiniz.',
    intro: [
      'Frenlemede gıcırtı, en sık görülen nedenin aynı zamanda en zararsız olduğu ender durumlardan biridir. Gece boyunca, yağmurdan veya yıkamadan sonra diskler ince bir pas tabakasıyla kaplanır; ilk frenlemeler bunu kazır — gıcırtı buradan gelir. Birkaç dakikalık sürüşten sonra ses kaybolduysa yapılacak bir şey yok: diskli frenli her aracın olağan yaşamıdır.',
      'Her frenlemede gıcırtı ise başka bir konudur. Çoğu balatada metal bir aşınma göstergesi bulunur: sürtünme malzemesi sınıra geldiğinde diski bilerek tırmalayıp ciyaklayan bir lamel. Bu, tasarlanmış bir uyarıdır: gıcırtı metal metale sürtmeye dönüşmeden balataları kontrol ettirin — çünkü o aşama bozulmuş diskler ve uzayan fren mesafesi demektir.',
    ],
    causes: [
      { name: 'Park, yağmur veya yıkama sonrası pas tabakası', likelihood: 'En sık — gıcırtı ilk frenlemelerde geçiyorsa' },
      { name: 'Aşınma göstergesi: balatalar bitmek üzere', likelihood: 'Sık — her frenlemede ciyaklıyorsa' },
      { name: 'Sertleşmiş veya ucuz balatalar, balata ile disk arasındaki toz', likelihood: 'Sık; rahatsız edici ama tehlikeli değil' },
      { name: 'Metale kadar aşınmış balatalar (metal metale sürtme)', likelihood: 'Uyarı görmezden gelindiyse' },
    ],
    canRide: [
      'İlk frenlemelerden sonra kaybolan sabah gıcırtısıyla kısıtlamasız yola devam edilebilir: pedala birkaç yumuşak basış diskleri temizler ve konu bir sonraki yağmura kadar kapanır.',
      'Sürekli ciyaklamayla da sürülebilir — frenler hâlâ tam güçle çalışır — ama randevuyu «bir ara» değil, bu hafta alın: ciyaklayan aşınma göstergesiyse bir sonraki aşama metal metale sürtme, tabana kadar aşınmış balatalar ve artık diskleri de kapsayan bir faturadır. Metal metale sürtme bir dur işaretidir: yalnızca dikkatle servise kadar, erken ve yumuşak fren yaparak.',
    ],
    checks: [
      'Düzeni izleyin: gıcırtı yalnızca park sonrası ilk frenlemelerde veya rutubette çıkıyorsa pastır; her frenlemede çıkıyorsa kontrol gerekir.',
      'Jant parmaklarının arasından bakın: birçok araçta dış balata görünür. Sürtünme malzemesi 3–4 mm’den inceyse değişmelidir.',
      'Tek taraf mı iki taraf mı olduğunu dinleyin: tek taraftan gelen ciyaklama daha çok o taraftaki aşınma göstergesine ya da sıkışan kalipere işaret eder.',
      'Fren yapmadan giderken, pedala hafifçe dokununca değişen bir ıslık olup olmadığına bakın — aşınma göstergesi daha basmadan diske sürtüyor demektir.',
      'Pedala ve aracın izlediği çizgiye dikkat edin: frenlerken bir tarafa çekme, pedalın titremesi ya da «uzaması» gıcırtıdan daha ciddidir ve gecikmeden servis demektir.',
    ],
    appHelp:
      'Pro-Stuk uygulaması zararsız senaryoyu endişe vericiden aynı sorularla ayırır — ne zaman gıcırdıyor ve ses geçiyor mu — kayıt ise aşınma göstergesinin tiz ciyaklamasını metal metale sürtmeden ayırmaya yardım eder. Raporda yüzdeleriyle olası nedenler ve bir ışık vardır: yola devam edilebilir, bu hafta servise ya da durun.',
    faq: [
      {
        q: 'Frenler neden sabahları ve yağmurda gıcırdar?',
        a: 'Dökme demir fren disklerinde nemli havada birkaç saat içinde ince bir pas tabakası oluşur. İlk frenlemeler onu kazır — gıcırtı ve hafif tırmalama sesi buradan gelir ve çabuk geçer. Bu normaldir, onarım gerektirmez.',
      },
      {
        q: 'Balata aşınma göstergesi nedir?',
        a: 'Balatanın üzerindeki, sürtünme malzemesi sınıra geldiğinde diske değip yüksek sesle ciyaklamaya başlayan metal lameldir. Bilerek tasarlanmış bir uyarıdır: sürekli ciyaklama duyuyorsanız, metal metale sürtme başlamadan balata değişimi için randevu alın.',
      },
      {
        q: 'Gıcırtı ile metal metale sürtme arasındaki fark nedir?',
        a: 'Gıcırtı ve ciyaklama tiz seslerdir ve frenler o sırada hâlâ tam çalışır. Metal metale sürtme ise kaba bir sestir: sürtünme malzemesi bitmiş, diski balatanın çelik tabanı sürtmektedir. Bu sesle yola devam edilmez — yalnızca dikkatle servise kadar.',
      },
    ],
  },

  'gul-pri-dvizhenii': {
    h1: 'Seyir hâlinde uğultu',
    metaTitle: 'Seyirde uğultu: rulman, lastikler mi şanzıman mı | Pro-Stuk',
    description:
      'Hızla birlikte gelen düzgün uğultu: poyra rulmanı, lastikler, şanzıman veya diferansiyel. Servise gitmeden yapılacak basit testler — boşa alma testi ve yumuşak virajlar — nedeni daraltır.',
    intro: [
      'Hızla ortaya çıkan ve hızla birlikte büyüyen düzgün uğultu çoğunlukla iki kaynaktan birinden gelir: poyra rulmanından — tekerleğin üzerinde döndüğü rulman — ya da lastiklerden. Bunları servise gitmeden ayırmak mümkün. Rulman her asfaltta aynı uğuldar, uzakta kalkan bir uçağı andırır ve yumuşak virajlarda sık sık değişir. Lastikler ise zemine tepki verir: yeni asfaltta daha sessiz, pürüzlü zeminde daha gürültülü; özellikle kış lastikleri, arazi lastikleri ve düzensiz aşınmış lastikler uğuldar.',
      'Daha seyrek olarak kaynak aktarma organlarıdır: şanzıman, diferansiyel ya da arkadan ve dört çekerli araçlarda şaft. Boşa alma testi seçenekleri ayırır: uğultunun duyulduğu hıza çıkın, vitesi boşa alın ve süzülün. Uğultu kaldıysa tekerleklerin dönüşüne bağlıdır — rulmanlar, lastikler, zemin. Motor deviriyle birlikte kaybolduysa motorda ve onun döndürdüğü şeylerde aramak gerekir.',
    ],
    causes: [
      { name: 'Poyra rulmanı', likelihood: 'En sık — düzgün uğultu, hızla büyür, zemin fark etmez' },
      { name: 'Lastik gürültüsü', likelihood: 'Sık — zemine bağlıdır; kış ve aşınmış lastikler daha gürültülü' },
      { name: 'Şanzıman veya diferansiyel', likelihood: 'Daha seyrek — uğultu vitese göre ya da gaza basınca değişir' },
      { name: 'Şaft (arkadan ve dört çeker)', likelihood: 'Dar bir hız aralığında tabandan gelen titreşimle birlikte uğultu' },
      { name: 'Aerodinamik ıslık: fitiller, tavan taşıyıcı', likelihood: 'Yalnızca 70–90 km/s üzerinde' },
    ],
    canRide: [
      'Uğuldayan rulmanla yola devam edilebilir, ama bu aylarca taşınacak bir ses değildir: aşınmış poyra rulmanı zamanla boşluk yapar — tekerleğin serbest hareketi — ve ihmal edilirse sıkışabilir. Makul plan bir hafta içinde arıza tespiti, o zamana kadar uzun ve hızlı yolculukları ertelemek. Uğultu birden arttıysa ya da yanına titreşim eklendiyse kontrolü geciktirmeyin.',
      'Lastik gürültüsü ve aerodinamik ıslık konfor meselesidir, güvenlik değil: onlarla kısıtlamasız gidilir. Şanzımandan veya diferansiyelden gelen uğultu da emniyet şeridine çekmeyi gerektirmez, ama uzatılmamalıdır: erken aşamada çoğu zaman yağ değişimi yeter, geç kalınan onarım ise mil ve dişlilerle birlikte kat kat pahalıya gelir.',
    ],
    checks: [
      'Boşa alma testi: uğultulu hıza çıkın, vitesi boşa alın ve süzülün. Uğultu kaldı — tekerlekler ve rulmanlar; devirle birlikte kayboldu — motor ve aktarma organları.',
      'Güvenli bir düzlükte geniş virajlar: yumuşak bir yayda bir yöne dönerken uğultu azalıyor, diğerine artıyorsa poyra rulmanına benzer ve taraf hangisi olduğunu söyler.',
      'Zeminleri karşılaştırın: bir bölümü yeni asfaltta, bir bölümü pürüzlü zeminde gidin. Ses düzeyindeki belirgin fark lastikleri gösterir.',
      'Sırtı inceleyin ve basınçları kontrol edin: «testere» aşınması — blok kenarlarındaki basamaklar — lastikleri gürültülü yapar ve bozuk rot balans ya da yorulmuş amortisörlere işaret eder.',
      'Manuel şanzımanda aynı hızda farklı viteslerde uğultunun değişip değişmediğine bakın; arkadan çekişte, dar bir hız aralığında uğultuya tabandan gelen titremenin eşlik edip etmediğini kontrol edin.',
    ],
    appHelp:
      'Pro-Stuk uygulaması sizi aynı sorulardan geçirir — uğultu boşta kalıyor mu, virajlarda ve zemine göre değişiyor mu — ve karakterini tipik örneklerle karşılaştırmak için sesi kaydetmenize yardım eder. Raporda yüzdeleriyle olası nedenler ve bir sonuç yer alır: rahat gidin, servisi planlayın ya da geciktirmeden kontrol ettirin.',
    faq: [
      {
        q: 'Rulman uğultusunu lastik gürültüsünden nasıl ayırırım?',
        a: 'Yola ve virajlara verdiği tepkiden. Lastik gürültüsü zeminle değişir: yeni asfaltta daha sessiz, pürüzlüde daha gür. Rulman her yerde aynı uğuldar, buna karşılık yumuşak virajlara — yükün dış tekerleğe geçtiği anlara — sık sık tepki verir. Sırtı incelemek de yardımcı olur: düzensiz aşınmış lastikler kendiliğinden uğuldar.',
      },
      {
        q: 'Uğuldayan poyra rulmanıyla gitmek tehlikeli mi?',
        a: 'Erken aşamada değil, ama uzatmayın: zamanla rulmanda boşluk oluşur, tekerlek titremeye başlar, uç durumda rulman sıkışır. Kontrol basittir: lifte usta tekerlekleri döndürür ve gürültülü poyrayı birkaç dakikada bulur. Makul ziyaret süresi bir hafta içindedir.',
      },
      {
        q: 'Uğultu virajlarda neden değişir?',
        a: 'Virajda aracın ağırlığı dış tekerleklere geçer. Sağ rulman uğulduyorsa sola dönüşte üzerindeki yük artar ve uğultu yükselir, sağa dönüşte azalır. Bu düzen servise gitmeden tarafı belirlemeye yarar: aklınızda tutun ve ustaya söyleyin.',
      },
    ],
  },

  'stuk-v-podveske': {
    h1: 'Süspansiyonda takırtı',
    metaTitle: 'Süspansiyonda takırtı: ne takırdıyor, gidilir mi | Pro-Stuk',
    description:
      'Süspansiyonda ne takırdar: viraj demiri rotilleri, salıncak burçları, direksiyon kutusu ya da kırık yay. Sesleri karakterine göre ayırma ve servise ne zaman gitme.',
    intro: [
      'Bir binek aracın süspansiyonu birkaç düzine mafsal, kauçuk burç ve takozdan oluşur; araç yaşlandıkça bunlardan birinde boşluk — serbest hareket — neredeyse kaçınılmazdır. Gevşemiş parça her tümsekte takırtıyla yanıt verir: süspansiyon sıkışır ve açılır, aşınmış parça yuvasında vurur. İyi haber, ilk teslim olanların genelde ucuz parçalar olmasıdır — viraj demiri rotilleri, süspansiyonda diğer her şeyden önce aşınan mafsallı küçük çubuklar.',
      'Sesin karakteri, daha lifte çıkmadan çok şey söyler. Küçük dalgalanmalarda ve derz geçişlerinde sık, boğuk takırtı viraj demiri rotillerinin imzasıdır. Çukurlarda ve kasislerde tek tek gelen darbeler salıncak burçlarını — salıncakların gövdeye bağlandığı kauçuk mafsalları — ya da yorulmuş amortisörleri gösterir. Doğrudan direksiyona vuran ve avuç içinde hissedilen takırtı, direksiyon kutusundaki boşluktur. «Eski karyola» gibi gıcırtı ise takırtı bile değildir: burçlardaki kurumuş kauçuk, listedeki en zararsız durum.',
    ],
    causes: [
      { name: 'Viraj demiri rotilleri', likelihood: 'En sık — küçük tümseklerde sık ve boğuk takırtı' },
      { name: 'Salıncak burçları veya amortisörler', likelihood: 'Sık — çukurlarda tek tek boğuk darbeler' },
      { name: 'Direksiyon kutusunda boşluk', likelihood: 'Daha seyrek — takırtı direksiyona vurur, avuçta hissedilir' },
      { name: 'Viraj demiri burçları, kurumuş burçlar (gıcırtı, takırtı değil)', likelihood: 'Sık — özellikle soğukta ve rutubette' },
      { name: 'Kırık süspansiyon yayı', likelihood: 'Seyrek — çukura girdikten hemen sonra, aracın bir köşesi çökmüş' },
    ],
    canRide: [
      'Süspansiyon takırtılarının çoğuyla gidilebilir: viraj demiri rotilleri, burçlar ve takozlar bir anda pes etmez. Yine de arıza tespitini aylarca ertelemeyin — dağılmış bir parça darbeleri komşularına aktarır ve onların aşınmasını hızlandırır, ayrıca kulağa benzer gelen daha ciddi şeyler de olabilir. Makul süre bir–iki hafta içinde kontrol, o zamana kadar büyük çukurlardan yavaş geçmek.',
      'İki senaryo daha fazla dikkat ister. Direksiyona vuran takırtı direksiyon sistemini, yani bir güvenlik grubunu ilgilendirir: önümüzdeki günlerde kontrol; direksiyon orta konumda «boşaldıysa» ya da araç şeritte geziniyorsa gecikmeden. Çukura girdikten sonra aniden ortaya çıkan gürültü ve çökmüş bir gövde köşesi kırık yayın tipik tablosudur: servise kadar yumuşak sürün, çünkü kırılan sarım kayıp lastiğe zarar verebilir.',
    ],
    checks: [
      'Duran aracı her tekerleğin üstünden çamurluktan tutup sallayın: burç ve takoz gıcırtıları çoğu zaman olduğunuz yerde tekrar eder.',
      'Düzeni izleyin: küçük dalgalanmalarda takırdıyorsa daha çok viraj demiri rotilleri; tek tek çukurlarda ise burçlar ve amortisörler.',
      'Sesin önden mi arkadan mı geldiğini ve direksiyona vurup vurmadığını belirleyin: avuçta hissedilen ve direksiyonu hafifçe gergin tutunca azalan takırtı, direksiyon kutusundaki boşluğun işaretidir.',
      'Aracın her köşesine bastırıp bırakın: gövde salınmadan yerine dönmeli. Sallanmaya devam ediyorsa amortisör yorulmuştur.',
      'Hiçbir şeyi sökmeden tekerleğin arkasına alttan bakın: kırılmış yay sarımı çoğu zaman gözle görülür, aynı anda aracın bir köşesinin çöküp çökmediği de fark edilir.',
    ],
    appHelp:
      'Pro-Stuk uygulaması, ustanın ilk muayenede izlediği yol ayrımlarının aynısını izler: nasıl bir ses, hangi tümseklerde, önde mi arkada mı, direksiyona vuruyor mu. Ses kaydı ayrıntıların servise kadar kaybolmasını önler; raporda ise yüzdeleriyle olası nedenler ve anlaşılır bir ışık vardır: gidilebilir, bu hafta gösterin ya da acilen kontrol ettirin.',
    faq: [
      {
        q: 'Süspansiyonda takırtıyla gitmek tehlikeli mi?',
        a: 'Çoğu zaman takırtı ani bir arıza demek değildir: viraj demiri rotilleri ve burçlar yavaş yavaş aşınır. Ama boşluk zamanla büyür ve komşu parçaları da bitirir, bu yüzden makul arıza tespiti süresi bir–iki haftadır. İstisnalar direksiyona vuran takırtı ve kırık yayın gürültüsüdür: onlarla önümüzdeki günlerde servise.',
      },
      {
        q: 'Neden küçük tümseklerde takırdıyor da büyük çukurları araç sessizce geçiyor?',
        a: 'Bu, viraj demiri rotillerinin tipik imzasıdır: küçük mafsalları tam olarak süspansiyonun sık ve kısa hareket ettiği dalgalanmalarda, parke taşında ve derzlerde «dövme» yapar. Büyük bir çukurda bu boşluk her zaman duyulmaz. Arkada aynı şekilde arka viraj demiri rotilleri ve torsiyon kirişi burçları takırdar.',
      },
      {
        q: 'Takırdayan şey süspansiyon dışında bir şey olabilir mi?',
        a: 'Olabilir ve seyrek de değildir. Arkadan gelen boğuk takırtıyı bagajdaki sabitlenmemiş kriko veya stepne verir; önden yukarıdan gelen tıkırtıyı kaput kilidindeki boşluk; alttan gelen zangırtıyı egzoz askıları. Uzun park sonrası ilk hareketteki tek «gümbürtü» ise disklere yapışan balatalardır ve zararsızdır.',
      },
    ],
  },

  'gul-podshipnika-stupitsy': {
    h1: 'Poyra rulmanı uğultusu',
    metaTitle: 'Poyra rulmanı uğulduyor: nasıl anlaşılır | Pro-Stuk',
    description:
      'Aşınmış poyra rulmanı nasıl duyulur, lastik gürültüsünden nasıl ayrılır, hangi tekerlek uğulduyor ve bu hâlde ne kadar gidilebilir.',
    intro: [
      'Poyra rulmanı, tekerleğin üzerinde döndüğü parçadır. Aşındığında hızla birlikte büyüyen düzgün bir uğultu ortaya çıkar: birçok kişi bunu kalkan bir uçağa ya da bir trafonun uğultusuna benzetir. 60–80 km/s civarında zar zor duyulacak şekilde başlar, zamanla her hızda duyulur ve titreşim olarak da hissedilmeye başlar.',
      'Asıl zorluk rulmanı lastik gürültüsünden ayırmaktır: benzer uğuldarlar. Güvenilir iki gündelik test vardır. Birincisi zemin: lastik gürültüsü asfalt cinsiyle değişir, rulman uğultusu her yerde aynıdır. İkincisi hızda yumuşak şerit değişimleri: geniş bir yayda uğultu değişiyorsa neredeyse kesin olarak rulmandır — üstelik yük binen tarafınki.',
    ],
    causes: [
      { name: 'Aşınmış poyra rulmanı', likelihood: 'Uğultu düzgünse ve zeminden etkilenmiyorsa en sık' },
      { name: 'Lastik gürültüsü (kış, arazi, düzensiz aşınma)', likelihood: 'Çok sık — rulmanın baş «ikizi»' },
      { name: 'Diferansiyel veya ana dişli (arkadan ve dört çeker)', likelihood: 'Daha seyrek; bu uğultunun tonu gazla değişir' },
      { name: 'Şaft askı rulmanı', likelihood: 'Seyrek, yalnızca şaftlı araçlarda' },
    ],
    canRide: [
      'Erken aşamada gidilebilir, ama şerhli. Aşınmış rulman bir anda dağılmaz: ilk uğultudan kritik duruma kadar genelde binlerce kilometre geçer. Ne var ki süreç tek yönlüdür ve finali tatsızdır: tekerlek boşluğu, bozulmuş yatak yuvası, uç durumda yolda sıkışan poyra.',
      'Bu yüzden kural basit: uğultuyu fark ettiyseniz bir–iki hafta içinde aracı servise gösterin, o zamana kadar uzun ve hızlı yolculukları erteleyin. Uğultu birden arttıysa, titreşim başladıysa, tekerlekte boşluk varsa ya da araç bir yana çekiyorsa hemen arıza tespitine gidin — otoyoldan değil.',
    ],
    checks: [
      'Zemin testi: aynı bölümü farklı asfaltlarda geçin. Uğultu değişmediyse daha çok rulman; düz zeminde azaldıysa daha çok lastikler.',
      'Viraj testi: boş yolda 60–80 km/s hızda yumuşakça şerit değiştirin. Sağa dönüşte uğultu azalıp sola dönüşte arttıysa yük sağ tarafa biniyor demektir, muhtemelen sağ rulman; tersi de geçerli.',
      'Boşta kontrol: hızlanıp vitesi boşa alarak süzülün. Uğultu kaldıysa kaynak motorla değil, tekerleklerle birlikte dönüyordur.',
      'Sırtı inceleyin: «testere» ve düzensiz aşınma lekeleri lastikleri gürültülü yapar ve rot balansa işaret eder.',
      'Yolculuktan sonra elinizi dikkatle poyralara yaklaştırın (fren diskine dokunmadan — sıcaktır): bir taraftaki belirgin daha sıcak poyra ek bir ipucudur.',
    ],
    appHelp:
      'Pro-Stuk uygulaması aynı kontrol sorularını sorar — zemin, virajlar ve boşta süzülme — uğultuyu kaydeder ve karakterini değerlendirir: lastiklerin düzgün geniş bantlı gürültüsü ile rulman uğultusu spektrumda farklı görünür. Raporda nedenlerin olasılıkları, aciliyet ve ustaya hangi tarafı söyleyeceğinize dair bir ipucu yer alır.',
    faq: [
      {
        q: 'Uğultu virajlarda neden değişir?',
        a: 'Virajda ağırlık dış tekerleklere geçer. Sola dönüşte uğultu artıyorsa yük sağ taraftadır — yani büyük olasılıkla sağ rulman uğulduyordur. Sağa dönüşte tersi geçerlidir. Bu işareti aklınızda tutup serviste söylemek aramayı yarıya indirir.',
      },
      {
        q: 'Uğuldayan rulmanla ne kadar gidilebilir?',
        a: 'Tek bir rakam yok: ilk belirtilerden tehlikeli boşluğa kadar genelde binlerce kilometre geçer, ama aşınma hızı öngörülemez. Makul orta yol: bir–iki hafta içinde arıza tespiti için randevu almak ve o zamana kadar uzun, hızlı yolculuklar planlamamak.',
      },
      {
        q: 'Rulman lastikle karıştırılabilir mi?',
        a: 'Kolayca — en sık yapılan hata budur. İki işaret ayırır: lastik gürültüsü zemine bağlıdır ve virajlarda değişmez; rulman uğultusu her asfaltta aynıdır ve geniş virajlarda ağırlık aktarımına tepki verir.',
      },
    ],
  },

  'stuk-na-nerovnostyah': {
    h1: 'Tümseklerde takırtı',
    metaTitle: 'Tümseklerde takırtı: nedenleri ve kendi kontrolleriniz | Pro-Stuk',
    description:
      'Tümseklerde ve çukurlarda takırtı: küçük dalgalanmalarda sık takırtı, çukurlarda tek darbeler ya da direksiyona vuran takırtı. Hangi parçalar suçlu ve yola devam edilir mi.',
    intro: [
      'Yalnızca tümseklerde — derzlerde, parke taşında, kasislerde — ortaya çıkan takırtı neredeyse her zaman yürüyen aksamdan gelir. Tümsekten geçerken süspansiyon sıkışır ve açılır; bir mafsalda boşluk oluştuysa parça her harekette yuvasında vurur. Beş–yedi yaşından büyük araçlarda bu olağan bir durumdur ve suçlu genelde büyük gruplar değil, ucuz sarf parçalardır.',
      'Takırtının deseni şüpheli listesini daraltır. Önde küçük dalgalanmalarda sık ve boğuk takırtı viraj demiri rotillerinin klasiğidir; arkada aynı desen arka viraj demiri rotilleri ya da torsiyon kirişi burçlarıdır (kirişin gövdeye bağlandığı kauçuk burçlar). Çukurlarda tek tek darbeler salıncak burçları ya da yorulmuş amortisörlerdir. Ayrı bir durum: yakın zamanda lastik değişiminden sonra tekerlek dönüşüyle aynı ritimde ortaya çıkan takırtı — bijonlar gevşek olabilir ve bu ihtimal ilk kontrol edilir.',
    ],
    causes: [
      { name: 'Viraj demiri rotilleri', likelihood: 'En sık — önde, küçük tümseklerde sık takırtı' },
      { name: 'Arka süspansiyon: arka viraj demiri rotilleri, kiriş burçları', likelihood: 'Sık — takırtı arkadaysa' },
      { name: 'Salıncak burçları veya amortisörler', likelihood: 'Sık — çukurlarda tek tek darbeler' },
      { name: 'Direksiyon kutusunda boşluk', likelihood: 'Daha seyrek — takırtı doğrudan direksiyona vurur' },
      { name: 'Gevşek bijonlar', likelihood: 'Seyrek — ama lastik değişiminden sonra ilk bakılacak şey' },
    ],
    canRide: [
      'Viraj demiri rotillerinin ya da burçların tipik takırtısıyla gidilebilir: bu parçalar aniden bırakmaz ve büyük çukurlardan yavaş geçtiğiniz sürece arıza tespitine kadar geçecek bir–iki hafta bir şeyi değiştirmez. Süspansiyon kontrolünün kendisi hızlıdır: usta lifte mafsalları sallar ve boşluğu birkaç dakikada bulur. Yine de aylarca uzatmak doğru değildir: aşınmış mafsal darbeleri komşu parçalara aktarır ve onların aşınmasını hızlandırır.',
      'Lastik değişiminden sonraki ilk günlerde tekerlek dönüşüyle aynı ritimde gelen takırtı ise farklıdır: ilk fırsatta durup tüm tekerleklerin bijonlarını bijon anahtarıyla kontrol etmek gerekir. Gevşek bijonlu tekerlek jantın deliklerini bozar, en kötü durumda yolda çıkabilir. Direksiyona vuran takırtı da ertelenmez: direksiyon bir güvenlik grubudur, önümüzdeki günlerde kontrol edilir.',
    ],
    checks: [
      'Tekerlekler yakın zamanda söküldüyse ya da yer değiştirdiyse, başka hiçbir ihtimale bakmadan önce tüm tekerleklerin bijonlarını anahtarla kontrol edin.',
      'Takırtının desenini not edin: küçük dalgalanmalarda sık takırtı ile çukurlarda tek darbeler farklı parçalardır ve bu ayrıntı ustanın aramasını hemen kısaltır.',
      'Takırtının önde mi arkada mı olduğunu belirleyin: camları aralık bırakıp bir duvarın ya da çitin yanından yavaşça geçin — yansıyan ses çok daha iyi duyulur.',
      'Bozuk yolda direksiyonu hafifçe gergin tutun: avuçlara vuran takırtı azalıyorsa direksiyon kutusundaki boşluğa benzer, serviste bunu söylemek gerekir.',
      'Basit olanı eleyin: bagajdan sabit olmayan eşyaları çıkarın, stepne ve krikonun bağlantısını kontrol edin, kapalı kaputa bastırın — oynayan kaput kilidi süspansiyona benzer şekilde tıkırdar.',
    ],
    appHelp:
      'Pro-Stuk uygulaması bu sayfadaki soruların aynısını, yalnızca adım adım sorar: tam olarak nasıl bir takırtı, nerede duyuluyor, farklı tümseklerde nasıl davranıyor. Yanıtlardan ve ses kaydından olası nedenleri ve aciliyet ışığını içeren bir rapor çıkarır — böylece yarın mı yoksa fırsat bulunca mı servise gideceğinize karar vermek kolaylaşır.',
    faq: [
      {
        q: 'Takırtı neden yalnızca tümseklerde duyuluyor, düz yolda sessiz?',
        a: 'Süspansiyon mafsalındaki boşluk yalnızca süspansiyon çalışırken kendini gösterir: tümsekte parça yuvasında kayar ve vurur. Düz asfaltta süspansiyon hareketleri küçüktür ve aşınmış parça susar. Bu yüzden tümseklerde takırtı neredeyse her zaman yürüyen aksamla ilgilidir, motorla değil.',
      },
      {
        q: 'Yakında lastik değiştirdim ve takırtı başladı. Tesadüf mü?',
        a: 'Muhtemelen değil. Tekerlekler söküldükten sonraki ilk günlerde tekerlek dönüşüyle aynı ritimde gelen takırtı ya da gürültü, gevşek bijonların klasiğidir. Kontrol beş dakika sürer: tüm tekerleklerin bijonlarını anahtarla sıkın. Her lastik değişiminden sonra 50–100 kilometrede sıkmayı tekrarlamak yararlıdır.',
      },
      {
        q: 'Viraj demiri rotilleri takırdıyor. Acil mi?',
        a: 'Rotillerin kendisi tehlikeli değildir — süspansiyonda ilk aşınan küçük çubuklardır ve araç yönetilebilir kalır. Ama daha ciddi parçalar da benzer takırdayabilir, bu yüzden bir–iki hafta içinde arıza tespiti gerekir: lifte kaynak dakikalar içinde bulunur.',
      },
    ],
  },

  'tikanie-dvigatelya': {
    h1: 'Motorun tıkırtısı',
    metaTitle: 'Motor tıkırdıyor: normal mi aşınma mı, nedenleri | Pro-Stuk',
    description:
      'Motor tıkırtısı nereden gelir: supap boşlukları, hidrolik kaldıraçlar, enjektörlerin normal tıkırtısı ya da egzoz manifoldu. Normali aşınmadan nasıl ayırt edersiniz.',
    intro: [
      'Düzenli ve sık tıkırtı, motor seslerinin en sıradanıdır ve her zaman arıza anlamına gelmez. Direkt enjeksiyonlu motorlarda (TSI, GDI ve benzerleri) ve dizellerde enjektörler ile yüksek basınç pompası hep tıkırdar — yapıları böyledir. Normal tıkırtının tanınabilir işaretleri vardır: soğukken de sıcakken de aynıdır, dışarıdan kabin içinden daha gür duyulur ve yıllarca değişmez.',
      'Şüphelendirmesi gereken, zamanla gürleşen ve ısınmış motorda eskisinden daha iyi duyulan tıkırtıdır. Büyümüş supap boşlukları böyle kendini gösterir: supap mekanizmasındaki aralıklar aşınmayla büyür ve supaplar darbeyle çalışmaya başlar. Ayrı durumlar: yalnızca soğuk çalıştırmadan sonraki ilk dakikalarda tıkırtı (genelde hidrolik kaldıraçlar — yağ basıncıyla fazla boşluğu alan parçalar) ve dışarıdan daha gür duyulan, egzoz kokusuyla gelen tıkırtı — yanmış egzoz manifoldu contasının imzası.',
    ],
    causes: [
      { name: 'Enjektörlerin normal tıkırtısı (direkt enjeksiyon, dizel)', likelihood: 'Çok sık — ses her zaman aynıysa' },
      { name: 'Büyümüş supap boşlukları', likelihood: 'Sık — tıkırtı zamanla gürleştiyse' },
      { name: 'Soğukta hidrolik supap kaldıraçları', likelihood: 'Sık — yalnızca çalıştırmadan sonraki ilk dakikalarda tıkırdıyorsa' },
      { name: 'Egzoz manifoldu contası veya çatlağı', likelihood: 'Tıkırtı dışarıda daha gürse ve egzoz kokusu varsa' },
      { name: 'Triger zinciri veya gergisi', likelihood: 'Daha seyrek — motorun önünden hışırtı ya da tırıltı' },
    ],
    canRide: [
      'Tıkırtıyla neredeyse her zaman yola devam edilebilir: tipik nedenleri arasında emniyet şeridine çekmeyi gerektiren yoktur. Enjektörlerin normal tıkırtısı ve sabahları kaldıraçların tıkırtısı hiçbir onarım gerektirmez — motorun olağan çalışmasıdır.',
      'Ama büyüyen tıkırtı kendiliğinden geçmez. Boşluğu büyümüş supaplar darbeyle çalışır ve daha hızlı aşınır; bu yüzden ayarı ya da kaldıraç kontrolünü önümüzdeki iki haftaya planlayın — o süre boyunca rahatça gidebilirsiniz. Egzoz manifoldunda mantık benzerdir: bir–iki hafta payınız var, ama açıklık büyür ve egzoz kokusu kalorifer üzerinden kabine çekilebilir — bu artık zararlıdır.',
    ],
    checks: [
      'Soğuk ve ısınmış motoru karşılaştırın: yalnızca çalıştırmadan sonraki ilk dakikalarda tıkırtı kaldıraçların tablosudur; ısınınca daha iyi duyulan ses supap boşluklarına işaret eder.',
      'Değişimi hafızanızdan değerlendirin: yıllardır aynı kalan tıkırtı daha çok normaldir; altı ay önce belirgin biçimde daha sessizse bu aşınmadır ve büyümeye devam eder.',
      'Dışarıdan ve kabinden dinleyin: enjektörlerin normal tıkırtısı dışarıda belirgin şekilde daha gürdür; supap tıkırtısı sürücü koltuğundan da iyi duyulur.',
      'Yağ çubuğuyla seviyeyi kontrol edin: seviye düşükken kaldıraçların ve supap mekanizmasının tıkırtısı artar, seviyeye tamamlamak bazen hemen duyulur.',
      'Açık kaputun yanında koklayın: sık tıkırtıyla birlikte egzoz kokusu manifold işaretidir — bununla bir–iki hafta içinde servise.',
    ],
    appHelp:
      'Pro-Stuk uygulaması en önemlisini netleştirir — tıkırtı zamanla gürleşti mi ve soğukken/sıcakken nasıl davranıyor — kayıt ise onu tipik örneklerle karşılaştırmayı sağlar. Raporda yüzdeleriyle olası nedenler ve ışık biçiminde bir sonuç yer alır: normal, bu hafta randevu ya da gecikmeden arıza tespiti.',
    faq: [
      {
        q: 'Dizeller ve direkt enjeksiyonlu motorlar neden hep tıkırdar?',
        a: 'Bunlarda yakıt çok yüksek basınçla verilir ve her enjektör açılırken kısa bir tık sesi çıkarır, buna yüksek basınç pompasının tıkırtısı eklenir. Bu normal çalışmadır: ses her havada aynıdır, dışarıda içeriden daha gürdür ve onarım gerektirmez.',
      },
      {
        q: 'Supap boşluğu ayarı nedir?',
        a: 'Supap mekanizmasının parçaları arasında küçük bir ısıl boşluk bırakılır; aşınmayla büyür ve supaplar tıkırdamaya başlar. Usta boşlukları ayar şimleri ya da vidalarla normale getirir. Hidrolik kaldıraçlı motorlarda ayar yerine kaldıraçların kendisi ve yağ basıncı kontrol edilir.',
      },
      {
        q: 'Yağ değişiminden sonra tıkırtı geçebilir mi?',
        a: 'Geçebilir; suçlu eski yağ, uygun olmayan viskozite ya da düşük seviyeyse: hidrolik kaldıraçlar yağın durumuna çok duyarlıdır. Ama yağ değişimi aşınmış supap boşluklarını düzeltmez — sonrasında tıkırtı kaldıysa ve büyümeye devam ediyorsa ayar gerekir.',
      },
    ],
  },

  'svist-remnya': {
    h1: 'Kayış ıslığı',
    metaTitle: 'Kayış ötüyor: nedenleri, gidilir mi ve ne yapmalı | Pro-Stuk',
    description:
      'Aksesuar kayışı ötüyor: aşınma, gevşek gerginlik, rulmanlar ya da klima kompresörü kavraması. Nedeni koşullardan nasıl daraltırsınız ve ıslık ne zaman servis ister.',
    intro: [
      'Kaputun altından gelen tiz ıslığı neredeyse her zaman aksesuar kayışı çıkarır — krank milinden alternatörü, devirdaimi ve birçok araçta klima kompresörü ile direksiyon pompasını döndüren kayış. Tek bir durumda öter: kasnaklara tutunmak yerine üzerlerinde kaydığında.',
      'Kaymanın nedenleri iki gruba ayrılır. Birincisi kayışın kendisi: kauçuk yaşlanıp sertleşmiş, gerginlik düşmüş, çalışma yüzeyine yağ ya da antifriz bulaşmıştır. İkincisi döndürdüğü gruplar: sıkışan bir rulman, ağır dönen klima kompresörü kavraması ya da rulmanı aşınmış devirdaim, kayışı aktarabileceğinden fazla zorlar. Islığın tam olarak ne zaman çıktığı, olası nedenleri belirgin biçimde daraltır.',
    ],
    causes: [
      { name: 'Aşınmış veya gevşek gerdirilmiş kayış', likelihood: 'En sık' },
      { name: 'Soğukta veya rutubette kayma', likelihood: 'Sık — ıslık ısındıktan sonra geçiyorsa' },
      { name: 'Gergi rulmanı veya avara rulmanı', likelihood: 'Az değil — ıslığa uğultu ya da hışırtı eşlik eder' },
      { name: 'Klima kompresörü kavraması', likelihood: 'Ciyaklama klimanın devreye girmesiyle çakışıyorsa' },
      { name: 'Devirdaim veya alternatör tek yön kasnağı', likelihood: 'Daha seyrek' },
    ],
    canRide: [
      'Islık kısa ve yalnızca soğuk çalıştırmadan sonraki ilk saniyelerde yaşıyorsa rahatça gidin: bu, kayışı fırsat bulunca göstermek için bir nedendir, günün planını değiştirmek için değil.',
      'Sürekli ıslıkla ya da yük altındaki ıslıkla şimdilik gidilebilir, ama bir hafta içinde servise randevu alın: kayan kayış aşırı ısınır ve çığ gibi aşınır; kopması alternatörü, birçok motorda da devirdaimi durdurur. İki işaret hemen kenara çekip motoru durdurmayı gerektirir: yanan akü lambası ve yükselen sıcaklık göstergesi — ikisi de kayışın artık kendi ünitelerini döndürmediği anlamına gelir.',
    ],
    checks: [
      'Tam olarak ne zaman öttüğünü aklınızda tutun: çalıştırmadan sonraki ilk saniyeler, klimanın devreye girdiği an, direksiyonu çevirirken ya da sürekli — asıl anahtar budur.',
      'Motor çalışırken klimayı açın: tam devreye girme anındaki ciyaklama, kayan kompresör kavrasını gösterir.',
      'Motor kapalıyken kayışı inceleyin: enine çatlaklar, saçaklanmış kenarlar ve parlak «cilalanmış» yanaklar aşınma işaretidir.',
      'Kayışta ve kasnakların çevresinde yağ ya da antifriz izi olup olmadığına bakın: yağlanmış kayış yeniyken bile öter, antifriz izleri ise devirdaimi gösterir.',
      'Islığın yanında motor deviriyle değişen düzgün bir uğultu ya da hışırtı olup olmadığını dinleyin — rulmanlardan birinin sesi böyledir.',
    ],
    appHelp:
      'Pro-Stuk uygulaması sesin karakterini ve koşulları netleştirir — ıslık mı uğultu mu, soğukta mı yük altında mı, klimayla bağlantılı mı — ve kayıt sayesinde kayışın ciyaklamasını rulmanın hışırtısından ayırmaya yardım eder. Raporda yüzdeleriyle olası nedenler ve bir ışık vardır: yola devam edilebilir, bu hafta servise ya da durun.',
    faq: [
      {
        q: 'Kayış yolda koparsa ne olur?',
        a: 'Şarj anında kesilir: alternatör durur ve araç akünün kalanıyla gider — genelde birkaç on dakika. Kayışın devirdaimi de döndürdüğü motorlarda sıcaklık hızla yükselir ve yola devam etmek mümkün olmaz. Bu yüzden öten kayışı kopma sonrası değil, randevuyla değiştirmek daha doğrudur.',
      },
      {
        q: 'Islık neden klima açılınca çıkıyor?',
        a: 'Klima kompresörü kayıştaki en ağır tüketicidir. Devreye girdiği anda kavraması yükü aniden artırır ve aşınmış ya da gevşek kayış kaymaya başlar. Ciyaklayan tam olarak devreye girme anıysa kavramanın kendisini de kontrol ettirin: aşınması aynı sesi verir.',
      },
      {
        q: 'Ötmesin diye kayışa sprey sıkılabilir mi?',
        a: 'Sıkmayın. Spreyler ve WD-40 gibi ev usulü çözümler bir–iki gün sessizlik verir, ama emdiği maddeyle kauçuk daha çok kayar ve daha hızlı yaşlanır; neden — aşınma ya da gevşek gerginlik — yerinde kalır. Kayışı rulmanıyla birlikte değiştirmek daha güvenlidir: serviste ucuz işlerden biridir.',
      },
    ],
  },

  'gremit-pod-mashinoy': {
    h1: 'Aracın altından zangırtı',
    metaTitle: 'Aracın altından zangırtı: ne titriyor, tehlikeli mi | Pro-Stuk',
    description:
      'Aracın altından gelen zangırtı ve titreşim: egzoz askıları, ısı kalkanı, karter koruması ya da katalizör. Sesin kaynağını nasıl bulursunuz ve ne zaman iş ciddiye biner.',
    intro: [
      'Aracın altından gelen zangırtı endişe verici duyulur, ama kaynak çoğu zaman ne motordur ne süspansiyon: cıvatalı saclardır — egzoz takozları, karter korumasının gevşemiş cıvataları ya da ısı kalkanı, yani tabanı egzoz borusunun sıcağından koruyan ince sac. Bunların hepsi gür zangırdar, gövdede yankılanır ve bu yüzden olduğundan daha ciddi görünür: bu sesler aracın yol tutuşunu ve çalışmasını etkilemez.',
      'Yanıltıcı durumlar da var: «aracın altında» zangırdayan şey çoğu zaman bagajdır — kriko, bijon anahtarı, kötü sabitlenmiş stepne — ya da yeri güç belirlenen kabin plastikleri. Gerçekten endişe verici tek senaryo şu: motora daha yakın, çınlayan bir zangırtı ile birlikte güç kaybı veya değişmiş egzoz kokusu. Dağılmış katalizör böyle ses verir — egzoz gazlarının seramik filtresi, kırılan parçaları kendi gövdesinin içinde zangırdar — ve bu ihtimalle oyalanmamak gerekir.',
    ],
    causes: [
      { name: 'Egzoz askıları veya karter koruması', likelihood: 'En sık — tümseklerde metalik zangırtı' },
      { name: 'Egzoz sisteminin ısı kalkanı', likelihood: 'Sık — belirli devirlerde çınlayan zangırtı' },
      { name: 'Kriko, stepne veya bagajdaki yük', likelihood: 'Sık — arkadan boğuk gürültü, «bir şey yuvarlanıyor»' },
      { name: 'Kabin plastikleri: paneller ve gıcırtılar', likelihood: 'Sık — ses sanıldığından daha yakın' },
      { name: 'Dağılmış katalizör', likelihood: 'Daha seyrek — zangırtıyla birlikte güç düştüyse' },
    ],
    canRide: [
      'Çoğu durumda evet, üstelik özel bir kısıtlama olmadan: zangırdayan ısı kalkanı, gevşemiş egzoz askıları ya da karter koruması cıvataları konfor meselesidir, güvenlik değil. Onarım genelde dakikalar sürer: sıkmak ya da kelepçeyle tutturmak. Emin olunması gereken tek şey egzozun sarkmadığıdır: asfalta değmek üzere olan bir boru artık görmezden gelinemez, askısı hemen onarılır.',
      'Zangırtıya güç kaybı, değişmiş egzoz kokusu ya da motor arıza lambası eşlik ediyorsa önümüzdeki günlerde arıza tespitine gidin: dağılmış katalizörün seramik parçaları motora çekilebilir ve bu artık pahalı bir onarımdır. Kontrole kadar motoru yüksek devirlerde çevirmeyin.',
    ],
    checks: [
      'Bagajı boşaltın, stepne ve krikonun sabitliğini kontrol edin, rafı bastırın — ve aynı yol bölümünü yeniden geçin. Ses kaybolduysa konu kapanmıştır.',
      'Duran araçta devri yumuşakça yükseltin: ısı kalkanının zangırtısı genelde belirli devirlerde çıkar ve hiçbir tümsek olmadan olduğunuz yerde duyulur.',
      'Yolcudan giderken şüpheli kabin panellerine eliyle bastırmasını isteyin: ses kesiliyorsa bunlar kabin «gıcırtıları»dır, taban değil.',
      'Güce ve egzoz kokusuna dikkat edin: araç daha kötü hızlanıyorsa ya da koku değiştiyse bu katalizör ihtimalidir — onunla önümüzdeki günlerde ustaya.',
      'Altına girmeden aracın altına bakın: sarkmış egzoz, karter korumasının sallanan kenarı ya da bükülmüş kalkan çoğu zaman tekerleğin yanından bile görünür.',
    ],
    appHelp:
      'Pro-Stuk uygulaması zangırtıyı kaynağına bağlamaya yardım eder: ses nereden geliyor, motor devrine mi tümseklere mi bağlı, güce ne oluyor. Yanıtlardan ve kayıttan yüzdeleriyle olası nedenleri ve aciliyet ışığını gösterir — zararsız bir sacı katalizörden daha servise gitmeden ayırmak için elverişlidir.',
    faq: [
      {
        q: 'Aracın altında bir şey zangırdıyorsa gitmek tehlikeli mi?',
        a: 'Çoğu zaman değil: gevşemiş egzoz askıları, karter koruması ve ısı kalkanı aracın çalışmasını etkilemez. İstisnalar, asfalta değmek üzere sarkmış egzoz ve güç kaybıyla birlikte gelen zangırtıdır: ikincisinde dağılmış katalizör olabilir ve kontrolü ertelememek gerekir.',
      },
      {
        q: 'Isı kalkanı nedir, öylece sökülebilir mi?',
        a: 'Egzoz sisteminin sıcak parçaları ile taban arasındaki ince metal levhadır: gövdeyi, tesisatı ve borunun üstündeki her şeyi sıcaktan korur. Sökmek doğru değildir — doğrusu sıkmak ya da kelepçeyle tutturmaktır: serviste birkaç dakikalık iştir.',
      },
      {
        q: 'Zangırdayanın katalizör olduğunu nasıl anlarım?',
        a: 'Motora daha yakın, tabandan gelen ve gaz verince artan çınlayan zangırtı ya da hışırtı, buna ek olarak güç kaybı veya değişmiş egzoz kokusu. Serviste bu ihtimal, soğumuş araçta katalizör gövdesine hafifçe vurularak doğrulanır: dağılmış seramik içeride çakıl gibi hışırdar.',
      },
    ],
  },

  'skrezhet-pri-tormozhenii': {
    h1: 'Frenlerde metal sesi',
    metaTitle: 'Frenlerde metal sesi: balatalar bitti, ne yapmalı | Pro-Stuk',
    description:
      'Frenlerde metal metale sürtme çoğunlukla metale kadar aşınmış balata demektir — bununla yola devam edilmez. Daha seyrek suçlu, disk muhafazasının arkasındaki taştır.',
    intro: [
      'Frenlemede metal sesi, herhangi bir gıcırtıdan daha ciddiye alınmalıdır. Çoğu zaman metale kadar aşınmış balatalar böyle ses verir: diske sürtünen balata malzemesi bitmiştir ve diski balatanın çelik tabanı kazımaktadır. Fren mesafesi uzar, disk her duruşta bozulur, mekanizma sıkışabilir.',
      'Daha az dramatik seçenekler de var. Eğilmiş disk muhafazası ya da muhafaza ile disk arasına sıkışan bir taş çok benzer bir ses verir, ama frenlere zarar vermez. Gece dışarıda kaldıktan veya yağmurdan sonraki ilk frenlemelerdeki kısa kazıma sesi ise yalnızca balataların birkaç dakikada temizlediği pas tabakasıdır. Sorun şu ki bu senaryolar kulakla kolayca karışır; bu yüzden sürekli metal sesi tahmin değil, gözle kontrol ister.',
    ],
    causes: [
      { name: 'Metale kadar aşınmış balatalar', likelihood: 'En sık — her frenlemede metal sesi geliyorsa' },
      { name: 'Taş ya da eğilmiş muhafaza diske değiyor', likelihood: 'Sık; ses benzer, ama frenlere zarar vermez' },
      { name: 'Sıkışan kaliper', likelihood: 'Tekerlek ısınıyor ve araç bir yana çekiyorsa' },
      { name: 'Park veya yağmur sonrası pas tabakası', likelihood: 'Ses ilk frenlemelerde geçiyorsa' },
    ],
    canRide: [
      'Metal metale sürtmeyle olağan yolculuklar kesilmelidir: yalnızca mesafeyi geniş tutarak, erken ve yumuşak fren yaparak servise gitmek kabul edilebilir. Değişimi ertelemek parasal olarak da mantıklı değildir: metal sesiyle geçen her kilometre faturaya, balatanın çelik tabanının kelimenin tam anlamıyla tornaladığı disklerin bedelini ekler.',
      'Ses park sonrası çıkıp ilk frenlemelerde kaybolduysa kısıtlamasız gidin: bu pastır. Ses daha çok sürtme gibiyse, pedala basmadan da duyuluyorsa ve tekerlek yolculuktan sonra ısınmıyorsa muhafaza ya da taş olasıdır: rahatça varabilirsiniz, ama aracı bir–iki gün içinde gösterin — zararsız senaryoyu bitmiş balatalardan güvenle ancak gözle kontrol ayırır.',
    ],
    checks: [
      'Düzeni izleyin: ses yalnızca frene basınca geliyorsa balatalar olasıdır; giderken sürekli sürtme sesi daha çok muhafaza, taş ya da sıkışan kaliperdir.',
      'Jant parmaklarının arasından bakın: birçok araçta dış balata sökmeden görünür. Balata malzemesi 3–4 mm’den ince ya da yerinde parlak metal varsa derhal değişmelidir.',
      'Kısa bir yolculuktan sonra fren diskine dokunmadan elinizi tekerleklere yaklaştırın: bir tekerlek diğerlerinden belirgin biçimde sıcaksa bu sıkışan kalipere benzer — balataları diske bastıran parçaya.',
      'Aracın davranışına dikkat edin: frenlerken bir yana çekme ya da tekerlekten gelen yanık kokusu, yola devam edilmeyecek işaretlerdir — yalnızca dikkatle servise kadar.',
      'Diski jantın içinden inceleyin: derin oyuklar ve metalde mavimsi renk, metal sesinin uzun süredir devam ettiğini ve disklerin zarar gördüğünü söyler.',
    ],
    appHelp:
      'Pro-Stuk uygulaması aynı sorulardan geçirir — ses sürekli mi, tekerlek ısınıyor mu, ilk frenlemelerden sonra geçiyor mu — kayıt ise metal sesini aşınma göstergesinin ciyaklamasından ayırmaya yardım eder. Raporda olası nedenler ve bir ışık vardır: gidilebilir, bu hafta gösterin ya da yalnızca servise kadar sürün.',
    faq: [
      {
        q: 'Metal sesi ile fren gıcırtısının farkı nedir?',
        a: 'Gıcırtı tiz bir sestir ve frenler o sırada hâlâ tam çalışır: çoğunlukla önceden uyaran aşınma göstergesidir. Metal sesi ise kaba ve kalın bir metal metale sürtmedir: balata malzemesi bitmiştir ve diski çelik taban sürtmektedir. Gıcırtı bu hafta randevu, metal sesi ise olağan yolculukların sonu demektir.',
      },
      {
        q: 'Metal sesi çıktıysa yalnızca balata değişimi yeter mi?',
        a: 'Disklerin durumuna bağlı: kısa süre bile «metal üstünde» gitmek onlarda oyuk bırakır. Sığ olanlar bazen tornayla giderilir, derin olanlar disk değişimi gerektirir. Oyuklu diskte yeni balata daha kötü frenler ve hızlı aşınır, bu yüzden karar gözle kontrolden sonra verilir.',
      },
      {
        q: 'Metal sesi bazen çıkıp bazen kayboluyor — bu da tehlikeli mi?',
        a: 'Kesintili ses çoğu zaman muhafaza ile disk arasındaki taştan gelir ve taş kendiliğinden de düşebilir. Buna güvenmeyin: aynı gelip giden ses, balataların metale doğru aşınmasının erken evresinde de olur. Bir–iki gün içinde gözle kontrol her şeyi yerine oturtur.',
      },
    ],
  },

  'stuk-pri-razgone': {
    h1: 'Hızlanırken vuruntu',
    metaTitle: 'Gaz verip keserken vuruntu: nedenleri ve çözümü | Pro-Stuk',
    description:
      'Gaza basınca ya da gazı kesince neden vuruyor: motor takozları, aks körüğü, aktarma organlarındaki boşluk veya otomatik şanzıman. Zararsız boşluğu motorun içindeki vuruntudan nasıl ayırırsınız.',
    intro: [
      'Tam olarak gaza basıldığı ya da gazın kesildiği anda ortaya çıkan vuruntu çoğunlukla motorun kendisinde değil, gücü tekerleklere ileten zincirde doğar. Yıllar içinde bu zincirin parçalarında boşluk birikir: motorun kauçuk takozları çöker ve yük değişiminde motorun sallanmasına izin verir, iç aks mafsalı aşınır (şanzımandan tekerleğe giden akstaki mafsal), şaft istavrozları ve alt beşik bağlantıları gevşer. Güç yön değiştirdiği her seferde boşluk darbeyle kapanır — tek bir vuruntu ya da takırtı buradan gelir.',
      'Ayrı bir konu otomatik şanzımandır: vites kolunu D ile R arasında geçirirken ya da vites değişimlerinde gelen tokat ve takırtı genelde eski yağı veya aşınmayı anlatır. Bambaşka bir durum ise motorun derinliğinden gelen, devirle sıklaşan ve yük altında yükselen boğuk vuruntudur: krank mili yatakları böyle vurur. Seyrek ama en ciddi seçenektir ve kaçırmamak önemlidir.',
    ],
    causes: [
      { name: 'Motor takozları veya iç aks mafsalı', likelihood: 'En sık — gaza basıp keserken tek vuruntu' },
      { name: 'Aktarma organlarında boşluk: şaft istavrozları, alt beşik bağlantıları', likelihood: 'Arkadan ve dört çekerde sık — kalkışta tabandan takırtı' },
      { name: 'Otomatik şanzıman: eski yağ veya aşınma', likelihood: 'Tokat ve takırtı vites değişimleriyle çakışıyorsa' },
      { name: 'Motorun derinliğinden yatak vuruntusu', likelihood: 'Seyrek — devirle sıklaşır, yük altında daha gür' },
    ],
    canRide: [
      'Tablodaki nedenlerin çoğuyla yola devam edilebilir: takozlardaki, mafsallardaki ya da aktarma organlarındaki boşluk, vuruntu tek ve hafif kaldığı sürece aracı bir anda yolda bırakmaz. Ama arıza tespitini aylarca ertelemeyin: dağılan bir istavroz ya da aşınmış mafsal zamanla kırılır ve bu yolda olur. Servis için makul süre bir–iki hafta; o zamana kadar daha yumuşak kalkın, gaza yumuşak basın ve yumuşak kesin.',
      'İstisna, motorun derinliğinden gelen ve gaz verince sıklaşıp yük altında yükselen vuruntudur. Onunla olağan yolculuklar kesilmelidir: aşınmış yataklar motorun sıkışmasıyla bitebilir. Önce yağ seviyesini kontrol edin; sonrası çekici — servis çok yakınsa yavaş ve gaz vermeden.',
    ],
    checks: [
      'Anı netleştirin: vuruntu tümseklerde değil, tam olarak gaza basıp keserken geliyorsa bu, süspansiyonu değil güç aktarımını ilgilendirir. Bu ayrıntı ustanın aramasını hemen daraltır.',
      'Yağ çubuğuyla motor yağ seviyesini kontrol edin. Motor sesine benzeyen her vuruntuda ilk adım budur: seviye düşükken en önce yataklar zarar görür.',
      'Vites değişimlerinde takırdıyorsa otomatik şanzıman yağının seviyesini ve durumunu kontrol edin: yanık kokulu koyu yağ tokatların sık nedenidir ve bazen değişimi sorunu çözer.',
      'Sesin nereden geldiğini dinleyin — kaputun altından mı, tabanın ortasından mı, bir tekerlek tarafından mı — ve vites değiştirirken tekrarlanıp tekrarlanmadığına bakın. Bu gözlemleri servis için not edin.',
      'Yumuşak testi yapın: gaza yumuşak basıp bırakınca vuruntu kayboluyor, sert yapınca dönüyorsa bu klasik boşluktur ve onarıma kadar yumuşak sürüş yeter.',
    ],
    appHelp:
      'Pro-Stuk uygulaması aynı netleştirici soruları sorar — tam olarak ne zaman vuruyor, ses devirle ve viteslerle değişiyor mu — ve kayıt sayesinde boşluğun takırtısını derin motor vuruntusundan ayırmaya yardım eder. Raporda yüzdeleriyle olası nedenler ve anlaşılır bir sonuç yer alır: gidilebilir, servisi planlayın ya da durun.',
    faq: [
      {
        q: 'Neden tam olarak gaza basıp keserken vuruyor?',
        a: 'Yük değiştiği anda güç yön değiştirir ve motor takozlarındaki, mafsallardaki ve aktarma organlarındaki tüm boşluklar darbeyle kapanır. Araç sabit hızla giderken parçalar birbirine dayalıdır ve boşluk kendini belli etmez — bu yüzden vuruntu yalnızca gaz pedalıyla çalışırken duyulur.',
      },
      {
        q: 'Vuran şeyin motorun kendisi olduğunu ve durumun ciddi olduğunu nasıl anlarım?',
        a: 'Endişe verici işaret, motorun derinliğinden gelen ve devirle sıklaşıp yük altında — örneğin yokuşta — yükselen boğuk vuruntudur. Krank mili yatakları böyle vurur. Bu durumda yolculukları kesin, yağ seviyesini kontrol edin ve aracı servise çekiciyle ulaştırın.',
      },
      {
        q: 'Otomatik şanzıman hızlanırken vuruntuya yol açabilir mi?',
        a: 'Evet. Vites değişimi anında ya da vites kolunu D ile R arasında geçirirken gelen tokat veya takırtı, eski yağın ya da şanzıman aşınmasının tipik işaretidir. Yağın seviyesi ve durumunu kontrol ederek başlayın; onarıma kadar vites kolunu yalnızca araç tamamen dururken ve frene basılıyken hareket ettirin.',
      },
    ],
  },

  'zvon-pri-razgone': {
    h1: 'Hızlanırken çınlama',
    metaTitle: 'Hızlanırken çınlama: detonasyon mu değil mi | Pro-Stuk',
    description:
      'Hızlanırken duyulan metalik çınlama çoğunlukla yakıttan kaynaklanan detonasyondur. İstasyon değiştirerek nasıl sınarsınız ve ne zaman suçlu motor değil, ısı kalkanı ya da katalizördür.',
    intro: [
      'Hızlanırken duyulan metalik çınlama — sürücülerin «vuruntu yapıyor» dediği ses — çoğunlukla detonasyon çıkar. Silindirlerdeki yakıtın bir kısmı düzgün yanmak yerine patlar ve şok dalgası motorun cidarlarında çınlayan bir tıkırtı olarak duyulur. En iyi yük altında duyulur: yokuşta, sollarken, yüksek viteste düşük devirden hızlanırken. En sık neden sıradandır — üreticinin önerdiğinden düşük oktanlı benzin ya da sadece kötü bir depo.',
      'Çınlayan şey motor olmayabilir. Gevşemiş ısı kalkanı — egzozun üstündeki ince sac — belirli devirlerde zangırdar, dağılmış katalizör seramiği ise tabanın altından hışırdayıp çınlar. Fark bağlantıdadır: detonasyon yüke bağlıdır ve yumuşak sürüşte kaybolur; kalkan ise duran araçta gaz verildiğinde bile «kendi» devirlerinde çınlar.',
    ],
    causes: [
      { name: 'Detonasyon: oktanı düşük yakıt', likelihood: 'En sık — yük altında, özellikle yokuşta çınlama' },
      { name: 'Yanma odalarındaki karbon birikintisi ya da vuruntu sensörü', likelihood: 'İstasyon değişikliği işe yaramadıysa' },
      { name: 'Egzoz sisteminin ısı kalkanı', likelihood: 'Sık — belirli devirlerde zangırtı, yükle ilgisiz' },
      { name: 'Dağılmış katalizör', likelihood: 'Daha seyrek — tabandan çınlama ve hışırtı, güç azalıyor' },
    ],
    canRide: [
      'Seyrek çınlama ataklarıyla varılabilir, ama bu sırada motoru zorlamayın: yumuşak hızlanın, yokuşa düşük viteste girin, yüksek viteste düşük devirden çekmeyin. İlk adım, önerilenden düşük olmayan oktanlı yakıt almak, tercihen başka bir akaryakıt zincirinden: çınlama çoğu zaman bir depoyla birlikte geçer.',
      'Sürekli detonasyon, her hızlanmada pistonlara inen darbelerdir ve motoru yavaş yavaş yıpratır: pistonlar, segmanlar, silindir kapağı contası zarar görür. Yakıt değişiminden sonra çınlama geçmediyse arıza tespitini geciktirmeyin. Kalkanın zangırtısı ise tamamen akustik bir rahatsızlıktır: onunla kısıtlamasız gidilir ve sac ilk servis ziyaretinde sabitlenir.',
    ],
    checks: [
      'Başka bir istasyondan, önerilenden düşük olmayan oktanlı yakıtla depoyu doldurun. Bir–iki depoda çınlama kaybolduysa neden yakıttı.',
      'Yükle bağlantısını kontrol edin: yokuşta, sollarken ve sert gazda çıkıp yumuşak hızlanmada azalan çınlama detonasyonun imzasıdır.',
      'Duran araçta boşta gaz verin: çınlama ya da zangırtı yük olmadan da belirli devirlerde çıkıyorsa ısı kalkanı daha olasıdır.',
      'Kullanma kılavuzundan ya da yakıt kapağından aracınıza hangi benzinin önerildiğine bakın: birçok motora düşük oktan artık uymaz, biçimsel olarak izinli olsa bile.',
      'Güce ve tabandan gelen seslere dikkat edin: alttan hışırtı ve çınlama ile birlikte zayıflayan hızlanma, katalizörü geciktirmeden kontrol ettirmek için nedendir.',
    ],
    appHelp:
      'Pro-Stuk uygulaması aynı sorularla yol gösterir — ne zaman çınlıyor, ses yüke mi devre mi bağlı — kayıt ise detonasyonun çınlayan tıkırtısını sac kalkanın zangırtısından ayırmayı sağlar. Raporda yüzdeleriyle olası nedenler ve bir sonuç yer alır: gidilebilir, servisi planlamak gerekir ya da durmak daha doğru.',
    faq: [
      {
        q: '«Vuruntu yapıyor» ne demek?',
        a: 'Detonasyon çınlamasının eski adıdır; bir zamanlar piston pimleriyle ilişkilendirilirdi. Gerçekte çınlayan onlar değildir — sesi, patlamalı yanmanın silindir cidarlarından yansıyan şok dalgası oluşturur. Ad yerleşmiştir, ama neden hep aynıdır: detonasyon, aşınmış piston parçaları değil.',
      },
      {
        q: 'Detonasyonla yola devam edilebilir mi?',
        a: 'Kısa süre ve idareli: yumuşak hızlanma, yokuşta düşük vites, tam yük ve römork olmadan. Her çınlama atağı pistonlara inen darbedir ve sürekli detonasyon pahalı bir motor onarımıyla biter. Yakıt değişimi çınlamayı bir–iki depoda gidermediyse arıza tespiti gerekir.',
      },
      {
        q: 'Daha yüksek oktanlı benzin işe yarar mı?',
        a: 'Ana kural üreticinin önerdiğinin altına inmemektir. Oktan sayısı yakıtın kendiliğinden tutuşmaya direncini gösterir; bu yüzden detonasyona yatkın bir motorda bir üst kaliteye geçmek çınlamayı çoğu zaman giderir. Bu da yetmiyorsa neden — karbon birikintisi ya da vuruntu sensörü — serviste aranır.',
      },
    ],
  },

  'gul-pri-povorote': {
    h1: 'Virajda uğultu',
    metaTitle: 'Virajda uğultu: poyra rulmanı mı hidrolik direksiyon mu | Pro-Stuk',
    description:
      'Virajdaki uğultu nereden gelir: aşınmış poyra rulmanı, uğuldayan hidrolik direksiyon pompası ya da lastik gürültüsü. Tarafı nasıl belirlersiniz ve tehlikeli mi.',
    intro: [
      'Virajdaki uğultuda iki senaryoyu hemen ayırmak gerekir: hızda duyulan, bir virajda artıp diğerinde azalan uğultu ve direksiyonu yerinde ya da park ederken çevirirken çıkan inleme. Benzer duyulurlar, ama kaynaklar tümüyle farklıdır: birincisinde tekerlek, ikincisinde direksiyon takviyesi.',
      'Dönüş yönüne bağlı olarak değişen, hızla gelen uğultu poyra rulmanının klasik imzasıdır — tekerleğin üzerinde döndüğü rulman. Virajda aracın ağırlığı dış tekerleklere geçer ve yük binen aşınmış rulman daha gür uğuldar. Düşük hızda direksiyon çevirirken duyulan inleme genelde hidrolik direksiyon pompasından gelir — kural olarak hidrolik yağı seviyesi düştüğü için. Elektrikli direksiyonlu araçlarda ise direksiyonu çevirirken hafif bir vınlama arıza değil, normaldir.',
    ],
    causes: [
      { name: 'Poyra rulmanı', likelihood: 'En sık — uğultu hızla geliyor ve virajlarda değişiyorsa' },
      { name: 'Hidrolik direksiyon pompası veya düşük yağ seviyesi', likelihood: 'Sık — direksiyonu yerinde çevirirken inliyorsa' },
      { name: 'Lastik gürültüsü', likelihood: 'Sık; uğultu viraja değil, yol zeminine bağlıdır' },
      { name: 'Elektrikli direksiyonun normal vınlaması', likelihood: 'Hidrolik yağ deposu olmayan araçlarda normal' },
      { name: 'Aşınmış aks mafsalı', likelihood: 'Daha seyrek; genelde tam kilitte tıkırtı da ekler' },
    ],
    canRide: [
      'Uğuldayan poyra rulmanıyla gidilebilir, ama bu kısa vadeli bir kredidir: kontrolü bir haftadan fazla ertelemeyin, uzun ve hızlı yolculukları arıza tespitinden sonraya bırakın. Dağılmakta olan rulman tekerlekte boşluk yapar, ihmal edilirse sıkışabilir. Uğultu birden arttıysa ya da yanına titreşim eklendiyse hemen servise.',
      'İnleyen hidrolik direksiyon pompasında ilk iş depodaki yağ seviyesini kontrol etmektir: tamamlamak çoğu zaman konuyu kapatır. Gidilebilir, ama direksiyonu birkaç saniyeden uzun süre sonuna kadar kilitli tutmayın — bu konumda pompa azami basınçla çalışır. Tamamladıktan sonra inleme sürüyorsa ya da seviye yine düşüyorsa kaçak var demektir — bir hafta içinde servise.',
    ],
    checks: [
      'Uğultunun hangi dönüş yönünde daha gür olduğunu aklınızda tutun. Sola dönerken daha gürse yük sağ tarafa biniyor, yani sağ rulman daha olası; tersi de geçerli. Bu ayrıntı serviste aramayı belirgin biçimde kısaltır.',
      'Sesi yerinde kontrol edin: inleme otoparkta direksiyon çevirirken çıkıyorsa tekerleklerin bununla ilgisi yok — kaynak direksiyon takviyesidir.',
      'Kaputun altına bakın: hidrolik yağ deposu var mı. Varsa seviyeyi kontrol edin, gerekirse işarete kadar tamamlayın; yoksa direksiyon elektriklidir ve sessiz düzgün vınlama onun için normaldir.',
      'Yol zeminine bağlılığı değerlendirin: yeni asfaltta daha sessiz, pürüzlü zeminde daha gür uğultu genelde lastiklerden gelir, rulmandan değil.',
      'Sırtı inceleyin: «testere» aşınması (blok kenarlarındaki basamaklar) ya da lekeli aşınma lastik uğultusunu artırır ve aynı zamanda bozuk rot balansa veya yorulmuş amortisörlere işaret eder.',
    ],
    appHelp:
      'Pro-Stuk uygulaması, ustanın araç kabulünde sorduğu soruların aynısını sorar: uğultu nerede duyuluyor, virajlarda değişiyor mu, direksiyonu yerinde çevirmekle ilgili mi. Kayıt sesi tipik örneklerle karşılaştırmayı sağlar, raporda ise olası nedenler ve anlaşılır bir öneri olur: rahat gidin, bu hafta randevu alın ya da geciktirmeden kontrol ettirin.',
    faq: [
      {
        q: 'Uğultu neden yalnızca bir dönüş yönünde artıyor?',
        a: 'Virajda aracın ağırlığı dış tekerleklere geçer. Örneğin sağ poyra rulmanı aşınmışsa yük altında daha gür uğuldar — yani sola dönerken. Bu özellik, servise gitmeden önce hangi tarafı ilk kontrol ettireceğinizi anlamanızı sağlar.',
      },
      {
        q: 'Hidrolik direksiyona her yağ konabilir mi?',
        a: 'Hayır. Yağ tipi aracın kullanma kılavuzunda, çoğu zaman doğrudan depo kapağında yazar. Uygun yağla bir kerelik tamamlama güvenlidir, ama seviye düzenli olarak düşüyorsa bir yerde kaçak vardır — onu bulup gidermek serviste yapılır, tamamlamayla çözülmez.',
      },
      {
        q: 'Kaputun altında hidrolik deposu yok, ama dönerken uğulduyor — bu nedir?',
        a: 'Büyük olasılıkla direksiyon elektriklidir: motoru direksiyon çevrilirken hafifçe vınlar ve bu normal çalışmadır. Şüphelendirmesi gerekenler başkadır: direksiyon ağırlaştıysa ya da sıçrayarak ağırlaşıyorsa, hışırtı çıkıyorsa, göstergede direksiyon lambası yanıyorsa. Bunlarla önümüzdeki günlerde servise.',
      },
    ],
  },

  'shchelchki-pri-povorote-rulya': {
    h1: 'Direksiyon çevirirken tıkırtı',
    metaTitle: 'Direksiyonda tıkırtı: aks mafsalı mı kule rulmanı mı | Pro-Stuk',
    description:
      'Direksiyon çevirirken neden tıkırdar: dış aks mafsalı, amortisör kule rulmanı ya da direksiyon mili kardanı. Sese göre nasıl ayırt edilir ve sökmeden ne kontrol edilir.',
    intro: [
      'Direksiyon çevirirken duyulan tıkırtıları basit bir soru ayırır: araç o anda gidiyor mu, duruyor mu? Direksiyon kilitliyken hareket hâlinde gelen çıtırtı ve tıkırtı, dış aks mafsalının imzasıdır — dönüşü aynı zamanda dönen tekerleğe ileten mafsal. Direksiyon ne kadar kilitli ve kalkış ne kadar sertse çıtırtı o kadar belirgindir. Her şey genelde yırtılmış körükle başlar: mafsalı kirden koruyan kauçuk körük.',
      'Tıkırtılar duran araçta direksiyon çevirirken duyuluyorsa aks mafsalının genelde suçu yoktur. Tekerlek davlumbazının üstünden gelen hışırtıyı amortisör kule rulmanı verir — amortisörün üst kısmının tekerlekle birlikte döndüğü parça. Direksiyonun kendisinde, sürücünün ayakları hizasında duyulan tıkırtılar ise direksiyon mili kardanıdır: direksiyon ile kutu arasındaki küçük mafsal. Bunların hiçbiri aracı olduğu yerde bırakmayı gerektirmez, ama aylarca da uzatılmaz.',
    ],
    causes: [
      { name: 'Dış aks mafsalı', likelihood: 'En sık — direksiyon kilitliyken hareket hâlinde çıtırdıyorsa' },
      { name: 'Amortisör kule rulmanı', likelihood: 'Sık — yerinde, davlumbazın üstünden hışırdıyorsa' },
      { name: 'Direksiyon mili kardanı', likelihood: 'Tıkırtı direksiyonun kendisinde duyulup hissediliyorsa' },
      { name: 'Rot başları veya direksiyon kutusu', likelihood: 'Daha seyrek; genelde tıkırtı değil, takırtı verirler' },
      { name: 'İç aks mafsalı, viraj demiri rotilleri', likelihood: 'Daha seyrek; aynı kontrolde bakılır' },
    ],
    canRide: [
      'Çıtırdayan aks mafsalıyla gidilebilir, ama değişimi bir–iki haftadan fazla uzatmayın: aşınmış mafsal en kötü durumda sıkışır ve bu artık ses değil, yolda kalmış araç demektir. Onarıma kadar idareli kullanmak yardımcı olur — tekerlekler sonuna kadar kilitliyken sert kalkış yapmayın.',
      'Kule rulmanı ve direksiyon kardanı ani tehlikeden çok rahatsızlık verir, ama direksiyon bir güvenlik grubudur; bu yüzden arıza tespitini önümüzdeki günlerde yaptırın: lifte birkaç dakika sürer. Aceleyi gerektiren işaretler: direksiyon orta konumda «boşaldıysa», araç şeritte geziniyorsa ya da tıkırtılar belirgin biçimde sıklaştıysa.',
    ],
    checks: [
      'Senaryoları boş bir otoparkta ayırın: çıtırtı direksiyon kilitliyken daire çizerken mi çıkıyor — yoksa tıkırtılar duran araçta direksiyon çevirirken mi duyuluyor?',
      'Aks körüklerini inceleyin — her ön tekerleğin iç tarafındaki kauçuk körükler. Yırtık ve etrafa saçılmış gres neredeyse doğrulanmış bir teşhistir.',
      'Motor kapalıyken birinden direksiyonu çevirmesini isteyin ve avucunuzu kaputun altındaki amortisör kulesine koyun: aşınmış rulmanın tıkırtısı elle hissedilir.',
      'Motor kapalıyken direksiyonu sağa sola oynatın ve ayaklar hizasında dinleyin: mildeki net tıkırtı kardanı ele verir.',
      'Hareket hâlinde çıtırtının hangi tekerlek tarafından geldiğini ve hangi virajda daha gür olduğunu aklınızda tutun — bu ayrıntılar serviste aramayı belirgin biçimde kısaltır.',
    ],
    appHelp:
      'Pro-Stuk uygulamasında bu yol ayrımları kısa bir soru ağacında toplanmıştır: araç gidiyor mu duruyor mu, ses nereden geliyor, körüklerin durumu nasıl. Çıtırtıyı telefonla kaydedip örneklerle karşılaştırabilirsiniz. Raporda değerlendirmesiyle olası nedenler ve süre önerisi olur: paniğe gerek yok, ama bir ay unutulmuş tıkırtı da olmasın.',
    faq: [
      {
        q: 'Aks mafsalı nedir ve neden tıkırdar?',
        a: 'Aks mafsalı, dönüşü aynı zamanda dönen tekerleğe ileten sabit hızlı mafsaldır. Yırtılmış körükten içeri kir girdiğinde bilyeler ve yatak yolları aşınır ve direksiyon kilitliyken yük altında belirgin biçimde çıtırdamaya başlar.',
      },
      {
        q: 'Tıkırdayan aks mafsalıyla ne kadar gidilebilir?',
        a: 'Kesin bir ömür yok: kiminde mafsal aylarca dayanır, kiminde birkaç haftada biter. Makul ölçüt — değişimi bir–iki haftadan fazla ertelememek ve onarıma kadar tekerlekler kilitliyken sert kalkmamak: böylece mafsala binen yük en azdır.',
      },
      {
        q: 'Duran araçta direksiyon çevirirken neden hışırdıyor?',
        a: 'Araç dururken tekerlek dönmez ve aks mafsalı çalışmaz. Yerinde hışırtıyı genelde amortisör kule rulmanı verir — ses yukarıdan, davlumbazın içinden gelir — ya da tıkırtı direksiyonun kendisindeyse direksiyon mili kardanı. İki parça da serviste birkaç dakikada kontrol edilir.',
      },
    ],
  },

  'stuk-v-dvigatele-na-holodnuyu': {
    h1: 'Soğukta motor vuruntusu',
    metaTitle: 'Motor soğukken vuruyor: nedenleri ve ne yapmalı | Pro-Stuk',
    description:
      'Motor neden soğukken vurur ve ısınınca susar: hidrolik kaldıraçlar, piston grubu, triger zinciri. Ne zaman normal, ne zaman servis vakti.',
    intro: [
      'Yalnızca soğuk çalıştırmadan sonraki ilk dakikalarda duyulan ve motor ısındıkça kaybolan vuruntu, kilometresi olan araçlarda en sık şikâyetlerden biridir. İyi haber: burada en yaygın neden aynı zamanda en zararsız olanıdır. Motorun üstünden gelen sık tıkırtıyı genelde hidrolik kaldıraçlar çıkarır — yağ basıncıyla supap mekanizmasındaki fazla boşluğu alan küçük parçalar. Motor soğukken yağ koyudur ve onlara hemen ulaşmaz, bu yüzden birkaç dakika tıkırdarlar. Isındı — sustu.',
      'Sesin karakteri çok şey anlatır. Derinden gelen boğuk vuruntu daha çok piston grubu aşınmasını gösterir: soğuk pistonun silindirde biraz daha fazla boşluğu vardır ve sıcakla genleşene kadar tıkırdar. Önden gelen hışırtı ya da gürültü uzamış triger zincirinin — supapların zamanında açılmasını sağlayan, motorun içindeki zincirin — ya da gevşemiş gergisinin imzasıdır. Kabin içinden çok dışarıda duyulan, üstelik kaputun altında egzoz kokusuyla gelen tıkırtı ise yanmış egzoz manifoldu contasının işaretidir: metal genleşip aralığı kapatana kadar gazlar çatlaktan sızar.',
    ],
    causes: [
      { name: 'Hidrolik kaldıraçlar: koyu soğuk yağ', likelihood: 'En sık — üstten tıkırdıyor ve birkaç dakikada susuyorsa' },
      { name: 'Piston grubu aşınması', likelihood: 'Yüksek kilometrelerde sık — derinden boğuk vuruntu' },
      { name: 'Triger zinciri veya gergisi', likelihood: 'Sık — önden hışırtı ya da gürültü geliyorsa' },
      { name: 'Egzoz manifoldu contası veya çatlağı', likelihood: 'Tıkırtı dışarıda daha gürse ve egzoz kokusu varsa' },
      { name: 'Kayan aksesuar kayışı', likelihood: 'Vuruntu değil de ıslık ya da ciyaklamaysa' },
    ],
    canRide: [
      'Isındıktan sonra tamamen geçen kaldıraç tıkırtısıyla kısıtlamasız gidilebilir — kilometresi olan bir motorun olağan yaşamıdır. Aynısı, çalıştırmadan sonraki ilk saniyelerde kayış ciyaklaması için de geçerlidir: rahatsız edici ama tehlikeli değil. İki durumda da yağın seviyesini ve yaşını kontrol etmek, aracı planlı bakımda ustaya göstermek yeter.',
      'Piston grubunun boğuk vuruntusu izlenecek bir konudur: gidilebilir, ama yağ tüketimini takip edin ve ilk ziyarette ustaya sesten söz edin. Triger zincirinin hışırtısıyla oyalanmak olmaz: bir–iki hafta içinde arıza tespiti, çünkü atlayan zincir pahalı bir motor onarımı demektir — servise kadar da soğukken sert kalkış yok. Genel ilke: vuruntu artık ısınmayla geçmiyorsa ya da yük altında duyuluyorsa arıza tespiti daha fazla ertelenemez.',
    ],
    checks: [
      'Sesin kaç dakika sürdüğünü ölçün: bir–iki dakika ve sessizlik kaldıraçlar için tipiktir; vuruntu ne kadar uzun yaşarsa kontrol o kadar gereklidir.',
      'Soğumuş motorda yağ çubuğuyla seviyeyi kontrol edin ve yağın ne zaman değiştiğini hatırlayın: düşük seviye ve eski yağ tüm soğuk vuruntuları artırır.',
      'Sesin karakterini belirleyin: üstten sık tıkırtı, derinden boğuk vuruntu ya da motorun önünden hışırtı — bunlar aciliyeti farklı üç ayrı hikâyedir.',
      'Soğuk motor çalışırken kaputu açın ve koklayın: tıkırtıyla birlikte egzoz kokusu manifoldu gösterir.',
      'Isınmış motoru on dakika durdurup yeniden çalıştırın: gerçek «soğuk» vuruntu bu kadar kısa bir duraklamadan sonra geri gelmez.',
    ],
    appHelp:
      'Pro-Stuk uygulaması aynı yol ayrımlarından geçer — tıkırtı mı, boğuk vuruntu mu, hışırtı mı ve ses ne kadar çabuk geçiyor — telefonla kayıt ise kelimelerle anlatması güç karakteri yakalamaya yardım eder. Raporda yüzdeleriyle olası nedenler ve anlaşılır bir sonuç olur: rahat gidin, bu hafta randevu alın ya da servisi geciktirmeyin.',
    faq: [
      {
        q: 'Vuruntu ısınınca geçiyor — dikkate almayabilir miyim?',
        a: 'Çoğu zaman evet: soğukta kaldıraç tıkırtısı olağandır ve onarım gerektirmez. Ama izlemek yararlıdır: ses birkaç dakikadan uzun sürmeye başladıysa, ısınmış motorda kaldıysa ya da yük altında ortaya çıktıysa artık arıza tespiti gerekir.',
      },
      {
        q: '«Vuruntu kesici» katkılar işe yarar mı?',
        a: 'Dökmeyin: aşınmayı gidermezler, belirtiyi maskelerler ve sorun bu yüzden geç fark edilir. Gerçekten işe yarayan başka: uygun viskozitede taze yağ, doğru seviye ve vuruntu kalıyorsa ustada ayar ya da onarım.',
      },
      {
        q: 'Kışın soğukta neden daha çok vuruyor?',
        a: 'Soğukta yağ daha koyudur ve motorun üst kısmına daha geç ulaşır; bu yüzden kaldıraçlar ve supap mekanizması daha belirgin tıkırdar, soğuk parçaların boşlukları da biraz daha büyüktür. Isındıktan sonra her şey susuyorsa bu, yazın görülenin zamana yayılmış hâlidir.',
      },
    ],
  },

  'svist-pri-zapuske': {
    h1: 'Çalıştırırken ıslık',
    metaTitle: 'Motoru çalıştırırken ıslık: nedenleri ve çözümü | Pro-Stuk',
    description:
      'Motor çalıştırırken neden öter: kayan aksesuar kayışı, rulmanlar ya da devirdaim. Islık ne zaman zararsız, ne zaman randevu almanın vakti.',
    intro: [
      'Motor çalıştıktan sonraki ilk saniyelerde duyulan ciyaklama ya da ıslığı neredeyse her zaman aksesuar kayışı çıkarır — motordan alternatörü, devirdaimi ve klima kompresörünü döndüren kauçuk kayış. Soğukta ya da nemli havada kayış kasnaklarda kayar ve öter, birkaç saniye sonra ısınır, kurur ve susar.',
      'Şu an için bu senaryo tehlikeli değildir, ama normal saymak da doğru olmaz: yeni ve doğru gerdirilmiş kayış soğukta bile ötmez. Her sabah tekrarlanan ıslık, kayışın yaşlandığını, gerginliğin düştüğünü ya da üzerinde koştuğu rulmanlardan birinin aşınmaya başladığını gösterir. Ayrı bir konu, çalıştırmanın kendi sesleridir: marş motoru motoru döndürürken gelen metal sesi ya da uğultu. Bu artık kayış değil, marş motoru ya da volan dişlisidir ve onlarla oyalanmamak gerekir.',
    ],
    causes: [
      { name: 'Soğukta kayan aksesuar kayışı', likelihood: 'En sık — ıslık ilk saniyelerde geçiyorsa' },
      { name: 'Aşınmış kayış veya düşmüş gerginlik', likelihood: 'Sık — ıslık ısınmış motorda da kalıyorsa' },
      { name: 'Gergi veya avara rulmanının bilyesi', likelihood: 'Az değil — ıslığa hışırtı ya da uğultu eklenir' },
      { name: 'Devirdaim — kayışın yanında antifriz izi varsa', likelihood: 'Daha seyrek' },
      { name: 'Marş dönerken metal sesi: marş dişlisi ya da volan dişlisi', likelihood: 'Ayrı durum — ses, motor çalışmadan önce gelir' },
    ],
    canRide: [
      'Soğuk çalıştırmadan sonra birkaç saniye yaşayıp tamamen kaybolan ıslıkla gidilebilir: doğrudan bir tehdit yok. Yine de kayışı fırsat bulunca serviste göstermek gerekir — muayene birkaç dakika sürer, kayışı rulmanıyla değiştirmek ise ucuz işlerdendir.',
      'Islık ısınmayla artık geçmiyorsa, klima açılınca çıkıyorsa ya da her çalıştırmada daha uzun ve daha gür duyuluyorsa bir hafta içinde randevu alın: aşınmış kayış kopabilir, o zaman alternatör ve birçok motorda devirdaim durur. Akü lambası yandıysa ya da sıcaklık göstergesi yükseldiyse — durun ve motoru kapatın.',
    ],
    checks: [
      'Islığın süresini ölçün: çalıştırmadan sonraki birkaç saniye soğukta kaymadır; ısınmayla geçmeyen ses kayışın ya da rulmanların aşınmasıdır.',
      'Hava ile bağlantısını izleyin: yalnızca yağmurdan, yıkamadan sonra ya da soğukta ıslık, belirli bir parçanın arızasını değil kaymayı anlatır.',
      'Motor çalışırken klimayı ya da cam rezistansını açın: ıslık çıkıyor veya artıyorsa kayış yük altında kayıyordur.',
      'Motor kapalıyken kayışı el fenerle inceleyin: enine çatlaklar, saçaklanmış kenarlar ve parlak «cilalanmış» yanaklar aşınma işaretidir.',
      'Kasnakların yanında damla ya da beyazımsı antifriz izi olup olmadığına bakın: devirdaimi gösterirler, o zaman servisi ertelememek gerekir.',
    ],
    appHelp:
      'Pro-Stuk uygulaması ustanın araç kabulündeki sorularının aynısını sorar: ıslık ne zaman çıkıyor, ısınınca geçiyor mu, marş çalışırken ne duyuluyor. Kayıt kayışın ciyaklamasını marşın metal sesinden ayırmaya yardım eder, raporda ise yüzdeleriyle olası nedenler ve anlaşılır bir sonuç olur: gidilebilir, bu hafta servise ya da durun.',
    faq: [
      {
        q: 'Motor neden yalnızca soğukta ve rutubette öter?',
        a: 'Kayışın soğuk ve nemli kauçuğu kasnaklara daha kötü tutunur, bu yüzden çalıştırmadan sonraki ilk saniyelerde kayar ve öter. Isındıkça tutunma geri gelir ve ses kaybolur. Gergisi sağlam yeni bir kayış bu koşullarla da baş eder, dolayısıyla her sabah tekrarlanan ıslık muayene için nedendir.',
      },
      {
        q: 'Islık artık ısınmış motorda da çıkıyor. Ciddi mi?',
        a: 'Aşınmanın, kayışın olağan koşullarda bile kaydığı aşamaya geldiğinin işaretidir. Şimdilik gidilebilir, ama bir hafta içinde randevu alın: kopan kayış sizi alternatörsüz, birçok araçta devirdaimsiz bırakır ve yolculuk çekiciyle biter.',
      },
      {
        q: 'Çalıştırma sonrası ıslık ile çalıştırma sırasındaki metal sesi nasıl ayrılır?',
        a: 'Islık ve ciyaklama motor çalıştıktan sonra ortaya çıkar ve suçlusu genelde kayıştır. Metalik ses daha önce — marş motorunun motoru döndürdüğü saniyelerde — duyulur ve marş dişlisinin volan dişlisine kötü geçtiğini anlatır. Farklı parçalar, farklı onarım.',
      },
    ],
  },

  'vibratsiya-na-holostyh': {
    h1: 'Rölantide titreşim',
    metaTitle: 'Rölantide titreşim: titremenin nedenleri ve çözümü | Pro-Stuk',
    description:
      'Araç rölantide neden titrer: motor takozları, ateşleme atlamaları, kaçak hava ya da kirli gaz kelebeği. Ne kontrol edilir ve yola devam edilir mi.',
    intro: [
      'Rölantide hafif bir titreme her araçta, özellikle dizellerde vardır. Konu başka: direksiyonda, koltukta ve dikiz aynasında hissedilen, daha önce olmayan titreme. En sık nedeni motor takozlarıdır: motorun gövdeye bağlandığı ve salınımlarını sönümleyen kauçuk takozlar. Yıllar içinde kauçuk sertleşip çatlar ve eskiden takozların yuttuğu titreşim gövdeye geçer.',
      'İkinci neden grubu, motorun kendisinin düzensiz çalışmasıdır. Ateşleme atlamaları (silindirlerden biri arada ateşlemiyorsa — genelde buji ya da bobin yüzünden), çatlak hortumdan veya emme manifoldu contasından kaçak hava, kirlenmiş gaz kelebeği ya da enjektörler rölantiyi kararsız yapar. Bunları takozlardan ayırmak zor değil: bu durumlarda devir göstergesi titrer ya da gezinir ve çoğu zaman motor arıza lambası yanar; aşınmış takozlarda ise motor düzgün çalışır — titreyen gövdedir.',
    ],
    causes: [
      { name: 'Motor takozları', likelihood: 'En sık — özellikle 8–10 yaşından büyük araçlarda' },
      { name: 'Ateşleme atlamaları: bujiler, bobinler', likelihood: 'Sık — devir titriyor ve motor lambası yanıyorsa' },
      { name: 'Hortum veya emme contasından kaçak hava', likelihood: 'Sık — devir geziniyorsa, bazen tıslama duyulur' },
      { name: 'Kirlenmiş gaz kelebeği veya enjektörler', likelihood: 'Yüz bin kilometreyi aşan araçlarda sık' },
    ],
    canRide: [
      'Senaryoların çoğunda gidilebilir: rölantideki titreşim, aracı emniyet şeridinde bırakacak bir belirti değildir. Aşınmış takozlarda sakin bir randevu için bir–iki hafta vardır; aylarca uzatmayın — dağılmış takozlar kalkışta ve vites değişimlerinde takırtı ekler ve komşu parçaların aşınmasını hızlandırır.',
      'Ayrı bir durum, motorun açıkça teklemesidir: sarsıntılı titreme, yanıp sönen ya da sabit yanan motor lambası, düşen güç. Bununla da gidilebilir ama dikkatli ve kısa: ateşleme atlamalarındaki yanmamış yakıt egzozda yanar ve katalizörü aşırı ısıtır, değişimi ise pahalıdır. Bu durumda arıza tespiti önümüzdeki günlerde gerekir, fırsat bulununca değil.',
    ],
    checks: [
      'Takoz testi: vitese takın (otomatikte D) ve fren pedalını basılı tutun. Aşınmış takozların titreşimi bu konumda genelde belirgin biçimde artar.',
      'Devir göstergesine bakın: ibre sabitken araç titriyorsa bu takozlar lehine bir kanıttır; ibre titriyor ya da geziniyorsa motor düzensiz çalışıyordur.',
      'Klimayı açın ve titremenin değişip değişmediğine bakın: ek yük altında zayıf takozlar ve düzensiz rölanti daha belirgin ortaya çıkar, bu ayrıntı ustaya yarar.',
      'Hiçbir şeyi sökmeden kaputun altındaki ince kauçuk hortumları inceleyin: çatlaklar ve çıkmış rakorlar sık görülen kaçak hava noktalarıdır.',
      'Bujilerin ne zaman değiştiğini hatırlayın: bakım aralığını çoktan aşmış kilometre, ateşleme atlamalarında ilk adaydır. Motor lambası yanıyorsa arıza kodlarını okutarak başlayın: kodlar aramayı daraltır.',
    ],
    appHelp:
      'Pro-Stuk uygulaması aynı soruları sorar — vites takılıyken titreme artıyor mu, devir sabit duruyor mu, motor lambası yanıyor mu — ve yanıtlara göre olası nedenleri yüzdelere ayırır. Raporda anlaşılır bir sonuç olur: rahat gidin, bu hafta randevu alın ya da aracı önümüzdeki günlerde gösterin.',
    faq: [
      {
        q: 'Neden yalnızca rölantide titriyor da yolda araç düzgün gidiyor?',
        a: 'Rölantide devir en düşüktür ve motor takozları üzerinde, gövdenin kabine iyi ilettiği bir frekansta salınır. Devir yükseldikçe salınımlar küçülür ve daha az hissedilir. Bu yüzden aşınmış takozlar kendini otoyolda değil, kırmızı ışıkta belli eder.',
      },
      {
        q: 'Ateşleme atlaması nedir?',
        a: 'Silindirlerden birindeki karışımın arada bir ateşlenmemesidir — çoğunlukla aşınmış buji ya da arızalı bobin yüzünden. Motor o anda gücünün bir kısmını kaybeder ve sarsılır, yanmamış yakıt ise egzozda yanarak katalizörü aşırı ısıtır.',
      },
      {
        q: 'Gaz kelebeğini temizlemek işe yarar mı?',
        a: 'Neden oradaysa yarar: birikinti rölantide havanın hassas ölçülmesini engeller ve devir düzensizleşir. Ama temizlik evrensel bir ilaç değildir: aşınmış takozlarda ya da ateşleme atlamalarında titreşim sonrasında da aynı kalır.',
      },
    ],
  },

  'hlopki-v-glushitele': {
    h1: 'Egzozda patlamalar',
    metaTitle: 'Egzozda patlama sesleri: nedenleri ve çözümü | Pro-Stuk',
    description:
      'Egzozdan neden patlama sesi gelir: ateşleme atlamaları, delinmiş egzoz, karışım ya da LPG ayarları. Patlamaların katalizöre ne yaptığı ve ne zaman servise gitmek gerektiği.',
    intro: [
      'Egzozdan gelen patlamalar ya da «silah sesleri», yakıtın bir kısmının silindirlerde değil, artık egzoz sisteminde yandığını gösterir. Çoğunlukla suçlu ateşleme atlamalarıdır: aşınmış buji ya da arızalı bobin karışımı ateşlemez, yanmamış benzin sıcak egzoza gider ve orada karakteristik bir patlamayla tutuşur.',
      'İkinci neden grubu egzoz sisteminin kendisidir: delinmiş susturucu, boru ya da conta, patlama seslerine gaz verildikçe artan bir gürlemeyi ekler. Karışım da sensörler ya da enjektörler yüzünden yanlış olabilir; LPG’li araçlarda gazla giderken patlamalar ise ayarların bozulduğunun tipik işaretidir. Tüm senaryoların ortak paydası şudur: yanmamış yakıt katalizörde — zararlı gazları yakan egzoz parçasında — yanmayı tamamlar, onu aşırı ısıtır ve yavaş yavaş bitirir; katalizör değişimi ise pahalıdır.',
    ],
    causes: [
      { name: 'Ateşleme atlamaları: bujiler ya da bobinler', likelihood: 'En sık' },
      { name: 'Delinmiş susturucu, boru veya egzoz contası', likelihood: 'Sık — patlamalara gürleme eşlik eder' },
      { name: 'Yanlış karışım: sensörler ya da enjektörler', likelihood: 'Az değil' },
      { name: 'Bozulmuş LPG ayarları', likelihood: 'Patlamalar yalnızca gazla giderken çıkıyorsa' },
      { name: 'Güç olmadan hızlanırken gürleme: debriyaj kayıyor', likelihood: 'Sese benzeyen ayrı bir durum' },
    ],
    canRide: [
      'Gazı keserken gelen tek bir patlama durmak için neden değildir: eve ya da servise varabilirsiniz. Düzenli patlamalarla da gidilebilir, ama arıza tespitini haftalara değil, önümüzdeki günlere planlayın: her patlama katalizörde yanmayı tamamlayan bir doz yanmamış yakıttır ve ertelenen onarımın faturası ucuz bujilerden katalizör bedeline kadar büyür.',
      'Özel durum, yanıp sönen motor arıza lambasıdır: sistem böylece tam şu anda katalizör için tehlikeli olan aktif ateşleme atlamalarını haber verir. Lamba yanıp sönerken yalnızca sakin ve kısa mesafe, yük bindirmeden gidin ve gecikmeden servise. Kabinde egzoz kokusu duyuyorsanız onarıma kadar camı aralık tutarak sürün ve aracı kapalı garajda ısıtmayın: karbon monoksit tehlikelidir.',
    ],
    checks: [
      'Ne zaman patladığını not edin: yük altında hızlanırken, gazı keserken ya da rölantide — bu ayrıntı ustanın aramasını hemen daraltır.',
      'Motor arıza lambasına bakın: sabit yanıyorsa önümüzdeki günlerde arıza tespiti; yanıp sönüyorsa atlamalar tam şu anda oluyordur ve ziyaret ertelenemez.',
      'Motorun çalışmasını değerlendirin: tekleme, rölantide titreme ve düşen güç patlamalarla birlikteyse bujileri, bobinleri ya da karışımı gösterir.',
      'Egzozu dinleyin: güç normalken gaz verildikçe artan gürleme, ateşleme sorunu değil susturucudaki ya da borudaki deliğin işaretidir.',
      'LPG’li araçta gaz ve benzin çalışmasını karşılaştırın: patlamalar yalnızca gazdaysa bu, sistemi ayarlayan servise sorulacak bir sorudur.',
    ],
    appHelp:
      'Pro-Stuk uygulaması koşulları netleştirir — patlama mı gürleme mi, gazla mı benzinle mi, güç kaybı var mı — ve kulakla benzeyen üç şeyi ayırmaya yardım eder: ateşleme sorunları, egzozdaki delik ve kayan debriyaj. Raporda yüzdeleriyle olası nedenler ve servisin ne kadar acil olduğuna dair anlaşılır bir öneri yer alır.',
    faq: [
      {
        q: 'Sorun motordaysa neden egzozda patlıyor?',
        a: 'Buji ya da bobin silindirdeki karışımı ateşlemediğinde yanmamış benzin egzoz sistemine itilir. Orada kızgın parçalarla karşılaşır ve bir alevle yanmayı tamamlar — bu ses egzozdan gelen patlama olarak duyulur. Kaynak ise susturucuda değil, kaputun altındadır.',
      },
      {
        q: 'Patlamalar katalizör için neden tehlikeli?',
        a: 'Katalizör, ham yakıt dozlarını değil, egzoz gazlarının kalıntılarını yakmak üzere tasarlanmıştır. İçinde yanmayı tamamlayan benzin sıcaklığı hesaplananın üzerine çıkarır ve seramik petekler erir ya da dağılır. Sonuç: güç kaybı, tabandan zangırtı ve egzozun en pahalı işlerinden biri olan katalizör değişimi.',
      },
      {
        q: 'LPG’li aracım gazla giderken patlıyor. Tehlikeli mi?',
        a: 'Evet; gaz sistemi için patlamalar benzinli motordan daha tehlikelidir: emme sistemindeki geri tepme plastik parçalarına ve sensörlerine zarar verebilir. Olağan neden bozulmuş ayarlar ya da aşınmış bujilerdir. Mantıklısı benzine geçmek ve LPG uzmanlarından randevu almaktır.',
      },
    ],
  },
};
