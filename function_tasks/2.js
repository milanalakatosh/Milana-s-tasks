const chalk = require("chalk");
const fs = require("fs");
const readlineSync = require("readline-sync");

initTodos();

while (true) {
    let str = readlineSync.question("> ");
    let words = str.split(" ");
    let command = words[0]; //ПОЧЕМУ ИНДЕКС 0 это command???

    if (command === "list") {
        listTodos("");
    } else if (command === "list-all") {
        listTodos("all");
    } else if (command === "list-completed") {
        listTodos("completed");
        //
    } else if (command === "add") {
        let title = words.splice(1, words.length - 1).join(" ");//правильно ли??
        let completed = Boolean(words[words.length - 1]);
        addTodos(title, completed);
        //
    } else if (command === "toggle") {
        let n = parseInt(words[1]);
        toggleTodo(n);
        //
    } else if (command === "remove") {
        let n = parseInt(words[1]);
        removeTodo(n);
        //
    } else if (command === "clear") {
        clearTodos();
        //
    } else if (command === "search") {
        let x = parseInt(words[1]);
        searchTodos(x);
        //
    } else if (command === "exit") {
        break;
        //
    } else {
        console.log("wrong command");
    }
}

function loadToDoList() {
    return JSON.parse(fs.readFileSync("toDoList.json"));
}

function saveToDoList(toDoList) {
    fs.writeFileSync("toDoList.json", JSON.stringify(toDoList));
}

function initTodos() {
    if (!fs.existsSync("toDoList.json")) {
        let toDoList2 = [
            {
                title: "feed a cat",
                completed: true,
            },
            {
                title: "buy products",
                completed: false,
            },
            {
                title: "watch TV",
                completed: false,
            },
        ];
        saveToDoList(toDoList2);
    }
}

function listTodos(type) {
    let toDoList = loadToDoList();

    for (let toDo of toDoList) {
        if ((type === "" && !toDo.completed) || type === "all" ||
            (type === "completed" && toDo.completed)) {
            let completedStr;
            if (type === "completed" || type === "") {
                completedStr = "";
            } else if (!toDo.completed) {
                completedStr = " (не выполнено)";
            } else {
                completedStr = " (выполнено)";
            }

            console.log(toDo.title + "; " + toDo.completed + completedStr);
        }
    }

    function addTodos(title, completed) {
        let newDo = {
            title: title,
            completed: completed,
        };

        let toDoList = loadToDoList();
        toDoList.push(newDo);
        saveToDoList(toDoList);
    }

    function toggleTodo(n) {
        let toDoList = loadToDoList();
        if (toDoList[n - 1].completed) toDoList[n - 1].completed = false;
        else toDoList[n - 1].completed = true;
        saveToDoList(toDoList);
    }

    function removeTodo(n) {
        let toDoList = loadToDoList();
        toDoList.splice(n, 1);
        saveToDoList(toDoList);
    }

    function clearTodos() {
        let toDoList = loadToDoList();
        let toDoList2 = [];
        for (let toDo of toDoList) {
            if (!toDo.completed) {
                toDoList2.push(toDo);
            }
        }
        saveToDoList(toDoList2);
    }

    function searchTodos(x) {
        let toDoList = loadToDoList();
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
                console.log(x + " " + i + ". " + todoTitleCopy);
            }
        }

    }
}