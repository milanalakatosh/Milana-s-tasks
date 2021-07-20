import chalk from 'chalk';
import * as fs from 'fs';
// //loadTodos(): object[]
// //Читает список дел из файла todos.json и вовзращает их в виде массива.
export function loadTodos() {
    return JSON.parse(fs.readFileSync("toDoList.json"));
}

// //saveTodos(todos: object[]): void	
// //Записывает список дел в файл todos.json
export function saveTodos(toDoList) {
    fs.writeFileSync("toDoList.json", JSON.stringify(toDoList));
}

// //renderTodo(num: number, todo: object): string	
// //Возвращает строку вида “[x] 1. feed cat”. num - порядковый номер дела, todo - само дело.
export function renderTodo(num, todo, y) {
    const x = todo.completed ? "[x]" : "[ ]";
    const result = x + " " + num + ". " + (y === undefined ? todo.title : y);
    return result;
}

// //initTodos(): void	
// //В случае если файла todos.json не сущ-ет записывает в файл todos.json начальный список задач. 
// //Использует функцию saveTodos. 
export function initTodos() {
    if (!fs.existsSync("toDoList.json")) {
        const toDoList = [
            {
                title: "watch TV",
                completed: false
            },
            {
                title: "to feed the cat",
                completed: false
            },
            {
                title: "to read a book",
                completed: false
            },
        ];
        saveTodos(toDoList);
    }
}
//listTodos(type: string): void	Выводит список задач. type может быть ‘all’ (все задачи), ‘completed’ 
//(только выполненные), ‘uncompleted’ (только невыполненные). 
//Для чтения списка задач использовать функцию loadTodos, для вывода каждой задачи renderTodo.
export function listTodos(type) {
    const toDoList = loadTodos();
    for (let i = 0; i < toDoList.length; ++i) {
        const todo = toDoList[i];
        if (type === "all" || (type === "completed" && todo.completed) ||
            (type === "uncompleted" && !todo.completed)) {
            console.log(renderTodo(i + 1, todo));
        }
    }
}
//addTodo(title: string): void  Функция должна сделать всё, что написано в задаче 9.5 кроме 1пункта:
//Прочитать список уже существующих дел из файла todos.json
//Добавить в этот список дело, которое добавил пользователь, при этом флаг completed должен быть равен false
//Записать дополненный список обратно в файл todos.json
//title - это название нового дела. Использует функции loadTodos и saveTodos.
export function addTodo(title) {
    const toDoList = loadTodos();
    const newDo = {
        title: title,
        completed: false,
    };
    toDoList.push(newDo);
    saveTodos(toDoList);
    console.log("done!");
}
//toggleTodo(num: number): void  Функция должна сделать всё, что написано в задаче 9.6 кроме 1 пункта.
//Прочитать список дел из файла todos.json, изменить флаг дела num completed дела на противоположный
//Записать изменённый список обратно в файл todos.json
//Вывести дело в формате “[x] 1. feed cat” или “[ ] 1. feed cat”
//Если такого дела нет, то вывести сообщение “wrong number” (неправильный номер) 
//num - это номер дела, состояние которого нужно изменить. 
//Использует функции loadTodos, saveTodos и renderTodo.
export function toggleTodo(num) {
    const toDoList = loadTodos();
    if (toDoList.length + 1 >= num) {
        const todo = toDoList[num - 1];
        //todo.completed = todo.completed ? false : true;
        todo.completed = !todo.completed;
        saveTodos(toDoList);
        console.log(renderTodo(num, todo));
    } else {
        console.log("wrong number");
    }
}
//removeTodo(num: number): void  Функция должна сделать всё, что написано в задаче 9.7 кроме 1 пункта. 
//num - это номер дела, которое нужно удалить. Использует функции loadTodos и saveTodos.
export function removeTodo(num) {
    const toDoList = loadTodos();
    if (toDoList.length + 1 >= num) {
        toDoList.splice(num - 1, 1);
        saveTodos(toDoList);
        console.log("done!");
    } else {
        console.log("wrong number");
    }
}
//clearTodos(): void	
//Функция должна сделать всё, что написано в задаче 9.8. Прочитать список дел из файла todos.json
//Сформировать новый массив, из которого будут удалены все выполненные дела
//Записать новый список в файл todos.json
//Вывести сообщение “{x} todos removed” ({x} дел удалено), где {x} - 
//это количество удалённых из списка дел
//Использует функции loadTodos и saveTodos.
export function clearTodos() {
    const toDoList = loadTodos();
    const toDoList2 = [];
    //посмотреть задачу 9.7 clear (х) :длина toDoList.length-toDoList2.length)??
    for (const todo of toDoList) {
        if (!todo.completed) {
            toDoList2.push(todo)
        }
    }
    saveTodos(toDoList2);
    const n = toDoList.length - toDoList2.length;
    console.log(n + " todos removed");
}
//searchTodos(str: string): void  Только для тех кто сделал задачу 9.9. 
//Функция должна сделать всё, что написано в задаче 9.9 кроме 1 пункта. str - это строка для поиска. 
//Использует функции loadTodos, saveTodos и renderTodo. 
//В renderTodo нужно добавить третий параметр highlight - подстрока, которую нужно подсветить.
export function searchTodos(str) {
    const toDoList = loadTodos();
    let found = false;
    for (let i = 0; i < toDoList.length; ++i) {
        const toDo = toDoList[i];
        let index;
        let fromIndex = 0;
        const arrayIndex = [];
        do {
            index = toDo.title.toLowerCase().indexOf(str, fromIndex);
            if (index !== -1) {
                found = true;
                arrayIndex.push(index);
                fromIndex = index + 1;
            }
        } while (index !== -1);

        if (arrayIndex.length !== 0) {
            let todoTitleCopy = "";
            let begin = 0;
            for (let a = 0; a < arrayIndex.length; ++a) {
                todoTitleCopy += toDo.title.slice(begin, arrayIndex[a]) +
                    chalk.red(toDo.title.slice(arrayIndex[a], arrayIndex[a] + str.length));
                begin = arrayIndex[a] + str.length;
                if (a === arrayIndex.length - 1) {
                    todoTitleCopy += toDo.title.slice(begin);
                }
            }
            console.log(renderTodo(i + 1, toDo, todoTitleCopy));
        }
    }
    if (!found) console.log("no matched todos");
}

export function sortTodos() {
    const toDoList = loadTodos();
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
    saveTodos(toDoList);
    console.log(toDoList);
}


