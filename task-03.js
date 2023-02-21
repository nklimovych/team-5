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
  const arr = [];
  for (var key in obj) {
    if (key.length === 5) {
      arr.push(key);
    }
    if (obj[key].length === 5) {
      arr.push(obj[key]);
    }
  }
  return arr;
}

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


// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

function buildFun(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(function () {
      console.log(i);
      return i;
    });
  }
  return res;
}

/*
Функція buildFun створює масив функцій, які будуть виводити та повертати число n-1. Кожна функція зберігає посилання 
на змінну i, яка змінюється під час виконання циклу for. Тому кожна функція виводить та повертає останнє значення 
змінної i, яке було присвоєне в останньому повторенні циклу.
*/


// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return super.introduce() + "  Meow meow!";
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status, master);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}

/*
Ці функції описують класи тварин - Shark, Cat і Dog, які наслідуються від класу Animal:

class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

Кожен клас має свій конструктор, який встановлює властивості для об'єкту, створеного з класу. Наприклад, 
конструктор класу Shark встановлює name, age, та status "акули", а кількість ніг встановлюється як 0, оскільки 
акула - це риба, і в неї немає ніг (Чомусь автор задачі таких не бачив... З чого б це 😅).

Клас Cat також встановлює name, age, ат status "кота", а кількість ніг встановлюється в 4, оскільки кіт, на відміну 
від акули десь взяв чотири лапки. Клас Cat також має метод introduce(), який перевизначає батьківський метод introduce()
класу Animal. Метод introduce() класу Cat ретурнить рядок, який містить батьківський метод introduce() та додає 
"  Meow meow!" (тут автору було важливо два пробіли спочатку, ну нехай).

Клас Dog встановлює name, age, status, та master "собаки", а кількість ніг також встановлюється в 4, оскільки собака
також має чотири лапки. Клас Dog має додаткову властивість master (господар), яка встановлюється в конструкторі, 
та метод greetMaster(), який повертає рядок з привітанням господаря - `Hello ${this.master}`.
*/
