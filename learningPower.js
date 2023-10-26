let winningNum = Math.floor((Math.random() * 20) +1);
const playerAnswer = document.getElementById("playerGuess");
let submitButton = document.getElementById("answerSubmit");
let restartButton = document.getElementById("restartGame");
let givenResults = document.getElementById("results");
var win = false;
var numOfWins = 0;
var lost = false;
var numOfLoses = 0;
var chances = 3;

console.log(winningNum);

function guessRangeRandom () {
    winningNum = Math.floor((Math.random() * 20) + 1);
    givenResults.innerText = "Guess a number between 1 and 20 to win with the correct number"
    console.log(winningNum);
}



// Checks if the player's answer in the input (playerGuess) equals to the winningNum.
function answerResults () {
    let guess = playerAnswer.value;
    playerInSettings = false
    if (win === false) {
        if (lost === false) {
            if(guess < winningNum){
                givenResults.innerText = "Incorrect, lets guess higher mate."
                if (guess < 1){
                    givenResults.innerText = "Way too low! 1 is the lowest you can go. Take that advice."
                }
                chancesCheck();
            } else if (guess > winningNum){
                givenResults.innerText = "Incorrect, lets guess lower this time."
                if (guess > 20) {
                    givenResults.innerText = "Way too high! 20 is the highest you can go. Trust me on this."
                chancesCheck();
                }  
            } else {
                givenResults.innerText = "You Win!"
                win = true;
                console.log("Won: " + win)
            }
        }
    }
}

// Checks the chances the player has as well as subtracting the chances for each wrong guess.
function chancesCheck () {
    if (chances > 0) {
        chances = chances -1;
        if (chances > 1) {
            console.log(chances + " Chances left.");
        } else {
            console.log(chances + " Chance left.");
        }
    }
    if (chances === 0) {
        lost = true
        console.log("Lost: " + lost)
        givenResults.innerText = "You Lose!"
    }
}

// Restarts the game
function restart () {
    if (playerInSettings === false) {
        if (win === true) {
            numOfWins = numOfWins + 1;
        } else if (lost === true) {
            numOfLoses = numOfLoses + 1;
        }
        chances = 3;
        lost = false
        win = false
        winningNum = Math.floor((Math.random() *20) +1);
        results.innerText = "Guess a number between 1 and 20 to win with the correct number";
        console.log(winningNum);
    }
}

submitButton.addEventListener("click", answerResults);
restartButton.addEventListener("click", restart);
