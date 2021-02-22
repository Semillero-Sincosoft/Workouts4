document.getElementById("title").innerHTML = "Social Media Dashboard";
document.getElementById("subt").innerHTML = "Dark Mode";
document.getElementById("Cant").innerHTML = "Total Followers: 23.004";
const lightMode = document.querySelector('.lightmode');
const bod = document.querySelector('body'); 


lightMode.addEventListener('click',e=>{
    bod.classList.toggle('lightmode');

    
});

