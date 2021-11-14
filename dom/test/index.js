
const startTestingButton = document.querySelector(".start-testing");
const gameContainer = document.querySelector(".question-container");
const buttons = document.querySelector(".buttons");
const buttonNext = document.querySelector(".further.button");
const buttonBack = document.querySelector(".back.button");
const questions = document.querySelectorAll(".question");
const answersInput = document.querySelectorAll(".input-answer");
let correctAnswersAmount = 0;
// const gameResult = document.querySelector(".game-result");
startTestingButton.addEventListener("click", () => {
    gameContainer.style = "opacity: 100%";
    buttons.style = "display: inline";
    }
);
buttonNext.addEventListener("click", showNextQuestion);
buttonBack.addEventListener("click", showLastQuestion);

function countCorrectAnswers() {
    for (const answer of answersInput) {
        if (answer.checked && answer.dataset.status==="correct") correctAnswersAmount += 1;
    }
}

function showNextQuestion() {
    for (let i = 0; i < questions.length; ++i) {
        if (questions[i].classList.contains("active") === true && i === questions.length-2) {
            countCorrectAnswers();
            questions[i].innerHTML = "From " + (questions.length-1) + " questions " + correctAnswersAmount + " are(is) correct";
            buttonNext.disabled=true;
        }
        if (questions[i].classList.contains("active") === true && i < questions.length-2) {
        // document.querySelector(".active")
            questions[i].classList.remove("active");
            questions[i+1].classList.add("active");
            if (i===questions.length-3) buttonNext.textContent = "Завершить игру";
            break;
        }
    }
}
function showLastQuestion() {
    for (let i = 0; i < questions.length; ++i) {
        if (questions[i].classList.contains("active") === true && i !== 0) {
        // document.querySelector(".active")
            questions[i].classList.remove("active");
            questions[i-1].classList.add("active");
            break;
        }   
    }
}
