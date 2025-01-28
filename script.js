let cites = document.querySelectorAll("p");
console.log(cites);
let block = document.querySelector("blockquote");
let i = Math.floor(Math.random()*10)+1;
console.log(i);
block.innerText = cites[i].innerHTML;
