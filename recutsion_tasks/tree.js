//Необходимо с помощью рекурсии найти:
//Общий размер всех файлов
//Самый большой и самый маленький файл
//Имя первого файла, в котором содержится заданная пользователем подстрока
//* Имена всех файлов, в которых содержится заданная пользователем подстрока
import * as fs from 'fs';
import path from 'path';
import { dirName } from "../utils.js";
import _ from "lodash";
//import * as readlileSync from "readline-sync";

const tree = JSON.parse(fs.readFileSync(path.join(dirName(import.meta.url), "tree.json")));

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

const findSumOfSize = item => 
    item.type === "file"
        ? item.size
        : _.sumBy(item.children, curItem => findSumOfSize(curItem));

console.log(findSumOfSize(tree));