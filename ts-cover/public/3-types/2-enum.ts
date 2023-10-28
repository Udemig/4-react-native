/*
 *  ENUM > Enumeration
 * Bu tür, bir değişkenin alabileceği sabit değerlerin
 * bir listesini temsil eder
 */

enum Days {
  'Pazartesi',
  'Sali',
  'Carsamaba',
  'Persembe',
  'Cuma',
  'Cumartesi',
  'Pazar',
}

const task = {
  title: 'Navbar',
  tech: 'JS',
  deadLine: Days[1],
};

const task2 = {
  title: 'API',
  tech: 'Express',
  deadLine: Days.Carsamaba,
};

const task3 = {
  title: 'Backend',
  tech: 'Node.js',
  deadLine: Days.Cuma,
};

console.log(task);
