//На вход подаётся строка вида “12+23=35”. 
//Выведете на экран true если выражение верно или false если выражение не верно.
const readlineSync = require("readline-sync");

let str = readlineSync.question("str?\n> ");
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let integer = "";
let array = [];
let expressionResult;

for (let i = 0; i < str.length; ++i) {
    if (numbers.includes(str[i])) {
        integer += str[i];
    } else if (str[i] !== "=") {
        array.push(integer);
        integer = "";
        array.push(str[i]);
    } else if (str[i] === "=") {
        array.push(integer);
        expressionResult = parseFloat(str.slice(i+1));
        break;
    }
}
let expression;
for (let j = 0; j < array.length; j += 2) {
    if (array[j-1] === undefined) expression = Number(array[j]);
    else if (array[j-1] === "+") expression += Number(array[j]);
    else if (array[j-1] === "-") expression -= Number(array[j]);
    else if (array[j-1] === "*") expression *= Number(array[j]);
    else if (array[j-1] === "/") expression /= Number(array[j]);
}
let result = false;
if (expression === expressionResult) result = true;
console.log(result);
