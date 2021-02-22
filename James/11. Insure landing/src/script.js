const body = document.getElementById("body");

const container = document.createElement("main");

const navBar = document.createElement("header");
const logo = document.createElement("img");
const options = document.createElement("ul");
const option1 = document.createElement("li");
const option2 = document.createElement("li");
const option3 = document.createElement("li");
const planBtn1 = document.createElement("button");
const menu = document.createElement("img");

//place following code inside of creator function when it works
const popUpMenu = document.createElement("nav");
container.appendChild(popUpMenu);
popUpMenu.id = "popUpMenu";
const h = document.createElement("span");
h.classList.add("h");
h.innerText = "HOW WE WORK";
popUpMenu.appendChild(h);
const b = document.createElement("span");
b.classList.add("b");
b.innerText = "BLOG";
popUpMenu.appendChild(b);
const a = document.createElement("span");
a.classList.add("a");
a.innerText = "ACCOUNT";
popUpMenu.appendChild(a);
const v = document.createElement("button");
v.classList.add("v");
v.innerText = "VIEW PLAN";
popUpMenu.appendChild(v);
//

const intro = document.createElement("section");
const famM = document.createElement("img");
const patLeftM = document.createElement("img");
const patRightM = document.createElement("img");
const patLeft = document.createElement("img");
const patRight = document.createElement("img");
const fam = document.createElement("img");
const grayBar1 = document.createElement("hr");
const introH1 = document.createElement("h1");
const introP = document.createElement("p");
const planBtn2 = document.createElement("button");

const pitch = document.createElement("section");
const grayBar2 = document.createElement("hr");
const pitchH2 = document.createElement("h2");
const pitchP = document.createElement("p");

const snappy = document.createElement("article");
const snappyImg = document.createElement("img");
const snappyH3 = document.createElement("h1");
const snappyP = document.createElement("P");
const affordable = document.createElement("article");
const affordableImg = document.createElement("img");
const affordableH3 = document.createElement("h1");
const affordableP = document.createElement("P");
const pplFirst = document.createElement("article");
const pplFirstImg = document.createElement("img");
const pplFirstH3 = document.createElement("h1");
const pplFirstP = document.createElement("P");
const howWeWork = document.createElement("article");
const howWeWorkSpan = document.createElement("span");
const howWeWorkBtn = document.createElement("button");
const patAside = document.createElement("img");
const patAsideM = document.createElement("img");

const footer = document.createElement('footer');
const footPat = document.createElement('img');
const footPatM = document.createElement('img');
const footLogo = document.createElement('img');
const icons = document.createElement('aside');
const fbIcon = document.createElement('img');
const twIcon = document.createElement('img');
const pnIcon = document.createElement('img');
const igIcon = document.createElement('img');
const grayBar3 = document.createElement("hr");

const ourCompany = document.createElement("aside");
const ourCompanyH4 = document.createElement("h4");
const ourCompanyH5 = document.createElement("h5");
const ourCompanyH51 = document.createElement("h5");
const ourCompanyH52 = document.createElement("h5");
const ourCompanyH53 = document.createElement("h5");

const helpMe = document.createElement("aside");
const helpMeH4 = document.createElement("h4");
const helpMeH5 = document.createElement("h5");
const helpMeH51 = document.createElement("h5");
const helpMeH52 = document.createElement("h5");
const helpMeH53 = document.createElement("h5");

const contact = document.createElement("aside");
const contactH4 = document.createElement("h4");
const contactH5 = document.createElement("h5");
const contactH51 = document.createElement("h5");
const contactH52 = document.createElement("h5");

const others = document.createElement("aside");
const othersH4 = document.createElement("h4");
const othersH5 = document.createElement("h5");
const othersH51 = document.createElement("h5");
const othersH52 = document.createElement("h5");

container.classList.add("container");
navBar.classList.add("navBar");
logo.classList.add("logo");
logo.src = "./images/logo.svg";
options.classList.add("options");
option1.classList.add("option1");
option1.innerText = "HOW WE WORK";
option2.classList.add("option2");
option2.innerText = "BLOG";
option3.classList.add("option3");
options.innerText = "ACCOUNT";
planBtn1.classList.add("viewPlan1");
planBtn1.innerText = "VIEW PLANS";
menu.classList.add("closed");
menu.id = "menu";
menu.src = "./images/icon-hamburger.svg";

famM.classList.add("famM");
patLeft.classList.add("patLeft");
patLeftM.classList.add("patLeftM");
patRight.classList.add("patRight");
patRightM.classList.add("patRightM");
fam.classList.add("fam");
grayBar1.classList.add("grayBar1");
intro.classList.add("intro");
introH1.innerText = "Humanizing your insurance.";
introP.innerText =
  "Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.";
planBtn2.classList.add("viewPlan2");
planBtn2.innerHTML = "VIEW PLANS";

pitch.classList.add("pitch");
grayBar2.classList.add("grayBar2");
pitchH2.innerText = " We're different";

snappy.classList.add("snappy");
snappyImg.src = "./images/icon-snappy-process.svg";
snappyH3.innerText = "Snappy Process";
snappyP.innerText =
  "our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms";

