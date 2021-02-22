//VALIDACION INPUT
const form = document.getElementById('form') 
const inputs = document.querySelectorAll("#form input") 
const inputs2 = document.querySelector("input") 
const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, 
    
	password:/^[a-zA-Z0-9!@#$%^&*]{6,16}$/, // 4 a 12 digitos.
	email: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
}
const campos={
    name:false,
    lastName:false,
    password:false,
    email:false
}
const iconoAlert = document.querySelector(".alerta")

const spanAlert = document.querySelector(".spanAlert")

function validateForm(e){

    switch(e.target.name){
        case "first":
            validateCamp(expressions.name, e.target,'first')
        break;
        case "last":
            validateCamp(expressions.name, e.target,'lastName')
        break;
        case "email":
            validateCamp(expressions.email, e.target,'email')
        break;
        case "password":
            validateCamp(expressions.password, e.target,'password')
        break;
    }
 }

 function validateCamp(expression, input, campo){
     
    if(expression.test(input.value)){
        document.querySelector(`#grup__${campo}  img`).style.display="none";
        iconoAlert.style.display="none";
        document.querySelector(`#grup__${campo}  span`).style.display="none";
        document.querySelector(`#grup__${campo}  input`).classList.remove("inputAlert");
        campos[campo]=true;
    }
    else{
        document.querySelector(`#grup__${campo}  img`).style.display="block";
        document.querySelector(`#grup__${campo}  span`).style.display="block";
        document.querySelector(`#grup__${campo}  input`).classList.add("inputAlert");
        campos[campo]=false
    }
 }

inputs.forEach((input) =>{
   input.addEventListener('keyup',validateForm);
});




const button = document.querySelector(".button")
button.addEventListener('click',emptyFields)
function emptyFields(e){
    e.preventDefault();
    if(campos.first && campos.lastName && campos.email && campos.password){
        form.reset()
        iconoAlert.style.display="none"
        spanAlert.style.display="none"
        document.querySelector(` input`).classList.remove("inputAlert");
        campos[campo]=false;
    }
    else{
        spanAlert.style.display="block"
         iconoAlert.style.display="block"
         document.querySelector(` input`).classList.add("inputAlert");
         alert("rellene los campos")
         campos[campo]=true
    }
}


