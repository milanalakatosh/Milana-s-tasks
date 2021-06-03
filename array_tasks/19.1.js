const readlineSync = require("readline-sync");

let a = JSON.parse(readlineSync.question("Введите массив:\n> "));
// let arithmeticProgression;
// let geometricProgression;
let d = a[1] - a[0];
let q = a[1] / a[0];
let arithmeticPotential = true;
let geometricPotential = true;

for (let i = 1; i < a.length - 1; ++i) {
    if (a[i+1] - a[i] !== d) arithmeticPotential = false;
    if (a[i+1] !== q * a[i]) geometricPotential = false;
    if (!arithmeticPotential && !geometricPotential) break;
}
console.log(arithmeticPotential && geometricPotential ? "элементы массива в данном порядке образуют и арифметическую, и геометрическую прогрессии" 
    : arithmeticPotential && !geometricPotential ? "элементы массива в данном порядке образуют арифметическую прогрессию"
    : geometricPotential && !arithmeticPotential ? "элементы массива в данном порядке образуют геометрическую прогрессию"
    : "элементы массива в данном порядке не образуют ни арифметической, ни геометрической прогрессии");