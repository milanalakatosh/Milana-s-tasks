//Нужно записать в файл todos.json список таких дел (либо можете записать другие дела, которые придумаете):

// feed cat (выполнено)
// buy products (не выполнено)
// watch TV (не выполнено)
// Объект, в котором храниться одно дело выглядит так:

// {
//   title: "feed cat", // название дела
//   completed: true, // true - выполнено, false - не выполнено
// }
const fs = require("fs");
const readlineSync = require("readline-sync");

let deal = readlineSync.question("Add a new deal?\n> ");
let toDoList = [
    {
        deal: deal,
        done: false,
    },
];

// deal = readlineSync.question("Add a new deal?\n> ");
// toDoList.push(deal);
fs.writeFileSync("toDoList.json", JSON.stringify(toDoList));


