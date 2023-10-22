-- Tablodaki bütün verileri çekme
SELECT * FROM Musteri;

-- Tablodaki belirli sütunlarý çekme
SELECT Ad,Banka_calisanimi,Kredi_notu from Musteri;

-- Belirli koþullara uyan elemanlarý alma
-- SQL'de koþullarý where ile tanýmlýyoruz
SELECT * FROM Musteri WHERE Kredi_notu > 65;

-- sadece banka çalýþaný olanlarýn isim soyisimlerini getir
SELECT Ad,Soyad FROM Musteri WHERE Banka_calisanimi = 1;

-- sadece 1990 dan önce doðan müþterileri getir
SELECT * FROM Musteri where Dogum_tarihi <= '1990-01-01';

-- adý ayþe olamayanlarý getir
SELECT * FROM Musteri where Ad != 'Ayþe';

-- bir sütundaki birden fazla deðere göre çaðýrma
SELECT * FROM Musteri where Ad in('Murat','Fatma');

-- sadece soyadý a ile baþlayanlar
SELECT * FROM Musteri where Soyad LIKE 'Y%';

-- soyadýnýn herhangi bir yerinde ay olanlar
select * from Musteri where Soyad like '%AY%';

-- berlili aralýktaki elemanlarý getirme
select * from Musteri where Kredi_notu between 50 and 89;


-- birden fazla koþulu bir arada kullanma
-- ve > and > bütun koþullarýn geçerli olmasýný bekler
select * from Musteri where Kredi_notu > 50 and Banka_calisanimi = 0;

select * from Musteri where Ad like '%A%' and Dogum_tarihi > '1985';

-- veya > or > sadece bir koþulun geçerli olmasý yeterlidir
--  adýnda veya soyismine e olanlarý getir
select * from Musteri where Ad like '%e%' or Soyad like '%e%';
