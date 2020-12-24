let tanya=true;
const left = document.querySelector(".left");
const texto = document.querySelector(".texto");
const info = document.querySelector(".info");
const nombres = document.querySelector(".nombres");
const profesion = document.querySelector(".profesion");
const foto = document.querySelector(".foto");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

prev.addEventListener('click', cambios());
next.addEventListener('click', cambios())

texto.innerHTML = "I´ve been interested in coding for a while but never taken the jump, until now. I couldn´t recommend this course enough. I´m now in the job of my dreams and so excited about the future.";
nombres.innerHTML = "Tanya Sinclair";
profesion.innerHTML = "UX Engineer"
foto.src = "./img/image-tanya.jpg";

function cambios(){
    if (tanya){
        texto.innerHTML = " “If you want to lay the best foundation possible i´d recommend taking this course. The depth  the instructors go into is incredible. i nom feel so confident about starting up as a profesional developer.”"
        nombres.innerHTML = "John Takpor ";
        profesion.innerHTML = "Junior Front-end Developer";
        foto.src = "./img/image-john.jpg";
        tanya=false;
    }else{
        texto.innerHTML= " I´ve been interested in coding for a while but never taken the jump, until now. I couldn´t recommend this course enough. I´m now in the job of my dreams and so excited about the future.”"
        nombres.innerHTML = "Tanya Sinclair";
        profesion.innerHTML = "UX Engineer";
        foto.src = "./img/image-tanya.jpg";
        tanya = true;
    }
}


