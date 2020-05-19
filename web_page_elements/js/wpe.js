"use strict";
let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.wrapper .heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//   heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach((item, i, arr) => {
//   item.style.backgroundColor = 'blue';
// });

let div = document.createElement('div'),
    text = document.createTextNode('записал текст');

div.classList.add('black');

// document.body.appendChild(div);

// wrapper.appendChild('div');

// div.innerHTML = 'Hello World!';

div.textContent = 'Hello World!';

document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);

document.body.replaceChild(btn[1], circle[1]);

/************ */

let user = {
  name: "Pete",
  age: 34
};

for (let div of document.querySelectorAll('[show-info')) {
  let field = div.getAttribute('show-info');
  div.innerHTML = "<b>" + user[field] + "</b>";
}