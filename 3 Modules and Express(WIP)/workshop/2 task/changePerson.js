const fs = require('fs');
const path = require('path');

const pathToFile = path.join(__dirname, 'person.json');

const data = fs.readFileSync(pathToFile, 'utf-8');

 const parsedData = JSON.parse(data);

 parsedData.age = parsedData.age - 10;
 parsedData.city = "Ekaterinburg";

 fs.writeFileSync(pathToFile, JSON.stringify(parsedData, null, 2));

