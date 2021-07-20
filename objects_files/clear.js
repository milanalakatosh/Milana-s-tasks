//Программа должна:
//Прочитать список дел из файла todos.json
//Сформировать новый массив, из которого будут удалены все выполненные дела
//Записать новый список в файл todos.json
//Вывести сооб-е “{x} todos removed” ({x} дел удалено),где {x} - это кол-во удалённых из списка дел
const fs = require("fs");

const toDoList = JSON.parse(fs.readFileSync("toDoList.json"));

const x = [];
for (let i = 0; i < toDoList.length; ++i) {
    if (toDoList[i].completed) x.push(toDoList[i]);
}

fs.writeFileSync("toDoList.json", JSON.stringify(x));

const n = toDoList.length - x.length;
console.log(n + " todos removed");
