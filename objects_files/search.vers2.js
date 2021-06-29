const fs = require("fs");
const readlineSync = require("readlineSync");
const chalk = require("chalk");

let searchStr = readlineSync.question("Введите строку для поиска:\n>").toLowerCase();
let todoArr = JSON.parse(fs.readFileSync("toDoList.json"));
let foundArrLowCase = [];
let indexesArr = [{}];
let colorArr = [];

for (words of todoArr) {
    foundArrLowCase.push(words.title.toLowerCase());
}
for (let i = 0; i < foundArrLowCase.length; ++i) {
    if (foundArrLowCase[i]).indexOf(searchStr) > -1) {
        for (let j = 0; j < foundArrLowCase.length; ++j) {
            

        }
    }
}
