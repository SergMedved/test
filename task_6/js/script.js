"use strict"

//************************** */

// let menuItem = document.getElementsByClassName('menu-item'),
//     menu = document.querySelector('.menu');

// console.log(menuItem);

// let div2 = div.cloneNode(true); // клонировать сообщение
// div2.querySelector('strong').innerHTML = 'Всем пока!'; // изменить клонированный элемент

// div.after(div2); // показать клонированный элемент после существующего div

// menu.insertBefore(menuItem[2], menuItem[1]);

// menuItem[4] = menuItem[3].cloneNode(true);
// menuItem[4].innerHTML = 'Пятый пункт';
// menu.insertAdjacentElement('beforeend', menuItem[4]);

//*********************** */

// function* strGenerator() {
//   yield 'H';
//   yield 'e';
//   yield 'l';
//   yield 'l';
//   yield 'o';
// }

// let str = strGenerator();

// import {divide} from './module.js';

// console.log(divide(6, 3));

// Object

let person = {
  name: 'Vladilen',
  age: 25,
  job: 'Fullstack',
  _password: '123'
}

let op = new Proxy(person, {
  get(target, prop) {
    console.log(`Getting prop ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value;
    } else {
      throw new Error(`No '${prop}' filed in target`);
    };
  },
  has(target, prop) {
    return ['name', 'age', 'job'].includes(prop);
  },
  deleteProperty(target, prop) {
    console.log('Deleting... ', prop);
    delete target[prop];
    return true;
  }
})

// function

let log = text => `Log: ${text}`;

let fp = new Proxy(log, {
  apply(target, thisArg, args) {
    console.log('Calling fn...');

    return target.apply(thisArg, args).toUpperCase();
  }
})


// Работа с DOM

document.body.style.background = 'red';

setTimeout(() => document.body.style.background = '', 3000);
