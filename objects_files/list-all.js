// Напишите программу, которая выводит список дел из файла todos.json в таком формате:

const fs = require("fs");

let toDoList = JSON.parse(fs.readFileSync("toDoList.json"));

for (let i = 1; i <= toDoList.length; ++i) {
    let toDo = toDoList[i-1];
    let doCompleted = toDo.completed ? "[x]" : "[ ]";
    console.log(doCompleted + " " + i + ". " + toDo.title);
}
