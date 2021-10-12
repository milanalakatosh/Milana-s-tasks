const startButton = document.querySelector(".start");
const buttons  = document.querySelectorAll(".item-button");

startButton.addEventListener("click", () => {
    for (const button of buttons) {
        button.disabled = false;
    }
});

const compChoice = document.querySelector(".computer-choice-icon");
const textResult = document.querySelector(".result-text");
const computerScore = document.querySelector(".computer.score");
const userScore = document.querySelector(".user.score");
const tieScore = document.querySelector(".tie.score");
const gamesAmount = document.querySelector(".games-amount.score");

for (let i = 0; i < buttons.length; ++i) {
    buttons[i].addEventListener("click", () => {
        let compStep = Math.floor((Math.random() * 3));
        if (compStep === 0) compChoice.innerHTML = "🪨 <div>Камень</div>";
        else if (compStep === 1) compChoice.innerHTML = "✂️ <div>Ножницы</div>";
        else compChoice.innerHTML = "📜 <div>Бумага</div>";
        let userStep=i;
        gamesAmount.textContent = Number(gamesAmount.textContent) + Number(1);
        if ((userStep === 0 && compStep === 1) || (userStep === 2 && compStep === 0) || (userStep === 1 && compStep === 2)) {
            textResult.textContent = "Вы выйграли!";
            userScore.textContent = Number(userScore.textContent) + Number(1);
        }
        if ((compStep === 0 && userStep === 1) || (compStep === 2 && userStep === 0) || (compStep === 1 && userStep === 2)) {
            textResult.textContent = "Вы проиграли!";
            computerScore.textContent = Number(computerScore.textContent) + Number(1);
        }
        if (compStep === userStep) {
            textResult.textContent = "У вас ничья!";
            tieScore.textContent = Number(tieScore.textContent) + Number(1);
        }
    }); 
}



