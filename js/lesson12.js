"use strict";

let div = document.querySelector('[data-widget-name]');

console.log(div.getAttribute('data-widget-name'));

let list = document.getElementsByName('list');

let aList = list[0].nextElementSibling.getElementsByTagName('a');

for (let i = 0; i < aList.length; i++) {
  let link = aList[i].getAttribute('href');
  if (link.indexOf('://') !== -1) {
    if (link.indexOf('http://internal.com') == -1) {
      aList[i].style.color = 'orange';
    }
  }
}

let divAlert = document.createElement('div');
divAlert.className = "alert";
divAlert.innerHTML = "<strong>Всем привет!</strong> Вы прочитали очень важное сообщение.";

document.body.append(divAlert);
setTimeout(() => divAlert.remove(), 3000);

//  Создайте функцию clear(elem), которая удаляет всё содержимое из elem.

function clear(elem) {
  let elemList = elem.getElementsByTagName('*');
  let count = elemList.length;
  for (let i = 0; i < count; i++) {
    elemList[0].remove();
  };
}

// Напишите интерфейс для создания списка.

// Для каждого пункта:

// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте элемент <li> и добавляйте его к <ul>.
// Процесс прерывается, когда пользователь нажимает Esc или вводит пустую строку.
// Все элементы должны создаваться динамически.

// Если пользователь вводит HTML-теги -– пусть в списке они показываются как обычный текст.

function addElem() {
  let userList = document.getElementById('user-list');
  let elem = prompt("Добавьте содержимое пункта", '');
  console.log(elem);
  if (elem !== '' & elem !== null) {
    let li = document.createElement('li');
    li.innerText = elem;
    userList.append(li);
    addElem();
  } else return;
}

addElem();

// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.
// Например:

let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

let data2 = {};

let container = document.getElementById('container');

function createTree(elem, obj) {
  if (Object.keys(obj) !== 0) {
    let arrObjKey = Object.keys(obj);
  }
}