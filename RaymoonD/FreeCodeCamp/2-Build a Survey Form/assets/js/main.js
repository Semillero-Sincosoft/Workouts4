let boton = document.getElementById('submit');


let sololetras = new RegExp(/^[a-z ,.'-]+$/i);

boton.addEventListener('click',function(){ 
    
let nombre = document.getElementById('name').value;
let apellido = document.getElementById('lastname').value;
let correo= document.getElementById('email').value;
let telefono= document.getElementById('number').value;
    
    if (nombre==""||nombre==null||apellido==""||apellido==null||correo==""||correo==null||telefono==""||telefono==null) {
        alertify.error("Faltan campos por rellenar");
        return false;
    } 
})
