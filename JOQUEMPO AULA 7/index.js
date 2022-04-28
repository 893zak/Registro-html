const $stoneButton1 = document.querySelector(".button-stone-player1");
const $stoneButton2 = document.querySelector(".button-stone-player2");
const $paperButton1 = document.querySelector(".button-paper-player1");
const $paperButton2 = document.querySelector(".button-paper-player2");
const $scissorsButton1 = document.querySelector(".button-scissors-player1");
const $scissorsButton2 = document.querySelector(".button-scissors-player2");

const $winner = document.querySelector(".winner-title");

const $field1 = document.querySelector(".field1");
const $field2 = document.querySelector(".field2");

const $scorePlayer1 = document.querySelector(".score-player1");
const $scorePlayer2 = document.querySelector(".score-player2");

const $resetButton = document.querySelector(".reset-button");
const $startButton = document.querySelector(".start-button");

$stoneButton1.addEventListener("click", movePlayer1Stone);
$paperButton1.addEventListener("click", movePlayer1Paper);
$scissorsButton1.addEventListener("click", movePlayer1Scissors);
/////////////////////////////////////////////////////////////////////////////
$stoneButton2.addEventListener("click", movePlayer2Stone);
$paperButton2.addEventListener("click", movePlayer2Paper);
$scissorsButton2.addEventListener("click", movePlayer2Scissors);


function movePlayer1Stone() {
  move('stone', 1);
}

function movePlayer1Scissors() {
  move('scissors', 1);
}

function movePlayer1Paper() {
  move('paper', 1);
}
/////////////////////////////////////////////////////////////////////////////
function movePlayer2Stone() {
  move('stone', 2);
}

function movePlayer2Scissors() {
  move('scissors', 2);
}

function movePlayer2Paper() {
  move('paper', 2);
}

function printScoreboard() {
  $scorePlayer1.innerHTML = ScorePlayer1;
  $scorePlayer2.innerHTML = ScorePlayer2;
}

function addPoint(winnerNumber){
  if(winnerNumber == 1) {
    $scorePlayer1 = ScorePlayer1 + 1
  } else if (winnerNumber == 2) {
    $scorePlayer2 = ScorePlayer2 + 1
  }
}

function resetScoreboard() {
  ScorePlayer1 = 0;
  ScorePlayer2 = 0;
}
/////////////////////////////////////////////////////////////////////////////

let movePlayer1 = ''
let movePlayer2 = ''
let gameResult = null
let ScorePlayer1 = 0
let ScorePlayer2 = 0
let gamestarted = false;

function verifywinner() {
  if(movePlayer1 == 'stone' && movePlayer2 == 'paper') { 
    gameResult = 2

  } else if (movePlayer1 == 'stone' && movePlayer2 == 'scissors') {
    gameResult = 1

  } else if (movePlayer1 == 'paper' && movePlayer2 == 'stone') {
    gameResult = 1

  } else if (movePlayer1 == 'paper' && movePlayer2 == 'scissors') {
    gameResult = 2

  } else if (movePlayer1 == 'scissors' && movePlayer2 == 'stone') {
    gameResult = 2

  } else if (movePlayer1 == 'scissors' && movePlayer2 == 'paper') {
    gameResult = 1

  } else if (movePlayer1 == 'stone' && movePlayer2 == 'stone') {
    gameResult = 0

  } else if (movePlayer1 == 'paper' && movePlayer2 == 'paper') {
    gameResult = 0

  } else if (movePlayer1 == 'scissors' && movePlayer2 == 'scissors') {
    gameResult = 0
  }
}

function printGameResult() {
  if(gameResult == 1) {
    $winner.innerHTML = 'Jogador 1 ganhou'
  } else if (gameResult == 2) {
    $winner.innerHTML = 'Jogador 2 ganhou'
  } else if (gameResult == 0) {
    $winner.innerHTML = 'Empate'
  }

}

function ResetBattlefield() {
  $field1.innerHTML = '';
  $field2.innerHTML = '';
}
function resetMoveVariables() {
  movePlayer1 = ''
  movePlayer2 = ''
}

function move(moveName, fieldnumber) {
  if(fieldnumber == 1) {
    $field1.innerHTML = '<img class="image" src="img/' + moveName + '.png">';
    movePlayer1 = moveName

  } else if (fieldnumber == 2) {
    $field2.innerHTML = '<img class="image image-2" src="img/' + moveName + '.png">';
    movePlayer2 = moveName
  }

  verifywinner();
  printGameResult();
  
  if (gameResult != null)
  addPoint(gameResult);
  setTimeout(ResetBattlefield, 2000);
  setTimeout(resetMoveVariables, 2000);
  gameResult = null;

}

$resetButton.addEventListener("click", function(){
  resetMoveVariables()
  ResetBattlefield()
  gameResult = null;
  resetScoreboard()
  $winner.innerHTML = 'Resultado';
})

$startButton.addEventListener("click", function(){
  if (gamestart == false) {
    gamestart = true;
  } else {
    gamestart = false;
  }
})