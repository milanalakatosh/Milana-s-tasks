const button = document.getElementById('button');
const input= document.getElementById("input")[0];
const pow = Math.pow(Number(input.value), 2);

button.addEventListener('click', () => alert(pow));