//Подсчитайте количество строчных и прописных букв в строке. 
//Считается, что в строке могут быть только английские буквы и пробелы.
import * as readlineSync from "readline-sync";

const str = readlineSync.question("String?\n> ");
//one Two Three
let re = /a-z, [^/s]/;//или х?
let re2 = /X/, [^/s]/;
let a1 = re.exec(str);
//let small = 0;
console.log(a1.length);