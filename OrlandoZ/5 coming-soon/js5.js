
const left = document.querySelector(".left");
const titulo1 = document.querySelector(".titulo1");
const titulo2 = document.querySelector(".titulo2");
const texto = document.querySelector(".texto");
const right = document.querySelector(".right");
const email = document.querySelector(".email");
const error = document.querySelector("#error");
const icoerror = document.querySelector("#icoerror");
const correo = document.querySelector("#correo");
const flecha = document.querySelector(".flecha");

texto.innerHTML = "Hello fellow shopper! We´re currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.";
titulo1.innerHTML = "W E ´ R E";
titulo2.innerHTML = "C O M I N G <br>S O O N";
error.innerHTML="Please provide a valid email";

flecha.addEventListener('click',()=>{validar()});

function validar(){
        var verificar = (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);
        valor = verificar.test(correo.value);
        if (!valor){
            icoerror.classList.remove("oculto");
            error.classList.remove("oculto");
        }else{
            alert("Correo correcto");
            location.reload();
        }
        
}




