-- descending > azalan > b�y�kten k����e
select * from Musteri order by Kredi_notu desc

-- ascending > artan > k���kten b�y��e
select * from Musteri order by Dogum_tarihi asc


-- birden fazla s�ralamay� kullanma
select * from Musteri order by Kredi_notu desc, Dogum_tarihi desc;

-- ! FONKS�YONLAR

-- count() > s�tun say�s� hesaplamaya yarar
select count(*) from Musteri;

-- kredi notu 50 �st�nde olanlar�n ki�i say�s�
select count(*) from Musteri where Kredi_notu > 50;

-- sum > s�t�undaki b�t�n de�erleri toplama
select sum(Kredi_notu) from Musteri;

-- max > s�yundaki en b�y�k de�eri bulur
select max(Kredi_notu) from Musteri;

-- min > s�yundaki en k���k de�eri bulur
select min(Kredi_notu) from Musteri;

-- avg > s�tundaki ortalama de�eri bulur
select avg(Kredi_notu) from Musteri;

--! GURUPLANDIRMA
-- S�TUNDAK� FARKLI DE�ERLER G�RE GRUPLANDIRMA

select Banka_calisanimi,count(*) as 'Kisi Sayisi' from  Musteri group by Banka_calisanimi;

-- birden fazla fonksiyonu kullanrak grupland�rma
select Banka_calisanimi,
count(*) as 'Kisi Sayisi',
avg(Kredi_notu) 'Kredi Ortalamas�',
max(Kredi_notu) 'En Y�ksek Not'
from Musteri group by Banka_calisanimi;
 