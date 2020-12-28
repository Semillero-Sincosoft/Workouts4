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
const posterPic = document.createElement('img');

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
posterPic.src = './images/hero-desktop.jpg'

leftSide.appendChild(header);
leftSide.appendChild(p);
leftSide.appendChild(input);
leftSide.appendChild(btn);
btn.appendChild(error);
btn.appendChild(arrow);
rightSide.appendChild(posterPic);

container.appendChild(logo);
container.appendChild(leftSide);
container.appendChild(rightSide);
body.appendChild(container);