const body = document.getElementById('body');

const container = document.createElement('main');

const leftSide = document.createElement('aside');
const logo = document.createElement('img');
const btnContainer = document.createElement('div');
const docBtn = document.createElement('img');
const folderBtn = document.createElement('img');
const uploadBtn = document.createElement('img');

const rightSide = document.createElement('aside');
const spaceLeftContainer = document.createElement('div');
let spaceLeftNum = document.createElement('div');
const spaceLeftText = document.createElement('span');
const message = document.createElement('p');
const bar = document.createElement('div');
const barProgress = document.createElement('div');
const pin = document.createElement('div');
const gbText = document.createElement('div');
const gbStart = document.createElement('span');
const gbEnd = document.createElement('span');

container.classList.add('container');

leftSide.classList.add('leftSide');
logo.id = 'logo';
docBtn.id = 'docBtn';
folderBtn.id = 'folderBtn';
uploadBtn.id = 'uploadBtn';
btnContainer.classList.add('btnContainer');

rightSide.classList.add('rightSide');
spaceLeftContainer.classList.add('spaceLeftContainer');
spaceLeftNum.classList.add('spaceLeftNum');
spaceLeftText.classList.add('spaceLeftText');
message.classList.add('message');
bar.classList.add('bar');
barProgress.classList.add('barProgress');
pin.classList.add('pin');
gbText.classList.add('gbText');

logo.src = './images/logo.svg';
docBtn.src = './images/docBtn.svg';
folderBtn.src = './images/folderBtn.svg';
uploadBtn.src = './images/uploadBtn.svg';
leftSide.appendChild(logo);
btnContainer.appendChild(docBtn);
btnContainer.appendChild(folderBtn);
btnContainer.appendChild(uploadBtn);
leftSide.appendChild(btnContainer);
container.appendChild(leftSide);

let num = 0;
function numCounter(){
    if(num === 184) clearInterval(timer);
    num ++ ;
    spaceLeftNum.innerText = num;
}
let timer = setInterval(numCounter, 20)
spaceLeftText.innerHTML = 'GB LEFT';
message.innerHTML = `You've used <b> ${1000-185} </b>of your storage`;
gbStart.innerHTML = '0 <b>GB</b>'
gbEnd.innerHTML = '1000 <b>GB</b>'
spaceLeftContainer.appendChild(spaceLeftNum);
spaceLeftContainer.appendChild(spaceLeftText);
bar.appendChild(barProgress);
barProgress.appendChild(pin);
gbText.appendChild(gbStart);
gbText.appendChild(gbEnd);
rightSide.appendChild(spaceLeftContainer);
rightSide.appendChild(message);
rightSide.appendChild(bar);
rightSide.appendChild(gbText);
container.appendChild(rightSide);

body.appendChild(container);