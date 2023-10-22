-- descending > azalan > büyükten küçüðe
select * from Musteri order by Kredi_notu desc

-- ascending > artan > küçükten büyüðe
select * from Musteri order by Dogum_tarihi asc


-- birden fazla sýralamayý kullanma
select * from Musteri order by Kredi_notu desc, Dogum_tarihi desc;

-- ! FONKSÝYONLAR

-- count() > sðtun sayýsý hesaplamaya yarar
select count(*) from Musteri;

-- kredi notu 50 üstünde olanlarýn kiþi sayýsý
select count(*) from Musteri where Kredi_notu > 50;

-- sum > sütüundaki bütün deðerleri toplama
select sum(Kredi_notu) from Musteri;

-- max > süyundaki en büyük deðeri bulur
select max(Kredi_notu) from Musteri;

-- min > süyundaki en küçük deðeri bulur
select min(Kredi_notu) from Musteri;

-- avg > sütundaki ortalama deðeri bulur
select avg(Kredi_notu) from Musteri;

--! GURUPLANDIRMA
-- SÜTUNDAKÝ FARKLI DEÐERLER GÖRE GRUPLANDIRMA

select Banka_calisanimi,count(*) as 'Kisi Sayisi' from  Musteri group by Banka_calisanimi;

-- birden fazla fonksiyonu kullanrak gruplandýrma
select Banka_calisanimi,
count(*) as 'Kisi Sayisi',
avg(Kredi_notu) 'Kredi Ortalamasý',
max(Kredi_notu) 'En Yüksek Not'
from Musteri group by Banka_calisanimi;
 