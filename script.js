//set initial values.
let playerWinsTally = 0;
let computerWinsTally = 0;
let draws = 0;
//set inital texts.
document.getElementById("playerChoiceDisplay").innerHTML = "Human";
document.getElementById("computerChoiceDisplay").innerHTML = "AI";
document.getElementById("finalResult").innerHTML = "Choose your weapon!";
//loop array for click event for both player and computer.
let playerChoice = document.querySelectorAll('button');
    playerChoice.forEach((button) => {
    button.addEventListener('click' , () => {
        document.getElementById("gameResult").style.display = "flex";
        document.getElementById("container").style.display = "flex";
        document.getElementById("outCome").style.display = "inline-block";
        let playerSelection = button.id;
            playerChoice = playerSelection;
            document.getElementById("playerChoiceDisplay").innerHTML = "You chose " + playerChoice;

        let computerSelection = getRandom()
            computerChoice = computerSelection;
            document.getElementById("computerChoiceDisplay").innerHTML = "AI chose " + computerChoice;
            outcome(playerChoice, computerChoice);
            scoreCount();
                document.getElementById("playerScore").innerHTML = "Your score: " + playerWinsTally;
            document.getElementById("computerScore").innerHTML = "AI's score: " + computerWinsTally;
            winnerLoser(playerWinsTally, computerWinsTally);
    });
});

function getRandom(arr) { //Choose random from array.
    arr = ['rock','paper','scissors'];
    return arr[Math.floor(Math.random() * arr.length)];
}
function outcome(playerChoice, computerChoice) {
        if (playerChoice == computerChoice) { 
            document.getElementById("outCome").innerHTML = "It's a draw!";
            document.getElementById("symbols").innerHTML = "=";
            return 'draw';
        }
            else if (playerChoice == 'rock' && computerChoice == 'scissors') {  
                document.getElementById("outCome").innerHTML = "You win this round!";
                document.getElementById("symbols").innerHTML = ">";
                    return 'playerWins';
            }
                else if(playerChoice == 'paper' && computerChoice == 'rock') { 
                    document.getElementById("outCome").innerHTML = "You win this round!";
                    document.getElementById("symbols").innerHTML = ">";
                    return 'playerWins';
            }
                else if(playerChoice == 'scissors' && computerChoice == 'paper') { 
                    document.getElementById("outCome").innerHTML = "You win this round!";
                    document.getElementById("symbols").innerHTML = ">";
                    return 'playerWins';
            }
                    else {
                        document.getElementById("outCome").innerHTML = "AI wins this round!";
                        document.getElementById("symbols").innerHTML = "<";
                        return 'computerWins';
                    }
}
 //End of outcome function.
function scoreCount() { //Add scores to winner each round.
    if (playerChoice, computerChoice) {
    if (outcome(playerChoice, computerChoice) == 'playerWins') {
        return playerWinsTally++;
    }
        else if (outcome(playerChoice, computerChoice) == 'computerWins') {
            return computerWinsTally++;
        }
            else {
                return draws++;
            }
        }
} //End of scores counting function.
function winnerLoser(playerWinsTally, computerWinsTally) { //Compare and decide winner after n games.
    if (playerWinsTally == 5 || computerWinsTally == 5) {
        document.getElementById("content").style.display = "none";
        document.getElementById("finalResult").style.display = "flex";
        document.getElementById("resetButton").style.display = "flex";
    if (playerWinsTally == 5) {
        document.getElementById("finalResult").innerHTML = "YOU WON! You deserve a pay rise!";
        return;
    }
        else if (computerWinsTally == 5) {
            document.getElementById("finalResult").innerHTML = "AI WON! Can I have some fries with that?";
            return;
        }
            else if (playerWinsTally == computerWinsTally == 5) {
                document.getElementById("finalResult").innerHTML = "DRAW! Might as well flip a coin..";
                return;
            }
}
}

let resetGame = document.getElementById("resetButton").addEventListener("click", () => {
    playerChoice = "Human";
    computerChoice = "AI";
    playerWinsTally = 0;
    computerWinsTally = 0;
  
    // code to update the UI and display the message to select an option
    document.getElementById("content").style.display = "flex";
    document.getElementById("resetButton").style.display = "none";
    document.getElementById("gameResult").style.display = "none";
    document.getElementById("container").style.display = "none";
    document.getElementById("outCome").style.display = "none";

    document.getElementById("finalResult").style.display = "none";
    document.getElementById("playerChoiceDisplay").innerHTML = "";
    document.getElementById("computerChoiceDisplay").innerHTML = "";
    document.getElementById("playerWins").innerHTML = "Player Wins: " + playerWinsTally;
    document.getElementById("computerWins").innerHTML = "Computer Wins: " + computerWinsTally;
  });

    
