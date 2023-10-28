// * sabit türlere sahip diziler
// * dizi eğer sabit bir türden oluşuyorsa ona o tür dışında
// * eleman gönderemeyiz

//! string dizisi
let names: string[];

names = ['Ahmet', 'Mehmet', 'Bilal'];

// dizi methıodlarınada bu tip tanımlaması etki eder
names.push('Fatma');
names[2] = 'Bilal2';

//! sayı dizisi
let numbers: number[] = [];

numbers.push(30);
numbers.unshift(50);

//! sadece string ve sayı kabul eder
// let strAndNum: string[] | number[];

let strAndNum: (string | number)[];

strAndNum = [3432432, 144324, 1234124];
strAndNum = ['2afasdf', 'fsdfsd', 34234, 'asdafs'];

//! any type'ı na sahipse dizye herhangi bir değer atayabilirz
let mixed: any[] = ['ahmer', 123, true, [], {}];
