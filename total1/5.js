//Дан файл  с логинами и паролями (каждая пара записана через пробел с новой строки). 
//Найдите топ 3 самых популярных паролей.
import fs from "fs";
import _ from "lodash";

const text = fs.readFileSync('passwords.txt').toString();
const arr = text.split('\n');
let passwords = [];

for (let j = 0; j < arr.length; ++j) {
    let str = arr[j].split(" ");
    passwords.push(str[1]);
}

const arrayPopular = [];
let maxCount = 1;
for (let i = 0; i < passwords.length; ++i) {
    let count = 0;
    for (let j = 0; j < passwords.length; ++j) {
        if (i !== j) {
            if (passwords[i] === passwords[j]) {
                count += 1;
            }
        }
    }
    if (count >= maxCount && !arrayPopular.includes(passwords[i])) {
        arrayPopular.push(passwords[i]);
    }
}
console.log(arrayPopular);