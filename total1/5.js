//Дан файл  с логинами и паролями (каждая пара записана через пробел с новой строки). 
//Найдите топ 3 самых популярных паролей.
import fs from "fs";
import _ from "lodash";
import path from 'path';

import { dirName } from "../utils.js";


const text = fs.readFileSync(path.join(dirName(import.meta.url), 'passwords.txt')).toString();
const arr = text.split('\n'); // ["fee pasw", "sdw pasw"]
const passwords = arr.map((x) => x.split(" ")[1]); // ["fee", "pasw"]

const objPasswords = getCountOfEachElement(passwords);
const sortedPasswords = _.toPairs(objPasswords).sort((a, b) => b[1] - a[1]);

const top3 = sortedPasswords.slice(0, 3).map((x) => x[0]);
console.log(top3);

function getCountOfEachElement(array) {
    const result = {};
    for (let i = 0; i < array.length; ++i) {
        if (array[i] in result) {
            ++result[array[i]];
        } else {
            result[array[i]] = 1;
        }
    }
    return result;
}
