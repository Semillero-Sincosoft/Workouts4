var input
var pMessage, regExName = new RegExp('^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$'),
    regExEmail = new RegExp('[a-zA-Z0-9._-]+@[a-zA-Z]+.com')

let object = {
    firstName: false,
    lastName: false,
}

function checkFirstName() {
    input = document.getElementById('firstName')
    pMessage = document.getElementById('messageErrorFirst')
    if (input.value == '') {
        input.classList.remove('success-border')
        pMessage.innerHTML = 'First Name cannot be empty'
        pMessage.classList.remove('d-none')
        input.style = "background: url('assets/svg/icon-error.svg') no-repeat right 17px center"
        input.classList.add('error-border')
    } else if (!regExName.test(input.value)) {
        input.classList.remove('success-border')
        pMessage.innerHTML = 'This is not a correct value to first name field'
        pMessage.classList.remove('d-none')
        input.style = "background: url('assets/svg/icon-error.svg') no-repeat right 17px center"
        input.classList.add('error-border')
    } else {
        input.style = "background: url('assets/svg/check.svg') no-repeat right 17px center"
        pMessage.classList.add('d-none')
        input.classList.remove('error-border')
        input.classList.add('success-border')
    }
}

function checkLastName() {
    input = document.getElementById('lastName')
    pMessage = document.getElementById('messageErrorLast')
    if (input.value == '') {
        input.classList.remove('success-border')
        pMessage.innerHTML = 'Last Name cannot be empty'
        pMessage.classList.remove('d-none')
        input.style = "background: url('assets/svg/icon-error.svg') no-repeat right 17px center"
        input.classList.add('error-border')
    } else if (!regExName.test(input.value)) {
        input.classList.remove('success-border')
        pMessage.innerHTML = 'This is not a correct value to last name field'
        pMessage.classList.remove('d-none')
        input.style = "background: url('assets/svg/icon-error.svg') no-repeat right 17px center"
        input.classList.add('error-border')
    } else {
        input.style = "background: url('assets/svg/check.svg') no-repeat right 17px center"
        pMessage.classList.add('d-none')
        input.classList.remove('error-border')
        input.classList.add('success-border')
    }
}

function checkEmail() {
    input = document.getElementById('emailAddress')
    pMessage = document.getElementById('messageErrorEmail')
    if (input.value == '') {
        input.classList.remove('success-border')
        pMessage.innerHTML = 'Email address cannot be empty'
        pMessage.classList.remove('d-none')
        input.style = "background: url('assets/svg/icon-error.svg') no-repeat right 17px center"
        input.classList.add('error-border')
    } else if (!regExEmail.test(input.value)) {
        input.classList.remove('success-border')
        pMessage.innerHTML = 'This is not a correct value to email field'
        pMessage.classList.remove('d-none')
        input.style = "background: url('assets/svg/icon-error.svg') no-repeat right 17px center"
        input.classList.add('error-border')
    } else {
        input.style = "background: url('assets/svg/check.svg') no-repeat right 17px center"
        pMessage.classList.add('d-none')
        input.classList.remove('error-border')
        input.classList.add('success-border')
    }
}

function checkPass() {
    input = document.getElementById('pass')
    pMessage = document.getElementById('messageErrorPass')
    if (input.value == '') {
        input.classList.remove('success-border')
        pMessage.innerHTML = 'Password cannot be empty'
        pMessage.classList.remove('d-none')
        input.style = "background: url('assets/svg/icon-error.svg') no-repeat right 17px center"
        input.classList.add('error-border')
    } else if(input.value.length < 8){
        input.classList.remove('success-border')
        pMessage.innerHTML = 'Password cannot be less than 8 characters'
        pMessage.classList.remove('d-none')
        input.style = "background: url('assets/svg/icon-error.svg') no-repeat right 17px center"
        input.classList.add('error-border')
    } else {
        input.style = "background: url('assets/svg/check.svg') no-repeat right 17px center"
        pMessage.classList.add('d-none')
        input.classList.remove('error-border')
        input.classList.add('success-border')
    }
}