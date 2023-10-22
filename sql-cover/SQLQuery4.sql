-- b�tun kullan�c�lara kredi �ekebilrimi de�eri ekle ba�lan��ta hepsi false olsun
ALTER TABLE Musteri ADD Kredi_cekebilirmi bit default 0;

-- insert > tabloya yeni sat�r eklemek i�in kullan�l�r
-- b�t�n s�tunlar i�in de�erlerin s�ylenmeisi gerekir
INSERT INTO Musteri 
values(543,'Mustafa','Kaya','2001-03-01',60,null,12345678996,1);


-- sadece belirli s�tunlara atama yapma
insert into Musteri 
(Id,Soyad,Ad,Dogum_tarihi,Kredi_notu,TcNo) -- atama yap�ca��m� s�tunlar
values (154,'Kara','Meliha','1999-01-01',99,12345678993); -- atan�cak de�erler

-- update > varolan bir sat�r�n / sat�rlar�n de�erleini g�ncellemeye yarar
update Musteri set Kredi_notu = 90 where Id = 543;

update Musteri set Kredi_notu = 92 where Soyad = 'Kaya';

-- bir sat�r�n birden fazla de�erini g�ncelleme
update Musteri set 
Kredi_cekebilirmi = 1,
Banka_calisanimi = 0
where Id = 123;