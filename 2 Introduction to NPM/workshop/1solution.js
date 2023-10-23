const NP = require('number-precision');

function calculateResultSum(purchases, discount) {
    let total = purchases.reduce((acc, purchase) => NP.plus(acc, purchase), 0);
    
    total = NP.times(total, discount); // применяем скидку
    return total;
}

const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);

console.log("Общая стоимость покупок: " + total + " рублей");