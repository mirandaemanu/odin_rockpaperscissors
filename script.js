const gameButton = document.querySelectorAll('.game-option');
const playerDisplay = document.querySelector('#playerDisplay');
const computerDisplay = document.querySelector('#computerDisplay');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const resultInfo = document.querySelector('#resultInfo')
let playerScoreCounter = 0;
let computerScoreCounter = 0;

const gameOptions = ['rock', 'paper', 'scissors'];

const computerRandomOption = () => {
    let computerOption = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return computerOption;
}

const compareOptions = (playerOption, computerOption) => {
    if(!(gameOptions.includes(playerOption)) || !(gameOptions.includes(computerOption))) { return; }
    // Tie = 0
    if(playerOption == computerOption) { return 0; }

    // Player 1 win = 1
    // Computer win = -1;
    if(playerOption == 'rock') {
        if(computerOption == 'scissors') { return 1; }
        if(computerOption == 'paper') { return -1; }
    } 

    if(playerOption == 'paper') {
        if(computerOption == 'rock') { return 1; }
        if(computerOption == 'scissors') { return -1 }

    if(playerOption == 'scissors') {
        if(computerOption == 'paper') { return 1; }
        if(computerOption == 'rock') { return -1 }
    }
}
}

const getEmogiForMove = (move) => {
    if(move == 'rock') { return '✊' }
    if(move == 'paper') { return '✋'; }
    if(move == 'scissors') { return '✌' }
}

const playGame = (playerOpt) => {
    let computerOption = computerRandomOption();
    let playerOption = playerOpt;

    playerDisplay.textContent = getEmogiForMove(playerOption);
    computerDisplay.textContent = getEmogiForMove(computerOption);

    let gameResult = compareOptions(playerOption, computerOption);

    if(gameResult == 0) {
        resultInfo.textContent = `${playerOption} ties with ${playerOption}`;
    }

    if(gameResult == 1) {
        resultInfo.textContent = `You won! ${playerOption} beats ${computerOption}`;
        playerScoreCounter++;
    }

    if(gameResult == -1) {
        resultInfo.textContent = `You lost! ${computerOption} beats ${playerOption} 🤖`;
        computerScoreCounter++;
    }

    playerScore.textContent = playerScoreCounter;
    computerScore.textContent = computerScoreCounter;
}

document.querySelector('#rock').addEventListener('click', () => playGame('rock'));
document.querySelector('#paper').addEventListener('click', () => playGame('paper'));
document.querySelector('#scissors').addEventListener('click', () => playGame('scissors'));
