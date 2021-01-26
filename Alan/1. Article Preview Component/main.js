function mostrarRedes(){
  console.time('social')
  var social = document.getElementById("social-networks");
  if (social.style.display === "none") {
      social.style.display = "flex";        
  }else{
      social.style.display ="none";
  }
  console.timeEnd('social')
}
