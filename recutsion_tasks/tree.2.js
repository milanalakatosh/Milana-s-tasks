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
        let max = -1;
        for (const curItem of item.children) {
            let compareWithMax = findMaxSize(curItem);
            if (compareWithMax > max) {
                max = compareWithMax;
            }
        }
        return max;
        //return _.maxBy(item.children, curItem => findMaxSize(curItem));
    }
}
console.log(findMaxSize(tree));

function findMinSize(item) {
    if (item.type === "file") {
        return item.size;
    } else {
        let min = Number.POSITIVE_INFINITY;
        for (const curItem of item.children) {
            let compareWithMin = findMinSize(curItem);
            if (compareWithMin < min) {
                min = compareWithMin;
            }
        }
        return min;
        //return _.minBy(item.children, curItem => findMinSize(curItem));
    }
}
console.log(findMinSize(tree));