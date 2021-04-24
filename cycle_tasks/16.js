//Dано n кирпичей. 
//Вы и компьютер ходите поочередно. за ход можно взять 1, 2 или 3 кирпича. 
//Проиграл тот, кому нечего брать. Реализуйте игру с компьютером. Компьютер ходит случайно (без анализа выигрышной стратегии), однако если у него есть ход, который является последним для его выигрыша, то он его совершает.
const readlineSync = require ("readline-sync");

let n = readlineSync.question("Введите количество кирпичей: ");
let myStep = 0;
let compStep = 0;

for (let i = n; i > 0; --i) {
    compStep = parseInt(readlineSync.question("Ходите: "));
    if (compStep === 1) {
        myStep += 3; 
    } else if (compStep === 2) {
        myStep += 2;
    } else {
        myStep += 1;
    }
    i = n - (compStep + myStep);
}
console.log(myStep, compStep);