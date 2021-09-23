const button1 = document.getElementById('button-1');
button1.addEventListener('click', () => {
    button1.style.color = 'red';
    button1.style.height = '100px';
});

const button2 = document.getElementById('button-2');
button2.addEventListener('click', () => {
    button2.classList.add('clicked');
});