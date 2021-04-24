//Пользователь вводит курс доллара в рублях и стоимость килограмма конфет.  Показать таблицу цен 1$, 2$, ..., 100$ в рублях, третьим столбцом добавить количество кг конфет, которые можно купить на данные суммы. Цены и количество в килограммах вывести с двумя и одним знаком после запятой соответственно, используя метод чисел .toFixed(2) и .toFixed(1). 
//toFixed(2) и .toFixed(1)
const readlineSync = require("readline-sync");

let dollarRate = parseFloat(readlineSync.question("Введите курс доллара в рублях: "));
let sweets = parseFloat(readlineSync.question("Введите стоимость килограмма конфет: "));

let rub = 0;
let kgSweets = 0;

for (let dollars = 1; dollars <= 100; ++dollars) {
    rub = dollars * dollarRate;
    kgSweets = rub / sweets;

    let dollarsAmount = dollars / 10;
    let dDigits = 1;

    while (dollarsAmount >= 1) {
        dollarsAmount /= 10;
        dDigits += 1;
    }

    let rubAmount = rub / 10;
    let rDigits = 1;

    while (rubAmount >= 1) {
        rubAmount /= 10;
        rDigits += 1;
    }
    
    let dSpace = 7 - dDigits;
    let rSpace = 10 - rDigits;
    let space1 = "";
    let space2 = "";
    
    for (let i = 1; i <= dSpace; ++i) {
        space1 += " ";
    }
    for (let i = 1; i <= rSpace; ++i) {
        space2 += " ";
    }

    console.log("$" + dollars + space1 + rub.toFixed(2) + " руб." + space2 + kgSweets.toFixed(1) + " кг");
}
