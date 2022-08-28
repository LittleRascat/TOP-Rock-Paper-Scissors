//Computer Selects Rock, Paper, or Scissors at random.
function computerPlay() {
  return computerChoice = computerArray[Math.floor(Math.random() * computerArray.length)];
}

let computerArray = ['rock', 'paper', 'scissors'];
let playerSelection = 'rock';
let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;
let result

//Play round. Output win or lose statement.
function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'rock' && computerSelection == 'scissors') {
    result = 'You Win! Rock Beats Scissors';
    playerScore += 1;
    computerScore += 0;
    return result;
  } else if (playerSelection == 'rock' && computerSelection == 'paper') {
    result = 'You Lose! Paper Beats Rock';
    playerScore += 0;
    computerScore += 1;
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    result = 'You Win! Paper Beats Rock';
    playerScore += 1;
    computerScore += 0;
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    result = 'You Lose! Scissors Beats Paper';
    playerScore += 0;
    computerScore += 1;
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    result = 'You Win! Scissors Beats Paper';
    playerScore += 1;
    computerScore += 0;
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    result = 'You Lose! Rock Beats Scissors';
    playerScore += 0;
    computerScore += 1;
  } else {
    result = 'It\'s a Draw!'
  }
}

function gameOver() {
  if (playerScore === 5) {
    result = 'Game Over! You Win!';
  } else if (computerScore === 5) {
    result = 'Game Over! You Lose!';
  }
}

function gameReset() {
  if (playerScore === 5 || computerScore === 5) {
    playerScore = 0;
    computerScore = 0;
  }
}

const rock = document.querySelector('#rock');
rock.onclick = () => {
  playerSelection = 'rock';
  computerSelection = computerPlay();
  gameReset();
  playRound(playerSelection, computerSelection);
  gameOver();
  let resultContent = document.querySelector('.round-result');
  resultContent.textContent = result;
  let playerContent = document.querySelector('.player-score-number');
  playerContent.textContent = playerScore;
  let computerContent = document.querySelector('.computer-score-number');
  computerContent.textContent = computerScore;
}

const paper = document.querySelector('#paper');
paper.onclick = () => {
  playerSelection = 'paper';
  computerSelection = computerPlay();
  gameReset();
  playRound(playerSelection, computerSelection);
  gameOver();
  let resultContent = document.querySelector('.round-result');
  resultContent.textContent = result;
  let playerContent = document.querySelector('.player-score-number');
  playerContent.textContent = playerScore;
  let computerContent = document.querySelector('.computer-score-number');
  computerContent.textContent = computerScore;
}

const scissors = document.querySelector('#scissors');
scissors.onclick = () => {
  playerSelection = 'scissors';
  computerSelection = computerPlay();
  gameReset();
  playRound(playerSelection, computerSelection);
  gameOver();
  let resultContent = document.querySelector('.round-result');
  resultContent.textContent = result;
  let playerContent = document.querySelector('.player-score-number');
  playerContent.textContent = playerScore;
  let computerContent = document.querySelector('.computer-score-number');
  computerContent.textContent = computerScore;
}