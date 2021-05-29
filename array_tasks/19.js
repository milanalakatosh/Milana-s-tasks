//Проверьте, образует ли элементы массива в данном порядке арифметическую или геометрическую прогрессии.
const readlineSync = require("readline-sync");

let a = JSON.parse(readlineSync.question("Введите массив:\n> "));
let arithmeticProgression;
let geometricProgression;
let d = a[1] - a[0];
let q = a[1] / a[0];

for (let i = 1; i < a.length - 1; ++i) {
    if (a[i+1] - a[i] === d) arithmeticProgression = true;
    else {
        arithmeticProgression = false;
        break; 
    }
}
for (let i = 1; i < a.length - 1; ++i) {
    if (a[i+1] === q * a[i]) geometricProgression = true;
    else {
        geometricProgression = false;
        break;
    }
}
    
    
console.log(arithmeticProgression && geometricProgression ? "элементы массива в данном порядке образуют и арифметическую, и геометрическую прогрессии" 
    : arithmeticProgression && !geometricProgression ? "элементы массива в данном порядке образуют арифметическую прогрессию"
    : geometricProgression && !arithmeticProgression ? "элементы массива в данном порядке образуют геометрическую прогрессию"
    : "элементы массива в данном порядке не образуют ни арифметической, ни геометрической прогрессии");