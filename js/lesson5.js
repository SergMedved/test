"use stricrt"
/*
let user = {
  name: "John",
  age: 30
};

console.log(user);
console.log(user.name + ' полных ' + user.age + ' лет.');
console.log(`$user.name полных $user.age лет.`);

user.isAdmin = true;

console.log(user);

delete user.name;
delete user.age;
delete user.isAdmin;

console.log(user);

function makeUser(name, age) {
  return {
    name : name,
    age : age
  };
}

let user2 = makeUser("Jonh", 30);

console.log(user2.name);


let user = {};

console.log(user);

user.name = "John";

console.log(user);

user.surname = "Smith";

console.log(user);

user.name = "Peter";

console.log(user);

delete user.name;

console.log(user);

console.log(user === undefined);


for (let key in user) {
  console.log(user);
  console.log(user[key]);
}

let isEmpty = function(obj) {
  for (key in obj) {
    return false;
  }
  return true;
}

let schedule = {};

console.log(isEmpty(schedule));

schedule["8:30"] = "get up";

console.log(isEmpty(schedule));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};


let sum = salaryAmount(salaries);

function salaryAmount(salaries) {
  let sum = 0;
  for  (key in salaries) {
    sum = sum + salaries[key];
  }
  return sum;
}

console.log(sum);

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);

function multiplyNumeric(menu) {
  for (key in menu) {
    if (typeof(menu[key]) === "number") {
      menu[key]*=2;
    }
  }
}


let user = {
  name: "John",
  age: 30,
};

console.log(user);

let id = Symbol("id");

user[id] = 1;

console.log(user);
*/
/*
let calculator = {
  a: 0,
  b: 0,
  read() {
    this.a = +prompt('Введите значение 1-го числа: ', '');
    this.b = +prompt('Введите значение 2-го числа: ', '');
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
}

calculator.read();

alert("Сумма введенных значений равна " + calculator.sum());
alert("Произведение введенных значений равно " + calculator.mul());
*/

/*

let str = "Привет";

console.log(str.toUpperCase());

let n = 3.256879;

console.log(n.toFixed(4));

console.log( 9999999999999999);

console.log( parseInt('110', 2) );

*/

/*

let a = +prompt('Введите число a:', '0');
let b = +prompt('Введите число b:', '0');

let sum = a + b;

alert ('Сумма чисел a и b равна: ' + sum);

*/

/*
let a = prompt('Ведите значение: ', '');

if ( (a === '') || (typeof(a) == 'object')) console.log('Null');
console.log(+a);
*/

/*
function readNumber() {
  let a = prompt('Ведите значение: ', '');
  
  if ( (a === '') || (typeof(a) == 'object')) return null;
  if ( isNaN(a) ) readNumber();
  
  return (+(a));
}

console.log( readNumber() );
*/



function random(min, max) {
  let x = Math.random() * 10;
  while ( (x <= min) || (x > max)) {
    x = Math.random() * 10;
  }
  return x;
}

function randomInteger(min, max) {
  let x = Math.random() * 10;
  while ( (x < min) || (x > max)) {
    x = Math.random() * 10;
  }
  x = Math.round(x.toFixed(2));
  return x;
}

let min = 1;
let max = 5;
console.log(random(min, max));
console.log(randomInteger(min, max));

let guestList = `Список гостей:
1. Иван
2. Андрей
3. Ольга
`;

let str = 'Ослик Иа-Иа посмотрел на виадук';

let target = 'Иа';

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if ( foundPos == (-1) ) break;
  console.log(`Найдено тут ${foundPos}`);
  pos = foundPos + 1;
}

let say = 'Good Morning';

for (let char of say) {
  console.log(char);
}

console.log(say.toUpperCase());
console.log(say.toLowerCase());

console.log(say.slice(0, 4));
console.log(say.slice(5));

let str1 = '';

for (let i = 65; i <= 220; i++) {
  str1 += String.fromCodePoint(i);
}

console.log(str1);

function ucFirst(str2) {
  return str2 = str2[0].toUpperCase() + str2.slice(1);
}

console.log( ucFirst("кузя") );

function chekSpam1(str3) {
  if ( str3.includes("viagra") || str3.includes("XXX") ) {
    return true;
  } else {
    return false;
  }
}

function chekSpam2(str3) {
  return str3.includes('viagra') || str3.includes('xxx');
}

console.log(chekSpam1("I bought viagra"));
console.log(chekSpam2("I bought viagra"));

function truncate(str4, maxlength) {
  if ( str4.length > maxlength) {
    return str4.slice(0, maxlength - 1) + "…";
  } else {
    return str4;
  }
}

console.log( truncate("Всем доброе утро и доброго дня!", 20) );
console.log( truncate("Добрый вечер!", 19) );

function extractCurrencyValue(str5) {
  return +str5.slice(1);
}

console.log(extractCurrencyValue("$200") === 200);