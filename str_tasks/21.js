//Сгенерировать пароль длиной 10 символов. 
//При том в этом пароле должна быть как мин 1 цифра, как мин 1 буква в нижнем регистре и 1 в верхнем.

const symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const abc = "abcdefghijklmnopqrstuvwxyz";
const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
let password = "";

createPassword()

function createPassword() {
    for (let i = 0; i < 10; ++i) {
        let r = Math.floor(Math.random() * symbols.length);
        password += symbols[r];
    }
    checkPasswordForCorrectness()
    console.log(password);
}
 
function checkPasswordForCorrectness() {
    let hasabc = false;
    let hasABC = false;
    let hasNumbers = false;
    while (!hasabc || !hasABC || !hasNumbers) {
        for (let j = 0; j < password.length; ++j) {
            if (abc.includes(password[j])) hasabc = true;
            if (ABC.includes(password[j])) hasABC = true;
            if (numbers.includes(password[j])) hasNumbers = true;
        }
        if (!hasabc) {
            changePasswordIfNecessary(abc)
        }
        if (!hasABC) {
            changePasswordIfNecessary(ABC)
        } 
        if (!hasNumbers) {
            changePasswordIfNecessary(numbers)
        }
    }
    return password;
}

function changePasswordIfNecessary(symbol) {
    let index;
    index = Math.floor(Math.random() * 11);
    password = password.slice(0, index) + abc[Math.floor(Math.random() * symbol.length)] +
        password.slice(index + 1);
    return password;
}
    
