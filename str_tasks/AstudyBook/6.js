//Пользователь вводит слово. Если оно является перевёртышем выведете true иначе false. Слово-перевёртыш - это слово, которое одинаково читается с начала и с конца.
const readlineSync = require("readline-sync");

let word = readlineSync.question("word?\n> ");
word = word.toLowerCase();
let revWord = "";
let result = false;

for (let i = word.length-1; i >= 0; --i) {
    revWord += word[i];
}
if (word === revWord) result = true;
console.log(result);