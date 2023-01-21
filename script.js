let playerSelection;
let computerSelection;
let arr = ['rock','paper','scissor'];
let playerWinsTally = 0;
let computerWinsTally = 0;
let draws = 0;
const n = 5;
for (let i = 1; i <= n; i++) {
    playerSelection = prompt("what is your move?");
    computerSelection = getRandom(arr);
    alert(`computer: ` + computerSelection);
    scoreCount();
}
    result();
    winnerLoser();
function getRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
function result() {
        if (playerSelection == computerSelection) { // true
            alert(`draw`);
            return 'draw';
        }
            else if (playerSelection == 'rock' && computerSelection == 'scissor') {  
                    alert(`you win this round!`);
                    return 'playerWins';
            }
                else if(playerSelection == 'paper' && computerSelection == 'rock') { 
                    alert(`you win this round!`);
                    return 'playerWins';
            }
                else if(playerSelection == 'scissor' && computerSelection == 'paper') { 
                    alert(`you win this round!`);
                    return 'playerWins';
            }
                    else {
                        alert(`computer wins this round!`);
                        return 'computerWins';
                    }
                }
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
}

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
}

            
console.log(`*player*: ` + playerSelection, `*computer*: ` + computerSelection);
console.log(`player: ` + playerWinsTally, `computer : ` + computerWinsTally);
