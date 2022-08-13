// todo Масиви та рядки
/*
 * Напиши скрипт, який «розвертає» рядок (зворотний порядок літер) і виводить його в консоль.
 */

const string = 'Welcome to the future';

const array = string.split('');
const reversedArray = array.reverse();
const newString = reversedArray.join('');

console.log(newString);

// console.log(string.split('').reverse().join(''));

// let newString = '';

// for (let i = string.length - 1; i >= 0; i -= 1) {
//   const letter = string[i];

//   newString += letter;
// }

// console.log(newString);
