"use strict";
/*
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}

let userIvan = new User("Иван");
userIvan.sayHi();
*/
/*
class User {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Имя слишком короткое");
      return;
    }
    this._name = value;
  }
}

*/
/*
class Clock {
  start() {
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    console.log(hours + ":" + minutes + ":" + seconds);
    return setInterval(this.start , 1000);
  }
}

let clock = new Clock();

clock.start();
*/ 
/*
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    alert(`${this.name} бежит со скоростью ${this.speed}`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} стоит.`);
  }
}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} прячется!`);
  }
  stop() {
    super.stop();
    this.hide();
  }
}

let animal = new Animal("Мой питомец");
let rabbit = new Rabbit("Мой кролик");

rabbit.stop();
*/
/*
class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
alert(rabbit.name);
*/
/*
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision=1000 } = options;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
};

let clock = new Clock({
  template: 'h:m:s'
});
clock.start();

let lowResolutionClock = new ExtendedClock({
  template: 'h:m:s',
  precision: 10000
});

lowResolutionClock.start();
*/
/*
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static creatTodays() {
    return new this("Сегоднящний дайджест", new Date());
  }
}

let aricle = Article.creatTodays();
console.log(aricle.title + " " + aricle.date);

*/
/*
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

function outputArr(arr) {
  arr.forEach(element => console.log(element));
}

let article = [
  new Article("HTML", new Date(2020, 2, 1)),
  new Article("CSS", new Date(2020, 0, 22)),
  new Article("JavaScript", new Date(2020, 1, 11))
];

outputArr(article);

article.sort(Article.compare);

outputArr(article);
*/
/*
class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return this.name + " " + this.surname;
  }
}

class Student extends User {
  constructor (name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  getCourse() {
    let newDate = new Date();
    let course = (newDate.getMonth() < 8) ? newDate.getFullYear() - this.year : newDate.getFullYear() - this.year + 1;
    return course + "-й курс";
  }
}

let student = new Student("Василий", "Корягин", 2019);
*/

//// Задача на старые темы
/*
function sequence(start, step) {
  return function() {
    let value = start;
    start = start + step;
    return value;
  }
}

function take(gen, x) {
  let arr = [];
  for (let i = 0; i < x; i++) {
    arr[i] = gen();
  }
  return arr;
}

var generator = sequence(10, 3);
var generator2 = sequence(7, 1);

var gen2 = sequence(0, 2);
console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]
*/
/*
function map(fn, array) {
  return array.map(fn);
}

function square(x) {
  return x * x;
}

console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []
*/
/*
function sequence(start, step) {
  return function() {
      let value = start;
      start = start + step;
      return value;
    }
}

function square(x) {return x * x}

function fmap(a, gen) {
  return function() {
    let x = gen.apply(this, arguments);
    return a(x);
  }
}

var gen = sequence(1, 1);

let squareGen = fmap(square, gen);

console.log(squareGen()); // 1
console.log(squareGen()); // 4
console.log(squareGen()); // 9
console.log(squareGen()); // 16

let gen2 = sequence(5, 10);

let squareGen2 = fmap(square, gen2);

console.log(squareGen2());
console.log(squareGen2());
console.log(squareGen2());
console.log(squareGen2());
*/
/*
function add(a, b) {
  return a + b;
}

function square(x) {return x * x}

function fmap(a, gen) {
  return function(...arg) {
    let x = gen.apply(this, arguments);
    return a(x);
  }
}

let squareAdd = fmap(square, add);

console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2
*/
/// Задача 5
/*
function add(...args) {
  let sumPart = 0;
  for (let arg of args) sumPart += +arg;
  return function(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum + sumPart;
  }
}

function mult(...args) {
  let mulPart = 1;
  for (let arg of args) mulPart *= arg;
  return function(...args) {
    let mult = 1;
    for (let arg of args) mult *= arg;
    return mult * mulPart;
  }
}

function partial(fn, ...args) {
  return fn(...args);
};

var add5 = partial(add, 5); // Мы получили функцию с 1 аргументом, которая прибавляет к любому числу 5

console.log(add5(2)); // 7
console.log(add5(10)); // 15
console.log(add5(8)); // 13

var mult23 = partial(mult, 2, 3); // мы зафиксировали первые 2 аргумента mult() как 2 и 3

console.log(mult23(4, 5)); // 2*3*4*5 = 120
console.log(mult23(1, 1)); // 2*3*1*1 = 6
*/
/*
function test(a, b, c) {
  return 'a=' + a + ',b=' + b + ',c=' + c;
}

function partialAny(fn, ...args) {
  return function(...argsPart) {
    console.log(args[2]);
    for (let argPart of argsPart) {
      console.log(argPart);
      for (let i = 0; i < 3; i++) {
        console.log(args[i]);
        if (args[i] == undefined) {
          args[i] = argPart;
          return ;
        }
        
      }
    }
    //return console.log(args[0] + ' ' + args[1] + ' ' + args[2]);
    return fn(...args);
  }
}

var test1_3 = partialAny(test, 1, undefined, 3);
test1_3(5);
/*
console.log(test1_3()); // a=1,b=5,c=3
test1_3(5);
function test2(x) {
  return "x = " + x;
}
 
function test2Return(fn, x) {
  return function (x) {
    return fn(x);
  }
}

let test2_3 = test2Return(test2, 3);
test2_3();
console.log(test2_3());
*/
/*
let person = {
  name: "John",
  age: 25,
  isMarried: false
};

console.log(person.age);
console.log(person.name);
*/


console.log(0 || "" || 2 || undefined || true || falsе);