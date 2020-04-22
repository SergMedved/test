"use strict";

let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}

start();

let appData = {
  budget: money,
  timeDate: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function() {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
          b = +prompt("Во сколько обойдется?", "");
      if ( (typeof(a) === "string") && (typeof(a) != null) && (typeof(b) === "number") 
            && (typeof(b) != null) && (a != '') && (b != '') && (a.length < 50)) {
              console.log("Data record");
              appData.expenses[a] = b;
            } else {
              i--;
            }
    };
  },
  detectDayBudget: function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
  },
  detectLevel: function() {
    if (appData.moneyPerDay <= 100) {
      alert("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
      alert("Cредний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      alert("Высокий уровень достатка");
    } else {
      alert("Ошибка");
    };
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
    for (let i = 0; i < 3; i++) {
      let optExp = prompt("Статья необязательных расходов?", "");
      if (optExp == "" || optExp == null) {
        i--;
      } else appData.optionalExpenses[i+1] = optExp;
    }
  },
  chooseIncome: function() {
    let itemes = prompt("Что принесет дополнительный доход? Перечисли через запятую.", '');
    if (typeof(itemes) !== 'string' || itemes == '' || itemes == null) appData.chooseIncome();
    appData.income = itemes.split(', ');
    do {
      var addIteme = prompt("Может что-то еще?");
    } while (typeof(addIteme) !== 'string' || addIteme == '' || addIteme == null);
    appData.income.push(addIteme);
    appData.income.sort();
    itemes = '';
    appData.income.forEach((element, index) => {
      itemes = itemes + (index + 1) + '-' + element + ', ';
    })
    alert('Способы доп. заработка: ' + itemes);
  }
};

function infoAppData(){
  console.log("Наша программа включает в себя данные:");

  for (let value in appData) {
    console.log(value + ': ' + appData[value]);
  }
}
