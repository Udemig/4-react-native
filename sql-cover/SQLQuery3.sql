-- Tablodaki b�t�n verileri �ekme
SELECT * FROM Musteri;

-- Tablodaki belirli s�tunlar� �ekme
SELECT Ad,Banka_calisanimi,Kredi_notu from Musteri;

-- Belirli ko�ullara uyan elemanlar� alma
-- SQL'de ko�ullar� where ile tan�ml�yoruz
SELECT * FROM Musteri WHERE Kredi_notu > 65;

-- sadece banka �al��an� olanlar�n isim soyisimlerini getir
SELECT Ad,Soyad FROM Musteri WHERE Banka_calisanimi = 1;

-- sadece 1990 dan �nce do�an m��terileri getir
SELECT * FROM Musteri where Dogum_tarihi <= '1990-01-01';

-- ad� ay�e olamayanlar� getir
SELECT * FROM Musteri where Ad != 'Ay�e';

-- bir s�tundaki birden fazla de�ere g�re �a��rma
SELECT * FROM Musteri where Ad in('Murat','Fatma');

-- sadece soyad� a ile ba�layanlar
SELECT * FROM Musteri where Soyad LIKE 'Y%';

-- soyad�n�n herhangi bir yerinde ay olanlar
select * from Musteri where Soyad like '%AY%';

-- berlili aral�ktaki elemanlar� getirme
select * from Musteri where Kredi_notu between 50 and 89;


-- birden fazla ko�ulu bir arada kullanma
-- ve > and > b�tun ko�ullar�n ge�erli olmas�n� bekler
select * from Musteri where Kredi_notu > 50 and Banka_calisanimi = 0;

select * from Musteri where Ad like '%A%' and Dogum_tarihi > '1985';

-- veya > or > sadece bir ko�ulun ge�erli olmas� yeterlidir
--  ad�nda veya soyismine e olanlar� getir
select * from Musteri where Ad like '%e%' or Soyad like '%e%';
