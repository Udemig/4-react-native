/*
 *  Any:
 * değişkenin herhangi bir tiple sınırlandırılmadığı anlamına gelir.
 * any tipine sahip değişkenlere istediğimiz yipte veri atayabiliriz.
 ? nerelerde kullanılır
 * değerine heniz karar vermediğimiz
 * veya api'den gelen cevabın değerini bilmediğimiz
 * any tipini geçici olarak kullanbilir
 */

let prop: any;

prop = 'sfsdf';
prop = 34;
prop = {};
prop = [];

// her türlü elemanı kabul eden dizi
let mixed_arr: any[];

mixed_arr = [{}, 'asfda', 1432];
