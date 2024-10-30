let passwordLine = document.querySelector(".passowrd-line");
let textboxPwSignIn = document.querySelector(".text-box-password");
let textboxEmailSignIn = document.querySelector(".text-box-email-signin");
let btnSignIn = document.querySelector(".btn-sign-in");
let signInButton = document.querySelector(".sign-in-button");
let warningLoginPassword = document.querySelector(".warning-signin-pw");
let warningEmailSignIn = document.querySelector(".warning-signin");
warningEmailSignIn.style.display = "none";
warningLoginPassword.style.display = "none";
signInButton.style.backgroundColor = "lightblue";

let eyePassword = document.querySelector(".eye-password");
eyePassword.addEventListener("click", hidePassword);
function hidePassword() {
  if (passwordLine.style.display === "none") {
    passwordLine.style.display = "block";
    textboxPwSignIn.type = "password";
  } else {
    passwordLine.style.display = "none";
    textboxPwSignIn.type = "text";
  }
}
//
// email login validation code
//
textboxEmailSignIn.addEventListener("blur", function (event) {
  let test = true;
  let textBoxValueEmail = textboxEmailSignIn.value;
  let specialChars = /[@]/;
  if (
    textBoxValueEmail.length > 25 ||
    textBoxValueEmail.length < 12 ||
    !specialChars.test(textBoxValueEmail)
  ) {
    warningEmailSignIn.style.display = "flex";
    btnSignIn.addEventListener("click", function (event) {
      if (test) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
        alert("You must use email like example@gmail.com");
        test = false;
      }
    });
    textboxEmailSignIn.style.borderColor = "#2f80ed";
  } else {
    signInButton.style.backgroundColor = "#2f80ed";
    warningEmailSignIn.style.display = "none";
  }
});

// password login validation code
//

textboxPwSignIn.addEventListener("blur", function (event) {
  let test = true;
  let textBoxValuePassword = textboxPwSignIn.value;
  let specialChars = /[$&@#%*&+_?!]/;
  if (
    textBoxValuePassword.length <= 8 ||
    textBoxValuePassword.length > 30 ||
    !specialChars.test(textBoxValuePassword)
  ) {
    warningLoginPassword.style.display = "flex";
    btnSignIn.addEventListener("click", function (event) {
      if (test) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
        alert(
          "You must use strong password more than 8 chars and contains special characters($&@#%*&+_?!)"
        );
        test = false;
      }
    });
  } else {
    signInButton.style.backgroundColor = "#2f80ed";
    warningLoginPassword.style.display = "none";
  }
});
//conditions when clicking btn
btnSignIn.addEventListener("click", function (event) {
  let textBoxValuePassword = textboxPwSignIn.value;
  let textBoxValueEmail = textboxEmailSignIn.value;
  // adding password box condition
  if (textBoxValuePassword === "") {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    alert("You must fill out your valid password");
    warningLoginPassword.style.display = "flex";
  }
  // adding email box condition
  if (textBoxValueEmail === "") {
    event.preventDefault();
    alert("You must fill out you valid email");
    warningEmailSignIn.style.display = "flex";
  }
});

// trying to deal with local storage