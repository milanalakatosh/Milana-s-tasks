//Дан текст (слова разделённые пробелами). 
//Вывести в алфавитном порядке все слова, содержащие наибольшее количество гласных букв
const readlineSync = require("readline-sync");

let text = readlineSync.question("Введите слова:\n> ");
let arrayOftext = text.split(" ");
let vowels = ["a", "e", "i", "o", "u"];
let max = Number.NEGATIVE_INFINITY;
let result = [];

for (let i = 0; i < arrayOftext.length; ++i) {
    let amountOfVowels = 0;
    for (let j = 0; j < arrayOftext[i].length; ++j) {
        if (vowels.includes(arrayOftext[i][j])) amountOfVowels += 1;
    }
    if (amountOfVowels > max) {
        max = amountOfVowels;
        result = [];
        result.push(arrayOftext[i]);
    } else if (amountOfVowels === max) {
        result.push(arrayOftext[i]);
    }
}
console.log(result.sort().join(", "));