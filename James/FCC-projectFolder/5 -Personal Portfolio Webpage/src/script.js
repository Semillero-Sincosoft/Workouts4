const intro = document.getElementById("intro");
const preview = document.getElementById("preview");
const resume = document.getElementById("resume");
const main = document.createElement("main");
main.classList.add("container");

introPage();

function introPage(){
    let h1 = document.createElement('h1');
    let btn = document.createElement('button');

    h1.innerHTML = "James Chaves <br> Aprentice &#10036 Tutor &#10036 Creator";
    btn.innerHTML = "View My Portfolio";
    intro.classList.add('intro');

    intro.appendChild(h1);
    intro.appendChild(btn);

    btn.addEventListener('click', ()=>{
        intro.classList.remove('intro')
        intro.classList.add('hide')
        previewPage();
    })
}

// previewPage(); // erase after done with preview page

function previewPage() {

  getData('/info.json').then((response) =>
   {

  let nameSection = document.createElement("section");
  let proPic = document.createElement("img");
  let name = document.createElement("h1");
  let location = document.createElement("span");
  let gitLink = document.createElement("span");
  let emailBtn = document.createElement("button");

  preview.classList.add('previewContainer')
  nameSection.classList.add("nameSection");
  proPic.src = "./src/imgs1/portfolioPic.svg";
  name.innerHTML = "James A. Chaves F.";
  location.innerHTML = "Bogota D.C";
  gitLink.innerHTML = "GIT";
  gitLink.addEventListener("click", () => {
    window.location = "https://github.com/JamesChavess";
  });
  emailBtn.innerHTML = "Email Me";

  nameSection.appendChild(proPic);
  nameSection.appendChild(name);
  nameSection.appendChild(location);
  nameSection.appendChild(gitLink);
  nameSection.appendChild(emailBtn);
  preview.appendChild(nameSection);

  let infoSection = document.createElement("section");
  let menu = document.createElement("img");
  let header = document.createElement("header");
  let aboutMe = document.createElement("p");
  let learning = document.createElement("aside");
  let h2 = document.createElement("h2");

  let first = document.createElement("article");
  let firstH3 = document.createElement("h3");
  let firstSpan = document.createElement("Span");
  let firstImg = document.createElement("Img");
  let second = document.createElement("article");
  let secondH3 = document.createElement("h3");
  let secondSpan = document.createElement("Span");
  let secondImg = document.createElement("Img");
  let left = document.createElement("div");

  let third = document.createElement("article");
  let thirdH3 = document.createElement("h3");
  let thirdSpan = document.createElement("Span");
  let thirdImg = document.createElement("Img");
  let fourth = document.createElement("article");
  let fourthH3 = document.createElement("h3");
  let fourthSpan = document.createElement("Span");
  let fourthImg = document.createElement("Img");
  let right = document.createElement("div");
  let closedMenu = true;
  infoSection.classList.add("infoSection");
  menu.src = "./src/imgs1/menu.png"
  menu.classList.add("menu");
  menu.addEventListener("click", ()=>{
      if(closedMenu){
      closedMenu = false;
      console.log("menu btn works")
      let options = document.createElement("div");
      let cv = document.createElement("h4");
      let projects = document.createElement("h4")

      options.classList.add("options")
      cv.innerHTML = "Corriculum Vitae"
      projects.innerHTML = "Projects"

      options.appendChild(cv);
      options.appendChild(projects);
      infoSection.appendChild(options);
      cv.addEventListener("click",()=>{
        preview.style.display = "none";
        basicInfoSect();
      })
      projects.addEventListener("click",()=>{
        console.log("projects event listener works")
        projects();
      })

    }else{
        closedMenu = true;
        console.log("close function working")
        let options = document.querySelector(".options");
        options.style.display = "none"
    }
  })
  header.innerHTML = "About Me";
  aboutMe.innerHTML = `${response.aboutMe.aboutMe}`;
  h2.innerHTML = "What I'm Learning";

  firstH3.innerHTML = `${response.aboutMe.firstH3}`;
  firstSpan.innerHTML = `${response.aboutMe.firstSpan}`;
  firstImg.src = `${response.aboutMe.firstImg}`;

  secondH3.innerHTML = `${response.aboutMe.secondH3}`;
  secondSpan.innerHTML = `${response.aboutMe.secondSpan}`;
  secondImg.src = "./src/imgs1/code.png",

  thirdH3.innerHTML = `${response.aboutMe.thirdH3}`;
  thirdSpan.innerHTML = `${response.aboutMe.thirdSpan}`;
  thirdImg.src = `${response.aboutMe.thirdImg}`;

  fourthH3.innerHTML = `${response.aboutMe.fourthH3}`;
  fourthSpan.innerHTML = `${response.aboutMe.fourthSpan}`;
  fourthImg.src = `${response.aboutMe.fourthImg}`;

  infoSection.appendChild(header);
  infoSection.appendChild(aboutMe);
  infoSection.appendChild(menu);

  first.appendChild(firstH3);
  first.appendChild(firstSpan);
  first.appendChild(firstImg);

  second.appendChild(secondH3);
  second.appendChild(secondSpan);
  second.appendChild(secondImg);

  third.appendChild(thirdH3);
  third.appendChild(thirdSpan);
  third.appendChild(thirdImg);

  fourth.appendChild(fourthH3);
  fourth.appendChild(fourthSpan);
  fourth.appendChild(fourthImg);

  left.appendChild(first);
  right.appendChild(second);
  left.appendChild(third);
  right.appendChild(fourth);

  learning.appendChild(h2);
  learning.appendChild(left);
  learning.appendChild(right);
  infoSection.appendChild(learning);
  preview.appendChild(infoSection);

  console.log("preview page works")
});
}
basicInfoSect();
educationInfo();
personalBio();
proExp();
function basicInfoSect() {
  getData("/info.json").then((response) => {
    console.log(response);

    let basicInfo = document.createElement("section");
    let imgSection = document.createElement("section");
    let resumePic = document.createElement("img");
    let name = document.createElement("h1");
    let title = document.createElement("span");
    let contactImg = document.createElement("img");
    let reach = document.createElement("span");
    let phoneImg = document.createElement("img");
    let number = document.createElement("span");
    let emailImg = document.createElement("img");
    let emailAdd = document.createElement("span");
    let homeImg = document.createElement("img");
    let homeAdd = document.createElement("span");

    basicInfo.classList.add("basicInfo");
    title.classList.add("title");
    imgSection.classList.add("imgSection");
    resumePic.src = `${response.basicInfo.resumePic}`;
    name.innerHTML = `${response.basicInfo.name}`;
    title.innerHTML = `${response.basicInfo.title}`;
    contactImg.src = `${response.basicInfo.contactImg}`;
    reach.innerHTML = "How To Reach Me";
    phoneImg.src = `${response.basicInfo.phoneImg}`;
    number.innerHTML = `${response.basicInfo.number}`;
    emailImg.src = `${response.basicInfo.emailImg}`;
    emailAdd.innerHTML = `${response.basicInfo.emailAdd}`;
    homeImg.src = `${response.basicInfo.homeImg}`;
    homeAdd.innerHTML = `${response.basicInfo.homeAdd}`;
    console.log("resume page function works");

    imgSection.appendChild(resumePic);
    imgSection.appendChild(name);
    basicInfo.appendChild(imgSection);
    basicInfo.appendChild(title);
    basicInfo.appendChild(contactImg);
    basicInfo.appendChild(reach);
    basicInfo.appendChild(phoneImg);
    basicInfo.appendChild(number);
    basicInfo.appendChild(emailImg);
    basicInfo.appendChild(emailAdd);
    basicInfo.appendChild(homeImg);
    basicInfo.appendChild(homeAdd);
    main.appendChild(basicInfo);
    resume.appendChild(main);
  });
}
function educationInfo() {
  getData("/info.json").then((response) => {
    console.log(response);
    let eduSect = document.createElement("section");
    let eduImg = document.createElement("img");
    let education = document.createElement("h4");

    eduSect.classList.add("eduSect");
    eduImg.src = "./src/imgs2/education.svg";
    education.innerHTML = "EDUCATION";

    eduSect.appendChild(eduImg);
    eduSect.appendChild(education);

    response.education.forEach((edu) => {
      let year = document.createElement("h5");
      year.innerHTML = edu.year;
      let credential = document.createElement("span");
      credential.innerHTML = `<b>${edu.credential}</b> <br>`;
      let entity = document.createElement("span");
      entity.innerHTML = edu.entity;

      eduSect.appendChild(year);
      eduSect.appendChild(credential);
      eduSect.appendChild(entity);
      main.appendChild(eduSect);
    });
  });
}
function personalBio() {
    getData("/info.json").then((response) => {
      console.log(response);
      let bioSect = document.createElement("section");
      let bioImg = document.createElement("img");
      let bioTitle = document.createElement("h4");
      let personalBio = document.createElement("p")

      bioSect.classList.add("bioSect");
      bioImg.src = "./src/imgs2/bio.svg";
      bioTitle.innerHTML = "PERSONAL BIO";
      personalBio.innerHTML = `${response.personalBio.bio}`

      bioSect.appendChild(bioImg);
      bioSect.appendChild(personalBio);
      bioSect.appendChild(bioTitle);
      bioSect.appendChild(personalBio);
      main.appendChild(bioSect);

      console.log("personalBio section works")
    });
}
function proExp() {
  getData("/info.json").then((response) => {
    console.log(response);
    let expSect = document.createElement("section");
    let expImg = document.createElement("img");
    let expTitle = document.createElement("h4");
    let time = document.createElement("span");
    let position = document.createElement("span");
    let company = document.createElement("span");


    expSect.classList.add("expSect");
    expImg.src = `${response.proExp.img}`
    expTitle.innerHTML = `${response.proExp.softEmp}`
    time.innerHTML = `${response.proExp.time}`;
    position.innerHTML = `${response.proExp.position}`;
    company.innerHTML = `${response.proExp.company}`

    expSect.appendChild(expImg);
    expSect.appendChild(expTitle);
    expSect.appendChild(time);
    expSect.appendChild(position);
    expSect.appendChild(company);
    main.appendChild(expSect);

    console.log("personalBio section works")
  });
}
function projects() {
  console.log("proejct function works");
}

function getData(url, callback) {
  return fetch(url).then((response) => response.json());
}
