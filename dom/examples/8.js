const block = document.getElementById("block");
const unblock = document.getElementById("unblock");
const input = Document.getElementById("input");

block.addEventListener("click", () => input.disabled = true);
unblock.addEventListener("click", () => input.disabled = false);