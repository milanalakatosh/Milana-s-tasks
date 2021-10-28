const input = document.querySelector(".input");
const buttonStart = document.querySelector(".start.button");
const buttonStop = document.querySelector(".stop.button");
let x;
let timer;

input.addEventListener("input", () => {
    x = Number(input.value);
    buttonStart.disabled = false;
    buttonStop.disabled = false;
});
buttonStart.addEventListener("click", () =>  timer = setInterval(countDown, 1000));

function countDown() {
    if (x !== 0) {
        input.value = x;
        --x;
    } else {
        clearInterval(timer);
        input.value="Время вышло";
    }
}

buttonStop.addEventListener("click", () => {
    clearInterval(timer);
});