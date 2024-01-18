/* Start Register */

const form = document.querySelector("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const pswRepeat = document.getElementById("psw-repeat");
const regbtn = document.getElementById("regbtn");

// A function to check that all fields have been completed so that the login button appears
const activeReg = () => {
  if (
    username.classList.contains("success") &&
    email.classList.contains("success") &&
    password.classList.contains("success") &&
    pswRepeat.classList.contains("success")
  ) {
    regbtn.removeAttribute("disabled");
    console.log("yes");
  } else {
    regbtn.setAttribute("disabled", "");
    console.log("no");
  }
};

// Check the username field as complete
username.addEventListener("keyup", (eo) => {
  if (username.value.length < 4) {
    username.classList.remove("success");
    username.classList.add("error");
    username.nextElementSibling.style.display = "none";
    username.nextElementSibling.nextElementSibling.style.display = "block";
  } else {
    username.nextElementSibling.style.display = "block";
    username.classList.add("success");
    username.classList.remove("error");
    username.nextElementSibling.nextElementSibling.style.display = "none";
  }
  activeReg();
});
// Check the email field as complete
email.addEventListener("keyup", (eo) => {
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regEmail.test(email.value)) {
    email.nextElementSibling.style.display = "block";
    email.classList.add("success");
    email.classList.remove("error");
    email.nextElementSibling.nextElementSibling.style.display = "none";
  } else {
    email.classList.remove("success");
    email.classList.add("error");
    email.nextElementSibling.style.display = "none";
    email.nextElementSibling.nextElementSibling.style.display = "block";
  }
  activeReg();
});

// Check the password field as complete
password.addEventListener("keyup", (eo) => {
  const regPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  if (regPassword.test(password.value)) {
    password.nextElementSibling.style.display = "block";
    password.classList.add("success");
    password.classList.remove("error");
    password.nextElementSibling.nextElementSibling.style.display = "none";
  } else {
    password.classList.remove("success");
    password.classList.add("error");
    password.nextElementSibling.style.display = "none";
    password.nextElementSibling.nextElementSibling.style.display = "block";
  }
  activeReg();
});

// Show and hide the password
const ShowpassWord = document.querySelector(".ShowpassWord");
ShowpassWord.addEventListener("change", (eo) => {
  if (password.type == "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
});

// Check the password Repeat field as complete
pswRepeat.addEventListener("keyup", (eo) => {
  if (pswRepeat.value == password.value) {
    pswRepeat.nextElementSibling.style.display = "block";
    pswRepeat.classList.add("success");
    pswRepeat.classList.remove("error");
    pswRepeat.nextElementSibling.nextElementSibling.style.display = "none";
  } else {
    pswRepeat.classList.remove("success");
    pswRepeat.classList.add("error");
    pswRepeat.nextElementSibling.style.display = "none";
    pswRepeat.nextElementSibling.nextElementSibling.style.display = "block";
  }

  activeReg();
});
// Show and hide the password
const ShowpassWordRepeat = document.querySelector(".ShowpassWord-repeat");
ShowpassWordRepeat.addEventListener("change", (eo) => {
  if (pswRepeat.type == "password") {
    pswRepeat.setAttribute("type", "text");
  } else {
    pswRepeat.setAttribute("type", "password");
  }
});
/* End Register */