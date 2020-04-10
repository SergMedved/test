"use strict"
/*
let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
}

console.log(admin.fullName);
console.log(admin);

admin.fullName = "Alice Cooper";
console.log(admin.fullName);

console.log(user);
console.log(admin);
*/
/*
let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

console.log(pockets.pen);
console.log(pockets.glasses);
*/
/*
let hamster = {
  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  stomach: [],
  __proto__: hamster
};

let lazy = {
  stomach: [],
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert( lazy.stomach ); // apple
*/
/*
function Rabbit() {}

Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

console.log(Rabbit.prototype)
console.log(rabbit.eats);

Rabbit.prototype = {};

console.log(Rabbit.prototype)
console.log(rabbit.eats);

let rabbit2 = new Rabbit();

Rabbit.prototype = {
  eats: false,
  constructor: Rabbit
};

let rabbit3 = new Rabbit();


console.log(rabbit2.eats);
console.log(rabbit3.eats);
console.log(Rabbit.prototype);
*/
/*
function f() {
  alert("Hello!");
}

Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
}

f.defer(1000); // выведет "Hello!" через 1 секунду
*/
/*
function f(a, b) {
  alert( a + b );
}

Function.prototype.defer = function(ms) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, arguments), ms);
  }
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
*/
/*
let animal = {
  eats: true
};

let rabbit = Object.create(animal, {
  jumps: {
    value: true
  }
});

let fullClonRabbit = Object.create(Object.getPrototypeOf(animal), Object.getOwnPropertyDescriptor(animal));
*/
/*
let obj = Object.create(null);
let key = prompt("What's the key?", "__proto__");
obj[key] = "some value";

alert(obj[key]);
*/
/*
let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join();
    }
  }
});
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

console.log(dictionary);
alert(dictionary);
*/

//*************** Внутренний мир javascript: объекты и прототипы (от Лаврика) ***************/
/*
let cat = {
  length: 0.5,
  age: 10,
  eat: function() {
    alert (this.age);
  }
}
*/
/*
class Cat {
  constructor() {
    this.length = 0.5;
    this.age = 10;
  }
  eat() {
    alert (this.age);
  }
}

var cat = new Cat();

console.log(cat);
*/  
/*
function Rabbit(name) {
  this.name = name;
  alert(name);
}

let rabbit = new Rabbit("White Rabbit");

let rabbit2 = new rabbit.constructor("Black Rabbit");
*/
/*
function Rabbit() {}

Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

console.log(rabbit.eats);

Rabbit.prototype.eats = false; 

console.log(rabbit.eats);

delete Rabbit.prototype.eats;

console.log(rabbit.eats);
*/
/*
String.prototype.show = function() {
  alert(this);
}

"BOOM".show();
*/

function f() {
  alert("Hello");
}

Function.prototype.defer