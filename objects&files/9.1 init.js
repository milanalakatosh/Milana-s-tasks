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

let toDoList = [
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

// deal = readlineSync.question("Add a new deal?\n> ");
// toDoList.push(deal);
fs.writeFileSync("toDoList.json", JSON.stringify(toDoList));


