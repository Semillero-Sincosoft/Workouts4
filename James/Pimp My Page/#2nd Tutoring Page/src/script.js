const nav = document.querySelector(".navBar");
const topNav = nav.offsetTop;
const signUpBtn = document.querySelector(".signUp");
const form = document.querySelector(".signUpForm");
const closeBtn = document.querySelector(".close");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const submitBtn = document.getElementById("submitBtn");
const errorArray = [document.getElementById("name"), document.getElementById("email"), document.getElementById("phone")];
const genderArr = [document.getElementsByName('gender')]
const levelArr = [document.getElementsByName('level')]
const langArr = [document.getElementsByName('lang')]
const abc = new RegExp("[a-zA-Z]+");
const nums = new RegExp("^[+0-9]*$");
const emailVal = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"); 

//-------------functionality----------

signUpBtn.addEventListener("click", () => {
  form.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  form.style.display = "none";
});
window.addEventListener("scroll", () => {
  window.scrollY >= topNav ? (nav.style.top = 0) : (nav.style.top = 50);
});
errorArray[0].addEventListener('focusout',
  ()=> {
    if (errorArray[0].value == "" || abc.test(errorArray[0].value) == false) {
      nameError.classList.remove("hide");
    }else{
      nameError.classList.add("hide");
    }
  })
  errorArray[1].addEventListener('focusout',
  ()=> {
    if (errorArray[1].value == "" || emailVal.test(errorArray[1].value) == false) {
      emailError.classList.remove("hide");
    }else{
      emailError.classList.add("hide");
    }
  }) 
  errorArray[2].addEventListener('focusout',
  ()=> {
    if (errorArray[2].value == "" || nums.test(errorArray[2].value) == false) {
      phoneError.classList.remove("hide");
    }else{
      phoneError.classList.add("hide");
    }
  }) 
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (errorArray.some(input => input.value == "")) {
      alert(
        `Please make sure to fill out the contact information for Name, Email & Phone Number`
      );
    } else {
      document.getElementById("form1"),
      document.getElementById("form2"),
      document.getElementById("form3"),
      document.getElementById("form4");
      alert(
        `Congradulations ${name.value} you have succesfully signed up for an english tutor`
      );
    } 
  });

if(genderArr.some(radio => radio.checked == true)){
  alert("Works!!")
}
