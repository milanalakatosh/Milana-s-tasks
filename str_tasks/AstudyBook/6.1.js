//Пользователь вводит слово. Если оно является перевёртышем выведете true иначе false. Слово-перевёртыш - это слово, которое одинаково читается с начала и с конца.
const readlineSync = require("readline-sync");

let word = readlineSync.question("word?\n> ").toLowerCase();

let revWord = word.split("").reverse().join("");

console.log(word === revWord);