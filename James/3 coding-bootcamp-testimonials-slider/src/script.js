const body = document.getElementById('body');

const testimony = document.createElement('main');

const left = document.createElement('aside');
const quote = document.createElement('p');
const info = document.createElement('div');
const names = document.createElement('span');
const position = document.createElement('span');

const right = document.createElement('aside');
const profilePic = document.createElement('img');
const btns = document.createElement('div');
const prev = document.createElement('button');
const prevArrow = document.createElement('img');
const next = document.createElement('button');
const nextArrow = document.createElement('img');

let currentTestimony = "Tanya Sinclair";

testimony.classList.add('testimony');

left.id = 'left';
quote.id = 'quote';
info.id = 'info';
names.id = 'names';
position.id = 'position';

right.id = 'right';
profilePic.id = 'profilePic';
btns.classList.add('btns');
prev.id = 'prev';
prevArrow.src = './images/icon-prev.svg'
next.id = 'next';
nextArrow.src = './images/icon-next.svg'

left.appendChild(quote);
left.appendChild(info);
left.appendChild(names);
left.appendChild(position);

prev.appendChild(prevArrow);
next.appendChild(nextArrow);
btns.appendChild(prev);
btns.appendChild(next);
right.appendChild(profilePic);
right.appendChild(btns);

testimony.appendChild(left);
testimony.appendChild(right);
body.appendChild(testimony);

prev.addEventListener('click',swapTestimonies);
next.addEventListener('click',swapTestimonies)

function swapTestimonies(){
    if(currentTestimony == "John Tarkpor"){
        quote.innerHTML = '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”'
        names.innerHTML = "Tanya Sinclair";
        position.innerHTML = "UX Engineer"
        profilePic.src = './images/image-tanya.jpg';
        currentTestimony = "Tanya Sinclair"
    }
    else{
        quote.innerHTML = '“ If you want to lay the best foundation possible I’d recommend taking this course The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”'
        names.innerHTML = "John Tarkpor";
        position.innerHTML = "Junior Front-End Developer"
        profilePic.src = './images/image-john.jpg';
        currentTestimony = "John Tarkpor"
    }
}