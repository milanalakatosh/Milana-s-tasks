//Дан массив a. Найдите три непоследовательных элемента в массиве, сумма которых максимальна.
const readlineSync = require("readline-sync");

let a = JSON.parse(readlineSync.question("Введите массив:\n> "));
let max = Number.NEGATIVE_INFINITY;
let element1;
let element2;
let element3;

for (let i = 0; i < a.length; ++i) {
    for (let j = 0; j < a.length; ++j) {
        for (let k = 0; k < a.length; ++k) {
            if (i !== j && i !== k && j !== k) {
                let sum = a[i] + a[j] + a[k];
                if (sum > max) {
                    max = sum;
                    element1 = a[i];
                    element2 = a[j];
                    element3 = a[k];
                }
            }
        }
    }
}
console.log(element1, element2, element3);