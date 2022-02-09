
const field = document.querySelector(".field");
const iconSmile = document.querySelector(".icon");
let buttons;
const n = 9;
const arrButtons = [];
createButtonsOnField();
putMines();
putNumber();
handleUserClick();

function createButtonsOnField() {
    for (let i = 0; i < n; i++) {
        const div = document.createElement("div");//как по-другому тут сделать /n
        field.append(div);
        const buttonsRow = [];
        for (let j = 0; j < n; j++) {
            const button = document.createElement("button");
            button.classList.add('button');
            div.append(button);
            buttonsRow.push(button);
        }
        arrButtons.push(buttonsRow);
    }
    buttons = field.querySelectorAll(".button");
    // buttons[3][5]
}

function putMines() {
    let mineNumber = 0;
    while (mineNumber < 10) {
        const random = Math.floor(Math.random() * buttons.length);
        if (!buttons[random].classList.contains("mined")) {
            buttons[random].classList.add("mined");
            buttons[random].textContent = "💣";
            mineNumber += 1;
        }
    }
}
function putNumber() {
    for (let i = 0; i < arrButtons.length; ++i) {
        for (let j = 0; j < arrButtons[i].length; ++j) {
            if (!arrButtons[i][j].classList.contains("mined")) {
                let number = 0;
                //for (let k=0; k < ;k++) {

                //}
                if (j > 0 && arrButtons[i][j - 1].classList.contains("mined")) number += 1;
                if (j < n - 1 && arrButtons[i][j + 1].classList.contains("mined")) number += 1;
                if (i > 0 && arrButtons[i - 1][j].classList.contains("mined")) number += 1;
                if (i > 0 && j > 0 && arrButtons[i - 1][j - 1].classList.contains("mined")) number += 1;
                if (i > 0 && j < n - 1 && arrButtons[i - 1][j + 1].classList.contains("mined")) number += 1;
                if (i < n - 1 && arrButtons[i + 1][j].classList.contains("mined")) number += 1;
                if (i < n - 1 && j > 0 && arrButtons[i + 1][j - 1].classList.contains("mined")) number += 1;
                if (i < n - 1 && j < n - 1 && arrButtons[i + 1][j + 1].classList.contains("mined")) number += 1;
                if (number !== 0) arrButtons[i][j].textContent = number;
            }
        }
    }
}
function handleUserClick() {
    for (let i = 0; i < arrButtons.length; ++i) {
        const buttonsRow = arrButtons[i];
        for (let j = 0; j < buttonsRow.length; ++j) {
            // for (let i = 0; i < buttons.length; ++i) {
            buttonsRow[j].addEventListener("click", () => {
                buttonsRow[j].classList.add("opened");
                if (buttonsRow[j].classList.contains("mined")) {
                    const mines = field.querySelectorAll(".mined");
                    for (const mine of mines) mine.classList.add("visible");
                    iconSmile.textContent = "😵";
                    for (let k = 0; k < buttons.length; ++k) {
                        //buttons[i].disabled=true;
                        buttons[k].style.pointerEvents = 'none';
                    }
                }
                if (!buttonsRow[j].classList.contains("mined") && buttonsRow[j].textContent !== "") {
                    buttonsRow[j].classList.add("opened");
                }
                if (buttonsRow[j].textContent === "") {
                    if (j > 0) checkNeighborButton(arrButtons[i], j - 1, "-");
                    if (j < n - 1) checkNeighborButton(arrButtons[i], j + 1, "+");
                    if (i > 0 && j > 0) checkNeighborButton(arrButtons[i - 1], j - 1, "-");
                    if (i > 0 && j < n - 1) checkNeighborButton(arrButtons[i - 1], j + 1, "+");
                    if (i < n - 1 && j > 0) checkNeighborButton(arrButtons[i + 1], j - 1, "-");
                    if (i < n - 1 && j < n - 1) checkNeighborButton(arrButtons[i + 1], j + 1, "+");
                    if (i > 0) checkNeighborButton(arrButtons[i + 1], j, "", "+");
                    if (i < n - 1) checkNeighborButton(arrButtons[i + 1], j, "", "-");
                }
            });
        }
    }
};

function checkNeighborButton(arr, index, operatorColumn, operatorRow,) {
    if (index > 0 && arr[index].textContent === "") {
        arr[index].classList.add("opened");
        if (operatorRow===undefined) checkNeighborButton(arr, index + operatorColumn + 1);
        else {
            checkNeighborButton(arr+ operatorRow + 1, index);
        }
    } else {
        arr[index].classList.add("opened");
    }
}