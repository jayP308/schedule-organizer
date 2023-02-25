let submitButton1 = document.getElementById("submit-button1"); 
let submitButton2 = document.getElementById("submit-button2"); 
let submitButton3 = document.getElementById("submit-button3"); 
let submitButton4 = document.getElementById("submit-button4"); 
let submitButton5 = document.getElementById("submit-button5"); 
let submitButton6 = document.getElementById("submit-button6"); 
let submitButton7 = document.getElementById("submit-button7"); 
let submitButton8 = document.getElementById("submit-button8"); 
let submitButton9 = document.getElementById("submit-button9"); 
let submitButton10 = document.getElementById("submit-button10"); 

let searchBar1 = document.getElementById("user-input1");
let searchBar2 = document.getElementById("user-input2");
let searchBar3 = document.getElementById("user-input3");
let searchBar4 = document.getElementById("user-input4");
let searchBar5 = document.getElementById("user-input5");
let searchBar6 = document.getElementById("user-input6");
let searchBar7 = document.getElementById("user-input7");
let searchBar8 = document.getElementById("user-input8");
let searchBar9 = document.getElementById("user-input9");
let searchBar10 = document.getElementById("user-input10");

const displayMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const displayDays = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const displayHours = ["12","1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

const d = new Date();
const j = new Date();
let savedEvents1 = JSON.parse(localStorage.getItem("data1")) || [];
let savedEvents2 = JSON.parse(localStorage.getItem("data2")) || [];
let savedEvents3 = JSON.parse(localStorage.getItem("data3")) || [];
let savedEvents4 = JSON.parse(localStorage.getItem("data4")) || [];
let savedEvents5 = JSON.parse(localStorage.getItem("data5")) || [];
let savedEvents6 = JSON.parse(localStorage.getItem("data6")) || [];
let savedEvents7 = JSON.parse(localStorage.getItem("data7")) || [];
let savedEvents8 = JSON.parse(localStorage.getItem("data8")) || [];
let savedEvents9 = JSON.parse(localStorage.getItem("data9")) || [];
let savedEvents10 = JSON.parse(localStorage.getItem("data10")) || [];
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
    let userInput1 = searchBar1.value;
    for(let i=0; i < userInput1.length; i++) {
        var li = document.createElement("p");
        if(savedEvents1.indexOf(userInput1) == -1){
            savedEvents1.push(userInput1);
            li.textContent = userInput1;
            localStorage.setItem("data1", JSON.stringify(savedEvents1));
        }
    }
    window.location.reload();
})

submitButton2.addEventListener("click", function(event) {
    event.preventDefault();
    let userInput2 = searchBar2.value;
    for(let i=0; i < userInput2.length; i++) {
        var li = document.createElement("p");
        if(savedEvents2.indexOf(userInput2) == -1){
            savedEvents2.push(userInput2);
            li.textContent = userInput2;
            localStorage.setItem("data2", JSON.stringify(savedEvents2));
        }
    }
    window.location.reload();
})

submitButton3.addEventListener("click", function(event) {
    event.preventDefault();
    let userInput3 = searchBar3.value;
    for(let i=0; i < userInput3.length; i++) {
        var li = document.createElement("p");
        if(savedEvents3.indexOf(userInput3) == -1){
            savedEvents3.push(userInput3);
            li.textContent = userInput3;
            localStorage.setItem("data3", JSON.stringify(savedEvents3));
        }
    }
    window.location.reload();
})

submitButton4.addEventListener("click", function(event) {
    event.preventDefault();
    let userInput4 = searchBar4.value;
    for(let i=0; i < userInput4.length; i++) {
        var li = document.createElement("p");
        if(savedEvents4.indexOf(userInput4) == -1){
            savedEvents4.push(userInput4);
            li.textContent = userInput4;
            localStorage.setItem("data4", JSON.stringify(savedEvents4));
        }
    }
    window.location.reload();
})

