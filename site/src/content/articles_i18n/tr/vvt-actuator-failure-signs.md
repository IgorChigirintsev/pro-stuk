---
title: "Eksantrik ayarlayıcı arızasının belirtileri"
metaTitle: "Arızalı eksantrik ayarlayıcı: ses ve belirtiler | Pro-Stuk"
description: "Arızalı eksantrik ayarlayıcının belirtileri: çalıştırmadan sonra takırtı, titrek rölanti, artan tüketim, P0010–P0017 kodları ve diğer seslerden farkı."
faq:
  - q: "Eksantrik ayarlayıcı basitçe nedir?"
    a: "Eksantrik mili üzerinde bulunan, yağ basıncını kullanarak mili döndüren ve supapların açılma anını değiştiren hidrolik bir mekanizmadır. Motora aynı anda hem düşük devirde tok bir çekiş hem yüksek devirde güç kazandırır."
  - q: "Hangi arıza kodları eksantrik ayarlayıcıyı işaret eder?"
    a: "Çoğunlukla P0010–P0017 ailesi: eksantrik-krank korelasyonu ya da ayarlayıcı kumanda devresinde arıza. Ama uzamış triger zinciri ve sıkışmış yağ kumanda valfi de aynı kodları verir, bu yüzden gerçek eksantrik zamanlaması diagnostik cihazla kontrol edilmelidir."
  - q: "Ayarlayıcı ayrı mı yoksa triger zinciriyle birlikte mi değişir?"
    a: "Teknik olarak ayrı değişebilir, ama pratikte neredeyse her zaman zincirle birlikte yapılır: parçalar komşudur ve sökme işinin büyük kısmı ortaktır. Bu, motorun önünü iki kez sökmekten daha ucuza gelir."
sources:
  - title: "Schaeffler (INA): değişken supap zamanlama sistemleri"
    url: "https://www.schaeffler.com"
  - title: "SAE International: supap mekanizması ve triger araştırmaları"
    url: "https://www.sae.org/"
---

Değişken supap zamanlaması, supapların açılma anını kaydıran sistemdir.
Baş oyuncusu, eksantrik mili üzerindeki ayarlayıcıdır: yağ basıncını
kullanarak mili döndürür ve supap olaylarını motorun o anki çalışma rejimine
göre kaydırır. Ayarlayıcı ya da kumanda valfi aşındığında motor bunu
çalıştırma sonrası takırtıdan artan yakıt tüketimine kadar bir dizi işaretle
bildirir. Kendi aracınızın tablosuyla karşılaştırabilmeniz için hepsi burada.

## Ses: soğuk çalıştırmadan sonra takırtı

En erken ve en tanınabilir belirti, soğuk motor çalıştıktan sonraki bir ile
üç saniye boyunca duyulan kuru, dizeli andıran takırtıdır. Yağ basıncı
henüz kurulmamışken aşınmış bir ayarlayıcı kilitlenmez ve kanatları
odacıklarında vurur. Ses motorun üstünden, külbütör kapağının altından
gelir ve yağ ayarlayıcıya ulaşır ulaşmaz kaybolur.

Aşınma ilerledikçe takırtı uzar, her çalıştırmada tekrarlamaya başlar ve
ileri vakalarda motor sıcakken de duyulur. Bu sesi benzerleri arasına
yerleştirmek için
[soğukta motor vuruntusu](/tr/symptoms/engine-knock-when-cold/)
belirti sayfasına bakın.

## Motor nasıl davranır

Supap zamanlaması silindirlerin dolumunu yönetir, dolayısıyla arızalı bir
ayarlayıcı motorun karakterini bozar:

- **titrek rölanti** — devir gezinir ve araç sarsılır; ilgili sebepler
  [rölantide titreşim](/tr/symptoms/vibration-at-idle/) sayfasında;
- **güç kaybı** — ayarlayıcının nerede sıkıştığına göre altta ya da üstte;
- **tembel gaz tepkisi**, hızlanırken gaz boşlukları;
- **artan yakıt tüketimi** — karışım yanlış anlarda yanar;
- kötü durumlarda motor **rölantide stop eder** ya da isteksiz çalışır.

Bunların hiçbiri tek başına eksantrik ayarlayıcıyı göstermez, ama soğuktaki
takırtıyla birleşince tablo karakteristik hale gelir.

