//Строка состоит из слов, разделенных одним или несколькими пробелами. 
//Поменяйте местами наибольшее по длине слово и наименьшее.
const readlineSync = require("readline-sync");

let str = readlineSync.question("Введите строку:\n> ");
let array = str.split(" ");
let max = "";
let indexOfmax;
let min = str;
let indexOfmin;

for (let i = 0; i < array.length; ++ i) {
    if (array[i].length > max.length) {
        max = array[i];
        indexOfmax = i;
    }
    if (array[i].length < min.length && array[i] !== "") {
        min = array[i];
        indexOfmin = i;
    }
}
array[indexOfmax] = min;
array[indexOfmin] = max;

console.log(array.join(" "));