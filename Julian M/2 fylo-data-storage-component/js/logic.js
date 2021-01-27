var numLeft = document.querySelector(".spaceLeft");
var progress = document.querySelector(".progress");
var bolita = document.querySelector(".bolita");
let num=1000;
let bar =0;
let b=40;
function numCounter(){
    if(num<187)clearInterval(timer);
    num --;
    bar++;
    numLeft.innerText=`${num}`;
    progress.value = bar;
   
}
let timer=setInterval(numCounter,1)


function numCountera(){
    if(b>393)clearInterval(timer1);
    b++;
    bolita.style.left=`${b}px`;
}
let timer1=setInterval(numCountera,9.8)




