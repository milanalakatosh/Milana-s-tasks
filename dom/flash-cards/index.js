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

function getRandomIndex(x) {
    return Math.floor(Math.random() * x.length);
//     return randomEl===checkRandomEl ? getRandomWord() : randomEl;
}
let arrOfKeys;
function showCard() {
    if (arrOfKeys.length !== 0) {
        showRandomWord(arrOfKeys);
    } else if(arrOfKeys.length === 0) {
        wordCard.textContent = "Карточки закончились!";
        translationCard.style.display = 'none';
        nextButton.textContent = 'Play again';
    }
    // translationCard.textContent = arrOfValues[index];
}

startButton.addEventListener("click", () => {
    arrOfKeys = Object.keys(words);
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
    if (nextButton.textContent!=='Play again') {
        showCard();
        wordCard.style.display = 'block';
        translationCard.style.display = 'none';
    } else {
        resetAll();
    }
});

function showRandomWord(arr) {
    const index = getRandomIndex(arr);
        wordCard.textContent = arr[index];
        translationCard.textContent = words[arr[index]];
        arr.splice(index, 1);
}

function resetAll() {
    arrOfKeys = Object.keys(words);
    showRandomWord(arrOfKeys);
    nextButton.textContent = 'Next';
}
