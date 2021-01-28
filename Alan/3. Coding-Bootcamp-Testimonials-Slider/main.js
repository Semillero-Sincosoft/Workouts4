
let tanya="“ I’ve been interested in coding for a while but never taken the jump,until now. I couldn’t recommend this course enough. I’m now in the jobof my dreams and so excited about the future.”";
let john="“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";
let riqui="Riqui puig is a young footballer who with a smile and effort wants to get ahead in the club of his dreams.";
let contenido=[['img/image-tanya.jpg',tanya,'Tanya Sinclair ','UX Engineer'],['img/image-john.jpg',john,'John Tarkpor','Junior Front-end Developer'],['img/image-riqui.jpeg',riqui,'Riqui Piug','Master in soccer ']];
let contador=0;



function carrusel (contenedor) {
  contenedor.addEventListener('click', e=>{
    const derecha = contenedor.querySelector(".boton2");
    const izquierda = contenedor.querySelector(".boton1");
    let image = contenedor.querySelector(".image"),
    aporte = contenedor.querySelector(".aporte"),
    nombre = contenedor.querySelector(".nombre"),
    dedicacion = contenedor.querySelector(".dedicacion"),
    tgt = e.target;

    if (tgt==izquierda){
      if(contador>0){
        image.src=contenido[contador-1][0];
        aporte.innerText=contenido[contador-1][1];
        nombre.innerText=contenido[contador-1][2];
        dedicacion.innerText=contenido[contador-1][3];
        contador--;
      }
        else {
          image.src=contenido[contenido.length-1][0];
          aporte.innerText=contenido[contenido.length-1][1];
          nombre.innerText=contenido[contenido.length-1][2];
          dedicacion.innerText=contenido[contenido.length-1][3];
          contador=contenido.length-1;
      }
    }
    else if (tgt==derecha){
      if(contador<contenido.length-1){
        image.src=contenido[contador+1][0];
        aporte.innerText=contenido[contador+1][1];
        nombre.innerText=contenido[contador+1][2];
        dedicacion.innerText=contenido[contador+1][3];
        contador++;
      }
      else {
        image.src=contenido[0][0];
        aporte.innerText=contenido[0][1];
        nombre.innerText=contenido[0][2];
        dedicacion.innerText=contenido[0][3];
        contador=0; 
      }
    }
  })
}

document.addEventListener('DOMContentLoaded',()=>{
  let contenedor = document.querySelector('.container');
  carrusel(contenedor);
})