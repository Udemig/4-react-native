/*
 * Tuple
 * farklı türlerdeki öğelerin sıralı bir listesini temsil eder
 * dizilerde öğelerin sırasını ve türlerini belirlemek için kullanılır.
 */
let exaTuple: [string, number, boolean];

// tuple'a değer atamsı yapma
// dikkat edilmesi gerekenler
// değer atamsını sıraya uygun yamak gerekir
// değer atamsında tiplere dikkat etmemiz gerekir
exaTuple = ['selam', 43, false];

// tuple örnek
function getCustomerInfo(): [number, string] {
  // veritabanında bilgileri al
  const id = 43;
  const name = 'Mustafa';
  // return ederken tuple'daki kurala uyuyoruz
  return [id, name];
}

const [id, first_name] = getCustomerInfo();

console.log(id, first_name);
