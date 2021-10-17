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

goBackButton.addEventListener("click", () => {
    elNumber = elNumber !== 0 ? elNumber - 1 : imageArray.length-1;
    imageActive.src = imageArray[elNumber];
});

goFurtherButton.addEventListener("click", () => {
    elNumber =  elNumber !== imageArray.length-1 ? elNumber + 1 : 0;
    imageActive.src = imageArray[elNumber];
});

const images = document.querySelectorAll(".image");
for (const image of images) {
    image.addEventListener("click", () => {
        imageActive.src = image.src;
    });
}