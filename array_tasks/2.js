//Заполнить массив длиной n нулями и единицами, при этом данные значения чередуются, начиная с нуля.
import readlineSync from "readline-sync";

let array = [];
let n = parseInt(readlineSync.question("Длина массива: "));

for (let i = 0; i < n; ++ i) {
    // let x = i % 2 === 0 ? 0 : 1;
    // array.push(x);
    array.push(i % 2 === 0 ? 0 : 1);
}
console.log(array);