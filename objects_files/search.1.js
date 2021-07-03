//Спросить у пользователя строку для поиска
//Прочитать список дел из файла todos.json
//Найти те дела, в которые входит данная строка (поиск должен быть регистронезависимым, то есть подстрока “abc” должна быть найдена и в деле “abcde” и в деле “ABcde”)
//Вывести список дел, при том найденная подстрока должна быть выведена красным цветом
//Если ни одного дела не найдено, то вывести сообщение “no matched todos” (нет соответствующих дел)
const chalk = require("chalk");
const fs = require("fs");
const readlileSync = require("readline-sync");

let s = readlileSync.question("search?\n> ").toLowerCase();

let toDoList = JSON.parse(fs.readFileSync("toDoList.json"));

let found = false;
for (let i = 0; i < toDoList.length; ++i) {
    let toDo = toDoList[i];
    let index;
    let fromIndex = 0;
    let arrayIndex = [];

    do {
        index = toDo.title.toLowerCase().indexOf(s, fromIndex);
        if (index !== -1) {
            arrayIndex.push(index);
            fromIndex = index + 1;
            found = true;
        }
    } while (index !== -1);

    if (arrayIndex.length !== 0) {
        let todoTitleCopy = "";
        let begin = 0;
        for (let a = 0; a < arrayIndex.length; ++a) {
            todoTitleCopy += toDo.title.slice(begin, arrayIndex[a]) +
                chalk.red(toDo.title.slice(arrayIndex[a], arrayIndex[a] + s.length));
            begin = arrayIndex[a] + s.length;
            if (a === arrayIndex.length - 1) {
                todoTitleCopy += toDo.title.slice(begin);
            }
        }
        let x = toDo.completed ? "[x]" : "[ ]";
        console.log(x + " " + i + ". " + todoTitleCopy);
    }
}
if (!found) console.log("no matched todos");

