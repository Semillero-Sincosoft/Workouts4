let boton = document.getElementById('btn-principal');
let icono = document.getElementById('icono');

let expr =  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
let sololetras = /[a-zA-Z ]{2,60}/;
let exprcontra = /[A-Za-z0-9]{6,16}/

const campos = {Fname:false,Lname:false, email:false,password: false}

const email = document.getElementById('email');
const Fname = document.getElementById('Fname');
const Lname = document.getElementById('Lname');
const contra = document.getElementById('password');
const form = document.getElementById('form')

email.addEventListener('keyup',function(){Validar(email,'email',".email",expr)});
Fname.addEventListener('keyup',function(){Validar(Fname,'Fname',".Fname",sololetras)});
Lname.addEventListener('keyup',function(){Validar(Lname,'Lname',".Lname",sololetras)});
contra.addEventListener('keyup',function(){Validar(contra,'password',".pass",exprcontra)});


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
    console.log(campos.email,campos.Fname,campos.Lname)
    if(campos.email && campos.Fname && campos.Lname && campos.password){
        alert('Se ha enviado el formulario con éxito')
        form.reset();
        setTimeout(()=>{
            alert
        },2000);
    }else{
        alert("Error, no se pudo enviar el formulario");
    }



/*function ValidarCorreo (e){

    if (expr.test(e.target.value)){
        email.classList.remove('error');
        email.classList.add('success');
        document.querySelectorAll(".email")[0].style.display="none";
        document.querySelectorAll(".email")[1].style.display="none";
        campos['email']= true;  
    }else {
        email.classList.add('error');
        email.classList.remove('success');
        document.querySelectorAll(".email")[0].style.display="inline";
        document.querySelectorAll(".email")[1].style.display="inline";
        campos['email']= false;
    }
}

function ValidarLetras(campo,elemento,clase){
    if (sololetras.test(campo.value)){
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

function ValidarContra(campo,elemento){
    if (exprcontra.test(campo.value)){
        campo.classList.remove('error');
        campo.classList.add('success');
        campos[elemento]= true;
        console.log(campos[elemento])
    }else {
        campo.classList.add('error');
        campo.classList.remove('success');
        campos[elemento]= false;
    }
}*/



})