//Дана строка, длина которой кратна 3. Разделить строку на фрагменты по три подряд идущих символа. 
//В каждом фрагменте средний символ заменить на случайный символ, не совпадающий ни с одним из 
//символов этого фрагмента. Показать фрагменты, упорядоченные по алфавиту.
const readlineSync = require("readline-sync");

let str = readlineSync.question("Введите строку:\n> ");
let randomSymbols = "abcdefghijklmnopqrstuvwxyz123456789";
let r = -1;

for (let i = 1; i < str.length; i += 3) {
    //let char = Math.random().toString(36).replace(/[^a-z]+/g, '');
    while (str[i] !== randomSymbols[r]) {
        r = Math.floor(Math.random(0) * randomSymbols.length-1);
        str = str.replace(str[i], randomSymbols[r]);
    }
}
console.log(str);

let abcSorted = "";
for (let i = 0; i < str.length; ++i) {
    let j = randomSymbols.indexOf(str[i]);
    if (j > -1 && str[i+1] === randomSymbols[j+1]) {
    abcSorted += str[i];
    abcSorted += str[i+1];
    } else if (str[i+1] !== randomSymbols[j+1] && abcSorted !== "" ) {
      console.log(abcSorted);
      abcSorted = "";
    }
}
