//initialize variables for pet name and  initial stats
const petName = "";
let petHealth = 70;
let petHappiness = 70;
let alertText = ""; 
let gameOverText = "";
//display initial stats
function updateDisplay() {
    const healthStat = document.getElementById("healthText");
    const happinessStat = document.getElementById("happinessText");
    const text = document.getElementById("text");
    healthStat.innerHTML = petHealth;
    happinessStat.innerText = petHappiness;
     //update to include alerts for decreased stats
    lowStatAlert();
  
    //update to display text when game is over
    gameOver(); 
     // Combine alertText and gameOverText
     let combinedText = alertText;
     if (gameOverText !== "") {
         combinedText += "<br>" + gameOverText; // Add a line break between messages
     }
 
     // Update the text element with the combined message
     text.innerHTML = combinedText;

     clearStatDecreaseInterval();
}

//implement actions to increase stats

function increaseHealth() {
    if (petHealth < 100 && petHealth != 0) { //boundary set to make sure stats are between 0 - 100 
        petHealth += 3;
        //update display
        updateDisplay()
    }
}

function increaseHappiness() {
    if (petHappiness < 100 && petHappiness != 0) { //boundary set to make sure stats are between 0 - 100
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
let statDecreaseInterval = setInterval(decreaseStats, 500); //adjust as needed for presentation

//set conditions for alerting user about poor health 

function lowStatAlert() {
     alertText = "";
     if(gameOverText === "") {
    if(petHappiness < 20 && petHappiness > 0) {
       alertText = "Your pet is lonely! Click play to make them happy."
       
    } else if(petHealth < 20 && petHealth > 0) {
        alertText = "Your pet is not feeling well! Feed and clean up their space to make them feel better."
     } 
    }
}

//clear the interval for stat decrease if one stat reaches 0

function clearStatDecreaseInterval(){
    if(petHealth == 0 || petHappiness == 0) {
        clearInterval(statDecreaseInterval)
    }
}

// set conditions for losing

function gameOver() {
     gameOverText = "";
    if(petHappiness == 0) {
        gameOverText = "Your pet has run away"
    } else if (petHealth == 0) {
        gameOverText = "Your pet has died of starvation "
    } else
    gameOverText = "";
}
