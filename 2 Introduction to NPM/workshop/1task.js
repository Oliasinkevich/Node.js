// Задание 1
// Необходимо найти, установить и применить библиотеку, которая позволит избежать проблем со сложением и умножением чисел с плавающей запятой

function calculateResultSum(purchases, discount) {
    let total = purchases.reduce((acc, purchase) => acc += purchase, 0);
    
    total = total * discount; // применяем скидку
    return total;
}

// Должен быть результат 78.66
const total = calculateResultSum([12.1, 32.2, 43.1], 0.9); 

// По факту получаем 78.66000000000001
console.log("Общая стоимость покупок: " + total + " рублей");