let derecha =document.getElementById("derecha");
let izquierda =document.getElementById("izquierda");
let imagen = document.getElementById("imagen");
let parrafo = document.getElementById("parrafo");
let cont =0;
let funcionclick = function (){
    if (cont==0) {
        cont ++;
        imagen.src = "assets/images/image-john.jpg"
        parrafo.innerHTML = "“ If you want to lay the best foundation possible  i’d recommend taking this course.the depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.“";
    } else if(cont>0){
        cont --;
        imagen.src = "assets/images/image-tanya.jpg"
        parrafo.innerHTML = "“I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. i´m now in the job of my dreams and so excited about the future .“ ";
    
    }
}

derecha.addEventListener('click' , funcionclick)

izquierda.addEventListener('click' , funcionclick)