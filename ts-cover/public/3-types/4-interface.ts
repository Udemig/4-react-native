/*
 * Interface > Arayüz
 * Belirli nesne yada sınfın özellik ve mothodlarını tutan
 * bir yapıdır
 */

interface IPerson {
  firstname: string;
  lastname: string;
  sayHello: (text: string) => void;
}

// implement: interface tanımlananan özellike
// ve nesnee kurallarına uyarak değer tanımlama
const newStudent1: IPerson = {
  firstname: 'Ayşe',
  lastname: 'kaya',
  sayHello(text) {
    console.log(text + ', selamlar!!');
  },
};

// Genişletme > Miras Alma > Extends

interface A {
  a: number;
}
interface B {
  b: string;
}
interface C extends A, B {
  c: boolean;
}

const nesne1: C = {
  a: 34,
  b: 'selam',
  c: true,
};

// sınıfı interface'e uygun tanımlama
class Deneme1 implements C {
  a: 45;
  b: 'selan';
  c: false;
}
