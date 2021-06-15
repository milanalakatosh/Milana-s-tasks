//На вход подаётся строка вида “12+23-4*5/10+11”. Выведете на экран результат выражения. 
//Приоритет знаков не имеет значения.
const readlineSync = require("readline-sync");

let str = readlineSync.question("str?\n> ");
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let integer = "";
let array = [];

for (let i = 0; i < str.length; ++i) {
    if (numbers.includes(str[i])) {
        integer += str[i];
        if (i === str.length - 1) array.push(integer);
    } else {
        array.push(integer);
        integer = "";
        array.push(str[i]);
    }
}
let expressionResult;
for (let j = 0; j < array.length; j += 2) {
    if (array[j-1] === undefined) expressionResult = Number(array[j]);
    else if (array[j-1] === "+") expressionResult += Number(array[j]);
    else if (array[j-1] === "-") expressionResult -= Number(array[j]);
    else if (array[j-1] === "*") expressionResult *= Number(array[j]);
    else if (array[j-1] === "/") expressionResult /= Number(array[j]);
}
console.log(expressionResult);

