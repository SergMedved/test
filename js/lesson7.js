"use stricrt"

// Задача моя). 
// Имеется список пользователей
// let users = [vasya, petya, igor]
// У каждого сформирована корзина покупок
/**** 
let vasya = {
  mobile: 12000,
  laptop: 18000,
};
let petya = {
  keyboard: 5000,
  pc: 45000,
}
let igor = {
  mouse: 1000,
  fleshUsb: 550,
  router: 2200,
}
****/
// Найти того, кто готов заплатить больше всех
/*
let vasya = {
  mobile: 12000,
  laptop: 18000,
};
let petya = {
  keyboard: 5000,
  pc: 45000,
};
let igor = {
  mouse: 1000,
  fleshUsb: 550,
  router: 2200,
};

let users = [vasya, petya, igor];

function maxPurchase(arr) {
  let max = 0;
  let userMax = {};
  arr.forEach( (user) => {
    let sum = 0;
    for (let key in user) {sum = sum + user[key]};
    console.log('max = ' + max);
    console.log('sum = ' + sum);
    if (sum > max) {
      max = sum;
      userMax = user;
    };
  });
  return userMax;
};

console.log(maxPurchase(users));
*/

// 1. Заполнить массив нулями, кроме первого и последнего элементов, которые должны быть равны единице.

/*
function arrFilling(quantity) {
  let arr = [];
  for (let i = 0; i < quantity; i++) {
    if ( (i == 0) || (i == quantity - 1) ) {
      arr[i] = 1;
    } else {
      arr[i] = 0;
    }
  }
  return arr;
}

console.log(arrFilling(10));
*/

// 2. Заполнить массив нулями и единицами, при этом данные значения чередуются, начиная с нуля.

/*
function arrFilling(quantity) {
  let arr = [];
  for (let i = 0; i < quantity; i++) {
    if ( i % 2 == 0) {
      arr[i] = 0;
    } else {
      arr[i] = 1;
    }
  }
  return arr;
}

console.log(arrFilling(15));
*/

// 3. Заполнить массив последовательными нечетными числами, начиная с единицы.

/*
function arrFilling(quantity) {
  let arr = [1];
  for (let i = 1; i < quantity; i++) {
    arr[i] = arr[i-1] + 2;
    }
  return arr;
}

console.log(arrFilling(10));
*/

// 4. Сформировать массив из элементов арифметической прогрессии с заданным первым элементом x и разностью d.

/*
function arrFilling(quantity, x, d) {
  let arr = [x];
  for (let i = 1; i < quantity; i++) {
    arr[i] = arr[i-1] + d;
    }
  return arr;
}

console.log(arrFilling(10, 0, 3));
*/

// 5. Сформировать возрастающий массив из четных чисел.

/*
function arrFilling(quantity) {
  let arr = [2];
  for (let i = 1; i < quantity; i++) {
    arr[i] = arr[i-1] + 2;
    }
  return arr;
}

console.log(arrFilling(10));
*/

// 6. Сформировать убывающий массив из чисел, которые делятся на 3.
/*
function arrFilling(quantity) {
  let arr = [3];
  for (let i = 1; i < quantity; i++) {
    arr[i] = arr[i-1] + 3;
    }
  return arr.reverse();
}

console.log(arrFilling(10));
*/

// Удвоить цены в обЪекте
/*
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  Object.entries(prices).map( ([key, value]) => [key, value * 2] )
);

console.log(doublePrices);
*/

/***********
Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.

Например:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650
***********/
// Рещение
/*
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(salaries) {
  let sum = 0;
  for(value of Object.values(salaries)) sum += value;
  return sum;
}

console.log(sumSalaries(salaries));
*/

/***************
*        Напишите функцию count(obj), которая возвращает количество свойств объекта:
*
*        let user = {
*          name: 'John',
*          age: 30
*        };
*
*        alert( count(user) ); // 2
*        Постарайтесь сделать код как можно короче.
*
*        P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».
*
 ***************/
/* Рещение
function count(obj) {
  return Object.keys(obj).length;
}

let user = {
  name: 'John',
  age: 30
};

console.log(count(user));
*/
/*
У нас есть объект:

let user = {
  name: "John",
  years: 30
};
Напишите деструктурирующее присваивание, которое:

свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
*/
/*
let user = { name: "John", years: 30 };

let {name, years: age, isAdmin = false} = user;

console.log(isAdmin);
*/
/***********
У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

Открыть песочницу с тестами для задачи.
************/
/*** Решение
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
  "Nick": 500
};

function topSalary(obj) {
  let arr = Object.entries(obj);
  if (arr.length > 0) {
    let name, max = 0;
    arr.forEach(item => {
      if ( item[1] > max) {
        max = item[1];
        name = item[0];
      }
    });
    return name;
  } else return null;
}

console.log(topSalary(salaries));

 */
/*
 let date = new Date();

 console.log(date.getTimezoneOffset());
 */
/*
 let user = {
   name: "John",
   age: 30,
   toString() {
     return `{name: "${this.name}", age: ${this.age}}`
   }
 }

 console.log(user);
 console.log(user.toString());
 
 let student = {
   name: 'John',
   age: 30,
   isAdmin: false,
   courses: ['html', 'css', 'js'],
   wife: null
 };

 let json = JSON.stringify(student, null, 2);

 console.log(json);
 */

 /*** 
Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
};
 ***/
////Решение
/*
let user = {
  name: "Василий Иванович",
  age: 35
};

let json = JSON.stringify(user);
console.log(json);

let jsonToObj = JSON.parse(json);
console.log(jsonToObj);
*/

/*****
 Рекурсия и стэк
 *****/
/*
 let company = {
   sales: [{
     name: 'John',
     salary: 1000
   }, {
    name: 'Alice',
    salary: 600
   }],

   development: {
     sites: [{
      name: 'Peter',
      salary: 2000
     }, {
      name: 'Alex',
      salary: 1800
     }], 

     internals: [{
      name: 'Jack',
      salary: 1300
     }]
   }
 };

 function sumSalaries(departament) {
   if (Array.isArray(departament)) {
     return departament.reduce( (prev, current) => prev + current.salary, 0);
   } else {
     let sum = 0;
     for (let subdep of Object.values(departament)) {
       sum += sumSalaries(subdep);
     }
     return sum;
   }
 }

 console.log(sumSalaries(company));

*/
/*
function sumTo(n) {
  if (n === 1) {
    return n;
  } else {
    return  n + sumTo(n-1);
  }
}

console.log(sumTo(100));
*/

// ******* Вычислить факториал
/*
function factorial(n) {
  return (n == 1) ? n : n * factorial(n-1);
}

console.log(factorial(9));
*/
/*
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
*/
/*
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  console.log(list.value);
  if (list.next) printList(list.next);
}

printList(list);

function printListBack(list) {
  if (list.next) printListBack(list.next);
  console.log(list.value);
}

printListBack(list);
*/
