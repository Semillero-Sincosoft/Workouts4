const form = document.querySelector(".form");
const email = document.getElementById("email");
const alertas = document.querySelector(".alert");
const expresiones = {email:/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i};
const campos = {email:false};
const boton = document.querySelector("#submit");


function validarFormulario(e){
    if(expresiones.email.test(e.target.value)){
        alertas.style.display="none"
        email.classList.remove('false')
        boton.classList.remove('errorbutton')
        campos['email']=true;
    }
    else{
        email.classList.add("false")
        alertas.style.display="block"
        boton.classList.add('errorbutton')
        campos['email']=false;
    }
}
email.addEventListener('keyup',validarFormulario);
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(campos.email){
     alert('exito')
     form.reset();
     setTimeout(()=>{
         alert
     },2000);
    }
    else{
        alert("error");
    }
})