// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).
// — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.

const http = require('http');
let pageCounter = 0;
let pageCounterAbout = 0;

const server = http.createServer((req, res) => {
    if (req.url ==='/') {
        pageCounter++;
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.write(`
          <html>
            <body>
              <h1>Добро пожаловать на главную страницу</h1>
              <a href="/about">О сайте</a>
              <p>Просмотр страницы: ${pageCounter} </p>
            </body>
          </html>
        `);
        res.end();
    } else if (req.url ==='/about') {
        pageCounterAbout++;
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.write(`
          <html>
            <body>
              <h1>О сайте</h1>
              <a href="/">На главную страницу</a>
              <p>Просмотр страницы: ${pageCounterAbout} </p>
            </body>
          </html>
        `);
        res.end();
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.write(`
            <html>
                <body>
                    <h1>Страница не найдена</h1>
                </body>
            </html>
            `);
        res.end();
    }

});

server.listen(3000);