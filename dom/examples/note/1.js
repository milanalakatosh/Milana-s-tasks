

const listNotes = [
    {head: "Text1", text: "Lorem cvfjvkfjncdmfnmd"}, 
    {head: "Text2", text: "lotdrcvfjLLncdmfnmd"},
    {head: "Text3", text: "Lorem Loremcdmfnmd"}
];
const notes = document.querySelector(".notes");

for (const note of listNotes) {
    
    const div = document.createElement("div");
    div.classList.add("note");
    div.textContent=note.head;
    notes.appendChild(div);
    div.addEventListener("click", () => {
        const head = document.querySelector(".head");
        head.value = note.head;
        const innerText = document.querySelector(".inner-text");
        innerText.textContent=note.text;
        const noteActive = document.querySelector(".note.active");
        if (noteActive !== null) noteActive.classList.remove("active");
        div.classList.add("active");
    });
}

const buttonAdd = document.querySelector(".add");
buttonAdd.addEventListener("click", () => listNotes.push({head: "New Note", text: ""}));

const buttonDelete = document.querySelector(".delete");
buttonDelete.addEventListener("click", () => {
    notes.removeChild()
})