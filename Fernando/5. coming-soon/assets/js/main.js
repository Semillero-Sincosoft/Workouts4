//VALIDACION INPUT
const form = document.getElementById('form') 
const input = document.querySelector('.email')
const expressions = {
	email: /^[-\w.%+]{​​​​1,64}​​​​@(?:[A-Z0-9-]{​​​​1,63}​​​​\.){​​​​1,125}​​​​[A-Z]{​​​​2,63}​​​​$/i
}
const campos={
    email:false
}
const alerta = document.querySelector(".alert")
const button = document.querySelector(".button")

function validateForm(e){

   expressions.email.test(e.target.value)?
   (alerta.style.display="none",
    input.classList.remove('false'),
    button.classList.remove('errorButton'),
    campos['email']=true
    ):(
        input.classList.add('false'),
        alerta.style.display="block",
        campos['email']=false,
        button.classList.add('errorButton')); 
}
input.addEventListener('keyup', validateForm);
form.addEventListener('submit',(e)=>{
let success= document.querySelector(".success")
e.preventDefault();
 campos.email ?
    (form.reset(),
    success.style.display="block",
    setTimeout(() =>{
        success.style.display="none"
    }, 2000))
    :
    (input.classList.add('false'),
    success.style.display="none",
    alerta.style.display="block");

})
//TRANSICION
