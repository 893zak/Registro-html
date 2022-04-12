const $stoneButton1 = document.querySelector(".button-stone-player1");
const $scissorsButton1 = document.querySelector(".button-scissors-player1");
const $paperButton1 = document.querySelector(".button-paper-player1");
const $field1 = document.querySelector(".field1");
/////////////////////////////////////////////////////////////////////////////
const $stoneButton2 = document.querySelector(".button-stone-player2");
const $scissorsButton2 = document.querySelector(".button-scissors-player2");
const $paperButton2 = document.querySelector(".button-paper-player2");
const $field2 = document.querySelector(".field2");

$stoneButton1.addEventListener("click", movePlayer1Stone);
$paperButton1.addEventListener("click", movePlayer1Paper);
$scissorsButton1.addEventListener("click", movePlayer1Scissors);
/////////////////////////////////////////////////////////////////////////////
$stoneButton2.addEventListener("click", movePlayer2Stone);
$paperButton2.addEventListener("click", movePlayer2Paper);
$scissorsButton2.addEventListener("click", movePlayer2Scissors);


function movePlayer1Stone() {
  $field1.innerHTML = '<img class="image" src="img/stone.png">';
   movePlayer1 = 'stone';
   verifywinner();
}

function movePlayer1Scissors() {
  $field1.innerHTML = '<img class="image" src="img/scissors.png">';
  movePlayer1 = 'scissors';
  verifywinner();
}

function movePlayer1Paper() {
  $field1.innerHTML = '<img class="image" src="img/paper.png">';
  movePlayer1 = 'paper';
  verifywinner();
}
/////////////////////////////////////////////////////////////////////////////
function movePlayer2Stone() {
  $field2.innerHTML = '<img class="image image-2" src="img/stone.png">';
  movePlayer2 = 'stone';
  verifywinner();
}

function movePlayer2Scissors() {
  $field2.innerHTML = '<img class="image image-2" src="img/scissors.png">';
  movePlayer2 = 'scissors';
  verifywinner();
}

function movePlayer2Paper() {
  $field2.innerHTML = '<img class="image image-2" src="img/paper.png">';
   movePlayer2 = 'paper';
   verifywinner();
}
/////////////////////////////////////////////////////////////////////////////

let movePlayer1 = ''
let movePlayer2 = ''

function verifywinner() {
  if(movePlayer1 == 'stone' && movePlayer2 == 'paper') {
    alert('Jogador 2 ganhou')
  } else if (movePlayer1 == 'stone' && movePlayer2 == 'scissors') {
    alert('jogador 1 ganhou')
  } else if (movePlayer1 == 'paper' && movePlayer2 == 'stone') {
    alert('jogador 1 ganhou')
  } else if (movePlayer1 == 'paper' && movePlayer2 == 'scissors') {
    alert('Jogador 2 ganhou')
  } else if (movePlayer1 == 'scissors' && movePlayer2 == 'stone') {
    alert('Jogador 2 ganhou')
  } else if (movePlayer1 == 'scissors' && movePlayer2 == 'paper') {
    alert('jogador 1 ganhou')
  } else if (movePlayer1 == 'stone' && movePlayer2 == 'stone') {
    alert('empate')
  } else if (movePlayer1 == 'paper' && movePlayer2 == 'paper') {
    alert('empate')
  } else if (movePlayer1 == 'scissors' && movePlayer2 == 'scissors') {
    alert('empate')
  }
}