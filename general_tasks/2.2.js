import readlineSync from "readline-sync";

const number = parseInt(readlineSync.question("Введите число не большее 99: "));

const secondDigit = number % 10;
const firstDigit = (number - secondDigit) / 10;
const max = Math.max(firstDigit, secondDigit);
const min = Math.min(firstDigit, secondDigit);

const result = firstDigit === secondDigit ? "Цифры одинаковы." : 
    number < 10 ? "Число однозначное." :
        max + " - большая цифра, " + min + " - меньшая цифра.";

console.log(result);
