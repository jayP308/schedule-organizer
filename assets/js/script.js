let submitButton1 = document.getElementById("submit-button1"); 
let searchBar1 = document.getElementById("user-input1");
let userValue = document.getElementById("user-event");

const displayMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const displayDays = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const displayHours = ["12","1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

const d = new Date();
const j = new Date();
let savedEvents = JSON.parse(localStorage.getItem("data")) || [];
dateDisplay();
timeBlocks();

// Displays full year, month, day and weekday in a appropriate number and string format
function dateDisplay () {
    let month = displayMonths[d.getMonth()];
    let day = displayDays[d.getDay()];
    document.getElementById("date-display").innerHTML = month + " " + d.getDate() + "," + " " + d.getFullYear() + " " + "-" + " " + day; 
}

submitButton1.addEventListener("click", function(event) {
    event.preventDefault();
    let userInput = searchBar1.value;
    for(let i=0; i < userInput.length; i++) {
        var li = document.createElement("p");
        if(savedEvents.indexOf(userInput) == -1){
            savedEvents.push(userInput);
            li.textContent = userInput;
            localStorage.setItem("data", JSON.stringify(savedEvents));
        }
    }
    window.location.reload();
})

for(let i=0; i < savedEvents.length; i++) {
        searchBar1.textContent = savedEvents[i];
}

function timeBlocks () {
    let currentHour1 = j.getHours();
        for(let i=0; i < currentHour1; i++){
        if(currentHour1 === 6 ) {
            document.getElementById("user-input1").style.background = 'linear-gradient(salmon, white)';
            document.getElementById("user-input1").placeholder= "Current Time";
        } else if(currentHour1 === 7) {
            document.getElementById("user-input2").style.background = 'linear-gradient(salmon, white)';
            document.getElementById("user-input2").placeholder= "Current Time";
            if(currentHour1 != 6) {
                document.getElementById("user-input1").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input1").value = "Time Has Passed!";
                document.getElementById("user-input1").disabled= true;
                document.getElementById("submit-button1").disabled = true;
            }
        } else if(currentHour1 === 8) {
            document.getElementById("user-input3").style.background = 'linear-gradient(salmon, white)';
            document.getElementById("user-input3").placeholder= "Current Time";
            if(currentHour1 != 7) {
                document.getElementById("user-input1").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input1").value = "Time Has Passed!";
                document.getElementById("user-input1").disabled= true;
                document.getElementById("user-input2").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input2").value = "Time Has Passed!";
                document.getElementById("user-input2").disabled= true;
                document.getElementById("submit-button1").disabled = true;
                document.getElementById("submit-button2").disabled = true;
            }
        } else if(currentHour1 === 9) {
            document.getElementById("user-input4").style.background = 'linear-gradient(salmon, white)';
            document.getElementById("user-input4").placeholder= "Current Time";
            if(currentHour1 != 8) {
                document.getElementById("user-input1").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input1").value = "Time Has Passed!";
                document.getElementById("user-input1").disabled= true;
                document.getElementById("submit-button1").disabled = true;
                document.getElementById("user-input2").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input2").value = "Time Has Passed!";
                document.getElementById("user-input2").disabled= true;
                document.getElementById("submit-button2").disabled = true;
                document.getElementById("user-input3").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input3").value = "Time Has Passed!";
                document.getElementById("user-input3").disabled= true;
                document.getElementById("submit-button3").disabled = true;
            }
        } else if(currentHour1 === 10) {
            document.getElementById("user-input5").style.background = 'linear-gradient(salmon, white)';
            document.getElementById("user-input5").placeholder= "Current Time";
            if(currentHour1 != 9) {
                document.getElementById("user-input1").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input1").value = "Time Has Passed!";
                document.getElementById("user-input1").disabled= true;
                document.getElementById("submit-button1").disabled = true;
                document.getElementById("user-input2").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input2").value = "Time Has Passed!";
                document.getElementById("user-input2").disabled= true;
                document.getElementById("submit-button2").disabled = true;
                document.getElementById("user-input3").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input3").value = "Time Has Passed!";
                document.getElementById("user-input3").disabled= true;
                document.getElementById("submit-button3").disabled = true;
                document.getElementById("user-input4").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input4").value = "Time Has Passed!";
                document.getElementById("user-input4").disabled= true;
                document.getElementById("submit-button4").disabled = true;
            }
        } else if(currentHour1 === 11) {
            document.getElementById("user-input6").style.background = 'linear-gradient(salmon, white)';
            document.getElementById("user-input6").placeholder= "Current Time";
            if(currentHour1 != 10) {
                document.getElementById("user-input1").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input1").value = "Time Has Passed!";
                document.getElementById("user-input1").disabled= true;
                document.getElementById("submit-button1").disabled = true;
                document.getElementById("user-input2").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input2").value = "Time Has Passed!";
                document.getElementById("user-input2").disabled= true;
                document.getElementById("submit-button2").disabled = true;
                document.getElementById("user-input3").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input3").value = "Time Has Passed!";
                document.getElementById("user-input3").disabled= true;
                document.getElementById("submit-button3").disabled = true;
                document.getElementById("user-input4").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input4").value = "Time Has Passed!";
                document.getElementById("user-input4").disabled= true;
                document.getElementById("submit-button4").disabled = true;
                document.getElementById("user-input5").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input5").value = "Time Has Passed!";
                document.getElementById("user-input5").disabled= true;
                document.getElementById("submit-button5").disabled = true;
            }
        } else if(currentHour1 === 12) {
            document.getElementById("user-input7").style.background = 'linear-gradient(salmon, white)';
            document.getElementById("user-input7").placeholder= "Current Time";
            if(currentHour1 != 11) {
                document.getElementById("user-input1").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input1").value = "Time Has Passed!";
                document.getElementById("user-input1").disabled= true;
                document.getElementById("submit-button1").disabled = true;
                document.getElementById("user-input2").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input2").value = "Time Has Passed!";
                document.getElementById("user-input2").disabled= true;
                document.getElementById("submit-button2").disabled = true;
                document.getElementById("user-input3").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input3").value = "Time Has Passed!";
                document.getElementById("user-input3").disabled= true;
                document.getElementById("submit-button3").disabled = true;
                document.getElementById("user-input4").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input4").value = "Time Has Passed!";
                document.getElementById("user-input4").disabled= true;
                document.getElementById("submit-button4").disabled = true;
                document.getElementById("user-input5").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input5").value = "Time Has Passed!";
                document.getElementById("user-input5").disabled= true;
                document.getElementById("submit-button5").disabled = true;
                document.getElementById("user-input6").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input6").value = "Time Has Passed!";
                document.getElementById("user-input6").disabled= true;
                document.getElementById("submit-button6").disabled = true;
            }
        } else if(currentHour1 === 13) {
            document.getElementById("user-input8").style.background = 'linear-gradient(salmon, white)';
            document.getElementById("user-input8").placeholder= "Current Time";
            if(currentHour1 != 12) {
                document.getElementById("user-input1").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input1").value = "Time Has Passed!";
                document.getElementById("user-input1").disabled= true;
                document.getElementById("submit-button1").disabled = true;
                document.getElementById("user-input2").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input2").value = "Time Has Passed!";
                document.getElementById("user-input2").disabled= true;
                document.getElementById("submit-button2").disabled = true;
                document.getElementById("user-input3").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input3").value = "Time Has Passed!";
                document.getElementById("user-input3").disabled= true;
                document.getElementById("submit-button3").disabled = true;
                document.getElementById("user-input4").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input4").value = "Time Has Passed!";
                document.getElementById("user-input4").disabled= true;
                document.getElementById("submit-button4").disabled = true;
                document.getElementById("user-input5").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input5").value = "Time Has Passed!";
                document.getElementById("user-input5").disabled= true;
                document.getElementById("submit-button5").disabled = true;
                document.getElementById("user-input6").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input6").value = "Time Has Passed!";
                document.getElementById("user-input6").disabled= true;
                document.getElementById("submit-button6").disabled = true;
                document.getElementById("user-input7").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input7").value = "Time Has Passed!";
                document.getElementById("user-input7").disabled= true;
                document.getElementById("submit-button7").disabled = true;
            }
        } else if(currentHour1 === 14) {
            document.getElementById("user-input9").style.background = 'linear-gradient(salmon, white)';
            document.getElementById("user-input9").placeholder= "Current Time";
            if(currentHour1 != 13) {
                document.getElementById("user-input1").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input1").value = "Time Has Passed!";
                document.getElementById("user-input1").disabled= true;
                document.getElementById("submit-button1").disabled = true;
                document.getElementById("user-input2").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input2").value = "Time Has Passed!";
                document.getElementById("user-input2").disabled= true;
                document.getElementById("submit-button2").disabled = true;
                document.getElementById("user-input3").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input3").value = "Time Has Passed!";
                document.getElementById("user-input3").disabled= true;
                document.getElementById("submit-button3").disabled = true;
                document.getElementById("user-input4").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input4").value = "Time Has Passed!";
                document.getElementById("user-input4").disabled= true;
                document.getElementById("submit-button4").disabled = true;
                document.getElementById("user-input5").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input5").value = "Time Has Passed!";
                document.getElementById("user-input5").disabled= true;
                document.getElementById("submit-button5").disabled = true;
                document.getElementById("user-input6").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input6").value = "Time Has Passed!";
                document.getElementById("user-input6").disabled= true;
                document.getElementById("submit-button6").disabled = true;
                document.getElementById("user-input7").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input7").value = "Time Has Passed!";
                document.getElementById("user-input7").disabled= true;
                document.getElementById("submit-button7").disabled = true;
                document.getElementById("user-input8").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input8").value = "Time Has Passed!";
                document.getElementById("user-input8").disabled= true;
                document.getElementById("submit-button8").disabled = true;
            }
        } else if(currentHour1 === 15) {
            document.getElementById("user-input10").style.background = 'linear-gradient(salmon, white)';
            document.getElementById("user-input10").placeholder= "Current Time";
            if(currentHour1 != 14) {
                document.getElementById("user-input1").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input1").value = "Time Has Passed!";
                document.getElementById("user-input1").disabled= true;
                document.getElementById("submit-button1").disabled = true;
                document.getElementById("user-input2").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input2").value = "Time Has Passed!";
                document.getElementById("user-input2").disabled= true;
                document.getElementById("submit-button2").disabled = true;
                document.getElementById("user-input3").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input3").value = "Time Has Passed!";
                document.getElementById("user-input3").disabled= true;
                document.getElementById("submit-button3").disabled = true;
                document.getElementById("user-input4").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input4").value = "Time Has Passed!";
                document.getElementById("user-input4").disabled= true;
                document.getElementById("submit-button4").disabled = true;
                document.getElementById("user-input5").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input5").value = "Time Has Passed!";
                document.getElementById("user-input5").disabled= true;
                document.getElementById("submit-button5").disabled = true;
                document.getElementById("user-input6").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input6").value = "Time Has Passed!";
                document.getElementById("user-input6").disabled= true;
                document.getElementById("submit-button6").disabled = true;
                document.getElementById("user-input7").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input7").value = "Time Has Passed!";
                document.getElementById("user-input7").disabled= true;
                document.getElementById("submit-button7").disabled = true;
                document.getElementById("user-input8").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input8").value = "Time Has Passed!";
                document.getElementById("user-input8").disabled= true;
                document.getElementById("submit-button8").disabled = true;
                document.getElementById("user-input9").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
                document.getElementById("user-input9").value = "Time Has Passed!";
                document.getElementById("user-input9").disabled= true;
                document.getElementById("submit-button9").disabled = true;
            }
        } else if (currentHour1 >= 16){
            localStorage.removeItem("data");
            document.getElementById("user-input1").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
            document.getElementById("user-input1").value = "Time Has Passed!";
            document.getElementById("user-input1").disabled= true;
            document.getElementById("submit-button1").disabled = true;
            document.getElementById("user-input2").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
            document.getElementById("user-input2").value = "Time Has Passed!";
            document.getElementById("user-input2").disabled= true;
            document.getElementById("submit-button2").disabled = true;
            document.getElementById("user-input3").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
            document.getElementById("user-input3").value = "Time Has Passed!";
            document.getElementById("user-input3").disabled= true;
            document.getElementById("submit-button3").disabled = true;
            document.getElementById("user-input4").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
            document.getElementById("user-input4").value = "Time Has Passed!";
            document.getElementById("user-input4").disabled= true;
            document.getElementById("submit-button4").disabled = true;
            document.getElementById("user-input5").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
            document.getElementById("user-input5").value = "Time Has Passed!";
            document.getElementById("user-input5").disabled= true;
            document.getElementById("submit-button5").disabled = true;
            document.getElementById("user-input6").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
            document.getElementById("user-input6").value = "Time Has Passed!";
            document.getElementById("user-input6").disabled= true;
            document.getElementById("submit-button6").disabled = true;
            document.getElementById("user-input7").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
            document.getElementById("user-input7").value = "Time Has Passed!";
            document.getElementById("user-input7").disabled= true;
            document.getElementById("submit-button7").disabled = true;
            document.getElementById("user-input8").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
            document.getElementById("user-input8").value = "Time Has Passed!";
            document.getElementById("user-input8").disabled= true;
            document.getElementById("submit-button8").disabled = true;
            document.getElementById("user-input9").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
            document.getElementById("user-input9").value = "Time Has Passed!";
            document.getElementById("user-input9").disabled= true;
            document.getElementById("submit-button9").disabled = true;
            document.getElementById("user-input10").style.background = "linear-gradient(rgb(152, 96, 90), rgb(198, 190, 190))";
            document.getElementById("user-input10").value = "Time Has Passed!";
            document.getElementById("user-input10").disabled= true;
            document.getElementById("submit-button10").disabled = true;
        } 
    }

}