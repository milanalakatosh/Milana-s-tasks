//Пользователь вводит количество строк. Вывести на экран логотип соответствующего размера. 
//Если текст не помещается, то вывести логотип без текста.
const readlineSync = require("readline-sync");

let n = parseInt(readlineSync.question("Введите количество строк: "));
let m = n * 2;

for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
        if ((i===0 && j<m/5+m/5) || (i===n-1 && j<m/5+m/5) || (i>=n/4 && i<n-(n/4) && j>=m/5 && j<=m/5+1) || (i>n/4-1 && i<n/4 && j>m/5+1 && j<m/5+(m/5)-1) || (i>n-(n/4) && i<n-(n/4)+1 && j>m/5+1 && j<m/5+(m/5)-1) || (j===0)) {
            process.stdout.write("[");
        } else if ((i===0 && j>m-(m/5+m/5)) || (i===n-1 && j>m-(m/5+m/5)) || (j===m-1) || (i>=n/4 && i<n-(n/4) && j>(m-(m/5))-1 && j<m-(m/5)) || (i>n/4-1 && i<n/4 && j>(m-((m/5)+(m/5)))+1 && j<(m-(m/5))-1) || (i>n-(n/4) && i<(n-(n/4))+1 && j>(m-((m/5)+(m/5)))+1 && j<(m-(m/5))-1)) {
            process.stdout.write("]");
        } else if ((i>0 && i<n/4 && j>0 && j<m/5+(m/5)) || (i>0 && i<n/4 && j>m-(m/5+(m/5)) && j<m) || (i>n/4 && i<n-(n/4) && j>0 && j<m/5) || (i>n/4 && i<n-(n/4) && j>m-(m/5) && j<m) || (i>n-(n/4) && i<n-1 && j>0 && j<m/5+(m/5)) || (i>n-(n/4) && i<n-1 && j>m-(m/5+(m/5)) && j<m)) {
            process.stdout.write(":");
        } else {
            process.stdout.write(" ");
        }
    }
    process.stdout.write("\n");
// if (n>16 && i>n/2) {
//     console.log("CODE THE WORLD");
//     console.log("www.itmathrepetitor.ru");
// }
}