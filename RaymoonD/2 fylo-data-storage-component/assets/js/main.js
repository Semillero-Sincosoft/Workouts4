
let men =1000;
let num = 0;
let mensaje = document.getElementById("mensaje")
function Calculador(){

    if(men === 186) clearInterval(timer);
    men -- ;
    mensaje.innerText = men;

}
let timer = setInterval(Calculador, 3);

let progreso = document.getElementById("stat2")
function Barra(){

    if(num > 65) clearInterval(timer2);
    num ++ ;
    progreso.style.width = num + "%";

}
let timer2 = setInterval(Barra, 65);