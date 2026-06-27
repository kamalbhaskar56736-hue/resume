
const count = document.querySelector(".count");
const show = document.querySelector(".show");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
let counter=0;
const display=document.getElementById("number-display");

function add(){
   counter +=1;
   display.textContent= counter;
}

function sub() {
    if(counter >0){
    counter -= 1;
    display.textContent = counter;
    }
}

