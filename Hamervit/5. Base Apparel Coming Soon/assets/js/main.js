const emailInput = document.getElementById('email')
const regEx = new RegExp('[a-zA-Z0-9._-]+@[a-zA-Z]+.com')
const errIcon = document.getElementById('errorIcon')

function submit() {
    if (!regEx.test(emailInput.value)) {
        document.getElementById('error').classList.remove('d-none')
        errIcon.classList.remove('d-none', 'check')
        emailInput.classList.remove('success-border')
        emailInput.classList.add('error-border')
    } else {
        document.getElementById('error').classList.add('d-none')
        errIcon.classList.remove('d-none')
        errIcon.classList.add('check')
        emailInput.classList.add('success-border')
    }
}