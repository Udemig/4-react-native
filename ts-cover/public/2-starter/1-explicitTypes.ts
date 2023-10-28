//! ExplicitTypes (Açık Türler)
// programlama dillerinde tür belirleme işleminin
// açıkça durumları ifade eder

//* temel tipler
let newCharacter: string;
let age: number;
let isSigned: boolean;

//* diziler
let car_brands: string[] = ['bmw', 'mercedes'];
let city_plates: number[] = [45, 34, 12, 23];

//* birden fazla tip değerine sahip dizilerde
//* union types yöntemiyle tanımlıyoruz (string | number)

let mixed: (string | number | boolean)[];

mixed = [30, true, 'deneme'];

//! objelerde tip ataması
let person: object;

// objenin özelliklerin tiplerini tanımalma
let newPerson: {
  name: string;
  age: number;
  eyeColor: string;
  hobbies: string[];
};

// tanımlanan tiplere sadık kalarak değer atamsı yapma
newPerson = {
  name: 'Ali',
  age: 45,
  eyeColor: 'blue',
  hobbies: ['Yüzme', 'Oyun', 'kodlama'],
};
