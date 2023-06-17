function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const backGroundEl = document.querySelector("body");
const stringColor = document.querySelector(".widget .color");
const btnChangeColorEl = document.querySelector(".widget .change-color");
let backGroundColor = getRandomHexColor();
backGroundEl.style.backgroundColor = backGroundColor;
stringColor.textContent = backGroundColor;

btnChangeColorEl.addEventListener("click", () => {
  backGroundColor = getRandomHexColor();
  backGroundEl.style.backgroundColor = backGroundColor;
  stringColor.textContent = backGroundColor;
});
