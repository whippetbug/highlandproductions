const filmImages = document.getElementsByClassName("film-image");
const leftButton = document.getElementById("left-scroll-button");
const rightButton = document.getElementById("right-scroll-button");
const filmBoxContainer = document.getElementById("film-box-container");

function positionButtons() {
    const imageWidth = filmImages[0].clientWidth;
    const windowWidth = window.innerWidth;
    const leftButtonWidth = leftButton.clientWidth;
    const rightButtonWidth = rightButton.clientWidth;
    const filmBoxGap = 80;
    const rightButtonPosition = ((windowWidth + imageWidth - rightButtonWidth + filmBoxGap) / 2);
    const leftButtonPosition = ((windowWidth - imageWidth - leftButtonWidth - filmBoxGap) / 2);

    leftButton.style.left = leftButtonPosition + "px";
    rightButton.style.left = rightButtonPosition + "px";
}

window.addEventListener("load", () => positionButtons());
window.addEventListener("resize", () => positionButtons())

rightButton.addEventListener("click", () => {
    filmBoxContainer.scrollLeft += filmImages[0].clientWidth;
})

leftButton.addEventListener("click", () => {
    filmBoxContainer.scrollLeft -= filmImages[0].clientWidth;
})