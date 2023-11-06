// Напишите HTTP сервер на express и реализуйте два обработчика “/” и “/about”, где:

// На каждой странице реализован счетчик просмотров
// Значение счетчика необходимо сохранять в файл каждый раз, когда обновляется страница
// Также значение счетчика должно загружаться из файла, когда запускается обработчик страницы
// Таким образом счетчик не должен обнуляться каждый раз, когда перезапускается сервер
// Подсказка:
// Вы можете сохранять файл в формате JSON,
// где в объекте ключом будет являться URL страницы, а значением количество просмотров страницы

const fs = require('fs');
const path = require('path');
const express = require('express');
const { count } = require('console');

const app = express();

const pathCounter = path.join(__dirname, 'counter.json')

let counter = null;

fs.readFile(pathCounter, 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        counter = JSON.parse(data);
    }
});

app.use((req, res, next) => {
    fs.writeFile(pathCounter, JSON.stringify(counter, null, 2), 'utf-8', (err) => {
        if(err) {
            console.log(err);
        }
    });
    next();
});

app.get('/', (req, res) => {
    counter.index++;
    res.send(`
      <h1>Добро пожаловать на главную страницу</h1>
      <a href="/about">О сайте</a>
      <p>Просмотр страницы Index: ${counter.index} </p>
  `);
});

app.get('/about', (req, res) => {
    counter.about++;
    res.send(`
      <h1>О сайте</h1>
      <a href="/">На главную страницу</a>
      <p>Просмотр страницы About: ${counter.about} </p>
      `)
});

app.listen(3000);
