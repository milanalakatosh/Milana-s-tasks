const button = document.getElementById("button");
const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");

button.addEventListener("click", () => { 
    const value1 = input1.value;
    input1.value = input2.value;
    input2.value = value1;
});
