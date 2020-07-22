//Write a program that will iterate over an array of colors and change the background of the page after 5 seconds.

let c = ["blue", "green", "yellow", "red", "magenta", "black", "orange","cyan"];

function changeColor() {
 let randomcolor = c[Math.floor(Math.random() * c.length)];
 document.body.style.backgroundColor = randomcolor;
}
function startchange() {
 setInterval(changeColor, 5000);
}

startchange()