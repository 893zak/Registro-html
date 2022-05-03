const $SwitcherBot = document.querySelector('.switcher-bot')

const $BoardItem0 = document.querySelector('.board-item-0')
const $BoardItem1 = document.querySelector('.board-item-1')
const $BoardItem2 = document.querySelector('.board-item-2')
const $BoardItem3 = document.querySelector('.board-item-3')
const $BoardItem4 = document.querySelector('.board-item-4')
const $BoardItem5 = document.querySelector('.board-item-5')
const $BoardItem6 = document.querySelector('.board-item-6')
const $BoardItem7 = document.querySelector('.board-item-7')
const $BoardItem8 = document.querySelector('.board-item-8')

const line1 = [$BoardItem0, $BoardItem1, $BoardItem2]
const line2 = [$BoardItem3, $BoardItem4, $BoardItem5]
const line3 = [$BoardItem6, $BoardItem7, $BoardItem8]

const column1 = [$BoardItem0, $BoardItem3, $BoardItem6]
const column2 = [$BoardItem1, $BoardItem4, $BoardItem7]
const column3 = [$BoardItem2, $BoardItem5, $BoardItem8]

const diagonal1 = [$BoardItem0, $BoardItem4, $BoardItem8]
const diagonal2 = [$BoardItem2, $BoardItem4, $BoardItem6]

const linesToVerify = [line1, line2, line3, column1, column2, column3, diagonal1, diagonal2]


let currentMove = 'X'
let winner = ''

function toggleMoveVar(){
    if (currentMove == 'O'){
    currentMove = 'X'
    } else {
    currentMove = 'O'
    }
}

function printMove($BoardItem){
    $BoardItem.textContent = currentMove
}

function showWinnerOnBoard(boardItemlist){
    for (const lineItem of boardItemlist){
        lineItem.classList.add('won')
    }
}

function verifyWinner(){

    for (const line of linesToVerify){
    if (line [0].textContent !='' && line [0].textContent== line[1].textContent && line[1].textContent == line[2].textContent){
        winner = currentMove
        showWinnerOnBoard(line)

        setTimeout(function(){
            lineItem.classList.remove('won')
        }, 1500)


        }

    }
}

$BoardItem0.addEventListener('click', function(){
    if ($BoardItem0.textContent != '') return
    printMove($BoardItem0)
    verifyWinner()
    toggleMoveVar()
})
$BoardItem1.addEventListener('click', function(){
    if ($BoardItem1.textContent != '') return
    printMove($BoardItem1)
    verifyWinner()
    toggleMoveVar()
})
$BoardItem2.addEventListener('click', function(){
    if ($BoardItem2.textContent != '') return
    printMove($BoardItem2)
    verifyWinner()
    toggleMoveVar()
})
$BoardItem3.addEventListener('click', function(){
    if ($BoardItem3.textContent != '') return
    printMove($BoardItem3)
    verifyWinner()
    toggleMoveVar()
})
$BoardItem4.addEventListener('click', function(){
    if ($BoardItem4.textContent != '') return
    printMove($BoardItem4)
    verifyWinner()
    toggleMoveVar()
})
$BoardItem5.addEventListener('click', function(){
    if ($BoardItem5.textContent != '') return
    printMove($BoardItem5)
    verifyWinner()
    toggleMoveVar()
})
$BoardItem6.addEventListener('click', function(){
    if ($BoardItem6.textContent != '') return
    printMove($BoardItem6)
    verifyWinner()
    toggleMoveVar()
})
$BoardItem7.addEventListener('click', function(){
    if ($BoardItem7.textContent != '') return
    printMove($BoardItem7)
    verifyWinner()
    toggleMoveVar()
})
$BoardItem8.addEventListener('click', function(){
    if ($BoardItem8.textContent != '') return
    printMove($BoardItem8)
    verifyWinner()
    toggleMoveVar()
})

$SwitcherBot.addEventListener('click', function(){
    $SwitcherBot.classList.toggle('active')
})