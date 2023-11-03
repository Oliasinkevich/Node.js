const uuid = require('uuid');

const id = uuid.v4();

console.log(id);

const hello = require('./hello')

hello.sayHello();