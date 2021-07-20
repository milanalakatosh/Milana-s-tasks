//прочитать объект из файла products2.json и вывести на экран суммарную цену и вес всех продуктов
import * as fs from 'fs';
import path from 'path';

import { dirName } from "../utils.js";

const products2 = JSON.parse(fs.readFileSync(path.join(dirName(import.meta.url), "products2.json")));
let sumPrice = 0;
let sumWeight = 0;


for (let product in products2) {
    sumPrice += products2[product].price;// почему через квадратные?
    sumWeight += products2[product].weight;
}
console.log(sumPrice, sumWeight);