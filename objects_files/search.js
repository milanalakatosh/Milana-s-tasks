//Спросить у пользователя строку для поиска
//Прочитать список дел из файла todos.json
//Найти те дела, в которые входит данная строка (поиск должен быть регистронезависимым, то есть подстрока “abc” должна быть найдена и в деле “abcde” и в деле “ABcde”)
//Вывести список дел, при том найденная подстрока должна быть выведена красным цветом
//Если ни одного дела не найдено, то вывести сообщение “no matched todos” (нет соответствующих дел)
const chalk = require("chalk");
const fs = require("fs");
const readFileSync = require("readline-sync");

let s = readFileSync.question("search?\n> ").toLowerCase();

let toDoList = JSON.parse(fs.readFileSync("toDoList.json"));

let found = false;
for (let i = 0; i < toDoList.length; ++i) {
    let toDo = toDoList[i];
    let index = toDo.title.toLowerCase().indexOf(s);
    if (index !== -1) {
        found = true;
        toDo.title = toDo.title.slice(0, index) + chalk.red(toDo.title.slice(index, index + s.length)) 
            + toDo.title.slice(index + s.length);
    }
    let x = toDo.completed ? "[x]" : "[ ]";
    console.log(x + " " + i + ". " + toDo.title);
}
if (!found) console.log("no matched todos");

fs.writeFileSync("toDoList.json", JSON.stringify(toDoList));