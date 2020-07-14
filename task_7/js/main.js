"use strict"
// кнопка "Начать расчет"
let btnStart = document.getElementById('start');
// блоки value
let budgetValue = document.getElementsByClassName('budget-value');
let daybudgetValue = document.getElementsByClassName('daybudget-value');
let levelValue = document.getElementsByClassName('level-value');
let expensesValue = document.getElementsByClassName('expenses-value');
let optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value');
let monthsavingsValue = document.getElementsByClassName('monthsavings-value');
let yearsavingsValue = document.getElementsByClassName('yearsavings-value');
// Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
let expensesItem = document.querySelectorAll('.expenses-item');
// Кнопки утвердить
let expensesItemBtn = document.querySelector('.expenses-item-btn');
let expensesItemBtn = document.querySelector('.optional-expenses-btn');
// поля для ввода необязательных расходов
let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');
// статьи возможного дохода
let chooseIncome = document.querySelector('.choose-income');
// чекбокс
let savings = document.querySelector('.savings');
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
