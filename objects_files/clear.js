//Программа должна:
//Прочитать список дел из файла todos.json
//Сформировать новый массив, из которого будут удалены все выполненные дела
//Записать новый список в файл todos.json
//Вывести сооб-е “{x} todos removed” ({x} дел удалено),где {x} - это кол-во удалённых из списка дел
const fs = require("fs");

let toDoList = JSON.parse(fs.readFileSync("toDoList.json"));

let x = 0;
for (let i = 0; i < toDoList.length; ++i) {
    if (!toDoList[i].completed) {
        toDoList.splice(i, 1);
        x += 1;
        i --;
    }
}
fs.writeFileSync("toDoList.json", JSON.stringify(toDoList));
console.log(x + " todos removed");
