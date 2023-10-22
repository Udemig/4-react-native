-- bütun kullanýcýlara kredi çekebilrimi deðeri ekle baþlanýçta hepsi false olsun
ALTER TABLE Musteri ADD Kredi_cekebilirmi bit default 0;

-- insert > tabloya yeni satýr eklemek için kullanýlýr
-- bütün sütunlar için deðerlerin söylenmeisi gerekir
INSERT INTO Musteri 
values(543,'Mustafa','Kaya','2001-03-01',60,null,12345678996,1);


-- sadece belirli sütunlara atama yapma
insert into Musteri 
(Id,Soyad,Ad,Dogum_tarihi,Kredi_notu,TcNo) -- atama yapýcaðýmý sütunlar
values (154,'Kara','Meliha','1999-01-01',99,12345678993); -- atanýcak deðerler

-- update > varolan bir satýrýn / satýrlarýn deðerleini güncellemeye yarar
update Musteri set Kredi_notu = 90 where Id = 543;

update Musteri set Kredi_notu = 92 where Soyad = 'Kaya';

-- bir satýrýn birden fazla deðerini güncelleme
update Musteri set 
Kredi_cekebilirmi = 1,
Banka_calisanimi = 0
where Id = 123;