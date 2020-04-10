"use stricrt"
/*
let frutis = ["Яблоко", "Апельсин", "Слива"];

for (let i = 0; i < frutis.length; i++) {
  console.log(frutis[i]);
}

console.log(frutis);

console.log("Выводим из массива значение: " + frutis.pop());

let newElemArr = "Груша";

console.log("Добавили новое значение: " + newElemArr);
frutis.push("Груша");

console.log(frutis);
*/
/*
let styles = ["Джаз", "Блюз"];
console.log(styles);

styles.push("Рок-н-ролл");
console.log(styles);

styles[Math.ceil( styles.length / 2) - 1] = "Классика";
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift("Рэп", "Рэгги");
console.log(styles);
*/
/*
let arr = [];

let getMaxSubSum = function(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if ( (arr[i] + sum) >= sum ) sum += arr[i];
  }
  return sum;
}

console.log( getMaxSubSum([-1, 2, 3, -9]) );
console.log( getMaxSubSum([2, -1, 2, 3, -9]) );
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) );
console.log( getMaxSubSum([-2, -1, 1, 2]) );
console.log( getMaxSubSum([100, -9, 2, -3, 5]) );
console.log( getMaxSubSum([1, 2, 3]) );
console.log( getMaxSubSum([-1, -2, -3]) );
*/
/*
let arr = ["Я", "Изучаю", "JavaScript", "прямо", "сейчас"];

arr.splice(0,3, "давай", "спать");

console.log(arr);

arrCopy = arr.slice();

console.log(arrCopy);

const array1 = ['a', 'b', 'c'];

array1.forEach(console.log);

let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];

let user = users.find(item => item.id ==1);

console.log(user.name);

let user2 = users.filter(item => item.id < 3);

console.log(user2);

let lengths = ["Hobbit", "Ork", "Gnom"].map(item => item.length);

console.log(lengths);

*/
/*
let names = "Вася, Петя, ИгорЪ";

let arrNames = names.split(', ');

for (let name of arrNames) {
  console.log(`Сообщение будет отправлено: ${name}`);
}

let str = arrNames.join('; ');

console.log(str);

function ucFirst(strEnt) {
  return strEnt[0].toUpperCase() + strEnt.slice(1);
}

function camelize(str) {
  let arr = str.split('-');
  for (i=1; i < arr.length; i++) {
    arr[i] = ucFirst(arr[i]);
  }
  return arr.join('');
}

console.log(camelize('king-kong-king'));
*/

let arr3 = [5, 3, 8, 1];

/*
function filterRange(arr, a, b) {
  arrNew = [];
  if (b > a) {
    c = a;
    a = b;
    b = c;
  }
  console.log(arr);
  for (i = 0; i < arr.length; i++) {
    if (a < arr[i] < b) arrNew.push(arr[i]);
  }
  return arrNew;
}
*/
/*
function filterRange (arr3, a, b) {
  let newArr = arr3.filter((item) => (a <= item) && (item <= b));
  return newArr;
}

let filtered = filterRange(arr3, 1, 2);

console.log(filtered);
*/

/*
function filterRangeInPlace(arr, a, b) {
  arr.forEach((element, index) => {
    if ((a >= element) || (element >= b)) arr.splice(index, 1);
  });
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log(arr);
*/
/*
let arr = [5, 2, 1, -10, 8];

function compare(a, b) {
  if (a < b) return 1;
  if (a == b) return 0;
  if (a > b) return -1;
}

arr.sort(compare);

console.log(arr);
*/

/*
function Calculator() {
  this.name1 = "+";
  this.func1 = (a, b) => a + b;
  this.name2 = "-";
  this.func2 = (a, b) => a - b;
}

function calculate(str) {
  let value = str.split("");
  console.log(value);
  if (value[1] == calc.name1) return calc.func1(+value[0], +value[2]);
  if (value[1] == calc.name2) return calc.func2(+value[0], +value[2]);
}

let calc = new Calculator;



console.log(calculate("1+2"));
console.log(calculate("1-2"));
console.log(calc);
*/
/*
function Calculator() {
  this.name = ["+", "-"];
  this.func = [(a, b) => a + b, (a, b) => a - b];
  this.calculate = (str) => {
    let value = str.split(' ');
    for (let i = 0; i < this.name.length; i++){
      if (this.name[i] == value[1]) return this.func[i](+value[0], +value[2]);
    }
  }
  this.addMethod = (name, func) => {
    this.name.push(name);
    this.func.push(func);
  }
}

*/
/*
function Calculator() {
  this.method = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  }
  this.calculate = (str) => {
    let value = str.split(' ');
    a = +value[0];
    op = value[1];
    b = +value[2];
    if ( (typeof a != "number") || (typeof b != "number") || this.method[op] === undefined || (value.length > 3) ) {
      return "Неверные данные";
    } else {
      return this.method[op](a, b);
    }
  }
  this.addMethod = (name, func) => this.method[name] = func;
}



let calc = new Calculator;

console.log(calc.calculate("4 - 2"));

calc.addMethod("*", (a, b) => a * b);

console.log(calc.calculate("4 * 2"));

console.log(calc.method);
*/
/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map( item => item.name);

console.log(names);
*/

/*
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha];

let usersMapped = users.map(item => item = {fullName: item.name + " " + item.surname, id: item.id});

console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);

console.log(usersMapped);

*/
/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

function sortByAge(arr) {
  arr.sort( (a, b) => a.age > b.age ? 1 : -1);
}

sortByAge(users);

console.log(users);

let arr2 = [1, 2, 3];

function shuffle(arr) {
  arr.sort( (a, b) => (a * Math.random() > b * Math.random()) ? 1 : -1);
}

shuffle(arr2);

console.log(arr2);
*/
/*
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
*/
/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let users = [ vasya, petya, masha ];

function getAverageAge(users) {
  let arrAge = users.map( item => item.age);
  let sumAge = arrAge.reduce((sum, item) => sum + item);
  console.log(sumAge);
  return sumAge / users.length;
}

console.log(getAverageAge(users));

const numbers = [37, 12, 28, 4, 9];
const total = numbers.reduce((total, n) => total + n, 0);
console.log(total); // 90

*/
/*
function unique(arr) {
  let newArr = [];
  arr.forEach( (item) => {
    if ( !newArr.includes(item) ) newArr.push(item);
  });
  return newArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));
*/
/*
function unique(arr) {
  let set = new Set();
  arr.forEach(element => set.add(element) );
  return set;
}
*/
/*
function unique(arr) {
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare, Krishna, :-O
*/
/* ***** Неправильный код
function aclean(arr) {
  let setAnagram = new Set();
  arr.forEach( (item) => {
    let arrItem = item.split('');
    console.log(arrItem);
    anagram = new Map(arrItem);
    setAnagram.add(anagram);
  } );
  let arrAnagram =  Array.from(setAnagram);
  
  console.log(arrAnagram);

  arrAnagram.forEach( (item) => {
    item = item.join('');
  });
  return arrAnagram;
}
*/

function aclean(arr) {
  arrComp = arr.map( (item) => item.split('').sort().join('').toLowerCase() );
  setComp = new Set(arrComp);
  let newArr = [];
  for (let value of setComp) {
    newArr.push(arr.find( item => item.split('').sort().join('').toLowerCase() == value));
  }
  return newArr;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));