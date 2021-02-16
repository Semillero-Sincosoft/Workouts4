const emailInput = document.getElementById('email')
const regEx = new RegExp('^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$  ')
const errIcon = document.getElementById('errorIcon')

function Enviar() {
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
        alert("Correcto")
    }
}