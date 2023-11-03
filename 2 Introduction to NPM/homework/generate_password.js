const generatePassword = (length = 8, useLetters = true, useNumbers = true, useSymbols = true) => {
    let charset = '';
  
    if (useLetters) {
      charset += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
  
    if (useNumbers) {
      charset += '0123456789';
    }
  
    if (useSymbols) {
      charset += '!@#$%^&*()_+-=';
    }
  
    let password = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
  
    return password;
  }

  module.exports = { generatePassword };