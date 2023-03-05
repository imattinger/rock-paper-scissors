
const MOVES = ['ROCK', 'PAPER', 'SCISSORS'];

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    return MOVES[choice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection == computerSelection) {
        return `Both players choose ${computerSelection}. It's a tie!`
    }
    if (playerSelection == 'ROCK' && computerSelection == 'PAPER' ||
        playerSelection == 'PAPER' && computerSelection == 'SCISSORS' ||
        playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
    return `You win! ${playerSelection} beats ${computerSelection}.`
}

// For testing
const playerMove = 'rock';
const computerMove = getComputerChoice();
console.log(playRound(playerMove, computerMove));
