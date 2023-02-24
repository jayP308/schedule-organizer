const displayMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const  displayDays= ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let month = displayMonths[d.getMonth()];
let day = displayDays[d.getDay()];
document.getElementById("date-display").innerHTML = month + " " + d.getDate() + "," + " " + d.getFullYear() + " " + "(" + day + ")"; 