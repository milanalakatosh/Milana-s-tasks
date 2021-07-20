//Прочитайте из файла “7.json” произвольный объект. Выведете на экран количество свойств этого объекта.
import * as fs from 'fs';
import path from 'path';

import { dirName } from "../utils.js";

const obj = JSON.parse(fs.readFileSync(path.join(dirName(import.meta.url), "7.json")));
let amount = 0;

for (let _item in obj) {
    amount += 1
}
console.log(amount);