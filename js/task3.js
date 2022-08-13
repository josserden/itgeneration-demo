// todo Перебір масиву
/*
 * Напиши скрипт для перебору масиву fruits циклом for.
 * Для кожного елемента масиву виведіть у консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів має починатися з першого.
 */

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

for (let i = 0; i < fruits.length; i += 1) {
  const fruit = fruits[i];

  console.log(`${i + 1} - ${fruit}`);
}

// let index = 0;
// for (const fruit of fruits) {
//   console.log(`${(index += 1)} - ${fruit}`);
// }

// for (const fruit of fruits) {
//   console.log(`${fruits.indexOf(fruit) + 1} - ${fruit}`);
// }
