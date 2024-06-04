"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Todd Nash    
   Date: 2004-06-03

*/

//Display the current date & time
document.getElementById("dateNow").innerHTML = "m/d/y<br />h:m:s";

//Display the time left until New Year's End
document.getElementById("days").textContent = "dd";
document.getElementById("hrs").textContent = "hr";
document.getElementById("mins").textContent = "mm";
document.getElementById("secs").textContent = "ss";

//New variables for date-time
var currentDay = new Date("May 23, 2018 14:35:05");
var dateString = currentDay.toLocaleDateString();
var timeString = currentDay.toLocaleTimeString();


/*
This is a  
multi
line
comment
*/

//We are dynamically setting Current Time
document.getElementById("dateNow").innerHTML = 
dateString + "<br />" + timeString;

var newYear = new Date("January 1, 2018");

var nextYear = currentDay.getFullYear() + 1;

newYear.setFullYear(nextYear);


console.log(nextYear);

console.log(newYear);