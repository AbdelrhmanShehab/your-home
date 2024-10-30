let eyePasswordCreate = document.querySelector(".eye-password-create");
let passwordLineCreate = document.querySelector(".password-line-create");
let passwordTextBoxCreate = document.querySelector(".text-box-create");

// adding logedin navbar
//
eyePasswordCreate.addEventListener("click", hidePassword);
function hidePassword() {
  if (passwordLineCreate.classList.contains("hide-password-line")) {
    passwordLineCreate.classList.remove("hide-password-line");
    passwordTextBoxCreate.type = "text";
  } else {
    passwordLineCreate.classList.add("hide-password-line");
    passwordTextBoxCreate.type = "password";
  }
}
//
// Validation
//

let btnSignUp = document.querySelector(".btn-sign-up");
let buttonSignUp = document.querySelector(".sign-up-button");
let warningCreate = document.querySelector(".warning-login");
warningCreate.classList.add("hide-password-line");
buttonSignUp.style.backgroundColor = "lightblue";
let test = true;
// conditions after leaving field
passwordTextBoxCreate.addEventListener("blur", function (event) {
  let textBoxValue = passwordTextBoxCreate.value;
  // console.log(textBoxValue.length);
  let specialChars = /[$&@#%*&+_?!]/;
  if (
    textBoxValue.length <= 8 ||
    textBoxValue.length > 20 ||
    textBoxValue.length === 0 ||
    !specialChars.test(textBoxValue)
  ) {
    warningCreate.classList.remove("hide-password-line");
    btnSignUp.addEventListener("click", function (event) {
      if (test) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
        alert(
          "You must use strong password more than 8 chars and contains special characters($&@#%*&+_?!)"
        );
      }
    });
  } else {
    test = false;
    buttonSignUp.style.backgroundColor = "#2f80ed";
    warningCreate.classList.add("hide-password-line");
  }
});
//conditions when clicking btn
btnSignUp.addEventListener("click", function (event) {
  let textBoxValue = passwordTextBoxCreate.value;
  if (textBoxValue === "") {
    if (test) {
      event.preventDefault(); // Prevent the default behavior of the anchor tag
      alert(
        "You must use strong password more than 8 chars and contains special characters($&@#%*&+_?!)"
      );
    }
    warningCreate.classList.remove("hide-password-line");
    event.preventDefault();
  }
});