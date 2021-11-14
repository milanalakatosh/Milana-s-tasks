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

function isValidTime(time) {
    if ((time==="") || (time.includes(":") && time.split(":").length > 2) || (time.includes(":") && time.split(":")[1].length > 1)) {
        return false;
    } else {
    return true;
    }
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