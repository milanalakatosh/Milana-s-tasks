//Найдите количество вхождения 'aba' в строку.
//1.решить через цикл for
//2.решить через многократное применение indexOf со вторым параметром (fromIndex)
const readlineSync = require("readline-sync");

let str = readlineSync.question("Введите строку:\n> ");
let amountofEntering = 0;

for (let i = 0; i < str.length; ++i) { 
    i = str.indexOf('a',i);
    if (i > -1 && str[i+1] === 'b' && str[i+2] === 'a') {
        amountofEntering += 1;
        i += 2;
    } else if (i === -1) {
        break;
    }

}

console.log(amountofEntering);


