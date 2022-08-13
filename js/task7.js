// todo Пошук елемента
/*
 * Напиши скрипт пошуку найменшого числа в масиві.
 * Код має працювати для будь-якого масиву чисел.
 * Використовуйте цикл для вирішення задачі.
 */

const numbers = [2, 17, 94, 1, 23, 37, 0, -5]; // -5
let minElement = numbers[0];

for (const number of numbers) {
  if (minElement > number) {
    minElement = number;
  }
}

console.log(minElement);
