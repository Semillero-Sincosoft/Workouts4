const submit = document.querySelector(".submit");
const mensaje=document.getElementById("validar");
submit.addEventListener('click', function validar(){
    const input = document.getElementById('inputText');
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if(emailRegex.test(input.value)){
            console.log("good")
            mensaje.innerText ="Good";
            submit.classList.remove('error');
            input.style.border ="1px solid var(--DesaturatedRed)"
            document.getElementById("icon-error").style.display ="none"

        }else{
            console.log("bad")
            mensaje.innerText ="Please provide a valid email";
            submit.classList.add('error');
            input.style.border ="1px solid var(--SoftRed)"
            document.getElementById("icon-error").style.display ="block"
        }
} );


