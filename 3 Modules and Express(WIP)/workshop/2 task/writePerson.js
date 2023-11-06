const fs = require('fs');
const path = require('path');

const person = {
    "name": "Ivan",
    "surname": "Ivanov",
    "age": 30,
    "city": "Moscow"
}

fs.writeFileSync(path.join(__dirname, 'person.json'), JSON.stringify(person, null, 2));