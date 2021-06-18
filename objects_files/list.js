//Напишите программу, которая выводит список только невыполненных дел из файла todos.json:
const fs = require("fs");


let toDoList = JSON.parse(fs.readFileSync("toDoList.json"));

for (let i = 1; i <= toDoList.length; ++i) {
    let toDo = toDoList[i-1];
    if (!toDo.completed) console.log(i + ". " + toDo.title);
}