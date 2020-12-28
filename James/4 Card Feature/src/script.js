const body = document.getElementById('body');

const header = document.createElement('header');
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
const p = document.createElement('p');

const cardContainer = document.createElement('section');

const teamBuilder = document.createElement('article');
const teamTitle = document.createElement('h3');
const teamDesc = document.createElement('span');
const teamImg = document.createElement('img');

const calculator = document.createElement('article');
const calcTitle = document.createElement('h3');
const calcDesc = document.createElement('span');
const calcImg = document.createElement('img');

const karma = document.createElement('article');
const karmaTitle = document.createElement('h3');
const karmaDesc = document.createElement('span');
const karmaImg = document.createElement('img');

const supervisor = document.createElement('article');
const sprvTitle = document.createElement('h3');
const sprvDesc = document.createElement('span');
const sprvImg = document.createElement('img');

header.classList.add('header');
h1.innerHTML = "Reliable, efficient delivery";
h2.innerHTML = "Powered by Technology";
p.innerHTML = "Our Artificial Intelligence powered tools use millions of project data <br> points to ensure that your project is succesful";
header.appendChild(h1);
header.appendChild(h2);
header.appendChild(p);

cardContainer.classList.add('cardContainer');

teamBuilder.id = 'teamBuilder'
teamBuilder.classList.add('card');
teamTitle.innerHTML = 'Team Builder';
teamDesc.innerHTML = 'Scans out talent network to create the optimal team for your project';
teamImg.src = 'icon-team-builder.svg';
teamBuilder.appendChild(teamTitle);
teamBuilder.appendChild(teamDesc);
teamBuilder.appendChild(teamImg);
cardContainer.appendChild(teamBuilder);

calculator.id = 'calculator'
calculator.classList.add('card');
calcTitle.innerHTML = 'Calculator';
calcDesc.innerHTML = 'Uses data from past prjects to proviude better Delivery Estimate';
calcImg.src = '../img/icon-calculator.svg';
calculator.appendChild(calcTitle);
calculator.appendChild(calcDesc);
calculator.appendChild(calcImg);
cardContainer.appendChild(calculator);

karma.id = 'karma'
karma.classList.add('card');
karmaTitle.innerHTML = 'Karma';
karmaDesc.innerHTML = 'Regularly evaluate our talent to ensure quality';
karmaImg.src = '../img/icon-karma.svg';
karma.appendChild(karmaTitle);
karma.appendChild(karmaDesc);
karma.appendChild(karmaImg);
cardContainer.appendChild(karma);

supervisor.id = 'supervisor'
supervisor.classList.add('card');
sprvTitle.innerHTML = 'Supervisor';
sprvDesc.innerHTML = 'Monitor activity to identify project feedbacks';
sprvImg.src = '../img/icon-supervisor.svg';
supervisor.appendChild(sprvTitle);
supervisor.appendChild(sprvDesc);
supervisor.appendChild(sprvImg);
cardContainer.appendChild(supervisor);

body.appendChild(header);
body.appendChild(cardContainer);