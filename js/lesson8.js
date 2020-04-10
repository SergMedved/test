"use stricrt"
/*
function hello() {
  console.log('Hello', this);
}

const person = {
  name: 'Serg',
  age: 43,
  sayHello: hello,
  sayHelloWindow: hello.bind(window),
  logInfo: function (job, phone) {
    console.group(`${this.name} info`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd;
  }
}

const lena = {
  name: 'Elena',
  age: 23
}

const fnLenaInfoLog = person.logInfo.bind(lena, 'Fronend', '8-88-8883434');

fnLenaInfoLog();

*/
/*
const array = [1, 2, 3, 4, 5]

function multiBy(arr, n) {
  return arr.map(i => i* n);
}


Array.prototype.multiBy = function(n) {
    return this.map(i => i* n);
  }

console.log(array.multiBy(5));

function User(name, surname) {
  this.name = name;
  this.surname = surname;
  this.access = ['read'];
}

Object.prototype.userAddAccess = function(newAccess) {
  this.access.push(newAccess);
}

Object.prototype.userDellAccess = function(dellAccess) {
  this.access.map((item, index) => {
    if (item == dellAccess) this.access.splice(index, 1);
  });
}

const sergbear = new User("Sergey", "Gnezdilov");

console.log(sergbear);

sergbear.userAddAccess('write');

console.log(sergbear);
console.log(sergbear.access);

sergbear.userDellAccess('read');

console.log(sergbear);
console.log(sergbear.access);


let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi();
*/
/*
function makeWorker() {
  let name = "Pete";

  return function() {
    console.log(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work();
*/
/*
function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1());
console.log(count)
console.log(counter1());
console.log(counter2());
*/
/*
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
  return x => (x >= a) & (x <= b)
}

function inArray(arr) {
  return x => arr.find(item => item == x)
}

console.log(arr.filter(inBetween(3, 6)));

console.log(arr.filter(inArray([1, 2, 3, 10])));
*/
/*
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(fieldName) {
  return (a, b) => a.fieldName > b.fieldName ? 1 : -1
}

users.sort(byField('age'));

console.log(users);
*/
/*
function makeArmy() {
  let shooters = [];
  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function() { // функция shooter
      
      console.log( j ); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }
  console.log(`Значение i: ${i}`);
  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
*/
/*
function sayHi() {
  console.log("Воскресенье");
}

setTimeout(sayHi, 2000);
console.log("Какой сегодня день?")
*/
/*
function printNumbers1(from, to) {
  var i = from;
  printNumb = setInterval(() => {
    console.log(i);
    i++;
    if (i > to) {
    clearInterval(printNumb);
  }
  }, 1000);

}

printNumbers1(7, 8);

function printNumbers2(from, to) {
  var i = from;
  setTimeout(function go() {
    console.log(i);
    i++;
    if (i <= to) {
      setTimeout(go(), 100);
    };
  }, 1000);
} 


printNumbers2(4, 9)

let i = 0;

setTimeout(() => alert(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
  if (j == 99999999) console.log("Вычисление выполнено")
}
*/
/*
function slow(x) {
  x = x * (x + 45);
  alert(`Called with ${x}`);
  return x;
}

function cashingDecorator(func) {
  let cash = new Map();

  return function(x) {
    if (cash.has(x)) {
      return cash.get(x);
    }

    let result = func(x);

    cash.set(x, result);
    return result;
  }
}

slow = cashingDecorator(slow);

console.log(slow(1));
console.log('Again: ' + slow(1));

console.log(slow(2));
console.log('Again: ' + slow(2));
*/
/*
function slow(x) {
  //сложные вычисления с x
  console.log("Начало вычислений");
  for(i=1; i<1000000000; i++) {
    x = x;
  }
  return x;
}

function cashingDecorator(func) {
  let cash = new Map();

  return function(x) {
    if (cash.has(x)) {
      return cash.get(x);
    } else {
      let result = func(x);
      cash.set(x, result);
      return result;
    }    
  }
}

slow = cashingDecorator(slow);

console.log(slow(6));
console.log(slow(6));

console.log(slow(7));
console.log(slow(7));

console.log(slow(6));
*/
/*
function sayHi() {
  console.log(`Привет ${this.name}`)
}

user = {name: 'Olya'};
admin = {name: 'Kolya'};

sayHi.call(user);
sayHi.call(admin);
*/
/*
let worker = {
  someMethod() {
    return 1;
  },
  slow(x) {
    console.log("Начинаем вычисления");
    for (i = 1; i < 1000000000; i++) {
      x = x * this.someMethod();
    };
    return x;
  }
}

function cashingDecorator(func) {
  let cash = new Map();

  return function(x) {
    if (cash.has(x)) {
      return cash.get(x);
    } else {
      let result = func.call(this, x);
      cash.set(x, result);
      return result;
    }
  }
}

worker.slow = cashingDecorator(worker.slow);

console.log(worker.slow(3));
console.log(worker.slow(3));


console.log(worker.slow(5));
console.log(worker.slow(5));
*/
/*
let worker = {
  slow(min, max) {
    console.log("Начинаем вычисления");
    for (i = 1; i < 1000000000; i++) {
      sum = min + max;
    }
    return sum;
  },
  rowTotals(...arg) {
    let sum = 0;
    for (i =0; i < arg.length; i++) {
      sum = sum + arg[i];
    }
    return sum;
  }
}

function cashingDecorator(func, hash) {
  let cash = new Map;
  
  return function() {
    let key = hash(arguments);

    if (cash.has(key)) {
      return cash.get(key);
    } else {
      let result = func.apply(this, arguments);
      cash.set(key, result);
      return result;
    }
  }
}

function hash (arg) {
  let key = arg[0];
  for (i=1; i < arg.length; i++) {
    key = key + ',' + arg[i];
  }
  return key;
}

worker.slow = cashingDecorator(worker.slow, hash)

console.log(worker.slow(3, 5));
console.log(worker.slow(3, 5));


console.log(worker.slow(6, 9));
console.log(worker.slow(6, 9));

worker.rowTotals = cashingDecorator(worker.rowTotals, hash);

console.log(worker.rowTotals(6, 9, 3, 4));
console.log(worker.rowTotals(6, 9, 3, 4));
*/

