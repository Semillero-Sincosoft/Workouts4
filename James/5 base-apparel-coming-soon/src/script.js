const body = document.getElementById('body');

const container = document.createElement('main');
const logo = document.createElement('img');
const leftSide = document.createElement('section');
const header = document.createElement('header');
const p = document.createElement('p');
const input = document.createElement('input');
const btn = document.createElement('button');
const error = document.createElement('img');
const arrow = document.createElement('img');
const rightSide = document.createElement('section');

container.id = 'container';
logo.id = 'logo';
logo.src = './images/logo.svg'
leftSide.id = 'leftSide';
header.innerHTML = "WE'RE <br> <b>COMING </b> <br> <b>SOON</b>";
p.innerHTML = "Hello fellow shopper! We’re currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deal"
input.id = 'email';
input.placeholder = "Email Address";
btn.id = 'btn';
error.id = 'error';
error.src = './images/icon-error.svg';
arrow.src = './images/icon-arrow.svg';
rightSide.id = 'rightSide';

leftSide.appendChild(header);
leftSide.appendChild(p);
leftSide.appendChild(input);
leftSide.appendChild(btn);
btn.appendChild(error);
btn.appendChild(arrow);

container.appendChild(logo);
container.appendChild(leftSide);
container.appendChild(rightSide);
body.appendChild(container);

function validations(){
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    val = regEx.test(input.value);
    if(val == false){
        error.classList.add('show');
        alert("Please enter a valid email address to continue");
        email.classList.add('err');
    }else{
        input.value != '' &&
         alert("you have succesfully enrolled to receive discounts on our latest products")
         location.reload();
    }
}
btn.addEventListener('click', ()=>{
    validations()});