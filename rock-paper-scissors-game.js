
const MOVES = ['ROCK', 'PAPER', 'SCISSORS'];
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');

rockButton.addEventListener('click', () => {
    playRound('ROCK', getComputerChoice());
});

paperButton.addEventListener('click', () => {
    playRound('PAPER', getComputerChoice());
});

scissorsButton.addEventListener('click', () => {
    playRound('SCISSORS', getComputerChoice());
});

function displayScores(playerScore, computerScore) {
    playerScoreDisplay.textContent = "Player: " + playerScore;
    computerScoreDisplay.textContent = "Computer: " + computerScore;
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    return MOVES[choice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection == computerSelection) {
        console.log(`Both players choose ${computerSelection}. It's a tie!`);
        return 0;
    }
    if (playerSelection == 'ROCK' && computerSelection == 'PAPER' ||
        playerSelection == 'PAPER' && computerSelection == 'SCISSORS' ||
        playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
            return -1;
    }
    console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    return 1;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 3 && computerScore < 3) {
        let playerSelection = prompt("Choose rock, paper, or scissors.");
        playerSelection = playerSelection.toUpperCase();
        if (playerSelection != 'ROCK' && playerSelection != 'PAPER' &&
        playerSelection != 'PAPER') {
            console.log("Invalid input. You get to use rock.")
            playerSelection = 'ROCK';
        }
        computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result < 0) {
            computerScore += 1;
        }
        if (result > 0) {
            playerScore += 1;
        }
        console.log(`Player score: ${playerScore}\tComputer score: ${computerScore}`);
    }
    if (playerScore == 3) {
        alert("You win!")
    }
    else {
        alert("Computer wins!")
    }
}

displayScores(3, 5);

// game();