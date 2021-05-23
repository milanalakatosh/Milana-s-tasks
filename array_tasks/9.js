//Найдите сумму чисел массива, которые расположены до первого четного числа массива. 
//Если четных чисел в массиве нет, то найти сумму всех чисел за исключением крайних.
const readlineSync = require("readline-sync");

let array = JSON.parse(readlineSync.question("Введите массив:\n> "));
let sum = 0;
let arrayHasEven = false;

for (let i = 0; i < array.length; ++ i) {
    if (array[i] % 2 !== 0) {
        sum += array[i];
    } else {
        arrayHasEven = true;
        break;
    }
}
console.log(arrayHasEven ? sum : sum - array[0] - array[array.length-1]);
