let playerWinsTally = 0;
let computerWinsTally = 0;
let draws = 0;
let playerChoice = document.querySelectorAll('button');
    playerChoice.forEach((button) => {
    button.addEventListener('click' , () => {
        let playerSelection = button.id;
        playerChoice = playerSelection;
        console.log(`Player's turn: ` + playerChoice);
        
        let computerSelection = getRandom()
        computerChoice = computerSelection;
        console.log(`Computer's turn: ` + computerChoice);

        outcome(playerChoice, computerChoice);
        scoreCount();
        console.log(`player: ` + playerWinsTally)
        console.log(`computer: ` + computerWinsTally)
        winnerLoser(playerWinsTally, computerWinsTally);
    });
});

function getRandom(arr) { //Choose random from array.
    arr = ['rock','paper','scissor'];
    return arr[Math.floor(Math.random() * arr.length)];
}
function outcome(playerChoice, computerChoice) {
        if (playerChoice == computerChoice) { 
            console.log('Draw!');
            return 'draw';
        }
            else if (playerChoice == 'rock' && computerChoice == 'scissor') {  
                console.log('Player wins this round!');
                    return 'playerWins';
            }
                else if(playerChoice == 'paper' && computerChoice == 'rock') { 
                    console.log('Player wins this round!');
                    return 'playerWins';
            }
                else if(playerChoice == 'scissor' && computerChoice == 'paper') { 
                    console.log('Player wins this round!');
                    return 'playerWins';
            }
                    else {
                        console.log('Computer wins this round!')
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
        console.log("You wins!")
        return 'You wins!'
    }
        else if (computerWinsTally == 5) {
            console.log("Computer wins!")
            return 'Computer wins!'
        }
        else if (playerWinsTally > computerWinsTally) {
            console.log("You are leading!")
            return 'You are winning!'
        }
        else if(computerWinsTally > playerWinsTally) {
            console.log("Computer is leading!")
            return 'Computer is leading!'
        }
            else if (playerWinsTally == computerWinsTally) {
                console.log("Draws!")
                return 'Draws!'
            }
}


