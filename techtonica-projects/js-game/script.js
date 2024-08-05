//create function for coin toss
function coinToss() {
    const coin = document.querySelector(".coin") //access the HTML coin element
    const resultText = document.getElementById("result") //access the HTML resut element

//simulate the coin toss
const result = Math.random() < 0.5 ? "Heads" : "Tails" //use terneary to randomize flip by 0.5 or 50%
}