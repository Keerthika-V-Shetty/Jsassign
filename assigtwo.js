/*Write a program that will display the multiplication table of a number on the webpage in a proper format.Take the input from the user.
Input - 5
Output - 5 x 1 = 5
5 x 2 = 10
and so on…*/

function myFunction() {
 let i = 0;
 let n = prompt("enter a number:")
 let str = "";
 for (i = 1; i <= 10; i++) {
  document.write('<table border="1" cellspacing="0">');
  for (i = 1; i <= 10; i++) {
   document.write("<tr><td>" + n + " x " + i + " = " + n * i + "</td></tr>");
  }
  document.write("</table>");
 }
}

myFunction();


