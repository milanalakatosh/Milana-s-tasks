//На вход подаётся строка вида “12+23=35”. 
//Выведете на экран true если выражение верно или false если выражение не верно.
const readlineSync = require("readline-sync");

let str = readlineSync.question("str?\n> ");
let expressionMath = "";
let expressionResult;
let result = false;

for (let i = 0; i < str.length; ++i) {
    if (str[i] !== "=") {
        expressionMath += str[i];
    } else {
        expressionResult = parseInt(str.slice(i+1));
        break;
    }
}
if (eval(expressionMath) === expressionResult) result = true;

console.log(result);

//есть библиотека Expression Evaluator (Math.eval//Parser.evaluate)
