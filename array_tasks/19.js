//Проверьте, образует ли элементы массива в данном порядке арифметическую или геометрическую прогрессии.
const readlineSync = require("readline-sync");

let a = JSON.parse(readlineSync.question("Введите массив:\n> "));
let arithmeticProgression;
let geometricProgression;

for (let i = 1; i < a.length - 1; ++i) {
    let d = a[1] - a[0];
    let q = a[1] / a[0];
    if (a[i+1] - a[i] === d) {
        arithmeticProgression = true;
    } else if (a[i+1] === q * a[i]) {
        geometricProgression = true;
    } else {
        arithmeticProgression = false;
        geometricProgression = false;
        break;
    }
}
    
    
console.log(arithmeticProgression ? "элементы массива в данном порядке образуют арифметическую прогрессию"
    : geometricProgression ? "элементы массива в данном порядке образуют геометрическую прогрессию"
    : "элементы массива в данном порядке не образуют ни арифметической ни геометрической прогрессии");