//Дана строка, длина которой кратна 3. Разделить строку на фрагменты по три подряд идущих символа. 
//В каждом фрагменте средний символ заменить на случайный символ, не совпадающий ни с одним из 
//символов этого фрагмента. Показать фрагменты, упорядоченные по алфавиту.
const readlineSync = require("readline-sync");

let str = readlineSync.question("Введите строку:\n> ");
let randomSymbols = "abcdefghijklmnopqrstuvwxyz123456789";

let arrayOfStr = [];
for (let i = 0; i < str.length - 2; i += 3) {
    arrayOfStr.push(str[i] + str[i+1] + str[i+2]);
}

for (let i = 0; i < arrayOfStr.length; ++i) {
    let fragment = arrayOfStr[i];
    let randomSymbol;
    do {
        let r = Math.floor(Math.random(0) * randomSymbols.length-1);
        randomSymbol = randomSymbols[r];
    }   while (fragment[1] === randomSymbol);
    arrayOfStr[i] = fragment[0] + randomSymbol + fragment[2];
}

console.log(arrayOfStr.sort());
