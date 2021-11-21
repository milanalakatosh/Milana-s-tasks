
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
    gameContainer.style.display = "block";
    buttons.style.display = "inline";
    buttonNext.disabled = true;
    buttonBack.disabled = true;
});
buttonNext.addEventListener("click", () => {
    if (buttonNext.textContent !== "Начать заново") {
        showNextQuestion();
    } else {
        resetAll(questions[questions.length - 1], questions[0]);
    }
});

function setButtonNextAbilityIfAnswerIsChecked() {
    const inputRadios = document.querySelectorAll(".question.active .input-answer");
    for (const radio of inputRadios) {
        if (radio.checked) {
            buttonNext.disabled = false;
            break;
        } else {
            buttonNext.disabled = true;
        }
    }
}
buttonBack.addEventListener("click", showPreviousQuestion);
//число, оканчивающееся на 1 и перед этой 1 нет цифры 1.
const questionCount = questions.length - 1;
//321
const secondLast = Math.floor(questionCount / 10) % 10;

const questionSpelling = questionCount % 10 === 1 && secondLast !== 1 ? " вопросa " : " вопросов ";//    а для 111, 211, 311????
let correctSpelling;

function countCorrectAnswers() {
    for (const answer of answersInput) {
        if (answer.checked && answer.dataset.status === "correct") correctAnswersAmount += 1;
    }
    correctSpelling = correctAnswersAmount === 1 ? " правильный." : " правильных.";
}

for (const answerInput of answersInput) {
    answerInput.addEventListener("change", () => buttonNext.disabled = false);
}


function showNextQuestion() {
    buttonBack.disabled = false;
    buttonNext.disabled = true;
    for (let i = 0; i < questions.length; ++i) {
        if (questions[i].classList.contains("active") === true && i === questions.length - 2) {
            countCorrectAnswers();
            questions[i].classList.remove("active");
            questions[i + 1].classList.add("active");
            questions[i + 1].innerHTML = "Из " + (questions.length - 1) + questionSpelling + correctAnswersAmount + correctSpelling;
            buttonNext.textContent = "Начать заново";
            buttonNext.disabled = false;
            buttonBack.style.display = "none";
        }
        if (questions[i].classList.contains("active") === true && i < questions.length - 2) {
            // document.querySelector(".active")
            questions[i].classList.remove("active");
            questions[i + 1].classList.add("active");
            setButtonNextAbilityIfAnswerIsChecked();
            break;
        }
    }
}

function showPreviousQuestion() {
    for (let i = 0; i < questions.length; ++i) {
        if (questions[i].classList.contains("active") && i !== 0) {
            // document.querySelector(".active")
            questions[i].classList.remove("active");
            questions[i - 1].classList.add("active");
            buttonNext.disabled = false;
            // break;
        }
    }
    if (questions[0].classList.contains("active")) buttonBack.disabled = true;
}

function resetAll(x, y) {
    for (const answer of answersInput) {
        answer.checked = false;
    }
    x.innerHTML = "";
    x.classList.remove("active");
    y.classList.add("active");
    buttonNext.textContent = "Далее";
    buttonBack.style.display = "inline-block";
}
