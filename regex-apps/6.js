

const text = document.querySelector(".text");
let mails = [];
const rightSide = document.querySelector(".right.side");
const str = "  Смысл вашего mail3@gmail.com сообщения mail@mail.ru должен легко считываться и находить отклик у читающего. Ведь качественный текст и хорошее оформление mail2@yandex.ru не сильно помогут, если вы пишите о химическом составе лака для ногтей человеку, которому гораздо mail3@gmail.com интереснее узнать о палитре модных оттенков на лето 2021";
const regex = /\w+([-.]\w+)*@\w+([-.]\w+)*\.\w{2,}/g;
text.innerHTML = str.replace(regex, '<span class="blue">$&</span>');
mails = text.textContent.match(regex);
for (const mail of mails) {
    const labelInput = document.createElement("label");
    labelInput.classList.add('radio');
    const radioInput = document.createElement("input");
    radioInput.type = 'radio';
    radioInput.name = 'mail';
    labelInput.textContent = mail;
    labelInput.dataset.mail=mail;
    // mail='mail@mail.ru'
    // [data-mail=mail@mail.ru]
    if (rightSide.querySelector('[data-mail="'+mail+'"]') ===null) {
        rightSide.append(labelInput);
        labelInput.prepend(radioInput);
    }
    // const emailAlreadyExists = Array.from(rightSide.children).some((element)=> element.textContent===mail);
    // if (!emailAlreadyExists) {
    //     rightSide.append(labelInput);//<label><input>mail</label>
    //     labelInput.prepend(radioInput);
    // }
}
const labelInputGroup = document.querySelectorAll(".radio");
console.log(labelInputGroup);
for (const labelInput of labelInputGroup) {
    const radioButton = labelInput.querySelector("input");
    radioButton.addEventListener("change", () => {
        const lastYellow = text.querySelectorAll(".yellow");
        if (lastYellow.length!==0) {
            lastYellow.forEach(item => item.classList.remove("yellow")); //for (const item in lastYerllow) { item.classList.remove("yellow")};почему такой цикл не сработал? Блин, потому что in используется в объекте!!!!не буду свои тупые вопросы удалять
        }
        const backgroundBlueGroup = text.querySelectorAll(".blue");
        backgroundBlueGroup.forEach((item) => {
            if (labelInput.textContent === item.textContent) item.classList.add("yellow");
        });
        // for (const blue of backgroundBlueGroup) {
        //     if (labelInput.textContent === blue.textContent) {//другим способом получить необходимый спан без цикла
        //         blue.classList.add("yellow");
        //     }
        //}
    });

}