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

function findFileNameForUser(item) {
    if (item.type === "file") {
        if (item.name.includes(userSubstring)) {
            return item.name;
        } 
    } else {
        let result;
        for (const curItem of item.children) {
            result = findFileNameForUser(curItem);
            if (result !== undefined) {
                break;
            }
        }
        return result;
    }
}
console.log(findFileNameForUser(tree));