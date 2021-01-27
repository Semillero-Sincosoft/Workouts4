let num = 0;
const progress = document.querySelector(".progress-done")
const number = document.querySelector(".number")

function contadorN() {

    if (num > 75) clearInterval(timerB);

    num++;

    number.innerText = `${num+108}`;
    

}


function barraP() {

    if (num > 75) clearInterval(timer);

    progress.style.width = num + "%";

    num++;
}

let timerB = setInterval(contadorN, 300)
let timer = setInterval(barraP, 30)