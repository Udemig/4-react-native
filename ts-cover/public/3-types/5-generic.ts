// Fonksiyonlardaki parametrenin
//! değer alan yerine tip alan versiyonu
// Yeniden kullabilirliği arttır

interface character<T, Z> {
  name: string;
  health: number;
  category: string;
  weapon: T;
  price: Z;
}

const mario: character<string, number> = {
  name: 'mario',
  health: 100,
  category: 'fighter',
  weapon: 'gun',
  price: 43543,
};

const sonic: character<number, number> = {
  name: 'mario',
  health: 100,
  category: 'fighter',
  weapon: 34,
  price: 43543,
};
