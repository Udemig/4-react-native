-- SQL Komutlar� hem b�y�k hem de k���k harflerle yaz�labilir

-- Yeni Tablo Olu�turma Komutu
-- Tablodaki s�tunlar�n ismi
-- s�tunun veri tipi
-- null olma durumunu belirlenir

CREATE TABLE TestMusteri3 (
Id int NOT NULL,
Ad varchar(30) NOT NULL,
TcNo char(11) NOT NULL,
Hobiler varchar(40) NULL,
);

-- tabloyu silme
drop table TestMusteri2;