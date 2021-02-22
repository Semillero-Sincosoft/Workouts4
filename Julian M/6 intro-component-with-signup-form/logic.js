const submit = document.querySelector(".submit");
const email = document.querySelector(".input-email");
const firstname = document.querySelector(".input-firstName");
const lastname = document.querySelector(".input-lastName");
const password = document.querySelector(".input-pass");

function validarEmail(){
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if(emailRegex.test(email.value)){
            document.querySelector(".email").style.display ="none";
            email.classList.remove('input-error');
            email.classList.remove('icon-error');
        }else{
            document.querySelector(".email").style.display ="block";
            email.classList.add('input-error');
            email.classList.add('icon-error');
            email.placeholder =""
        }
} 
function validarFirstName(){
    if(firstname.value ==""){
        document.querySelector(".firstName").style.display ="block";
        firstname.classList.add('input-error');
        firstname.classList.add('icon-error');
        firstname.placeholder =""
    }else{
        document.querySelector(".firstName").style.display ="none";
        firstname.classList.remove('input-error');
        firstname.classList.remove('icon-error');
    }
}

function validarLastName(){
    if(lastname.value ==""){
        document.querySelector(".lastName").style.display ="block";
        lastname.classList.add('input-error');
        lastname.classList.add('icon-error');
        lastname.placeholder =""
    }else{
        document.querySelector(".lastName").style.display ="none";
        lastname.classList.remove('input-error');
        lastname.classList.remove('icon-error');
    }
}
function validarPass(){
    if(password.value ==""){
        document.querySelector(".pass").style.display ="block";
        password.classList.add('input-error');
        password.classList.add('icon-error');
        password.placeholder =""
    }else{
        document.querySelector(".pass").style.display ="none";
        password.classList.remove('input-error');
        password.classList.remove('icon-error');
    }
}
function validarTodo(){
    validarFirstName();
    validarLastName();
    validarEmail();
    validarPass();
}
email.addEventListener('keyup',validarEmail);

firstname.addEventListener('keyup',validarFirstName);

lastname.addEventListener('keyup',validarLastName);

password.addEventListener('keyup',validarPass);

submit.addEventListener('click',validarTodo);
