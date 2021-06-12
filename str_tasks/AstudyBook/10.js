//На вход подаётся строка вида “12+23-4*5/10+11”. Выведете на экран результат выражения. 
//Приоритет знаков не имеет значения.
const readlineSync = require("readline-sync");

let str = readlineSync.question("str?\n> ");
console.log(parseInt(eval(str)));

