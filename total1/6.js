//Дан массив. 
//Перемешать его элементы случайным образом так, чтобы каждый элемент оказался на новом месте.
import _ from "lodash";

const elements = [1, 2, 3, 4];
for (let i = 0; i < 10000000; ++i) {
    elements.push(Math.floor(Math.random() * 300));
}

const mixedElements = _.shuffle(elements);

console.log(mixedElements);

for (let i = 0; i < elements.length; ++i) {
    while (elements[i] === mixedElements[i]) {
        let j;
        do {
            j = Math.floor(Math.random() * mixedElements.length);
            let keepElement = mixedElements[i];
            mixedElements[i] = mixedElements[j];
            mixedElements[j] = keepElement;
        } while (elements[j] === mixedElements[j]);
    }
}
console.log(mixedElements);
