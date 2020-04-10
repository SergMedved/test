let age = prompt ('Сколько тебе лет?', '');
alert (`Тебе ${age} лет!`);
let result = (age < 18) ? 'Еще слишком молод' : 'Ужедостаточно взрослый)';
alert (result);
let name = prompt ('Как тебя зовут?', '');
let number1 = prompt (`${name} введи первое слогаемое:`, '');
let number2 = prompt (`${name} введи второе слогаемое:`, '');
let summa = +number1 + (+number2);
alert (`Сумма двух слогаемых равна: ${summa}`);

