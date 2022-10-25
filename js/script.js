function playGame(playerInput) {
  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    }
  }

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  function displayResult(argComputerMove, argPlayerMove) {
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    if (
      (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
      (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
      (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
    ) {
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove == argPlayerMove) {
      printMessage('Remis!');
    } else {
      printMessage('Ty przegrywasz!');
    }
  }

  displayResult(computerMove, playerMove);
}

let rockButton = document.getElementById('play-rock');
rockButton.addEventListener('click', function () {
  playGame(1);
});

let paperButton = document.getElementById('play-paper');
paperButton.addEventListener('click', function () {
  playGame(1);
});

let scissorsButton = document.getElementById('play-scissors');
scissorsButton.addEventListener('click', function () {
  playGame(1);
});
