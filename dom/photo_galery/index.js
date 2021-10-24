const imageArray = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
];
const goBackButton = document.querySelector(".go-back.button");
const goFurtherButton = document.querySelector('.go-further.button');
const imageActive = document.querySelector(".image.active");
let elNumber = 0;
const images = document.querySelectorAll(".image-row>.image");

goBackButton.addEventListener("click", () => {
    elNumber = elNumber !== 0 ? elNumber - 1 : imageArray.length-1;
    imageActive.src = imageArray[elNumber];
    installNewActiveForImgRow(elNumber);
});

goFurtherButton.addEventListener("click", () => {
    elNumber =  elNumber !== imageArray.length-1 ? elNumber + 1 : 0;
    imageActive.src = imageArray[elNumber];
    installNewActiveForImgRow(elNumber);
});

for (let i = 0; i < images.length; ++i) {
    const index = i;
    images[index].addEventListener("click", () => {
        imageActive.src = images[index].src;
        elNumber = index;
        installNewActiveForImgRow(elNumber);
    });
}

function installNewActiveForImgRow (index) {
    const smallImgActive = document.querySelector(".image-row>.active");
    smallImgActive.classList.remove("active");
    images[index].classList.add("active");
}
