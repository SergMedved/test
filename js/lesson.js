let login = prompt('Введите учетную запись:', '');
if (login == 'Админ') {
    let password = prompt('Введите пароль:', '');
    if (password == 'admin') {
        alert('Добро пожаловать!');
    } else {
        alert('Пароль неверен');
    }
} else {
    alert('Я вас не знаю')
}