submitButton5.addEventListener("click", function(event) {
    event.preventDefault();
    let userInput5 = searchBar5.value;
    for(let i=0; i < userInput5.length; i++) {
        var li = document.createElement("p");
        if(savedEvents5.indexOf(userInput5) == -1){
            savedEvents5.push(userInput5);
            li.textContent = userInput5;
            localStorage.setItem("data5", JSON.stringify(savedEvents5));
        }
    }
    window.location.reload();
})

submitButton6.addEventListener("click", function(event) {
    event.preventDefault();
    let userInput6 = searchBar6.value;
    for(let i=0; i < userInput6.length; i++) {
        var li = document.createElement("p");
        if(savedEvents6.indexOf(userInput6) == -1){
            savedEvents6.push(userInput6);
            li.textContent = userInput6;
            localStorage.setItem("data6", JSON.stringify(savedEvents6));
        }
    }
    window.location.reload();
})

submitButton7.addEventListener("click", function(event) {
    event.preventDefault();
    let userInput7 = searchBar7.value;
    for(let i=0; i < userInput7.length; i++) {
        var li = document.createElement("p");
        if(savedEvents7.indexOf(userInput7) == -1){
            savedEvents7.push(userInput7);
            li.textContent = userInput7;
            localStorage.setItem("data7", JSON.stringify(savedEvents7));
        }
    }
    window.location.reload();
})
submitButton8.addEventListener("click", function(event) {
    event.preventDefault();
    let userInput8 = searchBar8.value;
    for(let i=0; i < userInput8.length; i++) {
        var li = document.createElement("p");
        if(savedEvents8.indexOf(userInput8) == -1){
            savedEvents8.push(userInput8);
            li.textContent = userInput8;
            localStorage.setItem("data8", JSON.stringify(savedEvents8));
        }
    }
    window.location.reload();
})
submitButton9.addEventListener("click", function(event) {
    event.preventDefault();
    let userInput9 = searchBar9.value;
    for(let i=0; i < userInput9.length; i++) {
        var li = document.createElement("p");
        if(savedEvents9.indexOf(userInput9) == -1){
            savedEvents9.push(userInput9);
            li.textContent = userInput9;
            localStorage.setItem("data9", JSON.stringify(savedEvents9));
        }
    }
    window.location.reload();
})
submitButton10.addEventListener("click", function(event) {
    event.preventDefault();
    let userInput10 = searchBar10.value;
    for(let i=0; i < userInput10.length; i++) {
        var li = document.createElement("p");
        if(savedEvents10.indexOf(userInput10) == -1){
            savedEvents10.push(userInput10);
            li.textContent = userInput10;
            localStorage.setItem("data10", JSON.stringify(savedEvents10));
        }
    }
    window.location.reload();
})

for(let i=0; i < savedEvents1.length; i++) {
        searchBar1.textContent = savedEvents1[i];
}

for(let i=0; i < savedEvents2.length; i++) {
    searchBar2.textContent = savedEvents2[i];
}

for(let i=0; i < savedEvents3.length; i++) {
    searchBar3.textContent = savedEvents3[i];
}

for(let i=0; i < savedEvents4.length; i++) {
    searchBar4.textContent = savedEvents4[i];
}

for(let i=0; i < savedEvents5.length; i++) {
    searchBar5.textContent = savedEvents5[i];
}

for(let i=0; i < savedEvents6.length; i++) {
    searchBar6.textContent = savedEvents6[i];
}

for(let i=0; i < savedEvents7.length; i++) {
    searchBar7.textContent = savedEvents7[i];
}

for(let i=0; i < savedEvents8.length; i++) {
    searchBar8.textContent = savedEvents8[i];
}

for(let i=0; i < savedEvents9.length; i++) {
    searchBar9.textContent = savedEvents9[i];
}

for(let i=0; i < savedEvents10.length; i++) {
    searchBar10.textContent = savedEvents10[i];
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