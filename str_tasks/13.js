//Даны два слова. Найдите только те символы слов, которые встречаются в обоих словах только один раз.
const readlineSync = require("readline-sync");

let word1 = readlineSync.question("Введите слово:\n> ");
let word2 = readlineSync.question("Введите слово:\n> ");
let arrayOfWord1 = word1.split("");
let arrayOfWord2 = word2.split("");
let result = [];

let clearArrayOfWord1 = [];
for (let x = 0; x < arrayOfWord1.length; ++x) {
    let noEquesls = true;
    for (let y = 0; y < arrayOfWord1.length; ++y) {
        if (x !== y && arrayOfWord1[x] === arrayOfWord1[y]) noEquesls = false;
    }
    if (noEquesls) clearArrayOfWord1.push(arrayOfWord1[x]); 
}

for (let i = 0; i < clearArrayOfWord1.length; ++i) {
    let dataOfIncluding = 0;
    for (let j = 0; j < arrayOfWord2.length; ++j) {
        if (clearArrayOfWord1[i] === arrayOfWord2[j]) {
            dataOfIncluding += 1;
        } 
    }
    if (dataOfIncluding === 1 && !result.includes(clearArrayOfWord1[i])) result.push(clearArrayOfWord1[i]);
}
console.log(result);