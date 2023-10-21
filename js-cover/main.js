// export edilen elemanları içe aktrma
import { leaderTable as table } from './constants.js';
// varsayılan elemanı import etme
import sifre from './constants.js';

// console.log(table);
// console.log(sifre);

// export const deneme = 10;
// export const deneme1 = 50;
// export const deneme2 = 60;
// export const deneme3 = 60;

// //! Değişkenler

// //* var:
// //* eski sürümlerde kullanılan değişkken tanımlama yöntemidir.
// //* yenisi sürümlerde yerine let ve const kullanılır
// //* değeri sonradan değiştirlebilir
// //* hoisting mekenizması sayesinde değişkeni yukarıya taşır
// //* kullandıktan sonra tanımlayabiliriz

// var x = 40;
// x = 40;

// //* es6 let
// //* tanımlandığı blok içerisnde kullanılır (block - scope)
// //* değişkeni tanımladan önce kullanmayız
// //* değerini sonradan değiştebiliriz
// let surname = 'Yıldız';
// surname = 'Kaya';

// //* es6 const
// //* const ile tanımlana değişken sadece bir kez atanabilir
// //* sonrasında değiştirilemez
// //* obje veya dizi tanımladnığında kendisi değiştirlemesede
// //* nesnenin içeriği değişebilir

// const user = {
//   name: 'ahmet',
//   surname: 'Kara',
// };
// user.name = 'Ali';

// const users = ['ali', 'ayşe'];
// console.log(users);
// users[0] = 'Mehmet';
// console.log(users);

// //! Hoisting

// // javascript'te hoisting kladırma bir dğeişkeni veya fonksiyonu
// // tanımlanmadan önce kullanılmasına olanak sağlaar
// // Bazen beklenemdik sonuçlar ortaya çıkabiliyor.
// var foo;
// console.log(foo); // undefined

// foo = 70;

// console.log(foo); // 70

// selamla();

// function selamla() {
//   console.log('selam');
// }

// //! Javascript Veri Türleri

// //* String
// let statuss = 'kötü';

// const text = "Selam bugün  nasıl' geçiyor ";
// const text2 = 'Gayet güzel, hava "çok" güneşli';
// const text3 = `
// -Javsacirpt öğrendin mi ?
// -Evet gayet ${statuss}.
// `; // template literals > backtick > ``

// //* Number
// const sayi = 4;
// const sayi2 = 4.1;

// console.log(sayi + sayi2);

// //* Boolean
// const is_premium = true;
// const is_student = false;

// //* Object (Nesne)
// //* birden çok özelliği ve değeri içeren karmaşık veri yapılarıdır.
// //* {} içereinde anahtar - değer çiftleriyle kullanıyoruz
// var person = {
//   name: 'John',
//   age: 40,
//   has_licence: false,
// };

// //* Array  (Dizi)
// //* Sıları öğelerin listesini temsil eder
// var colors = ['kırmızı', true, 59, { name: 'ad' }];

// //* Undefined (Tanımsız)
// var u;
// console.log(u);

// //* Null (Boş)
// //* Bir değişkenin bilinçli olarak boş bırakılıdğını veya olmadığını temsil eder
// var student = {
//   name: 'Ali',
//   surname: 'kaya',
//   hobby: null,
// };
// console.log(student.hobby);

// //! Function (Fonksiyonlar)
// //* Belirli bir göre yerine getiren veya sonuç döndüren
// //* adlandırılmış kod bloklarıdır.

// //* Fonksiyon Adı: İşlevin ne yaptığını açıklayan isim
// //* Fonksiyonun Gövdesi: Gerçekleştirceği işlevi içeren kod bloğu
// //* Parmatreler: Fonksiyonun çalışması için dışarıdan gönderilen değerler
// //* Dönüş Değer (return): yaptığı işlemler sonucunda ürettiği
// //* sonucu fonksiyonun çağrıldı yere gönderiri
// function toplama(a, b) {
//   const sum = a + b;
//   return sum;
// }

// const sum1 = toplama(50, 100); // fonksiyonu çağır ve değeri al
// const sum2 = toplama(6548645, 120000); // parametreler değer atamsı yap

// document.write(sum1);
// console.log(sum2);

// //* Arrow Function (Ok Fonksiyon)

// function test(name) {
//   return 'selam ' + name;
// }

// //* tek paramtre varsa paranzte gerek yok
// //* return edilecek veri tek satırdaysa doğrudan yazılır () =>
// const test2 = (name) => 'selam' + name;

// //* return den önce hesaplamalar yappılacaksa () => {}
// const test3 = (a, b) => {
//   let c = a + b;
//   return c;
// };

