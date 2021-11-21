const startButton = document.querySelector(".start.button");
const wordCard = document.querySelector(".word.card");
const translationCard = document.querySelector(".translation.card");
const nextButton = document.querySelector(".next.button");

const words = [
    { word: "appliance", translation: "устройство", },
    { word: "drawback", translation: "недостаток", },
    { word: "implement", translation: "реализовывать", },
    { word: "level with someone", translation: "быть откровенным с кем-л", },
    { word: "simultaneous", translation: "одновременный", },
];

function getRandomIndex(x) {
    return Math.floor(Math.random() * x.length);
    //     return randomEl===checkRandomEl ? getRandomWord() : randomEl;
}
let wordsCopy;
function showCard() {
    const index = getRandomIndex(wordsCopy);
    const word = wordsCopy[index];
    wordCard.textContent = word.word;
    translationCard.textContent = word.translation;
    wordsCopy.splice(index, 1);
    // translationCard.textContent = arrOfValues[index];
}

startButton.addEventListener("click", () => {
    wordsCopy = words.concat();
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