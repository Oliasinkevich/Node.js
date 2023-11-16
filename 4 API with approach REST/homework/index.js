const fs = require('fs');
const path = require('path');

const express = require('express');
const Joi = require('joi');
 
const app = express(); 

const pathList = path.join(__dirname, 'list.json')

let list = null;

let uniqueID = 0;

fs.readFile(pathList, 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        list = JSON.parse(data);
        uniqueID = list.users.length > 0 ? list.users[list.users.length - 1].id : 0;
    }
});

function updateListFile() {
    fs.writeFile(pathList, JSON.stringify(list, null, 2), 'utf-8', (err) => {
      if (err) {
        console.log(err);
      }
    });
  }

const userSchema = Joi.object({
    firstName: Joi.string().min(1).required(),
    lastName: Joi.string().min(1).required(),
    age: Joi.number().min(0).max(150).required(),
    city: Joi.string().min(1),
});

app.use(express.json());

app.get('/users', (req, res) => {
    res.send({ list });
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

    const { firstName, lastName, age, city } = req.body;

    const newUser = {
        id: uniqueID,
        firstName,
        lastName,
        age,
        city
    };

    list.users.push(newUser);

    fs.writeFile(pathList, JSON.stringify(list, null, 2), 'utf-8', (err) => {
        if (err) {
            console.log(err);
        }
    });

    res.send(newUser);
});


app.put('/users/:id', validate(userSchema), (req, res) => {
    const user = list.users.find((user) => user.id === Number(req.params.id));

    if (user) {
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.age = req.body.age;
        user.city = req.body.city;

        updateListFile();

        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null });
    }
});

app.get('/users/:id', (req, res) => {
    const user = list.users.find((user) => user.id === Number(req.params.id));

    if (user) {
        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null });
    }
});

app.delete('/users/:id', (req, res) => {
    const user = list.users.find((user) => user.id === Number(req.params.id));

    if (user) {
        const userIndex = list.users.indexOf(user);
        list.users.splice(userIndex, 1);

        updateListFile();

        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null });
    }
});

app.listen(3000);