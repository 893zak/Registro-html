var $stoneButton1 = document.querySelector(".button-stone-player1");
var $scissorsButton1 = document.querySelector(".button-scissors-player1");
var $paperButton1 = document.querySelector(".button-paper-player1");
var $field1 = document.querySelector(".field1");
/////////////////////////////////////////////////////////////////////////////
var $stoneButton2 = document.querySelector(".button-stone-player2");
var $scissorsButton2 = document.querySelector(".button-scissors-player2");
var $paperButton2 = document.querySelector(".button-paper-player2");
var $field2 = document.querySelector(".field2");

$stoneButton1.addEventListener("click", movePlayer1Stone);
$paperButton1.addEventListener("click", movePlayer1Paper);
$scissorsButton1.addEventListener("click", movePlayer1Scissors);
/////////////////////////////////////////////////////////////////////////////
$stoneButton2.addEventListener("click", movePlayer2Stone);
$paperButton2.addEventListener("click", movePlayer2Paper);
$scissorsButton2.addEventListener("click", movePlayer2Scissors);


function movePlayer1Stone() {
  $field1.innerHTML = '<img class="image" src="img/stone.png">';
}

function movePlayer1Scissors() {
  $field1.innerHTML = '<img class="image" src="img/scissors.png">';
}

function movePlayer1Paper() {
  $field1.innerHTML = '<img class="image" src="img/paper.png">';
}
/////////////////////////////////////////////////////////////////////////////
function movePlayer2Stone() {
  $field2.innerHTML = '<img class="image image-2" src="img/stone.png">';
}

function movePlayer2Scissors() {
  $field2.innerHTML = '<img class="image image-2" src="img/scissors.png">';
}

function movePlayer2Paper() {
  $field2.innerHTML = '<img class="image image-2" src="img/paper.png">';
}