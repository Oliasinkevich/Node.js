const NP = require('number-precision');

function calculateResultSum(purchases, discount) {
    let total = purchases.reduce((acc, purchase) => NP.plus(acc, purchase), 0);
    
    total = NP.times(total, discount); // применяем скидку
    return total;
}

module.exports = { calculateResultSum };