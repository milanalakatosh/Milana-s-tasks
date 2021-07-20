//Объект хранится в файле products.json в формате:
//Необходимо считать этот объект из файла, умножить все цены на 10 и записать обратно в файл.
import * as fs from 'fs';
import path from 'path';

import { dirName } from "../utils.js";

const products = JSON.parse(fs.readFileSync(path.join(dirName(import.meta.url), "products.json")));
for (let product in products) {
    products[product] *= 10;
} 
fs.writeFileSync(path.join(dirName(import.meta.url), "products.json"), JSON.stringify(products));
console.log(products);
    