## Elektronik: arıza kodları

Beyin, sensörlerden gelen komut edilen ve gerçek eksantrik konumunu sürekli
karşılaştırır. Ayarlayıcı yetişemediğinde ya da sıkıştığında P0010–P0017
ailesi çıkar (eksantrik-krank korelasyonu, ayarlayıcı kumanda devresi) ve
arıza lambası yanar. Motor sıklıkla değişken zamanlama devre dışı bırakılmış
bir kısıtlı moda düşer: güç azalır, tüketim artar, ama araç yürür.

Önemli bir ayrıntı: aynı kodlar uzamış triger zincirinde ve ayarlayıcıya
yağ ölçen selenoid valf sıkıştığında da çıkar. Bu yüzden sadece koda bakıp
parça değiştirilmez: önce gerçek eksantrik zamanlaması ve valf diagnostik
cihazla kontrol edilir.

## Eksantrik ayarlayıcı neyle karıştırılır

| Belirti | Ayarlayıcıya uyar mı? | Başka ne kontrol edilmeli |
|---|---|---|
| Çalıştırmadan 1–3 saniye sonra takırtı | Evet, klasik tablo | Triger zinciri gergisi |
| Her rejimde düzenli tıkırtı | Hayır | Enjektörler, hidrolik külbütörler |
| Titrek rölanti artı arıza lambası | Evet | Bobinler, hava kaçağı |
| Emmeye patlama | Zamanlama çok kaydıysa | Karışım, ateşleme |

Isınmayı umursamayan sürekli bir tıkırtı daha çok yakıt sistemidir. Zamanlama
ciddi biçimde kaydıysa karışım emme manifoldunda tutuşabilir; bunun neden
olduğu
[emmeye patlama: sebepleri](/tr/articles/intake-backfire-causes/)
yazısında anlatılıyor. Triger tahrikinin kendi takırtısı
[triger zinciri gerginliğini kulakla kontrol etmek](/tr/articles/checking-timing-chain-tension-by-ear/)
yazısında; yük altındaki vuruntu ise bambaşka bir hikâye —
[motor vuruntusunun belirtileri](/tr/articles/signs-of-engine-detonation/).

## Onarım kararı nasıl verilir

Ucuz uçtan başlayın: yağ seviyesi ve durumu, ardından diagnostik tarama.
Cihaz, gerçek eksantrik zamanlamasının komut edilen değerin ne kadar
gerisinde kaldığını gösterir ve ayarlayıcıyı yağ kumanda valfinden ayırır.
Ayarlayıcı hâlâ yaşıyorsa doğru spesifikasyonda taze yağ çoğu zaman
belirtilerin bir kısmını kaldırır — bu da tesadüf değil. Sistem ince
kanallardan geçen yağ basıncıyla çalışır, dolayısıyla uzatılmış yağ
değişim aralıkları ve yanlış spesifikasyon, ayarlayıcının sıkışmasının en
yaygın sebepleri arasındadır.

Aşınmış ayarlayıcı değiştirilir, kural olarak triger zinciriyle birlikte,
çünkü işçilik ortaktır. Sorulacak iki şey var. Yağ kumanda valfi ve süzgeci
temizlendi mi ya da değiştirildi mi — tıkalı süzgeçten beslenen yeni bir
ayarlayıcı tıpkı eskisi gibi davranır. Bir de eksantrik milinin yağ
kanalları çamurlaşmaya karşı kontrol edildi mi; bakım geçmişi ihmal edilmiş
bir motorda servisin bulduğu şey tam olarak budur.

Ertelemek giderek pahalılaşır: aşınmış bir ayarlayıcı zincir aşınmasını
hızlandırır ve ciddi biçimde kaymış zamanlama supaplar ile pistonlar için
risk haline gelir.

Motorunuzdan gelen seslerin ayarlayıcı olduğundan emin değilseniz soğuk
çalıştırmayı Pro-Stuk uygulamasında kaydedin: algoritma kaydı verdiğiniz
cevaplarla eşleştirir ve olası sebepleri yüzdeleri ve aciliyet seviyesiyle
verir — serviste yapacağınız konuşma için elverişli bir başlangıç noktası.
