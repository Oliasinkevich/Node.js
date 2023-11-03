const { calculateResultSum}  = require('./calc_result_sum');
const colors = require('colors');

const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);

if (total >= 50) {
    console.log(`Общая стоимость покупок:  ${total}  рублей`.red);
} else {
    console.log(`Общая стоимость покупок:  ${total}  рублей`.green);
}