const displayMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const  displayDays= ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
dateDisplay();
timeDisplay();

// Displays full year, month, day and weekday in a appropriate number and string format
function dateDisplay () {

    let month = displayMonths[d.getMonth()];
    let day = displayDays[d.getDay()];
    document.getElementById("date-display").innerHTML = month + " " + d.getDate() + "," + " " + d.getFullYear() + " " + "(" + day + ")"; 

}

function timeDisplay () {
    let currentHour = d.getHours();
    let currentMinute = d.getMinutes();
    let currentSecond = d.getSeconds();

    var countDown = setInterval(() => {
        currentSecond++;
        document.getElementById("hour-display").innerHTML = `${currentHour}`;
        document.getElementById("minute-display").innerHTML = `${currentMinute}`;
        document.getElementById("seconds-display").innerHTML = `${currentSecond}`;
        

        if(currentSecond === 59) {
            currentSecond = -1;
            document.getElementById("minute-display").innerHTML = `${currentMinute}`;
            currentMinute++;
        }

    }, 1000);
}