const body = document.getElementById("body");
const main = document.createElement("main");
const sectionTopSide = document.createElement("section");
const imgLogo = document.createElement("img");
const title = document.createElement("h1");
const p = document.createElement("p");
const divForm = document.createElement("div");
const form = document.createElement("form");
const divInput = document.createElement("div");
const input = document.createElement("input");
const pInput = document.createElement("p");
const divButton = document.createElement("div");
const imgBack = document.createElement("img");
const divFacebook = document.createElement("div");
const divTwitter = document.createElement("div");
const divInstagram = document.createElement("div");
const pFooter = document.createElement("p")
const footer = document.createElement("footer");

sectionTopSide.classList.add("top-side");
imgLogo.src = 'assets/svg/Logo.svg';
imgLogo.alt = 'Logo Ping';
title.innerHTML = 'We are launching <strong>soon!</strong>';
p.innerText = 'Subscribe and get notified';
divForm.classList.add("form");
divInput.classList.add("input-group");
input.type = "email";
input.placeholder = "Your email address...";
pInput.classList.add("d-none");
pInput.innerText = "*Please, provide a valid email address";
divButton.innerText = "Notify Me";
imgBack.classList.add("img");
imgBack.alt = "Img";
imgBack.src = "./assets/svg/ImgBackground.svg";
divFacebook.classList.add("network-container");
divFacebook.innerHTML = "<img src=\"assets/svg/Facebook.svg\" alt=\"Facebook\" />";
divTwitter.classList.add("network-container");
divTwitter.innerHTML = "<img src=\"assets/svg/Twitter.svg\" alt=\"Twitter\" />";
divInstagram.classList.add("network-container");
divInstagram.innerHTML = "<img src=\"assets/svg/Instagram.svg\" alt=\"Instagram\" />";
pFooter.innerText = "© Copyright Ping. All rights reserved.";

sectionTopSide.appendChild(imgLogo);
sectionTopSide.appendChild(title);
sectionTopSide.appendChild(p);
divInput.appendChild(input);
divInput.appendChild(pInput);
form.appendChild(divInput);
form.appendChild(divButton);
divForm.appendChild(form);
sectionTopSide.appendChild(divForm);
sectionTopSide.appendChild(imgBack);
main.appendChild(sectionTopSide);
footer.appendChild(divFacebook);
footer.appendChild(divTwitter);
footer.appendChild(divInstagram);
footer.appendChild(pFooter);
body.appendChild(main);
body.appendChild(footer);

divButton.addEventListener("click", validEmail);

function validEmail() {
    let val = input.value;
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(val)) {
        pInput.classList.remove("d-none");
    } else {
        pInput.classList.add("d-none");
        alert("We will notify you!");
        input.value = "";
    }
}