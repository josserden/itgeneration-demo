// todo Колекція курсів (includes, indexOf, push тощо)

/*
 * Напишіть функції для роботи з колекцією навчальних курсів courses:

* addCourse(course) - додає курс до кінця колекції
* removeCourse(course) - видаляє курс із колекції
* updateCourse(oldCourse, newCourse) - змінює ім'я на нове
 */

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function getUniqueCourse(course) {
  return courses.includes(course);
}

function addCourse(course) {
  if (getUniqueCourse(course)) {
    console.log('Такий курс вже існує');
    return;
  }

  courses.push(course);
}

function removeCourse(course) {
  if (!getUniqueCourse(course)) {
    console.log('Курс не знайдено');
    return;
  }

  for (const name of courses) {
    if (name === course) {
      courses.splice(courses.indexOf(name), 1);
    }
  }
}

function updateCourse(oldName, newName) {
  if (!getUniqueCourse(oldName)) {
    console.log('Курс не знайдено');
    return;
  }

  for (const name of courses) {
    if (name === oldName) {
      courses.splice(courses.indexOf(name), 1, newName);
    }
  }
}

addCourse('Express');
// ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'Такий курс вже існує'

removeCourse('React');
// ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Курс не знайдено'

console.log(updateCourse('Express', 'NestJS'));
console.table(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
