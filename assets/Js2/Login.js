// start Login

const emailLogin = document.querySelector(".formBox .email-login");
const passwordLogin = document.querySelector(".password-login");

const Login = document.getElementById("Login");
// A function to check that all fields have been completed so that the login button appears
const activeRegLogin = (eo) => {
  if (
    emailLogin.classList.contains("success") &&
    passwordLogin.classList.contains("success")
  ) {
    Login.removeAttribute("disabled");
  } else {
    Login.setAttribute("disabled", "");
  }
};

// Check the email field as complete
emailLogin.addEventListener("keyup", (eo) => {
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regEmail.test(emailLogin.value)) {
    emailLogin.nextElementSibling.style.display = "block";
    emailLogin.classList.add("success");
    emailLogin.classList.remove("error");
    emailLogin.nextElementSibling.nextElementSibling.style.display = "none";
  } else {
    emailLogin.classList.remove("success");
    emailLogin.classList.add("error");
    emailLogin.nextElementSibling.style.display = "none";
    emailLogin.nextElementSibling.nextElementSibling.style.display = "block";
  }
  console.log("object");
  activeRegLogin();
});

// Check the password field as complete
password.addEventListener("keyup", (eo) => {
  const regPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  if (regPassword.test(passwordLogin.value)) {
    passwordLogin.nextElementSibling.style.display = "block";
    passwordLogin.classList.add("success");
    passwordLogin.classList.remove("error");
    passwordLogin.nextElementSibling.nextElementSibling.style.display = "none";
  } else {
    passwordLogin.classList.remove("success");
    passwordLogin.classList.add("error");
    passwordLogin.nextElementSibling.style.display = "none";
    passwordLogin.nextElementSibling.nextElementSibling.style.display = "block";
  }
  activeRegLogin();
});

// Show and hide the password
const showPasswordLogin = document.getElementById("ShowpassWord-login");
showPasswordLogin.addEventListener("change", (eo) => {
  if (passwordLogin.type == "password") {
    passwordLogin.setAttribute("type", "text");
  } else {
    passwordLogin.setAttribute("type", "password");
  }
  console.log("object");
});

// End Login
