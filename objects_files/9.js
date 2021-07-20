//Создайте 333 свойства в объекте. 
//В качестве ключа и значения использовать случайные числа от 0 до 1000000.
const obj = {};

while (Object.keys(obj).length < 333) {
    obj[Math.floor(Math.random() * 1000000)] = Math.floor(Math.random() * 1000000);
}
console.log(obj);

