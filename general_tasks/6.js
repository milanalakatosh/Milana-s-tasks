const readlineSync = require ("readline-sync");

let x = readlineSync.question("Введите координату X: ");
let y = readlineSync.question("Введите координату Y: ");

if (x>0 && y>0) {
    console.log("I четверть плоскости");
} else if (x<0 && y>0) {
    console.log("II четверть плоскости");
} else if (x<0 && y<0) {
    console.log("III четверть плоскости");
} else {
    console.log("IV четверть плоскости");
} 