// Todo: add validation to the input fields (empty fields should not work)

var signInBtn = document.getElementById("sign-in-btn");
var emailInput = document.querySelector(".email-input-field");
var passwordInput = document.querySelector(".password-input-field");

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (emailInput.value == "") {
    alert("Please enter a valid email id");
  } else if (passwordInput.value == "" || passwordInput.value.length < 8) {
    alert("password must be more than 8 characters");
  } else {
    window.location.pathname = "home/home.html";
  }
});
