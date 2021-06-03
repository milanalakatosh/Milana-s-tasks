//Даны две строки. Вывести большую по длине строку столько раз, на сколько символов отличаются строки.
const readlineSync = require("readline-sync");

let str1 = readlineSync.question("Введите первую строку:\n> ");
let str2 = readlineSync.question("Введите вторую строку:\n> ");
let n = Math.abs(str1.length - str2.length);

for (let i = 0; i < n; ++ i) {
    if (str1.length > str2.length) console.log(str1);
    else console.log(str2);
}
