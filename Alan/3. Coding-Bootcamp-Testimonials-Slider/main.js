let contenido=[{foto:'img/image-tanya.jpg',aporte:"“ I’ve been interested in coding for a while but never taken the jump,until now. I couldn’t recommend this course enough. I’m now in the jobof my dreams and so excited about the future.”",nombre:'Tanya Sinclair ',dedicacion:'UX Engineer'},
{foto:'img/image-john.jpg',aporte:"“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",nombre:'John Tarkpor',dedicacion:'Junior Front-end Developer'},
{foto:'img/image-riqui.jpeg',aporte:"“Riqui Puig is a young footballer who with a smile and effort wants to get ahead in the club of his dreams.“",nombre:'Riqui Puig',dedicacion:'Master in soccer '}];
let contador=0;

let foto = document.querySelector('.image');
let nombre = document.querySelector('.nombre');
let aporte = document.querySelector('.aporte');
let dedicacion = document.querySelector('.dedicacion');
const derecha = document.querySelector(".boton2");
const izquierda = document.querySelector(".boton1");

  derecha.addEventListener('click', e=>{
    contador>=contenido.length-1?contador = 0:contador++; 
    pintardatos()
})
izquierda.addEventListener('click', e=>{
  contador<=0?contador=contenido.length-1:contador--;
pintardatos()})
function pintardatos (){
  foto.src =`${contenido[contador].foto}`
  nombre.innerText=`${contenido[contador].nombre}`
  aporte.innerText=`${contenido[contador].aporte}`
  dedicacion.innerText=`${contenido[contador].dedicacion}`
}
