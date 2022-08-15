// todo Форматування часу
/*
 * Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.
 */

function formatTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  const convertedHours = hours < 10 ? `0${hours}` : hours;
  const convertedMins = mins < 10 ? `0${mins}` : mins;

  console.log(`${convertedHours} : ${convertedMins}`);
}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"
