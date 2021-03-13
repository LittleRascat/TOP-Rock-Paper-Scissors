//Computer Selects Rock, Paper, or Scissors at random.
function computerPlay() {
  const computerArray = ['Rock', 'Paper', 'Scissors'];
  const randomSelection = Math.floor(Math.random() * computerArray.length);
  document.body.innerHTML = computerArray[randomSelection];
  return randomSelection;
}

//Play round. Output win or lose statement.
function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == 'rock' && computerSelection == '1') {
    return 'You Lose! Paper Beats Rock';
  } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == '0') {
    return 'You Win! Paper Beats Rock';
  } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == '2') {
    return 'You Win! Rock Beats Scissors';
  } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == '0') {
    return 'You Lose! Rock Beats Scissors';
  } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == '2') {
    return 'You Lose! Scissors Beats Paper';
  } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == '1') {
    return 'You Win! Scissors Beats Paper';
  } else {
    return 'It\'s a draw!';
  }
}

const playerSelection = "RoCk";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

//Play round five times.
function game() {
  for (i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose Rock, Paper, or Scissors:");
    const computerSelection = computerPlay();
    computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}