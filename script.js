//Computer Selects Rock, Paper, or Scissors at random.
function computerPlay() {
  return computerChoice = computerArray[Math.floor(Math.random() * computerArray.length)];
}

let computerArray = ['rock', 'paper', 'scissors'];

//Play round. Output win or lose statement.
function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return 'You Win! Rock Beats Scissors';
  } else if (playerSelection == 'rock' && computerSelection == 'paper') {
    return 'You Lose! Paper Beats Rock';
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return 'You Win! Paper Beats Rock';
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    return 'You Lose! Scissors Beats Paper';
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    return 'You Win! Scissors Beats Paper';
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    return 'You Lose! Rock Beats Scissors';
  } else {
    return 'It\'s a Draw!'
  }
}

const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

//Play round five times.
function game() {
  let winCount = 0;
  
  for (i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();
    const computerSelection = computerPlay();
    const roundResult = playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    if (roundResult == 'You Win! Rock Beats Scissors' || roundResult == 'You Win! Paper Beats Rock' || roundResult == 'You Win! Scissors Beats Paper') {
      winCount += 1;
    }
  }
  if (winCount >= 3) {
    return 'Congradulations, you won the game!';
  } else {
    return 'Bad luck, you lost the game!';
  }
}