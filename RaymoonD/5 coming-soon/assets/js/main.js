let boton = document.getElementById('btn-principal');

let expr = new RegExp( /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/)

boton.addEventListener('click',function(){ 
    
let correo= document.getElementById('email').value;

    if (correo==""||correo==null) {
        alertify.error("Debe rellenar el campo");
        document.getElementById('email').classList.add('error');
        document.querySelector('.msj').classList.add('msj-active')
        return false;
    } 
})