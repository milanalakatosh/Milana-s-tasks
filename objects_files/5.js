//прочитать объект из файла products2.json и вывести на экран суммарную цену и вес всех продуктов
import * as fs from 'fs';
import path from 'path';

import { dirName } from "../utils.js";

const products2 = JSON.parse(fs.readFileSync(path.join(dirName(import.meta.url), "products2.json")));
let sumPrice = 0;
let sumWeight = 0;


for (let product in products2) {
    sumPrice += products2.product.price;// почему через квадратные?
    sumWeight += products2[product].weight;
}
console.log(sumPrice, sumWeight);

const obj = {
    product: 'milk',
    milk: 10,
    eggs: 20,
};
const product = a > 10 ? 'eggs' : 'milk';

console.log(obj.milk);
console.log(obj['milk']);
console.log(obj[product]); // 10/20

console.log(obj.product); // milk
console.log(obj['product']); // milk
