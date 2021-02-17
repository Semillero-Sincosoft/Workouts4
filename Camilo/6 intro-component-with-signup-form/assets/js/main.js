let firstName = document.getElementById('firstName')
let FMessage = document.getElementById('messageErrorFirst')
let lastName = document.getElementById('lastName')
let LMessage = document.getElementById('messageErrorLast')
let email = document.getElementById('emailAddress')
let EMessage = document.getElementById('messageErrorEmail')
let pass = document.getElementById('pass')
let PMessage = document.getElementById('messageErrorPass')

let regExName = new RegExp('^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$')
let regEx = new RegExp('[a-zA-Z0-9._-]+@[a-zA-Z]+.com')


let object = {
    firstName: false,
    lastName: false,
}

function FirstName() {

    if (firstName.value == '') {
        firstName.classList.remove('success-border')
        FMessage.innerHTML = 'First Name cannot be empty'
        FMessage.classList.remove('d-none')
        firstName.style = "background: url('assets/svg/icon-error.svg') no-repeat right 17px center"
        firstName.classList.add('error-border')
    } else if (!regExName.test(firstName.value)) {
        firstName.classList.remove('success-border')
        FMessage.innerHTML = 'The name is not correct, check again'
        FMessage.classList.remove('d-none')
        firstName.style = "background: url('assets/svg/icon-error.svg') no-repeat right 17px center"
        firstName.classList.add('error-border')
    } else {
        FMessage.classList.add('d-none')
        firstName.classList.remove('error-border')
        firstName.classList.add('success-border')
       
    }
}
function LastName() {
    
   
    if (lastName.value == '') {
        lastName.classList.remove('success-border')
        LMessage.innerHTML = 'First Name cannot be empty'
        LMessage.classList.remove('d-none')
        lastName.style = "background: url('assets/svg/icon-error.svg') no-repeat right 17px center"
        lastName.classList.add('error-border')
    } else if (!regExName.test(lastName.value)) {
        lastName.classList.remove('success-border')
        LMessage.innerHTML = 'The name is not correct, check again'
        LMessage.classList.remove('d-none')
        lastName.style = "background: url('assets/svg/icon-error.svg') no-repeat right 17px center"
        lastName.classList.add('error-border')
    } else {
        LMessage.classList.add('d-none')
        lastName.classList.remove('error-border')
        lastName.classList.add('success-border')
    }
}

function Email() {
    
   
    if (email.value == '') {
        email.classList.remove('success-border')
        EMessage.innerHTML = 'Email cannot be empty'
        EMessage.classList.remove('d-none')
        email.style = "background: url('assets/svg/icon-error.svg') no-repeat right 17px center"
        email.classList.add('error-border')
    } else if (!regEx.test(email.value)) {
        email.classList.remove('success-border')
        EMessage.innerHTML = 'The Email is not correct, check again'
        EMessage.classList.remove('d-none')
        email.style = "background: url('assets/svg/icon-error.svg') no-repeat right 17px center"
        email.classList.add('error-border')
    } else {
        EMessage.classList.add('d-none')
        email.classList.remove('error-border')
        email.classList.add('success-border')
    }
}

function Pass() {
   
    if (pass.value == '') {
        pass.classList.remove('success-border')
        PMessage.innerHTML = 'Password cannot be empty'
        PMessage.classList.remove('d-none')
        pass.style = "background: url('assets/svg/icon-error.svg') no-repeat right 17px center"
        passt.classList.add('error-border')
    } else if(pass.value.length < 10){
        pass.classList.remove('success-border')
        PMessage.innerHTML = 'Password cannot be less than 10 characters'
        PMessage.classList.remove('d-none')
        pass.style = "background: url('assets/svg/icon-error.svg') no-repeat right 17px center"
        pass.classList.add('error-border')
    } else {
        
        PMessage.classList.add('d-none')
        pass.classList.remove('error-border')
        pass.classList.add('success-border')
    }
}