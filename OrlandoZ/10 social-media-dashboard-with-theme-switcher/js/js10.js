document.getElementById("title").innerHTML = "Social Media Dashboard";
document.getElementById("subt").innerHTML = "Dark Mode";
document.getElementById("Cant").innerHTML = "Total Followers: 23.004";

const lmode = document.querySelector('.switch round')
lmode.addEventListener('click',e =>{
    console.log('modo Claro')
    body.classList.toogle('lightmode')

});
