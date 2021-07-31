//Дан массив. 
//Перемешать его элементы случайным образом так, чтобы каждый элемент оказался на новом месте.
import _ from "lodash";

const elements = [1, 2, 3, 4];

const used = [];

for (let i = 0; i < elements.length; ++i) {
    while (true) {
        let j = Math.floor(Math.random() * elements.length);
        if (i !== j && !used.includes(j)) {
            let keepElement = elements[i];
            elements[i] = elements[j];
            elements[j] = keepElement;
            used.push(j);
            break;
        }
    }
}
console.log(elements);
