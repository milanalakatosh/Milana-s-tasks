import {
    initTodos,
    listTodos,
    addTodo,
    toggleTodo, 
    removeTodo,
    clearTodos,
    searchTodos,
    sortTodos
} from "./1.js";

import * as readlineSync from 'readline-sync';

initTodos();

// eslint-disable-next-line no-constant-condition
while (true) {
    const str = readlineSync.question("> ");
    const words = str.split(" ");
    const command = words[0]; //ПОЧЕМУ ИНДЕКС 0 это command???

    if (command === "list") {
        listTodos("uncompleted");
    } else if (command === "list-all") {
        listTodos("all");
    } else if (command === "list-completed") {
        listTodos("completed");
        //
    } else if (command === "add") {
        const title = words.splice(1).join(" ");//правильно ли??
        //let completed = Boolean(words[words.length - 1]);//дело же должно быть не выполненное?
        addTodo(title);
        //
    } else if (command === "toggle") {
        const n = parseInt(words[1]);
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
        const x = words[1];
        searchTodos(x);
        //
    } else if (command === "sort") {
        sortTodos();
        //
    } else if (command === "exit") {
        break;
        //
    } else {
        console.log("wrong command");
    }
}
