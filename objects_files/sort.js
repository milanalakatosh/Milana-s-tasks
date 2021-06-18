//Прочитать список дел из файла todos.json
//Отсортировать список дел при помощи метода массива sort таким образом: 
//сначала идёт список невыполненных дел по алфавиту, затем идёт список выполненных дел по алфавиту
//Записать отсортированный список в файл todos.json
//Вывести отсортированный список дел

const fs = require("fs");

let toDoList = JSON.parse(fs.readFileSync("toDoList.json"));

let array1 = [{}];
let array2 = [{}];
for (let i = 0; i < toDoList.length; ++i) {
    if (!toDoList[i].completed) array1.push(toDoList[i]);
    else array2.push(toDoList[i]);
}
array1 = array1.sort();
array2 = array2.sort();

//JSON.sort();
fs.writeFileSync("toDoList.json", JSON.stringify(toDoList));
console.log(array1, array2);
