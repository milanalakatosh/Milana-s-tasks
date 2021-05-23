//Дан массив a, выведете все возможные пары чисел из этого массива и их сумму. 
//Например, если массив будет таким [1, 2, 3], то на экран нужно будет вывести:
// 1+2=3
// 1+3=4
// 2+1=3
// 2+3=5
// 3+1=4
// 3+2=5
const readlineSync = require("readline-sync");

let a = JSON.parse(readlineSync.question("Введите массив:\n> "));

for (let i = 0; i < a.length; ++ i) {
    for (let j = 0; j < a.length; ++j) {
        if (i !== j) {
            let sum = a[i] + a[j];
            console.log(a[i] + " + " + a[j] + " = " + sum);
        }
    }
}