"use strict"
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

while (i) console.log(i--);

for (let i=0; i < 3; i++) console.log;

function showMessage() {
    console.log('Всем привет!');
}
showMessage();

function showMessage1(text) {
    from = '*' + from + '*';
    console.log(from + ': ' + text);
}

function sum(a, b) {
    return a + b;
}

let from = 'Вася';
showMessage1(from, 'привет');
console.log(from);
console.log(sum(3, 8));

function getAge() {
    return prompt('Сколько вам лет?', '');
}

/*
function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

let age = getAge();
if (checkAge(age) ) {
    alert('Доступ получен.')
} else {
    alert('В доступе отказано.')
}
*/
/*
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert('Вы согласны.');
}

function showCancel() {
    alert('Вы отказались.');
}

ask('Вы согласны?', showOk, showCancel);
*/

let multiplication = (a, b) => a * b;
console.log(multiplication(4, 8));

let squareTrim = (a, b, c) => {
    if (c===0) return alert('Аргумент c не должен равняться нулю.');
    let res = (a + b) / c;
    return res;
}
let a=+prompt('введи a:', '0');
let b=+prompt('введи b:', '0');
let c=+prompt('введи c:', '0');

console.log(squareTrim(a, b, c));
