const loginFormEl = document.querySelector(".login-form");

const loginInfo = {};
loginFormEl.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const {
    elements: { email, password },
  } = evt.currentTarget;

  if (!email.value || !password.value) {
    alert("Усі поля повинні бути заповнені!");
    return 0;
  }
  loginInfo["email"] = email.value;
  loginInfo["password"] = password.value;
  console.log(loginInfo);
  evt.currentTarget.reset();
});
