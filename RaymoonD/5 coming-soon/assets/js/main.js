let boton = document.getElementById('btn-principal');
let icono = document.getElementById('icono');

let expr =  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

const campos = {email:false}

const email = document.getElementById('email');
const span =document.querySelector('.msj');
const form = document.getElementById('form')

email.addEventListener('keyup',Validar) 
    
let correo= document.getElementById('email').value;
function Validar (e){

    if (expr.test(e.target.value)){
        icono.style.display="none";
        email.classList.remove('error');
        span.classList.remove('msj-active');
        email.classList.add('success');
        span.classList.add('success');
        boton.classList.remove('btn-no');
        campos['email']= true;
    }else {
        icono.style.display="block";
        email.classList.add('error');
        span.classList.add('msj-active');
        email.classList.remove('success');
        span.classList.remove('success');
        campos['email']= false;
        boton.classList.add('btn-no');
    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(campos.email){
        alertify.success('Se ha enviado el formulario con éxito')
        form.reset();
        setTimeout(()=>{
            alert
        },2000);
    }else{
        alertify.error("Error, no se pudo enviar el formulario");
    }
})

   /*
   
   boton.AddEventListenerif (correo==""||correo==null) {
        alertify.error("Debe rellenar el campo");
        document.getElementById('email').classList.add('error');
        document.querySelector('.msj').classList.add('msj-active');
        icono.style.display="block";
        return false;
    } else if(!expr.test(correo)){
        alertify.error("Ingrese un email válido");
        document.getElementById('email').classList.add('error');
        document.querySelector('.msj').classList.add('msj-active');
        return false;
    }*/


