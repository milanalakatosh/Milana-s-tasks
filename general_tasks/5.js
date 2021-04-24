//выбор дня недели
const readlineSync = require("readline-sync");

let array = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
let i = readlineSync.question("Введите номер:\n> ");

console.log(array[i-1]);