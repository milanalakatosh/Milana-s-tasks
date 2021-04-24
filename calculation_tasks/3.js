//Вычислите  если x и y вводит пользователь. 
//Перед вычислением выполнить проверку на существование квадратных корней. 
//Если такого корня нет, вывести: “решения нет”. (Math.sqrt)
const readlineSync = require("readline-sync");

let x = parseFloat(readlineSync.question("Введите x: "));
let y = parseFloat(readlineSync.question("Введите y: "));

if (y < 0 || x - Math.sqrt(y) < 0) {
    console.log("решения нет");
} else {
    z = Math.sqrt(x-Math.sqrt(y));
    console.log(z);
}