/*
function basket() {
  var sum = 0;
  return function(addProd) {
    sum = sum + addProd;
    return sum;
  }
}

let basket1 = basket();
let basket2 = basket();

basket1(5);

basket1(7);

basket2(3);

console.log(basket1(7));

console.log(basket2(7));
*/
/*
function Order(user) {
  this.user = user;
  this.basketProduct = new Map();
  this.totalSum = function() {
    let sum = 0;
    for (let price of this.basketProduct.values()) {
      sum = sum + price;
    }
    return sum;
  }
  this.addProduct = function(product, price) {
    this.basketProduct.set(product, price);
  }
  this.getProduct = function() {
    for (let product of this.basketProduct) {
      console.log(product);
    }
  }
}

let order1 = new Order('Nikolya');



order1.addProduct('cheese', 100);
order1.addProduct('sausage', 200);
order1.addProduct('bread', 30);


console.log(order1.totalSum());

console.log(order1);

console.log(order1.getProduct())
*/

/*
function work(a, b) {
  console.log(a + b);
}

function spy(func) {
  func = func.apply(this, a, b);
  func.calls = [];
  return function(a, b) {
//    console.log(func);
    func.calls.push([a, b]);
//    console.log(func.calls);
    return func(a, b);
  }
}

work = spy(work);

work(2, 4);
work(3, 7);

console.log(work.calls);
console.log(work);
*/
/*
var avgScore = "global avgScore";

function avg (arrayOfScores) {
  var sumOfScore = arrayOfScores.reduce ((prev, cur) => prev + cur);
  this.avgScore = sumOfScore / arrayOfScores.length;
}

var gameController = {
  scores: [20, 34, 55, 46, 77],
  avgScore: null
}

avg (gameController.scores);

console.log(window.avgScore);
console.log(gameController.avgScore);

avgScore = "global avgScore";

avg.call(gameController, gameController.scores);

console.log(window.avgScore);
console.log(gameController.avgScore);
*/
/*
var clientData = {
  id: 094545,
  fullName: "Not Set",
  setUserName: function(firstName, lastName) {
    this.fullName = firstName + " " + lastName;
  }
}

function getUserInput (firstName, lastName, callback, callbackObj) {
  callback.apply (callbackObj, [firstName, lastName]);
}

getUserInput ("Nickolya", "Safonov", clientData.setUserName, clientData);

console.log(clientData.fullName);
*/
/*
function work(a, b) {
  alert( a + b ); // произвольная функция или метод
}

work.calls = [3, 4];

function spy(func) {

  function wrapper(...args) {
    console.log(arguments);
    wrapper.calls.push(args);
    return func.apply(this, arguments);
  }

  wrapper.calls = [];

  return wrapper;
}



work = spy(work);

work(2, 3);
work(4, 3);

console.log(work.calls);
*/

