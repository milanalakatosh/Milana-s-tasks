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
    let index;
    let fromIndex = 0;
    let arrayIndex = [];
    do {
        index = toDo.title.toLowerCase().indexOf(s, fromIndex);
        if (index !== -1) {
            arrayIndex.push(index);
            fromIndex = index + 1;
        } else break;
    } while (index !== -1);
    if (arrayIndex !== []) {
        let toDoTitleCopy = toDo.title;
        toDo.title = "";
        for (let a = 0; a < arrayIndex; ++a) {
            toDo.title += todoTitleCopy.slice(fromIndex, arrayIndex[a]) + chalk.red(arrayIndex[a]);
        }
    toDo.title += todoTitleCopy.slice(fromIndex, index) + chalk.red(todoTitleCopy[index]);//slice(index, index + s.length)) 
                //+ toDo.title.slice(index + s.length);
            fromIndex = index;
        } else toDo.title += toDo.title.slice(fromIndex);
    }
    if (i === toDoList.length - 1) fs.writeFileSync("toDoList.json", JSON.stringify(toDoList));
     //почему условие true не подходит?
    let x = toDo.completed ? "[x]" : "[ ]";
    console.log(x + " " + i + ". " + toDo.title);

if (!found) console.log("no matched todos");

