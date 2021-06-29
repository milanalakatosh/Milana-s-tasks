//Спросить пользователя порядковый номер дела, которое нужно пометить как выполненное/невыполненное
//Прочитать список дел из файла todos.json
//Если есть дело с таким номером то:
//изменить флаг completed дела на противоположный (с false на true или наоборот с true на false)
//Записать изменённый список обратно в файл todos.json
//Вывести дело в формате “[x] 1. feed cat” или “[ ] 1. feed cat”
//Если такого дела нет, то вывести сообщение “wrong number” (неправильный номер)
const fs = require("fs");
const readlineSync = require("readline-sync");

let toggle = parseInt(readlineSync.question("toggle?\n> "));

let toDoList = JSON.parse(fs.readFileSync("toDoList.json"));

if (toggle >= 0 && toggle < toDoList.length) {
    let toDo = toDoList[toggle];
    toDo.completed = !toDo.completed;

    fs.writeFileSync("toDoList.json", JSON.stringify(toDoList));

    let x = toDo.completed ? "[x]" : "[ ]";
    console.log(x + " " + toggle + ". " + toDo.title);
} else {
    console.log("wrong number");
}




