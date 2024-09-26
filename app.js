"use app";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function() {
    if (play) {
        noCount++;
        const imageIndex = Math.min(noCount, MAX_IMAGES);
        changeImage(imageIndex);
        resizeYesButton();
        updateNoButtonText();
        if (noCount === MAX_IMAGES) {
            play = false;
        }
    }
});

function handleYesClick() {
    titleElement.innerHTML = "Anh biết mò có thương anh âu hic hic:3";
    buttonsContainer.classList.add("hidden");
    changeImage("yes");
}

function resizeYesButton() {
    const computedStyle = window.getComputedStyle(yesButton);
    const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
    const newFontSize = fontSize * 1.6;

    yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
    const messages = [
        "Không tin đâu ạ",
        "Thui được ùi",
        "Thiệt hongg áaa :((",
        "Tin được hong zạa",
        "Khó tin lắm lun áa nha",
        "òi òi plè plè",
    ];

    const messageIndex = Math.min(noCount, messages.length - 1);
    return messages[messageIndex];
}

function changeImage(Image) {
    catImg.src = `data:image/jpeg;base64,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`;
}

function updateNoButtonText() {
    noButton.innerHTML = generateMessage(noCount);
}