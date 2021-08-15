//Имя первого файла, в котором содержится заданная пользователем подстрока
//* Имена всех файлов, в которых содержится заданная пользователем подстрока
import * as fs from 'fs';
import path from 'path';
import { dirName } from "../utils.js";
import * as readlileSync from "readline-sync";
import _ from 'lodash';

const tree = JSON.parse(fs.readFileSync(path.join(dirName(import.meta.url), "tree.json")));
const userSubstring = readlileSync.question("Введите подстроку для поиска?\n> ");
//   {
//     "type": "folder",
//     "name": "iOS",
//     "children": [
//       {
//         "type": "file",
//         "name": "iPhone XS.jpeg",
//         "size": 500
//       }
//     ]
//   }

// userSubstring - аргумент
function findFileNameForUser(item, subStr) {
    if (item.type === "file") {
        return item.name.includes(subStr) ? [item.name] : [];
    } else {
        // [["a", "b"], ["c"]] -> ["a", "b", "c"]
        // string[][]
        return item.children.map(name => findFileNameForUser(name, subStr)).flat();
    }
}
console.log(findFileNameForUser(tree, userSubstring));