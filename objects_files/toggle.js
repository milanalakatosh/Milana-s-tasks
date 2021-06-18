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

let done = true;
let x;
if (toggle >= 0 && toggle < toDoList.length) {
    if (toDoList[toggle].completed) toDoList[toggle].completed = false;
    else toDoList[toggle].completed = true;
    if (toDoList[toggle].completed) x = "[x]";
    else x = "[ ]";
} else {
    done = false;
}
fs.writeFileSync("toDoList.json", JSON.stringify(toDoList));

console.log(done ? x + " " + toggle + ". " + toDoList[toggle].title : "wrong number");




