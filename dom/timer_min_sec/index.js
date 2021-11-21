const input = document.querySelector(".input");
const buttonStart = document.querySelector(".start.button");
const buttonStop = document.querySelector(".stop.button");
let timer;
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ":"];

input.addEventListener("input", () => { //1a23
    let y = "";
    for (const symbol of input.value) {
        if (numbers.includes(symbol)) {
            y += symbol;
        }
    }
    input.value = y;
    buttonStart.disabled = !isValidTime(y);//buttonStart.disabled = input.value!=="" ? false : true;
    buttonStop.disabled = !isValidTime(y);
});

buttonStart.addEventListener("click", () => {
    input.disabled=true;
    switch (buttonStart.textContent) {
        case "Старт":
            timer = setInterval(countDown, 1000);
            buttonStart.textContent="Пауза";
            break;

        case "Пауза":
            clearInterval(timer);
            buttonStart.textContent="Продолжить";
            break;

        case "Продолжить":
            timer = setInterval(countDown, 1000);
            buttonStart.textContent="Пауза";
            break;
    }
});

function countDown() {
    let seconds = timeToSec(input.value);
    if (seconds > 1) {
        --seconds;
        input.value = formatTime(seconds);
    } else {
        clearInterval(timer);
        input.value = "Время вышло";
        buttonStart.textContent="Старт";
        buttonStart.disabled=true;
    }
}

buttonStop.addEventListener("click", () => {
    input.disabled=false;
    input.value="";
    buttonStart.disabled = true;
    buttonStop.disabled = true;
    buttonStart.textContent="Старт";
    clearInterval(timer);
});

// string => boolean
// "100" => true
// "0:40" => true
// "0::40" => false
// "0:156" => false

//если двоеточия нет,любое число без двоеточия
//если двоеточие есть, то:
    //1. одно двоеточие разделяет строку на 2 числа
    //2. 2-е число не больше 59

function isValidTime(time) {
    if (!time.includes(":")) {
        return isStringNumber(time);
    } else {
        const chunks = time.split(":");
        return chunks.length === 2 && chunks.every(isStringNumber) && Number(chunks[1]) < 60;
    }
}

function isStringNumber(x) {
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    for(const a of x) {   
        if (!numbers.includes(a)) return false;
    }
    return x!=="";//return x!=="" ? true: false;
}

// string => number
// "100" => 100
// "1:10" => 70
function timeToSec(time) {
    if (time.includes(":")) {
        const chunks = input.value.split(":");
        const sec = Number(chunks[0]) * 60;
        return sec + Number(chunks[1]);
    } else {
        return Number(time);
    }
}

// number => string
// 100 => "1:40"
// 20 => "0:20"
function formatTime(time) {
    let minutes = Math.floor(time/60);
    minutes = minutes<10? "0"+minutes : minutes;
    let sec = time % 60;
    sec = sec<10? "0"+sec : sec;
    return minutes + ":" + sec;
}