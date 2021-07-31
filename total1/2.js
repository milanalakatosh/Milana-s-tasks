//Найти количество различных элементов массива. Пример: для 1 4 5 1 1 3 ответ 4.
import _ from "lodash";

const elements = [1, 4, 5, 1, 1, 3];

findAmountOfDifferentElements(elements);

function findAmountOfDifferentElements(elements) {
    console.log(_.uniq(elements).length);
}