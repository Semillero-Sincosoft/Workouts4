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
        this.innerHTML = `<main class="container"><section class="topp"><img src="./img/logo.svg"><h1>We are launching <b> soon! </b></h1><span>subscribe and get notified</span><input id="email" placeholder="Your Email Address" type="text"><button> Notify Me</button></section><section class="bottom"><img class="dashBoard" src="./img/illustration-dashboard.png"><aside class="iconContainer"><img src="./img/facebookkkk.svg" class="fb"><img src="./img/twitter.svg" class="tw"><img src="./img/instagram.svg" class="ig"></aside></section><footer>©Copyright All rights reserved</footer></main>`;
    }
}


window.customElements.define("dashboard-view", Dashboard);
const body = document.getElementById("body");
const dashboard = document.createElement("dashboard-view");
body.appendChild(dashboard);