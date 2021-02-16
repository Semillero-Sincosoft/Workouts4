const DASHBOARDCARDS = [
    ["facebook", "assets/svg/Facebook.svg", "@nathanf", "1987", "FOLLOWERS", "assets/svg/Up.svg", "up", "12 Today"],
    ["twitter", "assets/svg/Twitter.svg", "@nathanf", "1044", "FOLLOWERS", "assets/svg/Up.svg", "up", "99 Today"],
    ["instagram", "assets/svg/Instagram.svg", "@realnathanf", "11K", "FOLLOWERS", "assets/svg/Up.svg", "up", "1099 Today"],
    ["youtube", "assets/svg/Youtube.svg", "Nathan F.", "8239", "SUBSCRIBERS", "assets/svg/Down.svg", "down", "144 Today"]
];

class DashboardCard extends HTMLElement {
    constructor() {
        super();
    }

    //Getters
    get SocialNetwork() {
        return this.getAttribute("socialNetwork");
    }

    get ImgRoute() {
        return this.getAttribute("imgRoute");
    }

    get Username() {
        return this.getAttribute("username");
    }

    get GeneralNumber() {
        return this.getAttribute("generalNumber");
    }

    get StringSocialNetwork() {
        return this.getAttribute("stringSocialNetwork");
    }

    get StateRoute() {
        return this.getAttribute("stateRoute");
    }

    get State() {
        return this.getAttribute("state");
    }

    get StateNumber() {
        return this.getAttribute("stateNumber");
    }

    //Setters
    set SocialNetwork(socialNetwork) {
        this.setAttribute("socialNetwork", socialNetwork);
    }

    set ImgRoute(imgRoute) {
        this.setAttribute("imgRoute", imgRoute);
    }

    set Username(username) {
        this.setAttribute("username", username);
    }

    set GeneralNumber(generalNumber) {
        this.setAttribute("generalNumber", generalNumber);
    }

    set StringSocialNetwork(stringSocialNetwork) {
        this.setAttribute("stringSocialNetwork", stringSocialNetwork);
    }

    set StateRoute(stateRoute) {
        this.setAttribute("stateRoute", stateRoute);
    }

    set State(state) {
        this.setAttribute("state", state);
    }

    set StateNumber(stateNumber) {
        this.setAttribute("stateNumber", stateNumber);
    }

    static get observedAttributes() {
        return ["socialnetwork", "imgroute", "username", "generalnumber", "stringsocialnetwork", "stateroute", "state", "statenumber"];
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<section class="card-container ${this.SocialNetwork}">
        <div class="title">
          <img src="${this.ImgRoute}" alt="Facebook logo" />
          <p>${this.Username}</p>
        </div>
        <div class="general-number">
          <p class="number">${this.GeneralNumber}</p>
          <p>${this.StringSocialNetwork}</p>
        </div>
        <div class="profit">
          <img src="${this.StateRoute}" alt="${this.State} logo" />
          <p class="${this.State}">${this.StateNumber}</p>
        </div>
      </section>`;
    }
}


window.customElements.define('dashboard-card', DashboardCard);

function fillInformation() {
    let cards = document.querySelectorAll("dashboard-card"),
        attributesDashboard = ["socialNetwork", "imgRoute", "username", "generalNumber", "stringSocialNetwork", "stateRoute", "state", "stateNumber"];
    DASHBOARDCARDS.forEach((item, index) => {
        let currentCard = cards[index];
        item.forEach((value, indexValue) => {
            currentCard.setAttribute(attributesDashboard[indexValue], value);
        });
    });
}


fillInformation();