// todo Індекс маси тіла
/*
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини за метри.

* Вага та висота будуть спеціально передані як рядки. Нецілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

* Індекс маси тіла необхідно округлити до однієї цифри після коми;
 */

// function calcBMI(weight, height) {
//   const normalizedWeight = weight.replace(',', '.');
//   const normalizedHeight = height.replace(',', '.');

//   let result = parseFloat(normalizedWeight) / parseFloat(normalizedHeight) ** 2;

//   return result.toFixed(1);
// }

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8

function filterArray(numbers, value) {
  const filteredNumbers = [];

  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
}

console.log(filterArray([24, 41, 76], 50));
// [ 4, 5 ]
// [ 5 ]
// []
// [ 41, 76 ]
// [ 24, 41, 76 ]
// for (let number of numbers) --- это выводится в консоль ошибкой
// TypeError: numbers is not iterable
