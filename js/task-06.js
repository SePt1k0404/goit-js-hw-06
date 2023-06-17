const input = document.querySelector("#validation-input");
const inputLength = input.dataset.length;

input.addEventListener("blur", (evt) => {
  input.classList.remove("valid", "invalid");
  if (evt.currentTarget.value.length !== Number(inputLength)) {
    input.classList.add("invalid");
  } else {
    input.classList.add("valid");
  }
});
