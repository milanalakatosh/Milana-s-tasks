const button = document.querySelector('.button');
const input = document.getElementsByClassName("input")[0];
button.addEventListener('click', () => alert(input.value));
