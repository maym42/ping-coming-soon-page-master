let inputEmail = document.getElementById("inputEmail");
let errorMessage = document.getElementById("errorMessage");

let flagIsValid = false;

let lightRed = "hsl(354, 100%, 66%)";
let darkBlue = "hsl(209, 33%, 12%)";

/* User typing into email field*/
inputEmail.addEventListener("input", function (e) {
  let email = inputEmail.value;
  if (validateEmail(email) === true) {
    flagIsValid = true;
    if (inputEmail.classList.contains("error")) {
      inputEmail.style.color = darkBlue;
      inputEmail.classList.remove("error");
      errorMessage.innerText = "";
    }
  } else {
    flagIsValid = false;
    inputEmail.style.color = lightRed;
    inputEmail.classList.add("error");
    errorMessage.innerText = "Pleade provide a vaild email address";
  }
});

/* check if the email is valid*/
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

/*User submit the form */
document.addEventListener("submit", function (event) {
  event.preventDefault();
  if (flagIsValid === true) {
    alert("You subscribed 💚");
    inputEmail.value = "";
  } else {
    alert("⚠️ Worng email, try again!");
    inputEmail.classList.add("error");
    errorMessage.innerText = "Pleade provide a vaild email address";
  }
});
