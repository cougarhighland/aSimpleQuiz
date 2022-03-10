const email = document.getElementById("email");
const name = document.getElementById("name");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateName();
  validateEmail();
  if (validateEmail() && validateName()) {
    form.submit();
  }
});

const validateEmail = () => {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
    return true;
  }
};

const validateName = () => {
  const nameValue = name.value.trim();
  const isNumber = /^[^0-9]+$/;

  if (nameValue === "" || nameValue === null) {
    setError(name, "your name is required");
  } else if (!isNumber.test(nameValue)) {
    setError(name, "your name should not have number");
  } else {
    setSuccess(name);
    return true;
  }
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
