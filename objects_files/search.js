//Спросить у пользователя строку для поиска
//Прочитать список дел из файла todos.json
//Найти те дела, в которые входит данная строка (поиск должен быть регистронезависимым, то есть подстрока “abc” должна быть найдена и в деле “abcde” и в деле “ABcde”)
//Вывести список дел, при том найденная подстрока должна быть выведена красным цветом
//Если ни одного дела не найдено, то вывести сообщение “no matched todos” (нет соответствующих дел)
const chalk = require("chalk");
const fs = require("fs");
const readFileSync = require("readline-sync");

let s = readFileSync.question("search?\n> ").toLowerCase();
let found = false;

let toDoList = JSON.parse(fs.readFileSync("toDoList.json"));

for (let i = 0; i < toDoList.length; ++i) {
    let index = toDoList[i].title.toLowerCase().indexOf(s);
    if (index !== -1) toDoList[i].title = toDoList[i].title.slice(0, i) + 
        chalk.red(toDoList[i].title.slice(i, i + s.length)) + toDoList[i].title.slice(i + s.length);
        found = true;
        let x;
        if (toDoList[i].completed) x = "[x]";
        else x = "[ ]";
    console.log(x + " " + i + ". " + toDoList[i].title);
}
console.log(toDoList);
if (!found) console.log("no matched todos");

