//make sure the entire DOM loads before executing code
document.addEventListener('DOMContentLoaded', (event) => {
    //initialize variable to show initial stats and global variables for updated display
    let petHealth = 70;
    let petHappiness = 70;
    let alertText = "";
    let gameOverText = "";
    let petName = "";
    

    //intialize variables for user input to name pet
    const petNameInput = document.getElementById('petNameInput');
    const submitNameButton = document.getElementById('submitName');
    const petNameDisplay = document.getElementById('petName');
    const nameInputSection = document.getElementById('nameInput');
    //add event listener to submit name 
    submitNameButton.addEventListener('click', () => {
        const petName = petNameInput.value.trim();
        
        if (petName) {
            petNameDisplay.textContent = petName;
            petNameInput.value = ''; // Clear the input field
            nameInputSection.style.display = 'none'; //will hide display once name is submitted
        }
    });

    //update the display once conditions are met
    function updateDisplay() {
        const healthStat = document.getElementById("healthText");
        const happinessStat = document.getElementById("happinessText");
        const displayText = document.getElementById("text");
        healthStat.innerHTML = petHealth;
        happinessStat.innerText = petHappiness;
        petNameDisplay.innerText = petName;
        //call functions to update the innerText
        lowStatAlert();
        gameOver();
        //make sure that both alowStatAlert and gameOver don't display at the same time
        let combinedText = alertText;
        if (gameOverText !== "") {
            combinedText += "<br>" + gameOverText;
        }

        displayText.innerHTML = combinedText;
        //update the image of pet as the stats change
        //updatePetImage();
        //clear the time interval to decrease stat
        clearStatDecreaseInterval();
    }
    //increase health by clicking on "feed" button and update the display 
    function increaseHealth() {
        if (petHealth < 100 && petHealth != 0) {
            petHealth += 3;
            updateDisplay();
        }
    }
    //increase happiness by clicking on "play" button and update the display 
    function increaseHappiness() {
        if (petHappiness < 100 && petHappiness != 0) {
            petHappiness += 3;
            updateDisplay();
        }
    }
    //increase both stats by cliking on "clean" button and update display 
    function increaseBothbyCleaning() {
        if ((petHappiness < 100 && petHappiness != 0) || (petHealth < 100 && petHealth != 0)) {
            petHappiness += 1;
            petHealth += 1;
            updateDisplay();
        }
    }

    //add event listeners to corresponding buttons
    document.getElementById("button1").onclick = increaseHealth;
    document.getElementById("button2").onclick = increaseHappiness;
    document.getElementById("button3").onclick = increaseBothbyCleaning;

    //call function 
    updateDisplay();

    //set condtion for decreasing stats and update display
    function decreaseStats() {
        if (petHappiness > 0) {
            petHappiness -= 1;
        }
        if (petHealth > 0) {
            petHealth -= 2;
        }
        updateDisplay();
    }

    //set interval for stat decrease
    let statDecreaseInterval = setInterval(decreaseStats, 80000); //adjust for presentation purpose

    //create alert when stats reach 20 
    function lowStatAlert() {
        //reset the alertText
        alertText = "";
        //make sure there is no gameOver alert displaying 
        if (gameOverText === "") {
            if (petHappiness < 20 && petHappiness > 0) {
                alertText = "Your pet is lonely! Click play to make them happy.";
            } else if (petHealth < 20 && petHealth > 0) {
                alertText = "Your pet is not feeling well! Feed and clean up their space to make them feel better.";
            }
        }
    }

    //clear the time interval once either stat reach 0
    function clearStatDecreaseInterval() {
        if (petHealth == 0 || petHappiness == 0) {
            clearInterval(statDecreaseInterval);
        }
    }

    //alert once stats reach 0 
    function gameOver() {
        //reset text
        gameOverText = "";
        if (petHappiness == 0) {
            gameOverText = "Your pet has run away";
        } else if (petHealth == 0) {
            gameOverText = "Your pet has died of starvation";
        } else {
            gameOverText = "";
        }
    }

    //update image based on stats using sprite sheet 
    // function updatePetImage() {
    //     const petImage = document.getElementById("petImage");
    //     console.log(petImage); // Debugging: Log the petImage element
    //     if (petImage) { // Check if petImage is found
    //         if (petHealth > 80 && petHappiness > 80) {
    //             petImage.className = "happy";
    //         } else if (petHealth < 50 || petHappiness < 50) {
    //             petImage.className = "sad";
    //         } else {
    //             petImage.className = "neutral";
    //         }
    //     } else {
    //         console.error("petImage element not found");
    //     }
    // }
});
