//С помощью test определите, что переданная строка является корректным временем вида '12:59', '23:41', '00:12', '00:00', '09:15'. Время '24.00', '25.00', '12.60', '12.93', '41.93' является некорректным.
const time = document.querySelector(".time");

time.addEventListener("input", () => {
    const regex = /^([01]\d|2[0-3]):[0-5]\d$/;
    time.classList.toggle("wrong", !regex.test(time.value));
});