//Определите, что год находится в интервале от 1900 до 2100 с помощью одного только регулярного выражения.
const number = document.querySelector(".number");

number.addEventListener("input", () => {
    const regex = /^(19\d\d|20\d\d|2100)$/;
    number.classList.toggle("wrong", !regex.test(number.value));
    console.log(regex.test(number.value));
});