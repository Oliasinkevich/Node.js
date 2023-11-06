// Инициализируйте проект NPM
// Установите библиотеку Express
// Создайте файл index.js
// Подключите промежуточный обработчик express.static()
// В директории со статичными файлами создайте два HTML файла index.html и about.html и напишите в них HTML код, в котором есть ссылки на соседние файлы

const express = require('express');

const app = express();

app.use(express.static('static'));

// app.get('/', (req, res) => {
//     res.sendFile('static/index.html');
// });

// app.get('/about', (req, res) => {
//     res.sendFile('static/about.html')
// });

app.listen(3000);