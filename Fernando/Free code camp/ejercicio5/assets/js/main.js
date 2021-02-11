
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){

    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
  }
  navLink.forEach(n => n.addEventListener('click', linkAction));

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});


sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 


sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});
sr.reveal('.work__img',{interval: 200}); 

sr.reveal('.nav__link active__img',{interval: 200}); 



const barra = document.querySelector(".skills__html")
const barra2 = document.querySelector(".skills__css")
const barra3 = document.querySelector(".skills__js")
const numhtml = document.querySelector(".num-html");
const numcss = document.querySelector(".num-css");
const numjs = document.querySelector(".num-js");
let num=0;

let contador=0;

function numeroContador(){
    if(contador===49 )clearInterval(timer2);
    contador++
 
    numhtml.innerText = `${contador+40+'%'}`;
    numcss .innerText = `${contador+30+'%'}`;
    numjs .innerText = `${contador+'%'}`;
    
}
let timer2= setInterval(numeroContador, 40)

function barraProgreso(){
    if(num>50)clearInterval(timer);
    num++

    barra3.style.width= num+"%";
    barra2.style.width= num+30+"%";
    barra.style.width= num+40+"%";
}
let timer= setInterval(barraProgreso, 40)




