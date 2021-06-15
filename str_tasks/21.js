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
let hasabc = false;
let hasABC = false;
let hasNumbers = false;
while (!hasabc || !hasABC || !hasNumbers) {
    for (let j = 0; j < password.length; ++j) {
        if (abc.includes(password[j])) hasabc = true;
        if (ABC.includes(password[j])) hasABC = true;
        if (numbers.includes(password[j])) hasNumbers = true;
    }
    let index;
    if (!hasabc) {
        index = Math.floor(Math.random() * 11);
        password = password.slice(0,index) + abc[Math.floor(Math.random()*abc.length)] + 
            password.slice(index+1);   
    }
    if (!hasABC) {
        index = Math.floor(Math.random() * 11);
        password = password.slice(0,index) + ABC[Math.floor(Math.random()*ABC.length)] +
            password.slice(index+1);  
    }
    if (!hasNumbers) {
        index = Math.floor(Math.random() * 11);
        password = password.slice(0,index) + numbers[Math.floor(Math.random()*numbers.length)] +
            password.slice(index+1);
    }
}
console.log(password);