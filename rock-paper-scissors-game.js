
const MOVES = ['ROCK', 'PAPER', 'SCISSORS'];

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    return MOVES[choice];
}


