//увеличить переменные на 5,если среди них есть хотя бы две равные. В противном случае выдать ответ «равных нет».
const readlineSync = require ("readline-sync");

let a = parseInt(readlineSync.question("Введите 1 число: "));
let b = parseInt(readlineSync.question("Введите 2 число: "));
let c = parseInt(readlineSync.question("Введите 3 число: "));

if (a === b || a === c || b === c) {
    a += 5;
    b += 5;
    c += 5;
    console.log("1 число = " + a + "\n2 число = " + b + "\n3 число = " + c);
} else {
    console.log("равных нет");
}



