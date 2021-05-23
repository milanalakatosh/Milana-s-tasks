//Dано n кирпичей. Вы и компьютер ходите поочередно. за ход можно взять 1, 2 или 3 кирпича. 
const readlineSync = require("readline-sync");

let n = parseInt(readlineSync.question("Введите количество кирпичей: "));

while (n > 0) {
    if (n > 3) {
        let compStep = Math.floor((Math.random() * 3)+1);
        n -= compStep;
        console.log("Компьютер берет " + compStep + " кирпич(-а), осталось " + n);
    } else {
        console.log("Компьютер берет " + n + " кирпич(-а), компьютер выйграл.");
        break;
    }
    let myStep;
    do {
        myStep = parseInt(readlineSync.question("Сколько взять кирпичей?\n> "));
    } while (myStep < 1 || myStep > 3 || myStep > n);
    n -= myStep;
    if (n===0) {
        console.log("Вы выйграли!")
    }
}