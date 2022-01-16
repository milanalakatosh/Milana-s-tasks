
const text = document.querySelector(".text");
const rightSide = document.querySelector(".right.side");
let buttonDelete;//норм так через let??
let mailOnRightSide;
let textArea;

const str = "  Смысл вашего mail3@gmail.com сообщения mail@mail.ru должен легко считываться и находить отклик у читающего. Ведь качественный текст и хорошее оформление mail2@yandex.ru не сильно помогут, если вы пишите о химическом составе лака для ногтей человеку, которому гораздо mail3@gmail.com интереснее узнать о палитре модных оттенков на лето 2021";

const regex = /\w+([-.]\w+)*@\w+([-.]\w+)*\.\w{2,}/g;
text.innerHTML = str.replace(regex, '<span class="mail">$&</span><span class="delete-icon"> &#10060;</span>');

const mails = text.textContent.match(regex);
for (const mail of mails) {
    mailOnRightSide = document.createElement("label");
    mailOnRightSide.classList.add('mailInColumn');
    const radioInput = document.createElement("input");
    radioInput.type = 'radio';
    radioInput.name = 'mail';// дает то^что отмеченный мэйл только один???
    radioInput.classList.add("input");
    mailOnRightSide.textContent = mail;
    rightSide.append(mailOnRightSide);
    mailOnRightSide.prepend(radioInput);
    //<input type="button" value="Remove DUMMY" onclick="removeDummy()" />
    buttonDelete = document.createElement("input");
    buttonDelete.type = 'button';
    buttonDelete.classList.add("delete");
    mailOnRightSide.append(buttonDelete);
    const deleteIcon = document.createElement("p");
    deleteIcon.innerHTML = "&#10060;";
    buttonDelete.append(deleteIcon);
    buttonDelete.value = deleteIcon.innerHTML;
}

const labelInputGroup = document.querySelectorAll(".mailInColumn");

const domElMails = text.querySelectorAll(".mail");
for (let j = 0; j < domElMails.length; ++j) {
    domElMails[j].addEventListener("click", () => {
        setMailActive(domElMails[j]);
        const radioButton = labelInputGroup[j].querySelector("input");
        radioButton.checked = "true";
    });
}
function setMailActive(clickedMail) {
    const mailActive = text.querySelector(".mail.active");
    if (mailActive) mailActive.classList.remove("active");
    clickedMail.classList.add("active");
}

for (let i = 0; i < labelInputGroup.length; ++i) {
    const radioButton = labelInputGroup[i].querySelector("input");
    radioButton.addEventListener("change", () => {
       // if (radioButton.checked )
        setMailActive(domElMails[i]);
        domElMails[i].classList.add("active");
    });
}

const mailsOnRightSide = rightSide.querySelectorAll(".mailInColumn");
const emojisInText = text.querySelectorAll(".delete-icon");
const deleteSymbolsInColumn = rightSide.querySelectorAll(".delete");
for (let j=0; j<deleteSymbolsInColumn.length; ++j) {
    deleteSymbolsInColumn[j].addEventListener("click", ()=> {
        mailsOnRightSide[j].remove();
        domElMails[j].classList.add("unmarked");
        emojisInText[j].remove();
    });
}
for (let j=0; j<emojisInText.length; ++j) {
    emojisInText[j].addEventListener("click", ()=> {
        mailsOnRightSide[j].remove();
        domElMails[j].classList.add("unmarked");
        emojisInText[j].remove();
    });
}
const okButton = document.querySelector("#ok");
const editButton = document.querySelector("#edit");
editButton.addEventListener("click", ()=> {
    textArea = document.createElement("textarea");
    textArea.classList.add("text-area");
    textArea.value = text.textContent;
    //textArea.innerHTML = str.replace(regex, '<span class="mail">$&</span>'); не сработало
    textArea.innerHTML = textArea.value;
    //textArea.value = textArea.innerHTML.replace(regex, '<span class="mail">$&</span>');
    text.replaceWith(textArea);

    okButton.style.visibility="visible";
    editButton.disabled=true;
});

okButton.addEventListener("click", ()=> {
    editButton.disabled=false;
    okButton.style.visibility = "hidden";
    text.textContent= textArea.value;
    textArea.replaceWith(text);
    text.innerHTML = str.replace(regex, '<span class="mail">$&</span><span class="delete-icon"> &#10060;</span>');
});


