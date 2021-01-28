

let Foto = document.getElementById("Foto");
let testimonio = document.getElementById('testimonio');
let name = document.getElementById('name');
let position = document.getElementById('position');

let Nombre = 'Tanya';


function CambiarDatosN() {

    if (Nombre === 'Tanya') {
        Nombre = 'Jhon';
        Foto.src = "assets/images/image-john.jpg";
        testimonio.innerHTML = '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”';
        name.innerHTML = 'John Tarkpor';
        position.innerHTML = 'Junior Front-end Developer';

    } else if (Nombre === 'Tanya') {
        Nombre = 'Tanya';
        Foto.src = "assets/images/image-tanya.jpg";
        testimonio.innerHTML = '“ I’ve been interested in coding for a while but never taken the jump, until now. Icouldn’ t recommend this course enough. I’ m now in the job of my dreams and soexcited about the future."';
        name.innerHTML = 'Tanya Sinclair';
        position.innerHTML = 'UX Engineer';

    } else {
        Nombre = 'Esteban';
        Foto.src = "assets/images/esteban.jpg";
        testimonio.innerHTML = '“ I am a guy passionate about programming, I like to learn something new every day, I try to do things very well and every day I have to improve much more ”';
        name.innerHTML = 'Esteban Ortiz';
        position.innerHTML = 'Master Full Stack Developer';
    }

    
}

function CambiarDatosP() {

    if (Nombre === 'Tanya') {
        Nombre = 'Esteban';
        Foto.src = "assets/images/esteban.jpg";
        testimonio.innerHTML = '“ I am a guy passionate about programming, I like to learn something new every day, I try to do things very well and every day I have to improve much more ”';
        name.innerHTML = 'Esteban Ortiz';
        position.innerHTML = 'Master Full Stack Developer';
        

    } else if (Nombre === 'Tanya') {
        Nombre = 'Tanya';
        Foto.src = "assets/images/image-tanya.jpg";
        testimonio.innerHTML = '“ I’ve been interested in coding for a while but never taken the jump, until now. Icouldn’ t recommend this course enough. I’ m now in the job of my dreams and soexcited about the future."';
        name.innerHTML = 'Tanya Sinclair';
        position.innerHTML = 'UX Engineer';

    } else {
        Nombre = 'Jhon';
        Foto.src = "assets/images/image-john.jpg";
        testimonio.innerHTML = '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”';
        name.innerHTML = 'John Tarkpor';
        position.innerHTML = 'Junior Front-end Developer';
    }

    
}