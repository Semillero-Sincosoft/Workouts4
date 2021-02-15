const form = document.getElementById('form') 
const input = document.querySelector('.email')
const expressions = {
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}
const alerta = document.querySelector(".alert")
let email =true ;
const button = document.querySelector(".button")
function validateForm(e){

   expressions.email.test(e.target.value)?
   (alerta.style.display="none",
    input.classList.remove('false'),
    email=false,
    button.classList.remove('errorButton')
    ):(
      input.classList.add('false'),
      alerta.style.display="block",
      email=false),
      button.classList.add('errorButton');
   
}
input.addEventListener('keyup', validateForm);
form.addEventListener('submit',(e)=>{
    let success= document.querySelector(".success")
e.preventDefault();
if( email=true && input.value!="" ){
    form.reset();
    success.style.display="block";
    
    setTimeout(() =>{
        success.style.display="none";
    }, 2000)
    
}
else{
    input.classList.add('false');
    success.style.display="none";
    alerta.style.display="block";
    email=false;
}
})