//Самый большой и самый маленький файл

import * as fs from 'fs';
import _ from 'lodash';
import path from 'path';
import { dirName } from "../utils.js";
//import * as readlileSync from "readline-sync";

const tree = JSON.parse(fs.readFileSync(path.join(dirName(import.meta.url), "tree.json")));

function findMaxSize(item) {
    if (item.type === "file") {
        return item.size;
    } else {
        const sizes = item.children.map(child => findMaxSize(child));
        return _.max(sizes);
    }
}
console.log(findMaxSize(tree));

function findMinSize(item) {
    if (item.type === "file") {
        return item.size;
    } else {
        const sizes = item.children.map(child => findMinSize(child));
        return _.min(sizes);
    }
}     
console.log(findMinSize(tree));