function playGame(1 || 2 playerInput){

console.log('moves:', argComputerMove, argPlayerMove);

function getMoveName(argMoveId){
    if(argMoveId == 2 || 3){
      return 'kamień';
    }

    /*
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
*/

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);

/*
if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
  playerMove = 'nożyce';
}
*/

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*
if (randomNumber == 1) {
  computerMove = 'kamień';
} else if (randomNumber == 2) {
  computerMove = 'papier';
} else if (randomNumber == 3) {
  computerMove = 'nożyce';
}

printMessage('Ruch komputera to: ' + computerMove);

printMessage('Rch gracza to: ' + playerMove);

if (
  (computerMove == 'kamień' && playerMove == 'papier') ||
  (computerMove == 'papier' && playerMove == 'nożyce') ||
  (computerMove == 'nożyce' && playerMove == 'kamień')
) {
  printMessage('Ty wygrywasz!');
} else if (computerMove == playerMove) {
  printMessage('Remis!');
} else {
  printMessage('Ty przegrywasz!');
}
*/

function argComputerMove(argPlayerMove){
    if(argPlayerMove == 2 || 3){
      return 'kamień';
    }

    function displayResult(argComputerMove, argPlayerMove){
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
      
        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
          printMessage('Ty wygrywasz!');
        } else {
          printMessage('Tym razem przegrywasz :(');
        }
      }
    }
    playGame(3);

    function buttonClicked(){
      playGame('Guzik Kamień został kliknięty');
    }
    
    let testButton = document.getElementById('Kamień');
    
    testButton.addEventListener('click', buttonClicked);

    function buttonClicked(){
      playGame('Guzik Papier został kliknięty');
    }
    
    let testButton = document.getElementById('Papier');
    
    testButton.addEventListener('click', buttonClicked);

    function buttonClicked(){
      playGame('Guzik Nożyce został kliknięty');
    }
    
    let testButton = document.getElementById('Nożyce');
    
    testButton.addEventListener('click', buttonClicked);