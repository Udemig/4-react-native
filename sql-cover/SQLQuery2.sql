-- ALTER TABLE
-- TABLOYU GÜNCELLEMEYE Yarar

-- Tabloya Yeni Sütun ekler
ALTER TABLE TestMusteri ADD Dogum_tarihi date;

-- Varolan sütunu güncelleme
ALTER TABLE TestMusteri ALTER COLUMN Dogum_tarihi DATE NOT NULL;