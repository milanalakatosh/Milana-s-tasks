const listNotes = [
    {head: "Text1", text: "Lorem cvfjvkfjncdmfnmd"}, 
    {head: "Text2", text: "lotdrcvfjLLncdmfnmd"},
    {head: "Text3", text: "Lorem Loremcdmfnmd"}
];

const notes = document.querySelector(".notes");
const head = document.querySelector(".head");
const innerText = document.querySelector(".inner-text");
const buttonDelete = document.querySelector(".delete");

for (const note of listNotes) {
    createNote(note);
    editNote(note);
}

const buttonAdd = document.querySelector(".add");
buttonAdd.addEventListener("click", () => {
    const newNote = {head: "New Note", text: ""};
    createNote(newNote);
});

buttonDelete.addEventListener("click", () => {
    const buttonActive = document.querySelector(".note.active");
    buttonActive.remove();
    head.value = "";
    innerText.textContent = "";
    buttonDelete.style.visibility="hidden";
});

function createNote(note) {
    const div = document.createElement("div");
    div.classList.add("note");
    div.textContent = note.head;
    notes.appendChild(div);
    div.addEventListener("click", () => {
        head.value = note.head;
        innerText.textContent=note.text;
        const noteActive = document.querySelector(".note.active");
        if (noteActive !== null) noteActive.classList.remove("active");
        div.classList.add("active");
        buttonDelete.style.visibility="visible";
    });
}
function editNote(element) {
    element.addEventListener("click", () => {
        let input = document.createElement("input");
        input.value = element.textContent;
        element.textContent = "";
        element.appendChild(input);
   
        input.addEventListener("blur", () => {
            element.textContent = input.value;
            element.addEventListener("click", editNote);
        });
        element.removeEventListener("click", editNote);
    });
}