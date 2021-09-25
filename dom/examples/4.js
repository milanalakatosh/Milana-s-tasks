const button = document.getElementsByClassName('button')[0];

button.addEventListener('click', () => {
    const input = document.getElementsByClassName("input")[0];
    const pow = Math.pow(Number(input.value), 2);
    alert(pow);
});

