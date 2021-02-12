const body = document.getElementById('body');

const container = document.createElement('main');
const topp = document.createElement('section');
const logo = document.createElement('img');
const launch = document.createElement('h1');
const subscribe = document.createElement('span');
const email = document.createElement('input');
const btn = document.createElement('button');
const bottom = document.createElement('section');
const dashBoard = document.createElement('img');
const iconContainer = document.createElement('aside');
const fb = document.createElement('img');
const tw = document.createElement('img');
const ig = document.createElement('img');
const footer = document.createElement('footer');

container.classList.add('container');

topp.classList.add('topp');
logo.src = './img/logo.svg';
launch.innerHTML = 'We are launching <b> soon! </b>';
subscribe.innerText = 'subscribe and get notified';
email.id = 'email'
email.placeholder = 'Your Email Address'
email.type = 'text';
btn.innerText = ' Notify Me';

bottom.classList.add('bottom');
dashBoard.classList.add('dashBoard');
dashBoard.src = "./img/illustration-dashboard.png"
iconContainer.classList.add('iconContainer');
fb.src = './img/facebookkkk.svg';
fb.classList.add('fb');
tw.src = './img/twitter.svg';
tw.classList.add('tw');
ig.src = './img/instagram.svg';
ig.classList.add('ig');
footer.innerHTML = '&#169;Copyright All rights reserved'

body.appendChild(container);

container.appendChild(topp);
topp.appendChild(logo);
topp.appendChild(launch);
topp.appendChild(subscribe);
topp.appendChild(email);
topp.appendChild(btn);

container.appendChild(bottom);
bottom.appendChild(dashBoard);
bottom.appendChild(iconContainer);
iconContainer.appendChild(fb);
iconContainer.appendChild(tw);
iconContainer.appendChild(ig);

container.appendChild(footer);

btn.addEventListener('click', ()=> {
    emailValidation();
})

function emailValidation() {
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    console.log(email.value)
    val = regEx.test(email.value);
    if (val == false || email.value != '') {
        const error = document.createElement('div')
        error.id = "error";
        error.innerText = "Please provide a valid email address";
        email.classList.add('err');
    }else{
        const success = document.createElement('div');
        success.id = "success";
        email.classList.remove('hide');
        error.classList.add('hide');
    }
   }
