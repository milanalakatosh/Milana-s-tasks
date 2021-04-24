//определить, пройдет ли кирпич в отверстие
const readlineSync = require ("readline-sync");

let a = readlineSync.question("Enter the length(a): ");
let b = readlineSync.question("Enter the width(b): ");
let c = readlineSync.question("Enter the height(c): ");
let d = readlineSync.question("Enter the length of the openings(d): ");
let l = readlineSync.question("Enter the height of the openings(l): ");
 
if (c <= l && b <= d && a > d) {
    console.log("Brick went into the hole by the fitst party");
} else if (c <= l && a <=d) {
    console.log("Brick went into the hole by the second party");
} else if (a <= d && b <= l) {
    console.log("Brick went into the hole by the third party");
} else {
    console.log("Brick did not go into the holes");
}
