//Реализуйте серию из n игр "Камень, ножницы, бумага" с компьютером. 
//В результате выведите статистику: сколько игр выиграл пользователь, сколько раз каждого вида ходов было выбрано.

const readlineSync = require("readline-sync");

let n = parseInt(readlineSync.question("Введите количество игр: "));
let gameResult = 0;
let stone = 0
let scissors = 0;
let paper = 0;
let myStone = 0
let myScissors = 0;
let myPaper = 0;
// как правильнее записывать все переменные вне или внутри цикла?
for (let i = 1; i <= n; ++i) {
    let compStep = Math.floor((Math.random()*3)+1);
    if (compStep === 1) {
        stone +=1;
    } else if (compStep === 2) {
        scissors += 1;
    } else {
        paper += 1;
    }
    let myStep = parseInt(readlineSync.question("Введите: Камень(1), ножницы(2) или бумага(3): "));
    if (myStep === 1) {
        myStone +=1;
    } else if (myStep === 2) {
        myScissors += 1;
    } else if (myStep === 3) {
        myPaper += 1;
    } else {
        console.log("неверно");
        break;
    } 
    if (compStep === myStep) {
        gameResult;
    } else if ((myStep === 1 && compStep === 2) || (myStep === 2 && compStep === 3) || (myStep === 3 && compStep === 1)) {
        gameResult += 1;
    } 
}

games = "";
if (gameResult === 1) {
    games = "игру";
} else if (gameResult > 1 && gameResult < 5) {
    games = " игры "
} else {
    games = " игр ";
}


console.log(gameResult + games + "выйграл пользователь.");
console.log("За данную игру компьтер "+stone+" раз(-а) выбрал камень; "+scissors+" раз(-а) выбрал ножницы; "+paper+" раз(-а) бумагу.");
console.log("За данную игру пользователь "+myStone+" раз(-а) выбрал камень; "+myScissors+" раз(-а) выбрал ножницы; "+myPaper+" раз(-а) бумагу.");