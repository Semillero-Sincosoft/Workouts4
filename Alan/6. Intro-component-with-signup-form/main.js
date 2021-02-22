let boton = document.getElementById('submit');
let icono = document.getElementById('icono');

let email =  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
let nombres = /[a-zA-Z ]{2,60}/;
let contraseña = /[A-Za-z0-9]{6,16}/

const campos = {primero:false,segundo:false, tercero:false,cuarto: false}

const tercero = document.getElementById('tercero');
const primero = document.getElementById('primero');
const segundo = document.getElementById('segundo');
const cuarto = document.getElementById('cuarto');
const form = document.getElementById('form')

tercero.addEventListener('keyup',function(){Validar(tercero,'tercero',".tercero",email)});
primero.addEventListener('keyup',function(){Validar(primero,'primero',".primero",nombres)});
segundo.addEventListener('keyup',function(){Validar(segundo,'segundo',".segundo",nombres)});
cuarto.addEventListener('keyup',function(){Validar(cuarto,'cuarto',".cuarto",contraseña)});


function Validar(campo,elemento,clase,expresion){
    if (expresion.test(campo.value)){
        campo.classList.remove('error');
        campo.classList.add('success');
        campos[elemento]= true;
        document.querySelectorAll(clase)[0].style.display="none";
        document.querySelectorAll(clase)[1].style.display="none";
    }else {
        campo.classList.add('error');
        campo.classList.remove('success');
        console.log(clase)
        document.querySelectorAll(clase)[0].style.display="inline";
        document.querySelectorAll(clase)[1].style.display="inline";
        campos[elemento]= false;
    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(campos.tercero,campos.primero,campos.segundo)
    if(campos.tercero && campos.primero && campos.segundo && campos.cuarto){
        alert('Se ha enviado el formulario con éxito')
        form.reset();
        setTimeout(()=>{
            alert
        },2000);
    }else{
        alert("Error, no se pudo enviar el formulario");}
    })
