const DASHBOARDCARDS = [
    ["facebook", "assets/svg/Facebook.svg", "@nathanf", "1987", "FOLLOWERS", "assets/svg/Up.svg", "up", "12 Today"],
    ["twitter", "assets/svg/Twitter.svg", "@nathanf", "1044", "FOLLOWERS", "assets/svg/Up.svg", "up", "99 Today"],
    ["instagram", "assets/svg/Instagram.svg", "@realnathanf", "11K", "FOLLOWERS", "assets/svg/Up.svg", "up", "1099 Today"],
    ["youtube", "assets/svg/Youtube.svg", "Nathan F.", "8239", "SUBSCRIBERS", "assets/svg/Down.svg", "down", "144 Today"]
];

const OVERVIEWCARDS = [
    ["Page Views", "assets/svg/Facebook.svg", "87", "assets/svg/Up.svg", "up", "3%"],
    ["Likes", "assets/svg/Facebook.svg", "52", "assets/svg/Down.svg", "down", "2%"],
    ["Likes", "assets/svg/Instagram.svg", "5462", "assets/svg/Up.svg", "up", "2257%"],
    ["Profile Views", "assets/svg/Instagram.svg", "52k", "assets/svg/Up.svg", "up", "1375%"],
    ["Retweets", "assets/svg/Twitter.svg", "117", "assets/svg/Up.svg", "up", "303%"],
    ["Likes", "assets/svg/Twitter.svg", "507", "assets/svg/Up.svg", "up", "553%"],
    ["Likes", "assets/svg/Youtube.svg", "107", "assets/svg/Down.svg", "down", "19%"],
    ["Total Views", "assets/svg/Youtube.svg", "1407", "assets/svg/Down.svg", "down", "12%"]
];
localStorage.setItem("mode", "dark");
let _switch = document.querySelector(".switch");

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
          <img src="${this.StateRoute}" alt="${this.State} icon" />
          <p class="${this.State}">${this.StateNumber}</p>
        </div>
      </section>`;
    }
}

class OverviewCard extends HTMLElement {
    constructor() {
        super();
    }

    //Getters
    get StringSocialNetwork() {
        return this.getAttribute("stringSocialNetwork");
    }

    get ImgRoute() {
        return this.getAttribute("imgRoute");
    }

    get GeneralNumber() {
        return this.getAttribute("generalNumber");
    }

    get StateRoute() {
        return this.getAttribute("stateRoute");
    }

    get State() {
        return this.getAttribute("state");
    }

    get Percentage() {
        return this.getAttribute("percentage");
    }

    static get observedAttributes() {
        return ["stringsocialnetwork", "imgroute", "generalnumber", "stateroute", "state", "percentage"];
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<section class="overview-card">
        <div class="top-side">
          <p>${this.StringSocialNetwork}</p>
          <img src="${this.ImgRoute}"/>
        </div>
        <div class="bottom-side">
          <p>${this.GeneralNumber}</p>
          <div>
            <img src="${this.StateRoute}" alt="${this.State} icon" />
            <p class="${this.State}">${this.Percentage}</p>
          </div>
        </div>
      </section>`;
    }
}


window.customElements.define('dashboard-card', DashboardCard);
window.customElements.define('overview-card', OverviewCard);

_switch.addEventListener('click', changeMode);

fillInformation();
function changeMode() {
    if (localStorage.getItem("mode") != "light") {
        changeToLight();
    } else {
        changeToDark();
    }
    _switch.classList.toggle("switched");
}

function changeToLight() {
    document.documentElement.style.setProperty("--main-color", "#F8F9FE");
    document.documentElement.style.setProperty("--hover-color", "#E1E3F0");
    document.documentElement.style.setProperty("--titles-color", "#0E0E16");
    document.documentElement.style.setProperty("--header-color", "#656776");
    document.documentElement.style.setProperty("--switch-color", "#AEB3C9");
    document.documentElement.style.setProperty("--switch-circle-color", "#F3F3FA");
    document.documentElement.style.setProperty("--profile-color", "#646776");
    document.documentElement.style.setProperty("--profile-box-color", "#646672");
    document.documentElement.style.setProperty("--card-color", "#F0F3FA");
    document.documentElement.style.setProperty("--overview-color", "#67687A");
    document.documentElement.style.setProperty("--overview-title-color", "#67687A");
    localStorage.setItem("mode", "light");
}

function changeToDark() {
    document.documentElement.style.setProperty("--main-color", "#1d2029");
    document.documentElement.style.setProperty("--hover-color", "#333a56");
    document.documentElement.style.setProperty("--titles-color", "#ffffff");
    document.documentElement.style.setProperty("--header-color", "#949dbc");
    document.documentElement.style.setProperty("--switch-color", `linear-gradient(268.43deg, #3fcc97 10.17%, #3db9b1 41.43%, #4195ce 98.33%)`);
    document.documentElement.style.setProperty("--switch-circle-color", "#262a45");
    document.documentElement.style.setProperty("--profile-color", "#8a94b7");
    document.documentElement.style.setProperty("--profile-box-color", "#9298b8");
    document.documentElement.style.setProperty("--card-color", "#252b43");
    document.documentElement.style.setProperty("--overview-color", "#969ec5");
    document.documentElement.style.setProperty("--overview-title-color", "#FFFFFF");
    localStorage.setItem("mode", "dark");
}

function fillInformation() {
    let cards = document.querySelectorAll("dashboard-card"),
        attributesDashboard = ["socialNetwork", "imgRoute", "username", "generalNumber", "stringSocialNetwork", "stateRoute", "state", "stateNumber"],
        attributesOverview = ["stringsocialnetwork", "imgroute", "generalnumber", "stateroute", "state", "percentage"],
        overviewCards = document.querySelectorAll("overview-card");
    DASHBOARDCARDS.forEach((item, index) => {
        let currentCard = cards[index];
        item.forEach((value, indexValue) => {
            currentCard.setAttribute(attributesDashboard[indexValue], value);
        });
    });
    OVERVIEWCARDS.forEach((item, index) => {
        let currentOverview = overviewCards[index];
        item.forEach((value, indexValue) => {
            currentOverview.setAttribute(attributesOverview[indexValue], value);
        });
    });
}



