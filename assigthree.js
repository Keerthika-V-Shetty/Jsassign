/*Make a webpage that will ask the name of the user. Then will display a welcome message on the webpage.Also the webpage should also have a clock.
Using the toggle method of classList add a dark mode feature to the website.*/


//welcome msg

const title = document.getElementById('title');

console.log(title.innerHTML);
console.log(title.innerText);

const name = prompt("Enter your name", "Anonymous");

title.innerText += `Welcome to the family ${name}`;

//clock

const clocktime = document.getElementById('time');

function clock() {
 let date = new Date();
 let time = date.toLocaleTimeString();
 clocktime.innerText = time;
}
clock();
setInterval(clock, 1000);

//toggledarkmode

function myFunction() {
 var element = document.body;
 element.classList.toggle("dark-mode");
}



