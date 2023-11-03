const { generatePassword } = require('./generate_password')
  

console.log(generatePassword()); // Пароль по умолчанию: случайные 8 символов
console.log(generatePassword(12)); // Пароль с указанной длиной: случайные 12 символов
console.log(generatePassword(10, false, true)); // Пароль без букв, только цифры: случайные 10 цифр
console.log(generatePassword(16, true, true, false)); // Пароль без специальных символов: случайные 16 букв и цифр
console.log(generatePassword(20, true, true, true)); // Пароль со всеми типами символов: случайные 20 символов