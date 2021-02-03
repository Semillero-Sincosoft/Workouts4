let foto = document.getElementById("Foto");
let testimonio = document.getElementById('testimonio');
let name = document.getElementById('name');
let position = document.getElementById('position');

let persona = [{
        Nombre: 'Tanya Sinclair',
        profesion: 'UX Engineer',
        testimonio: '“ I’ve been interested in coding for a while but never taken the jump, until now. Icouldn’ t recommend this course enough. I’ m now in the job of my dreams and soexcited about the future."',
        foto: 'assets/images/image-tanya.jpg'
    }, {
        Nombre: 'John Tarkpor',
        profesion: 'J   unior Front-end Developer',
        testimonio: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
        foto: 'assets/images/image-john.jpg'
    },
    {
        Nombre: 'Esteban Camilo',
        profesion: 'Master Full Stack Developer',
        testimonio: '“ I am a guy passionate about programming, I like to learn something new every day, I try to do things very well and every day I have to improve much more ”',
        foto: 'assets/images/esteban.jpg'
    }
]

let contador = 0;

function CambiarDatosN() {

    if (contador >= persona.length - 1) {
        contador = 0;

    } else {
        contador++;
    }

    mostrarDatos()
}

function CambiarDatosP() {

    if (contador <= 0) {
        contador = persona.length - 1;

    } else {
        contador--;
    }
    mostrarDatos()
}

function mostrarDatos() {

    foto.src = `${persona[contador].foto}`
    name.innerText = `${persona[contador].Nombre}`
    position.innerText = `${persona[contador].profesion}`
    testimonio.innerText = `${persona[contador].testimonio}`


    
}