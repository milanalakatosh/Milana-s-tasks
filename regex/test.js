const obj = {
    a: { one: 2, more: 1},
    b: { two: 2 },
    span: { ok: 1 },
};
console.log(obj.b.two);
obj.a.more += 1;
console.log(obj.a.more);

const str = "<a>one</a> some text <b>two</b> <span>ok</span> <a>one</a> <a>more</a> <b>two</b>";
//Нужно получить объект вида://{a: { one: 2, more: 1},b: { two: 2 }span: { ok: 1 },}
const regex = /<(\w+)>(.*?)<\/\1>/g;
let match;
while (match = regex.exec(str)) {
    console.log(match);
}
//почему надт содержимое ставить в скобки?