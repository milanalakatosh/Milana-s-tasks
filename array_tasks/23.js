//Дан массив из n элементов. Переставьте его элементы случайным образом.
import readlineSync from "readline-sync";

let a = JSON.parse(readlineSync.question("Введите массив:\n> "));
let n = a.length;
let rearrange = Math.pow(n, 2);

for (let i = 0; i < rearrange; ++i) {
    let k = Math.floor(Math.random() * n);
    let j = Math.floor(Math.random() * n);
    let keepElement = a[k];
    a[k] = a[j];
    a[j] = keepElement;
}
console.log(a);
  

