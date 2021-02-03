let derecha =document.getElementById("derecha");
let izquierda =document.getElementById("izquierda");
let imagen = document.getElementById("imagen");
let parrafo = document.getElementById("parrafo");
let autor = document.getElementById("autor");
let cargo = document.getElementById("profesion");
let cont =1;

let info = [
    { imagen: "assets/images/image-john.jpg", texto : " “ If you want to lay the best foundation possible  i’d recommend taking this course.the depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.“", autor : "John Tarkpor",cargo:"Junior Front-end Developer"},
    { imagen: "assets/images/image-tanya.jpg", texto : " “I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. i´m now in the job of my dreams and so excited about the future .“", autor : "Tanya Sinclair " ,cargo:"UX Engineer"},
    { imagen: "assets/images/image-3.jpg", texto : "“ If you want to lay the best foundation possible  i’d recommend taking this course.the depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.“", autor : "Marin Zambrano", cargo:"Tester"},
];

let funcionclick = function (n){
    cont = cont +n;
    if (cont==info.length) {
        cont=0;
    }
    if(cont>=0){
        imagen.src = info[cont].imagen;
        mostrardatos();
        
    }else if (cont<0){
        cont=info.length-1;
        mostrardatos();
    }
}
function mostrardatos(){
    imagen.src = info[cont].imagen;
    parrafo.innerHTML = info[cont].texto;
    autor.innerHTML = info[cont].autor;
    cargo.innerHTML = info[cont].cargo;
}

derecha.addEventListener('click' , function(){funcionclick(1)})
izquierda.addEventListener('click' , function(){funcionclick(-1)})