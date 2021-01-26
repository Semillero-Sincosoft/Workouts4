const body = document.getElementById("body");

const container = document.createElement("main");
const intro = document.createElement("section");
const logo = document.createElement("img");
const h1 = document.createElement("h1");
const p1 = document.createElement("p");
const btn1 = document.createElement("button");
const mockupImg = document.createElement("img");

const grow = document.createElement("section");
const growImg = document.createElement("img");
const h2 = document.createElement("h2");
const p2 = document.createElement("p");

const flow = document.createElement("section");
const flowImg = document.createElement("img");
const h3 = document.createElement("h3");
const p3 = document.createElement("p");

const user = document.createElement("section");
const userImg = document.createElement("img");
const h4 = document.createElement("h4");
const p4 = document.createElement("p");

const ready = document.createElement("section");
const h5 = document.createElement("h5");
const btn2 = document.createElement("button");

const footer = document.createElement("footer");
const whiteLogo = document.createElement("img");
const home = document.createElement("img");
const homeLorem = document.createElement("span");
const phoneImg = document.createElement("img");
const phoneNum = document.createElement("span");
const emailImg = document.createElement("img");
const emailAdd = document.createElement("span");
const br = document.createElement("br");

const spans = document.createElement("div");
const one = document.createElement("span");
const two = document.createElement("span");
const three = document.createElement("span");
const four = document.createElement("span");
const five = document.createElement("span");
const six = document.createElement("span");

const socialMedia = document.createElement("img");
const copyRight = document.createElement("span");

container.classList.add("container");
intro.classList.add("intro");
logo.classList.add("logo");
logo.src = "./images/logo.svg";
h1.innerHTML = "Build The Community Your Fans Will Love";
p1.innerHTML =
  "Huddle re-images the way we build communities. You have a voice, but so does your audience. Create <br> connetions with your users as you engage in genuine discussion.";
btn1.classList.add("btn1");
btn1.innerHTML = "Get Started For Free";
mockupImg.classList.add("mock");
mockupImg.src = "./images/illustration-mockups.svg";

grow.classList.add("grow");
growImg.src = "./images/illustration-grow-together.svg";
h2.innerHTML = "Grow Together";
p2.innerHTML =
  "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the <br> insightful conversations you mis out on with a feedback form.";

flow.classList.add("flow");
flowImg.src = "./images/illustration-flowing-conversation.svg";
h3.innerHTML = "Flowing Conversation";
p3.innerHTML =
  "You wouldn’t paginate a conversation in real life, so why do it online? Our threads have just-in-time <br> loading for a more natural flow.";

user.classList.add("user");
userImg.src = "./images/illustration-your-users.svg";
h4.innerHTML = "Your Users";
p4.innerHTML =
"it takes no time at all to integrate Huddle with you app's authentication solution. This means, once <br> signed in to your app, your users can start chatting immediately";

whiteLogo.classList.add("whiteLogo");
whiteLogo.src = "./images/whiteLogo.svg";
home.classList.add("home");
home.src = "./images/icon-home.svg";
homeLorem.innerHTML =
  "lorem ipsum dolor sir amet, consectur <br> adispicing elit, sed do eusimod tempor inciddunt<br> ut labore et dolore magna aloqua";
phoneImg.classList.add("phone");
phoneImg.src = "./images/icon-phone.svg";
phoneNum.classList.add("phoneNum");
phoneImg.innerHTML = "+1-543-123-4567"
emailImg.classList.add("email");
emailImg.src = "./images/icon-phone.svg";
emailAdd.classList.add("emailAdd");
emailAdd.innerHTML = "example@huddle.com"

ready.classList.add("ready");
h5.innerHTML = "Ready To Build Your Community?";
btn2.classList.add("btn2");
btn2.innerHTML = "Get Started For Free";

spans.classList.add("spans");
one.classList.add("one");
two.classList.add("two");
three.classList.add("three");
four.classList.add("four");
five.classList.add("five");
six.classList.add("six");

one.innerHTML = "About Us";
two.innerHTML = "Career";
three.innerHTML = "What We Do";
four.innerHTML = "Blog";
five.innerHTML = "FAQ";
six.innerHTML = "Contact Us";

socialMedia.classList.add("socialMedia");
socialMedia.src = "./images/socialMedia.png";
copyRight.classList.add('copyright');
copyRight.innerHTML = "&#169;Copyright 2021 Huddle. All rights reserved"

body.appendChild(container);
container.appendChild(intro);
intro.appendChild(logo);
intro.appendChild(h1);
intro.appendChild(p1);
intro.appendChild(btn1);
intro.appendChild(mockupImg);

container.appendChild(grow);
grow.appendChild(growImg);
grow.appendChild(h2);
grow.appendChild(p2);

container.appendChild(flow);
flow.appendChild(flowImg);
flow.appendChild(h3);
flow.appendChild(p3);

container.appendChild(user);
user.appendChild(userImg);
user.appendChild(h4);
user.appendChild(p4);

container.appendChild(ready);
ready.appendChild(h5);
ready.appendChild(btn2);

container.appendChild(footer);
footer.appendChild(whiteLogo);
footer.appendChild(br);
footer.appendChild(home);
footer.appendChild(homeLorem);
footer.appendChild(br);
footer.appendChild(phoneImg);
footer.appendChild(phoneNum);
footer.appendChild(br);
footer.appendChild(emailImg);
footer.appendChild(emailAdd);
footer.appendChild(spans);
spans.appendChild(one);
spans.appendChild(two);
spans.appendChild(three);
spans.appendChild(four);
spans.appendChild(five);
spans.appendChild(six);
footer.appendChild(emailAdd);
footer.appendChild(spans);
footer.appendChild(socialMedia);
footer.appendChild(copyRight);

