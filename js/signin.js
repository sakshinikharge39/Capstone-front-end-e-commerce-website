// Sign in page
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const formValues = [];

const formFields = {
  username: null,
  email: null,
  password: null,
  password2: null,
};

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  let small = formControl.querySelector("small");
  small.textContent = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkEmail(input) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  // Test the input against the regular expression
  if (re.test(input.value)) {
    showSuccess(input);
    formFields.email = true;
  } else {
    showError(input, "Email is not valid");
    formFields.email = false;
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value === "") {
      // Corrected from input.value()
      showError(input, `${getFieldName(input)} is required`);
      formFields[input.id] = false;
    } else {
      showSuccess(input);
      formFields[input.id] = true;
    }
  });
}

function checkPasswordMatch(password1, password2) {
  if (password1.value !== password2.value) {
    showError(password2, "Passwords do not match");
    formFields.password2 = false;
  } else {
    showSuccess(password2);
    formFields.password2 = true;
  }
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be more than ${min} characters`
    );
    formFields[input.id] = false;
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
    formFields[input.id] = false;
  } else {
    showSuccess(input);
    formFields[input.id] = true;
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);

  if (password2.value !== "") {
    checkPasswordMatch(password, password2);
  }

  const formData = {
    username: username.value,
    email: email.value,
    password: password.value,
    confirmPassword: password2.value,
  };

  let hasError = false;

  Object.values(formFields).map((e) => {
    if (e === false) {
      hasError = true;
    }
  });
  if (hasError) return;

  formValues.push(formData);

  //clear the input values
  form.reset();

  // add form control class
  const usernameClass = username.parentElement;
  const emailClass = email.parentElement;
  const passwordClass = password.parentElement;
  const password2Class = password2.parentElement;

  usernameClass.className = "form-control";
  emailClass.className = "form-control";
  passwordClass.className = "form-control";
  password2Class.className = "form-control";

  alert("form submitted successfully");
  window.location.href = "main.html";
  console.log("Form Inputs:", formValues);
});
