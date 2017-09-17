# react-designer

Sirasiyla ```npm install``` ve ```npm run``` komutlarini girerek calistirabilirsiniz.

Ana component "src/App.js" dosyasi icerisinde bulunuyor. Bu componentde ```config``` ve ```save``` olmak uzere iki parametre aliyor.

Prop     | Gorevi
-------- | ---
config | App ile alakali tum konfigurasyonu icerir
save    | Kaydet butonuna basildiginda yapilacak aksiyonu iceren fonksion

### Config Dosyasi
**parentElements**: Sidebardaki akordiyondaki parentlari iceren array. Demodaki Musteri Bilgileri, Fatura Bilgileri, Hizmet Urun Bilgileri vs bunlardan biri, altta aldigi degerler ve aciklamasi var.

Key     | Value
--------| ---
label | Gozukecek olan text (*Musteri Bilgileri*)
name    | Bu item'e ozel bir name, unique olmak zorunda (*customer-info*)
isOpen | Akordiyonun acik olma durumu, true ise acik gelir (*true*)

Bunlar haricinde tablo seklinde yapmak istedigimiz komponent icin ise ```"isFixedTable": true``` degerini aliyor

**mainElements**: Sidebardaki tasinabilir degerleri iceren array. Fatura Numarasi, Metin Alani vs.

Key     | Value
--------| ---
label | Gozukecek olan text (*Müşteri Telefon Numarası*)
variableName    | Bu item'e ozel bir key, unique olmak zorunda (*verginumarasi*)
icon | Yazinin solunda gozukecek olan ikon, biz su an hepsi icin 3lu bar gosteriyoruz (*bars*)
parentName | Hangi akordiyon icerisinde olacagi, yukarida parentElement icin tanimladigimiz name ile ayni olmali (*customer-info*)
placeHolder | Sayfa icerisine tasindginida sayfada goukecek olan yazi (*Test musteri*)

Item bir tablo ise ```"isFixedTable": true``` , freetext ise yani birden fazla instance olusturup tasinabilecek ise ```"isFreeText": true``` degerini alir

**tableFields**: Tablo icerisinde bulunabilecek elemanlar.

Key     | Value
--------| ---
variableName    | Bu item'e ozel bir key, unique olmak zorunda (*serviceorproduct*)
label | Sidebar'da Gozukecek olan text (*Hizmet/Urun*)
labelOnTable | Sayfada Gozukecek olan text (*Hizmet veya urun tanimi*)
descOnTable | Eger aciklama ile birlikte gozukecekse aciklama yazisi (*Hizmet veya urun aciklamasi*)
checked | Tabloda gosterilip gosterlimeme durumu (*true*)
width | Genisligi (*287*)
order | Sirasi (*0*)

