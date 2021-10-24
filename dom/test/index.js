

const buttonFurther = document.querySelector(".further.button");
const questions = document.querySelectorAll(".question");

for (let i = 0; i < questions.length; ++i) {
    const index=i;
    const item = questions[i];
    buttonFurther.addEventListener("click", () => {
        const activeQuestion = document.querySelector(".active");
        activeQuestion.classList.remove("active");
        if (index < questions.length-2) item[index+1].classList.add("active");
    });
}