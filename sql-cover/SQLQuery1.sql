-- SQL Komutlarý hem büyük hem de küçük harflerle yazýlabilir

-- Yeni Tablo Oluþturma Komutu
-- Tablodaki sütunlarýn ismi
-- sütunun veri tipi
-- null olma durumunu belirlenir

CREATE TABLE TestMusteri3 (
Id int NOT NULL,
Ad varchar(30) NOT NULL,
TcNo char(11) NOT NULL,
Hobiler varchar(40) NULL,
);

-- tabloyu silme
drop table TestMusteri2;