let age = prompt ('Сколько вам лет?', '');
if ((age < 18) || (age > 60)) {
    alert ('Вы не проходите по возрасту');
} else {
    if ((age > 25) & (age < 40)) {
        alert ('Вы нас устраиваете');
    } else {
        alert ('Вам необходимо пройти дополнительное тестирование.');
    }
}