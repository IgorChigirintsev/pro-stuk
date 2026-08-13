import type { HubText } from './index';

/** Разделы по узлам: турецкий. Слаг общий с английским, переводится только текст. */
export const tr: Record<string, HubText> = {
  dvigatel: {
    h1: 'Motor sesleri ve vuruntu',
    short: 'Motor',
    metaTitle: 'Motor sesleri ve vuruntu: eksiksiz rehber | Stuk',
    description:
      'Motorun tüm sesleri tek yerde: vuruntu, tıkırtı, takırtı, çınlama, ıslık. Zararsızı tehlikeliden nasıl ayırırsınız ve kendiniz neyi kontrol edebilirsiniz.',
    intro: [
      'Motor, arabanın en konuşkan ve aynı zamanda en belirsiz parçasıdır: «vuruntu» sözcüğünün altında hem enjektörlerin zararsız tıkırtısı hem de her kilometrede revizyonu yaklaştıran aşınmış krank yatakları vardır. Onları ayıran ses yüksekliği değil; sesin nereden geldiği, ne zaman ortaya çıktığı ve gaza ile ısınmaya nasıl tepki verdiğidir.',
      'Bu bölüm her ses türü için bir yazı toplar: supap tıkırtısından ve triger zincirinin hışırtısından vuruntulu yanmaya ve kol yataklarının sesine kadar. Her yazıda sesin tarifi, hiçbir şeyi sökmeden yapılabilecek güvenli kontroller ve aciliyetin dürüst bir değerlendirmesi var.',
    ],
  },
  podveska: {
    h1: 'Süspansiyon takırtıları ve gıcırtıları',
    short: 'Süspansiyon ve direksiyon',
    metaTitle: 'Süspansiyon takırtıları ve gıcırtıları: rehber | Stuk',
    description:
      'Tümseklerde takırtı, gıcırtı, direksiyonda boşluk: sesin kaynağını süspansiyon ve direksiyonda nasıl bulursunuz ve neyi kendiniz kontrol edersiniz.',
    intro: [
      'Süspansiyon yavaş yavaş aşınır ve tehlikeli hâle gelmeden çok önce neredeyse her zaman sesle uyarır. Sorun başka: Tümseklerdeki aynı takırtıyı hem ucuz viraj demirleri hem de kopması hızda doğrudan güvenlik meselesi olan rotil verir.',
      'Bölüm yazıları sesin karakterine ve koşullara göre toplar: ince tümseklerde hızlı takırtı, çukurlarda tek darbeler, arabayı sallayınca gıcırtı, direksiyona vuran takırtı. Ayrıca her parçanın aşınma belirtileri ve lift olmadan yapılabilecek kontroller.',
    ],
  },
  tormoza: {
    h1: 'Fren gıcırtısı ve sürtme sesi',
    short: 'Frenler ve tekerlekler',
    metaTitle: 'Fren gıcırtısı ve sürtme sesi: rehber | Stuk',
    description:
      'Frenlerde gıcırtı, ıslık, metal sürtmesi ve titreşim: her ses ne anlama gelir, ne zaman devam edilmez ve balatayla kaliperi nasıl kontrol edersiniz.',
    intro: [
      'Frenler, sesin harfiyen alınması gereken tek sistemdir: Sinyallerin çoğu üreticinin bilinçli tercihidir. Metal aşınma göstergesi, balatalar bittiğinde bilerek ötmeye başlar; metalin metale sürtmesi ise payın çoktan tükendiği anlamına gelir.',
      'Öte yandan gıcırtının en sık nedeni zararsızdır: Disklerde gecede oluşan pas tabakası, ilk birkaç frenlemede kalkar. Buraya tekerlek ve poyra sesleri de girer: rulman uğultusu, hızda titreşim ve sık sık frenlerle karıştırılan tıkırtılar.',
    ],
  },
  transmissiya: {
    h1: 'Şanzıman ve aktarma organları sesleri',
    short: 'Aktarma organları',
    metaTitle: 'Şanzıman ve aktarma sesleri: rehber | Stuk',
    description:
      'Şanzıman uğultusu, aksların tıkırtısı, vites değişiminde darbeler ve debriyaj sesi: kaynağı zeminin altında nasıl bulursunuz.',
    intro: [
      'Aktarma organları motordan ve süspansiyondan farklı konuşur: Sesleri, tork aktarılıp aktarılmadığına bağlıdır. Gazı kestiğinizde kaybolan ve yük altında geri gelen bir ses, neredeyse her zaman bu gruba aittir.',
      'Bölüm şanzıman, debriyaj, aks ve diferansiyel yazılarını toplar: her parça nasıl duyulur, hangi kontrol sökmeden bir şey gösterir ve hangi noktadan sonra yola devam etmek pahalıya patlar.',
    ],
  },
  vyhlop: {
    h1: 'Egzoz sistemi sesleri',
    short: 'Egzoz',
    metaTitle: 'Egzoz sesleri: eksiksiz rehber | Stuk',
    description:
      'Gürleme, susturucudan patlamalar, zemin altında takırtı ve çınlayan ısı kalkanı: egzoz sesleri ne anlatır ve neden önemlidir.',
    intro: [
      'Egzoz, hepsinin içinde en tanıdık sesleri çıkarır: delinmiş bir susturucunun gürlemesi, gaz kesildiğinde patlamalar, belirli devirde metalik takırtı. Çoğu arabanın gidişini değiştirmez, ama görmezden gelmek de doğru değil: Masum görünen bir takırtının ardında bazen dağılan bir katalitik konvertör vardır ve parçaları motora kaçabilir.',
      'Bölüm tüm hattı kapsar: kuruşluk ısı kalkanından ve yırtılmış flex borudan yanmış manifold contasına ve tıkanmış katalizöre kadar, her arızanın sesi ve egzoz gazının kabine sızma riskiyle birlikte.',
    ],
  },
  salon: {
    h1: 'Kabin gıcırtıları ve takırtıları',
    short: 'Kabin ve kaporta',
    metaTitle: 'Kabin gıcırtıları: kaynağı bulmak | Stuk',
    description:
      'Kabinde cırcır böcekleri, gıcırdayan torpido, takırdayan kapılar: kaynağı kendiniz nasıl bulursunuz ve şasi arızasından nasıl ayırırsınız.',
    intro: [
      'Kabin sesleri en sinir bozucu ve genellikle en ucuz çözülenlerdir: Arkasında çoğu zaman gevşemiş bir klips, bagajda sabitlenmemiş bir eşya ya da kurumuş bir fitil vardır, arıza değil. Önemli olan onları süspansiyon takırtısından ayırmak; yoksa gıcırdayan plastik, şasi teşhisi faturasına dönüşür.',
      'Bölüm sesi köşeye sıkıştırmanın basit yollarını gösterir: giderken kaplamayı elle bastırmak, bagajı boşaltmak, bir tekerleği kaldırıma çıkarıp gövdeyi burmak. Ve sesin gerçekten alttan geldiğini gösteren dürüst bir işaret.',
    ],
  },
};
