const progreso =document.querySelector('.progress')
const numerocontador = document.querySelector('.h1');
var ini=0;
var fin=1000; 
function contador (){
if (fin===186)clearInterval(time);
fin--
ini++
numerocontador.innerText=`${fin}`;
progreso.value=ini;
}
let time=setInterval(contador,1);
