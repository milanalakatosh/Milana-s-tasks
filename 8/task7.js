const readlineSync = require ("readline-sync");

let str = readlineSync.question("String?\n> ");

array = str.split(" ");
array2 = [];

for (let i = 0; i < array.length; ++i){
    if (array[i] !== '') {
        array2.push(array[i]);
    }
}
let strNew = "";
strNew = array2.join(" ");

console.log(strNew);

