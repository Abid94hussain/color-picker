let button = document.querySelector("button");
let box = document.querySelector(".box");
let h1 = document.querySelector("h1");

button.addEventListener("click", function(){
     let random1 = Math.floor(Math.random()*255);
     let random2 = Math.floor(Math.random()*255);
     let random3 = Math.floor(Math.random()*255);
     box.style.backgroundColor = `rgb(${random1},${random2},${random3})`;
     h1.innerText = `rgb(${random1},${random2},${random3})`
})