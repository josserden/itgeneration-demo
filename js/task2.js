// todo Менше з чисел
/*
 * Напиши функцію min(a,b), яка повертає найменше з чисел a та b.
 */

function min(a, b) {
  // if (a < b) {
  //   return a;
  // }

  // return b;

  // return Math.min(a, b);

  return a < b ? a : b;
}

console.log(min(5, 10));
console.log(min(50, 10));
