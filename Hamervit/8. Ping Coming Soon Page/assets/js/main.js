class Dashboard extends HTMLElement {
    constructor() {
        super();
        this.title;
    }

    static get observedAttributes() {
        return ["title"];
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {
        switch (nameAtr) {
            case "title":
                this.title = newValue;
                break;
        }
    }

    connectedCallback() {
        this.innerHTML = `<main><section class="top-side"><img src="assets/svg/Logo.svg" alt="Logo Ping"><h1> We are launching <strong>soon!</strong></h1><p>Subscribe and get notified</p><div class="form"><form><div class="input-group"><input type="email" placeholder="Your email address..."><p class="d-none">*Please, provide a valid email address</p></div><div id="btnEmail">Notify Me</div></form></div><img class="img" alt="Img" src="./assets/svg/ImgBackground.svg"></section></main><footer><div class="network-container"><img src="assets/svg/Facebook.svg" alt="Facebook"></div><div class="network-container"><img src="assets/svg/Twitter.svg" alt="Twitter"></div><div class="network-container"><img src="assets/svg/Instagram.svg" alt="Instagram"></div><p>© Copyright Ping. All rights reserved.</p></footer>`;
    }
}


window.customElements.define("dashboard-view", Dashboard);
const body = document.getElementById("body");
const dashboard = document.createElement("dashboard-view");
body.appendChild(dashboard);
const btnEmail = document.getElementById("btnEmail");
const input = document.querySelector("input");
const pInput = document.querySelectorAll("p")[1];

btnEmail.addEventListener("click", validEmail);

function validEmail() {
    let val = input.value;
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(val)) {
        pInput.classList.remove("d-none");
        input.classList.add("error-border");
    } else {
        input.classList.remove("error-border");
        pInput.classList.add("d-none");
        alert("We will notify you!");
        input.value = "";
    }
}