const prev = document.querySelector(".iconprev");
const sigu = document.querySelector(".iconnext");
const nombres = document.querySelector(".name");
const profession = document.querySelector(".profession");
const description = document.querySelector(".description");
const imagen = document.querySelector(".imageprofile");
let posicionActual = 0;
let informacion = [
  {
    img: "images/image-tanya.jpg",
    nombre: "Tanya Sinclair",
    profesion: "UX Engineer",
    descripcion:
      "“ I’ve been interested in coding for a while but never taken the jump,until now. I couldn´t recommend this course enought. I’m now in the job of my dreams and so excited about the future.”",
  },
  {
    img: "images/image-john.jpg",
    nombre: "Jhon Tarkpor",
    profesion: "Junior Front-end Developer",
    descripcion:
      "“ If you want to play the best foundation possible I´d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”",
  },
];

function pasarDatos() {
  posicionActual >= informacion.length - 1?posicionActual = 0:posicionActual++;
  mostrarDatos();
}
function retrocederDatos() {
  posicionActual <= 0?posicionActual = informacion.length - 1: posicionActual--;
  mostrarDatos();
}
function mostrarDatos() {
  imagen.src = `${informacion[posicionActual].img}`;
  nombres.innerText = `${informacion[posicionActual].nombre}`;
  profession.innerText = `${informacion[posicionActual].profesion}`;
  description.innerText = `${informacion[posicionActual].descripcion}`;
}

sigu.addEventListener("click", pasarDatos);
prev.addEventListener("click", retrocederDatos);
