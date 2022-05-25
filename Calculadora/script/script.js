const $CalculatorDisplay = document.querySelector('.calculator__display-input');
const $CalculatorOperators = document.querySelectorAll('.CalculatorOperator');
const $DisplayInput = document.querySelector('.calculator__display-input');
const $DisplayResult = document.querySelector('.calculator__display-result');
const $ButtonNumbers = document.querySelectorAll('.ButtonsNumbers');
const $ButtonEquual = document.querySelector('.ButtonEquual');
const $Clear = document.querySelector('.Clear');
const $Dividenumber = document.querySelector('.button-divide');

let calculate = "";
let CCVTN = 0;

$CalculatorOperators.forEach(function($Button) {
    $Button.addEventListener("click", function() {
        $CalculatorDisplay.value =$CalculatorDisplay.value + $Button.textContent;
        calculate = calculate + $Button.textContent;
    })
})

$ButtonNumbers.forEach(function($Button) {
    $Button.addEventListener("click", function() {
        $CalculatorDisplay.value =$CalculatorDisplay.value + $Button.textContent;
        calculate = calculate + $Button.textContent;
    })
})

$Clear.addEventListener('click', clearDisplay);
function clearDisplay() {
    $DisplayInput.value = '';
    $DisplayResult.innerHTML = '';
    calculate = '';
}

$ButtonEquual.addEventListener('click', function() {
    $DisplayResult.innerHTML = eval($DisplayInput.value);
})
