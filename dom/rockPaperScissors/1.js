const playContainer = document.querySelector(".play-zone");
const startButton = document.querySelector(".start");
const buttons  = document.querySelectorAll(".item-button");
const scores = document.querySelectorAll(".score");
const compChoice = document.querySelector(".computer-choice-icon");
const textResult = document.querySelector(".result-text");
const computerScore = document.querySelector(".computer.score");
const userScore = document.querySelector(".user.score");
const tieScore = document.querySelector(".tie.score");
const gamesAmount = document.querySelector(".games-amount.score");
const endButton = document.querySelector(".end");

startButton.addEventListener("click", () => {
    for (const button of buttons) {
        button.disabled = false;
        for (const score of scores) {
            score.textContent="0";
        }
        compChoice.style = "opacity: 100%";
        textResult.textContent="Результат";
    }
});

for (let i = 0; i < buttons.length; ++i) {
    buttons[i].addEventListener("click", () => {
        let userStep=i;
        let compStep = Math.floor((Math.random() * 3));
        compChoice.innerHTML = compStep === 0 ? "🪨 <div>Камень</div>" :
            compStep === 1 ? "✂️ <div>Ножницы</div>" : "📜 <div>Бумага</div>";
        // if (compStep === 0) compChoice.innerHTML = "🪨 <div>Камень</div>";
        // else if (compStep === 1) compChoice.innerHTML = "✂️ <div>Ножницы</div>";
        // else compChoice.innerHTML = "📜 <div>Бумага</div>";
        textResult.textContent = 
            (userStep===0 && compStep===1)||(userStep===2 && compStep===0)||(userStep===1 && compStep===2) ? "Вы выйграли!"
                : (compStep=== 0 && userStep===1)||(compStep===2 && userStep===0)||(compStep===1 && userStep===2) ? "Вы проиграли!"
                    : "У вас ничья!"; 
        if (textResult.textContent==="Вы выйграли!") userScore.textContent=Number(userScore.textContent)+Number(1); 
        else if (textResult.textContent === "Вы проиграли!") computerScore.textContent=Number(computerScore.textContent)+Number(1) 
        else tieScore.textContent=Number(tieScore.textContent)+Number(1);
        gamesAmount.textContent = Number(gamesAmount.textContent) + Number(1);
        // if ((userStep === 0 && compStep === 1) || (userStep === 2 && compStep === 0) || (userStep === 1 && compStep === 2)) {
        //     textResult.textContent = "Вы выйграли!";
        //     userScore.textContent = Number(userScore.textContent) + Number(1);
        // }
        // if ((compStep === 0 && userStep === 1) || (compStep === 2 && userStep === 0) || (compStep === 1 && userStep === 2)) {
        //     textResult.textContent = "Вы проиграли!";
        //     computerScore.textContent = Number(computerScore.textContent) + Number(1);
        // }
        // if (compStep === userStep) {
        //     textResult.textContent = "У вас ничья!";
        //     tieScore.textContent = Number(tieScore.textContent) + Number(1);
        // }
    }); 
}
// function generateTextResult(result) {
//     result.textContent = 
//             (userStep===0 && compStep===1)||(userStep===2 && compStep===0)||(userStep===1 && compStep===2) ? "Вы выйграли!"
//                 : (compStep=== 0 && userStep===1)||(compStep===2 && userStep===0)||(compStep===1 && userStep===2) ? "Вы проиграли!"
//                     : "У вас ничья!";
//     return result.textContent;
// }

endButton.addEventListener("click", () => {
    for (const button of buttons) {
        button.disabled = true;
    }
    const sumUpResult = document.querySelector(".sum-up-result");
    if (sumUpResult!==null) sumUpResult.remove();
    const div = document.createElement("div");
    div.classList.add("center");
    playContainer.appendChild(div);
    const divChild = document.createElement("div");
    divChild.classList.add("sum-up-result");
    divChild.textContent = Number(computerScore.textContent)>Number(userScore.textContent) ? "По итогу всех сыгранных игр вы проиграли!"
        : Number(computerScore.textContent)<Number(userScore.textContent) ? "По итогу всех сыгранных игр вы выйграли!"
            : "По итогу всех сыгранных игр у вас ничья!";
    div.appendChild(divChild);
});



