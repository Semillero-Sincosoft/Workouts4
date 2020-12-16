const body = document.getElementById('body')

const container = document.createElement('main');
const drawers = document.createElement('img');
const content = document.createElement('section');
const header = document.createElement('span');
const par = document.createElement('p');
const person = document.createElement('img');
const names = document.createElement('h2');
const date = document.createElement('span');
const share = document.createElement('img');
let desktopHover = document.createElement('img');
let mobileHover = document.createElement('img');

container.classList.add('container');
content.classList.add('content');
drawers.classList.add('drawers');
header.classList.add('header');
par.classList.add('par');
person.classList.add('person');
names.classList.add('names');
date.classList.add('date');
desktopHover.classList.add('desktopHover');
mobileHover.classList.add('mobileHover');

drawers.src = './images/drawers.jpg';
header.innerHTML = 'Shift the overall look and feel by adding these wonderful touches to furniture in your home';
par.innerHTML = 'Ever been in a room and felt like something was missing? perhaps it felt slightly bare and uninviting I’ve got some simple tips to help you make any room feel complete';
person.src = './images/person.jpg';
names.innerHTML = 'Michelle Appleton';
date.innerHTML = '28 Jun 2020';
share.id = 'share';
share.src = './images/bShare.svg';
desktopHover.src = './images/desktopHover.svg';
mobileHover.src = './images/mobileHover.svg';

content.appendChild(header);
content.appendChild(par);
content.appendChild(person);
content.appendChild(names);
content.appendChild(date);
content.appendChild(share);
content.appendChild(desktopHover);
content.appendChild(mobileHover);
container.appendChild(drawers);
container.appendChild(content);
body.appendChild(container);

share.addEventListener('mouseenter',()=>{
    share.src = './images/aShare.svg';
    desktopHover.style.display = 'flex'
    mobileHover.style.display = 'flex'
})
share.addEventListener('mouseleave',()=>{
    set
    share.src = './images/bShare.svg';
    desktopHover.style.display = 'none'
    mobileHover.style.display = 'none'
})

