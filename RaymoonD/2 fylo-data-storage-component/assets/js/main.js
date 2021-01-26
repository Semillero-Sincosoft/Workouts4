
let num = 0;
let mensaje = document.getElementById("mensaje")
function Calculador(){

    if(num === 184) clearInterval(timer);
    num ++ ;
    mensaje.innerText = num;

}
let timer = setInterval(Calculador, 10);

let progreso = document.getElementById("stat2")
function Barra(){

    if(num > 65) clearInterval(timer2);
    num ++ ;
    progreso.style.width = num + "%";

}
let timer2 = setInterval(Barra, 80);