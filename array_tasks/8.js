//Дан массив a. 
//Определите, каких чисел в массиве больше: которые делятся на первый элемент массива или 
//которые делятся на последний элемент массива.

const readlineSync = require("readline-sync");

let a = JSON.parse(readlineSync.question("Введите массив:\n> "));

let numberFirstDiv = 0;
let numberSecondDiv = 0;
for (let i = 0; i < a.length; ++i) {
   if (a[i] % a[0] === 0) {
      numberFirstDiv += 1;
   } else if (a[i] % a[a.length - 1] === 0) {
      numberSecondDiv += 0;
   }
}
console.log(a[0], a[a.length - 1]);
console.log(
   numberFirstDiv > numberSecondDiv
      ? "В массиве больше чисел, делящихся на первый элемент массива."
      : numberFirstDiv === numberSecondDiv
         ? "В массиве одинаковое количество чисел, делящихся на первый и последний элементы массива."
         : "В массиве больше чисел, делящихся на последний элемент массива.");


