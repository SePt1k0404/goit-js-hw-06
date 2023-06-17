function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let divContainer = "";
  let sizeWH = 30;
  for (let i = 1; i <= amount; i += 1) {
    divContainer += `<div style="background-color:${getRandomHexColor()};
     width:${sizeWH}px; height:${sizeWH}px"></div>`;
    sizeWH += 10;
  }
  return divContainer;
}

const divBoxesEl = document.querySelector("#boxes");
const crtBtnEl = document.querySelector("button[data-create]");
const desBtnEl = document.querySelector("button[data-destroy]");

crtBtnEl.addEventListener("click", () => {
  const countOfDiv = document.querySelector("#controls input").value;
  divBoxesEl.insertAdjacentHTML("afterbegin", createBoxes(countOfDiv));
});

desBtnEl.addEventListener("click", () => {
  divBoxesEl.innerHTML = "";
});
