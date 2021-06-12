//Дана строка, содержащая символы, из которых необходимо будет сгенерировать случайный пароль. 
//Так же дана длина пароля, который необходимо будет сгенерировать. 
//Сгенерировать случайный пароль и вывести его на экран.
const readlineSync = require("readline-sync");

let symbols = readlineSync.question("Введите символы:\n> ");

let passwordLength = Math.floor((Math.random() * 4 + 6));
let password = "";

for (let i = 0; i < passwordLength; ++i) {
    let r = Math.floor(Math.random() * symbols.length);
    password += symbols[r];
}
console.log("password: " + password);