
const text = document.querySelector(".text");
const textArea = document.querySelector(".text-area");
const rightSide = document.querySelector(".right.side");
let labelRadioMails = [];
let domElMails;
const okButton = document.querySelector("#ok");
const editButton = document.querySelector("#edit");

const regex = /\w+([-.]\w+)*@\w+([-.]\w+)*\.\w{2,}/g;

runProgram("  Смысл вашего mail3@gmail.com сообщения mail@mail.ru должен легко считываться и находить отклик у читающего. Ведь качественный текст и хорошее оформление mail2@yandex.ru не сильно помогут, если вы пишите о химическом составе лака для ногтей человеку, которому гораздо mail3@gmail.com интереснее узнать о палитре модных оттенков на лето 2021");

function runProgram(str) {
    text.innerHTML = createHtmlForMails(str);
    createMailsRadioGroups();
    handleMailActivation();
    handleMailRemoving();
    handleTextEditing(str);
}
function createHtmlForMails(str) {
    return str.replace(regex, '<span class="mail">$&</span><span class="delete-icon"> &#10060;</span>');
}
function createMailsRadioGroups() {
    const mails = text.textContent.match(regex);
    for (const mail of mails) {
        const label = document.createElement("label");
        label.classList.add('mailInColumn');
        const radioInput = document.createElement("input");
        radioInput.type = 'radio';
        radioInput.name = 'mail';
        radioInput.classList.add("input");
        label.textContent = mail;
        rightSide.append(label);
        label.prepend(radioInput);

        const buttonDelete = document.createElement("input");
        buttonDelete.type = 'button';
        buttonDelete.classList.add("delete");
        label.append(buttonDelete);
        const deleteIcon = document.createElement("p");
        deleteIcon.innerHTML = "&#10060;";
        buttonDelete.append(deleteIcon);
        buttonDelete.value = deleteIcon.innerHTML;
    }
    labelRadioMails = rightSide.querySelectorAll(".mailInColumn");
}
function setMailActiveInText(mail) {
    const mailActive = text.querySelector(".mail.active");
    if (mailActive) mailActive.classList.remove("active");
    mail.classList.add("active");
}
function handleMailActivation() {
    domElMails = text.querySelectorAll(".mail");
    for (let j = 0; j < domElMails.length; ++j) {
        domElMails[j].addEventListener("click", () => {
            setMailActiveInText(domElMails[j]);
            const radioButton = labelRadioMails[j].querySelector("input");
            radioButton.checked = "true";
        });
        for (let i = 0; i < labelRadioMails.length; ++i) {
            const radioButton = labelRadioMails[i].querySelector("input");
            radioButton.addEventListener("change", () => {
                setMailActiveInText(domElMails[i]);
                domElMails[i].classList.add("active");
            });
        }
    }
}
function handleMailRemoving() {
    const emojisInText = text.querySelectorAll(".delete-icon");
    const deleteIconOnLabelRadio = rightSide.querySelectorAll(".delete");
    for (let j = 0; j < deleteIconOnLabelRadio.length; ++j) {
        deleteIconOnLabelRadio[j].addEventListener("click", () => {
            labelRadioMails[j].remove();
            domElMails[j].classList.add("unmarked");
            emojisInText[j].remove();
        });
    }
    for (let j = 0; j < emojisInText.length; ++j) {
        emojisInText[j].addEventListener("click", () => {
            labelRadioMails[j].remove();//почему не присваивает значения для mailsRightSide
            domElMails[j].classList.add("unmarked");
            emojisInText[j].remove();
        });
    }
}
function handleTextEditing(str) {
    editButton.addEventListener("click", () => {
        rightSide.innerHTML = "";
        editButton.style.display = "none";
        okButton.style.display = "inline-block";
        text.style.display = "none";
        textArea.style.display = "inline-block";
        textArea.value = str;
    });
    
    okButton.addEventListener("click", () => {
        okButton.style.display = "none";
        editButton.style.display = "inline-block";
        text.style.display = "inline-block";
        textArea.style.display = "none";
        runProgram(textArea.value);
    });
}

