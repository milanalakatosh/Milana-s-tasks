
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
    handleMailPenciling();
    handleTextEditing(str);
}
function createHtmlForMails(str) {
    return str.replace(regex, '<span class="mail-wrapper"><span class="mail">$&</span><span class="delete-icon"> &#10060;</span><span class="pencil-icon">✏️</span></span>');
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
        label.innerHTML = '<span class="mail-in-label">'+mail+'</span>';
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

        const buttonPencil = document.createElement("input");
        buttonPencil.type = 'button';
        buttonPencil.classList.add("pencil");
        label.append(buttonPencil);
        const pencilIcon = document.createElement("p");
        pencilIcon.innerHTML = "✏️";
        buttonPencil.append(pencilIcon);
        buttonPencil.value = pencilIcon.innerHTML;
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
    const mailWrapper = text.querySelectorAll(".mail-wrapper");
    const deleteIconOnLabelRadio = rightSide.querySelectorAll(".delete");
    for (let j = 0; j < deleteIconOnLabelRadio.length; ++j) {
        deleteIconOnLabelRadio[j].addEventListener("click", () => {
            deleteMail(mailWrapper[j], labelRadioMails[j]);
        });
    }
    const deleteIconsInText = text.querySelectorAll(".delete-icon");
    for (let j = 0; j < deleteIconsInText.length; ++j) {
        deleteIconsInText[j].addEventListener("click", () => {
            deleteMail(mailWrapper[j], labelRadioMails[j]);
        });
    }
}
function deleteMail (mailInText, mailInLabel) {
    mailInText.textContent=mailInText.querySelector(".mail").textContent;
    mailInLabel.remove();
}
function handleMailPenciling() {
    const pencilIconsOnLabelRadio = rightSide.querySelectorAll(".pencil");
    for (let j = 0; j < pencilIconsOnLabelRadio.length; ++j) {
        pencilIconsOnLabelRadio[j].addEventListener("click", () => {
            const updateMail = prompt('Update your e-mail?');
            if (updateMail !== null && updateMail !== "" && updateMail !== 0) {
                //labelRadioMails[j].textContent=updateMail;
                labelRadioMails[j].querySelector(".mail-in-label").textContent=updateMail;
                domElMails[j].textContent = updateMail;
            }
        });
    }
    const pencilIconsInText = text.querySelectorAll(".pencil-icon");
    for (let j = 0; j < pencilIconsInText.length; ++j) {
        pencilIconsInText[j].addEventListener("click", () => {
            const updateMail = prompt('Update your e-mail?');
            if (updateMail !== null || updateMail !== "") {
                //labelRadioMails[j].textContent=updateMail;
                labelRadioMails[j].innerHTML = '<input type="radio" name="mail" class="input">' + updateMail + '<input type="button" class="delete" value="❌"></input><input type="button" class="pencil" value="✏">';
                domElMails[j].textContent = updateMail;
            }
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