const body = document.getElementById("body");
const testimony = document.createElement("main");

const left = document.createElement("aside");
const quote = document.createElement("p");
const info = document.createElement("div");
const names = document.createElement("span");
const position = document.createElement("span");

const right = document.createElement("aside");
const profilePic = document.createElement("img");
const btns = document.createElement("div");
const prev = document.createElement("button");
const prevArrow = document.createElement("img");
const next = document.createElement("button");
const nextArrow = document.createElement("img");

testimony.classList.add("testimony");

left.id = "left";
quote.id = "quote";
info.id = "info";
names.id = "names";
position.id = "position";

right.id = "right";
profilePic.id = "profilePic";
btns.classList.add("btns");
prev.id = "prev";
prevArrow.src = "./images/icon-prev.svg";
next.id = "next";
nextArrow.src = "./images/icon-next.svg";

left.appendChild(quote);
left.appendChild(info);
left.appendChild(names);
left.appendChild(position);

prev.appendChild(prevArrow);
next.appendChild(nextArrow);
btns.appendChild(prev);
btns.appendChild(next);
right.appendChild(profilePic);
right.appendChild(btns);

testimony.appendChild(left);
testimony.appendChild(right);
body.appendChild(testimony);


let people = [
  {quote : '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
  names : "Tanya Sinclair",
  position: "UX Engineer",
  profilePic: "./images/image-tanya.jpg"},
  
  {quote : '“ If you want to lay the best foundation possible I’d recommend taking this course The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
  names : "John Tarkpor",
  position: "Junior Front-End Developer",
  profilePic: "./images/image-john.jpg"},

  {quote : "“ If you want to lay a foundation for English learning Combined with Software course. Look no further, English4Coders is here. I'm getting better at coding and improving my English at the same time. “",
  names : " James Chaves",
  position: "Auxiliary Software Dev",
  profilePic: "./images/image-james.jpg"}
]

quote.innerText = people[0].quote;
names.innerText = people[0].names;
position.innerText = people[0].position;
profilePic.src = people[0].profilePic;

let counter = 0;

function swapInfo(btn){
  counter >= people.length-1 && btn.id != 'prev' ? counter = 0 : 
  counter <= 0 && btn.id == 'prev' ? counter = people.length-1 :  
  btn.id == 'prev' ? counter -- : counter++;
  showInfo(counter);
 }
function showInfo(counter){
  quote.innerText = `${people[counter].quote}`;
  names.innerText  = `${people[counter].names}`;
  position.innerText  = `${people[counter].position}`;
  profilePic.src = `${people[counter].profilePic}`;
}
let buttons = Array.from(document.getElementsByTagName('button'));

buttons.forEach(button => button.addEventListener('click', ()=>{
      swapInfo(button);
}))

