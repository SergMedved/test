"use strict"
// кнопка "Начать расчет"
let startBtn = document.getElementById('start');
// блоки value
let budgetValue = document.getElementsByClassName('budget-value')[0];
let daybudgetValue = document.getElementsByClassName('daybudget-value')[0];
let levelValue = document.getElementsByClassName('level-value')[0];
let expensesValue = document.getElementsByClassName('expenses-value')[0];
let optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
let incomeValue = document.getElementsByClassName('income-value')[0];
let monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0];
let yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];
// Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
let expensesItem = document.querySelectorAll('.expenses-item');
// Кнопки утвердить
let expensesItemBtn = document.querySelector('.expenses-item-btn');
let optionalExpensesBtn = document.querySelector('.optional-expenses-btn');
// Кнопка расчитать
let countBudgetBtn = document.querySelector('.count-budget-btn');
// поля для ввода необязательных расходов
let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');
// статьи возможного дохода
let chooseIncome = document.querySelector('.choose-income');
// чекбокс
let savings = document.querySelector('#savings');
// сумма
let chooseSum = document.querySelector('.choose-sum');
// процент
let choosePercent = document.querySelector('.choose-percent');
// год
let yearValue = document.querySelector('.year-value');
// месяц
let monthValue = document.querySelector('.month-value');
// день
let dayValue = document.querySelector('.day-value');

let money, time;

startBtn.addEventListener('click', function() {
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
  money = +prompt("Ваш бюджет на месяц?", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
  appData.budget = money;
  appData.timeDate = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesItemBtn.addEventListener('click', function() {
  let sum = 0;
  for (let i = 0; i < expensesItem.length; i++) {
    console.log(i);
    let a = expensesItem[i].value;
    let b = expensesItem[++i].value;
    console.log(i);
    if ( (typeof(a)) != null && (typeof(b)) != null && (a != '') && (b != '') && (a.length < 50)) {
            console.log("Data record");
            appData.expenses[a] = b;
            sum += +b;
          } else {
            i--;
          }
  };
  expensesValue.textContent = sum;
})

optionalExpensesBtn.addEventListener('click', function() {
  for (let i = 0; i < optionalexpensesItem.length; i++) {
    let optExp = optionalexpensesItem[i].value;
    appData.optionalExpenses[i] = optExp;
    optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
  }
});

countBudgetBtn.addEventListener('click', function() {
  if (appData.budget != undefined) {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    daybudgetValue.textContent = appData.moneyPerDay;
  
    if (appData.moneyPerDay <= 100) {
      levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
      levelValue.textContent = "Cредний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "Высокий уровень достатка";
    } else {
      levelValue.textContent = "Ошибка";
    };
  } else {
    daybudgetValue.textContent = "Ошибка. Не запущен расчет.";
  }
  
});

chooseIncome.addEventListener('input', function() {
  let items = chooseIncome.value;
  appData.income = items.split(', ');
  incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function() {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

chooseSum.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = +chooseSum.value,
        percent = +choosePercent.value;
    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

choosePercent.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = +chooseSum.value,
        percent = +choosePercent.value;
    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

let appData = {
  budget: money,
  timeDate: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
  chooseExpenses: function() {

  },
  detectDayBudget: function() {

    alert("Ежедневный бюджет: " + appData.moneyPerDay);
  },
  detectLevel: function() {

  },
  checkSavings: function() {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?", ""),
          percent = +prompt("Под какой процент?", "");
      appData.monthIncome = save / 100 / 12 * percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function() {
 
  },
  chooseIncome: function() {
    let items = prompt("Что принесет дополнительный доход? Перечисли через запятую.", '');
    if (typeof(itemes) !== 'string' || itemes == '' || itemes == null) appData.chooseIncome();
    appData.income = items.split(', ');
    do {
      var addIteme = prompt("Может что-то еще?");
    } while (typeof(addIteme) !== 'string' || addIteme == '' || addIteme == null);
    appData.income.push(addIteme);
    appData.income.sort();
    items = '';
    appData.income.forEach((element, index) => {
      items = items + (index + 1) + '-' + element + ', ';
    })
    alert('Способы доп. заработка: ' + items);
  }
};

function infoAppData(){
  console.log("Наша программа включает в себя данные:");

  for (let value in appData) {
    console.log(value + ': ' + appData[value]);
  }
}

