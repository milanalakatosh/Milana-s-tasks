//Программа должна:
//Спросить пользователя какое дело он хочет добавить
//Прочитать список уже существующих дел из файла todos.json
//Добавить в этот список дело, которое добавил пользователь, при этом флаг completed должен быть равен false
//Записать дополненный список обратно в файл todos.json
//Вывести сообщение “done!” (сделно!)
const fs = require("fs");
const readFileSync = require("readline-sync");
let todoAdd = readFileSync.question("todo?\n> ");
let newDo = {
    title: todoAdd,
    completed: false,
};

let toDoList = JSON.parse(fs.readFileSync("toDoList.json"));

toDoList.push(newDo);
console.log ("done!");

fs.writeFileSync("toDoList.json", JSON.stringify(toDoList));

