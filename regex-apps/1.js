const source = document.querySelector(".source");
const search = document.querySelector(".search");
const result = document.querySelector(".result");

search.addEventListener("input", () => {
    const regex = new RegExp(search.value, "gi");
    result.innerHTML= source.value.replace(regex, '<span class="highlight">$&</span>');
});

