//Программа должна:

//Спросить пользователя порядковый номер дела, которое нужно удалить из списка
//Прочитать список дел из файла todos.json
//Если есть дело с таким номером то:
//удалить дело из списка при помощи метода массива splice
//Записать изменённый список обратно в файл todos.json
//Вывести сообщение “done!”
//Если такого дела нет, то вывести сообщение “wrong number” (неправильный номер)
const fs = require("fs");
const readFileSync = require("readline-sync");
let todoRemove = parseInt(readFileSync.question("remove?\n> "));

let toDoList = JSON.parse(fs.readFileSync("toDoList.json"));

let removed = true;
if (todoRemove >= 0 && todoRemove < toDoList.length) toDoList.splice(todoRemove, 1);
else removed = false;

fs.writeFileSync("toDoList.json", JSON.stringify(toDoList));

console.log(removed ? "done!" : "wrong number");
