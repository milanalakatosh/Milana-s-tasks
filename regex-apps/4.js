//С помощью test определите, что переданная строка является корректным временем вида '9.59 am', '12.30 pm'.
const time = document.querySelector(".time");

time.addEventListener("input", () => {
    const regex = new RegExp("^(((0?|1)[0-9]|(2[0-3])):[0-5][0-9] [ap]m)$");
    if (!regex.test(time.value)) time.classList.add("wrong");
    else time.classList.remove("wrong");
    console.log(regex.test(time.value));
});