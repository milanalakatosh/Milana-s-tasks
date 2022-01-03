

const text = document.querySelector(".text");
let mails = [];
const rightSide = document.querySelector(".right.side");
const str = "  Смысл вашего mail3@gmail.com сообщения mail@mail.ru должен легко считываться и находить отклик у читающего. Ведь качественный текст и хорошее оформление mail2@yandex.ru не сильно помогут, если вы пишите о химическом составе лака для ногтей человеку, которому гораздо mail3@gmail.com интереснее узнать о палитре модных оттенков на лето 2021";
const regex = /\w+([-.]\w+)*@\w+([-.]\w+)*\.\w{2,}/g;

text.innerHTML = str.replace(regex, '<span class="blue">$&</span>');
let m = 1;
text.querySelectorAll(".blue").forEach((item)=> {//можно ли сократить и доб-ние датасет сделать вместе с replace на 9 стр?
    item.dataset.number=m;
    m++;
});
mails = text.textContent.match(regex);
let n = 1;
for (const mail of mails) {
    const labelInput = document.createElement("label");
    labelInput.classList.add('radio');
    const radioInput = document.createElement("input");
    radioInput.type = 'radio';
    radioInput.name = 'mail';
    labelInput.textContent = mail;
    labelInput.dataset.number=n;
    n++;
    rightSide.append(labelInput);
    labelInput.prepend(radioInput);
}

const labelInputGroup = document.querySelectorAll(".radio");
console.log(labelInputGroup);
for (let i=0; i < labelInputGroup.length; ++i) {
    const a = labelInputGroup[i].dataset.number;
    const radioButton = labelInputGroup[i].querySelector("input");
    radioButton.addEventListener("change", () => {
        const lastYellow = text.querySelector(".yellow");
        if (lastYellow) lastYellow.classList.remove("yellow");

        document.querySelector("[data-number = '"+a+"']").classList.add("yellow");
        // const backgroundBlueGroup = text.querySelectorAll(".blue");
        // backgroundBlueGroup.forEach((item) => {
        //     if (labelInputGroup[i].textContent === item.textContent) item.classList.add("yellow");
        // });
        // for (const blue of backgroundBlueGroup) {
        //     if (labelInput.textContent === blue.textContent) {//другим способом получить необходимый спан без цикла
        //         blue.classList.add("yellow");
        //     }
        //}
    });

}