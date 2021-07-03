const fs = require("fs");
// //loadTodos(): object[]
// //Читает список дел из файла todos.json и вовзращает их в виде массива.
function loadTodos() {
    return JSON.parse(fs.readFileSync("toDoList.json"));
}

// //saveTodos(todos: object[]): void	
// //Записывает список дел в файл todos.json
function saveTodos(toDoList) {
    fs.writeFileSync("toDoList.json", JSON.stringify(toDoList));
}

// //renderTodo(num: number, todo: object): string	
// //Возвращает строку вида “[x] 1. feed cat”. num - порядковый номер дела, todo - само дело.
function renderTodo(num, todo) {
    let toDoList = loadTodos();
    let x = [ ];
    if (todo.completed[num-1] === true) x = [x];
    return x + " " + num + ". " + todo.title[num-1];
}

// //initTodos(): void	
// //В случае если файла todos.json не сущ-ет записывает в файл todos.json начальный список задач. 
// //Использует функцию saveTodos. 
function initTodos() {
    if (!fs.existsSync("toDoList.json")) {
        let toDoList = [
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
function listTodos(type) {
    let toDoList = loadTodos();
    for (let todo of toDoList) {
        if (type === "all" || (type === "completed" && todo.completed) ||
            (type === "uncompleted" && !todo.completed)) {
        let result = renderTodo();//как это вывести
        console.log(result);//надо изменять renderTodo
        }   
    }
}
//addTodo(title: string): void  Функция должна сделать всё, что написано в задаче 9.5 кроме 1пункта:
//Прочитать список уже существующих дел из файла todos.json
//Добавить в этот список дело, которое добавил пользователь, при этом флаг completed должен быть равен false
//Записать дополненный список обратно в файл todos.json
//title - это название нового дела. Использует функции loadTodos и saveTodos.
function addTodo(title) {
    let toDoList = loadTodos();
    let newDo = {
        title: title,
        completed: false,
    };
    toDoList.push(newDo);
    saveTodos(toDoList);
}
//toggleTodo(num: number): void  Функция должна сделать всё, что написано в задаче 9.6 кроме 1 пункта.
//Прочитать список дел из файла todos.json, изменить флаг дела num completed дела на противоположный
//Записать изменённый список обратно в файл todos.json
//Вывести дело в формате “[x] 1. feed cat” или “[ ] 1. feed cat”
//Если такого дела нет, то вывести сообщение “wrong number” (неправильный номер) 
//num - это номер дела, состояние которого нужно изменить. 
//Использует функции loadTodos, saveTodos и renderTodo.
function toggleTodo(num) {
    let toDoList = loadTodos();
    if (toDoList[num - 1].completed) toDoList[num - 1].completed = false;
        else toDoList[num - 1].completed = true;
        saveTodos(toDoList);
    for (let todo of toDoList) {
        renderTodo()//аналогично
    }
}
//removeTodo(num: number): void  Функция должна сделать всё, что написано в задаче 9.7 кроме 1 пункта. 
//num - это номер дела, которое нужно удалить. Использует функции loadTodos и saveTodos.
function removeTodo(num) {
    let toDoList = loadTodos();
        toDoList.splice(num, 1);
        saveTodos(toDoList);
}
//clearTodos(): void	
//Функция должна сделать всё, что написано в задаче 9.8. Прочитать список дел из файла todos.json
//Сформировать новый массив, из которого будут удалены все выполненные дела
//Записать новый список в файл todos.json
//Вывести сообщение “{x} todos removed” ({x} дел удалено), где {x} - 
//это количество удалённых из списка дел
//Использует функции loadTodos и saveTodos.
function clearTodos() {
    let toDoList = loadTodos();
    let toDoList2 = [];
    //посмотреть задачу 9.7 clear (х) :длина toDoList.length-toDoList2.length)??
    for (let todo of toDoList) {
        if (!todo.completed) {
            toDoList2.push(todo)
        }
    }
    saveTodos(toDoList2);
}
//searchTodos(str: string): void  Только для тех кто сделал задачу 9.9. 
//Функция должна сделать всё, что написано в задаче 9.9 кроме 1 пункта. str - это строка для поиска. 
//Использует функции loadTodos, saveTodos и renderTodo. 
//В renderTodo нужно добавить третий параметр highlight - подстрока, которую нужно подсветить.
function searchTodos(str) {
    let toDoList = loadTodos();
    for (let i = 0; i < toDoList.length; ++i) {
        let toDo = toDoList[i];
        let index;
        let fromIndex = 0;
        let arrayIndex = [];
        do {
            index = toDo.title.toLowerCase().indexOf(x, fromIndex);
            if (index !== -1) {
                arrayIndex.push(index);
                fromIndex = index + 1;
            }
        } while (index !== -1);

        if (arrayIndex.length !== 0) {
            let todoTitleCopy = "";
            let begin = 0;
            for (let a = 0; a < arrayIndex.length; ++a) {
                todoTitleCopy += toDo.title.slice(begin, arrayIndex[a]) +
                    chalk.red(toDo.title.slice(arrayIndex[a], arrayIndex[a] + x.length));
                begin = arrayIndex[a] + x.length;
                if (a === arrayIndex.length - 1) {
                    todoTitleCopy += toDo.title.slice(begin);
                }
            }
            let x = toDo.completed ? "[x]" : "[ ]";
            console.log(x + " " + i + ". " + todoTitleCopy);//аналогично
        }
    }

}


