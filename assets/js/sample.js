const displayMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const displayDays = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const displayHours = ["12","1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

const d = new Date();
const j = new Date();
dateDisplay();
timeBlocks();

// Displays full year, month, day and weekday in a appropriate number and string format
function dateDisplay () {

    let month = displayMonths[d.getMonth()];
    let day = displayDays[d.getDay()];
    document.getElementById("date-display").innerHTML = month + " " + d.getDate() + "," + " " + d.getFullYear() + " " + "-" + " " + day; 

}

function timeBlocks () {
    let currentHour1 = j.getHours();
    let currentDate1 = j.getDate();
    
    for(let i = 0; i < currentHour1; i++){
        if(currentHour1 === 6 ) {
            document.getElementById("user-input1").style.backgroundColor = "lightblue";
            document.getElementById("user-input1").placeholder= "Current Time";
        } else if(currentHour1 <= 7) {
            document.getElementById("user-input2").style.backgroundColor = "lightblue";
            document.getElementById("user-input2").placeholder= "Current Time";
            if(currentHour1 != 6) {
                document.getElementById("user-input1").style.backgroundColor = "lightgray";
                document.getElementById("user-input1").placeholder= "Time has passed!";
            }
        } else if(currentHour1 === 8) {
            document.getElementById("user-input3").style.backgroundColor = "lightblue";
            document.getElementById("user-input3").placeholder= "Current Time";
            if(currentHour1 != 7) {
                document.getElementById("user-input1").style.backgroundColor = "lightgray";
                document.getElementById("user-input1").placeholder= "Time has passed!";
                document.getElementById("user-input2").style.backgroundColor = "lightgray";
                document.getElementById("user-input2").placeholder= "Time has passed!";
            }
        } else if(currentHour1 === 9) {
            document.getElementById("user-input4").style.backgroundColor = "lightblue";
            document.getElementById("user-input4").placeholder= "Current Time";
            if(currentHour1 != 8) {
                document.getElementById("user-input1").style.backgroundColor = "lightgray";
                document.getElementById("user-input1").placeholder= "Time has passed!";
                document.getElementById("user-input2").style.backgroundColor = "lightgray";
                document.getElementById("user-input2").placeholder= "Time has passed!";
                document.getElementById("user-input3").style.backgroundColor = "lightgray";
                document.getElementById("user-input3").placeholder= "Time has passed!";
            }
        } else if(currentHour1 === 10) {
            document.getElementById("user-input5").style.backgroundColor = "lightblue";
            document.getElementById("user-input5").placeholder= "Current Time";
            if(currentHour1 != 9) {
                document.getElementById("user-input1").style.backgroundColor = "lightgray";
                document.getElementById("user-input1").placeholder= "Time has passed!";
                document.getElementById("user-input2").style.backgroundColor = "lightgray";
                document.getElementById("user-input2").placeholder= "Time has passed!";
                document.getElementById("user-input3").style.backgroundColor = "lightgray";
                document.getElementById("user-input3").placeholder= "Time has passed!";
                document.getElementById("user-input4").style.backgroundColor = "lightgray";
                document.getElementById("user-input4").placeholder= "Time has passed";
            }
        } else if(currentHour1 === 11) {
            document.getElementById("user-input6").style.backgroundColor = "lightblue";
            document.getElementById("user-input6").placeholder= "Current Time";
            if(currentHour1 != 10) {
                document.getElementById("user-input1").style.backgroundColor = "lightgray";
                document.getElementById("user-input1").placeholder= "Time has passed!";
                document.getElementById("user-input2").style.backgroundColor = "lightgray";
                document.getElementById("user-input2").placeholder= "Time has passed!";
                document.getElementById("user-input3").style.backgroundColor = "lightgray";
                document.getElementById("user-input3").placeholder= "Time has passed!";
                document.getElementById("user-input4").style.backgroundColor = "lightgray";
                document.getElementById("user-input4").placeholder= "Time has passed";
                document.getElementById("user-input5").style.backgroundColor = "lightgray";
                document.getElementById("user-input5").placeholder= "Time has passed!";
            }
        } else if(currentHour1 === 12) {
            document.getElementById("user-input7").style.backgroundColor = "lightblue";
            document.getElementById("user-input7").placeholder= "Current Time";
            if(currentHour1 != 11) {
                document.getElementById("user-input1").style.backgroundColor = "lightgray";
                document.getElementById("user-input1").placeholder= "Time has passed!";
                document.getElementById("user-input2").style.backgroundColor = "lightgray";
                document.getElementById("user-input2").placeholder= "Time has passed!";
                document.getElementById("user-input3").style.backgroundColor = "lightgray";
                document.getElementById("user-input3").placeholder= "Time has passed!";
                document.getElementById("user-input4").style.backgroundColor = "lightgray";
                document.getElementById("user-input4").placeholder= "Time has passed";
                document.getElementById("user-input5").style.backgroundColor = "lightgray";
                document.getElementById("user-input5").placeholder= "Time has passed!";
                document.getElementById("user-input6").style.backgroundColor = "lightgray";
                document.getElementById("user-input6").placeholder= "Time has passed";
            }
        } else if(currentHour1 === 13) {
            document.getElementById("user-input8").style.backgroundColor = "lightblue";
            document.getElementById("user-input8").placeholder= "Current Time";
            if(currentHour1 != 12) {
                document.getElementById("user-input1").style.backgroundColor = "lightgray";
                document.getElementById("user-input1").placeholder= "Time has passed!";
                document.getElementById("user-input2").style.backgroundColor = "lightgray";
                document.getElementById("user-input2").placeholder= "Time has passed!";
                document.getElementById("user-input3").style.backgroundColor = "lightgray";
                document.getElementById("user-input3").placeholder= "Time has passed!";
                document.getElementById("user-input4").style.backgroundColor = "lightgray";
                document.getElementById("user-input4").placeholder= "Time has passed";
                document.getElementById("user-input5").style.backgroundColor = "lightgray";
                document.getElementById("user-input5").placeholder= "Time has passed!";
                document.getElementById("user-input6").style.backgroundColor = "lightgray";
                document.getElementById("user-input6").placeholder= "Time has passed";
                document.getElementById("user-input7").style.backgroundColor = "lightgray";
                document.getElementById("user-input7").placeholder= "Time has passed";
            }
        } else if(currentHour1 === 14) {
            document.getElementById("user-input9").style.backgroundColor = "lightblue";
            document.getElementById("user-input9").placeholder= "Current Time";
            if(currentHour1 != 13) {
                document.getElementById("user-input1").style.backgroundColor = "lightgray";
                document.getElementById("user-input1").placeholder= "Time has passed!";
                document.getElementById("user-input2").style.backgroundColor = "lightgray";
                document.getElementById("user-input2").placeholder= "Time has passed!";
                document.getElementById("user-input3").style.backgroundColor = "lightgray";
                document.getElementById("user-input3").placeholder= "Time has passed!";
                document.getElementById("user-input4").style.backgroundColor = "lightgray";
                document.getElementById("user-input4").placeholder= "Time has passed";
                document.getElementById("user-input5").style.backgroundColor = "lightgray";
                document.getElementById("user-input5").placeholder= "Time has passed!";
                document.getElementById("user-input6").style.backgroundColor = "lightgray";
                document.getElementById("user-input6").placeholder= "Time has passed";
                document.getElementById("user-input7").style.backgroundColor = "lightgray";
                document.getElementById("user-input7").placeholder= "Time has passed";
                document.getElementById("user-input8").style.backgroundColor = "lightgray";
                document.getElementById("user-input8").placeholder= "Time has passed";
            }
        } else if(currentHour1 === 15) {
            document.getElementById("user-input10").style.backgroundColor = "lightblue";
            document.getElementById("user-input10").placeholder= "Current Time";
            if(currentHour1 != 14) {
                document.getElementById("user-input1").style.backgroundColor = "lightgray";
                document.getElementById("user-input1").placeholder= "Time has passed!";
                document.getElementById("user-input2").style.backgroundColor = "lightgray";
                document.getElementById("user-input2").placeholder= "Time has passed!";
                document.getElementById("user-input3").style.backgroundColor = "lightgray";
                document.getElementById("user-input3").placeholder= "Time has passed!";
                document.getElementById("user-input4").style.backgroundColor = "lightgray";
                document.getElementById("user-input4").placeholder= "Time has passed";
                document.getElementById("user-input5").style.backgroundColor = "lightgray";
                document.getElementById("user-input5").placeholder= "Time has passed!";
                document.getElementById("user-input6").style.backgroundColor = "lightgray";
                document.getElementById("user-input6").placeholder= "Time has passed";
                document.getElementById("user-input7").style.backgroundColor = "lightgray";
                document.getElementById("user-input7").placeholder= "Time has passed";
                document.getElementById("user-input8").style.backgroundColor = "lightgray";
                document.getElementById("user-input8").placeholder= "Time has passed";
                document.getElementById("user-input9").style.backgroundColor = "lightgray";
                document.getElementById("user-input9").placeholder= "Time has passed";
            }
        } else if (currentHour1 >= 16){
                document.getElementById("user-input1").style.backgroundColor = "lightgray";
                document.getElementById("user-input1").placeholder= "Time has passed!";
                document.getElementById("user-input2").style.backgroundColor = "lightgray";
                document.getElementById("user-input2").placeholder= "Time has passed!";
                document.getElementById("user-input3").style.backgroundColor = "lightgray";
                document.getElementById("user-input3").placeholder= "Time has passed!";
                document.getElementById("user-input4").style.backgroundColor = "lightgray";
                document.getElementById("user-input4").placeholder= "Time has passed";
                document.getElementById("user-input5").style.backgroundColor = "lightgray";
                document.getElementById("user-input5").placeholder= "Time has passed!";
                document.getElementById("user-input6").style.backgroundColor = "lightgray";
                document.getElementById("user-input6").placeholder= "Time has passed";
                document.getElementById("user-input7").style.backgroundColor = "lightgray";
                document.getElementById("user-input7").placeholder= "Time has passed";
                document.getElementById("user-input8").style.backgroundColor = "lightgray";
                document.getElementById("user-input8").placeholder= "Time has passed";
                document.getElementById("user-input9").style.backgroundColor = "lightgray";
                document.getElementById("user-input9").placeholder= "Time has passed";
                document.getElementById("user-input10").style.backgroundColor = "lightgray";
                document.getElementById("user-input10").placeholder= "Time has passed";
        } 
        
    }
}

