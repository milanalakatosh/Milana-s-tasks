const readlineSync = require ("readline-sync");

let x = parseInt(readlineSync.question("Введите трехзначное число: "));
//448
let a = x % 10;
let b = ((x - a)/10) % 10;
let c = Math.floor(((x-a)/100) % 10);

if (a === b || a === c || b === c) {
    console.log("Среди цифр введенного трехзначного числа " + x + " есть одинаковые");
} else {
    console.log("Среди цифр введенного трехзначного числа " + x + " нет одинаковыx");
}