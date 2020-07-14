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
  if (Object.keys(obj).length !== 0) {
    let ul = document.createElement('ul');
    elem.append(ul);
    let arrObjKey = Object.keys(obj);
    arrObjKey.forEach(element => {
      let li = document.createElement('li');
      li.innerText = element;
      elem.lastChild.append(li);
      if (Object.keys(obj[element]).length !== 0) {
        createTree(elem.lastChild, obj[element]);
      } else {
        return;
      };
    });
  } else {
    return;
  }
}

createTree(container, data);

// Выведите список потомков в дереве
// важность: 5
// Есть дерево, организованное в виде вложенных списков ul/li.

// Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.

let tree = document.getElementById('tree');
function countElemChild(content) {
  let collectionElem = content.getElementsByTagName('li');
  console.log(collectionElem);
  for (let elem of collectionElem) {
//    console.log(elem);
    if (elem.getElementsByTagName('li').length > 0) {
      console.log(elem.getElementsByTagName('li').length);
      console.log(elem.firstChild);
      let text = "(" + elem.getElementsByTagName('li').length + ")";
      console.log(text);
      elem.firstChild.textContent += text;
    }
  };
  return true;
}

countElemChild(tree);

// Создайте календарь в виде таблицы
// важность: 4
// Напишите функцию createCalendar(elem, year, month).

// Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.

// Календарь должен быть таблицей, где неделя – это <tr>, а день – это <td>. У таблицы должен быть заголовок с названиями дней недели, каждый день – <th>, первым днём недели должен быть понедельник.

// Например, createCalendar(cal, 2012, 9) сгенерирует в cal следующий календарь:



function createCalendar(elem, year, month) {
  let daysWeek = ['пн', 'вт', 'ср', 'чт', 'пн', 'сб', 'вс'];
  let firstDay = new Date(+year, +month, 1);
  if (firstDay.getDay() == 0) {
    var calenFirstDay = 7;
  }
  else {
    var calenFirstDay = firstDay.getDay();
  };
  let calendar = document.getElementById(elem);
  let table = document.createElement('table');
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  for (let item of daysWeek) {
    console.log(item);
    td = document.createElement('td');
    td.innerHTML = item;
    tr.append(td);
  };
  table.append(tr);
  let daysInMonth = 33 - new Date(year, month, 33).getDate();
  console.log(daysInMonth);
  let day = 1;
  while (day <= daysInMonth) {
    tr = document.createElement('tr');
    for (let i = 1; i < 8; i++) {
      console.log(day);
      if (day > daysInMonth) break;
      if (i >= calenFirstDay) {
        calenFirstDay = 1;
        td = document.createElement('td');
        td.innerHTML = day;
        tr.append(td);
        day++;
      } else {
        td = document.createElement('td');
        td.innerHTML = '_';
        tr.append(td);
      };
    };
    table.append(tr);
  };

  console.log(calenFirstDay);
  calendar.append(table);
}



createCalendar('calendar', '2020', '05');