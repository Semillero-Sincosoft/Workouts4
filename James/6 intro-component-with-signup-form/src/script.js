const body = document.getElementById("body");

const main = document.createElement("main");
const textSection = document.createElement("section");
const textH1 = document.createElement("h1");
const textP = document.createElement("p");
const formSection = document.createElement("section");
const freeTrial = document.createElement("article");
const trialText = document.createElement("span");
const form = document.createElement("form");
const firstNameInput = document.createElement("input");
const firstNameContainer = document.createElement("div");
const lastNameInput = document.createElement("input");
const lastNameContainer = document.createElement("div");
const emailInput = document.createElement("input");
const emailContainer = document.createElement("div");
const passwordInput = document.createElement("input");
const passwordContainer = document.createElement("div");
const btn = document.createElement("button");
const formText = document.createElement("span");

main.id = "mainContainer";
textSection.id = "textSection";
textH1.innerHTML = "Learn to code by <br> watching others";
textP.innerHTML =
  "See how experienced developers solve problems in real-time Watching scripted tutorials is great, but understanding how developers think is invaluable. ";
formSection.id = "formSection";
freeTrial.id = "freeTrial";
trialText.innerHTML = "<b> Try it free 7 days </b> then $20/mo. thereafter";

firstNameInput.placeholder = "First Name";
firstNameInput.classList.add("input");
firstNameContainer.classList.add("inputWrap");

lastNameInput.placeholder = "Last Name";
lastNameInput.classList.add("input");
lastNameContainer.classList.add("inputWrap");

emailInput.placeholder = "Email Address";
emailInput.classList.add("input");
emailContainer.classList.add("inputWrap");

passwordInput.placeholder = "Password";
passwordInput.classList.add("input");
passwordInput.type = "Password";
passwordContainer.classList.add("inputWrap");

btn.type = "submit";
btn.innerHTML = "CLAIM YOUR FREE TRIAL";
formText.id = "formText";
formText.innerHTML =
  "By clicking the button, you are agreeding to our <b>Terms and Services</b>";

textSection.appendChild(textH1);
textSection.appendChild(textP);
main.appendChild(textSection);

formSection.appendChild(freeTrial);
freeTrial.appendChild(trialText);
formSection.appendChild(form);

form.appendChild(firstNameContainer);
firstNameContainer.appendChild(firstNameInput);

form.appendChild(lastNameContainer);
lastNameContainer.appendChild(lastNameInput);

form.appendChild(emailContainer);
emailContainer.appendChild(emailInput);

form.appendChild(passwordContainer);
passwordContainer.appendChild(passwordInput);

form.appendChild(btn);
form.appendChild(formText);
main.appendChild(formSection);
body.appendChild(main);

let list = document.querySelectorAll(".input");
let inputList = Array.from(list).map((input) => {
  input.addEventListener("focusout", () => {
    switch (
      input.placeholder == "First Name" ||
      input.placeholder == "Last Name"
    ) {
      case true:
        var val = new RegExp("^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$");
        if (input.value == "") {
          alert(`${input.placeholder} is empty`);
        } else if (!val.test(input.value)) {
            errorGenerator(input);
        } else {
            try {
                input.nextElementSibling.remove()
                input.parentElement.removeChild(input.parentElement.lastElementChild)
            } catch(e) {
                break
            }
            input.classList.remove('error')
        }
        break

        case false:
            val = new RegExp('[a-zA-Z0-9._-]+@[a-zA-Z]+\.+com');
            if(input.placeholder == 'Email Address') {
                if (input.value == "") {
                    alert(`${input.placeholder} is empty`);
                  } else if (!val.test(input.value)) {
                      errorGenerator(input);
                  } else {
                      try {
                          input.nextElementSibling.remove()
                          input.parentElement.removeChild(input.parentElement.lastElementChild)
                      } catch(e) {
                          break
                      }
                      input.classList.remove('error')
                  }
            } else {
                if (input.value == "") {
                    alert(`${input.placeholder} is empty`);
                  } else if(input.value.length < 8) {
                    let error = document.createElement("img");
                    let errorText = document.createElement("span");
                    errorText.innerHTML = `${input.placeholder} must be longer than 8 Characters`;
                    errorText.classList.add('errorText')
                    input.parentElement.appendChild(errorText);
                    error.src = "../images/icon-error.svg";
                    input.classList.add("error");
                    input.parentElement.appendChild(error);
                    error.classList.add("errorImg");
                    error.src = "../images/icon-error.svg";
                    input.classList.add("error");
                    input.parentElement.appendChild(error);
                    error.classList.add("errorImg");
                  }else {
                    try {
                        input.nextElementSibling.remove()
                        input.parentElement.removeChild(input.parentElement.lastElementChild)
                    } catch(e) {
                        break
                    }
                    input.classList.remove('error')
                }
            }
            break
    }
  });
});
function errorGenerator(input) {
  let error = document.createElement("img");
  let errorText = document.createElement("span");
  errorText.innerHTML = `This is not a valid ${input.placeholder}`;
  errorText.classList.add('errorText')
  input.parentElement.appendChild(errorText);
  error.src = "../images/icon-error.svg";
  input.classList.add("error");
  input.parentElement.appendChild(error);
  error.classList.add("errorImg");
  error.src = "../images/icon-error.svg";
  input.classList.add("error");
  input.parentElement.appendChild(error);
  error.classList.add("errorImg");
}
