//Computer Selects Rock, Paper, or Scissors at random.
function computerPlay() {
  const computerArray = ['Rock', 'Paper', 'Scissors'];
  const randomSelection = Math.floor(Math.random() * computerArray.length);
  document.body.innerHTML = computerArray[randomSelection];
  return randomSelection;
}

//Player inputs Rock, Paper, or Scissors. Make case insensitive.
function playerPlay() {
  const playerChoice = prompt("Choose Rock, Paper, or Scissors:");
  return capitalize (playerChoice);
}
function capitalize (string1) {
  let pullFirst = string1.substr(0,1);
  let pullRest = string1.slice(1);
  let upperFirst = pullFirst.toUpperCase();
  let lowerRest = pullRest.toLowerCase();
  return upperFirst + lowerRest;
}

//Play round. Output win or lose statement.
function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'Rock' && computerSelection == '1') {
    return 'You Lose! Paper Beats Rock';
  } else if (playerSelection == 'Paper' && computerSelection == '0') {
    return 'You Win! Paper Beats Rock';
  } else if (playerSelection == 'Rock' && computerSelection == '2') {
    return 'You Win! Rock Beats Scissors';
  } else if (playerSelection == 'Scissors' && computerSelection == '0') {
    return 'You Lose! Rock Beats Scissors';
  } else if (playerSelection == 'Paper' && computerSelection == '2') {
    return 'You Lose! Scissors Beats Paper';
  } else if (playerSelection == 'Scissors' && computerSelection == '1') {
    return 'You Win! Scissors Beats Paper';
  } else {
    return 'It\'s a draw!';
  }
}

const playerSelection = playerPlay();
const computerSelection = computerPlay();

//Play round five times.
function game() {
  for (i = 0, i < 5, i++) {
    console.log(playRound(playerSelection, computerSelection));;
  }
}