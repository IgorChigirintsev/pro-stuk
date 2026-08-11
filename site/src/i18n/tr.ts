import type { Dict } from './types';

export const tr: Dict = {
  brand: 'Stuk',
  nav: {
    symptoms: 'Belirtiler',
    how: 'Nasıl çalışır',
    articles: 'Yazılar',
    analytics: 'İstatistik',
    lang: 'Dil',
  },
  footer: {
    disclaimer:
      'Stuk, verdiğiniz yanıtlara ve sese bakarak olasılık tahmini yapar; teşhis koymaz. ' +
      'Onarım kararını, aracı gören usta verir.',
    how: 'Nasıl çalışır',
    privacy: 'Gizlilik politikası',
    ruArticles: 'Yazılar (Rusça)',
    ruOnly: 'Belirtilere göre rehberler ve yazılar (Rusça)',
  },
  home: {
    title: 'Stuk — sesinden araç teşhisi',
    description:
      'Sesi kaydedin, aracınızın nesi olduğunu öğrenin. Kısa bir anket, kaydın analizi ' +
      've bir rapor: yüzdeleriyle olası nedenler, aciliyet ışığı ve serviste ne ' +
      'söyleyeceğiniz.',
    schemaDescription:
      'Belirtilere ve sese göre araç arıza teşhisi: anket, ses kaydı ve olası nedenleri ' +
      'içeren rapor.',
    h1: 'Sesi kaydedin — aracınızın nesi olduğunu öğrenin',
    sub:
      'Kısa bir anket ve 15–30 saniyelik bir kayıt. Karşılığında: yüzdeleriyle olası ' +
      'nedenler, aciliyet ışığı ve serviste konuşurken işinize yarayacak ipuçları.',
    cta: 'Uygulamayı indir',
    ctaNote: 'Android · şimdilik ücretsiz',
    howH2: 'Nasıl çalışır',
    steps: [
      {
        title: '1. Sorular',
        text: 'Ses ne zaman duyuluyor ve neye benziyor — soru ağacı nedeni daraltır.',
      },
      {
        title: '2. Ses',
        text: '15–30 saniyelik kayıt: spektrum, vuruşların ritmi ve motor devri sunucuda hesaplanır.',
      },
      {
        title: '3. Rapor',
        text: 'Yüzdeleriyle nedenler, aciliyet ışığı ve serviste ne söyleyeceğiniz.',
      },
    ],
    faqH2: 'Sık sorulanlar',
    faq: [
      {
        q: 'Bu kesin bir teşhis mi?',
        a: 'Hayır. Stuk olasılık tahmini verir: yüzdeleriyle olası nedenler ve aciliyet düzeyi. Kesin teşhisi, aracı inceleyen usta koyar — rapor yalnızca oraya hazırlıklı gitmenizi sağlar.',
      },
      {
        q: 'Ücreti ne kadar?',
        a: 'Şimdilik ücretsiz: cihaz başına günde 3 tam ses raporu. Anketten çıkan ön değerlendirmede sınır yok.',
      },
      {
        q: 'Hangi araçlar destekleniyor?',
        a: 'Benzinli veya dizel motorlu, manuel ya da otomatik şanzımanlı binek araçlar. Marka, model yılı ve kilometre analize dahil edilir.',
      },
      {
        q: 'Kaydıma ne oluyor?',
        a: 'Ses sunucuya gider, analiz edilir ve analizden sonra saklanmaz. Hesap da yok, reklam takipçisi de.',
      },
      {
        q: 'Ya sesi kaydedemezsem?',
        a: 'Rapor her şeyden önce anket yanıtlarına dayanır — tıpkı önce soru soran bir usta gibi. Kayıt bir şey söylemiyorsa uygulama bunu açıkça belirtir.',
      },
    ],
  },
  quiz: {
    h2: 'Hemen deneyin',
    sub: 'Birkaç soru, ardından olası nedeni ve ne kadar acil olduğunu görürsünüz.',
    urgOk: 'Yola devam edilebilir',
    urgWarn: 'Bu hafta servise',
    urgStop: 'Durun',
    back: 'Geri',
    restart: 'Baştan başla',
    cta: 'Tam ses raporu — uygulamada',
    schemaMarked: 'Daire içine alınan yer, yanıtlarınızın işaret ettiği yerdir — bir tahmin, teşhis değil.',
    schemaWhole: 'Parça grubunun tamamı.',
  },
  symptoms: {
    indexTitle: 'Araç sesleri ve belirtileri — rehberler | Stuk',
    indexDescription: 'Tıkırtı, uğultu, ıslık, gıcırtı: her aracın sesi ne anlama gelir, ne kadar tehlikelidir ve kendiniz neyi kontrol edebilirsiniz. Belirtiye göre rehberler ve teşhis ağacı.',
    h1: 'Sese göre belirtiler',
    sub: 'Sesinize en yakın olanı seçin. Her rehberde: olası nedenler, tehlike ışığı, kendi başınıza yapabileceğiniz güvenli kontroller ve tıklanabilir teşhis ağacı.',
    gDvigatel: 'Motor',
    gDvizhenie: 'Hareket hâlinde',
    gTormozaRul: 'Fren ve direksiyon',
    gPodveska: 'Süspansiyon',
    causesH2: 'Olası nedenler',
    thCause: 'Neden',
    thLikelihood: 'Ne kadar olası',
    thDanger: 'Tehlike',
    canRideH2: 'Yola devam edilebilir mi',
    checksH2: 'Kendiniz neyi kontrol edebilirsiniz',
    quizH2: 'Sorularla nedeni daraltın',
    quizSub: 'Birkaç soruyu yanıtlayın — teşhis ağacı sizin durumunuz için nedenler listesini kısaltsın.',
    appHelpH2: 'Uygulama nasıl yardımcı olur',
    faqH2: 'Sık sorulanlar',
    lightOk: 'yola devam edilebilir',
    lightWarn: 'bu hafta servise',
    lightStop: 'durun',
    mapTitle: 'Ses nereden geliyor',
    mapOk: 'Servise rahatça gidebilirsiniz',
    mapWarn: 'Ertelemeyin: birkaç gün içinde baktırın',
    mapStop: 'Vakit kaybetmeden servise',
    zoneDvigatel: 'motor bölmesi',
    zoneDvizhenie: 'tekerlekler ve onlarla dönen her şey',
    zoneTormoza: 'fren ve direksiyon, tekerlek bölgesi',
    zonePodveska: 'süspansiyon, tekerlek bölgesi',
  },
  download: {
    h2: 'Android uygulaması',
    sub: 'Anket, ses kaydı ve olasılıklarla birlikte tam rapor Stuk uygulamasında.',
    btn: 'Android için indir',
    meta: 'Sürüm {version} · APK {size} MB · güncellendi: {date}',
    installH: 'APK nasıl kurulur',
    steps: [
      'Yukarıdaki düğmeyle dosyayı indirin.',
      'Bildirimden ya da «İndirilenler» klasöründen açın.',
      'Telefon sorduğunda bu kaynaktan kuruluma izin verin.',
      'Uygulamayı kurun ve açın.',
    ],
    playNote: 'Uygulama Google Play’e girdiğinde bu sayfa güncellenecek.',
  },
  how: {
    title: 'Sesle teşhis nasıl çalışır | Stuk',
    description:
      'Süslemesiz anlatım: temel araç olarak anket, kaydın spektral analizi, bir dil modeli ' +
      've modellerin bilinen zayıf noktaları. Sonuç neden bir olasılıktır.',
    schemaName: 'Sesle teşhis nasıl çalışır',
    h1: 'Nasıl çalışır',
    formH2: 'Asıl araç ankettir',
    formP:
      'Her teşhis sorularla başlar: ses ne zaman çıktı, neye benziyor, hıza, devre, frene, ' +
      'dönüşlere bağlı mı. Yanıtlar koca neden gruplarını eler — bu, kötü bir kaydın üstüne ' +
      'kurulmuş her algoritmadan fazlasını verir. Bu yüzden Stuk’ta anket önce gelir ve ' +
      'mantığı bir karar ağacıdır: her yanıt, bir sonraki daha dar soruya götürür.',
    recH2: 'Kayda ne oluyor',
    recP: [
      '15–30 saniyelik kayıt sunucuya gider. Önce onu sıradan matematik işler, yapay sinir ' +
        'ağı olmadan: sesin spektrumu, tınısı (tiz bir ıslık mı, geniş bantlı uğultu mu), ' +
        'vuruşların ritmi ve sıklığı, alçak frekans bandından motor devrinin tahmini. Her ' +
        'bulguya bir güvenilirlik notu verilir: kayıt kısıksa ya da gürültülüyse bulgular ' +
        'dürüstçe güvenilmez diye işaretlenir.',
      'Ardından bir dil modeli hepsini bir araya getirir: anket yanıtları, kaydın bulguları, ' +
        'sesin kendisi ve aracın bilgileri — marka, model yılı, kilometre ve o modelin ' +
        'bilinen dertleri. Çıktı: yüzdeleriyle 2–4 olası neden, bir aciliyet düzeyi ve ' +
        'servis için ipuçları.',
    ],
    probH2: 'Sonuç neden bir olasılık',
    probP: [
      'Aynı ses farklı arızalardan çıkabilir: poyra rulmanının uğultusu lastik sesiyle ' +
        'kolayca karışır, viraj demiri rotillerinin takırtısı ise süspansiyonun çok daha ' +
        'ciddi parçalarıyla. Bunları kesin olarak ayırmak ancak lifte mümkündür. Bu yüzden ' +
        'Stuk teşhis koymaz ve kesinlik vaat etmez — olasılıkları dürüstçe dağıtır ve önce ' +
        'neye bakılacağını söyler.',
      'İyi bir kayıt tahmini güçlendirir ama ustanın yerini tutmaz. Raporu servise gitmeden ' +
        'önceki ikinci görüş sayın: ustayla konuşma somutlaşır, gereksiz onarım satmak ' +
        'zorlaşır.',
    ],
    dataH2: 'Veriler',
    dataP:
      'Ses sunucuda analiz edilir ve sonrasında saklanmaz. Hesap yok, ölçümleme yok, reklam ' +
      'takipçisi yok. Ayrıntılar ',
    dataLink: 'gizlilik politikasında',
    dataTail: '.',
  },
  privacy: {
    title: 'Gizlilik politikası | Stuk',
    description:
      'Stuk uygulamasında verilerinize ne oluyor: ses sunucuda işlenir ve analizden sonra ' +
      'saklanmaz, hesap yoktur, ölçümleme yoktur.',
    h1: 'Gizlilik politikası',
    intro:
      'Stuk uygulaması en az veriyi toplar — teşhis için tam olarak ne gerekiyorsa onu.',
    items: [
      {
        strong: 'Ses kaydı',
        text: 'sunucuya yalnızca düğmeye bastığınızda gider, analizde kullanılır ve sonrasında saklanmaz.',
      },
      {
        strong: 'Araç bilgileri',
        text: '(marka, model, yıl, kilometre) ve anket yanıtları kayıtla birlikte iletilir — nedenleri değerlendirmek için gereklidir.',
      },
      {
        strong: 'Hesap yok.',
        text: 'Uygulama kayıt olmadan çalışır; cihaz, günlük rapor sınırı için rastgele bir kimlik alır.',
      },
      {
        strong: 'Üçüncü taraf takipçisi yok.',
        text: 'Site, sayfa görüntülemelerini kendi sunucusunda kimliksiz sayar — çerez yok, tanımlayıcı yok, kimseye veri aktarımı yok. Uygulamada ise hiçbir ölçümleme yok.',
      },
      {
        strong: 'Rapor geçmişi',
        text: 'yalnızca cihazınızda durur ve uygulamayla birlikte silinir.',
      },
    ],
    outro:
      'Mikrofon yalnızca ses kaydedilirken ve yalnızca sizin başlatmanızla kullanılır. Rapor ' +
      'bir olasılık tahminidir, teşhis değil; onarım kararını aracı inceleyen usta verir.',
  },
};
