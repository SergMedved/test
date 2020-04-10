"use strict"
/*
function sum(...args) {
  let sum = 0;
  for (let x of args) sum += x;
  return sum;
}

console.log(sum(4, 2, 7));
*/
/*
function f(x) {
  alert(x);
}

function delay(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  }
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);


f1500('test');
*/
/*
const user = {
  name: 'Вася',
  sayHi(appeal) {
    console.log(`${appeal} ${this.name}`)
  }
}

let say = user.sayHi.bind(user);

setTimeout(say, 3000, 'Пока');
*/
/*
function mul(a, b) {
  return console.log(a * b);
}

let double = mul.bind(null, 2);
let triple = mul.bind(null, 3);

double(2);
double(5);

triple(3);
triple(5);
*/
/*
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?
*/
/*
let user = {
  name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log(descriptor);
*/
/*
let user = {
  name: "John",
  surname: "Smith",
  get fullName() {
    return this.name + " " + this.surname;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

console.log(user.fullName);
console.log(user);

user.fullName = "Cert Cobain";
console.log(user);
*/
/*
let user = {
  get name() {
    return this._name;
  },
  set name(value) {
    this._name = value;
  }
};

user.name = "Nickolya";

console.log(user.name);
*/