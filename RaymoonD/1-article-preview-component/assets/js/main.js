//Función para mostrar las redes sociales

function mostrarRedes(){
    console.time("mostrarR")
    var social = document.getElementById("social-networks");
    if (social.style.display === "none") {
        
        social.style.display = "flex";
                
    }else{
        
        social.style.display ="none";
        
    }
    console.timeEnd('mostrarR')
}
