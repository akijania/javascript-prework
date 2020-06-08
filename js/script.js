let X = 0;
let Y = 0;

function playGame(playerInput) {

    clearMessages();

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        }

        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }

    function looseMove(playerMove) {
        if (playerMove == 'kamień') {
            return 'nożyce';
        } else if (playerMove == 'papier') {
            return 'kamień';
        } else if (playerMove == 'nożyce') {
            return 'papier';
        }
    }
    // Player move

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    // Computer move

    let randomNumber = Math.floor(Math.random() * 8 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    function getComputerMove() {
        if (randomNumber <= 3) {
            return getMoveName(randomNumber);
        } else {
            return looseMove(playerMove);
        }
    }

    let computerMove = getComputerMove();

    printMessage('Mój ruch to: ' + computerMove);



    // Game score

    function displayResult(argComputerMove, argPlayerMove) {
        console.log('moves:', argComputerMove, argPlayerMove);
        if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) {
            X++;
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == argPlayerMove) {
            printMessage('Jest remis!');
        } else if ((argComputerMove == 'kamień' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'kamień')) {
            Y++;
            printMessage('Ja wygrywam!');
        } else {
            printMessage('Nieznany ruch!');
        }
    }
    displayResult(computerMove, playerMove);
    document.getElementById('result').innerHTML = 'Wynik gry to: ' + X + ' : ' + Y;
}

document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
});