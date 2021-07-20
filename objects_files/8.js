//Прочитайте из файла “8.json” произвольный объект. 
//Выведете на экран количество свойств этого объекта, которые являются строками. 
//Подсказка: для определения, что значение является строкой используйте typeof v === 'string'
import * as fs from 'fs';
import path from 'path';

import { dirName } from "../utils.js";

const obj = JSON.parse(fs.readFileSync(path.join(dirName(import.meta.url), "8.json")));
let amount = 0;

for (let item in obj) {
    if (typeof obj[item] === 'string') {
        amount += 1;
    }
}
console.log(amount);