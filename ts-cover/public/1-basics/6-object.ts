/*
 * ts ile obje tanımladığımız zaman
 * js'den farklı olarak:
 * objeye yeni bir property(özellik ekleyemeyiz)
 * özelliğe yeni tipte değer atamsı yapılamaz
 */

let person = {
  name: 'Burak',
  age: 45,
  eyeColor: 'black',
  licence: true,
};

// yeni özellik ekleyemiyoruz
person.height = 30;

// varolan özelliklerde belirlenmiş tiplerin dışına çıkmıyoruz.
person.age = '60';
