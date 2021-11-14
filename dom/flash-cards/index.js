const startButton = document.querySelector(".start.button");
const wordCard = document.querySelector(".word.card");
const translationCard = document.querySelector(".translation.card");
const nextButton = document.querySelector(".next.button");

const words = {
    appliance: "устройство",
    drawback: "недостаток",
    implement: "реализовывать",
    "level with someone": "быть откровенным с кем-л",
    simultaneous: "одновременный"
};

let checkRandomEl = -1;
let randomEl;
function getRandomWord() {
    randomEl = Math.floor(Math.random() * arrOfKeys.length);
    return randomEl===checkRandomEl ? getRandomWord() : randomEl;
}
const arrOfKeys = Object.keys(words);
const arrOfValues = Object.values(words);
function showCard() {
    const index = getRandomWord();
    checkRandomEl = index;
    wordCard.textContent = arrOfKeys[index];
    // translationCard.textContent = words.arrOfKeys[randomEl];
    translationCard.textContent = arrOfValues[index];
}

startButton.addEventListener("click", () => {
    showCard();
    wordCard.style.display = 'block';
    nextButton.style.display = 'block';
});

wordCard.addEventListener("click", () => {
    wordCard.style.display = 'none';
    translationCard.style.display = 'block';
});
translationCard.addEventListener("click", () => {
    translationCard.style.display = 'none';
    wordCard.style.display = 'block';
});

nextButton.addEventListener("click", () => {
    showCard();
    wordCard.style.display = 'block';
    translationCard.style.display = 'none';
});