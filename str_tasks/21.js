//Сгенерировать пароль длиной 10 символов. 
//При том в этом пароле должна быть как мин 1 цифра, как мин 1 буква в нижнем регистре и 1 в верхнем.
const readlineSync = require("readline-sync");

let symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let abc = "abcdefghijklmnopqrstuvwxyz";
let ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789"

let password = "";

for (let i = 0; i < 10; ++i) {
    let r = Math.floor(Math.random() * symbols.length);
    password += symbols[r];
}
console.log(password);
let hasabc = false;
let hasABC = false;
let hasNumbers = false;
while (!hasabc || !hasABC || !hasNumbers) {
    for (let j = 0; j < password.length; ++j) {
    if (abc.includes(password[j])) hasabc = true;
    if (ABC.includes(password[j])) hasABC = true;
    if (numbers.includes(password[j])) hasNumbers = true;
    }
    if (!hasabc) password = password.replace(password[Math.floor(Math.random() * 11)], 
        abc[Math.floor(Math.random() * abc.length)]);
    if (!hasABC) password = password.replace(password[Math.floor(Math.random() * 11)], 
        ABC[Math.floor(Math.random() * ABC.length)]);
    if (!hasNumbers) password = password.replace(password[Math.floor(Math.random() * 11)], 
        numbers[Math.floor(Math.random() * numbers.length)]);
}
console.log(password);