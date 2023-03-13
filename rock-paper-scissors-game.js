
const CHOICES = ['ROCK', 'PAPER', 'SCISSORS'];
const EMOJI = {'ROCK': '🪨', 'PAPER': '📄', 'SCISSORS': '✂️'};
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const gameHistoryDisplay = document.querySelector('#game-history');
const gameOutcomeDisplay = document.querySelector('#game-outcome');
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

// Display rounds on separate lines 
gameHistoryDisplay.setAttribute('style', 'white-space: pre;');

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
    return CHOICES[choice];
}

function playRound(playerSelection, computerSelection) {
    // If game over, do nothing
    if (playerScore >= 3 || computerScore >= 3) return;

    roundCount += 1;
    let currentRound = `Round ${roundCount}  \t${EMOJI[playerSelection]} vs. ${EMOJI[computerSelection]}\t`;
    
    if (playerSelection == computerSelection) {
        currentRound += "It's a tie.";
    }
    else if (computerSelection == 'ROCK' && playerSelection == 'PAPER' ||
        computerSelection == 'PAPER' && playerSelection == 'SCISSORS' ||
        computerSelection == 'SCISSORS' && playerSelection == 'ROCK') {
            currentRound += "Player wins."
            playerScore += 1;
    }
    else {
        currentRound += "Computer wins."
        computerScore += 1;
    }
    gameHistoryDisplay.textContent += currentRound + '\r\n';
    displayScores(playerScore, computerScore);
    if (playerScore == 3){
        gameOutcomeDisplay.textContent = "Player wins!";
    }
    if (computerScore == 3) {
        gameOutcomeDisplay.textContent = "Computer wins!";
    }
}