affordable.classList.add("affordable");
affordableImg.src = "./images/icon-affordable-process.svg";
affordableH3.innerText = "affordable Prices";
affordableP.innerText =
  "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>";

pplFirst.classList.add("pplFirst");
pplFirstImg.src = "./images/icon-pplFirst-process.svg";
pplFirstH3.innerText = "People First";
pplFirstP.innerText =
  "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it";

howWeWork.classList.add("howWeWork");
howWeWorkSpan.innerText = 'Find out more about how we work';
howWeWorkBtn.innerText = 'HOW WE WORK'
patAside.src = "./images/bg-pattern-how-we-work-desktop.svg";
patAsideM.src = "./images/bg-pattern-how-we-work-mobile.svg";

footer.classList.add('footer');
footPat.src = './images/bg-pattern-footer-desktop.svg';
footPat.classList.add('footPat');
footPatM.src = './images/bg-pattern-footer-mobile.svg';
footPatM.classList.add('footPatM');
footLogo.src = './images/logo.svg';
footLogo.classList.add('footLogo');
icons.classList.add('icons');
fbIcon.src = './images/icon-facebook.svg';
fbIcon.classList.add('fbIcon');
twIcon.src = './images/icon-twitter.svg';
twIcon.classList.add('twIcon');
pnIcon.src = './images/icon-pinterest.svg';
pnIcon.classList.add('pnIcon');
igIcon.src = './images/icon-instagram.svg';
igIcon.classList.add('igIcon');
grayBar3.classList.add('grayBar3');

ourCompany.classList.add('ourCompany');
ourCompanyH4.innerText = 'OUR COMPANY';
ourCompanyH5.innerText = 'HOW WE WORK';
ourCompanyH51.innerText = 'WHY INSURE?';
ourCompanyH52.innerText = 'VIEW PLANS';
ourCompanyH53.innerText = 'REVIEW';

helpMe.classList.add('helpMe');
helpMeH4.innerText = 'HELP ME';
helpMeH5.innerText = 'FAQ';
helpMeH51.innerText = 'TERMS OF USE';
helpMeH52.innerText = 'PRIVACY POLICY';
helpMeH53.innerText = 'COOKIES';

contact.classList.add('contact');
contactH4.innerText = 'CONTACT';
contactH5.innerText = 'SALES';
contactH51.innerText = 'SUPPORT';
contactH52.innerText = 'LIVE CHAT';

others.classList.add('others');
othersH4.innerText = 'OTHERS';
othersH5.innerText = 'CAREER';
contactH51.innerText = 'PRESS';
othersH52.innerText = 'LICENSES';

body.appendChild(container);

container.appendChild(navBar);
navBar.appendChild(logo);
navBar.appendChild(options);
options.appendChild(option1);
options.appendChild(option2);
options.appendChild(option3);
navBar.appendChild(planBtn1);
navBar.appendChild(menu);

container.appendChild(intro);
intro.appendChild(patLeft);
intro.appendChild(patLeftM);
intro.appendChild(patRight);
intro.appendChild(patRightM);
intro.appendChild(fam);
intro.appendChild(grayBar1);
intro.appendChild(introH1);
intro.appendChild(introP);
intro.appendChild(planBtn2);

container.appendChild(pitch);
pitch.appendChild(grayBar2);
pitch.appendChild(pitchH2);
pitch.appendChild(pitchP);

pitch.appendChild(snappy);
snappy.appendChild(snappyImg);
snappy.appendChild(snappyH3);
snappy.appendChild(snappyP);

pitch.appendChild(affordable);
affordable.appendChild(affordableImg);
affordable.appendChild(affordableH3);
affordable.appendChild(affordableP);

pitch.appendChild(pplFirst);
pplFirst.appendChild(pplFirstImg);
pplFirst.appendChild(pplFirstH3);
pplFirst.appendChild(pplFirstP);

pitch.appendChild(howWeWork);
howWeWork.appendChild(howWeWorkSpan);
howWeWork.appendChild(howWeWorkBtn);
howWeWork.appendChild(patAside);
howWeWork.appendChild(patAsideM);

container.appendChild(footer);
footer.appendChild(footPat);
footer.appendChild(footPatM);
footer.appendChild(footLogo);
footer.appendChild(icons);
icons.appendChild(fbIcon);
icons.appendChild(twIcon);
icons.appendChild(pnIcon);
icons.appendChild(igIcon);
footer.appendChild(grayBar3);

footer.appendChild(ourCompany);
ourCompany.appendChild(ourCompanyH4);
ourCompany.appendChild(ourCompanyH5);
ourCompany.appendChild(ourCompanyH51);
ourCompany.appendChild(ourCompanyH52);
ourCompany.appendChild(ourCompanyH53);

footer.appendChild(helpMe);
helpMe.appendChild(helpMeH4);
helpMe.appendChild(helpMeH5);
helpMe.appendChild(helpMeH51);
helpMe.appendChild(helpMeH52);
helpMe.appendChild(helpMeH53);

footer.appendChild(contact);
contact.appendChild(contactH4);
contact.appendChild(contactH5);
contact.appendChild(contactH51);
contact.appendChild(contactH52);

footer.appendChild(others);
others.appendChild(othersH4);
others.appendChild(othersH5);
others.appendChild(othersH51);
contact.appendChild(contactH52);
