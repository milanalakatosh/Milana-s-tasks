const input = document.querySelector(".input");
const buttonStart = document.querySelector(".start.button");
const buttonStop = document.querySelector(".stop.button");
let timer;
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

input.addEventListener("input", () => { //1a23
    let y = "";
    for (const symbol of input.value) {
        if (numbers.includes(symbol)) {
            y += symbol;
        }
    }
    input.value = y;
    buttonStart.disabled = input.value==="";//buttonStart.disabled = input.value!=="" ? false : true;
    buttonStop.disabled = input.value==="";
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
    let seconds = Number(input.value);
    if (seconds > 1) {
        --seconds;
        input.value = seconds;
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