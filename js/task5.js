// todo Масиви та рядки
/*
 * Напиши скрипт який виводить у консоль усі слова рядка крім першого та останнього.
 * Результуючий рядок не повинен починатися або закінчуватися пробілом.
 * Скрипт повинен працювати для будь-якого рядка.
 */

const string =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas cupiditate excepturi';

const array = string.split(' ');
console.log(array);
array.splice(0, 1);
array.splice(array.length - 1, 1);

console.log(array.join(' '));
