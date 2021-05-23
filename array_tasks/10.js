//дан массив x из n элементов. Найдите 

const readlineSync = require("readline-sync");

let x = JSON.parse(readlineSync.question("Введите массив:\n> "));
let calculation = 0;

for (let i = 0; i < x.length; ++ i) {
    if(i % 2 === 0) {
        calculation += x[i];
    } else {
        calculation -= x[i];
    }
}
console.log(calculation);