// //* return edilcek veri çok satırlıysa () => ()
// const test4 = () =>
//   ` <meta charset="UTF-8" />
//     <meta
//       name="viewport"
//       content="width=device-width, initial-scale=1.0"
//     />
//     <link rel="stylesheet" href="style.css" />
//     <title></title>
//   `;

// //* return edilecek veri obje veya diziyse
// const test5 = () => ({ name: 'ali', age: 760 });
// const test6 = () => {
//   return { name: 'ali', age: 760 };
// };

// console.log(test5());

// //! Diziler

// console.table(table);

// //* push: dizinin sonun ekleme
// table.push({
//   id: 'sdxfsdd123',
//   name: 'ayşe',
//   point: 5400,
//   isActive: false,
// });
// console.table(table);

// //* push: dizinin başına ekleme
// table.unshift({
//   id: 'sdxfsdd23',
//   name: 'ayşe',
//   point: 5400,
//   isActive: false,
// });
// console.table(table);

// //*shift() >  dizinin başındaki elemanı çıkart
// const removedItem = table.shift();
// console.log(removedItem);
// console.table(table);

// //* pop() >  dizinin sonunda elemanı çıkart
// const removedItem2 = table.pop();
// console.log(removedItem2);
// console.table(table);

// //* slice >  diziden bblirli birr parçayı  alma
// //* slice seçtiğimiz elemalardan yeni bir dizi oluşturur
// //* ana dizide bir değişiklik olmaz
// const part = table.slice(0, 6);
// console.table(part);
// console.table(table);

// //* find
// //* bir özelliğini bildiğimiz elemanı dizide bulmaya yarar
// //* sadece bir eleman döndürür

// const foundUser = table.find((user) => user.id === '2asdk456');

// console.log('Bulundu', foundUser);

// //* forEach
// //* bir eylenmi dizideki bütün elemanlar için tekrar etmek
// //* istiyorsak kullanılır. dizideki her bir eleman için
// //* fonk. çalıştırdığı param. olarak elemanı gönderir.

function ekranaBas(user) {
  console.log(
    `<b> ${user.name}</b> kullanıcın aldığı puan <b>${user.point}</b> <br>`
  );
}

table.forEach(ekranaBas);

//* map
//* dizideki her bir eleman için fonks çalıştıtır
//* elemanı çalıştıırığı fonk param olarak gönderiri
//* çalışan fonk.dan return edilen verilerle yeni dizi oluşur

const decide = (user) => ({
  ...user, // user objesindeki bütün veileri buraya aktardık
  point: user.point + 200,
});

const newTable = table.map(decide);

console.table(table);
console.table(newTable);

// belirli bir süre sonra bir kere fonk. çalıştırır
// setTimeout(() => console.log('selam'), 3000);
// // belirli süre bir fonk .çalıştırır
// setInterval(() => console.log('selam'), 3000);

/*
! Promise
* Asenkron işlemleri temsil etmek için kullan
* javascript nesnesidir. Promise işlemin sonucunu temsil eder
* Her asenkron işlemin üç durumu vardır.
* pending: Bekliyor
* fulfilled: Olumlu oalrak gerçekleşmesi
* rejected: hata oluşması
*/

const apiRequest = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(resolve, 3000);
  } else {
    setTimeout(reject, 2000);
  }
});

//! Promise Yapıları Almak
//* 1.yol > then > catch > finally
apiRequest
  // ancak promise başarıyla sonuçlanırsa çalışır
  .then((data) => console.log('Başarıyla sonuçlandı'))
  // başarasız olarak sonuçlanırsa çalışır
  .catch((err) => console.log('Başarısız oldu'))
  // her iki durumda çalışır
  .finally(() => console.log('APİ İsteği çalıştı'));

//* 2. yol > async > await
//* promise'leri daha okunaklı hale getiren es6 ile gelen js öözelliği
//* async > promise dönürüen fonklar tanımlanailir
//* await > asenkton bir fonksiyon içerisinde promise'in cevap vermesini bekler

async function getData() {
  try {
    // kodu çalıştırmayı dener
    const data = await apiRequest;
    console.log('api den başarılı cevap geldi');
  } catch (err) {
    // hata olursa bu blok çalışır
    console.log('promise başlarısz oldu');
  }
}

getData();

//! Asenkron
// aseknron terimi: bir işlemin başlatılması ve sonuç alması
// arasındaa beklemey karar vermeden devam edebilmesi anlamına gelir
// fetch > http istekleri  atmaya yarar

const getDataa = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();

  console.table(data);
};

getDataa();
