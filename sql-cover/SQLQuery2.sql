-- ALTER TABLE
-- TABLOYU G�NCELLEMEYE Yarar

-- Tabloya Yeni S�tun ekler
ALTER TABLE TestMusteri ADD Dogum_tarihi date;

-- Varolan s�tunu g�ncelleme
ALTER TABLE TestMusteri ALTER COLUMN Dogum_tarihi DATE NOT NULL;