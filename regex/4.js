// // //6.Дана строка '23 + 35 ='. Числа могут быть любыми. Выведите на экран результат операции в виде '23 + 35 = 58
// // function getResult(a, b, operator) {
// //     switch (operator) {
// //         case "-": return a - b;
// //         case "+": return a + b;
// //         case "*": return a * b;
// //         case "/": return a / b;
// //     }
// // }
// // {
// //     const str = "23 * 35 =";
// //     const regex = /^(\d+) *([-+*/]) *(\d+) *=$/;
// //     const match = regex.exec(str);
// //     const a = Number(match[1]);
// //     const b = Number(match[3]);
// //     const operator = match[2];




// //     console.log(str + " " + getResult(a, b, operator));
// // // }
// // //6.1
// {
//     const str = "23 * 35 +2=";
//     const regex = /([-+*/]?) *(\d+)/g;
//     let match;
//     let result;
// // if, while
// const b = null; // null, undefined, '', 0, false
// if (b) console.log('b'); // will not execute

// const a = []; // otherwise
// if (a) console.log('a'); // will execute

//     while (match = regex.exec(str)) {

//         result = applyOperator(match[1], result, Number(match[2]));
//     }
//     console.log(result);
// }
// function applyOperator(operator, a, b) {
//     switch (operator) {
//         case "-": return a - b;
//         case "+": return a + b;
//         case "*": return a * b;
//         case "/": return a / b;
//         case "": return b;
//     }
// }

// // // {
// // //     const str = "\"one two three\" I'm hello hello, \" 'three two one'";
// // //     //=> ["one two three", 'three two one']
// // //     const regex = /("|').*?\1/g;
// // //     console.log(str.match(regex));
// // // }
// // {
//     const str = "<a>some text</a> more <h1>...</h2> text <span>text2</span> <a>more text in a</a>";
//     // result = {a: ["some text", "more text in a"], span: ["text2"]};


//     const regex = /<(\w+)>(.*?)<\/\1>/g;
//     // const result = {};
//     const result={};
//     let match;
//     // eslint-disable-next-line no-cond-assign
//     while (match = regex.exec(str)) {
//         const tag = match[1];
//         const content = match[2];
//         if (tag in result) result[tag].push(content);
//         else result[tag] = [content];
//     }
//         console.log(result);

{
    const str = "<a>one</a> some text <b>two</b> <span>ok</span> <a>one</a> <a>more</a> <b>two</b><c></c>";
    //Нужно получить объект вида://{a: { one: 2, more: 1},b: { two: 2 }span: { ok: 1 },}
    const regex = /<(\w+)>(.*?)<\/\1>/g;
    let match;
    const result = {};
    // eslint-disable-next-line no-cond-assign
    while (match = regex.exec(str)) {
        const tag = match[1];
        const content = match[2];

        if (tag in result) result[tag] = {};

        if (content in result[tag]) {
            result[tag][content] += 1;
        } else {
            result[tag][content] = 1;
        }
    }
    console.log(result);
}


// {
//     const str = "sdhsjdaaa dka sad hhff nnnnsdc tkl"; // => "dka sad"
//     const regex = /\b\w*(\w)\1\w*(\s?)\b/g;
//     console.log(str.replace(regex, ""));
// }
