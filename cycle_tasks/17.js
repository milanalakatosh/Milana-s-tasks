const readlineSync = require("readline-sync");

let n = parseInt(readlineSync.question("Введите количество игр: "));
let gameResult = 0;
let stone = 0
let scissors = 0;
let paper = 0;
let myStone = 0
let myScissors = 0;
let myPaper = 0;

for (let i = 1; i <= n; ++i) {
    let compStep = Math.floor((Math.random() * 3) + 1);
    let compChoice = "";
    if (compStep === 1) {
        stone += 1;
        compChoice = "камень. ";
    } else if (compStep === 2) {
        scissors += 1;
        compChoice = "ножницы. ";
    } else {
        paper += 1;
        compChoice = "бумагу. ";
    }
    
    let myStep = parseInt(readlineSync.question("Введите: Камень(1), ножницы(2) или бумага(3): "));
    while (myStep < 1 || myStep > 3) {
        myStep = parseInt(readlineSync.question("Введите: Камень(1), ножницы(2) или бумага(3): "));
    }
    if (myStep === 1) {
        myStone += 1;
    } else if (myStep === 2) {
        myScissors += 1;
    } else if (myStep === 3) {
        myPaper += 1;
    }
    if ((myStep === 1 && compStep === 2) || (myStep === 2 && compStep === 3) || (myStep === 3 && compStep === 1)) {
        gameResult += 1;
    }
    let resultOf1Game = "";
    if (compStep === myStep) {
        resultOf1Game = "У вас ничья.";
    } else if ((compStep===1 && myStep===2) || (compStep===2 && myStep===3) || (compStep===3 && myStep===1)) { 
        resultOf1Game = "Компьютер выйграл.";
    } else {
        resultOf1Game = "Вы выйграли.";
    }
    console.log("Компьютер выбрал " + compChoice + resultOf1Game);
}

let games = "";
if (gameResult === 1) {
    games += "игру";
} else if (gameResult > 1 && gameResult < 5) {
    games += " игры "
} else {
    games += " игр ";
}


console.log(gameResult + " " + games + " выйграл пользователь.");
console.log("За данную игру компьтер " + stone + " раз(-а) выбрал камень; " + scissors + " раз(-а) выбрал ножницы; " + paper + " раз(-а) бумагу.");
console.log("За данную игру пользователь " + myStone + " раз(-а) выбрал камень; " + myScissors + " раз(-а) выбрал ножницы; " + myPaper + " раз(-а) бумагу.");