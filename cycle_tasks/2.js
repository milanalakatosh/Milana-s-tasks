//Пользователь вводит курс доллара в рублях и стоимость килограмма конфет.  
//Показать таблицу цен 1$, 2$, ..., 100$ в рублях, третьим столбцом добавить количество кг конфет, которые можно купить на данные суммы. Цены и количество в килограммах вывести с двумя и одним знаком после запятой соответственно, используя метод чисел .toFixed(2) и .toFixed(1). 
//toFixed(2) и .toFixed(1)
const readlineSync = require("readline-sync");

let dollarRate = parseFloat(readlineSync.question("Введите курс доллара в рублях: "));
let sweets = parseFloat(readlineSync.question("Введите стоимость килограмма конфет: "));

for (let dollars = 1; dollars <= 100; ++dollars) {
    writeDataForDollars(dollars);
}

function writeDataForDollars(dollars) {
    let rub = dollars * dollarRate;
    let kgSweets = rub / sweets;

    const space1 = getSpacesInColumn(dollars, 7);
    const space2 = getSpacesInColumn(rub, 10);

    console.log("$" + dollars + space1 + rub.toFixed(2) + " руб." + space2 + kgSweets.toFixed(1) + " кг");
}

function getSpacesInColumn(num, columnWidth) {
    let spacesCount = columnWidth - countDigits(num);
    let space = "";
    for (let i = 1; i <= spacesCount; ++i) {
        space += " ";
    }
    return space;
}

function countDigits(num) {
    let amount = num / 10;
    let digits = 1;
    while (amount >= 1) {
        amount /= 10;
        digits += 1;
    }
    return digits;
}