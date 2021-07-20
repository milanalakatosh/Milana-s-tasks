//Прочитать список дел из файла todos.json
//Отсортировать список дел при помощи метода массива sort таким образом: 
//сначала идёт список невыполненных дел по алфавиту, затем идёт список выполненных дел по алфавиту
//Записать отсортированный список в файл todos.json
//Вывести отсортированный список дел
import * as fs from 'fs';

let toDoList = JSON.parse(fs.readFileSync("toDoList.json"));

function comparator (a, b) {
    if (a.completed && !b.completed) {
        return 1;
    }
    else if (!a.completed && b.completed) {
        return -1;
    } else {
        return a.title.localeCompare(b.title);
    }  
}
toDoList.sort(comparator);
console.log(toDoList);
fs.writeFileSync("toDoList.json", JSON.stringify(toDoList));
