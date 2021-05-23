//Сформировать массив длиной n из элементов арифметической прогрессии с заданным первым элементом x и разностью d.
const readlineSync = require("readline-sync");

let n = parseInt(readlineSync.question("Введите длину массива: "));
let x = parseInt(readlineSync.question("Введите первый элемент: "));
let d = parseInt(readlineSync.question("Введите разность: "));
let array = [];

for (let i = 1; i <= n; ++ i) {
    if (i === 1) {
        array.push(x);
    } else {
        let progressionMember = x + (i - 1) * d;
        array.push(progressionMember);
    }
}
console.log(array)