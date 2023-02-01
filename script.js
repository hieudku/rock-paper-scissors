let playerWinsTally = 0;
let computerWinsTally = 0;
let draws = 0;
let playerChoice = document.querySelectorAll('button');
    playerChoice.forEach((button) => {
    button.addEventListener('click' , () => {
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
            return 'draw';
        }
            else if (playerChoice == 'rock' && computerChoice == 'scissors') {  
                document.getElementById("outCome").innerHTML = "You win this round!";
                    return 'playerWins';
            }
                else if(playerChoice == 'paper' && computerChoice == 'rock') { 
                    document.getElementById("outCome").innerHTML = "You win this round!";
                    return 'playerWins';
            }
                else if(playerChoice == 'scissors' && computerChoice == 'paper') { 
                    document.getElementById("outCome").innerHTML = "You win this round!";
                    return 'playerWins';
            }
                    else {
                        document.getElementById("outCome").innerHTML = "AI wins this round!";
                        return 'computerWins';
                    }
}
 //End of result function.
function scoreCount() { //Add scores to winner each round.
    if (outcome(playerChoice, computerChoice) == 'playerWins') {
        return ++playerWinsTally;
    }
        else if (outcome(playerChoice, computerChoice) == 'computerWins') {
            return ++computerWinsTally;
        }
            else {
                return ++draws;
            }
} //End of scores counting function.
function winnerLoser(playerWinsTally, computerWinsTally) { //Compare and decide winner after n games.
    if (playerWinsTally == 5) {
        document.getElementById("finalResult").innerHTML = "YOU WON! You have saved humanity from AI Overlords!";
        return 'You wins!'
    }
        else if (computerWinsTally == 5) {
            document.getElementById("finalResult").innerHTML = "AI WON! Can I have some fries with that?";
            return 'Computer wins!'
        }
        else if (playerWinsTally > computerWinsTally) {
            document.getElementById("finalResult").innerHTML = "You are leading! Go human!";
            return 'You are leading!'
        }
        else if(computerWinsTally > playerWinsTally) {
            document.getElementById("finalResult").innerHTML = "AI is leading! Go AI!";
            return 'Computer is leading!'
        }
            else if (playerWinsTally == computerWinsTally) {
                document.getElementById("finalResult").innerHTML = "DRAW! Might as well flip a coin..";
                return 'Draws!'
            }
}


