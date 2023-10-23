// console.log('hello world');

// Задача 4*
// Необходимо объяснить почему этот способ работает. Что в этом случае
// происходит в стеке вызовов? Что происходит в цикле событий?
// function counter(n) {
//     console.log(n);
//     setTimeout(() => counter(n + 1));
// }
    
// counter(0);
    
// Принудительно завершает выполнение скрипта через секунду
// setTimeout(() => {
// console.log("Скрипт успешно завершен!");
// process.exit();
// }, 1000);

// Задача 5
// Необходимо написать HTTP сервер и запустить сервер на порту 3000, который в браузере
// по URL “/” возвращает такую страницу:
// localhost:3000
// "Мой сервер работает!"
// Подсказки:
// - Обязательно импортируйте модуль http для реализации сервера: const http =
// require('http');
// - Используйте метод модуля http .createServer(): http.createServer((req, res) => {});
// - Для запуска сервера не забудьте вызвать метод .listen(): server.listen(3000);
// - Обязательно установите заголовки ответа с помощью метода res.writeHead():
// 'Content-Type': 'text/html; charset=UTF-8'
// - Отправьте HTML код с помощью метода res.end()

// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html; charset=UTF-8',
//     });
//     res.end('<h1>Мой сервер работает!</h1>');
// });

// server.listen(3000);

// Задача 6
// Необходимо написать HTTP сервер и запустить сервер на порту 3000, который в браузере по
// URL “/” возвращает такую страницу:
// localhost:3000
// "Мой сервер работает!"
// А по URL “/about” возвращает такую страницу:
// 'И даже отдаёт две страницы!'
// Подсказка:
// Объект req.url в обработчике запроса хранит url, который был передан из браузера

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url ==='/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end('<h1>Мой сервер работает!</h1>');
    } else if (req.url ==='/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end('<h1>И даже отдаёт две страницы!</h1>');
    }

});

server.listen(3000);

