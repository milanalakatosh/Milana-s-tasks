//дан массив x из n элементов. Найдите 

import readlineSync from "readline-sync";

let x = JSON.parse(readlineSync.question("Введите массив:\n> "));
let calculation = 0;

for (let i = 0; i < x.length; ++ i) {
    calculation += i % 2 === 0 ? x[i] :  -x[i];
}
console.log(calculation);
