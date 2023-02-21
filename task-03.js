// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

class SmallestIntegerFinder {
  findSmallestInt = (args) => Math.min(...args);
}

/*
Клас SmallestIntegerFinder, який містить метод findSmallestInt повертає найменше ціле число 
з переданого масиву. В даному варіанті використовується синтаксис полів класів (Class Fields), 
що є частиною сучасних стандартів JavaScript.

Зокрема, в рядку findSmallestInt = (args) => Math.min(...args) використовується стрілочна функція, 
яка присвоює методу findSmallestInt властивість-функцію. Таким чином, при створенні об'єкту цього 
класу метод findSmallestInt буде доступний для виклику. Цей синтаксис дозволяє більш короткий та 
зручний запис класів і методів, що робить код більш читабельним та зрозумілим.
*/

// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

const circleCircumference = (circle) => 2 * Math.PI * circle.radius;

/*
Ця функція використовуючи формулу довжини кола (C = 2πr), обчислює його. Вона очікує об'єкт circle, 
який повинен містити властивість radius, що представляє радіус кола. Використовуючи його, обчислюється 
довжина кола за допомогою вище вказаної формули. Як і в попередній задачі використано стрілочну функцію.
*/


// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function giveMeFive(obj) {
  let result = [];
  for (let key in obj) {
    key.length === 5 && result.push(key);
    obj[key].length === 5 && result.push(obj[key]);
  }
  return result;
}

/*
Функція працює наступним чином. Створюється порожній масив result, який буде містити всі ключі та значення 
об'єкта, які мають довжину 5 знаків. Запускається цикл for...in, який проходиться по всіх ключах об'єкта obj. 
В кожній ітерації циклу перевіряється, чи має ключ або значення довжину 5 знаків. Якщо так, то ключ (або 
значення) додається до масиву result. Після того, як цикл завершить свою роботу, функція повертає масив result, 
що містить всі ключі та значення об'єкта, які мають довжину 5 знаків.

Умова key.length === 5 && result.push(key) означає, що якщо довжина ключа key дорівнює 5, то до масиву 
result додається цей ключ. Аналогічно, з умовою obj[key].length === 5 && result.push(obj[key]).
*/