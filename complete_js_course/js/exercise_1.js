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
  savings: true
};

function chooseExpenses() {
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
}

chooseExpenses();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

function detectLevel() {
  if (appData.moneyPerDay <= 100) {
    alert("Минимальный уровень достатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
    alert("Cредний уровень достатка");
  } else if (appData.moneyPerDay > 2000) {
    alert("Высокий уровень достатка");
  } else {
    alert("Ошибка");
  };
}

function chooseOptExpenses() {
  for (let i = 0; i < 3; i++) {
    let optExp = prompt("Статья необязательных расходов?", "");
    if (optExp == "" || optExp == null) {
      i--;
    } else appData.optionalExpenses[i] = optExp;
  }
}

chooseOptExpenses();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?", ""),
        percent = +prompt("Под какой процент?", "");
    appData.monthIncome = save / 100 / 12 * percent;
    alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
  }
}

checkSavings();