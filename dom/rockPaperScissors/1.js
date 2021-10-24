const playContainer = document.querySelector(".play-zone");
const startButton = document.querySelector(".start");
const buttons = document.querySelectorAll(".item-button");
const scores = document.querySelectorAll(".score");
const compChoiceEl = document.querySelector(".computer-choice-icon");
const textResultEl = document.querySelector(".result-text");
const computerScoreEl = document.querySelector(".computer.score");
const userScoreEl = document.querySelector(".user.score");
const tieScoreEl = document.querySelector(".tie.score");
const gamesAmountEl = document.querySelector(".games-amount.score");
const endButton = document.querySelector(".end");
const items = ["rock", "scissors", "paper"];

startButton.addEventListener("click", startGame);

for (let i = 0; i < buttons.length; ++i) {
    buttons[i].addEventListener("click", () => {
        const userStep = items[i];
        doGameStep(userStep);
    });
}

endButton.addEventListener("click", endGame);


function startGame() {
    for (const button of buttons) {
        button.disabled = false;
    }
    for (const score of scores) {
        score.textContent = "0";
    }
    compChoiceEl.style = "opacity: 100%";
    textResultEl.textContent = "Результат";
    removeFinalResult();
}

function doGameStep(userStep) {
    const compStep = _.sample(items);

    const gameResult = getGameResult(compStep, userStep);

    updateScore(gameResult);

    compChoiceEl.innerHTML = getCompChoiceHTML(compStep);

    textResultEl.textContent = getTextResult(gameResult);
}

const updateScore = (gameResult) => {
    if (gameResult === "win") userScoreEl.textContent = Number(userScoreEl.textContent) + 1;
    else if (gameResult === "loose") computerScoreEl.textContent = Number(computerScoreEl.textContent) + 1;
    else tieScoreEl.textContent = Number(tieScoreEl.textContent) + 1;
    gamesAmountEl.textContent = Number(gamesAmountEl.textContent) + 1;
};

const getCompChoiceHTML = (compStep) => compStep === "rock" ? "🪨 <div>Камень</div>" :
    compStep === "scissors" ? "✂️ <div>Ножницы</div>" : "📜 <div>Бумага</div>";

const getTextResult = (gameResult) => gameResult === "win" ? "Вы выйграли!"
    : gameResult === "loose" ? "Вы проиграли!"
        : "У вас ничья!";

const getGameResult = (compStep, userStep) => (userStep === "rock" && compStep === "scissors") ||
    (userStep === "paper" && compStep === "rock") ||
    (userStep === "scissors" && compStep === "paper")
    ? "win"
    : (compStep === "rock" && userStep === "scissors") ||
        (compStep === "paper" && userStep === "rock") ||
        (compStep === "scissors" && userStep === "paper")
        ? "loose"
        : "tie";

const getFinalResult = (compFinalResult, userFinalResult) => compFinalResult > userFinalResult ? "По итогу всех сыгранных игр вы проиграли!"
    : compFinalResult < userFinalResult ? "По итогу всех сыгранных игр вы выйграли!"
        : "По итогу всех сыгранных игр у вас ничья!";

const removeFinalResult = () => {
    const sumUpResult = document.querySelector(".sum-up-result");
    if (sumUpResult !== null) sumUpResult.remove();
};

function endGame() {
    for (const button of buttons) {
        button.disabled = true;
    }

    removeFinalResult();

    const div = document.createElement("div");
    div.classList.add("center");
    playContainer.appendChild(div);

    const divChild = document.createElement("div");
    divChild.classList.add("sum-up-result");

    const compFinalResult = Number(computerScoreEl.textContent);
    const userFinalResult = Number(userScoreEl.textContent);
    divChild.textContent = getFinalResult(compFinalResult, userFinalResult);
    div.appendChild(divChild);
}


