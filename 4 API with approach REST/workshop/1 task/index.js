// Инициализируйте проект NPM
// Установите express
// Создайте файл сервера index.js
// В файле создайте обработчик получения всех пользователей

// В качестве базы данных для хранения пользователей необходимо использовать массив JavaScript

const express = require('express');

const app = express();
const users =[];

app.use(express.json());
app.get('/users', (req, res) => {
    res.send({users })
});

app.listen(3000);



