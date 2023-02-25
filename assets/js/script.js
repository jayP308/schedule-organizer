const displayMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const displayDays = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const displayHours = ["12","1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

const d = new Date();
dateDisplay();
timeDisplay();

// Displays full year, month, day and weekday in a appropriate number and string format
function dateDisplay () {

    let month = displayMonths[d.getMonth()];
    let day = displayDays[d.getDay()];
    document.getElementById("date-display").innerHTML = month + " " + d.getDate() + "," + " " + d.getFullYear() + " " + "-" + " " + day; 

}

function timeDisplay () {
    let currentHour = displayHours[d.getHours()];
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

        if(currentMinute === 60) {
            currentMinute = 0;
            document.getElementById("hour-display").innerHTML = `${currentHour}`;
            currentHour++;
        }

        if(currentHour <= displayHours[0]){
            document.getElementById("am-pm").innerHTML = "AM";
        } else if(currentHour >= displayHours[12]){
            document.getElementById("am-pm").innerHTML = "PM";
        }
    }, 1000);

        if(currentHour === displayHours[8]) {
            document.getElementById("user-input1").style.backgroundColor = "lightblue";
        } else if(currentHour === displayHours[20]) {
            document.getElementById("user-input2").style.backgroundColor = "none";
        }
        
}

    

