// Пользователь вводит в консоль продукты в формате: “название цена вес”. 
//Название без пробелов, цена и вес - число, между названием, ценой и весом - пробел. 
//Когда пользователь заканчивает вводить продукты он вводит 1 число 0. Нужно составить объект в формате:

// 	“milk”: {
// 		“price”: цена,
// 		“weight”: вес
// 	}
// }
// Нужно записать введённый объект в файл products2.json
import * as fs from 'fs';
import * as readlileSync from "readline-sync";
const products2 = {};
  
// eslint-disable-next-line no-constant-condition
while (true) {
    const product = readlileSync.question("Введите название, цену и вес продукта\n> ");
    if (product !== "0") {
        const arrProduct = product.split(" ");
        const productName = arrProduct[0];
        products2[productName] = {};
        products2[productName].price = parseFloat(arrProduct[1]);
        products2[productName].weight = parseFloat(arrProduct[2]);
    } else {
        break;
    }
}
fs.writeFileSync("products2.json", JSON.stringify(products2));
console.log(products2);
