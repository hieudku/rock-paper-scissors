function playerSelection() {
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click' , () => {
        let playerChoice = button.id;
        console.log(`Player's turn: ` + playerChoice);
        computerSelection();
        return playerChoice;
    });
});
}
function computerSelection() {
    let arr = ['rock','paper','scissor'];
    let computerChoice = arr[Math.floor(Math.random() * arr.length)];
    console.log(`Computer's turn: ` + computerChoice);
    return computerChoice;
}
let playerWinsTally = 0;
let computerWinsTally = 0;
let draws = 0;
function playRound() { //Outcome of each turn.
        if (playerSelection() == computerChoice) { 
            return 'draw';
        }
            else if (playerSelection() == 'rock' && computerChoice == 'scissor') {  
                    return 'playerWins';
            }
                else if(playerSelection() == 'paper' && computerChoice == 'rock') { 
                    return 'playerWins';
            }
                else if(playerSelection() == 'scissor' && computerChoice == 'paper') { 
                    return 'playerWins';
            }
                    else {
                        return 'computerWins';
                    }
} //End of result function.
function scoreCount() { //Add scores to winner each round.
    if (playRound() == 'playerWins') {
        return ++playerWinsTally;
    }
        else if (playRound() == 'computerWins') {
            return ++computerWinsTally;
        }
            else {
                return ++draws;
            }
} //End of scores counting function.


function winnerLoser() { //Compare and decide winner after n games.
    if (playerWinsTally > computerWinsTally) {
        alert(`Player wins!`);
    }
        else if (computerWinsTally > playerWinsTally) {
            alert(`Computer wins!`);
        }
            else {
                alert(`Draw!`);
            }
}
playerSelection();

