//* Type Aliases > Tür İsimlendirme
//* Typescript'de özel türler oluşturmayı sağlar
//* Katmaşık türleri yendien kullanılabilir ve
//* daha anlaşılır bir hale getirmemizi sağlar

// tip tanımı
type CityType = {
  title: string;
  plate: number;
  coords: [number, number];
  isCapital: boolean;
};

let Ankara: CityType;

Ankara = {
  title: 'Ankara',
  plate: 1,
  coords: [435.234, 34.123],
  isCapital: true,
};

let Izmır: CityType = {
  title: 'İzmir',
  plate: 35,
  coords: [33, 32],
  isCapital: false,
};

// Rip tanımlarken varolan tiplerin özelliklerini birleştirme
// Intersection Types : iki veya daha fazla tipi birleştirebilirerek
// yeni bir tip oluşturmamızı sağlar

type Identity = {
  id: number;
  name: string;
};

type Contact = {
  email: string;
  phone: string;
};

type EmployeeType = Identity & Contact;

let Employee: EmployeeType = {
  id: 100,
  name: 'Rıfat',
  email: 'rıfat@outlook.com',
  phone: '90-342-132-34-23',
};
