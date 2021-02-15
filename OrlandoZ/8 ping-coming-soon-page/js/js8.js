const email = document.getElementById("email");
const submit = document.getElementById("submit");
const errorEmail = document.getElementById("errorEmail")

submit.addEventListener('click',()=>{validarEmail()});

function validarEmail(){
    console.log('ingreso')
    var verificar = (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);
    valor = verificar.test(email.value);
    if (!valor){
        errorEmail.classList.remove("oculto");
        console.log('error')
    }else{
        alert("Correo correcto");
        location.reload();
    }
}

document.getElementById("face").onclick=function(){
    window.open("http://facebook.com", "Página Facebook");
}

document.getElementById("instagram").onclick=function(){
    window.open("http://instagram.com", "Página Facebook");
}

document.getElementById("twitter").onclick=function(){
    window.open("http://twitter.com", "Página Facebook");
}