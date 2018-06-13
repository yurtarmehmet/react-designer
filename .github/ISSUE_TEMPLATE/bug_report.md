---
name: Bug report
about: Create a report to help us improve

---

## Beklenen Davranış

Trendify'da istek tamamlandıktan sonra loading animasyonunun gözükmemesi gerekir.

## Şu anki Davranış

Trendify isteği basarılı olmasına rağmen loading ekrandan kaybolmuyor.

## Hatayı Tekrarlama Adımları

1.  Trendify ekranına geç
2.  Güncel istek tamamlanmadan başka bir tarih seç

## Context/Environment

**Account ID:** acc_6185ae008536e000

**API Key:** 3c0675e9-9d89-47b3-b7a0-cdde875e525b

**User:** mehmet.yurtar@segmentify.com

**URL:** panelv2.com/trendify

## Screenshots
![screen shot 2018-06-08 at 14 48 26](https://user-images.githubusercontent.com/7923626/41156566-27735332-6b2b-11e8-9e06-6e983cde6532.png)

## Ekstra Detay
Durum sadece istek tamamlanmadan başka bir tarih seçince yaşanıyor. Loading ekranı sadece ilk açılışta gözüktüğü için problem de sadece Trendify ilk açıldığında yaşanıyor.

## Cozum Onerisi
Atılan tüm isteklerde eğer success döndü ise loading ekrandan silinebilir.
