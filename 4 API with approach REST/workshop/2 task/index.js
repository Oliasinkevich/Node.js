// 2 task
// Необходимо реализовать роут создания пользователя.


// Поля объекта пользователя - это firstName, secondName, age, city.
// Пример объекта пользователя:
// {
//     "firstName": "Ivan",
//     "lastName": "Ivanov",
//     "age": 30,
//     "city": "Moscow"
// }

//   Подсказка: 
//   Не забудьте реализовать генерацию уникального идентификатора пользователя и добавить такой идентификатор в объект пользователя во время создания

// 3 task
// Необходимо реализовать роут обновления пользователя.

// Подсказка: 
// Помните, что если пользователь не найден, то необходимо вернуть соответствующий ответ клиенту

// 4 task
// Необходимо реализовать два роута:
// Роут получения отдельного пользователя
// Роут удаления пользователя

// Подсказка: 
// Помните, что если пользователь не найден, то необходимо вернуть соответствующий ответ клиенту

// 5 task
// Установить Joi с помощью NPM
// Определить схему валидации запроса на создание пользователя(пока не применять в обработчиках)
// firstName и secondName - это строки, которые  должны иметь не менее одного символа. Также эти поля обязательны для создания.
// age - это обязательное число, которое не может быть меньше 0 и более 150
// city - это необязательная строка с минимальным количеством символов 1

// 6 task
// Связать Joi с обработчиками

const express = require('express');
const Joi = require('joi');

const app = express();

const users = [];
let uniqueID = 0;

const userSchema = Joi.object({
    firstName: Joi.string().min(1).required(),
    secondName: Joi.string().min(1).required(),
    age: Joi.number().min(0).max(150).required(),
    city: Joi.string().min(1),
});

app.use(express.json());

app.get('/users', (req, res) => {
    res.send({ users });
});

function validate(schema) {
    return (req, res, next) => {
        const result = schema.validate(req.body);
        if (result.error) {
            return res.status(400).send({ error: result.error.details });
        }
        next();
    }
} 

app.post('/users', validate(userSchema), (req, res) => {
    uniqueID += 1;

    users.push({
        id: uniqueID,
        ...req.body
    });

    res.send({
        id: uniqueID,
    });
});


app.put('/users/:id', validate(userSchema), (req, res) => {
    const user = users.find((user) => user.id === Number(req.params.id));

    if (user) {
        user.firstName = req.body.firstName;
        user.secondName = req.body.secondName;
        user.age = req.body.age;
        user.city = req.body.city;

        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null });
    }
});

app.get('/users/:id', (req, res) => {
    const user = users.find((user) => user.id === Number(req.params.id));

    if (user) {
        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null });
    }
});

app.delete('/users/:id', (req, res) => {
    const user = users.find((user) => user.id === Number(req.params.id));

    if (user) {
        const userIndex = users.indexOf(user);
        users.splice(userIndex, 1);

        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null });
    }
});

app.listen(3000);