const sliderEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

sliderEl.addEventListener("input", (evt) => {
  textEl.style.fontSize = evt.currentTarget.value + "px";
});
