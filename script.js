let playerSelection;
let computerSelection;
let arr = ['rock','paper','scissor'];
let playerWinsTally = 0;
let computerWinsTally = 0;
let draws = 0;
const n = 5;
for (let i = 1; i <= n; i++) { //For loop 5 times.
    playerSelection = prompt("what is your move?");
    computerSelection = getRandom(arr);
    alert(`computer: ` + computerSelection);
    alert(result());
    scoreCount();
    console.log(`*player*: ` + playerSelection, `*computer*: ` + computerSelection);
} //End of loop function.
    result();
    winnerLoser();
function getRandom(arr) { //Choose random from array.
        return arr[Math.floor(Math.random() * arr.length)];
    } //End of random pick function.
function result() {
        if (playerSelection == computerSelection) { 
            return 'draw';
        }
            else if (playerSelection == 'rock' && computerSelection == 'scissor') {  
                    return 'playerWins';
            }
                else if(playerSelection == 'paper' && computerSelection == 'rock') { 
                    return 'playerWins';
            }
                else if(playerSelection == 'scissor' && computerSelection == 'paper') { 
                    return 'playerWins';
            }
                    else {
                        return 'computerWins';
                    }
} //End of result function.
function scoreCount() {
    if (result() == 'playerWins') {
        return ++playerWinsTally;
    }
        else if (result() == 'computerWins') {
            return ++computerWinsTally;
        }
            else {
                return ++draws;
            }
} //End of scores counting function.

function winnerLoser() {
    if (playerWinsTally > computerWinsTally) {
        alert(`Player wins!`);
    }
        else if (computerWinsTally > playerWinsTally) {
            alert(`Computer wins!`);
        }
            else {
                alert(`Draw!`);
            }
            console.log(`player: ` + playerWinsTally, `computer : ` + computerWinsTally);
} //End of winner decide function.

            

