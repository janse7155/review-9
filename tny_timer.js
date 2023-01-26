/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Jaedan
   Date:   1/26/23   

*/


function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}

function showClock() {
    var thisDay = new Date("May, 19 2018 9:31:27 a.m.");
    var localDate = thisDay.toLocaleDateString();
    var localTime = thisDay.toLocaleTimeString();

    document.getElementById("currentTime").innerHTML = localDate + "<br />" + localTime;

    if (nextJuly4(thisDay));
    return jDate;
}