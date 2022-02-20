

const field = document.querySelector(".field");
const iconSmile = document.querySelector(".icon");
let buttons;
const n = 9;
const arrButtons = [];
createButtonsOnField();
putMines();
putNumber();
handleLeftClick();
handleRightClick();

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
            mineNumber += 1;
        }
    }
    // buttons[0].classList.add("mined");
    // buttons[0].textContent = "💣";
    // buttons[12].classList.add("mined");
    // buttons[12].textContent = "💣";
}
function putNumber() {
    for (let i = 0; i < arrButtons.length; ++i) {
        for (let j = 0; j < arrButtons[i].length; ++j) {
            if (!arrButtons[i][j].classList.contains("mined")) {
                const arrNeighbors = findNeighbors(arrButtons, i, j);
                let number = 0;
                for (let k = 0; k < arrNeighbors.length; k++) {
                    if (arrNeighbors[k].button.classList.contains("mined")) number += 1; //я тут запуталас
                }
                if (number !== 0) {
                    arrButtons[i][j].classList.add("number");
                    arrButtons[i][j].classList.add("nr-"+number.toString());
                }
            }
        }
    }
}
function handleLeftClick() {
    for (let i = 0; i < arrButtons.length; ++i) {
        const buttonsRow = arrButtons[i];
        for (let j = 0; j < buttonsRow.length; ++j) {
            buttonsRow[j].addEventListener("click", () => {
                if (!buttonsRow[j].classList.contains("flag")) buttonsRow[j].classList.add("opened");
                if (buttonsRow[j].classList.contains("mined")) lostGame();
                if (buttonsRow[j].textContent === "") waveAlgorithm(arrButtons, i, j);
                if (buttonsRow[j].classList.contains("number") && !buttonsRow[j].classList.contains("flag")) openButtonsIfCorrectFlags(arrButtons, i, j);
            });
        }
    }
}

// function checkNeighborButton(arr[i], index, operatorColumn, operatorRow) {
//     if (index > 0 && arr[i][index].textContent === "") {
//         arr[i][index].classList.add("opened");
//         if (operatorRow===undefined) checkNeighborButton(arr[i], index + operatorColumn + 1);
//         else {
//             checkNeighborButton(arr[i+operatorRow + 1], index);
//         }
//     } else {
//         arr[i][index].classList.add("opened");
//     }
// }

function handleRightClick() {
    for (const button of buttons) {
        button.addEventListener("contextmenu", () => {
            if (!button.classList.contains("flag") && button.textContent === "" || button.classList.contains("number"))
                putFlag(button);
            else if (button.classList.contains("flag")) removeFlag(button);
        });
    }
}

function putFlag(button) {
    button.addEventListener('click', () => false);
    button.classList.add("flag");
}

function removeFlag(button) {
    button.addEventListener('click', () => true);
    button.classList.remove("flag");
}

function openButtonsIfCorrectFlags(button, x, y) {
    // for (let i = 0; i < arrButtons.length; ++i) {
    //     for (let j = 0; j < arrButtons[i].length; ++j) {
    //         if (arrButtons[i][j].classList.contains("number")) {
    //             arrButtons[i][j].addEventListener("click", () => {
    let bombs = 0;
    const arrBombs = [];
    let arrFlags = 0;
    for (const neighbor of findNeighbors(button, x, y)) {
        if (neighbor.button.classList.contains('mined')) {
            bombs += 1;
            arrBombs.push(neighbor.button);
        }
        if (neighbor.button.classList.contains('flag')) {
            arrFlags+=1;
        }
    }
    if (bombs!==arrFlags) {
        return false;
    } else {
        for (const bomb of arrBombs) {
            if (!bomb.classList.contains("flag")) return lostGame();
        }
    }
    return openNeighborButtons(button, x, y);
}


function waveAlgorithm(button, i, j) {
    const queue = [];
    queue.push({ x: i, y: j });
    do {
        const x = queue[0].x;
        const y = queue[0].y;

        const neighbors = [];

        if (y > 0) neighbors.push({ x: x, y: y - 1 });
        if (y < n - 1) neighbors.push({ x: x, y: y + 1 });
        if (x > 0) neighbors.push({ x: x - 1, y: y });
        if (x > 0 && y > 0) neighbors.push({ x: x - 1, y: y - 1 });
        if (x > 0 && y < n - 1) neighbors.push({ x: x - 1, y: y + 1 });
        if (x < n - 1) neighbors.push({ x: x + 1, y: y });
        if (x < n - 1 && y > 0) neighbors.push({ x: x + 1, y: y - 1 });
        if (x < n - 1 && y < n - 1) neighbors.push({ x: x + 1, y: y + 1 });

        for (const neighbor of neighbors) {//переделать с of
            if (button[neighbor.x][neighbor.y].textContent === "") {
                button[neighbor.x][neighbor.y].classList.add("opened");
                queue.push(neighbor);
            } else if (button[neighbor.x][neighbor.y].classList.contains("number")) {
                button[neighbor.x][neighbor.y].classList.add("opened");
            }
        }
        queue.shift();
    } while (queue.length !== 0);
}

function findNeighbors(button, x, y) {
    const arr = [];
    if (y > 0) arr.push({ button: button[x][y - 1], x: x, y: y - 1 });
    if (y < n - 1) arr.push({ button: button[x][y + 1], x: x, y: y + 1 });
    if (x > 0) arr.push({ button: button[x - 1][y], x: x - 1, y: y });
    if (x > 0 && y > 0) arr.push({ button: button[x - 1][y - 1], x: x - 1, y: y - 1 });
    if (x > 0 && y < n - 1) arr.push({ button: button[x - 1][y + 1], x: x - 1, y: y + 1 });
    if (x < n - 1) arr.push({ button: button[x + 1][y], x: x + 1, y: y });
    if (x < n - 1 && y > 0) arr.push({ button: button[x + 1][y - 1], x: x + 1, y: y - 1 });
    if (x < n - 1 && y < n - 1) arr.push({ button: button[x + 1][y + 1], x: x + 1, y: y + 1 });
    return arr;
}

function openNeighborButtons(button, x, y) {
    const arrNeighbors = findNeighbors(button, x, y);
    for (const n of arrNeighbors) {
        if (!n.button.classList.contains("mined")) {
            n.button.classList.add("opened");
            n.button.classList.add("visible");
        }
    }
}

function lostGame() {
    const mines = field.querySelectorAll(".mined");
    for (const mine of mines) mine.classList.add("visible");
    iconSmile.textContent = "😵";
    for (let k = 0; k < buttons.length; ++k) {
        buttons[k].style.pointerEvents = 'none';
    }
}