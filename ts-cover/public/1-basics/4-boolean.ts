/*
 * boolean türü yalnızca true ve false değerlerine sahiptir.
 * basit bir veri türüdür,
 * not: karşılaştırmalar true veya false döndürür
 */

let age: number = 30;

let ehliyetAlabilirMi: boolean;

ehliyetAlabilirMi = age >= 18;

document.write(
  ehliyetAlabilirMi
    ? 'Ehliyet almaya hak kaznadınız'
    : 'Malasef hakkınız bulunmamaktadır'
);
