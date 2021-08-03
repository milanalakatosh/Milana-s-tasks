//Найти количество различных элементов массива. Пример: для 1 4 5 1 1 3 ответ 4.
import _ from "lodash";

const elements = [1, 4, 5, 1, 1, 3];

const objElements = {};

for (let i = 0; i < elements.length; ++i) {
    if (elements[i] in objElements) {
        ++objElements[elements[i]];
    } else {
        objElements[elements[i]] = 1;
    }
}
console.log(_.size(objElements));