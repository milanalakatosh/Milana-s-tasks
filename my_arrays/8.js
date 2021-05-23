//Герой компьютерной игры, обладающий силой в 25 б, находится в круглом зале, из к-го ведут 10 закрытых дверей. 
//За каждой дверью героя ждет либо магический артефакт, дарующий силу от 10 до 80 баллов, либо монстр, 
//имеющий силу от 5 до 100 баллов, с которым герою нужно сразиться. 
//Битву выигрывает персонаж, обладающий наибольшей силой; если силы равны, побеждает герой.
//1. Организовать ввод информации о том, что находится за дверями, либо заполнить ее, используя генератор случайных чисел.
//2. Вывести эту самую информацию на экран в понятном табличном виде.
//3. Посчитать, за сколькими дверями героя ждет смерть. Рекурсивно.
//4. Вывести номера дверей в том порядке, в котором следует их открывать герою, чтобы остаться в живых, если такое возможно.

let heroStrength = 25;
let doorsAmount = 10;
let magicArtefact = 0;
let monster = 1;
let heroWon = true;

for (let i = 1; i <= doorsAmount; ++i) {
    let behindTheDoor = Math.floor(Math.random() * 2);
    let monsterStrength;
    if (behindTheDoor === magicArtefact) heroStrength += Math.floor(Math.random() * ((80 - 20) + 1) + 20);
    else if (behindTheDoor === monster) {
        monsterStrength = Math.floor(Math.random() * ((100 - 5) + 1) + 5);
        if (monsterStrength > heroStrength) heroWon = false;
    }
    console.log(behindTheDoor, heroStrength, monsterStrength);
}
console.log(heroWon ? "Герой выйграл" : "Герой проиграл");