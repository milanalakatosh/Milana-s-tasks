const button = document.querySelector('.button');
const input = document.getElementsByClassName("input")[0];
button.addEventListener('click', (input) => alert(input.target.textContent));