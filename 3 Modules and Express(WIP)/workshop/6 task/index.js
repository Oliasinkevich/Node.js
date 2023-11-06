// Создайте в директории со статичными файлами файл index.js с содержимым alert("Пример, Мир!!!")
// В файлах index.html и about.html подключите скрипт с src="index.js"
// Создайте в директории со статичными файлаии файл index.css со стилем, который изменяет цвет ссылки
// В файлах index.html и about.html подключите css файл index.css с помощью тега <link/>
// Запустите сервер и попробуйте открыть любую страницу

const express = require('express');

const app = express();

app.use(express.static('static'));

app.listen(3000);