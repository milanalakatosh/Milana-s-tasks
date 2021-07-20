// Пользователь вводит в консоль продукты в формате: “название цена”. Название без пробелов, 
// цена - число, между названием и ценой - пробел. 
// Когда пользователь заканчивает вводить продукты он вводит одно число 0. 
// Нужно составить объект в формате:
// {
// 	“название_продукта_1”: цена,
// 	“название_продукта_2”: цена
// }
// Нужно вывести этот объект на экран через console.log. А также вывести сумму цен всех продуктов.
import * as fs from 'fs';
import * as readlileSync from "readline-sync";
const products = {};
let sum = 0;
  
// eslint-disable-next-line no-constant-condition
while (true) {
    const product = readlileSync.question("Введите продукт и его цену\n> ");
    if (product !== "0") {
        const arrProduct = product.split(" ");
        const item = arrProduct[0];
        const price = parseFloat(arrProduct[1]);
        products[item] = price;
        sum += price;
    } else {
        break;
    }
}
fs.writeFileSync("products.json", JSON.stringify(products));
console.log(products, "\nСумма всех продуктов: " + sum);