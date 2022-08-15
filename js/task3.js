// todo Площа прямокутника
/*
 * Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.
 */

function getRectArea(dimensions = '1 1') {
  const numbers = dimensions.split(' ');

  const a = Number(numbers[0]);
  const b = Number(numbers[1]);

  return a * b;
}

console.log(getRectArea('8 11'));
console.log(getRectArea('80 31'));
console.log(getRectArea('45 67'));
console.log(getRectArea());
