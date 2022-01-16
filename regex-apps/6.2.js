

const text = document.querySelector(".text");
const rightSide = document.querySelector(".right.side");

const str = "  Смысл вашего mail3@gmail.com сообщения mail@mail.ru должен легко считываться и находить отклик у читающего. Ведь качественный текст и хорошее оформление mail2@yandex.ru не сильно помогут, если вы пишите о химическом составе лака для ногтей человеку, которому гораздо mail3@gmail.com интереснее узнать о палитре модных оттенков на лето 2021";

const regex = /\w+([-.]\w+)*@\w+([-.]\w+)*\.\w{2,}/g;
text.innerHTML = str.replace(regex, '<span class="mail">$&</span>');

const mails = text.textContent.match(regex);
let n = 0;
for (const mail of mails) {
    const labelInput = document.createElement("label");
    labelInput.classList.add('radio');
    const radioInput = document.createElement("input");
    radioInput.type = 'radio';
    radioInput.name = 'mail';
    radioInput.classList.add("input");
    radioInput.id="mail-"+n;
    n++;
    labelInput.textContent = mail;
    rightSide.append(labelInput);
    labelInput.prepend(radioInput);
}
const domElMails = text.querySelectorAll(".mail");
for (let i = 0; i < domElMails.length; ++i) {
    domElMails[i].id = "mail"+i+'"';
    domElMails[i].insertAdjacentHTML("afterend", '<label for="mail- '+i+'"></label>');//<label for="mail-0"></label>
}
const labelInputGroup = document.querySelectorAll(".radio");

for (let i=0; i < labelInputGroup.length; ++i) {
    const radioButton = labelInputGroup[i].querySelector("input");
    radioButton.addEventListener("change", () => {
        const mailActive = text.querySelector(".mail.active");
        if (mailActive) mailActive.classList.remove("active");

        domElMails[i].classList.add("active");
        //document.querySelector("[data-number = '"+a+"']").classList.add("yellow");
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