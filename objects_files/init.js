//Нужно записать в файл todos.json список таких дел (либо можете записать другие дела, которые придумаете):

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


fs.writeFileSync("toDoList.json", JSON.stringify(toDoList));



