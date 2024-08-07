//initialize variables for pet name and  initial stats
const petName = "";
let petHealth = 70;
let petHappiness = 70;

//display initial stats
function updateDisplay() {
    const healthStat = document.getElementById("healthText")
    const happinessStat = document.getElementById("happinessText");

    healthStat.innerHTML = petHealth;
    happinessStat.innerText = petHappiness;
}

//implement actions to increase stats

function increaseHealth() {
    if (petHealth < 100 && petHealth != 0) {
        petHealth += 3;
        //update display
        updateDisplay()
    }
}

function increaseHappiness() {
    if (petHappiness < 100 && petHappiness != 0) {
        petHappiness += 3;
        updateDisplay();
    }
}


//call action functions on buttons
document.getElementById("button1").onclick = increaseHealth;
document.getElementById("button2").onclick = increaseHappiness;
document.getElementById("button3").onclick = increaseHealth

updateDisplay();

//set time intervals to decrease stats
//first create function to detemine decrease
function decreaseStats() {
    if(petHappiness > 0) {
        petHappiness -= 1
    }
    if(petHealth > 0) {
        petHealth -= 2
    }

    updateDisplay()
}
//set the time interval of decrease
setInterval(decreaseStats, 3000); //adjust as needed 