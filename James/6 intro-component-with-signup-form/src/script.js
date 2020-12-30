const body = document.getElementById('body');

const main = document.createElement('main');
const textSection = document.createElement('section');
const textH1 = document.createElement('h1');
const textP = document.createElement('p');
const formSection = document.createElement('section');
const freeTrial = document.createElement('article');
const trialText = document.createElement('span');
const form = document.createElement('form');
const firstNameInput = document.createElement('input');
const firstNameContainer = document.createElement('div');
const lastNameInput = document.createElement('input');
const lastNameContainer = document.createElement('div');
const emailInput = document.createElement('input');
const emailContainer = document.createElement('div');
const passwordInput = document.createElement('input');
const passwordContainer = document.createElement('div');
const btn = document.createElement('button');
const formText = document.createElement('span');

main.id = "mainContainer";
textSection.id = "textSection";
textH1.innerHTML = 'Learn to code by <br> watching others';
textP.innerHTML = 'See how experienced developers solve problems in real-time Watching scripted tutorials is great, but understanding how developers think is invaluable. ';
formSection.id = 'formSection';
freeTrial.id = 'freeTrial';
trialText.innerHTML = '<b> Try it free 7 days </b> then $20/mo. thereafter';
firstNameInput.placeholder = 'First Name';
firstNameContainer.classList.add('input')
lastNameInput.placeholder = 'Last Name';
lastNameContainer.classList.add('input')
emailInput.placeholder = 'Email Address';
emailContainer.classList.add('input')
passwordInput.placeholder = 'Password';
passwordInput.type = 'Password';
passwordContainer.classList.add('input');
btn.type = 'submit';
btn.innerHTML = 'CLAIM YOUR FREE TRIAL';
formText.id = 'formText';
formText.innerHTML = 'By clicking the button, you are agreeding to our <b>Terms and Services</b>';

textSection.appendChild(textH1);
textSection.appendChild(textP);
main.appendChild(textSection);
formSection.appendChild(freeTrial);
freeTrial.appendChild(trialText);
formSection.appendChild(form);
form.appendChild(firstNameContainer);
firstNameContainer.appendChild(firstNameInput);
form.appendChild(lastNameContainer);
lastNameContainer.appendChild(lastNameInput);
form.appendChild(emailContainer);
emailContainer.appendChild(emailInput);
form.appendChild(passwordContainer);
passwordContainer.appendChild(passwordInput);
form.appendChild(btn);
form.appendChild(formText);
main.appendChild(formSection);
body.appendChild(main);