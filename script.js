//Computer Selects Rock, Paper, or Scissors at random.
function computerPlay() {
  const computerArray = ['Rock', 'Paper', 'Scissors'];
  const randomSelection = Math.floor(Math.random() * computerArray.length);
  document.body.innerHTML = computerArray[randomSelection];
  return randomSelection;
}

//Play round. Output win or lose statement.
function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === 'rock' && computerSelection === 1) {
    let winLose = 'Lose';
    return 'You ' + winLose + '! Paper Beats Rock';
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 0) {
    let winLose = 'Win';
    return 'You ' + winLose + '! Paper Beats Rock';
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 2) {
    let winLose = 'Win';
    return 'You ' + winLose + '! Rock Beats Scissors';
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 0) {
    let winLose = 'Lose';
    return 'You ' + winLose + '! Rock Beats Scissors';
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 2) {
    let winLose = 'Lose';
    return 'You ' + winLose + '! Scissors Beats Paper';
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 1) {
    let winLose = 'Win';
    return 'You ' + winLose + '! Scissors Beats Paper';
  } else {
    let winLose = 'draw';
    return 'It\'s a ' + winLose + '!';
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
console.log(computerPlay())

//Play round five times.
function game() {
  let winCount = 0;
  let winLose = '';
  for (i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose Rock, Paper, or Scissors:");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log(computerPlay())
    if (winLose === 'Win') {
      winCount += 1;
    }
  }
  if (winCount >= 3) {
    return 'Congradulations, you won the game!';
  } else {
    return 'Bad luck, you lost tne game!';
  }
}