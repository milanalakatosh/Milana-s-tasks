

const buttonNext = document.querySelector(".further.button");
const buttonBack = document.querySelector(".back.button");
const questions = document.querySelectorAll(".question");
let index;

buttonNext.addEventListener("click", showNextQuestion);
buttonBack.addEventListener("click", showLastQuestion);


function showNextQuestion() {
    for (let i = 0; i < questions.length; ++i) {
        if (questions[i].classList.contains("active") === true && i < questions.length-1) {
        // document.querySelector(".active")
            questions[i].classList.remove("active");
            questions[i+1].classList.add("active");
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