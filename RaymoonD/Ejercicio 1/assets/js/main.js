//Función para mostrar las redes sociales
function mostrarRedes(){
    var social = document.getElementById("social-networks");
    if (social.style.display === "none") {
        social.style.display = "flex";        
    }else{
        social.style.display ="none";
    }
}
