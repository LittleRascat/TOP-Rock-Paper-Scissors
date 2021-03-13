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
//Play round five times.