{
  const playGame = function (playerInput) {
    const getMoveName = function (argMoveId) {
      if (argMoveId == 1) {
        return 'kamień';
      } else if (argMoveId == 2) {
        return 'papier';
      } else if (argMoveId == 3) {
        return 'nożyce';
      }
    };

    console.log('Gracz wpisał: ' + playerInput);

    const playerMove = getMoveName(playerInput);

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);

    const displayResult = function (argComputerMove, argPlayerMove) {
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
    };

    displayResult(computerMove, playerMove);
  };

  const rockButton = document.getElementById('play-rock');
  rockButton.addEventListener('click', function () {
    playGame(1);
  });

  const paperButton = document.getElementById('play-paper');
  paperButton.addEventListener('click', function () {
    playGame(1);
  });

  const scissorsButton = document.getElementById('play-scissors');
  scissorsButton.addEventListener('click', function () {
    playGame(1);
  });
}
