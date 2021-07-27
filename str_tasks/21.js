//Сгенерировать пароль длиной 10 символов. 
//При том в этом пароле должна быть как мин 1 цифра, как мин 1 буква в нижнем регистре и 1 в верхнем.

const symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const abc = "abcdefghijklmnopqrstuvwxyz";
const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";

createPassword();

function createPassword() {
    let password = "";
    for (let i = 0; i < 10; ++i) {
        let r = Math.floor(Math.random() * symbols.length);
        password += symbols[r];
    }
    return correctPassword(password);
}

function correctPassword(password) {
    let abcResult;
    let ABCResult;
    let numbersResult;
    do {
        abcResult =  tryCorrectStrToHaveSymbol(password, abc);
        ABCResult = tryCorrectStrToHaveSymbol(abcResult.str, ABC);
        numbersResult = tryCorrectStrToHaveSymbol(ABCResult.str, numbers);
        password = numbersResult.str;
    } while (abcResult.wasChange || ABCResult.wasChange || numbersResult.wasChange);
    return password;
}

function tryCorrectStrToHaveSymbol(str, dict) {
    let hasSymbol = false;
    for (const symbol of str) {
        if (dict.includes(symbol)) hasSymbol = true;
    }
    if (!hasSymbol) {
        const index = Math.floor(Math.random() * 11);
        str = str.slice(0, index) + dict[Math.floor(Math.random() * dict.length)] +
            str.slice(index + 1);
    }
    return {
        str: str,
        wasChange: !hasSymbol
    };
}

