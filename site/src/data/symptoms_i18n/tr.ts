import type { SymptomTr } from '../types';

/** Разборы симптомов по-турецки. Структура — из русских файлов рядом. */
export const pages: Record<string, SymptomTr> = {
  'stuk-v-dvigatele': {
    h1: 'Motorda vuruntu',
    metaTitle: 'Motor vuruyor: nedenleri, tehlikesi, ne yapmalı | Stuk',
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
      'Stuk uygulaması sizi bir motor ustasının sorduğu soruların aynısından geçirir, sesi kaydeder ve spektrumu ile ritmini değerlendirir: darbeler hangi sıklıkta geliyor ve bu devirle nasıl ilişkileniyor — supap vuruntusunda ve krank vuruntusunda bu oran farklıdır. Raporda yüzdeleriyle olası nedenler, aciliyet ışığı ve serviste kullanacağınız ifadeler yer alır.',
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
    metaTitle: 'Frenler gıcırdıyor: tehlikeli mi, nedenleri ve çözümü | Stuk',
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
      'Stuk uygulaması zararsız senaryoyu endişe vericiden aynı sorularla ayırır — ne zaman gıcırdıyor ve ses geçiyor mu — kayıt ise aşınma göstergesinin tiz ciyaklamasını metal metale sürtmeden ayırmaya yardım eder. Raporda yüzdeleriyle olası nedenler ve bir ışık vardır: yola devam edilebilir, bu hafta servise ya da durun.',
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
    metaTitle: 'Seyirde uğultu: rulman, lastikler mi şanzıman mı | Stuk',
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
      'Stuk uygulaması sizi aynı sorulardan geçirir — uğultu boşta kalıyor mu, virajlarda ve zemine göre değişiyor mu — ve karakterini tipik örneklerle karşılaştırmak için sesi kaydetmenize yardım eder. Raporda yüzdeleriyle olası nedenler ve bir sonuç yer alır: rahat gidin, servisi planlayın ya da geciktirmeden kontrol ettirin.',
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
    metaTitle: 'Süspansiyonda takırtı: ne takırdıyor, gidilir mi | Stuk',
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
      'Stuk uygulaması, ustanın ilk muayenede izlediği yol ayrımlarının aynısını izler: nasıl bir ses, hangi tümseklerde, önde mi arkada mı, direksiyona vuruyor mu. Ses kaydı ayrıntıların servise kadar kaybolmasını önler; raporda ise yüzdeleriyle olası nedenler ve anlaşılır bir ışık vardır: gidilebilir, bu hafta gösterin ya da acilen kontrol ettirin.',
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
    metaTitle: 'Poyra rulmanı uğulduyor: nasıl anlaşılır | Stuk',
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
      'Stuk uygulaması aynı kontrol sorularını sorar — zemin, virajlar ve boşta süzülme — uğultuyu kaydeder ve karakterini değerlendirir: lastiklerin düzgün geniş bantlı gürültüsü ile rulman uğultusu spektrumda farklı görünür. Raporda nedenlerin olasılıkları, aciliyet ve ustaya hangi tarafı söyleyeceğinize dair bir ipucu yer alır.',
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
    metaTitle: 'Tümseklerde takırtı: nedenleri ve kendi kontrolleriniz | Stuk',
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
      'Stuk uygulaması bu sayfadaki soruların aynısını, yalnızca adım adım sorar: tam olarak nasıl bir takırtı, nerede duyuluyor, farklı tümseklerde nasıl davranıyor. Yanıtlardan ve ses kaydından olası nedenleri ve aciliyet ışığını içeren bir rapor çıkarır — böylece yarın mı yoksa fırsat bulunca mı servise gideceğinize karar vermek kolaylaşır.',
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
};
